#!/usr/bin/env node
'use strict';

let cp = require('child_process'),

    kill = require('tree-kill'),

    enumFeaturePaths = require('./enumFeaturePaths'),

    eventDateTimeString = require('../reporter/eventDateTimeString'),
    timeTakenSince = require('../reporter/timeTakenSince'),

    masterStartTime = Date.now(),

    silentJobTimeout = null,

    env = null,
    appUrl = null,

    branch = null,
    commit = null,

    jobCount = null,

    tags = null,
    negatedTags = null,

    startPrefix;

{
    require('../helpers');

    global.systemConfig = {
        env: { name: 'qa' },

        tags: []
    };

    systemConfig.tags.negated = [];
}

{
    let rawArgs = process.argv.slice(2);

    while(rawArgs.length > 0) {
        let rawArg = rawArgs.shift();

        if(rawArg === '-j' || rawArg === '--jobs') {
            if(jobCount !== null) {
                console.error('Multiple -j / --jobs.');
                process.exit(1);
            }

            let c = rawArgs.shift();

            if(!/^[0-9]+$/.exec(c)) {
                console.error(c + ' is not a number.');
                process.exit(1);
            }

            jobCount = parseInt(c);

            continue;
        }

        if(rawArg === '--tags') {
            if(tags !== null) {
                console.error('Multiple --tags.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                tags = '';
                continue;
            }

            tags = rawArgs.shift();

            continue;
        }

        if(rawArg === '--@tags') {
            if(negatedTags !== null) {
                console.error('Multiple --@tags.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                negatedTags = '';
                continue;
            }

            negatedTags = rawArgs.shift();

            continue;
        }

        if(rawArg === '--silentJobTimeout') {
            if(silentJobTimeout !== null) {
                console.error('Multiple --silentJobTimeout.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                silentJobTimeout = '';
                continue;
            }

            silentJobTimeout = parseInt(rawArgs.shift());

            continue;
        }

        if(rawArg === '--env') {
            if(negatedTags !== null) {
                console.error('Multiple --env.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                env = '';
                continue;
            }

            env = rawArgs.shift();

            continue;
        }

        if(rawArg === '--app-url') {
            if(negatedTags !== null) {
                console.error('Multiple --app-url.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                appUrl = '';
                continue;
            }

            appUrl = rawArgs.shift();

            continue;
        }

        if(rawArg === '--branch') {
            if(negatedTags !== null) {
                console.error('Multiple --branch.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                branch = '';
                continue;
            }

            branch = rawArgs.shift();

            continue;
        }

        if(rawArg === '--commit') {
            if(negatedTags !== null) {
                console.error('Multiple --commit.');
                process.exit(1);
            }

            if(rawArgs[0].startsWith('--')) {
                commit = '';
                continue;
            }

            commit = rawArgs.shift();

            continue;
        }

        startPrefix = [rawArg, ...rawArgs];

        break;
    }

    if(silentJobTimeout === null || silentJobTimeout === '') {
        silentJobTimeout = 11 * 60 * 1000;
    }

    env = env || '';
    appUrl = appUrl || '';

    branch = branch || 'unknown';
    commit = commit || 'unknown';

    jobCount = jobCount || 1;
    tags = tags || '';
    negatedTags = negatedTags || '';

    if(!startPrefix) {
        console.error('Missing process start prefix.');
        process.exit(1);
    }
}

{
    let errorsFlag = false,

        activeJobs = 0,

        nextStmId = 1;

    function log (i) {
        let args = [...arguments].slice(1);

        console.log(i + ': [(+)]', ...args);
    }

    function exit () {
        log(0, 'All done', eventDateTimeString());

        process.exit(errorsFlag? 1 : 0);
    }

    function startNext () {
        if(paths.length === 0) {
            if(activeJobs === 0) {
                exit();
            }

            return;
        }

        ++activeJobs;

        let i = nextStmId++,
            fPath = paths.shift(),

            proc,
            outbuf = '',
            errbuf = '',

            processStartTime = Date.now(),
            lastLogTime = Date.now(),

            nextSignal = 'SIGTERM';

        log(i, 'Starting process', eventDateTimeString());

        proc = cp.spawn(startPrefix[0], startPrefix.slice(1).concat([
            '--stream', i,
            '--env', env,
            '--app-url', appUrl,
            '--branch', branch,
            '--commit', commit,
            '--tags', tags,
            '--@tags', negatedTags,
            '--feat', fPath
        ]));

        let lnRe = /^.*\n/,
            lnReRes;

        proc.stdout.on('data', (data) => {
            outbuf += data;

            while(lnReRes = lnRe.exec(outbuf)) {
                let l = lnReRes[0];

                process.stdout.write(i + ': ' + l);
                outbuf = outbuf.slice(l.length);

                lastLogTime = Date.now();
            }
        });

        proc.stderr.on('data', (data) => {
            errbuf += data;

            while(lnReRes = lnRe.exec(errbuf)) {
                process.stderr.write(i + ': ' + lnReRes[0]);
                errbuf = errbuf.slice(lnReRes[0].length);

                lastLogTime = Date.now();
            }
        });

        let silentJobCheckInterval;

        if(silentJobTimeout) {
            silentJobCheckInterval = setInterval(() => {
                if(Date.now() - lastLogTime > silentJobTimeout) {
                    console.log(
                        i + ': Process silent for too long - killing with',
                        nextSignal
                    );

                    kill(proc.pid, nextSignal, (err) => {
                        if(!err) {
                            return;
                        }

                        console.error('Could not kill process tree');
                    });

                    lastLogTime = Date.now();

                    nextSignal = 'SIGKILL';
                }
            }, 5000);
        }

        proc.on('error', (err) => {
            console.error(err);
        });

        proc.on('close', (code) => {
            if(silentJobCheckInterval) {
                clearInterval(silentJobCheckInterval);
            }

            log(
                i, 'Process finished', eventDateTimeString(),
                '(took', timeTakenSince(processStartTime) + ')'
            );

            --activeJobs;

            if(code !== 0) {
                errorsFlag = true;
            }

            log(
                0, 'Total time taken so far:',
                timeTakenSince(masterStartTime)
            );

            startNext();
        });
    }

    let tagArrays = [tags, negatedTags].map((str) => {
        if(!str) {
            return '';
        }

        return str.split(',');
    });

    let paths = enumFeaturePaths(...tagArrays);

    log(
        0, 'Target environment is', env || 'unknown',
        '(' + (appUrl || 'unknown') + ')'
    );

    log(0, 'Test code branch is', branch, '(' + commit + ')');
    log(0, 'Host time zone is', moment().format('Z'));

    log(0, 'Silent job timeout is', (silentJobTimeout / 1000) + 's');

    log(
        0, 'Starting', paths.length, 'feature processes with',
        jobCount, 'parallel jobs', eventDateTimeString()
    );

    log(0, 'Requested tags:', tags || 'all');
    log(0, 'Negated tags:', negatedTags || 'none');

    for(let i = 0; i < jobCount; ++i) {
        startNext();
    }
}

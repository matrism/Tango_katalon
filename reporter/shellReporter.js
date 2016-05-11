'use strict';

let fs = require('fs'),

    takeHtmlSnapshot = require('./takeHtmlSnapshot'),

    eventDateTimeString = require('./eventDateTimeString'),
    timeTakenSince = require('./timeTakenSince'),

    indent = 0,
    latestStepNum = 0;

function log() {
    let indentStr = new Array(indent + 1).join('    ');
    console.log(indentStr + '[(+)]', ...arguments);
};

exports.jasmineStarted = (info) => {
    afterEach(() => {
        let currentStepNum = ++latestStepNum;

        browser.getCurrentUrl().then((url) => {
            log('Browser URL:', url);
        });

        retryPromise(() => {
            return browser.takeScreenshot().then((png) => {
                let fName = systemConfig.streamId + '_' + currentStepNum + '.png',
                    fPath = systemConfig.htmlReportPath + '/' + fName;

                fs.writeFileSync(fPath, new Buffer(png, 'base64'));

                log('PNG saved');
            });
        }, 3, 'Screenshot taking for report').then(null, (error) => {
            console.error('Non-critical errors ignored:', error.message);
        });

        return takeHtmlSnapshot().then((html) => {
            let fName = systemConfig.streamId + '_' + currentStepNum + '.html',
                fPath = systemConfig.htmlReportPath + '/' + fName;

            fs.writeFileSync(fPath, html);

            log('HTML saved');
        });
    });

    log('Testing started with', info.totalSpecsDefined, 'steps to run');
};

let suiteStack = [],

    iNextFeature = 0,
    iNextScenario = 0;

exports.suiteStarted = (suite) => {
    suiteStack.push(suite);

    suite.startTime = Date.now();

    let prefix = {
        1: 'Feature',
        2: 'Scenario'
    }[suiteStack.length] || 'Block';

    suite.type = prefix.toLowerCase();

    log(prefix + ':', suite.description);

    switch(suite.type) {
        case 'feature':
            suite.obj = featureList[iNextFeature++];
            break;

        case 'scenario':
            suite.obj = scenarioList[iNextScenario++];
            break;
    }

    if(suite.type !== 'block') {
        let obj = suite.obj,
            tags = obj.commonFeatureTags || obj.tags || [];

        if(tags.length === 0) {
            tags = ['none'];
        }

        log('Tags:', tags.join(','));
    }

    ++indent;
};

exports.specStarted = (spec) => {
    spec.stepNum = latestStepNum;

    spec.startTime = Date.now();

    log('Step:', spec.description);

    ++indent;
};

exports.specDone = (spec) => {
    let failures = spec.failedExpectations;

    failures.forEach((failure) => {
        console.log(failure.message);
        console.log(failure.stack);
    });

    --indent;

    log(
        'End step:', spec.status, eventDateTimeString(),
        '(took', timeTakenSince(spec.startTime) + ')'
    );

    if(failures.length > 0) {
        let criticalStep = suiteStack.some((suite) => {
            return suite.obj && suite.obj.enableCriticalSteps;
        });

        if(criticalStep) {
            log('Critical step failure - stop');
            process.exit(1);
        }
    }
};

exports.suiteDone = (suite) => {
    suite.failedExpectations.forEach((failure) => {
        console.log(failure.message);
        console.log(failure.stack);
    });

    --indent;

    log(
        'End ' + suite.type + ':', suite.status,
        eventDateTimeString(), '(took',
        timeTakenSince(suite.startTime) + ')'
    );

    suiteStack.pop();
};

exports.jasmineDone = () => {
    log('Testing finished');
};

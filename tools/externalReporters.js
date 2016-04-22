'use strict';

let callIfSet = require('../helpers/callIfSet'),

    readLines = require('../helpers/readLines'),

    reporterNames = process.argv.slice(2),

    reporters = reporterNames.map((name) => {
        return require('../reporter/' + name);
    }),

    LogParser = require('../helpers/logParser'),

    parser;

parser = new LogParser({
    all(ev, stmId) {
        let args = [...arguments].slice(2);

        reporters.forEach((reporter) => {
            callIfSet(reporter, 'all', ev, stmId, ...args);
            callIfSet(reporter, ev, stmId, ...args);
        });
    }
});

readLines(process.stdin, (ln) => parser.parseLine(ln));

'use strict';

let fs = require('fs');

let lines = fs.readFileSync('/dev/stdin', { encoding: 'utf8' });

let LogParser = require('./logParser');

let logParser = new LogParser({
    all(ev, stmId) {
        let args = [...arguments];

        if(ev !== 'log') {
            args = args.slice(0, -1);
        }

        console.log(...args);
    }
});

lines.split('\n').forEach((l) => {
    logParser.parseLine(l);
});

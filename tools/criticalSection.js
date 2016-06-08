'use strict';

let setUp = false;

exports.isSetUp = () => setUp;

exports.nesting = 0;

exports.reporter = {
    jasmineStarted() {
        setUp = true;
    },

    specDone(spec) {
        if(exports.nesting === 0 || spec.failedExpectations.length === 0) {
            return;
        }

        console.error('Failure inside critical section - stop');
        process.exit(1);
    }
};

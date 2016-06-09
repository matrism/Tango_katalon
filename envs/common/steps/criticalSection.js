'use strict';

let criticalSection = require('../../../tools/criticalSection');

steps.criticalSection = exports;

exports.wrap = fn => {
    describe('Critical section', () => {
        it('Begin critical section', () => {
            if(!criticalSection.isSetUp()) {
                console.error(
                    'Refusing to enter critical section with ' +
                    'critical section reporter unloaded - stop'
                );

                process.exit(1);
            }

            ++criticalSection.nesting;
        });

        fn();

        it('End critical section', () => {
            if(--criticalSection.nesting < 0) {
                criticalSection.nesting = 0;
            }
        });
    });
};

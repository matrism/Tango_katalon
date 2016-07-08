'use strict';

module.exports = (fn) => {
    return () => {
        steps.criticalSection.wrap(() => {
            fn();
        });
    };
};

'use strict';

module.exports = function(variableName) {
    var fn = function() {
        let val = hash.testVariables[variableName];
        console.log(`Using ${variableName}: ${val}`);

        return val;
    };

    fn.testVariableFn = true;

    fn.toString = function() {
        return variableName;
    };

    return fn;
};

'use strict';

module.exports = function(variableName) {
    var fn = function() {
        return hash.testVariables[variableName];
    };

    fn.testVariableFn = true;

    fn.toString = function() {
        return variableName;
    };

    return fn;
};

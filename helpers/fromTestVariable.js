'use strict';

module.exports = function(variableName) {
    var fn = function() {
        return hash.testVariables[variableName];
    };

    fn.toString = function() {
        return variableName;
    };

    return fn;
};

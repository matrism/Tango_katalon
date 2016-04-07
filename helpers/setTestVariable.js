'use strict';

module.exports = function (varName, value) {
    console.log(`Setting ${varName}: ${value}`);
    hash.testVariables[varName] = value;
};

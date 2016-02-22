'use strict';

var camelCase = require('change-case').camelCase;

module.exports = function (target, desc, fn) {
    var name = camelCase(desc);

    target[name] = function () {
        var fullDesc = desc,
            stepArgs = _.toArray(arguments);

        if(target.__groupDesc) {
            fullDesc = target.__groupDesc + ' > ' + fullDesc;
        }

        if(stepArgs.length !== 0) {
            fullDesc += ' (' + stepArgs.map(function (arg) {
                if(typeof arg !== 'object') {
                    return arg;
                }

                return _.map(arg, function (val, key) {
                    return key + ': ' + value;
                }).join('; ');
            }).join(', ') + ')';
        }

        it(fullDesc, function () {
            stepArgs = stepArgs.map(function (arg) {
                if(typeof arg !== 'function' || !arg.testVariableFn) {
                    return arg;
                }

                return arg();
            });

            fn.apply(null, stepArgs);
        });
    };
};

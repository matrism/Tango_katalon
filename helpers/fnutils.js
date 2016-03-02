'use strict';

var _ = require('lodash');

exports.bind = function(value, fn) {
    var args = [].slice.call(arguments, 0),
        bindings = args.slice(0, -1),
        fn = _.last(args);

    bindings.unshift(bindings[0]);

    return fn.bind.apply(fn, bindings);
};

exports.using = function(value, fn) {
    return exports.bind.apply(null, arguments)();
};

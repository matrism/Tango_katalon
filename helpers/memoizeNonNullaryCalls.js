'use strict';
var _ = require('lodash');
module.exports = function(fn) {
    var memoFn = _.memoize(fn);
    return function() {
        var whichFn = (arguments.length > 0)? memoFn : fn;
        return whichFn.apply(this, arguments);
    };
};
module.exports.makeFactoryFor = function(fn) {
    return function() {
        return module.exports(fn);
    };
};

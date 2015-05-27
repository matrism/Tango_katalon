'use strict';
var _ = require('lodash');
module.exports = function(fn) {
    var memoFn = _.memoize(fn);
    return function() {
        var whichFn;
        if(arguments.length > 0) {
            whichFn = memoFn;
        }
        else {
            whichFn = fn;
        }
        return whichFn.apply(this, arguments);
    };
};

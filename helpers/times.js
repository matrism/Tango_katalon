'use strict';

module.exports = function (howMany, fn) {
    return _.times(howMany, function (i) {
        return fn(i, howMany);
    });
};

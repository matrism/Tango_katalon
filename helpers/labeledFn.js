'use strict';

module.exports = function (label, fn) {
    fn.toString = function () {
        return label;
    };

    return fn;
};

'use strict';

module.exports = function (val) {
    return ({}).toString.call(val).match(/\s([a-z|A-Z]+)/)[1];
};

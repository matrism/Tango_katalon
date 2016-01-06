'use strict';

var enabled = false;

exports.specDone = function () {
    if(!enabled) {
        return;
    }

    return pages.base.pause();
};

exports.enable = function (val) {
    if(val === undefined) {
        val = true;
    }

    enabled = val;
};

exports.disable = function () {
    enabled = false;
};

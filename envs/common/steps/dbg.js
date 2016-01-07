'use strict';

var stepByStepReporter = require('../../../tools/stepByStepReporter');

steps.dbg = exports;

exports.stepByStepReporter = (function () {
    var r = {};

    r.enable = function () {
        it('Step-by-step reporter > Enable', function () {
            stepByStepReporter.enable();
        });
    };

    r.disable = function () {
        it('Step-by-step reporter > Disable', function () {
            stepByStepReporter.disable();
        });
    };

    return r;
})();

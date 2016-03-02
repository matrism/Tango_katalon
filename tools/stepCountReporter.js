'use strict';

exports.stepCount = 1;

exports.specDone = function (spec) {
    spec.description = (
        'S-' + this.stepCount + ': ' + spec.description
    );

    spec.fullName = (
        'S-' + this.stepCount + ': ' + spec.fullName
    );

    ++this.stepCount;
};

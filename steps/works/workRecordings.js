'use strict';

<<<<<<< HEAD:tests/e2e/steps/works/workRecordings.js
=======
var pageStep = require('../helpers/basicPageStep');

>>>>>>> 907d1323703d599726a1cdf810d0c7b1acd8e609:tests/e2e/steps/workRecordings.js
steps.workRecordings = exports;

exports.validateRecordingNames = function(values) {
    it('Validate recording names', function() {
        pages.workRecordings.validateRecordingNames(values);
    });
};

exports.validateArtistNames = function(values) {
    it('Validate recording artist names', function() {
        pages.workRecordings.validateArtistNames(values);
    });
};

exports.validateRecordingDurations = function(values) {
    it('Validate recording durations', function() {
        pages.workRecordings.validateRecordingDurations(values);
    });
};

pageStep('Validate library name');

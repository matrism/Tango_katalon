'use strict';

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

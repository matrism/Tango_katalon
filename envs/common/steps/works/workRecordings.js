'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

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

pageStep([
    'Validate library name',
    'Toggle Recording',
    'Toggle Album',
    'Validate Album Title',
    'Validate Release Territory',
    'Validate Release Configuration',
    'Validate Release Catalog',
    'Validate Release License Code'
]);

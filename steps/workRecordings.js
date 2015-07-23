'use strict';

var pages_path = _tf_config._system_.path_to_pages,
	steps_path = _tf_config._system_.path_to_steps;

steps.workRecordings = exports;

require(pages_path + 'workRecordings');

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

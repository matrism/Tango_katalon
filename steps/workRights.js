'use strict';

var pages_path = _tf_config._system_.path_to_pages,
	steps_path = _tf_config._system_.path_to_steps;

steps.workRights = exports;

require(pages_path + 'workRights');

exports.waitForRightsSummary = function() {
    it('Wait for Rights Summary to load', function() {
        pages.workRights.waitForRightsSummary();
    });
};

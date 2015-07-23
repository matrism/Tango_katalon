'use strict';

var pages_path = _tf_config._system_.path_to_pages;

require(pages_path + 'dealRtp');

steps.dealRtp = exports;

exports.clickAcquisitionPeriodScopesField = function(i) {
	it('Click scopes field on acquisition period #' + (i + 1), function() {
		pages.dealRtp.clickAcquisitionPeriodScopesInput(i);
	});
};

exports.selectAllSuggestedAcquisitionPeriodScopes = function(i) {
	it('Select all suggested scopes for acquisition period #' + (i + 1), function() {
		pages.dealRtp.selectAllSuggestedAcquisitionPeriodScopes(i);
	});
};

exports.applyAcquisitionPeriodScopeChanges = function(i) {
	it('Apply scope changes to acquisition period #' + (i + 1), function() {
		pages.dealRtp.applyAcquisitionPeriodScopeChanges(i);
	});
};

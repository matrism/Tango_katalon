"use strict";
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "work");
module.exports = steps.works = {};
// Navigation.
module.exports.goToScopeDelivery = function() {
	it (
		"Go to Scope Delivery", function() {
			pages.work.goToScopeDelivery();
		}
	);
};
// Validation.
module.exports.validatePrimaryWorkTitle = function(title) {
	it (
		"Validate primary work title", function() {
			expect(pages.work.primaryTitle()).toBe(title);
		}
	);
};
module.exports.validateAlternateWorkTitle = function(title) {
	it (
		"Validate alternate work title", function() {
			expect(pages.work.alternateTitles()).toContain(title);
		}
	);
};
module.exports.validateCreatorName = function(name) {
	it (
		"Validate creator name", function() {
			expect(pages.work.creatorNames()).toContain(name);
		}
	);
};
module.exports.validateCreatorContribution = function(name, percentage) {
	it (
		"Validate creator contribution percentage", function() {
			expect(pages.work.creatorContributionByName(name)).toBe(percentage);
		}
	);
};
module.exports.validateIncludeWorkOnWebsite = function(include) {
	it (
		"Validate 'Include work on website' option", function() {
			expect(pages.work.includeWorkOnWebsite()).toBe(include);
		}
	);
};

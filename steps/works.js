"use strict";
var pph = require("../helpers/pph");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "work");
module.exports = steps.works = {};
module.exports.findWorkId = function() {
	var deferredWorkId = protractor.promise.defer();
	it (
		"Find work ID", function() {
			var workId = pages.work.workId();
			expect(workId).toBeTruthy();
			deferredWorkId.fulfill(workId);
		}
	);
	return deferredWorkId;
};
module.exports.validate = function(work) {
	describe (
		"Validate work data", function() {
			steps.works.validateWorkId(work.id);
			steps.works.validatePrimaryWorkTitle(work.primaryTitle);
			work.alternateTitles.forEach (
				function(alternateTitle, i) {
					describe (
						"Validate alternate work title #" + (i + 1), function() {
							steps.works.validateAlternateWorkTitle(alternateTitle);
						}
					);
				}
			);
			steps.works.validateIncludeWorkOnWebsite(work.includeWorkOnWebsite);
			steps.works.goToScopeDelivery();
			work.creators.forEach (
				function(creator, i) {
					describe (
						"Validate creator #" + (i + 1), function() {
							steps.works.validateCreatorName(creator.name);
							steps.works.validateCreatorContributionPercentage(creator.name, creator.contributionPercentage);
						}
					);
				}
			);
		}
	);
};
module.exports.validateWorkId = function(id) {
	it (
		"Validate work ID", function() {
			expect(pages.work.workId()).toBe(id);
		}
	);
};
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
module.exports.goToScopeDelivery = function() {
	it (
		"Go to Scope Delivery", function() {
			pages.work.goToScopeDelivery();
		}
	);
};
module.exports.validateIncludeWorkOnWebsite = function(include) {
	it (
		"Validate 'Include work on website' setting", function() {
			expect(pages.work.includeWorkOnWebsite()).toBe(include);
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
module.exports.validateCreatorContributionPercentage = function(name, percentage) {
	it (
		"Validate creator contribution percentage", function() {
			expect(pages.work.creatorContributionPercentageByName(name)).toBe(percentage);
		}
	);
};

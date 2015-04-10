"use strict";
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "work");
module.exports = steps.work = {};
// Navigation.
module.exports.goToWorkPage = function(workId) {
	it (
		"Go to work page", function() {
			pages.work.open(workId);
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
// Data fetching.
module.exports.workInclusionOnWebsite = function() {
	var deferred = promise.defer();
	it (
		"Find out whether this work is to be included on the website", function() {
			deferred.fulfill(pages.work.workInclusionOnWebsite());
		}
	);
	return deferred.promise;
};
// Interaction.
module.exports.hoverWorkTitleHeading = function() {
	steps.base.hoverElement (
		"'Work title' heading", pages.work.workTitleHeading()
	);
};
module.exports.clickEditWorkTitlesButton = function() {
	steps.base.clickElement (
		"'Edit work titles' button", pages.work.editWorkTitlesButton()
	);
};
module.exports.clickSaveWorkTitlesButton = function() {
	steps.base.clickElement (
		"'Save work titles' button", pages.work.saveWorkTitlesButton()
	);
};
module.exports.hoverWorkInclusionOnWebsiteIndicator = function() {
	steps.base.hoverElement (
		"'Work inclusion on website' description message",
		pages.work.workInclusionOnWebsiteDescriptionMessage()
	);
};
module.exports.clickEditWorkInclusionOnWebsiteButton = function() {
	steps.base.clickElement (
		"'Edit work inclusion on website' button",
		pages.work.editWorkInclusionOnWebsiteButton()
	);
};
module.exports.clickSaveWorkInclusionOnWebsiteButton = function() {
	steps.base.clickElement (
		"'Save work inclusion on website' button",
		pages.work.saveWorkInclusionOnWebsiteButton()
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
module.exports.validateCreatorContributionByName = function(name, percentage) {
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
// Flow.
module.exports.editWorkTitles = function(callback) {
	describe (
		"Edit work titles", function() {
			steps.work.hoverWorkTitleHeading();
			steps.work.clickEditWorkTitlesButton();
			callback();
			steps.work.clickSaveWorkTitlesButton();
		}
	);
};
module.exports.editWorkInclusionOnWebsiteOption = function(callback) {
	describe (
		"Edit 'Include work on website' option", function() {
			steps.work.hoverWorkInclusionOnWebsiteIndicator();
			steps.work.clickEditWorkInclusionOnWebsiteButton();
			callback();
			steps.work.clickSaveWorkInclusionOnWebsiteButton();
		}
	);
};
module.exports.editBasicWork = function(data) {
	describe (
		"Edit basic work", function() {
			steps.work.goToWorkPage(data.workId);
			steps.work.editWorkTitles (
				function() {
					data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
					data.alternateWorkTitles = _.times (
						4, function(i) {
							return steps.work.enterRandomAlternateWorkTitle(i);
						}
					);
				}
			);
			steps.work.editWorkInclusionOnWebsiteOption (
				function() {
					data.includeOnWebsite = (function() {
						var include = steps.work.includeWorkOnWebsite().then (
							function(include) {
								return !include;
							}
						);
						steps.work.editWorkInclusionOnWebsiteOption (
							function() {
								steps.work.optToIncludeWorkOnWebsite(include);
							}
						);
						return include;
					})();
				}
			);
		}
	);
};
module.exports.validateWork = function(data) {
	if(data.workId) {
		steps.work.goToWorkPage(data.workId);
	}
	steps.work.validatePrimaryWorkTitle(data.primaryWorkTitle);
	if(data.alternateWorkTitles) {
		data.alternateWorkTitles.forEach (
			function(alternateWorkTitle) {
				steps.work.validateAlternateWorkTitle(alternateWorkTitle);
			}
		);
	}
	steps.work.validateIncludeWorkOnWebsite(data.includeOnWebsite);
	steps.work.goToScopeDelivery();
	data.creators.forEach (
		function(creator, i) {
			describe (
				"Validate creator #" + (i + 1), function() {
					steps.work.validateCreatorName(creator.name);
					steps.work.validateCreatorContributionByName(creator.name, creator.contribution);
				}
			);
		}
	);
};

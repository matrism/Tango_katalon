"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
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
module.exports.hoverPrimaryWorkTitleHeading = function() {
	steps.base.hoverElement (
		"primary work title heading", pages.work.primaryWorkTitleHeading()
	);
};
module.exports.editWorkTitles = function() {
	steps.base.clickElement (
		"edit work titles button", pages.work.editWorkTitlesButton()
	);
};
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter a random primary work title", function() {
			var title = "TEST WORK TITLE " + randomId();
			pages.work.enterPrimaryWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + randomId();
			pages.work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.cancelWorkTitlesEditing = function() {
	steps.base.clickElement (
		"cancel work titles editing button",
		pages.work.cancelWorkTitlesEditingButton(),
		_tf_config._system_.wait_timeout
	);
};
module.exports.saveWorkTitles = function() {
	steps.base.clickElement (
		"save work titles button", pages.work.saveWorkTitlesButton()
	);
};
module.exports.hoverWorkInclusionOnWebsiteIndicator = function() {
	steps.base.hoverElement (
		"work inclusion on website description message",
		pages.work.workInclusionOnWebsiteDescriptionMessage()
	);
};
module.exports.editWorkInclusionOnWebsite = function() {
	steps.base.clickElement (
		"edit work inclusion on website button",
		pages.work.editWorkInclusionOnWebsiteButton()
	);
};
module.exports.saveWorkInclusionOnWebsite = function() {
	steps.base.clickElement (
		"save work inclusion on website button",
		pages.work.saveWorkInclusionOnWebsiteButton()
	);
};
// Validation.
module.exports.validateDefaultAlternateWorkTitleLanguage = function() {
	it (
		"Validate default alternate work title language", function() {
			expect(pages.work.defaultAlternateWorkTitleLanguage()).toBe("English");
		}
	);
};
module.exports.expectPrimaryWorkTitleFieldValueToBe = function(title) {
	it (
		"Validate primary work title edit field value", function() {
			expect(pages.work.primaryWorkTitleEditFieldValue()).toBe(title);
		}
	);
};
module.exports.expectPrimaryWorkTitleFieldValueNotToBe = function(title) {
	it (
		"Validate primary work title edit field value", function() {
			expect(pages.work.primaryWorkTitleEditFieldValue()).not.toBe(title);
		}
	);
};
module.exports.validatePrimaryWorkTitle = function(title) {
	it (
		"Validate primary work title", function() {
			expect(pages.work.primaryWorkTitle()).toBe(title);
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
module.exports.editBasicWork = function(data) {
	describe (
		"Edit basic work", function() {
			steps.work.goToWorkPage(data.workId);
			steps.work.hoverPrimaryWorkTitleHeading();
			steps.work.editWorkTitles();
			data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
			steps.work.cancelWorkTitlesEditing();
			steps.base.dirtyCheckConfirmCancellation();
			steps.work.hoverPrimaryWorkTitleHeading();
			steps.work.editWorkTitles();
			steps.work.expectPrimaryWorkTitleFieldValueNotToBe(data.primaryWorkTitle);
			data.primaryWorkTitle = steps.work.enterRandomPrimaryWorkTitle();
			steps.work.cancelWorkTitlesEditing();
			steps.base.dirtyCheckContinueEditing();
			steps.work.expectPrimaryWorkTitleFieldValueToBe(data.primaryWorkTitle);
			data.alternateWorkTitles = _.times (
				4, function(i) {
					steps.work.validateDefaultAlternateWorkTitleLanguage();
					return steps.work.enterRandomAlternateWorkTitle(i);
				}
			);
			/*
			steps.work.clickSaveWorkTitlesButton();
			steps.work.hoverWorkInclusionOnWebsiteIndicator();
			steps.work.clickEditWorkInclusionOnWebsiteButton();
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
			steps.work.clickSaveWorkInclusionOnWebsiteButton();
			*/
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

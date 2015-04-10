"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
require(pages_path + "new_work");
require(steps_path + "base");
require(steps_path + "works");
module.exports = steps.new_work = {};
// Navigation.
module.exports.goToNewWorkPage = function() {
	it (
		"Go to New Work page", function() {
			pages.new_work.open().waitForAjax();
		}
	);
};
// Validation.
module.exports.validateDefaultPrimaryWorkLanguage = function() {
	it (
		"Validate default primary work title language", function() {
			expect(pages.new_work.selectedPrimaryWorkTitleLanguage()).toBe("English");
		}
	);
};
module.exports.validateDefaultAlternateWorkTitleLanguage = function(i) {
	it (
		"Validate default alternate work title language #" + (i + 1), function() {
			expect(pages.new_work.selectedAlternateWorkTitleLanguage(i)).toBe("English");
		}
	);
};
module.exports.validateDefaultCreatorRole = function(i) {
	it (
		"Validate default creator role #" + (i + 1), function() {
			expect(pages.new_work.selectedCreatorRole(i)).toBe("CA");
		}
	);
};
module.exports.validateTotalContributionPercentage = function() {
	it (
		"Validate total contribution", function() {
			expect(pages.new_work.totalContribution()).toBe(100);
		}
	);
};
module.exports.validateDefaultMusicalDistributionCategory = function() {
	it (
		"Validate default musical distribution category", function() {
			expect(pages.new_work.selectedMusicalDistributionCategory()).toBe("Popular");
		}
	);
};
module.exports.validateDefaultTextMusicRelationship = function() {
	it (
		"Validate default text music relationship", function() {
			expect(pages.new_work.selectedTextMusicRelationship()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultExcerptType = function() {
	it (
		"Validate default excerpt type", function() {
			expect(pages.new_work.selectedExcerptType()).toBe("Select type");
		}
	);
};
module.exports.validateDefaultVersionType = function() {
	it (
		"Validate default version type", function() {
			expect(pages.new_work.selectedVersionType()).toBe("Original Work");
		}
	);
};
module.exports.validateDefaultIntendedPurpose = function() {
	it (
		"Validate default intended purpose", function() {
			expect(pages.new_work.selectedIntendedPurpose()).toBe("Select type");
		}
	);
};
// Data input.
module.exports.enterRandomPrimaryWorkTitle = function() {
	var deferred = promise.defer();
	it (
		"Enter a random primary work title", function() {
			var title = "TEST WORK TITLE " + randomId();
			pages.new_work.enterPrimaryWorkTitle(title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.enterRandomAlternateWorkTitle = function(i) {
	var deferred = promise.defer();
	it (
		"Enter a random alternate work title #" + (i + 1), function() {
			var title = "TEST ALTERNATE WORK TITLE " + randomId();
			pages.new_work.enterAlternateWorkTitle(i, title);
			deferred.fulfill(title);
		}
	);
	return deferred.promise;
};
module.exports.selectRandomCreator = function(i) {
	var deferred = promise.defer();
	describe (
		"Select random creator #" + (i + 1), function() {
			deferred.fulfill (
				pages.base.selectRandomTypeaheadValue (
					pages.new_work.creatorNameInput(i)
				)
			);
		}
	);
	return deferred.promise;
};
module.exports.enterCreatorContribution = function(i, value) {
	it (
		"Enter contribution percentage for creator #" + (i + 1), function() {
			pages.new_work.enterContributionPercentage(i, value);
		}
	);
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	it (
		"Opt whether to include work on WarnerChappell.com or not", function() {
			pages.new_work.optToIncludeWorkOnWebsite(include);
		}
	);
};

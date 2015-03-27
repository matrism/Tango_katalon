"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
require(pages_path + "new_work");
require(steps_path + "base");
require(steps_path + "works");
module.exports = steps.new_work = {};
module.exports.create = function(work) {
	describe (
		"Create work", function() {
			steps.new_work.goToNewWorkPage();
			steps.new_work.validateDefaultPrimaryWorkLanguage();
			steps.new_work.enterPrimaryWorkTitle(work.primaryTitle);
			work.alternateTitles.forEach (
				function(alternateTitle, i) {
					var number = i + 1;
					steps.new_work.validateDefaultAlternateWorkTitleLanguage(number);
					steps.new_work.enterAlternateWorkTitle(number, alternateTitle);
				}
			);
			work.creators.forEach (
				function(creator, i) {
					var number = i + 1;
					var key;
					var data;
					steps.new_work.validateDefaultCreatorDesignation(number);
					data = steps.new_work.selectCreator(number, creator.searchTerms);
					for(key in data) {
						creator[key] = data[key];
					}
					steps.new_work.enterContributionPercentage(number, creator.contributionPercentage);
				}
			);
			steps.new_work.ensureTotalContributionIs(100);
			steps.new_work.optToIncludeWorkOnWebsite(work.includeWorkOnWebsite);
			steps.base.itClickOnElement("Save Work", pages.new_work.elems.saveWorkButton);
			steps.base.itCheckIsRedirectToPage("created work page", "/metadata")
			work.id = steps.works.findWorkId();
		}
	);
	return work;
};
module.exports.validateDefaultPrimaryWorkLanguage = function() {
	it (
		"Validate default primary work title language", function() {
			expect(pages.new_work.selectedPrimaryWorkTitleLanguage()).toBe("English");
		}
	);
};
module.exports.validateDefaultAlternateWorkTitleLanguage = function(number) {
	it (
		"Validate default alternate work title language #" + number, function() {
			expect(pages.new_work.selectedAlternateWorkTitleLanguage(number)).toBe("English");
		}
	);
};
module.exports.validateDefaultCreatorDesignation = function(number) {
	it (
		"Validate default creator designation", function() {
			expect(pages.new_work.selectedCreatorDesignation(number)).toBe("CA");
		}
	);
};
module.exports.goToNewWorkPage = function() {
	it (
		"Go to New Work page", function() {
			pages.new_work.open().waitForAjax();
		}
	);
};
module.exports.enterPrimaryWorkTitle = function(title) {
	it (
		"Enter primary work title \"" + title + "\"", function() {
			pages.new_work.enterPrimaryWorkTitle(title);
		}
	);
};
module.exports.enterAlternateWorkTitle = function(number, title) {
	it (
		"Enter alternate work title #" + number + " \"" + title + "\"", function() {
			pages.new_work.enterAlternateWorkTitle(number, title);
		}
	);
};
module.exports.selectCreator = function(number, creator) {
	var creatorData;
	describe (
		"Select creator #" + number, function() {
			creatorData = pages.new_work.selectCreator(number, creator)
		}
	);
	return creatorData;
};
module.exports.enterContributionPercentage = function(number, value) {
	it (
		"Enter contribution percentage '" + value + "' for creator #" + number, function() {
			pages.new_work.enterContributionPercentage(number, value);
		}
	);
};
module.exports.ensureTotalContributionIs = function(value) {
	it (
		"Ensure total contribution percentage is '" + value + "'", function() {
			expect(pages.new_work.totalContribution()).toBe(value);
		}
	);
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	it (
		"Opt " + (!include? "not " : "") + "to include work on WarnerChappell.com",
		function() {
			pages.new_work.optToIncludeWorkOnWebsite(include);
		}
	);
};

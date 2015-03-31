"use strict";
var _ = require("lodash");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
function randomId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000);
}
module.exports = pages.new_work = new ftf.pageObject ({
	url: _tf_config.urls.app_url + "#/create/work"
});
module.exports.primaryWorkTitleLanguageDropdown = function() {
	return element(by.model("work.primary_title.language_code"));
};
module.exports.primaryWorkTitleInput = function() {
	return element(by.model("work.primary_title.title"));
};
module.exports.alternateWorkTitleRootElements = function() {
	return element.all(by.repeater("altTitle in work.alternative_titles"));
};
module.exports.alternateWorkTitleRootElement = function(index) {
	return pages.new_work.alternateWorkTitleRootElements().get(index);
};
module.exports.alternateWorkTitleLanguageDropdown = function(index) {
	return (
		pages.new_work.alternateWorkTitleRootElement(index)
			.$("[tg-typeahead-render-template='$templates.main.wrapper']")
	);
};
module.exports.alternateWorkTitleInput = function(index) {
	return (
		pages.new_work.alternateWorkTitleRootElement(index)
			.element(by.model("altTitle.title"))
	);
};
module.exports.creatorContributionRootElements = function() {
	return element.all(by.repeater("creator in commonDataHolder.creatorsContributions"));
};
module.exports.creatorContributionRootElement = function(index) {
	return pages.new_work.creatorContributionRootElements().get(index);
};
module.exports.creatorRoleDropdown = function(index) {
	return (
		pages.new_work.creatorContributionRootElement(index)
			.element(by.model("creator.role"))
	);
};
module.exports.creatorNameInput = function(index) {
	return (
		pages.new_work.creatorContributionRootElement(index)
			.element(by.model("creator.person_name"))
	);
};
module.exports.creatorContributionInput = function(index) {
	return (
		pages.new_work.creatorContributionRootElement(index)
			.element(by.model("creator.contribution"))
	);
};
module.exports.musicalDistributionCategoryDropdown = function() {
	return element(by.model("work.musical_work_distribution_category"));
};
module.exports.textMusicRelationshipDropdown = function() {
	return element(by.model("work.text_music_relationship"));
};
module.exports.excerptTypeDropdown = function() {
	return element(by.model("work.excerpt_type"));
};
module.exports.versionTypeDropdown = function() {
	return element(by.model("work.version_type"));
};
module.exports.intendedPurposeDropdown = function() {
	return element(by.model("work.intended_purpose"));
};
module.exports.saveWorkButton = function() {
	return $(".page-footer [type='submit']:nth-child(4):not(.disabled)");
};
module.exports.randomWorkData = function() {
	var work = {};
	work.primaryTitle = "TEST WORK " + randomId();
	work.alternateTitles = (function() {
		var primaryTitle = work.primaryTitle;
		var titles = [];
		titles.push("ALTERNATE " + primaryTitle);
		return titles;
	})();
	work.creators = (function() {
		var howMany = 2;
		return _.times (
			howMany, function(i) {
				return {
					searchTerms: pages.base.randomTypeaheadSelector(),
					contributionPercentage: 100 / howMany
				};
			}
		);
	})();
	work.musicalDistributionCategory = pages.base.randomTgDropdownSelector();
	work.textMusicRelationship = pages.base.randomTgDropdownSelector();
	work.excerptType = pages.base.randomTgDropdownSelector();
	work.versionType = pages.base.randomTgDropdownSelector();
	work.versionType.then (
		function(versionType) {
			if(versionType.contains("Modified Version")) {
				work.lyricAdaptation = pages.base.randomTgDropdownSelector();
				work.musicArrengement = pages.base.randomTgDropdownSelector();
			}
		}
	);
	work.intendedPurpose = pages.base.randomTgDropdownSelector();
	work.intendedPurpose.then (
		function(intendedPurpose) {
			switch(intendedPurpose.toLowerCase()) {
				case "commercial jingle trailer":
					work.productionTitle = "TEST JINGLE PRODUCTION " + randomId();
					break;
				case "film":
					work.productionTitle = "TEST FILM PRODUCTION " + randomId();
					work.bltvr = pages.base.randomTgDropdownSelector();
					break;
				case "general usage":
					work.productionTitle = "TEST GENERAL PRODUCTION " + randomId();
					break;
				case "library work":
					work.productionTitle = "TEST LIBRARY PRODUCTION " + randomId();
					break;
			}
		}
	);
	work.includeOnWebsite = _.sample([true, false]);
	return work;
};
module.exports.selectedPrimaryWorkTitleLanguage = function() {
	var element = pages.new_work.primaryWorkTitleLanguageDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.new_work.primaryWorkTitleInput();
	pages.base.scrollIntoView(element);
	if(typeof(title) === "function") {
		return title(element);
	}
	else {
		element.clear();
		element.sendKeys(title);
		return title;
	}
};
module.exports.selectedAlternateWorkTitleLanguage = function(number) {
	var element = pages.new_work.alternateWorkTitleLanguageDropdown(number - 1);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enterAlternateWorkTitle = function(number, title) {
	var element = pages.new_work.alternateWorkTitleInput(number - 1);
	pages.base.scrollIntoView(element);
	if(typeof(title) === "function") {
		return title(element);
	}
	else {
		element.clear();
		element.sendKeys(title);
		return title;
	}
};
module.exports.selectedCreatorRole = function(number) {
	var element = pages.new_work.creatorRoleDropdown(number - 1);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectCreator = function(number, creator) {
	var element = pages.new_work.creatorNameInput(number - 1);
	it (
		"Scroll element into view", function() {
			pages.base.scrollIntoView(element);
		}
	);
	if(typeof(creator) === "function") {
		return element.then (
			function(element) {
				creator(element);
			}
		);
	}
	else {
		return pages.base.typeaheadSelector(creator)(element);
	}
};
module.exports.enterContributionPercentage = function(number, value) {
	var element = pages.new_work.creatorContributionInput(number - 1);
	pages.base.scrollIntoView(element);
	if(typeof(value) === "function") {
		return value(element);
	}
	else {
		contributionInput.clear();
		contributionInput.sendKeys(value);
		return value;
	}
};
module.exports.totalContribution = function() {
	var contributionLabelElement = element(by.binding("getContributionTotalFor(work) | number:3"));
	pages.base.scrollIntoView(contributionLabelElement);
	return contributionLabelElement.getText().then (
		function(text) {
			var match = /^TOTAL: (\d+\.\d+%)$/.exec(text);
			if(!match) {
				return text;
			}
			return parseFloat(match[1]);
		}
	);
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	var elements = pages.new_work.includeWorkOnWebsiteButtons();
	var elementIndex;
	var element;
	if(typeof(include) === "function") {
		return include(element);
	}
	else {
		elementIndex = { "true": 0, "false": 1 }[!!include];
		element = elements.get(elementIndex);
		pages.base.scrollIntoView(element);
		element.click();
	}
};
module.exports.selectedMusicalDistributionCategory = function() {
	var element = pages.new_work.musicalDistributionCategoryDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedTextMusicRelationship = function() {
	var element = pages.new_work.textMusicRelationshipDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedExcerptType = function() {
	var element = pages.new_work.excerptTypeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedVersionType = function() {
	var element = pages.new_work.versionTypeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedIntendedPurpose = function() {
	var element = pages.new_work.intendedPurposeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};

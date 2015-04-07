"use strict";
var _ = require("lodash");
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
module.exports = pages.new_work = new ftf.pageObject ({
	url: _tf_config.urls.app_url + "#/create/work"
});
// Locator.
module.exports.primaryWorkTitleLanguageDropdown = function() {
	return element(by.model("work.primary_title.language_code"));
};
module.exports.primaryWorkTitleInput = function() {
	return element(by.model("work.primary_title.title"));
};
module.exports.alternateWorkTitleRows = function() {
	return element.all(by.repeater("altTitle in work.alternative_titles"));
};
module.exports.alternateWorkTitleRow = function(index) {
	return pages.new_work.alternateWorkTitleRows().get(index);
};
module.exports.alternateWorkTitleLanguageDropdown = function(index) {
	return (
		pages.new_work.alternateWorkTitleRow(index)
			.$("[tg-typeahead-render-template='$templates.main.wrapper']")
	);
};
module.exports.alternateWorkTitleInput = function(index) {
	return (
		pages.new_work.alternateWorkTitleRow(index)
			.element(by.model("altTitle.title"))
	);
};
module.exports.creatorContributionRows = function() {
	return element.all(by.repeater("creator in commonDataHolder.creatorsContributions"));
};
module.exports.creatorContributionRow = function(index) {
	return pages.new_work.creatorContributionRows().get(index);
};
module.exports.creatorRoleDropdown = function(index) {
	return (
		pages.new_work.creatorContributionRow(index)
			.element(by.model("creator.role"))
	);
};
module.exports.creatorNameInput = function(index) {
	return (
		pages.new_work.creatorContributionRow(index)
			.element(by.model("creator.person_name"))
	);
};
module.exports.creatorContributionInput = function(index) {
	return (
		pages.new_work.creatorContributionRow(index)
			.element(by.model("creator.contribution"))
	);
};
module.exports.contributionTotalBinding = function() {
	return element(by.binding("getContributionTotalFor(work) | number:3"));
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
module.exports.includeWorkOnWebsiteButtons = function() {
	return element.all(by.model("work.include_on_website"));
};
module.exports.saveWorkButton = function() {
	return $(".page-footer [type='submit']:nth-child(4):not(.disabled)");
};
// Data fetching.
module.exports.selectedPrimaryWorkTitleLanguage = function() {
	var element = pages.new_work.primaryWorkTitleLanguageDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedAlternateWorkTitleLanguage = function(i) {
	var element = pages.new_work.alternateWorkTitleLanguageDropdown(i);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.selectedCreatorRole = function(i) {
	var element = pages.new_work.creatorRoleDropdown(i);
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.totalContribution = function() {
	var element = pages.new_work.contributionTotalBinding();
	pages.base.scrollIntoView(element);
	return element.getText().then (
		function(text) {
			var match = /^TOTAL: (\d+\.\d+%)$/.exec(text);
			if(!match) {
				return text;
			}
			return parseFloat(match[1]);
		}
	);
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
// Data input.
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.new_work.primaryWorkTitleInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterAlternateWorkTitle = function(i, title) {
	var element = pages.new_work.alternateWorkTitleInput(i);
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterContributionPercentage = function(i, value) {
	var element = pages.new_work.creatorContributionInput(i);
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.optToIncludeWorkOnWebsite = function(include) {
	var elements = pages.new_work.includeWorkOnWebsiteButtons();
	var elementIndex;
	var element;
	elementIndex = { "true": 0, "false": 1 }[!!include];
	element = elements.get(elementIndex);
	pages.base.scrollIntoView(element);
	element.click();
};

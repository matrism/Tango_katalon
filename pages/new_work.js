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
module.exports.lyricAdaptationDropdown = function() {
	return element(by.model("work.lyric_adaptation_type"));
};
module.exports.musicArrangementDropdown = function() {
	return element(by.model("work.music_arrangement_type"));
};
module.exports.intendedPurposeDropdown = function() {
	return element(by.model("work.intended_purpose"));
};
module.exports.productionTitleInput = function() {
	return element(by.model("work.production_title.title"));
};
module.exports.bltvrDropdown = function() {
	return element(by.model("work.bltvr"));
};
module.exports.musicLibraryDropdown = function() {
	return element(by.model("work.library_code"));
};
module.exports.creationDateContainer = function() {
	return element(by.model("work.creation_date"));
};
module.exports.creationDatePickerIcon = function() {
	return (
		pages.new_work.creationDateContainer()
			.$(".date .add-on")
	);
};
module.exports.creationYearInput = function() {
	return (
		pages.new_work.creationDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.creationMonthInput = function() {
	return (
		pages.new_work.creationDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.creationDayInput = function() {
	return (
		pages.new_work.creationDateContainer()
			.element(by.model("date.day"))
	);
};
module.exports.deliveryDateContainer = function() {
	return element(by.model("work.delivery_date"));
};
module.exports.deliveryDatePickerIcon = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.$(".date .add-on")
	);
};
module.exports.deliveryYearInput = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.element(by.model("date.year"))
	);
};
module.exports.deliveryMonthInput = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.element(by.model("date.month"))
	);
};
module.exports.deliveryDayInput = function() {
	return (
		pages.new_work.deliveryDateContainer()
			.element(by.model("date.day"))
	);
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
module.exports.isLyricAdaptationFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.lyricAdaptationDropdown()
	);
};
module.exports.selectedLyricAdaptation = function() {
	return pages.base.selectedTgDropdownOption(
		pages.new_work.lyricAdaptationDropdown()
	);
};
module.exports.isMusicArrangementFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.musicArrangementDropdown()
	);
};
module.exports.selectedMusicArrangement = function() {
	return pages.base.selectedTgDropdownOption(
		pages.new_work.musicArrangementDropdown()
	);
};
module.exports.isIntendedPurposeFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.intendedPurposeDropdown()
	);
};
module.exports.selectedIntendedPurpose = function() {
	var element = pages.new_work.intendedPurposeDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isProductionTitleFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(
		pages.new_work.productionTitleInput()
	);
};
module.exports.enterProductionTitle = function(title) {
	var element = pages.new_work.productionTitleInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.isBltvrFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(pages.new_work.bltvrDropdown());
};
module.exports.selectedBltvr = function() {
	var element = pages.new_work.bltvrDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.isMusicLibraryFieldDisplayed = function() {
	return pages.base.isPresentAndDisplayed(pages.new_work.musicLibraryDropdown());
};
module.exports.selectedMusicLibrary = function() {
	var element = pages.new_work.musicLibraryDropdown();
	pages.base.scrollIntoView(element);
	return pages.base.selectedTgDropdownOption(element);
};
module.exports.enteredCreationYear = function() {
	var element = pages.new_work.creationYearInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredCreationMonth = function() {
	var element = pages.new_work.creationMonthInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredCreationDay = function() {
	var element = pages.new_work.creationDayInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryYear = function() {
	var element = pages.new_work.deliveryYearInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryMonth = function() {
	var element = pages.new_work.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
};
module.exports.enteredDeliveryDay = function() {
	var element = pages.new_work.deliveryDayInput();
	pages.base.scrollIntoView(element);
	return element.getAttribute("value");
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
module.exports.enterCreationYear = function(value) {
	var element = pages.new_work.creationYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationMonth = function(value) {
	var element = pages.new_work.creationMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterCreationDay = function(value) {
	var element = pages.new_work.creationDayInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryYear = function(value) {
	var element = pages.new_work.deliveryYearInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryMonth = function(value) {
	var element = pages.new_work.deliveryMonthInput();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(value);
};
module.exports.enterDeliveryDay = function(value) {
	var element = pages.new_work.deliveryDayInput();
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

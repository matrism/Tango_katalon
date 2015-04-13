"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
module.exports = pages.work = new ftf.pageObject();
// Navigation.
module.exports.open = function(workId) {
	if(typeof(workId) !== "string") {
		return ftf.pageObject.prototype.open.call(this);
	}
	browser.get(_tf_config.urls.app_url + "#/work/" + workId + "/metadata");
	pages.base.waitForAjax();
};
// Locator.
module.exports.primaryWorkTitleBinding = function() {
	return element(by.binding("getWorkName(workPristine)"));
};
module.exports.headerAlternateWorkTitleRows = function() {
	return (
		element.all(by.repeater("altTitle in altTitles | limitTo:workHeaderLimits.altTitles"))
	);
};
module.exports.alternateWorkTitleBindings = function() {
	return (
		element.all(by.repeater("altTitle in altTitles")).all(by.binding("altTitle.title"))
	);
};
module.exports.primaryWorkTitleHeading = function() {
	return $("[data-ng-show='workHeader.title.detail']");
};
module.exports.editWorkTitlesButton = function() {
	return $(".title-edit [data-ng-click='showEdit(workHeader.title, titleEditForm)']");
};
module.exports.editWorkTitlesContainer = function() {
	return $("[data-ng-show='workHeader.title.edit']");
};
module.exports.primaryWorkTitleEditField = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.model("work.title.primary_title.title"))
	);
};
module.exports.alternateWorkTitleEditRows = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.all(by.repeater("altTitle in work.title.alternative_titles"))
	);
};
module.exports.alternateWorkTitleEditRow = function(i) {
	return pages.work.alternateWorkTitleEditRows().get(i);
};
module.exports.defaultAlternateWorkTitleLanguage = function(i) {
	return pages.base.selectedDropdownOption (
		pages.work.alternateWorkTitleEditRows().last()
			.element(by.model("altTitle.language_code"))
	);
};
module.exports.alternateWorkTitleEditField = function(i) {
	return (
		pages.work.alternateWorkTitleEditRow(i)
			.element(by.model("altTitle.title"))
	);
};
module.exports.cancelWorkTitlesEditingButton = function() {
	return (
		pages.work.editWorkTitlesContainer()
			.element(by.cssContainingText("button", "Cancel"))
	);
};
// Navigation.
module.exports.goToScopeDelivery = function() {
	return browser.executeScript (
		function() {
			jQuery(".nav-tabs span:contains('Scope Delivery')").click();
		}
	);
};
// Data fetching.
module.exports.primaryWorkTitle = function() {
	var element = pages.work.primaryWorkTitleBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.alternateWorkTitles = function() {
	var deferred = promise.defer();
	pages.work.headerAlternateWorkTitleRows().then (
		function(headerAlternateWorkTitleRows) {
			if(headerAlternateWorkTitleRows.length === 0) {
				return [];
			}
			pages.base.scrollIntoView(headerAlternateWorkTitleRows[0]);
			browser.actions().mouseMove(headerAlternateWorkTitleRows[0]).perform();
			deferred.fulfill (
				pages.work.alternateWorkTitleBindings().map (
					function(element) {
						return element.getText();
					}
				)
			);
		}
	);
	return deferred.promise;
};
module.exports.includeWorkOnWebsite = function() {
	var textElement =
		element(by.css("[data-ng-switch='!!wcmWebsiteEdit.model.includeOnWebsite']"))
			.element(by.css(".ng-scope"))
	;
	pages.base.scrollIntoView(textElement);
	return textElement.getText().then (
		function(text) {
			return (text.indexOf("is included") !== -1);
		}
	);
};
module.exports.creatorNames = function(i) {
	var ithElement;
	var elements = (
		$(".scope-delivery-table")
			.all(by.binding("creator.person_name"))
			.filter (
				function(element) {
					return element.isDisplayed();
				}
			)
	);
	function handleElement(el) {
		pages.base.scrollIntoView(el);
		return el.getText();
	}
	if(i !== undefined) {
		return handleElement(elements.get(i));
	}
	else {
		return elements.map(handleElement);
	}
};
module.exports.creatorContributions = function(i) {
	var ithElement;
	var elements = (
		$(".scope-delivery-table")
			.all(by.binding("creator.contribution"))
			.filter (
				function(element) {
					return element.isDisplayed();
				}
			)
	);
	function handleElement(el) {
		pages.base.scrollIntoView(el);
		return el.getText();
	}
	if(i !== undefined) {
		return handleElement(elements.get(i));
	}
	else {
		return elements.map(handleElement);
	}
};
module.exports.creatorContributionByName = function(name) {
	return pph.indexOf(pages.work.creatorNames(), name).then (
		function(creatorIndex) {
			if(creatorIndex === -1) {
				return null;
			}
			return pages.work.creatorContributions(creatorIndex).then (
				function(text) {
					if(!/^\d+\.\d+%$/.test(text)) {
						return text;
					}
					return parseFloat(text);
				}
			);
		}
	);
};
module.exports.primaryWorkTitleEditFieldValue = function() {
	return pages.work.primaryWorkTitleEditField().getAttribute("value"); 
};
// Data input.
module.exports.enterPrimaryWorkTitle = function(title) {
	var element = pages.work.primaryWorkTitleEditField();
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};
module.exports.enterAlternateWorkTitle = function(i, title) {
	var element = pages.work.alternateWorkTitleEditField(i);
	pages.base.scrollIntoView(element);
	element.clear();
	element.sendKeys(title);
};

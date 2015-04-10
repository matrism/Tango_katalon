"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
module.exports = pages.work = {};
// Locator.
module.exports.primaryTitleBinding = function() {
	return element(by.binding("getWorkName(workPristine)"));
};
module.exports.headerAlternateWorkTitleRootElements = function() {
	return element.all(by.repeater("altTitle in altTitles | limitTo:workHeaderLimits.altTitles"));
};
module.exports.alternateWorkTitleBindings = function() {
	return element.all(by.repeater("altTitle in altTitles")).all(by.binding("altTitle.title"));
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
module.exports.primaryTitle = function() {
	var element = pages.work.primaryTitleBinding();
	pages.base.scrollIntoView(element);
	return element.getText();
};
module.exports.alternateTitles = function() {
	var deferred = promise.defer();
	pages.work.headerAlternateWorkTitleRootElements().then (
		function(headerAlternateWorkTitleRootElements) {
			if(headerAlternateWorkTitleRootElements.length === 0) {
				return [];
			}
			pages.base.scrollIntoView(headerAlternateWorkTitleRootElements[0]);
			browser.actions().mouseMove(headerAlternateWorkTitleRootElements[0]).perform();
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
module.exports.creatorNames = function() {
	var creatorNameElements = element.all(by.binding("creator.person_name"));
	pages.base.scrollIntoView(creatorNameElements.get(0));
	return creatorNameElements.map (
		function(nameElement) {
			return nameElement.getText();
		}
	);
};
module.exports.creatorContributionByName = function(name) {
	return pph.indexOf(pages.work.creatorNames(), name).then (
		function(creatorIndex) {
			var creatorContributionElement;
			if(creatorIndex === -1) {
				return null;
			}
			creatorContributionElement = element.all(by.binding("creator.contribution")).get(creatorIndex);
			pages.base.scrollIntoView(creatorContributionElement);
			return creatorContributionElement.getText().then (
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

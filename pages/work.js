"use strict";
var pph = require("../helpers/pph");
module.exports = pages.work = {};
module.exports.workId = function() {
	return element(by.binding("getWorkFullCode(work.pristine)")).getText();
};
module.exports.primaryTitle = function() {
	var titleElement = element(by.binding("getWorkName(workPristine)"));
	pages.base.scrollIntoView(titleElement);
	return titleElement.getText();
};
module.exports.alternateTitles = function() {
	return element.all(by.repeater("altTitle in altTitles | limitTo:workHeaderLimits.altTitles")).then (
		function(firstAlternateTitles) {
			if(firstAlternateTitles.length === 0) {
				return [];
			}
			pages.base.scrollIntoView(firstAlternateTitles[0]);
			browser.actions().mouseMove(firstAlternateTitles[0]).perform();
			return element.all(by.repeater("altTitle in altTitles")).all(by.binding("altTitle.title")).map (
				function(element) {
					return element.getText();
				}
			);
		}
	);
};
module.exports.goToScopeDelivery = function() {
	return browser.executeScript (
		function() {
			jQuery(".nav-tabs span:contains('Scope Delivery')").click();
		}
	);
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
module.exports.creatorContributionPercentageByName = function(name) {
	return pph.indexOf(pages.work.creatorNames(), name).then (
		function(creatorIndex) {
			var creatorContributionElement = element.all(by.binding("creator.contribution")).get(creatorIndex);
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

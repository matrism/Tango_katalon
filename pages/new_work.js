"use strict";
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
function randomId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000);
}
module.exports = pages.new_work = new ftf.pageObject ({
	url: _tf_config.urls.app_url + "#/create/work",
	locators: {
		primaryWorkTitleInput: { model: "work.primary_title.title" },
		alternateWorkTitleInput: { model: "altTitle.title" },
		saveWorkButton: { css: ".page-footer [type='submit']:nth-child(4):not(.disabled)" }
	}
});
module.exports.randomTitle = function() {
    return "TEST WORK " + randomId();
};
module.exports.randomCreator = function() {
	return function(number) {
		var creatorData = {};
		var nameInput;
		var randomLetter = String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25));
		creatorData.searchTerms = randomLetter;
		it (
			"Type a random letter in the search field", function() {
				nameInput = element(by.id("creator_person-" + (number - 1)));
				pages.base.scrollIntoView(nameInput);
				nameInput.clear();
				nameInput.sendKeys(randomLetter);
			}
		);
		it (
			"Wait for suggestions dropdown to appear", function() {
				var suggestion = element(by.css(".typeahead-result"));
				browser.wait (
					protractor.ExpectedConditions.visibilityOf(suggestion)
				);
				expect(suggestion.getText()).not.toContain("No results");
			}
		);
		creatorData.name = protractor.promise.defer();
		it (
			"Pick a random suggestion", function() {
				element.all(by.css(".typeahead-result")).then (
					function(suggestions) {
						var randomSuggestion = suggestions [
							Math.floor(Math.random() * suggestions.length)
						];
						randomSuggestion.click();
						creatorData.name.fulfill(nameInput.getAttribute("value"));
					}
				);
			}
		);
		return creatorData;
	};
};
module.exports.enterPrimaryWorkTitle = function(title) {
	var inputElement;
	if(typeof(title) === "function") {
		title = title();
	}
    inputElement = pages.new_work.elems.primaryWorkTitleInput;
	pages.base.scrollIntoView(inputElement);
	inputElement.clear();
	inputElement.sendKeys(title);
};
module.exports.enterAlternateWorkTitle = function(number, title) {
	var inputElement;
	if(typeof(title) === "function") {
		title = title();
	}
	inputElement = element.all(by.model("altTitle.title")).get(number - 1);
	pages.base.scrollIntoView(inputElement);
    inputElement.clear();
	inputElement.sendKeys(title);
};
module.exports.selectCreator = function(number, creator) {
	return creator(number);
};
module.exports.enterContributionPercentage = function(number, value) {
	var contributionInput;
	if(typeof(value) === "function") {
		value = value();
	}
	contributionInput = element(by.id("creator_contribution-" + (number - 1)));
	pages.base.scrollIntoView(contributionInput);
	contributionInput.clear();
	contributionInput.sendKeys(value);
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
	var which;
	var el;
	if(typeof(include) === "function") {
		include = include();
	}
	which = { "true": "first", "false": "last" }[!!include];
	el = element.all(by.model("work.include_on_website"))[which]();
	pages.base.scrollIntoView(el);
	el.click();
};

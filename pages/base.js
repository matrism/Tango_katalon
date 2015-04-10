"use strict";
var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.base === undefined) {
    pages.base = new ftf.pageObject({
        locators: {
            logout_link: { id: "DSP-LOGOUT" }
        }
    });
};
pages.base.selectRandomTypeaheadValue = function(element) {
	var deferred = promise.defer();
	it (
		"Type a random letter in the search field", function() {
			var randomLetter = String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25));
			pages.base.scrollIntoView(element);
			element.clear();
			element.sendKeys(randomLetter);
		}
	);
	it (
		"Wait for suggestions dropdown to appear", function() {
			var suggestion = $(".typeahead-result");
			browser.wait (
				ExpectedConditions.visibilityOf(suggestion)
			);
			expect(suggestion.getText()).not.toContain("No results");
		}
	);
	it (
		"Pick a random suggestion", function() {
			$$(".typeahead-result").then (
				function(suggestions) {
					var randomSuggestion = _.sample(suggestions);
					randomSuggestion.click();
					deferred.fulfill(element.getAttribute("value"));
				}
			);
		}
	);
	return deferred.promise;
};
pages.base.randomTgDropdownSelector = function(element) {
	var deferred = promise.defer();
	var fn = function() {
		it (
			"Pick a random dropdown option", function() {
				pages.base.scrollIntoView(element);
				element.click();
				element.$$("[tg-dropdown-render-template='$templates.popup.item']").then (
					function(optionElements) {
						var randomOptionElement = _.sample(optionElements);
						randomOptionElement.click();
						deferred.fulfill(pages.base.selectedTgDropdownOption(element));
					}
				);
			}
		);
		return deferred.promise;
	};
	fn.then = deferred.promise.then.bind(deferred.promise);
	return fn;
};
pages.base.selectedTgDropdownOption = function(element) {
	return (
		element
			.$("[tg-dropdown-render-template='$templates.main.selectedItem'] .ng-binding")
			.getText()
	);
};
module.exports = pages.base;

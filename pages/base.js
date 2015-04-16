"use strict";
var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
module.exports = pages.base = new ftf.pageObject ({
	locators: {
		logout_link: { id: "DSP-LOGOUT" }
	}
});
// Locators.
module.exports.dirtyCheckDialogHeading = function() {
	return $(".modal-header").element(by.cssContainingText("*", "UNSAVED EDITS"));
};
module.exports.dirtyCheckContinueEditingButton = function() {
	return $(".modal-footer").element(by.cssContainingText("button", "Continue Editing"));
};
module.exports.dirtyCheckConfirmCancellationButton = function() {
	return $(".modal-footer").element(by.cssContainingText("button", "CONFIRM CANCELLATION"));
};
// Interaction.
module.exports.selectRandomDropdownOption = function(element, more) {
	var options;
	var currentOption;
	more = more || {};
	options = element.$$("option");
	if(more.different) {
		options = options.filter (
			function(option) {
				return pph.matchesCssSelector(option, ":checked");
			}
		);
	}
	return options.then (
		function(options) {
			var option = _.sample(option);
			option.click();
			return option.getText();
		}
	);
};
module.exports.selectRandomTypeaheadValue = function(element) {
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
module.exports.randomTgDropdownSelector = function(element) {
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
module.exports.selectedDropdownOption = function(element) {
	return element.$("option:checked").getText();
};
module.exports.selectedTgDropdownOption = function(element) {
	return (
		element
			.$("[tg-dropdown-render-template='$templates.main.selectedItem'] .ng-binding")
			.getText()
	);
};

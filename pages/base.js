"use strict";
var _ = require("lodash");
var pph = require("../helpers/pph");
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
	more = more || {};
	return (
		element.isPresent().then (
			function(elementPresent) {
				expect(elementPresent || more.skipIfNotPresent).toBeTruthy();
				if(elementPresent) {
					return promise.all ([
						element,
						element.isDisplayed(),
						pph.matchesCssSelector(element, "[required]"),
					]);
				}
			}
		)
		.then (
			function(values) {
				var element;
				var elementDisplayed;
				var valueRequired;
				var options;
				var previousOptions;
				if(values === undefined) {
					return;
				}
				element = values[0];
				elementDisplayed = values[1];
				valueRequired = values[2];
				if(!elementDisplayed && more.skipIfNotDisplayed) {
					return null;
				}
				options = element.$$("option");
				if(valueRequired) {
					options = options.filter (
						function(option) {
							return option.getAttribute("value").then (
								function(value) {
									return value !== "";
								}
							);
						}
					);
				}
				if(more.different) {
					previousOptions = options;
					options = options.count().then (
						function(optionCount) {
							if(optionCount < 2) {
								return options;
							}
							return previousOptions.filter (
								function(option) {
									return pph.matchesCssSelector(option, ":not(:checked)");
								}
							);
						}
					);
				}
				return options.then (
					function(options) {
						element.click();
						return _.sample(options).click().getText();
					}
				);
			}
		)
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

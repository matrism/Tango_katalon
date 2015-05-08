"use strict";
var _ = require("lodash");
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
exports = module.exports = pages.base = new ftf.pageObject ({
	locators: {
		logout_link: { id: "DSP-LOGOUT" }
	}
});
// Locators.
module.exports.dirtyCheckContinueEditingButton = function() {
	return $(".modal-footer").element(by.cssContainingText("button", "Continue Editing"));
};
module.exports.dirtyCheckConfirmCancellationButton = function() {
	return $(".modal-footer").element(by.cssContainingText("button", "CONFIRM CANCELLATION"));
};
// Interaction.
module.exports.isPresentAndDisplayed = function(element) {
	return element.isPresent().then(function(isPresent) {
		if(!isPresent) {
			return false;
		}
		return element.isDisplayed();
	});
};
module.exports.isNotPresentOrDisplayed = function(element) {
	return pph.not(pages.base.isPresentAndDisplayed(element));
};
module.exports.selectRandomDropdownOption = function(element, more) {
	more = more || {};
	more.dropdownType = more.dropdownType || "standard";
	return module.exports.selectRandomDropdownOption[more.dropdownType](element, more);
};
module.exports.selectRandomDropdownOption.standard = function(element, more) {
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
module.exports.selectRandomDropdownOption.tg = function(element, more) {
	more = more || {};
	return element.isPresent().then(function(elementPresent) {
		expect(more.skipIfNotPresent || elementPresent).toBeTruthy();
		if(!elementPresent) {
			return;
		}
		return element.isDisplayed().then(function(elementDisplayed) {
			var originalOptionText;
			var blacklist = [];
			expect(elementDisplayed || more.skipIfNotDisplayed).toBeTruthy();
			if(!elementDisplayed) {
				return;
			}
			originalOptionText = pages.base.selectedTgDropdownOption(element);
			return (function tryAgain() {
				var optionCssSelector = ".dropdown-menu > li .ng-binding";
				var remainingOptions;
				element.click();
				return element.$$(optionCssSelector)
					.filter(function(option) {
						return pph.and (
							pph.notInArray(blacklist, option.getText()),
							pph.or(!more.different, pph.areNotEqual(option.getText(), originalOptionText))
						);
					})
					.then(function(remainingOptions) {
						var randomOption;
						var randomOptionText;
						expect(remainingOptions.length).toBeGreaterThan(0);
						if(remainingOptions.length === 0) {
							console.log("WARNING - TG dropdown options exhausted");
							element.element(by.cssContainingText(optionCssSelector, originalOptionText)).click();
							return originalOptionText;
						}
						randomOption = _.sample(remainingOptions);
						randomOptionText = randomOption.getText();
						randomOption.click();
						return pph.matchesCssSelector(element, ".ng-invalid").then(function(invalidOption) {
							if(invalidOption) {
								console.log("WARNING - Selected an invalid option; will retry");
								blacklist.push(randomOptionText);
								return tryAgain();
							}
							else {
								expect(pph.or(!more.different, pph.areNotEqual(randomOptionText, originalOptionText))).toBeTruthy();
								return randomOptionText;
							}
						});
					});
			})();
		});
	});
};
exports.expectTypeaheadSuggestionsDropdownToBeDisplayed = function(more) {
    more = more || {};
    if(more.timeout === undefined) {
        more.timeout = _tf_config._system_.wait_timeout;
    }
    browser.wait(
        ExpectedConditions.visibilityOf($('.typeahead-result')),
        more.timeout
    );
};
exports.enterRandomLetterOnField = function(element) {
    var randomLetter = random.letter();

    pages.base.scrollIntoView(element);

    element.clear();
    element.sendKeys(randomLetter);

    return randomLetter;
};
exports.enterNewRandomLetterOnField = function(element) {
    pages.base.scrollIntoView(element);

    return element.getAttribute("value").then(function(currentValue) {
        var randomLetter;

        do {
            randomLetter = random.letter();
        } while(currentValue.indexOf(randomLetter) !== -1);

        element.clear();
        element.sendKeys(randomLetter);

        return randomLetter;
    });
};
module.exports.selectRandomTypeaheadValue = function(element, more) {
	more = more || {};
	var deferred = promise.defer();
	if(more.different) {
		it("Type a random letter not occurring in the current field value", function() {
			pages.base.scrollIntoView(element);

			element.getAttribute("value").then(function(currentValue) {
				var randomLetter;

				do {
					randomLetter = (
						String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25))
					);
				} while(currentValue.indexOf(randomLetter) !== -1);

				element.clear();
				element.sendKeys(randomLetter);
			});
		});
	}
	else {
		it("Type a random letter in the search field", function() {
			var randomLetter = String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25));
			pages.base.scrollIntoView(element);
			element.clear();
			element.sendKeys(randomLetter);
		});
	}
	it (
		"Wait for suggestions dropdown to appear", function() {
			var suggestion = $(".typeahead-result");
			browser.wait (
				ExpectedConditions.visibilityOf(suggestion),
				_tf_config._system_.wait_timeout
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


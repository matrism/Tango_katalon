"use strict";
var _ = require("lodash");
var fs = require('fs-extra');
var glob = require('glob');
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
var config = require('../configs/protractor-conf');
exports = module.exports = pages.base = new ftf.pageObject ({
	locators: {
		logout_link: { id: "DSP-LOGOUT" }
	}
});
exports.open = function() {
    browser.get(_tf_config.urls.app_url);
    exports.waitForAjax();
};

exports.modalHeading = function() {
    return $(
        '.modal-header h1, .modal-header h2, .modal-header h3, ' +
        '.modal-header h4, .modal-header h5, .modal-header h6'
    );
};

exports.modalHeadingText = function() {
    return exports.modalHeading().getText();
};

exports.modalBody = function() {
	return $('.modal-body');
};

exports.modalDialog = function() {
    return $('.modal-dialog');
};
exports.modalFooter = function() {
    return $('.modal-footer');
};
exports.expectModalPopUpToBeDisplayed = function(more) {
    more = more || {};

    if(more.timeout === undefined) {
        more.timeout = _tf_config._system_.wait_timeout;
    }

    browser.wait(
        ExpectedConditions.visibilityOf(exports.modalHeading()),
        more.timeout
    );
};
exports.mainSearchBar = function() {
    return $('#DSP-SEARCH');
};
module.exports.dirtyCheckContinueEditingButton = function() {
    return exports.modalFooter().element(
        by.cssContainingText("button", "Continue Editing")
    );
};
module.exports.dirtyCheckConfirmCancellationButton = function() {
    return exports.modalFooter().element(
        by.cssContainingText("button", "CONFIRM CANCELLATION")
    );
};

module.exports.randomDate=function(start, end) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

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
exports.elementHasVerticalScrollbar = function(element) {
    if(!(element instanceof protractor.WebElement)) {
        element = element.getWebElement();
    }
    return browser.executeScript(function(element) {
        return element.scrollHeight > $(element).innerHeight();
    }, element);
};
exports.selectDropdownOption = function(element, value, more) {
    more = more || {};
    more.dropdownType = more.dropdownType || 'standard';
    return exports.selectDropdownOption[more.dropdownType](element, value, more);
};
exports.selectDropdownOption.standard = function(element, value) {
    element.click();
    element.element(by.cssContainingText('option', value)).click();
};
exports.selectDropdownOption.tg = function(element, value) {
    browser.executeScript(function(element) {
        element.click();
    }, element.$('.tg-dropdown-label').getWebElement());
    element.element(by.cssContainingText('.ng-binding', value)).click();
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
				var remainingOptions;
				browser.executeScript(function(element) {
					element.click();
				}, element.$('.tg-dropdown-label').getWebElement());
				return $$(".tg-dropdown-menu li .ng-binding")
					.filter(function(option) {
						var optionText = option.getText();
						return pph.and (
							pph.areNotEqual(optionText, ""),
							pph.notInArray(blacklist, optionText),
							pph.or(!more.different, pph.areNotEqual(optionText, originalOptionText))
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
				element.$$("[tg-component-render-template='$templates.popup.item']").then (
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
			.$('[tg-component-render-template="$templates.main.selectedItem"]>span')
			.getText()
	);
};
exports.refreshPage = function() {
    browser.refresh();
    pages.base.waitForAjax();
};

exports.hitEscape = function() {
    return $('body').sendKeys(protractor.Key.ESCAPE);
};

exports.dialogError = function() {
    return exports.modalHeading().isPresent().then(function(modalOpen) {
        if(!modalOpen) {
            return null;
        }

        return pph.trim(exports.modalHeading().getText()).then(function(heading) {
            if(!/error/i.test(heading)) {
                return null;
            }

            return pph.stringConcat(
                heading, '\n\n',
                pph.collapseWhitespace(pph.trim(pph.getAllText(exports.modalBody())))
            );
        });
    });
};

exports.downloadDirectoryEntries = function() {
    return glob.sync(systemConfig.downloadsDirectoryPath + '/*');
};

exports.clearDownloadsDirectory = function() {
    exports.downloadDirectoryEntries().forEach(function(path) {
        fs.rmrfSync(path);
    });
};

exports.validateDownloadFileCount = function(value) {
    expect(exports.downloadDirectoryEntries().length).toBe(value);
};

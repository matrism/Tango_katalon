"use strict";

var _ = require("lodash");
var fs = require('fs-extra');
var glob = require('glob');
var pph = require("../../../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
var config = require('../../../configs/protractor-conf');
var methodSpecifierCall = require('../../../helpers/methodSpecifierCall');

exports = module.exports = pages.base = new ftf.pageObject();

exports.open = function () {
    browser.get(_tf_config.urls.app_url);
    exports.waitForAjax();
};

exports.modalContainer = function () {
    return $('body > .modal');
};

exports.waitForModal = function () {
    var container = exports.modalContainer();

    browser.wait(function () {
        return pph.and(
            container.isPresent(),
            pph.matchesCssSelector(container, ':not(.animate)')
        );
    });
};

exports.modalHeader = function () {
    return $('.modal-header');
};

exports.modalCloseButton = function () {
    return exports.modalHeader().$('[data-ng-click="cancel()"]');
};

exports.closeModal = function () {
    return exports.modalCloseButton().click();
};

exports.modalHeading = function () {
    return exports.modalHeader().$('h1, h2, h3, h4, h5, h6');
};

exports.modalHeadingText = function () {
    return exports.modalHeading().getText();
};

exports.validateModalHeading = function (expected) {
    expect(exports.modalHeadingText()).toBe(expected);
};

exports.modalBody = function () {
    return $('.modal-body');
};

exports.modalBodyText = function () {
    return pph.collapseWhitespace(pph.trim(pph.getAllText(exports.modalBody())))
};

exports.validateModalMessageBody = function (value) {
    expect(exports.modalBodyText()).toBe(value);
};

exports.modalDialog = function () {
    return $('.modal-dialog');
};
exports.modalFooter = function () {
    return $('.modal-footer');
};

exports.modalFooterButtonByLabel = function (label) {
    return exports.modalFooter().element(by.cssContainingText(
        'button', label
    ));
};

exports.expectModalPopUpToBeDisplayed = function (more) {
    more = more || {};

    if (more.timeout === undefined) {
        more.timeout = _tf_config._system_.wait_timeout;
    }

    browser.wait(
        ExpectedConditions.visibilityOf(exports.modalHeading()),
        more.timeout
    );
};

exports.clickModalPrimaryButton = function() {
    return exports.modalFooter().$('.btn-primary').click();
};

exports.mainSearchBar = function () {
    return $('#DSP-SEARCH');
};
module.exports.dirtyCheckContinueEditingButton = function () {
    return exports.modalFooter().element(
        by.cssContainingText("button", "Continue Editing")
    );
};
module.exports.dirtyCheckConfirmCancellationButton = function () {
    return exports.modalFooter().element(
        by.cssContainingText("button", "CONFIRM CANCELLATION")
    );
};

module.exports.randomDate = function (start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports.isPresentAndDisplayed = function (element) {
    return element.isPresent().then(function (isPresent) {
        if (!isPresent) {
            return false;
        }
        return element.isDisplayed();
    });
};
module.exports.isNotPresentOrDisplayed = function (element) {
    return pph.not(pages.base.isPresentAndDisplayed(element));
};
exports.elementHasVerticalScrollbar = function (element) {
    if (!(element instanceof protractor.WebElement)) {
        element = element.getWebElement();
    }
    return browser.executeScript(function (element) {
        return element.scrollHeight > $(element).innerHeight();
    }, element);
};
exports.selectDropdownOption = function (element, value, more) {
    more = more || {};
    more.dropdownType = more.dropdownType || 'standard';
    return exports.selectDropdownOption[more.dropdownType](element, value, more);
};
exports.selectDropdownOption.standard = function (element, value) {
    element.click();
    element.element(by.cssContainingText('option', value)).click();
};
exports.selectDropdownOption.tg = function (element, value) {
    browser.executeScript(function (element) {
        element.click();
    }, element.$('.tg-dropdown-label').getWebElement());
    element.element(by.cssContainingText('.ng-binding', value)).click();
};
module.exports.selectRandomDropdownOption = function (element, more) {
    more = more || {};
    more.dropdownType = more.dropdownType || "standard";
    return module.exports.selectRandomDropdownOption[more.dropdownType](element, more);
};
module.exports.selectRandomDropdownOption.standard = function (element, more) {
    more = more || {};
    return (
        element.isPresent().then(
            function (elementPresent) {
                expect(elementPresent || more.skipIfNotPresent).toBeTruthy();
                if (elementPresent) {
                    return promise.all([
                        element,
                        element.isDisplayed(),
                        pph.matchesCssSelector(element, "[required]"),
                    ]);
                }
            }
        )
            .then(
            function (values) {
                var element;
                var elementDisplayed;
                var valueRequired;
                var options;
                var previousOptions;
                if (values === undefined) {
                    return;
                }
                element = values[0];
                elementDisplayed = values[1];
                valueRequired = values[2];
                if (!elementDisplayed && more.skipIfNotDisplayed) {
                    return null;
                }
                options = element.$$("option");
                if (valueRequired) {
                    options = options.filter(
                        function (option) {
                            return option.getAttribute("value").then(
                                function (value) {
                                    return value !== "";
                                }
                            );
                        }
                    );
                }
                if (more.different) {
                    previousOptions = options;
                    options = options.count().then(
                        function (optionCount) {
                            if (optionCount < 2) {
                                return options;
                            }
                            return previousOptions.filter(
                                function (option) {
                                    return pph.matchesCssSelector(option, ":not(:checked)");
                                }
                            );
                        }
                    );
                }
                return options.then(
                    function (options) {
                        pages.base.scrollIntoView(element);
                        element.click();
                        return _.sample(options).click().getText();
                    }
                );
            }
        )
    );
};
module.exports.selectRandomDropdownOption.tg = function (element, more) {
    more = more || {};
    return element.isPresent().then(function (elementPresent) {
        expect(more.skipIfNotPresent || elementPresent).toBeTruthy();
        if (!elementPresent) {
            return;
        }
        return element.isDisplayed().then(function (elementDisplayed) {
            var originalOptionText;
            var blacklist = [];
            expect(elementDisplayed || more.skipIfNotDisplayed).toBeTruthy();
            if (!elementDisplayed) {
                return;
            }

            pages.base.scrollIntoView(element);

            originalOptionText = pages.base.selectedTgDropdownOption(element);
            return (function tryAgain() {
                var remainingOptions;
                browser.executeScript(function (element) {
                    element.click();
                }, element.$('.tg-dropdown-label').getWebElement());
                return $$(".tg-dropdown-menu li .ng-binding")
                    .filter(function (option) {
                        var optionText = option.getText();
                        return pph.and(
                            pph.areNotEqual(optionText, ""),
                            pph.notInArray(blacklist, optionText),
                            pph.or(!more.different, pph.areNotEqual(optionText, originalOptionText))
                        );
                    })
                    .then(function (remainingOptions) {
                        var randomOption;
                        var randomOptionText;
                        expect(remainingOptions.length).toBeGreaterThan(0);
                        if (remainingOptions.length === 0) {
                            console.log("WARNING - TG dropdown options exhausted");
                            element.element(by.cssContainingText(optionCssSelector, originalOptionText)).click();
                            return originalOptionText;
                        }
                        randomOption = _.sample(remainingOptions);
                        randomOptionText = randomOption.getText();

                        pages.base.scrollIntoView(randomOption);

                        randomOption.click();
                        return pph.matchesCssSelector(element, ".ng-invalid").then(function (invalidOption) {
                            if (invalidOption) {
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
exports.enterRandomLetterOnField = function (element) {
    var randomLetter = random.letter();

    pages.base.scrollIntoView(element);

    element.clear();
    element.sendKeys(randomLetter);

    return randomLetter;
};
exports.enterNewRandomLetterOnField = function (element) {
    pages.base.scrollIntoView(element);

    return element.getAttribute("value").then(function (currentValue) {
        var randomLetter;

        do {
            randomLetter = random.letter();
        } while (currentValue.indexOf(randomLetter) !== -1);

        element.clear();
        element.sendKeys(randomLetter);

        return randomLetter;
    });
};
module.exports.selectRandomTypeaheadValue = function (element, more) {
    more = more || {};
    var deferred = promise.defer();
    if (more.different) {
        it("Type a random letter not occurring in the current field value", function () {
            pages.base.scrollIntoView(element);

            element.getAttribute("value").then(function (currentValue) {
                var randomLetter;

                do {
                    randomLetter = (
                        String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25))
                    );
                } while (currentValue.indexOf(randomLetter) !== -1);

                element.clear();
                element.sendKeys(randomLetter);
            });
        });
    }
    else {
        it("Type a random letter in the search field", function () {
            var randomLetter = String.fromCharCode("A".charCodeAt(0) + Math.round(Math.random() * 25));
            pages.base.scrollIntoView(element);
            element.clear();
            element.sendKeys(randomLetter);
        });
    }
    it(
        "Wait for suggestions dropdown to appear", function () {
            var suggestion = $(".typeahead-result");
            browser.wait(
                ExpectedConditions.visibilityOf(suggestion),
                _tf_config._system_.wait_timeout
            );
            expect(suggestion.getText()).not.toContain("No results");
        }
    );
    it(
        "Pick a random suggestion", function () {
            $$(".typeahead-result").then(
                function (suggestions) {
                    var randomSuggestion = _.sample(suggestions);
                    randomSuggestion.click();
                    deferred.fulfill(element.getAttribute("value"));
                }
            );
        }
    );
    return deferred.promise;
};
module.exports.randomTgDropdownSelector = function (element) {
    var deferred = promise.defer();
    var fn = function () {
        it(
            "Pick a random dropdown option", function () {
                pages.base.scrollIntoView(element);
                element.click();
                element.$$("[tg-component-render-template='$templates.popup.item']").then(
                    function (optionElements) {
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
module.exports.selectedDropdownOption = function (element) {
    return element.$("option:checked").getText();
};
module.exports.selectedTgDropdownOption = function (element) {
    return (
        element
            .$('[tg-component-render-template="$templates.main.selectedItem"]')
            .getText()
    );
};
exports.refreshPage = function () {
    browser.refresh();
    pages.base.waitForAjax();
};

exports.hitEscape = function () {
    return $('body').sendKeys(protractor.Key.ESCAPE);
};

exports.dialogError = function () {
    return pph.trim(exports.modalHeading().getText()).then(function (heading) {
        if (!/error/i.test(heading)) {
            return null;
        }

        return heading;
    }, function (err) {
        if(err.message.indexOf('No element found using locator:') !== -1) {
            return null;
        }

        throw err;
    }).then(function (heading) {
        if(!heading) {
            return null;
        }

        return pph.stringConcat(heading, '\n\n', exports.modalBodyText());
    });
};

exports.downloadDirectoryEntries = function () {
    return glob.sync(systemConfig.downloadsDirectoryPath + '/*');
};

exports.clearDownloadsDirectory = function () {
    exports.downloadDirectoryEntries().forEach(function (path) {
        fs.removeSync(path);
    });
};

exports.validateDownloadFileCount = function (value) {
    expect(exports.downloadDirectoryEntries().length).toBe(value);
};

exports.openNewTab = function (url) {
    function ptorOpenNewTab(url) {
        function openTab() {
            $('#TAT_TEMP_ELEMENT').remove();
            window.open(url);
        };

        $('<div id="TAT_TEMP_ELEMENT">.</div>').appendTo('body').on('click', openTab);
    };

    browser.executeScript(ptorOpenNewTab, url);
    $('#TAT_TEMP_ELEMENT').click();
};

exports.focusOnTheNewOpenedTab = function (i) {
    return browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[i]);
    }).then(function () {
        return browser.wait(ExpectedConditions.visibilityOf($('body')));
    });
};

exports.duplicateTab = function () {
    browser.getCurrentUrl().then(function (url) {
        exports.openNewTab(url);
    });
};

exports.switchToTab = function (methodSpecifier) {
    return methodSpecifierCall(exports.switchToTab, methodSpecifier);
};

exports.switchToTab.index = function (i) {
    return browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[i]);
    }).then(function () {
        return browser.wait(ExpectedConditions.visibilityOf($('body')));
    });
};

exports.closeCurrentTabAndSwitchTo = function (methodSpecifier) {
    browser.driver.close();

    return exports.switchToTab(methodSpecifier);
};

exports.closeTabByIndex = function (index) {
    exports.switchToTab(index);
    browser.driver.close();
    exports.switchToTab(index - 1);
};

exports.pause = function () {
    browser.executeScript(function () {
        window.tatDbgActive = true;

        if (window.tatDbgAttached) {
            return;
        }

        document.body.addEventListener('keydown', function (event) {
            if (!tatDbgActive || event.keyCode !== 120) {
                return;
            }

            window.tatDbgDone = true;
        });

        window.tatDbgAttached = true;
    });

    return browser.wait(function () {
        return browser.executeScript(function () {
            if (window.tatDbgDone) {
                delete window.tatDbgDone;
                tatDbgActive = false;

                return true;
            }

            return false;
        });
    }, 99999999);
};

exports.orphanBrowser = function () {
    console.log('Orphaning browser...');
    process.exit(-1);
};

exports.clickElement = function (elName, el, wait) {
    var notDisabledCssSelector = ':not([disabled], .disabled)';
    pages.base.scrollIntoView(el);
    if (wait === true) {
        wait = _tf_config._system_.wait_timeout;
    }
    if (!wait) {
        expect(pph.matchesCssSelector(el, notDisabledCssSelector)).toBe(true);
    }
    else {
        browser.wait(
            function () {
                return pph.matchesCssSelector(el, notDisabledCssSelector);
            },
            wait
        );
    }
    el.click();
    pages.base.waitForAjax();
};

exports.scrollTo = function () {
    var args = overloaded(arguments, {
        1: ['y'],
        2: ['x', 'y']
    });

    if (args.x === undefined) {
        args.x = 0;
    }

    return browser.executeScript(function (x, y) {
        switch (y) {
            case 'top':
                y = 0;
                break;

            case 'bottom':
                y = document.body.scrollHeight;
                break;
        }

        window.scrollTo(x, y);
    }, args.x, args.y);
};


exports.waitForTheElementToBeHidden= function(condition, timeout) {
    timeout = timeout || 50000;
    return browser.wait(function() {
        return el.isDisplayed().then(function(displayed) {
            return displayed === false;
        });
    }, timeout);
};

exports.tooltipContainer = function () {
    return $('body > .tooltip');
};

exports.tooltipMessage = function () {
    var container = asAlways(exports.tooltipContainer(), 'scrollIntoView');

    return pph.getAllText(container);
};

exports.validateTooltipMessage = function (message) {
    browser.wait(EC.visibilityOf(exports.tooltipContainer()));
    expect(exports.tooltipMessage()).toBe(message);
};

"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_scope === undefined) {
    pages.create_deal_scope = new ftf.pageObject({
        locators: {
            addScopeIcon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            descriptionField: {css: "input[name='scopeDescription']"},
            contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
            territoryField: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass']"},
            territoryInput: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            territoryDropDown: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            addPublisherShareSetLink: {css: "div.publisher-share-totals a[data-ng-click='addChain(modularEditModels.model.id, form.terms.activeScope.id);']"},
            firstPublisherNameField: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div[name='acquirer'] input[ng-model='$term']"},
            firstPublisherOwnPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"},
            firstPublisherCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"},
            firstPublisherNameAMField: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div[name='acquirer'] input[ng-model='$term']"},
            firstPublisherNameAMCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"},
            publisherNameDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            firstPublisherTypeEOrPAArrow: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-caret.fa.fa-caret-down"},
            firstPublisherTypeEOrPADropDown: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"},
            firstPublisherTypeValue: {css: "#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(1) div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow"},
            firstPublisherTypeText: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button"},
            savePublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            cancelPublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            addChainLink: {css: "#deal-publisher a[data-ng-click='addChain(modularEditModels.activeScope.publisher_share_set_id, modularEditModels.activeScope.id)']"},
            noPublisherShareWarningMessage: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.ng-scope div.validation-message-error.ng-scope div.validation-message-text.ng-binding"},
            noPublisherShareWarningIcon: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.ng-scope div.validation-message-error.ng-scope i.fa.fa-exclamation-triangle"},
            publisherIsRequiredErrorMessage: {css: "#deal-publisher div[data-name='chainForm'] div[data-ng-show='chainForm.$invalid'] ul[role='alert'] li[data-ng-if='chainForm.$error.required || chainForm.$error.typeaheadModelSelected']"},
            decimalPlacesPublisherShareErrorMessage: {css: "#deal-publisher div[data-name='chainForm'] div[data-ng-show='chainForm.$invalid'] ul[role='alert'] li[data-ng-if='chainForm.$error.decimal']"},
            subtotalOwnPublisherShareErrorMessage: {css: "#deal-publisher div[data-name='chainForm'] div[data-ng-show='chainForm.$invalid'] ul[role='alert'] li.ng-scope"},
            chainTotalOwnPublisherShareErrorMessage: {css: "#deal-publisher  ul[role='alert'] li[data-ng-show='pubShareSetForm.$error.scopeOwnTotal']"},
            chainSubtotalOfCollectCannotGreaterThanOwnErrorMessage: {css: "#deal-publisher div[data-name='chainForm'] div[data-ng-show='chainForm.$invalid'] ul[role='alert'] li.ng-scope"},
            yesSocietyAwardCreditPss: {css: "#deal-publisher button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(1)"},
            noSocietyAwardCreditPss: {css: "#deal-publisher button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(2)"},
            modalDialog: {css: "div.modal-dialog.ng-scope"},
            confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            cancelModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
            publisherShareSetArea: {css: "div[data-tg-modular-edit-id='publisherShareSets']"},
            overridePssIcon: {css: "div[data-ng-click='form.popups.overridenSubPublishers = !form.popups.overridenSubPublishers'] a[data-ng-click='showSubPubOverrideForm()'] i"},
            subPublisherOverridePssInputField: {css: "div[name='subPublisherOverride'] input[ng-model='$term']"},
            territoryOverridePssField: {css: "div[ng-model='form.subPubOverride.override_territories.territories'] div.tg-territory div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass']"},
            territoryOverridePssFieldInput: {css: "div[ng-model='form.subPubOverride.override_territories.territories'] div.tg-territory div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            cancelOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='showSubPubOverrideForm()']"},
            doneOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='subPubOverrideForm.$invalid || addSubPublisherOverride(form.subPubOverride, modularEditModels.model.id, false)']"},
            addAnotherOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='subPubOverrideForm.$invalid || addSubPublisherOverride(form.subPubOverride, modularEditModels.model.id, true)']"},
            sharePublisherShareSetIcon: {css: "div[data-ng-click='showSharePublisherShareSetSection(true)'] i"},
            useThisPublisherShareSetButton: {css: "button[data-ng-click='sharePubShareSet(pss.id, modularEditModels.activeScope.id)']"}
        },

        addContractPeriodIcon: function () {
            return $$(".column-add-button-icon").first();

        },

        addScopeForm: function () {
            pages.create_deal_scope.elems.addScopeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.contractTypeDropDown));
        },

        fillScopeDescriptionField: function () {
            pages.create_deal_scope.elems.descriptionField.sendKeys("description");
        },

        selectRandomContractTypeScope: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("select[name='scopeContractType'] option"))));
            browser.driver.findElements(By.css("select[name='scopeContractType'] option"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        selectContractTypeScope: function (specific_value) {
            var desiredOption;
            browser.driver.findElements(By.css("select[name='scopeContractType'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(specific_value) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        clickOnPublisherShareSetArea: function () {
            pages.create_deal_scope.elems.publisherShareSetArea.click();
        },

        addTerritoryByTypingToScope: function () {
            pages.create_deal_scope.elems.territoryField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryInput));
            pages.create_deal_scope.elems.territoryInput.sendKeys("a");
        },

        addTheSpecificTerritoryByTypingToScope: function (territory) {
            pages.create_deal_scope.elems.territoryField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryInput));
            pages.create_deal_scope.elems.territoryInput.sendKeys(territory);
        },

        addTheSpecificTerritoryOverridePssByTypingToScope: function (territory) {
            pages.create_deal_scope.elems.territoryOverridePssField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryOverridePssFieldInput));
            pages.create_deal_scope.elems.territoryOverridePssFieldInput.sendKeys(territory);
        },

        selectRandomCountry: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        selectSpecificCountry: function (country) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.territoryDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(country) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        validateTheNoPublisherShareWarningMessage: function () {
            pages.create_deal_scope.elems.noPublisherShareWarningMessage.getText().
                then(function (promise) {
                    console.log("No publisher share warning message is: " + promise);
                    expect(promise).toEqual("No publisher shares have been defined on any scopes associated with this contract period.");
                });
        },

        validateThe3DecimalsExceededPublisherShareWarningMessage: function () {
            pages.create_deal_scope.elems.decimalPlacesPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("3 decimals exceeded error message: " + promise);
                    expect(promise).toEqual("Shares cannot exceed 3 decimal places");
                });
        },

        validateSubtotalOfOwnPublisherShareWarningMessage: function () {
            pages.create_deal_scope.elems.subtotalOwnPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("Subtotal of own error message is : " + promise);
                    expect(promise).toEqual("Subtotal of Own cannot be greater than 100%");
                });
        },

        validateSubtotalOfOwnLessThanCollectPublisherShareWarningMessage: function () {
            pages.create_deal_scope.elems.subtotalOwnPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("Subtotal of own less than collect error message is : " + promise);
                    expect(promise).toEqual("Subtotal of Collect cannot be greater than Own");
                });
        },

        validateChainTotalOfOwnPublisherShareWarningMessage: function () {
            pages.create_deal_scope.elems.chainTotalOwnPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("Chain total of own error message is : " + promise);
                    expect(promise).toEqual("Chain total of Own cannot be greater than 100%");
                });
        },

        validateChainTotalOfOwnPublisherCannotBeLessThanCollectShareWarningMessage: function () {
            pages.create_deal_scope.elems.chainSubtotalOfCollectCannotGreaterThanOwnErrorMessage.getText().
                then(function (promise) {
                    console.log("Chain total of own less than collect error message is : " + promise);
                    expect(promise).toEqual("Subtotal of Collect cannot be greater than Own");
                });
        },

        validateThePlaceholdersForPublisherNameE: function () {
            pages.create_deal_scope.elems.firstPublisherNameField.getAttribute("placeholder").
                then(function (promise) {
                    console.log("Placeholder for firs publisher name E is : " + promise);
                    expect(promise).toEqual("search by name or IPI number...");
                });
        },

        validateThePlaceholdersForPublisherNameAM: function () {
            pages.create_deal_scope.elems.firstPublisherNameAMField.getAttribute("placeholder").
                then(function (promise) {
                    console.log("Placeholder for firs publisher name AM is : " + promise);
                    expect(promise).toEqual("search by name or IPI number...");
                });
        },

        validateTheErrorMessagePublisherRequired: function () {
            pages.create_deal_scope.elems.publisherIsRequiredErrorMessage.getText().
                then(function (promise) {
                    console.log("Error message for publisher required is : " + promise);
                    expect(promise).toEqual("Publisher is required");
                });
        },

        validateThePublisherNameTooltipEOrPAIcon: function () {
            browser.driver.actions().mouseMove(element(by.css("#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.span1.nomargins.ng-scope"))).perform();
            element(By.css("#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.span1.nomargins.ng-scope")).getAttribute("data-tooltip").
                then(function (promise) {
                    console.log("Publisher type E or PA tooltip text : " + promise);
                    expect(promise).toEqual("Original Publisher");
                });
        },

        validateThePublisherNameTooltipAMIcon: function () {
            browser.driver.actions().mouseMove(element(by.css("#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div.pull-left.ps-role.ng-scope"))).perform();
            element(By.css("#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div.pull-left.ps-role.ng-scope")).getAttribute("data-tooltip").
                then(function (promise) {
                    console.log("Publisher type AM tooltip text : " + promise);
                    expect(promise).toEqual("Administrator");
                });
        },

        clickOnAddPublisherShareSetLink: function () {
            pages.create_deal_scope.elems.addPublisherShareSetLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.firstPublisherNameField));
        },

        fillInFirstPublisherNameField: function (publisherName) {
            pages.create_deal_scope.elems.firstPublisherNameField.sendKeys(publisherName);
        },

        fillInFirstPublisherNameOwnPercent: function () {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            pages.create_deal_scope.elems.firstPublisherOwnPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.create_deal_scope.elems.firstPublisherCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameOwnPercentSpecificValue: function (percent) {
            pages.create_deal_scope.elems.firstPublisherOwnPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameCollectPercentSpecificValue: function (percent) {
            pages.create_deal_scope.elems.firstPublisherCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameAMField: function (publisherNameAM) {
            pages.create_deal_scope.elems.firstPublisherNameAMField.sendKeys(publisherNameAM);
        },

        fillInFirstPublisherNameAMCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.create_deal_scope.elems.firstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameAMCollectPercentSpecificValue: function (percent) {
            pages.create_deal_scope.elems.firstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        clearFirstPublisherNameField: function () {
            pages.create_deal_scope.elems.firstPublisherNameField.clear();
        },

        clearFirstPublisherNameAMField: function () {
            pages.create_deal_scope.elems.firstPublisherNameAMField.clear();
        },


        clearInFirstPublisherNameOwnPercent: function () {
            pages.create_deal_scope.elems.firstPublisherOwnPercent.clear();
        },

        clearInFirstPublisherNameCollectPercent: function () {
            pages.create_deal_scope.elems.firstPublisherCollectPercent.clear();
        },

        clearFirstPublisherNameAMCollectPercent: function () {
            pages.create_deal_scope.elems.firstPublisherNameAMCollectPercent.clear();
        },

        selectRandomPublisherNameDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        validatePublisherNameDropDownHasNoResults: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer"))));
            element(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer")).getText()
                .then(function (promise) {
                    console.log("The message for no results of publisher name drop down is: " + promise);
                    expect(promise).toContain("No results for");
                });
        },

        selectTheSpecificPublisherNameDropDown: function (publisherName) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(publisherName) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        selectSpecificOptionEOrPAPublisherType: function (publisher) {
            var desiredOption;
            pages.create_deal_scope.elems.firstPublisherTypeEOrPAArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.firstPublisherTypeEOrPADropDown));
            browser.driver.findElements(by.css("#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(publisher) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        saveThePublisherShareSets: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.create_deal_scope.elems.savePublisherShareSet));
            pages.create_deal_scope.elems.savePublisherShareSet.click();
            pages.create_deal_scope.waitForAjax();
        },

        cancelPublisherShareSet: function () {
            pages.create_deal_scope.elems.cancelPublisherShareSet.click();
            pages.create_deal_scope.waitForAjax();
        },

        clickOnAddChainLink: function () {
            pages.create_deal_scope.elems.addChainLink.click();
        },

        selectSpecificOptionEOrPAPublisherTypeChainI: function (publisher, i) {
            var desiredOption;
            browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-caret.fa.fa-caret-down")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"))));
            browser.driver.findElements(by.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(publisher) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillPublisherNameFieldChainI: function (i) {
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix div[name='acquirer'] input[ng-model='$term']"));
            element.sendKeys("test");
        },

        fillPublisherNameOwnPercentFieldChainI: function (i) {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"));
            element.sendKeys(percent);
        },

        fillPublisherNameCollectPercentFieldChainI: function (i) {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("#deal-publisher  div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"));
            element.sendKeys(percent);
        },

        fillPublisherNameAMFieldChainI: function (i) {
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div[name='acquirer'] input[ng-model='$term']"));
            element.sendKeys("wb music corp");
        },

        clickOnTheYesSocietyAwardCreditPublisherShareSet: function(){
          pages.create_deal_scope.elems.yesSocietyAwardCreditPss.click();
        },

        clickOnTheNoSocietyAwardCreditPublisherShareSet: function(){
            pages.create_deal_scope.elems.noSocietyAwardCreditPss.click();
        },

        selectRandomPublisherNameDropDownChainI: function (i) {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickNewContractPeriodButton: function () {
            this.addContractPeriodIcon().click();
        },

        selectSpecificPublisherNameDropDownChainI: function (publisherName, i) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(publisherName) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        fillPublisherNameAMCollectPercentChainI: function (i) {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"));
            element.sendKeys(percent);
        },

        clickOnDeleteIconChainI: function (i) {
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope"));
            element.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.confirmDeleteModalDialog));
        },

        validateTheDeleteIconChainIPublisherShareIsPresent: function (i) {
            expect(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")).isDisplayed).toBeTruthy();
        },


        confirmOnDeleteModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.create_deal_scope.elems.confirmDeleteModalDialog));
            pages.create_deal_scope.elems.confirmDeleteModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.create_deal_scope.elems.confirmDeleteModalDialog));
        },

        clickOnTheAddOverrideIconPss: function () {
            pages.create_deal_scope.elems.overridePssIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_scope.elems.subPublisherOverridePssInputField));
        },

        selectTheSubPublisherOverridePss: function(subPublisherName, subPublisherSelected){
            var desiredOption;
            pages.create_deal_scope.elems.subPublisherOverridePssInputField.sendKeys(subPublisherName);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[name='subPublisherOverride'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(subPublisherSelected) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        selectTheSubPublisherOverrideTerritoryPss: function(territory){
            var desiredOption;
            pages.create_deal_scope.elems.territoryOverridePssField.click();
            pages.create_deal_scope.elems.territoryOverridePssFieldInput.sendKeys(territory);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(territory) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
        },

        clickOnTheCancelSubPublisherOverridePss: function(){
            pages.create_deal_scope.elems.cancelOverridePublisherShareSetButton.click();
        },

        clickOnTheAddAnotherSubPublisherOverridePss: function(){
            pages.create_deal_scope.elems.addAnotherOverridePublisherShareSetButton.click();
        },

        clickOnTheDoneSubPublisherOverridePss: function(){
            pages.create_deal_scope.elems.doneOverridePublisherShareSetButton.click();
        },

        shareThePublisherShareSet: function(){
            pages.create_deal_scope.elems.sharePublisherShareSetIcon.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.create_deal_scope.elems.useThisPublisherShareSetButton));
            pages.create_deal_scope.elems.useThisPublisherShareSetButton.click();
        }


    });
}
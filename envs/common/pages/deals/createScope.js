'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.createDealScope === undefined) {
    pages.createDealScope = new ftf.pageObject({
        locators: {
            addScopeIcon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            descriptionField: {css: "input[name='scopeDescription']"},
            contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
            territoryField: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass']"},
            territoryInput: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            territoryActivator: {css: 'div[ng-model="modularEditModels.model.deal_scope_territories.territories"] .tg-typeahead__tags-text'},
            territoryDropDown: {css: "div.tg-territory ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
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
            subPublisherOverridePssField: {css: "div[name='subPublisherOverride'] div[ng-class='tgTypeaheadWrapClass']"},
            subPublisherOverridePssInputField: {css: "div[name='subPublisherOverride'] input[ng-model='$term']"},
            territoryOverridePssField: {css: "div[ng-model='form.subPubOverride.override_territories.territories'] div.tg-territory div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass']"},
            territoryOverridePssFieldInput: {css: "div[ng-model='form.subPubOverride.override_territories.territories'] div.tg-territory div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            cancelOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='showSubPubOverrideForm()']"},
            doneOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='subPubOverrideForm.$invalid || addSubPublisherOverride(form.subPubOverride, modularEditModels.model.id, false)']"},
            addAnotherOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='subPubOverrideForm.$invalid || addSubPublisherOverride(form.subPubOverride, modularEditModels.model.id, true)']"},
            sharePublisherShareSetIcon: {css: "div[data-ng-click='showSharePublisherShareSetSection(true)'] i"},
            useThisPublisherShareSetButton: {css: "button[data-ng-click='sharePubShareSet(pss.id, modularEditModels.activeScope.id)']"},
            activeScope: {css: "li[data-ng-click='onSetActiveScope(sp.id)']"},
            shareUnshareDeleteScopeIcon: {css: "div[data-ng-click='$event.preventDefault()'] i"},
            shareScopeLink: {css: "a[data-ng-click='showShareScopeModal(sp.id)']"},
            unshareScopeLink: {css: "a[data-ng-click='showUnshareScopeModal(sp.id)']"},
            shareScopeModalDialog: {css: "div.modal-dialog.large.ng-scope"},
            cancelShareScopeModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"},
            doneShareScopeModalDialog: {css: "div.modal-footer button[data-ng-click='data.done()']"},
            selectAllLinkShareScopeModalDialog: {css: "a[data-ng-click='data.addAllAvailableContractPeriods()']"},
            deSelectAllLinkShareScopeModalDialog: {css: "a[data-ng-click='data.removeAllAvailableContractPeriods()']"}
        },

        addContractPeriodIcon: function () {
            return $$(".column-add-button-icon").first();

        },
        addContractPeriodButton: function () {
            return $(".column-add-button-hint").first();

        },


        addScopeForm: function () {
            pages.createDealScope.elems.addScopeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.contractTypeDropDown));
        },

        fillScopeDescriptionField: function () {
            pages.createDealScope.elems.descriptionField.sendKeys("description");
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
            pages.createDealScope.elems.publisherShareSetArea.click();
        },

        enterTerritoryOfControlSearchTerms: function (value) {
            var activator = pages.createDealScope.elems.territoryActivator;
            var input = pages.createDealScope.elems.territoryInput;

            pages.base.scrollIntoView(activator);

            activator.click();

            browser.wait(ExpectedConditions.visibilityOf(input));

            return input.sendKeys(value);
        },

        addTerritoryByTypingToScope: function () {
            pages.createDealScope.elems.territoryField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.territoryInput));
            pages.createDealScope.elems.territoryInput.sendKeys("asia");
        },

        addTheSpecificTerritoryByTypingToScope: function (territory) {
            pages.createDealScope.elems.territoryField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.territoryInput));
            pages.createDealScope.elems.territoryInput.sendKeys(territory);
        },

        addTheSpecificTerritoryOverridePssByTypingToScope: function (territory) {
            pages.createDealScope.elems.territoryOverridePssField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.territoryOverridePssFieldInput));
            pages.createDealScope.elems.territoryOverridePssFieldInput.sendKeys(territory);
        },

        territoryOfControlSearchResultLabels: function () {
            var selector = '.tg-typeahead__suggestions-group-item';
            browser.wait(ExpectedConditions.visibilityOf($(selector)));
            return $$(selector);
        },

        selectTerritoryOfControlSearchResultByIndex: function (i) {
            var element = pages.createDealScope.territoryOfControlSearchResultLabels().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        },

        selectRandomCountry: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.territoryDropDown));
            browser.driver.findElements(By.css("div.tg-territory ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    var element = options[randomNumber];
                    element.click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(pages.createDealScope.elems.territoryDropDown));
        },

        selectSpecificCountry: function (country) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.territoryDropDown));
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
            pages.createDealScope.elems.noPublisherShareWarningMessage.getText().
                then(function (promise) {
                    console.log("No publisher share warning message is: " + promise);
                    expect(promise).toEqual("No publisher shares have been defined on any scopes associated with this contract period.");
                });
        },

        validateThe3DecimalsExceededPublisherShareWarningMessage: function () {
            pages.createDealScope.elems.decimalPlacesPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("3 decimals exceeded error message: " + promise);
                    expect(promise).toEqual("Shares cannot exceed 3 decimal places");
                });
        },

        validateSubtotalOfOwnPublisherShareWarningMessage: function () {
            pages.createDealScope.elems.subtotalOwnPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("Subtotal of own error message is : " + promise);
                    expect(promise).toEqual("Subtotal of Own cannot be greater than 100%");
                });
        },

        validateSubtotalOfOwnLessThanCollectPublisherShareWarningMessage: function () {
            pages.createDealScope.elems.subtotalOwnPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("Subtotal of own less than collect error message is : " + promise);
                    expect(promise).toEqual("Subtotal of Collect cannot be greater than Own");
                });
        },

        validateChainTotalOfOwnPublisherShareWarningMessage: function () {
            pages.createDealScope.elems.chainTotalOwnPublisherShareErrorMessage.getText().
                then(function (promise) {
                    console.log("Chain total of own error message is : " + promise);
                    expect(promise).toEqual("Chain total of Own cannot be greater than 100%");
                });
        },

        validateChainTotalOfOwnPublisherCannotBeLessThanCollectShareWarningMessage: function () {
            pages.createDealScope.elems.chainSubtotalOfCollectCannotGreaterThanOwnErrorMessage.getText().
                then(function (promise) {
                    console.log("Chain total of own less than collect error message is : " + promise);
                    expect(promise).toEqual("Subtotal of Collect cannot be greater than Own");
                });
        },

        validateThePlaceholdersForPublisherNameE: function () {
            pages.createDealScope.elems.firstPublisherNameField.getAttribute("placeholder").
                then(function (promise) {
                    console.log("Placeholder for firs publisher name E is : " + promise);
                    expect(promise).toEqual("search by name or IPI number...");
                });
        },

        validateThePlaceholdersForPublisherNameAM: function () {
            pages.createDealScope.elems.firstPublisherNameAMField.getAttribute("placeholder").
                then(function (promise) {
                    console.log("Placeholder for firs publisher name AM is : " + promise);
                    expect(promise).toEqual("search by name or IPI number...");
                });
        },

        validateTheErrorMessagePublisherRequired: function () {
            pages.createDealScope.elems.publisherIsRequiredErrorMessage.getText().
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

        clickOnAddPublisherShareSetLink: function(options) {
            var linkElement = pages.createDealScope.elems.addPublisherShareSetLink;

            options = options || {};

            if(options.scrollIntoView) {
                pages.base.scrollIntoView(linkElement);
            }

            linkElement.click();

            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.firstPublisherNameField));
        },

        publisherShareChainContainers: function () {
            return element.all(
                by.repeater('chain in modularEditModels.model._chains track by chain.id')
            );
        },

        publisherShareRows: function (i) {
            return (
                pages.createDealScope.publisherShareChainContainers().get(i)
                    .$$('.publisher-row, .am-share').filter(function (element) {
                        return element.isDisplayed();
                    })
            );
        },

        publisherSearchTermsInput: function (i, j) {
            return (
                pages.createDealScope.publisherShareRows(i)
                    .get(j).$('[name="acquirer"] input')
            );
        },

        enterPublisherSearchTerms: function (i, j, value) {
            var element = pages.createDealScope.publisherSearchTermsInput(i, j);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        },

        publisherSearchResultLabels: function () {
            var labelElements = $$('.tg-typeahead__suggestions-group-item');
            browser.wait(ExpectedConditions.visibilityOfAny(labelElements));
            return labelElements;
        },

        selectPublisherSearchResultByIndex: function (i) {
            var element = pages.createDealScope.publisherSearchResultLabels().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        },

        ownPublisherShareInput: function (i, j) {
            return (
                pages.createDealScope.publisherShareRows(i)
                    .get(j).$('[name="ownShare"]')
            );
        },

        enterOwnPublisherShare: function (i, j, value) {
            var element = pages.createDealScope.ownPublisherShareInput(i, j);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        },

        collectPublisherShareInput: function (i, j) {
            return (
                pages.createDealScope.publisherShareRows(i)
                    .get(j).$('[name="collectShare"]')
            );
        },

        enterCollectPublisherShare: function (i, j, value) {
            var element = pages.createDealScope.collectPublisherShareInput(i, j);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        },

        fillInFirstPublisherNameField: function (publisherName) {
            pages.createDealScope.elems.firstPublisherNameField.sendKeys(publisherName);
        },

        fillInFirstPublisherNameOwnPercent: function () {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            pages.createDealScope.elems.firstPublisherOwnPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.createDealScope.elems.firstPublisherCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameOwnPercentSpecificValue: function (percent) {
            pages.createDealScope.elems.firstPublisherOwnPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameCollectPercentSpecificValue: function (percent) {
            pages.createDealScope.elems.firstPublisherCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameAMField: function (publisherNameAM) {
            pages.createDealScope.elems.firstPublisherNameAMField.sendKeys(publisherNameAM);
        },

        fillInFirstPublisherNameAMCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.createDealScope.elems.firstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        fillInFirstPublisherNameAMCollectPercentSpecificValue: function (percent) {
            pages.createDealScope.elems.firstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        clearFirstPublisherNameField: function () {
            pages.createDealScope.elems.firstPublisherNameField.clear();
        },

        clearFirstPublisherNameAMField: function () {
            pages.createDealScope.elems.firstPublisherNameAMField.clear();
        },


        clearInFirstPublisherNameOwnPercent: function () {
            pages.createDealScope.elems.firstPublisherOwnPercent.clear();
        },

        clearInFirstPublisherNameCollectPercent: function () {
            pages.createDealScope.elems.firstPublisherCollectPercent.clear();
        },

        clearFirstPublisherNameAMCollectPercent: function () {
            pages.createDealScope.elems.firstPublisherNameAMCollectPercent.clear();
        },

        selectRandomPublisherNameDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.publisherNameDropDownData));
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
                    //expect(promise).toContain("No results for");
                });
        },

        selectTheSpecificPublisherNameDropDown: function (publisherName) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.publisherNameDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.toLowerCase().indexOf(publisherName) != -1) {
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
            pages.createDealScope.elems.firstPublisherTypeEOrPAArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.firstPublisherTypeEOrPADropDown));
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
            var saveButton = pages.createDealScope.elems.savePublisherShareSet;

            pages.base.scrollIntoView(saveButton);

            browser.wait(ExpectedConditions.elementToBeClickable(saveButton));

            return saveButton.click();
        },

        cancelPublisherShareSet: function () {
            pages.createDealScope.elems.cancelPublisherShareSet.click();
            pages.createDealScope.waitForAjax();
        },

        clickOnAddChainLink: function () {
            pages.createDealScope.elems.addChainLink.click();
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

        clickOnTheYesSocietyAwardCreditPublisherShareSet: function () {
            pages.createDealScope.elems.yesSocietyAwardCreditPss.click();
        },

        clickOnTheNoSocietyAwardCreditPublisherShareSet: function () {
            pages.createDealScope.elems.noSocietyAwardCreditPss.click();
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
                                if (text.toLowerCase().indexOf(publisherName) != -1) {
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
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.confirmDeleteModalDialog));
        },

        validateTheDeleteIconChainIPublisherShareIsPresent: function (i) {
            expect(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")).isDisplayed).toBeTruthy();
        },


        confirmOnDeleteModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.confirmDeleteModalDialog));
            pages.createDealScope.elems.confirmDeleteModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.createDealScope.elems.confirmDeleteModalDialog));
        },

        clickOnTheAddOverrideIconPss: function () {
            pages.createDealScope.elems.overridePssIcon.click();
            pages.createDealAdvances.waitForAjax();
        },

        selectTheSubPublisherOverridePss: function (subPublisherName, subPublisherSelected) {
            var desiredOption;
            pages.createDealScope.elems.subPublisherOverridePssField.click();
            pages.createDealScope.elems.subPublisherOverridePssInputField.clear();
            pages.createDealScope.elems.subPublisherOverridePssInputField.sendKeys(subPublisherName);
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

        selectTheSubPublisherOverrideTerritoryPss: function (territory) {
            var desiredOption;
            pages.createDealScope.elems.territoryOverridePssField.click();
            pages.createDealScope.elems.territoryOverridePssFieldInput.sendKeys(territory);
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

        clickOnTheCancelSubPublisherOverridePss: function () {
            pages.createDealScope.elems.cancelOverridePublisherShareSetButton.click();
        },

        clickOnTheAddAnotherSubPublisherOverridePss: function () {
            pages.createDealScope.elems.addAnotherOverridePublisherShareSetButton.click();
        },

        clickOnTheDoneSubPublisherOverridePss: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.doneOverridePublisherShareSetButton));
            pages.createDealScope.elems.doneOverridePublisherShareSetButton.click();
        },

        shareThePublisherShareSet: function () {
            pages.createDealScope.elems.sharePublisherShareSetIcon.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.useThisPublisherShareSetButton));
            pages.createDealScope.elems.useThisPublisherShareSetButton.click();
        },

        shareTheScope: function () {
            browser.actions().mouseMove(pages.createDealScope.elems.activeScope).perform();
            browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
            pages.createDealScope.elems.shareScopeLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealScope.elems.shareScopeModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.selectAllLinkShareScopeModalDialog));
        },

        selectAllContractPeriodsShareScopeModalDialog: function () {
            pages.createDealScope.elems.selectAllLinkShareScopeModalDialog.click();
        },

        clickOnTheDoneShareScopeModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.doneShareScopeModalDialog));
            pages.createDealScope.elems.doneShareScopeModalDialog.click();
        }


    });
}

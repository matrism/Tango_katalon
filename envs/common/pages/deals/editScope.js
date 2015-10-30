'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealScope === undefined) {
    pages.editDealScope = new ftf.pageObject({
        locators: {
            addScopeIcon: {xpath: "//*[@class='overview-header']//h3[contains(text(),'Scopes')]//a[@class='column-add-button']"},
            contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
            territoryField: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass']"},
            territoryInput: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            territoryDropDown: {css: "div.tg-territory ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            publisherSharesTitle: {css: "div[name='scopeForm'] div.section-header-borderless.publisher-shares.ps-section-header.clearfix"},
            publisherSharesSetArea: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets']"},
            publisherSharesSetEditIcon: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editPublisherSharesHeaderTitles: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] div.clearfix.ps-heading"},
            scope1: {css: "div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']"},
            editAddPublisherShareSetLink: {css: "div.publisher-share-totals a[data-ng-click='addChain(modularEditModels.model.id, form.terms.activeScope.id);']"},
            editYesSocietyAwardCreditPss: {css: "#deal-publisher button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(1)"},
            editNoSocietyAwardCreditPss: {css: "#deal-publisher button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(2)"},
            editFirstPublisherNameField: {css: "#deal-publisher div[data-name='dealChainsForm'] div.publisher-row.clearfix div[name='acquirer'] input"},
            editFirstPublisherOwnPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"},
            editFirstPublisherCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"},
            editFirstPublisherNameAMField: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div[name='acquirer'] input"},
            editFirstPublisherNameAMCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"},
            editPublisherNameDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            editFirstPublisherTypeEOrPAArrow: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-caret.fa.fa-caret-down"},
            editFirstPublisherTypeEOrPADropDown: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"},
            editFirstPublisherTypeValue: {css: "#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(1) div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow"},
            editFirstPublisherTypeText: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button"},
            editSavePublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            editCancelPublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            editDeletePublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button[data-ng-show='!!tgDeleteButton']"},
            editAddChainLink: {css: "#deal-publisher a[data-ng-click='addChain(modularEditModels.activeScope.publisher_share_set_id, modularEditModels.activeScope.id)']"},
            modalDialog: {css: "div.modal-dialog.ng-scope"},
            confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            cancelModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
            deletePssModalDialog: {css: "div.modal.fade.in div.ng-scope"},
            confirmDeletePssModalDialog: {css: "div.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            cancelDeletePssModalDialog: {css: "div.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
            shareIconOnScope: {css: "div[data-ng-if='isScopeShared(sp.id)'] a.icon.share-icon.ng-binding i.fa.fa-share"},
            shareScopesDetailsPopup: {css: "div.shared-scope-popup.m-arrow"},
            shareScopesDetailsPopupContractPeriods: {css: "div[data-ng-show='form.popups.sharedScope'] ul li.ng-scope a"},
            saveChanges: {css: "div[data-ng-hide='form.isSavingDeal'] button[data-ng-click='saveFreshlyAddedModel(valid, activeForm)']"}
        },

        addScopeForm: function () {
            pages.editDealScope.elems.addScopeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.contractTypeDropDown));
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

        addTheSpecificTerritoryByTypingToScope: function (territory) {
            pages.editDealScope.elems.territoryField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.territoryInput));
            pages.editDealScope.elems.territoryInput.sendKeys(territory);
        },

        selectSpecificCountry: function (country) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.territoryDropDown));
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

        editClickOnAddPublisherShareSetLink: function () {
            pages.editDealScope.elems.editAddPublisherShareSetLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editFirstPublisherNameField));
        },

        editClickOnTheYesSocietyAwardCreditPublisherShareSet: function () {
            pages.base.scrollIntoView(pages.editDealScope.elems.editYesSocietyAwardCreditPss);
            pages.editDealScope.elems.editYesSocietyAwardCreditPss.click();
        },

        clickOnScope1: function () {
            pages.editDealScope.elems.scope1.click();
        },

        clickOnScopeNumberI: function (i) {
            browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")")).click();
        },

        clickOnShareIconOnScope: function () {
            pages.editDealScope.elems.shareIconOnScope.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.shareScopesDetailsPopup));
        },

        validateThePublisherSharesTitle: function () {
            pages.editDealScope.elems.publisherSharesTitle.getText().
                then(function (promise) {
                    console.log("Publisher shares set title is : " + promise);
                    expect(promise).toEqual("PUBLISHER SHARES");
                });
        },

        validateThePublisherSharesHeaderTableTitle: function () {
            pages.editDealScope.elems.editPublisherSharesHeaderTitles.getText().
                then(function (promise) {
                    console.log("Publisher shares header titles are : " + promise);
                    expect(promise).toContain("Publisher Role / Name");
                    expect(promise).toContain("Own");
                    expect(promise).toContain("Collect");
                });
        },

        editClickOnPublisherShareSetArea: function () {
            pages.editDealScope.elems.publisherShareSetArea.click();
        },


        editThePublisherSharesSet: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.publisherSharesSetArea));
            pages.editDealScope.elems.publisherSharesSetArea.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.publisherSharesSetEditIcon));
            pages.editDealScope.elems.publisherSharesSetEditIcon.click();
        },

        clickOnAddSocietyAgreementNumberLinkPublisherSharesSetChainI: function (i) {
            var element = browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']"));
            element.click();
        },

        validateThePublisherSharesSetAddSocAgreemNumberTextChainI: function (i) {
            element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']")).getText().
                then(function (promise) {
                    console.log("Add society agreement number text message publisher shares set is  : " + promise);
                    expect(promise).toEqual("Add Society Agreement Numbers");
                });
        },

        validateThePublisherSharesSetPublisherNameEOrPAChainI: function (i) {
            element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") div[data-ng-repeat='share in chain.shares']:nth-child(2)")).getText().
                then(function (promise) {
                    console.log("Publisher name text values publisher shares set are  : " + promise);
                    expect(promise).toContain("%");
                    expect(promise).not.toEqual("");
                });
        },

        validateThePublisherSharesSetPublisherNameAMChainI: function (i) {
            element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") div[data-ng-repeat='share in chain.shares']:nth-child(3)")).getText().
                then(function (promise) {
                    console.log("Publisher name AM text values publisher shares set are  : " + promise);
                    expect(promise).toContain("AM");
                    expect(promise).toContain("%");
                    expect(promise).not.toEqual("");
                });
        },

        validateThePublisherSharesSetSubtotalChainI: function (i) {
            element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") div.ps-section__subtotal.clearfix")).getText().
                then(function (promise) {
                    console.log("Publisher name subtotal text values publisher shares set are  : " + promise);
                    expect(promise).toContain("SUBTOTAL");
                    expect(promise).toContain("%");
                    expect(promise).not.toEqual("");
                });
        },

        editInFirstPublisherNameField: function (publisherName) {
            pages.editDealScope.elems.editFirstPublisherNameField.clear();
            pages.editDealScope.elems.editFirstPublisherNameField.sendKeys(publisherName);
        },

        editInFirstPublisherNameOwnPercent: function () {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            pages.editDealScope.elems.editFirstPublisherOwnPercent.clear();
            pages.editDealScope.elems.editFirstPublisherOwnPercent.sendKeys(percent);
        },

        editInFirstPublisherNameCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.editDealScope.elems.editFirstPublisherCollectPercent.clear();
            pages.editDealScope.elems.editFirstPublisherCollectPercent.sendKeys(percent);
        },

        editInFirstPublisherNameOwnPercentSpecificValue: function (percent) {
            pages.editDealScope.elems.editFirstPublisherOwnPercent.clear();
            pages.editDealScope.elems.editFirstPublisherOwnPercent.sendKeys(percent);
        },

        editInFirstPublisherNameCollectPercentSpecificValue: function (percent) {
            pages.editDealScope.elems.editFirstPublisherCollectPercent.clear();
            pages.editDealScope.elems.editFirstPublisherCollectPercent.sendKeys(percent);
        },

        editInFirstPublisherNameAMField: function (publisherNameAM) {
            pages.editDealScope.elems.editFirstPublisherNameAMField.clear();
            pages.editDealScope.elems.editFirstPublisherNameAMField.sendKeys(publisherNameAM);
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editPublisherNameDropDownData));
        },

        editInFirstPublisherNameAMCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.clear();
            pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        editSaveTheChangesPage: function(){
            pages.base.scrollIntoView(pages.editDealScope.elems.saveChanges);
            pages.editDealScope.elems.saveChanges.click();
        },

        editInFirstPublisherNameAMCollectPercentSpecificValue: function (percent) {
            pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.clear();
            pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        editClearFirstPublisherNameField: function () {
            pages.editDealScope.elems.editFirstPublisherNameField.clear();
        },

        editClearFirstPublisherNameAMField: function () {
            pages.editDealScope.elems.editFirstPublisherNameAMField.clear();
        },

        editClearInFirstPublisherNameOwnPercent: function () {
            pages.editDealScope.elems.editFirstPublisherOwnPercent.clear();
        },

        editClearInFirstPublisherNameCollectPercent: function () {
            pages.editDealScope.elems.editFirstPublisherCollectPercent.clear();
        },

        editClearFirstPublisherNameAMCollectPercent: function () {
            pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.clear();
        },

        editSelectRandomPublisherNameDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editPublisherNameDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 10));
                    var element = options[randomNumber];
                    pages.base.scrollIntoView(element);
                    element.click();
                })
        },

        editSelectTheSpecificPublisherNameDropDown: function (publisherName) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editPublisherNameDropDownData));
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

        editSelectSpecificOptionEOrPAPublisherType: function (publisher) {
            var desiredOption;
            pages.editDealScope.elems.editFirstPublisherTypeEOrPAArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editFirstPublisherTypeEOrPADropDown));
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

        editSaveThePublisherShareSets: function () {
            pages.base.scrollIntoView(pages.editDealScope.elems.editSavePublisherShareSet);
            pages.editDealScope.elems.editSavePublisherShareSet.click();
            pages.editDealScope.waitForAjax();
        },

        editCancelPublisherShareSets: function () {
            pages.editDealScope.elems.editCancelPublisherShareSet.click();
            pages.editDealScope.waitForAjax();
        },

        editClickOnAddChainLink: function () {
            pages.editDealScope.elems.editAddChainLink.click();
        },

        editSelectSpecificOptionEOrPAPublisherTypeChainI: function (publisher, i) {
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

        editPublisherNameFieldChainI: function (i) {
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix div[name='acquirer'] input"));
            element.sendKeys("test");
        },

        editPublisherNameOwnPercentFieldChainI: function (i) {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"));
            element.sendKeys(percent);
        },

        editPublisherNameCollectPercentFieldChainI: function (i) {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("#deal-publisher  div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"));
            element.sendKeys(percent);
        },

        editPublisherNameAMFieldChainI: function (i) {
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div[name='acquirer'] input"));
            element.sendKeys("wb music corp");
        },

        editSelectRandomPublisherNameDropDownChainI: function (i) {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        editSelectSpecificPublisherNameDropDownChainI: function (publisherName, i) {
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

        editPublisherNameAMCollectPercentChainI: function (i) {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"));
            element.sendKeys(percent);
        },

        editClickOnDeleteIconChainI: function (i) {
            var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope"));
            element.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.confirmDeleteModalDialog));
        },

        editValidateTheDeleteIconChainIPublisherShareIsPresent: function (i) {
            expect(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")).isDisplayed).toBeTruthy();
        },


        editConfirmOnDeleteModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.confirmDeleteModalDialog));
            pages.editDealScope.elems.confirmDeleteModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.confirmDeleteModalDialog));
        },

        editConfirmModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.confirmDeletePssModalDialog));
            pages.editDealScope.elems.confirmDeletePssModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.confirmDeletePssModalDialog));
        },

        editCancelModalDialog: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.cancelDeletePssModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.cancelDeletePssModalDialog));
            pages.editDealScope.elems.cancelDeletePssModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.cancelDeletePssModalDialog));
        },

        editDeletePublisherSharesSet: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.editDeletePublisherShareSet));
            pages.editDealScope.elems.editDeletePublisherShareSet.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.confirmDeletePssModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.confirmDeletePssModalDialog));
            pages.editDealScope.elems.confirmDeletePssModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.confirmDeletePssModalDialog));
        }
    });
}

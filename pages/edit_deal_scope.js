"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.edit_deal_scope === undefined) {
    pages.edit_deal_scope = new ftf.pageObject({
        locators: {
            publisherSharesTitle: {css: "div[name='scopeForm'] div.section-header-borderless.publisher-shares.ps-section-header.clearfix"},
            publisherSharesSetArea: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets']"},
            publisherSharesSetEditIcon: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editPublisherSharesHeaderTitles: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] div.clearfix.ps-heading"},
            scope1: {css: "div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']"},
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
            shareScopesDetailsPopupContractPeriods: {css: "div[data-ng-show='form.popups.sharedScope'] ul li.ng-scope a"}
        },

        clickOnScope1: function () {
            pages.edit_deal_scope.elems.scope1.click();
        },

        clickOnScopeNumberI: function (i) {
            browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")")).click();
        },

        clickOnShareIconOnScope: function () {
            pages.edit_deal_scope.elems.shareIconOnScope.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.shareScopesDetailsPopup));
        },

        validateThePublisherSharesTitle: function () {
            pages.edit_deal_scope.elems.publisherSharesTitle.getText().
                then(function (promise) {
                    console.log("Publisher shares set title is : " + promise);
                    expect(promise).toEqual("PUBLISHER SHARES");
                });
        },

        validateThePublisherSharesHeaderTableTitle: function () {
            pages.edit_deal_scope.elems.editPublisherSharesHeaderTitles.getText().
                then(function (promise) {
                    console.log("Publisher shares header titles are : " + promise);
                    expect(promise).toContain("Publisher Role / Name");
                    expect(promise).toContain("Own");
                    expect(promise).toContain("Collect");
                });
        },

        editClickOnPublisherShareSetArea: function () {
            pages.edit_deal_scope.elems.publisherShareSetArea.click();
        },


        editThePublisherSharesSet: function () {
            //browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_scope.elems.publisherSharesSetArea));
            pages.edit_deal_scope.elems.publisherSharesSetArea.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.publisherSharesSetEditIcon));
            pages.edit_deal_scope.elems.publisherSharesSetEditIcon.click();
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
            pages.edit_deal_scope.elems.editFirstPublisherNameField.clear();
            pages.edit_deal_scope.elems.editFirstPublisherNameField.sendKeys(publisherName);
        },

        editInFirstPublisherNameOwnPercent: function () {
            var percent = (Math.random() * 3 + 30).toFixed(2);
            pages.edit_deal_scope.elems.editFirstPublisherOwnPercent.clear();
            pages.edit_deal_scope.elems.editFirstPublisherOwnPercent.sendKeys(percent);
        },

        editInFirstPublisherNameCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.edit_deal_scope.elems.editFirstPublisherCollectPercent.clear();
            pages.edit_deal_scope.elems.editFirstPublisherCollectPercent.sendKeys(percent);
        },

        editInFirstPublisherNameOwnPercentSpecificValue: function (percent) {
            pages.edit_deal_scope.elems.editFirstPublisherOwnPercent.clear();
            pages.edit_deal_scope.elems.editFirstPublisherOwnPercent.sendKeys(percent);
        },

        editInFirstPublisherNameCollectPercentSpecificValue: function (percent) {
            pages.edit_deal_scope.elems.editFirstPublisherCollectPercent.clear();
            pages.edit_deal_scope.elems.editFirstPublisherCollectPercent.sendKeys(percent);
        },

        editInFirstPublisherNameAMField: function (publisherNameAM) {
            pages.edit_deal_scope.elems.editFirstPublisherNameAMField.clear();
            pages.edit_deal_scope.elems.editFirstPublisherNameAMField.sendKeys(publisherNameAM);
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.editPublisherNameDropDownData));
        },

        editInFirstPublisherNameAMCollectPercent: function () {
            var percent = (Math.random() * 9 + 1).toFixed(2);
            pages.edit_deal_scope.elems.editFirstPublisherNameAMCollectPercent.clear();
            pages.edit_deal_scope.elems.editFirstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        editInFirstPublisherNameAMCollectPercentSpecificValue: function (percent) {
            pages.edit_deal_scope.elems.editFirstPublisherNameAMCollectPercent.clear();
            pages.edit_deal_scope.elems.editFirstPublisherNameAMCollectPercent.sendKeys(percent);
        },

        editClearFirstPublisherNameField: function () {
            pages.edit_deal_scope.elems.editFirstPublisherNameField.clear();
        },

        editClearFirstPublisherNameAMField: function () {
            pages.edit_deal_scope.elems.editFirstPublisherNameAMField.clear();
        },

        editClearInFirstPublisherNameOwnPercent: function () {
            pages.edit_deal_scope.elems.editFirstPublisherOwnPercent.clear();
        },

        editClearInFirstPublisherNameCollectPercent: function () {
            pages.edit_deal_scope.elems.editFirstPublisherCollectPercent.clear();
        },

        editClearFirstPublisherNameAMCollectPercent: function () {
            pages.edit_deal_scope.elems.editFirstPublisherNameAMCollectPercent.clear();
        },

        editSelectRandomPublisherNameDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.editPublisherNameDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        editSelectTheSpecificPublisherNameDropDown: function (publisherName) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.editPublisherNameDropDownData));
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
            pages.edit_deal_scope.elems.editFirstPublisherTypeEOrPAArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.editFirstPublisherTypeEOrPADropDown));
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
            browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_scope.elems.editSavePublisherShareSet));
            pages.edit_deal_scope.elems.editSavePublisherShareSet.click();
            pages.edit_deal_scope.waitForAjax();
        },

        editCancelPublisherShareSets: function () {
            pages.edit_deal_scope.elems.editCancelPublisherShareSet.click();
            pages.edit_deal_scope.waitForAjax();
        },

        editClickOnAddChainLink: function () {
            pages.edit_deal_scope.elems.editAddChainLink.click();
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
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.confirmDeleteModalDialog));
        },

        editValidateTheDeleteIconChainIPublisherShareIsPresent: function (i) {
            expect(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")).isDisplayed).toBeTruthy();
        },


        editConfirmOnDeleteModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.create_deal_scope.elems.confirmDeleteModalDialog));
            pages.edit_deal_scope.elems.confirmDeleteModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_scope.elems.confirmDeleteModalDialog));
        },

        editConfirmModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_scope.elems.confirmDeletePssModalDialog));
            pages.edit_deal_scope.elems.confirmDeletePssModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_scope.elems.confirmDeletePssModalDialog));
        },

        editCancelModalDialog: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.cancelDeletePssModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_scope.elems.cancelDeletePssModalDialog));
            pages.edit_deal_scope.elems.cancelDeletePssModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_scope.elems.cancelDeletePssModalDialog));
        },

        editDeletePublisherSharesSet: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_scope.elems.editDeletePublisherShareSet));
            pages.edit_deal_scope.elems.editDeletePublisherShareSet.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_scope.elems.confirmDeletePssModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_scope.elems.confirmDeletePssModalDialog));
            pages.edit_deal_scope.elems.confirmDeletePssModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_scope.elems.confirmDeletePssModalDialog));
        }
    });
}
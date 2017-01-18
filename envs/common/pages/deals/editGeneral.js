'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealGeneral === undefined) {
    pages.editDealGeneral = new ftf.pageObject({

        locators: {
            editGeneralLeftFirstFourFieldsArea: {css: "div[data-tg-modular-edit-id='generalLeft'] div.DETAIL.ng-scope"},
            editGeneralLeftFirstFourFieldsEditorIcon: {css: "div[data-tg-modular-edit-id='generalLeft'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            removeExistingContractPartyIcon: {css: "span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            editContractingPartyElement: {css: "div[name='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"},
            editContractingPartyInputField: {css: "div[name='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editCompanyCodeElement: {css: "div[name='company'] div[ng-class='tgTypeaheadWrapClass']"},
            editCompanyCodeInputField: {css: "div[name='company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editExecutionDateYearElement: {css: "input[data-ng-model='date.year']"},
            editExecutionDateMonthElement: {css: "input[data-ng-model='date.month']"},
            editExecutionDateDayElement: {css: "input[data-ng-model='date.day']"},
            saveEditLeftGeneralTabArea: {css: "div[data-tg-modular-edit-id='generalLeft'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            cancelEditLeftGeneralTabArea: {css: "div[data-tg-modular-edit-id='generalLeft'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            internalContactTitle: {css: "div.ng-scope div.span12.nomargins:nth-child(3) h2"},
            internalContactsArea: {css: "div.ng-scope div.span12.nomargins:nth-child(3)"},
            internalContactTableData: {css: "table.view-internal-contact tbody"},
            internalContactsEditIcon: {css: "div.ng-scope div.span12.nomargins:nth-child(3) button i.fa.fa-pencil"},
            internalContactsEditInputField: {css: "div[ng-model='contact.user] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            addInternalContactsLink: {css: "div.add-new-button button.btn.btn-link"},
            saveEditInternalContactsButton: {css: "div[tg-modular-edit-id='internalContacts'] button[data-ng-click='tgModularViewMethods.save()']"},
            cancelEditInternalContactsButton: {css: "div[tg-modular-edit-id='internalContacts'] button.btn.btn-cancel.ng-binding.pull-left"},
            editInternalContactsInputField: {css: "div[ng-model='contact.user'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editInternalContactsDropDownData: {css: "div.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-group-item.ng-scope div.internal-contacts-results__tbody.ng-scope"},
            editInternalContactRoleInputField: {css: "div[ng-model='contact.roles'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            removeInternalContactRoleInputField: {css: "div[ng-model='contact.roles'] div div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            removeInternalContactsElement: {css: 'div[ng-repeat="contact in tgModularEditModel.$getItems()"]:nth-child(1) button.internal-contact__remove'},
            confirmationModalDialog: {css: "div.modal-dialog.ng-scope"},
            cancelModalDialogElement: {css: "div.modal.fade.in div.ng-scope"},
            yesModalDialog: {css: "div.modal-footer button[ng-click='ok();']"},
            noModalDialog: {css: "div.modal-footer button[ng-click='cancel();']"},
            yesCancelModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            noCancelModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"}
        },


        clickOnEditInternalContactsArea: function () {
            pages.editDealGeneral.elems.internalContactsArea.click();
        },

        clickOnEditIconInternalContacts: function () {
            pages.editDealGeneral.elems.internalContactsEditIcon.click();
        },


        clickOnAddInternalContactsLink: function () {
            pages.editDealGeneral.elems.addInternalContactsLink.click();
        },

        clickOnSaveEditInternalContacts: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealGeneral.elems.saveEditInternalContactsButton));
            pages.editDealGeneral.elems.saveEditInternalContactsButton.click();
            browser.sleep(10000);
        },

        clickOnCancelEditInternalContacts: function () {
            pages.editDealGeneral.elems.cancelEditInternalContactsButton.click();
        },

        editInternalContactsField: function (internal_contact) {
            browser.sleep(1000)
            pages.editDealGeneral.elems.editInternalContactsInputField.clear();
            pages.editDealGeneral.elems.editInternalContactsInputField.sendKeys(internal_contact);
        },

        selectEditRandomInternalContactsFromDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.editInternalContactsDropDownData));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-group-item.ng-scope div.internal-contacts-results__tbody.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealGeneral.elems.editInternalContactsDropDownData));
        },

        selectEditSpecificInternalContactsFromDropDown: function (internalRole) {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.editInternalContactsDropDownData));
            var desiredOption;
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(internalRole) != -1) {
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
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealGeneral.elems.editInternalContactsDropDownData));
        },

        selectEditRandomInternalContactsFromDropDownRoleI: function (i) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            pages.editDealGeneral.waitForAjax();
        },

        clickEditInternalContactsRole: function () {
            pages.editDealGeneral.elems.editInternalContactRoleInputField.click();
        },

        editTheIRowInternalContactField: function (i) {
            var element = browser.findElement(By.css("div[ng-repeat='contact in tgModularEditModel.$getItems()']:nth-child(" + i + ") div[ng-model='contact.user'] input[ng-model='$term']"));
            element.clear();
            element.sendKeys("test");
            browser.sleep(1000);
        },

        clickEditInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[ng-repeat='contact in tgModularEditModel.$getItems()']:nth-child(" + i + ") div[ng-model='contact.roles'] input[ng-model='$term']"));
            element.click();
        },

        removeEditInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[ng-repeat='contact in tgModularEditModel.$getItems()']:nth-child(" + i + ") div[ng-model='contact.roles'] div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"));
            element.click();
        },

        removeEditInternalContactRole: function () {
            pages.editDealGeneral.elems.removeInternalContactRoleInputField.click();
        },

        removeEditInternalContactsRow: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.removeInternalContactsElement));
            pages.base.scrollIntoView(pages.editDealGeneral.elems.removeInternalContactsElement);
            pages.editDealGeneral.elems.removeInternalContactsElement.click();
            browser.sleep(2000);
        },

        removeEditInternalContactsRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") button[data-ng-click='removeInternalContact(modularEditModels.contacts, internalContact)']"));
            element.click();
        },

        clickOnYesModalDialog: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.yesCancelModalDialog));
            pages.base.scrollIntoView(pages.editDealGeneral.elems.yesCancelModalDialog);
            pages.editDealGeneral.elems.yesCancelModalDialog.click();
            browser.sleep(2000);
        },

        clickOnNoModalDialog: function () {
            pages.editDealGeneral.elems.noCancelModalDialog.click();
        },

        editTheGeneralTabFirstLeftElements: function () {
            browser.actions().mouseMove(pages.editDealGeneral.elems.editGeneralLeftFirstFourFieldsArea).perform();
            //pages.editDealGeneral.elems.editGeneralLeftFirstFourFieldsArea.click();
            pages.editDealGeneral.elems.editGeneralLeftFirstFourFieldsEditorIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.editExecutionDateYearElement));
        },

        editRemoveTheExistingContractingParty: function () {
            pages.editDealGeneral.elems.removeExistingContractPartyIcon.click();
        },

        editFillIntoTheContractingParty: function (contracting) {
            pages.editDealGeneral.elems.editContractingPartyElement.click();
            pages.editDealGeneral.elems.editContractingPartyInputField.sendKeys(contracting);
        },

        editSelectRandomValueDropDownContractingParty: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[0].click();
                });
            pages.editDealGeneral.waitForAjax();
        },

        editFillIntoTheCompanyCode: function (value) {
            pages.editDealGeneral.elems.editCompanyCodeElement.click();
            pages.editDealGeneral.elems.editCompanyCodeInputField.sendKeys(value);
        },

        editSelectRandomValueDropDownCompanyCode: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            pages.editDealGeneral.waitForAjax();
        },


        editSelectDesiredSigningTerritory: function (specific_country) {
            pages.createDealGeneral.elems.dealSigningTerritoryPopup.click();
            expect(pages.createDealGeneral.elems.dealSigningTerritoryDropDownData.isDisplayed);
            var desiredOption;
            browser.driver.findElements(by.css("div[name='dealSigningTerritory'] div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope a"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(specific_country) != -1) {
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

        editSelectTheRandomSpecificArtist: function (artistSearch, artistValue) {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealGeneral.elems.artistsField));
            pages.createDealGeneral.elems.artistsField.click();
            pages.createDealGeneral.elems.artistFieldInput.sendKeys(artistSearch);
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.artistsDropDownData));
            var desiredOption;

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from artist is : " + promise);
                if (promise.indexOf("Create New Artist") != -1) {
                    browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            element.click();
                            //browser.actions().mouseMove(element).click().perform();
                            browser.sleep(2000);
                        })
                }
                else {
                    browser.driver.findElements(By.css("div[name='artists'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[0];
                            element.click();
                            browser.sleep(2000);
                            //browser.actions().mouseMove(element).click().perform();
                        });
                }
            });
        },

        editSelectTheSpecificArtist: function (artistSearch, artist) {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealGeneral.elems.artistsField));
            pages.createDealGeneral.elems.artistsField.click();
            pages.createDealGeneral.elems.artistFieldInput.sendKeys(artistSearch);
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.artistsDropDownData));
            browser.driver.findElements(By.css("div[name='artists'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(artist) != -1) {
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

        editSelectTheRandomArtist: function (value) {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealGeneral.elems.artistsField));
            pages.createDealGeneral.elems.artistsField.click();
            pages.createDealGeneral.elems.artistFieldInput.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.artistsDropDownData));

            element(By.css("li.tg-typeahead__suggestions-footer div:nth-child(2)")).getText().then(function (promise) {
                console.log("Text from artist is : " + promise);
                if (promise.indexOf("Create New Artist") != -1) {
                    browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer div:nth-child(2)"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("div[name='artists'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },


        editFillIntoTheValidExecutionDateYear: function () {
            pages.editDealGeneral.elems.editExecutionDateYearElement.clear();
            pages.editDealGeneral.elems.editExecutionDateYearElement.sendKeys("2015");
        },

        editFillIntoTheValidExecutionDateMonth: function () {
            var number = Math.floor(Math.random() * 12) + 1;
            pages.editDealGeneral.elems.editExecutionDateMonthElement.clear();
            pages.editDealGeneral.elems.editExecutionDateMonthElement.sendKeys("07");
        },

        editFillIntoTheValidExecutionDateDay: function () {
            var number = Math.floor(Math.random() * 28) + 1;
            pages.editDealGeneral.elems.editExecutionDateDayElement.clear();
            pages.editDealGeneral.elems.editExecutionDateDayElement.sendKeys("07");
        },

        clickOnTheSaveEditGeneralLeftTabArea: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.saveEditLeftGeneralTabArea));
            pages.editDealGeneral.elems.saveEditLeftGeneralTabArea.click();
            pages.editDealGeneral.waitForAjax();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealGeneral.elems.editContractingPartyElement));
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.EDITOR.span6.editor-left.modular-edit.ng-valid.ng-scope.ng-pristine"))));
        },

        clickOnTheCancelEditGeneralLeftTabArea: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.cancelEditLeftGeneralTabArea));
            pages.editDealGeneral.elems.cancelEditLeftGeneralTabArea.click();
        },


        editSelectToTheExecutedContractStatus: function (value) {
            var desiredOption;
            browser.driver.findElement(By.css("div[name='contract_status'] div.tg-dropdown-button button.tg-dropdown-label.overflow")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[name='contract_status'] ul.dropdown-menu li.ng-scope a"))));
            browser.driver.findElements(By.css("div[name='contract_status'] ul.dropdown-menu li.ng-scope a"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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

        editCheckTheDealSigningTerritoryCannotBeChangedTooltip: function () {
            browser.actions().mouseMove(element(by.css("div[name='dealSigningTerritory'] div[ng-class='tgDropdownWrapClass'] "))).perform();
            browser.driver.findElement(By.css("div.tooltip-inner.ng-binding")).getText().then(function (promise) {
                console.log(" Tooltip text fade is : " + promise);
                expect(promise).toEqual("To edit the Deal Signing Territory, all Deal Payees need to be removed or a new deal should be created.");
            });
        }
    });
}




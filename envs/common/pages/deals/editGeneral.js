'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealGeneral === undefined) {
    pages.editDealGeneral = new ftf.pageObject({

        locators: {
            internalContactTitle: {css: "div.summary-section.ng-scope div.span12.nomargins:nth-child(3) h2"},
            internalContactsArea: {css: "div.summary-section.ng-scope div.span12.nomargins:nth-child(3)"},
            internalContactTableData: {css: "table.view-internal-contact tbody"},
            internalContactsEditIcon: {css: "div.summary-section.ng-scope div.span12.nomargins:nth-child(3) button i.fa.fa-pencil"},
            internalContactsEditInputField: {css: "div[data-ng-model='internalContact.model'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            addInternalContactsLink: {css: "div.add-new-button button.btn.btn-link"},
            saveEditInternalContactsButton: {css: "div[data-tg-modular-edit-id='internalContacts'] button[data-ng-click='tgModularViewMethods.save();']"},
            cancelEditInternalContactsButton: {css: "div[data-tg-modular-edit-id='internalContacts'] button.btn.btn-cancel.ng-binding"},
            editInternalContactsInputField: {css: "div[data-ng-model='internalContact.model'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editInternalContactsDropDownData: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            editInternalContactRoleInputField: {css: "div[data-ng-model='internalContact.roles'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            removeInternalContactRoleInputField: {css: "div[data-ng-model='internalContact.roles'] div div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            removeInternalContactsElement: {css: "div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(1) button[data-ng-click='removeInternalContact(modularEditModels.contacts, internalContact)']"},
            confirmationModalDialog: {css: "div.modal-dialog.ng-scope"},
            cancelModalDialogElement: {css: "div.modal.fade.in div.ng-scope"},
            yesModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            noModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"}
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
            pages.editDealGeneral.elems.editInternalContactsInputField.clear();
            pages.editDealGeneral.elems.editInternalContactsInputField.sendKeys(internal_contact);
        },

        selectEditRandomInternalContactsFromDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealGeneral.elems.editInternalContactsDropDownData));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
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
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.model'] input[ng-model='$term']"));
            element.clear();
            element.sendKeys("test");
            browser.sleep(1000);
        },

        clickEditInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.roles'] input[ng-model='$term']"));
            element.click();
        },

        removeEditInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.roles'] span[ng-click='!$isDisabled() && $removeTag($tag)']"));
            element.click();
        },

        removeEditInternalContactRole: function () {
            pages.editDealGeneral.elems.removeInternalContactRoleInputField.click();
        },

        removeEditInternalContactsRow: function () {
            pages.editDealGeneral.elems.removeInternalContactsElement.click();
        },

        removeEditInternalContactsRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") button[data-ng-click='removeInternalContact(modularEditModels.contacts, internalContact)']"));
            element.click();
        },

        clickOnYesModalDialog: function () {
            pages.editDealGeneral.elems.yesModalDialog.click();
        },

        clickOnNoModalDialog: function () {
            pages.editDealGeneral.elems.noModalDialog.click();
        }

    });
}

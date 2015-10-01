"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
require(pages_path + "edit_deal_general");
if (pages.edit_deal_general === undefined) {
    pages.edit_deal_general = new ftf.pageObject({

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
            modalDialog: {css: "div.modal-dialog ng-scope"},
            yesModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            noModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"}
        },


        clickOnEditInternalContactsArea: function () {
            pages.edit_deal_general.elems.internalContactsArea.click();
        },

        clickOnEditIconInternalContacts: function () {
            pages.edit_deal_general.elems.internalContactsEditIcon.click();
        },


        clickOnAddInternalContactsLink: function () {
            pages.edit_deal_general.elems.addInternalContactsLink.click();
        },

        clickOnSaveEditInternalContacts: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.edit_deal_general.elems.saveEditInternalContactsButton));
            pages.edit_deal_general.elems.saveEditInternalContactsButton.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.addInternalContactsLink));
        },

        clickOnCancelEditInternalContacts: function () {
            pages.edit_deal_general.elems.cancelEditInternalContactsButton.click();
        },

        editInternalContactsField: function (internal_contact) {
            pages.edit_deal_general.elems.editInternalContactsInputField.clear();
            pages.edit_deal_general.elems.editInternalContactsInputField.sendKeys(internal_contact);
        },

        selectEditRandomInternalContactsFromDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.elems.editInternalContactsDropDownData));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(pages.edit_deal_general.elems.editInternalContactsDropDownData));
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
            pages.edit_deal_general.waitForAjax();
        },

        clickEditInternalContactsRole: function () {
            pages.edit_deal_general.elems.editInternalContactRoleInputField.click();
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
            pages.edit_deal_general.elems.removeInternalContactRoleInputField.click();
        },

        removeEditInternalContactsRow: function () {
            pages.edit_deal_general.elems.removeInternalContactsElement.click();
        },

        removeEditInternalContactsRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") button[data-ng-click='removeInternalContact(modularEditModels.contacts, internalContact)']"));
            element.click();
        },

        clickOnYesModalDialog: function () {
            pages.edit_deal_general.elems.yesModalDialog.click();
        },

        clickOnNoModalDialog: function () {
            pages.edit_deal_general.elems.noModalDialog.click();
        }

    });
}

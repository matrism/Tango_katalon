"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
module.exports = pages.edit_deal_general = new ftf.pageObject({});

if (pages.edit_deal_general === undefined) {
    pages.edit_deal_general = new ftf.pageObject({

        locators: {
            internalContactTitle: {xpath: "//*[@data-ng-show='showSummary']//h2[contains(text(), 'Internal Contacts')]"},
            internalContactsArea: {css: "div[data-tg-modular-edit='internalContacts']"},
            internalContactTableData: {css: "table.view-internal-contact ng-scope tbody tr"},
            internalContactsEditIcon: {xpath: "//*[@data-tg-modular-edit='internalContacts']//div//button/i[@class='fa fa-pencil']"},
            internalContactsEditInputField: {css: "div[data-ng-model='internalContact.contact'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            addInternalContactsLink: {css: "div.add-new-button.ng-scope button.btn.btn-link"},
            saveEditInternalContactsButton: {xpath: "//*[@data-tg-modular-edit='internalContacts']//button[@data-ng-click='save()']"},
            cancelEditInternalContactsButton: {css: "div[data-tg-modular-edit='internalContacts'] div div div button.btn.btn-cancel.ng-binding"},
            editInternalContactsInputField: {css: "div[data-ng-model='internalContact.contact'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editInternalContactsDropDownData: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            editInternalContactRoleInputField: {css: "div[data-ng-model='internalContact.roles'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            removeInternalContactRoleInputField: {css: "div[data-ng-model='internalContact.roles'] div div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"},
            removeInternalContactsElement: {css: "div[data-tg-modular-edit='internalContacts'] div div div:nth-child(1) button[data-ng-click='removeInternalContact(internalContacts.contacts, internalContact)']"},
            modalDialog: {css: "div.modal-dialog ng-scope"},
            yesModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            noModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"},
            internalContactRoleRowIRequiredErrorIcon: {css: "div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") div.internal-contact__col.m-role i.internal-contact__error.fa.fa-exclamation-triangle.ng-scope"}
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
            pages.edit_deal_general.elems.saveEditInternalContactsButton.click();
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
                //browser.driver.findElements(By.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickEditInternalContactsRole: function () {
            pages.edit_deal_general.elems.editInternalContactRoleInputField.click();
        },

        editTheIRowInternalContactField: function (i) {
            var element = browser.findElement(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") div div[data-ng-model='internalContact.contact'] div div div div div input[ng-model='$term']"));
            element.clear();
            element.sendKeys("a");
        },

        clickEditInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") div div[data-ng-model='internalContact.roles'] div div div div div input[ng-model='$term']"));
            element.click();
        },

        removeEditInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") div div[data-ng-model='internalContact.roles'] div div div div div div div span[ng-click='!$isDisabled() && $removeTag($tag)']"));
            element.click();
        },

        removeEditInternalContactRole: function () {
            pages.edit_deal_general.elems.removeInternalContactRoleInputField.click();
        },

        removeEditInternalContactsRow: function () {
            pages.edit_deal_general.elems.removeInternalContactsElement.click();
        },

        removeEditInternalContactsRowI: function (i) {
            var element = browser.findElement(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") button[data-ng-click='removeInternalContact(internalContacts.contacts, internalContact)']"));
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

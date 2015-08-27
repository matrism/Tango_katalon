"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_payee === undefined) {
    pages.create_deal_payee = new ftf.pageObject({
        locators: {
            addNewPayeeField: {css: "div[data-ng-model='DPAY.filteredPayees'] div[ng-class='tgTypeaheadWrapClass']"},
            addNewPayeeInputField: {css: "div[data-ng-model='DPAY.filteredPayees'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            payeeCompanyNameCodeInputField: {css: "div[data-ng-model='payee.company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            scopePayeeInputField: {css: "div[data-ng-model='payee.selectedScope'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            savePayeeFormButton: {css: "div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            cancelPayeeFormButton: {css: "div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            legalRightPayeeInputField: {css: "input[data-ng-model='payeeDistribution.legal_right']"},
            distributionPayeeInputField: {css: "input[data-ng-model='payeeDistribution.distribution']"}
        },

        fillIntoAddNewPayeeFieldSpecificValue: function (payee) {
            pages.create_deal_payee.elems.addNewPayeeField.click();
            pages.create_deal_payee.elems.addNewPayeeInputField.sendKeys(payee);
        },

        selectTheRandomPayeeOrganisationFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        selectTheRandomPayeePersonFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        selectTheRandomValueForPayeeCompanyNameCode: function () {
            pages.create_deal_payee.elems.payeeCompanyNameCodeInputField.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        associateTheRandomScopeToPayee: function () {
            pages.create_deal_payee.elems.scopePayeeInputField.sendKeys("scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        saveThePayeeForm: function () {
            pages.create_deal_payee.elems.savePayeeFormButton.click();
            pages.create_deal_payee.waitForAjax();
        },

        cancelThePayeeForm: function () {
            pages.create_deal_payee.elems.cancelPayeeFormButton.click();
            pages.create_deal_payee.waitForAjax();
        },

        fillIntoThePayeeLegalRightInputField: function () {
            pages.create_deal_payee.elems.legalRightPayeeInputField.clear();
            pages.create_deal_payee.elems.legalRightPayeeInputField.sendKeys("100");
        },

        fillIntoThePayeeDistributionInputField: function () {
            pages.create_deal_payee.elems.distributionPayeeInputField.clear();
            pages.create_deal_payee.elems.distributionPayeeInputField.sendKeys("100");
        }

    })
}
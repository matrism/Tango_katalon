"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createDealPayee === undefined) {
    pages.createDealPayee = new ftf.pageObject({
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
            pages.createDealPayee.elems.addNewPayeeField.click();
            pages.createDealPayee.elems.addNewPayeeInputField.sendKeys(payee);
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
            pages.createDealPayee.elems.payeeCompanyNameCodeInputField.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        associateTheSpecificScopeNumberIToPayee: function (i) {
            var desiredOption;
            var specific_value = "Scope " + i;
            pages.createDealPayee.elems.scopePayeeInputField.sendKeys(specific_value);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
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
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },


        associateTheRandomScopeToPayee: function () {
            pages.createDealPayee.elems.scopePayeeInputField.sendKeys("scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        saveThePayeeForm: function () {
            pages.createDealPayee.elems.savePayeeFormButton.click();
            pages.createDealPayee.waitForAjax();
        },

        cancelThePayeeForm: function () {
            pages.createDealPayee.elems.cancelPayeeFormButton.click();
            pages.createDealPayee.waitForAjax();
        },

        fillIntoThePayeeLegalRightInputField: function () {
            pages.createDealPayee.elems.legalRightPayeeInputField.clear();
            pages.createDealPayee.elems.legalRightPayeeInputField.sendKeys("100");
        },

        fillIntoThePayeeDistributionInputField: function () {
            pages.createDealPayee.elems.distributionPayeeInputField.clear();
            pages.createDealPayee.elems.distributionPayeeInputField.sendKeys("100");
        }

    })
}
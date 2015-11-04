"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.editDealPayee === undefined) {
    pages.editDealPayee = new ftf.pageObject({
        locators: {
            payeeHeaderTitleLink: {css: "ul.nav.nav-tabs li.ng-scope:nth-child(3) a"},
            payeeArea: {css: "div[data-tg-modular-edit-id='payees'] "},
            editPayeeIcon: {css: "div[data-tg-modular-edit-id='payees'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editAddNewPayeeField: {css: "div[data-ng-model='DPAY.filteredPayees'] div[ng-class='tgTypeaheadWrapClass']"},
            editAddNewPayeeInputField: {css: "div[data-ng-model='DPAY.filteredPayees'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editPayeeCompanyNameCodeInputField: {css: "div[data-ng-model='payee.company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editScopePayeeInputField: {css: "div[data-ng-model='payee.selectedScope'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editSavePayeeFormButton: {css: "div[data-tg-modular-edit-id='newPayee'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            editCancelPayeeFormButton: {css: "div[data-tg-modular-edit-id='newPayee'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            editLegalRightPayeeInputField: {css: "input[data-ng-model='payeeDistribution.legal_right']"},
            editDistributionPayeeInputField: {css: "input[data-ng-model='payeeDistribution.distribution']"},
            editSavePayeeFooterButton: {css: "div.CONTROLS.ng-scope.page-footer button[data-ng-click='tgModularViewMethods.save();']"}
        },

        clickOnThePayeeHeaderLink: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.payeeHeaderTitleLink);
            pages.editDealPayee.elems.payeeHeaderTitleLink.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-if='DPAY.payeeNames'] a:nth-child(2)"))));
        },

        editThePayeeArea: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.payeeArea);
            pages.editDealPayee.elems.payeeArea.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editPayeeIcon));
            pages.editDealPayee.elems.editPayeeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddNewPayeeField));
        },

        editFillIntoAddNewPayeeFieldSpecificValue: function (payee) {
            pages.editDealPayee.elems.editAddNewPayeeField.click();
            pages.editDealPayee.elems.editAddNewPayeeInputField.sendKeys(payee);
        },

        editSelectTheRandomPayeeOrganisationFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editSelectTheRandomPayeePersonFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editSelectTheRandomValueForPayeeCompanyNameCode: function () {
            pages.editDealPayee.elems.editPayeeCompanyNameCodeInputField.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editAssociateTheSpecificScopeNumberIToPayee: function (i) {
            var desiredOption;
            var specific_value = "Scope " + i;
            pages.editDealPayee.elems.editScopePayeeInputField.sendKeys(specific_value);
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


        editAssociateTheRandomScopeToPayee: function () {
            pages.editDealPayee.elems.editScopePayeeInputField.sendKeys("scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editSaveThePayeeForm: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editSavePayeeFormButton);
            pages.editDealPayee.elems.editSavePayeeFormButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealPayee.elems.editCancelPayeeFormButton));
        },

        editSaveThePayeePage: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editSavePayeeFooterButton);
            pages.editDealPayee.elems.editSavePayeeFooterButton.click();
        },

        editCancelThePayeeForm: function () {
            pages.editDealPayee.elems.editCancelPayeeFormButton.click();
            pages.editDealPayee.waitForAjax();
        },

        editFillIntoThePayeeLegalRightInputField: function () {
            pages.editDealPayee.elems.editLegalRightPayeeInputField.clear();
            pages.editDealPayee.elems.editLegalRightPayeeInputField.sendKeys("100");
        },

        editFillIntoThePayeeDistributionInputField: function () {
            pages.editDealPayee.elems.editDistributionPayeeInputField.clear();
            pages.editDealPayee.elems.editDistributionPayeeInputField.sendKeys("100");
        }

    })
}


"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
if (pages.deal_general === undefined) {
    pages.deal_general = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",

        locators: {
            dealSigningTerritoryPopup: {css: "button.openPopupButton"},
            dealSigningTerritoryDropDownData: {css: "div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"},
            contractingPartiesInput: {css: "div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            contractingPartiesField: {css: "div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"},
            internalContactsInputField: {css: "div[data-ng-model='internalContact.contacts'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            internalContactsDropDownData: {xpath: "//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"},
            internalContactRoleInputField: {css: "div[data-ng-model='internalContact.roles'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"}
        },


        selectDesiredSigningTerritory: function (specific_country) {
            pages.deal_general.elems.dealSigningTerritoryPopup.click();
            expect(pages.deal_general.elems.dealSigningTerritoryDropDownData.isDisplayed);
            var desiredOption;
            browser.driver.findElements(by.css("div.typeaheadDropdown div[ng-click='selectTypeaheadOption($index)']"))
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

        fillContractingPartiesField: function (field) {
            pages.deal_general.elems.contractingPartiesField.click();
            pages.deal_general.elems.contractingPartiesInput.sendKeys(field);
        },

        selectContractingPartyValue: function (specific_value) {
            var desiredOption;
            browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions ng-scope']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"))
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

        fillIntoInternalContactsField: function (internal_contact) {
            pages.deal_general.elems.internalContactsInputField.sendKeys(internal_contact);
        },

        selectRandomInternalContactsFromDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.deal_general.elems.internalContactsDropDownData));
            browser.driver.findElements(By.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnInternalContactsRole: function () {
            pages.deal_general.elems.internalContactRoleInputField.click();
        }

    });
}

"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_general === undefined) {
    pages.create_deal_general = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",

        locators: {
            dealSigningTerritoryPopup: {css: "div[name='dealSigningTerritory'] div.tg-dropdown-button"},
            dealSigningTerritoryDropDownData: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope a"},
            contractingPartiesInput: {css: "div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            contractingPartiesField: {css: "div[ng-model='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"},
            internalContactsInputField: {css: "div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(1) div[data-ng-model='internalContact.model'] input[ng-model='$term']"},
            internalContactsDropDownData: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            internalContactRoleInputField: {css: "div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(1) div[data-ng-model='internalContact.roles'] input[ng-model='$term']"}
        },


        selectDesiredSigningTerritory: function (specific_country) {
            pages.create_deal_general.elems.dealSigningTerritoryPopup.click();
            expect(pages.create_deal_general.elems.dealSigningTerritoryDropDownData.isDisplayed);
            var desiredOption;
            browser.driver.findElements(by.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope a"))
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
            pages.create_deal_general.elems.contractingPartiesField.click();
            pages.create_deal_general.elems.contractingPartiesInput.sendKeys(field);
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
            pages.create_deal_general.elems.internalContactsInputField.sendKeys(internal_contact);
        },

        selectRandomInternalContactsFromDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_general.elems.internalContactsDropDownData));
            browser.driver.findElements(By.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnInternalContactsRole: function () {
            pages.create_deal_general.elems.internalContactRoleInputField.click();
        },

        fillIntoTheIRowInternalContactField: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.model'] input[ng-model='$term']"));
            element.sendKeys("test");
        },


        clickIntoInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child("+ i + ") div[data-ng-model='internalContact.roles'] input[ng-model='$term']"));
            element.click();
        }

    });
}
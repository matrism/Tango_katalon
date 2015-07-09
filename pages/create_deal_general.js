"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_general === undefined) {
    pages.create_deal_general = new ftf.pageObject({
            url: _tf_config.urls.app_url + "#/create/deal",

            locators: {
                draftContractStatusButton: {css: "#deal-general button[data-ng-model='deal.contract_execution_status']:nth-child(1)"},
                executedContractStatusButton: {css: "#deal-general button[data-ng-model='deal.contract_execution_status']:nth-child(2)"},
                yearExecutionDate: {css: "#deal-general input[data-ng-model='date.year']"},
                monthExecutionDate: {css: "#deal-general input[data-ng-model='date.month']"},
                dayExecutionDate: {css: "#deal-general input[data-ng-model='date.day']"},
                dealSigningTerritoryPopup: {css: "div[name='dealSigningTerritory'] div.tg-dropdown-button"},
                dealSigningTerritoryDropDownData: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope a"},
                contractingPartiesInput: {css: "div[name='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
                contractingPartiesField: {css: "div[name='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"},
                artistsField: {css: "div[name='artists'] div[ng-class='tgTypeaheadWrapClass']"},
                artistFieldInput: {css: "div[name='artists'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
                artistsDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
                representMultipleDeals: {css: "div.tg-dropdown-button"},
                exclusiveDealRights: {css: "#deal-general button[data-ng-model='deal.exclusive']:nth-child(1)"},
                nonExclusiveDealRights: {css: "#deal-general button[data-ng-model='deal.exclusive']:nth-child(2)"},
                dealKeywordsField: {css: "div[name='dealKeywords'] div[ng-class='tgTypeaheadWrapClass']"},
                dealKeywordsFieldInput: {css: "div[name='dealKeywords'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
                dealKeywordsDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
                wampsContractBriefNumberField: {css: "#deal-general input[name='wampsContractBriefNumber']"},
                auditPeriodField: {css: "#deal-general input[name='auditProvisionsMonthPeriod']"},
                periodFileSuitField: {css: "#deal-general input[name='suitFillMonthPeriod']"},
                legalFileReferenceCodeField: {css: "#deal-general input[name='legalFileNumbers']"},
                externalContactsNameDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
                externalContactNameFieldInput: {css: "div[data-ng-model='contact.model'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
                internalContactsInputField: {css: "div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(1) div[data-ng-model='internalContact.model'] input[ng-model='$term']"},
                internalContactsDropDownData: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
                internalContactRoleInputField: {css: "div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(1) div[data-ng-model='internalContact.roles'] input[ng-model='$term']"},
                demosDealChargeBacksField: {css: "div[data-ng-form='chargeBacksForm']:nth-child(1) input"},
                usCopyrightCertificateDealChargeBacksField: {css: "div[data-ng-form='chargeBacksForm']:nth-child(2) input"},
                legalFeesDealChargeBacksField: {css: "div[data-ng-form='chargeBacksForm']:nth-child(3) input"},
                advertisingPromotionsDealChargeBacksField: {css: "div[data-ng-form='chargeBacksForm']:nth-child(4) input"},
                leadSheetsDealChargeBacksField: {css: "div[data-ng-form='chargeBacksForm']:nth-child(5) input"},
                yesMechanicalNonTitleBoundIncome: {css: "div[data-ng-form='blackBoxClauseForm']:nth-child(1) button[data-ng-model='bbc.intbid']:nth-child(1)"},
                noMechanicalNonTitleBoundIncome: {css: "div[data-ng-form='blackBoxClauseForm']:nth-child(1) button[data-ng-model='bbc.intbid']:nth-child(2)"},
                yesPerformanceNonTitleBoundIncome: {css: "div[data-ng-form='blackBoxClauseForm']:nth-child(1) button[data-ng-model='bbc.intbid']:nth-child(1)"},
                noPerformanceNonTitleBoundIncome: {css: "div[data-ng-form='blackBoxClauseForm']:nth-child(1) button[data-ng-model='bbc.intbid']:nth-child(2)"}
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

            selectRandomContractingPartyValueFromDropDown: function () {
                browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
                    .then(function (options) {
                        var randomNumber = Math.floor((Math.random() * options.length));
                        options[randomNumber].click();
                    })
            },

            selectContractingPartyValue: function (specific_value) {
                var desiredOption;
                browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"))
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
                var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.roles'] input[ng-model='$term']"));
                element.click();
            },

            clickOnTheDraftContractStatus: function () {
                pages.create_deal_general.elems.draftContractStatusButton.click();
            },

            clickOnTheExecutedContractStatus: function () {
                pages.create_deal_general.elems.executedContractStatusButton.click();
            },

            fillIntoExecutionYearField: function () {
                var year = Math.floor(Math.random() * 215) + 1801;
                pages.create_deal_general.elems.yearExecutionDate.sendKeys(year);
            },

            fillIntoExecutionMonthField: function () {
                var month = Math.floor(Math.random() * 12) + 1;
                pages.create_deal_general.elems.monthExecutionDate.sendKeys(month);
            }

        });
}
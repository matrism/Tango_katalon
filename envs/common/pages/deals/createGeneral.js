'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.createDealGeneral === undefined) {
    exports = module.exports = pages.createDealGeneral = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",

        locators: {
            draftContractStatusButton: {css: "#deal-general button[data-ng-model='deal.contract_execution_status']:nth-child(1)"},
            executedContractStatusButton: {css: "#deal-general button[data-ng-model='deal.contract_execution_status']:nth-child(2)"},
            yearExecutionDate: {css: "#deal-general input[data-ng-model='date.year']"},
            monthExecutionDate: {css: "#deal-general input[data-ng-model='date.month']"},
            dayExecutionDate: {css: "#deal-general input[data-ng-model='date.day']"},
            dealSigningTerritoryPopup: {css: "div[name='dealSigningTerritory'] div.tg-dropdown-button"},
            dealSigningTerritoryDropDownData: {css: "div[name='dealSigningTerritory'] div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope a"},
            contractingPartiesInput: {css: "div[name='contractingParties'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            contractingPartiesField: {css: "div[name='contractingParties'] div[ng-class='tgTypeaheadWrapClass']"},
            companyCodeInput: {css: "div[name='company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            companyCodeField: {css: "div[name='company'] div[ng-class='tgTypeaheadWrapClass']"},
            artistsField: {css: "div[name='artists'] div[ng-class='tgTypeaheadWrapClass']"},
            artistFieldInput: {css: "div[name='artists'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            artistsDropDownData: {css: "div[name='artists'] ul.tg-typeahead__suggestions.ng-scope"},
            representMultipleDealsField: {css: "div[data-ng-model='deal.mult_deal_reason_code'] div.tg-dropdown-button"},
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
            yesPerformanceNonTitleBoundIncome: {css: "div[data-ng-form='blackBoxClauseForm']:nth-child(2) button[data-ng-model='bbc.intbid']:nth-child(1)"},
            noPerformanceNonTitleBoundIncome: {css: "div[data-ng-form='blackBoxClauseForm']:nth-child(2) button[data-ng-model='bbc.intbid']:nth-child(2)"}
        },

        selectDesiredSigningTerritory: function (specific_country) {
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

        fillContractingPartiesField: function (field) {
            pages.createDealGeneral.elems.contractingPartiesField.click();
            pages.createDealGeneral.elems.contractingPartiesInput.sendKeys(field);
        },

        fillIntoCompanyCodeField: function (field) {
            pages.createDealGeneral.elems.companyCodeField.click();
            pages.createDealGeneral.elems.companyCodeInput.sendKeys(field);
        },

        selectRandomContractingPartyValueFromDropDown: function () {
            browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    var element = options[0];
                    element.click();
                })
        },

        selectRandomCompanyCodeValueFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[name='company'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(by.css("div[name='company'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    var element = options[0];
                    element.click();
                })
        },

        selectCompanyCodeSpecificValue: function (specific_value) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[name='company'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[name='company'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
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



        contractingPartySearchResultLabels: function () {
            var selector = '.tg-typeahead__suggestions-group-item';
            var elements = $$(selector);
            browser.wait(protractor.ExpectedConditions.visibilityOf($(selector)));
            return elements;
        },

        selectContractingPartySearchResultByIndex: function (i) {
            var element = pages.createDealGeneral.contractingPartySearchResultLabels().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        },

        selectContractingPartyValue: function (specific_value) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[name='contractingParties'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[name='contractingParties'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                //browser.driver.findElements(by.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']/div"))
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
            pages.createDealGeneral.elems.internalContactsInputField.sendKeys(internal_contact);
        },

        selectRandomInternalContactsFromDropDown: function () {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.internalContactsDropDownData));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor(Math.random() * options.length);
                    var element = options[randomNumber];
                    element.click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(pages.createDealGeneral.elems.internalContactsDropDownData));

        },

        clickOnInternalContactsRole: function () {
            pages.createDealGeneral.elems.internalContactRoleInputField.click();
        },

        fillIntoTheIRowInternalContactField: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.model'] input[ng-model='$term']"));
            element.sendKeys("shilpa");
        },


        clickIntoInternalContactsRoleRowI: function (i) {
            var element = browser.findElement(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div[data-ng-model='internalContact.roles'] input[ng-model='$term']"));
            element.click();
        },

        selectRandomInternalContactsFromDropDownRowI: function (i) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-repeat='internalContact in modularEditModels.contacts']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor(Math.random() * options.length);
                    var element = options[randomNumber];
                    element.click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(pages.createDealGeneral.elems.internalContactsDropDownData));

        },

        clickOnTheDraftContractStatus: function () {
            pages.createDealGeneral.elems.draftContractStatusButton.click();
        },

        clickOnTheExecutedContractStatus: function () {
            pages.createDealGeneral.elems.executedContractStatusButton.click();
        },

        fillIntoTheExecutionYearField: function () {
            var year = Math.floor(Math.random() * 214) + 1801;
            pages.createDealGeneral.elems.yearExecutionDate.sendKeys(year);
        },

        fillIntoTheExecutionMonthField: function () {
            var month = Math.floor(Math.random() * 12) + 1;
            pages.createDealGeneral.elems.monthExecutionDate.sendKeys(month);
        },

        fillIntoTheExecutionDayField: function () {
            var day = Math.floor(Math.random() * 28) + 1;
            pages.createDealGeneral.elems.dayExecutionDate.sendKeys(day);
        },

        fillIntoTheExecutionYearFieldValue: function (year) {
            pages.createDealGeneral.elems.yearExecutionDate.sendKeys(year);
        },

        fillIntoTheExecutionMonthFieldValue: function (month) {
            pages.createDealGeneral.elems.monthExecutionDate.sendKeys(month);
        },

        fillIntoTheExecutionDayFieldDayValue: function (day) {
            pages.createDealGeneral.elems.dayExecutionDate.sendKeys(day);
        },



        selectTheRandomArtistValue: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealGeneral.elems.artistsField));
            pages.createDealGeneral.elems.artistsField.click();
            pages.createDealGeneral.elems.artistFieldInput.sendKeys("abcd");
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.artistsDropDownData));

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().
                then(function (promise) {
                    console.log("Text from artist is : " + promise);
                    if (promise.indexOf("Create New Artist") != -1) {
                        browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer div a"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                var element = options[randomNumber];
                                browser.actions().mouseMove(element).click().perform();
                                browser.sleep(500);
                            })
                    }
                    else {browser.driver.findElements(By.css("div[name='artists'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                    }
                });
        },


        selectTheRandomArtist: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealGeneral.elems.artistsField));
            pages.createDealGeneral.elems.artistsField.click();
            pages.createDealGeneral.elems.artistFieldInput.sendKeys("test");
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.artistsDropDownData));
            browser.driver.findElements(By.css("div[name='artists'] div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        selectTheRandomValueRepresentMultipleDeals: function () {
            pages.createDealGeneral.elems.representMultipleDealsField.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-model='deal.mult_deal_reason_code'] ul.dropdown-menu li.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-model='deal.mult_deal_reason_code'] ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnTheExclusiveDealRights: function () {
            pages.createDealGeneral.elems.exclusiveDealRights.click();
        },

        clickOnTheNonExclusiveDealRights: function () {
            pages.createDealGeneral.elems.nonExclusiveDealRights.click();
        },

        selectTheRandomDealKeywords: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealGeneral.elems.dealKeywordsField));
            pages.createDealGeneral.elems.dealKeywordsField.click();
            pages.createDealGeneral.elems.dealKeywordsFieldInput.sendKeys("test");
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealGeneral.elems.dealKeywordsDropDownData));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    var element = options[randomNumber];
                    pages.base.scrollIntoView(element);
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        fillIntoTheWampsContractBriefNumberField: function () {
            var time = new Date().getTime();
            pages.createDealGeneral.elems.wampsContractBriefNumberField.sendKeys("W" + time);
        },

        fillIntoTheAuditPeriodField: function () {
            var months = Math.floor(Math.random() * 50) + 1;
            pages.createDealGeneral.elems.auditPeriodField.sendKeys(months);
        },

        fillIntoThePeriodToFileSuitField: function () {
            var months = Math.floor(Math.random() * 50) + 1;
            pages.createDealGeneral.elems.periodFileSuitField.sendKeys(months);
        },

        fillIntoTheLegalFileReferenceCodeField: function () {
            var number = new Date().getUTCMilliseconds();
            pages.createDealGeneral.elems.legalFileReferenceCodeField.sendKeys(number);
        },

        selectTheRandomExternalContactRoleRowI: function (i) {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-form='externalContactsForm']:nth-child(" + i + ") select[name='role'] option"))));
            browser.driver.findElements(By.css("div[data-ng-form='externalContact']:nth-child(" + i + ") select[name='role'] option"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        selectTheSpecificExternalContactRoleRowI: function (i, role) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-form='externalContactsForm']:nth-child(" + i + ") select[name='role'] option"))));
            browser.driver.findElements(By.css("div[data-ng-form='externalContactsForm']:nth-child(" + i + ") select[name='role'] option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(role) != -1) {
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

        selectTheRandomExternalContactNameRowI: function (i) {
            pages.createDealGeneral.elems.externalContactNameFieldInput.sendKeys("Shilpa");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-form='externalContactsForm']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("div[data-ng-form='externalContactsForm']:nth-child(" + i + ") div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoTheDemoDealChargeBacksField: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealGeneral.elems.demosDealChargeBacksField.sendKeys(percent);
        },

        fillIntoTheUsCopyrightCertificateDealChargeBacksField: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealGeneral.elems.usCopyrightCertificateDealChargeBacksField.sendKeys(percent);
        },

        fillIntoTheLegalFeesDealChargeBacksField: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealGeneral.elems.legalFeesDealChargeBacksField.sendKeys(percent);
        },

        fillIntoTheAdvertisingAndPromotionsDealChargeBacksField: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealGeneral.elems.advertisingPromotionsDealChargeBacksField.sendKeys(percent);
        },

        fillIntoTheLeadSheetsDealChargeBackField: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealGeneral.elems.leadSheetsDealChargeBacksField.sendKeys(percent);
        },

        clickOnTheYesMechanicalNonTitleBoundIncome: function () {
            pages.createDealGeneral.elems.yesMechanicalNonTitleBoundIncome.click();
        },

        clickOnTheNoMechanicalNonTitleBoundIncome: function () {
            pages.createDealGeneral.elems.noMechanicalNonTitleBoundIncome.click();
        },

        clickOnTheYesPerformanceNonTitleBoundIncome: function () {
            pages.createDealGeneral.elems.yesPerformanceNonTitleBoundIncome.click();
        },

        clickOnTheNoPerformanceNonTitleBoundIncome: function () {
            pages.createDealGeneral.elems.noPerformanceNonTitleBoundIncome.click();
        },

        companyCode: {
            typeahead: function () {
                return element(by.model('deal.company'));
            },

            input: function () {
                return exports.companyCode.typeahead().element(by.model('$term'));
            },

            searchResultElements: function () {
                return $$('.tg-typeahead__suggestions-group-item');
            },

            enterSearchTerms: function (terms) {
                var el = exports.companyCode.input();

                asAlways(el, 'scrollIntoView', 'click', 'clear');

                return el.sendKeys(terms);
            },

            selectSearchResultByIndex: function (i) {
                var els = exports.companyCode.searchResultElements();

                browser.wait(EC.visibilityOfAny(els));

                return asAlways(els.get(i), 'scrollIntoView', 'click');
            }
        }
    });
}

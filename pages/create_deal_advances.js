"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_advances === undefined) {
    pages.create_deal_advances = new ftf.pageObject({
        locators: {
            addFirstAdvanceLink: {css: "a[data-ng-click='addAdvanceFromCreate(true, false)']"},
            advanceDetailsAmount: {css: "input[data-ng-model='activeAdvance.amount']"},
            advanceDetailsCurrencyArrow: {css: "div[data-validation-class='advanceCurrency'] button.btn.dropdown-toggle"},
            advanceDetailsDistributionRulesCurrencyArrow: {css: "div[data-validation-class='advancePaymentDistributionCurrency'] button.btn.dropdown-toggle"},
            firstDistributionRulesPercentAdvanceDetails: {css: "table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']"}
        },

        clickOnTheAddFirstAdvanceLink: function () {
            pages.create_deal_advances.elems.addFirstAdvanceLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_advances.elems.advanceDetailsAmount));
        },

        selectTheRandomContractPeriodAdvanceDetails: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("select[name='advanceContractPeriod'] option"))));
            browser.driver.findElements(By.css("select[name='advanceContractPeriod'] option"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        fillIntoTheAmountAdvanceDetails: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.create_deal_advances.elems.advanceDetailsAmount.sendKeys(number);
        },

        selectTheRandomCurrencyAdvanceDetails: function () {
            pages.create_deal_advances.elems.advanceDetailsCurrencyArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-validation-class='advanceCurrency'] ul.dropdown-menu.advance-currency-dropdown li.ng-scope"))));
            browser.driver.findElements(By.css("div[data-validation-class='advanceCurrency'] ul.dropdown-menu.advance-currency-dropdown li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        selectThePaymentStructureAdvanceDetails: function (specific_value) {
            var desiredOption;
            browser.driver.findElements(By.css("select[name='advancePaymentStructure'] option"))
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

        selectTheWhenDistributionRulesAdvanceDetails: function (specific_value) {
            var desiredOption;
            browser.driver.findElements(By.css("select[name='advancePaymentCondition'] option"))
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

        fillIntoThePercentDistributionRulesAdvanceDetailsNumberI: function (i) {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") input[data-ng-model='apd.percent']"));
            element.sendKeys(percent);
        },

        selectTheRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-ng-model='apd.payee'] div[ng-class='tgTypeaheadWrapClass']")).click();
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-ng-model='apd.payee'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']")).sendKeys("test");
            browser.wait((ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope")))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        selectTheRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-ng-model='apd.payee'] div[ng-class='tgTypeaheadWrapClass']")).click();
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-ng-model='apd.payee'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']")).sendKeys("test");
            browser.wait((ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope")))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        selectTheRandomCurrencyDistributionRulessAdvanceDetailsNumberI: function (i) {
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] button..btn.dropdown-toggle")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] ul.dropdown-menu.advance-distribution-currency-dropdown li.ng-scope"))));
            browser.driver.findElements(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] ul.dropdown-menu.advance-distribution-currency-dropdown li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        }

    })

}
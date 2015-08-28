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
            firstDistributionRulesPercentAdvanceDetails: {css: "table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']"},
            addAdvanceApplicableEarningsLink: {css: "a[data-ng-click='aaeLinkOnClick(true, aaeForm.$invalid, modified)']"},
            setDefaultsLinkAdvanceApplicableEarnings: {css: "table thead tr th.percent-income a[data-ng-click='setAllDefaults()']"},
            clearAllLinkAdvanceApplicableEarnings: {css: "table thead tr th.percent-income a[data-ng-click='clearAllDefaults()']"},
            includeAllPipelineCheckBoxAdvanceApplicableEarnings: {css: "table thead tr th.includes-pipeline span[data-ng-click='toggleAllPipelines()'] i"},
            synchronisationPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.percent-income input[name='acPercent']"},
            mechanicalPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.percent-income input[name='acPercent']"},
            publicPerformancePercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.percent-income input[name='acPercent']"},
            grandRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.percent-income input[name='acPercent']"},
            digitalRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.percent-income input[name='acPercent']"},
            printRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.percent-income input[name='acPercent']"},
            otherRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(7) td.percent-income input[name='acPercent']"},
            synchPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.includes-pipeline i"},
            mechPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.includes-pipeline i"},
            perfPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.includes-pipeline i"},
            grandPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.includes-pipeline i"},
            digitalPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.includes-pipeline i"},
            printPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.includes-pipeline i"},
            otherPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(7) td.includes-pipeline i"},
            defineSynchTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories a"},
            defineMechTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories a"},
            definePerfTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories a"},
            defineGrandTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories a"},
            defineDigitalTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories a"},
            definPrintTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories a"},
            defineOtherTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(7) td.advance-ea-territories.pipeline-territories a"},
            defineSynchTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineMechTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePerfTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineGrandTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineDigitalTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePrintTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineOtherTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(7) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineSynchLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels a"},
            defineMechLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels a"},
            definePerfLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels a"},
            defineGrandLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels a"},
            defineDigitalLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels a"},
            definePrintLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels a"},
            defineOtherLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(7) td.advance-ea-labels.pipeline-labels a"},
            defineSynchLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineMechLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePerfLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineGrandLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineDigitalLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePrintLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineOthersLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(7) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            cancelAdvanceApplicableEarningsButton: {css: "div[data-ng-form='applicableEarningsForm'] div.CONTROLS.clearfix button.btn.btn-cancel.pull-left"},
            doneAdvanceApplicableEarningsButton: {css: "div[data-ng-form='applicableEarningsForm'] div.CONTROLS.clearfix button[data-ng-click='doneEditingApplicableEarnings(applicableEarningsForm.$invalid)']"}
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
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] button.btn.dropdown-toggle")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] ul.dropdown-menu.advance-distribution-currency-dropdown li.ng-scope"))));
            browser.driver.findElements(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] ul.dropdown-menu.advance-distribution-currency-dropdown li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    options[randomNumber].click();
                })
        },

        clickOnTheAddViewAdvanceApplicableEarningsLink: function () {
            pages.create_deal_advances.elems.addAdvanceApplicableEarningsLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_advances.elems.synchronisationPercentAdvanceApplicableEarnings));
        },

        clickOnTheSetDefaultsLinkAdvanceApplicableEarnings: function () {
            pages.create_deal_advances.elems.setDefaultsLinkAdvanceApplicableEarnings.click();
            pages.create_deal_advances.waitForAjax();
        },

        clickOnTheClearAllLinkAdvanceApplicableEarnings: function () {
            pages.create_deal_advances.elems.clearAllLinkAdvanceApplicableEarnings.click();
            pages.create_deal_advances.waitForAjax();
        },

        clickOnTheIncludesPipelineCheckBoxHeader: function () {
            pages.create_deal_advances.elems.includeAllPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.create_deal_advances.waitForAjax();
        },

        fillIntoTheSynchronisationPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.synchronisationPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheMechanicalPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.mechanicalPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoThePublicPerformancePercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.publicPerformancePercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheGrandRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.grandRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheDigitalRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.digitalRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoThePrintRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.printRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheOtherRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_advances.elems.otherRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        }

    })

}
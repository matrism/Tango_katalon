"use strict";

var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createDealAdvances === undefined) {
    pages.createDealAdvances = new ftf.pageObject({
        locators: {
            addFirstAdvanceLink: {css: "a[data-ng-click='addAdvanceFromCreate(true, false)']"},
            yesSuspendedButton: {css: "button[name='advanceSuspended']"},
            advanceDetailsAmount: {css: "input[data-ng-model='activeAdvance.amount']"},
            advanceDetailsCurrencyArrow: {css: "div[data-validation-class='advanceCurrency'] button.btn.dropdown-toggle"},
            advanceDetailsDistributionRulesCurrencyArrow: {css: "div[data-validation-class='advancePaymentDistributionCurrency'] button.btn.dropdown-toggle"},
            firstDistributionRulesPercentAdvanceDetails: {css: "table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']"},
            addAdvanceApplicableEarningsLink: {css: "a[data-ng-click='aaeLinkOnClick(true, aaeForm.$invalid, modified)']"},
            viewAdvanceApplicableEarningsLink: {css: "a[data-ng-click='aaeLinkOnClick(true, aaeForm.$invalid, modified)']:nth-child(2)"},
            setDefaultsLinkAdvanceApplicableEarnings: {css: "table thead tr th.percent-income a[data-ng-click='setAllDefaults()']"},
            clearAllLinkAdvanceApplicableEarnings: {css: "table thead tr th.percent-income a[data-ng-click='clearAllDefaults()']"},
            includeAllPipelineCheckBoxAdvanceApplicableEarnings: {css: "table thead tr th.includes-pipeline span[data-ng-click='toggleAllPipelines()'] i"},
            synchronisationPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.percent-income input[name='acPercent']"},
            mechanicalPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.percent-income input[name='acPercent']"},
            publicPerformancePercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.percent-income input[name='acPercent']"},
            grandRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.percent-income input[name='acPercent']"},
            printRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.percent-income input[name='acPercent']"},
            otherRightsPercentAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.percent-income input[name='acPercent']"},
            synchPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.includes-pipeline i"},
            mechPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.includes-pipeline i"},
            perfPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.includes-pipeline i"},
            grandPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.includes-pipeline i"},
            printPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.includes-pipeline i"},
            otherPipelineCheckBoxAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.includes-pipeline i"},
            defineSynchTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories a"},
            defineMechTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories a"},
            definePerfTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories a"},
            defineGrandTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories a"},
            definePrintTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories a"},
            defineOtherTerritoriesAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories a"},
            defineSynchTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            defineMechTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            definePerfTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            defineGrandTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            definePrintTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            defineOtherTerritoriesFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            defineSynchTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineMechTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePerfTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineGrandTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePrintTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineOtherTerritoriesInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories div.tg-territory div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineSynchLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels a"},
            defineMechLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels a"},
            definePerfLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels a"},
            defineGrandLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels a"},
            definePrintLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels a"},
            defineOtherLabelsAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels a"},
            defineSynchLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            defineMechLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            definePerfLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            defineGrandLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            definePrintLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            defineOthersLabelsFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass']"},
            defineSynchLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineMechLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePerfLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineGrandLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            definePrintLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            defineOthersLabelsInputFieldAdvanceApplicableEarnings: {css: "table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            cancelAdvanceApplicableEarningsButton: {css: "div[data-ng-form='applicableEarningsForm'] div.CONTROLS.clearfix button.btn.btn-cancel.pull-left"},
            doneAdvanceApplicableEarningsButton: {css: "div[data-ng-form='applicableEarningsForm'] div.CONTROLS.clearfix button[data-ng-click='doneEditingApplicableEarnings(applicableEarningsForm.$invalid)']"},
            aaeWarningUnsavedData: {css: "div.advance-earnings.span12.nomargins.EDITOR span.error-text.ng-scope span"},
            aaeCollapseIconWarningUnsavedData: {css: "div[data-ng-form='aaeForm'] div.pull-left.controls i"},
            modalBodyCancelAdvance: {css: "div.modal-body p[data-ng-show='data.shouldResetAAE']"},
            noModalBodyCancelAdvance: {css: "div.modal-footer button[data-ng-click='cancel()']"},
            cancelThisAdvanceButton: {css: "button[data-ng-click='$external.DA.showCancelAdvanceModal()']"},
            addAnotherAdvanceButton: {css: "button[data-ng-click='$external.DA.addAdvanceFromCreate(false, isInvalidWizard(), false)']"},
            numberOfUnitsSales:{css: "input[name='advancePaymentConditionUnits']"}
        },

        clickOnTheAddFirstAdvanceLink: function () {
            pages.createDealAdvances.elems.addFirstAdvanceLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealAdvances.elems.advanceDetailsAmount));
        },

        clickOnTheAddAnotherAdvanceButton: function () {
            pages.base.scrollIntoView(pages.createDealAdvances.elems.addAnotherAdvanceButton);
            pages.createDealAdvances.elems.addAnotherAdvanceButton.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealAdvances.elems.advanceDetailsAmount));
        },

        selectTheSpecificContractPeriodAdvanceDetailsByIndex: function (index) {
            pages.base.scrollIntoView(element(by.css("select[name='advanceContractPeriod']")));
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("select[name='advanceContractPeriod'] option"))));
            browser.driver.findElements(By.css("select[name='advanceContractPeriod'] option"))
                .then(function (options) {
                    options[index].click();
                })
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
            pages.createDealAdvances.elems.advanceDetailsAmount.sendKeys(number);
        },

        fillIntoTheAmountAdvanceDetailsSpecificValue: function (amount) {
            pages.createDealAdvances.elems.advanceDetailsAmount.sendKeys(amount);
        },

        selectTheRandomCurrencyAdvanceDetails: function () {
            pages.createDealAdvances.elems.advanceDetailsCurrencyArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-validation-class='advanceCurrency'] ul.dropdown-menu.advance-currency-dropdown li.ng-scope"))));
            browser.driver.findElements(By.css("div[data-validation-class='advanceCurrency'] ul.dropdown-menu.advance-currency-dropdown li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 4) + 1);
                    var element = options[randomNumber];
                    element.click();
                })
        },

        clickOnTheYesToSuspendedAdvanceButton: function(){
            pages.base.scrollIntoView(pages.createDealAdvances.elems.yesSuspendedButton);
            pages.createDealAdvances.elems.yesSuspendedButton.click();
        },

        selectTheSpecificCurrencyAdvanceDetails: function (currency) {
            var desiredOption;
            pages.createDealAdvances.elems.advanceDetailsCurrencyArrow.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-validation-class='advanceCurrency'] ul.dropdown-menu.advance-currency-dropdown li.ng-scope"))));
            browser.driver.findElements(By.css("div[data-validation-class='advanceCurrency'] ul.dropdown-menu.advance-currency-dropdown li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(currency) != -1) {
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

        fillIntoThePercentDistributionRulesAdvanceDetailsNumberISpecificValue: function (i, percent) {
            var element = browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") input[data-ng-model='apd.percent']"));
            element.sendKeys(percent);
        },

        fillIntoTheNumberOfUnitsSalesOptionAdvanceDetailsSpecificValue: function (units) {
            pages.createDealAdvances.elems.numberOfUnitsSales.sendKeys(units);
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
                    var element = options[randomNumber];
                    pages.base.scrollIntoView(element);
                    element.click();
                });
            pages.createDealAdvances.waitForAjax();
        },

        selectTheRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-ng-model='apd.payee'] div[ng-class='tgTypeaheadWrapClass']")).click();
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-ng-model='apd.payee'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']")).sendKeys("test");
            browser.wait((ExpectedConditions.visibilityOf(element(By.css("li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope")))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var element = options[randomNumber];
                    pages.base.scrollIntoView(element);
                    element.click();
                });
        },

        selectTheRandomCurrencyDistributionRulessAdvanceDetailsNumberI: function (i) {
            browser.driver.findElement(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] button.btn.dropdown-toggle")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] ul.dropdown-menu.advance-distribution-currency-dropdown li.ng-scope"))));
            browser.driver.findElements(By.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(" + i + ") div[data-validation-class='advancePaymentDistributionCurrency'] ul.dropdown-menu.advance-distribution-currency-dropdown li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 4 + 1));
                    var element = options[randomNumber];
                    element.click();
                });
        },

        clickOnTheViewAdvanceApplicableEarningsLink: function () {
            pages.createDealAdvances.elems.viewAdvanceApplicableEarningsLink.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheAddViewAdvanceApplicableEarningsLink: function () {
            pages.createDealAdvances.elems.addAdvanceApplicableEarningsLink.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealAdvances.elems.synchronisationPercentAdvanceApplicableEarnings));
        },

        clickOnTheSetDefaultsLinkAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.setDefaultsLinkAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheClearAllLinkAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.clearAllLinkAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheIncludesPipelineCheckBoxHeader: function () {
            pages.createDealAdvances.elems.includeAllPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        fillIntoTheSynchronisationPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealAdvances.elems.synchronisationPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheMechanicalPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealAdvances.elems.mechanicalPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoThePublicPerformancePercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealAdvances.elems.publicPerformancePercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheGrandRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealAdvances.elems.grandRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoThePrintRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealAdvances.elems.printRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        fillIntoTheOtherRightsPercentFieldAdvanceApplicableEarnings: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealAdvances.elems.otherRightsPercentAdvanceApplicableEarnings.sendKeys(percent);
        },

        clickOnTheSynchPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.synchPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheMechPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.mechPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnThePerfPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.perfPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheGrandPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.grandPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnThePrintPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.printPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheOtherPipelineCheckBoxAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.otherPipelineCheckBoxAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
        },

        selectTheRandomDefineSynchTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.defineSynchTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineSynchTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineSynchTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineSynchTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(1) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                    browser.sleep(2000);
                })
        },


        selectTheRandomDefineMechTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.defineMechTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineMechTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineMechTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineMechTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(2) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        selectTheRandomDefinePerfTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.definePerfTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.definePerfTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.definePerfTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.definePerfTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(3) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        selectTheRandomDefineGrandTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.defineGrandTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineGrandTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineGrandTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineGrandTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(4) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },


        selectTheRandomDefineDigitalTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.defineDigitalTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineDigitalTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineDigitalTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineDigitalTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        selectTheRandomDefinePrintTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.definePrintTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.definePrintTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.definePrintTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.definePrintTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        selectTheRandomDefineOtherTerritoryAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.defineOtherTerritoriesAdvanceApplicableEarnings.click();
            pages.createDealAdvances.waitForAjax();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineOtherTerritoriesFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineOtherTerritoriesFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineOtherTerritoriesInputFieldAdvanceApplicableEarnings.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("table tbody tr:nth-child(6) td.advance-ea-territories.pipeline-territories ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * 5 + 1));
                    //var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).click().perform();
                })
        },

        selectTheRandomDefineSynchLabelAdvanceApplicableEarnings: function () {
            //var value = Math.random().toString(36).substr(2, 3);
            var value = "a";
            pages.createDealAdvances.elems.defineSynchLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineSynchLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineSynchLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineSynchLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(1) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },


        selectTheRandomDefineMechLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealAdvances.elems.defineMechLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineMechLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineMechLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineMechLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(2) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        selectTheRandomDefinePerfLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealAdvances.elems.definePerfLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.definePerfLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.definePerfLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.definePerfLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(3) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },


        selectTheRandomDefineGrandLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealAdvances.elems.defineGrandLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineGrandLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineGrandLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineGrandLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(4) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        selectTheRandomDefineDigitalLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealAdvances.elems.defineDigitalLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineDigitalLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineDigitalLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineDigitalLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        selectTheRandomDefinePrintLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealAdvances.elems.definePrintLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.definePrintLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.definePrintLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.definePrintLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(5) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        selectTheRandomDefineOtherLabelAdvanceApplicableEarnings: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealAdvances.elems.defineOtherLabelsAdvanceApplicableEarnings.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealAdvances.elems.defineOthersLabelsFieldAdvanceApplicableEarnings));
            pages.createDealAdvances.elems.defineOthersLabelsFieldAdvanceApplicableEarnings.click();
            pages.createDealAdvances.elems.defineOthersLabelsInputFieldAdvanceApplicableEarnings.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer")).getText().then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("table tbody tr:nth-child(6) td.advance-ea-labels.pipeline-labels ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        clickOnTheDoneAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.doneAdvanceApplicableEarningsButton.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheCancelThisAdvanceButton: function () {
            pages.createDealAdvances.elems.cancelThisAdvanceButton.click();
            pages.createDealAdvances.waitForAjax();
        },

        clickOnTheCancelAdvanceApplicableEarnings: function () {
            pages.createDealAdvances.elems.cancelAdvanceApplicableEarningsButton.click();
            pages.createDealAdvances.waitForAjax();
        }


    })

}
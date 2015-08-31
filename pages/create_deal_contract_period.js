"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_contract_period === undefined) {
    pages.create_deal_contract_period = new ftf.pageObject({
        locators: {
            addContractPeriodElem: {css: "div.deal-terms-affix a[data-ng-click='addContractPeriod()']"},
            descriptionContractPeriod: {css: "div.input-addition #description"},
            startDate: {css: "div#actualStartDate input"},
            endTargetMonths: {name: "targetEndDuration"},
            actualEndDate: {css: "div#actualEndDate input"},
            contractPeriodArea: {css: "div[data-tg-modular-edit-id='contractPeriod']"},
            contractPeriodModalDialog: {css: "div.modal-dialog.ng-scope"},
            cancelContractPeriodModalDialog: {css: "div.modal-footer a[data-ng-click='cancel()']"},
            newContractPeriodModalDialog: {xpath: "//*[@class='modal-footer']//button[contains(text(),'New Contract Period')]"},
            terminateDealContractPeriodModalDialog: {css: "div.modal-footer button[data-ng-click='data.terminate()']"},
            addMdrcLink: {css: "a[data-ng-click='addCommitment()']"},
            incompleteMdrc: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-class='{ active: !mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"},
            deemedCompleteMdrc: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-class='{ active: mdrc.is_completed && mdrc.showDeemedCompleteDetails }']"},
            completeMdrc: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-class='{ active: mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"},
            mdrcQuantity: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#quantity"},
            mdrcMinimumWorkContribution: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#workPercent"},
            mdrcQuantityForCommercialRelease: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#commercialReleaseQuantity"},
            mdrcMajorTerritoriesForCommercialRelease: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#territories"},
            mdrcTerritoriesField: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            mdrcTerritoriesInputField: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.tg-territory input[ng-model='$term']"},
            mdrcTerritoriesDropDown: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            mdrcYesCommercialReleaseByMajorLabel: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.release_label']:nth-child(1)"},
            mdrcNoCommercialReleaseByMajorLabel: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.release_label']:nth-child(2)"},
            mdrcLabelsElement: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div[data-ng-model='mdrc.labels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            mdrcLabelsDropDownData: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem ul.tg-typeahead__suggestions.ng-scope"},
            mdrcYesSelfRecord: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.self_record']:nth-child(1)"},
            mdrcNoSelfRecord: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.self_record']:nth-child(2)"},
            mdrcPercentOfMinStatutoryRate: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#minMechanicalRate"},
            mdrcInNoEventLessThan: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input[data-ng-model='mdrc.no_less_than']"},
            mdrcYesProportionalRecoupmentAllowed: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.proportional_recoupment']:nth-child(1)"},
            mdrcNoProportionalRecoupmentAllowed: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.proportional_recoupment']:nth-child(2)"},
            mdrcYesSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.additional_complexity']:nth-child(1)"},
            mdrcNoSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.additional_complexity']:nth-child(2)"},
            mdrcDeliverySchedule: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input[data-ng-model='mdrc.delivery_schedule.quantity']"},
            mdrcEveryWeeks: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input[data-ng-model='mdrc.delivery_schedule.frequency']"},
            mdrcDateCompleted: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div#dateCompleted input[data-ng-model='date']"},
            mdrcShortfallAmount: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#shortfall"},
            mdrcForgivenShortfallButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(1)"},
            mdrcCarriedForwardShortfallButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(2)"},
            mdrcSaveButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-click='form.terms.activeCp.freshlyAdded ? saveCommitment(form.terms.activeCp.id, mdrc.id, mdrcForm.$valid) : updateDeal(mdrcForm.$valid, form.deal, activeForm, dealUpdateCallbackFunction)']"},
            mdrcCancelLink: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem a[data-ng-click='cancelCommitmentChanges(form.terms.activeCp.id, mdrc.id);']"},
            mdrcDeleteButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-click='showDeleteCommitmentModal(mdrc.id, form.terms.activeCp.id, modularInitView)']"},
            //end rules
            addEndRulesLink: {css: "a[data-ng-show='!activeContractPeriod.showEndRules && !isEndRuleDirty(activeContractPeriod.end_rules[0])']"},
            endDateFieldButtonEndRules: {css: "div[data-ng-model='rule.end_date_type'] div.tg-dropdown-button"},
            endDateDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            whenVariableLeftButtonEndRules: {css: "div[data-ng-model='condition.left_value'] div.tg-dropdown-button"},
            whenVariableLeftDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            attributeLeftFieldEndRules: {css: "input[data-ng-model='condition.left_value_percent']"},
            requirementFieldButtonEndRules: {css: "div[data-ng-form='conditionForm']:nth-child(3) div[data-ng-model='condition.operator'] div.tg-dropdown-button"},
            requirementDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            variableRightFieldButtonEndRules: {css: "div[data-ng-model='condition.right_value'] div.tg-dropdown-button"},
            variableRightDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            saveButtonEndRules: {css: "div.CONTROLS.clearfix button.btn.btn-primary.pull-right.ng-scope"},
            doneButtonEndRules: {css: "button[data-ng-click='saveEndRules(form.show.endRules.containerId, form.show.endRules.type, rtpEndRulesModalForm.$valid)']"},
            deleteButtonEndRules: {css: "div.CONTROLS.clearfix button[data-ng-click='showDeleteAllEndRulesModal(form.show.endRules.containerId, form.show.endRules.type)']"},
            cancelButtonEndRules: {css: "div.CONTROLS.clearfix button.btn.btn-cancel.pull-left"},
            //assumptions
            addAssumptionLink: {css: "a[data-ng-click='addAdvanceAssumption()']"},
            lpControlPercentageOfWorkAssumptions: {css: "#lpControlPercentageWork"},
            lpControlPercentageOfMechanicalIncomeAsumptions: {css: "#lpControlPercentageMechanical"},
            numberOfSongsAssumptions: {css: "#noOfSongs"},
            percentageOfStatutoryRateAssumptions: {css: "#statutoryRate"},
            amountNotLessThanAssumptions: {css: "#notLessThan"},
            labelsAssumptionsInputField: {css: "div[name='assumptionLabels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            saveAssumptionsButton: {css: "div.footer-buttons button[data-ng-click='saveAdvanceAssumption(form.terms.activeCp.id, assumption.id, assumptionForm.$valid, activeContractPeriod.freshlyAdded, activeForm)']"},
            deleteAssumptionsButton: {css: "div.footer-buttons button[data-ng-click='showDeleteAssumptionModal(assumption.id, form.terms.activeCp.id, modularInitView)']"},
            cancelAssumptionsButton: {css: "div.footer-buttons a[data-ng-click='cancelAssumptionChanges(form.terms.activeCp.id, assumption.id);']"}
        },

        clickOnAddContractPeriod: function () {
            pages.create_deal_contract_period.elems.addContractPeriodElem.click();
            pages.create_deal_contract_period.waitForAjax();
        },

        fillDescriptionField: function (description) {
            pages.create_deal_contract_period.elems.descriptionContractPeriod.clear();
            pages.create_deal_contract_period.elems.descriptionContractPeriod.sendKeys(description);
        },

        fillStartActualDate: function () {
            pages.create_deal_contract_period.elems.startDate.sendKeys("2014-03-12");
        },

        fillStartActualDateSpecificValue: function (value) {
            pages.create_deal_contract_period.elems.startDate.sendKeys(value);
        },

        fillTargetEndMonths: function () {
            pages.create_deal_contract_period.elems.endTargetMonths.sendKeys("3");
        },

        fillTargetEndMonthsSpecificValue: function (months) {
            pages.create_deal_contract_period.elems.endTargetMonths.sendKeys(months);
        },

        fillEndActualDate: function () {
            pages.create_deal_contract_period.elems.actualEndDate.sendKeys("2015-03-15");
            pages.create_deal_contract_period.elems.contractPeriodArea.click();
            pages.create_deal_contract_period.waitForAjax();
        },

        fillEndActualDateSpecificValue: function (actualDate) {
            pages.create_deal_contract_period.elems.actualEndDate.sendKeys(actualDate);
            pages.create_deal_contract_period.elems.contractPeriodArea.click();
            pages.create_deal_contract_period.waitForAjax();
        },

        addTheNewContractPeriodDialog: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.contractPeriodModalDialog));
            pages.create_deal_contract_period.elems.newContractPeriodModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.create_deal_contract_period.elems.newContractPeriodModalDialog));
        },

        clickOnAddMdrcLink: function () {
            pages.create_deal_contract_period.elems.addMdrcLink.click();
            browser.sleep(1000);
        },

        clickOnIncompleteOption: function () {
            pages.create_deal_contract_period.elems.incompleteMdrc.click();
        },

        clickOnDeemedCompleteOption: function () {
            pages.create_deal_contract_period.elems.deemedCompleteMdrc.click();
        },

        clickOnCompleteOption: function () {
            pages.create_deal_contract_period.elems.completeMdrc.click();
        },

        fillIntoMdrcQuantity: function () {
            var number = Math.floor(Math.random() * 50) + 30;
            pages.create_deal_contract_period.elems.mdrcQuantity.sendKeys(number);
        },

        fillIntoMdrcMinimumWorkContribution: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.create_deal_contract_period.elems.mdrcMinimumWorkContribution.clear();
            pages.create_deal_contract_period.elems.mdrcMinimumWorkContribution.sendKeys(number);
        },

        fillIntoMdrcQuantityForCommercialRelease: function () {
            var number = Math.floor(Math.random() * 10) + 1;
            pages.create_deal_contract_period.elems.mdrcQuantityForCommercialRelease.sendKeys(number);
        },

        fillIntoMdrcMajorTerritoriesForCommercialeRelease: function () {
            var number = Math.floor(Math.random() * 5) + 1;
            pages.create_deal_contract_period.elems.mdrcMajorTerritoriesForCommercialRelease.clear();
            pages.create_deal_contract_period.elems.mdrcMajorTerritoriesForCommercialRelease.sendKeys(number);
        },

        fillIntoTerritoriesFieldLetter: function () {
            pages.create_deal_contract_period.elems.mdrcTerritoriesField.click();
            pages.create_deal_contract_period.elems.mdrcTerritoriesInputField.sendKeys("a");
        },

        selectRandomTerritory: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcTerritoriesDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnMdrcYesCommercialReleaseByMajorLabel: function () {
            pages.create_deal_contract_period.elems.mdrcYesCommercialReleaseByMajorLabel.click();
        },

        clickOnMdrcNoCommercialReleaseByMajorLabel: function () {
            pages.create_deal_contract_period.elems.mdrcNoCommercialReleaseByMajorLabel.click();
        },

        fillIntoMdrcLabelsField: function () {
            pages.create_deal_contract_period.elems.mdrcLabelsElement.sendKeys("ty");
        },

        selectMdrcRandomValueFromLabel: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcLabelsDropDownData));

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().
                then(function (promise) {
                    console.log("Text from label is : " + promise);
                    if (promise.indexOf("Create New Label") != -1) {
                        browser.driver.findElements(By.css("li.tg-typeahead__suggestions-footer div a"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                options[randomNumber].click();
                            })
                    }
                    else {
                        browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                options[randomNumber].click();
                            })
                    }
                });
        },

        clickOnMdrcYesSelfRecord: function () {
            pages.create_deal_contract_period.elems.mdrcYesSelfRecord.click();
        },

        clickOnMdrcNoSelfRecord: function () {
            pages.create_deal_contract_period.elems.mdrcNoSelfRecord().click();
        },

        fillIntoMdrcPercentOfMinStatutoryRate: function () {
            var percent = Math.floor(Math.random() * 100) + 1;
            pages.create_deal_contract_period.elems.mdrcPercentOfMinStatutoryRate.sendKeys(percent);
        },

        fillIntoMdrcInNoEventLessThan: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.create_deal_contract_period.elems.mdrcInNoEventLessThan.sendKeys(value);
        },

        clickOnMdrcYesProportionalRecoupmentAllowed: function () {
            pages.create_deal_contract_period.elems.mdrcYesProportionalRecoupmentAllowed.click();
        },

        clickOnMdrcNoProportionalRecoupmentAllowed: function () {
            pages.create_deal_contract_period.elems.mdrcNoProportionalRecoupmentAllowed.click();
        },

        clickOnMdrcYesSeeContractForAdditionalMdrcComplexities: function () {
            pages.create_deal_contract_period.elems.mdrcYesSeeContractForAdditionalMdrcComplexities.click();
        },

        clickOnMdrcNoSeeContractForAdditionalMdrcComplexities: function () {
            pages.create_deal_contract_period.elems.mdrcNoSeeContractForAdditionalMdrcComplexities.click();
        },

        clickOnSaveMdrcForm: function () {
            pages.create_deal_contract_period.elems.mdrcSaveButton.click();
        },

        fillIntoMdrcDeliverySchedule: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.create_deal_contract_period.elems.mdrcDeliverySchedule.sendKeys(value);
        },

        fillIntoMdrcEveryWeeks: function () {
            var value = Math.floor(Math.random() * 10) + 1;
            pages.create_deal_contract_period.elems.mdrcEveryWeeks.sendKeys(value);
        },

        fillIntoMdrcDateCompleted: function () {
            pages.create_deal_contract_period.elems.mdrcDateCompleted.sendKeys("2015-03-09");
        },

        fillIntoMdrcShortfallAmount: function () {
            var value = Math.floor(Math.random() * 80) + 1;
            pages.create_deal_contract_period.elems.mdrcShortfallAmount.sendKeys(value);
        },

        clickOnMdrcForgivenShortfallActionButton: function () {
            pages.create_deal_contract_period.elems.mdrcForgivenShortfallButton.click();
        },

        clickOnMdrcCarriedForwardShortfallActionButton: function () {
            pages.create_deal_contract_period.elems.mdrcCarriedForwardShortfallButton.click();
        },

        selectTheContractPeriodNumberI: function (i) {
            browser.driver.findElement(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ")")).click();
        },

        clickOnTheAddEndRulesToContractPeriod: function(){
            pages.create_deal_contract_period.elems.addEndRulesLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.endDateFieldButtonEndRules));
        },

        selectTheEndDateEndRulesSpecificValue: function (value) {
            var desiredOption;
            pages.create_deal_contract_period.elems.endDateFieldButtonEndRules.click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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


        selectTheWhenVariableLeftEndRulesSpecificValue: function (value) {
            var desiredOption;
            pages.create_deal_contract_period.elems.whenVariableLeftButtonEndRules.click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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

        fillIntoTheAttributeLeftEndRules: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.create_deal_contract_period.elems.attributeLeftFieldEndRules.sendKeys(percent);
        },

        selectTheRequirementEndRulesRandomValue: function () {
            pages.create_deal_contract_period.elems.requirementFieldButtonEndRules.click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
        },

        selectTheRequirementEndRulesSpecificValue: function (value) {
            var desiredOption;
            pages.create_deal_contract_period.elems.requirementFieldButtonEndRules.click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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

        selectTheRightVariableEndRulesSpecificValue: function (value) {
            var desiredOption;
            pages.create_deal_contract_period.elems.variableRightFieldButtonEndRules.click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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

        saveTheEndRules: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.create_deal_contract_period.elems.saveButtonEndRules));
            pages.create_deal_contract_period.elems.saveButtonEndRules.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.create_deal_contract_period.elems.whenVariableLeftButtonEndRules));
        },

        doneTheEndRules: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.create_deal_contract_period.elems.doneButtonEndRules));
            pages.create_deal_contract_period.elems.doneButtonEndRules.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.create_deal_contract_period.elems.whenVariableLeftButtonEndRules));
        },


        clickOnTheAddAdvanceAssumptionsLink: function () {
          pages.create_deal_contract_period.elems.addAssumptionLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.lpControlPercentageOfWorkAssumptions));
        },

        fillIntoTheLpControlPercentageOfWork: function(){
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_contract_period.elems.lpControlPercentageOfWorkAssumptions.sendKeys(percent);
        },

        fillIntoTheLpControlPercentageOfMechanicalIncome: function(){
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_contract_period.elems.lpControlPercentageOfMechanicalIncomeAsumptions.sendKeys(percent);
        },

        fillIntoTheNumberOfSongs: function(){
            var number = Math.floor(Math.random() * 100) + 1;
            pages.create_deal_contract_period.elems.numberOfSongsAssumptions.sendKeys(number);
        },

        fillIntoThePercentageOfStatutoryRate: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.create_deal_contract_period.elems.percentageOfStatutoryRateAssumptions.sendKeys(percent);
        },

        fillIntoTheAmountNoLessThan : function(){
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.create_deal_contract_period.elems.amountNotLessThanAssumptions.sendKeys(number);
        },

        selectTheRandomLabelValueAssumptions: function(){
            pages.create_deal_contract_period.elems.labelsAssumptionsInputField.sendKeys("test");
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
        },

        saveTheAdvanceAssumptions: function(){
            pages.create_deal_contract_period.elems.saveAssumptionsButton.click();
        }

    });
}



'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.createDealContractPeriod === undefined) {
    pages.createDealContractPeriod = new ftf.pageObject({
        locators: {
            addContractPeriodElem: {css: "div.deal-terms-affix a[ng-click='addContractPeriod()']"},
            descriptionContractPeriod: {css: "div.input-addition #description"},
            startDate: {css: "div#actualStartDate input"},
            endTargetMonths: {name: "targetEndDuration"},
            actualEndDate: {css: "div#actualEndDate input"},
            contractPeriodArea: {css: 'div.js-details-column div.details.FORM.DETAIL.ng-scope'},
            contractPeriodModalDialog: {css: "div.modal-dialog.ng-scope"},
            cancelContractPeriodModalDialog: {css: "div.modal-footer a[data-ng-click='cancel()']"},
            newContractPeriodModalDialog: {css: 'div.modal-footer button[data-ng-click="ok('+"'"+"addNew"+"'"+')"]'},
            terminateDealContractPeriodModalDialog: {css: "div.modal-footer button[data-ng-click='data.terminate()']"},
            addMdrcLink: {css: "a[ng-click='contractPeriod.addMdrc()']"},
            incompleteMdrc: {css: "div.mdrc-list.minimum-delivery button[ng-click='tgModularEditModel.setAsIncomplete()']"},
            deemedCompleteMdrc: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem button[ng-click='tgModularEditModel.setAsDeemedComplete()']"},
            completeMdrc: {css: "div.mdrc-list.minimum-delivery button[ng-click='tgModularEditModel.setAsComplete()']"},
            mdrcQuantity: {css: "div.mdrc-list.minimum-delivery input#quantity"},
            mdrcMinimumWorkContribution: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input#workPercent"},
            mdrcQuantityForCommercialRelease: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input#commercialReleaseQuantity"},
            mdrcMajorTerritoriesForCommercialRelease: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input#territories"},
            mdrcTerritoriesField: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            mdrcTerritoriesInputField: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem div.tg-territory input[ng-model='$term']"},
            mdrcTerritoriesDropDown: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            mdrcYesCommercialReleaseByMajorLabel: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem  button[ng-model='tgModularEditModel.releaseLabel']:nth-child(1)"},
            mdrcNoCommercialReleaseByMajorLabel: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem  button[ng-model='tgModularEditModel.releaseLabel']:nth-child(2)"},
            mdrcLabelsElement: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem div[ng-model='tgModularEditModel.labels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            mdrcLabelsDropDownData: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem  ul.tg-typeahead__suggestions.ng-scope"},
            mdrcYesSelfRecord: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem  button[ng-model='tgModularEditModel.selfRecord']:nth-child(1)"},
            mdrcNoSelfRecord: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem  button[ng-model='tgModularEditModel.selfRecord']:nth-child(2)"},
            mdrcPercentOfMinStatutoryRate: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input#minMechanicalRate"},
            mdrcInNoEventLessThan: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input[ng-model='tgModularEditModel.noLessThan']"},
            mdrcYesProportionalRecoupmentAllowed: {css: "div.mdrc-list.minimum-deliveryg div.ng-scope.last-elem button[ng-model='tgModularEditModel.proportionalRecoupment']:nth-child(1)"},
            mdrcNoProportionalRecoupmentAllowed: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem button[ng-model='tgModularEditModel.proportionalRecoupment']:nth-child(2)"},
            mdrcYesSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem button[ng-model='tgModularEditModel.additionalComplexity']:nth-child(1)"},
            mdrcNoSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem button[ng-model='tgModularEditModel.additionalComplexity']:nth-child(2)"},
            mdrcDeliverySchedule: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input[ng-model='tgModularEditModel.deliverySchedule.quantity']"},
            mdrcEveryWeeks: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input[ng-model='tgModularEditModel.deliverySchedule.frequency']"},
            mdrcDateCompleted: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem div#dateCompleted input[ng-model='date']"},
            mdrcShortfallAmount: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem input#shortfall"},
            mdrcForgivenShortfallButton: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(1)"},
            mdrcCarriedForwardShortfallButton: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(2)"},
            mdrcSaveButton: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem button[data-ng-click='tgModularViewMethods.save()']"},
            mdrcCancelLink: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem a[data-ng-click='cancelCommitmentChanges(form.terms.activeCp.id, mdrc.id);']"},
            mdrcDeleteButton: {css: "div.mdrc-list.minimum-delivery div.ng-scope.last-elem button[data-ng-click='showDeleteCommitmentModal(mdrc.id, form.terms.activeCp.id, modularInitView)']"},
            //end rules
            endRulesTooltip: {css: ".rp-header i"},
            endRulesTooltip1: {css: "div.EDITOR.active.end-rules-popup h4 i"},
            rulesForEndDateTextEndRules: {css: "div[ng-form='rulesForm'] h4.cp-header"},
            //rulesForEndDateDataTooltipTextEndRules: {css: "div[ng-form='rulesForm'] h4.cp-header i"},
            rulesForEndDateDataTooltipTextEndRules: {css: "div[ng-form='ruleForm'] .rule-header .rule-label i"},
            summaryOfEndRulesTitleTextEndRules: {css: "div[ng-form='rulesForm'] div.summary-end-rules p.title"},
            summaryOfEndRulesDataTooltipTextEndRules: {css: "div[ng-form='rulesForm'] div.summary-end-rules p.title i"},
            rulesTitleTextEndRules: {css: "div[ng-form='rulesForm'] div.end-rules p.title.pull-left.nomargins"},
            rulesTitleDataTooltipTextEndRules: {css: "div[ng-form='rulesForm'] div.end-rules p.title.pull-left.nomargins i"},
            errorMissingFieldsEndRulesMessageEndRules: {css: "div[ng-form='rulesForm'] div.end-rules p[data-ng-if='!rulesForm.$valid']"},
            endDateDataTooltipTextEndRules: {css: "div[ng-form='ruleForm'] div.clearfix.rule-header div:nth-child(2) i"},
            accountingPeriodEndCheckBoxEndRules: {css: "div[ng-form='rulesForm'] div.clearfix.rule-header div input[ng-model='rule.accountingPeriodEnd']"},
            accountingPeriodEndDataTooltipTextEndRules: {css: "div[ng-form='ruleForm'] div.clearfix.rule-header div:nth-child(4) span i"},
            offsetByInputFieldEndRules: {css: "div[ng-form='ruleForm'] div.clearfix.rule-header div:nth-child(4) input[ng-model='rule.offsetValue']"},
            offsetByArrowChoiceEndRules: {css: "div[ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) button.btn.dropdown-toggle"},
            variableLeftDataTooltipTextEndRules: {css: "div[ng-form='conditionForm'] div.pull-left.conditions div:nth-child(1) label.control-label i"},
            attributeLeftDataTooltipTextEndRules: {css: "div[ng-form='conditionForm'] div.pull-left.conditions div:nth-child(3) label.control-label i"},
            withNoticeDataTooltipTextEndRules: {css: "div[ng-form='conditionForm'] div.pull-left.conditions div:nth-child(4) label.control-label i"},
            withNoticeCheckBoxEndRules: {css: "div[ng-form='conditionForm']:nth-child(3) div.pull-left.conditions div:nth-child(4) input[data-ng-model='condition.notification']"},
            requirementDataTooltipTextEndRules: {css: "div[ng-form='conditionForm'] div.pull-left.conditions div:nth-child(5) label.control-label i"},
            variableRightDataTooltipTextEndRules: {css: "div[ng-form='conditionForm'] div.pull-left.conditions div:nth-child(6) label.control-label i"},
            attributeRightDataTooltipTextEndRules: {css: "div[ng-form='conditionForm'] div.pull-left.conditions div:nth-child(7) label.control-label i"},
            preDefinedDateInputFieldEndRules: {css: "div[ng-form='ruleForm'] div.clearfix.rule-header div[name='endDateTypeDate'] input"},
            preDefinedDateMandatoryErrorMessageEndRules: {css: "div[ng-form='ruleForm'] div.clearfix.rule-header div[tg-model-class-validation='rule.endDateType.attrValue'] i"},
            preDefinedDateAttributeRightMandatoryErrorMessageEndRules: {css: "div.span2.attribute-two div i"},
            addEndRulesLink: {css: "a[ng-click='switchEndRulesToEdit(true)']"},
            endDateFieldButtonEndRules: {css: "div[ng-model='rule.endDateType.code'] div.tg-dropdown-button"},
            endDateDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            endDatePreDefinedDateInputFieldEndRules: {css: "div[name='endDateTypeDate'] input"},
            whenVariableLeftButtonEndRules: {css: "div[ng-model='condition.leftValue.code'] button.tg-dropdown-caret"},
            whenVariableLeftDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            attributeLeftFieldEndRules: {css: "input[ng-model='condition.leftValue.attrValue']"},
            attributeLeftErrorMessageEndRules: {css: "div[tg-model-class-validation='condition.leftValue.attrValue'] i"},
            requirementFieldButtonEndRules: {css: "div[ng-form='conditionForm']:nth-child(2) div[ng-model='condition.operator'] button.tg-dropdown-caret.fa.fa-caret-down"},
            requirementDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            variableRightFieldButtonEndRules: {css: "div[ng-model='condition.rightValue.code'] button.tg-dropdown-caret.fa.fa-caret-down"},
            variableRightDropDownDataEndRules: {css: "div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"},
            variableRightErrorMessageEndRules: {css: "div.span2.control-group.condition-right-type.ng-scope div i"},
            deleteEndRulesModalDialog: {css: "div.modal.fade.in"},
            confirmDeleteEndRulesModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            cancelDeleteEndRulesModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"},
            saveButtonEndRules: {css: "div.CONTROLS.clearfix button.btn.btn-primary.pull-right.ng-scope"},
            doneButtonEndRules: {css: "button[ng-click='ok()"},
            deleteButtonEndRules: {css: "div.CONTROLS.clearfix button[data-ng-click='tgModularViewMethods.delete()']"},
            cancelButtonEndRules: {css: "div.CONTROLS.clearfix button.btn.btn-cancel.pull-left"},
            addRuleButtonLinkEndRules: {css: "a[ng-click='addEndRule()']"},
            //assumptions
            addAssumptionLink: {css: "a[ng-click='addNewAdvanceAssumption()']"},
            lpControlPercentageOfWorkAssumptions: {css: "#lpControlPercentageWork"},
            lpControlPercentageOfMechanicalIncomeAsumptions: {css: "#lpControlPercentageMechanical"},
            numberOfSongsAssumptions: {css: "#noOfSongs"},
            percentageOfStatutoryRateAssumptions: {css: "#statutoryRate"},
            amountNotLessThanAssumptions: {css: "#notLessThan"},
            labelsAssumptionsInputField: {css: "div[name='assumptionLabels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            saveAssumptionsButton: {css: "div.mdrc-list.advance-assumptions button[data-ng-click='tgModularViewMethods.save()']"},
            deleteAssumptionsButton: {css: "div.mdrc-list.advance-assumptions button[data-ng-click='tgModularViewMethods.delete()']"},
            saveButton:{css: "div.modal-footer button[ng-click='ok()'"},
            cancelAssumptionsButton: {css: "div.mdrc-list.advance-assumptions button[data-ng-click='tgModularViewMethods.cancel()']"}
        },

        specifyDateLink: function (){

            return $('.ng-valid-previous-cp-has-valid-target-end-date .control-group span[data-ng-if="!modularEditModels.model.target_end_date_override"]');
        },

        deleteEndRuleButton: function (i) {
            return $$('a[ng-click="showDeleteEndRuleModal(rule)"]').get(i - 1);
        },

        confirmDeleteEndRuleButton: function () {
            return $('.modal-footer [data-ng-click="ok()"]');
        },

        ruleDateLabel: function (i) {
            return $('div[ng-form="ruleForm"]:nth-child(' + i + ') .rule-label');
        },

        clickOnAddContractPeriod: function () {
            //browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.addContractPeriodElem));
            pages.createDealContractPeriod.elems.addContractPeriodElem.click();
            pages.createDealContractPeriod.waitForAjax();
        },

        fillDescriptionField: function (description) {
            pages.createDealContractPeriod.elems.descriptionContractPeriod.clear();
            pages.createDealContractPeriod.elems.descriptionContractPeriod.sendKeys(description);
        },

        fillStartActualDate: function () {
            pages.createDealContractPeriod.elems.startDate.sendKeys("2014-03-12");
        },

        fillStartActualDateSpecificValue: function (value) {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.startDate));
            pages.createDealContractPeriod.elems.startDate.sendKeys(value);
        },

        fillTargetEndMonths: function () {
            pages.createDealContractPeriod.elems.endTargetMonths.sendKeys("3");
        },

        fillTargetEndMonthsSpecificValue: function (months) {
            pages.createDealContractPeriod.elems.endTargetMonths.sendKeys(months);
        },

        fillEndActualDate: function () {
            pages.createDealContractPeriod.elems.actualEndDate.sendKeys("2015-03-15");
            pages.createDealContractPeriod.elems.contractPeriodArea.click();
            pages.createDealContractPeriod.waitForAjax();
        },

        fillEndActualDateSpecificValue: function (actualDate) {
            pages.createDealContractPeriod.elems.actualEndDate.sendKeys(actualDate);
            pages.createDealContractPeriod.elems.contractPeriodArea.click();
            pages.createDealContractPeriod.waitForAjax();
        },

        addTheNewContractPeriodDialog: function () {
            pages.createDealContractPeriod.elems.newContractPeriodModalDialog.click();
        },

        clickOnAddMdrcLink: function () {
            var el = pages.createDealContractPeriod.elems.addMdrcLink;
            asAlways(el, 'scrollIntoView', 'click');
            browser.sleep(1000);
        },

        clickOnIncompleteOption: function () {
            pages.createDealContractPeriod.elems.incompleteMdrc.click();
        },

        clickOnDeemedCompleteOption: function () {
            pages.createDealContractPeriod.elems.deemedCompleteMdrc.click();
        },

        clickOnCompleteOption: function () {
            pages.createDealContractPeriod.elems.completeMdrc.click();
        },

        fillIntoMdrcQuantity: function () {
            var number = Math.floor(Math.random() * 50) + 30;
            pages.createDealContractPeriod.elems.mdrcQuantity.sendKeys(number);
        },

        fillIntoMdrcMinimumWorkContribution: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.createDealContractPeriod.elems.mdrcMinimumWorkContribution.clear();
            pages.createDealContractPeriod.elems.mdrcMinimumWorkContribution.sendKeys(number);
        },

        fillIntoMdrcQuantityForCommercialRelease: function () {
            var number = Math.floor(Math.random() * 10) + 1;
            pages.createDealContractPeriod.elems.mdrcQuantityForCommercialRelease.sendKeys(number);
        },

        fillIntoMdrcMajorTerritoriesForCommercialeRelease: function () {
            var number = Math.floor(Math.random() * 5) + 1;
            pages.createDealContractPeriod.elems.mdrcMajorTerritoriesForCommercialRelease.clear();
            pages.createDealContractPeriod.elems.mdrcMajorTerritoriesForCommercialRelease.sendKeys(number);
        },

        fillIntoTerritoriesFieldLetter: function () {
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.mdrcTerritoriesField);
            pages.createDealContractPeriod.elems.mdrcTerritoriesField.click();
            pages.createDealContractPeriod.elems.mdrcTerritoriesInputField.sendKeys("africa");
        },

        selectRandomTerritory: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.mdrcTerritoriesDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnMdrcYesCommercialReleaseByMajorLabel: function () {
            browser.actions().mouseMove(pages.createDealContractPeriod.elems.mdrcYesCommercialReleaseByMajorLabel).perform();
            browser.actions().click(pages.createDealContractPeriod.elems.mdrcYesCommercialReleaseByMajorLabel).perform();
        },

        clickOnMdrcNoCommercialReleaseByMajorLabel: function () {
            browser.actions().mouseMove(pages.createDealContractPeriod.elems.mdrcNoCommercialReleaseByMajorLabel).perform();
            browser.actions().click(pages.createDealContractPeriod.elems.mdrcNoCommercialReleaseByMajorLabel).perform();
        },

        fillIntoMdrcLabelsField: function () {
            var value = Math.random().toString(36).substr(2, 4);
            pages.createDealContractPeriod.elems.mdrcLabelsElement.sendKeys(value);
        },

        selectMdrcRandomValueFromLabel: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.mdrcLabelsDropDownData));

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().
                then(function (promise) {
                    console.log("Text from label is : " + promise);
                    if (promise.indexOf("Create New Label") != -1) {
                        browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer div a"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                var element = options[randomNumber];
                                browser.actions().mouseMove(element).click().perform();
                            })
                    }
                    else {
                        browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                var element = options[randomNumber];
                                browser.actions().mouseMove(element).click().perform();
                            })
                    }
                });
        },

        clickOnMdrcYesSelfRecord: function () {
            pages.createDealContractPeriod.elems.mdrcYesSelfRecord.click();
        },

        clickOnMdrcNoSelfRecord: function () {
            pages.createDealContractPeriod.elems.mdrcNoSelfRecord().click();
        },

        fillIntoMdrcPercentOfMinStatutoryRate: function () {
            var percent = Math.floor(Math.random() * 100) + 1;
            pages.createDealContractPeriod.elems.mdrcPercentOfMinStatutoryRate.sendKeys(percent);
        },

        fillIntoMdrcInNoEventLessThan: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.createDealContractPeriod.elems.mdrcInNoEventLessThan.sendKeys(value);
        },

        clickOnMdrcYesProportionalRecoupmentAllowed: function () {
            pages.createDealContractPeriod.elems.mdrcYesProportionalRecoupmentAllowed.click();
        },

        clickOnMdrcNoProportionalRecoupmentAllowed: function () {
            pages.createDealContractPeriod.elems.mdrcNoProportionalRecoupmentAllowed.click();
        },

        clickOnMdrcYesSeeContractForAdditionalMdrcComplexities: function () {
            pages.createDealContractPeriod.elems.mdrcYesSeeContractForAdditionalMdrcComplexities.click();
        },

        clickOnMdrcNoSeeContractForAdditionalMdrcComplexities: function () {
            pages.createDealContractPeriod.elems.mdrcNoSeeContractForAdditionalMdrcComplexities.click();
        },

        clickOnSaveMdrcForm: function () {
            pages.createDealContractPeriod.elems.mdrcSaveButton.click();
        },

        fillIntoMdrcDeliverySchedule: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.createDealContractPeriod.elems.mdrcDeliverySchedule.sendKeys(value);
        },

        fillIntoMdrcEveryWeeks: function () {
            var value = Math.floor(Math.random() * 10) + 1;
            pages.createDealContractPeriod.elems.mdrcEveryWeeks.sendKeys(value);
        },

        fillIntoMdrcDateCompleted: function () {
            pages.createDealContractPeriod.elems.mdrcDateCompleted.sendKeys("2015-03-09");
        },

        fillIntoMdrcShortfallAmount: function () {
            var value = Math.floor(Math.random() * 80) + 1;
            pages.createDealContractPeriod.elems.mdrcShortfallAmount.sendKeys(value);
        },

        clickOnMdrcForgivenShortfallActionButton: function () {
            pages.createDealContractPeriod.elems.mdrcForgivenShortfallButton.click();
        },

        clickOnMdrcCarriedForwardShortfallActionButton: function () {
            pages.createDealContractPeriod.elems.mdrcCarriedForwardShortfallButton.click();
        },

        selectTheContractPeriodNumberI: function (i) {
            var elem = $$('.deal-list .contract-period-menu-item').get(i-1);

            pages.base.scrollIntoView(elem);
            elem.click();
            //browser.driver.findElement(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(" + i + ")")).click();
        },

        clickOnTheAddEndRulesToContractPeriod: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.addEndRulesLink));
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.addEndRulesLink);
            pages.createDealContractPeriod.elems.addEndRulesLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.endDateFieldButtonEndRules));
        },

        selectTheEndDateEndRulesSpecificValue: function (value) {
            var desiredOption;
            pages.createDealContractPeriod.elems.endDateFieldButtonEndRules.click();
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

        fillIntoTheEndDateTypePreDefinedDateInputFieldEndRules: function (value) {
            pages.createDealContractPeriod.elems.endDatePreDefinedDateInputFieldEndRules.clear();
            pages.createDealContractPeriod.elems.endDatePreDefinedDateInputFieldEndRules.sendKeys(value);
        },


        selectTheEndDateEndRulesSpecificValueRuleNumberI: function (i, value) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-model='rule.endDateType.code'] div.tg-dropdown-button"))));
            pages.base.scrollIntoView(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-model='rule.endDateType.code'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-model='rule.endDateType.code'] div.tg-dropdown-button")).click();
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
            pages.createDealContractPeriod.elems.whenVariableLeftButtonEndRules.click();
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

        selectTheWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;

            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.code'] div.tg-dropdown-button"))));
            pages.base.scrollIntoView(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.code'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.code'] div.tg-dropdown-button")).click();
            pages.base.waitForAjax();
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

        checkTheAttributeLeftWarningMessageEndRules: function () {
            pages.createDealContractPeriod.elems.attributeLeftErrorMessageEndRules.getAttribute("tooltip").
                then(function (promise) {
                    console.log("Attribute left warning message data tooltip value is  : " + promise);
                    expect(promise).toEqual("Percent is required.");
                });
        },

        fillIntoTheAttributeLeftEndRules: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.createDealContractPeriod.elems.attributeLeftFieldEndRules.sendKeys(percent);
        },

        fillIntoTheAttributeLeftEndRulesRuleNumberIRowNumberJ: function (i, j) {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[data-ng-model='condition.left_value_percent']")).clear();
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[data-ng-model='condition.left_value_percent']")).sendKeys(percent);
        },


        fillIntoTheAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[ng-model='condition.leftValue.attrValue']")).clear();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[ng-model='condition.leftValue.attrValue']")).sendKeys(value);
        },


        fillIntoTheAttributeLeftAmountEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[name='attrLeftAmount']")).clear();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[name='attrLeftAmount']")).sendKeys(value);
        },

        selectTheAttributeLeftEndRulesSpecificOptionPercentOrAmountRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.attrType'] div.tg-dropdown-button")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.xpath("//*[@class='tg-dropdown-menu ng-scope']/ul[@class='dropdown-menu']/li[@class='tg-dropdown-menu-item ng-scope']"))));
            browser.driver.findElements(By.xpath("//*[@class='tg-dropdown-menu ng-scope']/ul[@class='dropdown-menu']/li[@class='tg-dropdown-menu-item ng-scope']"))
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

        selectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ: function (i, j, index) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.operator'] div.tg-dropdown-button")).click();
            browser.sleep(3000);
            browser.driver.findElements(By.xpath("//*[@class='tg-dropdown-menu ng-scope']/ul[@class='dropdown-menu']/li[@class='tg-dropdown-menu-item ng-scope']"))
                 .then(function (options) {
                    var randomNumber = index;
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).perform();
                    browser.actions().click(element).perform();
                });
        },



        selectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK: function (i, j, k, index) {
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.operator'] div.tg-dropdown-button")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.xpath("//*[@class='tg-dropdown-menu ng-scope']//ul[@class='dropdown-menu']//li[@class='ng-scope']"))));
            browser.driver.findElements(By.xpath("//*[@class='tg-dropdown-menu ng-scope']//ul[@class='dropdown-menu']//li[@class='ng-scope']"))
            //browser.wait(ExpectedConditions.visibilityOf(element(By.css("body>div:nth-child(" + k + ") div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            //browser.driver.findElements(By.css("body>div:nth-child(" + k + ") div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = index;
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).perform();
                    browser.actions().click(element).perform();
                });
        },

        selectTheRequirementEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.operator'] div.tg-dropdown-button")).click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("body>div:nth-child(9) div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("body>div:nth-child(9) div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
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

        selectTheRequirementEndRulesSpecificValue: function (value) {
            var desiredOption;
            pages.createDealContractPeriod.elems.requirementFieldButtonEndRules.click();
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
            pages.createDealContractPeriod.elems.variableRightFieldButtonEndRules.click();
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

        selectTheRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.code'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.code'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope a"))
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

        selectTheRightVariableEndRulesSpecificFinalContractPeriod: function (i, j, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.attrValue'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.attrValue'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope a"))
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

        fillIntoTheAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.attrValue'] input")).clear();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.attrValue'] input")).sendKeys(value);
        },

        checkTheDeleteIconIsPresentAndDataTooltipEndRulesConditionNumberIRowNumberJ: function (i, j) {
            expect(browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).isDisplayed()).toBeTruthy();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).getAttribute("tooltip").
                then(function (promise) {
                    console.log("Delete rule end rules data tooltip value is  : " + promise);
                    expect(promise).toEqual("Delete Condition");
                });
        },

        clickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal: function (i, j) {
            pages.base.scrollIntoView(element(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")));
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).click();
        },

        clickOnTheDeleteIconEndRulesConditionNumberIRowNumberJ: function (i, j) {
            pages.base.scrollIntoView(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")));
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i"))));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).click();
        },

        clickOnConfirmDeleteEndRuleCondition: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"))));
            browser.actions().mouseMove(element(By.css("div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"))).perform();
            browser.driver.findElement(By.css("div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']")).click();
        },

        checkTheVariableRightWarningMessageEndRules: function () {
            pages.createDealContractPeriod.elems.variableRightErrorMessageEndRules.getAttribute("tooltip").
                then(function (promise) {
                    console.log("Variable right warning message data tooltip value is  : " + promise);
                    expect(promise).toEqual("Variable Right is required.");
                });
        },

        saveTheEndRules: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.saveButtonEndRules));
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.saveButtonEndRules);
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealContractPeriod.elems.saveButtonEndRules));
            pages.createDealContractPeriod.elems.saveButtonEndRules.click();
            //browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div[data-ng-form='ruleForm']:nth-child(1) div[data-ng-form='conditionForm']:nth-child(3) div[data-ng-model='condition.left_value'] div.tg-dropdown-button"))));
        },

        doneTheEndRules: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealContractPeriod.elems.doneButtonEndRules));
            pages.createDealContractPeriod.elems.doneButtonEndRules.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.createDealContractPeriod.elems.whenVariableLeftButtonEndRules));
        },


        clickOnTheAddAdvanceAssumptionsLink: function () {
            var el = pages.createDealContractPeriod.elems.addAssumptionLink;
            pages.base.scrollIntoView(el);
            el.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.lpControlPercentageOfWorkAssumptions));
        },

        fillIntoTheLpControlPercentageOfWork: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealContractPeriod.elems.lpControlPercentageOfWorkAssumptions.sendKeys(percent);
        },

        fillIntoTheLpControlPercentageOfMechanicalIncome: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealContractPeriod.elems.lpControlPercentageOfMechanicalIncomeAsumptions.sendKeys(percent);
        },

        fillIntoTheNumberOfSongs: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.createDealContractPeriod.elems.numberOfSongsAssumptions.sendKeys(number);
        },

        fillIntoThePercentageOfStatutoryRate: function () {
            var percent = (Math.random() * 99 + 1).toFixed(2);
            pages.createDealContractPeriod.elems.percentageOfStatutoryRateAssumptions.sendKeys(percent);
        },

        fillIntoTheAmountNoLessThan: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.createDealContractPeriod.elems.amountNotLessThanAssumptions.sendKeys(number);
        },

        selectTheRandomLabelValueAssumptions: function () {
            var value = Math.random().toString(36).substr(2, 3);
            pages.createDealContractPeriod.elems.labelsAssumptionsInputField.sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions.ng-scope"))));

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().
            then(function (promise) {
                console.log("Text from label is : " + promise);
                if (promise.indexOf("Create New Label") != -1) {
                    browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer div a"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            pages.base.scrollIntoView(element);
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
                else {
                    browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                        .then(function (options) {
                            var randomNumber = Math.floor((Math.random() * options.length));
                            var element = options[randomNumber];
                            pages.base.scrollIntoView(element);
                            browser.actions().mouseMove(element).click().perform();
                        })
                }
            });
        },

        saveTheAdvanceAssumptions: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.saveAssumptionsButton));
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.saveAssumptionsButton);
            pages.createDealContractPeriod.elems.saveAssumptionsButton.click();
        },

        dealHeader: function () {
            return $(".header-info");
        },

        waitForDealLoadToFinish: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.dealHeader()));
        },

        checkTheEndRulesTooltipTextValue: function () {
            pages.createDealContractPeriod.elems.endRulesTooltip.getAttribute("tooltip").
            then(function (promise) {
                console.log("End rules tooltip value is  : " + promise);
                expect(promise).toEqual("A set of Rules that define when this Period should end.");
            });
        },

        checkTheRulesForEndDateTitleTextEndRules: function () {
            pages.createDealContractPeriod.elems.rulesForEndDateTextEndRules.getText().
            then(function (promise) {
                console.log("Rules for end date title is   : " + promise);
                expect(promise).toEqual("RULES FOR END DATE");
            });
        },

        checkTheRulesForEndDateDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.rulesForEndDateDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Rules for end date data tooltip text  is   : " + promise);
                //expect(promise).toEqual("A set of Rules that define when this Period should end.");
            });
        },

        checkTheSummaryOfRulesForEndDateTitleTextEndRules: function () {
            pages.createDealContractPeriod.elems.summaryOfEndRulesTitleTextEndRules.getText().
            then(function (promise) {
                console.log("Summary of rules for end date title text is   : " + promise);
                expect(promise).toEqual("Summary of Rules for End Date:");
            });
        },

        checkTheSummaryOfRulesForEndDateDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.summaryOfEndRulesDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Summary of rules for end date data tooltip text is   : " + promise);
                expect(promise).toEqual("As you define when the Period will end based on the elements below, this section will provide an at-a-glance account of what has been defined.");
            });
        },

        checkTheRulesTitleTextEndRules: function () {
            pages.createDealContractPeriod.elems.rulesTitleTextEndRules.getText().
            then(function (promise) {
                console.log("Rules title text is   : " + promise);
                expect(promise).toEqual("Rules:");
            });
        },

        checkTheRulesDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.rulesTitleDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Rules data tooltip text is   : " + promise);
                expect(promise).toEqual("Add a Rule for each End Date scenario called for in the contract. For example, if the contract states that the Period \"ends on either the earlier of the contract year or the MDRC complete date,\" then two rules must be created as there are two possibilities listed-one for contract year (Target End Date) and the other for MDRC complete.");
            });
        },

        checkTheEndDateDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.endDateDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("End date data tooltip text  is   : " + promise);
                expect(promise).toEqual("Defines the type of End Date (e.g., MDRC completion date).");
            });
        },

        clickOnTheAccountingPeriodEndDateCheckBoxEndRules: function () {
            pages.createDealContractPeriod.elems.accountingPeriodEndCheckBoxEndRules.click();
        },

        checkTheAccountingPeriodEndDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.accountingPeriodEndDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Accounting period end data tooltip text  is   : " + promise);
                expect(promise).toEqual("If the effect of the Rule will end the Period prior to the end of an accounting period, select this element that will then ensure the Period does not formally end until the accounting period has completed.");
            });
        },

        checkTheVariableLeftDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.variableLeftDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Variable left data tooltip text is   : " + promise);
                expect(promise).toEqual("This is the primary condition that would trigger the end of a Period. This element must be defined first to complete the rest of the Rule creation. For example, if the contract ends upon the MDRC Complete, then that is what should be selected from the dropdown.");
            });
        },

        checkTheAttributeLeftDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.attributeLeftDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Attribute left data tooltip text is   : " + promise);
                expect(promise).toEqual("This element provides a place for either a date, a percentage, or an amount that coincides with the Variable Left. For example, if the Variable Left is MDRC Complete, then a percentage will be selected as the Attribute.");
            });
        },

        checkTheWithNoticeDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.withNoticeDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("With notice data tooltip text  is   : " + promise);
                expect(promise).toEqual("This element appears as necessary when it coincides with the Variable Left. If checked, this element requires documentation that Variable Left has been fulfilled.");
            });
        },

        clickOnTheWithNoticeCheckBoxEndRules: function () {
            pages.createDealContractPeriod.elems.withNoticeCheckBoxEndRules.click();
        },

        clickOnTheWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ: function (i, j) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div.pull-left.conditions input[ng-model='condition.notice']")).click();
        },


        checkTheRequirementDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.requirementDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Requirement data tooltip text  is   : " + promise);
                expect(promise).toEqual("Using symbols, this element defines how Variable Left should be compared to Variable Right for the Condition to be true. For example, if the Deal stipulates that MDRC Complete (Variable Left) must occur \"on or before\" the Target End Date (Variable Right), then select \"< or =\" as the Requirement.");
            });
        },

        checkTheVariableRightDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.variableRightDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Variable right data tooltip text  is   : " + promise);
                expect(promise).toEqual("This is the condition in contrast to Variable Left that defines what would trigger the end of a Period. Commonly, this is the same as for End Date Type. For example, if the End Date is Balance Repaid at 110%, then that is what should be selected from the dropdown.");
            });
        },

        checkTheAttributeRightDataTooltipTextEndRules: function () {
            pages.createDealContractPeriod.elems.attributeRightDataTooltipTextEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Attribute right data tooltip text  is   : " + promise);
                expect(promise).toEqual("This element provides a place for either a date, a percentage, or an amount that coincides with the Variable Right. For example, if the Variable Right is MDRC Complete, then a date will be selected as the Attribute.");
            });
        },

        validateThePreDefinedDateFieldEndRulesIsRequiredWarning: function (error_message) {
            pages.createDealContractPeriod.elems.preDefinedDateMandatoryErrorMessageEndRules.getAttribute("tooltip").
            then(function (promise) {
                console.log("Pre defined date error message data tooltip text  is   : " + promise);
                expect(promise).toEqual(error_message);
            });
        },

        validateThePreDefinedDateAttributeRightFieldEndRulesIsRequiredWarning: function (error_message) {
            pages.createDealContractPeriod.elems.preDefinedDateAttributeRightMandatoryErrorMessageEndRules.getAttribute("tooltip").
                then(function (promise) {
                    console.log("Pre defined date attribute right error message data tooltip text  is   : " + promise);
                    expect(promise).toEqual(error_message);
                });
        },

        fillIntoThePreDefinedDateFieldEndRulesSpecificDate: function (specific_date) {
            pages.createDealContractPeriod.elems.preDefinedDateInputFieldEndRules.sendKeys(specific_date);
        },

        fillIntoThePreDefinedDateFieldEndRulesSpecificDateRuleNumberI: function (i, specific_date) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header div[name='endDateTypeDate'] input")).clear();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header div[name='endDateTypeDate'] input")).sendKeys(specific_date);
        },

        fillIntoTheOffsetByInputFieldEndRules: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.createDealContractPeriod.elems.offsetByInputFieldEndRules.clear();
            pages.createDealContractPeriod.elems.offsetByInputFieldEndRules.sendKeys(number);
        },

        fillIntoTheOffsetByInputFieldEndRulesSpecificValue: function (number) {
            pages.createDealContractPeriod.elems.offsetByInputFieldEndRules.clear();
            pages.createDealContractPeriod.elems.offsetByInputFieldEndRules.sendKeys(number);
        },

        fillIntoTheOffsetByInputFieldEndRulesRuleNumberI: function (i) {
            var number = Math.floor(Math.random() * 100) + 1;
            browser.driver.findElement(By.css("div[ng-form='ruleForm'] div.clearfix.rule-header input[ng-model='rule.offsetValue']")).sendKeys(number);
        },

        selectTheRandomOptionFromOffsetByChoiceEndRules: function (i) {
            pages.createDealContractPeriod.elems.offsetByArrowChoiceEndRules.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='rulesForm'] div.clearfix.rule-header div ul.dropdown-menu li:nth-child(" + i + ")  a"))));
            browser.driver.findElements(By.css("div[ng-form='rulesForm'] div.clearfix.rule-header div ul.dropdown-menu li:nth-child(" + i + ")  a"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },


        selectTheSpecificOptionFromOffsetByChoiceEndRules: function (value) {
            var desiredOption;
            pages.createDealContractPeriod.elems.offsetByArrowChoiceEndRules.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.xpath("//*[@tg-model-class-validation='rule.offsetValue']//ul[@class='dropdown-menu']/li/a"))));
            pages.base.scrollIntoView(element(By.xpath("//*[@tg-model-class-validation='rule.offsetValue']//ul[@class='dropdown-menu']/li/a")));
            browser.driver.findElements(By.xpath("//*[@tg-model-class-validation='rule.offsetValue']//ul[@class='dropdown-menu']/li/a"))
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


        clickOnTheAddNewRuleEndRulesAddedRuleNumberI: function (i) {
            browser.driver.findElement(By.css("div[ng-form='conditionForm']:nth-child(" + (i + 2) + ") a[ng-click='addEndRuleCondition(rule, condition)'] i")).click();
            //browser.driver.findElement(By.css('a[ng-click="addEndRule()"]')).click();

        },

        clickOnTheAddRuleInTheBottomOfEndRulesForm: function () {
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.addRuleButtonLinkEndRules);
            pages.createDealContractPeriod.elems.addRuleButtonLinkEndRules.click();
        },

        checkTheTextRuleWhenOrAndEndRulesRuleNumberI: function (i, name) {
            browser.driver.findElement(By.css("div[ng-form='conditionForm']:nth-child(" + (i + 2) + ") div.pull-left.condition-label")).getText().
                then(function (promise) {
                    console.log("The rext rule when or and end rules for rule number: " + i + " is: " + promise);
                    expect(promise).toEqual(name);
                });
        },

        clickOnTheCancelEndRulesButton: function () {
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.cancelButtonEndRules);
            pages.createDealContractPeriod.elems.cancelButtonEndRules.click();
        },

        clickOnDeleteEndRule: function (i) {
            var el = pages.createDealContractPeriod.deleteEndRuleButton(i);
            pages.base.scrollIntoView(el);
            el.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.confirmDeleteEndRuleButton()));
        },

        clickOnConfirmDeleteEndRule: function () {
            var el = pages.createDealContractPeriod.confirmDeleteEndRuleButton();
            browser.wait(ExpectedConditions.visibilityOf(el));
            el.click();
            pages.createDealContractPeriod.waitForAjax();
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.ruleDateLabel(1)));
        },

        clickOnTheConfirmCancellationEndRulesModalButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.deleteEndRulesModalDialog));
            pages.createDealContractPeriod.elems.confirmDeleteEndRulesModalDialog.click();
        },

        reorderEndRule: function (from, to) {
            browser.actions().dragAndDrop(
                pages.createDealContractPeriod.ruleDateLabel(from),
                pages.createDealContractPeriod.ruleDateLabel(to)
            ).perform();
        },

        clickOnTheContinueEditingEndRulesModalButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.deleteEndRulesModalDialog));
            pages.createDealContractPeriod.elems.cancelDeleteEndRulesModalDialog.click();
        },

        clickOnTheDeleteEndRulesButton: function () {
            pages.base.scrollIntoView(pages.createDealContractPeriod.elems.deleteButtonEndRules);
            pages.createDealContractPeriod.elems.deleteButtonEndRules.click();
        },

        clickOnTheEndRulesArea: function () {
            browser.driver.findElement(By.css("div[ng-form='rulesForm'] div.summary-end-rules")).click();
        },

        checkTheSummaryTextForEndRulesRuleNumberI: function (i, text) {
            browser.sleep(2000);
            pages.base.scrollIntoView(element(by.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")));
            browser.driver.findElement(By.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")).getText().
                then(function (promise) {
                    console.log("The summary text for end rules for rule number: " + i + " is: " + promise);
                    expect(promise).toEqual(text);
                });
        },

        checkTheSummaryTextForEndRulesRuleNumberIContainsText: function (i, text) {
            pages.base.scrollIntoView(element(by.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")));
            browser.driver.findElement(By.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")).getText().
                then(function (promise) {
                    console.log("The summary text for  end rules for rule number: " + i + " is: " + promise);
                    expect(promise).toContain(text);
                });
        },

    });
}



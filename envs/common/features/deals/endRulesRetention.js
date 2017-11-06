'use strict';

exports.id = '02160962-86ea-49ea-b8e6-875fd5465300';

// exports.beforeEach =function () {
//     var origFn = browser.driver.controlFlow().execute;
//
//     browser.driver.controlFlow().execute = function () {
//         var args = arguments;
//         origFn.call(browser.driver.controlFlow(), function () {
//             return protractor.promise.delayed(100);   // here we can adjust the execution speed
//         });
//         return origFn.apply(browser.driver.controlFlow(), args);
//     };
//
// },

exports.beforeFeature = function () {


    steps.login.itLogin();

},

    exports.commonFeatureTags = [
        'deals',
        'endRules',
        'endRulesRetention',
        'regression'
    ];

exports.feature = [
    {
        name: 'Create a deal with end rules on retention period, validate fields and tooltips delete conditions',
        tags: ['createDeleteEndRulesRetention'],
        //steps: function() {
        steps: criticalScenario(() => {
            var today = new Date(),
                currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
                er = steps.endRulesRetention,
                cdr = steps.createDealRtp,
                d = steps.deal;

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            d.itContinueToNextPage();
            er.itFillDealMandatoryFieldsContractPeriod();
            d.itContinueToNextPage();
            cdr.clickOnAddRetentionPeriodFromAcquisition();
            cdr.selectRandomDurationTypeRetentionFromAcquisitionNumberI(3, 'Conditional Duration');
            cdr.addEndRules();

            er.checkEndRulesTooltipTextValue();
            //er.checkRulesForEndDateDataTooltipTextEndRules();
            er.checkSummaryOfRulesForEndDateTitleTextEndRules();
            er.checkSummaryOfRulesForEndDateDataTooltipTextEndRules();
            er.checkRulesTitleTextEndRules();
            er.checkRulesDataTooltipTextEndRules();
            er.checkEndDateDataTooltipTextEndRules();
            er.checkAccountingPeriodEndDataTooltipTextEndRules();
            er.checkVariableLeftDataTooltipTextEndRules();
            er.checkAttributeLeftDataTooltipTextEndRules();
            er.checkWithNoticeDataTooltipTextEndRules();
            er.checkRequirementDataTooltipTextEndRules();
            er.checkVariableRightDataTooltipTextEndRules();
            er.checkAttributeRightDataTooltipTextEndRules();
            //
            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Repayment Date');
            er.validateAccountingPeriodEndRulesIsDisplayed();

            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Pre-Defined Date'); //prev set to 2
            er.validatePreDefinedDateFieldEndRulesIsRequiredWarning('Date is required.');
            er.fillIntoPreDefinedDateFieldEndRulesSpecificDateRuleNumberI(1, '0000');
            er.validatePreDefinedDateFieldEndRulesIsRequiredWarning('Invalid date.');
            //
            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Recouped Date');
            er.validateAccountingPeriodEndRulesIsDisplayed();
            er.validateOffsetByInputFieldEndRulesIsDisplayed();
            er.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            er.selectRandomOptionFromOffsetByChoiceEndRules(4);
            //
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Balance Repaid');
            er.checkAttributeLeftWarningMessageEndRules();
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '55.54');
            er.checkWithNoticeDataTooltipTextEndRules();
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 0);
            er.checkVariableRightWarningMessageEndRules();
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Pre-Defined Date');
            er.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '098');
            er.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, currentDate);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 1);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 2);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 3);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 4);
            //
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            er.checkWithNoticeDataTooltipTextEndRules();
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            er.checkVariableRightWarningMessageEndRules();
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            er.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '444');
            er.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, currentDate);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            //
            er.checkTextRuleWhenOrAndEndRulesRuleNumberI(2, 'AND');
            er.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            er.checkTextRuleWhenOrAndEndRulesRuleNumberI(0, 'WHEN');
            er.checkTextRuleWhenOrAndEndRulesRuleNumberI(1, 'AND');
            er.checkTextRuleWhenOrAndEndRulesRuleNumberI(2, 'AND');
            //
            er.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            er.clickOnConfirmDeleteEndRuleCondition();
            //
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            er.saveEndRulesForm();
            d.saveDeal();
            d.waitForDealToBeSaved();
            d.returnDealNumber();
        })
    },
    {
        name: 'Create a deal with end rules on retention period and delete rules',
        tags: ['deleteEndRulesRetention'],
        //steps: function() {
        steps: criticalScenario(() => {
            var er = steps.endRulesRetention,
                cdr = steps.createDealRtp,
                d = steps.deal;

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            d.itContinueToNextPage();
            er.itFillDealMandatoryFieldsContractPeriod();
            d.itContinueToNextPage();
            cdr.clickOnAddRetentionPeriodFromAcquisition();
            cdr.selectRandomDurationTypeRetentionFromAcquisitionNumberI(3, 'Conditional Duration');
            cdr.addEndRules();

            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Recouped Date');
            er.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            er.selectRandomOptionFromOffsetByChoiceEndRules(4);

            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '55.54');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 0);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Recouped');

            er.clickOnAddNewRuleEndRulesAddedRuleNumberI(0);
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Recouped');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '55.54');
            er.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 0);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 0);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Retention Period Minimum');

            er.saveEndRulesForm();

            cdr.addEndRules();
            er.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            er.cancelDeleteEndRules();
            er.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            er.clickOnConfirmDeleteEndRuleCondition();

            er.clickOnAddRuleInTheBottomOfEndRulesForm();
            er.selectEndDateEndRulesSpecificValueRuleNumberI(2, 'Repayment Date');
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 0, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 0, '55.54');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 0, 1);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 0, 'Recouped');

            er.deleteEndRule(1);
            er.confirmDeleteEndRule();

            er.clickOnDeleteEndRulesButton();
            er.cancelDeleteEntireEndRules();
            er.clickOnDeleteEndRulesButton();
            er.confirmDeleteEntireEndRules();

            d.saveDeal();
            d.waitForDealToBeSaved();
            d.returnDealNumber();
        })
    },
    {
        name: 'Create a deal with end rules on retention period and check the summary for end rules',
        tags: ['summaryEndRulesRetention'],
        //steps: function(){
        steps: criticalScenario(() => {
            var er = steps.endRulesRetention,
                cdr = steps.createDealRtp,
                d = steps.deal;

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            d.itContinueToNextPage();
            er.itFillDealMandatoryFieldsContractPeriod();
            d.itContinueToNextPage();
            cdr.clickOnAddRetentionPeriodFromAcquisition();
            cdr.selectRandomDurationTypeRetentionFromAcquisitionNumberI(3, 'Conditional Duration');
            cdr.addEndRules();

            // check default summary, if
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If [Variable Left] ... [Requirement] [Variable Right] the , then the Actual End Date is[End Date Type] the ... .');
            er.checkSummaryTextForEndRulesRuleNumberIContainsText(1, 'If');

            // check variable left
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Balance Repaid');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid ... [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Current date');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Current date [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Recouped');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped ... [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');

            // cancel end rules and add again end rules
            er.clickOnCancelEndRulesButton();
            er.clickOnConfirmCancellationEndRulesModalButton();

            cdr.addEndRules();
            steps.base.sleep(5000);
            // check attribute left and % attribute left
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Recouped');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '65.43');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 65.43% [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectAttributeLeftEndRulesSpecificOptionPercentOrAmountRuleNumberIRowNumberJ(1, 0, 'Amount');
            er.fillIntoAttributeLeftAmountEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '32');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');

            // check with notice
            er.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 0);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 (with notice) [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 0);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 [Requirement] [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');

            // check requirement
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 0);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is before [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 1);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is on [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 2);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is after [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 3);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is before or on [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 4);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is on or after [Variable Right] the , and then the Actual End Date is[End Date Type] the ... .');

            // cancel end rules and add again end rules
            er.clickOnCancelEndRulesButton();
            er.clickOnConfirmCancellationEndRulesModalButton();

            cdr.addEndRules();

            // check variable right
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '2');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 4);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Recouped');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 2% is on or after the Recouped Date, and then the Actual End Date is[End Date Type] the ... .');
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Retention Period Minimum');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 2% is on or after the Retention Period Minimum, and then the Actual End Date is[End Date Type] the ... .');
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Pre-Defined Date');
            er.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '2014-12-08');
            er.clickOnEndRulesArea();
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 2% is on or after 2014-12-08, and then the Actual End Date is[End Date Type] the ... .');

            // cancel end rules and add again end rules
            er.clickOnCancelEndRulesButton();
            er.clickOnConfirmCancellationEndRulesModalButton();

            cdr.addEndRules();

            // check end date type
            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Repayment Date');
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, '32');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 0, 0);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 0, 'Recouped');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Repayment Date .');
            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Pre-Defined Date');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is ... .');
            er.fillIntoEndDateTypePreDefinedDateInputFieldEndRules('2016-12-18');
            er.clickOnEndRulesArea();
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is 2016-12-18 .');
            er.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Retention Period Start');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start ... .');
            er.fillIntoOffsetByInputFieldEndRulesSpecificValue(21);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days .');
            er.selectSpecificOptionFromOffsetByChoiceEndRules('Weeks');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 weeks .');
            er.selectSpecificOptionFromOffsetByChoiceEndRules('Months');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 months .');
            er.selectSpecificOptionFromOffsetByChoiceEndRules('Years');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 years .');
            er.selectSpecificOptionFromOffsetByChoiceEndRules('Days');

            // check accounting period end
            er.clickAccountingPeriodEndDateCheckBoxEndRules();
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days,  at accounting period end .');
            er.clickAccountingPeriodEndDateCheckBoxEndRules();
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days .');

            // check add new condition
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and Recouped ... [Requirement] [Variable Right] the , and then the Actual End Date is the Retention Period Start offset by 21 days .');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '30');
            er.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Retention Period Minimum');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, and then the Actual End Date is the Retention Period Start offset by 21 days .');
            er.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If [Variable Left] ... [Requirement][Variable Right] ..., and Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Retention Period Start offset by 21 days.');
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '30');
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            er.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '2014-12-08');
            er.clickOnEndRulesArea();
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and Balance Repaid at 30% is on 2014-12-08, and Recouped at 30% (with notice) is after the Retention Period Minimum, and then the Actual End Date is the Retention Period Start offset by 21 days .');
            er.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            er.clickOnConfirmDeleteEndRuleCondition();
            er.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            er.clickOnConfirmDeleteEndRuleCondition();
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days .');

            // add new rule
            er.clickOnAddRuleInTheBottomOfEndRulesForm();
            er.selectEndDateEndRulesSpecificValueRuleNumberI(2, 'Repayment Date');
            er.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 0, 'Balance Repaid');
            er.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 0, '45');
            er.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(2, 0);
            er.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 0, 2);
            er.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 0, 'Recouped');
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days .');
            er.checkSummaryTextForEndRulesRuleNumberI(2, 'If Balance Repaid at 45% (with notice) is after the Recouped Date, and then the Actual End Date is the Repayment Date .');

            // reorder rule
            er.reorderEndRule(2, 1);
            er.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 45% (with notice) is after the Recouped Date, and then the Actual End Date is the Repayment Date .');
            er.checkSummaryTextForEndRulesRuleNumberI(2, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days .');

            // save end rules
            er.saveEndRulesForm();

            cdr.hoverEndRules();
            cdr.validateSummaryEndRule(1, 'If Balance Repaid at 45% (with notice) is after the Recouped Date, and then the Actual End Date is the Repayment Date .');
            cdr.validateSummaryEndRule(2, 'If Balance Repaid at 32% is before the Recouped Date, and then the Actual End Date is the Retention Period Start offset by 21 days .');

            d.saveDeal();
            d.waitForDealToBeSaved();
            d.returnDealNumber();
        })
    }

];

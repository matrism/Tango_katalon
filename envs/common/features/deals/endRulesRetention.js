'use strict';

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
        tags: ['createDeleteConditionEndRulesRetention'],
        steps: function () {
            var today = new Date(),
                currentDate = today.getFullYear() + '-' + today.getMonth() + 1 + '-' + today.getDate();

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.endRulesRetention.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, 'Conditional Duration');
            steps.createDealRtp.addEndRules();

            //check data tooltips value and text values
            steps.endRulesRetention.checkEndRulesTooltipTextValue();
            steps.endRulesRetention.checkRulesForEndDateDataTooltipTextEndRules();
            steps.endRulesRetention.checkSummaryOfRulesForEndDateTitleTextEndRules();
            steps.endRulesRetention.checkSummaryOfRulesForEndDateDataTooltipTextEndRules();
            steps.endRulesRetention.checkRulesTitleTextEndRules();
            steps.endRulesRetention.checkRulesDataTooltipTextEndRules();
            steps.endRulesRetention.checkEndDateDataTooltipTextEndRules();
            steps.endRulesRetention.checkAccountingPeriodEndDataTooltipTextEndRules();
            steps.endRulesRetention.checkVariableLeftDataTooltipTextEndRules();
            steps.endRulesRetention.checkAttributeLeftDataTooltipTextEndRules();
            steps.endRulesRetention.checkWithNoticeDataTooltipTextEndRules();
            steps.endRulesRetention.checkRequirementDataTooltipTextEndRules();
            steps.endRulesRetention.checkVariableRightDataTooltipTextEndRules();
            steps.endRulesRetention.checkAttributeRightDataTooltipTextEndRules();

            //check end date field
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Repayment Date');
            steps.endRulesRetention.validateAccountingPeriodEndRulesIsDisplayed();

            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Pre-Defined Date');
            steps.endRulesRetention.validatePreDefinedDateFieldEndRulesIsRequiredWarning('Date is required.');
            steps.endRulesRetention.fillIntoPreDefinedDateFieldEndRulesSpecificDateRuleNumberI(1, '0000');
            steps.endRulesRetention.validatePreDefinedDateFieldEndRulesIsRequiredWarning('Invalid date.');

            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Recouped Date');
            steps.endRulesRetention.validateAccountingPeriodEndRulesIsDisplayed();
            steps.endRulesRetention.validateOffsetByInputFieldEndRulesIsDisplayed();
            steps.endRulesRetention.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.endRulesRetention.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.checkAttributeLeftWarningMessageEndRules();
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            steps.endRulesRetention.checkWithNoticeDataTooltipTextEndRules();
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.endRulesRetention.checkVariableRightWarningMessageEndRules();
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            steps.endRulesRetention.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '098');
            steps.endRulesRetention.validatePreDefinedDateFieldAttributeRightEndRulesIsRequiredWarning('Invalid date.');
            steps.endRulesRetention.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, currentDate);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);

            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            steps.endRulesRetention.checkWithNoticeDataTooltipTextEndRules();
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.endRulesRetention.checkVariableRightWarningMessageEndRules();
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            steps.endRulesRetention.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '444');
            steps.endRulesRetention.validatePreDefinedDateFieldAttributeRightEndRulesIsRequiredWarning('Invalid date.');
            steps.endRulesRetention.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, currentDate);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);

            steps.endRulesRetention.checkTextRuleWhenOrAndEndRulesRuleNumberI(2, 'AND');
            steps.endRulesRetention.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.endRulesRetention.checkTextRuleWhenOrAndEndRulesRuleNumberI(1, 'WHEN');
            steps.endRulesRetention.checkTextRuleWhenOrAndEndRulesRuleNumberI(2, 'AND');
            steps.endRulesRetention.checkTextRuleWhenOrAndEndRulesRuleNumberI(3, 'AND');

            steps.endRulesRetention.checkDeleteIconIsPresentAndDataTooltipEndRulesConditionNumberIRowNumberJ(1, 1);
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 1);
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJ(1, 1);

            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');

            /*
            steps.endRulesRetention.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'MDRC Complete');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            steps.endRulesRetention.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            //steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(1, 1, 15, 0);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Target End Date');
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 2);
            steps.endRulesRetention.cancelDeleteEndRules();
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJ(1, 2);
            */

            steps.endRulesRetention.saveEndRulesForm();

            //steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: 'Create a deal with end rules on retention period and delete rules',
        tags: ['deleteEndRulesRetention'],
        steps: function () {


            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.endRulesRetention.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, 'Conditional Duration');
            steps.createDealRtp.addEndRules();

            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Recouped Date');
            steps.endRulesRetention.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.endRulesRetention.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');

            steps.endRulesRetention.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '55.54');
            steps.endRulesRetention.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Retention Period Minimum');

            steps.endRulesRetention.saveEndRulesForm();

            steps.createDealRtp.addEndRules();
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 2);
            steps.endRulesRetention.cancelDeleteEndRules();
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJ(1, 2);

            steps.endRulesRetention.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(2, 'Repayment Date');
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, '55.54');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 1);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, 'Recouped');

            steps.endRulesRetention.deleteEndRule(1);
            steps.endRulesRetention.confirmDeleteEndRule();

            steps.endRulesRetention.clickOnDeleteEndRulesButton();
            steps.endRulesRetention.cancelDeleteEntireEndRules();
            steps.endRulesRetention.clickOnDeleteEndRulesButton();
            steps.endRulesRetention.confirmDeleteEntireEndRules();


            steps.endRulesRetention.saveEndRulesForm();

            //steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: 'Create a deal with end rules on retention period and check the summary for end rules',
        tags: ['summaryEndRulesRetention'],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.endRulesRetention.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, 'Conditional Duration');
            steps.createDealRtp.addEndRules();

            //check default summary, if
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If [Variable Left] ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberIContainsText(1, 'If');
            //check variable left
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Current date');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Current date[Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            //cancel end rules and add again end rules
            steps.endRulesRetention.clickOnCancelEndRulesButton();
            steps.endRulesRetention.clickOnConfirmCancellationEndRulesModalButton();
            steps.createDealRtp.addEndRules();
            //check attribute left and % attribute left
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '65.43');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 65.43% [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectAttributeLeftEndRulesSpecificOptionPercentOrAmountRuleNumberIRowNumberJ(1, 1, 'Amount');
            steps.endRulesRetention.fillIntoAttributeLeftAmountEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 32);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            //check with notice
            steps.endRulesRetention.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 (with notice) [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            //check requirement
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is before [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is on [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is after [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is before or on [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Recouped at 32 is on or after [Variable Right] ..., then the Actual End Date is [End Date Type] ....');
            //cancel end rules and add again end rules
            steps.endRulesRetention.clickOnCancelEndRulesButton();
            steps.endRulesRetention.clickOnConfirmCancellationEndRulesModalButton();
            steps.createDealRtp.addEndRules();
            //check variable right
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '2');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 2% is on or after the Recouped Date, then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Retention Period Minimum');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 2% is on or after the Retention Period Minimum, then the Actual End Date is [End Date Type] ....');
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            steps.endRulesRetention.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '2014-12-08');
            steps.endRulesRetention.clickOnEndRulesArea();
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 2% is on or after 2014-12-08, then the Actual End Date is [End Date Type] ....');
            //cancel end rules and add again end rules
            steps.endRulesRetention.clickOnCancelEndRulesButton();
            steps.endRulesRetention.clickOnConfirmCancellationEndRulesModalButton();
            steps.createDealRtp.addEndRules();

            //check end date type
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Repayment Date');
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '32');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Recouped');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Repayment Date.');
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Pre-Defined Date');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is ....');
            steps.endRulesRetention.fillIntoEndDateTypePreDefinedDateInputFieldEndRules('2014-12-18');
            steps.endRulesRetention.clickOnEndRulesArea();
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is 2014-12-18.');
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, 'Retention Period Start');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start ....');
            steps.endRulesRetention.fillIntoOffsetByInputFieldEndRulesSpecificValue(21);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days.');
            steps.endRulesRetention.selectSpecificOptionFromOffsetByChoiceEndRules('Weeks');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 weeks.');
            steps.endRulesRetention.selectSpecificOptionFromOffsetByChoiceEndRules('Months');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 months.');
            steps.endRulesRetention.selectSpecificOptionFromOffsetByChoiceEndRules('Years');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 years.');
            steps.endRulesRetention.selectSpecificOptionFromOffsetByChoiceEndRules('Days');
            //check accounting period end
            steps.endRulesRetention.clickAccountingPeriodEndDateCheckBoxEndRules();
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days, at accounting period end.');
            steps.endRulesRetention.clickAccountingPeriodEndDateCheckBoxEndRules();
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days.');
            //check add new condition
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, 'Recouped');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and Recouped ... [Requirement] [Variable Right] ..., then the Actual End Date is the Retention Period Start offset by 21 days.');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, '30');
            steps.endRulesRetention.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 2);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 2, 2);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, 'Retention Period Minimum');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Retention Period Start offset by 21 days.');
            steps.endRulesRetention.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If [Variable Left] ... [Requirement] [Variable Right] ..., and Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Retention Period Start offset by 21 days.');
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '30');
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 'Pre-Defined Date');
            steps.endRulesRetention.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, '2014-12-08');
            steps.endRulesRetention.clickOnEndRulesArea();
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 30% is on 2014-12-08, and Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Retention Period Start offset by 21 days.');
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            steps.endRulesRetention.deleteEndRulesConditionNumberIRowNumberJ(1, 2);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days.');

            //add new rule
            steps.endRulesRetention.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(2, 'Repayment Date');
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, 'Balance Repaid');
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, '45');
            steps.endRulesRetention.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(2, 1);
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 2);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, 'Recouped');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days.');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(2, 'If Balance Repaid at 45% (with notice) is after the Recouped Date, then the Actual End Date is the Repayment Date.');

            // reorder rule
            steps.endRulesRetention.reorderEndRule(2, 1);
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(1, 'If Balance Repaid at 45% (with notice) is after the Recouped Date, then the Actual End Date is the Repayment Date.');
            steps.endRulesRetention.checkSummaryTextForEndRulesRuleNumberI(2, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days.');

            //save end rules
            steps.endRulesRetention.saveEndRulesForm();
            
            steps.createDealRtp.hoverEndRules();
            steps.createDealRtp.validateSummaryEndRule(1, 'If Balance Repaid at 45% (with notice) is after the Recouped Date, then the Actual End Date is the Repayment Date.');
            steps.createDealRtp.validateSummaryEndRule(2, 'If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Retention Period Start offset by 21 days.');

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
];

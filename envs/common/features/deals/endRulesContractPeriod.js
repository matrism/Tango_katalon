'use strict';

exports.id = '1c701eea-f1d4-4af9-90b6-1b10d5c2569a';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'endRules', 'regression'];

exports.feature = [
    {
        name: "Create a deal with end rules on contract period, validate fields and tooltips delete conditions",
        tags: ["create_delete_condition_end_rules"],
        steps: function () {
            var today = new Date();
            var currentDate = today.getFullYear() + "-" + today.getMonth() + 1 + "-" + today.getDate();
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealContractPeriod.checkEndRulesTooltipTextValue();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            //check data tooltips value and text values
            steps.createDealContractPeriod.checkEndRulesTooltipTextValue();
            steps.createDealContractPeriod.checkRulesForEndDateTitleTextEndRules();
            steps.createDealContractPeriod.checkRulesForEndDateDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkSummaryOfRulesForEndDateTitleTextEndRules();
            steps.createDealContractPeriod.checkSummaryOfRulesForEndDateDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkRulesTitleTextEndRules();
            steps.createDealContractPeriod.checkRulesDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkEndDateDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkAccountingPeriodEndDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkVariableLeftDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkAttributeLeftDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkWithNoticeDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkRequirementDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkVariableRightDataTooltipTextEndRules();
            steps.createDealContractPeriod.checkAttributeRightDataTooltipTextEndRules();

            //check end date field
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.createDealContractPeriod.validateAccountingPeriodEndRulesIsDisplayed();

            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Pre-Defined Date");
            steps.createDealContractPeriod.validatePreDefinedDateFieldEndRulesIsRequiredWarning("Date is required.");
            steps.createDealContractPeriod.fillIntoPreDefinedDateFieldEndRulesSpecificDateRuleNumberI(1, "0000");
            steps.createDealContractPeriod.validatePreDefinedDateFieldEndRulesIsRequiredWarning("Invalid date.");

            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "MDRC Complete Date");
            steps.createDealContractPeriod.validateAccountingPeriodEndRulesIsDisplayed();
            steps.createDealContractPeriod.validateOffsetByInputFieldEndRulesIsDisplayed();
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.createDealContractPeriod.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Recouped Date");
            steps.createDealContractPeriod.validateAccountingPeriodEndRulesIsDisplayed();
            steps.createDealContractPeriod.validateOffsetByInputFieldEndRulesIsDisplayed();
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.createDealContractPeriod.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Target End Date");
            steps.createDealContractPeriod.validateAccountingPeriodEndRulesIsDisplayed();
            steps.createDealContractPeriod.validateOffsetByInputFieldEndRulesIsDisplayed();
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.createDealContractPeriod.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.checkAttributeLeftWarningMessageEndRules();
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.checkWithNoticeDataTooltipTextEndRules();
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.createDealContractPeriod.checkVariableRightWarningMessageEndRules();
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "123");
            steps.createDealContractPeriod.validatePreDefinedDateFieldAttributeRightEndRulesIsRequiredWarning("Invalid date.");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, currentDate);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Target End Date");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);


            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.checkAttributeLeftWarningMessageEndRules();
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.checkWithNoticeDataTooltipTextEndRules();
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.createDealContractPeriod.checkVariableRightWarningMessageEndRules();
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "098");
            steps.createDealContractPeriod.validatePreDefinedDateFieldAttributeRightEndRulesIsRequiredWarning("Invalid date.");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, currentDate);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Target End Date");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);

            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.checkWithNoticeDataTooltipTextEndRules();
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.createDealContractPeriod.checkVariableRightWarningMessageEndRules();
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "444");
            steps.createDealContractPeriod.validatePreDefinedDateFieldAttributeRightEndRulesIsRequiredWarning("Invalid date.");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, currentDate);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Target End Date");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);

            steps.createDealContractPeriod.checkTextRuleWhenOrAndEndRulesRuleNumberI(2, "AND");
            steps.createDealContractPeriod.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.createDealContractPeriod.checkTextRuleWhenOrAndEndRulesRuleNumberI(1, "WHEN");
            steps.createDealContractPeriod.checkTextRuleWhenOrAndEndRulesRuleNumberI(2, "AND");
            steps.createDealContractPeriod.checkTextRuleWhenOrAndEndRulesRuleNumberI(3, "AND");

            steps.createDealContractPeriod.checkDeleteIconIsPresentAndDataTooltipEndRulesConditionNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.deleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 1);
            steps.createDealContractPeriod.deleteEndRulesConditionNumberIRowNumberJ(1, 1);

            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");

            steps.createDealContractPeriod.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            //steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(1, 1, 15, 0);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Target End Date");
            steps.createDealContractPeriod.deleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 2);
            steps.createDealContractPeriod.cancelDeleteEndRules();
            steps.createDealContractPeriod.deleteEndRulesConditionNumberIRowNumberJ(1, 2);

            steps.createDealContractPeriod.saveEndRulesForm();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: "Create a deal with end rules on contract period and delete rules",
        tags: ["delete_rule"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealContractPeriod.checkEndRulesTooltipTextValue();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();


            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Target End Date");
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.createDealContractPeriod.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");

            steps.createDealContractPeriod.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            //steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(1, 1, 15, 0);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Target End Date");

            steps.createDealContractPeriod.saveEndRulesForm();

            steps.editDealContractPeriod.editEndRulesForm();
            steps.editDealContractPeriod.editDeleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 2);
            steps.editDealContractPeriod.editCancelDeleteEndRules();
            steps.editDealContractPeriod.editDeleteEndRulesConditionNumberIRowNumberJ(1, 2);
            steps.editDealContractPeriod.editSaveEndRulesForm();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: "Create a deal with end rules on contract period and check the dirty check",
        tags: ["dirty_check_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            steps.createDealContractPeriod.clickOnCancelEndRulesButton();

            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Target End Date");
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.createDealContractPeriod.selectRandomOptionFromOffsetByChoiceEndRules();
            steps.createDealContractPeriod.clickOnCancelEndRulesButton();
            steps.createDealContractPeriod.clickOnContinueEditingEndRulesModalButton();
            steps.createDealContractPeriod.clickOnCancelEndRulesButton();
            steps.createDealContractPeriod.clickOnConfirmCancellationEndRulesModalButton();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: "Create a deal with end rules on contract period and check the summary for end rules",
        tags: ["summary_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            //check default summary, if
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If [Variable Left] ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberIContainsText(1, "If");
            //check variable left
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If MDRC Complete ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            //check attribute left and % attribute left
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Final Contract Period");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Final Contract Period, then the Actual End Date is [End Date Type] ....");
            //cancel end rules and add again end rules
            steps.createDealContractPeriod.clickOnCancelEndRulesButton();
            steps.createDealContractPeriod.clickOnConfirmCancellationEndRulesModalButton();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            //check attribute left and % attribute left
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "65.43");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 65.43% [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectAttributeLeftEndRulesSpecificOptionPercentOrAmountRuleNumberIRowNumberJ(1, 1, "Amount");
            steps.createDealContractPeriod.fillIntoAttributeLeftAmountEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 32);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            //check with notice
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 (with notice) [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            //check requirement
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 is before [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 is on [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 is after [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 is before or on [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Recouped at 32 is on or after [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            //cancel end rules and add again end rules
            steps.createDealContractPeriod.clickOnCancelEndRulesButton();
            steps.createDealContractPeriod.clickOnConfirmCancellationEndRulesModalButton();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            //check variable right
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 2% is on or after the MDRC Complete Date, then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 2% is on or after the Recouped Date, then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Target End Date");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 2% is on or after the Target End Date, then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2014-12-08");
            steps.createDealContractPeriod.clickOnEndRulesArea();
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 2% is on or after 2014-12-08, then the Actual End Date is [End Date Type] ....");
            //check final contract period variable right
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "TRUE");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Final Contract Period, then the Actual End Date is [End Date Type] ....");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "FALSE");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If NOT Final Contract Period, then the Actual End Date is [End Date Type] ....");
            //cancel end rules and add again end rules
            steps.createDealContractPeriod.clickOnCancelEndRulesButton();
            steps.createDealContractPeriod.clickOnConfirmCancellationEndRulesModalButton();
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            //check end date type
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "32");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the Repayment Date.");
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Pre-Defined Date");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is ....");
            steps.createDealContractPeriod.fillIntoEndDateTypePreDefinedDateInputFieldEndRules("2014-12-18");
            steps.createDealContractPeriod.clickOnEndRulesArea();
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is 2014-12-18.");
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "MDRC Complete Date");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date ....");
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesSpecificValue(21);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.selectSpecificOptionFromOffsetByChoiceEndRules("Weeks");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 weeks.");
            steps.createDealContractPeriod.selectSpecificOptionFromOffsetByChoiceEndRules("Months");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 months.");
            steps.createDealContractPeriod.selectSpecificOptionFromOffsetByChoiceEndRules("Years");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 years.");
            steps.createDealContractPeriod.selectSpecificOptionFromOffsetByChoiceEndRules("Days");
            //check accounting period end
            steps.createDealContractPeriod.clickAccountingPeriodEndDateCheckBoxEndRules();
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 days, at accounting period end.");
            steps.createDealContractPeriod.clickAccountingPeriodEndDateCheckBoxEndRules();
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            //check add new condition
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, "Recouped");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, and Recouped ... [Requirement] [Variable Right] ..., then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, "30");
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1, 2);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 2, 2);
            //steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(1, 2, 12, 2);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, "Target End Date");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, and Recouped at 30% (with notice) is after the Target End Date, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 3, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 3, "FALSE");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, and Recouped at 30% (with notice) is after the Target End Date, and NOT Final Contract Period, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.clickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If [Variable Left] ... [Requirement] [Variable Right] ..., and Balance Repaid at 32% is before the MDRC Complete Date, and Recouped at 30% (with notice) is after the Target End Date, and NOT Final Contract Period, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "30");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            //steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(1, 1, 22, 1);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.createDealContractPeriod.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2014-12-08");
            steps.createDealContractPeriod.clickOnEndRulesArea();
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 30% is on 2014-12-08, and Balance Repaid at 32% is before the MDRC Complete Date, and Recouped at 30% (with notice) is after the Target End Date, and NOT Final Contract Period, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.deleteEndRulesConditionNumberIRowNumberJ(1, 1);
            steps.createDealContractPeriod.deleteEndRulesConditionNumberIRowNumberJ(1, 2);
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, and NOT Final Contract Period, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            //add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(2, "Repayment Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "MDRC Complete");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "45");
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(2, 1);
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 2);
            //steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(2, 1, 19, 2);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Recouped");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, and NOT Final Contract Period, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.createDealContractPeriod.checkSummaryTextForEndRulesRuleNumberI(2, "If MDRC Complete at 45% (with notice) is after the Recouped Date, then the Actual End Date is the Repayment Date.");
            //save end rules
            steps.createDealContractPeriod.saveEndRulesForm();
            //check summary view
            steps.editDealContractPeriod.editCheckSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, and NOT Final Contract Period, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.editDealContractPeriod.editCheckSummaryTextForEndRulesRuleNumberI(2, "If MDRC Complete at 45% (with notice) is after the Recouped Date, then the Actual End Date is the Repayment Date.");
            //check edit summary
            steps.editDealContractPeriod.editEndRulesForm();
            steps.editDealContractPeriod.editDeleteEndRulesConditionNumberIRowNumberJ(1, 2);
            steps.editDealContractPeriod.editSaveEndRulesForm();
            steps.editDealContractPeriod.editCheckSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 days.");
            steps.editDealContractPeriod.editCheckSummaryTextForEndRulesRuleNumberI(2, "If MDRC Complete at 45% (with notice) is after the Recouped Date, then the Actual End Date is the Repayment Date.");
            steps.editDealContractPeriod.editEndRulesForm();
            //delete rule
            steps.editDealContractPeriod.editDeleteTheRuleEndRulesNumberI(2);
            steps.editDealContractPeriod.editSaveEndRulesForm();
            steps.editDealContractPeriod.editCheckSummaryTextForEndRulesRuleNumberI(1, "If Balance Repaid at 32% is before the MDRC Complete Date, then the Actual End Date is the MDRC Complete Date offset by 21 days.");

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },

    {
        name: "Create a deal with end rules on contract period and test delete scenarios",
        tags: ["delete_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            //add end rules
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            // add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(2, "Target End Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "TRUE");
            // add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(3, "Recouped Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "FALSE");
            //delete end rule
            steps.createDealContractPeriod.clickOnDeleteEndRulesButton();
            steps.createDealContractPeriod.cancelDeleteEntireEndRules();
            steps.createDealContractPeriod.clickOnDeleteEndRulesButton();
            steps.createDealContractPeriod.confirmDeleteEntireEndRules();

            //add end rules
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            // add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(2, "Target End Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "TRUE");
            // add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(3, "Recouped Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "FALSE");
            //save end rules
            steps.createDealContractPeriod.saveEndRulesForm();
            //edit end rules and delete end rules
            steps.editDealContractPeriod.editEndRulesForm();
            //delete end rule
            steps.editDealContractPeriod.editClickOnDeleteEndRulesButton();
            steps.editDealContractPeriod.editConfirmDeleteEntireEndRules();

            //add end rules
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            // add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(2, "Target End Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "TRUE");
            // add new rule
            steps.createDealContractPeriod.clickOnAddRuleInTheBottomOfEndRulesForm();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(3, "Recouped Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Final Contract Period");
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "FALSE");
            //save end rules
            steps.createDealContractPeriod.saveEndRulesForm();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //edit end rules and delete end rules
            //steps.editDealContractPeriod.editEndRulesForm();
            //delete end rule
            //steps.editDealContractPeriod.editClickOnDeleteEndRulesButton();
            //steps.editDealContractPeriod.editConfirmDeleteEntireEndRules();



        }
    },

    {
        name: "Create a deal with end rules on contract period and test delete scenarios",
        tags: ["view_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //add end rules
            steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            //steps.createDealContractPeriod.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(1, 1, 6, 4);
            steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "MDRC Complete");
            steps.createDealContractPeriod.saveEndRulesForm();

        }
    }

];

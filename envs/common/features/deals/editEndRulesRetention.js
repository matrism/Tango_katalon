'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'editEndRules', 'regression'];

exports.feature = [
    {
        name: "Create a deal without end rules and add end rules on retention on edit mode",
        tags: ["edit_add_end_rule"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.editDealRtp.editDoneEndRules();

            steps.editDealRtp.saveRetentionFromAcquisition();
        }
    },

    {
        name: "Create a deal with end rules on retention and add other end rules on retention on edit mode",
        tags: ["edit_update_end_rule"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();

            //add end rules on retention
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.createDealRtp.addEndRules();
            steps.endRulesRetention.selectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.endRulesRetention.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.endRulesRetention.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.endRulesRetention.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.endRulesRetention.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.endRulesRetention.doneEndRules();

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Recouped Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Current Date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Retention Period Minimum");
            steps.editDealRtp.editDoneEndRules();

            steps.editDealRtp.saveRetentionFromAcquisition();

        }
    },


    {
        name: "Create a deal with end rules on contract period and delete rules",
        tags: ["edit_delete_rule"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Retention Period Start");
            steps.editDealRtp.editFillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.editDealRtp.editSelectRandomOptionFromOffsetByChoiceEndRules();

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "55.54");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");

            steps.editDealRtp.editClickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Current date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Retention Period Minimum");
            steps.editDealRtp.editDoneEndRules();
            steps.editDealRtp.saveRetentionFromAcquisition();

            steps.editDealRtp.scrollIntoViewAddEndRuleToRetention();
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();
            steps.editDealRtp.editDeleteEndRulesConditionNumberIRowNumberJWithoutModal(1, 2);
            steps.editDealRtp.editCancelDeleteEndRules();
            steps.editDealRtp.editDeleteEndRulesConditionNumberIRowNumberJ(1, 2);

            steps.editDealRtp.editDoneEndRules();
            steps.editDealRtp.saveRetentionFromAcquisition();

            steps.editDealRtp.scrollIntoViewAddEndRuleToRetention();
            steps.editDealRtp.checkEndRuleRetentionTooltipSummary("If Current date is before the Retention Period Minimum, then the Actual End Date is the Retention Period Start offset by");
        }
    },


    {
        name: "Create a deal with end rules on contract period and check the dirty check",
        tags: ["dirty_check_end_rules_retention"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");

            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();
            steps.editDealRtp.editClickOnCancelEndRulesLinkOnRetentionWithoutModal();

            steps.editDealRtp.scrollIntoViewAddEndRuleToRetentionEditMode();
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();
            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Recouped Date");
            steps.editDealRtp.editFillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.editDealRtp.editSelectRandomOptionFromOffsetByChoiceEndRules();
            steps.editDealRtp.editClickOnCancelEndRulesLinkOnRetention();
            steps.editDealRtp.editClickOnContinueEditingEndRulesModalButton();

            steps.editDealRtp.editClickOnCancelEndRulesLinkOnRetention();
            steps.editDealRtp.editClickOnConfirmCancellationEndRulesModalButton();
            steps.editDealRtp.saveRetentionFromAcquisition();

        }
    },

    {
        name: "Create a deal without end rules and add end rules on retention on edit mode",
        tags: ["edit_add_different_type_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();


            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Retention Period Start");
            steps.editDealRtp.editFillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.editDealRtp.editSelectRandomOptionFromOffsetByChoiceEndRules();

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");

            steps.editDealRtp.editClickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Current date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Retention Period Minimum");

            steps.editDealRtp.editClickOnAddNewRuleEndRulesAddedRuleNumberI(1);
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.createDealContractPeriod.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, 12);
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.editDealRtp.editFillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2016-03-12");

            steps.editDealRtp.editAddEndRuleOnTheForm();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(2, "Repayment Date");

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "2");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Pre-Defined Date");
            steps.editDealRtp.editFillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "2016-02-16");

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 2, "Current date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 2, 0);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 2, "Recouped");

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 3, "Recouped");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 3, "12");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 3, 2);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 3, "Retention Period Minimum");

            steps.editDealRtp.editAddEndRuleOnTheForm();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(3, "Recouped Date");

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "28");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(3, 1, 3);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Retention Period Minimum");

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 2, "Current date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(3, 2, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 2, "Pre-Defined Date");
            steps.editDealRtp.editFillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(3, 2, "2016-01-20");

            steps.editDealRtp.editDoneEndRules();

            steps.editDealRtp.saveRetentionFromAcquisition();
        }
    },

    {
        name: "Create a deal with end rules on contract period and test delete scenarios",
        tags: ["edit_delete__entire_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();


            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Retention Period Start");
            steps.editDealRtp.editFillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.editDealRtp.editSelectRandomOptionFromOffsetByChoiceEndRules();

            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Current date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Retention Period Minimum");

            steps.editDealRtp.editAddEndRuleOnTheForm();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(2, "Repayment Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Recouped");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "12");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 2);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Retention Period Minimum");

            steps.editDealRtp.editAddEndRuleOnTheForm();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(3, "Recouped Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "28");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(3, 1, 3);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Retention Period Minimum");

            //delete end rules from delete rule icons
            steps.editDealRtp.editDeleteRuleNumberIFromEndRulesRetention(1);
            steps.editDealRtp.editCancelDeleteRuleNumberIFromEndRulesRetention();
            //delete rule 1
            steps.editDealRtp.editDeleteRuleNumberIFromEndRulesRetention(1);
            steps.editDealRtp.editConfirmDeleteRuleNumberIFromEndRulesRetention();
            //delete rule 1
            steps.editDealRtp.editDeleteRuleNumberIFromEndRulesRetention(1);
            steps.editDealRtp.editConfirmDeleteRuleNumberIFromEndRulesRetention();
            //delete rule 1
            steps.editDealRtp.editDeleteRuleNumberIFromEndRulesRetention(1);
            steps.editDealRtp.editConfirmDeleteRuleNumberIFromEndRulesRetention();

            //add end rules from retention after deletion
            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Retention Period Start");
            steps.editDealRtp.editFillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.editDealRtp.editSelectRandomOptionFromOffsetByChoiceEndRules();
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");

            steps.editDealRtp.editAddEndRuleOnTheForm();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(2, "Repayment Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Recouped");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "12");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 2);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Retention Period Minimum");

            steps.editDealRtp.editAddEndRuleOnTheForm();

            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(3, "Recouped Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Current date");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(3, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "Pre-Defined Date");
            steps.editDealRtp.editFillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(3, 1, "2016-01-20");

            //delete end rule from delete end rule button
            //steps.editDealRtp.editClickOnDeleteEndRulesButtonForRetention();
            //steps.editDealRtp.editCancelDeleteEntireEndRulesForRetention();
            //steps.editDealRtp.editClickOnDeleteEndRulesButtonForRetention();
            //steps.editDealRtp.editConfirmDeleteEntireEndRulesForRetention();

            steps.editDealRtp.editDoneEndRules();

            steps.editDealRtp.saveRetentionFromAcquisition();
        }
    },


    {
        name: "Create a deal with end rules on contract period and check the summary for end rules",
        tags: ["edit_summary_end_rules"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();

            //check default summary, if
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If [Variable Left] ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIContainsText(1, "If");

            //check variable left
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Current date");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Current date[Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped ... [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");

            //cancel end rules and add again end rules
            steps.editDealRtp.editClickOnCancelEndRulesLinkOnRetention();
            steps.editDealRtp.editClickOnConfirmCancellationEndRulesModalButton();
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();


            //check attribute left and % attribute left
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "65.43");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");

            //check with notice
            steps.editDealRtp.editClickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJRetention(1, 1);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% (with notice) [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editClickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJRetention(1, 1);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% [Requirement] [Variable Right] ..., then the Actual End Date is [End Date Type] ....");

            //check requirement
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% is before [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 1);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% is on [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 2);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% is after [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 3);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% is before or on [Variable Right] ..., then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 65.43% is on or after [Variable Right] ..., then the Actual End Date is [End Date Type] ....");

            //cancel end rules and add again end rules
            steps.editDealRtp.editClickOnCancelEndRulesLinkOnRetention();
            steps.editDealRtp.editClickOnConfirmCancellationEndRulesModalButton();
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();

            //check variable right
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 4);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 2% is on or after the Recouped Date, then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Retention Period Minimum");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 2% is on or after the Retention Period Minimum, then the Actual End Date is [End Date Type] ....");
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Pre-Defined Date");
            steps.editDealRtp.editFillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "2014-12-08");
            steps.editDealRtp.editClickOnEndRulesAreaRetention();
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 2% is on or after 2014-12-08, then the Actual End Date is [End Date Type] ....");

            //cancel end rules and add again end rules
            steps.editDealRtp.editClickOnCancelEndRulesLinkOnRetention();
            steps.editDealRtp.editClickOnConfirmCancellationEndRulesModalButton();
            steps.editDealRtp.editClickOnAddEndRulesLinkOnRetention();

            //check end date type
            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Repayment Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Balance Repaid");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "32");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 1, 0);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 1, "Recouped");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Repayment Date.");
            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Pre-Defined Date");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is ....");
            steps.editDealRtp.editFillIntoEndDateTypePreDefinedDateInputFieldEndRules("2014-12-18");
            steps.editDealRtp.editClickOnEndRulesAreaRetention();
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is 2014-12-18.");
            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(1, "Recouped Date");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date ....");
            steps.editDealRtp.editFillIntoOffsetByInputFieldEndRulesSpecificValue(21);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date offset by 21 days.");
            steps.editDealRtp.editSelectSpecificOptionFromOffsetByChoiceEndRules("Weeks");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date offset by 21 weeks.");
            steps.editDealRtp.editSelectSpecificOptionFromOffsetByChoiceEndRules("Months");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date offset by 21 months.");
            steps.editDealRtp.editSelectSpecificOptionFromOffsetByChoiceEndRules("Years");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date offset by 21 years.");
            steps.editDealRtp.editSelectSpecificOptionFromOffsetByChoiceEndRules("Days");

            //check accounting period end
            steps.editDealRtp.editClickAccountingPeriodEndDateCheckBoxEndRules();
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date offset by 21 days, at accounting period end.");
            steps.editDealRtp.editClickAccountingPeriodEndDateCheckBoxEndRules();
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, then the Actual End Date is the Recouped Date offset by 21 days.");

            //check add new condition
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, "Recouped");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, and Recouped ... [Requirement] [Variable Right] ..., then the Actual End Date is the Recouped Date offset by 21 days.");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, "30");
            steps.editDealRtp.editClickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJRetention(1, 2);
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(1, 2, 2);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(1, 2, "Retention Period Minimum");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Recouped Date offset by 21 days.");

            //add new rule
            steps.editDealRtp.editAddEndRuleOnTheForm();
            steps.editDealRtp.editSelectEndDateEndRulesSpecificValueRuleNumberI(2, "Repayment Date");
            steps.editDealRtp.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Recouped");
            steps.editDealRtp.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "12");
            steps.editDealRtp.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(2, 1, 2);
            steps.editDealRtp.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(2, 1, "Retention Period Minimum");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Recouped Date offset by 21 days.");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(2, "If Recouped at 12% is after the Retention Period Minimum, then the Actual End Date is the Repayment Date.");


            // reorder rule
            steps.endRulesRetention.reorderEndRule(2, 1);
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(1, "If Recouped at 12% is after the Retention Period Minimum, then the Actual End Date is the Repayment Date.");
            steps.editDealRtp.editCheckSummaryTextForEndRulesRuleNumberIRetention(2, "If Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Recouped Date offset by 21 days.");

            //save the end rules
            steps.editDealRtp.editDoneEndRules();
            steps.editDealRtp.saveRetentionFromAcquisition();

            steps.createDealRtp.hoverEndRules();
            steps.createDealRtp.validateSummaryEndRule(1, 'If Recouped at 12% is after the Retention Period Minimum, then the Actual End Date is the Repayment Date.');
            steps.createDealRtp.validateSummaryEndRule(2, 'If Balance Repaid at 32% is before the Recouped Date, and Recouped at 30% (with notice) is after the Retention Period Minimum, then the Actual End Date is the Recouped Date offset by 21 days.');

        }
    }


];
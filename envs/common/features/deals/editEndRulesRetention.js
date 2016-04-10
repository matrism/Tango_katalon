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

            steps.editDealRtp.editDoneEndRules();

            steps.editDealRtp.saveRetentionFromAcquisition();
        }
    }
    ];
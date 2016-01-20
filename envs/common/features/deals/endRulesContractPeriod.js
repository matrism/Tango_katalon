'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'endRules', 'regression'];

exports.feature = [
    {
        name: "Create a deal with end rules on contract period",
        tags: ["endRules"],
        steps: function () {
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

            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1,"MDRC Complete Date");
            steps.createDealContractPeriod.validateAccountingPeriodEndRulesIsDisplayed();
            steps.createDealContractPeriod.validateOffsetByInputFieldEndRulesIsDisplayed();
            steps.createDealContractPeriod.fillIntoOffsetByInputFieldEndRulesRuleNumberI(1);
            steps.createDealContractPeriod.selectRandomOptionFromOffsetByChoiceEndRules();

            steps.createDealContractPeriod.selectEndDateEndRulesSpecificValueRuleNumberI(1,"Recouped Date");
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
            steps.createDealContractPeriod.fillIntoAttributeLeftEndRulesRuleNumberIRowNumberJ(1,1);
            steps.createDealContractPeriod.checkWithNoticeDataTooltipTextEndRules();
            steps.createDealContractPeriod.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(1,1);



            //steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();
        }
    }
];

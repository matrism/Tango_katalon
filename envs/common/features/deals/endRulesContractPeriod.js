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

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }
];

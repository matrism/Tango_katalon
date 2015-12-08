'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', "related", 'regression'];

exports.feature = [
    {
        name: "Create related deals",
        tags: ["related_deals"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.checkRelatedDealsTitle();
            steps.relatedDeal.checkRelatedDealsTooltipTitle();
            steps.relatedDeal.checkTheHeaderTableTitlesRelatedDeals();
        }
    },

    {
        name: "Create related deals",
        tags: ["relatedDeals"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.checkNoRelatedDealsDefined();
            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("a");
            steps.relatedDeal.checkContractingPartyDropDownIsPopulated();
            steps.relatedDeal.clearIntoContractingPartiesField();
            steps.relatedDeal.selectRandomContractingPartyRelatedDeals();
        }
    }
];

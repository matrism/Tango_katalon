'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'psss', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["pss2"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            //steps.createDealScope.itAddSimpleScope();
            //steps.createDealScope.itAddPublisherShare();
            //steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            //steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //steps.deal.findId();
            var dealId = steps.deal.findCurrentlyOpenDealId();
            console.log("Deal id is " + dealId);
            steps.searchSection.accessSavedDealByNumber(dealId);
            //browser.sleep(10000);
        }
    }
];

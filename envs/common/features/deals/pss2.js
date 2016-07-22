'use strict';

exports.id = '71120b9c-c222-48b4-ac25-ab9112fa2e94';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'psss', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["create"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            //steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            //steps.createDealScope.itAddSimpleScope();
            //steps.createDealScope.itAddPublisherShare();
            //steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            //steps.createDealScope.saveThePublisherShareSet();
            //steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();
        }
    }
];

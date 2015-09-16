exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'pss', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["create"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.create_deal_scope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }
];

'use strict';

exports.id = '149c3c0f-0a00-40e3-9566-e2d2852bcb1b';
exports.featureName = 'Create Simple Deal';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'simpleDealCreationSmoke',
    'deals',
    'smoke'
];

exports.feature = [
    {
        name: "Create a deal with publisher share set",

        tags: [],

        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }
];

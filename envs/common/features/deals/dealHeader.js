'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'header', 'regression'];

exports.feature = [
    {
        name: "Create a deal and check the deal header",
        tags: ["dealHeader"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.editDealScope.editSaveAllChanges();


        }
    }
];

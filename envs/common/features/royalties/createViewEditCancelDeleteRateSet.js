'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['royaltyRates', 'rr', 'regression'];

exports.feature = [
    {
        name: "Create a deal with RR edit, cancel and delete it",
        tags: ["rateSet"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();

            //add new RR simple flow
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRData();
            steps.royaltyRates.saveRateSet();

            //verify RR saved ok
            steps.royaltyRates.verifyRateSetSavedData();

            //edit RR and cancel it
            steps.editRoyaltyRates.editExistingRoyaltyRate();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.editRoyaltyRates.cancelTheRateSet();
            steps.royaltyRates.saveRateSet();
            //verify RR saved ok
            steps.royaltyRates.verifyRateSetSavedData();

            //edit RR and delete it
            steps.editRoyaltyRates.editExistingRoyaltyRate();
            steps.editRoyaltyRates.openRateSetPanel();
            //steps.editRoyaltyRates.deleteTheRateSet();

            ////add new RR simple flow
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("10");
            //steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRData();
            //steps.royaltyRates.saveRateSet();
            ////verify RR saved ok
            //steps.royaltyRates.verifyRateSetSavedData();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();



        }
    }
];

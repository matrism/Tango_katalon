'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['royaltyRates', 'rateSet', 'regression'];

exports.feature = [
    {
        name: "Create a deal with RR edit, cancel and delete it in create mode",
        tags: ["createRateSet"],
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
            steps.editRoyaltyRates.deleteTheRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

        }
    },

    {
        name: "Create a deal with RR save it and edit cancel and delete RR in edit mode",
        tags: ["editRateSet"],
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

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);

            // verify RR saved ok
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
            steps.editRoyaltyRates.deleteTheRateSet();
        }
    },

    {
        name: "Create a deal with RR and check dirty check functionality",
        tags: ["dirtyCheckRateSet"],
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

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);

            // verify RR saved ok
            steps.royaltyRates.verifyRateSetSavedData();

            //edit RR and cancel it
            steps.editRoyaltyRates.editExistingRoyaltyRate();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.editRoyaltyRates.setEffectiveStartDate("2016-02-14");
            //navigate to another tab
            steps.deal.goToGeneralDealTabDetailsDirtyCheck();
            steps.editRoyaltyRates.cancelToTheModalDialog();
            //click on cancel button
            steps.editRoyaltyRates.clickOnCancelButtonRateSet();
            steps.editRoyaltyRates.cancelToTheModalDialog();
            //click on delete button
            steps.editRoyaltyRates.clickOnDeleteButtonToRateSet();
            steps.editRoyaltyRates.cancelToTheModalDialog();

            //save the rate set in edit mode
            steps.editRoyaltyRates.saveRateSet();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    }
];

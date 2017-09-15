'use strict';

exports.id = '744c4de3-1bb9-4c5a-b4f1-897311aacfbc';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'signingTerritory', 'regression'];

exports.feature = [
    {
        name: "Check deal signing territory is locked when one or more payees are associated to the deal",
        tags: ["dealSigningTerritoryPayees"],
        steps: criticalScenario(() =>
        {
            //steps.preDataCheck.accessSavedPersonByName('person 1 TAT payee');   future build
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            //add new royalty rate set
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addEffectiveStartDate("2015-06-07");
            steps.royaltyRates.addIncomeProviderByPartialMatch("synch");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToPayeesDealTabDetails();
            steps.base.sleep(5000);
            steps.editDealPayee.editClickOneByPayeeHeaderLink();

            steps.editDealPayee.editSelectSpecificNewPayeePersonFromDropDown('person 1 TAT payee');
            //steps.editDealPayee.editClickOnAddAllScopesToPayee();
            steps.editDealPayee.editAddPayoutToPayee();
            steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
            steps.editDealPayee.editFillIntoPayeeDistributionInputField();
            steps.editDealPayee.editSavePayeeToPayeeForm();
            steps.editDealPayee.editSavePayeePage();

            //go to general tab
            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editCheckDealSigningTerritoryFieldGeneralTabIsDisabled();
            //steps.editDealGeneral.editCheckDealSigningTerritoryCannotBeChangedTooltip();
            steps.editDealGeneral.cancelEditGeneralTabFirstElementsLeftArea();

            //go to payees tab and delete the payee
            steps.deal.goToPayeesDealTabDetails();


            //delete payee from deal
            steps.editDealPayee.editClickOneByPayeeHeaderLink();
            steps.editDealPayee.editDeletePayeeFromDealByPayeeScreen();
            steps.editDealPayee.editConfirmDeletePayeeModal();
            steps.editDealPayee.editSavePayeePage();

            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            //check signing territory is not disabled and change it
            steps.editDealGeneral.editCheckDealSigningTerritoryFieldGeneralTabIsNotDisabled();

        })
    },


    {
        name: "Check deal signing territory can be changed if no payee associate",
        tags: ["dealSigningTerritoryWithoutPayees"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Italy");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.sleep(5000);
            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            //check signing territory is not disabled and change it
            steps.editDealGeneral.editCheckDealSigningTerritoryFieldGeneralTabIsNotDisabled();




        }
    }
];

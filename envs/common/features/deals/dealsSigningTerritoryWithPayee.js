'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'signingTerritory', 'regression'];

exports.feature = [
    {
        name: "Check deal signing territory is locked when one or more payees are associated to the deal",
        tags: ["dealSigningTerritoryPayees"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithData("ascap", "Germany");
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
            steps.editDealPayee.editClickOneByPayeeHeaderLink();

            steps.editDealPayee.editSelectSpecificNewPayeePersonFromDropDown('person ' + 1 + ', TAT payee');
            steps.editDealPayee.editClickOnAddAllScopesToPayee();
            steps.editDealPayee.editAddPayoutToPayee();
            steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
            steps.editDealPayee.editFillIntoPayeeDistributionInputField();
            steps.editDealPayee.editSavePayeeToPayeeForm();

            //go to general tab
            steps.deal.goToGeneralDealTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();

        }
    }
];

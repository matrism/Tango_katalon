'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'psss', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["create"],
        steps: function () {
            //steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            //steps.deal.itContinueToNextPage();
            //steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            //steps.createDealScope.itAddSimpleScope();
            //steps.createDealScope.itAddPublisherShare();
            //steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            //steps.createDealScope.saveThePublisherShareSet();
            //steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();


            steps.searchSection.accessSavedDealByNumber("3");
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.editDealScope.itEditAddPublisherShareWithSocietyAwardCredit();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addEffectiveStartDate("2015-09-08");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            steps.editDealScope.editSaveTheChangesDealScope();

            steps.editDealPayee.clickOnPayeesHeader();
            steps.editDealPayee.editPayeeArea();
            steps.editDealPayee.itEditAddPayeePersonAndAssociateScope("paul", 27);
            steps.editDealPayee.editSavePayeePage();
        }
    }
];

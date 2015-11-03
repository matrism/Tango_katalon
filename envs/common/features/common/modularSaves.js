'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
    steps.deal.itContinueToNextPage();
    steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
};

exports.commonFeatureTags = ['common', 'sanity', 'broken'];

exports.feature = [
    {
        name: "Royalty Rate Set can be saved from other deal modules",
        tags: ["edit"],
        steps: function () {
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            //steps.deal.clickFirstScopeHeader();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();

            //steps.royaltyRates.saveRateSet();
            steps.royaltyRates.addNewRoyaltySetEdit();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2023-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();

            // // steps.royaltyRates.saveRateSet();
            steps.deal.clickLastScopeHeader();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.addEffectiveStartDate("2043-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();
            //  steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewRoyaltySetEdit();
            steps.royaltyRates.addRatePercentageToContractualField("12");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2034-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();
            // steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewPublisherShares();
            steps.royaltyRates.addOriginalPublisherToPublisherShares("ASCAP");

            steps.royaltyRates.addAdministratorToPublisherShares("ASCAP");
            steps.royaltyRates.savePublisherShares();

            //steps.deal.clickFirstScopeHeader();
            //steps.royaltyRates.verifyRateSetSavedData();
            steps.royaltyRates.waitForAjaxCall();
            steps.deal.goToIncomeRatesPage();
            //steps.royaltyRates.test();
            steps.RRSummaryTable.validateIncomeRatesTable();
        }
    },
    {
        name: "Saving RR Set Saves whole Deal",
        tags: ["edit"],
        steps: function () {
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            //steps.deal.clickFirstScopeHeader();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();

            //   steps.royaltyRates.saveRateSet();
            steps.royaltyRates.addNewRoyaltySetEdit();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2023-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();
            // steps.royaltyRates.saveRateSet();

            steps.deal.clickLastScopeHeader();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.addEffectiveStartDate("2043-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();

            //  steps.royaltyRates.saveRateSet();
            steps.royaltyRates.addNewPublisherShares();
            steps.royaltyRates.addOriginalPublisherToPublisherShares("ASCAP");
            steps.royaltyRates.addAdministratorToPublisherShares("ASCAP");

            steps.royaltyRates.addNewRoyaltySetEdit();
            steps.royaltyRates.addRatePercentageToContractualField("12");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2034-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObjectonEditPage();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewPublisherShares();
            steps.royaltyRates.addOriginalPublisherToPublisherShares("ASCAP");
            steps.royaltyRates.addAdministratorToPublisherShares("ASCAP");
            steps.royaltyRates.savePublisherShares();

            //steps.deal.clickFirstScopeHeader();
            // steps.royaltyRates.verifyRateSetSavedData();
            steps.royaltyRates.waitForAjaxCall();
            steps.royaltyRates.refreshPage();
            steps.royaltyRates.waitForAjaxCall();
            steps.deal.clickLastScopeHeader();
            //steps.royaltyRates.test();
            //steps.RRSummaryTable.validateIncomeRatesTable();
            steps.royaltyRates.verifyPublisherShare();
        }
    }
];

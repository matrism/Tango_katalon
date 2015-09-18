exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['royalties', 'royaltySummary', 'broken'];

exports.feature = [
    {
        name: "View Royalty Rates summary table",
        tags: ['view'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addAdminFeeToContractualField("12");
            steps.royaltyRates.addNPSToContractualField("2");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.storeRRObject();
            steps.royaltyRates.saveRateSet();
            //steps.royaltyRates.test();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("18");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2023-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.closeAllRRButTheLast();
            steps.royaltyRates.storeRRObject();
            steps.royaltyRates.saveRateSet();

            //steps.createDealScope.itAddSimpleScope();
            //
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("10");
            //steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            //steps.royaltyRates.addEffectiveStartDate("2043-06-17");
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRObject();
            //steps.royaltyRates.saveRateSet();
            //
            //
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("12");
            //steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            //steps.royaltyRates.addEffectiveStartDate("2034-06-17");
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRObject();
            //steps.royaltyRates.saveRateSet();
            //
            //
            //steps.createDealScope.itAddNewContractPeriod();
            //
            //steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriodEndDate();
            //
            //
            //steps.createDealScope.itAddSimpleScope();
            //
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("12");
            //steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRObject();
            //steps.royaltyRates.saveRateSet();
            //
            //
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("34");
            //steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            //steps.royaltyRates.addEffectiveStartDate("2056-06-17");
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRObject();
            //steps.royaltyRates.saveRateSet();
            //
            //steps.createDealScope.itAddSimpleScope();
            //
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("18");
            //steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            //steps.royaltyRates.addEffectiveStartDate("2078-06-17");
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRObject();
            //steps.royaltyRates.saveRateSet();
            //
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addRatePercentageToContractualField("21");
            //steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            //steps.royaltyRates.addEffectiveStartDate("2096-06-17");
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.royaltyRates.storeRRObject();
            //steps.royaltyRates.saveRateSet();
            //
            //  steps.deal.itContinueToNextPage();
            //  steps.deal.saveDeal();
            //
            //  steps.deal.goToIncomeRatesPage();
            //
            //  steps.RRSummaryTable.expandRR();
            //  steps.RRSummaryTable.expandInnerRR();
            //
            //
            //steps.RRSummaryTable.validateIncomeRatesTable();
            steps.royaltyRates.pauseTest();
        }
    },
    {
        name: "View filtered Royalty Rates summary table",
        tags: ["'view'"],
        steps: function () {
            //steps.searchSection.accessSavedDealByNumber("209550");
            steps.searchSection.accessSavedDealByNumber("206988");
            steps.deal.goToIncomeRatesPage();
            steps.RRSummaryTable.expandRR();
            steps.RRSummaryTable.expandInnerRR();
            steps.RRSummaryTable.saveDisplayedIncomeRates();
            steps.RRSummaryTable.validateContractPeriodFilter();
        }
    },
    {
        name: "View update Royalty Rates Summarry",
        tags: ["view"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addAdminFeeToContractualField("12");
            steps.royaltyRates.addNPSToContractualField("2");

            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickAtSourceApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.addRatePercentageToContractualField("15");
            steps.royaltyRates.openAllRRFields();

            steps.royaltyRates.changeCoverMechanicalLastRateApplicationMethodToOnReceipt();
            steps.royaltyRates.checkPrevailingPopupIsPresent();
            steps.royaltyRates.selectOnReceiptMethodInPrevailingPopup();
            //steps.royaltyRates.pauseTest();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();

            steps.deal.goToIncomeRatesPage();

            steps.RRSummaryTable.expandRR();
            steps.RRSummaryTable.expandInnerRR();

            steps.deal.goToTermsDealTabDetails();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.storeRRObjectonEditPage();
            steps.royaltyRates.saveRateSet();
            steps.royaltyRates.waitForRateSetToBeSaved();

            steps.deal.goToIncomeRatesPage();
            steps.RRSummaryTable.expandRR();
            steps.RRSummaryTable.expandInnerRR();
            steps.RRSummaryTable.saveDisplayedIncomeRates();
            steps.RRSummaryTable.validateUpdatedTable();
        }
    }
];

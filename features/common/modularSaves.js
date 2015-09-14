var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "royalties/royaltyRates");
require(steps_path + "royalties/royaltyRates");
require(pages_path + "deals/deal");
require(steps_path + "deals/deal");
require(pages_path + "deals/createGeneral");
require(steps_path + "deals/createGeneral");
require(pages_path + "deals/createContractPeriod");
require(steps_path + "deals/createContractPeriod");
require(pages_path + "deals/createScope");
require(steps_path + "deals/createScope");
require(pages_path + "royalties/RRSummaryTable");
require(steps_path + "royalties/RRSummaryTable");
require(steps_path + "login");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
        steps.deal.itContinueToNextPage();
        steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
    },

    feature = [
        {
            name: "Royalty Rate Set can be saved from other deal modules",
            tags: ["saveFromRRModuleMultiple"],
            steps: function () {
                steps.create_deal_scope.itAddSimpleScope();
                steps.create_deal_scope.itAddSimpleScope();
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
            tags: ["savingRRSavesDealMultiple"],
            steps: function () {
                steps.create_deal_scope.itAddSimpleScope();
                steps.create_deal_scope.itAddSimpleScope();
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

module.exports = {
    commonFeatureTags: ['common', 'modularSaves', 'broken'],
    feature: feature,
    beforeFeature: beforeFeature
};
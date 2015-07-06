var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;


require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");

require(pages_path + "deal");
require(steps_path + "deal");

require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");

require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");

require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");

require(steps_path + "login");

require(pages_path + "RRSummaryTable");
require(steps_path + "RRSummaryTable");

require(pages_path + "searchSection");
require(steps_path + "searchSection");

require(pages_path + "rateSetIncomeTypes");


var beforeFeature = function () {
        steps.login.itLogin();


    },

    feature = [{
        name: "As a user I want to view RR summary Table",
        tags: ["RRSummary"],
        steps: function () {

            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();


            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.create_deal_scope.itAddSimpleScope();

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
            //  steps.royaltyRates.test();


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

            //steps.create_deal_scope.itAddSimpleScope();
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
            //steps.create_deal_scope.itAddNewContractPeriod();
            //
            //steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriodEndDate();
            //
            //
            //steps.create_deal_scope.itAddSimpleScope();
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
            //steps.create_deal_scope.itAddSimpleScope();
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
            //
            //
            //
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

            name: "As a user I want to view filtered RR summary Table",
            tags: ["filterRRSummary"],
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

            name: "As a user I want to view update RR Summarry",
            tags: ["updateRRSummary"],
            steps: function () {

                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();


                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();

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
        },
        {

            name: "As a user I want to infinite scroll RR Summarry",
            tags: ["infiniteScrollRRSummary"],
            steps: function () {

                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();


                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addAdminFeeToContractualField("12");
                steps.royaltyRates.addNPSToContractualField("2");

                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                steps.royaltyRates.clickAtSourceApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();

                steps.royaltyRates.addRatePercentageToContractualField("15");


                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();


                steps.deal.goToTermsDealTabDetails();
                steps.deal.clickFirstScopeHeader();
                steps.deal.copyScope(40);

                steps.RRSummaryTable.waitForRRTableToBeDisplayed();
                steps.deal.goToIncomeRatesPage();
                steps.RRSummaryTable.waitForRRTableToBeDisplayed();
                steps.RRSummaryTable.verifyThatCorrectNumberOfScopesIsDisplayed(10);
                steps.base.scrollToBottomOfPage();
                steps.RRSummaryTable.verifyThatCorrectNumberOfScopesIsDisplayed(20);

            }
        }


    ];


module.exports = {
    commonFeatureTags: ["royaltySummary"],
    feature: feature,
    beforeFeature: beforeFeature
};

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
//require(steps_path + "RRSummaryTable");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
        steps.deal.itContinueToNextPage();

    },

    feature = [{
        name: "As a user I want to view RR summary Table",
        tags: ["RRSummary"],
        steps: function () {

            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.create_deal_scope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRObject();
            steps.royaltyRates.saveRateSet();



            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2023-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.create_deal_scope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.addEffectiveStartDate("2043-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();


            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("12");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2034-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();


            steps.create_deal_scope.itAddNewContractPeriod();

            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriodEndDate();


            steps.create_deal_scope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("12");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();


            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("34");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2056-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.create_deal_scope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("18");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.addEffectiveStartDate("2078-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();


            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("21");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2096-06-17");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();





            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();

            steps.deal.goToIncomeRatesPage();
         steps.royaltyRates.test();






        }
    }
];



module.exports = {
    commonFeatureTags: ["royaltySummary"],
    feature: feature,
    beforeFeature: beforeFeature
};

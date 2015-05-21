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

var beforeFeature = function () {
        steps.login.itLogin();

    },

    feature = [{
        name: "As a user I want to assign single rate to Scope on creation",
        tags: ["rateToScope1"],
        steps: function () {

            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.create_deal_scope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRData();




            steps.royaltyRates.saveRateSet();



            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.verifyRateSetSavedData();




        }
    },
        {
            name: "As a user I want to assign multiple rates to Scope on creation",
            tags: ["ratesToSCope2"],
            steps: function () {

                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");

                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();


                //Have an array of displayed





                steps.royaltyRates.saveRateSet();



                steps.royaltyRates.storeAllRRData();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();
                steps.royaltyRates.verifyAllRateSetSavedData();


            }
        }

];



module.exports = {
    commonFeatureTags: ["royalty"],
    feature: feature,
    beforeFeature: beforeFeature
};

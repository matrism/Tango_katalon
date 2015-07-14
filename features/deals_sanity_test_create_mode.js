var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(pages_path + "edit_deal_scope");
require(steps_path + "edit_deal_scope");
require(steps_path + "login");
require(steps_path + "base");
require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Deals sanity test flow create mode",
        tags: ["create_deal_sanity"],
        steps: function () {
            //fill all general screen fields
            steps.create_deal_general.itAddAllGeneralFieldsForSanityToDealGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itAddDifferentTypesOfContractPeriods();
            steps.create_deal_contract_period.selectContractPeriodNumberI(1);
            steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.create_deal_scope.itAddPublisherShareWithSocietyAwardCredit();
            steps.create_deal_scope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.create_deal_scope.saveThePublisherShareSet();
            //add rate set payout
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("test");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            //add rate set nps
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("provider");
            steps.royaltyRates.addEffectiveStartDate("2015-05-03");
            steps.royaltyRates.addNPSToContractualField('30');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.clickOnYesInterCompanyRateAllFields();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            //add ret set admin fee
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("income");
            steps.royaltyRates.addEffectiveStartDate("2015-06-15");
            steps.royaltyRates.addAdminFeeToContractualField('40');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.clickOnYesInterCompanyRateAllFields();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            //override rate set nps
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("test");
            steps.royaltyRates.addEffectiveStartDate("2015-02-03");
            steps.royaltyRates.addNPSToContractualField('30');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.clickOnYesInterCompanyRateAllFields();
            steps.royaltyRates.overrideInterCompanyRateInputFieldManual();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.base.scrollIntoView("inter company rate set button", pages.royaltyRates.elems.interCompanyInputField);
            steps.royaltyRates.overrideInterCompanyRateInputFieldByRule();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();



            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }];


module.exports = {
    commonFeatureTags: ["deal_sanity_create"],
    feature: feature,
    beforeFeature: beforeFeature
};

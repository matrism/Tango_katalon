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

require(pages_path + "royaltyRatesValidations");
require(steps_path + "royaltyRatesValidations");



var beforeFeature = function () {
    steps.login.itLogin();
        steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
        steps.deal.itContinueToNextPage();


        steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();

},

    feature = [{
        name: "As a user I want to view RR validations on create",
        tags: ["RRValidations"],
        steps: function () {


            steps.create_deal_scope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.clickAtSourceApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField("25");
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.overrideCoverMechanicalInterCompanyRate("24");

            steps.royaltyRatesValidations.checkThatRRErrorsArePresent("Inter-Company Rate(s) is less than Contractual Rate(s)");
           //  steps.royaltyRates.pauseTest();
            steps.royaltyRatesValidations.checkThatRRGroupErrorsArePresent("Inter-Company Rate is less than Contractual Rate");
            steps.royaltyRates.overrideCoverMechanicalInterCompanyRate("0");
            steps.royaltyRatesValidations.checkThatRRGroupErrorsArePresent("The Inter-Company Rate cannot be 0%");
            steps.royaltyRates.setInterCompanyRateToDefault();
            steps.royaltyRates.addRatePercentageToContractualField("70");
            steps.royaltyRatesValidations.checkThatRRGroupWarningsArePresent("Rate is between 95% and 100%");
            steps.royaltyRates.addRatePercentageToContractualField("30");
            steps.royaltyRatesValidations.checkThatRRGroupWarningsArePresent("Income Type exceeds 100%");
            steps.royaltyRates.deleteLastAddedPayout();
            steps.royaltyRates.saveRateSet();
            steps.royaltyRatesValidations.checkThatRRSummaryHasError("Please review Royalty Rates for accuracy");



        }
    },
        {
            name: "As a user I want to view RR validations on edit",
            tags: ["RRValidationsEdit"],
            steps: function () {


                steps.create_deal_scope.itAddSimpleScope();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.clickAtSourceApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();

                steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addRatePercentageToContractualField("25");

                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();



                steps.royaltyRates.editSingleRoyaltySet();
                steps.editRoyaltyRates.openRateSetPanel();


                steps.royaltyRates.openAllRRFields();
                steps.royaltyRates.overrideCoverMechanicalInterCompanyRate("24");

                steps.royaltyRatesValidations.checkThatRRErrorsArePresent("Inter-Company Rate(s) is less than Contractual Rate(s)");
                //  steps.royaltyRates.pauseTest();
                steps.royaltyRatesValidations.checkThatRRGroupErrorsArePresent("Inter-Company Rate is less than Contractual Rate");
                steps.royaltyRates.overrideCoverMechanicalInterCompanyRate("0");
                steps.royaltyRatesValidations.checkThatRRGroupErrorsArePresent("The Inter-Company Rate cannot be 0%");
                steps.royaltyRates.setInterCompanyRateToDefault();
                steps.royaltyRates.addRatePercentageToContractualField("70");
                steps.royaltyRatesValidations.checkThatRRGroupWarningsArePresent("Rate is between 95% and 100%");
                steps.royaltyRates.addRatePercentageToContractualField("30");
                steps.royaltyRatesValidations.checkThatRRGroupWarningsArePresent("Income Type exceeds 100%");
                steps.royaltyRates.deleteLastAddedPayout();
                steps.royaltyRates.saveRateSet();
                steps.royaltyRatesValidations.checkThatRRSummaryHasError("Please review Royalty Rates for accuracy");


            }
        },
        {
            name: "As a user I want to view RR validations on create",
            tags: ["RRValidations2"],
            steps: function () {


                steps.create_deal_scope.itAddSimpleScope();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.clickAtSourceApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();

                steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addRateBalanceToContractualField("Balance");
                steps.royaltyRates.openAllRRFields();
                steps.royaltyRates.verifyBalancePresentOnlyOnce();
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.addNPSToContractualField("Balance");
                steps.royaltyRates.verifyBalancePresentOnlyOnce();
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.addAdminFeeToContractualField("Balance");
                steps.royaltyRates.verifyBalancePresentOnlyOnce();
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.addRatePercentageToContractualField("20");
                steps.royaltyRates.addNPSToContractualField("10");
                steps.royaltyRates.lastPayoutDeterminesIC("No");
                steps.royaltyRates.addAdminFeeToContractualField("30");
                steps.royaltyRates.lastPayoutDeterminesIC("No");
                steps.royaltyRates.verifyICRateIs("20");
                steps.royaltyRates.addRateBalanceToContractualField("Balance");
                steps.royaltyRates.verifyICRateIs("60");
                steps.royaltyRates.deleteLastAddedPayout();
                steps.royaltyRates.verifyICRateIs("65");
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.checkNoIncomeRatesPresent();
                steps.royaltyRates.addRatePercentageToContractualField("50");
                steps.royaltyRates.verifyICRateIs("50");
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
               steps.royaltyRates.verifyICRateIs("85");




            }
        }
        ,
        {
            name: "As a user I want to view RR validations on create",
            tags: ["RRValidationsEdit2"],
            steps: function () {

                steps.create_deal_scope.itAddSimpleScope();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.clickAtSourceApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();

                steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addRatePercentageToContractualField("25");

                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();



                steps.royaltyRates.editSingleRoyaltySet();
                steps.editRoyaltyRates.openRateSetPanel();
                steps.royaltyRates.removeAllContractualRates();



                steps.royaltyRates.addRateBalanceToContractualField("Balance");
                steps.royaltyRates.openAllRRFields();
                steps.royaltyRates.verifyBalancePresentOnlyOnce();
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.addNPSToContractualField("Balance");
                steps.royaltyRates.verifyBalancePresentOnlyOnce();
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.addAdminFeeToContractualField("Balance");
                steps.royaltyRates.verifyBalancePresentOnlyOnce();
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.addRatePercentageToContractualField("20");
                steps.royaltyRates.addNPSToContractualField("10");
                steps.royaltyRates.lastPayoutDeterminesIC("No");
                steps.royaltyRates.addAdminFeeToContractualField("30");
                steps.royaltyRates.lastPayoutDeterminesIC("No");
                steps.royaltyRates.verifyICRateIs("20");
                steps.royaltyRates.addRateBalanceToContractualField("Balance");
                steps.royaltyRates.verifyICRateIs("60");
                steps.royaltyRates.deleteLastAddedPayout();
                steps.royaltyRates.verifyICRateIs("65");
                steps.royaltyRates.removeAllContractualRates();
                steps.royaltyRates.checkNoIncomeRatesPresent();
                steps.royaltyRates.addRatePercentageToContractualField("50");
                steps.royaltyRates.verifyICRateIs("50");
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.verifyICRateIs("85");




            }
        }

    ];


module.exports = {
    commonFeatureTags: ["royaltyRatesValidations"],
    feature: feature,
    beforeFeature: beforeFeature
};

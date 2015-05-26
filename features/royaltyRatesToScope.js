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
            name: "As a user I want to edit single rate from Scope ",
            tags: ["rateToScopeEdit"],
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


                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();



                steps.royaltyRates.editSingleRoyaltySet();
                steps.editRoyaltyRates.openRateSetPanel();


                steps.royaltyRates.clearRoyaltyRateInput();
                steps.royaltyRates.typeIntoRRInput("Edited RR Set");
                steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addEffectiveStartDate("2019-05-26");

                steps.royaltyRates.saveRRData();
                steps.royaltyRates.saveRateSet();




                steps.royaltyRates.refreshPage();

                steps.royaltyRates.openSavedScope();



                steps.royaltyRates.verifyRateSetSavedData();




            }
        },

        {
            name: "As a user I want to edit multiple  rate from Scope ",
            tags: ["rateToScopeEdit2"],
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


                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();



                steps.royaltyRates.editSingleRoyaltySet();
                steps.editRoyaltyRates.openRateSetPanel();


                steps.royaltyRates.clearRoyaltyRateInput();
                steps.royaltyRates.typeIntoRRInput("Edited RR Set");
                steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addEffectiveStartDate("2019-05-26");

                steps.royaltyRates.saveRRData();
                steps.royaltyRates.saveRateSet();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                steps.royaltyRates.setEffectiveStartDate("2017-01-02");

                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.saveRateSet();




                steps.royaltyRates.refreshPage();

                steps.royaltyRates.openSavedScope();



                steps.royaltyRates.verifyRateSetSavedData();




            }
        },

        {
            name: "As a user I want to dirty check  single rate edit from Scope ",
            tags: ["dirtyCheckRR1"],
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


                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();



                steps.royaltyRates.editSingleRoyaltySet();
                steps.editRoyaltyRates.openRateSetPanel();


                steps.royaltyRates.waitForPanel();
                steps.royaltyRates.saveRRData();
                steps.royaltyRates.clearRoyaltyRateInput();
                steps.royaltyRates.typeIntoRRInput("Edited RR Set");
                steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addEffectiveStartDate("2019-05-26");


                steps.royaltyRates.cancelRateSet();




                steps.royaltyRates.refreshPage();

                steps.royaltyRates.openSavedScope();



                steps.royaltyRates.verifyRateSetSavedData();




            }
        },
        {
            name: "As a user I want to dirty check  single rate edit from Scope ",
            tags: ["dirtyCheckRR2"],
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


                steps.royaltyRates.saveRateSet();


                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                steps.royaltyRates.setEffectiveStartDate("2017-01-02");

                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.saveRateSet();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();



                steps.royaltyRates.editSingleRoyaltySet();
                steps.editRoyaltyRates.openRateSetPanel();


                steps.royaltyRates.waitForPanel();
                steps.royaltyRates.saveRRData();
                steps.royaltyRates.clearRoyaltyRateInput();
                steps.royaltyRates.typeIntoRRInput("Edited RR Set");
                steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addEffectiveStartDate("2019-05-26");


                steps.royaltyRates.cancelRateSet();




                steps.royaltyRates.refreshPage();

                steps.royaltyRates.openSavedScope();



                steps.royaltyRates.verifyRateSetSavedData();




            }
        },

        {
            name: "As a user I want to assign multiple rates to Scope on creation",
            tags: ["ratesToScope2"],
            steps: function () {

                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                steps.royaltyRates.setEffectiveStartDate("2017-01-01");
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.saveRateSet();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                steps.royaltyRates.setEffectiveStartDate("2017-01-02");

                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.saveRateSet();


                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                steps.royaltyRates.setEffectiveStartDate("2017-01-03");

                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.saveRateSet();


                steps.royaltyRates.storeAllRRData();

                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();
                steps.royaltyRates.verifyAllRateSetSavedData();


            }
        },

        {
            name: "As a user I want to validate decimal places on create",
            tags: ["decimal"],
            steps: function () {

                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.royaltyRates.addNewRoyaltySet();
                //steps.royaltyRates.addRatePercentageToContractualField("10");
                //steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
                //steps.royaltyRates.setEffectiveStartDate("2017-01-01");
                //steps.royaltyRates.clickOnReceiptApplicationMethod();
                //steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.openAllRRFields();
                steps.royaltyRates.setAllFieldValue("1.2345");
                steps.royaltyRates.saveRateSet();

                //.rate-set-income-type-rates>div.ng-pristine>div.rate-set-rate-field>div>input


                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.clickFirstScopeHeader();
                steps.royaltyRates.editSingleRoyaltySet();
                steps.royaltyRates.openAllRRFields();
             //   steps.royaltyRates.checkThatInputHasCorrectDecimalNumber();


            }
        }

];



module.exports = {
    commonFeatureTags: ["royalty"],
    feature: feature,
    beforeFeature: beforeFeature
};

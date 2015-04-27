var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;


require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");


require(pages_path + "editRoyaltyRates");
require(steps_path + "editRoyaltyRates");

require(pages_path + "deal");
require(steps_path + "deal");

require(pages_path + "deal_general");
require(steps_path + "deal_general");

require(pages_path + "deal_contract_period");
require(steps_path + "deal_contract_period");

require(pages_path + "deal_scope");
require(steps_path + "deal_scope");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.deal_general.itFillDealMandatoryFieldsGeneralTab();
        steps.deal.itContinueToNextPage();
        steps.deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
        steps.deal_scope.itAddSimpleScope();
        steps.deal.itContinueToNextPage();
        steps.deal.saveDeal();
        steps.deal.waitForDealToBeSaved();


        steps.royaltyRates.openSavedScope();
    },

    feature = [{
        name: "I would like to create Royalty Rates within a Deal",
        tags: ["rr11"],
        steps: function () {

            steps.editRoyaltyRates.addNewRoyaltySet();
            steps.editRoyaltyRates.inspectRateSetForm();
            steps.editRoyaltyRates.closeRateSetForm();


        }
    },


        {
            name: "Royalty Rate Set fields",
            tags: ["rr22"],
            steps: function () {
                steps.editRoyaltyRates.addNewRoyaltySet();
                steps.editRoyaltyRates.clearRoyaltyRateInput();
                steps.editRoyaltyRates.validateRoyaltyRateInput();
                steps.editRoyaltyRates.typeIntoRRInput('First Rate Set');
                steps.editRoyaltyRates.validateRRInputText('First Rate Set');
                steps.editRoyaltyRates.clearRoyaltyRateInput();
                steps.editRoyaltyRates.typeIntoRRInput('Really really really really really really really really long rate set name');
                steps.editRoyaltyRates.validateRRInputText('Really really really really really really really really long rate set name');
                steps.editRoyaltyRates.validateRRInput();
                steps.editRoyaltyRates.selectAnIncomeProvider('TEST');
                steps.editRoyaltyRates.incomeProviderIsPresent('TEST\nx');
                steps.editRoyaltyRates.incomeDateMethodToggleIsDisplayed();
                steps.editRoyaltyRates.dealSigningTerritoryIsSelected();
                steps.editRoyaltyRates.selectWarnerChappellToggle();
                steps.editRoyaltyRates.warnerChappellToggleIsSelected();
                steps.editRoyaltyRates.selectDealSigningTerritoryToggle();
                steps.editRoyaltyRates.dealSigningTerritoryIsSelected();


            }


        }

        ,
        {
            name: "Royalty Rate Set fields",
            tags: ["rr33"],
            steps: function () {
                steps.editRoyaltyRates.addNewRoyaltySet();
                steps.editRoyaltyRates.inspectEffectiveStartDateArea();
                steps.editRoyaltyRates.checkEffectiveStartDateErrorMessages(
                    [
                        ["date", "errorMessage"],
                        ["12", "Not a valid date"],
                        ["00-11-2", "Invalid Year"],
                        ["2015-13-2", "Invalid Month"],
                        ["2015-11-49", "Invalid day"]

                    ],

                    "Check that  %errorMessage% is displayed for date: %date% "
                );


            }


        }
        ,

        {
            name: "Royalty Rate Set fields",
            tags: ["rr44"],
            steps: function () {

                steps.editRoyaltyRates.addNewRoyaltySet();
                steps.editRoyaltyRates.inspectEffectiveStartDateArea();
                steps.editRoyaltyRates.openEffectiveStartDateCalender();
                steps.editRoyaltyRates.setEffectiveStartDate("2015-11-11");
                steps.editRoyaltyRates.addRatePercentageToContractualField('10');
                steps.editRoyaltyRates.clickOnReceiptApplicationMethod();
                steps.editRoyaltyRates.confirmChangingRateApplicationMethod();
                steps.editRoyaltyRates.saveRateSet();
                steps.editRoyaltyRates.rateSetSavedSuccesfully();



            }


        }

    ];


module.exports = {
    commonFeatureTags: ["edit_royalty"],
    feature: feature,
    beforeFeature: beforeFeature
};
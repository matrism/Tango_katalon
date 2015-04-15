var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;



require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");

require(pages_path + "new_deal");
require(steps_path + "new_deal");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.new_deal.itCreateBasicDeal();
    },

    feature = [{
        name: "I would like to create Royalty Rates within a Deal",
        tags: ["rr1"],
        steps: function () {

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.inspectRateSetForm();
            steps.royaltyRates.closeRateSetForm();


        }
    },


        {
            name:"Royalty Rate Set fields",
            tags: ["rr2"],
            steps: function()
            {
                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.clearRoyaltyRateInput();
                steps.royaltyRates.validateRoyaltyRateInput();
                steps.royaltyRates.typeIntoRRInput('First Rate Set');
                steps.royaltyRates.validateRRInputText('First Rate Set');
                steps.royaltyRates.clearRoyaltyRateInput();
                steps.royaltyRates.typeIntoRRInput('Really really really really really really really really long rate set name');
                steps.royaltyRates.validateRRInputText('Really really really really really really really really long rate set name');
                steps.royaltyRates.validateRRInput();
                steps.royaltyRates.selectAnIncomeProvider('TEST');
                steps.royaltyRates.incomeProviderIsPresent('TEST\nx');
                steps.royaltyRates.incomeDateMethodToggleIsDisplayed();
                steps.royaltyRates.dealSigningTerritoryIsSelected();
                steps.royaltyRates.selectWarnerChappellToggle();
                steps.royaltyRates.warnerChappellToggleIsSelected();
                steps.royaltyRates.selectDealSigningTerritoryToggle();
                steps.royaltyRates.dealSigningTerritoryIsSelected();



            }



        }

        ,
        {
            name:"Royalty Rate Set fields",
            tags: ["rr3"],
            steps: function()
            {
                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.inspectEffectiveStartDateArea();
                steps.royaltyRates.checkEffectiveStartDateErrorMessages(

                    [
                        ["date",        "errorMessage"],
                        ["12"       ,   "Not a valid date"],
                        ["00-11-2"  ,   "Invalid Year"],
                        ["2015-13-2",   "Invalid Month"],
                        ["2015-11-49",  "Invalid day"]

                    ],

                    "Check that  %errorMessage% is displayed for date: %date% "
                );


            }



        }
        ,

        {
            name:"Royalty Rate Set fields",
            tags: ["test"],
            steps: function()
            {

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.inspectEffectiveStartDateArea();



               steps.royaltyRates.openEffectiveStartDateCalender();

                steps.royaltyRates.setEffectiveStartDate("2015-11-11");



                steps.royaltyRates.addRatePercentageToContractualField('10');


                     steps.royaltyRates.clickOnReceiptApplicationMethod();
                //steps.royaltyRates.rejectChangingRateApplicationMethod();
                //steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.royaltyRates.saveRateSet();

              //  steps.royaltyRates.test();
                //steps.royaltyRates.closeRateSet();
                //steps.royaltyRates.openRateSetPanel();


                //TODO Step to check calendar is opened , current date highlighted in blue







            }



        }

    ];


module.exports = {
    commonFeatureTags: ["royalty"],
    feature: feature,
    beforeFeature: beforeFeature
};
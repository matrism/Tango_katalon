var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "royalties/royaltyRates");
require(steps_path + "royalties/royaltyRates");
require(pages_path + "royalties/editRoyaltyRates");
require(steps_path + "royalties/editRoyaltyRates");
require(pages_path + "deals/deal");
require(steps_path + "deals/deal");
require(pages_path + "deals/createGeneral");
require(steps_path + "deals/createGeneral");
require(pages_path + "deals/createContractPeriod");
require(steps_path + "deals/createContractPeriod");
require(pages_path + "deals/createScope");
require(steps_path + "deals/createScope");
require(pages_path + "searchSection");
require(steps_path + "searchSection");
require(steps_path + "login");

var beforeFeature = function () {
        steps.login.itLogin();
        steps.searchSection.accessSavedDealByNumber("205622");
        steps.royaltyRates.openSavedScope();
    },

    feature = [
        {
            name: "I would like to create Royalty Rates within a Deal",
            tags: ["rre1"],
            steps: function () {
                steps.editRoyaltyRates.addNewRoyaltySet();
                steps.editRoyaltyRates.inspectRateSetForm();
                steps.editRoyaltyRates.closeRateSetForm();
            }
        },
        {
            name: "Royalty Rate Set fields",
            tags: ["rre2"],
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
        },
        {
            name: "Royalty Rate Set fields",
            tags: ["rre3"],
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
        },
        {
            name: "Royalty Rate Set fields",
            tags: ["rre4"],
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

                //TODO calculation of new payout is succesfull
            }
        }
    ];

module.exports = {
    commonFeatureTags: ['royalties', 'royaltiesEditExistingDeal', 'broken'],
    feature: feature,
    beforeFeature: beforeFeature
};
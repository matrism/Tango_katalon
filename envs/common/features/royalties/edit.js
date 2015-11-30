'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
    steps.deal.itContinueToNextPage();
    steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
    steps.createDealScope.itAddSimpleScope();
    steps.deal.itContinueToNextPage();
    steps.deal.saveDeal();
    steps.deal.waitForDealToBeSaved();

    steps.royaltyRates.openSavedScope();
};

exports.commonFeatureTags = ['royaltyRates', 'sanity', 'broken'];

exports.feature = [
    {
        name: "Create basic Royalty Rate Set on a new deal",
        tags: ['create'],
        steps: function () {
            steps.editRoyaltyRates.addNewRoyaltySet();
            steps.editRoyaltyRates.inspectRateSetForm();
            steps.editRoyaltyRates.closeRateSetForm();
        }
    },
    {
        name: "Create complex Royalty Rate Set on a new deal",
        tags: ['create'],
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
        name: "Check Effective Start Date validation on a Royalty Rate Set on a new deal",
        tags: ['edit', 'validation'],
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
        name: "Edit Royalty Rate Set on a new deal",
        tags: ['edit'],
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

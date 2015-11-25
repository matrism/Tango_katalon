'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
    steps.deal.itContinueToNextPage();
    steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
    steps.createDealScope.itAddSimpleScope();
};

exports.commonFeatureTags = ['royaltyRates', 'smoke', 'broken'];

exports.feature = [
    {
        name: "Create Royalty Rates Set",
        tags: ['create'],
        steps: function () {
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.inspectRateSetForm();
            steps.royaltyRates.closeRateSetForm();
        }
    },
    {
        name: "Create a complex Royalty Rate Set",
        tags: ["create", 'validation'],
        steps: function () {
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
    },
    {
        name: "Check Royalty Rate Set Effective Start Date Validation",
        tags: ["validation"],
        steps: function () {
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.inspectEffectiveStartDateArea();
            steps.royaltyRates.checkEffectiveStartDateErrorMessages(
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
        name: "Check Royalty Rate Set Rate Applicaiton Method Change",
        tags: ["validaiton"],
        steps: function () {
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.inspectEffectiveStartDateArea();
            steps.royaltyRates.openEffectiveStartDateCalender();
            steps.royaltyRates.setEffectiveStartDate("2015-11-11");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();
        }
    },
    {
        name: "Royalty Rate Set save deal",
        tags: ["create", 'edit'],
        steps: function () {
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRData();

            //steps.royaltyRates.saveRateSet();
            //
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Royalty Rate Set can be saved with errors",
        tags: ['create', 'validation'],
        steps: function () {
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.addEffectiveStartDate("2-2-2");

            steps.royaltyRates.storeRRData();

            steps.royaltyRates.saveRateSet();

            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.verifyRateSetSavedData();

            steps.deal.verifyErrorMessages();
        }
    },
    {
        name: "Royalty Rate Set can be saved from other deal modules",
        tags: ['create', 'edit', 'validation'],
        steps: function () {
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

            steps.royaltyRates.addNewPublisherShares();
            steps.royaltyRates.addOriginalPublisherToPublisherShares("ASCAP");

            steps.royaltyRates.addAdministratorToPublisherShares("ASCAP");
            steps.royaltyRates.savePublisherShares();

            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Saving RR Set Saves whole Deal",
        tags: ['create', 'edit', 'validation'],
        steps: function () {
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

            steps.royaltyRates.addNewPublisherShares();
            steps.royaltyRates.addOriginalPublisherToPublisherShares("ASCAP");

            steps.royaltyRates.addAdministratorToPublisherShares("ASCAP");

            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.waitForAjaxCall();
            steps.royaltyRates.refreshPage();

            steps.royaltyRates.openSavedScope();

            steps.royaltyRates.verifyRateSetSavedData();
            steps.royaltyRates.verifyPublisherShare();
        }
    }
];

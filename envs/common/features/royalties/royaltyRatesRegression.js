'use strict';

var using = fnutils.using;

exports.commonFeatureTags = [
    'royaltyRatesRegression',
    'royaltyRates',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
    steps.deal.itContinueToNextPage();
    steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
    steps.createDealScope.itAddSimpleScope();
};

exports.feature = [
    {
        name: 'Create Royalty Rates Set',
        tags: ['create'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.inspectRateSetForm();
                this.closeRateSetForm();
            });
        }
    },
    {
        name: 'Create a complex Royalty Rate Set',
        tags: ['create', 'validation'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.clearRoyaltyRateInput();
                this.validateRoyaltyRateInput();
                this.typeIntoRRInput('First Rate Set');
                this.validateRRInputText('First Rate Set');
                this.clearRoyaltyRateInput();
                this.typeIntoRRInput('Really really really really really really really really long rate set name');
                this.validateRRInputText('Really really really really really really really really long rate set name');
                this.validateRRInput();
                this.selectAnIncomeProvider('TEST');
                this.incomeProviderIsPresent('TEST');
                this.incomeDateMethodToggleIsDisplayed();
                this.warnerChappellToggleIsSelected();
                this.selectDealSigningTerritoryToggle();
                this.dealSigningTerritoryIsSelected();
                this.selectWarnerChappellToggle();
                this.warnerChappellToggleIsSelected();
            });
        }
    },
    {
        name: 'Check Royalty Rate Set Effective Start Date Validation',
        tags: ['validation'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.inspectEffectiveStartDateArea();
                this.checkEffectiveStartDateErrorMessages(
                    [
                        ['date', 'errorMessage'],
                        ['12', 'Not a valid date'],
                        ['00-11-2', 'Invalid Year'],
                        ['2015-13-2', 'Invalid Month'],
                        ['2015-11-49', 'Invalid day']

                    ],
                    'Check that  %errorMessage% is displayed for date: %date% '
                );
            });
        }
    },
    {
        name: 'Check Royalty Rate Set Rate Applicaiton Method Change',
        tags: ['validation'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.inspectEffectiveStartDateArea();
                this.openEffectiveStartDateCalender();
                this.setEffectiveStartDate('2015-11-11');
                this.addRatePercentageToContractualField('10');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.saveRateSet();
            });
        }
    },
    {
        name: 'Royalty Rate Set save deal',
        tags: ['create', 'edit'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('HFA');

                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRData();

                using(steps.deal, function () {
                    this.itContinueToNextPage();
                    this.saveDeal();
                    this.clickFirstScopeHeader();
                });

                this.verifyRateSetSavedData();
            });
        }
    },
    {
        name: 'Royalty Rate Set can be saved with errors',
        tags: ['create', 'validation'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('HFA');
                this.addEffectiveStartDate('2-2-2');

                this.storeRRData();

                this.saveRateSet();

                using(steps.base, function () {
                    this.waitForModal();

                    this.validateModalMessageBody(
                        'Add an Effective Date to ensure activation of rates'
                    );

                    this.closeModal();
                });

                steps.deal.clickFirstScopeHeader();

                this.verifyRateSetSavedData();

                steps.deal.verifyErrorMessages();
            });
        }
    },
    {
        name: 'Royalty Rate Set can be saved from other deal modules',
        tags: ['create', 'edit', 'validation'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('HFA');

                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();

                this.saveRateSet();

                using(steps.deal, function () {
                    this.itContinueToNextPage();
                    this.saveDeal();
                    this.clickFirstScopeHeader();
                });

                this.editSingleRoyaltySet();

                steps.editRoyaltyRates.openRateSetPanel();

                this.clearRoyaltyRateInput();
                this.typeIntoRRInput('Edited RR Set');
                this.editIncomeProviderByPartialMatch('ASCAP');
                this.addEffectiveStartDate('2019-05-26');

                this.saveRRData();

                this.addNewPublisherShares();
                this.addOriginalPublisherToPublisherShares('ASCAP');

                this.addAdministratorToPublisherShares('ASCAP');
                this.savePublisherShares();

                steps.deal.clickFirstScopeHeader();

                this.verifyRateSetSavedData();
            });
        }
    },
    {
        name: 'Saving RR Set Saves whole Deal',
        tags: ['create', 'edit', 'validation'],
        steps: function () {
            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('HFA');

                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();

                this.saveRateSet();

                using(steps.deal, function () {
                    this.itContinueToNextPage();
                    this.saveDeal();
                    this.clickFirstScopeHeader();
                });

                this.editSingleRoyaltySet();

                steps.editRoyaltyRates.openRateSetPanel();

                this.clearRoyaltyRateInput();
                this.typeIntoRRInput('Edited RR Set');
                this.editIncomeProviderByPartialMatch('ASCAP');
                this.addEffectiveStartDate('2019-05-26');

                this.saveRRData();

                this.addNewPublisherShares();
                this.addOriginalPublisherToPublisherShares('ASCAP');

                this.addAdministratorToPublisherShares('ASCAP');

                this.saveRateSet();

                this.waitForAjaxCall();
                this.refreshPage();

                this.openSavedScope();

                this.verifyRateSetSavedData();
                this.verifyPublisherShare();
            });
        }
    }
];

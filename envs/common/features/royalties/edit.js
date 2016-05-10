'use strict';

var using = fnutils.using;

exports.id = '81d149a7-7d4b-4ce5-97ac-8c5e303cac01';
exports.featureName = 'Edit Royality Rates Regression';

exports.commonFeatureTags = [
    'editRoyaltyRatesRegression',
    'royaltyRates',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
    steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
    steps.deal.itContinueToNextPage();
    steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
    steps.createDealScope.itAddSimpleScope();

    using(steps.deal, function() {
        this.itContinueToNextPage();
        this.saveDeal();
        this.waitForDealToBeSaved();
    });

    steps.royaltyRates.openSavedScope();
};

exports.feature = [
    {
        name: 'Create basic Royalty Rate Set on a new deal',
        tags: ['create'],
        steps: function () {
            using(steps.editRoyaltyRates, function () {
                this.addNewRoyaltySet();
                this.inspectRateSetForm();
                this.closeRateSetForm({ confirm: false });
            });
        }
    },
    {
        name: 'Create a complex Royalty Rate Set',
        tags: ['create', 'validation'],
        steps: function () {
            using(steps.editRoyaltyRates, function () {
                this.addNewRoyaltySet();
                this.clearRoyaltyRateInput();
                this.validateRoyaltyRateInput();
                this.typeIntoRRInput('First Rate Set');
                this.validateRRInputText('First Rate Set');
                this.clearRoyaltyRateInput();
                this.typeIntoRRInput('Really really really really really really really really long rate set name');
                this.validateRRInputText('Really really really really really really really really long rate set name');
                this.validateRRInput();
                this.selectAnIncomeProvider('ASCAP');
                this.incomeProviderIsPresent('ASCAP');
                this.incomeDateMethodToggleIsDisplayed();

                if(systemConfig.env.name === 'qa') {
                    this.warnerChappellToggleIsSelected();

                    this.selectDealSigningTerritoryToggle();
                    this.dealSigningTerritoryIsSelected();

                    this.selectWarnerChappellToggle();
                    this.warnerChappellToggleIsSelected();
                }
                else {
                    this.dealSigningTerritoryIsSelected();

                    this.selectWarnerChappellToggle();
                    this.warnerChappellToggleIsSelected();

                    this.selectDealSigningTerritoryToggle();
                    this.dealSigningTerritoryIsSelected();
                }
            });
        }
    },
    {
        name: 'Check Royalty Rate Set Effective Start Date Validation',
        tags: ['validation'],
        steps: function () {
            using(steps.editRoyaltyRates, function () {
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
        name: 'Edit Royalty Rate Set on a new deal',
        tags: ['edit'],
        steps: function () {
            using(steps.editRoyaltyRates, function () {
                this.addNewRoyaltySet();
                this.inspectEffectiveStartDateArea();
                this.openEffectiveStartDateCalender();
                this.setEffectiveStartDate('2015-11-11');
                this.addRatePercentageToContractualField('10');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.saveRateSet();
                this.rateSetSavedSuccesfully();
            });
        }
    }
];

'use strict';

var using = fnutils.using,

    dealNum = { staging: '179097', prod: '3' , staging_test: '380019' }[systemConfig.env.name] || '205622';

exports.id = 'd0e81a6b-8520-4d4f-bff5-d6d9b0fece3c';

exports.commonFeatureTags = [
    'editExistingDealRoyaltyRatesRegression',
    'royaltyRates',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();

    steps.searchSection.accessSavedDealByNumber(dealNum);

    steps.royaltyRates.openSavedScope();
};

exports.feature = [
    {
        name: 'Create basic Royalty Rate Set on an existing deal',
        tags: ['create'],
        //steps: function () {
        steps: criticalScenario(() => {
            using(steps.editRoyaltyRates, function () {
                this.addNewRoyaltySet();
                this.inspectRateSetForm();
                this.closeRateSetForm({ confirm: false });
            });
        })
    },
    {
        name: 'Create complex Royalty Rate Set on an existing deal',
        tags: ['create'],
        steps: function () {
        //steps: criticalScenario(() => {
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

                    this.warnerChappellToggleIsSelected();

                    this.selectDealSigningTerritoryToggle();
                    this.dealSigningTerritoryIsSelected();

                    this.selectWarnerChappellToggle();
                    this.warnerChappellToggleIsSelected();

            });
        }
    },
    {
        name: 'Check Effective Start Date validation on a Royalty Rate Set on an existing deal',
        tags: ['edit', 'validation'],
        steps: function () {
        //steps: criticalScenario(() => {
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
        name: 'Edit Royalty Rate Set on an existing deal',
        tags: ['edit'],
        steps: function () {
        //steps: criticalScenario(() => {
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
                //TODO calculation of new payout is succesfull
            });
        }
    }
];

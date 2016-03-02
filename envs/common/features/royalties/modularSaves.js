'use strict';

var yaml = require('yamljs'),

    using = fnutils.using,
    bind = fnutils.bind,

    // TODO: Implement overriding.
    validationData = yaml.load(__dirname + '/data/modularSaves.yml');

exports.commonFeatureTags = [
    'royaltyRatesModularSavesRegression',
    'royaltyRates',
    'modularSaves',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();

    steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();

    steps.deal.itContinueToNextPage();

    steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
};

exports.feature = [
    {
        name: 'Royalty Rate Set can be saved from other deal modules',

        tags: ['edit'],

        steps: function () {
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();

            steps.deal.clickFirstScopeHeader();

            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                this.addNewRoyaltySetEdit();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('ASCAP');
                this.enterEffectiveStartDateForLastRateSet('2023-06-17');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                steps.deal.clickLastScopeHeader();

                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
                this.enterEffectiveStartDateForLastRateSet('2043-06-17');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                this.addNewRoyaltySetEdit();
                this.addRatePercentageToContractualField('12');
                this.addIncomeProviderByPartialMatch('ASCAP');
                this.enterEffectiveStartDateForLastRateSet('2034-06-17');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                this.addNewPublisherShares();
                this.addOriginalPublisherToPublisherShares('ASCAP');

                this.addAdministratorToPublisherShares('ASCAP');
                this.savePublisherShares();
            });

            steps.base.waitForAjax();

            steps.deal.goToIncomeRatesPage();

            steps.dealIncomeRates.goToRatesSummary();

            using(steps.royaltyRatesSummaryTable, function () {
                this.validateCount(validationData.length);

                validationData.forEach(bind(this, function (__, s, i) {
                    this.find(i);

                    this.scope.validateDescription(s.description);

                    using(this.contractPeriod, function () {
                        this.validateCount(s.contractPeriods.length);

                        s.contractPeriods.forEach(bind(this, function (__, cp, i) {
                            this.find(i);

                            this.validateDescription(cp);
                        }));
                    });

                    using(this.rateSet, function () {
                        this.validateCount(s.rateSets.length);

                        s.rateSets.forEach(bind(this, function (__, rs, i) {
                            this.find(i);

                            this.validateDescription(rs.description);

                            this.validateIncomeProvider(rs.incomeProvider);

                            this.validateEffectiveDate(rs.effectiveDate);

                            this.toggle();

                            using(this.group, function () {
                                this.validateCount(rs.groups.length);

                                rs.groups.forEach(bind(this, function (__, g, i) {
                                    this.find(i);

                                    this.validateKey(g);
                                }));
                            });
                        }));
                    });
                }));
            });
        }
    },
    {
        name: 'Saving RR Set Saves whole Deal',

        tags: ['edit'],

        steps: function () {
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();

            steps.deal.clickFirstScopeHeader();

            using(steps.royaltyRates, function () {
                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                this.addNewRoyaltySetEdit();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('ASCAP');
                this.enterEffectiveStartDateForLastRateSet('2023-06-17');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                steps.deal.clickLastScopeHeader();

                this.addNewRoyaltySet();
                this.addRatePercentageToContractualField('10');
                this.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
                this.enterEffectiveStartDateForLastRateSet('2043-06-17');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();

                this.addNewPublisherShares();
                this.addOriginalPublisherToPublisherShares('ASCAP');
                this.addAdministratorToPublisherShares('ASCAP');

                this.addNewRoyaltySetEdit();
                this.addRatePercentageToContractualField('12');
                this.addIncomeProviderByPartialMatch('ASCAP');
                this.enterEffectiveStartDateForLastRateSet('2034-06-17');
                this.clickOnReceiptApplicationMethod();
                this.confirmChangingRateApplicationMethod();
                this.storeRRObjectonEditPage();
                this.saveRateSet();

                steps.deal.clickFirstScopeHeader();

                this.addNewPublisherShares();
                this.addOriginalPublisherToPublisherShares('ASCAP');
                this.addAdministratorToPublisherShares('ASCAP');
                this.savePublisherShares();

                steps.base.waitForAjax();

                this.refreshPage();
            });

            steps.base.waitForAjax();

            steps.deal.clickLastScopeHeader();

            steps.royaltyRates.verifyPublisherShare();
        }
    }
];

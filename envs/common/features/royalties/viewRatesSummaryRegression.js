'use strict';

var yaml = require('yamljs'),

    // TODO: Load environment overrides (if any).
    testData = yaml.load(__dirname + '/data/viewRatesSummaryRegression.yml'),

    using = fnutils.using;

exports.id = '82ddbb58-7274-4ca3-ba6b-0e4ab73c708b';

exports.commonFeatureTags = [
    'viewRoyaltyRatesSummaryRegression',
    'royaltyRatesSummary',
    'royaltyRates',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'View royalty rates summary (regression test)',

        tags: [],

        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();

            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.createDealScope.itAddSimpleScope();

            using(steps.royaltyRates, function (rr) {
                rr.addNewRoyaltySet();
                rr.addRatePercentageToContractualField('10');
                rr.addAdminFeeToContractualField('12');
                rr.addNPSToContractualField('2');
                rr.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
                rr.clickOnReceiptApplicationMethod();
                rr.confirmChangingRateApplicationMethod();
                rr.saveRateSet();

                rr.addNewRoyaltySet();
                rr.addRatePercentageToContractualField('18');
                rr.addIncomeProviderByPartialMatch('ASCAP');
                rr.addEffectiveStartDate('2023-06-17');
                rr.clickOnReceiptApplicationMethod();
                rr.confirmChangingRateApplicationMethod();
                rr.saveRateSet();
            });

            steps.deal.itContinueToNextPage();

            steps.deal.saveDeal();
            steps.base.waitForAjax();

            steps.deal.goToIncomeRatesPage();
            steps.dealIncomeRates.goToRatesSummary();

            using(steps.royaltyRatesSummaryTable, function (rrst) {
                rrst.validateCount(1);

                rrst.find(0);

                rrst.scope.validateDescription('Scope 1');

                using(rrst.contractPeriod, function (cp) {
                    cp.validateCount(1);

                    cp.find(0);

                    cp.validateDescription('Contract Period 1');
                });

                using(rrst.rateSet, function (rs) {
                    var rateSets = testData.rateSets;

                    rs.validateCount(Object.keys(rateSets).length);

                    Object.keys(rateSets).forEach(function (rateSetDescription, rateSetIndex) {
                        var rateSet = rateSets[rateSetDescription];

                        rs.find(rateSetIndex);

                        rs.validateDescription(rateSetDescription);

                        rs.validateIncomeProvider(rateSet.incomeProvider);

                        rs.validateEffectiveDate(rateSet.effectiveDate);

                        rs.toggle();

                        using(rs.group, function (g) {
                            var rateSetGroups = testData.rateSetGroups;

                            g.validateCount(Object.keys(rateSetGroups).length);

                            Object.keys(rateSetGroups).forEach(function (key, groupIndex) {
                                var incomeTypes = rateSetGroups[key];

                                g.find(groupIndex);

                                g.validateKey(key);

                                g.toggle();

                                using(g.incomeTypes, function (it) {
                                    it.validateCount(incomeTypes.length);

                                    incomeTypes.forEach(function (incomeTypeName, incomeTypeIndex) {
                                        var rateItems = rateSet.rateItems;

                                        it.find(incomeTypeIndex);

                                        it.validateName(incomeTypeName);

                                        using(it.rateItems, function (ri) {
                                            ri.validateCount(rateItems.length);

                                            rateItems.forEach(function (rateItem, rateItemIndex) {
                                                ri.find(rateItemIndex);

                                                ri.validateName(rateItem.name);
                                                ri.validatePercentage(rateItem.percentage);
                                                ri.validateApplicationMethod('On Receipt');
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    }
];

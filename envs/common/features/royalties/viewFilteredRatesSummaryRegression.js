'use strict';

var using = fnutils.using,

    dealId = { staging: '19846' }[systemConfig.env.name] || '245951';

exports.commonFeatureTags = [
    'viewFilteredRoyaltyRatesSummaryRegression',
    'royaltyRatesSummary',
    'royaltyRates',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'View filtered royalty rates summary (regression test)',

        tags: [],

        steps: function () {
            steps.searchSection.accessSavedDealByNumber(dealId);

            steps.deal.goToIncomeRatesPage();
            steps.dealIncomeRates.goToRatesSummary();

            using(steps.royaltyRatesSummaryTable, function (rrst) {
                describe('Expect good data', function () {
                    var i;

                    rrst.validateCount(4);

                    for(i = 0; i < 2; ++i) {
                        rrst.find(i);

                        using(rrst.contractPeriod, function (cp) {
                            cp.validateCount(1);

                            cp.find(0);

                            cp.validateDescription('Contract Period 1');
                        });
                    }

                    for(; i < 4; ++i) {
                        rrst.find(i);

                        using(rrst.contractPeriod, function (cp) {
                            cp.validateCount(1);

                            cp.find(0);

                            cp.validateDescription('Contract Period 2');
                        });
                    }
                });

                _.times(2, function (fi) {
                    var fiHuman = fi + 1;

                    describe(
                        'Test filter (Contract Period ' + fiHuman + ')', function () {
                            rrst.filterBy('Contract Period ' + fiHuman);

                            rrst.validateCount(2);

                            _.times(2, function (rrsti) {
                                rrst.find(rrsti);

                                using(rrst.contractPeriod, function (cp) {
                                    cp.validateCount(1);

                                    cp.find(0);

                                    cp.validateDescription('Contract Period ' + fiHuman);
                                });
                            });
                        }
                    );
                });
            });
        }
    }
];

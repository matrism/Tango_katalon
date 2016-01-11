'use strict';

var using = fnutils.using;

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['royaltyRates', 'royaltySummary'];

exports.feature = [
    {
        name: "View Royalty Rates summary table",
        tags: ['view'],
        steps: function () {
//            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
//            steps.deal.itContinueToNextPage();
//
//            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
//            steps.createDealScope.itAddSimpleScope();
//
//            steps.royaltyRates.addNewRoyaltySet();
//            steps.royaltyRates.addRatePercentageToContractualField("10");
//            steps.royaltyRates.addAdminFeeToContractualField("12");
//            steps.royaltyRates.addNPSToContractualField("2");
//            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
//            steps.royaltyRates.clickOnReceiptApplicationMethod();
//            steps.royaltyRates.confirmChangingRateApplicationMethod();
//            steps.royaltyRates.saveRateSet();
//            //steps.royaltyRates.test();
//
//            steps.royaltyRates.addNewRoyaltySet();
//            steps.royaltyRates.addRatePercentageToContractualField("18");
//            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
//            steps.royaltyRates.addEffectiveStartDate("2023-06-17");
//            steps.royaltyRates.clickOnReceiptApplicationMethod();
//            steps.royaltyRates.confirmChangingRateApplicationMethod();
//            steps.royaltyRates.saveRateSet();
//
//            steps.deal.itContinueToNextPage();
//            steps.deal.saveDeal();
//            steps.base.waitForAjax();

            it('...', function () {
                browser.get('http://tango.tango-qa-aws.dspdev.wmg.com/#/deal/259731/terms');
                pages.base.waitForAjax();
            });

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
                    var rateSets = {
                            'Rate Set 1': {
                                incomeProvider: 'HFA',

                                effectiveDate: '2014-03-12',

                                rateItems: [
                                    {
                                        name: 'NPS',
                                        percentage: 'Balance'
                                    },
                                    {
                                        name: 'Payout 1',
                                        percentage: '10.000%'
                                    },
                                    {
                                        name: 'Admin Fee',
                                        percentage: '12.000%'
                                    },
                                    {
                                        name: 'NPS',
                                        percentage: '2.000%'
                                    }
                                ]
                            },

                            'Rate Set 2': {
                                incomeProvider: 'ASCAP',

                                effectiveDate: '2023-06-17',

                                rateItems: [
                                    {
                                        name: 'NPS',
                                        percentage: 'Balance'
                                    },
                                    {
                                        name: 'Payout 1',
                                        percentage: '18.000%'
                                    }
                                ]
                            }
                        },

                        rateSetGroups = {
                            'Cover Mechanical': [
                                'Cover Mechanical',
                                'Digital Cover'
                            ],
                            'Mechanical': [
                                'Mechanical',
                                'Digital Mechanical',
                                'Digital Streaming Mechanical',
                                'Download Mechanical',
                                'Karaoke Mechanical',
                                'Mechanical Performance',
                                'Ringtone Mechanical',
                                'Video Mechanical'
                            ],
                            'Non Society Performance': [
                                'Direct Licensed Performance'
                            ],
                            'Others': [
                                'Others',
                                'Grand Rights',
                                'Hire Fee',
                                'Image & Likeness',
                                'Merchandising',
                                'Management Income',
                                'Small Rights'
                            ],
                            'Performance': [
                                'Performance',
                                'Digital Performance',
                                'Digital Streaming Performance',
                                'Download Performance',
                                'Film Performance',
                                'Karaoke Performance',
                                'Live Performance',
                                'Radio Performance',
                                'Ringtone Performance',
                                'TV Performance'
                            ],
                            'Print': [
                                'Digital Lyrics',
                                'Educational Print',
                                'Folio Print',
                                'Folio Sales',
                                'Media',
                                'Mixed Folio',
                                'Sheet Sales',
                                'Single Sheet Print'
                            ],
                            'Synch': [
                                'Synchronisation',
                                'Cover Synch',
                                'Commercial Synchronisation',
                                'Digital Synch',
                                'Film Synch',
                                'TV Synch',
                                'Video/Interactive Games',
                                'Video Synch'
                            ],
                            'TPP': [
                                'Third Party Print',
                                'Digital Print',
                                'Third Party Lyrics'
                            ]
                        };

                    rs.validateCount(Object.keys(rateSets).length);

                    Object.keys(rateSets).forEach(function (rateSetDescription, rateSetIndex) {
                        var rateSet = rateSets[rateSetDescription];

                        rs.find(rateSetIndex);

                        rs.validateDescription(rateSetDescription);

                        rs.validateIncomeProvider(rateSet.incomeProvider);

                        rs.validateEffectiveDate(rateSet.effectiveDate);

                        rs.toggle();

                        using(rs.group, function (g) {
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
    },
    {
        name: "View filtered Royalty Rates summary table",
        tags: ["'view'"],
        steps: function () {
            steps.searchSection.accessSavedDealByNumber("209550");

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
    },
    {
        name: "View update Royalty Rates Summarry",
        tags: ['dbg', "view"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addAdminFeeToContractualField("12");
            steps.royaltyRates.addNPSToContractualField("2");

            steps.royaltyRates.addIncomeProviderByPartialMatch("HFA");
            steps.royaltyRates.clickAtSourceApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.addRatePercentageToContractualField("15");
            steps.royaltyRates.openAllRRFields();

            steps.royaltyRates.changeCoverMechanicalLastRateApplicationMethodToOnReceipt();
            steps.royaltyRates.checkPrevailingPopupIsPresent();
            steps.royaltyRates.selectOnReceiptMethodInPrevailingPopup();
            //steps.royaltyRates.pauseTest();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();

            steps.deal.goToTermsDealTabDetails();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.royaltyRates.saveRateSet();

            steps.deal.goToIncomeRatesPage();
            steps.dealIncomeRates.goToRatesSummary();

            using(steps.royaltyRatesSummaryTable, function (rrst) {
                rrst.validateCount(1);

                rrst.find(0);

                using(rrst.rateSet, function (rs) {
                    rs.validateCount(1);

                    rs.find(0);

                    rs.validateDescription('Edited RR Set');

                    rs.validateIncomeProvider('ASCAP');

                    rs.validateEffectiveDate('2019-05-26');
                });
            });
        }
    }
];

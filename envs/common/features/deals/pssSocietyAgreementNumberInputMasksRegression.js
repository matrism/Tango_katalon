'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.commonFeatureTags = [
    'pssSocietyAgreementNumberInputMasksRegression',
    'pssSocietyAgreementNumbersRegression',
    'pssSocietyAgreementNumbers',
    'deals',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create deal',

        tags: [],

        steps: function () {
            var base = steps.base,

                deal = steps.deal,
                cdg = steps.createDealGeneral;

            base.useBlankEntityDataSlot('deal', 'mainDeal');

            cdg.goToNewDealPage();

            describe('Fill general fields', function () {
                cdg.selectSigningTerritory('Argentina');

                if(systemConfig.env.name === 'qa') {
                    cdg.fillCompanyCodeField('WCM');
                    cdg.waitForContractingPartyDropDown();
                    cdg.selectRandomCompanyCode();
                }

                cdg.enterContractingPartySearchTerms('ASCAP');
                cdg.waitForContractingPartyDropDown();
                cdg.selectContractingPartySearchResultByIndex(0);

                deal.itContinueToNextPage();
            });

            describe('Fill contract period fields', function () {
                var cdcp = steps.createDealContractPeriod;

                cdcp.enterActualStartDate(moment().format('YYYY-MM-DD'));
                cdcp.enterTargetEndDateInMonths(12);
            });

            describe('Create scope', function () {
                var cds = steps.createDealScope;

                cds.openNewScopeForm();

                describe('Fill general fields', function () {
                    cds.selectContractType('Administration');

                    cds.enterTerritoryOfControlSearchTerms('Brazil');
                    cds.selectTerritoryOfControlSearchResultByIndex(0);
                });

                describe('Add a PSS chain', function () {
                    cds.clickOnAddPublisherShareSet({
                        scrollIntoView: true
                    });

                    cds.selectPublisherRole(0, 0, 'E');

                    cds.enterPublisherSearchTerms(0, 0, 'WARNER ALLIANCE MUSIC');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterOwnPublisherShare(0, 0, 100);

                    cds.enterPublisherSearchTerms(0, 1, 'WB MUSIC CORP.');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterCollectPublisherShare(0, 1, 50);
                });

                cds.saveSharePublisherShareSet();
            });

            describe('Save deal', function () {
                deal.itContinueToNextPage();

                deal.saveDeal();
                deal.waitForDealToBeSaved();

                deal.findId();
            });
        }
    },
    {
        name: 'Validate society agreement number input masks',

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            describe(
                'Ensure 14 character long society agreement numbers ' +
                'are valid', function () {
                    var number = '01234567891234';

                    describe('Check Creator-to-Publisher form', function () {
                        dsanCtp.enterSocietyAgreementNumber(0, 0, number);

                        dsanCtp.validateSocietyAgreementNumber(0, 0, number);

                        dsanCtp.validateSocietyAgreementNumberFieldState(0, 0, 'valid');
                    });

                    dsanCtp.deleteSocietyAgreementNumber(0, 0);

                    describe('Check Publisher form', function () {
                        dsanPub.enterSocietyAgreementNumber(0, number);

                        dsanPub.validateSocietyAgreementNumber(0, number);

                        dsanPub.validateSocietyAgreementNumberFieldState(0, 'valid');
                    });
                }
            );

            dsanPub.deleteSocietyAgreementNumber(0);

            describe(
                'Ensure 15+ character long society agreement numbers ' +
                'are invalid', function () {
                    var number = '012345678912345';

                    describe('Check Creator-to-Publisher form', function () {
                        dsanCtp.enterSocietyAgreementNumber(0, 0, number);

                        dsanCtp.validateSocietyAgreementNumber(
                            0, 0, number.slice(0, 14)
                        );

                        dsanCtp.validateSocietyAgreementNumberFieldState(
                            0, 0, 'valid'
                        );
                    });

                    dsanCtp.deleteSocietyAgreementNumber(0, 0);

                    describe('Check Publisher form', function () {
                        dsanPub.enterSocietyAgreementNumber(0, number);

                        dsanPub.validateSocietyAgreementNumber(
                            0, number.slice(0, 14)
                        );

                        dsanPub.validateSocietyAgreementNumberFieldState(
                            0, 'valid'
                        );
                    });
                }
            );

            dsanPub.deleteSocietyAgreementNumber(0);

            describe(
                'Ensure alpha-numeric values are valid society agreement ' +
                'numbers', function () {
                    var number = '0A2B4C6D8E1F3G';

                    describe('Check Creator-to-Publisher form', function () {
                        dsanCtp.enterSocietyAgreementNumber(0, 0, number);

                        dsanCtp.validateSocietyAgreementNumber(0, 0, number);

                        dsanCtp.validateSocietyAgreementNumberFieldState(
                            0, 0, 'valid'
                        );
                    });

                    dsanCtp.deleteSocietyAgreementNumber(0, 0);

                    describe('Check Publisher form', function () {
                        dsanPub.enterSocietyAgreementNumber(0, number);

                        dsanPub.validateSocietyAgreementNumber(0, number);

                        dsanPub.validateSocietyAgreementNumberFieldState(0, 'valid');
                    });
                }
            );

            dsanPub.deleteSocietyAgreementNumber(0);

            describe(
                'Ensure non-alpha-numeric values are invalid society agreement ' +
                'numbers', function () {
                    var maskTable = {
                        '0123*5': '01235',
                        '012#45': '01245',
                        '01$345': '01345',
                        '0%2345': '02345'
                    };

                    _.each(maskTable, function (masked, number) {
                        dsanCtp.enterSocietyAgreementNumber(0, 0, number);

                        dsanCtp.validateSocietyAgreementNumber(0, 0, masked);

                        dsanCtp.validateSocietyAgreementNumberFieldState(
                            0, 0, 'valid'
                        );
                    });

                    dsanCtp.deleteSocietyAgreementNumber(0, 0);

                    _.each(maskTable, function (masked, number) {
                        dsanPub.enterSocietyAgreementNumber(0, number);

                        dsanPub.validateSocietyAgreementNumber(0, masked);

                        dsanPub.validateSocietyAgreementNumberFieldState(
                            0, 'valid'
                        );
                    });
                }
            );
        }
    }
];

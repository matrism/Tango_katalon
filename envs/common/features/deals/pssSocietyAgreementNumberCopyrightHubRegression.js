'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.id = '79651331-9d14-49cb-93ec-d14ef1618deb';

exports.commonFeatureTags = [
    'pssSocietyAgreementNumberCopyrightHubRegression',
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
        name: 'Ensure copyright hub organisations can be used as societies',

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            describe('Check Creator-to-Publisher society inputs', function () {
                dsanCtp.enterSocietySearchTerms(0, 0, 'ICE');
                dsanCtp.selectSocietySearchResultByName('ICE');

                dsanCtp.deleteSocietyAgreementNumber(0, 0);
            });

            describe('Check Creator-to-Publisher society inputs', function () {
                dsanPub.enterSocietySearchTerms(0, 'ICE');
                dsanPub.selectSocietySearchResultByName('ICE');
            });
        }
    }
];

'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.id = '70c38a23-4fe7-425d-baa9-06bd0c2222eb';

exports.commonFeatureTags = [
    'pssSocietyAgreementNumberNonCreatorsRegression',
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

                cdcp.enterActualStartDate(
                    moment().format('YYYY-MM-DD')
                );

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

                describe('Add PSS chain', function () {
                    cds.clickOnAddPublisherShareSet({
                        scrollIntoView: true
                    });

                    cds.selectPublisherRole(0, 0, 'E');

                    cds.enterPublisherSearchTerms(
                        0, 0, 'WARNER ALLIANCE MUSIC'
                    );

                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterOwnPublisherShare(0, 0, 100);

                    cds.enterPublisherSearchTerms(
                        0, 1, 'WB MUSIC CORP.'
                    );

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
        name: 'Create 1 person (non-creator)',

        tags: [],

        steps: function () {
            var p = steps.person,
                np = steps.newPerson;

            p.useBlankPersonSlot(0);

            np.goToNewPersonPage();

            np.makeCreator(false);

            if(systemConfig.env.name !== 'prod') {
                np.confirmMakingNonCreator(true);
            }

            np.enterLastName('TEST PERSON ' + randomId('person'));

            np.save();
        }
    },
    {
        name: (
            'Try to add Creator-To-Publisher Chain Society ' +
            'Agreement Number with non-creator'
        ),

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher;

            deal.openDealFromSlot('mainDeal');

            describe('Edit deal', function () {
                deal.clickFirstScopeHeader();

                deal.addSocietyAgreementNumbersToPssChain(0);

                dsanCtp.enterCreatorSearchTerms(
                    0, randomId('person')
                );

                dsanCtp.expectNoCreatorSearchResults();
            });
        }
    },
];

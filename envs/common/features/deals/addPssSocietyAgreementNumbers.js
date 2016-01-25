'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.commonFeatureTags = [
    'addPssSocietyAgreementNumbersRegression',
    'pssSocietyAgreementNumbers',
    'deals',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create person (creator)',

        tags: [],

        steps: function () {
            var p = steps.person,
                np = steps.newPerson;

            _.times(1, function (i) {
                p.useBlankPersonSlot(i);

                np.goToNewPersonPage();

                np.enterLastName(
                    'TEST PERSON ' + (i + 1) + ' ' + randomId('person' + i)
                );

                np.enterAffiliatedSocietySearchTerms('ASCAP');
                np.selectAffiliatedSocietySearchResultByIndex(0);

                np.save();

                p.findInternalIpiNumber();
            });
        }
    },
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

                describe('Add first PSS chain', function () {
                    cds.clickOnAddPublisherShareSet({
                        scrollIntoView: true
                    });

                    cds.selectPublisherRole(0, 0, 'E');

                    cds.enterPublisherSearchTerms(0, 0, 'WCM Publisher 1');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterOwnPublisherShare(0, 0, 100);

                    cds.enterPublisherSearchTerms(0, 1, 'WB MUSIC CORP.');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterCollectPublisherShare(0, 1, 50);
                });

                describe('Add second PSS chain', function () {
                    cds.clickAddChainLink();

                    cds.selectPublisherRole(1, 0, 'PA');

                    cds.enterPublisherSearchTerms(1, 0, 'WCM Publisher 1');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterCollectPublisherShare(1, 0, 50);

                    cds.enterPublisherSearchTerms(1, 1, 'WB MUSIC CORP.');
                    cds.selectPublisherSearchResultByIndex(0);
                });

                cds.saveSharePublisherShareSet();
            });

            describe(
                'Validate absence of "Add / View Society ' +
                'Agreement Numbers" links.', function () {
                    _.times(2, function (i) {
                        deal.validateSocietyAgreementNumbersLinkPresence(
                            i, 'add', false
                        );

                        deal.validateSocietyAgreementNumbersLinkPresence(
                            i, 'view', false
                        );
                    });
                }
            );

            describe('Save deal', function () {
                deal.itContinueToNextPage();

                deal.saveDeal();
                deal.waitForDealToBeSaved();

                deal.findId();
            });

            deal.clickFirstScopeHeader();

            describe(
                'Validate presence of "Add / View Society ' +
                'Agreement Numbers" links.', function () {
                    _.times(2, function (i) {
                        deal.validateSocietyAgreementNumbersLinkPresence(
                            i, 'add', true
                        );

                        deal.validateSocietyAgreementNumbersLinkPresence(
                            i, 'view', false
                        );
                    });
                }
            );

            describe('Add third PSS chain', function () {
                var eds = steps.editDealScope,
                    cds = steps.createDealScope;

                eds.editPublisherSharesSet();

                eds.editClickAddChainLink();

                // TODO: Using cds here because eds doesn't have these methods,
                // but cds ones happen to work in edit mode as well.
                cds.selectPublisherRole(2, 0, 'E');

                cds.enterPublisherSearchTerms(2, 0, 'WCM Publisher 1');
                cds.selectPublisherSearchResultByIndex(0);

                cds.enterOwnPublisherShare(0, 0, 50);
                cds.enterOwnPublisherShare(2, 0, 50);

                cds.enterPublisherSearchTerms(2, 1, 'WB MUSIC CORP.');
                cds.selectPublisherSearchResultByIndex(0);

                eds.editSaveTheChangesDealScope();
            });

            deal.validateSocietyAgreementNumbersLinkPresence(
                2, 'add', true
            );

            describe('Change third PSS chain publisher role', function () {
                var eds = steps.editDealScope,
                    cds = steps.createDealScope;

                eds.editPublisherSharesSet();

                // TODO: Using cds here because eds doesn't have these methods,
                // but cds ones happen to work in edit mode as well.
                cds.selectPublisherRole(2, 0, 'PA');

                cds.enterOwnPublisherShare(0, 0, 100);
                cds.enterCollectPublisherShare(1, 0, 25);
                cds.enterCollectPublisherShare(2, 0, 25);

                eds.editSaveTheChangesDealScope();
            });

            deal.validateSocietyAgreementNumbersLinkPresence(
                2, 'add', true
            );
        }
    },
    {
        name: 'Add Creator-To-Publisher Chain Society Agreement Numbers',

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            dsanCtp.enterCreatorSearchTerms(
                0, 'TEST PERSON 1 ' + randomId('person0')
            );

            dsanCtp.selectCreatorSearchResultByDisplayName(
                'TEST PERSON 1 ' + randomId('person0')
            );

            dsanCtp.enterSocietyAgreementNumber(0, 0, '12345678');

            dsanCtp.enterSocietySearchTerms(0, 0, 'ASCAP');
            dsanCtp.selectSocietySearchResultByName('ASCAP');

            dsan.save();

            deal.viewPssChainSocietyAgreementNumbers(0);

            dsanCtp.validateCreatorName(0, 'TEST PERSON 1 ' + randomId('person0'));
            dsanCtp.validateSocietyAgreementNumber(0, 0, '12345678');
            dsanCtp.validateSocietyName(0, 0, 'ASCAP');
        }
    }
];

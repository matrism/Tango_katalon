'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.id = 'cd147b35-bb5b-44cb-a359-3f20bf6c6922';

exports.commonFeatureTags = [
    'pssSocietyAgreementNumberFormValidationsRegression',
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
        name: (
            'Adding the same society twice to the same creator set is disallowed'
        ),

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            dsanCtp.enterSocietySearchTerms(0, 0, 'ASCAP');
            dsanCtp.selectSocietySearchResultByName('ASCAP');

            dsanCtp.enterSocietySearchTerms(0, 1, 'ASCAP');
            dsanCtp.expectSocietySearchResultToBeDisallowed('ASCAP');
            dsanCtp.selectSocietySearchResultByName('ASCAP');

            dsanCtp.validateSocietyName(0, 1, '');
        }
    },
    {
        name: (
            'Adding society agreement number to empty creator set makes ' +
            'the form invalid'
        ),

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            dsanCtp.validateCreatorSearchTermsFieldState(0, 'valid');

            dsanCtp.enterSocietyAgreementNumber(0, 0, '123');

            dsanCtp.validateCreatorSearchTermsFieldState(0, 'invalid');
        }
    },
    {
        name: (
            'Society field becomes required only when an ' +
            'agreement number is entered and vice-versa'
        ),

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            describe('Check Creator-to-Publisher form', function () {
                dsanCtp.validateSocietyFieldState(0, 0, 'valid');

                dsanCtp.enterSocietyAgreementNumber(0, 0, '123');

                dsanCtp.validateSocietyFieldState(0, 0, 'invalid');

                dsanCtp.deleteSocietyAgreementNumber(0, 0);

                dsanCtp.validateSocietyAgreementNumberFieldState(0, 0, 'valid');

                dsanCtp.enterSocietySearchTerms(0, 0, 'ASCAP');
                dsanCtp.selectSocietySearchResultByName('ASCAP');

                dsanCtp.validateSocietyAgreementNumberFieldState(0, 0, 'invalid');
            });

            dsanCtp.deleteSocietyAgreementNumber(0, 0);

            describe('Check Publisher form', function () {
                dsanPub.validateSocietyFieldState(0, 'valid');

                dsanPub.enterSocietyAgreementNumber(0, '123');

                dsanPub.validateSocietyFieldState(0, 'invalid');

                dsanPub.deleteSocietyAgreementNumber(0);

                dsanPub.validateSocietyAgreementNumberFieldState(0, 'valid');

                dsanPub.enterSocietySearchTerms(0, 'ASCAP');
                dsanPub.selectSocietySearchResultByName('ASCAP');

                dsanPub.validateSocietyAgreementNumberFieldState(0, 'invalid');
            });
        }
    },
    {
        name: 'Save button is disabled when either form is invalid',

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            describe('Check Creator-to-Publisher form', function () {
                dsanCtp.enterSocietyAgreementNumber(0, 0, '123');

                dsan.validateSaveButtonState('disabled');

                dsanCtp.deleteSocietyAgreementNumber(0, 0);

                dsan.validateSaveButtonState('enabled');
            });

            describe('Check Publisher form', function () {
                dsanPub.enterSocietyAgreementNumber(0, '123');

                dsan.validateSaveButtonState('disabled');

                dsanPub.deleteSocietyAgreementNumber(0);

                dsan.validateSaveButtonState('enabled');
            });
        }
    },
    {
        name: 'Create person (creator)',

        tags: [],

        steps: function () {
            var p = steps.person,
                np = steps.newPerson;

            p.useBlankPersonSlot(0);

            np.goToNewPersonPage();

            np.enterLastName(
                'TEST CREATOR ' + randomId('creator')
            );

            np.enterAffiliatedSocietySearchTerms('ASCAP');
            np.selectAffiliatedSocietySearchResultByIndex(0);

            np.save();
        }
    },
    {
        name: 'Creator sets with no society agreement numbers are valid',

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,
                dsanPub = dsan.publisher,

                creatorName = 'TEST CREATOR ' + randomId('creator');

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            describe('Edit deal', function () {
                dsanCtp.enterCreatorSearchTerms(0, creatorName);
                dsanCtp.selectCreatorSearchResultByDisplayName(creatorName);

                dsanCtp.validateSocietyAgreementNumberFieldState(0, 0, 'valid');

                dsan.save();
            });

            deal.viewPssChainSocietyAgreementNumbers(0);

            describe('Validate changes', function () {
                dsanCtp.findCreatorSet(creatorName, 'unused');
            });
        }
    }
];

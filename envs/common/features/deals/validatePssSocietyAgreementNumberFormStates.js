'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.commonFeatureTags = [
    'validatePssSocietyAgreementNumberFormStatesRegression',
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
            'Creator-to-Publisher chain form should be disabled ' +
            'when the other form is in invalid state'
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

            dsanCtp.validateFormState('enabled');

            _.times(2, function (i) {
                var societyName;

                dsanPub.enterSocietyAgreementNumber(i, '12345678');

                dsanCtp.validateFormState('disabled');

                societyName = ['ASCAP', 'BMI'][i];

                dsanPub.enterSocietySearchTerms(i, societyName);
                dsanPub.selectSocietySearchResultByName(societyName);

                dsanCtp.validateFormState('enabled');
            });
        }
    },
    {
        name: 'Create 2 people (creators)',

        tags: [],

        steps: function () {
            var p = steps.person,
                np = steps.newPerson;

            _.times(2, function (i) {
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
        name: (
            'Publisher chain form should be disabled ' +
            'when the other form is in invalid state'
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

            dsanPub.validateFormState('enabled');

            times(2, function (i, howMany) {
                var last = (i === howMany - 1);

                var societyName;

                dsanCtp.enterCreatorSearchTerms(i, randomId('person' + i));

                dsanCtp.selectCreatorSearchResultByDisplayName(
                    'TEST PERSON ' + (i + 1) + ' ' + randomId('person' + i)
                );

                dsanPub.validateFormState('enabled');

                dsanCtp.enterSocietyAgreementNumber(i, 0, '12345678');

                dsanPub.validateFormState('disabled');

                societyName = ['ASCAP', 'BMI'][i];

                dsanCtp.enterSocietySearchTerms(i, 0, societyName);
                dsanCtp.selectSocietySearchResultByName(societyName);

                dsanCtp.validateFormState('enabled');

                if(!last) {
                    dsanCtp.addCreator();
                }
            });
        }
    },
    {
        name: 'Society Agreement Number forms should be highlighted on focus',

        tags: [],

        steps: function () {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            describe('Check initial form states', function () {
                dsanCtp.validateFormState('inactive');
                dsanPub.validateFormState('inactive');
            });

            describe('Check Creator-to-Publisher form highlight', function () {
                dsanCtp.clickCreatorSearchTermsField(0);

                dsanCtp.validateFormState('active');
                dsanPub.validateFormState('inactive');
            });

            describe('Check Publisher form highlight', function () {
                dsanPub.clickSocietyAgreementNumberField(0, 0);

                dsanPub.validateFormState('active');
                dsanCtp.validateFormState('inactive');
            });
        }
    }
];

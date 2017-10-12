'use strict';

var randomId = random.id.makeMemoizedGenerator();

exports.id = 'fd4f34da-92bf-4cd4-8a0c-3e6b5b245dc0';

exports.commonFeatureTags = [
    'addPssSocietyAgreementNumbersRegression',
    'editPssSocietyAgreementNumbersRegression',
    'pssSocietyAgreementNumbersRegression',
    'pssSocietyAgreementNumbers',
    'deals',
    'regression',
    'power'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create deal',

        tags: [],

        steps: criticalScenario(() => {
            var base = steps.base,

                deal = steps.deal,
                cdg = steps.createDealGeneral;

            base.useBlankEntityDataSlot('deal', 'mainDeal');

            cdg.goToNewDealPage();

            describe('Fill general fields', function () {
                cdg.selectSigningTerritory('Argentina');

                //if(systemConfig.env.name === 'qa') {
                    cdg.fillCompanyCodeField('WCM');
                    cdg.waitForContractingPartyDropDown();
                    cdg.selectRandomCompanyCode();
                //}

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

                    cds.enterPublisherSearchTerms(0, 0, 'WARNER ALLIANCE MUSIC');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterOwnPublisherShare(0, 0, 100);

                    cds.enterPublisherSearchTerms(0, 1, 'WB MUSIC CORP.');
                    cds.selectPublisherSearchResultByIndex(0);

                    cds.enterCollectPublisherShare(0, 1, 50);
                });

                describe('Add second PSS chain', function () {
                    cds.clickAddChainLink();

                    cds.selectPublisherRole(1, 0, 'PA');

                    cds.enterPublisherSearchTerms(1, 0, 'WARNER ALLIANCE MUSIC');
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
        })
    },
    {
        name: 'Validate presence of "Add / View Society Agreement Numbers" links',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            _.times(2, function (i) {
                deal.validateSocietyAgreementNumbersLinkPresence(
                    i, 'add', true
                );

                deal.validateSocietyAgreementNumbersLinkPresence(
                    i, 'view', false
                );
            });
        })
    },
    {
        name: 'Validate "Add / View Society Agreement Numbers" links on deal edit',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            describe('Add third PSS chain', function () {
                var eds = steps.editDealScope,
                    cds = steps.createDealScope;

                eds.editPublisherSharesSet();

                eds.editClickAddChainLink();

                // TODO: Using cds here because eds doesn't have these methods,
                // but cds ones happen to work in edit mode as well.
                cds.selectPublisherRole(2, 0, 'E');

                cds.enterPublisherSearchTerms(2, 0, 'WARNER ALLIANCE MUSIC');
                cds.selectPublisherSearchResultByIndex(0);

                cds.enterOwnPublisherShare(0, 0, 50);
                cds.enterOwnPublisherShare(2, 0, 50);

                cds.enterPublisherSearchTerms(2, 1, 'WB MUSIC CORP.');
                cds.selectPublisherSearchResultByIndex(0);

                eds.editSaveThePublisherShareSet();
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

                eds.editSaveThePublisherShareSet();
            });

            deal.validateSocietyAgreementNumbersLinkPresence(
                2, 'add', true
            );
        })
    },
    {
        name: (
            'Society agreement numbers save button should be disabled by default'
        ),

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,
                dsan = steps.dealSocietyAgreementNumbers;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.addSocietyAgreementNumbersToPssChain(0);

            dsan.validateSaveButtonState('disabled');
        })
    },
    {
        name: 'Create 5 people (creators)',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var p = steps.person,
                np = steps.newPerson;

            _.times(5, function (i) {
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
        })
    },
    {
        name: 'Add Creator-To-Publisher Chain Society Agreement Numbers',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher;

            deal.openDealFromSlot('mainDeal');

            describe('Edit deal', function () {
                deal.clickFirstScopeHeader();

                deal.addSocietyAgreementNumbersToPssChain(0);

                dsanCtp.validateAddCreatorLinkState('disabled');

                dsanCtp.focus();

                dsanCtp.validateAddCreatorLinkState('disabled');

                times(3, function (i, howMany) {
                    var last = (i === howMany - 1);

                    dsanCtp.enterCreatorSearchTerms(i, randomId('person' + i));

                    dsanCtp.selectCreatorSearchResultByDisplayName(
                        'TEST PERSON ' + (i + 1) + ' ' + randomId('person' + i)
                    );

                    dsanCtp.validateAddCreatorLinkState('enabled');

                    _.times(2, function (j) {
                        var societyName;

                        dsanCtp.enterSocietyAgreementNumber(i, j, ('12345' + i) + j);

                        //dsanCtp.validateAddCreatorLinkState('disabled');

                        societyName = ['ASCAP', 'BMI'][j];

                        dsanCtp.enterSocietySearchTerms(i, j, societyName);
                        dsanCtp.selectSocietySearchResultByName(societyName);

                        dsanCtp.validateAddCreatorLinkState('enabled');
                    });

                    if(!last) {
                        dsanCtp.addCreator();
                    }
                });

                dsan.save();
            });

            describe('Validate changes', function () {
                deal.viewPssChainSocietyAgreementNumbers(0);

                dsanCtp.validateCreatorRowCount(3);

                _.times(3, function (i) {
                    var iSet = fromTestVariable('found set index');

                    dsanCtp.findCreatorSet(
                        'TEST PERSON ' + (i + 1) + ' ' + randomId('person' + i),
                        'found set index'
                    );

                    _.times(2, function (j) {
                        var societyName;

                        dsanCtp.validateSocietyAgreementNumber(
                            iSet, j, ('12345' + i) + j
                        );

                        societyName = ['ASCAP', 'BMI'][j];

                        dsanCtp.validateSocietyName(iSet, j, societyName);
                    });
                });
            });
        })
    },
    {
        name: 'Edit Creator-To-Publisher Chain Society Agreement Numbers',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.viewPssChainSocietyAgreementNumbers(0);

            describe('Edit creator set', function () {
                dsanCtp.enterCreatorSearchTerms(0, randomId('person3'));

                dsanCtp.selectCreatorSearchResultByDisplayName(
                    'TEST PERSON 4 ' + randomId('person3')
                );

                describe('Edit society agreement numbers', function () {
                    _.times(2, function (j) {
                        var societyName;

                        dsanCtp.enterSocietyAgreementNumber(0, j, ('223450') + j);

                        societyName = ['AWA', 'ASCAP'][j];

                        dsanCtp.enterSocietySearchTerms(0, j, societyName);
                        dsanCtp.selectSocietySearchResultByName(societyName);
                    });
                });

                describe('Add a new society agreement number', function () {
                    dsanCtp.enterSocietyAgreementNumber(0, 2, '2234502');

                    dsanCtp.enterSocietySearchTerms(0, 2, 'BMI');
                    dsanCtp.selectSocietySearchResultByName('BMI');
                });
            });

            describe('Add a new creator set', function () {
                dsanCtp.addCreator();

                dsanCtp.enterCreatorSearchTerms(3, randomId('person4'));

                dsanCtp.selectCreatorSearchResultByDisplayName(
                    'TEST PERSON 5 ' + randomId('person4')
                );

                _.times(2, function (j) {
                    var societyName;

                    dsanCtp.enterSocietyAgreementNumber(3, j, '223453' + j);

                    societyName = ['AWA', 'ASCAP'][j];

                    dsanCtp.enterSocietySearchTerms(3, j, societyName);
                    dsanCtp.selectSocietySearchResultByName(societyName);
                });
            });
            steps.base.sleep(1000);
            dsan.save();

            deal.viewPssChainSocietyAgreementNumbers(0);

            dsanCtp.validateCreatorRowCount(4);

            describe('Validate edited creator set', function () {
                var iSet = fromTestVariable('found set index');

                // TODO: Also validate absence of the overwritten creator name.
                dsanCtp.findCreatorSet(
                    'TEST PERSON 4 ' + randomId('person3'), 'found set index'
                );

                describe(
                    'Validate edited society agreement numbers', function () {
                        _.times(2, function (j) {
                            var societyName;

                            dsanCtp.validateSocietyAgreementNumber(
                                iSet, j, '223450' + j
                            );

                            societyName = ['AWA', 'ASCAP'][j];

                            dsanCtp.validateSocietyName(iSet, j, societyName);
                        });
                    }
                );

                describe(
                    'Validate newly added society agreement number', function () {
                        dsanCtp.validateSocietyAgreementNumber(
                            iSet, 2, '2234502'
                        );

                        dsanCtp.validateSocietyName(iSet, 2, 'BMI');
                    }
                );
            });

            describe('Validate newly added creator set', function () {
                var iSet = fromTestVariable('found set index');

                dsanCtp.findCreatorSet(
                    'TEST PERSON 5 ' + randomId('person4'), 'found set index'
                );

                _.times(2, function (j) {
                    var societyName;

                    dsanCtp.validateSocietyAgreementNumber(
                        iSet, j, '223453' + j
                    );

                    societyName = ['AWA', 'ASCAP'][j];

                    dsanCtp.validateSocietyName(iSet, j, societyName);
                });
            });
        })
    },
    {
        name: 'Delete Creator-To-Publisher Chain Society Agreement Numbers',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanCtp = dsan.creatorToPublisher,

                iSet = fromTestVariable('found set index');

            deal.openDealFromSlot('mainDeal');

            steps.base.sleep(2000);

            deal.clickFirstScopeHeader();

            deal.viewPssChainSocietyAgreementNumbers(0);

            dsanCtp.validateAddCreatorLinkState('disabled');

            dsanCtp.focus();

            dsanCtp.validateAddCreatorLinkState('enabled');

            describe('Delete first 3 creator sets', function () {
                _.each([ 3, 1, 2 ], function (iPerson) {
                    dsanCtp.findCreatorSet(
                        'TEST PERSON ' + (iPerson + 1) + ' ' +
                        randomId('person' + iPerson), 'found set index'
                    );
                    steps.base.sleep(5000);
                    dsanCtp.deleteCreator(iSet);
                    //dsanCtp.deleteCreator(0);
                    steps.base.sleep(3000);
                });
            });

            dsanCtp.validateAddCreatorLinkState('enabled');

            //revisit this part

            describe(
                'Delete 1 society agreement number from remaining creator set',
                function () {
                    dsanCtp.findCreatorSet(
                        'TEST PERSON 5 ' + randomId('person4'), 0
                    );
                    steps.base.sleep(3000);
                    //dsanCtp.deleteSocietyAgreementNumber(iSet, 0);
                    dsanCtp.deleteSocietyAgreementNumber(0, 0);

                }
            );

            dsanCtp.validateAddCreatorLinkState('enabled');

            dsan.save();

            deal.viewPssChainSocietyAgreementNumbers(0);

            dsanCtp.validateCreatorRowCount(1);

            describe('Validate remaining creator set', function () {
                dsanCtp.findCreatorSet(
                    'TEST PERSON 5 ' + randomId('person4'), 'found set index'
                );

                dsanCtp.validateSocietyAgreementNumber(iSet, 0, '2234530');

                dsanCtp.validateSocietyName(iSet, 0, 'AWA');
            });
        })
    },
    {
        name: 'Add Publisher Chain Society Agreement Numbers',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanPub = dsan.publisher,

                societyNames = ['ASCAP', 'BMI'];

            deal.openDealFromSlot('mainDeal');

            describe('Edit deal', function () {
                deal.clickFirstScopeHeader();

                deal.addSocietyAgreementNumbersToPssChain(1);

                societyNames.forEach(function (societyName, i) {
                    dsanPub.enterSocietyAgreementNumber(i, '123456' + i);

                    dsanPub.enterSocietySearchTerms(i, societyName);
                    dsanPub.selectSocietySearchResultByName(societyName);
                });

                dsan.save();
            });

            describe('Validate changes', function () {
                deal.viewPssChainSocietyAgreementNumbers(1);

                dsanPub.validateSocietyAgreementNumberRowCount(2);

                societyNames.forEach(function (societyName, i) {
                    dsanPub.validateSocietyAgreementNumber(i, '123456' + i);

                    dsanPub.validateSocietyName(i, societyName);
                });
            });
        })
    },
    {
        name: 'Edit Publisher Chain Society Agreement Numbers',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');


            deal.clickFirstScopeHeader();

            deal.viewPssChainSocietyAgreementNumbers(1);

            describe('Edit society agreement number', function () {
                dsanPub.enterSocietyAgreementNumber(0, '2234560');

                dsanPub.enterSocietySearchTerms(0, 'AWA');
                dsanPub.selectSocietySearchResultByName('AWA');
            });

            describe('Add a new society agreement number', function () {
                dsanPub.enterSocietyAgreementNumber(2, '2234562');

                dsanPub.enterSocietySearchTerms(2, 'ICE');
                dsanPub.selectSocietySearchResultByName('ICE');
            });

            dsan.save();

            deal.viewPssChainSocietyAgreementNumbers(1);

            dsanPub.validateSocietyAgreementNumberRowCount(3);

            describe('Validate edited society agreement number', function () {
                dsanPub.validateSocietyAgreementNumber(0, '2234560');

                dsanPub.validateSocietyName(0, 'AWA');
            });

            describe('Validate newly added society agreement number', function () {
                dsanPub.validateSocietyAgreementNumber(2, '2234562');

                dsanPub.validateSocietyName(2, 'ICE');
            });
        })
    },
    {
        name: 'Delete Publisher Chain Society Agreement Numbers',

        tags: [],

        //steps: function () {
        steps: criticalScenario(() => {
            var deal = steps.deal,

                dsan = steps.dealSocietyAgreementNumbers,
                dsanPub = dsan.publisher;

            deal.openDealFromSlot('mainDeal');

            deal.clickFirstScopeHeader();

            deal.viewPssChainSocietyAgreementNumbers(1);

            describe('Delete first 2 society agreement numbers', function () {
                _.times(2, function (i) {
                    dsanPub.deleteSocietyAgreementNumber(0);
                    steps.base.sleep(2000);
                });
            });

            dsan.save();

            deal.viewPssChainSocietyAgreementNumbers(1);

            dsanPub.validateSocietyAgreementNumberRowCount(1);

            describe('Validate remaining society agreement number', function () {
                dsanPub.validateSocietyAgreementNumber(0, '2234562');

                dsanPub.validateSocietyName(0, 'ICE');
            });
        })
    }
];

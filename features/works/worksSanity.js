'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    leftPad = require('left-pad'),
    moment = require('moment'),
    random = require('../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'person/person');
require(steps_path + 'person/newPerson');
require(steps_path + 'works/work');
require(steps_path + 'works/newWork');
require(steps_path + 'deals/dealRtp');
require(steps_path + 'deals/deal');
require(steps_path + 'deals/createContractPeriod');
require(steps_path + 'deals/createScope');
require(steps_path + 'works/newWorkRecordings');
require(steps_path + 'works/workRecordings');
require(steps_path + 'works/newWorkCopyrightCertificates');
require(steps_path + 'works/workCopyrightCertificates');
require(steps_path + 'deals/scopeDelivery');
require(steps_path + 'works/workRights');
require(steps_path + 'works/workRegistrationActivity');
require(steps_path + 'works/workCwrPreview');

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.commonFeatureTags = ['works', 'sanity'];

exports.feature = [
    {
        name: 'Create 3 persons to use as creators',
        tags: [
            'works-sanity-create-persons',
            'works-sanity-create-work',
            'works-sanity-validate-work',
            'works-sanity-create-composite-works',
            'works-sanity-validate-composite-works',
            'works-sanity-create-cos',
            'works-sanity-validate-cos',
            'works-sanity-search-for-works',
            'works-sanity-search-for-works-by-id',
            'works-sanity-search-for-works-by-song-code',
            'works-sanity-search-for-works-by-primary-title',
            'works-sanity-search-for-works-by-alternate-title',
            'works-sanity-search-for-works-by-creator-presentation-name',
            'works-sanity-search-for-works-by-primary-title-and-creator-presentation-name',
            'works-sanity-scope-delivery',
            'works-sanity-generate-work-rights',
            'works-sanity-validate-work-rights',
            'works-sanity-validate-registration-activity',
            'works-sanity-validate-cwr',
        ],
        steps: function () {
            _.times(3, function (i) {
                steps.person.useBlankPersonSlot(i);

                steps.newPerson.goToNewPersonPage();

                steps.newPerson.enterLastName(
                    'TEST PERSON ' + (i + 1) + ' ' + randomId('person' + i)
                );

                steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
                steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);

                steps.newPerson.save();

                steps.person.findInternalIpiNumber();
            });
        },
    },
    {
        name: 'Create work with 2 creators',
        tags: [
            'works-sanity-create-work',
            'works-sanity-validate-work',
            'works-sanity-search-for-works',
            'works-sanity-search-for-works-by-id',
            'works-sanity-search-for-works-by-song-code',
            'works-sanity-search-for-works-by-primary-title',
            'works-sanity-search-for-works-by-alternate-title',
            'works-sanity-search-for-works-by-creator-presentation-name',
            'works-sanity-search-for-works-by-primary-title-and-creator-presentation-name',
            'works-sanity-scope-delivery',
            'works-sanity-generate-work-rights',
            'works-sanity-validate-work-rights',
            'works-sanity-validate-registration-activity',
            'works-sanity-validate-cwr',
        ],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 'mainWork']],

            [steps.new_work.goToNewWorkPage],

            [steps.new_work.enterPrimaryWorkTitle, [
                'TEST WORK ' + randomId('mainWork'),
            ]],

            [steps.new_work.enterAlternateWorkTitle, [
                0, 'TEST WORK ALTERNATE TITLE ' + randomId('mainWork'),
            ]],

            [steps.new_work.selectCreatorFromPersonSlot, [0, 0]],
            [steps.new_work.enterCreatorContribution, [0, 50]],

            [steps.new_work.selectCreatorFromPersonSlot, [1, 1]],
            [steps.new_work.enterCreatorContribution, [1, 50]],

            [steps.new_work.selectRandomMusicalDistributionCategory],
            [steps.new_work.selectRandomTextMusicRelationship],
            [steps.new_work.selectRandomExcerptType],
            [steps.new_work.selectRandomVersionType],
            [steps.new_work.selectRandomLyricAdaptation],
            [steps.new_work.selectRandomMusicArrangement],

            [steps.new_work.optToIncludeWorkOnWebsite, [false]],

            [steps.new_work.continueToNextTab],

            [function () {
                _.times(3, function (i) {
                    steps.newWorkRecordings.clickRecordingNameField(i);
                    steps.newWorkRecordings.selectRecordingNameSuggestionByIndex(i);

                    steps.newWorkRecordings.enterArtistName(
                        i, 'TEST ARTIST ' + randomId('mainWorkArtist' + i)
                    );

                    steps.newWorkRecordings.createEnteredArtist();

                    steps.newWorkRecordings.enterRecordingDuration(
                        i, '00' + leftPad(i + 1, 2, 0) + '00'
                    );
                });
            }],

            [steps.new_work.continueToNextTab],

            [function () {
                _.times(4, function (i) {
                    steps.newWorkCopyrightCertificates.enterUsLibraryOfCongressNumber(
                        i, 'TEST ' + randomId('copyrightNumber' + i)
                    );

                    steps.newWorkCopyrightCertificates.enterRegistrationDate(
                        i, '2015-03-12'
                    );

                    steps.newWorkCopyrightCertificates.enterSubmittedDate(
                        i, '2015-06-12'
                    );
                });
            }],

            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.work.findCurrentlyOpenWorkId],
        ],
    },
    {
        name: 'Validate created work data',
        tags: [
            'works-sanity-validate-work',
        ],
        steps: [
            [steps.base.useEntityDataSlot, ['work', 'mainWork']],

            [steps.work.goToWorkPage],

            [steps.work.validatePrimaryWorkTitle, [
                'TEST WORK ' + randomId('mainWork'),
            ]],

            [steps.work.validateMusicalDistributionCategory],
            [steps.work.validateTextMusicRelationship],
            [steps.work.validateExcerptType],
            [steps.work.validateVersionType],
            [steps.work.validateLyricAdaptation],
            [steps.work.validateMusicArrangement],

            [function () {
                steps.workCopyrightCertificates.validateUsLibraryOfCongressNumbers(
                    _.times(4, function (i) {
                        return 'TEST ' + randomId('copyrightNumber' + i);
                    })
                );

                steps.workCopyrightCertificates.validateRegistrationDates(
                    _.times(4, function () {
                        return '2015 03 12';
                    })
                );

                steps.workCopyrightCertificates.validateSubmittedDates(
                    _.times(4, function () {
                        return '2015 06 12';
                    })
                );
            }],

            [steps.work.validateIncludeWorkOnWebsite, [false]],

            [steps.work.goToScopeDeliveryTab],
            [steps.work.validateSubjectCreatorNames, [2]],
            [steps.work.validateSubjectCreatorContributions, [2]],

            [steps.work.goToRecordingsTab],

            [function () {
                steps.workRecordings.validateRecordingNames(
                    _.times(3, function () {
                        return 'TEST WORK ' + randomId('mainWork');
                    })
                );

                steps.workRecordings.validateArtistNames(
                    _.times(3, function (i) {
                        return 'TEST ARTIST ' + randomId('mainWorkArtist' + i);
                    })
                );

                steps.workRecordings.validateRecordingDurations(
                    _.times(3, function (i) {
                        return '00 : ' + leftPad(i + 1, 2, 0) + ' : 00';
                    })
                );
            }],
        ],
    },
    {
        name: 'Create 2 basic works to use as components',
        tags: [
            'works-sanity-create-component-works',
            'works-sanity-create-composite-works',
            'works-sanity-validate-composite-works',
            'works-sanity-create-cos',
            'works-sanity-validate-cos',
            'works-sanity-create-med',
            'works-sanity-validate-med',
            'works-sanity-search-for-works',
            'works-sanity-search-for-works-by-id',
            'works-sanity-search-for-works-by-song-code',
            'works-sanity-search-for-works-by-primary-title',
            'works-sanity-search-for-works-by-alternate-title',
            'works-sanity-search-for-works-by-creator-presentation-name',
            'works-sanity-search-for-works-by-primary-title-and-creator-presentation-name',
        ],
        steps: [
            [function () {
                _.times(2, function (i) {
                    steps.base.useBlankEntityDataSlot('work', 'component' + i);

                    steps.new_work.goToNewWorkPage();

                    steps.new_work.enterPrimaryWorkTitle(
                        'TEST COMPONENT ' + randomId('component' + i)
                    );

                    steps.new_work.selectRandomCreator(0);
                    steps.new_work.enterCreatorContribution(0, 100);

                    steps.new_work.optToIncludeWorkOnWebsite(false);

                    steps.new_work.saveWork();
                    steps.new_work.validateSaveWorkRedirection();
                });
            }],
        ],
    },
    {
        name: 'Create a Composite of Samples',
        tags: [
            'works-sanity-create-cos',
            'works-sanity-validate-cos',
            'works-sanity-create-composite-works',
            'works-sanity-validate-composite-works',
            'works-sanity-search-for-works',
            'works-sanity-search-for-works-by-id',
            'works-sanity-search-for-works-by-song-code',
            'works-sanity-search-for-works-by-primary-title',
            'works-sanity-search-for-works-by-alternate-title',
            'works-sanity-search-for-works-by-creator-presentation-name',
            'works-sanity-search-for-works-by-primary-title-and-creator-presentation-name',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'cosWork');

            steps.new_work.goToNewWorkPage();

            steps.new_work.enterPrimaryWorkTitle(
                'TEST COS WORK ' + randomId('cosWork')
            );

            steps.new_work.enterAlternateWorkTitle(
                0, 'TEST COS WORK ALTERNATE TITLE ' + randomId('cosWork')
            );

            steps.new_work.validateDefaultCompositeWorkCheckboxState();
            steps.new_work.clickCompositeWorkCheckbox();

            steps.new_work.selectCompositeWorkType('Composite of Samples');

            steps.new_work.selectCreatorFromPersonSlot(0, 2);
            steps.new_work.enterCreatorContribution(0, 50);

            steps.new_work.selectFirstComponentWorkMatching(
                0, 'TEST COMPONENT ' + randomId('component1')
            );

            steps.new_work.enterComponentWorkAllocation(0, 50);

            steps.new_work.optToIncludeWorkOnWebsite(false);

            steps.new_work.saveWork();
            steps.new_work.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();
        },
    },
    {
        name: 'Validate created Composite of Samples',
        tags: [
            'works-sanity-validate-cos',
            'works-sanity-validate-composite-works',
        ],
        steps: [
            [steps.base.useEntityDataSlot, ['work', 'cosWork']],

            [steps.work.goToWorkPage],

            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],

            [steps.work.validateCompositeWorkType],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
        ],
    },
    {
        name: 'Create a Medley',
        tags: [
            'works-sanity-create-med',
            'works-sanity-validate-med',
            'works-sanity-create-composite-works',
            'works-sanity-validate-composite-works',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'medWork');

            steps.new_work.goToNewWorkPage();

            steps.new_work.enterPrimaryWorkTitle(
                'TEST MED WORK ' + randomId('medWork')
            );

            steps.new_work.enterAlternateWorkTitle(
                0, 'TEST MED WORK ALTERNATE TITLE ' + randomId('medWork')
            );

            steps.new_work.validateDefaultCompositeWorkCheckboxState();
            steps.new_work.clickCompositeWorkCheckbox();

            steps.new_work.selectCompositeWorkType('Medley');

            steps.new_work.selectFirstComponentWorkMatching(
                0, 'TEST COMPONENT ' + randomId('component0')
            );

            steps.new_work.enterComponentWorkAllocation(0, 50);

            steps.new_work.selectFirstComponentWorkMatching(
                1, 'TEST COMPONENT ' + randomId('component1')
            );

            steps.new_work.enterComponentWorkAllocation(1, 50);

            steps.new_work.optToIncludeWorkOnWebsite(false);

            steps.new_work.saveWork();
            steps.new_work.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();
        },
    },
    {
        name: 'Validate created Medley',
        tags: [
            'works-sanity-validate-med',
            'works-sanity-validate-composite-works',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'medWork');

            steps.work.goToWorkPage();

            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();

            steps.work.validateCompositeWorkType();

            _.times(2, function (i) {
                steps.work.validateComponentWorkName(i);
                steps.work.validateComponentWorkAllocation(i);
            });
        },
    },
    {
        name: 'Search for 2 previously created works by work ID',
        tags: [
            'works-sanity-search-for-works-by-id',
            'works-sanity-search-for-works',
        ],
        steps: function () {
            ['mainWork', 'cosWork'].forEach(function (workSlotId) {
                steps.base.useEntityDataSlot('work', workSlotId);

                steps.searchSection.selectEntityType('Works');

                steps.work.selectWorkSearchFilterTag(0, 'Work ID');

                steps.work.searchForWorkUsingPreviouslyCreatedWorkId();

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.expectWorkSearchMatchCountToBe(1);

                steps.work.clickWorkSearchMatch(0);

                steps.base.waitForAjax();

                steps.work.validateWorkId();
            });
        },
    },
    {
        name: 'Search for 2 previously created works by song code',
        tags: [
            'works-sanity-search-for-works-by-song-code',
            'works-sanity-search-for-works',
        ],
        steps: function () {
            ['mainWork', 'cosWork'].forEach(function (workSlotId) {
                steps.base.useEntityDataSlot('work', workSlotId);

                steps.searchSection.selectEntityType('Works');

                steps.work.selectWorkSearchFilterTag(0, 'Work ID');

                steps.work.searchForWorkUsingPreviouslyCreatedSongCode();

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.expectWorkSearchMatchCountToBe(1);

                steps.work.clickWorkSearchMatch(0);

                steps.base.waitForAjax();

                steps.work.validateWorkId();
            });
        },
    },
    {
        name: 'Search for 2 previously created works by primary title',
        tags: [
            'works-sanity-search-for-works-by-primary-title',
            'works-sanity-search-for-works',
        ],
        steps: function () {
            ['mainWork', 'cosWork'].forEach(function (workSlotId) {
                steps.base.useEntityDataSlot('work', workSlotId);

                steps.searchSection.selectEntityType('Works');

                steps.work.selectWorkSearchFilterTag(0, 'Title');

                steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle();

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.expectWorkSearchMatchCountToBe(1);

                steps.work.clickWorkSearchMatch(0);

                steps.base.waitForAjax();

                steps.work.validateWorkId();
            });
        },
    },
    {
        name: 'Search for 2 previously created works by alternate title',
        tags: [
            'works-sanity-search-for-works-by-alternate-title',
            'works-sanity-search-for-works',
        ],
        steps: function () {
            ['mainWork', 'cosWork'].forEach(function (workSlotId) {
                steps.base.useEntityDataSlot('work', workSlotId);

                steps.searchSection.selectEntityType('Works');

                steps.work.selectWorkSearchFilterTag(0, 'Title');

                steps.work.searchForWorkUsingPreviouslyEnteredAlternateTitle(0);

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.expectWorkSearchMatchCountToBe(1);

                steps.work.clickWorkSearchMatch(0);

                steps.base.waitForAjax();

                steps.work.validateWorkId();
            });
        },
    },
    {
        name: 'Search for 2 previously created works by creator presentation name',
        tags: [
            'works-sanity-search-for-works-by-creator-presentation-name',
            'works-sanity-search-for-works',
        ],
        steps: function () {
            ['mainWork', 'cosWork'].forEach(function (workSlotId) {
                steps.base.useEntityDataSlot('work', workSlotId);

                steps.searchSection.selectEntityType('Works');

                steps.work.selectWorkSearchFilterTag(0, 'Creator');

                steps.work.searchForWorkUsingPreviouslySelectedCreatorName(0);

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.expectWorkSearchMatchCountToBe(1);

                steps.work.clickWorkSearchMatch(0);

                steps.base.waitForAjax();

                steps.work.validateWorkId();
            });
        },
    },
    {
        name: 'Search for 2 previously created works by primary title + creator presentation name',
        tags: [
            'works-sanity-search-for-works-by-primary-title-and-creator-presentation-name',
            'works-sanity-search-for-works',
        ],
        steps: function () {
            ['mainWork', 'cosWork'].forEach(function (workSlotId) {
                steps.base.useEntityDataSlot('work', workSlotId);

                steps.searchSection.selectEntityType('Works');

                steps.work.selectWorkSearchFilterTag(0, 'Title');

                steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle(0);

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.addAnotherWorkSearchTerm();

                steps.work.selectWorkSearchFilterTag(1, 'Creator');

                steps.work.searchForWorkUsingPreviouslySelectedCreatorName(0);

                steps.base.sleep(200);
                steps.base.waitForAjax();

                steps.work.expectWorkSearchMatchCountToBe(1);

                steps.work.clickWorkSearchMatch(0);

                steps.base.waitForAjax();

                steps.work.validateWorkId();
            });
        },
    },
    {
        name: 'Create deal with 2 scopes and publisher shares',
        tags: [
            'works-sanity-create-deal',
            'works-sanity-scope-delivery',
            'works-sanity-generate-work-rights',
            'works-sanity-validate-work-rights',
            'works-sanity-validate-registration-activity',
            'works-sanity-validate-cwr',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('deal', 'mainDeal');

            steps.createDealGeneral.goToNewDealPage();

            steps.createDealGeneral.selectDesiredSigningTerritory('Argentina');

            steps.createDealGeneral.enterContractingPartySearchTerms('ASCAP');

            steps.createDealGeneral.selectContractingPartySearchResultByIndex(0);

            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.enterActualStartDate(
                moment().format('YYYY-MM-DD')
            );

            steps.createDealContractPeriod.enterTargetEndDateInMonths(12);

            _.times(2, function () {
                steps.createDealScope.openNewScopeForm();

                steps.createDealScope.selectContractType('Administration');

                steps.createDealScope.enterTerritoryOfControlSearchTerms(
                    'Brazil'
                );

                steps.createDealScope.selectTerritoryOfControlSearchResultByIndex(0);

                steps.createDealScope.clickOnAddPublisherShareSet({
                    scrollIntoView: true,
                });

                steps.createDealScope.enterPublisherSearchTerms(
                    0, 0, 'WCM Publisher 1'
                );

                steps.createDealScope.selectPublisherSearchResultByIndex(0);

                steps.createDealScope.enterOwnPublisherShare(0, 0, 100);

                steps.createDealScope.enterPublisherSearchTerms(
                    0, 1, 'WB MUSIC CORP.'
                );

                steps.createDealScope.selectPublisherSearchResultByIndex(0);

                steps.createDealScope.enterCollectPublisherShare(0, 1, 100);
            });

            steps.deal.itContinueToNextPage();

            steps.dealRtp.clickAcquisitionPeriodScopesField(0);

            steps.dealRtp.selectAllSuggestedAcquisitionPeriodScopes(0);

            steps.dealRtp.applyAcquisitionPeriodScopeChanges(0);

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();

            steps.deal.findId();
        },
    },
    {
        name: 'Deliver scopes to previously created work',
        tags: [
            'works-sanity-scope-delivery',
            'works-sanity-generate-work-rights',
            'works-sanity-validate-work-rights',
            'works-sanity-validate-registration-activity',
            'works-sanity-validate-cwr',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            steps.work.goToWorkPage();

            steps.work.goToScopeDeliveryTab();

            steps.scopeDelivery.deliverWork();

            steps.scopeDelivery.searchForDealFromDealSlotForAllContributions(
                'mainDeal'
            );

            steps.scopeDelivery.selectDealSearchResultByIndex(0);

            _.times(2, function (i) {
                steps.scopeDelivery.clickScopeDeliveryCheckbox(i, i);
            });

            steps.scopeDelivery.save();

            steps.base.refreshPage();

            _.times(2, function (i) {
                steps.scopeDelivery.validateContributionDealIdFromDealSlot(
                    i, 'mainDeal'
                );

                steps.scopeDelivery.validateContributionScopeName(
                    i, 'Scope ' + (i + 1)
                );
            });
        },
    },
    {
        name: 'Generate and validate work rights',
        tags: [
            'works-sanity-generate-work-rights',
            'works-sanity-validate-work-rights',
            'works-sanity-validate-registration-activity',
            'works-sanity-validate-cwr',
        ],
        steps: function () {
            var creatorRightsData = [
                    {
                        row: 0,
                        nameFromPersonSlot: 0,
                        societies: ['ASCAP'],
                    },
                    {
                        row: 4,
                        nameFromPersonSlot: 1,
                        societies: ['ASCAP'],
                    },
            ],
                publisherRightsData = [
                    {
                        row: 1,
                        role: 'E',
                        name: 'WCM Publisher 1',
                        societies: [],
                        shares: ['25.000', '–', '50.000', '–', '50.000'],
                    },
                    {
                        row: 2,
                        role: 'AM',
                        name: 'WB MUSIC CORP.',
                        societies: ['BMI'],
                        shares: ['–', '–', '–', '–', '–'],
                    },
                    {
                        row: 3,
                        role: 'SE',
                        name: 'WARNER/CHAPPELL EDICOES MUSICAIS LTDA',
                        societies: ['ABRAMUS'],
                        shares: ['–', '25.000', '–', '50.000', '–'],
                    },
                    {
                        row: 5,
                        role: 'E',
                        name: 'WCM Publisher 1',
                        societies: [],
                        shares: ['25.000', '–', '50.000', '–', '50.000'],
                    },
                    {
                        row: 6,
                        role: 'AM',
                        name: 'WB MUSIC CORP.',
                        societies: ['BMI'],
                        shares: ['–', '–', '–', '–', '–'],
                    },
                    {
                        row: 7,
                        role: 'SE',
                        name: 'WARNER/CHAPPELL EDICOES MUSICAIS LTDA',
                        societies: ['ABRAMUS'],
                        shares: ['–', '25.000', '–', '50.000', '–'],
                    },
                ];

            steps.base.useEntityDataSlot('work', 'mainWork');

            steps.work.goToWorkPage();

            steps.work.goToRightsTab();

            steps.workRights.validateSigningTerritoryCode(0, 'AR');

            steps.workRights.validateControlTerritories(0, ['Brazil']);

            steps.workRights.validateSharesSummary(
                0, ['100.000', '50.000', '100.000', '100.000', '100.000']
            );

            steps.workRights.toggleRightsGroupContainer(0);

            steps.workRights.validateCreatorRole(0, 0, 'CA');

            creatorRightsData.forEach(function (creator) {
                steps.workRights.validateCreatorRole(0, creator.row, 'CA');

                steps.workRights.validateCreatorNameUsingPersonSlot(
                    0, creator.row, creator.nameFromPersonSlot
                );

                steps.workRights.validateCreatorSocieties(
                    0, creator.row, creator.societies
                );

                steps.workRights.validateCreatorContribution(
                    0, creator.row, '50.000'
                );

                steps.workRights.validatePartyShares(
                    0, creator.row, ['25.000', '25.000', '–', '–', '–']
                );
            });

            publisherRightsData.forEach(function (publisher) {
                steps.workRights.validatePublisherRole(
                    0, publisher.row, publisher.role
                );

                steps.workRights.validatePublisherName(
                    0, publisher.row, publisher.name
                );

                steps.workRights.validatePublisherSocieties(
                    0, publisher.row, publisher.societies
                );

                steps.workRights.validatePartyShares(
                    0, publisher.row, publisher.shares
                );
            });

            steps.workRights.validateWcmTotalShares(
                0, ['100.000', '50.000', '100.000', '100.000', '100.000']
            );
        },
    },
    {
        name: 'Validate Registration Activity',
        tags: [
            'TAT-400',
            'works-sanity-validate-registration-activity',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            steps.work.goToWorkPage();

            steps.work.goToRegistrationActivityTab();

            steps.workRegistrationActivity.validateActivitiesGroupRegistrationName(
                0, 'ABRAMUS'
            );

            steps.workRegistrationActivity.toggleActivitiesGroupContainer(0);

            steps.workRegistrationActivity.expectActivityToBeScheduled(0, 0);
        },
    },
    {
        name: 'Validate CWR',
        tags: [
            'TAT-381',
            'works-sanity-validate-cwr',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            steps.work.goToWorkPage();

            steps.work.goToPreviewCwrTab();

            steps.workCwrPreview.searchForRegistrationRecipient('ABRAMUS');

            steps.workCwrPreview.selectFirstRegistrationRecipientResult();

            steps.workCwrPreview.validateRecordType(0, 'NWR');

            steps.workCwrPreview.validateRecordNumber(0);

            steps.workCwrPreview.validateWorkTitle(
                0, 'TEST WORK ' + randomId('mainWork')
            );

            steps.workCwrPreview.validateSubmitterWorkNumberUsingWorkIdFromCurrentWorkSlot(0);

            steps.workCwrPreview.validateRecordType(1, 'SPU');
            steps.workCwrPreview.validateRecordNumber(1);
            steps.workCwrPreview.validatePublisherName(1, 'WCM PUBLISHER  1');
            steps.workCwrPreview.validatePublisherRole(1, 'E');

            steps.workCwrPreview.validateRecordType(2, 'SPU');
            steps.workCwrPreview.validateRecordNumber(2);
            steps.workCwrPreview.validatePublisherName(2, 'WB MUSIC CORP.');
            steps.workCwrPreview.validatePublisherRole(2, 'AM');

            steps.workCwrPreview.validateRecordType(3, 'SPU');
            steps.workCwrPreview.validateRecordNumber(3);

            steps.workCwrPreview.validatePublisherName(
                3, 'WARNER/CHAPPELL EDICOES MUSICAIS LTDA'
            );

            steps.workCwrPreview.validatePublisherRole(3, 'SE');

            steps.workCwrPreview.validateRecordType(4, 'SPT');
            steps.workCwrPreview.validateRecordNumber(4);

            steps.workCwrPreview.validateRecordType(5, 'SPU');
            steps.workCwrPreview.validateRecordNumber(5);
            steps.workCwrPreview.validatePublisherName(5, 'WCM PUBLISHER  1');
            steps.workCwrPreview.validatePublisherRole(5, 'E');

            steps.workCwrPreview.validateRecordType(6, 'SPU');
            steps.workCwrPreview.validateRecordNumber(6);
            steps.workCwrPreview.validatePublisherName(6, 'WB MUSIC CORP.');
            steps.workCwrPreview.validatePublisherRole(6, 'AM');

            steps.workCwrPreview.validateRecordType(7, 'SPU');
            steps.workCwrPreview.validateRecordNumber(7);

            steps.workCwrPreview.validatePublisherName(
                7, 'WARNER/CHAPPELL EDICOES MUSICAIS LTDA'
            );

            steps.workCwrPreview.validatePublisherRole(7, 'SE');

            steps.workCwrPreview.validateRecordType(8, 'SPT');
            steps.workCwrPreview.validateRecordNumber(8);

            steps.workCwrPreview.validateRecordType(9, 'SWR');
            steps.workCwrPreview.validateRecordNumber(9);
            steps.workCwrPreview.validateWriterDesignationCode(9, 'CA');

            steps.workCwrPreview.validateRecordType(10, 'SWT');
            steps.workCwrPreview.validateRecordNumber(10);

            steps.workCwrPreview.validateRecordType(11, 'PWR');
            steps.workCwrPreview.validateRecordNumber(11);
            steps.workCwrPreview.validatePublisherName(11, 'WCM PUBLISHER  1');

            steps.workCwrPreview.validateRecordType(12, 'SWR');
            steps.workCwrPreview.validateRecordNumber(12);
            steps.workCwrPreview.validateWriterDesignationCode(12, 'CA');

            steps.workCwrPreview.validateRecordType(13, 'SWT');
            steps.workCwrPreview.validateRecordNumber(13);

            steps.workCwrPreview.validateRecordType(14, 'PWR');
            steps.workCwrPreview.validateRecordNumber(14);
            steps.workCwrPreview.validatePublisherName(14, 'WCM PUBLISHER  1');

            steps.workCwrPreview.validateRecordType(15, 'ALT');

            steps.workCwrPreview.validateRecordNumber(15);

            steps.workCwrPreview.validateWorkTitle(
                15, 'TEST WORK ALTERNATE TITLE ' + randomId('mainWork')
            );
        }
    }
];
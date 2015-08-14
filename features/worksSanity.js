'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    leftPad = require('left-pad'),
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'person');
require(steps_path + 'newPerson');
require(steps_path + 'work');
require(steps_path + 'new_work');
require(steps_path + 'dealRtp');
require(steps_path + 'deal');
require(steps_path + 'create_deal_contract_period');
require(steps_path + 'create_deal_scope');
require(steps_path + 'newWorkRecordings');
require(steps_path + 'workRecordings');
require(steps_path + 'newWorkCopyrightCertificates');
require(steps_path + 'workCopyrightCertificates');
require(steps_path + 'scopeDelivery');
require(steps_path + 'workPreviewCwr');

var beforeFeature = [
        [steps.login.itLogin],
    ],
    feature = [
        {
            name: 'Create 2 persons to use as creators',
            tags: [
                'works-sanity-create-persons',
                'works-sanity-create-work',
                'works-sanity-validate-work',
            ],
            steps: function() {
                _.times(2, function(i) {
                    steps.person.useBlankPersonSlot(i);

                    steps.newPerson.goToNewPersonPage();

                    steps.newPerson.enterLastName('TEST PERSON ' + randomId('person' + i));

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

                [steps.new_work.selectRandomCreator, [1]],
                [steps.new_work.enterCreatorContribution, [1, 50]],

                [steps.new_work.selectRandomMusicalDistributionCategory],
                [steps.new_work.selectRandomTextMusicRelationship],
                [steps.new_work.selectRandomExcerptType],
                [steps.new_work.selectRandomVersionType],
                [steps.new_work.selectRandomLyricAdaptation],
                [steps.new_work.selectRandomMusicArrangement],

                [steps.new_work.optToIncludeWorkOnWebsite, [false]],

                [steps.new_work.continueToNextTab],

                [function() {
                    _.times(3, function(i) {
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

                [function() {
                    _.times(4, function(i) {
                        steps.newWorkCopyrightCertificates.enterUsLibraryOfCongressNumber(i, 'TEST ' + randomId('copyrightNumber' + i));
                        steps.newWorkCopyrightCertificates.enterRegistrationDate(i, '2015-03-12');
                        steps.newWorkCopyrightCertificates.enterSubmittedDate(i, '2015-06-12');
                    });
                }],

                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.work.findCurrentlyOpenWorkId],
            ],
        },
        {
            name: 'Validate created work data',
            tags: ['works-sanity-validate-work'],
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

                [function() {
                    steps.workCopyrightCertificates.validateUsLibraryOfCongressNumbers(
                        _.times(4, function(i) {
                            return 'TEST ' + randomId('copyrightNumber' + i);
                        })
                    );

                    steps.workCopyrightCertificates.validateRegistrationDates(
                        _.times(4, function() {
                            return '2015 03 12';
                        })
                    );

                    steps.workCopyrightCertificates.validateSubmittedDates(
                        _.times(4, function() {
                            return '2015 06 12';
                        })
                    );
                }],

                [steps.work.validateIncludeWorkOnWebsite, [false]],

                [steps.work.goToScopeDeliveryTab],
                [steps.work.validateSubjectCreatorNames, [2]],
                [steps.work.validateSubjectCreatorContributions, [2]],

                [steps.work.goToRecordingsTab],

                [function() {
                    steps.workRecordings.validateRecordingNames(
                        _.times(3, function() {
                            return 'TEST WORK ' + randomId('mainWork');
                        })
                    );

                    steps.workRecordings.validateArtistNames(
                        _.times(3, function(i) {
                            return 'TEST ARTIST ' + randomId('mainWorkArtist' + i);
                        })
                    );

                    steps.workRecordings.validateRecordingDurations(
                        _.times(3, function(i) {
                            return '00 : ' + leftPad(i + 1, 2, 0) + ' : 00';
                        })
                    );
                }],
            ],
        },
        {
            name: 'Create 2 basic works to use as components',
            tags: [],
            steps: [
                [function() {
                    _.times(2, function(i) {
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
            tags: [],
            steps: function() {
                steps.base.useBlankEntityDataSlot('work', 'cosWork');

                steps.new_work.goToNewWorkPage();

                steps.new_work.enterPrimaryWorkTitle('TEST COS WORK ' + randomId('cosWork'));

                steps.new_work.enterAlternateWorkTitle(
                    0, 'TEST COS WORK ALTERNATE TITLE ' + randomId('cosWork')
                );

                steps.new_work.validateDefaultCompositeWorkCheckboxState();
                steps.new_work.clickCompositeWorkCheckbox();

                steps.new_work.selectCompositeWorkType('Composite of Samples');

                steps.new_work.selectCreatorFromPersonSlot(0, 1);
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
            tags: [],
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
            tags: [],
            steps: function() {
                steps.base.useBlankEntityDataSlot('work', 'medWork');

                steps.new_work.goToNewWorkPage();

                steps.new_work.enterPrimaryWorkTitle('TEST MED WORK ' + randomId('medWork'));

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
            tags: [],
            steps: function() {
                steps.base.useEntityDataSlot('work', 'medWork');

                steps.work.goToWorkPage();

                steps.work.hoverCreatorNamesContainer();
                steps.work.editCreators();

                steps.work.validateCompositeWorkType();

                _.times(2, function(i) {
                    steps.work.validateComponentWorkName(i);
                    steps.work.validateComponentWorkAllocation(i);
                });
            },
        },
        {
            name: 'Search for 2 previously created works by work ID',
            tags: [],
            steps: function() {
                ['mainWork', 'cosWork'].forEach(function(workSlotId) {
                    steps.base.useEntityDataSlot('work', workSlotId);

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
            tags: [],
            steps: function() {
                ['mainWork', 'cosWork'].forEach(function(workSlotId) {
                    steps.base.useEntityDataSlot('work', workSlotId);

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
            tags: [],
            steps: function() {
                ['mainWork', 'cosWork'].forEach(function(workSlotId) {
                    steps.base.useEntityDataSlot('work', workSlotId);

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
            tags: [],
            steps: function() {
                ['mainWork', 'cosWork'].forEach(function(workSlotId) {
                    steps.base.useEntityDataSlot('work', workSlotId);

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
            tags: [],
            steps: function() {
                ['mainWork', 'cosWork'].forEach(function(workSlotId) {
                    steps.base.useEntityDataSlot('work', workSlotId);

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
            tags: [],
            steps: function() {
                ['mainWork', 'cosWork'].forEach(function(workSlotId) {
                    steps.base.useEntityDataSlot('work', workSlotId);

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
            tags: [],
            steps: function() {
                steps.base.useBlankEntityDataSlot('deal', 'mainDeal');

                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();

                steps.deal.itContinueToNextPage();

                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();

                steps.create_deal_scope.itAddSimpleScope();

                steps.create_deal_scope.itAddPublisherShare();

                steps.create_deal_scope.itAddSimpleScope();

                steps.create_deal_scope.itAddPublisherShare();

                steps.base.scrollIntoView(
                    'Save publisher share set',
                    pages.create_deal_scope.elems.savePublisherShareSet
                );

                steps.create_deal_scope.saveThePublisherShareSet();

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
            tags: [],
            steps: function() {
                steps.base.useEntityDataSlot('work', 'mainWork');

                steps.work.goToWorkPage();

                steps.work.goToScopeDeliveryTab();

                steps.scopeDelivery.deliverWork();

                steps.scopeDelivery.searchForDealFromDealSlotForAllContributions(
                    'mainDeal'
                );

                steps.scopeDelivery.selectDealSearchResultByIndex(0);

                _.times(2, function(i) {
                    steps.scopeDelivery.clickScopeDeliveryCheckbox(i, i);
                });

                steps.scopeDelivery.save();

                steps.base.refreshPage();

                _.times(2, function(i) {
                    steps.scopeDelivery.validateContributionDealIdFromDealSlot(i, 'mainDeal');
                    steps.scopeDelivery.validateContributionScopeName(i, 'Scope ' + (i + 1));
                });
            },
        },
        {
            name: 'Validate CWR',
            tags: ['works-sanity-validate-cwr', 'TAT-381'],
            steps: function () {
                var testWorkId = 'WW 015007750 00',
                    registrationRecipientName = 'ABRAMUS',
                    cwrLines = require('../data/ABRAMUS_cwr.json');

                steps.work.goToWorkPageById(testWorkId);
                steps.work.goToPreviewCwrTab();

                steps.workPreviewCwr.searchForRegistrationRecipient(registrationRecipientName);
                steps.workPreviewCwr.selectFirstRegistrationRecipientResult();
                steps.workPreviewCwr.validateCwrLines(cwrLines);
            }
        }
    ];

module.exports = {
    commonFeatureTags: ['sanity', 'works-sanity'],
    feature: feature,
    beforeFeature: beforeFeature
};

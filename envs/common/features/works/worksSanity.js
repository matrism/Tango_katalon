'use strict';

var leftPad = require('left-pad'),
    moment = require('moment'),
    random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator(),
    fromTestVariable = require('../../../../helpers/fromTestVariable'),
    fnutils = require('../../../../helpers/fnutils'),
    data = requireFromEnvFolder('features/orgs/data/CrRegistration.js'),
    bind = fnutils.bind,
    using = fnutils.using;

exports.id = '9816ee88-8ecc-41fe-8014-30f21b2142c8';

exports.commonFeatureTags = [
    'worksSanity',
    'works',
    'sanity'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create 4 persons to use as creators',
        tags: [
            'worksSanityCreatePersons',
            'worksSanityCreateWork',
            'worksSanityValidateWork',
            'worksSanityCreateCompositeWorks',
            'worksSanityValidateCompositeWorks',
            'worksSanityCreateCos',
            'worksSanityValidateCos',
            'worksSanityCreateCosWithShell',
            'worksSanityValidateCosWithShell',
            'worksSanityCreateMed',
            'worksSanityValidateMed',
            'worksSanityCreateMedWithShell',
            'worksSanityValidateMedWithShell',
            'worksSanityCreateLibraryWork',
            'worksSanityValidateLibraryWork',
            'worksSanitySearchForWorks',
            'worksSanitySearchForWorksById',
            'worksSanitySearchForWorksBySongCode',
            'worksSanitySearchForWorksByPrimaryTitle',
            'worksSanitySearchForWorksByAlternateTitle',
            'worksSanitySearchForWorksByCreatorPresentationName',
            'worksSanitySearchForWorksByPrimaryTitleAndCreatorPresentationName',
            'worksSanityScopeDelivery',
            'worksSanityGenerateWorkRights',
            'worksSanityValidateWorkRights',
            'worksSanityValidateRegistrationActivity',
            'worksSanityValidateCwr',
            'worksSanityExecuteRegistrationRun'
        ],
        steps: function () {
            _.times(4, function (i) {
                steps.person.useBlankPersonSlot(i);

                using(steps.newPerson, function () {
                    this.goToNewPersonPage();

                    this.enterLastName(
                        'TEST PERSON ' + (i + 1) + ' ' + randomId('person' + i)
                    );
                });

                using(steps.newPerson, function () {
                    this.enterAffiliatedSocietySearchTerms('ASCAP');
                    this.selectAffiliatedSocietySearchResultByIndex(0);

                    this.save();
                });

                steps.person.findInternalIpiNumber();
            });
        },
    },
    {
        name: 'Create work with 2 creators',
        tags: [
            'worksSanityCreateWork',
            'worksSanityValidateWork',
            'worksSanitySearchForWorks',
            'worksSanitySearchForWorksById',
            'worksSanitySearchForWorksBySongCode',
            'worksSanitySearchForWorksByPrimaryTitle',
            'worksSanitySearchForWorksByAlternateTitle',
            'worksSanitySearchForWorksByCreatorPresentationName',
            'worksSanitySearchForWorksByPrimaryTitleAndCreatorPresentationName',
            'worksSanityScopeDelivery',
            'worksSanityGenerateWorkRights',
            'worksSanityValidateWorkRights',
            'worksSanityValidateRegistrationActivity',
            'worksSanityValidateCwr',
            'worksSanityExecuteRegistrationRun'
        ],
        steps: function () {
            executeLegacyStepsArray([
            [steps.base.useBlankEntityDataSlot, ['work', 'mainWork']],

            [steps.newWork.goToNewWorkPage],

            [steps.newWork.enterPrimaryWorkTitle, [
                'TEST WORK ' + randomId('mainWork'),
            ]],

            [steps.newWork.enterAlternateWorkTitle, [
                0, 'TEST WORK ALTERNATE TITLE ' + randomId('mainWork'),
            ]],

            [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
            [steps.newWork.enterCreatorContribution, [0, 50]],

            [steps.newWork.selectCreatorFromPersonSlot, [1, 1]],
            [steps.newWork.enterCreatorContribution, [1, 50]],

            [steps.newWork.selectRandomMusicalDistributionCategory],
            [steps.newWork.selectRandomTextMusicRelationship],
            [steps.newWork.selectRandomExcerptType],
            [steps.newWork.selectRandomVersionType],
            [steps.newWork.selectRandomLyricAdaptation],
            [steps.newWork.selectRandomMusicArrangement],

            [steps.newWork.optToIncludeWorkOnWebsite, [false]],

            [steps.newWork.continueToNextTab],

            [function () {
                _.times(3, function (i) {
                    steps.workRecordings.clickRecordingNameField(i);
                    steps.workRecordings.selectRecordingNameSuggestionByIndex(i);

                    steps.workRecordings.enterArtistName(
                        i, 'TEST ARTIST ' + randomId('mainWorkArtist' + i)
                    );

                    steps.workRecordings.createEnteredArtist();

                    steps.workRecordings.enterRecordingDuration(
                        i, '00' + leftPad(i + 1, 2, 0) + '00'
                    );
                });
            }],

            [steps.newWork.continueToNextTab],

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

            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.work.findCurrentlyOpenWorkId],
            ]);
        }
    },
    {
        name: 'Validate created work data',

        tags: [
            'worksSanityValidateWork',
            'broken'
        ],

        breakageDescription: (
            'Timeout - Async callback was not invoked within timeout ' +
            'specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.'
        ),

        steps: () => {
            executeLegacyStepsArray([
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
            ]);
        }
    },
    {
        name: 'Create 2 basic works to use as components',
        tags: [
            'worksSanityCreateComponentWorks',
            'worksSanityCreateCompositeWorks',
            'worksSanityValidateCompositeWorks',
            'worksSanityCreateCos',
            'worksSanityValidateCos',
            'worksSanityCreateMed',
            'worksSanityValidateMed',
            'worksSanitySearchForWorks',
            'worksSanitySearchForWorksById',
            'worksSanitySearchForWorksBySongCode',
            'worksSanitySearchForWorksByPrimaryTitle',
            'worksSanitySearchForWorksByAlternateTitle',
            'worksSanitySearchForWorksByCreatorPresentationName',
            'worksSanitySearchForWorksByPrimaryTitleAndCreatorPresentationName',
        ],
        steps: function () {
            executeLegacyStepsArray([
            [function () {
                _.times(2, function (i) {
                    steps.base.useBlankEntityDataSlot('work', 'component' + i);

                    steps.newWork.goToNewWorkPage();

                    steps.newWork.enterPrimaryWorkTitle(
                        'TEST COMPONENT ' + randomId('component' + i)
                    );

                    steps.newWork.selectRandomCreator(0);
                    steps.newWork.enterCreatorContribution(0, 100);

                    steps.newWork.optToIncludeWorkOnWebsite(false);

                    steps.newWork.saveWork();
                    steps.newWork.validateSaveWorkRedirection();
                    steps.work.findCurrentlyOpenWorkId();
                });
            }],
            ]);
        }
    },
    {
        name: 'Create a Composite of Samples',
        tags: [
            'worksSanityCreateCos',
            'worksSanityValidateCos',
            'worksSanityCreateCompositeWorks',
            'worksSanityValidateCompositeWorks',
            'worksSanitySearchForWorks',
            'worksSanitySearchForWorksById',
            'worksSanitySearchForWorksBySongCode',
            'worksSanitySearchForWorksByPrimaryTitle',
            'worksSanitySearchForWorksByAlternateTitle',
            'worksSanitySearchForWorksByCreatorPresentationName',
            'worksSanitySearchForWorksByPrimaryTitleAndCreatorPresentationName',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'cosWork');

            steps.newWork.goToNewWorkPage();

            steps.newWork.enterPrimaryWorkTitle(
                'TEST COS WORK ' + randomId('cosWork')
            );

            steps.newWork.enterAlternateWorkTitle(
                0, 'TEST COS WORK ALTERNATE TITLE ' + randomId('cosWork')
            );

            steps.newWork.validateDefaultCompositeWorkCheckboxState();
            steps.newWork.clickCompositeWorkCheckbox();

            steps.newWork.selectCompositeWorkType('Composite of Samples');

            steps.newWork.selectCreatorFromPersonSlot(0, 2);
            steps.newWork.enterCreatorContribution(0, 50);

            steps.newWork.selectFirstComponentWorkMatching(
                0, 'TEST COMPONENT ' + randomId('component1')
            );

            steps.newWork.enterComponentWorkAllocation(0, 50);

            steps.newWork.optToIncludeWorkOnWebsite(false);

            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();
        },
    },
    {
        name: 'Validate created Composite of Samples',
        tags: [
            'worksSanityValidateCos',
            'worksSanityValidateCompositeWorks',
        ],
        steps: function () {
            executeLegacyStepsArray([
            [steps.base.useEntityDataSlot, ['work', 'cosWork']],

            [steps.work.goToWorkPage],

            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],

            [steps.work.validateCompositeWorkType],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
            ]);
        }
    },
    {
        name: 'Create a Medley',
        tags: [
            'worksSanityCreateMed',
            'worksSanityValidateMed',
            'worksSanityCreateCompositeWorks',
            'worksSanityValidateCompositeWorks',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'medWork');

            steps.newWork.goToNewWorkPage();

            steps.newWork.enterPrimaryWorkTitle(
                'TEST MED WORK ' + randomId('medWork')
            );

            steps.newWork.enterAlternateWorkTitle(
                0, 'TEST MED WORK ALTERNATE TITLE ' + randomId('medWork')
            );

            steps.newWork.validateDefaultCompositeWorkCheckboxState();
            steps.newWork.clickCompositeWorkCheckbox();

            steps.newWork.selectCompositeWorkType('Medley');

            steps.newWork.selectFirstComponentWorkMatching(
                0, 'TEST COMPONENT ' + randomId('component0')
            );

            steps.newWork.enterComponentWorkAllocation(0, 50);

            steps.newWork.selectFirstComponentWorkMatching(
                1, 'TEST COMPONENT ' + randomId('component1')
            );

            steps.newWork.enterComponentWorkAllocation(1, 50);

            steps.newWork.optToIncludeWorkOnWebsite(false);

            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();
        },
    },
    {
        name: 'Validate created Medley',
        tags: [
            'worksSanityValidateMed',
            'worksSanityValidateCompositeWorks',
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
        name: 'Create library work',
        tags: [
            'worksSanityCreateLibraryWork',
            'worksSanityValidateLibraryWork',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'libraryWork');

            using(steps.newWork, function () {
                this.goToNewWorkPage();

                this.enterPrimaryWorkTitle(
                    'TEST LIBRARY WORK ' + randomId('libraryWork')
                );

                this.selectCreatorFromPersonSlot(0, 3);
                this.enterCreatorContribution(0, 100);

                this.selectIntendedPurpose('Library Work');
                this.selectMusicLibrary('AUDIOMACHINE');

                this.optToIncludeWorkOnWebsite(false);

                this.continueToNextTab();

                _.times(3, bind(steps.workRecordings, function (__, i) {
                    this.clickRecordingNameField(i);
                    this.selectRecordingNameSuggestionByIndex(i);

                    this.validateLibraryName(i);
                }));

                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.work.findCurrentlyOpenWorkId();
        },
    },
    {
        name: 'Validate created library work',
        tags: [
            'worksSanityValidateLibraryWork',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'libraryWork');

            using(steps.work, function () {
                this.goToWorkPage();

                this.validateMusicLibrary('AUDIOMACHINE');

                this.goToRecordingsTab();
            });

            using(steps.workRecordings, function () {
                this.validateRecordingNames(
                    _.times(3, function () {
                        return 'TEST LIBRARY WORK ' + randomId('libraryWork');
                    })
                );

                _.times(3, function (i) {
                    this.validateLibraryName(i, 'AUDIOMACHINE');
                }, this);
            });
        },
    },
    {
        name: 'Create a Composite of Samples with shell works',
        tags: [
            'worksSanityCreateCosWithShell',
            'worksSanityValidateCosWithShell',
            'worksSanityCreateCompositeWorks',
            'worksSanityValidateCompositeWorks',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'cosShellWork');

            steps.newWork.goToNewWorkPage(),
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(0));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Composite of Samples');
            steps.newWork.selectCreatorFromPersonSlot(0, 3);
            steps.newWork.enterCreatorContribution(0, 50);
            steps.newWork.enterNewShellWork(0, 'TEST SHELL WORK ' + randomId(0));
            steps.newWork.ensureTotalContributionTooLowMessageIsDisplayed();
            steps.newWork.enterComponentWorkAllocation(0, 50);
            steps.newWork.validateTotalContribution();
            steps.newWork.validateDefaultShellWorkTitleLanguage(0);
            steps.newWork.expectShellWorkTitleToMatchEnteredOne(0);
            steps.newWork.validateDefaultShellWorkCreatorRole(0, 0);
            steps.newWork.validateRequiredShellWorkCreatorNameField(0, 0);
            steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
            steps.newWork.validateRequiredShellWorkCreatorContributionField(0, 0);
            steps.newWork.enterShellWorkCreatorContribution(0, 0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.work.findCurrentlyOpenWorkId();
        }
    },
    {
        name: 'Validate created Composite of Samples with shell works',
        tags: [
            'worksSanityValidateCosWithShell',
            'worksSanityValidateCompositeWorksWithShell',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'cosShellWork');

            steps.work.goToWorkPage();
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateComponentWorkId(0);
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);
            steps.work.clickShowComponentWorkDetailsButton(0);
            steps.work.validateShellWorkCreatorName(0, 0);
            steps.work.validateShellWorkCreatorContribution(0, 0);
        }
    },
    {
        name: 'Create a Medley with shell works',
        tags: [
            'worksSanityCreateMedWithShell',
            'worksSanityValidateMedWithShell',
            'worksSanityCreateCompositeWorks',
            'worksSanityValidateCompositeWorks',
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('work', 'medShellWork');

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(3));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Medley');
            steps.newWork.enterNewShellWork(0, 'TEST SHELL WORK ' + randomId(3.1));
            steps.newWork.enterComponentWorkAllocation(0, 50);
            steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
            steps.newWork.enterShellWorkCreatorContribution(0, 0, 100);
            steps.newWork.enterNewShellWork(1, 'TEST SHELL WORK ' + randomId(3.2));
            steps.newWork.enterComponentWorkAllocation(1, 50);
            steps.newWork.selectShellWorkCreatorFromPersonSlot(1, 0, 1);
            steps.newWork.enterShellWorkCreatorContribution(1, 0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.work.findCurrentlyOpenWorkId();
        }
    },
    {
        name: 'Validate created Medley with shell works',
        tags: [
            'worksSanityValidateMedWithShell',
            'worksSanityValidateCompositeWorksWithShell',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'medShellWork');

            steps.work.goToWorkPage();
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateComponentWorkId(0);
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);
            steps.work.clickShowComponentWorkDetailsButton(0);
            steps.work.validateShellWorkCreatorName(0, 0);
            steps.work.validateShellWorkCreatorContribution(0, 0);
            steps.work.validateComponentWorkId(1);
            steps.work.validateComponentWorkName(1);
            steps.work.validateComponentWorkAllocation(1);
            steps.work.clickShowComponentWorkDetailsButton(1);
            steps.work.validateShellWorkCreatorName(1, 0);
            steps.work.validateShellWorkCreatorContribution(1, 0);
        }
    },
    {
        name: 'Search for 2 previously created works by work ID',
        tags: [
            'worksSanitySearchForWorksById',
            'worksSanitySearchForWorks',
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
            'worksSanitySearchForWorksBySongCode',
            'worksSanitySearchForWorks',
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
            'worksSanitySearchForWorksByPrimaryTitle',
            'worksSanitySearchForWorks',
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
            'worksSanitySearchForWorksByAlternateTitle',
            'worksSanitySearchForWorks',
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
            'worksSanitySearchForWorksByCreatorPresentationName',
            'worksSanitySearchForWorks',
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
            'worksSanitySearchForWorksByPrimaryTitleAndCreatorPresentationName',
            'worksSanitySearchForWorks',
            'broken',
            'unstable'
        ],
        breakageDescription: (
            'An error (TypeError: Cannot call method indexOf of undefined) ' +
            'in this test has caused Protractor to crash twice. ' +
            'Only recently (as of 2015-10-23) has this started happening, ' +
            'and it\'s unclear what\'s causing it. ' +
            'Sample: http://54.84.154.80:8080/view/Tango/job/TAT%20Tests/690/console.'
        ),
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
            'worksSanityCreateDeal',
            'worksSanityScopeDelivery',
            'worksSanityGenerateWorkRights',
            'worksSanityValidateWorkRights',
            'worksSanityValidateRegistrationActivity',
            'worksSanityValidateCwr',
            'worksSanityExecuteRegistrationRun'
        ],
        steps: function () {
            steps.base.useBlankEntityDataSlot('deal', 'mainDeal');

            steps.createDealGeneral.goToNewDealPage();

            steps.createDealGeneral.selectSigningTerritory('Argentina');

            if(systemConfig.env.name === 'qa') {
                steps.createDealGeneral.fillCompanyCodeField("a");
                steps.createDealGeneral.waitForContractingPartyDropDown();
                steps.createDealGeneral.selectRandomCompanyCode();
            }

            steps.createDealGeneral.enterContractingPartySearchTerms('ASCAP');

            steps.createDealGeneral.waitForContractingPartyDropDown();

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
                    0, 0, 'WARNER ALLIANCE MUSIC'
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
            'worksSanityScopeDelivery',
            'worksSanityGenerateWorkRights',
            'worksSanityValidateWorkRights',
            'worksSanityValidateRegistrationActivity',
            'worksSanityValidateCwr',
            'worksSanityExecuteRegistrationRun'
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
        name: 'Generate work rights',
        tags: [
            'worksSanityGenerateWorkRights',
            'worksSanityValidateRegistrationActivity',
            'worksSanityValidateCwr',
            'worksSanityExecuteRegistrationRun'
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            steps.work.goToWorkPage();

            steps.work.goToRightsTab();
        }
    },
    {
        name: 'Validate work rights',
        tags: [
            'worksSanityValidateWorkRights'
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
                        name: 'WARNER ALLIANCE MUSIC',
                        societies: ['ASCAP'],
                        shares: ['25.000', '–', '–', '–', '–'],
                    },
                    {
                        row: 2,
                        role: 'AM',
                        name: 'WB MUSIC CORP.',
                        societies: ['ASCAP'],
                        shares: ['–', '–', '–', '–', '–'],
                    },
                    {
                        row: 3,
                        role: 'SE',
                        name: 'WARNER/CHAPPELL EDICOES MUSICAIS LTDA',
                        societies: ['ABRAMUS'],
                        shares: ['–', '25.000', '50.000', '50.000', '50.000'],
                    },
                    {
                        row: 5,
                        role: 'E',
                        name: 'WARNER ALLIANCE MUSIC',
                        societies: ['ASCAP'],
                        shares: ['25.000', '–', '–', '–', '–'],
                    },
                    {
                        row: 6,
                        role: 'AM',
                        name: 'WB MUSIC CORP.',
                        societies: ['ASCAP'],
                        shares: ['–', '–', '–', '–', '–'],
                    },
                    {
                        row: 7,
                        role: 'SE',
                        name: 'WARNER/CHAPPELL EDICOES MUSICAIS LTDA',
                        societies: ['ABRAMUS'],
                        shares: ['–', '25.000', '50.000', '50.000', '50.000'],
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
        }
    },
    {
        name: 'Validate Registration Activity',
        tags: [
            'TAT-400',
            'worksSanityValidateRegistrationActivity',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            using(steps.work, function () {
                this.goToWorkPage();
                this.goToRegistrationActivityTab();
            });

            using(steps.workRegistrationActivity.activityGroup, function () {
                this.find('first');

                this.validateRecipientName('ABRAMUS');

                this.toggleBlind();

                using(this.events, function () {
                    this.validateEventCount(1);

                    this.find('first');

                    this.validateStatus('Scheduled');
                });
            });
        },
    },
    {
        name: 'Validate CWR',
        tags: [
            'TAT-381',
            'worksSanityValidateCwr',
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
            steps.workCwrPreview.validatePublisherName(1, 'WARNER ALLIANCE MUSIC');
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
            steps.workCwrPreview.validatePublisherName(5, 'WARNER ALLIANCE MUSIC');
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
            steps.workCwrPreview.validatePublisherName(11, 'WARNER ALLIANCE MUSIC');

            steps.workCwrPreview.validateRecordType(12, 'SWR');
            steps.workCwrPreview.validateRecordNumber(12);
            steps.workCwrPreview.validateWriterDesignationCode(12, 'CA');

            steps.workCwrPreview.validateRecordType(13, 'SWT');
            steps.workCwrPreview.validateRecordNumber(13);

            steps.workCwrPreview.validateRecordType(14, 'PWR');
            steps.workCwrPreview.validateRecordNumber(14);
            steps.workCwrPreview.validatePublisherName(14, 'WARNER ALLIANCE MUSIC');

            steps.workCwrPreview.validateRecordType(15, 'ALT');

            steps.workCwrPreview.validateRecordNumber(15);

            steps.workCwrPreview.validateWorkTitle(
                15, 'TEST WORK ALTERNATE TITLE ' + randomId('mainWork')
            );
        }
    },
    {
        name: 'Execute registration run',

        tags: [
            'worksSanityExecuteRegistrationRun'
        ],

        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');

            using(steps.work, function () {
                this.goToWorkPage();

                this.goToRegistrationActivityTab();
            });

            using(steps.workRegistrationActivity.activityGroup, function () {
                this.find('first');

                this.goToRecipientPage();
            });

            using(steps.organisation, function () {
                this.goToGeneralTab();
                this.registration.resetDeliveryInfo(data.cr);
                this.saveOrganisationDeliveryMethods();
            });

            steps.organisation.goToPreviewRegistrationRunTab();

            using(steps.organisationRegistrationStack, function () {
                // this area doesn't work b/c new works are added at bottom of list, scheduled works is 4000+ records
                //using(this.works, function () {
                //    this.find({ title: 'TEST WORK ' + randomId('mainWork') });

                //    this.validateErrors('none');

                //    this.validateStatus('Scheduled');
                //});

                using(this.registrationRun, function () {
                    this.execute();

                    this.proceed();

                    using(this.startSuccessMessage, function () {
                        this.waitUntilDisplayed();

                        this.dismiss();
                    });
                });
            });

            using(steps.work, function () {
                this.goToWorkPage();

                this.goToRegistrationActivityTab();
            });

            using(steps.workRegistrationActivity.activityGroup, function () {
                this.find('first');

                this.toggleBlind();

                using(this.events, function () {
                    this.waitUntilAnyEventStatusBecomes('Delivered');

                    this.find({ firstWithStatus: 'Delivered' });

                    this.toggleBlind();
                    this.validateDeliveries();

                    this.storeFileNameInTestVariable('registration run file name');
                });

                this.goToRecipientPage();
            });

            steps.organisation.goToRegistrationActivityTab();

            using(steps.organisationRegistrationActivity.events, function () {
                this.find({
                    fileName: fromTestVariable('registration run file name')
                });

                this.validateStatus('Delivered');
            });

            steps.organisation.goToPreviewRegistrationRunTab();

            using(steps.organisationRegistrationStack.works, function () {
                this.validateAbsence({ title: 'TEST WORK ' + randomId('mainWork') });
            });
        }
    },
    {
        name: 'Merge work',
        tags: [
            'worksSanityMerge',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('work', 'mainWork');
            steps.work.goToWorkPage();
            steps.work.goToGeneralTab();
            using(steps.work.merge, function () {
                this.mergeWork();
                steps.base.useEntityDataSlot('work', 'component0');
                this.enterFindWorkUsingPreviouslyEnteredPrimaryTitle();
                this.continue();
                this.confirm();
            });
        }
    },
    {
        name: 'Search for the merged works',
        tags: [
            'worksSanitySearchForMergedWorks',
            'worksSanityMerge',
        ],
        steps: function () {
            using(steps.work, function() {
                steps.base.useEntityDataSlot('work', 'mainWork');
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Work ID');
                this.searchForWorkUsingPreviouslyCreatedWorkId();
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.expectWorkSearchMatchCountToBe(1);
                this.clickWorkSearchMatch(0);
                steps.base.waitForAjax();
                this.validateWorkId();

                steps.base.useEntityDataSlot('work', 'component0');
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Work ID');
                this.searchForWorkUsingPreviouslyCreatedWorkId();
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.expectWorkSearchMatchCountToBe(0);
            });
        }
    },
    {
        name: 'Copy work - Original',
        tags: [
            'worksSanityCopyWorkOriginal',
            'worksSanityCopy',
        ],
        steps: function () {
            using(steps.work, function () {
                steps.base.useEntityDataSlot('work', 'mainWork');
                this.goToWorkPage();
                this.goToGeneralTab();
                using(this.copy, function () {
                    this.copyWork();
                    this.selectOriginal();
                    this.continue();
                    this.enterPrimaryWorkTitle(0, 'TEST WORK ' + randomString('copy0'));
                    this.enterPrimaryWorkTitle(1, 'TEST WORK ' + randomString('copy1'));
                    this.enterPrimaryWorkTitle(2, 'TEST WORK ' + randomString('copy2'));
                    this.saveWork();
                    this.validateSuccessMessage();
                });
            });
        }
    },
    {
        name: 'Search for the copied works',
        tags: [
            'worksSanitySearchForCopiedWorks',
            'worksSanityCopy',
        ],
        steps: function () {
            using(steps.work, function() {
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Title');
                this.enterWorkSearchTerms('TEST WORK ' + randomString('copy1'));
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.expectWorkSearchMatchCountToBe(1);

                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Title');
                this.enterWorkSearchTerms('TEST WORK ' + randomString('copy2'));
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.expectWorkSearchMatchCountToBe(1);
            });
        }
    },
    {
        name: 'Copy work - Adaptation',
        tags: [
            'worksSanityCopyWorkAdaptation',
            'worksSanityCopy',
        ],
        steps: function () {
            using(steps.work, function () {
                steps.base.useEntityDataSlot('work', 'mainWork');
                this.goToWorkPage();
                this.goToGeneralTab();
                using(this.copy, function () {
                    this.copyWork();
                    this.selectAdaptation();
                    this.continue();
                });
                steps.newWork.saveWork();
                this.goToGeneralTab();
                this.validateVersionTypeId();
            });
        }
    }
];

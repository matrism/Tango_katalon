'use strict';

var leftPad = require('left-pad'),
    moment = require('moment'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator(),
    bind = fnutils.bind,
    using = fnutils.using;

exports.commonFeatureTags = [
    'albumsSanity',
    'sanity'
];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create person to use as creators',
        tags: [
            'albumsSanityCreatePersons',
        ],
        steps: function () {
            _.times(1, function (i) {
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
        name: 'Create work',
        tags: [
            'albumsSanityCreateWork',
        ],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 'mainWork']],

            [steps.newWork.goToNewWorkPage],

            [steps.newWork.enterPrimaryWorkTitle, [
                'TEST WORK ' + randomId('mainWork'),
            ]],

            [steps.newWork.enterAlternateWorkTitle, [
                0, 'TEST WORK ALTERNATE TITLE ' + randomId('mainWork'),
            ]],

            [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
            [steps.newWork.enterCreatorContribution, [0, 100]],

            //[steps.newWork.selectCreatorFromPersonSlot, [1, 1]],
            //[steps.newWork.enterCreatorContribution, [1, 50]],

            /*
            [steps.newWork.selectRandomMusicalDistributionCategory],
            [steps.newWork.selectRandomTextMusicRelationship],
            [steps.newWork.selectRandomExcerptType],
            [steps.newWork.selectRandomVersionType],
            [steps.newWork.selectRandomLyricAdaptation],
            [steps.newWork.selectRandomMusicArrangement],
            */

            [steps.newWork.optToIncludeWorkOnWebsite, [false]],

            /*
            [steps.newWork.continueToNextTab],

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
            */

            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.work.findCurrentlyOpenWorkId],
        ],
    },
    {
        name: 'Create commercial album',
        tags: [
            'albumsSanityCreateCommercialAlbum',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('album', 'commercialAlbum');

            using(steps.newAlbum, function () {
                this.goToNewAlbumPage();

                this.enterTitle(
                    'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
                );

                this.selectReleaseType('Commercial');

                this.enterArtistSearchTerms(
                    'TEST ARTIST ' + randomId('commercialAlbum')
                );

                this.createEnteredArtist();

                this.enterAlbumCode(
                    'TESTALBUMCODE' + randomId('commercialAlbum')
                );

                _.times(3, function (i) {
                    this.recordings.selectSearchType(i, 'Title');

                    this.recordings.enterSearchTerms(
                        i, 'TEST RECORDING ' + randomId(
                            'commercialAlbumRecording' + i
                        )
                    );

                    this.recordings.createEnteredRecording();

                    this.recordings.enterWorkIdFromWorkSlotAsWorkSearchTerms(i, 'mainWork');

                    this.recordings.selectWorkSearchResultByIndex(0);

                    this.recordings.enterArtistSearchTerms(
                        i, 'TEST ARTIST ' + randomId('commercialAlbum')
                    );

                    this.recordings.selectArtistSearchResultByIndex(0);
                }, this);

                this.goToTab('Release Details');
            });

            using(steps.newAlbum.releaseDetails, function () {
                this.waitForTerritoriesSelectorToBeReady(0);
                this.editTerritories(0);
                this.enterTerritorySearchTerms(0, 'United States');
                this.selectTerritorySearchResultByIndex(0);

                this.enterReleaseDate(0, moment().format('YYYY-MM-DD'));

                this.selectConfiguration(0, 'CD');

                this.enterLabelSearchTerms(
                    0, 'TEST LABEL ' + randomId('commercialAlbumLabel')
                );

                this.createEnteredLabel();

                this.enterCatalogueNumber(
                    0, randomId('commercialAlbumCatalogueNumber').slice(0, 15)
                );

                this.enterLicenseCode(
                    0, 'TEST LICENSE CODE ' + randomId(
                        'commercialAlbumLicenseCode'
                    )
                );
            });

            using(steps.newAlbum, function () {
                this.save();

                this.findAlbumUuid();
            });
        },
    },
    {
        name: 'Validate created commercial album',
        tags: [
            'albumsSanityValidateCommercialAlbum',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('album', 'commercialAlbum');

            steps.album.goToAlbumPage();

            using(steps.album.header, function () {
                this.validateTitle(
                    'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
                );

                this.validateArtistName(
                    'TEST ARTIST ' + randomId('commercialAlbum')
                );

                this.validateTrackCount(3);

                this.validateDuration('00:00:00');

                this.validateConfigurations(['CD']);

                this.validateTerritoryCount(1);

                this.validateAlbumCode(
                    'TESTALBUMCODE' + randomId('commercialAlbum')
                );
            });

            _.times(3, bind(steps.album.recordings, function (__, i) {
                this.validateTitle(
                    i, 'TEST RECORDING ' + randomId(
                        'commercialAlbumRecording' + i
                    )
                );

                this.validateArtistName(
                    i, 'TEST ARTIST ' + randomId('commercialAlbum')
                );

                this.validateDuration(i, '00:00:00');

                this.validateWorkIdUsingWorkSlot(i, 'mainWork');
            }));

            steps.album.goToTab('Release Details');

            using(steps.album.releaseDetails, function () {
                this.validateTerritories(0, ['United States']);

                this.validateReleaseDate(0, moment().format('YYYY-MM-DD'));

                this.validateConfiguration(0, 'CD');

                this.validateLabelName(
                    0, 'TEST LABEL ' + randomId('commercialAlbumLabel')
                );

                this.validateCatalogueNumber(
                    0, randomId('commercialAlbumCatalogueNumber').slice(0, 15)
                );

                this.validateLicenseCode(
                    0, 'TEST LICENSE CODE ' + randomId(
                        'commercialAlbumLicenseCode'
                    )
                );
            });
        },
    },
    {
        name: 'Create library album',
        tags: [
            'albumsSanityCreateLibraryAlbum',
            'albumsSanityValidateLibraryAlbum',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('album', 'libraryAlbum');

            using(steps.newAlbum, function () {
                this.goToNewAlbumPage();

                this.enterTitle(
                    'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
                );

                this.selectReleaseType('Library');

                this.selectLibrary('AUDIOMACHINE');

                this.enterAlbumCode(
                    'TESTALBUMCODE' + randomId('libraryAlbum')
                );

                _.times(3, function (i) {
                    this.recordings.selectSearchType(i, 'Title');

                    this.recordings.enterSearchTerms(
                        i, 'TEST RECORDING ' + randomId(
                            'libraryAlbumRecording' + i
                        )
                    );

                    this.recordings.createEnteredRecording();

                    this.recordings.enterWorkIdFromWorkSlotAsWorkSearchTerms(i, 'mainWork');

                    this.recordings.selectWorkSearchResultByIndex(0);

                    this.recordings.validateLibraryName(i, 'AUDIOMACHINE');
                }, this);

                this.save();

                this.findAlbumUuid();
            });
        },
    },
    {
        name: 'Validate created library album',
        tags: [
            'albumsSanityValidateLibraryAlbum',
        ],
        steps: function () {
            steps.base.useEntityDataSlot('album', 'libraryAlbum');

            steps.album.goToAlbumPage();

            using(steps.album.header, function () {
                this.validateTitle(
                    'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
                );

                this.validateLibraryName('AUDIOMACHINE');
            });

            _.times(3, bind(steps.album.recordings, function (__, i) {
                this.validateLibraryName(i, 'AUDIOMACHINE');
            }));
        },
    },
    {
        name: 'Validate Recordings on Work page',
        tags: [
            'validateRecordingsOnWork',
        ],
        steps: function () {
            using(steps.work, function () {
                steps.base.useEntityDataSlot('work', 'mainWork');
                this.goToWorkPage();
                //this.goToWorkPageById('WW 015062988 00');
                this.goToRecordingsTab();
                steps.workRecordings.toggleRecording(0);
                steps.workRecordings.toggleAlbum(0);
                steps.workRecordings.validateAlbumTitle(0, 'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')); 
                steps.workRecordings.validateReleaseTerritory(0, 'United States');
                steps.workRecordings.validateReleaseConfiguration(0, 'CD');
                steps.workRecordings.validateReleaseCatalog(0,
                    randomId('commercialAlbumCatalogueNumber').slice(0, 15)
                );
                steps.workRecordings.validateReleaseLicenseCode(0,
                    'TEST LICENSE CODE ' + randomId('commercialAlbumLicenseCode')
                );

                steps.workRecordings.validateRecordingNames(
                    _.times(3, function (i) {
                        return 'TEST RECORDING ' + randomId('commercialAlbumRecording' + i);
                    })
                );
                steps.workRecordings.validateRecordingNames(
                    _.times(3, function (i) {
                        return 'TEST RECORDING ' + randomId('libraryAlbumRecording' + i);
                    })
                );

                steps.workRecordings.validateArtistNames(
                    _.times(3, function (i) {
                        return 'TEST ARTIST ' + randomId('commercialAlbum');
                    })
                );

                steps.workRecordings.validateRecordingDurations(
                    _.times(6, function (i) {
                        //return '00 : ' + leftPad(i + 1, 2, 0) + ' : 00';
                        return '00 : 00 : 00';
                    })
                );


            });

        },
    },
    {
        name: 'Edit created commercial album',
        tags: [
            'albumsSanityEditCommercialAlbum',
        ],
        steps: function () {
            var a = steps.album,
                na = steps.newAlbum,
                nar = na.recordings,
                i = 4;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');
            hash.entityDataSlotsByType = {work: {mainWork: {id: 'WW 015062988 00'}}};

            //steps.album.goToAlbumPage();
            a.goToAlbumPage('5e93516a-fd97-11e5-b174-be909e760f77');
            a.recordings.edit();

            //nar.selectSearchType(0, 'Title');

            nar.enterSearchTerms(
                i, 'TEST RECORDING ' + randomId(
                    'commercialAlbumRecordingEdit'
                )
            );

            nar.createEnteredRecording();

            nar.selectWorkSearchType(0, 'Work ID');

            nar.enterWorkIdFromWorkSlotAsWorkSearchTerms(i, 'mainWork');

            nar.selectWorkSearchResultByIndex(0);

            nar.enterArtistSearchTerms(
                //i, 'TEST ARTIST ' + randomId('commercialAlbum')
                i, 'TEST ARTIST 1411460126120218'
            );

            nar.selectArtistSearchResultByIndex(0);

            a.recordings.save();

        },
    },
    {
        name: 'Search for previously created commercial album by title',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByTitle',
        ],
        steps: function () {
            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');

                this.selectFilterTag('Title');

                this.enterTerms(
                    'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
                );

                this.selectResultByIndex(0);
            });

            steps.album.header.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        },
    },
    {
        name: 'Search for previously created commercial album by artist',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByArtist',
        ],
        steps: function () {
            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');

                this.selectFilterTag('Artist');

                this.enterTerms(
                    'TEST ARTIST ' + randomId('commercialAlbum')
                );

                this.selectResultByIndex(0);
            });

            steps.album.header.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        },
    },
    {
        name: 'Search for previously created commercial album by catalog',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByCatalog',
        ],
        steps: function () {
            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');

                this.selectFilterTag('Catalog');

                this.enterTerms(
                    randomId('commercialAlbumCatalogueNumber').slice(0, 15)
                );

                this.selectResultByIndex(0);
            });

            steps.album.header.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        },
    },
    {
        name: 'Search for previously created commercial album by label',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByLabel',
        ],
        steps: function () {
            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');

                this.selectFilterTag('Label');

                this.enterTerms(
                    'TEST LABEL ' + randomId('commercialAlbumLabel')
                );

                this.selectResultByIndex(0);
            });

            steps.album.header.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        },
    },
    {
        name: 'Search for previously created commercial album by title + artist',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByTitlePlusArtist',
        ],
        steps: function () {
            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');

                this.selectFilterTag('Title');

                this.enterTerms(
                    'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
                );

                this.addAnotherTerm();

                this.selectFilterTag('Artist');

                this.enterTerms(
                    'TEST ARTIST ' + randomId('commercialAlbum')
                );

                this.selectResultByIndex(0);
            });

            steps.album.header.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        },
    },
    {
        name: 'Search for previously created library album by library + title',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByLibraryPlusTitle',
        ],
        steps: function () {
            using(steps.mainHeader.search, function () {
                this.selectEntityType('Albums');

                this.selectFilterTag('Library');

                this.enterTerms('AUDM');

                this.addAnotherTerm();

                this.selectFilterTag('Title');

                this.enterTerms(
                    'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
                );

                this.selectResultByIndex(0);
            });

            steps.album.header.validateTitle(
                'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
            );
        },
    }
];

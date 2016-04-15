'use strict';

var leftPad = require('left-pad'),
    moment = require('moment'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator(),
    bind = fnutils.bind,
    using = fnutils.using;

exports.commonFeatureTags = [
    'albums',
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
            var p = steps.person,
                np = steps.newPerson;

            p.useBlankPersonSlot(0);

            np.goToNewPersonPage();
            np.enterLastName(
                'TEST PERSON ' + randomId('person')
            );
            np.enterAffiliatedSocietySearchTerms('ASCAP');
            np.selectAffiliatedSocietySearchResultByIndex(0);
            np.save();

            p.findInternalIpiNumber();
        }
    },
    {
        name: 'Create work',
        tags: [
            'albumsSanityCreateWork',
        ],
        steps: function () {
            var nw = steps.newWork;

            steps.base.useBlankEntityDataSlot('work', 'mainWork');

            nw.goToNewWorkPage();
            nw.enterPrimaryWorkTitle(
                'TEST WORK ' + randomId('mainWork')
            );
            nw.selectCreatorFromPersonSlot(0, 0);
            nw.enterCreatorContribution(0, 100);
            nw.optToIncludeWorkOnWebsite(false);
            nw.saveWork();
            nw.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();
        }
    },
    {
        name: 'Create commercial album',
        tags: [
            'albumsSanityCreateCommercialAlbum',
        ],
        steps: function () {
            var na = steps.newAlbum,
                nar = na.recordings,
                nard = na.releaseDetails;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');
            //hash.entityDataSlotsByType = {work: {mainWork: {id: 'WW 015062988 00'}}};

            na.goToNewAlbumPage();
            na.enterTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
            na.selectReleaseType('Commercial');
            na.enterArtistSearchTerms(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
            na.createEnteredArtist();
            na.enterAlbumCode(
                'TESTALBUMCODE' + randomId('commercialAlbum')
            );
            na.enterDuration('777777');
            na.validateSaveButtonState('disabled');
            na.enterDuration('001000');
            na.validateSaveButtonState('enabled');

            _.times(3, function (i) {
                nar.selectSearchType(i, 'Title');
                nar.enterSearchTerms(
                    i, 'TEST RECORDING ' + randomId(
                        'commercialAlbumRecording' + i
                    )
                );
                nar.createEnteredRecording();
                nar.enterWorkIdFromWorkSlotAsWorkSearchTerms(i, 'mainWork');
                nar.selectWorkSearchResultByIndex(0);
                nar.enterArtistSearchTerms(
                    i, 'TEST ARTIST ' + randomId('commercialAlbum')
                );
                nar.selectArtistSearchResultByIndex(0);
                nar.enterDuration(i, '777777');
                na.validateSaveButtonState('disabled');
                nar.enterDuration(i, '000' + (i + 1) + '00');
                na.validateSaveButtonState('enabled');
            });

            na.goToTab('Release Details');
            nard.waitForTerritoriesSelectorToBeReady(0);
            nard.editTerritories(0);
            nard.enterTerritorySearchTerms(0, 'United States');
            nard.selectTerritorySearchResultByIndex(0);
            nard.enterReleaseDate(0, moment().format('YYYY-MM-DD'));
            nard.selectConfiguration(0, 'CD');
            nard.enterLabelSearchTerms(
                0, 'TEST LABEL ' + randomId('commercialAlbumLabel')
            );
            nard.createEnteredLabel();
            nard.enterCatalogueNumber(
                0, randomId('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            nard.enterLicenseCode(
                0, 'LICENSE' + randomId(
                    'commercialAlbumLicenseCode'
                )
            );

            na.save();
            na.findAlbumUuid();
        }
    },
    {
        name: 'Validate created commercial album',
        tags: [
            'albumsSanityValidateCommercialAlbum',
        ],
        steps: function () {
            var a = steps.album,
                ah = a.header,
                ar = a.recordings,
                ard = a.releaseDetails;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');

            a.goToAlbumPage();

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
            ah.validateTrackCount(3);
            ah.validateDuration('00:10:00');
            ah.validateConfigurations(['CD']);
            ah.validateTerritoryCount(1);
            ah.validateAlbumCode(
                'TESTALBUMCODE' + randomId('commercialAlbum')
            );

            _.times(3, function (i) {
                ar.validateTitle(
                    i, 'TEST RECORDING ' + randomId(
                        'commercialAlbumRecording' + i
                    )
                );
                ar.validateArtistName(
                    i, 'TEST ARTIST ' + randomId('commercialAlbum')
                );
                ar.validateDuration(i, '00:0' + (i + 1) + ':00');
                ar.validateWorkIdUsingWorkSlot(i, 'mainWork');
            });

            steps.album.goToTab('Release Details');

            ard.validateTerritories(0, ['United States']);
            ard.validateReleaseDate(0, moment().format('YYYY-MM-DD'));
            ard.validateConfiguration(0, 'CD');
            ard.validateLabelName(
                0, 'TEST LABEL ' + randomId('commercialAlbumLabel')
            );
            ard.validateCatalogueNumber(
                0, randomId('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            ard.validateLicenseCode(
                0, 'LICENSE' + randomId('commercialAlbumLicenseCode')
            );
        }
    },
    {
        name: 'Validate Recordings on Work page',
        tags: [
            'validateRecordingsOnWork',
        ],
        steps: function () {
            var w = steps.work,
                wr = steps.workRecordings;

            steps.base.useEntityDataSlot('work', 'mainWork');
            w.goToWorkPage();
            //this.goToWorkPageById('WW 015062988 00');
            w.goToRecordingsTab();

            wr.toggleRecording(0);
            wr.toggleAlbum(0);
            wr.validateAlbumTitle(0,
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
            wr.validateReleaseTerritory(0, 'United States');
            wr.validateReleaseConfiguration(0, 'CD');
            wr.validateReleaseCatalog(0,
                randomId('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            wr.validateReleaseLicenseCode(0,
                'LICENSE' + randomId('commercialAlbumLicenseCode')
            );
            wr.validateRecordingNames(
                _.times(3, function (i) {
                    return 'TEST RECORDING ' + randomId('commercialAlbumRecording' + i);
                })
            );
            /*
            wr.validateRecordingNames(
                _.times(3, function (i) {
                    return 'TEST RECORDING ' + randomId('libraryAlbumRecording' + i);
                })
            );
            */
            wr.validateArtistNames(
                _.times(3, function (i) {
                    return 'TEST ARTIST ' + randomId('commercialAlbum');
                })
            );
            wr.validateRecordingDurations(
                _.times(3, function (i) {
                    return '00 : 0' + (i + 1) + ' : 00';
                })
            );
        }
    },
    {
        name: 'Create library album',
        tags: [
            'albumsSanityCreateLibraryAlbum',
            'albumsSanityValidateLibraryAlbum',
        ],
        steps: function () {
            var na = steps.newAlbum,
                nar = na.recordings;

            steps.base.useEntityDataSlot('album', 'libraryAlbum');
            //hash.entityDataSlotsByType = {work: {mainWork: {id: 'WW 015062988 00'}}};

            na.goToNewAlbumPage();
            na.enterTitle(
                'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
            );
            na.selectReleaseType('Library');
            na.selectLibrary('AUDIOMACHINE');
            na.enterAlbumCode(
                'TESTALBUMCODE' + randomId('libraryAlbum')
            );

            _.times(3, function (i) {
                nar.selectSearchType(i, 'Title');
                nar.enterSearchTerms(
                    i, 'TEST RECORDING ' + randomId(
                        'libraryAlbumRecording' + i
                    )
                );
                nar.createEnteredRecording();
                nar.enterWorkIdFromWorkSlotAsWorkSearchTerms(i, 'mainWork');
                nar.selectWorkSearchResultByIndex(0);
                nar.validateLibraryName(i, 'AUDIOMACHINE');
            });

            na.save();
            na.findAlbumUuid();
        }
    },
    {
        name: 'Validate created library album',
        tags: [
            'albumsSanityValidateLibraryAlbum',
        ],
        steps: function () {
            var a = steps.album,
                ah = a.header,
                ar = a.recordings;

            steps.base.useEntityDataSlot('album', 'libraryAlbum');

            a.goToAlbumPage();

            ah.validateTitle(
                'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
            );
            ah.validateLibraryName('AUDIOMACHINE');

            _.times(3, function (i) {
                ar.validateLibraryName(i, 'AUDIOMACHINE');
            });
        }
    },
    {
        name: 'Edit created commercial album',
        tags: [
            'albumsSanityEditCommercialAlbum',
        ],
        steps: function () {
            var a = steps.album,
                ar = a.recordings,
                i = 3;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');
            hash.entityDataSlotsByType = {work: {mainWork: {id: 'WW 015062988 00'}}};

            a.goToAlbumPage();
            //a.goToAlbumPage('5e93516a-fd97-11e5-b174-be909e760f77');

            ar.edit();
            ar.deleteTrack(0);
            ar.deleteTrack(1);
            ar.enterSearchTerms(
                i, 'TEST RECORDING EDIT' + randomId(
                    'commercialAlbumRecordingEdit'
                )
            );
            ar.createEnteredRecording();
            ar.cancel();
            steps.base.dirtyCheckConfirmCancellation();
            a.header.validateTrackCount(3);
            ar.edit();
            ar.deleteTrack(0);
            ar.deleteTrack(1);
            ar.enterSearchTerms(
                i, 'TEST RECORDING EDIT' + randomId(
                    'commercialAlbumRecordingEdit'
                )
            );
            ar.createEnteredRecording();
            ar.cancel();
            steps.base.dirtyCheckContinueEditing();
            ar.selectWorkSearchType(0, 'Work ID');
            ar.enterWorkIdFromWorkSlotAsWorkSearchTerms(i, 'mainWork');
            ar.selectWorkSearchResultByIndex(0);
            ar.enterArtistSearchTerms(
                i, 'TEST ARTIST ' + randomId('commercialAlbum')
            );
            ar.selectArtistSearchResultByIndex(0);
            ar.enterDuration(i, '777777');
            ar.validateSaveButtonState('disabled');
            ar.enterDuration(i, '000400');
            ar.validateSaveButtonState('enabled');
            ar.save();

            ar.validateTitle(
                3, 'TEST RECORDING EDIT' + randomId(
                    'commercialAlbumRecordingEdit'
                )
            );
            ar.validateArtistName(
                3, 'TEST ARTIST EDIT' + randomId('commercialAlbum')
            );
            ar.validateDuration(3, '00:04:00');
            ar.validateWorkIdUsingWorkSlot(3, 'mainWork');

            a.header.validateTrackCount(2);
        }
    },
    {
        name: 'Search for previously created commercial album by title',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByTitle',
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Title');
            mhs.enterTerms(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
            mhs.selectResultByIndex(0);

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by artist',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByArtist',
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Artist');
            mhs.enterTerms('TEST ARTIST ' + randomId('commercialAlbum'));
            mhs.selectResultByIndex(0);

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by catalog',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByCatalog',
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Catalog');
            mhs.enterTerms(
                randomId('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            mhs.selectResultByIndex(0);

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by label',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByLabel',
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Label');
            mhs.enterTerms('TEST LABEL ' + randomId('commercialAlbumLabel'));
            mhs.selectResultByIndex(0);

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by title + artist',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByTitlePlusArtist',
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Title');
            mhs.enterTerms(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
            mhs.addAnotherTerm();
            mhs.selectFilterTag('Artist');
            mhs.enterTerms('TEST ARTIST ' + randomId('commercialAlbum'));
            mhs.selectResultByIndex(0);

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created library album by library + title',
        tags: [
            'albumsSanitySearchForAlbums',
            'albumsSanitySearchForAlbumsByLibraryPlusTitle',
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Library');
            mhs.enterTerms('AUDM');
            mhs.addAnotherTerm();
            mhs.selectFilterTag('Title');
            mhs.enterTerms(
                'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
            );
            mhs.selectResultByIndex(0);

            ah.validateTitle(
                'TEST LIBRARY ALBUM ' + randomId('libraryAlbum')
            );
        }
    }
];

'use strict';

var leftPad = require('left-pad'),
    moment = require('moment'),
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator(),
    bind = fnutils.bind,
    using = fnutils.using;

exports.id = 'd8fbef14-ad20-4457-a80a-295df4c98716';
exports.featureName = 'Albums Regression';

exports.commonFeatureTags = [
    'albums',
    'albumsRegression'
];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create person to use as creators',
        tags: [
            'albumsCreatePersons',
            'albumsSanity'
        ],
        steps: criticalScenario(() => {
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
        })
    },
    {
        name: 'Create work',
        tags: [
            'albumsCreateWork',
            'albumsSanity'
        ],
        steps: criticalScenario(() => {
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
        })
    },
    {
        name: 'Create commercial album',
        tags: [
            'createCommercialAlbum',
            'albumsSanity'
        ],
        steps: function () {
            var na = steps.newAlbum,
                nar = na.recordings,
                nard = na.releaseDetails;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');

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
                0, randomString('commercialAlbumCatalogueNumber').slice(0, 15)
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
            'validateCommercialAlbum',
            'albumsSanity'
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

            a.goToTab('Release Details');

            ard.validateTerritories(0, ['United States']);
            ard.validateReleaseDate(0, moment().format('YYYY-MM-DD'));
            ard.validateConfiguration(0, 'CD');
            ard.validateLabelName(
                0, 'TEST LABEL ' + randomId('commercialAlbumLabel')
            );
            ard.validateCatalogueNumber(
                0, randomString('commercialAlbumCatalogueNumber').slice(0, 15)
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
            'albumsSanity'
        ],
        steps: function () {
            var w = steps.work,
                wr = steps.workRecordings,
                alb = wr.albums,
                rd = alb.release;

            steps.base.useEntityDataSlot('work', 'mainWork');
            w.goToWorkPage();
            w.goToRecordingsTab();

            wr.toggle(0);
            alb.toggle(0, 0);
            alb.validateAlbumTitle(0, 0,
                'TEST COMMERCIAL ALBUM ' + randomId('commercialAlbum')
            );
            rd.validateTerritory(0, 0, 0, 0, 'United States');
            rd.validateConfiguration(0, 0, 0, 'CD');
            rd.validateCatalogueNumber(0, 0, 0,
                randomString('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            rd.validateLicenseCode(0, 0, 0,
                'LICENSE' + randomId('commercialAlbumLicenseCode')
            );

            _.times(3, i => {
                wr.findByTitle(
                    'TEST RECORDING ' + randomId(
                        'commercialAlbumRecording' + i
                    ), 'row index'
                );

                let iFound = fromTestVariable('row index');

                wr.validateArtistName(
                    iFound, 'TEST ARTIST ' + randomId('commercialAlbum')
                );

                wr.validateDuration(
                    iFound, '00 : 0' + (i + 1) + ' : 00'
                );
            });
        }
    },
    {
        name: 'Create library album',
        tags: [
            'createLibraryAlbum',
            'albumsSanity'
        ],
        steps: function () {
            var na = steps.newAlbum,
                nar = na.recordings;

            steps.base.useEntityDataSlot('album', 'libraryAlbum');

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
            'validateLibraryAlbum',
            'albumsSanity'
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
            'editCommercialAlbum'
        ],
        steps: function () {
            var a = steps.album,
                ar = a.recordings,
                ah = a.header,
                ard = a.releaseDetails,
                i = 3;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');

            a.goToAlbumPage();

            ah.editAlbumTitle();
            ah.enterAlbumTitle(
                'TEST COMMERCIAL ALBUM EDIT ' + randomId('commercialAlbum')
            );
            ah.saveAlbumTitle();
            ah.editDuration();
            ah.enterDuration('002000');
            ah.saveDuration();
            ah.editAlbumCode();
            ah.enterAlbumCode(
                'TESTALBUMCODEEDIT' + randomId('commercialAlbum')
            );
            ah.saveAlbumCode();

            a.goToTab('Release Details');
            ard.edit();

            ard.waitForTerritoriesSelectorToBeReady(0);
            ard.editTerritories(1);
            ard.enterTerritorySearchTerms(1, 'Brazil');
            ard.selectTerritorySearchResultByIndex(0);
            ard.enterReleaseDate(1, moment().format('YYYY-MM-DD'));
            ard.selectConfiguration(1, 'LP');
            ard.enterLabelSearchTerms(
                1, 'TEST LABEL 2' + randomId('commercialAlbumLabel')
            );
            ard.createEnteredLabel();
            ard.enterCatalogueNumber(
                1, randomId('commercialAlbumCatalogueNumber2').slice(0, 15)
            );
            ard.enterLicenseCode(
                1, 'LICENSE2' + randomId('commercialAlbumLicenseCode')
            );

            ard.save();
            a.goToTab('Recordings');

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
            ah.validateTrackCount(3);
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

        }
    },
    {
        name: 'Validate edited commercial album',
        tags: [
            'validateEditedCommercialAlbum'
        ],
        steps: function () {
            var a = steps.album,
                ah = a.header,
                ar = a.recordings,
                ard = a.releaseDetails;

            steps.base.useEntityDataSlot('album', 'commercialAlbum');

            a.goToAlbumPage();

            ah.validateTitle(
                'TEST COMMERCIAL ALBUM EDIT ' + randomId('commercialAlbum')
            );
            ah.validateDuration('00:20:00');
            ah.validateAlbumCode(
                'TESTALBUMCODEEDIT' + randomId('commercialAlbum')
            );
            ah.validateTrackCount(1);

            ar.validateTrackNumber(0, 3);
            ar.validateTitle(
                0, 'TEST RECORDING EDIT' + randomId(
                    'commercialAlbumRecordingEdit'
                )
            );
            ar.validateArtistName(
                0, 'TEST ARTIST EDIT' + randomId('commercialAlbum')
            );
            ar.validateDuration(0, '00:04:00');
            ar.validateWorkIdUsingWorkSlot(0, 'mainWork');

            a.goToTab('Release Details');

            ard.validateTerritories(1, ['Brazil']);
            ard.validateReleaseDate(1, moment().format('YYYY-MM-DD'));
            ard.validateConfiguration(1, 'LP');
            ard.validateLabelName(
                1, 'TEST LABEL 2' + randomId('commercialAlbumLabel')
            );
            ard.validateCatalogueNumber(
                1, randomId('commercialAlbumCatalogueNumber2').slice(0, 15)
            );
            ard.validateLicenseCode(
                1, 'LICENSE2' + randomId('commercialAlbumLicenseCode')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by title',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByTitle',
            'albumsSanity'
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

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by artist',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByArtist',
            'albumsSanity'
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Artist');
            mhs.enterTerms('TEST ARTIST ' + randomId('commercialAlbum'));
            mhs.selectResultByIndex(0);

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by catalog',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByCatalog',
            'albumsSanity'
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Catalog');
            mhs.enterTerms(
                randomString('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            mhs.selectResultByIndex(0);

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by label',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByLabel'
        ],
        steps: function () {
            var mhs = steps.mainHeader.search,
                ah = steps.album.header;

            mhs.selectEntityType('Albums');
            mhs.selectFilterTag('Label');
            mhs.enterTerms('TEST LABEL ' + randomId('commercialAlbumLabel'));
            mhs.selectResultByIndex(0);

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created commercial album by title + artist',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByTitlePlusArtist'
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

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created library album by title + catalog',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByTitlePlusCatalog'
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
            mhs.selectFilterTag('Catalog');
            mhs.enterTerms(
                randomString('commercialAlbumCatalogueNumber').slice(0, 15)
            );
            mhs.selectResultByIndex(0);

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created library album by title + label',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByTitlePlusLabel'
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
            mhs.selectFilterTag('Label');
            mhs.enterTerms(
                'TEST LABEL ' + randomId('commercialAlbumLabel')
            );
            mhs.selectResultByIndex(0);

            ah.validateArtistName(
                'TEST ARTIST ' + randomId('commercialAlbum')
            );
        }
    },
    {
        name: 'Search for previously created library album by library + title',
        tags: [
            'searchForAlbums',
            'searchForAlbumsByLibraryPlusTitle'
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

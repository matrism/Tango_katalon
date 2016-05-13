'use strict';

let leftPad = require('left-pad');

exports.commonFeatureTags = [
    'addWorkRecordingAlbumsRegression',
    'addWorkRecordingAlbums',
    'workRecordingAlbumsRegression',
    'workRecordingAlbums',
    'workRecordingsRegression',
    'workRecordings',
    'works',
    'albums',
    'regresion'
];

let test = {};

test.album = {};
test.person = {};
test.work = {};

exports.beforeFeature = () => {
    let login = steps.login,
        base = steps.base;

    // ---

    login.itLogin();

    // ---

    test.id = random.id();

    test.album.title = `TEST ALBUM ${test.id}`;

    test.album.releaseDetails = _.times(4, i => {
        let ret = {};

        ret.id = random.id();

        ret.territories = [[
            'United States', 'Brazil', 'India', 'Poland'
        ][i]];

        {
            let iPadded = leftPad(i, 2, 0);

            ret.releaseDate = [
                2000 + i, iPadded, iPadded
            ].join('-');
        }

        ret.configuration = [
            'CD', 'LP', 'Digital', 'Hard Drive'
        ][i];

        ret.labelName = `TEST LABEL ${ret.id}`;

        ret.catalogueNumber = ret.id.slice(0, 15);

        ret.licenseCode = `LICENSE${ret.id}`;

        return ret;
    });

    test.person.name = `TEST PERSON ${test.id}`;

    test.work.title = `TEST WORK ${test.id}`;

    // ---

    describe('Create albums', () => {
        let na = steps.newAlbum,
            nard = na.releaseDetails;

        // ---

        base.useBlankEntityDataSlot('album', 'main');

        na.goToNewAlbumPage();

        na.enterTitle(test.album.title);

        na.selectReleaseType('Commercial');

        na.enterArtistSearchTerms(`TEST ARTIST ${test.id}`);
        na.createEnteredArtist();

        na.enterAlbumCode(`TESTALBUMCODE${test.id}`);

        // ---

        na.goToTab('Release Details');

        test.album.releaseDetails.forEach((row, i) => {
            nard.waitForTerritoriesSelectorToBeReady(i);
            nard.editTerritories(i);

            row.territories.forEach((val, j) => {
                describe(`Add territory ${j}`, () => {
                    nard.enterTerritorySearchTerms(i, val);
                    nard.selectTerritorySearchResultByIndex(0, val);
                });
            });

            nard.enterReleaseDate(i, row.releaseDate);

            nard.selectConfiguration(i, row.configuration);

            nard.enterLabelSearchTerms(i, row.labelName);
            nard.createEnteredLabel();

            nard.enterCatalogueNumber(i, row.catalogueNumber);

            nard.enterLicenseCode(i, row.licenseCode);
        });

        // ---

        na.save();
    });

    // ---

    describe('Create person', () => {
        let p = steps.person,
            np = steps.newPerson;

        // ---

        p.useBlankPersonSlot(0);

        np.goToNewPersonPage();

        np.enterLastName(test.person.name);

        np.enterAffiliatedSocietySearchTerms('BMI');
        np.selectAffiliatedSocietySearchResultByIndex(0, 'BMI');

        np.save();
    });

    describe('Fill required work creation fields', () => {
        let nw = steps.newWork;

        // ---

        base.useBlankEntityDataSlot('work', 'main');

        nw.goToNewWorkPage();

        nw.enterPrimaryWorkTitle(test.work.title);

        nw.enterCreatorSearchTerms(0, test.id);
        nw.selectCreatorSearchResultByIndex(0, test.person.name);

        nw.enterCreatorContribution(0, 100);

        nw.optToIncludeWorkOnWebsite(false);
    });
};

let addRecordings = () => {
    let wr = steps.workRecordings,
        alb = wr.albums;

    describe('Add recordings', () => {
        test.recRows = _.times(4, i => {
            describe(`Add recording ${i}`, () => {
                let recRow = {};

                recRow.id = random.id();

                recRow.title = `TEST RECORDING ${recRow.id}`;

                recRow.artist = {};

                recRow.artist.id = random.id();
                recRow.artist.name = `TEST ARTIST ${recRow.artist.id}`;

                // ---

                wr.enterTitle(i, recRow.title);
                wr.validateEnteredTitle(i, recRow.title);

                wr.enterArtistSearchTerms(i, recRow.artist.name);
                wr.createEnteredArtist();
                wr.validateEnteredArtistSearchTerms(i, recRow.artist.name);

                wr.validateRemovability(i, true);

                // ---

                alb.toggleExpand(i);

                alb.enterSearchTerms(i, 0, test.id);
                alb.selectSearchResultByIndex(0, test.album.title);
                alb.validateSelectedAlbumTitle(i, 0, test.album.title);

                wr.validateRemoveButtonState(i, 'disabled');

                wr.hoverRemoveButton(i);
                base.validateTooltipMessage('Delete Recording');

                alb.enterTrackNumber(i, 0, i + 1);
                alb.validateEnteredTrackNumber(i, 0, i + 1);

                return recRow;
            });
        });
    });
};

let validateRecordingIrremovabilities = () => {
    let base = steps.base,
        wr = steps.workRecordings;

    describe('Validate recording irremovabilities', () => {
        test.recRows.forEach((row, i) => {
            wr.hoverRemoveButton(i);

            base.validateTooltipMessage(
                'Cannot Delete a Recording while associated to an Album'
            );

            wr.validateRemoveButtonState(i, 'disabled');
        });
    });
};

let validateRecordingAlbumReleaseDetails = () => {
    let wr = steps.workRecordings,
        alb = wr.albums,
        rd = alb.releaseDetails;

    describe('Validate recording album release details', () => {
        test.recRows.forEach((row, i) => {
            describe(`Recording ${i}`, () => {
                alb.toggleExpand(i);
                rd.toggleExpand(0);

                // ---

                test.album.releaseDetails.forEach((row, i) => {
                    describe(`Release details row ${i}`, () => {
                        rd.validateTerritories(i, row.territories);
                        rd.validateReleaseDate(i, row.releaseDate);
                        rd.validateConfiguration(i, row.configuration);
                        rd.validateLabelName(i, row.labelName);
                        rd.validateCatalogueNumber(i, row.catalogueNumber);
                        rd.validateLicenseCode(i, row.licenseCode);
                    });
                });
            });
        });
    });
};

let openAlbum = () => {
    let mhs = steps.mainHeader.search;

    // ---

    mhs.selectEntityType('Albums');

    mhs.enterTerms(test.id);
    mhs.selectResultByIndex(0, test.album.title);
};

let validateAlbumRecordings = () => {
    let alb = steps.album,
        ah = alb.header,
        ar = alb.recordings;

    // ---

    ah.validateTrackCount(test.recRows.length);

    describe('Validate recordings', () => {
        test.recRows.forEach((recRow, i) => {
            describe(`Recording ${i}`, () => {
                ar.validateTrackNumber(i, i + 1);
                ar.validateTitle(i, recRow.title);
                ar.validateArtistName(i, recRow.artist.name);
            });
        });
    });
};

exports.feature = [
    {
        name: 'Add recordings and associate to album (create mode)',

        tags: [],

        steps: () => {
            let nw = steps.newWork,
                w = steps.work;

            // ---

            nw.continueToNextTab();

            addRecordings();

            nw.save();

            // ---

            w.goToRecordingsTab();

            validateRecordingIrremovabilities();

            validateRecordingAlbumReleaseDetails();

            // ---

            openAlbum();

            validateAlbumRecordings();
        }
    },

    {
        name: 'Add recordings and associate to album (edit mode)',

        tags: [],

        steps: () => {
            let base = steps.base,
                nw = steps.newWork,
                w = steps.work,
                wr = steps.workRecordings;

            // ---

            nw.save();

            // ---

            w.goToRecordingsTab();

            wr.addRecordings();

            addRecordings();

            wr.save();

            // ---

            validateRecordingIrremovabilities();

            validateRecordingAlbumReleaseDetails();

            // ---

            base.refreshPage();

            validateRecordingIrremovabilities();

            validateRecordingAlbumReleaseDetails();

            // ---

            openAlbum();

            validateAlbumRecordings();
        }
    }
];

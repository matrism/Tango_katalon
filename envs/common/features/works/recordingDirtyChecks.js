'use strict';

let leftPad = require('left-pad');

let randomId = random.id.makeMemoizedGenerator();
let randomString = random.string.makeMemoizedGenerator();

exports.id = 'b54b3723-ac99-415a-92ed-4e37a059515e';

exports.commonFeatureTags = [
    'workRecordingDirtyChecksRegression',
    'workRecordingDirtyChecks',
    'workDirtyChecksRegression',
    'workDirtyChecks',
    'dirtyChecks',
    'works',
    'regression'
];

let test = {};

test.album = {};
test.person = {};
test.work = {};

exports.beforeFeature = () => {
    let login = steps.login,
        base = steps.base;

    login.itLogin();

    test.id = random.id();

    test.album.title = `TEST ALBUM ${test.id}`;

    test.person.name = `TEST PERSON ${test.id}`;

    test.work.title = `TEST WORK ${test.id}`;

    describe('Create album', () => {
        let na = steps.newAlbum,
            nard = na.releaseDetails;

        base.useBlankEntityDataSlot('album', 'main');

        na.goToNewAlbumPage();

        na.enterTitle(test.album.title);

        na.selectReleaseType('Commercial');

        na.enterArtistSearchTerms(`TEST ARTIST ${test.id}`);
        steps.base.sleep(5000);
        na.createEnteredArtist();
        steps.base.sleep(5000);

        na.enterAlbumCode(`TESTALBUMCODE${test.id}`);

        na.save();
    });

    describe('Create person', () => {
        let p = steps.person,
            np = steps.newPerson;

        p.useBlankPersonSlot(0);

        np.goToNewPersonPage();

        np.enterLastName(test.person.name);

        np.enterAffiliatedSocietySearchTerms('BMI');
        np.selectAffiliatedSocietySearchResultByIndex(0, 'BMI');

        np.save();
    });

    describe('Create work and go to recordings edit screen', () => {
        let nw = steps.newWork,
            w = steps.work,
            wr = steps.workRecordings;

        base.useBlankEntityDataSlot('work', 'main');

        nw.goToNewWorkPage();

        nw.enterPrimaryWorkTitle(test.work.title);

        nw.enterCreatorSearchTerms(0, test.id);
        nw.selectCreatorSearchResultByIndex(0, test.person.name);

        nw.enterCreatorContribution(0, 100);

        nw.optToIncludeWorkOnWebsite(false);

        steps.base.sleep(5000);

        nw.save();

        w.goToRecordingsTab();

        wr.addRecordings();
    });
};

let testCancellationOptions = (setup, onContinue, onConfirm) => {
    let base = steps.base,
        w = steps.work,
        wr = steps.workRecordings;

    describe('Continue editing option', () => {
        setup();

        wr.cancelChanges();

        base.dirtyCheckContinueEditing();

        onContinue();
    });

    base.refreshPage();

    steps.base.sleep(5000);

    w.goToRecordingsTab();

    wr.addRecordings();

    describe('Confirm cancellation option', () => {
        setup();

        wr.cancelChanges();

        base.dirtyCheckConfirmCancellation();

        base.refreshPage();

        base.sleep(5000);

        w.goToRecordingsTab();

        wr.addRecordings();

        onConfirm();
    });
};

exports.feature = [
    {
        name: 'Validate title field dirty check',

        tags: [],

        steps: () => {
            let wr = steps.workRecordings;

            testCancellationOptions(
                () => {
                    wr.enterTitle(0, 'TEST');
                    wr.validateEnteredTitle(0, 'TEST');
                },

                () => wr.validateEnteredTitle(0, 'TEST'),

                () => wr.expectEmptyTitleField(0)
            );
        }
    },

    {
        name: 'Validate artist field dirty check',

        tags: [],

        steps: () => {
            let wr = steps.workRecordings;

            let artistName = i => 'TEST ARTIST ' + randomId(i);

            let i = 0;

            testCancellationOptions(
                () => {
                    ++i;

                    wr.enterArtistSearchTerms(0, artistName(i));
                    wr.createEnteredArtist();
                    wr.validateEnteredArtistSearchTerms(0, artistName(i));
                },

                () => wr.validateEnteredArtistSearchTerms(0, artistName(i)),

                () => wr.expectEmptyArtistSearchTermsField(0)
            );
        }
    },

    {
        name: 'Validate duration field dirty check',

        tags: [],

        steps: () => {
            let wr = steps.workRecordings;

            testCancellationOptions(
                () => {
                    wr.enterDuration(0, '010203');
                    wr.validateEnteredDuration(0, '01 : 02 : 03');
                },

                () => wr.validateEnteredDuration(0, '01 : 02 : 03'),

                () => wr.expectEmptyDurationField(0)
            );
        }
    },

    {
        name: 'Validate first use flag dirty check',

        tags: [],

        steps: criticalScenario(() =>
    {
            let wr = steps.workRecordings;

            //let artistName = i => 'TEST ARTIST ' + randomId(i);

            let i = 0;

            testCancellationOptions(
                () => {
                    ++i;
                    wr.enterTitle(0, 'TEST');
                    wr.enterArtistSearchTerms(0, 'TEST ARTIST ' + randomString('person' + i))
                    wr.createEnteredArtist();
                    wr.toggleFirstUseFlag(0);
                    wr.validateFirstUseFlagState(0, true);
                },

                () => wr.validateFirstUseFlagState(0, true),

                () => wr.validateFirstUseFlagState(0, false)
            );
        })
    },

    {
        name: 'Validate selected album dirty check',

        tags: [],

        steps: criticalScenario(() => {
            let wr = steps.workRecordings,
                alb = wr.albums;

            testCancellationOptions(
                () => {
                    wr.toggle(0);
                    steps.base.sleep(5000);
                    alb.enterSearchTerms(0, 0, test.id);
                    alb.selectSearchResultByIndex(0, 0, test.album.title);
                    alb.validateSelectedAlbumTitle(0, 0, test.album.title);
                },

                () => alb.validateSelectedAlbumTitle(0, 0, test.album.title),

                () => {
                    wr.toggle(0);

                }
            );
        })
    },

    {
        name: 'Validate album track number dirty check',

        tags: [],

        steps: criticalScenario(() => {
            let base = steps.base,
                wr = steps.workRecordings,
                w = steps.work,
                alb = wr.albums;

            wr.enterTitle(0, 'TEST');
            wr.validateEnteredTitle(0, 'TEST');

            wr.enterArtistSearchTerms(0, 'TEST ARTIST ' + random.id());
            wr.createEnteredArtist();

            wr.toggle(0);

            alb.enterSearchTerms(0, 0, test.id);
            alb.selectSearchResultByIndex(0, 0, test.album.title);

            wr.save();

            wr.edit();

            describe('Continue editing option', () => {
                //wr.toggle(0);
                alb.enterTrackNumber(0, 1, 3);
                alb.validateEnteredTrackNumber(0, 1, 3);

                wr.cancelChanges();
                base.dirtyCheckContinueEditing();

                alb.validateEnteredTrackNumber(0, 1, 3);
            });

            base.refreshPage();

            w.goToRecordingsTab();

            wr.edit();

            describe('Confirm cancellation option', () => {
                wr.toggle(0);
                alb.enterTrackNumber(0, 1, 3);
                alb.validateEnteredTrackNumber(0, 1, 3);

                wr.cancelChanges();
                base.dirtyCheckConfirmCancellation();


                wr.edit();

                wr.toggle(0);
                alb.expectEmptyTrackNumberField(0, 1);
            });
        })
    },

    {
        name: 'Validate recording removal dirty check',

        tags: [],

        steps: criticalScenario(() => {
            let base = steps.base,
                w = steps.work,
                wr = steps.workRecordings;

            wr.enterTitle(0, 'TEST');
            wr.validateEnteredTitle(0, 'TEST');

            {
                let artistName = 'TEST ARTIST ' + random.id();

                wr.enterArtistSearchTerms(0, artistName);
                wr.createEnteredArtist();
                wr.validateEnteredArtistSearchTerms(0, artistName);
            }

            wr.save();

            wr.edit();

            describe('Continue editing option', () => {
                wr.validateRowCount(2);

                wr.toggle(0);


                wr.remove(0);
                wr.validateRowCount(1);

                wr.cancelChanges();
                base.dirtyCheckContinueEditing();

                wr.validateRowCount(1);
            });

        base.refreshPage();

        w.goToRecordingsTab();

        wr.edit();

            describe('Confirm cancellation option', () => {
                wr.validateRowCount(2);

                wr.toggle(0);


                wr.remove(0);
                wr.validateRowCount(1);

                wr.cancelChanges();
                base.dirtyCheckConfirmCancellation();

                wr.edit();

                wr.validateRowCount(3);
            });
        })
    },

    {
        name: 'Validate album removal dirty check',

        tags: ['TS370'],

        steps: criticalScenario(() => {
            let base = steps.base,
                w = steps.work,
                wr = steps.workRecordings,
                alb = wr.albums;

            wr.enterTitle(0, 'TEST');
            wr.validateEnteredTitle(0, 'TEST');

            {
                let artistName = 'TEST ARTIST ' + random.id();

                wr.enterArtistSearchTerms(0, artistName);
                wr.createEnteredArtist();
                wr.validateEnteredArtistSearchTerms(0, artistName);
            }

            wr.toggle(0);
            alb.enterSearchTerms(0, 0, test.id);
            alb.selectSearchResultByIndex(0, 0, test.album.title);

            wr.save();

            wr.edit();

            describe('Continue editing option', () => {

                alb.validateRowCount(0, 2);
                alb.remove(0, 0);
                wr.cancelChanges();
                base.dirtyCheckContinueEditing();

                //alb.validateRowCount(0, 3);
            });

            base.refreshPage();

            w.goToRecordingsTab();

            wr.edit();

            describe('Confirm cancellation option', () => {
                wr.toggle(0);

                alb.validateRowCount(0, 2);

                alb.remove(0, 0);
                alb.validateRowCount(0, 1);

                wr.cancelChanges();
                base.dirtyCheckConfirmCancellation();

                wr.edit();

                wr.toggle(0);
                alb.validateRowCount(0, 2);
            });
        })
    }
];

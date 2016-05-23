'use strict';

let leftPad = require('left-pad');

let randomId = random.id.makeMemoizedGenerator();

exports.commonFeatureTags = [
    'removeWorkRecordingsRegression',
    'removeWorkRecordings',
    'workRecordingsRegression',
    'workRecordings',
    'works',
    'regression'
];

let test = {};

test.scenario = {};
test.person = {};
test.work = {};

test.scenario.i = 0;

exports.beforeFeature = () => {
    steps.login.itLogin();

    ++test.scenario.i;

    test.scenario.id = randomId(test.scenario.i);

    test.person.name = `TEST PERSON ${test.scenario.id}`;
    test.work.title = `TEST WORK ${test.scenario.id}`;

    describe('Create person', () => {
        let p = steps.person;

        p.useBlankPersonSlot(0);

        let np = steps.newPerson;

        np.goToNewPersonPage();

        np.enterLastName(test.person.name);

        np.enterAffiliatedSocietySearchTerms('BMI');
        np.selectAffiliatedSocietySearchResultByIndex(0, 'BMI');

        np.save();
    });

    describe('Create work', () => {
        let base = steps.base;

        base.useBlankEntityDataSlot('work', test.scenario.i);

        let nw = steps.newWork;

        nw.goToNewWorkPage();

        nw.enterPrimaryWorkTitle(test.work.title);

        nw.enterCreatorSearchTerms(0, test.scenario.id);
        nw.selectCreatorSearchResultByIndex(0, test.person.name);

        nw.enterCreatorContribution(0, 100);

        nw.optToIncludeWorkOnWebsite(false);
    });
};

exports.feature = [
    {
        name: 'Add recording rows and remove them (create mode)',

        tags: [],

        steps: () => {
            let base = steps.base,
                nw = steps.newWork;

            nw.continueToNextTab();

            let wr = steps.workRecordings;

            let testRecRows = [];

            describe('Add some rows', () => {
                _.times(4, i => {
                    describe(`Add row ${i}`, () => {
                        let recRow = {};

                        testRecRows.push(recRow);

                        recRow.id = randomId(
                            `recording${test.scenario.i}:${i}`
                        );

                        recRow.title = `TEST RECORDING ${recRow.id}`;
                        recRow.artistName = `TEST ARTIST ${recRow.id}`;

                        wr.enterTitle(i, recRow.title);
                        wr.validateEnteredTitle(i, recRow.title);

                        wr.enterArtistSearchTerms(i, recRow.artistName);
                        wr.createEnteredArtist();

                        wr.validateEnteredArtistSearchTerms(
                            i, recRow.artistName
                        );

                        wr.enterDuration(i, stringRepeat(
                            3, leftPad(i, 2, 0)
                        ));

                        wr.validateEnteredDuration(i, arrayRepeat(
                            3, leftPad(i, 2, 0)
                        ).join(' : '));

                        wr.toggleFirstUseFlag(i);
                        wr.validateFirstUseFlagState(i, true);

                        wr.hoverRemoveButton(i);
                        base.validateTooltipMessage('Delete Recording');
                    });
                });
            });

            _.times(2, i => {
                describe(`Remove row ${i}`, () => {
                    wr.remove(i);
                    testRecRows.splice(i, 1);
                });
            });

            describe('Validate remaining ones', () => {
                wr.validateRowCount(testRecRows.length + 1);

                _.times(2, i => {
                    describe(`Validate row ${i}`, () => {
                        let recRow = testRecRows[i];

                        wr.validateEnteredTitle(i, recRow.title);

                        wr.validateEnteredArtistSearchTerms(i, recRow.artistName);

                        wr.validateEnteredDuration(i, arrayRepeat(3, leftPad(
                            i * 2 + 1, 2, 0
                        )).join(' : '));

                        wr.validateFirstUseFlagState(i, i === 1);
                    });
                });
            });
        }
    },

    {
        name: 'Add recording rows and remove them (edit mode)',

        tags: [],

        steps: () => {
            let base = steps.base,
                nw = steps.newWork;

            nw.save();

            let w = steps.work;

            w.goToRecordingsTab();

            let wr = steps.workRecordings;

            wr.addRecordings();

            let testRecRows = [];

            describe('Add some rows', () => {
                _.times(4, i => {
                    describe(`Add row ${i}`, () => {
                        let recRow = {};

                        testRecRows.push(recRow);

                        recRow.id = randomId(`recording${i}`);
                        recRow.title = `TEST RECORDING ${recRow.id}`;
                        recRow.artistName = `TEST ARTIST ${recRow.id}`;

                        wr.enterTitle(i, recRow.title);
                        wr.validateEnteredTitle(i, recRow.title);

                        wr.enterArtistSearchTerms(i, recRow.artistName);
                        wr.createEnteredArtist();

                        wr.validateEnteredArtistSearchTerms(
                            i, recRow.artistName
                        );

                        wr.enterDuration(i, stringRepeat(
                            3, leftPad(i, 2, 0)
                        ));

                        wr.validateEnteredDuration(i, arrayRepeat(
                            3, leftPad(i, 2, 0)
                        ).join(' : '));

                        wr.toggleFirstUseFlag(i);
                        wr.validateFirstUseFlagState(i, true);

                        wr.hoverRemoveButton(i);
                        base.validateTooltipMessage('Delete Recording');
                    });
                });
            });

            _.times(2, i => {
                describe(`Remove row ${i}`, () => {
                    wr.remove(i);
                    testRecRows.splice(i, 1);
                });
            });

            describe('Validate remaining ones', () => {
                wr.validateRowCount(testRecRows.length + 1);

                _.times(2, i => {
                    describe(`Validate row ${i}`, () => {
                        let recRow = testRecRows[i];

                        wr.validateEnteredTitle(i, recRow.title);

                        wr.validateEnteredArtistSearchTerms(i, recRow.artistName);

                        wr.validateEnteredDuration(i, arrayRepeat(3, leftPad(
                            i * 2 + 1, 2, 0
                        )).join(' : '));

                        wr.validateFirstUseFlagState(i, i === 1);
                    });
                });
            });
        }
    },

    {
        name: 'Save recording rows, then edit and remove them',

        tags: [],

        steps: () => {
            let nw = steps.newWork;

            nw.continueToNextTab();

            let wr = steps.workRecordings;

            let testRecRows = [];

            describe('Add some rows', () => {
                _.times(4, i => {
                    describe(`Add row ${i}`, () => {
                        let recRow = {};

                        testRecRows.push(recRow);

                        recRow.id = randomId(
                            `recording${test.scenario.i}:${i}`
                        );

                        recRow.title = `TEST RECORDING ${recRow.id}`;
                        recRow.artistName = `TEST ARTIST ${recRow.id}`;

                        wr.enterTitle(i, recRow.title);
                        wr.validateEnteredTitle(i, recRow.title);

                        wr.enterArtistSearchTerms(i, recRow.artistName);
                        wr.createEnteredArtist();

                        wr.validateEnteredArtistSearchTerms(
                            i, recRow.artistName
                        );

                        wr.enterDuration(i, stringRepeat(
                            3, leftPad(i, 2, 0)
                        ));

                        wr.validateEnteredDuration(i, arrayRepeat(
                            3, leftPad(i, 2, 0)
                        ).join(' : '));

                        wr.toggleFirstUseFlag(i);
                        wr.validateFirstUseFlagState(i, true);
                    });
                });
            });

            nw.save();

            let w = steps.work;

            w.goToRecordingsTab();

            wr.edit();

            let alb = wr.albums;

            _.times(2, i => {
                describe(`Remove rows ${i}`, () => {
                    let recRow = testRecRows[i];

                    wr.findByEnteredTitle(recRow.title, 'row index');

                    let iFound = fromTestVariable('row index');

                    wr.toggle(iFound);
                    wr.toggle(iFound);

                    wr.remove(iFound);
                    testRecRows.splice(i, 1);
                });
            });

            wr.save();

            let validateRemainingOnes = () => {
                describe('Validate remaining ones', () => {
                    wr.validateRowCount(testRecRows.length + 1);

                    _.times(2, i => {
                        describe(`Validate row ${i}`, () => {
                            let recRow = testRecRows[i];

                            wr.findByEnteredTitle(recRow.title, 'row index');

                            let iFound = fromTestVariable('row index');

                            wr.validateEnteredArtistSearchTerms(
                                iFound, recRow.artistName
                            );

                            wr.validateEnteredDuration(iFound, arrayRepeat(
                                3, leftPad(i * 2 + 1, 2, 0)
                            ).join(' : '));

                            wr.validateFirstUseFlagState(iFound, i === 1);
                        });
                    });
                });
            };

            wr.edit();

            validateRemainingOnes();

            steps.base.refreshPage();

            wr.edit();

            validateRemainingOnes();
        }
    }
];

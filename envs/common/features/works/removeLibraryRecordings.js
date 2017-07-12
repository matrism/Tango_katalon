'use strict';

let leftPad = require('left-pad');

let randomId = random.id.makeMemoizedGenerator();

exports.id = '782ba831-3311-4af6-8378-406cff911bd3';

exports.commonFeatureTags = [
    'removeLibraryWorkRecordingsRegression',
    'removeLibraryWorkRecordings',
    'libraryWorkRecordingsRegression',
    'libraryWorkRecordings',
    'libraryWorks',
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

    test.work.title = `TEST LIBRARY WORK ${test.scenario.id}`;
    test.work.libraryName = 'AUDIOMACHINE';

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

    describe('Create library work', () => {
        let base = steps.base,
            nw = steps.newWork;

        base.useBlankEntityDataSlot('work', test.scenario.i);

        nw.goToNewWorkPage();

        nw.enterPrimaryWorkTitle(test.work.title);

        nw.enterCreatorSearchTerms(0, test.scenario.id);
        nw.selectCreatorSearchResultByIndex(0, test.person.name);

        nw.enterCreatorContribution(0, 100);

        nw.selectIntendedPurpose('Library Work');
        nw.selectMusicLibrary(test.work.libraryName);

        nw.optToIncludeWorkOnWebsite(false);
    });
};

exports.feature = [
    {
        name: 'Add recording rows and remove them (create mode)',

        tags: [],

        steps: criticalScenario(() =>
        {
            let base = steps.base,
                nw = steps.newWork,
                wr = steps.workRecordings;

            nw.continueToNextTab();

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

                        wr.enterTitle(i, recRow.title);
                        wr.validateEnteredTitle(i, recRow.title);

                        wr.validateLibraryName(i, 'AUDM');

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

                        wr.validateLibraryName(i, 'AUDM');

                        wr.validateEnteredDuration(i, arrayRepeat(3, leftPad(
                            i * 2 + 1, 2, 0
                        )).join(' : '));

                        wr.validateFirstUseFlagState(i, i === 1);
                    });
                });
            });
        })
    },

    {
        name: 'Add recording rows and remove them (edit mode)',

        tags: [],

        steps: criticalScenario(() => {
            let base = steps.base,
                nw = steps.newWork,
                w = steps.work,
                wr = steps.workRecordings;

            nw.save();

            w.goToRecordingsTab();

            wr.addRecordings();

            let testRecRows = [];

            describe('Add some rows', () => {
                _.times(4, i => {
                    describe(`Add row ${i}`, () => {
                        let recRow = {};

                        testRecRows.push(recRow);

                        recRow.id = randomId(`recording${i}`);
                        recRow.title = `TEST RECORDING ${recRow.id}`;

                        wr.enterTitle(i, recRow.title);
                        wr.validateEnteredTitle(i, recRow.title);

                        wr.validateLibraryName(i, 'AUDM');

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

                        wr.validateLibraryName(i, 'AUDM');

                        wr.validateEnteredDuration(i, arrayRepeat(3, leftPad(
                            i * 2 + 1, 2, 0
                        )).join(' : '));

                        wr.validateFirstUseFlagState(i, i === 1);
                    });
                });
            });
        })
    },

    {
        name: 'Save recording rows, then edit and remove them',

        tags: ['SaveRecording'],

        steps: criticalScenario(() =>
        {
            let nw = steps.newWork,
                w = steps.work,
                wr = steps.workRecordings,
                alb = wr.albums;

            nw.continueToNextTab();

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

                        wr.enterTitle(i, recRow.title);
                        wr.validateEnteredTitle(i, recRow.title);

                        wr.validateLibraryName(i, 'AUDM');

                        wr.enterDuration(i, stringRepeat(
                            3, leftPad(i, 2, 0)
                        ));

                        wr.validateEnteredDuration(i, arrayRepeat(
                            3, leftPad(i, 2, 0)
                        ).join(' : '));

                        //wr.toggleFirstUseFlag(i);
                        //wr.validateFirstUseFlagState(i, true);
                    });
                });
            });

            nw.save();

            w.goToRecordingsTab();

            wr.edit();

            _.times(2, i => {
                describe(`Remove row ${i}`, () => {
                    let recRow = testRecRows[i];

                    wr.findByEnteredTitle(recRow.title, 'row index');

                    let iFound = fromTestVariable('row index');

                    wr.toggle(iFound);
                    wr.toggleDown(iFound);

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

                            wr.validateLibraryName(iFound, 'AUDM');

                            wr.validateEnteredDuration(iFound, arrayRepeat(
                                3, leftPad(i * 2 + 1, 2, 0)
                            ).join(' : '));

                            //wr.validateFirstUseFlagState(iFound, i === 1);
                        });
                    });
                });
            };

            w.goToRecordingsTab();

            wr.edit();

            validateRemainingOnes();

      })
    }
];

'use strict';

let _ = require('lodash'),
    randomString = random.string.makeMemoizedGenerator(),
    randomStringLowerCase = random.stringLowerCase.makeMemoizedGenerator();

exports.id = '20220195-f59d-4f4d-98de-f52aec8e2603';

exports.commonFeatureTags = [
    'royaltyProcessing',
    'crossReference',
    'crossReferenceRegression',
    'regression'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create works',
        tags: ['crossReferenceIncoming', 'crossReferenceTango'],
        steps: () => {
            let workData = {
                    creators_and_contributions: [{
                        role: 'CA',
                        name: 'Cristina',
                        percentage: 100
                    }]
                };

            for (let i = 0; i < 2; i++) {
                workData.primary_work_title = 'WORK TAT ' + randomString(i);
                steps.criticalSection.wrap(() => {
                    steps.work.createWork(workData, 'workId' + i);
                });
            }
        }
    },
    {
        name: 'Add Cross Reference',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Tango Works');

            steps.crossReference.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            steps.crossReference.expectTangoWorkToBeVisible();
            steps.crossReference.clickAddCrossReferenceButton();
            steps.crossReference.expectCrossReferenceFormToBeVisible();
            steps.crossReference.expectFormLabelsToBe([
                'Incoming Work Details:',
                'Title:',
                'Creators:',
                'ID:',
                'Income Provider:'
            ]);
            steps.crossReference.addForm.enterTitle('test reference');
            steps.crossReference.addForm.enterCreators('test creator');
            steps.crossReference.addForm.enterId(randomStringLowerCase(0));
            steps.crossReference.addForm.enterIncomeProvider('BMI');
            steps.crossReference.addForm.confirm();
        },
    },
    {
        name: 'Search for incoming work and rematch',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork(randomStringLowerCase(0), 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
            steps.crossReference.items.expand();
            steps.crossReference.items.rematch();
            steps.crossReference.items.searchForRematchWork('WORK TAT ' + randomString(1), 'Title');
            steps.crossReference.items.confirm();
        },
    },
    {
        name: 'Search for incoming work, validate rematched work and unmatch',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork(randomStringLowerCase(0), 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
            steps.crossReference.expectTangoWorkTitleToContain('WORK TAT ' + randomString(1));
            steps.crossReference.items.expand();
            steps.crossReference.items.unmatch();
            steps.crossReference.items.confirm();
        },
    },
    {
        name: 'Search for unmatched incoming work and expect no results',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.enterIncomingWorkSearchTerms(randomStringLowerCase(0), 'Incoming Work ID');
            steps.crossReference.expectNoResultsMessage();
        },
    },
    {
        name: 'Add Cross Reference',
        tags: ['crossReferenceTango'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Tango Works');
            steps.crossReference.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            steps.crossReference.expectTangoWorkToBeVisible();
            steps.crossReference.clickAddCrossReferenceButton();
            steps.crossReference.expectCrossReferenceFormToBeVisible();
            steps.crossReference.addForm.enterTitle('test reference');
            steps.crossReference.addForm.enterCreators('test creator');
            steps.crossReference.addForm.enterId(randomStringLowerCase(1));
            steps.crossReference.addForm.enterIncomeProvider('BMI');
            steps.crossReference.addForm.confirm();
        },
    },
    {
        name: 'Search for Tango work and rematch',
        tags: ['crossReferenceTango'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Tango Works');
            steps.crossReference.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            //steps.crossReference.searchForTangoWork('WW 015079806 00', 'Work ID');
            steps.crossReference.expectTangoWorkToBeVisible();
            steps.crossReference.items.expand();
            steps.crossReference.items.rematch();
            steps.crossReference.items.searchForRematchWork('WORK TAT ' + randomString(1), 'Title');
            //steps.crossReference.items.searchForRematchWork('WORK TAT 2XTIKXA8JJ8MMU4MCMMRNU8V9I1007U5', 'Title');
            steps.crossReference.items.confirm();
        },
    },
    {
        name: 'Search for Tango work, validate rematched work and unmatch',
        tags: ['crossReferenceTango'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Tango Works');
            steps.crossReference.searchForTangoWork(fromTestVariable('workId1'), 'Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.items.expand();
            steps.crossReference.items.unmatch();
            steps.crossReference.items.confirm();
        },
    },

    {
        name: 'Search for unmatched Tango work and expect no match',
        tags: ['crossReferenceTango'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Tango Works');
            steps.crossReference.searchForTangoWork(fromTestVariable('workId1'), 'Work ID');
            steps.crossReference.expectNoCrossReference();
        },
    },
];

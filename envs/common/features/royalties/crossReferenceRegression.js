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
        tags: ['crossReferenceIncoming'],
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
                steps.work.createWork(workData, 'workId' + i);
            }
        }
    },
    {
        name: 'Cross Reference - Add',
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
            steps.crossReference.addForm.enterId(randomStringLowerCase('add'));
            steps.crossReference.addForm.enterIncomeProvider('BMI');
            steps.crossReference.addForm.confirm();
        },
    },
    {
        name: 'Cross Reference - Search incoming work and rematch',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork(randomStringLowerCase('add'), 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
            steps.crossReference.items.expand();
            steps.crossReference.items.rematch();
            steps.crossReference.items.searchForRematchWork('WORK TAT ' + randomString(1), 'Title');
            steps.crossReference.items.confirm();
        },
    },
    {
        name: 'Cross Reference - Validate matching work and unmatch',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork(randomStringLowerCase('add'), 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
            steps.crossReference.expectTangoWorkTitleToContain('WORK TAT ' + randomString(1));
            steps.crossReference.items.expand();
            steps.crossReference.items.unmatch();
            steps.crossReference.items.confirm();
        },
    },
    {
        name: 'Cross Reference - Validate unmatched incoming work',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.enterIncomingWorkSearchTerms(randomStringLowerCase('add'), 'Incoming Work ID');
            steps.crossReference.expectNoResultsMessage();
        },
    },
    {
        name: 'Cross Reference - Search for Tango work',
        tags: ['crossReferenceSearchTangoWorkRegression'],
        steps: () => {
            let filters = ['Work ID', 'Title', 'Creator'],
                terms = ['WW 015069382 00', 'test', 'test'];

            _.each(filters, (val, idx) => {
                steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
                steps.crossReference.selectSearchCriterion('Tango Works');

                steps.crossReference.searchForTangoWork(terms[idx], val);
                steps.crossReference.expectTangoWorkToBeVisible();
            });
        },
    },
];

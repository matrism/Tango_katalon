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
        tags: [],
        steps: () => {
            let workData = {
                    creators_and_contributions: [{
                        role: 'CA',
                        name: 'Cristina',
                        percentage: 100
                    }]
                };

            for (let i = 0; i < 1; i++) {
                workData.primary_work_title = 'WORK TAT ' + randomString(i);
                steps.work.createWork(workData, 'workId' + i);
            }
        }
    },
    {
        name: 'Cross Reference - Add',
        tags: ['crossReferenceAddRegression'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Tango Works');

            steps.crossReference.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            //steps.crossReference.searchForTangoWork('WW 015079700 00', 'Work ID');
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
            steps.crossReference.addForm.enterTitle('test reference 123');
            steps.crossReference.addForm.enterCreators('test creator');
            steps.crossReference.addForm.enterId('reference' + randomStringLowerCase('add'));
            steps.crossReference.addForm.enterIncomeProvider('BMI');
            steps.crossReference.addForm.confirm();
        },
    },
    {
        name: 'Cross Reference - Search incoming work',
        tags: ['crossReferenceSearchIncomingWorkRegression'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork('reference' + randomStringLowerCase('add'), 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
            steps.crossReference.items.expand();
            steps.crossReference.items.rematch();
            steps.crossReference.items.searchForRematchWork('WORK TAT ' + randomString(0), 'Title');
            steps.base.sleep(5000);
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

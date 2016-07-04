'use strict';

let _ = require('lodash');

exports.id = '20220195-f59d-4f4d-98de-f52aec8e2603';

exports.commonFeatureTags = ['royaltyProcessing', 'crossReference', 'regression'];

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

            for (let i = 0; i < createWorks; i++) {
                workData.primary_work_title = 'WORK TAT ' + randomString(i);
                steps.work.createWork(workData, 'workId' + i);
            }
        }
    },
    {
        name: 'Cross Reference - Search',
        tags: ['crossReferenceSearch'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork('test', 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
            steps.crossReference.items.expand();
            steps.crossReference.items.rematch();
            steps.crossReference.items.searchForRematchWork('WW 015069382 00', 'Work ID');
            steps.base.sleep(5000);
        },
    },
    {
        name: 'Cross Reference - Add',
        tags: ['crossReferenceAdd'],
        steps: () => {
            let filters = ['Work ID', 'Title', 'Creator'],
                terms = ['WW 015069382 00', 'test', 'test'];

            _.each(filters, (val, idx) => {
                steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
                steps.crossReference.selectSearchCriterion('Tango Works');

                steps.crossReference.searchForTangoWork(terms[idx], val);
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
            });
        },
    },
];

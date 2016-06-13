'use strict';

var using = require('../../../../helpers/fnutils').using,
    _ = require('lodash');

exports.commonFeatureTags = ['royaltyProcessing', 'crossReference'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Cross Reference - Search',
        tags: ['crossReferenceSearch'],
        steps: () => {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork('test', 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
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

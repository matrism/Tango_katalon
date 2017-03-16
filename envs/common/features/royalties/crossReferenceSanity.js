'use strict';

let _ = require('lodash');

exports.id = '1b5971ea-db9d-4fc0-bffc-358be66bbbf2';

exports.commonFeatureTags = [
    'royaltyProcessing',
    'crossReference',
    'crossReferenceSanity',
    'sanity',
    'TS-209'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Cross Reference - Search',
        tags: ['crossReferenceSearchSanity'],
        steps: function() {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            steps.crossReference.selectSearchCriterion('Incoming Works');
            steps.crossReference.searchForIncomingWork('test', 'Incoming Work ID');
            steps.crossReference.expectIncomingWorkToBeVisible();
            steps.crossReference.expectIncomingWorkIdToContainSearchTerm();
        },
    },
    {
        name: 'Cross Reference - Add',
        tags: ['crossReferenceAddSanity'],
        steps: function() {
            let filters = ['Work ID', 'Title', 'Creator'],
                terms = ['WW 015069382 00', 'test', 'test'];

            _.each(filters, (val, idx) => {
                steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
                steps.crossReference.selectSearchCriterion('Tango Works');

                steps.crossReference.searchForTangoWork(terms[idx], val);
                steps.crossReference.expectTangoWorkToBeVisible();
                steps.crossReference.clickAddCrossReferenceButton();
                steps.crossReference.addForm.expectCrossReferenceFormToBeVisible();
                steps.crossReference.addForm.expectFormLabelsToBe([
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

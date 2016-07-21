'use strict';

let _ = require('lodash');

exports.id = '1845233b-e44d-44f7-979a-df74593f9061';

exports.commonFeatureTags = [
    'royaltyProcessing',
    'suspenseManagement',
    'suspenseManagementSanity',
    'sanity'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Cross Reference - Search',
        tags: [],
        steps: () => {
            let sm = steps.suspenseManagement,
                smf = sm.filters,
                smas = sm.activitySummary;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Suspense Management');

            //smf.validateDefaultProcessingTerritory();
            //smf.validateDefaultRoyaltyPeriod();

            //sm.validateDefaultTabSelected();

            smas.validate([
                'Opening Balance',
                '(April 1, 2016)',
                '0.0000',
                'Activity in this Period',
                '(as of July 21, 2016)',
                'Unmatched',
                'Unmatched',
                '0.0000',
                'Expected to be added',
                '0.0000',
                '0.0000',
                'Matched',
                'Matched',
                '- 0.0000',
                'Profit',
                'Profit - User',
                '- 0.0000',
                'Expected to be Aged on Final Run Date',
                '- 0.0000',
                '- 0.0000',
                'Expected Closing Balance',
                '0.0000'
            ]);

            //smf.selectProcessingTerritory('Poland');
            //smf.selectRoyaltyPeriod('July 2016 - December 2016');
        }
    }
];

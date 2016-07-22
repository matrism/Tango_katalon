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
        name: 'Suspense Management - Activity Summary',
        tags: [],
        steps: () => {
            let sm = steps.suspenseManagement,
                smf = sm.filters,
                smas = sm.activitySummary,
                numRegex = '^-? ?[,0-9]*\\.\\d*$',
                activitySummaryLabels = [
                    'Opening Balance',
                    '(April 1, 2016)',
                    'Activity in this Period',
                    '(as of July 22, 2016)',
                    'Unmatched',
                    'Expected to be added',
                    'Matched',
                    'Profit - User',
                    'Expected to be Aged on Final Run Date',
                    'Expected Closing Balance'
                ];

            steps.mainHeader.goToSubLink('Royalty Processing', 'Suspense Management');

            smf.validateProcessingTerritory('Argentina');
            //smf.validateRoyaltyPeriod();
            sm.validateSelectedTab('Activity Summary');
            smas.validateLabels(activitySummaryLabels);
            smas.validateValues(numRegex);
            smf.selectProcessingTerritory('United States');
            smas.expectValuesToBeUpdated();
            //smf.selectRoyaltyPeriod('July 2016 - December 2016');
        }
    }
];

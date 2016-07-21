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
                smf = sm.filters;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Suspense Management');
            smf.selectProcessingTerritory('Poland');
            smf.selectRoyaltyPeriod('July 2016 - December 2016');
        }
    }
];

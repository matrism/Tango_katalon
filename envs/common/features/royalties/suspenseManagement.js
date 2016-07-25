'use strict';

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
        tags: ['suspenseManagementActivitySummary'],
        steps: () => {
            let sm = steps.suspenseManagement,
                smf = sm.filters,
                smas = sm.activitySummary,
                numRegex = '^-? ?[,0-9]*\\.\\d*$',
                activitySummaryLabels = [
                    'Opening Balance',
                    '(.*)',
                    'Activity in this Period',
                    '(as of .*)',
                    'Unmatched',
                    'Expected to be added',
                    'Matched',
                    'Profit - User',
                    'Expected to be Aged on Final Run Date',
                    'Expected Closing Balance'
                ],
                activitySummaryLabelsClosed = [
                    'Opening Balance',
                    '(.*)',
                    'Activity in this Period',
                    '(Processed on .*)',
                    'Unmatched',
                    'Added in this period',
                    'Matched',
                    'Profit - User',
                    'Aged on Run Date',
                    'Closing Balance'
                ];


            steps.mainHeader.goToSubLink('Royalty Processing', 'Suspense Management');

            smf.validateProcessingTerritory('Argentina');
            //smf.validateRoyaltyPeriod();
            sm.validateSelectedTab('Activity Summary');
            smas.validateLabels(activitySummaryLabels);
            smas.validateValues(numRegex);
            smf.selectProcessingTerritory('United States');
            //smas.validateLabels(activitySummaryLabels);
            smas.expectValuesToBeUpdated();
            smas.validateValues(numRegex);
            smf.selectRoyaltyPeriod('Closed Periods');
            smf.selectClosedPeriod(2);
            smf.clickGo();
            smas.expectValuesToBeUpdated();
            smas.validateLabels(activitySummaryLabelsClosed);
            smas.validateValues(numRegex);
        }
    },
    {
        name: 'Suspense Management - Suspense Tab',
        tags: ['suspenseManagementSuspenseTab'],
        steps: () => {
            let sm = steps.suspenseManagement,
                smf = sm.filters,
                sms = sm.suspense;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Suspense Management');

            smf.validateProcessingTerritory('Argentina');
            sm.validateSelectedTab('Activity Summary');
            sm.clickTab('Suspense');
            sm.validateSelectedTab('Suspense');
            smf.selectProcessingTerritory('Brazil');
            smf.selectRoyaltyPeriod('Closed Periods');
            smf.selectClosedPeriod(2);
            smf.clickGo();
        }
    }
];

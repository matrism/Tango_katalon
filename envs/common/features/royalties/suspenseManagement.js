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
        //steps: () => {
        steps: criticalScenario(() => {
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

            smf.validateProcessingTerritory('Argentina'); //Argentina
            sm.validateSelectedTab('Activity Summary');
            smas.validateLabels(activitySummaryLabels);
            smas.validateValues(numRegex);
            smf.selectRoyaltyPeriod(null, 0);
            smas.validateValues(numRegex);
            smas.validateLabels(activitySummaryLabels);
            smf.selectProcessingTerritory('Greece'); //United States
            smas.expectValuesToBeUpdated();
            smas.validateValues(numRegex);
            smf.selectRoyaltyPeriod('Closed Periods');
            smf.selectClosedPeriod(0);
            smf.clickGo();
            smas.expectValuesToBeUpdated();
            smas.validateLabels(activitySummaryLabelsClosed);
            smas.validateValues(numRegex);
        })
    },
    {
        name: 'Suspense Management - Suspense Tab',
        tags: ['suspenseManagementSuspenseTab'],
        //steps: () => {
        steps: criticalScenario(() => {
            let sm = steps.suspenseManagement,
                smf = sm.filters,
                sms = sm.suspense;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Suspense Management');
            sm.validateSelectedTab('Activity Summary');
            sm.clickTab('Suspense');
            sm.validateSelectedTab('Suspense');
            smf.selectProcessingTerritory('Australia');
            sms.expectRowsToBePresent();
            smf.selectRoyaltyPeriod(null, 0);
            //sms.expectRowsToBeUpdated();
            //sms.expectRowsToBePresent();
            smf.selectRoyaltyPeriod('Closed Periods');
            smf.selectClosedPeriod(1);
            smf.clickGo();
            sms.expectRowsToBeUpdated();
            sms.expectRowsToBePresent();
            smf.selectProcessingTerritory('Greece');
            sms.expectRowsToBeUpdated();
            sms.expectRowsToBePresent();
            smf.validateProcessingTerritory('Greece');
            smf.storeSelectedPeriod();
            sm.clickTab('Activity Summary');
            sm.validateSelectedTab('Activity Summary');
            smf.validateProcessingTerritory('Greece');
            smf.validateRoyaltyPeriod();
        })
    },
    {
        name: 'Validate if the selected territory and period are kept when change the page.',
        tags: ['suspenseManagementFilters'],
        //steps: () => {
        steps: criticalScenario(() => {
            let sm = steps.suspenseManagement,
                smf = sm.filters,
                mh = steps.mainHeader,
                rs = steps.royaltyStatements;

            mh.goToSubLink('Royalty Processing', 'Suspense Management');
            smf.selectProcessingTerritory('Brazil');
            smf.selectRoyaltyPeriod(null, 1);
            smf.storeSelectedPeriod('lastSelectedPeriod');
            mh.goToSubLink('Royalty Processing', 'Royalty Statements');
            rs.validateProcessingTerritory('Brazil');
            rs.validateRoyaltyPeriod(fromTestVariable('lastSelectedPeriod'));
            rs.selectProcessingTerritory('United States');
            rs.selectFirstRoyaltyPeriod();
            rs.storeSelectedPeriod('lastSelectedPeriod');
            mh.goToSubLink('Royalty Processing', 'Suspense Management');
            smf.validateProcessingTerritory('United States');
            smf.validateRoyaltyPeriod(fromTestVariable('lastSelectedPeriod'));
        })
    }
];

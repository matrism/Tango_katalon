'use strict';

let randomString = random.string.makeMemoizedGenerator(),
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
        tags: ['crossReferenceIncoming', 'crossReferenceTango'],
        steps: criticalScenario(() => {
            let workData = {
                    creators_and_contributions: [{
                        role: 'CA',
                        name: 'Cristina',
                        percentage: 100
                    }]
                };

            for (let i = 0; i < 2; i++) {
                workData.primary_work_title = 'WORK TAT ' + randomString(i);
                steps.criticalSection.wrap(() => {
                    steps.work.createWork(workData, 'workId' + i);
                });
            }
        })
    },
    {
        name: 'Add Cross Reference',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            let cr = steps.crossReference,
                cra = cr.addForm;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Tango Works');

            cr.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            cr.expectTangoWorkToBeVisible();
            cr.clickAddCrossReferenceButton();
            cra.expectCrossReferenceFormToBeVisible();
            cra.expectFormLabelsToBe([
                'Incoming Work Details:',
                'Title:',
                'Creators:',
                'ID:',
                'Income Provider:'
            ]);
            cra.expectConfirmButtomToBeDisabled();
            cra.enterTitle('test reference');
            cra.expectConfirmButtomToBeDisabled();
            cra.enterCreators('test creator');
            cra.expectConfirmButtomToBeDisabled();
            cra.enterId(randomStringLowerCase(0));
            cra.expectConfirmButtomToBeDisabled();
            cra.enterIncomeProvider('BMI');
            cra.confirm();
            cra.validateSuccessMessage();
        },
    },
    {
        name: 'Search for incoming work and rematch',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            let cr = steps.crossReference,
                cri = cr.items;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Incoming Works');
            cr.searchForIncomingWork(randomStringLowerCase(0), 'Incoming Work ID');
            cr.expectIncomingWorkToBeVisible();
            cr.expectIncomingWorkIdToContainSearchTerm();
            cri.expand();
            cri.validateTitle('test reference');
            cri.validateCreators('test creator');
            cri.validateId(randomStringLowerCase(0));
            cri.rematch();
            cri.searchForRematchWork('WORK TAT ' + randomString(1), 'Title');
            cri.confirm();
        },
    },
    {
        name: 'Search for incoming work, validate rematched work and unmatch',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            let cr = steps.crossReference,
                cri = cr.items;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Incoming Works');
            cr.searchForIncomingWork(randomStringLowerCase(0), 'Incoming Work ID');
            cr.expectIncomingWorkToBeVisible();
            cr.expectIncomingWorkIdToContainSearchTerm();
            cr.expectTangoWorkTitleToContain('WORK TAT ' + randomString(1));
            cri.expand();
            cri.unmatch();
            cri.confirm();
        },
    },
    {
        name: 'Search for unmatched incoming work and expect no results',
        tags: ['crossReferenceIncoming'],
        steps: () => {
            let cr = steps.crossReference;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Incoming Works');
            cr.enterIncomingWorkSearchTerms(randomStringLowerCase(0), 'Incoming Work ID');
            cr.expectNoResultsMessage();
        },
    },
    {
        name: 'Add Cross Reference',
        tags: ['crossReferenceTango'],
        steps: () => {
            let cr = steps.crossReference,
                cra = cr.addForm;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Tango Works');
            cr.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            cr.expectTangoWorkToBeVisible();
            cr.clickAddCrossReferenceButton();
            cra.expectCrossReferenceFormToBeVisible();
            cra.enterTitle('test reference');
            cra.enterCreators('test creator');
            cra.enterId(randomStringLowerCase(1));
            cra.enterIncomeProvider('BMI');
            cra.confirm();
        },
    },
    {
        name: 'Search for Tango work and rematch',
        tags: ['crossReferenceTango'],
        steps: () => {
            let cr = steps.crossReference,
                cri = cr.items;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Tango Works');
            cr.searchForTangoWork(fromTestVariable('workId0'), 'Work ID');
            cr.expectTangoWorkToBeVisible();
            cri.expand();
            cri.validateTitle('test reference');
            cri.validateCreators('test creator');
            cri.validateId(randomStringLowerCase(1));
            cri.rematch();
            cri.searchForRematchWork('WORK TAT ' + randomString(1), 'Title');
            cri.confirm();
        },
    },
    {
        name: 'Search for Tango work, validate rematched work and unmatch',
        tags: ['crossReferenceTango'],
        steps: () => {
            let cr = steps.crossReference,
                cri = cr.items;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Tango Works');
            cr.searchForTangoWork(fromTestVariable('workId1'), 'Work ID');
            cr.expectIncomingWorkToBeVisible();
            cri.expand();
            cri.unmatch();
            cri.confirm();
        },
    },

    {
        name: 'Search for unmatched Tango work and expect no match',
        tags: ['crossReferenceTango'],
        steps: () => {
            let cr = steps.crossReference;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Cross Reference');
            cr.selectSearchCriterion('Tango Works');
            cr.searchForTangoWork(fromTestVariable('workId1'), 'Work ID');
            cr.expectNoCrossReference();
        },
    },
];

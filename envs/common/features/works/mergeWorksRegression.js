'use strict';

var randomString = random.string.makeMemoizedGenerator(),
    using = fnutils.using,
    moment = require('moment');

exports.id = '323da77d-5c98-4836-8fc6-b752dcaf0ca1';

exports.commonFeatureTags = [
    'mergeWorksRegression',
    'worksRegression',
    'works',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create a deal with publisher share set',
        tags: [],
        steps: criticalScenario(() => {
            var cds = steps.createDealScope,
                d = steps.deal,
                dr = steps.dealRtp;

            steps.base.useBlankEntityDataSlot('deal', 0);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            d.itContinueToNextPage();
            steps.createDealContractPeriod.enterActualStartDate(
                moment().format('YYYY-MM-DD')
            );
            steps.createDealContractPeriod.enterTargetEndDateInMonths(12);
            cds.openNewScopeForm();
            cds.selectContractType('Administration');
            cds.enterTerritoryOfControlSearchTerms(
                'Brazil'
            );
            cds.selectTerritoryOfControlSearchResultByIndex(0);
            cds.clickOnAddPublisherShareSet({
                scrollIntoView: true,
            });
            cds.enterPublisherSearchTerms(
                0, 0, 'WARNER ALLIANCE MUSIC'
            );
            cds.selectPublisherSearchResultByIndex(0);
            cds.enterOwnPublisherShare(0, 0, 100);
            cds.enterPublisherSearchTerms(
                0, 1, 'WB MUSIC CORP.'
            );
            cds.selectPublisherSearchResultByIndex(0);
            cds.enterCollectPublisherShare(0, 1, 100);
            d.itContinueToNextPage();
            steps.base.sleep(5000);
            dr.clickAcquisitionPeriodScopesField(0);
            dr.selectAllSuggestedAcquisitionPeriodScopes(0);
            dr.applyAcquisitionPeriodScopeChanges(0);
            d.saveDeal();
            d.waitForDealToBeSaved();
            d.findId();
        })
    },
    {
        name: 'Create person to use as creator',
        tags: [],
        steps: criticalScenario(() => {
            steps.person.useBlankPersonSlot(0);
            using(steps.newPerson, function () {
                this.goToNewPersonPage();
                this.enterLastName(
                    'TEST PERSON 1 ' + randomString('person')
                );
                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.save();
            });
            steps.person.findInternalIpiNumber();
        })
    },
    {
        name: 'Create works and verify registration activity',
            tags: [],
        steps: criticalScenario(() => {
            _.times(2, function(i) {
                steps.base.useBlankEntityDataSlot('work', 'work' + i);
                using(steps.newWork, function () {
                    this.goToNewWorkPage();
                    this.enterPrimaryWorkTitle(
                        'TEST MERGE WORK ' + (i + 1) + ' ' + randomString('work')
                    );
                    this.selectCreatorFromPersonSlot(0, 0);
                    this.enterCreatorContribution(0, 100);
                    this.optToIncludeWorkOnWebsite(false);

                    this.saveWork();
                    this.continueIfSimilarWorksPrompted();
                    this.validateSaveWorkRedirection();
                });
                steps.work.findCurrentlyOpenWorkId();
                steps.work.goToScopeDeliveryTab();
                using(steps.scopeDelivery, function () {
                    this.deliverWork();
                    this.searchDealsForContributionFromDealSlot(0, 0);
                    this.selectDealSearchResultByIndex(0);
                    this.clickScopeDeliveryCheckbox(0, 0);
                    this.save();
                });
            });

            steps.work.waitForStatusToBeDisplayed();

            // Verify Work Registration Activity
            _.times(2, function(i) {
                steps.base.useEntityDataSlot('work', 'work' + i);
                using(steps.work, function () {
                    this.goToWorkPage();
                    this.goToRegistrationActivityTab();
                });

                using(steps.workRegistrationActivity.activityGroup, function () {
                    //previous org is Abramus
                    this.find({ firstWithRecipientName: 'Backoffice' });
                    this.toggleBlind();
                    using(this.events, function () {
                        this.validateEventCount(1);
                        this.find('first');
                        this.validateStatus('Scheduled');
                    });
                });
            });

            // Verify Organisation Preview Registration Run
            steps.searchSection.accessSavedOrganisationByName('Backoffice');
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.scrollCWRtoLastResult();
            using(steps.organisationRegistrationStack, function () {
                using(this.works, function () {
                    //this.find({ title: 'TEST MERGE WORK 1 ' + randomString('work') });

                    //this.validateStatus('Scheduled');

                    //this.find({ title: 'TEST MERGE WORK 2 ' + randomString('work') });
                    //this.validateStatus('Scheduled');
                });
            });
        })
    },

    {
        name: 'Merge work',
        tags: [],
        steps: criticalScenario(() => {
            steps.base.useEntityDataSlot('work', 'work0');
            steps.work.goToWorkPage();
            steps.work.goToGeneralTab();
            using(steps.work.merge, function () {
                this.mergeWork();
                steps.base.useEntityDataSlot('work', 'work1');
                this.enterFindWorkUsingPreviouslyEnteredPrimaryTitle();
                this.continue();
                this.confirm();
            });
        })
    },
    {
        name: 'Search for the merged works',
        tags: [],
        steps: criticalScenario(() => {
            using(steps.work, function() {
                steps.base.useEntityDataSlot('work', 'work0');
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Work ID');
                this.searchForWorkUsingPreviouslyCreatedWorkId();
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.expectWorkSearchMatchCountToBe(1);
                this.clickWorkSearchMatch(0);
                steps.base.waitForAjax();
                this.validateWorkId();

                steps.base.useEntityDataSlot('work', 'work1');
                steps.searchSection.selectEntityType('Works');
                this.selectWorkSearchFilterTag(0, 'Work ID');
                this.searchForWorkUsingPreviouslyCreatedWorkId();
                steps.base.sleep(200);
                steps.base.waitForAjax();
                this.expectWorkSearchMatchCountToBe(0);
            });
        })
    },
    {
        name: 'Validate Preview Registration Run',
        tags: [],
        steps: criticalScenario(() => {
            steps.searchSection.accessSavedOrganisationByName('Backoffice');

            steps.organisation.goToPreviewRegistrationRunTab();
            using(steps.organisationRegistrationStack, function () {
                steps.organisation.scrollCWRtoLastResult();
                using(this.works, function () {
                    this.find({ title: 'TEST MERGE WORK 1 ' + randomString('work') });
                    this.validateStatus('Scheduled');
                    this.validateAbsence({ title: 'TEST MERGE WORK 2 ' + randomString('work') });
                });

                using(this.registrationRun, function () {
                    this.execute();
                    this.proceed();
                    using(this.startSuccessMessage, function () {
                        this.waitUntilDisplayed();
                        this.dismiss();
                    });
                });
            });
        })
    },
];

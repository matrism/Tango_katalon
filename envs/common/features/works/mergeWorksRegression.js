'use strict';

var randomString = random.string.makeMemoizedGenerator(),
    using = fnutils.using,
    moment = require('moment');

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
        name: "Create a deal with publisher share set",
        tags: [],
        steps: function () {
            steps.base.useBlankEntityDataSlot('deal', 0);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.enterActualStartDate(
                moment().format('YYYY-MM-DD')
            );
            steps.createDealContractPeriod.enterTargetEndDateInMonths(12);
            steps.createDealScope.openNewScopeForm();
            steps.createDealScope.selectContractType('Administration');
            steps.createDealScope.enterTerritoryOfControlSearchTerms(
                'Brazil'
            );
            steps.createDealScope.selectTerritoryOfControlSearchResultByIndex(0);
            steps.createDealScope.clickOnAddPublisherShareSet({
                scrollIntoView: true,
            });
            steps.createDealScope.enterPublisherSearchTerms(
                0, 0, 'WCM Publisher 1'
            );
            steps.createDealScope.selectPublisherSearchResultByIndex(0);
            steps.createDealScope.enterOwnPublisherShare(0, 0, 100);
            steps.createDealScope.enterPublisherSearchTerms(
                0, 1, 'WB MUSIC CORP.'
            );
            steps.createDealScope.selectPublisherSearchResultByIndex(0);
            steps.createDealScope.enterCollectPublisherShare(0, 1, 100);
            steps.deal.itContinueToNextPage();
            steps.dealRtp.clickAcquisitionPeriodScopesField(0);
            steps.dealRtp.selectAllSuggestedAcquisitionPeriodScopes(0);
            steps.dealRtp.applyAcquisitionPeriodScopeChanges(0);
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.findId();
        }
    },
    {
        name: 'Create person to use as creator',
        tags: [],
        steps: function() {
            _.times(1, function(i) {
                steps.person.useBlankPersonSlot(i);
                using(steps.newPerson, function () {
                    this.goToNewPersonPage();
                    this.enterLastName(
                        'TEST PERSON ' + (i + 1) + ' ' + randomString('person' + i)
                    );
                    this.enterAffiliatedSocietySearchTerms('ASCAP');
                    this.selectAffiliatedSocietySearchResultByIndex(0);
                    this.save();
                });
                steps.person.findInternalIpiNumber();
           });
        }
    },
    {
        name: 'Create works and verify registration activity',
        tags: [],
        steps: function () {
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

            // Wait for Registration Activity to be processed
            steps.base.sleep(40000);

            // Verify Work Registration Activity
            _.times(2, function(i) {
                steps.base.useEntityDataSlot('work', 'work' + i);
                using(steps.work, function () {
                    this.goToWorkPage();
                    this.goToRegistrationActivityTab();
                });

                using(steps.workRegistrationActivity.activityGroup, function () {
                    this.find({ firstWithRecipientName: 'ABRAMUS' });
                    this.toggleBlind();
                    using(this.events, function () {
                        this.validateEventCount(1);
                        this.find('first');
                        this.validateStatus('Scheduled');
                    });
                });
            });

            // Verify Organisation Preview Registration Run
            steps.searchSection.accessSavedOrganisationByName('ABRAMUS');
            steps.organisation.goToPreviewRegistrationRunTab();
            using(steps.organisationRegistrationStack, function () {
                using(this.works, function () {
                    this.find({ title: 'TEST MERGE WORK 1 ' + randomString('work') });
                    this.validateStatus('Scheduled');
                    this.find({ title: 'TEST MERGE WORK 2 ' + randomString('work') });
                    this.validateStatus('Scheduled');
                });
            });
        }
    },
    {
        name: 'Merge work',
        tags: [],
        steps: function () {
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
        }
    },
    {
        name: 'Search for the merged works',
        tags: [],
        steps: function () {
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
        }
    },
    {
        name: 'Validate Preview Reigstration Run',
        tags: [],
        steps: function () {
            steps.searchSection.accessSavedOrganisationByName('ABRAMUS');

            // Wait for the work to be removed from Preview Registration Run
            steps.base.sleep(10000);

            steps.organisation.goToPreviewRegistrationRunTab();
            using(steps.organisationRegistrationStack, function () {
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
        }
    },
];

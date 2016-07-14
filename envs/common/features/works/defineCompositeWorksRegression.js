'use strict';

var using = fnutils.using,
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator();

exports.id = 'a6937b15-1d27-4129-9c1b-6b4282553f86';

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'defineCompositeWorksRegression',
    'works',
    'regression'
];

exports.feature = [
    {
        name: 'Create a person',
        tags: [],
        steps: criticalScenario(() => {
            steps.person.useBlankPersonSlot(0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();

                this.enterLastName('TEST PERSON ' + randomString());

                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);

                this.save();
            });

            steps.person.findInternalIpiNumber();
        })
    },
    {
        name: 'Define and edit COS, POT, and UCO composite works',
        tags: [],
        steps: function() {
            using(steps.newWork, function() {
                steps.base.useBlankEntityDataSlot('work', 0);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);
                this.enterPrimaryWorkTitle('TEST COMPONENT WORK ' + randomId(0));
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 1);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);
                this.enterPrimaryWorkTitle('TEST COMPONENT WORK ' + randomId(1));
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 2);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);
                this.enterPrimaryWorkTitle('TEST COMPONENT WORK ' + randomId(2));
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 3);

                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(0));
                this.validateDefaultCompositeWorkCheckboxState();
                this.clickCompositeWorkCheckbox();
                this.validateRequiredCompositeWorkTypeField();
                this.validateDefaultCompositeWorkType();
                this.selectCompositeWorkType('Composite of Samples');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMediumCreatorContribution(0);
                this.validateDefaultComponentWorkSearchFilter(0);
                this.validateRequiredComponentWorkSearchField(0);

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.expectShowComponentWorkDetailsButtonToAppear(0);
                this.validateRequiredComponentWorkAllocationField(0);
                this.enterMediumComponentWorkAllocation(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateCompositeWorkType();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);

                this.deleteComponentWork(0);
                this.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed();
                this.confirmComponentWorkDeletion();
                this.validateDefaultComponentWorkSearchFilter(0);
                this.validateRequiredComponentWorkSearchField(0);

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(1)
                );

                this.validateRequiredComponentWorkAllocationField(0);
                this.enterComponentWorkAllocation(0, 25);

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(2)
                );

                this.validateRequiredComponentWorkAllocationField(1);
                this.enterComponentWorkAllocation(1, 25);
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
                this.validateComponentWorkName(1);
                this.validateComponentWorkAllocation(1);
            });

            using(steps.newWork, function() {
                steps.base.useBlankEntityDataSlot('work', 4);

                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(1));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Unspecified Composite');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMediumCreatorContribution(0);

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.enterMediumComponentWorkAllocation(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                steps.work.hoverCreatorNamesContainer();
                steps.work.editCreators();
                steps.work.validateCompositeWorkType();
                steps.work.validateComponentWorkName(0);
                steps.work.validateComponentWorkAllocation(0);
            });

            steps.base.useBlankEntityDataSlot('work', 5);

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(2));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Potpourri');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMediumCreatorContribution(0);

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.enterMediumComponentWorkAllocation(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateCompositeWorkType();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
            });

            using(steps.newWork, function() {
                steps.base.useBlankEntityDataSlot('work', 6);

                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(3));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Medley');

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.enterMediumComponentWorkAllocation(0);

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(1);
                this.deleteComponentWork(1);
                this.confirmComponentWorkDeletion();

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(1)
                );

                this.enterMediumComponentWorkAllocation(1);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateCompositeWorkType();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
                this.validateComponentWorkName(1);
                this.validateComponentWorkAllocation(1);

                this.deleteComponentWork(0);
                this.confirmComponentWorkDeletion();

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(2)
                );

                this.enterMediumComponentWorkAllocation(1);
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
                this.validateComponentWorkName(1);
                this.validateComponentWorkAllocation(1);
            });
        }
    },
    {
        name: 'Change a non-composite work into a Composite of Samples',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 7);

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(4));
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.clickCompositeWorkCheckbox();
                this.validateRequiredCompositeWorkTypeField();
                this.validateDefaultCompositeWorkType();
                this.selectCompositeWorkType('Composite of Samples');
                this.enterMediumCreatorContribution(0);

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.expectShowComponentWorkDetailsButtonToAppear(0);
                this.enterMediumComponentWorkAllocation(0);
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
            });
        }
    },
    {
        name: 'Change a Composite of Samples work into a non-composite work',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 8);

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(5));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Composite of Samples');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMediumCreatorContribution(0);

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.enterMediumComponentWorkAllocation(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.clickCompositeWorkCheckbox();
                this.expectDisablingWorkAsCompositePopUpToBeDisplayed();
                this.confirmDisablingWorkAsComposite();
                this.enterCreatorContribution(0, 100);
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateCompositeWorkCheckbox();
            });
        }
    },
    {
        name: 'Change a non-composite work into a Medley',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 9);

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(6));
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Medley');
                this.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed();
                this.confirmMakingIntoMedley();

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.enterMediumComponentWorkAllocation(0);

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(1);
                this.deleteComponentWork(1);
                this.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed();
                this.confirmComponentWorkDeletion();

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(1)
                );

                this.enterMediumComponentWorkAllocation(1);
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
                this.validateComponentWorkName(1);
                this.validateComponentWorkAllocation(1);
            });
        }
    },
    {
        name: 'Change a Composite of Samples work into a Medley',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 10);

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(7));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Composite of Samples');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMediumCreatorContribution(0);
                this.selectFirstComponentWorkMatching(0, 'TEST COMPONENT WORK ' + randomId(0));
                this.enterMediumComponentWorkAllocation(0);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.selectCompositeWorkType('Medley');
                this.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed();
                this.confirmMakingIntoMedley();
                this.selectFirstComponentWorkMatching(1, 'TEST COMPONENT WORK ' + randomId(1));
                this.enterMediumComponentWorkAllocation(1);
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
                this.validateComponentWorkName(1);
                this.validateComponentWorkAllocation(1);
            });
        }
    },
    {
        name: 'Change a Medley into a Composite of Samples',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 11);

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(8));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Medley');

                this.selectFirstComponentWorkMatching(
                    0, 'TEST COMPONENT WORK ' + randomId(0)
                );

                this.enterMediumComponentWorkAllocation(0);

                this.selectFirstComponentWorkMatching(
                    1, 'TEST COMPONENT WORK ' + randomId(1)
                );

                this.enterMediumComponentWorkAllocation(1);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.selectCompositeWorkType('Composite of Samples');
                this.enterComponentWorkAllocation(0, 25);
                this.enterComponentWorkAllocation(1, 25);
                this.enterMediumCreatorContribution(0);
                this.selectDifferentRandomCreator(0);
                this.selectCreatorRole(0, 'PA');
                this.selectCreatorRole(0, 'CA');              
                this.saveCreators();
                steps.base.refreshPage();
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateCompositeWorkType();
            });
        }
    }
];

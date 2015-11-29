'use strict';

var using = fnutils.using,
    randomId = random.id.makeMemoizedGenerator(),
    randomString = random.string.makeMemoizedGenerator();

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['defineCompositeWorksRegression', 'works', 'regression'];

exports.feature = [
    {
        name: 'Create a person',
        tags: [],
        steps: function () {
            steps.person.useBlankPersonSlot(0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();

                this.enterLastName(
                    'TEST PERSON ' + randomString('person0')
                );

                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);

                this.save();
            });

            steps.person.findInternalIpiNumber();
        }
    },
    {
        name: 'Define and edit COS, POT, and UCO composite works',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 0);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST COMPONENT WORK ' + randomId(0));
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 1);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST COMPONENT WORK ' + randomId(1));
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 2);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST COMPONENT WORK ' + randomId(2));
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 3);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(0));
            steps.newWork.validateDefaultCompositeWorkCheckboxState();
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.validateRequiredCompositeWorkTypeField();
            steps.newWork.validateDefaultCompositeWorkType();
            steps.newWork.selectCompositeWorkType('Composite of Samples');
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMediumCreatorContribution(0);
            steps.newWork.validateDefaultComponentWorkSearchFilter(0);
            steps.newWork.validateRequiredComponentWorkSearchField(0);
            steps.newWork.selectFirstComponentWorkMatching(0, 'TEST COMPONENT WORK ' + randomId(0));
            steps.newWork.expectShowComponentWorkDetailsButtonToAppear(0);
            steps.newWork.validateRequiredComponentWorkAllocationField(0);
            steps.newWork.enterMediumComponentWorkAllocation(0);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.sleep(100);
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateCompositeWorkType();
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);

            steps.work.deleteComponentWork(0);
            steps.work.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed();
            steps.work.confirmComponentWorkDeletion();
            steps.work.validateDefaultComponentWorkSearchFilter(0);
            steps.work.validateRequiredComponentWorkSearchField(0);
            steps.work.selectFirstComponentWorkMatching(0, 'TEST COMPONENT WORK ' + randomId(1));
            steps.work.validateRequiredComponentWorkAllocationField(0);
            steps.work.enterComponentWorkAllocation(0, 25);
            steps.work.selectFirstComponentWorkMatching(1, 'TEST COMPONENT WORK ' + randomId(2));
            steps.work.validateRequiredComponentWorkAllocationField(1);
            steps.work.enterComponentWorkAllocation(1, 25);
            steps.work.saveCreators();
            steps.base.refreshPage();
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);
            steps.work.validateComponentWorkName(1);
            steps.work.validateComponentWorkAllocation(1);

            steps.base.useBlankEntityDataSlot('work', 4);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(1));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Unspecified Composite');
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMediumCreatorContribution(0);
            steps.newWork.selectFirstComponentWorkMatching(0, 'TEST COMPONENT WORK ' + randomId(0));
            steps.newWork.enterMediumComponentWorkAllocation(0);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.sleep(100);
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateCompositeWorkType();
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);

            steps.base.useBlankEntityDataSlot('work', 5);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(2));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Potpourri');
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMediumCreatorContribution(0);
            steps.newWork.selectFirstComponentWorkMatching(0, 'TEST COMPONENT WORK ' + randomId(0));
            steps.newWork.enterMediumComponentWorkAllocation(0);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.sleep(100);
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateCompositeWorkType();
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);

            steps.base.useBlankEntityDataSlot('work', 6);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomId(3));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Medley');
            steps.newWork.selectFirstComponentWorkMatching(0, 'TEST COMPONENT WORK ' + randomId(0));
            steps.newWork.enterMediumComponentWorkAllocation(0);
            steps.newWork.selectFirstComponentWorkMatching(1, 'TEST COMPONENT WORK ' + randomId(0));
            steps.newWork.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear(1);
            steps.newWork.deleteComponentWork(1);
            steps.newWork.confirmComponentWorkDeletion();
            steps.newWork.selectFirstComponentWorkMatching(1, 'TEST COMPONENT WORK ' + randomId(1));
            steps.newWork.enterMediumComponentWorkAllocation(1);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.sleep(100);
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateCompositeWorkType();
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);
            steps.work.validateComponentWorkName(1);
            steps.work.validateComponentWorkAllocation(1);

            steps.work.deleteComponentWork(0);
            steps.work.confirmComponentWorkDeletion();
            steps.work.selectFirstComponentWorkMatching(1, 'TEST COMPONENT WORK ' + randomId(2));
            steps.work.enterMediumComponentWorkAllocation(1);
            steps.work.saveCreators();
            steps.base.refreshPage();
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);
            steps.work.validateComponentWorkName(1);
            steps.work.validateComponentWorkAllocation(1);
        }
    },
    {
        name: 'Change a non-composite work into a Composite of Samples',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 7]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(4)]],
            [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.clickCompositeWorkCheckbox],
            [steps.work.validateRequiredCompositeWorkTypeField],
            [steps.work.validateDefaultCompositeWorkType],
            [steps.work.selectCompositeWorkType, ['Composite of Samples']],
            [steps.work.enterMediumCreatorContribution, [0]],
            [steps.work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.work.expectShowComponentWorkDetailsButtonToAppear, [0]],
            [steps.work.enterMediumComponentWorkAllocation, [0]],
            [steps.work.saveCreators],
            [steps.base.refreshPage],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
        ]
    },
    {
        name: 'Change a Composite of Samples work into a non-composite work',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 8]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(5)]],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
            [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
            [steps.newWork.enterMediumCreatorContribution, [0]],
            [steps.newWork.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.newWork.enterMediumComponentWorkAllocation, [0]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.clickCompositeWorkCheckbox],
            [steps.work.expectDisablingWorkAsCompositePopUpToBeDisplayed],
            [steps.work.confirmDisablingWorkAsComposite],
            [steps.work.enterCreatorContribution, [0, 100]],
            [steps.work.saveCreators],
            [steps.base.refreshPage],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateCompositeWorkCheckbox],
        ]
    },
    {
        name: 'Change a non-composite work into a Medley',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 9]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(6)]],
            [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.clickCompositeWorkCheckbox],
            [steps.work.selectCompositeWorkType, ['Medley']],
            [steps.work.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed],
            [steps.work.confirmMakingIntoMedley],
            [steps.work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.work.enterMediumComponentWorkAllocation, [0]],
            [steps.work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.work.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear, [1]],
            [steps.work.deleteComponentWork, [1]],
            [steps.work.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed],
            [steps.work.confirmComponentWorkDeletion],
            [steps.work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(1)]],
            [steps.work.enterMediumComponentWorkAllocation, [1]],
            [steps.work.saveCreators],
            [steps.base.refreshPage],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
            [steps.work.validateComponentWorkName, [1]],
            [steps.work.validateComponentWorkAllocation, [1]],
        ]
    },
    {
        name: 'Change a Composite of Samples work into a Medley',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 10]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(7)]],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
            [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
            [steps.newWork.enterMediumCreatorContribution, [0]],
            [steps.newWork.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.newWork.enterMediumComponentWorkAllocation, [0]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.selectCompositeWorkType, ['Medley']],
            [steps.work.expectMakingIntoMedleyConfirmationPopUpToBeDisplayed],
            [steps.work.confirmMakingIntoMedley],
            [steps.work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(1)]],
            [steps.work.enterMediumComponentWorkAllocation, [1]],
            [steps.work.saveCreators],
            [steps.base.refreshPage],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
            [steps.work.validateComponentWorkName, [1]],
            [steps.work.validateComponentWorkAllocation, [1]],
        ]
    },
    {
        name: 'Change a Medley into a Composite of Samples',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 11]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(8)]],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Medley']],
            [steps.newWork.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.newWork.enterMediumComponentWorkAllocation, [0]],
            [steps.newWork.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(1)]],
            [steps.newWork.enterMediumComponentWorkAllocation, [1]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.selectCompositeWorkType, ['Composite of Samples']],
            [steps.work.enterComponentWorkAllocation, [0, 25]],
            [steps.work.enterComponentWorkAllocation, [1, 25]],
            [steps.work.selectDifferentRandomCreator, [0]],
            [steps.work.enterMediumCreatorContribution, [0]],
            [steps.work.saveCreators],
            [steps.base.refreshPage],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateCompositeWorkType],
        ]
    }
];

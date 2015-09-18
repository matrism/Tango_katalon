'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'works/newWork');

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['works', 'workDefineComposite', 'regression', 'broken'];

exports.feature = [
    {
        name: 'Define and edit COS, POT, and UCO composite works.',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 0]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 1]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPONENT WORK ' + randomId(1)]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 2]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPONENT WORK ' + randomId(2)]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 3]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(0)]],
            [steps.new_work.validateDefaultCompositeWorkCheckboxState],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.validateRequiredCompositeWorkTypeField],
            [steps.new_work.validateDefaultCompositeWorkType],
            [steps.new_work.selectCompositeWorkType, ['Composite of Samples']],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMediumCreatorContribution, [0]],
            [steps.new_work.validateDefaultComponentWorkSearchFilter, [0]],
            [steps.new_work.validateRequiredComponentWorkSearchField, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.expectShowComponentWorkDetailsButtonToAppear, [0]],
            [steps.new_work.validateRequiredComponentWorkAllocationField, [0]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateCompositeWorkType],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],

            [steps.work.deleteComponentWork, [0]],
            [steps.work.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed],
            [steps.work.confirmComponentWorkDeletion],
            [steps.work.validateDefaultComponentWorkSearchFilter, [0]],
            [steps.work.validateRequiredComponentWorkSearchField, [0]],
            [steps.work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(1)]],
            [steps.work.validateRequiredComponentWorkAllocationField, [0]],
            [steps.work.enterComponentWorkAllocation, [0, 25]],
            [steps.work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(2)]],
            [steps.work.validateRequiredComponentWorkAllocationField, [1]],
            [steps.work.enterComponentWorkAllocation, [1, 25]],
            [steps.work.saveCreators],
            [steps.base.refreshPage],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
            [steps.work.validateComponentWorkName, [1]],
            [steps.work.validateComponentWorkAllocation, [1]],

            [steps.base.useBlankEntityDataSlot, ['work', 4]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(1)]],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.selectCompositeWorkType, ['Unspecified Composite']],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMediumCreatorContribution, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateCompositeWorkType],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],

            [steps.base.useBlankEntityDataSlot, ['work', 5]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(2)]],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.selectCompositeWorkType, ['Potpourri']],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMediumCreatorContribution, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateCompositeWorkType],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],

            [steps.base.useBlankEntityDataSlot, ['work', 6]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(3)]],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.selectCompositeWorkType, ['Medley']],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.expectSameWorkCantBeAddedAsComponentMultipleTimesMessageToAppear, [1]],
            [steps.new_work.deleteComponentWork, [1]],
            [steps.new_work.confirmComponentWorkDeletion],
            [steps.new_work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(1)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [1]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateCompositeWorkType],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
            [steps.work.validateComponentWorkName, [1]],
            [steps.work.validateComponentWorkAllocation, [1]],

            [steps.work.deleteComponentWork, [0]],
            [steps.work.confirmComponentWorkDeletion],
            [steps.work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(2)]],
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
        name: 'Change a non-composite work into a Composite of Samples',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 7]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(4)]],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
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

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(5)]],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.selectCompositeWorkType, ['Composite of Samples']],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMediumCreatorContribution, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
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

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(6)]],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
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

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(7)]],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.selectCompositeWorkType, ['Composite of Samples']],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMediumCreatorContribution, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
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

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(8)]],
            [steps.new_work.clickCompositeWorkCheckbox],
            [steps.new_work.selectCompositeWorkType, ['Medley']],
            [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST COMPONENT WORK ' + randomId(0)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [0]],
            [steps.new_work.selectFirstComponentWorkMatching, [1, 'TEST COMPONENT WORK ' + randomId(1)]],
            [steps.new_work.enterMediumComponentWorkAllocation, [1]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
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
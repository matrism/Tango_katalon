'use strict';

var random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['works', 'workDuplicateShellChecks', 'sanity', 'broken'];

exports.feature = [
    {
        name: 'Duplicate shell work check',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 0]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(0)]],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
            [steps.newWork.selectRandomCreator, [0]],
            [steps.newWork.enterCreatorContribution, [0, 50]],
            [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomId(0)]],
            [steps.newWork.enterComponentWorkAllocation, [0, 50]],
            [steps.newWork.selectRandomShellWorkCreator, [0, 0]],
            [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 1]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(1)]],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
            [steps.newWork.selectRandomCreator, [0]],
            [steps.newWork.enterCreatorContribution, [0, 50]],
            [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomId(0)]],
            [steps.newWork.enterComponentWorkAllocation, [0, 50]],
            [steps.newWork.selectPreviouslySelectedShellWorkCreator, [0, 0, 0, 0]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],
            [steps.base.sleep, [100]],
            [steps.work.hoverCreatorNamesContainer],
            [steps.work.editCreators],
            [steps.work.validateComponentWorkId, [0]],
            [steps.work.validateComponentWorkName, [0]],
            [steps.work.validateComponentWorkAllocation, [0]],
            [steps.work.clickShowComponentWorkDetailsButton, [0]],
            [steps.work.validateShellWorkCreatorName, [0, 0]],
            [steps.work.validateShellWorkCreatorContribution, [0, 0]],
        ]
    },
    {
        name: 'Duplicate shell work check: Ignore articles, extra whitespace, and punctuation',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 2]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(2)]],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
            [steps.newWork.selectRandomCreator, [0]],
            [steps.newWork.enterCreatorContribution, [0, 50]],
            [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomId(1)]],
            [steps.newWork.enterComponentWorkAllocation, [0, 50]],
            [steps.newWork.selectRandomShellWorkCreator, [0, 0]],
            [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 3]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.clickCompositeWorkCheckbox],
            [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
            [steps.newWork.enterNewShellWork, [0, 'A TEST SHELL WORK ' + randomId(1)]],
            [steps.newWork.selectPreviouslySelectedShellWorkCreator, [0, 0, 0, 0]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterNewShellWork, [1, 'AN TEST SHELL WORK ' + randomId(1)]],
            [steps.newWork.selectPreviouslySelectedShellWorkCreator, [1, 0, 0, 0]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterNewShellWork, [2, 'THE TEST SHELL WORK ' + randomId(1)]],
            [steps.newWork.selectPreviouslySelectedShellWorkCreator, [2, 0, 0, 0]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterNewShellWork, [3, 'TEST  SHELL   WORK     ' + randomId(1)]],
            [steps.newWork.selectPreviouslySelectedShellWorkCreator, [3, 0, 0, 0]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterNewShellWork, [4, ':TEST.SHELL,WORK;' + randomId(1)]],
            [steps.newWork.selectPreviouslySelectedShellWorkCreator, [4, 0, 0, 0]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
        ]
    }
];

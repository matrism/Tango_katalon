'use strict';

var random = require('../../../../helpers/random'),
    randomId = random.id();

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['works', 'workDuplicateChecks', 'regression', 'broken'];

exports.feature = [
    {
        name: 'Duplicate work checks',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 0]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectRandomCreator, [0]],
            [steps.newWork.enterMediumCreatorContribution, [0]],
            [steps.newWork.selectRandomCreator, [1]],
            [steps.newWork.enterMediumCreatorContribution, [1]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK GRINCH ' + randomId]],
            [steps.newWork.enterAlternateWorkTitle, [0, 'THE TEST WORK WONDERLAND ' + randomId]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 1]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.clickFirstSimilarWorkTitle],
            [steps.duplicateWorkChecks.validateSimilarWorkLinkDestination],

            [steps.base.useBlankEntityDataSlot, ['work', 2]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 3]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 4]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 5]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 6]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 7]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 8]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.expectSimilarWorksPopUpToHaveScrollbar],

            [steps.base.useBlankEntityDataSlot, ['work', 9]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 0]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['A TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterPrimaryWorkTitle, ['AN TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterPrimaryWorkTitle, ['THE TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST  WORK   WONDERLAND    ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.enterPrimaryWorkTitle, [':TEST.WORK,WONDERLAND;' + randomId + '?']],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 10]],

            [steps.newWork.goToNewWorkPage],
            [steps.newWork.selectPreviouslySelectedCreator, [0, 1]],
            [steps.newWork.enterMaximumCreatorContribution, [0]],
            [steps.newWork.enterPrimaryWorkTitle, ['TEST WORK EUPHORIA ' + randomId]],
            [steps.newWork.optToIncludeWorkOnWebsite, [false]],
            [steps.newWork.saveWork],
            [steps.newWork.validateSaveWorkRedirection],

            [steps.base.sleep, [100]],
            [steps.work.hoverPrimaryWorkTitleHeading],
            [steps.work.editWorkTitles],
            [steps.work.enterPrimaryWorkTitle, ['TEST WORK GRINCH ' + randomId]],
            [steps.work.waitTitleEditorCheckForDuplicates],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.work.saveWorkTitles],
        ]
    }
];

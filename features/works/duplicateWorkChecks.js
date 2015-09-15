'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../../helpers/random'),
    randomId = random.id();

require(steps_path + 'login');
require(steps_path + 'works/newWork');
require(steps_path + 'works/duplicateWorkChecks');

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['works', 'workDuplicateChecks', 'broken'];

exports.feature = [
    {
        name: 'Duplicate work checks',
        tags: [],
        steps: [
            [steps.base.useBlankEntityDataSlot, ['work', 0]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterMediumCreatorContribution, [0]],
            [steps.new_work.selectRandomCreator, [1]],
            [steps.new_work.enterMediumCreatorContribution, [1]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK GRINCH ' + randomId]],
            [steps.new_work.enterAlternateWorkTitle, [0, 'THE TEST WORK WONDERLAND ' + randomId]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 1]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.clickFirstSimilarWorkTitle],
            [steps.duplicateWorkChecks.validateSimilarWorkLinkDestination],

            [steps.base.useBlankEntityDataSlot, ['work', 2]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 3]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 4]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 5]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 6]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 7]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 8]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.expectSimilarWorksPopUpToHaveScrollbar],

            [steps.base.useBlankEntityDataSlot, ['work', 9]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['A TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.enterPrimaryWorkTitle, ['AN TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.enterPrimaryWorkTitle, ['THE TEST WORK WONDERLAND ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST  WORK   WONDERLAND    ' + randomId]],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.enterPrimaryWorkTitle, [':TEST.WORK,WONDERLAND;' + randomId + '?']],
            [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
            [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

            [steps.base.useBlankEntityDataSlot, ['work', 10]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.selectPreviouslySelectedCreator, [0, 1]],
            [steps.new_work.enterMaximumCreatorContribution, [0]],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK EUPHORIA ' + randomId]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],

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
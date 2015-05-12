'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id();

require(steps_path + 'login');
require(steps_path + 'new_work');
require(steps_path + 'duplicateWorkChecks');

hash.subjectWorkData = {};

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Duplicate work checks',
            tags: [],
            steps: [
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

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.clickFirstSimilarWorkTitle],
                [steps.duplicateWorkChecks.validateSimilarWorkLinkDestination],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.ignoreSimilarWorksWarning],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.selectPreviouslySelectedCreator, [0, 0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK WONDERLAND ' + randomId]],
                [steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed],
                [steps.duplicateWorkChecks.expectSimilarWorksPopUpToHaveScrollbar],

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
        },
    ];

module.exports = {
    commonFeatureTags: ['duplicate-work-checks'],
    feature: feature,
    beforeFeature: beforeFeature
};

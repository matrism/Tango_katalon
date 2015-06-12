'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'new_work');

hash.subjectWorkData = {};

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Search for a work by work ID, song code, and primary and alternate titles',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK ' + randomId(0)]],
                [steps.new_work.enterAlternateWorkTitle, [0, 'TEST WORK ALTERNATE TITLE ' + randomId(0.1)]],
                [steps.new_work.enterAlternateWorkTitle, [1, 'TEST WORK ALTERNATE TITLE ' + randomId(0.2)]],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
                [steps.base.waitForAjax],
                [steps.work.findCurrentlyOpenWorkId],

                [steps.base.goToHomePage],
                [steps.work.searchForPreviouslyEnteredWorkById],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.searchForPreviouslyEnteredWorkBySongCode],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.searchForPreviouslyEnteredWorkByPrimaryTitle],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.searchForPreviouslyEnteredWorkByAlternateTitle, [0]],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.searchForPreviouslyEnteredWorkByAlternateTitle, [1]],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],
            ]
        },
        {
            name: 'Search for a work by creator name and IPI number',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK ' + randomId(1)]],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
                [steps.base.waitForAjax],
                [steps.work.findCurrentlyOpenWorkId],

                [steps.base.goToHomePage],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorName, [0]],
                [steps.work.expectWorkSearchMatchCountNotToBe, [0]],

                [steps.base.goToHomePage],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorIpiNumber, [0]],
                [steps.work.expectWorkSearchMatchCountNotToBe, [0]],
            ]
        },
    ];

module.exports = {
    commonFeatureTags: ['search-for-works'],
    feature: feature,
    beforeFeature: beforeFeature
};

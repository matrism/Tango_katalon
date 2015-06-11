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
            name: 'Search for a work by work ID',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK ' + randomId(0)]],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],

                [steps.base.waitForAjax],
                [steps.work.findCurrentlyOpenWorkId],
                [steps.work.searchForPreviouslyEnteredWorkById, [0]],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],
            ]
        },
    ];

module.exports = {
    commonFeatureTags: ['search-for-works'],
    feature: feature,
    beforeFeature: beforeFeature
};

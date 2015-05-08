'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(steps_path + 'login');
require(steps_path + 'new_work');

hash.subjectWorkData = {};

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Check for duplicate works during work creation',
            tags: ['create'],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['Grinch']],
                [steps.new_work.enterAlternateWorkTitle, [0, 'The Wonderland']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterMaximumCreatorContribution, [0]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
            ]
        },
    ];

module.exports = {
    commonFeatureTags: ['duplicate-work-checks'],
    feature: feature,
    beforeFeature: beforeFeature
};

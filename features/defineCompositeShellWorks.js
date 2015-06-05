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
            name: 'Define a COS composite work with shell works',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(0)]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Composite of Samples']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 50]],
                [steps.new_work.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomId(0)]],
                [steps.new_work.enterComponentWorkAllocation, [0, 50]],
                [steps.new_work.selectRandomShellWorkCreator, [0, 0]],
                [steps.new_work.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
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
            name: 'Define a POT composite work with shell works',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(1)]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Potpourri']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 50]],
                [steps.new_work.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomId(1)]],
                [steps.new_work.enterComponentWorkAllocation, [0, 50]],
                [steps.new_work.selectRandomShellWorkCreator, [0, 0]],
                [steps.new_work.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
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
            name: 'Define a UCO composite work with shell works',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomId(2)]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Unspecified Composite']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 50]],
                [steps.new_work.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomId(2)]],
                [steps.new_work.enterComponentWorkAllocation, [0, 50]],
                [steps.new_work.selectRandomShellWorkCreator, [0, 0]],
                [steps.new_work.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
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
    ];

module.exports = {
    commonFeatureTags: ['define-composite-shell-works'],
    feature: feature,
    beforeFeature: beforeFeature
};

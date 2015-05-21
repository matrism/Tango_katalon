'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomIds = _.times(3, random.id);

require(steps_path + 'login');
require(steps_path + 'new_work');

hash.subjectWorkData = {};

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Define and edit COS, POT, and UCO composite works.',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomIds[0]]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Composite of Samples']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterMediumCreatorContribution, [0]],
                [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST']],
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
                [steps.work.selectFirstComponentWorkMatching, [0, 'AAA']],
                [steps.work.enterMediumComponentWorkAllocation, [0]],
                [steps.work.saveCreators],
                [steps.base.refreshPage],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkName, [0]],
                [steps.work.validateComponentWorkAllocation, [0]],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomIds[1]]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Unspecified Composite']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterMediumCreatorContribution, [0]],
                [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST']],
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

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomIds[2]]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Potpourri']],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterMediumCreatorContribution, [0]],
                [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST']],
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

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomIds[2]]],
                [steps.new_work.clickCompositeWorkCheckbox],
                [steps.new_work.selectCompositeWorkType, ['Medley']],
                [steps.new_work.selectFirstComponentWorkMatching, [0, 'TEST']],
                [steps.new_work.enterMediumComponentWorkAllocation, [0]],
                [steps.new_work.selectFirstComponentWorkMatching, [1, 'AAA']],
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
            ]
        },
    ];

module.exports = {
    commonFeatureTags: ['define-composite-works'],
    feature: feature,
    beforeFeature: beforeFeature
};

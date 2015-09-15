'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(steps_path + 'login');
require(steps_path + 'works/newWork');

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['works', 'search-for-wamps-works'];

exports.feature = [
    {
        name: 'Search for WAMPS works by full work ID',
        tags: [],
        steps: [
            [steps.work.selectWorkSearchFilterTag, [0, 'Work ID']],

            [steps.work.enterWorkSearchTerms, ['WW 008918634 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "DON'T UPSET THE RHYTHM"]],

            [steps.work.enterWorkSearchTerms, ['WW 008887127 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BEYOND THE VEIL"]],

            [steps.work.enterWorkSearchTerms, ['WW 008825773 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "COLD MOUNTAIN"]],

            [steps.work.enterWorkSearchTerms, ['WW 008751880 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BLUE SAILS UPON A SILVER SEA"]],
        ]
    },
    {
        name: 'Search for WAMPS works by song code',
        tags: [],
        steps: [
            [steps.work.selectWorkSearchFilterTag, [0, 'Work ID']],

            [steps.work.enterWorkSearchTerms, ['008918634']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "DON'T UPSET THE RHYTHM"]],

            [steps.work.enterWorkSearchTerms, ['008887127']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BEYOND THE VEIL"]],

            [steps.work.enterWorkSearchTerms, ['008825773']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "COLD MOUNTAIN"]],

            [steps.work.enterWorkSearchTerms, ['008751880']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BLUE SAILS UPON A SILVER SEA"]],
        ]
    }
];
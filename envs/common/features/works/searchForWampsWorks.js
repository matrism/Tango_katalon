'use strict';

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['works', 'smoke', 'searchForWampsWorks'];

exports.feature = [
    {
        name: 'Search for WAMPS works by full work ID',
        tags: [],
        steps: [
            [steps.mainHeader.search.selectEntityType, ['Works']],
            [steps.work.selectWorkSearchFilterTag, [0, 'Work ID']],

            [steps.work.enterWorkSearchTerms, ['WW 008918634 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "DON'T UPSET THE RHYTHMs"]],

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
            [steps.mainHeader.search.selectEntityType, ['Works']],
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

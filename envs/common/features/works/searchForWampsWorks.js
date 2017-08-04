'use strict';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.id = '7e426da9-ca9e-447a-84d6-f41821664f2a';

exports.commonFeatureTags = ['works', 'smoke', 'searchForWampsWorks'];

exports.feature = [
    {
        name: 'Search for WAMPS works by full work ID',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
            [steps.mainHeader.search.selectEntityType, ['Works']],
            [steps.work.selectWorkSearchFilterTag, [0, 'Work ID']],

            [steps.work.enterWorkSearchTerms, ['WW 008918634 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "DON'T UPSET THE RHYTHM"]],

            [steps.work.enterWorkSearchTerms, ['WW 008887127 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BEYOND THE VEIL"]],
            /* no longer valid
            [steps.work.enterWorkSearchTerms, ['WW 015001125 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "COLD MOUNTAIN 55555 LILIA CHANGE"]],

            [steps.work.enterWorkSearchTerms, ['WW 015003969 00']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BLUE SAILS UPON A SILVER SEA"]],
            */
            ]);
        }
    },
    {
        name: 'Search for WAMPS works by song code',
        tags: [],
        steps: function () {
            executeLegacyStepsArray([
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
            /*
            [steps.work.enterWorkSearchTerms, ['015001125']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "COLD MOUNTAIN 55555 LILIA CHANGE"]],

            [steps.work.enterWorkSearchTerms, ['015003969']],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchTitleToBe, [0, "BLUE SAILS UPON A SILVER SEA"]],
            */
            ]);
        }
    }
];

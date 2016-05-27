'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.royaltiesBackEnd = exports;

pageStep([
    'Get work summary',
    'Validate work summary',
    'Get deal summaries',
    'Validate deal summaries',
    'Get income apportion'
]);

addStep(exports, 'Store work summary in test variable', (ptc, rp, twc, varName) => {
    pages.royaltiesBackEnd.getWorkSummary(ptc, rp, twc).then((response) => {
        if (response['work_summary_distributions']) {
            setTestVariable(varName, response['work_summary_distributions']['SMECH']);
        }
    });
});

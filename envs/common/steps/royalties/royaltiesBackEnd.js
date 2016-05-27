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


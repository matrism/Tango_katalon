'use strict';

var pageStep = require('../../../../helpers/basicPageStep.js');
steps.workIncomeRates = exports;

pageStep([
    ['filters', [
        'Select Royalty Period',
        'Select Processing Territory'
    ]],
    ['Table', [
        'Validate'
    ]]
]);

'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.royaltyStatements = exports;

pageStep([
    'Select first royalty period',
    'Expect statement list to be populated',
    'Store first statement ID',
    'Store Income Providers',
    'Expect all visible statements to have type',
    'Expect number of visible statements to be',
    'Expect number of visible statements to be at least',
    [
        'Filters',
        [
            'Select type',
            'Filter by first statement ID',
            'Expect disabled filters to be',
            'Clear ID filter',
            'Filter by known income providers'
        ]
    ]
]);
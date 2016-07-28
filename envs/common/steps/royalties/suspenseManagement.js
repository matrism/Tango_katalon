'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.suspenseManagement = exports;

pageStep([
    'Validate Selected Tab',
    'Click Tab',
    ['Filters', [
        'Validate Processing Territory',
        'Store Selected Period',
        'Validate Royalty Period',
        'Select Processing Territory',
        'Select Royalty Period',
        'Select Closed Period',
        'Click Go'
    ]],
    ['Activity Summary', [
        'Validate Labels',
        'Validate Values',
        'Expect Values to be updated'
    ]],
    ['Suspense', [
        'Expect rows to be present',
        'Expect rows to be updated'
    ]]
]);

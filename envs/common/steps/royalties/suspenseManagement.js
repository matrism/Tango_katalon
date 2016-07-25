'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.suspenseManagement = exports;

pageStep([
    'Validate Selected Tab',
    'Click Tab'
    ['Filters', [
        'Validate Processing Territory',
        'Select Processing Territory',
        'Select Royalty Period',
        'Select Closed Period',
        'Click Go'
    ]],
    ['Activity Summary', [
        'Validate Labels',
        'Validate Values',
        'Expect Values To Be Updated'
    ]]
]);

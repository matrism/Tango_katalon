'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.suspenseManagement = exports;

pageStep([
    'Validate Selected Tab',
    ['Filters', [
        'Validate Processing Territory',
        'Select Processing Territory',
        'Select royalty period'
    ]],
    ['Activity Summary', [
        'Validate Labels',
        'Validate Values',
        'Expect Values To Be Updated'
    ]]
]);

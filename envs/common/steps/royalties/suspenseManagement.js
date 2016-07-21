'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.suspenseManagement = exports;

pageStep([
    ['Filters', [
        'Select Processing Territory',
        'Select royalty period'
    ]],
    ['Activity Summary', [
        'Validate'
    ]]
]);

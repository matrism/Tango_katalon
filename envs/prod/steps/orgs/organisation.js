'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.organisation = exports;

pageStep([
    'Validate Cisac Code',
    'Go to Preview Registration Run tab',
    'Wait for Preview Registration Run header to be displayed',
    'Go to Registration Activity tab',
    'Wait for Registration Activity records table to be displayed',
    'Validate sub-publisher name',
]);

'use strict';

var pageStep = require('../helpers/basicPageStep'),
    page = require(pages_path + 'organisationProduction');

steps.organisationProduction = exports;

pageStep([
    'Validate CISAC code',
    'Go to Preview Registration Run tab',
    'Wait for Preview Registration Run header to be displayed',
    'Go to Registration Activity tab',
    'Wait for Registration Activity records table to be displayed',
    'Validate sub-publisher name',
]);

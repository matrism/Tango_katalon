'use strict';

var pageStep = require('../helpers/basicPageStep'),
    page = require(pages_path + 'organisationProduction');

steps.organisationProduction = exports;

pageStep([
    ['General', [
        'Edit section',
        'Enter name',
        'Edit territories of operation',
        'Delete territory of operation',
        'Enter territory of operation search terms',
        'Select territory of operation search result by index',
        'Select organisation type',
        'Select publisher type',
        'Save section',
        'Expect section to be in view mode',
    ]],

    ['Income Provider', [
        'Edit section',
        'Select primary territory of operation',
        'Select default currency',
        'Delete income file type',
        'Enter income file type search terms',
        'Select income file type search result by index',

        ['Income Type Mapping', [
            'Delete row',
            'Enter inbound income type',
            'Enter inbound income type description',
            'Enter income file type search terms',
            'Select income file type search result by index',
            'Enter Tango income type search terms',
            'Select Tango income type search result by index',
        ]],

        'Save section',
        'Expect section to be in view mode',
    ]],

    ['Sub-Publishers', [
        'Expect name to be either',
    ]],

    'Validate CISAC code',
    'Go to Preview Registration Run tab',
    'Wait for Preview Registration Run header to be displayed',
    'Go to Registration Activity tab',
    'Wait for Registration Activity records table to be displayed',

    'Download CR file',
    'View validation errors',
]);

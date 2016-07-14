'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.crossReference = exports;

pageStep([
    'Select search criterion',
    'Search for Incoming Work',
    'Enter Incoming Work Search Terms',
    'Search for Tango Work',
    'Expect No Results Message',
    'Expect Incoming Work to be visible',
    'Expect Tango Work to be visible',
    'Expect Tango Work Title To Contain',
    'Expect Incoming Work Id to contain search term',
    'Click Add Cross Reference button',
    'Expect No Cross Reference',
    ['Items', [
        'Expand',
        'Validate Title',
        'Validate Creators',
        'Validate Id',
        'Rematch',
        'Search For Rematch Work',
        'Confirm',
        'Unmatch'
    ]],
    ['Add Form', [
        'Expect Cross Reference form to be visible',
        'Expect form labels to be',
        'Enter Title',
        'Enter Creators',
        'Enter Id',
        'Enter IncomeProvider',
        'Expect Confirm Buttom To Be Disabled',
        'Confirm',
        'Validate Success Message'
    ]]
]);

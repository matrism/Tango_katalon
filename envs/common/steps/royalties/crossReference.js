'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.crossReference = exports;

pageStep([
    'Select search criterion',
    'Search for Incoming Work',
    'Search for Tango Work',
    'Expect Incoming Work to be visible',
    'Expect Tango Work to be visible',
    'Expect Incoming Work Id to contain search term',
    'Click Add Cross Reference button',
    'Expect Cross Reference form to be visible',
    'Expect form labels to be',
    ['Items', [
        'Expand',
        'Rematch',
        'Search For Rematch Work',
        'Unmatch'
    ]]
]);

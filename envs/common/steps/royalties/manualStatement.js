'use strict';

var pageStep = require('../../../../helpers/basicPageStep.js');

steps.manualStatement = exports;

pageStep([
    'Click link',
    'Expect Statement value to be',
    'Click Back to Statements View link',
    'Open Statement blind',
    'Open first blind',
    'Click edit button',
    'Expect save button to be disabled',
    'Expect save button to be enabled',
    'Edit field',
    'Click save button',
]);

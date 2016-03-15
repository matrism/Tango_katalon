'use strict';

var pageStep = require('../../../../helpers/basicPageStep.js');

steps.editAdvances = exports;

pageStep([
    'Click Add Advance button',
    'Select Contract Period by index',
    'Set Advance amount',
    'Set currency',
    ['Distribution rules', [
        'Set When',
    ]],
    'Save Advance',
    'Expect to be redirected to Advance Summary',
    'Expect Contract Periods to be',
    'Expect each Contract Period to have advances',
    'Expect Contract Periods to display Advance Assumptions link',
    'Expect Advance Assumptions pop-up to appear'
]);

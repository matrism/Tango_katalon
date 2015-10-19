'use strict';

var pageStep = require('../helpers/basicPageStep');

steps.workRegistrationActivity = exports;

require(pages_path + 'workRegistrationActivity');

pageStep([
    ['Activity Group', [
        'Find',
        'Validate recipient name',
        'Go to recipient page',
        'Toggle blind',
        'Validate event count',
        'Expect any event status to be'
    ]],
]);

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

        ['Events', [
            'Validate event count',
            'Find',
            'Validate status',
            'Wait until any event status becomes',
            'Toggle blind',
            'Store file name in test variable'
        ]]
    ]],
]);

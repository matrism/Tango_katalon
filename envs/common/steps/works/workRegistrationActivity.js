'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.workRegistrationActivity = exports;

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
            'Store file name in test variable',
            'Validate Ack Creation Date',
            'Validate InitiatedBy',
            'Validate Message',
            'Validate Record Type',
            'Validate Message Level',
            'Validate Validation Number',
            'Validate Society Code',
            'Validate Processed Date'
        ]]
    ]],
]);

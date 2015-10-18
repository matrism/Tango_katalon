'use strict';

var pageStep = require('../helpers/basicPageStep');

steps.workRegistrationActivity = exports;

require(pages_path + 'workRegistrationActivity');

pageStep([
    ['Activity Group', [
        'Find',
        'Validate recipient name',
        'Go to registration recipient name',
        'Toggle blind',

        ['Event', [
            'Find',
            'Validate status'
        ]]
    ]],
]);

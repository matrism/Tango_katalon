'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.organisationRegistrationStack = exports;

pageStep([
    ['Works', [
        'Find',
        'Validate errors',
        'Validate ID',
        'Validate status',
        'Validate absence'
    ]],

    ['Registration Run', [
        'Execute',
        'Proceed',

        ['Start success message', [
            'Wait until displayed',
            'Dismiss'
        ]]
    ]]
]);

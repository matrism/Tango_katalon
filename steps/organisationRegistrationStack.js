'use strict';

var pageStep = require('../helpers/basicPageStep');

steps.organisationRegistrationStack = exports;

require(pages_path + 'organisationRegistrationStack');

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

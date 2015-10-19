'use strict';

var pageStep = require('../helpers/basicPageStep');

steps.organisationRegistrationActivity = exports;

require(pages_path + 'organisationRegistrationActivity');

pageStep([
    ['Events', [
        'Find',
        'Toggle blind',
        'Wait until status becomes'
    ]]
]);

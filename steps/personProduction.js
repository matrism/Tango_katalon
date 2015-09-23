'use strict';

var pageStep = require('../helpers/basicPageStep');

steps.personProduction = exports;

require(pages_path + 'personProduction');

pageStep([
    'Validate SUISA IPI number',
    'Validate alternative name',
]);

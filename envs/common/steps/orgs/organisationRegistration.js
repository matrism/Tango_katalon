'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.organisationRegistration = exports;

pageStep([
    'Load Ack',
    'Enter File Name',
    'Select FTP Method',
    'Unmask password',
    'Get FTP options',
    'Submit Load Ack',
    'Wait Until Event Status Becomes'
]);

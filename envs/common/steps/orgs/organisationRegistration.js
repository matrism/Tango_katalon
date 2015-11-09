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
    'Wait Until Event Status Becomes',
    'Validate Ack Creation Date',
    'Validate Total Accepted',
    'Validate Total Rejected',
    'Validate Initiated By',
    'Validate Accepted Values',
    'Validate Rejected Values'
]);

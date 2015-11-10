'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.uploadEdiFile = exports;

pageStep([
    'Select Processing Territory',
    'Select first royalty period',
    'Select Wcm Common Format',
    'Check multiple income providers box',
    'Select income provider',
    'Select file format',
    'Select file',
    'Set statement distribution period start',
    'Set statement distribution period end',
    'Set expected file amount',
    'Set expected file amount currency',
    'Set exchange rate',
    'Click Create button',
    'Wait for upload to complete',
    'Expect to be redirected to File Upload History',
    'Expect uploaded file to be listed',
    'Open uploaded file blind',
    'Expect uploaded file to have correct expected amount',
    'Wait for file to be processed',
    'Wait for file status to be',
    'Expect File Read in Amount to be',
    'Expect File Gross Amount to be',
    'Expect File Net Amount to be',
    'Open first generated statement',
    'Expect number of statements to be',
    'Expect statement values to be',
    'Switch to tab by index',
    'Close tab by index',
    'Expect to be redirected to Royalty Statements',
    'Expect Summary By Type to be',
    'Expect Statement field to be',
    'Roll back uploaded file',
    'Expect modal window to be visible',
    'Edit uploaded file',
    'Assume uploaded file',
    'Expect uploaded expected file amount field to be visible',
    'Expect uploaded expected file amount field to be hidden',
    'Expect save button to be disabled',
    'Expect save button to be enabled',
    'Click Save button',
    'Change uploaded expected file amount field',
    'Click Cancel link',
    'Expect unsaved statement modal to be visible',
    'Click continue editing link',
    'Click confirm cancellation button',

    'Edit statement',
    'Change accounts reference field'
]);


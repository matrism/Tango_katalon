'use strict';

var pageStep = require('../../helpers/basicPageStep');

steps.uploadEdiFile = exports;

pageStep('Select Processing Territory');
pageStep('Select first royalty period');
pageStep('Select income provider');
pageStep('Select file format');
pageStep('Select file');
pageStep('Set statement distribution period start');
pageStep('Set statement distribution period end');
pageStep('Set expected file amount');
pageStep('Set expected file amount currency');
pageStep('Set exchange rate');
pageStep('Click Create button');
pageStep('Wait for upload to complete');
pageStep('Expect to be redirected to File Upload History');
pageStep('Expect uploaded file to be listed');
pageStep('Open uploaded file blind');
pageStep('Expect uploaded file to have correct expected amount');
pageStep('Wait for file to be processed');
pageStep('Expect File Read in Amount to be');
pageStep('Expect File Gross Amount to be');
pageStep('Expect File Net Amount to be');
pageStep('Open first generated statement');
pageStep('Switch to tab by index');
pageStep('Close tab by index');
pageStep('Expect to be redirected to Royalty Statements');
pageStep('Expect Summary By Type to be');
pageStep('Roll back uploaded file');
pageStep('Expect modal window to be visible');


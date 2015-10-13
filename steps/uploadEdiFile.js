'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    pageStep = require('../helpers/basicPageStep');

steps.uploadEdiFile = exports;
require(pages_path + 'uploadEdiFile');

pageStep('Select Processing Territory');
pageStep('Select first royalty period');
pageStep('Select Wcm Common Format');
pageStep('Check multiple income providers box');
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
pageStep('Expect number of statements to be');
pageStep('Expect statement values to be');
pageStep('Switch to tab by index');
pageStep('Close tab by index');
pageStep('Expect to be redirected to Royalty Statements');
pageStep('Expect Summary By Type to be');
pageStep('Expect Statement field to be');
pageStep('Roll back uploaded file');
pageStep('Expect modal window to be visible');
pageStep('Edit uploaded file');
pageStep('Assume uploaded file');
pageStep('Expect uploaded expected file amount field to be visible');
pageStep('Expect uploaded expected file amount field to be hidden');
pageStep('Expect save button to be disabled');
pageStep('Expect save button to be enabled');
pageStep('Click Save button');
pageStep('Change uploaded expected file amount field');
pageStep('Click Cancel link');
pageStep('Expect unsaved statement modal to be visible');
pageStep('Click continue editing link');
pageStep('Click confirm cancellation button');

pageStep('Edit statement');
pageStep('Change accounts reference field');



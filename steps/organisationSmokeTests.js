'use strict';

var pageStep = require('../helpers/pageStep')();

require(pages_path + 'organisationSmokeTests');

steps.organisationSmokeTests = exports;

pageStep('Populate name');
pageStep('Select Org type');
pageStep('Select Territory of Operation');
pageStep('Select publisher type');
pageStep('Search for society');
pageStep('Make Org registration recipient');
pageStep('Add delivery method');
pageStep('Fill required fields for delivery method');
pageStep('Select Acknowledgement Process');
pageStep('Select Acknowledgement Process Delivery Method');
pageStep('Click Subpublisher Relationship button');
pageStep('Fill Subpublisher fields');
pageStep('Click Add Subpublisher button');
pageStep('Make Org Income Provider');
pageStep('Set default Income Provider currency');
pageStep('Set Income File Type');
pageStep('Add Income Type Mapping');
pageStep('Make Org Payee');
pageStep('Make Org Statement Recipient');
pageStep('Set statement recipient data');


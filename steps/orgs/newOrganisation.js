'use strict';

var pageStep = require('../../helpers/basicPageStep');

require(pages_path + 'orgs/newOrganisation');

steps.newOrganisation = exports;

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
pageStep('Fill required fields for last Subpublisher');
pageStep('Click Add Subpublisher button');
pageStep('Make Org Income Provider');
pageStep('Select primary income provider territory of operation');
pageStep('Set default Income Provider currency');
pageStep('Set Income File Type');
pageStep('Enter income type mapping type');
pageStep('Enter income type mapping description');
pageStep('Enter income type mapping file type search terms');
pageStep('Select income type mapping file type search result by index');
pageStep('Enter income type mapping internal type search terms');
pageStep('Select income type mapping internal type search result by index');
pageStep('Make Org Payee');
pageStep('Make Org Statement Recipient');
pageStep('Set statement recipient data');
pageStep('Expect form to be valid');
pageStep('Expect Done button to be clickable');
pageStep('Save organisation');
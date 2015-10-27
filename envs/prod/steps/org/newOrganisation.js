'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.newOrganisationProduction = exports;

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
pageStep('Set default Income Provider currency');
pageStep('Set Income File Type');
pageStep('Add Income Type Mapping');
pageStep('Make Org Payee');
pageStep('Make Org Statement Recipient');
pageStep('Set statement recipient data');
pageStep('Expect form to be valid');
pageStep('Expect Done button to be clickable');
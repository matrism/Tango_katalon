'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.newOrganisation = exports;

pageStep([
    'Populate name',
    'Select Org type',
    'Enter SUISA IPI number',
    'Select Territory of Operation',
    'Select publisher type',
    'Search for society',
    'Make Org registration recipient',
    'Add delivery method',
    'Fill required fields for delivery method',
    'Select Acknowledgement Process',
    'Select Acknowledgement Process Delivery Method',
    'Click Subpublisher Relationship button',
    'Fill required fields for last Subpublisher',
    'Click Add Subpublisher button',
    'Make Org Income Provider',
    'Select primary income provider territory of operation',
    'Set default Income Provider currency',
    'Set Income File Type',
    'Enter income type mapping type',
    'Enter income type mapping description',
    'Enter income type mapping file type search terms',
    'Select income type mapping file type search result by index',
    'Enter income type mapping internal type search terms',
    'Select income type mapping internal type search result by index',
    'Make Org Payee',
    'Make Org Statement Recipient',
    'Set statement recipient data',
    'Enter affiliated society search terms',
    'Select affiliated society search result by index',
    'Expect form to be valid',
    'Expect Done button to be clickable',
    'Save organisation',
    'Validate save redirection'
]);
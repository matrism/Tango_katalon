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
    'Fill contact address lines',
    'Fill contact city',
    'Fill contact state',
    'Fill contact zip code',
    'Set contact country',
    'Fill contact phone number',
    'Fill contact fax number',
    'Fill contact email',
    'Make Org registration recipient',
    'Make Org have registration recipients',
    'Add delivery method',
    'Expect FTP and SFTP to have different labels',
    'Fill required fields for delivery method',
    'Select Acknowledgement Process',
    'Select Acknowledgement Process Delivery Method',
    'Type recipient name',
    'Add recipient',
    'Click Subpublisher Relationship button',
    'Fill required fields for last Subpublisher',
    'Fill Subpublisher society agreement number',
    'Select Subpublisher society',
    'Click Add Subpublisher button',
    'Remove last Subpublisher',
    'Make Org Income Provider',
    'Expect territory error message to be visible',
    'Expect territory error message to not be present',
    'Select primary income provider territory of operation',
    'Set default Income Provider currency',
    'Set Income File Type',
    'Enter income type mapping type',
    'Enter income type mapping description',
    'Enter income type mapping file type search terms',
    'Add income type mapping',
    'Select income type mapping file type search result by index',
    'Enter income type mapping internal type search terms',
    'Select income type mapping internal type search result by index',
    'Make Org Payee',
    'Set payee account name',
    'Expect Payee Account Name to be if present',
    'Make Org Statement Recipient',
    'Set statement recipient data',
    'Enter affiliated society search terms',
    'Select affiliated society search result by index',
    'Expect form to be valid',
    'Expect Done button to be clickable',
    'Save organisation',
    'Validate save redirection'
]);

exports.createOrganistation = data => {
    var newOrg = this;

    describe('Create new organisation', () => {
        steps.mainHeader.createNewRecord('Organisation');

        newOrg.populateName(data.name);
        newOrg.selectOrgType(data.type);
        newOrg.selectTerritoryOfOperation(data.territory_of_operation);
        newOrg.selectPublisherType(data.publisher_type);

        if (data.payee) {
            newOrg.makeOrgPayee();
            if (data.payee.account_name) {
                newOrg.expectPayeeAccountNameToBeIfPresent(data.name);
            }
        }

        newOrg.saveOrganisation();
    });
}

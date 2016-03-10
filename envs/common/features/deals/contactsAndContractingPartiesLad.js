'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

exports.commonFeatureTags = ['deals', 'regression'];

exports.feature = [
    {
        name: 'Add Contacts and Contracting Parties',
        tags: ['contactsAndContractingPartiesLad'],
        steps: function () {

            var timeout = 100000;
            //steps.searchSection.accessSavedDealByNumber("267100");

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();

            //add 3 contract periods
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2015-04-04");
            steps.createDealContractPeriod.addNewContractPeriodDialog();

            steps.createDealContractPeriod.fillContractPeriodDescription("Description 2");
            steps.createDealContractPeriod.fillEndTargetMonths();
            steps.base.scrollIntoView("Add actual end date", pages.createDealContractPeriod.elems.actualEndDate);
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2016-02-04");

            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 3");
            steps.createDealContractPeriod.fillEndTargetMonths();


            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetail();

            describe('Add 10 external contacts', function () {
                var roles = ['Attorney', 'Business Manager', 'Contact', 'Producer', 'Approvals', 'Legal Notices', 'Manager', 'Legal notices CC', 'Attorney', 'Business Manager'];

                steps.deal.clickAddExternalContactLink();
                _.each(roles, function (role) {
                    steps.deal.addExternalContact(role, 'Test');
                });
                steps.deal.saveExternalContacts();
            });

            describe('Add 2 internal contacts', function () {
                var roles = ['Attorney', 'Product Manager'];

                steps.deal.clickAddInternalContactLink();
                _.each(roles, function (role) {
                    steps.deal.addInternalContact(role, 'Test');
                });
                steps.deal.saveInternalContacts();
            });

            describe('Add 5 contracting parties', function () {
                steps.deal.addContractingParties('Test', 'JOHN ADAMS', 'Katy', 'ASCAP', 'MAX MARTIN');
            });

        }
    }
];

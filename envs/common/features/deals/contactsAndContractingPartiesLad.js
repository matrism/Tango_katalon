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
                var roles = ['Attorney', 'Business Manager', 'Contact', 'Producer', 'Approvals', 'Legal Notices', 'Manager', 'Legal notices CC', 'Attorney', 'Business Manager'],
                    names = ['Bob', 'Sharon', 'John', 'Sarah', 'William', 'Diane', 'Richard', 'Philip', 'Steve', 'Claire'];

                steps.deal.clickAddExternalContactLink();
                _.each(roles, function (role, i) {
                    steps.deal.addExternalContact(role, names[i]);
                });
                steps.deal.saveExternalContacts();
            });

            describe('Add 2 internal contacts', function () {
                var roles = ['Attorney', 'Product Manager'],
                    names = ['Mackintosh, Alex', 'John'];

                steps.deal.clickAddInternalContactLink();
                _.each(roles, function (role, i) {
                    steps.deal.addInternalContact(role, names[i]);
                });
                steps.deal.saveInternalContacts();
            });

            describe('Add 5 contracting parties', function () {
                steps.deal.expectNumberOfContractingPartiesToBe(1);
                steps.deal.addContractingParties('SACEM', 'JOHN ADAMS', 'Katy', 'ASCAP', 'MAX MARTIN');
            });


            describe('Refresh page and expect added data to be present', function () {
                steps.deal.refreshThePage();
                steps.deal.expectNumberOfContractingPartiesToBe(6);
                steps.deal.expectNumberOfExternalContactsToBe(10);
                steps.deal.expectNumberOfInternalContactsToBe(2);
            });

        }
    }
];

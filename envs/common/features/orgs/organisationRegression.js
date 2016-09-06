var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    randomId = random.id.makeMemoizedGenerator(),
    data = requireFromEnvFolder('features/orgs/data/organisationRegression.js');

//exports.id = 'e088e141-fd44-4245-8476-f66dc8e07057';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'crefactor'
];

exports.feature = [{
    name: 'Create Organisation',
    tags: [],

    steps: function() {
        var newOrg = steps.newOrganisation,
            orgPage = steps.organisation,
            rndStr = randomString(0),
            orgIpiNumber = undefined;

        //,data.society,data.copyrightHub,data.licensee
        [data.publisher].forEach(function(org) {

            describe('Create ' + org.organisationType + ' & validate data', function() {
                describe('Create new '+ org.organisationType, function() {

                    steps.mainHeader.createNewRecord('Organisation');

                    newOrg.verifyActiveOrgTypeButton('Publisher');


                    describe('General', function() {
                        newOrg.populateName(org.name + rndStr);
                        newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                        newOrg.selectOrgType(org.organisationType);
                        newOrg.selectPublisherType(org.publisherType);
                    });

                    describe('Contact Information', function() {
                        newOrg.fillContactAddressLines(org.contact.addressLines);
                        newOrg.fillContactCity(org.contact.city);
                        newOrg.fillContactState(org.contact.state);
                        newOrg.fillContactZipCode(org.contact.zipCode);
                        newOrg.setContactCountry(org.contact.country);

                        newOrg.fillContactPhoneNumber(org.contact.phoneNumber);
                        newOrg.fillContactFaxNumber(org.contact.faxNumber);
                        newOrg.fillContactEmail(org.contact.email);
                    });

                    describe('Registration', function() {
                        newOrg.makeOrgRegistrationRecipient();
                        newOrg.expectFtpAndSftpToHaveDifferentLabels();

                        newOrg.addDeliveryMethod(org.deliveryMethod);
                        newOrg.fillRequiredFieldsForDeliveryMethod(org.deliveryMethod);

                        newOrg.selectAcknowledgementProcess('Single');
                        newOrg.selectAcknowledgementProcessDeliveryMethod('Email');

                        //make sure we can add a second delivery method
                        newOrg.addDeliveryMethod(org.deliveryMethod);
                        newOrg.fillRequiredFieldsForDeliveryMethod(org.deliveryMethod);

                        newOrg.makeOrgHaveRegistrationRecipients();
                        newOrg.addRecipient();
                        newOrg.typeRecipientName('FOX');
                    });

                    describe('Sub-Publisher Relationships', function() {
                        newOrg.clickSubpublisherRelationshipButton('Yes');
                        newOrg.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                        newOrg.fillSubpublisherSocietyAgreementNumber(202202);
                        newOrg.selectSubpublisherSociety('OSA');
                        newOrg.removeLastSubpublisher();
                        steps.base.waitForModal();
                        steps.base.expectModalPopUpToBeDisplayed();
                        steps.base.clickModalPrimaryButton();
                    });

                    describe('Income Provider', function() {
                        newOrg.makeOrgIncomeProvider();
                        newOrg.expectTerritoryErrorMessageToBeVisible();
                        newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                        newOrg.expectTerritoryErrorMessageToNotBePresent();

                        newOrg.setDefaultIncomeProviderCurrency(org.incomeProvider.currency);
                        newOrg.setIncomeFileType(org.incomeProvider.incomeFileType);

                        newOrg.addIncomeTypeMapping(0, 20, 'description', undefined, 'Mechanical');
                        newOrg.addIncomeTypeMapping(1, 30, 'description', org.incomeProvider.incomeFileType, 'Digital Cover');
                    });

                    describe('Payment/Statement Info', function() {
                        newOrg.makeOrgPayee();
                        newOrg.expectPayeeAccountNameToBeIfPresent(org.name);
                        /*this.makeOrgStatementRecipient();
                        this.setStatementRecipientData('Excel', 'Email with Attachment');*/
                    });

                    newOrg.expectFormToBeValid();
                    //newOrg.saveOrganisation();
                    //orgIpiNumber=orgPage.findInternalIpiNumber();
                });



                // describe('Navigate to previously saved '+ org.organisationType, function () {
                //     steps.base.goToHomePage();
                //     steps.searchSection.selectEntityType('Organisations');
                //     orgPage.enterOrgSearchTerms(org.name + rndStr);
                //     pages.base.waitForAjax();
                //     orgPage.clickOrgSearchMatch(0);
                //     orgPage.validateIpiNumber(orgIpiNumber);
                // });
                //
                // describe('Validate saved data', function(){
                //     using(steps.organisation, function(){
                //         this.expectValue('General', 'Name').toEqual(org.name);
                //         this.expectValue('General', 'Territories of Operation').toContain(org.territoryOfOperation);
                //         this.expectValueExact('General', 'Type:').toEqual('Publisher');
                //         this.expectInternalIpiNumberToBeUnique();
                //         this.expectValue('General', 'Publisher Type').toEqual('WCM');
                //
                //         _.each(org.contact.addressLines, function(line, i) {
                //             steps.organisation.expectValue('Contact Information', 'Address ' + (i+1)).toEqual(line);
                //         });
                //
                //         this.expectValue('Contact Information', 'City').toEqual(org.contact.city);
                //         this.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state);
                //         this.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode);
                //         this.expectValue('Contact Information', 'Country').toEqual(org.contact.country);
                //         this.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber);
                //         this.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber);
                //         this.expectValue('Contact Information', 'Email').toEqual(org.contact.email);
                //
                //         this.expectValue('Income Provider', 'Primary Territory of Operation').toEqual(org.territoryOfOperation);
                //         this.expectValue('Income Provider', 'Default Currency').toEqual(org.incomeProvider.currency);
                //         this.expectValue('Income Provider', 'Income File Type').toEqual(org.incomeProvider.incomeFileType);
                //         this.incomeProvider.expectNumberOfMappingsToBe(2);
                //         this.incomeProvider.viewIncomeTypeMappingDetails();
                //         this.incomeProvider.expectMappingToBe(0, ['20', 'description', '', 'Mechanical']);
                //         this.incomeProvider.expectMappingToBe(1, ['30', 'description', org.incomeProvider.incomeFileType, 'Digital Cover']);
                //
                //         this.expectValue('Payment/Statement Info', 'Payee').toEqual('Yes');
                //         this.expectValue('Payment/Statement Info', 'Statement Recipient').toEqual('No');
                //         this.expectValue('Payment/Statement Info', 'Preferred Language').toEqual('English');
                //     });
                // });
            });
        });


    }
}];
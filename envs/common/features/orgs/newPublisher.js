var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.id = 'e088e141-fd44-4245-8476-f66dc8e07057';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = [];

exports.feature = [
    {
        name: 'Create Organisation form - Publisher',
        tags: ['newPublisher'],
        steps: function () {
            var newOrg = steps.newOrganisation,
                orgPage = steps.organisation,
                org = {
                    name: 'Org Publisher test',
                    territoryOfOperation: 'United States',
                    organisationType: 'Publisher',
                    publisherType: 'WCM',
                    deliveryMethod: 'FTP',

                    contact: {
                        addressLines: [
                            'Address line 1',
                            'Address line 2',
                            'Address line 3'
                        ],
                        city: 'City name',
                        state: 'State name',
                        zipCode: '202303',
                        country: 'Angola',
                        phoneNumber: '555185772569',
                        faxNumber: '555185772569',
                        email: 'some@email.com'
                    },
                    incomeProvider: {
                        currency: 'USD',
                        incomeFileType: 'ASCAP DOMESTIC'
                    }

                };

            describe('Create Publisher & validate data', function () {
                describe('Create new publisher', function(){

                    steps.mainHeader.createNewRecord('Organisation');

                    describe('General', function() {
                        newOrg.populateName(org.name);
                        //newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                        newOrg.selectOrgType(org.organisationType);
                        newOrg.selectPublisherType(org.publisherType);
                    });

                    describe('Contact Information', function () {
                        newOrg.fillContactAddressLines(org.contact.addressLines);
                        newOrg.fillContactCity(org.contact.city);
                        newOrg.fillContactState(org.contact.state);
                        newOrg.fillContactZipCode(org.contact.zipCode);
                        newOrg.setContactCountry(org.contact.country);

                        newOrg.fillContactPhoneNumber(org.contact.phoneNumber);
                        newOrg.fillContactFaxNumber(org.contact.faxNumber);
                        newOrg.fillContactEmail(org.contact.email);
                    });

                    describe('Registration', function () {
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
                        newOrg.addRecipient('FOX');
                    });

                    describe('Sub-Publisher Relationships', function () {
                        newOrg.clickSubpublisherRelationshipButton('Yes');
                        newOrg.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                        newOrg.fillSubpublisherSocietyAgreementNumber(202202);
                        newOrg.selectSubpublisherSociety('OSA');
                        newOrg.removeLastSubpublisher();
                        steps.base.waitUntilModalAnimationFinishes();
                        steps.base.expectModalPopUpToBeDisplayed();
                        steps.base.clickModalPrimaryButton();
                    });

                    describe('Income Provider', function () {
                        newOrg.makeOrgIncomeProvider();
                        newOrg.expectTerritoryErrorMessageToBeVisible();
                        newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                        newOrg.expectTerritoryErrorMessageToNotBePresent();

                        newOrg.setDefaultIncomeProviderCurrency(org.incomeProvider.currency);
                        newOrg.setIncomeFileType(org.incomeProvider.incomeFileType);

                        newOrg.addIncomeTypeMapping(0, 20, 'description', undefined, 'Mechanical');
                        newOrg.addIncomeTypeMapping(1, 30, 'description', org.incomeProvider.incomeFileType, 'Digital Cover');
                    });

                    describe('Payment/Statement Info', function () {
                        newOrg.makeOrgPayee();
                        newOrg.expectPayeeAccountNameToBeIfPresent(org.name);
                        /*this.makeOrgStatementRecipient();
                        this.setStatementRecipientData('Excel', 'Email with Attachment');*/
                    });

                    newOrg.expectFormToBeValid();
                    newOrg.saveOrganisation();
                });

                xdescribe('Use previously saved Org', function () {
                    it('Navigate to Org', function(){
                        browser.get('http://tango.tango-qa-aws.dspdev.wmg.com/#/org/50692a03-db5c-46ab-885b-a6867cba04cf/general');
                        pages.base.waitForAjax();
                    });
                });

                describe('Validate saved data', function(){
                    using(steps.organisation, function(){
                        this.expectValue('General', 'Name').toEqual(org.name);
                        this.expectValue('General', 'Territories of Operation').toContain(org.territoryOfOperation);
                        this.expectValueExact('General', 'Type:').toEqual('Publisher');
                        this.expectInternalIpiNumberToBeUnique();
                        this.expectValue('General', 'Publisher Type').toEqual('WCM');

                        _.each(org.contact.addressLines, function(line, i) {
                            steps.organisation.expectValue('Contact Information', 'Address ' + (i+1)).toEqual(line);
                        });

                        this.expectValue('Contact Information', 'City').toEqual(org.contact.city);
                        this.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state);
                        this.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode);
                        this.expectValue('Contact Information', 'Country').toEqual(org.contact.country);
                        this.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber);
                        this.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber);
                        this.expectValue('Contact Information', 'Email').toEqual(org.contact.email);

                        this.expectValue('Income Provider', 'Primary Territory of Operation').toEqual(org.territoryOfOperation);
                        this.expectValue('Income Provider', 'Default Currency').toEqual(org.incomeProvider.currency);
                        this.expectValue('Income Provider', 'Income File Type').toEqual(org.incomeProvider.incomeFileType);
                        this.incomeProvider.expectNumberOfMappingsToBe(2);
                        this.incomeProvider.viewIncomeTypeMappingDetails();
                        this.incomeProvider.expectMappingToBe(0, ['20', 'description', '', 'Mechanical']);
                        this.incomeProvider.expectMappingToBe(1, ['30', 'description', org.incomeProvider.incomeFileType, 'Digital Cover']);

                        this.expectValue('Payment/Statement Info', 'Payee').toEqual('Yes');
                        this.expectValue('Payment/Statement Info', 'Statement Recipient').toEqual('No');
                        this.expectValue('Payment/Statement Info', 'Preferred Language').toEqual('English');
                    });
                });
            });

            describe('View/edit Publisher', function () {
                var viewEditOrgName = 'Test Publisher - view/edit',
                    date = new Date(),
                    dateStr = date.toISOString().split(':').join('_');

                viewEditOrgName += '_' + dateStr;

                steps.mainHeader.createNewRecord('Organisation');

                describe('General - required fields', function() {
                    newOrg.populateName(viewEditOrgName);
                    //newOrg.selectOrgType(org.organisationType);
                    newOrg.selectPublisherType(org.publisherType);
                });

                newOrg.expectFormToBeValid();
                newOrg.saveOrganisation();

                describe('Contact Information', function () {
                    orgPage.editSectionPart('Contact Information', 0);
                    newOrg.fillContactAddressLines(org.contact.addressLines);
                    newOrg.fillContactCity(org.contact.city);
                    newOrg.fillContactState(org.contact.state);
                    newOrg.fillContactZipCode(org.contact.zipCode);
                    newOrg.setContactCountry(org.contact.country);

                    orgPage.editSectionPart('Contact Information', 0);
                    newOrg.fillContactPhoneNumber(org.contact.phoneNumber);
                    newOrg.fillContactFaxNumber(org.contact.faxNumber);
                    newOrg.fillContactEmail(org.contact.email);
                    orgPage.saveSectionPart('Contact Information', 1);

                    using(steps.organisation, function () {
                        this.expectValue('Contact Information', 'City').toEqual(org.contact.city);
                        this.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state);
                        this.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode);
                        this.expectValue('Contact Information', 'Country').toEqual(org.contact.country);
                        this.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber);
                        this.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber);
                        this.expectValue('Contact Information', 'Email').toEqual(org.contact.email);
                    });
                });

                describe('Income Provider', function () {
                    orgPage.editSectionPart('Income Provider', 0);
                    newOrg.makeOrgIncomeProvider();
                    newOrg.expectTerritoryErrorMessageToBeVisible();
                    orgPage.cancelSectionPart('Income Provider', 0);

                    orgPage.editSectionPart('General', 0);
                    newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                    orgPage.saveSectionPart('General', 0);

                    orgPage.editSectionPart('Income Provider', 0);
                    newOrg.makeOrgIncomeProvider();
                    newOrg.expectTerritoryErrorMessageToNotBePresent();

                    newOrg.setDefaultIncomeProviderCurrency(org.incomeProvider.currency);
                    newOrg.setIncomeFileType(org.incomeProvider.incomeFileType);

                    newOrg.addIncomeTypeMapping(0, 20, 'description', undefined, 'Mechanical');
                    newOrg.addIncomeTypeMapping(1, 30, 'description', org.incomeProvider.incomeFileType, 'Digital Cover');
                    orgPage.saveSectionPart('Income Provider', 0);
                });

                describe('Registration', function () {
                    orgPage.editSectionPart('Registration', 0);
                    orgPage.editSectionPart('Registration', 0);

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
                    newOrg.addRecipient('FOX');
                    orgPage.saveSectionPart('Registration', 0);
                });

                describe('Sub-Publisher Relationships', function () {
                    newOrg.clickAddSubpublisherButton();
                    newOrg.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                    newOrg.fillSubpublisherSocietyAgreementNumber(202202);
                    newOrg.selectSubpublisherSociety('OSA');

                    orgPage.cancelSectionPart('Sub Publisher Relationships', 0);
                });

                describe('Payment/Statement Info', function () {
                    orgPage.editSectionPart('Payment/Statement Info', 0);
                    newOrg.makeOrgPayee();
                    newOrg.expectPayeeAccountNameToBeIfPresent(org.name);
                    /*this.makeOrgStatementRecipient();
                    this.setStatementRecipientData('Excel', 'Email with Attachment');*/
                    orgPage.saveSectionPart('Payment/Statement Info', 0);
                });

                describe('Validate saved data', function(){
                    orgPage.expectValue('General', 'Name').toEqual(viewEditOrgName);
                    orgPage.expectValue('General', 'Territories of Operation').toContain(org.territoryOfOperation);
                    orgPage.expectValueExact('General', 'Type:').toEqual('Publisher');
                    orgPage.expectValue('General', 'Publisher Type').toEqual('WCM');

                    _.each(org.contact.addressLines, function(line, i) {
                        steps.organisation.expectValue('Contact Information', 'Address ' + (i+1)).toEqual(line);
                    });

                    orgPage.expectValue('Contact Information', 'City').toEqual(org.contact.city);
                    orgPage.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state);
                    orgPage.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode);
                    orgPage.expectValue('Contact Information', 'Country').toEqual(org.contact.country);
                    orgPage.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber);
                    orgPage.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber);
                    orgPage.expectValue('Contact Information', 'Email').toEqual(org.contact.email);

                    orgPage.expectValue('Income Provider', 'Primary Territory of Operation').toEqual(org.territoryOfOperation);
                    orgPage.expectValue('Income Provider', 'Default Currency').toEqual(org.incomeProvider.currency);
                    orgPage.expectValue('Income Provider', 'Income File Type').toEqual(org.incomeProvider.incomeFileType);
                    orgPage.incomeProvider.expectNumberOfMappingsToBe(2);
                    orgPage.incomeProvider.viewIncomeTypeMappingDetails();
                    orgPage.incomeProvider.expectMappingToBe(0, ['20', 'description', '', 'Mechanical']);
                    orgPage.incomeProvider.expectMappingToBe(1, ['30', 'description', org.incomeProvider.incomeFileType, 'Digital Cover']);

                    orgPage.expectValue('Payment/Statement Info', 'Payee').toEqual('Yes');
                    orgPage.expectValue('Payment/Statement Info', 'Statement Recipient').toEqual('No');
                    orgPage.expectValue('Payment/Statement Info', 'Preferred Language').toEqual('English');

                    describe('Search for created Org', function () {
                        describe('by name', function () {
                            steps.mainHeader.search.selectEntityType('Organisation');
                            steps.mainHeader.search.enterTerms(viewEditOrgName);
                            orgPage.expectOrgResultsToContain(viewEditOrgName);
                        });

                        describe('by SUISA/IPI', function () {
                            orgPage.expectInternalIpiNumberToBeUnique();
                        });
                    });
                });

            });
        }
    }
];

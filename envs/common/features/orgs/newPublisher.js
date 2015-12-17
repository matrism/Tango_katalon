var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.commonFeatureTags = [];

exports.feature = [
    {
        name: 'Create Organisation form - Publisher',
        tags: ['newPublisher'],
        steps: function () {
            var org = {
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

            describe('Create new publisher', function(){
                var newOrg = steps.newOrganisation;

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
                });

                describe('Payment/Statement Info', function () {
                    newOrg.makeOrgPayee();
                    newOrg.expectPayeeAccountNameToBeIfPresent(org.name);
                    /*this.makeOrgStatementRecipient();
                    this.setStatementRecipientData('Excel', 'Email with Attachment');*/
                });

                newOrg.expectFormToBeValid();
                //newOrg.saveOrganisation();
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
                    this.incomeProvider.expectNumberOfMappingsToBe(1);
                    this.incomeProvider.viewIncomeTypeMappingDetails();
                    this.incomeProvider.expectMappingToBe(0, ['20', 'description', '', 'Mechanical']);

                    this.expectValue('Payment/Statement Info', 'Payee').toEqual('Yes');
                    this.expectValue('Payment/Statement Info', 'Statement Recipient').toEqual('No');
                    this.expectValue('Payment/Statement Info', 'Preferred Language').toEqual('English');
                });
            });
        }
    }
];

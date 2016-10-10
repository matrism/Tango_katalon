var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    randomCode = random.string.threeDigitCodeGenerator(),
    randomId = random.id.makeMemoizedGenerator(),
    data = requireFromEnvFolder('features/orgs/data/organisationRegression.js');

//exports.id = 'e088e141-fd44-4245-8476-f66dc8e07057';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'organisationRegression'
];

exports.feature = [{
    name: 'Create Organisation',
    tags: [],

    steps: function () {
        var newOrg = steps.newOrganisation,
            orgPage = steps.organisation,
            rs = null,
            rc = null,
            ipiNumber = null;

        //browser.ignoreSynchronization=true;

        //steps.modal.clickOKOnPopupModal();

        [data.publisher, data.society, data.licensee].forEach(function (org) {

            rs = randomString(0);
            rc = randomCode(0);

            describe('Create ' + org.organisationType + ' & validate data', function () {
                describe('Create new ' + org.organisationType, function () {

                    steps.mainHeader.createNewRecord('Organisation');

                    newOrg.verifyActiveOrgTypeButton('Publisher');

                    describe('General', function () {
                        newOrg.populateName(org.name + rs);
                        //newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                        newOrg.selectOrgType(org.organisationType);

                        if (org.organisationType === 'Publisher') {
                            //newOrg.enterAffiliatedSocietySearchTerms(org.affiliatedSociety);
                            //newOrg.selectAffiliatedSocietySearchResultByIndex(0);
                            newOrg.selectPublisherType(org.publisherType);
                        }

                        if (org.organisationType === 'Society') {
                            newOrg.fillSocietyAbbreviation(rs.substr(0, 5));
                            newOrg.fillSocietyCode(rc);
                        }

                        if (org.organisationType === 'Copyright Hub') {
                            newOrg.fillSocietyAbbreviation(rs.substr(0, 5));
                            newOrg.fillSocietyCode(rc);
                            //newOrg.enterSocietiesOfInterestSearchTerms('ASCAP');
                            //newOrg.selectSocietiesOfInterestSearchResultByIndex(0);
                        }

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

                    // describe('Registration', function () {
                    //     newOrg.makeOrgRegistrationRecipient();
                    //     newOrg.removeDeliveryMethod(0);
                    //     newOrg.expectFtpAndSftpToHaveDifferentLabels();
                    //
                    //     newOrg.addDeliveryMethod(org.deliveryMethod);
                    //     newOrg.fillRequiredFieldsForDeliveryMethod(org.deliveryMethod);
                    //
                    //     newOrg.selectAcknowledgementProcess('Single');
                    //     newOrg.selectAcknowledgementProcessDeliveryMethod('Email');
                    //
                    //     //make sure we can add a second delivery method
                    //     newOrg.addDeliveryMethod(org.deliveryMethod);
                    //     newOrg.fillRequiredFieldsForDeliveryMethod(org.deliveryMethod);
                    //
                    //     // commented out to bypass tango bug
                    //     // if (org.organisationType === 'Publisher') {
                    //     //     newOrg.makeOrgHaveRegistrationRecipients();
                    //     //     newOrg.addRecipient();
                    //     //     newOrg.typeRecipientName('FOX');
                    //     //     newOrg.expectRecipientTerritoryNotOverlapMessageToBeVisible();
                    //     // }
                    //
                    // });

                    // commented out to bypass tango bug
                    // if (org.organisationType === 'Publisher') {
                    //
                    //     describe('Sub-Publisher Relationships', function () {
                    //         newOrg.clickSubpublisherRelationshipButton('Yes');
                    //         newOrg.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                    //         newOrg.fillSubpublisherSocietyAgreementNumber(202202);
                    //         newOrg.selectSubpublisherSociety('OSA');
                    //         newOrg.removeLastSubpublisher();
                    //         steps.base.waitForModal();
                    //         steps.base.expectModalPopUpToBeDisplayed();
                    //         steps.base.clickModalPrimaryButton();
                    //     });
                    //
                    // }

                    // describe('Income Provider', function() {
                    //     newOrg.makeOrgIncomeProvider();
                    //     newOrg.expectTerritoryErrorMessageToBeVisible();
                    //     newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                    //     newOrg.expectTerritoryErrorMessageToNotBeVisible();
                    //
                    //     newOrg.setDefaultIncomeProviderCurrency(org.incomeProvider.currency);
                    //     newOrg.setIncomeFileType(org.incomeProvider.incomeFileType);
                    //
                    //     newOrg.addIncomeTypeMapping(0, 20, 'description', undefined, 'Mechanical');
                    //     newOrg.addIncomeTypeMapping(1, 30, 'description', org.incomeProvider.incomeFileType, 'Digital Cover');
                    // });

                    // if (org.organisationType === 'Publisher') {
                    //     describe('Registration Recipient - Fix teritories not overlap message', function () {
                    //         newOrg.selectTerritoryOfOperation('United States');
                    //         newOrg.expectRecipientTerritoryNotOverlapMessageToNotBeVisible();
                    //     });
                    // }

                    describe('Payment/Statement Info', function () {
                        newOrg.makeOrgPayee();
                        newOrg.expectPayeeAccountNameToBeIfPresent(org.name);
                        /*this.makeOrgStatementRecipient();
                         this.setStatementRecipientData('Excel', 'Email with Attachment');*/
                    });

                    newOrg.expectFormToBeValid();
                    newOrg.saveOrganisation();
                    newOrg.validateSaveRedirection();

                    if (org.organisationType === 'Publisher') {
                        orgPage.findInternalIpiNumber();
                    }

                });

                describe('Navigate to previously saved ' + org.organisationType, function () {

                    if (org.organisationType === 'Publisher') {

                        describe('Search by IPI', function () {
                            steps.base.goToHomePage();
                            steps.searchSection.selectEntityType('Organisations');
                            orgPage.enterOrgSearchTermsIpiNumber();
                            pages.base.waitForAjax();
                            orgPage.clickOrgSearchMatch(0);
                            orgPage.validateIpiNumber();
                        });
                    }

                    if (org.organisationType === 'Society' || org.organisationType === 'Copyright Hub') {
                        describe('Search by CISAC Society Abbreviation', function () {
                            steps.base.goToHomePage();
                            steps.searchSection.selectEntityType('Organisations');
                            orgPage.enterOrgSearchTerms(rs.substr(0, 5));
                            pages.base.waitForAjax();
                            orgPage.clickOrgSearchMatch(0);
                            orgPage.expectValue('General', 'CISAC Abbreviation').toEqual(rs.substr(0, 5));
                        });

                        describe('Search by CISAC Society Code', function () {
                            steps.base.goToHomePage();
                            steps.searchSection.selectEntityType('Organisations');
                            orgPage.enterOrgSearchTerms(rc);
                            pages.base.waitForAjax();
                            orgPage.clickOrgSearchMatchByName(rs.substr(0, 5));
                            orgPage.expectValue('General', 'CISAC Code').toEqual(rc);
                        });
                    }

                    describe('Search by Organisation Name', function () {
                        steps.base.goToHomePage();
                        steps.searchSection.selectEntityType('Organisations');
                        orgPage.enterOrgSearchTerms(org.name + rs);
                        pages.base.waitForAjax();
                        orgPage.clickOrgSearchMatch(0);
                        orgPage.expectValue('General', 'Name').toEqual(org.name + rs);
                    });

                });

                describe('Validate saved data', function () {
                    using(steps.organisation, function () {
                        this.expectValue('General', 'Name').toEqual(org.name + rs);
                        this.expectValue('General', 'Territories of Operation').toContain(org.territoryOfOperation);
                        this.expectValueExact('General', 'Type:').toEqual(org.organisationType);

                        if (org.organisationType === 'Publisher') {
                            this.expectInternalIpiNumberToBeUnique();
                            this.expectValue('General', 'Publisher Type').toEqual('WCM');
                        }

                        _.each(org.contact.addressLines, function (line, i) {
                            steps.organisation.expectValue('Contact Information', 'Address ' + (i + 1)).toEqual(line);
                        });

                        this.expectValue('Contact Information', 'City').toEqual(org.contact.city);
                        this.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state);
                        this.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode);
                        this.expectValue('Contact Information', 'Country').toEqual(org.contact.country);
                        this.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber);
                        this.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber);
                        this.expectValue('Contact Information', 'Email').toEqual(org.contact.email);

                        // this.expectValue('Income Provider', 'Primary Territory of Operation').toEqual(org.territoryOfOperation);
                        // this.expectValue('Income Provider', 'Default Currency').toEqual(org.incomeProvider.currency);
                        // this.expectValue('Income Provider', 'Income File Type').toEqual(org.incomeProvider.incomeFileType);
                        // this.incomeProvider.expectNumberOfMappingsToBe(2);
                        // this.incomeProvider.viewIncomeTypeMappingDetails();
                        // this.incomeProvider.expectMappingToBe(0, ['20', 'description', '', 'Mechanical']);
                        // this.incomeProvider.expectMappingToBe(1, ['30', 'description', org.incomeProvider.incomeFileType, 'Digital Cover']);

                        this.expectValue('Payment/Statement Info', 'Payee').toEqual('Yes');
                        this.expectValue('Payment/Statement Info', 'Statement Recipient').toEqual('No');
                        this.expectValue('Payment/Statement Info', 'Preferred Language').toEqual('English');
                    });
                });

                describe('Editing previously saved ' + org.organisationType, function () {

                    var viewEditName = ' - view/edit test',
                        date = new Date(),
                        dateStr = moment().format('YYYY-MM-DD HH:mm:ss');

                    viewEditName += ':' + dateStr;
                    rs = randomString(1);

                    describe('Edit General - required fields', function () {
                        orgPage.editSectionPart('General', 0);
                        newOrg.populateName(org.name + rs + viewEditName, true);
                        //newOrg.selectOrgType(org.organisationType);
                        if (org.organisationType === 'Publisher') {
                            newOrg.selectPublisherType(org.publisherType);
                        }
                        orgPage.cancelSectionPart('General', 0);
                        steps.base.dirtyCheckContinueEditing();
                    });

                    describe('Edit Contact Information', function () {
                        orgPage.editSectionPart('Contact Information', 0);
                        newOrg.fillContactAddressLines(org.contact.addressLines);
                        newOrg.fillContactCity(org.contact.city + viewEditName);
                        newOrg.fillContactState(org.contact.state + viewEditName);
                        newOrg.fillContactZipCode(org.contact.zipCode + viewEditName);
                        newOrg.setContactCountry('Albania');
                        orgPage.cancelSectionPart('Contact Information', 0);
                        steps.base.dirtyCheckContinueEditing();

                        orgPage.contactInformation.editSection();
                        newOrg.fillContactPhoneNumber(org.contact.phoneNumber + viewEditName);
                        newOrg.fillContactFaxNumber(org.contact.faxNumber + viewEditName);
                        newOrg.fillContactEmail('edited' + org.contact.email);
                        orgPage.contactInformation.cancelSection();
                        steps.base.dirtyCheckContinueEditing();
                    });

                    // describe('Income Provider', function () {
                    //     orgPage.editSectionPart('Income Provider', 0);
                    //     newOrg.makeOrgIncomeProvider();
                    //     newOrg.expectTerritoryErrorMessageToBeVisible();
                    //     orgPage.cancelSectionPart('Income Provider', 0);
                    //
                    //     orgPage.editSectionPart('General', 0);
                    //     newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                    //     orgPage.saveSectionPart('General', 0);
                    //
                    //     orgPage.editSectionPart('Income Provider', 0);
                    //     newOrg.makeOrgIncomeProvider();
                    //     newOrg.expectTerritoryErrorMessageToNotBePresent();
                    //
                    //     newOrg.setDefaultIncomeProviderCurrency(org.incomeProvider.currency);
                    //     newOrg.setIncomeFileType(org.incomeProvider.incomeFileType);
                    //
                    //     newOrg.addIncomeTypeMapping(0, 20, 'description', undefined, 'Mechanical');
                    //     newOrg.addIncomeTypeMapping(1, 30, 'description', org.incomeProvider.incomeFileType, 'Digital Cover');
                    //     orgPage.saveSectionPart('Income Provider', 0);
                    // });

                    // describe('Edit Registration', function () {
                    //     orgPage.editSectionPart('Registration', 0);
                    //
                    //     newOrg.makeOrgRegistrationRecipient();
                    //     newOrg.expectFtpAndSftpToHaveDifferentLabels();
                    //
                    //     newOrg.addDeliveryMethod(org.deliveryMethod);
                    //     newOrg.fillRequiredFieldsForDeliveryMethod(org.deliveryMethod);
                    //
                    //     newOrg.selectAcknowledgementProcess('Single');
                    //     newOrg.selectAcknowledgementProcessDeliveryMethod('Email');
                    //
                    //     //make sure we can add a second delivery method
                    //     newOrg.addDeliveryMethod(org.deliveryMethod);
                    //     newOrg.fillRequiredFieldsForDeliveryMethod(org.deliveryMethod);
                    //     orgPage.cancelSectionPart('Registration', 0);
                    //     steps.base.dirtyCheckContinueEditing();
                    //
                    //     if (org.organisationType === 'Publisher') {
                    //         orgPage.editSectionPart('Registration', 1);
                    //         newOrg.makeOrgHaveRegistrationRecipients();
                    //         newOrg.addRecipient('FOX');
                    //         orgPage.cancelSectionPart('Registration', 1);
                    //         steps.base.dirtyCheckContinueEditing();
                    //     }
                    // });

                    // if (org.organisationType === 'Publisher') {
                    //
                    //     describe('Edit Sub-Publisher Relationships', function () {
                    //
                    //         describe('Add New Sub-Publisher Relationships', function () {
                    //             newOrg.clickAddSubpublisherButton();
                    //             newOrg.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC (MALAYSIA) SDN. BHD.', 'Malaysia');
                    //             newOrg.fillSubpublisherSocietyAgreementNumber(202202);
                    //             newOrg.selectSubpublisherSociety('MACP');
                    //
                    //             orgPage.cancelSectionPart('Sub Publisher Relationships', 0);
                    //             steps.base.dirtyCheckConfirmCancellation();
                    //         });
                    //
                    //         describe('Edit Existing Sub-Publisher Relationships', function () {
                    //             orgPage.editSectionPart('Sub Publisher Relationships', 0);
                    //             newOrg.fillRequiredFieldsForLastSubpublisher('WARNER CHAPPELL MUSIC FINLAND OY', 'Finland');
                    //             newOrg.fillSubpublisherSocietyAgreementNumber(202202);
                    //             newOrg.selectSubpublisherSociety('OSA');
                    //             orgPage.cancelSectionPart('Sub Publisher Relationships', 0);
                    //             steps.base.dirtyCheckContinueEditing();
                    //         });
                    //
                    //     });
                    //
                    // }

                    // describe('Edit Payment/Statement Info', function () {
                    //     orgPage.editSectionPart('Payment/Statement Info', 0);
                    //     newOrg.makeOrgNonPayee();
                    // });

                    describe('Save and validate edited General', function () {
                        orgPage.saveSectionPart('General', 0);

                        using(steps.organisation, function () {
                            this.expectValue('General', 'Name').toEqual(org.name + rs + viewEditName);
                        });
                    });

                    describe('Save and validate edited Contact Information', function () {
                        orgPage.saveSectionPart('Contact Information', 0);
                        orgPage.contactInformation.saveSection();

                        using(steps.organisation, function () {
                            this.expectValue('Contact Information', 'City').toEqual(org.contact.city + viewEditName);
                            this.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state + viewEditName);
                            this.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode + viewEditName);
                            this.expectValue('Contact Information', 'Country').toEqual(org.contact.country + viewEditName);
                            this.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber + viewEditName);
                            this.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber + viewEditName);
                            this.expectValue('Contact Information', 'Email').toEqual('edited' + org.contact.email);
                        });
                    });

                    // describe('Save and validate edited Income Provider', function () {
                    //     orgPage.editSectionPart('Income Provider', 0);
                    //     newOrg.makeOrgIncomeProvider();
                    //     newOrg.expectTerritoryErrorMessageToBeVisible();
                    //     orgPage.cancelSectionPart('Income Provider', 0);
                    //
                    //     orgPage.editSectionPart('General', 0);
                    //     newOrg.selectTerritoryOfOperation(org.territoryOfOperation);
                    //     orgPage.saveSectionPart('General', 0);
                    //
                    //     orgPage.editSectionPart('Income Provider', 0);
                    //     newOrg.makeOrgIncomeProvider();
                    //     newOrg.expectTerritoryErrorMessageToNotBePresent();
                    //
                    //     newOrg.setDefaultIncomeProviderCurrency(org.incomeProvider.currency);
                    //     newOrg.setIncomeFileType(org.incomeProvider.incomeFileType);
                    //
                    //     newOrg.addIncomeTypeMapping(0, 20, 'description', undefined, 'Mechanical');
                    //     newOrg.addIncomeTypeMapping(1, 30, 'description', org.incomeProvider.incomeFileType, 'Digital Cover');
                    //     orgPage.saveSectionPart('Income Provider', 0);
                    // });

                    // describe('Save and validate edited Registration', function () {
                    //     orgPage.saveSectionPart('Registration', 0);
                    //     if (org.organisationType === 'Publisher') {
                    //         orgPage.saveSectionPart('Registration', 1);
                    //     }
                    // });

                    // if (org.organisationType === 'Publisher') {
                    //     describe('Save and validate edited Sub-Publisher Relationships', function () {
                    //         orgPage.saveSectionPart('Sub Publisher Relationships', 0);
                    //     });
                    // }

                    // describe('Save and validate edited Payment/Statement Info', function () {
                    //     orgPage.saveSectionPart('Payment/Statement Info', 0);
                    // });

                    describe('Search again and validate edited data', function () {

                        describe('Search by edited organisation name', function () {
                            steps.base.goToHomePage();
                            steps.searchSection.selectEntityType('Organisations');
                            orgPage.enterOrgSearchTerms(org.name + rs + viewEditName);
                            pages.base.waitForAjax();
                            orgPage.clickOrgSearchMatch(0);
                        });


                        describe('Validate edited data', function () {

                            orgPage.expectValue('General', 'Name').toEqual(org.name + rs + viewEditName);
                            orgPage.expectValue('General', 'Territories of Operation').toContain(org.territoryOfOperation);
                            orgPage.expectValueExact('General', 'Type:').toEqual(org.organisationType);
                            if (org.organisationType === 'Publisher') {
                                orgPage.expectValue('General', 'Publisher Type').toEqual('WCM');
                            }

                            _.each(org.contact.addressLines, function (line, i) {
                                steps.organisation.expectValue('Contact Information', 'Address ' + (i + 1)).toEqual(line);
                            });

                            orgPage.expectValue('Contact Information', 'City').toEqual(org.contact.city);
                            orgPage.expectValue('Contact Information', 'State/Province/Region').toEqual(org.contact.state);
                            orgPage.expectValue('Contact Information', 'ZIP/Postal Code').toEqual(org.contact.zipCode);
                            orgPage.expectValue('Contact Information', 'Country').toEqual(org.contact.country);
                            orgPage.expectValue('Contact Information', 'Telephone').toEqual(org.contact.phoneNumber);
                            orgPage.expectValue('Contact Information', 'Fax').toEqual(org.contact.faxNumber);
                            orgPage.expectValue('Contact Information', 'Email').toEqual(org.contact.email);

                            // orgPage.expectValue('Income Provider', 'Primary Territory of Operation').toEqual(org.territoryOfOperation);
                            // orgPage.expectValue('Income Provider', 'Default Currency').toEqual(org.incomeProvider.currency);
                            // orgPage.expectValue('Income Provider', 'Income File Type').toEqual(org.incomeProvider.incomeFileType);
                            // orgPage.incomeProvider.expectNumberOfMappingsToBe(2);
                            // orgPage.incomeProvider.viewIncomeTypeMappingDetails();
                            // orgPage.incomeProvider.expectMappingToBe(0, ['20', 'description', '', 'Mechanical']);
                            // orgPage.incomeProvider.expectMappingToBe(1, ['30', 'description', org.incomeProvider.incomeFileType, 'Digital Cover']);

                            orgPage.expectValue('Payment/Statement Info', 'Payee').toEqual('Yes');
                            orgPage.expectValue('Payment/Statement Info', 'Statement Recipient').toEqual('No');
                            orgPage.expectValue('Payment/Statement Info', 'Preferred Language').toEqual('English');

                            describe('Search for Edited Org', function () {
                                describe('by name', function () {
                                    steps.mainHeader.search.selectEntityType('Organisation');
                                    steps.mainHeader.search.enterTerms(org.name + rs + viewEditName);
                                    orgPage.expectOrgResultsToContain(viewEditName);
                                });

                                describe('by SUISA/IPI', function () {
                                    orgPage.expectInternalIpiNumberToBeUnique();
                                });
                            });
                        });
                    });


                });


            });
        })

    }
}];
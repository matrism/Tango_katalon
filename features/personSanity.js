'use strict';

var random = require('../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    fnutils = require('../helpers/fnutils'),
    using = fnutils.using;

require(steps_path + 'login');
require(steps_path + 'person');
require(steps_path + 'newPerson');

exports.commonFeatureTags = ['personSanity'],

exports.beforeFeature = [
    [steps.login.itLogin]
];

var stagingPerson = (systemConfig.tags.indexOf('stagingPerson') !== -1);

exports.feature = [
    {
        name: 'Create a person',
        tags: [],
        steps: function() { 
            steps.person.useBlankPersonSlot('person', 0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();
                this.enterFirstName(randomString(0) + ' FIRST');
                this.enterLastName(randomString(0) + ' LAST');
                this.addAlternativeName();
                this.enterAlternativeFirstName(0, 'TEST ' + randomString(0.1));
                this.enterAlternativeLastName(0, 'PERSON ' + randomString(0.1));
                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.addAddress();
                this.enterAddressOne(0, 'Abbey Road');
                this.enterAddressTwo(0, 'Abbey Road 2');
                this.enterAddressThree(0, 'Abbey Road 3');
                this.enterCity(0, 'London');
                this.enterRegion(0, 'Utah');
                this.enterPostalCode(0, '13323');
                this.selectCountry(0, 'United Kingdom');
                this.addAddress();
                this.enterAddressOne(1, 'Alternative Abbey Road');
                this.enterAddressTwo(1, 'Alternative Abbey Road 2');
                this.enterAddressThree(1, 'Alternative Abbey Road 3');
                this.enterCity(1, 'London');
                this.enterRegion(1, 'Utah');
                this.enterPostalCode(1, '13323');
                this.selectCountry(1, 'United Kingdom');
                if(!stagingPerson) {
                    this.addPhone();
                }
                this.enterPhone(0, '12345678');
                if(!stagingPerson) {
                    this.addPhone();
                }
                this.enterPhone(1, '98765432');
                this.setPrimaryPhone(1);
                if(!stagingPerson) {
                    this.addEmail();
                }
                this.enterEmail(0, randomString(0.2).toLowerCase() + '@email.com');
                if(!stagingPerson) {
                    this.addEmail();
                }
                this.enterEmail(1, randomString(0.3).toLowerCase() + '@email.com');
                this.setPrimaryEmail(1);
                this.clickOnPayee('Yes');
                this.save();
                this.validateSaveRedirection();
            });

            steps.person.findId();
            steps.person.findInternalIpiNumber();
        }
    },
    {
        name: 'Search for previously created person',
        tags: [],
        steps: function() {
            steps.base.useEntityDataSlot('person', 0);

            ['Ipi Number', 'First Name', 'Last Name', 'Name'].forEach(function(field) {
                steps.base.goToHomePage();
                steps.searchSection.selectEntityType('Persons');
                steps.person.searchForPersonUsingPreviouslyCreated(field); 
                steps.person.clickPersonSearchMatch(0);
                steps.person.validateIpiNumber();
            });
        },
    },
    {
        name: 'Validate created person',
        tags: [],
        steps: function() {
            steps.base.useEntityDataSlot('person', 0);

            using(steps.person, function() {
                this.goToPersonPage();
                this.validateFirstName();
                this.validateLastName();
                this.validateAlternativeFirstName(0);
                this.validateAlternativeLastName(0);
                this.validateAffiliatedSociety();
                this.validateAddressOne(0);
                this.validateAddressTwo(0);
                this.validateAddressThree(0);
                this.validateCity(0);
                this.validateRegion(0);
                this.validatePostalCode(0);
                this.validateCountry(0);
                this.validatePrimaryAddress(0);
                this.validateAddressOne(1);
                this.validateAddressTwo(1);
                this.validateAddressThree(1);
                this.validateCity(1);
                this.validateRegion(1);
                this.validatePostalCode(1);
                this.validateCountry(1);
                this.validatePhone(0);
                this.validatePhone(1);
                this.validatePrimaryPhone(1);
                this.validateEmail(0);
                this.validateEmail(1);
                this.validatePrimaryEmail(1);
                this.validatePayee()
            });
        },
    },
    {
        name: 'Edit created person',
        tags: [],
        steps: function() {
            steps.base.useEntityDataSlot('person', 0);

            using(steps.person, function() {
                this.goToPersonPage();

                this.clickOnEditPrimaryName();
                this.enterFirstName('TEST ' + randomString(1));
                this.enterLastName('PERSON ' + randomString(1));
                this.clickOnSavePrimaryName();
                this.validateFirstName();

                this.clickOnEditSocietyAffiliation();
                this.enterAffiliatedSocietySearchTerms('ZAIKS');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.clickOnSaveSocietyAffiliation();
                this.validateAffiliatedSociety();

                this.clickOnEditAddress(0);
                this.enterAddressOne(0, 'Abbey Road Updated');
                this.clickOnSaveAddress(0);
                this.validateAddressOne(0);
                this.validatePrimaryAddress(0);

                this.clickOnEditAddress(1);
                this.enterAddressOne(1, 'Alternative Abbey Road Updated');
                this.setPrimaryAddress(1);
                this.clickOnSaveAddress(1);
                this.validateAddressOne(1);
                this.validatePrimaryAddress(1);

                this.clickOnEditPhone(0);
                this.enterPhone(0, '23456789');
                this.setPrimaryPhone(0);
                this.clickOnSavePhone(0);
                this.validatePhone(0);
                this.validatePrimaryPhone(0);

                this.clickOnEditEmail(0);
                this.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
                this.setPrimaryEmail(0);
                this.clickOnSaveEmail(0);
                this.validateEmail(0);
                this.validatePrimaryEmail(0);

                this.clickOnEditPaymentInformation();
                this.clickOnPayee('No');
                this.clickOnSavePaymentInformation();
                this.validatePayee();
            });
        },
    }
];


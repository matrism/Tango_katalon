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

exports.feature = [
    {
        name: 'Create a person',
        tags: [],
        steps: function() { 
            steps.person.useBlankPersonSlot('person', 0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();
                this.enterFirstName('TEST ' + randomString(0));
                this.enterLastName('PERSON ' + randomString(0));
                this.addAlternativeName();
                this.enterAlternativeFirstName(0, 'TEST ' + randomString(0.1));
                this.enterAlternativeLastName(0, 'PERSON ' + randomString(0.1));
                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.addAddress();
                this.enterAddressOne(0, 'Abbey Road');
                this.addAddress();
                this.enterAddressOne(1, 'Alternative Abbey Road');
                if(systemConfig.tags.indexOf('stagingPerson') === -1) {
                    this.addPhone();
                }
                this.enterPhone(0, '12345678');
                if(systemConfig.tags.indexOf('stagingPerson') === -1) {
                    this.addPhone();
                }
                this.enterPhone(1, '98765432');
                if(systemConfig.tags.indexOf('stagingPerson') === -1) {
                    this.addEmail();
                }
                this.enterEmail(0, randomString(0.2).toLowerCase() + '@email.com');
                if(systemConfig.tags.indexOf('stagingPerson') === -1) {
                    this.addEmail();
                }
                this.enterEmail(1, randomString(0.3).toLowerCase() + '@email.com');
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
            steps.searchSection.selectEntityType('Persons');
            steps.person.searchForPersonUsingPreviouslyCreatedIpiNumber(); 
            steps.base.waitForAjax();
            steps.person.clickPersonSearchMatch(0);
            steps.base.waitForAjax();
            steps.person.validateIpiNumber();
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
                this.validateAddressOne(1);
                this.validatePhone(0);
                this.validatePhone(1);
                this.validateEmail(0);
                this.validateEmail(1);
                this.validatePayee()
            });
        },
    },
    {
        name: 'Edit created person',
        tags: [],
        steps: function() {
            steps.base.useEntityDataSlot('person', 0);
            steps.person.goToPersonPage();

            steps.person.clickOnEditPrimaryName();
            steps.person.enterFirstName('TEST ' + randomString(1));
            steps.person.enterLastName('PERSON ' + randomString(1));
            steps.person.clickOnSavePrimaryName();
            steps.base.waitForAjax();
            steps.person.validateFirstName();

            if(systemConfig.tags.indexOf('stagingPerson') === -1) {
                steps.person.clickOnEditAlternativeName();
                steps.person.enterAlternativeFirstName(0, 'TEST ' + randomString(1.1));
                steps.person.enterAlternativeLastName(0, 'PERSON ' + randomString(1.1));
                steps.person.clickOnSaveAlternativeName();
                steps.base.waitForAjax();
                steps.person.validateAlternativeFirstName();
            }

            steps.person.clickOnEditSocietyAffiliation();
            steps.person.enterAffiliatedSocietySearchTerms('ZAIKS');
            steps.person.selectAffiliatedSocietySearchResultByIndex(0);
            steps.person.clickOnSaveSocietyAffiliation();
            steps.base.waitForAjax();
            steps.person.validateAffiliatedSociety();

            steps.person.clickOnEditAddress(0);
            steps.person.enterAddressOne(0, 'Abbey Road Updated');
            steps.person.clickOnSaveAddress(0);
            steps.base.waitForAjax();
            steps.person.validateAddressOne(0);

            steps.person.clickOnEditAddress(1);
            steps.person.enterAddressOne(1, 'Alternative Abbey Road Updated');
            steps.person.clickOnSaveAddress(1);
            steps.base.waitForAjax();
            steps.person.validateAddressOne(1);

            steps.person.clickOnEditPhone(0);
            steps.person.enterPhone(0, '23456789');
            steps.person.clickOnSavePhone(0);
            steps.base.waitForAjax();
            steps.person.validatePhone(0);

            steps.person.clickOnEditEmail(0);
            steps.person.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
            steps.person.clickOnSaveEmail(0);
            steps.base.waitForAjax();
            steps.person.validateEmail(0);

            steps.person.clickOnEditPaymentInformation();
            steps.person.clickOnPayee('No');
            steps.person.clickOnSavePaymentInformation();
            steps.base.waitForAjax();
            steps.person.validatePayee();
        },
    }
];


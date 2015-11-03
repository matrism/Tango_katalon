'use strict';

var random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.commonFeatureTags = ['person', 'sanity', 'personSanity'],

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
                if(!stagingPerson) {
                    this.addPhone();
                }
                this.enterPhone(0, '12345678');
                if(!stagingPerson) {
                    this.addPhone();
                }
                this.enterPhone(1, '98765432');
                if(!stagingPerson) {
                    this.addEmail();
                }
                this.enterEmail(0, randomString(0.2).toLowerCase() + '@email.com');
                if(!stagingPerson) {
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

            using(steps.person, function() {
                this.goToPersonPage();

                this.clickOnEditPrimaryName();
                this.enterFirstName('TEST ' + randomString(1));
                this.enterLastName('PERSON ' + randomString(1));
                this.clickOnSavePrimaryName();
                steps.base.waitForAjax();
                this.validateFirstName();

                if(!stagingPerson) {
                    this.clickOnEditAlternativeName();
                    this.enterAlternativeFirstName(0, 'TEST ' + randomString(1.1));
                    this.enterAlternativeLastName(0, 'PERSON ' + randomString(1.1));
                    this.clickOnSaveAlternativeName();
                    steps.base.waitForAjax();
                    this.validateAlternativeFirstName();
                }

                this.clickOnEditSocietyAffiliation();
                this.enterAffiliatedSocietySearchTerms('ZAIKS');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.clickOnSaveSocietyAffiliation();
                steps.base.waitForAjax();
                this.validateAffiliatedSociety();

                this.clickOnEditAddress(0);
                this.enterAddressOne(0, 'Abbey Road Updated');
                this.clickOnSaveAddress(0);
                steps.base.waitForAjax();
                this.validateAddressOne(0);

                this.clickOnEditAddress(1);
                this.enterAddressOne(1, 'Alternative Abbey Road Updated');
                this.clickOnSaveAddress(1);
                steps.base.waitForAjax();
                this.validateAddressOne(1);

                this.clickOnEditPhone(0);
                this.enterPhone(0, '23456789');
                this.clickOnSavePhone(0);
                steps.base.waitForAjax();
                this.validatePhone(0);

                this.clickOnEditEmail(0);
                this.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
                this.clickOnSaveEmail(0);
                steps.base.waitForAjax();
                this.validateEmail(0);

                this.clickOnEditPaymentInformation();
                this.clickOnPayee('No');
                this.clickOnSavePaymentInformation();
                steps.base.waitForAjax();
                this.validatePayee();
            });
        },
    }
];
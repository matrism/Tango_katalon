'use strict';

var random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.id = '810c445d-6aea-4b7d-8840-1ad9f741587a';
exports.featureName = 'Person Sanity';

exports.commonFeatureTags = ['person', 'sanity', 'personSanity', 'dataUtilities'],

    exports.beforeFeature = () => {
        steps.login.itLogin();
    };

var stagingPerson = (systemConfig.tags.indexOf('stagingPerson') !== -1);

exports.feature = [{
    name: 'Create a person',
    tags: [],
    //steps: function() {
    steps: criticalScenario(() => {
        steps.person.useBlankPersonSlot('person', 0);

        using(steps.newPerson, function() {
            this.goToNewPersonPage();
            this.enterFirstName(randomString(0) + ' FIRST');
            this.enterLastName(randomString(0) + ' LAST');
            this.addAlternativeName();
            this.enterAlternativeFirstName(0, 'TEST AUTO' + randomString(0.1));
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
            this.enterCity(1, 'Alternative London');
            this.enterRegion(1, 'Alternative Utah');
            this.enterPostalCode(1, '13324');
            this.selectCountry(1, 'United States');
            this.addPhone();
            this.enterPhone(0, '12345678');
            this.addPhone();
            this.enterPhone(1, '98765432');
            this.setPrimaryPhone(1);
            this.addEmail();
            this.enterEmail(0, randomString(0.2).toLowerCase() + '@email.com');
            this.addEmail();
            this.enterEmail(1, randomString(0.3).toLowerCase() + '@email.com');
            this.setPrimaryEmail(1);
            this.clickOnPayee('No');
            this.save();
            this.validateSaveRedirection();
        });

        steps.person.findId();
        steps.person.findInternalIpiNumber();
    })
}, {
    name: 'Search for previously created person',
    tags: [],
    //steps: function() {
        steps: criticalScenario(() => {
        steps.base.useEntityDataSlot('person', 0);

        ['Ipi Number', 'First Name', 'Last Name', 'Name'].forEach(function(field) {
            steps.base.goToHomePage();
            steps.searchSection.selectEntityType('Persons');
            steps.person.searchForPersonUsingPreviouslyCreated(field);
            steps.person.clickPersonSearchMatch(0);
            steps.person.validateIpiNumber();
        });
    }),
}, {
    name: 'Validate created person',
    tags: [],
    //steps: function() {
    steps: criticalScenario(() => {     steps.base.useEntityDataSlot('person', 0);

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
    }),
}, {
    name: 'Edit created person',
    tags: [],
    //steps: function() {
    steps: criticalScenario(() => {     steps.base.useEntityDataSlot('person', 0);

        steps.base.useEntityDataSlot('person', 0);

        using(steps.person, function() {
            this.goToPersonPage();

            this.editPrimaryName();
            this.enterFirstName('FIRST ' + randomString(1));
            this.enterLastName('LAST ' + randomString(1));
            this.savePrimaryName();
            this.validateFirstName();

            this.editAlternativeName(0);
            this.enterAlternativeFirstName(0, 'ALT FIRST ' + randomString(1));
            this.enterAlternativeLastName(0, 'ALT LAST ' + randomString(1));
            this.saveAlternativeName(0);

            this.editSocietyAffiliation();
            this.enterAffiliatedSocietySearchTerms('MACP');
            this.selectAffiliatedSocietySearchResultByIndex(0);
            this.saveSocietyAffiliation();
            this.validateAffiliatedSociety();

            this.editAddress(0);
            this.enterAddressOne(0, 'Abbey Road Updated');
            this.saveAddress(0);
            this.validateAddressOne(0);
            this.validatePrimaryAddress(0);

            this.editAddress(1);
            this.enterAddressOne(1, 'Alternative Abbey Road Updated');
            this.setPrimaryAddress(1);
            this.saveAddress(1);
            this.validateAddressOne(1);
            this.validatePrimaryAddress(1);

            this.editPhone(0);
            this.enterPhone(0, '23456789');
            this.setPrimaryPhone(0);
            this.savePhone(0);
            this.validatePhone(0);
            this.validatePrimaryPhone(0);

            this.editEmail(0);
            this.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
            this.setPrimaryEmail(0);
            this.saveEmail(0);
            this.validateEmail(0);
            this.validatePrimaryEmail(0);

            this.editPayment();
            this.clickOnPayee('No');
            this.savePayment();
            this.validatePayee();

            this.editOthers();
            this.enterPlaceOfBirth('Alor Setar');
            this.enterCitizenship('Malaysian');
            this.saveOthers();
        });
    }),
}];
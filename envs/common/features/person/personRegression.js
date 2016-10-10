'use strict';

var random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    randomSuisaIpi = random.string.makeSuisaIpiMemoizedGenerator(),
    fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    moment = require('moment');

//exports.id = '810c445d-6aea-4b7d-8840-1ad9f741587a';
exports.featureName = 'Person Regression';

exports.commonFeatureTags = ['person', 'regression', 'personRegression'],

    exports.beforeFeature = () => {
        steps.login.itLogin();
    };

//var stagingPerson = (systemConfig.tags.indexOf('stagingPerson') !== -1);

exports.feature = [
    {
        name: 'Create a non-creator person',
        tags: [],
        steps: function () {
            steps.person.useBlankPersonSlot('person', 0);

            using(steps.newPerson, function () {
                this.goToNewPersonPage();

                this.enterFirstName(randomString(0) + ' FIRST');
                this.enterLastName(randomString(0) + ' LAST');
                this.addAlternativeName();
                this.enterAlternativeFirstName(0, 'TEST ' + randomString(0.1));
                this.enterAlternativeLastName(0, 'PERSON ' + randomString(0.1));
                this.makeCreator(false);
                this.confirmMakingNonCreator(true);
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
                browser.sleep(3000);
                this.clickOnPayee('No');
                this.save();
                this.validateSaveRedirection();
            });

            steps.person.findId();
        }
    }, {
        name: 'Search for previously created non-creator person',
        tags: [],
        steps: function () {
            steps.base.useEntityDataSlot('person', 0);

            ['First Name', 'Last Name', 'Name', 'Alternative First Name', 'Alternative Last Name', 'Alternative Name'].forEach(function (field) {
                describe('Search using ' + field, function () {
                    steps.base.goToHomePage();
                    steps.searchSection.selectEntityType('Persons');
                    steps.person.searchForPersonUsingPreviouslyCreated(field);
                    steps.person.clickPersonSearchMatch(0);
                    steps.person.validateName();
                    steps.person.validateFirstName();
                    steps.person.validateLastName();
                    steps.person.validateAlternativeName(0);
                    steps.person.validateAlternativeFirstName(0);
                    steps.person.validateAlternativeLastName(0);
                });
            });
        },
    }, {
        name: 'Validate created non-creator person',
        tags: [],
        steps: function () {
            steps.base.useEntityDataSlot('person', 0);

            using(steps.person, function () {
                this.goToPersonPage();
                this.validateFirstName();
                this.validateLastName();
                this.validateAlternativeFirstName(0);
                this.validateAlternativeLastName(0);
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
    }, {
        name: 'Edit created non-creator person',
        tags: [],
        steps: function () {

            steps.base.useEntityDataSlot('person', 0);

            using(steps.person, function () {
                this.goToPersonPage();

                this.editPrimaryName();
                this.enterFirstName('FIRST ' + randomString(1));
                this.enterLastName('LAST ' + randomString(1));
                this.savePrimaryName();
                this.validateFirstName();

                this.editAlternativeName(0);
                this.deleteAlternativeName(0);

                steps.newPerson.addAlternativeName();
                this.enterAlternativeFirstName(0, 'ALT FIRST ' + randomString(1));
                this.enterAlternativeLastName(0, 'ALT LAST ' + randomString(1));
                this.saveAlternativeName(0);

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

                this.editAddress(0);
                this.deleteAddress(0);

                this.editPhone(0);
                this.enterPhone(0, '23456789');
                this.setPrimaryPhone(0);
                this.savePhone(0);
                this.validatePhone(0);
                this.validatePrimaryPhone(0);

                this.editPhone(1);
                this.deletePhone(1);

                this.editEmail(0);
                this.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
                this.setPrimaryEmail(0);
                this.saveEmail(0);
                this.validateEmail(0);
                this.validatePrimaryEmail(0);

                this.editEmail(1);
                this.deleteEmail(1);

                // this will need to be set to yes once payee account is implemented
                this.editPayment();
                this.clickOnPayee('No');
                this.savePayment();
                this.validatePayee();

                this.editOthers();
                this.enterPlaceOfBirth('Alor Setar');
                this.enterCitizenship('Malaysian');
                this.saveOthers();
            });
        },
    },
    {
        name: 'Create a person with suisa ipi number and minimum required fields',
        tags: [],
        steps: function () {
            steps.person.useBlankPersonSlot('person', 1);

            using(steps.newPerson, function () {
                this.goToNewPersonPage();
                this.enterLastName(randomString(7) + ' LAST');
                //this.enterSuisaIpiNumber(randomSuisaIpi(0));
                //this.enterAffiliatedSocietySearchTerms('ASCAP');

                // bypass bug
                this.makeCreator(false);
                this.confirmMakingNonCreator(true);

                this.addAlternativeName();
                this.enterAlternativeLastName(0, randomString(8) + ' LAST');
                this.enterAlternativeSuisaIpiNumber(0, randomSuisaIpi(1));
                this.save();
                this.validateSaveRedirection();
            });

            steps.person.findId();
            steps.person.findSuisaIpiNumber();
        }
    },
    {
        name: 'Search for previously using suisa ipi number and validate it is unique',
        tags: [],
        steps: function () {
            steps.base.useEntityDataSlot('person', 1);

            ['Suisa Ipi Number', 'Alternative Suisa Ipi Number'].forEach(function (field) {
                describe('Search using ' + field, function () {
                    steps.base.goToHomePage();
                    steps.searchSection.selectEntityType('Persons');
                    steps.person.searchForPersonUsingPreviouslyCreated(field);
                    steps.person.verifySearchResultIsUnique();
                    steps.person.clickPersonSearchMatch(0);
                    steps.person.validateLastName();
                    steps.person.validateSuisaIpiNumber();
                    steps.person.validateAlternativeLastName(0);
                    steps.person.validateAlternativeSuisaIpiNumber(0);
                });
            });
        }
    },
    {
        name: 'Create a creator person',
        tags: [],
        steps: function () {
            var today = moment();
            var yesterday = moment().subtract(1, 'days');
            ;
            steps.person.useBlankPersonSlot('person', 2);

            using(steps.newPerson, function () {
                this.goToNewPersonPage();
                this.enterFirstName(randomString(0) + ' FIRST');
                this.enterLastName(randomString(0) + ' LAST');
                this.enterDateOfBirth(today.year(), today.month(), today.date());
                this.enterDateOfDeath(yesterday.year(), yesterday.month(), yesterday.date());
                this.validateDateOfDeathIsSameOrAfterDateOfBirth(false);
                this.enterDateOfDeath(today.year(), today.month(), today.date());
                this.validateDateOfDeathIsSameOrAfterDateOfBirth(true);
                this.addAlternativeName();
                this.enterAlternativeFirstName(0, 'TEST ' + randomString(0.1));
                this.enterAlternativeLastName(0, 'PERSON ' + randomString(0.1));

                //bypass tango bug
                this.makeCreator(false);
                this.confirmMakingNonCreator(true);
                //this.enterAffiliatedSocietySearchTerms('ASCAP');
                //this.selectAffiliatedSocietySearchResultByIndex(0);

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
                this.makePersonStatementRecipient();
                this.setStatementRecipientData('EDI', 'Email with Attachment');
                this.setStatementRecipientData('EDI', 'Soft-Copy on Disk');
                this.setStatementRecipientData('Excel', 'Email with Attachment');
                this.setStatementRecipientData('Excel', 'Soft-Copy on Disk');
                this.enterPlaceOfBirth('Alor Setar');
                this.enterCitizenship('Malaysian');
                this.selectRandomMaritalStatus();
                this.enterMexicoRegistrationNumber(randomString());
                this.validateMexicoRegDateIsEnabled();
                this.enterMexicoRegDate(today.year(), today.month(), today.date());
                this.save();
                this.validateSaveRedirection();
            });

            steps.person.findId();
            steps.person.findInternalIpiNumber();
        }
    }, {
        name: 'Search for previously created person',
        tags: [],
        steps: function () {
            steps.base.useEntityDataSlot('person', 2);

            ['Ipi Number', 'First Name', 'Last Name', 'Name'].forEach(function (field) {
                describe('Search using ' + field, function () {
                    steps.base.goToHomePage();
                    steps.searchSection.selectEntityType('Persons');
                    steps.person.searchForPersonUsingPreviouslyCreated(field);
                    steps.person.clickPersonSearchMatch(0);
                    steps.person.validateIpiNumber();
                    steps.person.validateName();
                    steps.person.validateFirstName();
                    steps.person.validateLastName();
                    steps.person.validateAlternativeName();
                    steps.person.validateAlternativeFirstName();
                    steps.person.validateAlternativeLastName();
                });
            });
        },
    }, {
        name: 'Validate created person',
        tags: [],
        steps: function () {
            steps.base.useEntityDataSlot('person', 0);

            using(steps.person, function () {
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
    }, {
        name: 'Edit created person and change to non-creator',
        tags: [],
        steps: function () {

            steps.base.useEntityDataSlot('person', 2);

            using(steps.person, function () {
                this.goToPersonPage();

                this.editPrimaryName();
                this.enterFirstName('FIRST ' + randomString(1));
                this.enterLastName('LAST ' + randomString(1));
                this.cancelPrimaryName();
                steps.base.dirtyCheckContinueEditing();
                this.savePrimaryName();
                this.validateFirstName();

                this.editAlternativeName(0);
                this.enterAlternativeFirstName(0, 'ALT FIRST ' + randomString(1));
                this.enterAlternativeLastName(0, 'ALT LAST ' + randomString(1));
                this.cancelAlternativeName(0);
                steps.base.dirtyCheckContinueEditing();
                this.saveAlternativeName(0);

                this.editSocietyAffiliation();
                this.enterAffiliatedSocietySearchTerms('MACP');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.cancelSocietyAffiliation();
                steps.base.dirtyCheckContinueEditing();
                this.saveSocietyAffiliation();
                this.validateAffiliatedSociety();

                this.editSocietyAffiliation();
                steps.newPerson.makeCreator(false);
                steps.newPerson.confirmMakingNonCreator(true);
                this.saveSocietyAffiliation();

                this.editAddress(0);
                this.enterAddressOne(0, 'Abbey Road Updated');
                this.cancelAddress(0);
                steps.base.dirtyCheckContinueEditing();
                this.saveAddress(0);
                this.validateAddressOne(0);
                this.validatePrimaryAddress(0);

                this.editAddress(1);
                this.enterAddressOne(1, 'Alternative Abbey Road Updated');
                this.setPrimaryAddress(1);
                this.cancelAddress(1);
                steps.base.dirtyCheckContinueEditing();
                this.saveAddress(1);
                this.validateAddressOne(1);
                this.validatePrimaryAddress(1);

                this.editPhone(0);
                this.enterPhone(0, '23456789');
                this.setPrimaryPhone(0);
                this.cancelPhone(0);
                steps.base.dirtyCheckContinueEditing();
                this.savePhone(0);
                this.validatePhone(0);
                this.validatePrimaryPhone(0);

                this.editEmail(0);
                this.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
                this.setPrimaryEmail(0);
                this.cancelEmail(0);
                steps.base.dirtyCheckContinueEditing();
                this.saveEmail(0);
                this.validateEmail(0);
                this.validatePrimaryEmail(0);

                this.editPayment();
                this.setStatementRecipientData('PDF', 'Email with Attachment');
                this.setStatementRecipientData('Printed Format', 'Hard-Copy Mailed');
                this.cancelPayment();
                steps.base.dirtyCheckContinueEditing();
                this.savePayment();
                this.validatePayee();

                this.editOthers();
                this.enterPlaceOfBirth('Cluj');
                this.enterCitizenship('Romanian');
                this.cancelOthers();
                steps.base.dirtyCheckContinueEditing();
                this.saveOthers();
            });
        },
    }];
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

exports.feature = [
    // {
    //     name: 'Create a person',
    //     tags: [],
    //     steps: function() { 
    //         steps.person.useBlankPersonSlot('person', 0);

    //         using(steps.newPerson, function() {
    //             this.goToNewPersonPage();
    //             this.enterFirstName(randomString(0) + ' FIRST');
    //             this.enterLastName(randomString(0) + ' LAST');
    //             this.addAlternativeName();
    //             this.enterAlternativeFirstName(0, 'TEST ' + randomString(0.1));
    //             this.enterAlternativeLastName(0, 'PERSON ' + randomString(0.1));
    //             this.enterAffiliatedSocietySearchTerms('ASCAP');
    //             this.selectAffiliatedSocietySearchResultByIndex(0);
    //             this.addAddress();
    //             this.enterAddressOne(0, 'Abbey Road');
    //             this.enterAddressTwo(0, 'Abbey Road 2');
    //             this.enterAddressThree(0, 'Abbey Road 3');
    //             this.enterCity(0, 'London');
    //             this.enterRegion(0, 'Utah');
    //             this.enterPostalCode(0, '13323');
    //             this.selectCountry(0, 'United Kingdom');
    //             this.addAddress();
    //             this.enterAddressOne(1, 'Alternative Abbey Road');
    //             this.enterAddressTwo(1, 'Alternative Abbey Road 2');
    //             this.enterAddressThree(1, 'Alternative Abbey Road 3');
    //             this.enterCity(1, 'Alternative London');
    //             this.enterRegion(1, 'Alternative Utah');
    //             this.enterPostalCode(1, '13324');
    //             this.selectCountry(1, 'United States');
    //             this.addPhone();
    //             this.enterPhone(0, '12345678');
    //             this.addPhone();
    //             this.enterPhone(1, '98765432');
    //             this.setPrimaryPhone(1);
    //             this.addEmail();
    //             this.enterEmail(0, randomString(0.2).toLowerCase() + '@email.com');
    //             this.addEmail();
    //             this.enterEmail(1, randomString(0.3).toLowerCase() + '@email.com');
    //             this.setPrimaryEmail(1);
    //             this.clickOnPayee('No');
    //             //this.save();//to-do hazrul
    //             //this.validateSaveRedirection();
    //         });

    //         steps.person.findId();
    //         steps.person.findInternalIpiNumber();
    //     }
    // }
    //,
    // {
    //     name: 'Search for previously created person',
    //     tags: [],
    //     steps: function() {
    //         steps.base.useEntityDataSlot('person', 0);

    //         ['Ipi Number', 'First Name', 'Last Name', 'Name'].forEach(function(field) {
    //             steps.base.goToHomePage();
    //             steps.searchSection.selectEntityType('Persons');
    //             steps.person.searchForPersonUsingPreviouslyCreated(field); 
    //             steps.person.clickPersonSearchMatch(0);//to-do hazrul
    //             steps.person.validateIpiNumber();
    //         });
    //     },
    // },
    // {
    //     name: 'Validate created person',
    //     tags: [],
    //     steps: function() {
    //         steps.base.useEntityDataSlot('person', 0);

    //         using(steps.person, function() {
    //             this.goToPersonPage();///to-do hazrul
    //             this.validateFirstName();
    //             this.validateLastName();
    //             this.validateAlternativeFirstName(0);
    //             this.validateAlternativeLastName(0);
    //             this.validateAffiliatedSociety();
    //             this.validateAddressOne(0);
    //             this.validateAddressTwo(0);
    //             this.validateAddressThree(0);
    //             this.validateCity(0);
    //             this.validateRegion(0);
    //             this.validatePostalCode(0);
    //             this.validateCountry(0);
    //             this.validatePrimaryAddress(0);
    //             this.validateAddressOne(1);
    //             this.validateAddressTwo(1);
    //             this.validateAddressThree(1);
    //             this.validateCity(1);
    //             this.validateRegion(1);
    //             this.validatePostalCode(1);
    //             this.validateCountry(1);
    //             this.validatePhone(0);
    //             this.validatePhone(1);
    //             this.validatePrimaryPhone(1);
    //             this.validateEmail(0);
    //             this.validateEmail(1);
    //             this.validatePrimaryEmail(1);
    //             this.validatePayee()
    //         });
    //     },
    // },
    {
        name: 'Edit created person',
        tags: [],
        steps: function() {
            //steps.base.useEntityDataSlot('person', 0);

                // xdescribe('Use previously saved Person', function () {
                //     it('Navigate to Person', function(){
                //         browser.get('http://tango-crefactor.tango.qa.wmg.com/#/person/a65caf61-3224-4b76-8d6d-ecb97db4d8d2');
                //         pages.base.waitForAjax();
                //     });
                // });

            using(steps.person, function() {
                //this.goToPersonPage();//to-do hazrul

                //this.goToPerson('a65caf61-3224-4b76-8d6d-ecb97db4d8d2');
                // this.editPrimaryName();//to-do hazrul
                // this.enterFirstName('TEST ' + randomString(1));
                // this.enterLastName('PERSON ' + randomString(1));
                // this.savePrimaryName();//to-do hazrul
                // this.validateFirstName();

                // this.editSocietyAffiliation();//to-do hazrul
                // this.enterAffiliatedSocietySearchTerms('ZAIKS');
                // this.selectAffiliatedSocietySearchResultByIndex(0);//to-do hazrul
                // this.saveSocietyAffiliation();//to-do hazrul
                // this.validateAffiliatedSociety();//to-do hazrul

                // this.editAddress(0);//to-do hazrul
                // this.enterAddressOne(0, 'Abbey Road Updated');
                // this.saveAddress(0);//to-do hazrul
                // this.validateAddressOne(0);//to-do hazrul
                // this.validatePrimaryAddress(0);//to-do hazrul

                // this.editAddress(1);//to-do hazrul
                // this.enterAddressOne(1, 'Alternative Abbey Road Updated');//to-do hazrul
                // this.setPrimaryAddress(1);//to-do hazrul
                // this.saveAddress(1);//to-do hazrul
                // this.validateAddressOne(1);
                // this.validatePrimaryAddress(1);//to-do hazrul

                // this.editPhone(0);//to-do hazrul
                // this.enterPhone(0, '23456789');//to-do hazrul
                // this.setPrimaryPhone(0);//to-do hazrul
                // this.savePhone(0);//to-do hazrul
                // this.validatePhone(0);
                // this.validatePrimaryPhone(0);//to-do hazrul

                // this.editEmail(0);//to-do hazrul
                // this.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');//to-do hazrul
                // this.setPrimaryEmail(0);//to-do hazrul
                // this.saveEmail(0);//to-do hazrul
                // this.validateEmail(0);
                // this.validatePrimaryEmail(0);//to-do hazrul

                // this.editPayment();//to-do hazrul
                // this.clickOnPayee('No');//to-do hazrul
                // this.savePayment();//to-do hazrul
                // this.validatePayee();
            });
        },
    }
];

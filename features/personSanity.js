'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomString = random.string.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'person');
require(steps_path + 'newPerson');

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Create a person',
            tags: [],
            steps: function() { 
                steps.person.useBlankPersonSlot('person', 0);
                steps.newPerson.goToNewPersonPage();
                steps.newPerson.enterFirstName('TEST ' + randomString(0));
                steps.newPerson.enterLastName('PERSON ' + randomString(0));
                steps.newPerson.addAlternativeName();
                steps.newPerson.enterAlternativeFirstName(0, 'TEST ' + randomString(0.1));
                steps.newPerson.enterAlternativeLastName(0, 'PERSON ' + randomString(0.1));
                steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
                steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
                steps.newPerson.addAddress();
                steps.newPerson.enterAddressOne(0, 'Abbey Road');
                steps.newPerson.addAddress();
                steps.newPerson.enterAddressOne(1, 'Alternative Abbey Road');
                steps.newPerson.addPhone();
                steps.newPerson.enterPhone(0, '12345678');
                steps.newPerson.addPhone();
                steps.newPerson.enterPhone(1, '98765432');
                steps.newPerson.addEmail();
                steps.newPerson.enterEmail(0, randomString(0.2).toLowerCase() + '@email.com');
                steps.newPerson.addEmail();
                steps.newPerson.enterEmail(1, randomString(0.3).toLowerCase() + '@email.com');
                steps.newPerson.clickOnPayee('Yes');
                steps.newPerson.save();
                steps.newPerson.validateSaveRedirection();
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
                steps.person.goToPersonPage();
                steps.person.validateName();
                steps.person.validateAlternativeName();
                steps.person.validateAffiliatedSociety();
                steps.person.validateAddressOne(0);
                steps.person.validateAddressOne(1);
                steps.person.validatePhone(0);
                steps.person.validatePhone(1);
                steps.person.validateEmail(0);
                steps.person.validateEmail(1);
                steps.person.validatePayee()
            },
        },
        {
            name: 'Edit created person',
            tags: [],
            steps: function() {
                steps.base.useEntityDataSlot('person', 0);
                steps.person.goToPersonPage();

                steps.person.editName();
                steps.newPerson.enterFirstName('TEST ' + randomString(1));
                steps.newPerson.enterLastName('PERSON ' + randomString(1));
                steps.person.saveName();
                steps.base.waitForAjax();
                steps.person.validateFirstName();

                steps.person.editAlternativeName();
                steps.newPerson.enterAlternativeFirstName(0, 'TEST ' + randomString(1.1));
                steps.newPerson.enterAlternativeLastName(0, 'PERSON ' + randomString(1.1));
                steps.person.saveAlternativeName();
                steps.base.waitForAjax();
                steps.person.validateAlternativeFirstName();

                steps.person.editSocietyAffiliation();
                steps.newPerson.enterAffiliatedSocietySearchTerms('ZAIKS');
                steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
                steps.person.saveSocietyAffiliation();
                steps.base.waitForAjax();
                steps.person.validateAffiliatedSociety();

                steps.person.editAddress(0);
                steps.newPerson.enterAddressOne(0, 'Abbey Road Updated');
                steps.person.saveAddress(0);
                steps.base.waitForAjax();
                steps.person.validateAddressOne(0);

                steps.person.editAddress(1);
                steps.newPerson.enterAddressOne(1, 'Alternative Abbey Road Updated');
                steps.person.saveAddress(1);
                steps.base.waitForAjax();
                steps.person.validateAddressOne(1);

                steps.person.editPhone(0);
                steps.newPerson.enterPhone(0, '23456789');
                steps.person.savePhone(0);
                steps.base.waitForAjax();
                steps.person.validatePhone(0);

                steps.person.editEmail(0);
                steps.newPerson.enterEmail(0, randomString(1.2).toLowerCase() + '@email.com');
                steps.person.saveEmail(0);
                steps.base.waitForAjax();
                steps.person.validateEmail(0);

                steps.person.editPaymentInfo();
                steps.newPerson.clickOnPayee('No');
                steps.person.savePaymentInfo();
                steps.base.waitForAjax();
                steps.person.validatePayee();
            },
        }
    ];

module.exports = {
    commonFeatureTags: ['personSanity'],
    feature: feature,
    beforeFeature: beforeFeature
};

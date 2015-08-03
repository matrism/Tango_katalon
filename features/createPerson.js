'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'person');
require(steps_path + 'newPerson');
require(steps_path + 'royaltyRates');


var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Create a basic person (without persistence validations)',
            tags: [],
            steps: [
                [steps.person.useBlankPersonSlot, [0]],
                [steps.newPerson.goToNewPersonPage],
                [steps.newPerson.enterLastName, ['TEST PERSON ' + randomId(0)]],
                [steps.newPerson.enterAffiliatedSocietySearchTerms, ['ASCAP']],
                [steps.newPerson.selectAffiliatedSocietySearchResultByIndex, [0]],
                [steps.newPerson.save],
                [steps.newPerson.validateSaveRedirection],
                [steps.person.findId],
                [steps.person.findInternalIpiNumber]
            ]
        },
        {
            name: 'Create a basic person with SUISA IPI number (without persistence validations)',
            tags: [],
            steps: [
                [steps.person.useBlankPersonSlot, [0]],
                [steps.newPerson.goToNewPersonPage],
                [steps.newPerson.enterLastName, ['TEST PERSON ' + randomId(1)]],
                [steps.newPerson.enterAffiliatedSocietySearchTerms, ['ASCAP']],
                [steps.newPerson.selectAffiliatedSocietySearchResultByIndex, [0]],
                [steps.newPerson.enterSuisaIpiNumber, [randomId(1.1).slice(0, 10)]],
                [steps.newPerson.save],
                [steps.newPerson.validateSaveRedirection],
                [steps.person.findId]
            ]
        },
        {
            name: 'Create a basic person (without persistence validations)',
            tags: ["sanity"],
            steps: [
                [steps.person.useBlankPersonSlot, [0]],
                [steps.newPerson.goToNewPersonPage],
                [steps.newPerson.enterFirstName, ['First Name ' + randomId(0)]],
                [steps.newPerson.enterLastName, ['Last Name ' + randomId(0)]],
                [steps.newPerson.enterCreditsName, ['Credits Name ' + randomId(0)]],
                [steps.newPerson.enterSuisaIpiNumber, [randomId(0)]],
                [steps.newPerson.enterDateOfDeath,['1945', '05', '15']],

                [steps.newPerson.addAlternativeName],
                [steps.newPerson.enterAlternativeFirstName,[0,'Alternative First Name' + randomId(0)]],
                [steps.newPerson.enterAlternativeLastName,[0,'Alternative Last Name' + randomId(0)]],
                [steps.newPerson.enterAlternativeCreditsName,[0,'Alternative Credits Name'+randomId(0)]],
                [steps.newPerson.enterAlternativeSuisaIpiNumber,[0,randomId(0)]],
                [steps.newPerson.enterAffiliatedSocietySearchTerms,["test"]],
                [steps.newPerson.selectAffiliatedSocietySearchResultByIndex,[1]],



                [steps.newPerson.enterAddressOne,[randomId(0)]],
                [steps.newPerson.enterCity,[randomId(0)]],
                [steps.newPerson.enterRegion,[randomId(0)]],
                [steps.newPerson.enterPostalCode,[randomId(0)]],
                [steps.newPerson.enterPhone,[randomId(0)]],
                [steps.newPerson.enterEmail,[randomId(0)+'@mail.com']],
                [steps.newPerson.save],

                [steps.newPerson.validateSaveRedirection],
                [steps.royaltyRates.pauseTest]
                //[steps.person.findId],
                //[steps.person.findInternalIpiNumber]
            ]
        }
    ];

module.exports = {
    commonFeatureTags: ['create-person', 'broken'],
    feature: feature,
    beforeFeature: beforeFeature
};

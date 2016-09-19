'use strict';

var random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

exports.id = '375f9a39-8336-4a4a-a03b-c7430955ad32';
exports.featureName = 'Create Person Smoke';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['person', 'smoke', 'personSmoke'];

exports.feature = [{
    name: 'Create a basic person (without persistence validations)',
    tags: ['create'],
    steps: function() {
        executeLegacyStepsArray([
            [steps.person.useBlankPersonSlot, [0]],
            [steps.newPerson.goToNewPersonPage],
            [steps.newPerson.enterLastName, ['TEST PERSON ' + randomId(0)]],
            [steps.newPerson.enterAffiliatedSocietySearchTerms, ['ASCAP']],
            [steps.newPerson.selectAffiliatedSocietySearchResultByIndex, [0]],
            [steps.newPerson.save],
            [steps.newPerson.validateSaveRedirection],
            [steps.person.findId],
            [steps.person.findInternalIpiNumber]
        ]);
    }
}, {
    name: 'Create a basic person with SUISA IPI number (without persistence validations)',
    tags: ['create'],
    steps: function() {
        executeLegacyStepsArray([
            [steps.person.useBlankPersonSlot, [0]],
            [steps.newPerson.goToNewPersonPage],
            [steps.newPerson.enterLastName, ['TEST PERSON ' + randomId(1)]],
            [steps.newPerson.enterAffiliatedSocietySearchTerms, ['ASCAP']],
            [steps.newPerson.selectAffiliatedSocietySearchResultByIndex, [0]],
            [steps.newPerson.enterSuisaIpiNumber, [randomId(1.1).slice(0, 10)]],
            [steps.newPerson.save],
            [steps.newPerson.validateSaveRedirection],
            [steps.person.findId]
        ]);
    }
}];
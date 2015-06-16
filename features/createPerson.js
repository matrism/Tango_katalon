'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'person');
require(steps_path + 'newPerson');

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
                [steps.person.findInternalIpiNumber],
            ]
        },
    ];

module.exports = {
    commonFeatureTags: ['create-person'],
    feature: feature,
    beforeFeature: beforeFeature
};

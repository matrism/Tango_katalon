'use strict';

var steps_path = _tf_config._system_.path_to_steps,
    fnutils = require('../helpers/fnutils'),
    using = fnutils.using,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'person');
require(steps_path + 'newPerson');

var beforeFeature = [
        [steps.login.itLogin],
    ],
    feature = [
        {
            name: 'Create person',
            tags: [
                'new-album-smoke-test-create-person',
            ],
            steps: function() {
                steps.person.useBlankPersonSlot(0);

                using(steps.newPerson, function() {
                    this.goToNewPersonPage();

                    this.enterLastName('TEST PERSON ' + randomId('mainPerson'));

                    this.enterAffiliatedSocietySearchTerms('ASCAP');
                    this.selectAffiliatedSocietySearchResultByIndex(0);

                    this.save();
                });

                steps.person.findInternalIpiNumber();
            },
        },
    ];

module.exports = {
    commonFeatureTags: [
        'new-album-smoke-test',
        'albums',
        'smoke-test',
    ],
    feature: feature,
    beforeFeature: beforeFeature
};

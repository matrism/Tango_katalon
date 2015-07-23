'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(steps_path + 'login');
require(steps_path + 'new_work');

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
    ];

module.exports = {
    commonFeatureTags: ['search-for-wamps-works'],
    feature: feature,
    beforeFeature: beforeFeature
};

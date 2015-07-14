"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "new_work");

var beforeFeature = [
    [steps.login.itLogin]
];

var workData = {};



var feature = [
    {
        name: "Validate works scheduling",
        tags: [""],
        steps: [
            [steps.organisation.searchByName],
            [steps.work.validateWork, [workData]],
        ]
    }

];

module.exports = {
    commonFeatureTags: [""],
    feature: feature,
    beforeFeature: beforeFeature
};

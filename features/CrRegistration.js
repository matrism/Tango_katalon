"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "new_work");
require(steps_path+"searchSection");
require(steps_path+"organisation");
require(steps_path+"base");
require(pages_path+"base");

var beforeFeature = [
    [steps.login.itLogin]
];

var workData = {};



var feature = [
    {
        name: "Validate CR Registration  scheduling",
        tags: ["crRegistration"],
        steps: [
            [steps.searchSection.accessSavedOrganisationByName,["BMI"]],
            [steps.organisation.goToPreviewRegistrationRunTab],
             [steps.organisation.selectCustomRegistrationRun,["CR_2014-09-01"]],
         //  [steps.organisation.pause]
            [steps.organisation.executeRegistrationRun,["CR_2014-09-01"]]
            ////note critical errors and total works
            //[steps.organisation.goToRegistrationActivityTab],
            //[steps.organisation.verifyThatWorkIsDelivered],
            //[steps.searchSection.accessSavedOrganisationByName,[hash.thirdPartyOrg]],
            //[steps.organisation.goToPreviewRegistrationRunTab],
            //[steps.organisation.verifyThatWorkIsDelivered],
            //[steps.registrationFileActivity.goToPage],
            //[steps.registrationFileActivity.expandLastDeliveredWork],
            //[steps.registrationFileActivity.verifyDetails]
        ]
    }

];

module.exports = {
    commonFeatureTags: [""],
    feature: feature,
    beforeFeature: beforeFeature
};

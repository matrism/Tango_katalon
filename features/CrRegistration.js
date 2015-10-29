"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;

require(steps_path + "login");
require(steps_path + "new_work");
require(steps_path+"searchSection");
require(steps_path+"organisation");
require(steps_path+"base");
require(pages_path+"base");
require(steps_path+"registrationFileActivity");
require(pages_path+"registrationFileActivity");

var beforeFeature = [
    [steps.login.itLogin]
];

var workData = {};



var feature = [
    {
        name: "Validate CR Registration  scheduling",
        tags: ["crRegistration","sanity"],
        steps: [
            [steps.searchSection.accessSavedOrganisationByName,["BMI"]],
            [steps.organisation.goToGeneralTab],
            [steps.organisation.saveMultipleELemNodesTest],
            [steps.organisation.saveOrganisationDeliveryMethods],
            [steps.organisation.goToRegistrationActivityTab],
            [steps.organisation.saveRegActivityLastEvent],
            [steps.organisation.goToPreviewRegistrationRunTab],
            [steps.organisation.selectCustomRegistrationRun,["CR_2014-09-01"]],

            [steps.organisation.executeRegistrationRun,["CR_2014-09-01"]],
            //note critical errors and total works
            [steps.organisation.goToRegistrationActivityTab],
            [steps.organisation.verifyThatWorkIsDelivered],
            [steps.organisation.checkThatAllDeliviriesAreDelivered],

            [steps.searchSection.accessSavedOrganisationByNameInHash],
            [steps.organisation.goToRegistrationActivityTab],
            [steps.organisation.verifyThatWorkIsDelivered],
            [steps.organisation.checkThatAllDeliviriesAreDelivered],

            [steps.registrationFileActivity.goToPage],
            [steps.organisation.waitForRegActivityElement],
            [steps.registrationFileActivity.expandLastDeliveredWork],
            [steps.registrationFileActivity.verifyDetails]
        ]
    }

];

module.exports = {
    commonFeatureTags: [""],
    feature: feature,
    beforeFeature: beforeFeature
};

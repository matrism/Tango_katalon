"use strict";

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = [""];

exports.feature = [
    {
        name: "Validate CR Registration  scheduling",
        tags: ["crRegistration","sanity"],
        steps: function() {
            steps.searchSection.accessSavedOrganisationByName("BMI");
            steps.organisation.goToGeneralTab();
            steps.organisation.saveOrganisationDeliveryMethods();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.saveRegActivityLastEvent();
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.selectCustomRegistrationRun("CR_2014-09-01");

            steps.organisation.executeRegistrationRun("CR_2014-09-01");
            //note critical errors and total works
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.verifyThatWorkIsDelivered();
            steps.organisation.checkThatAllDeliviriesAreDelivered();

            steps.searchSection.accessSavedOrganisationByNameInHash();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.verifyThatWorkIsDelivered();
            steps.organisation.checkThatAllDeliviriesAreDelivered();

            steps.registrationFileActivity.goToPage();
            steps.organisation.waitForRegActivityElement();
            steps.registrationFileActivity.expandLastDeliveredWork();
            steps.registrationFileActivity.verifyDetails();
        }
    }

];

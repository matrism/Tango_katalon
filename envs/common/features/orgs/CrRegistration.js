'use strict';

exports.commonFeatureTags = [''];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Validate CR Registration scheduling',
        tags: ['crRegistration', 'sanity', 'copyrightRegistration'],
        steps: function() {
            steps.searchSection.accessSavedOrganisationByName('BMI');
            steps.organisation.goToGeneralTab();
            steps.organisation.saveOrganisationDeliveryMethods();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.saveRegActivityLastEvent();
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.selectCustomRegistrationRun('CR_2014-09-01');

            steps.organisation.executeRegistrationRun('CR_2014-09-01');
            steps.organisation.confirmRegistrationRun();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.verifyThatWorkIsDelivered();
            steps.organisation.checkThatAllDeliveriesAreDelivered();

            steps.searchSection.accessSavedOrganisationByNameInHash();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.verifyThatWorkIsDelivered();
            steps.organisation.checkThatAllDeliveriesAreDelivered();

            steps.registrationFileActivity.goToPage();
            steps.organisation.waitForRegActivityElement();
            steps.registrationFileActivity.findEventByRecipient('BMI');
            steps.registrationFileActivity.toggleBlind();
            steps.registrationFileActivity.validateStatus('Delivered');
            steps.registrationFileActivity.checkThatAllDeliveriesAreDelivered();
        }
    }
];

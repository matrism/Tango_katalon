'use strict';

var using = fnutils.using,
    env = (systemConfig.env.name == 'qa') ? 'common' : systemConfig.env.name,
    data = require('../../../' + env + '/features/orgs/data/CrRegistration.js');

exports.commonFeatureTags = [];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Validate CR Registration scheduling',
        tags: ['crRegistration', 'sanity', 'copyrightRegistration', 'org'],
        steps: function() {
            steps.searchSection.accessSavedOrganisationByName(data.cr.org);
            using(steps.organisation, function () {
                this.goToGeneralTab();
                this.saveOrganisationDeliveryMethods();
                this.goToRegistrationActivityTab();
                this.saveRegActivityLastEvent();
                this.goToPreviewRegistrationRunTab();
                this.selectCustomRegistrationRun(data.cr.view);

                this.executeRegistrationRun(data.cr.view, data.cr.date, data.cr.org);
                this.confirmRegistrationRun();
                this.listWorkIdNumberRegRun();
                this.goToRegistrationActivityTab();
                this.verifyThatWorkIsDelivered();
                this.checkThatAllDeliveriesAreDelivered();

                steps.searchSection.accessSavedOrganisationByNameInHash();
                this.goToRegistrationActivityTab();
                this.verifyThatWorkIsDelivered();
                this.checkThatAllDeliveriesAreDelivered();
            });

            using(steps.registrationFileActivity, function () {
                this.goToPage();
                steps.organisation.waitForRegActivityElement();
                this.findEventByRecipient(data.cr.org);
                this.toggleBlind();
                this.validateStatus('Delivered');
                this.validateDeliveries();

                this.findEventByRecipient('Lyricfind');
                this.toggleBlind();
                this.validateStatus('Delivered');
            });

            steps.work.goToWorkPageById(fromTestVariable('work id'));
            steps.work.goToRegistrationActivityTab();

            using(steps.workRegistrationActivity.activityGroup, function() {
                this.find({ firstWithRecipientName: data.cr.org });
                this.toggleBlind();
                using(this.events, function() {
                    this.find({ firstWithFileName: fromTestVariable('last event file name') });
                    this.toggleBlind();
                    this.validateStatus('Delivered');
                    this.validateInitiatedBy();
                    this.validateSocietyCode('021');
                    this.validateProcessedDate(data.cr.date);
                    this.validateDeliveries();
                });

                this.find({ firstWithRecipientName: 'Lyricfind' });
                this.toggleBlind();
                using(this.events, function() {
                    this.find({ firstWithFileName: fromTestVariable('last event file name') });
                    this.toggleBlind();
                    this.validateStatus('Delivered');
                    this.validateInitiatedBy();
                    this.validateProcessedDate(data.cr.date);
                });
            });
        }
    }
];

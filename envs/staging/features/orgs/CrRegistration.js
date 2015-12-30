'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    fromTestVariable = require('../../../../helpers/fromTestVariable');

exports.commonFeatureTags = [''];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

var data = {
    org: 'BMI',
    date: '2014-07-07',
    view: 'CR_2014-07-07'
};

exports.feature = [
    {
        name: 'Validate CR Registration scheduling',
        tags: ['crRegistration', 'sanity', 'copyrightRegistration'],
        steps: function() {
            steps.searchSection.accessSavedOrganisationByName(data.org);
            using(steps.organisation, function () {
                this.goToGeneralTab();
                this.saveOrganisationDeliveryMethods();
                this.goToRegistrationActivityTab();
                this.saveRegActivityLastEvent();
                this.goToPreviewRegistrationRunTab();
                this.selectCustomRegistrationRun(data.view);

                this.executeRegistrationRun(data.view, data.date, data.org);
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
                this.findEventByRecipient(data.org);
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
                this.find({ firstWithRecipientName: data.org });
                this.toggleBlind();
                using(this.events, function() {
                    this.find({ firstWithFileName: fromTestVariable('last event file name') });
                    this.toggleBlind();
                    this.validateStatus('Delivered');
                    this.validateInitiatedBy();
                    this.validateSocietyCode('021');
                    this.validateProcessedDate(data.date);
                    this.validateDeliveries();
                });

                this.find({ firstWithRecipientName: 'Lyricfind' });
                this.toggleBlind();
                using(this.events, function() {
                    this.find({ firstWithFileName: fromTestVariable('last event file name') });
                    this.toggleBlind();
                    this.validateStatus('Delivered');
                    this.validateInitiatedBy();
                    this.validateProcessedDate(data.date);
                });
            });
        }
    }
];

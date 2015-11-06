"use strict";

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using;

exports.commonFeatureTags = ['ftp', 'cr', 'copyright-registration'];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Load Ack File',
        tags: [],
        steps: function () {

            steps.searchSection.selectEntityType('Organisations');
            steps.searchSection.accessSavedOrganisationByName('BMI');
            steps.organisation.goToRegistrationActivityTab();

            using(steps.organisationRegistration, function() {
                this.loadAck();
                this.selectFtpMethod('2nd');
                this.unmaskPassword();
                this.getFtpOptions();
                steps.ftp.uploadAckFile();
                this.enterFileName();
                this.submitLoadAck();
                this.waitUntilEventStatusBecomes('File Loaded');
            });
        }
    },
    {
        name: 'Validate Work Registration Activity',
        tags: [],
        steps: function () {

            steps.work.goToWorkPageById('WW 001136936 00');
            steps.work.goToRegistrationActivityTab();

            using(steps.workRegistrationActivity.activityGroup, function() {
                this.find({ firstWithRecipientName: 'BMI' });
                this.toggleBlind();

                using(this.events, function() {
                    this.find({ firstWithAckFileName: 'from-hash' });
                    this.toggleBlind();
                });
            });
            steps.base.sleep(2000);
        }
    }

];

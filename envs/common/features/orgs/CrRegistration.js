'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    data = requireFromEnvFolder('features/orgs/data/CrRegistration.js');

exports.id = '283a2f02-cadd-44f1-8541-371c2762fbcc';
exports.featureName = 'Copyright Registration Sanity';

exports.commonFeatureTags = [
    'crRegistrationSanity',
    'crRegistration',
    'copyrightRegistration',
    'cr',
    'orgs',
    'sanity'
];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Validate CR Registration scheduling',
        tags: [],
        //steps: function() {
        steps: criticalScenario(() => {

            //create work and deliver it to scope
            steps.CreateWorkComp.CreateWork(1);
            //steps.work.goToWorkPageById('WW 015123044 00');
            if(systemConfig.env.name ==='staging_test') {
                steps.ScopeDeliveryComp.scopeDelivery(0,0,381809) } //379900
                else {
                steps.ScopeDeliveryComp.scopeDelivery(0,0,146968);
            }

            //-----------------------------------


            steps.searchSection.accessSavedOrganisationByName(data.cr.org);

            using(steps.organisation, function () {
                this.goToGeneralTab();

                this.registration.resetDeliveryInfo(data.cr);
                this.saveOrganisationDeliveryMethods();

                this.goToPreviewRegistrationRunTab();
                this.selectCustomRegistrationRun(data.cr.view);

                this.executeRegistrationRun(data.cr.view, data.cr.date, data.cr.org);
                this.confirmRegistrationRun();

                this.goToRegistrationActivityTab();
                this.verifyThatWorkIsDelivered();
                this.saveRegActivityLastEvent();
                this.checkThatAllDeliveriesAreDelivered();

                steps.searchSection.accessSavedOrganisationByNameInHash();
                this.goToRegistrationActivityTab();
                this.verifyThatWorkIsDelivered();
                this.checkThatAllDeliveriesAreDelivered();
            });

            using(steps.registrationFileActivity, function () {
                this.goToRegistrationFileActivityPage();
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
                    this.find({ newDeliveredReg: 'New' });
                    this.toggleBlind();
                    this.find({ firstWithFileName: fromTestVariable('last event file name') });
                    this.validateStatus('Delivered');
                    this.validateInitiatedBy();
                    this.validateSocietyCode('021');
                    this.validateProcessedDate(data.cr.date);
                    this.validateDeliveries();
                });

                this.find({ firstWithRecipientName: 'Lyricfind' });
                this.toggleBlind();
                using(this.events, function() {

                    this.toggleBlind();
                    this.find({ firstWithFileName: fromTestVariable('last event file name') });
                    this.validateStatus('Delivered');
                    this.validateInitiatedBy();
                    this.validateProcessedDate(data.cr.date);
                });
            });
        })
    }
];

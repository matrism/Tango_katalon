'use strict';

var using = fnutils.using,
    data = requireFromEnvFolder('features/orgs/data/CrRegistration.js');

exports.commonFeatureTags = [
    'crRegistrationSanity',
    'crRegistration',
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
        steps: function() {
            steps.searchSection.accessSavedOrganisationByName(data.cr.org);
            using(steps.organisation, function () {
                this.goToGeneralTab();

                using(this.registration, function() {
                    this.editSection();
                    this.selectIsRegistrationRecipient('No');
                    this.confirmRemoveAll();
                    this.selectIsRegistrationRecipient('Yes');
                    using(this.delivery, function() {
                        this.addMethod();
                        this.selectMethod(0, 'Email');
                        this.enterEmailPrimaryEmail(0, data.cr.email.primary);
                        this.addMethod();
                        this.selectMethod(1, 'FTP');
                        this.enterFtpAddress(0, data.cr.ftp.address);
                        this.enterFtpPort(0, data.cr.ftp.port);
                        this.enterFtpUsername(0, data.cr.ftp.username);
                        this.enterFtpPassword(0, data.cr.ftp.password);
                        this.selectFtpNotification(0, data.cr.ftp.notification);
                        this.enterFtpNotificationPrimaryEmail(0, data.cr.ftp.notificationPrimaryEmail);
                        this.enterFtpNotificationCcEmail(0, data.cr.ftp.notificationCcEmail);
                        this.addMethod();
                        this.selectMethod(2, '3rd Party');
                        this.enterThirdPartyRecipient(0, data.cr.thirdParty);
                        steps.base.sleep(200);
                        steps.base.waitForAjax();
                        this.selectFirstThirdPartyRecipient();
                    });
                    using(this.ack, function() {
                        this.selectAcknowledgementType('Multiple');
                        this.selectDeliveryMethod(0, 'SFTP');
                        this.enterAddress(0, data.cr.ack.sftp.address);
                        this.enterPort(0, data.cr.ack.sftp.port);
                        this.enterUsername(0, data.cr.ack.sftp.username);
                        this.enterPassword(0, data.cr.ack.sftp.password);
                        this.selectDeliveryMethod(1, 'FTP');
                        this.enterAddress(1, data.cr.ack.ftp.address);
                        this.enterPort(1, data.cr.ack.ftp.port);
                        this.enterUsername(1, data.cr.ack.ftp.username);
                        this.enterPassword(1, data.cr.ack.ftp.password);
                    });
                    this.saveSection();
                });

                this.saveOrganisationDeliveryMethods();
                this.goToPreviewRegistrationRunTab();
                this.selectCustomRegistrationRun(data.cr.view);

                this.executeRegistrationRun(data.cr.view, data.cr.date, data.cr.org);
                this.confirmRegistrationRun();
                this.listWorkIdNumberRegRun();
                this.goToRegistrationActivityTab();
                this.saveRegActivityLastEvent();
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

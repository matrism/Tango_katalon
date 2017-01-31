'use strict';

var using = fnutils.using;

exports.id = '1d88bbff-0515-40bc-8cac-5222ae31d444';

exports.commonFeatureTags = [
    'acknowledgementsSanity',
    'acknowledgements',
    'copyrightRegistration',
    'orgs',
    'cr',
    'sanity'
];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

var data = {
    org: 'BMI',
    sftp: {
        address: '10.194.1.212',
        directory: 'files/',
        port: '22',
        username: 'Tango_Test',
        password: 'St@rwar1$'
    },
    ftp: {
        address: '10.194.1.212',
        directory: 'files/',
        port: '21',
        username: 'Tango_Test',
        password: 'St@rwar1$'
    },
    ftpMethod: 'SFTP',
    event: {
        status: 'File Loaded',
        totalAccepted: '330',
        totalRejected: '4',
        acceptedValues: {
            ra: '0',
            as: '59',
            ac: '271'
        },
        rejectedValues: {
            rj: '0',
            rc: '4',
            co: '0'
        },
        creationDate: '2013-05-02'
    },
    workEvent: {
        workId: 'WW 001136936 00',
        status: 'Rejected (RC)',
        message: 'BMI records indicate that controlled ' +
            'publisher is administered by another BMI publisher.',
        recordType: 'NWR',
        messageLevel: 'Transaction',
        validationNumber: '270',
        societyCode: '021',
        processedDate: '2013-05-01'
    }
};

exports.feature = [
    {
        name: 'Load Ack File',
        tags: [],
        steps: function () {
            steps.searchSection.accessSavedOrganisationByName(data.org);

            steps.organisation.goToGeneralTab();
            using(steps.organisation.registration, function() {
                this.editSection();
                this.selectIsRegistrationRecipient('Yes');
                using(this.ack, function() {
                    this.selectAcknowledgementType('Multiple');
                    this.selectDeliveryMethod(0, 'SFTP');
                    steps.base.sleep(5000);
                    this.enterAddress(0, data.sftp.address);
                    this.enterDirectory(0, data.sftp.directory);
                    this.enterPort(0, data.sftp.port);
                    this.enterUsername(0, data.sftp.username);
                    this.enterPassword(0, data.sftp.password);
                    this.selectDeliveryMethod(1, 'FTP');
                    this.enterAddress(1, data.ftp.address);
                    this.enterDirectory(1, data.ftp.directory);
                    this.enterPort(1, data.ftp.port);
                    this.enterUsername(1, data.ftp.username);
                    this.enterPassword(1, data.ftp.password);
                });
                this.saveSection();
            });

            steps.organisation.goToRegistrationActivityTab();
            using(steps.organisationRegistration, function() {
                this.loadAck();
                this.selectFtpMethod(data.ftpMethod);
                this.unmaskPassword();
                this.getFtpOptions();
                steps.ftp.uploadAckFile();
                this.enterFileName(fromTestVariable('current ACK file name'));
                this.submitLoadAck();
                this.findEventByFileName(fromTestVariable('current ACK file name'));
                this.waitUntilEventStatusBecomes(data.event.status);
                this.validateTotalAccepted(data.event.totalAccepted);
                this.validateTotalRejected(data.event.totalRejected);
                this.validateAcceptedValues({
                    ra: data.event.acceptedValues.ra,
                    as: data.event.acceptedValues.as,
                    ac: data.event.acceptedValues.ac
                });
                this.validateRejectedValues({
                    rj: data.event.rejectedValues.rj,
                    rc: data.event.rejectedValues.rc,
                    co: data.event.rejectedValues.co
                });
                this.validateAckCreationDate(data.event.creationDate);
                this.validateInitiatedBy();
            });
        }
    },
    {
        name: 'Validate Work Registration Activity',
        tags: [],
        steps: function () {
            steps.work.goToWorkPageById(data.workEvent.workId);
            steps.work.goToRegistrationActivityTab();

            using(steps.workRegistrationActivity.activityGroup, function() {
                this.find({ firstWithRecipientName: data.org });
                this.toggleBlind();

                using(this.events, function() {
                    this.find({ firstWithFileName: fromTestVariable('current ACK file name') });
                    this.toggleBlind();
                    this.waitUntilAnyEventStatusBecomes(data.workEvent.status);
                    this.validateStatus(data.workEvent.status);
                    steps.base.sleep(5000);
                    this.validateAckCreationDate(data.event.creationDate);
                    steps.base.sleep(5000);
                    this.validateInitiatedBy();
                    this.validateMessage(data.workEvent.message);
                    this.validateSocietyCode(data.workEvent.societyCode);
                    this.validateProcessedDate(data.workEvent.processedDate);
                });
            });
        }
    },
    {
        name: 'Validate event on Registration File Activity page',
        tags: [],
        steps: function () {
            using(steps.registrationFileActivity, function() {
                this.goToRegistrationFileActivityPage();
                this.findEventByFileName(fromTestVariable('current ACK file name'));
                this.toggleBlind();
                this.validateStatus(data.event.status);
                this.validateTotalAccepted(data.event.totalAccepted);
                this.validateTotalRejected(data.event.totalRejected);
                this.validateAcceptedValues({
                    ra: data.event.acceptedValues.ra,
                    as: data.event.acceptedValues.as,
                    ac: data.event.acceptedValues.ac
                });
                this.validateRejectedValues({
                    rj: data.event.rejectedValues.rj,
                    rc: data.event.rejectedValues.rc,
                    co: data.event.rejectedValues.co
                });
                this.validateReceivedDate(data.event.creationDate);
                this.validateInitiatedBy();
            });
        }
    }
];


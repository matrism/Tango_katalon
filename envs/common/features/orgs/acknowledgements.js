'use strict';

var fnutils = require('../../../../helpers/fnutils'),
    using = fnutils.using,
    fromTestVariable = require('../../../../helpers/fromTestVariable');

exports.commonFeatureTags = ['sanity', 'acknowledgements', 'cr', 'copyrightRegistration'];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

var data = {
    org: 'BMI',
    ftpMethod: ' FTP',
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
        status: 'Rejected',
        message: 'BMI records indicate that controlled ' +
            'publisher is administered by another BMI publisher.',
        recordType: 'NWR',
        messageLevel: 'Transaction',
        validationNumber: '270'
    }
};

exports.feature = [
    {
        name: 'Load Ack File',
        tags: [],
        steps: function () {
            steps.searchSection.selectEntityType('Organisations');
            steps.searchSection.accessSavedOrganisationByName(data.org);
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
                    this.validateStatus(data.workEvent.status);
                    this.validateAckCreationDate(data.event.creationDate);
                    this.validateInitiatedBy();
                });
            });
        }
    },
    {
        name: 'Validate event on Registration File Activity page',
        tags: ['DBG'],
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

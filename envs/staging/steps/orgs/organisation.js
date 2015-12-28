'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.organisation = exports;

exports.goToGeneralTab = function () {
    it("Go to General Tab on Organization", function () {
        pages.organisation.clickGeneralTab();
    });
};

pageStep([
    ['General', [
        'Edit section',
        'Enter name',
        'Edit territories of operation',
        'Delete territory of operation',
        'Enter territory of operation search terms',
        'Select territory of operation search result by index',
        'Select organisation type',
        'Select publisher type',
        'Save section',
        'Expect section to be in view mode',
    ]],

    ['Registration', [
        'Edit section',

        'Select is registration recipient',
        'Select acknowledgement type',
        'Select delivery method',
        'Enter Address',
        'Enter Port',
        'Enter Username',
        'Enter Password',

        'Save section'
    ]],

    ['Income Provider', [
        'Edit section',
        'Select primary territory of operation',
        'Select default currency',
        'Delete income file type',
        'Enter income file type search terms',
        'Select income file type search result by index',

        ['Income Type Mapping', [
            'Delete row',
            'Enter inbound income type',
            'Enter inbound income type description',
            'Enter income file type search terms',
            'Select income file type search result by index',
            'Enter Tango income type search terms',
            'Select Tango income type search result by index',
        ]],

        'Save section',
        'Expect section to be in view mode',
    ]],

    ['Sub-Publishers', [
        'Expect name to be either',
    ]],

    'Validate CISAC code',
    'Go to Preview Registration Run tab',
    'Wait for Preview Registration Run header to be displayed',
    'Go to Registration Activity tab',
    'Wait for Registration Activity records table to be displayed',

    'Go to General tab',
    'Save organisation delivery methods',
    'Save reg activity last event',
    'Select custom registration run',
    'Execute registration run',
    'Verify that work is delivered',
    'Check that all deliviries are delivered',
    'Wait for reg activity element',

    'Download CR file',
    'View validation errors',
]);

exports.saveOrganisationDeliveryMethods = function() {
    it("Save Organisation Delivery Methods Information", function() {
        hash.emailDeliveries = [];
        hash.sftpDeliveries = [];
        hash.ftpDeliveries = [];
        hash.thirdPartyDeliveries = [];
        var emailDelivery = {};

        //Email
        pages.organisation.getEmailDeliveryMethods()
            .then(function (emailDeliveryMethods) {
                emailDeliveryMethods.forEach(function (deliveryMethod) {
                    var emailDelivery = {};
                    pages.base.scrollIntoView(deliveryMethod);
                    pages.organisation.getEmailDeliveryMethodEmail(deliveryMethod).then(function (result) {
                        emailDelivery.email = result;
                    });
                    pages.organisation.getEmailDeliveryMethodCC(deliveryMethod).then(function (result) {
                        emailDelivery.CC = result;
                    });
                    pages.organisation.getEmailDeliveryMethodFileFormat(deliveryMethod).then(function (result) {
                        emailDelivery.fileFormat = result;
                    });
                    pages.organisation.getEmailDeliveryMethodNotification(deliveryMethod).then(function (result) {
                        emailDelivery.deliveryNotification = result;
                    }).then(function () {
                        hash.emailDeliveries.push(emailDelivery);
                    });

                });
            });

        //SFTP
        pages.organisation.getSFTPDeliveryMethods()
            .then(function (sftpDeliveryMethods) {
                sftpDeliveryMethods.forEach(function (deliveryMethod) {
                    var sftpDelivery = {};
                    pages.base.scrollIntoView(deliveryMethod);

                    pages.organisation.getSFTPDeliveryMethodName(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryMethodName = result;
                    });
                    pages.organisation.getSFTPDelivetyMehodAddress(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryMethodAddress = result;
                    });
                    pages.organisation.getSFTPDeliveryMethodPort(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryMethodPort = result;
                    });

                    pages.organisation.clickUnmaskPasswordButton(deliveryMethod).then(function () {
                        pages.organisation.getSFTPPassword(deliveryMethod).then(function (result) {
                            sftpDelivery.password = result;
                        });
                    });

                    pages.organisation.getSFTPFileFormat(deliveryMethod).then(function (result) {
                        sftpDelivery.fileFormat = result;
                    });
                    pages.organisation.getSFTPFileFormatStatus(deliveryMethod).then(function (result) {
                        sftpDelivery.fileFormatStatus = result;
                    });
                    pages.organisation.getSFTPDeliveryNotificationStatus(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryNotificationStatus = result;
                    });
                    pages.organisation.getSFTPDeliveryNotificationStatusEmail(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryNotificationEmail = result;
                    });
                    pages.organisation.getSFTPDeliveryNotificationStatusCC(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryNotificationCC = result;
                    });
                    pages.organisation.getSFTPUsername(deliveryMethod).then(function (result) {
                        sftpDelivery.username = result;
                    }).then(function () {
                        hash.sftpDeliveries.push(sftpDelivery);
                    });
                });
            });

        //FTP
        pages.organisation.getFTPDeliveryMethods()
            .then(function (ftpDeliveryMethods) {
                ftpDeliveryMethods.forEach(function (deliveryMethod) {
                    var sftpDelivery = {};
                    pages.base.scrollIntoView(deliveryMethod);

                    pages.organisation.getSFTPDeliveryMethodName(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryMethodName = result;
                    });
                    pages.organisation.getSFTPDelivetyMehodAddress(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryMethodAddress = result;
                    });
                    pages.organisation.getSFTPDeliveryMethodPort(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryMethodPort = result;
                    });

                    pages.organisation.clickUnmaskPasswordButton(deliveryMethod).then(function () {
                        pages.organisation.getSFTPPassword(deliveryMethod).then(function (result) {
                            sftpDelivery.password = result;
                        });
                    });

                    pages.organisation.getSFTPFileFormat(deliveryMethod).then(function (result) {
                        sftpDelivery.fileFormat = result;
                    });
                    pages.organisation.getSFTPFileFormatStatus(deliveryMethod).then(function (result) {
                        sftpDelivery.fileFormatStatus = result;
                    });
                    pages.organisation.getSFTPDeliveryNotificationStatus(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryNotificationStatus = result;
                    });
                    pages.organisation.getSFTPDeliveryNotificationStatusEmail(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryNotificationEmail = result;
                    });
                    pages.organisation.getSFTPDeliveryNotificationStatusCC(deliveryMethod).then(function (result) {
                        sftpDelivery.deliveryNotificationCC = result;
                    });
                    pages.organisation.getSFTPUsername(deliveryMethod).then(function (result) {
                        sftpDelivery.username = result;
                    }).then(function () {
                        hash.sftpDeliveries.push(sftpDelivery);
                    });

                });
            });

        //THIRD PARTY
        pages.organisation.getThirdPartyDeliveryMethods()
            .then(function (thirdPartyDeliveryMethods) {
                thirdPartyDeliveryMethods.forEach(function (deliveryMethod) {
                    var thirdPartyDelivery = {};
                    pages.base.scrollIntoView(deliveryMethod);


                    pages.organisation.getThirdPartyName(deliveryMethod).then(function (result) {
                        thirdPartyDelivery.name = result;
                    }).then(function () {
                        hash.thirdPartyDeliveries.push(thirdPartyDelivery);
                    });
                });
            });
    });
};

exports.saveRegActivityLastEvent = function() {
    it('Save Last Event Displayed On Registration Activity Page', function() {
        hash.lastEvent = {};

        var lastEvent = pages.organisationRegistrationActivity.events.container(
            'latestStarted'
        );

        pages.organisation.getIconType(lastEvent).then(function(isPresent) {
            if (isPresent.toString() == 'true') {
                hash.lastEvent.icon = 'exchange';
            }
            else {
                hash.lastEvent.icon = 'arrowDown';
            }
        });

        pages.organisation.getWorksText(lastEvent).then(function(value) {
            hash.lastEvent.totalWorks = parseInt(value.replace(/[^\d.]/g, ''), 10);
        });

        pages.organisation.getWorkIDNumber(lastEvent).then(function(value) {
            hash.lastEvent.workID = parseInt(value.replace(/[^\d.]/g, ''), 10);
        });

        pages.organisation.getRunDate(lastEvent).then(function(value) {
            hash.lastEvent.runDate = value;
        });

        pages.organisation.getStatus(lastEvent).then(function(value) {
            hash.lastEvent.status = value;
        });

        pages.organisation.getEventRunDate(lastEvent).then(function(value) {
            hash.lastEvent.eventRunDate = value;
        });
        pages.organisation.getFileName(lastEvent).then(function (value) {
            hash.testVariables['last event file name'] = value;
        });
    });
};

exports.listWorkIdNumberRegRun = function () {
    it("Verify That list work id is delivered", function () {
        pages.organisation.listWorkIdNumberRegRun().then( function (workNumber) {
            hash.testVariables['work id'] = workNumber;
            expect(workNumber).toBeTruthy();
        });
    });
};

exports.checkThatAllDeliveriesAreDelivered = function () {
    it('Verify That All inner deliveries are delivered', function () {
        pages.organisation.clickLatestWork();
        expect(pages.organisation.workHasDeliveredStatus()).toBeTruthy();
    });
};

exports.selectCustomRegistrationRun = function (value) {
    it('Select custom registration run ' + value, function () {
        pages.organisation.clickCustomWorksButton();
        pages.organisation.selectValueFromPopupRegRun(value);
    });
};

exports.waitForRegActivityElement = function () {
    it('Wait For General Tab To be Displayed', function () {
        pages.organisation.waitForElementWork();
    });
};

exports.verifyThatWorkIsDelivered = function () {
    it('Verify Work has delivered status', function () {
        browser.wait(function() {
            return pph.areEqual(
                pages.organisation.workHasDeliveredStatus(), 'Delivered'
            ).then(function(isDelivered) {
                if(!isDelivered) {
                    pages.base.refreshPage();
                }
                return isDelivered;
            });
        });
    });
};

exports.executeRegistrationRun = function (value) {
    it('Execute Registration Run', function () {
        pages.organisation.registrationCanBeRun().then(function (isVisible) {
            if (isVisible.toString() == 'true') {
                pages.organisation.clickExecuteRegistrationRunButton();
            }
            else {
                expect(pages.organisation.resetWork('2014-09-01', 'BMI')).toBe(202);
                pages.base.refresh();
                pages.organisation.clickCustomWorksButton();
                pages.organisation.selectValueFromPopupRegRun(value);
                pages.organisation.clickExecuteRegistrationRunButton();
            }
        });
    });
};

exports.confirmRegistrationRun = function (value) {
    it('Confirm Registration Run', function () {
        pages.organisation.confirmModalDialog().then(function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.successModalMessage()));
            pages.organisation.confirmSuccessModal();
        });
    });
};

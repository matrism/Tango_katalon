'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (steps.organisation === undefined) {
    steps.organisation = exports = {

        addIncomeProvidersToOrganisation: function (table, message) {
            var fields = table.shift();
            var tableLine = 1;
            _.each(table, function (row, index) {

                var inboundIncomeType = row[0],
                    inboundIncomeTypeDescription = row[1],
                    incomeFileType = row[2],
                    tangoIncomeType = row[3];

                var consoleMessage;

                consoleMessage = message.replace("%InboundIncomeType%", inboundIncomeType);
                consoleMessage = consoleMessage.replace("%InboundIncomeTypeDescription%", inboundIncomeTypeDescription);
                consoleMessage = consoleMessage.replace("%IncomeFileType%", incomeFileType);
                consoleMessage = consoleMessage.replace("%TangoIncomeType%", tangoIncomeType);

                it(consoleMessage, function () {


                    //  pages.organisation.fillIncomeProvider(inboundIncomeType,inboundIncomeTypeDescription,incomeFileType,tangoIncomeType);


                    pages.organisation.typeIntoInboundIncomeTypeInput(inboundIncomeType, tableLine);

                    pages.organisation.typeIntoInboundIncomeTypeDescriptionInput(inboundIncomeTypeDescription, tableLine);

                    pages.organisation.typeIntoIncomeFileTypeInput(incomeFileType, tableLine);

                    pages.organisation.typeIntoTangoIncomeTypeInput(tangoIncomeType, tableLine);

                    tableLine++;


                });
                }
            );
        },

        openIncomeProviderEdit: function () {


            it("Open Income Provider Section for Editing", function () {


                pages.organisation.clickIncomeProviderSection();

                pages.organisation.clickincomeProviderSectionEdit();


            });


        },

        saveIncomeProviders: function () {

            it("Save edited Income Providers", function () {

                pages.organisation.clickSaveIncomeProviderButton();


            });

        },

        waitForProvidersSaveToComplete: function () {
            it("Waits for save to complete", function () {

                pages.organisation.waitForSaveToComplete();

            });


        },
        chooseIncomeFileType: function (fileType) {
            it("Choose " + fileType + "Income File Type", function () {

                pages.organisation.selectIncomeFileType(fileType);


            });
        },
        executeRegistrationRun: function (value) {
            it("Execute Registration Run", function () {
                pages.organisation.registrationCanBeRun().then(function (isVisible) {
                    if (isVisible.toString() == 'true') {
                        pages.organisation.clickExecuteRegistrationRunButton();
                        pages.organisation.confirmModalDialog().then(function () {
                            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.successModalMessage()));
                            pages.organisation.confirmSuccessModal();
                        });
                    }
                    else {
                        expect(pages.organisation.resetWork('2014-09-01', 'BMI')).toBe(202);
                        pages.base.refresh();
                        pages.organisation.clickCustomWorksButton();
                        pages.organisation.selectValueFromPopupRegRun(value);
                        pages.organisation.clickExecuteRegistrationRunButton();
                        pages.organisation.confirmModalDialog().then(function () {
                            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.successModalMessage()));
                            pages.organisation.confirmSuccessModal();
                        });
                    }
                });
            });
        },
        goToPreviewRegistrationRunTab: function () {
            it("Go to Preview Registration Run Tab", function () {
                pages.organisation.clickPreviewRegistrationRunTab();
            });
        },
        scrollPreviewRegRun: function () {
            it("Scroll registration run page " , function () {
                if(hash.statusNumber > 100) {
                    pages.organisation.scrollPreviewRegRun();
                }
            });
        },
        checkPreviewRegRunWorks: function (value) {
            it("Check registration run page works " + value , function () {
                if(hash.statusNumber > 100) {
                    pages.organisation.getPreviewRegRunWorks().then( function (response) {
                        expect(response).toBe(value);
                    });
                }
            });
        },
        scrollValidationErrorsPage: function () {
            it("Scroll validation errors page " , function () {
                pages.organisation.scrollValidationErrorsPage();
            });
        },
        checkValidationErrorWorks: function (value) {
            it("Check validation error works " + value, function () {
                pages.organisation.getValidationErrorsWorks(function (response) {
                    expect(response).toBe(value);
                });
            });
        },
        scrollRegRunPage: function() {
            describe("Verify list of registration run works after scroll ", function () {
                steps.organisation.scrollPreviewRegRun();
                steps.organisation.checkPreviewRegRunWorks(200);
            });
        },
        scrollValidationPage: function() {
            describe("Verify list of validation errors works after scroll ", function () {
                if(hash.validationErrors) {
                    steps.organisation.scrollValidationErrorsPage();
                    steps.organisation.checkValidationErrorWorks(200);
                }
            });
        },
        scrollPrimaryValidationPage: function() {
            describe("Verify list of validation errors works after scroll ", function () {
                steps.organisation.scrollValidationErrorsPage();
                steps.organisation.checkValidationErrorWorks(200);
            });
        },
        listWorkTitleRegRun: function () {
            it("Verify That list work title is delivered", function () {
                pages.organisation.listWorkTitleRegRun().then( function (workName) {
                    hash.workName = workName;
                    expect(workName).toBeTruthy();
                });
            });
        },
        listErrorWorkTitleRegRun: function () {
            it("Verify That error validation work title is delivered", function () {
                pages.organisation.listErrorWorkTitleRegRun().then( function (workName) {
                    hash.workName = workName;
                    expect(workName).toBeTruthy();
                });
            });
        },
        listWorkCreatorsRegRun: function () {
            it("Verify That list work creators are delivered", function () {
                pages.organisation.listWorkCreatorsRegRun().then( function (creators) {
                    hash.creators = creators;
                    expect(creators).toBeTruthy();
                });
            });
        },
        listWorkIdNumberRegRun: function () {
            it("Verify That list work id is delivered", function () {
                pages.organisation.listWorkIdNumberRegRun().then( function (workNumber) {
                    hash.workNumber = workNumber;
                    expect(workNumber).toBeTruthy();
                });
            });
        },
        listErrorWorkIdNumberRegRun: function () {
            it("Verify That error validation work id is delivered", function () {
                pages.organisation.listErrorWorkIdNumberRegRun().then( function (workNumber) {
                    hash.workNumber = workNumber;
                    expect(workNumber).toBeTruthy();
                });
            });
        },
        listWorkDetails: function () {
            describe("Verify That list details are delivered ", function () {
                steps.organisation.listWorkTitleRegRun();
                steps.organisation.listWorkCreatorsRegRun();
                steps.organisation.listWorkIdNumberRegRun();
            });
        },
        listErrorValidationDetails: function () {
            describe("Verify That error validation details are delivered ", function () {
                if(hash.validationErrors) {
                    steps.organisation.listErrorWorkTitleRegRun();
                    steps.organisation.listErrorWorkIdNumberRegRun();
                }
            });
        },
        listErrorPrimaryValidationDetails: function () {
            describe("Verify That error validation details are delivered ", function () {
                steps.organisation.listErrorWorkTitleRegRun();
                steps.organisation.listErrorWorkIdNumberRegRun();
            });
        },
        selectStatusPanel: function() {
            it("Select status panel", function () {
                var i;

                hash.statusFilter = 0;

                pages.organisation.getStatusPanel().then(function (value) {
                    for(i = 0; i < value; i++) {
                        pages.organisation.clickStatusFilter(i);

                        pages.organisation.getStatusFilterNumber(i).then(function (item) {
                            hash.statusFilter = hash.statusFilter + parseInt(item.replace(/,/g, ""));
                        });

                        hash.filterCount = i;
                    }
                });
            });
        },
        selectErrorsTypePanel: function() {
            it("Select error type panel", function () {
                var i;

                hash.errorTypeFilter = 0;

                pages.organisation.getErrorTypePanel().then(function (value) {
                    for(i = 0; i < value; i++) {
                        pages.organisation.clickErrorTypeFilter(i);

                        pages.organisation.getStatusFilterNumber(i).then(function (item) {
                            hash.errorTypeFilter = hash.errorTypeFilter + parseInt(item.replace(/,/g, ""));
                        });

                        hash.filterCount = i;
                    }
                });
            });
        },
        selectValidationPanel: function() {
            it("Select validation panel", function () {

                hash.validationFilter = 0;

                pages.organisation.getValidationPanel().then(function (value) {
                    for(var i = 0; i < value; i++) {
                        var index = hash.filterCount + i + 1;
                        pages.organisation.clickValidationFilter(i);

                        pages.organisation.getValidationFilterNumber(index).then(function (item) {
                            hash.validationFilter = hash.validationFilter + parseInt(item.replace(/,/g, ""));
                        });
                    }
                    hash.filterCount = i;
                });
            });
        },
        clickValidationErrorsSortFilter: function() {
            it("Click validation errors sort filter", function () {
                pages.organisation.clickValidationErrorsSortFilter();
            });
        },
        selectValidationErrorsSortFilter: function(i) {
            it("Select validation errors sort filter", function () {
                pages.organisation.selectValidationErrorsSortFilter(i);
            });
        },
        validateErrorTypeHeader: function() {
            it("Validate Error Type Header", function () {
                pages.organisation.getErrorTypeSortFilters().then(function (value){
                    pages.organisation.getErrorTypeValidationErrorsHeader(value);
                });
            });
        },
        validateAffectedPartyHeader: function() {
            it("Validate Affected Party Header", function () {
                //getAffectedPartyHeader
                pages.organisation.validateAffectedPartyHeader();
            });
        },
        selectErrorsStatusPanel: function() {
            it("Select status panel from validation errors page", function () {

                hash.statusErrorsFilter = 0;
                hash.errorValidationFilters = {
                    critical: false,
                    nonCritical: false
                };

                pages.organisation.getValidationPanel().then(function (value) {
                    for(var i = 0; i < value; i++) {
                        var index = hash.filterCount + i + 1;

                        pages.organisation.clickValidationFilter(i);

                        pages.organisation.getValidationFilterNumber(index).then(function (item) {
                            hash.statusErrorsFilter = hash.statusErrorsFilter + parseInt(item.replace(/,/g, ""));
                        });

                        pages.organisation.getValidationFilterText(index).then(function (text){
                            if(text == 'Critical Errors') {
                                hash.errorValidationFilters.critical = true;
                            }

                            if(text == 'Non-Critical Errors') {
                                hash.errorValidationFilters.nonCritical = true;
                            }
                        });
                    }
                });
            });
        },
        validateErrorSortFilters: function () {
            describe("Validate Sort Filters ", function () {
                steps.organisation.getValidationErrorsWorkIds();
                steps.organisation.checkWorksFilter();
                steps.organisation.clickValidationErrorsSortFilter();
                steps.organisation.selectValidationErrorsSortFilter(1);
                steps.organisation.validateErrorTypeHeader();
                steps.organisation.clickValidationErrorsSortFilter();
                steps.organisation.selectValidationErrorsSortFilter(2);
                steps.organisation.validateAffectedPartyHeader();
            });
        },
        checkFilters: function () {
            describe("Check filters ", function () {
                steps.organisation.selectStatusPanel();
                steps.organisation.checkStatusFilters();
                steps.organisation.selectValidationPanel();
                steps.organisation.checkValidationFilters();
            });
        },
        checkRunTypeFilters: function () {
            describe("Check run type filters ", function () {
                steps.organisation.selectRunTypePanel();
                //steps.organisation.checkTypeFilters();
            });
        },
        selectRunTypePanel: function() {
            it("Select run type panel", function () {
                hash.runTypeFilter = 0;

                pages.organisation.getRunTypePanel().then(function (value) {
                    for(var i = 0; i < value; i++) {
                        var index = hash.filterCount + i + 1;
                        pages.organisation.clickRunFilter(i);

                        pages.organisation.getValidationFilterNumber(index).then(function (item) {
                            hash.runTypeFilter = hash.runTypeFilter + parseInt(item.replace(/,/g, ""));
                        });
                    }
                });
            });
        },
        validateErrorsFilters: function() {
            it("Verify error type and status filters equality ", function () {
                expect(hash.errorTypeFilter).toBe(hash.statusErrorsFilter);
            });
        },
        validateCriticalErrorsFilter: function() {
            it("Validate Critical Errors Filter ", function () {
                if(hash.errorValidationFilters.critical) {
                    expect(pages.organisation.getValidationCriticalErrors()).toBeGreaterThan(0);
                }
            });
        },
        validateNonCriticalErrorsFilter: function() {
            it("Validate Non-Critical Errors Filter ", function () {
                if(hash.errorValidationFilters.nonCritical) {
                    expect(pages.organisation.getValidationNonCriticalErrors()).toBeGreaterThan(0);
                }
            });
        },
        checkValidationErrorsFilters: function () {
            describe("Check validation errors page filters ", function () {
                //if(hash.validationErrors) {
                    steps.organisation.selectErrorsTypePanel();
                    steps.organisation.checkErrorTypeFilters();
                    steps.organisation.selectErrorsStatusPanel();
                    steps.organisation.checkErrorsValidationFilters();
                    steps.organisation.validateErrorsFilters();
               // }
            });
        },
        checkPrimaryValidationErrorsFilters: function () {
            describe("Check validation errors page filters ", function () {
                steps.organisation.selectErrorsTypePanel();
                steps.organisation.checkErrorTypeFilters();
                steps.organisation.selectErrorsStatusPanel();
                steps.organisation.checkErrorsValidationFilters();
                steps.organisation.validateErrorsFilters();
            });
        },
        getValidationErrorsWorkIds: function () {
            it("Get validation error works filter ", function () {
                 pages.organisation.getValidationErrorsWorkId(0).then(function (value){
                    hash.validationErrorsFirstWorkId = parseInt(value.substr(3));
                 });

                 pages.organisation.getValidationErrorsWorkId(1).then(function (value){
                    hash.validationErrorsSecondWorkId = parseInt(value.substr(3));
                 });
            });
        },
        checkWorksFilter: function () {
            it("Check error works filter ", function () {
                var workId = hash.validationErrorsSecondWorkId - hash.validationErrorsFirstWorkId;
                expect(workId >= 0).toBeTruthy();
            });
        },
        checkErrorTypeFilters: function () {
            it("Check error type filters ", function () {
                pages.organisation.activityHeaderErrorCount().then(function (value){
                    var statusNumber = parseInt(value);

                    expect(hash.errorTypeFilter).toBe(statusNumber);
                });
            });
        },
        checkErrorsValidationFilters: function () {
            it("Check status validation error filters ", function () {
                pages.organisation.activityHeaderErrorCount().then(function (value){
                    var statusNumber = parseInt(value);

                    expect(hash.statusErrorsFilter).toBe(statusNumber);
                });
            });
        },
        checkStatusFilters: function () {
            it("Check status filters ", function () {
                pages.organisation.activityHeaderCount().then(function (value){
                    var headerText = value.split("("),
                        subPart = headerText[1],
                        count = subPart.substring(0, subPart.length-1),
                        statusNumber = parseInt(count.replace(/,/g, ""));

                    hash.statusPeriod = headerText[0];
                    expect(hash.statusFilter).toBe(statusNumber);
                });
            });
        },
        checkStatusNumber: function () {
            it("Check status number ", function () {
                hash.statusNumber = 0;
                if(hash.scheduledWorks) {
                    pages.organisation.activityHeaderCount().then(function (value){
                        var headerText = value.split("("),
                            subPart = headerText[1],
                            count = subPart.substring(0, subPart.length-1),
                            statusNumber = parseInt(count.replace(/,/g, ""));

                        hash.statusNumber = statusNumber;

                        expect(hash.statusNumber).toBeTruthy();
                    });
                }
            });
        },
        checkValidationFilters: function () {
            it("Check validation filters ", function () {
                pages.organisation.activityHeaderCount().then(function (value){
                    var headerText = value.split("("),
                        subPart = headerText[1],
                        count = subPart.substring(0, subPart.length-1),
                        statusNumber = parseInt(count.replace(/,/g, ""));

                    expect(hash.validationFilter).toBe(statusNumber);
                });
            });
        },
        viewValidationErrors: function () {
            it("View validation errors", function () {
                if(hash.validationErrors) {
                    pages.organisation.clickValidationErrorsButton();
                }
            });
        },
        viewPrimaryValidationErrors: function () {
            it("View validation errors", function () {
                pages.organisation.clickValidationErrorsButton();
            });
        },
        checkDateScheduledWorks: function (value) {
            it('Check date for scheduled works', function () {
                var currentDate = new Date(),
                    subStr = value.split('_'),
                    dateStr = subStr[1].replace('-', '/'),
                    regDate = new Date(dateStr);

                hash.dateScheduledWorks = false;

                if( regDate > currentDate ) {
                    hash.dateScheduledWorks = true;
                    expect(pages.organisation.executeRegistrationFutureIsActive()).toBeTruthy();
                } else {
                    if(!hash.scheduledWorks) {
                        expect(pages.organisation.registrationRunButtonNoWorksIsActive()).toBeTruthy();
                    }
                }

            });
        },
        checkValidationErrorsButton: function (value) {
            it('Check validation errors button', function () {
                hash.validationErrors = true;
                if((!hash.scheduledWorks) || ((hash.nonCriticalErrors == 0) && (hash.criticalErrors == 0))) {
                    hash.validationErrors = false;
                    expect(pages.organisation.validationErrorsButtonDisabled()).toBeTruthy();
                }
            });
        },
        checkScheduledWorksPresent: function (value) {
            it('Check scheduled button', function () {
                hash.scheduledWorks = false;

                pages.organisation.getStatusPanel().then(function (value) {
                    for(var i = 0; i < value; i++) {
                        pages.organisation.getStatusFilterText(i).then(function (item) {
                            if(item == 'Scheduled') {
                                hash.scheduledWorks = true;
                            }
                        });
                    }
                });
            });
        },
        scrollScheduledWorks: function () {
            it('Scroll scheduled works', function () {
                if(hash.scheduledWorks) {
                    var pagesNumber = hash.statusNumber / 100;

                    if(pagesNumber >= 1) {
                        for(var i = 0; i < pagesNumber; i++) {
                            pages.organisation.scrollPreviewRegRun();
                        }
                    }
                }
            });
        },
        getCriticalErrors: function () {
            it('Get critical errors for scheduled works', function () {
                hash.criticalErrors = 0;

                if(hash.scheduledWorks) {
                    pages.organisation.getCriticalErrors().then(function (value) {
                        hash.criticalErrors = value;
                    });
                }
            });
        },
        getNonCriticalErrors: function () {
            it('Get non critical errors for scheduled works', function () {
                hash.nonCriticalErrors = 0;

                if(hash.scheduledWorks) {
                    pages.organisation.getNonCriticalErrors().then(function (value) {
                        hash.nonCriticalErrors = value;
                    });
                }
            });
        },
        checkExecuteRegButtonStatus: function () {
            it('Check execute registration run button status', function () {
                if(hash.scheduledWorks) {
                    if(hash.statusNumber > hash.criticalErrors) {
                        expect(pages.organisation.executeRegistrationIsActive()).toBeTruthy();
                    } else {
                        expect(pages.organisation.registrationRunButtonNoValidWorksIsActive()).toBeTruthy();
                    }
                }
            });
        },
        backValidationErrors: function (stepValue) {
            it('Get back from validation errors page', function () {
                if(stepValue == 'custom') {
                    if(hash.validationErrors) {
                        pages.organisation.getBackValidationErrors();
                    }
                } else {
                    pages.organisation.getBackValidationErrors();
                }
            });
        },
        executeRegistrationRunValidation: function (value) {
            describe("Validate Execute Registration Run button", function () {
                steps.organisation.selectCustomRegistrationRun(value);
                steps.organisation.checkScheduledWorksPresent(value);
                steps.organisation.checkDateScheduledWorks(value);
                steps.organisation.checkStatusNumber();
                steps.organisation.scrollScheduledWorks();
                steps.organisation.getCriticalErrors();
                steps.organisation.getNonCriticalErrors();
                steps.organisation.checkExecuteRegButtonStatus();
            });
        },
        downloadCrFile: function (stepValue) {
            it('Download CR file', function () {
                if(stepValue == 'error') {
                    if(hash.validationErrors) {
                        pages.organisation.downloadCrFile();
                    }
                } else {
                    pages.organisation.downloadCrFile();
                }
            });
        },
        validateWorkNumberCrFile: function () {
            it('Check work number ' , function () {
                expect(hash.crFileInformation.workNumber).toBe(hash.workNumber);
            });
        },
        validateWorkNameCrFile: function () {
            it('Check work name ', function () {
                expect(hash.crFileInformation.workName).toBe(hash.workName);
            });
        },
        validateCreatorsCrFile: function () {
            it('Check creators ', function () {
                expect(hash.crFileInformation.creator).toBe(hash.creators);
            });
        },
        validateSizeCrFile: function () {
            it('Check file size ', function () {
                pages.organisation.activityHeaderCount().then(function (value){
                    var headerText = value.split("("),
                        subPart = headerText[1],
                        count = subPart.substring(0, subPart.length-1),
                        statusNumber = parseInt(count.replace(/,/g, "")) + 3;

                    expect(hash.crFileInformation.fileSize).toBe(statusNumber);
                });
            });
        },
        validateErrorSizeCrFile: function () {
            it('Check error validation file size ', function () {
                pages.organisation.activityHeaderErrorCount().then(function (value){
                    var statusNumber = parseInt(value),
                        fileSize = hash.crFileInformation.fileSize - 3;

                    expect(fileSize).toBe(statusNumber);
                });
            });
        },
        getCrFileInformation: function (stepValue) {
            it('Get CR file information ', function () {
                hash.crFileInformation = {};

                pages.organisation.validateCrFile(hash.workNumber, stepValue, hash.statusPeriod).then(function (value) {
                    hash.crFileInformation = value;
                });
            });
        },
        validateCrFile: function (stepValue) {
            describe("Check CR file", function () {
                steps.organisation.getCrFileInformation(stepValue);
                steps.organisation.validateWorkNumberCrFile();
                steps.organisation.validateWorkNameCrFile();
                steps.organisation.validateCreatorsCrFile();
                steps.organisation.validateSizeCrFile();
            });
        },
        validateErrorCrFile: function (stepValue) {
            describe("Check validation errors CR file", function () {
                if(hash.validationErrors) {
                    steps.organisation.getCrFileInformation(stepValue);
                    steps.organisation.validateWorkNumberCrFile();
                    steps.organisation.validateWorkNameCrFile();
                    steps.organisation.validateErrorSizeCrFile();
                }
            });
        },
        validatePrimaryErrorCrFile: function (stepValue) {
            describe("Check validation errors CR file", function () {
                steps.organisation.getCrFileInformation(stepValue);
                steps.organisation.validateWorkNumberCrFile();
                steps.organisation.validateWorkNameCrFile();
                steps.organisation.validateErrorSizeCrFile();
            });
        },
        clearDownloadFolder: function (downloadFilepath) {
            it("Clear Download Folder", function () {
                pages.organisation.deleteFilesFromDownloadFolder(downloadFilepath);
            });
        },
        downloadFile:function() {
            it("Download File", function () {
                pages.organisation.clickDownloadFileButton();
                pages.organisation.waitForFileToDownload();
            });
        },
        validateFilesDownloaded: function (downloadFilepath) {
            it("Files Downloaded Successfully", function () {

                expect(pages.organisation.fileDownloadedSuccesfully(downloadFilepath)).toBeTruthy();
            });
        },
        goToRegistrationActivityTab: function () {
            it("Go to Registration ActivityTab", function () {
                pages.organisation.clickRegistrationActivityTab();
            });

        },
        goToGeneralTab: function () {
            it("Go to General Tab on Organization", function () {
                pages.organisation.clickGeneralTab();
            });
        },
        waitForRegistrationActivityRecordsTableToBeDisplayed: function () {
            it("Wait For Reg Tab Header To be Displayed", function () {
                pages.organisation.waitForActivityRecordsTableHeader();
            });
        },
        waitForPreviewRegistrationRunHeaderToBeDisplayed: function () {
            it("Wait For Registration Run Tab To be Displayed", function () {
                pages.organisation.waitForRegRunHeader();
            });
        },
        waitForRegActivityElement: function () {
            it("Wait For General Tab To be Displayed", function () {
                pages.organisation.waitForElementWork();
            });
        },
        saveRegActivityLastEvent: function () {
            it("Save Last Event Displayed On Registration Activity Page", function () {


                hash.lastEvent = {};
                var lastEvent = pages.organisationRegistrationActivity.events.container(
                    'latestStarted'
                );

                pages.organisation.getIconType(lastEvent).then(function (isPresent) {


                    if (isPresent.toString() == "true") {

                        hash.lastEvent.icon = "exchange";

                    }
                    else {
                        hash.lastEvent.icon = "arrowDown";

                    }

                });


                pages.organisation.getWorksText(lastEvent).then(function (value) {

                    hash.lastEvent.totalWorks = parseInt(value.replace(/[^\d.]/g, ''), 10);


                }
                );
                pages.organisation.getWorkIDNumber(lastEvent).then(function (value) {


                    hash.lastEvent.workID = parseInt(value.replace(/[^\d.]/g, ''), 10);


                }
                );
                pages.organisation.getRunDate(lastEvent).then(function (value) {

                    hash.lastEvent.runDate = value;

                }
                );
                pages.organisation.getStatus(lastEvent).then(function (value) {

                    hash.lastEvent.status = value;

                }
                );
                pages.organisation.getEventRunDate(lastEvent).then(
                    function (value) {
                        hash.lastEvent.eventRunDate = value;
                        //    console.log(hash.lastEvent)
                    }
                );


            });

        },
        saveOrganisationDeliveryMethods: function () {
            it("Save Organisation Delivery Methods Information", function () {
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
                                //    console.log(emailDelivery);
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
                                //    console.log(sftpDelivery);
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
                                //   console.log(sftpDelivery);
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
                                //    console.log(thirdPartyDelivery);
                            });
                        });

                    });


            });
        },
        verifyThatWorkIsDelivered: function () {
            it("Verify Work has delivered status", function () {
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
        },
        checkThatAllDeliviriesAreDelivered: function () {
            it("Verify That All inner deliviries are delivered", function () {
                pages.organisation.clickLatestWork();
                expect(pages.organisation.workHasDeliveredStatus()).toBeTruthy();
            });
        },

        selectCustomRegistrationRun: function (value) {
            it("Select custom registration run " + value, function () {
                pages.organisation.clickCustomWorksButton();
                pages.organisation.selectValueFromPopupRegRun(value);
            });
        },

        pause: function () {


            it("Test Step", function () {
                browser.pause();

            });

        },

        goToNewOrganisationPage: function () {
            it("Go to new organisation page", function () {
                pages.organisation.open();

            });
        },
        setOrganisationName: function (value) {
            it("Set organisation name to " + value, function () {

                pages.organisation.typeOrganisationName(value);
            });
        },
        setTerritoryOfOperation: function (value) {
            it("Set territory of operation to " + value, function () {

                if (value == "Worldwide") {
                    pages.organisation.setTerritoryOfOperationToWorldWide();

                }

            });
        },
        setRandomSuisaIPI: function () {
            it("Set random suisa IPI ", function () {
                // pages.organisation.randomIPINumberBasedOnDate().then(function (value) {

                pages.organisation.typeRandomSuisaIPINumber(pages.organisation.randomIPINumberBasedOnDate());
                //   console.log(value);
                //  });


            });
        },
        setAffiliatedSociety: function (value) {
            it("Set affiliated society  to " + value, function () {

                pages.organisation.selectAffiliatedSocietyNumber(value);

            });
        },
        setPublisherType: function (value) {
            it("Set publisher type to  " + value, function () {

                pages.organisation.clickPublisherType(value);

            });

        },
        saveOrganisation: function () {
            it("Save organisation ", function () {

                pages.organisation.clickSaveOrganisationButton();

            });
        },
        validateSavedOrganisationIsDisplayed: function () {
            it("Validate Saved Organisation Is Displayed ", function () {


                expect(pages.organisation.isSavedPageDisplayed()).toBeTruthy();

            });

        },
        validateCisacCode: function (value) {
            it("Validate Cisac Code is " + value, function () {

                expect(pages.organisation.getCisacNumber()).toBe(value);

            });
        },

        validatePublisherSubRelationships: function (firstPublisherDate) {

            it("Validate Publisher Sub Relationships", function () {


                expect(pages.organisation.getFirstSubPublisherData()).toBe(firstPublisherDate);

            });
        }
    };
}

module.exports = steps.organisation;

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
        'Check or add income file type',
        'Expect income type mappings to be valid',

        ['Income Type Mapping', [
            'Delete row',
            'Enter inbound income type',
            'Enter inbound income type description',
            'Enter income file type search terms',
            'Select income file type search result by index',
            'Enter Tango income type search terms',
            'Select Tango income type search result by index',
            'Add if not present',
            'Add if none match',
            'Change inbound income type',
            'Make income type mapping be invalid',
            'Make income type mapping be valid'
        ]],

        'Save section',
        'Expect section to be in view mode',
    ]],

    ['Sub-Publishers', [
        'Expect name to be either',
    ]],
]);

"use strict";

var pph = require('../../../../helpers/pph');

var client = require('http-api-client');
var fs = require('fs');
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (pages.organisation === undefined) {
    pages.organisation = exports = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/org",
        locators: {},
        futureRegistrationRunButton: function () {
            return $('[data-tooltip="Cannot execute runs scheduled for the future."]');
        },
        registrationRunButtonNoWorks: function () {
            return $('[data-tooltip="There are no scheduled works."]');
        },
        validationErrorsNoButton: function () {
            return $('[data-tooltip="There are no scheduled works with Validation errors to review."]');
        },
        registrationRunButtonNoValidWorks: function () {
            return $('[data-tooltip="There are no valid scheduled works. Please make sure at least one work is valid."]');
        },
        activityHeaderCount: function () {
            return $(".ACTIVITY-HEADER .count").getText();
        },
        activityHeaderErrorCount: function () {
            return $$(".ACTIVITY-HEADER .count>span").first().getText();
        },
        scrollPageDataRow: function () {
            return $$(".DATA-ROW").count();
        },
        scrollPageDataErrors: function () {
            return $$(".DATA-CHILD .DATA-ROW").count();
        },
        listErrorStatus: function () {
            return $$(".row-header>div:nth-child(2)>span .icon-minus-sign").count();
        },
        listNonErrorStatus: function () {
            return $$(".row-header>div:nth-child(2)>span .icon-minus").count();
        },
        listWorkTitle: function () {
            return $$(".row-header>div:nth-child(3)>h4").get(1).getText();
        },
        listErrorWorkTitle: function () {
            return $$(".row-header>div>div:nth-child(2)>h4").first().getText();
        },
        listWorkCreators: function () {
            return $$(".row-header>div:nth-child(3)>div>div").get(1).getText();
        },
        listWorkIdNumber: function () {
            return $$(".row-header>div:nth-child(4)>div:nth-child(2)>a").get(1).getText();
        },
        listErrorWorkIdNumber: function () {
            return $$(".row-header>div>div:nth-child(3)>a").first().getText();
        },
        getScheduledStatus: function () {
            return $$('.filter-item').first();
        },
        scheduledStatusNumber: function () {
            return $$('.filter-item>div:nth-child(2)').first().getText();
        },
        getNotScheduledStatus: function () {
            return $$('.filter-item').get(1);
        },
        notScheduledStatusNumber: function () {
            return $$('.filter-item>div:nth-child(2)').get(1).getText();
        },
        noErrorsStatus: function () {
            return $$('.filter-item').get(2);
        },
        noErrorsStatusNumber: function () {
            return $$('.filter-item>div:nth-child(2)').get(2).getText();
        },
        nonCriticalErrorsStatus: function () {
            return $$('.filter-item').get(3);
        },
        nonCriticalErrorsStatusNumber: function () {
            return $$('.filter-item>div:nth-child(2)').get(3).getText();
        },
        getStatusPanel: function() {
            return $$('.filter-item .filter-text span[data-ng-switch-when="status"]').count();
        },
        getErrorTypePanel: function() {
            return $$('.filter-item .filter-text span[data-ng-switch-when="error_type"]').count();
        },
        getValidationPanel: function() {
            return $$('.filter-item .filter-text span[data-ng-switch-when="validation_status"]').count();
        },
        getRunTypePanel: function() {
            return $$('.filter-item .filter-text span[data-ng-switch-when="run_type"]').count();
        },
        getStatusFilter: function(item) {
            return $$('.filter-item .filter-text span[data-ng-switch-when="status"]').get(item);
        },
        getErrorTypeFilter: function(item) {
            return $$('.filter-item .filter-text span[data-ng-switch-when="error_type"]').get(item);
        },
        getPanelFilter: function(item) {
            return $$('.filter-item .filter-text span[data-ng-switch-when="validation_status"]').get(item);
        },
        getRunTypeFilter: function(item) {
            return $$('.filter-item .filter-text span[data-ng-switch-when="run_type"]').get(item);
        },
        getFilter: function(item) {
            return $$('.filter-item .filter-text span').get(item);
        },
        getStatusFilterNumber: function(item) {
            return $$('.filter-item>div:nth-child(2)').get(item).getText();
        },
        getStatusFilterText: function(item) {
            return $$('.filter-item>div:nth-child(3)>span').get(item).getText();
        },
        getValidationFilterNumber: function(item) {
            return $$('.filter-item>div:nth-child(2)').get(item).getText();
        },
        backValidationErrors: function () {
            return $$(".ACTIVITY-HEADER a").first();
        },
        organisationNameInput: function () {
            return $(".e2e-general-name>div>input");
        },
        territoryOfOperationIcon: function () {

            return $(".tg-territory__globe-button");
        },
        selectAllCountriesButton: function () {
            return $$(".tg-territory__btn.ng-scope").last();
        },
        suisaIPINumberInput: function () {
            return $(".e2e-general-suisa-ipi>div>div>input");
        },
        affiliatedSocietyInput: function () {
            return $('[placeholder="Search by CISAC Code or Abbreviation"]');
        },
        WCMPublisherButton: function () {
            return $('[tooltip="Warner/Chappell Music"]');
        },
        saveOrganisationButton: function () {
            return $('[type="submit"]');
        },
        summaryTable: function () {
            return $(".span3.header-right");
        },
        cisacCode: function () {
            return $('.e2e-general-cisac-code>div');
        },

        subPublisherRelationshipContainers: function () {
            return $$('.e2e-sub-publisher');
        },

        subPublisherNameBinding: function (i) {
            return this.subPublisherRelationshipContainers().get(i).$(
                '.e2e-sub-publisher-def .ng-binding'
            );
        },
        incomeProviderControls: function () {

            return element(by.css(".income-provider-section>div>.CONTROLS"));
        },
        fileTypeIncomeInput: function () {
            return element(by.css(".default"));
        },
        activityRecordsTable: function () {
            return $("#ACTIVITY-RECORDS");
        },
        editorGeneral: function () {
            return $("#editor-general");
        },
        regRunHeader: function () {
            return $(".reg-run-header");
        },
        incomeProvidersEditView: function () {
            return element(by.css(".EDITOR.income-provider-section>.edit-view"));
        },
        fileTypeIncomeBlank: function () {
            return element(by.css(".default"));
        },
        fileTypeIncomeInputDropdown: function () {
            return element(by.css(".active-result.highlighted"));
        },
        generalOrganisationSection: function () {
            return element(by.css("#editor-general"));
        },
        incomeProviderSection: function () {
            return element(by.css(".income-provider-section"));
        },
        incomeProviderSectionEdit: function () {
            return element(by.css(" .income-provider-section>div>button"));
        },
        organisationOption: function () {
            return element(by.css("#SEARCH-ORG"));
        },
        searchInput: function () {
            return element(by.css(".tg-typeahead__input"));
        },
        searchTypeAheadDropdown: function () {
            return element(by.css(".tg-typeahead__suggestions-group-item-inner"));
        },
        inboundIncomeTypeInput: function (tableLine) {
            return element(by.css(".table.input-table>tbody>tr:nth-child(" + tableLine + ")>td:nth-child(1)>input"));
        },
        inboundIncomeTypeDescriptionInput: function (tableLine) {
            return element(by.css(".table.input-table>tbody>tr:nth-child(" + tableLine + ")>td:nth-child(2)>input"));
        },
        incomeFileTypeInput: function (tableLine) {
            return element(by.css(".table.input-table>tbody>tr:nth-child(" + tableLine + ")>td:nth-child(3)>input"));
        },
        tangoIncomeTypeInput: function (tableLine) {
            return element(by.css(".table.input-table>tbody>tr:nth-child(" + tableLine + ")>td:nth-child(4)>input"));
        },
        saveIncomeProviderButton: function () {
            return element(by.css(".income-provider-section>.edit-view>.CONTROLS>div:first-child>button:first-child"));
        },
        typeaheadInput: function () {
            return $$(".tg-typeahead__suggestions-group-item").first();
        },
        typeaheadContainer: function () {
            return $(".tg-typeahead__suggestions-container");
        },
        navigationTab: function () {
            return $(".nav-tabs");
        },
        downloadFileButton: function () {
            return $(".icon-download-alt.ng-scope");
        },
        validationErrorsButton: function () {
            return $$(".btn.btn-primary.ng-scope").first();
        },
        activityHeader: function () {
            return $("#ACTIVITY-HEADER");
        },
        elementWork: function () {
            return $(".DATA-ROW.DATA-CHILD:first-child");
        },
        orgTypeHeader: function () {
            return $(".text-highlight");
        },
        iconDownloadAlt: function () {
            return $(".icon-download-alt");
        },
        successModalMessage: function () {
            return $(".modal-success");
        },
        previewRegistrationRunTab: function () {

            return $$(".nav-tabs>li>a").last();
        },
        registrationActivityTab: function () {
            return $$(".nav-tabs>li>a").first();
        },
        generalTab: function () {
            return $$(".nav-tabs>li>a").get(1);
        },
        registrationRunHeader: function () {
            return $(".reg-run-header");
        },
        customWorkButton: function () {
            return $$(".reg-run-header>span>div>div>span>a").first();
        },
        popupRegistrationRun: function () {
            return $(".popup-reg-run");
        },
        getLastAddedWorkEvent: function () {
            return $$(".row-header").first();
        },
        getIconType: function (event) {
            return event.$("div>div>span>.icon-exchange").isPresent();
        },
        getWorksText: function (event) {
            pages.base.scrollIntoView(event);
            return event.$("div>div:nth-child(2)>p>span").getText();
        },
        getWorkIDNumber: function (event) {
            return event.$(".row-header>div>div:nth-child(2)>div").getText();
        },
        getRunDate: function (event) {
            return event.$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(3)>time').getText();
        },
        getStatus: function (event) {
            return event.$$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>span').first().getText();
        },
        getEventRunDate: function (event) {
            return event.$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>time').getText();
        },
        popupRegistrationLinkByText: function (text) {
            //$$(".popup-reg-run>ul>li>a").
            return element(By.linkText(text));

            // return protractor.driver.findElement(protractor.By.linkText(text));
        },
        activeRegistrationRunButton: function () {
            return $('[data-tooltip=""][data-ng-click="canExecuteStackedWorks() && executeStackedWorks();"]');
        },
        registrationRunButton: function () {
            return $("#ACTIVITY-RECORDS>#ACTIVITY-HEADER>div.text-right>button:last-child");
        },
        modalConfirmButton: function () {
            // return element.all(by.css(".modal-footer>button")).element(by.buttonText("OK"));
            return $('[data-ng-click="(data.show.cancel) ? data.apply() : ok()" ]');
        },
        modalSuccessConfirmButton: function () {
            return $(".btn.btn-primary.pull-right");
        },
        modalFooter: function () {
            return $('.modal-footer');
        },
        textWithTotalWorksNumber: function () {
            $('.modal-prompt').getText().then(function (text) {
                //  console.log("whole text" + text);
                return text;
            })
        },
        getEmailDeliveryMethods: function () {
            return $$(".e2e-delivery-method-EMAIL");
        },
        getSFTPDeliveryMethods: function () {
            return $$(".e2e-delivery-method-SFTP");
        },
        getFTPDeliveryMethods: function () {
            return $$(".e2e-delivery-method-FTP");
        },
        getThirdPartyDeliveryMethods: function () {
            return $$(".e2e-delivery-method-THIRDPARTY");
        },
        sfptDeliveryMethodName: function (deliveryMethod) {
            return deliveryMethod.$$(".control-group>.controls>strong").first();
        },
        sftpDeliveryMethodAddress: function (deliveryMethod) {
            return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.host"]');
        },
        sftpDeliveryMethodPort: function (deliveryMethod) {
            return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.port"]');
        },
        sftpDeliveryMethodUsername: function (deliveryMethod) {
            return deliveryMethod.$$(".control-group>.controls>strong").get(1);
        },
        sftpUnmaskPasswordButton: function (deliveryMethod) {
            return deliveryMethod.$(".control-group>.controls>.mask-input-password");
        },
        sftpPassword: function (deliveryMethod) {
            return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.showPassword"]');
        },
        sftpFileFormat: function (deliveryMethod) {
            return deliveryMethod.$$(".control-group>.controls>strong").get(2);
        },
        sftpFileFormatStatus: function (deliveryMethod) {
            return deliveryMethod.$(".control-group>.controls>span.compress-file");
        },
        sftpDeliveryNotificationStatus: function (deliveryMethod) {
            return deliveryMethod.$$(".control-group>.controls>strong").last();
        },
        sfptDeliveryStatusEmail: function (deliveryMethod) {
            return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_notification.primary_emails"]');
        },
        sftpDeliveryStatusCC: function (deliveryMethod) {
            return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_notification.cc_emails"]');
        },
        thirdPartyName: function (deliveryMethod) {
            return deliveryMethod.$('[ data-ng-if="dm.delivery_mechanism_type === \'THIRDPARTY\'"]>div>strong');
        },

        //END OF LOCATORS ///////////////////////////////////////
        executeRegistrationFutureIsActive: function () {
            return this.futureRegistrationRunButton().isPresent();
        },
        registrationRunButtonNoWorksIsActive: function () {
            return this.registrationRunButtonNoWorks().isPresent();
        },
        validationErrorsButtonDisabled: function () {
            return this.validationErrorsNoButton().isPresent();
        },
        registrationRunButtonNoValidWorksIsActive: function () {
            return this.registrationRunButtonNoValidWorks().isPresent();
        },
        scrollPreviewRegRun: function () {
            browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function() {
                return pages.base.waitForAjax();
            });
        },
        getBackValidationErrors: function () {
            this.backValidationErrors().click();
            pages.base.waitForAjax();
        },
        getCriticalErrors: function () {
            return this.listErrorStatus();
        },
        getNonCriticalErrors: function () {
            return this.listNonErrorStatus();
        },
        getPreviewRegRunWorks: function() {
            return pages.organisation.scrollPageDataRow();
        },
        scrollValidationErrorsPage: function() {
            browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function() {
                return pages.base.waitForAjax();
            });
        },
        getValidationErrorsWorks: function() {
            return pages.organisation.scrollPageDataErrors();
        },
        listWorkTitleRegRun: function () {
            return this.listWorkTitle();
        },
        listErrorWorkTitleRegRun: function () {
            return this.listErrorWorkTitle();
        },
        listWorkCreatorsRegRun: function () {
            return this.listWorkCreators();
        },
        listWorkIdNumberRegRun: function () {
            return this.listWorkIdNumber();
        },
        listErrorWorkIdNumberRegRun: function () {
            return this.listErrorWorkIdNumber();
        },
        clickStatusFilter: function(item) {
            this.getStatusFilter(item).click();
            pages.base.waitForAjax();
        },
        clickErrorTypeFilter: function(item) {
            this.getErrorTypeFilter(item).click();
            pages.base.waitForAjax();
        },
        clickValidationFilter: function(item) {
            this.getPanelFilter(item).click();
            pages.base.waitForAjax();
        },
        clickRunFilter: function(item) {
            this.getRunTypeFilter(item).click();
            pages.base.waitForAjax();
        },
        validateCrFile: function (workNumber, stepValue, period) {

            //var dir = 'C:\\Users\\constantin.crismaru\\Downloads\\';

            return pages.organisation.activityHeaderCount().then(function (header) {
                var parts = header.split(' '),
                    myDate = new Date(),
                    currentDay = ( myDate.getDate().toString().length == 1) ? '0' + myDate.getDate() : myDate.getDate(),
                    filename = '',
                    periodSize = period.length - 1,
                    returnObj ={};

                period = period.substr(0,periodSize);

                switch(stepValue){
                    case 'primary': filename  = '_PRIMARY_' + myDate.getFullYear() + (myDate.getMonth()+1) + currentDay + '.csv';
                        break;
                    case 'custom': filename  = '_' + parts[0] + '_' + myDate.getFullYear() + (myDate.getMonth()+1) + currentDay + '.csv';
                        break;
                    case 'error_custom': filename  = '_' + period + '_ERR_' + myDate.getFullYear() + (myDate.getMonth()+1) + currentDay + '.csv';
                        break;
                    case 'error': filename  = '_PRIMARY_ERR_' + myDate.getFullYear() + (myDate.getMonth()+1) + currentDay + '.csv';
                        break;
                    default: break;
                };

                var f = fs.readFileSync(systemConfig.downloadsDirectoryPath + filename, {encoding: 'utf-8'});

                // Split on row
                f = f.split('\n');

                f.forEach(function (row) {
                    if(row.indexOf(workNumber) > -1) {
                        var creatorPart = row.split('"'),
                            workPart = creatorPart[0].split(',');

                        returnObj = {
                            workName: workPart[1],
                            creator: creatorPart[1],
                            workNumber: workNumber
                        };
                    }
                });

                returnObj.fileSize = f.length;

                return returnObj;
            });

        },
        getThirdPartyName: function (deliveryMethod) {
            return this.thirdPartyName(deliveryMethod).getText();
        },
        getSFTPDeliveryMethodName: function (deliveryMethod) {

            return this.sfptDeliveryMethodName(deliveryMethod).getText();
        },
        getSFTPDelivetyMehodAddress: function (deliveryMethod) {
            return this.sftpDeliveryMethodAddress(deliveryMethod).getText();
        },
        getSFTPDeliveryMethodPort: function (deliveryMethod) {
            return this.sftpDeliveryMethodPort(deliveryMethod).getText();
        },
        getSFTPUsername: function (deliveryMethod) {
            return this.sftpDeliveryMethodUsername(deliveryMethod).getText();
        },
        clickUnmaskPasswordButton: function (deliveryMethod) {
            return this.sftpUnmaskPasswordButton(deliveryMethod).click();
        },
        getSFTPPassword: function (deliveryMethod) {
            return this.sftpPassword(deliveryMethod).getText();
        },
        getSFTPFileFormat: function (deliveryMethod) {
            return this.sftpFileFormat(deliveryMethod).getText();
        },
        getSFTPFileFormatStatus: function (deliveryMethod) {
            return this.sftpFileFormatStatus(deliveryMethod).getText();
        },
        getSFTPDeliveryNotificationStatus: function (deliveryMethod) {
            return this.sftpDeliveryNotificationStatus(deliveryMethod).getText();
        },
        getSFTPDeliveryNotificationStatusEmail: function (deliveryMethod) {
            return this.sfptDeliveryStatusEmail(deliveryMethod).getText();
        },
        getSFTPDeliveryNotificationStatusCC: function (deliveryMethod) {
            return this.sftpDeliveryStatusCC(deliveryMethod).getText();
        },
        getEmailDeliveryMethodEmail: function (deliveryMethod) {
            return deliveryMethod.$('div:nth-child(1)>.controls>strong').getText();
        },
        getEmailDeliveryMethodCC: function (deliveryMethod) {
            return deliveryMethod.$('div:nth-child(1)>div>[data-ng-show="dm.delivery_mechanism.cc_emails"]').getText();
        },
        getEmailDeliveryMethodFileFormat: function (deliveryMethod) {
            return deliveryMethod.$('div:nth-child(3)>.controls>strong').getText();
        },
        getEmailDeliveryMethodNotification: function (deliveryMethod) {
            return deliveryMethod.$$('div:nth-child(5)>.controls >span').first().getText();
        },
        numberOfWorks: function () {
            var number = parseInt(this.textWithTotalWorksNumber(), 10);
            // console.log("Number of works" + this.textWithTotalWorksNumber());
            return number;
        },
        executeRegistrationIsActive: function () {
            return this.activeRegistrationRunButton().isPresent();
        },
        clickIncomeProviderSection: function () {
            //  ftf.helper.waitForElement(this.incomeProviderSection(), 30000);
            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.incomeProviderSection()));
            //browser.wait(ExpectedConditions.visibilityOf(this.generalOrganisationSection()));
            //    this.scopeHeading().click()
            pages.base.scrollIntoView(this.incomeProviderSection());
            this.incomeProviderSection().click();
        },
        clickincomeProviderSectionEdit: function () {

            //browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSectionEdit()));

            // ftf.helper.waitForElement(this.incomeProviderSectionEdit(), 30000);

            this.incomeProviderSectionEdit().click();
        },
        typeIntoInboundIncomeTypeInput: function (text, tableLine) {
            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.inboundIncomeTypeInput(tableLine)));
            this.inboundIncomeTypeInput(tableLine).sendKeys(text);
            //  pages.base.scrollIntoView(  this.inboundIncomeTypeInput);
        },
        typeIntoInboundIncomeTypeDescriptionInput: function (text, tableLine) {
            this.inboundIncomeTypeDescriptionInput(tableLine).sendKeys(text);
        },
        typeIntoIncomeFileTypeInput: function (text, tableLine) {
            this.incomeFileTypeInput(tableLine).sendKeys(text);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
            this.incomeFileTypeInput(tableLine).sendKeys(protractor.Key.ENTER);
        },
        typeIntoTangoIncomeTypeInput: function (text, tableLine) {
            this.tangoIncomeTypeInput(tableLine).sendKeys(text);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
            this.tangoIncomeTypeInput(tableLine).sendKeys(protractor.Key.ENTER);
        },
        clickSaveIncomeProviderButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.saveIncomeProviderButton()));
            this.saveIncomeProviderButton().click();
        },
        waitForSaveToComplete: function () {
            //   browser.isElemenetPresent(by.css('element'));
            browser.wait(ExpectedConditions.invisibilityOf(this.incomeProvidersEditView()));
            //browser.pause();
        },
        waitForActivityRecordsTable: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.activityRecordsTable()));
        },
        waitForActivityRecordsTableHeader: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.activityHeader()));
        },
        waitForEditorGeneral: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.editorGeneral()));
        },
        waitForRegRunHeader: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.regRunHeader()));
        },
        waitForElementWork: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.elementWork()));
        },
        waitForOrgToBeInvisible: function () {
            browser.wait(ExpectedConditions.invisibilityOf(this.orgTypeHeader()));
        },
        typeOrganisationNameIntoInput: function (organisationName) {
            this.searchInput().sendKeys(organisationName);
        },
        selectValueFromDropdown: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.searchTypeAheadDropdown()));
            this.searchTypeAheadDropdown().click();
        },
        selectIncomeFileType: function (fileType) {
            this.fileTypeIncomeInput().click();
            this.fileTypeIncomeInput().sendKeys(fileType);

            //   browser.wait(ExpectedConditions.visibilityOf(this.fileTypeIncomeInputDropdown()));
            this.fileTypeIncomeInput().sendKeys(protractor.Key.ENTER);
        },
        clickExecuteRegistrationRunButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.iconDownloadAlt()));
            return this.activeRegistrationRunButton().click();
        },
        confirmModalDialog: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.modalFooter()));
            //  console.log("TOTAL WORK "+this.numberOfWorks());
            hash.totalNumberOfWorks = this.numberOfWorks();
            return this.modalConfirmButton().click();
        },
        confirmSuccessModal: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.modalSuccessConfirmButton()));
            this.modalSuccessConfirmButton().click();
        },
        registrationCanBeRun: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.registrationRunButton()));
            return this.executeRegistrationIsActive();
        },
        successDialogIsPresent: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.successModalMessage()));
            return this.successModalMessage().isPresent();
        },
        resetWork: function (env, deliveryDate, name) {
            console.log("Resetting Work ");

            //http://tancrsrv.tango-qa-aws.dspdev.wmg.com:80/api/v1/workregs/reset_sent_works?recipient=BMI&runDate=2014-09-01
            var enviroinment = "http://tancrsrv.tango-qa-aws.dspdev.wmg.com:80/api/v1/workregs/reset_sent_works?";
            var recipient = "BMI";
            var runDate = "2014-09-01";


            client.request({

                url: enviroinment + "recipient=" + recipient + "&runDate=" + runDate,
                // url:"http://tancrsrv.tango-qa-aws.dspdev.wmg.com:80/api/v1/workregs/reset_sent_works?recipient=BMI&runDate=2014-09-01",
                method: 'POST' // optional
            }).then(function (response) {

                // console.log(response.getStatusCode());
                return response.getStatusCode();

            });
        },
        clickPreviewRegistrationRunTab: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
            this.previewRegistrationRunTab().click();
            return pages.base.waitForAjax();
        },
        downloadCrFile: function () {
            var button = this.downloadFileButton(),
                fileCountThen = pages.base.downloadDirectoryEntries().length;

            browser.wait(ExpectedConditions.visibilityOf(button));

            button.click();

            browser.wait(function () {
                var fileCountNow = pages.base.downloadDirectoryEntries().length;
                return fileCountNow > fileCountThen;
            });
        },
        previewRegistrationRunValidationErrorsPanel: function () {
            return $('[data-ng-switch-when="VALIDATIONS"]');
        },
        clickValidationErrorsButton: function () {
            var panel = exports.previewRegistrationRunValidationErrorsPanel();

            this.validationErrorsButton().click();

            browser.wait(ExpectedConditions.visibilityOf(panel));

            browser.wait(function () {
                return browser.executeScript(function (el) {
                    return (parseFloat(el.style.left || 0) === 0);
                }, panel.getWebElement());
            });
        },
        clickRegistrationActivityTab: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
            this.registrationActivityTab().click();

            return pages.base.waitForAjax();
        },
        clickGeneralTab: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
            this.generalTab().click();
        },
        clickCustomWorksButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.registrationRunHeader()));
            this.customWorkButton().click();
        },
        selectValueFromPopupRegRun: function (text) {
            browser.wait(ExpectedConditions.visibilityOf(this.popupRegistrationRun()));
            this.popupRegistrationLinkByText(text).click();
        },
        workHasDeliveredStatus: function () {
            return this.getStatus(this.getLastAddedWorkEvent());

            //.row-header>div>div>span>.icon-exchange  ICON
            //.row-header>div>div:nth-child(2)>p>span TOTAL WORKS TEXT
            //.row-header>div>div:nth-child(2)>div CW text
            //.row-header>div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>time delivered date
            //.row-header>div>div[data-ng-init="activityIndex = $index"]>div:nth-child(3)>time RUN DATE
        },
        clickLatestWork: function () {
            return this.getLastAddedWorkEvent().click();
        },
        getLatestWorkEvent: function () {
            this.getLastAddedWorkEvent();
        },
        testMultipleElements: function () {
            //  //*[contains(concat(" ", normalize-space(@class), " "), "e2e-delivery-method-EMAIL")]/descendant::node()

            this.getLastAddedWorkEvent();
            //.DATA-CHILD
            // var list = browser.driver.findElements(By.xpath(".//*[@id='ACTIVITY-RECORDS']"));
            //for(WebElement element: list){
            //    //print text if text not empty
            //    String text = element.getText();
            //    if(!text.isEmpty){
            //        S.O.P("Result :"+text);
            //    }
            //}
            //browser.driver.findElements(By.xpath('//*[contains(concat(" ", normalize-space(@class), " "), "e2e-delivery-method-EMAIL")]'))
            this.getEmailDeliveryMethods().then(function (result) {
                result.forEach(function (entry) {
                    entry.getText().then(function (value) {
                        console.log(value);
                    })
                });
            });
            this.getThirdPartyDeliveryMethods().then(function (result) {
                result.forEach(function (entry) {
                    entry.getText().then(function (value) {
                        console.log(value);
                    })
                });
            });
            this.getSFTPDeliveryMethods().then(function (result) {
                result.forEach(function (entry) {
                    entry.getText().then(function (value) {
                        console.log(value);
                    })
                });
            });
            this.getFTPDeliveryMethods().then(function (result) {
                result.forEach(function (entry) {
                    entry.getText().then(function (value) {
                        console.log(value);
                    })
                });
            });


            //var element = document.evaluate( '//*[contains(concat(" ", normalize-space(@class), " "), "e2e-delivery-method-EMAIL")]/descendant::*/text()' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            //
            //element.forEach(function (entry) {
            //    console.log(entry.stringValue);
            //
            //});
            //alert( 'This document contains ' + element.stringValue + ' paragraph elements' );





        },
        typeOrganisationName: function (value) {
            browser.wait(ExpectedConditions.visibilityOf(this.organisationNameInput()));
            this.organisationNameInput().sendKeys(value);

        },
        setTerritoryOfOperationToWorldWide: function () {
            this.territoryOfOperationIcon().click();
            browser.wait(ExpectedConditions.visibilityOf(this.selectAllCountriesButton()));
            this.selectAllCountriesButton().click();


        },
        typeRandomSuisaIPINumber: function (value) {

            this.suisaIPINumberInput().sendKeys(value);
        },
        randomIPINumberBasedOnDate: function () {
            // var currentdate = new Date();
            return "" + new Date().getDate() +
                +(new Date().getMonth() + 1) +
                +new Date().getFullYear() +
                +new Date().getHours() +
                +new Date().getMinutes() +
                +new Date().getSeconds();

        },

        selectAffiliatedSocietyNumber: function (value) {
            this.affiliatedSocietyInput().sendKeys(value);
            browser.wait(ExpectedConditions.visibilityOf(this.typeaheadContainer()));


            this.typeaheadInput().click();


        },
        clickPublisherType: function (value) {
            if (value == "WCM") {
                this.WCMPublisherButton().click();
            }
        }
            ,
        clickSaveOrganisationButton: function () {
            this.saveOrganisationButton().click();
        },
        isSavedPageDisplayed: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.summaryTable()));
            return this.summaryTable().isDisplayed();

        },

        getCisacNumber: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.cisacCode()));

            return this.cisacCode().getText();
        },

        subPublisherName: function (i) {
            var nameElement = this.subPublisherNameBinding(i);

            pages.base.scrollIntoView(nameElement);

            return nameElement.getText();
        }
    }
    )
    ;


}

module.exports = pages.organisation;

exports.general = (function () {
    var general = {};

    general.sectionContainer = function () {
        return $('.organisation__general_block');
    };

    general.editSectionButton = function () {
        return general.sectionContainer().$(
            '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
        );
    };

    general.editSection = function () {
        var element = general.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    general.nameInput = function () {
        return element(by.model('modularEditModels.model.name'));
    };

    general.enterName = function (value) {
        var element = general.nameInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    general.territoriesOfOperationSelector = function () {
        return element(by.model('modularEditModels.model.territoriesOfOperation'));
    };

    general.editTerritoriesOfOperation = function () {
        var element = general.territoriesOfOperationSelector();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    general.territoryOfOperationTypeaheadTag = function (value) {
        return general.territoriesOfOperationSelector().element(
            by.cssContainingText('.tg-typeahead__tag', value)
        );
    };

    general.deleteTerritoryOfOperationTypeaheadTagButton = function (element) {
        return element.$('.tg-typeahead__tag-remove');
    };

    general.deleteTerritoryOfOperation = function (value) {
        var element = general.deleteTerritoryOfOperationTypeaheadTagButton(
            general.territoryOfOperationTypeaheadTag(value)
        );

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.territoryOfOperationSearchTermsInput = function () {
        return general.territoriesOfOperationSelector().element(by.model('$term'));
    };

    general.enterTerritoryOfOperationSearchTerms = function (value) {
        var element = general.territoryOfOperationSearchTermsInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    general.territoryOfOperationSearchResults = function () {
        return general.territoriesOfOperationSelector().$$(
            '.tg-typeahead__suggestions-group-item'
        );
    };

    general.selectTerritoryOfOperationSearchResultByIndex = function (i) {
        var elements = general.territoryOfOperationSearchResults(),
            element;

        browser.wait(ExpectedConditions.visibilityOfAny(elements));
        element = elements.get(i);

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.organisationTypeButtons = function () {
        return element(by.model('modularEditModels.model.type')).$$('button');
    };

    general.selectOrganisationType = function (value) {
        var element = general.organisationTypeButtons().filter(
            pph.matchTextExact(value)
        ).first();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.publisherTypeButtons = function () {
        return element(by.model('modularEditModels.model.typeModel.publisherType')).$$(
            'button'
        );
    };

    general.selectPublisherType = function (value) {
        var element = general.publisherTypeButtons().filter(
            pph.matchTextExact(value)
        ).first();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.saveSectionButton = function () {
        return general.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    general.saveSection = function () {
        var element = general.saveSectionButton();

        pages.base.scrollIntoView(element);

        return element.click().then(function () {
            pages.base.waitForAjax();
        });
    };

    general.sectionActive = function () {
        var element = general.sectionContainer();
        pages.base.scrollIntoView(element);
        return pph.matchesCssSelector(element, '.active');
    };

    general.expectSectionToBeInViewMode = function () {
        expect(general.sectionActive()).toBeFalsy();
    };

    return general;
})();

exports.registration = (function () {
    var registration = {};

    registration.sectionContainer = function () {
        return $('.e2e-reg-delivery');
    };

    registration.editSectionButton = function () {
        return registration.sectionContainer().$(
            '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
        );
    };

    registration.editSection = function () {
        var element = registration.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    registration.isRegistrationRecipientSelect = function () {
        return $('.e2e-reg-delivery-is');
    };
    registration.acknowledgementTypeSelect = function () {
        return $('.e2e-acknowledgement-type');
    };
    registration.deliveryMethodSelect = function (i) {
        return element.all(by.model('ackMethod.type')).get(i);
    };
    registration.addressInput = function (i) {
        return $$('.e2e-acknowledgement-address input').get(i);
    };
    registration.portInput = function (i) {
        return $$('.e2e-acknowledgement-port input').get(i);
    };
    registration.usernameInput = function (i) {
        return $$('.e2e-acknowledgement-username input').get(i);
    };
    registration.passwordInput = function (i) {
        return $$('.e2e-acknowledgement-password input').get(i);
    };

    registration.selectIsRegistrationRecipient = function (value) {
        var element = registration.isRegistrationRecipientSelect();
        return element.element(
            by.cssContainingText('button', value)
        );
    };
    registration.selectAcknowledgementType = function (value) {
        var element = registration.acknowledgementTypeSelect();
        return element.element(
            by.cssContainingText('button', value)
        );
    };
    registration.selectDeliveryMethod = function (i, value) {
        var element = registration.deliveryMethodSelect(i);
        return element.all(
            by.cssContainingText('button', value)
        ).get(0).click();
    };
    registration.enterAddress = function (i, value) {
        var element = registration.addressInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };
    registration.enterPort = function (i, value) {
        var element = registration.portInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };
    registration.enterUsername = function (i, value) {
        var element = registration.usernameInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };
    registration.enterPassword = function (i, value) {
        var element = registration.passwordInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    registration.saveSectionButton = function () {
        return registration.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    registration.saveSection = function () {
        var element = registration.saveSectionButton();
        pages.base.scrollIntoView(element);
        return element.click().then(function () {
            pages.base.waitForAjax();
        });
    };

    registration.sectionActive = function () {
        var element = registration.sectionContainer();
        pages.base.scrollIntoView(element);
        return pph.matchesCssSelector(element, '.active');
    };

    registration.expectSectionToBeInViewMode = function () {
        expect(registration.sectionActive()).toBeFalsy();
    };

    return registration;
})();

exports.incomeProvider = (function () {
    var incomeProvider = {};

    incomeProvider.sectionContainer = function () {
        return $('.organisation__income-provider_block');
    };

    incomeProvider.editSectionButton = function () {
        return incomeProvider.sectionContainer().$(
            '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
        );
    };

    incomeProvider.editSection = function () {
        var element = incomeProvider.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    incomeProvider.primaryTerritoryOfOperationDropdown = function () {
        return element(by.model(
            'modularEditModels.model.primaryTerritoryOfOperation'
        ));
    };

    incomeProvider.primaryTerritoryOfOperationOption = function (value) {
        return element(by.cssContainingText('.dropdown-menu li', value));
    };

    incomeProvider.selectPrimaryTerritoryOfOperation = function (value) {
        var dropdown = incomeProvider.primaryTerritoryOfOperationDropdown();
        var option = incomeProvider.primaryTerritoryOfOperationOption(value);

        dropdown.click();

        pages.base.scrollIntoView(option);

        return option.click();
    };

    incomeProvider.defaultCurrencyDropdown = function () {
        return element(by.model('modularEditModels.model.currencyCode'));
    };

    incomeProvider.defaultCurrencyOption = function (value) {
        return element(by.cssContainingText('.dropdown-menu li', value));
    };

    incomeProvider.selectDefaultCurrency = function (value) {
        var dropdown = incomeProvider.defaultCurrencyDropdown();
        var option = incomeProvider.defaultCurrencyOption(value);

        dropdown.click();

        pages.base.scrollIntoView(option);

        return option.click();
    };

    incomeProvider.incomeFileTypeTypeahead = function () {
        return element(by.model('modularEditModels.model.incomeFileTypes'));
    };

    incomeProvider.incomeFileTypeTypeaheadTag = function (value) {
        return incomeProvider.incomeFileTypeTypeahead().element(
            by.cssContainingText('.tg-typeahead__tag', value)
        );
    };

    incomeProvider.deleteIncomeFileTypeButton = function (element) {
        return element.$('.tg-typeahead__tag-remove');
    };

    incomeProvider.deleteIncomeFileType = function (value) {
        var element = incomeProvider.deleteIncomeFileTypeButton(
            incomeProvider.incomeFileTypeTypeaheadTag(value)
        );

        pages.base.scrollIntoView(element);

        return element.click();
    };

    incomeProvider.incomeFileTypeSearchTermsInput = function () {
        return incomeProvider.incomeFileTypeTypeahead().element(by.model('$term'));
    };

    incomeProvider.enterIncomeFileTypeSearchTerms = function (value) {
        var element = incomeProvider.incomeFileTypeSearchTermsInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    incomeProvider.incomeFileTypeSearchResults = function (more) {
        var elements = $$('.tg-typeahead__suggestions-group-item');

        if (!more || !more.dontWait) {
            browser.wait(ExpectedConditions.visibilityOfAny(elements));
        }

        return elements;
    };

    incomeProvider.selectIncomeFileTypeSearchResultByIndex = function (i) {
        var element = incomeProvider.incomeFileTypeSearchResults().get(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    incomeProvider.incomeTypeMapping = (function () {
        var mapping = {};

        mapping.rows = function () {
            return $$('.e2e-income-provider-mapping');
        };

        mapping.deleteRowButton = function (i) {
            return mapping.rows().get(i).$('.e2e-mapping-remove');
        };

        mapping.deleteRow = function (i) {
            var element = mapping.deleteRowButton(i);
            pages.base.scrollIntoView(element);
            return element.click();
        };

        mapping.inboundIncomeTypeInput = function (i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileIncomeType'
            ));
        };

        mapping.enterInboundIncomeType = function (i, value) {
            var element = mapping.inboundIncomeTypeInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.inboundIncomeTypeDescriptionInput = function (i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileIncomeDesc'
            ));
        };

        mapping.enterInboundIncomeTypeDescription = function (i, value) {
            var element = mapping.inboundIncomeTypeDescriptionInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.incomeFileTypeTypeahead = function (i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileFormat'
            ));
        };

        mapping.incomeFileTypeSearchTermsInput = function (i) {
            return mapping.incomeFileTypeTypeahead(i).element(by.model('$term'));
        };

        mapping.enterIncomeFileTypeSearchTerms = function (i, value) {
            var element = mapping.incomeFileTypeSearchTermsInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.incomeFileTypeSearchResults = function (more) {
            var elements = $$('.tg-typeahead__suggestions-group-item');

            if (!more || !more.dontWait) {
                browser.wait(ExpectedConditions.visibilityOfAny(elements));
            }

            return elements;
        };

        mapping.selectIncomeFileTypeSearchResultByIndex = function (i) {
            var element = mapping.incomeFileTypeSearchResults().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        };

        mapping.tangoIncomeTypeTypeahead = function (i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.internalIncomeType'
            ));
        };

        mapping.tangoIncomeTypeSearchTermsInput = function (i) {
            return mapping.tangoIncomeTypeTypeahead(i).element(by.model('$term'));
        };

        mapping.enterTangoIncomeTypeSearchTerms = function (i, value) {
            var element = mapping.tangoIncomeTypeSearchTermsInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.tangoIncomeTypeSearchResults = function (more) {
            var elements = $$('.tg-typeahead__suggestions-group-item');

            if (!more || !more.dontWait) {
                browser.wait(ExpectedConditions.visibilityOfAny(elements));
            }

            return elements;
        };

        mapping.selectTangoIncomeTypeSearchResultByIndex = function (i) {
            var element = mapping.tangoIncomeTypeSearchResults().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        };

        mapping.toArray = function () {
            var rows = mapping.rows();

            return rows.map(function (row) {
                return {
                    inboundIncomeType: row.$('.e2e-mapping-type input').getAttribute('value'),
                    description: row.$('.e2e-mapping-description input').getAttribute('value'),
                    fileType: row.$('.e2e-mapping-file-type input').getAttribute('value'),
                    internalIncomeType: row.$('.e2e-mapping-internal-type input').getAttribute('value'),
                }
            });
        };

        mapping.addFromObject = function (obj) {
            var rows = mapping.rows();

            rows.count().then(function (num) {
                var lastRow = num - 1;

                mapping.enterInboundIncomeType(lastRow, obj.inboundIncomeType);
                mapping.enterInboundIncomeTypeDescription(lastRow, obj.description);

                mapping.enterIncomeFileTypeSearchTerms(lastRow, obj.fileType);
                mapping.selectIncomeFileTypeSearchResultByIndex(0);

                mapping.enterTangoIncomeTypeSearchTerms(lastRow, obj.internalIncomeType);
                mapping.selectTangoIncomeTypeSearchResultByIndex(0);
            });
        };

        mapping.addIfNotPresent = function (data) {
            mapping.addIfNoneMatch(data, data);
        };

        mapping.addIfNoneMatch = function (matchObj, data) {
            if (!_.isArray(data)) {
                data = [data];
            }

            mapping.toArray().then(function (rows) {
                _.each(data, function (obj) {
                    var isMappingPresent = _.find(rows, matchObj);

                    if (!isMappingPresent) {
                        mapping.addFromObject(obj);
                    }
                });
            });
        };

        var INVALID_TAG = '_TAT_INVALID';

        mapping.changeInboundIncomeType = function (code, newCode) {
            code = code.toString();

            var rows = mapping.rows().$$('.e2e-mapping-type input').filter(function(row){
                return row.getAttribute('value').then(function(value){
                    return (value === code) || (value === code + INVALID_TAG);
                });
            });

            rows.each(function(input){
                input.clear();
                input.sendKeys(newCode);
            });
        };

        mapping.makeIncomeTypeMappingBeInvalid = function (code){
            mapping.changeInboundIncomeType(code, code + INVALID_TAG);
        };

        mapping.makeIncomeTypeMappingBeValid = function (code){
            mapping.changeInboundIncomeType(code + INVALID_TAG, code);
        };

        return mapping;
    })();

    incomeProvider.saveSectionButton = function () {
        return incomeProvider.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    incomeProvider.saveSection = function () {
        var element = incomeProvider.saveSectionButton();

        pages.base.scrollIntoView(element);

        return element.click().then(function () {
            pages.base.waitForAjax();
        });
    };

    incomeProvider.sectionActive = function () {
        var element = incomeProvider.sectionContainer();
        pages.base.scrollIntoView(element);
        return pph.matchesCssSelector(element, '.active');
    };

    incomeProvider.expectSectionToBeInViewMode = function () {
        expect(incomeProvider.sectionActive()).toBeFalsy();
    };

    incomeProvider.checkOrAddIncomeFileType = function (fileType) {
        var typeahead = incomeProvider.incomeFileTypeTypeahead();

        typeahead.all(by.cssContainingText('.tg-typeahead__tag', fileType)).count().then(function (num) {
            if (!num) {
                incomeProvider.enterIncomeFileTypeSearchTerms(fileType);
                incomeProvider.selectIncomeFileTypeSearchResultByIndex(0);
            }
        });
    };

    incomeProvider.expectIncomeTypeMappingsToBeValid = function () {
        var validationMessage = incomeProvider.sectionContainer().$$('.validation-message-text');

        expect(validationMessage.count()).toBeFalsy();
    };

    return incomeProvider;
})();

exports.subPublishers = (function () {
    var subPublishers = {};

    subPublishers.expectNameToBeEither = function (i, values) {
        expect(values).toContain(exports.subPublisherName(i));
    };

    return subPublishers;
})();

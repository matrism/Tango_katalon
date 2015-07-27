"use strict";
var client = require('http-api-client');
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.organisation === undefined) {


    pages.organisation = new ftf.pageObject({
            url: _tf_config.urls.app_url + "#/create/deal",
            locators: {},


            incomeProviderControls: function () {

                return element(by.css(".income-provider-section>div>.CONTROLS"));
            }
            ,
            fileTypeIncomeInput: function () {
                return element(by.css(".default"));

            }
            ,
            activityRecordsTable: function () {
                return $("#ACTIVITY-RECORDS");
            },
            editorGeneral: function () {
                return $("#editor-general");
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
            }
            ,
            typeaheadInput: function () {

                return element(by.css(".typeahead-result"));
            },

            navigationTab: function () {
                return $(".nav-tabs");
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
                return    event.$$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>span').first().getText();



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
            }
            ,
            clickUnmaskPasswordButton: function (deliveryMethod) {
                return this.sftpUnmaskPasswordButton(deliveryMethod).click();
            },
            getSFTPPassword: function (deliveryMethod) {


                    return this.sftpPassword(deliveryMethod).getText();


            }
            ,
            getSFTPFileFormat: function (deliveryMethod) {

                return this.sftpFileFormat(deliveryMethod).getText();

            },
            getSFTPFileFormatStatus: function (deliveryMethod) {
                return this.sftpFileFormatStatus(deliveryMethod).getText();
            }
            ,
            getSFTPDeliveryNotificationStatus: function (deliveryMethod) {
                return this.sftpDeliveryNotificationStatus(deliveryMethod).getText();
            },
            getSFTPDeliveryNotificationStatusEmail: function (deliveryMethod) {
                return this.sfptDeliveryStatusEmail(deliveryMethod).getText();

            },
            getSFTPDeliveryNotificationStatusCC: function (deliveryMethod) {
                return this.sftpDeliveryStatusCC(deliveryMethod).getText();

            }
            ,
            getEmailDeliveryMethodEmail: function (deliveryMethod) {
                return deliveryMethod.$('div:nth-child(1)>.controls>strong').getText();

            }
            ,
            getEmailDeliveryMethodCC: function (deliveryMethod) {
                return deliveryMethod.$('div:nth-child(1)>div>[data-ng-show="dm.delivery_mechanism.cc_emails"]').getText();
            }
            ,
            getEmailDeliveryMethodFileFormat: function (deliveryMethod) {
                return deliveryMethod.$('div:nth-child(3)>.controls>strong').getText();
            }
            ,
            getEmailDeliveryMethodNotification: function (deliveryMethod) {
                return deliveryMethod.$$('div:nth-child(5)>.controls >span').first().getText();
            }
            ,
            numberOfWorks: function () {
                var number = parseInt(this.textWithTotalWorksNumber(), 10);
              // console.log("Number of works" + this.textWithTotalWorksNumber());
                return number;


            }
            ,

            executeRegistrationIsActive: function () {
                return this.activeRegistrationRunButton().isPresent();
            }
            ,


            clickIncomeProviderSection: function () {




                //  ftf.helper.waitForElement(this.incomeProviderSection(), 30000);

                browser.wait(ExpectedConditions.visibilityOf(pages.organisation.incomeProviderSection()));
                //browser.wait(ExpectedConditions.visibilityOf(this.generalOrganisationSection()));

                //    this.scopeHeading().click()

                pages.base.scrollIntoView(this.incomeProviderSection());
                this.incomeProviderSection().click();
            }
            ,

            clickincomeProviderSectionEdit: function () {

                //browser.wait(ExpectedConditions.visibilityOf(this.incomeProviderSectionEdit()));

                // ftf.helper.waitForElement(this.incomeProviderSectionEdit(), 30000);

                this.incomeProviderSectionEdit().click();
            }
            ,


            typeIntoInboundIncomeTypeInput: function (text, tableLine) {


                browser.wait(ExpectedConditions.visibilityOf(pages.organisation.inboundIncomeTypeInput(tableLine)));
                this.inboundIncomeTypeInput(tableLine).sendKeys(text);
                //  pages.base.scrollIntoView(  this.inboundIncomeTypeInput);


            }
            ,
            typeIntoInboundIncomeTypeDescriptionInput: function (text, tableLine) {
                this.inboundIncomeTypeDescriptionInput(tableLine).sendKeys(text);
            }
            ,
            typeIntoIncomeFileTypeInput: function (text, tableLine) {
                this.incomeFileTypeInput(tableLine).sendKeys(text);
                browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
                this.incomeFileTypeInput(tableLine).sendKeys(protractor.Key.ENTER);
            }
            ,
            typeIntoTangoIncomeTypeInput: function (text, tableLine) {
                this.tangoIncomeTypeInput(tableLine).sendKeys(text);
                browser.wait(ExpectedConditions.visibilityOf(this.typeaheadInput()));
                this.tangoIncomeTypeInput(tableLine).sendKeys(protractor.Key.ENTER);
            }
            ,
            clickSaveIncomeProviderButton: function () {


                browser.wait(ExpectedConditions.visibilityOf(this.saveIncomeProviderButton()));
                this.saveIncomeProviderButton().click();
            }
            ,
            waitForSaveToComplete: function () {

                //   browser.isElemenetPresent(by.css('element'));


                browser.wait(ExpectedConditions.invisibilityOf(this.incomeProvidersEditView()));
                //browser.pause();

            }

            ,
            waitForActivityRecordsTable: function () {

                browser.wait(ExpectedConditions.visibilityOf(this.activityRecordsTable()));
            }
            ,
            waitForActivityRecordsTableHeader: function () {

                browser.wait(ExpectedConditions.visibilityOf(this.activityHeader()));
            }
            ,
            waitForEditorGeneral: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.editorGeneral()));

            }
            ,
        waitForElementWork: function () {
            browser.wait(ExpectedConditions.visibilityOf(this.elementWork()));
        },
        waitForOrgToBeInvisible: function () {
            browser.wait(ExpectedConditions.invisibilityOf(this.orgTypeHeader()));
        },


            typeOrganisationNameIntoInput: function (organisationName) {

                this.searchInput().sendKeys(organisationName);

            }
            ,

            selectValueFromDropdown: function () {


                browser.wait(ExpectedConditions.visibilityOf(this.searchTypeAheadDropdown()));
                this.searchTypeAheadDropdown().click();


            }


            ,


            selectIncomeFileType: function (fileType) {

                this.fileTypeIncomeInput().click();
                this.fileTypeIncomeInput().sendKeys(fileType);

                //   browser.wait(ExpectedConditions.visibilityOf(this.fileTypeIncomeInputDropdown()));
                this.fileTypeIncomeInput().sendKeys(protractor.Key.ENTER);


            }
            ,
            clickExecuteRegistrationRunButton: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.iconDownloadAlt()));
             return   this.activeRegistrationRunButton().click();
            }
            ,
            confirmModalDialog: function () {

                browser.wait(ExpectedConditions.visibilityOf(this.modalFooter()));
              //  console.log("TOTAL WORK "+this.numberOfWorks());
                hash.totalNumberOfWorks = this.numberOfWorks();
                  return this.modalConfirmButton().click();
            },
            confirmSuccessModal: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.modalSuccessConfirmButton()));
                this.modalSuccessConfirmButton().click();
            }
            ,
            registrationCanBeRun: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.registrationRunButton()));
                return this.executeRegistrationIsActive();
            }
            ,
            successDialogIsPresent: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.successModalMessage()));
                return this.successModalMessage().isPresent();
            }
            ,

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
            }
            ,
            clickPreviewRegistrationRunTab: function () {

                browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
                this.previewRegistrationRunTab().click();
            }
            ,
            clickRegistrationActivityTab: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
                this.registrationActivityTab().click();
            }
            ,
            clickGeneralTab: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
                this.generalTab().click();
            }
            ,
            clickCustomWorksButton: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.registrationRunHeader()));
                this.customWorkButton().click();
            }
            ,
            selectValueFromPopupRegRun: function (text) {
                browser.wait(ExpectedConditions.visibilityOf(this.popupRegistrationRun()));
                this.popupRegistrationLinkByText(text).click();
            }
            ,

            workHasDeliveredStatus: function () {


                return this.getStatus(this.getLastAddedWorkEvent());

                //.row-header>div>div>span>.icon-exchange  ICON
                //.row-header>div>div:nth-child(2)>p>span TOTAL WORKS TEXT
                //.row-header>div>div:nth-child(2)>div CW text
                //.row-header>div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>time delivered date
                //.row-header>div>div[data-ng-init="activityIndex = $index"]>div:nth-child(3)>time RUN DATE

            }
            ,
            clickLatestWork: function () {
              return   this.getLastAddedWorkEvent().click();
            }
            ,
            getLatestWorkEvent: function () {
                this.getLastAddedWorkEvent();
            }


        }
    )
    ;


}

module.exports = pages.organisation;
"use strict";

var pph = require('../helpers/pph');

require(pages_path + 'base');

var client = require('http-api-client');
var fs = require('fs');
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.organisation === undefined) {


    pages.organisation = exports = new ftf.pageObject({
            url: _tf_config.urls.app_url + "#/create/org",
            locators: {},
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

        subPublisherRelationshipContainers: function() {
            return $$('.e2e-sub-publisher');
        },

        subPublisherNameBinding: function(i) {
            return this.subPublisherRelationshipContainers().get(i).$(
                '.e2e-sub-publisher-def .ng-binding'
            );
        },



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
            }
            ,
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
                return pages.base.waitForAjax();
            }
            ,

        downloadCrFile: function () {
            var button = this.downloadFileButton(),
                fileCountThen = pages.base.downloadDirectoryEntries().length;

            browser.wait(ExpectedConditions.visibilityOf(button));

            button.click();

            browser.wait(function() {
                var fileCountNow = pages.base.downloadDirectoryEntries().length;
                return fileCountNow > fileCountThen;
            });
        },
        previewRegistrationRunValidationErrorsPanel: function() {
            return $('[data-ng-switch-when="VALIDATIONS"]');
        },
        clickValidationErrorsButton: function () {
            var panel = exports.previewRegistrationRunValidationErrorsPanel();

            this.validationErrorsButton().click();

            browser.wait(ExpectedConditions.visibilityOf(panel));

            browser.wait(function() {
                return browser.executeScript(function(el) {
                    return (parseFloat(el.style.left || 0) === 0);
                }, panel.getWebElement());
            });
        },
            clickRegistrationActivityTab: function () {
                browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
                this.registrationActivityTab().click();

                return pages.base.waitForAjax();
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
                    result.forEach(function(entry) {
                        entry.getText().then(function (value) {
                            console.log(value);
                        })
                    });
                });
                this.getThirdPartyDeliveryMethods().then(function (result) {
                    result.forEach(function(entry) {
                        entry.getText().then(function (value) {
                            console.log(value);
                        })
                    });
                });
                this.getSFTPDeliveryMethods().then(function (result) {
                    result.forEach(function(entry) {
                        entry.getText().then(function (value) {
                            console.log(value);
                        })
                    });
                });
                this.getFTPDeliveryMethods().then(function (result) {
                    result.forEach(function(entry) {
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
                browser.wait(ExpectedConditions.visibilityOf(  this.organisationNameInput()));
                this.organisationNameInput().sendKeys(value);
                
            },
            setTerritoryOfOperationToWorldWide: function () {
                this.territoryOfOperationIcon().click();
                browser.wait(ExpectedConditions.visibilityOf(  this.selectAllCountriesButton()));
                    this.selectAllCountriesButton().click();


            },
            typeRandomSuisaIPINumber: function (value) {

                this.suisaIPINumberInput().sendKeys(value);
            },
            randomIPINumberBasedOnDate: function () {
               // var currentdate = new Date();
                return "" + new Date().getDate() +
                    + (new Date().getMonth()+1)  +
                    + new Date().getFullYear() +
                    + new Date().getHours() +
                    + new Date().getMinutes() +
                    + new Date().getSeconds();

            },

            selectAffiliatedSocietyNumber: function (value) {
                this.affiliatedSocietyInput().sendKeys(value);
                browser.wait(ExpectedConditions.visibilityOf(  this.typeaheadContainer()));


                    this.typeaheadInput().click();


            },
            clickPublisherType: function (value) {
                if(value == "WCM")
                {
                    this.WCMPublisherButton().click();
                }
            }
            ,
            clickSaveOrganisationButton: function () {
                this.saveOrganisationButton().click();
            },
            isSavedPageDisplayed: function () {
                browser.wait(ExpectedConditions.visibilityOf(  this.summaryTable()));
                return this.summaryTable().isDisplayed();

            },

            getCisacNumber: function () {
                browser.wait(ExpectedConditions.visibilityOf(  this.cisacCode()));

                return this.cisacCode().getText();
            },

            subPublisherName: function(i) {
                var nameElement = this.subPublisherNameBinding(i);

                pages.base.scrollIntoView(nameElement);

                return nameElement.getText();
            }
        }
    )
    ;


}

module.exports = pages.organisation;

exports.general = (function() {
    var general = {};

    general.sectionContainer = function() {
        return $('.organisation__general_block');
    };

    general.editSectionButton = function() {
        return general.sectionContainer().$(
            '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
        );
    };

    general.editSection = function() {
        var element = general.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    general.nameInput = function() {
        return element(by.model('modularEditModels.model.name'));
    };

    general.enterName = function(value) {
        var element = general.nameInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    general.territoriesOfOperationSelector = function() {
        return element(by.model('modularEditModels.model.territoriesOfOperation'));
    };

    general.editTerritoriesOfOperation = function() {
        var element = general.territoriesOfOperationSelector();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    general.territoryOfOperationTypeaheadTag = function(value) {
        return general.territoriesOfOperationSelector().element(
            by.cssContainingText('.tg-typeahead__tag', value)
        );
    };

    general.deleteTerritoryOfOperationTypeaheadTagButton = function(element) {
        return element.$('.tg-typeahead__tag-remove');
    };

    general.deleteTerritoryOfOperation = function(value) {
        var element = general.deleteTerritoryOfOperationTypeaheadTagButton(
            general.territoryOfOperationTypeaheadTag(value)
        );

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.territoryOfOperationSearchTermsInput = function() {
        return general.territoriesOfOperationSelector().element(by.model('$term'));
    };

    general.enterTerritoryOfOperationSearchTerms = function(value) {
        var element = general.territoryOfOperationSearchTermsInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    general.territoryOfOperationSearchResults = function() {
        return general.territoriesOfOperationSelector().$$(
            '.tg-typeahead__suggestions-group-item'
        );
    };

    general.selectTerritoryOfOperationSearchResultByIndex = function(i) {
        var elements = general.territoryOfOperationSearchResults(),
            element;

        browser.wait(ExpectedConditions.visibilityOfAny(elements));
        element = elements.get(i);

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.organisationTypeButtons = function() {
        return element(by.model('modularEditModels.model.type')).$$('button');
    };

    general.selectOrganisationType = function(value) {
        var element = general.organisationTypeButtons().filter(
            pph.matchTextExact(value)
        ).first();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.publisherTypeButtons = function() {
        return element(by.model('modularEditModels.model.typeModel.publisherType')).$$(
            'button'
        );
    };

    general.selectPublisherType = function(value) {
        var element = general.publisherTypeButtons().filter(
            pph.matchTextExact(value)
        ).first();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.saveSectionButton = function() {
        return general.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    general.saveSection = function() {
        var element = general.saveSectionButton();

        pages.base.scrollIntoView(element);

        return element.click().then(function() {
            pages.base.waitForAjax();
        });
    };

    general.sectionActive = function() {
        var element = general.sectionContainer();
        pages.base.scrollIntoView(element);
        return pph.matchesCssSelector(element, '.active');
    };

    general.expectSectionToBeInViewMode = function() {
        expect(general.sectionActive()).toBeFalsy();
    };

    return general;
})();

exports.incomeProvider = (function() {
    var incomeProvider = {};

    incomeProvider.sectionContainer = function() {
        return $('.organisation__income-provider_block');
    };

    incomeProvider.editSectionButton = function() {
        return incomeProvider.sectionContainer().$(
            '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
        );
    };

    incomeProvider.editSection = function() {
        var element = incomeProvider.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    incomeProvider.primaryTerritoryOfOperationDropdown = function() {
        return element(by.model(
            'modularEditModels.model.primaryTerritoryOfOperation'
        ));
    };

    incomeProvider.primaryTerritoryOfOperationOption = function(value) {
        return element(by.cssContainingText('.dropdown-menu li', value));
    };

    incomeProvider.selectPrimaryTerritoryOfOperation = function(value) {
        var dropdown = incomeProvider.primaryTerritoryOfOperationDropdown();
        var option = incomeProvider.primaryTerritoryOfOperationOption(value);

        dropdown.click();

        pages.base.scrollIntoView(option);

        return option.click();
    };

    incomeProvider.defaultCurrencyDropdown = function() {
        return element(by.model('modularEditModels.model.currencyCode'));
    };

    incomeProvider.defaultCurrencyOption = function(value) {
        return element(by.cssContainingText('.dropdown-menu li', value));
    };

    incomeProvider.selectDefaultCurrency = function(value) {
        var dropdown = incomeProvider.defaultCurrencyDropdown();
        var option = incomeProvider.defaultCurrencyOption(value);

        dropdown.click();

        pages.base.scrollIntoView(option);

        return option.click();
    };

    incomeProvider.incomeFileTypeTypeahead = function() {
        return element(by.model('modularEditModels.model.incomeFileTypes'));
    };

    incomeProvider.incomeFileTypeTypeaheadTag = function(value) {
        return incomeProvider.incomeFileTypeTypeahead().element(
            by.cssContainingText('.tg-typeahead__tag', value)
        );
    };

    incomeProvider.deleteIncomeFileTypeButton = function(element) {
        return element.$('.tg-typeahead__tag-remove');
    };

    incomeProvider.deleteIncomeFileType = function(value) {
        var element = incomeProvider.deleteIncomeFileTypeButton(
            incomeProvider.incomeFileTypeTypeaheadTag(value)
        );

        pages.base.scrollIntoView(element);

        return element.click();
    };

    incomeProvider.incomeFileTypeSearchTermsInput = function() {
        return incomeProvider.incomeFileTypeTypeahead().element(by.model('$term'));
    };

    incomeProvider.enterIncomeFileTypeSearchTerms = function(value) {
        var element = incomeProvider.incomeFileTypeSearchTermsInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    incomeProvider.incomeFileTypeSearchResults = function(more) {
        var elements = $$('.tg-typeahead__suggestions-group-item');

        if(!more || !more.dontWait) {
            browser.wait(ExpectedConditions.visibilityOfAny(elements));
        }

        return elements;
    };

    incomeProvider.selectIncomeFileTypeSearchResultByIndex = function(i) {
        var element = incomeProvider.incomeFileTypeSearchResults().get(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    incomeProvider.incomeTypeMapping = (function() {
        var mapping = {};

        mapping.rows = function() {
            return $$('.e2e-income-provider-mapping');
        };

        mapping.deleteRowButton = function(i) {
            return mapping.rows().get(i).$('.e2e-mapping-remove');
        };

        mapping.deleteRow = function(i) {
            var element = mapping.deleteRowButton(i);
            pages.base.scrollIntoView(element);
            return element.click();
        };

        mapping.inboundIncomeTypeInput = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileIncomeType'
            ));
        };

        mapping.enterInboundIncomeType = function(i, value) {
            var element = mapping.inboundIncomeTypeInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.inboundIncomeTypeDescriptionInput = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileIncomeDesc'
            ));
        };

        mapping.enterInboundIncomeTypeDescription = function(i, value) {
            var element = mapping.inboundIncomeTypeDescriptionInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.incomeFileTypeTypeahead = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileFormat'
            ));
        };

        mapping.incomeFileTypeSearchTermsInput = function(i) {
            return mapping.incomeFileTypeTypeahead(i).element(by.model('$term'));
        };

        mapping.enterIncomeFileTypeSearchTerms = function(i, value) {
            var element = mapping.incomeFileTypeSearchTermsInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.incomeFileTypeSearchResults = function(more) {
            var elements = $$('.tg-typeahead__suggestions-group-item');

            if(!more || !more.dontWait) {
                browser.wait(ExpectedConditions.visibilityOfAny(elements));
            }

            return elements;
        };

        mapping.selectIncomeFileTypeSearchResultByIndex = function(i) {
            var element = mapping.incomeFileTypeSearchResults().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        };

        mapping.tangoIncomeTypeTypeahead = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.internalIncomeType'
            ));
        };

        mapping.tangoIncomeTypeSearchTermsInput = function(i) {
            return mapping.tangoIncomeTypeTypeahead(i).element(by.model('$term'));
        };

        mapping.enterTangoIncomeTypeSearchTerms = function(i, value) {
            var element = mapping.tangoIncomeTypeSearchTermsInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        mapping.tangoIncomeTypeSearchResults = function(more) {
            var elements = $$('.tg-typeahead__suggestions-group-item');

            if(!more || !more.dontWait) {
                browser.wait(ExpectedConditions.visibilityOfAny(elements));
            }

            return elements;
        };

        mapping.selectTangoIncomeTypeSearchResultByIndex = function(i) {
            var element = mapping.tangoIncomeTypeSearchResults().get(i);
            pages.base.scrollIntoView(element);
            return element.click();
        };

        return mapping;
    })();

    incomeProvider.saveSectionButton = function() {
        return incomeProvider.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    incomeProvider.saveSection = function() {
        var element = incomeProvider.saveSectionButton();

        pages.base.scrollIntoView(element);

        return element.click().then(function() {
            pages.base.waitForAjax();
        });
    };

    incomeProvider.sectionActive = function() {
        var element = incomeProvider.sectionContainer();
        pages.base.scrollIntoView(element);
        return pph.matchesCssSelector(element, '.active');
    };

    incomeProvider.expectSectionToBeInViewMode = function() {
        expect(incomeProvider.sectionActive()).toBeFalsy();
    };

    return incomeProvider;
})();

exports.subPublishers = (function() {
    var subPublishers = {};

    subPublishers.expectNameToBeEither = function(i, values) {
        expect(values).toContain(exports.subPublisherName(i));
    };

    return subPublishers;
})();

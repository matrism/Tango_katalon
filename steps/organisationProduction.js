'use strict';

var pageStep = require('../helpers/basicPageStep'),
    page = require(pages_path + 'organisationProduction');

var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

beforeEach(function () {
    var matchers = {
        toEqualBecause: function (value, message) {
            this.message = function () {
                return "Expected '" + this.actual + "' to equal '" + value + "' because " + message;
            };

            return this.actual === value;
        }
    };

    this.addMatchers(matchers);
});
if (steps.organisationProduction === undefined) {
    steps.organisationProduction = exports = {


        addIncomeProvidersToOrganisation: function (table, message) {


            var fields = table.shift();
            var tableLine = 1;
            _.each(table, function (row, index) {

                    var inboundIncomeType = row[0],
                        inboundIncomeTypeDescription = row[1],
                        incomeFileType = row[2],
                        tangoIncomeType = row[3]

                        ;
                    var consoleMessage;


                    consoleMessage = message.replace("%InboundIncomeType%", inboundIncomeType);
                    consoleMessage = consoleMessage.replace("%InboundIncomeTypeDescription%", inboundIncomeTypeDescription);
                    consoleMessage = consoleMessage.replace("%IncomeFileType%", incomeFileType);
                    consoleMessage = consoleMessage.replace("%TangoIncomeType%", tangoIncomeType);


                    it(consoleMessage, function () {


                            //  pages.organisationProduction.fillIncomeProvider(inboundIncomeType,inboundIncomeTypeDescription,incomeFileType,tangoIncomeType);


                            pages.organisationProduction.typeIntoInboundIncomeTypeInput(inboundIncomeType, tableLine);

                            pages.organisationProduction.typeIntoInboundIncomeTypeDescriptionInput(inboundIncomeTypeDescription, tableLine);

                            pages.organisationProduction.typeIntoIncomeFileTypeInput(incomeFileType, tableLine);

                            pages.organisationProduction.typeIntoTangoIncomeTypeInput(tangoIncomeType, tableLine);

                            tableLine++;


                        }
                    );


                }
            )
        }
        ,
        openIncomeProviderEdit: function () {


            it("Open Income Provider Section for Editing", function () {


                pages.organisationProduction.clickIncomeProviderSection();

                pages.organisationProduction.clickincomeProviderSectionEdit();


            });


        }
        ,
        saveIncomeProviders: function () {

            it("Save edited Income Providers", function () {

                pages.organisationProduction.clickSaveIncomeProviderButton();


            })

        },

        waitForProvidersSaveToComplete: function () {
            it("Waits for save to complete", function () {

                pages.organisationProduction.waitForSaveToComplete();

            })


        },
        chooseIncomeFileType: function (fileType) {
            it("Choose " + fileType + "Income File Type", function () {

                pages.organisationProduction.selectIncomeFileType(fileType);


            })


        }
        ,
        executeRegistrationRun: function (value) {
            it("Execute Registration Run", function () {
                pages.organisationProduction.registrationCanBeRun().then(function (isVisible) {
                    //  console.log("Is visible"+isVisible);


                    if (isVisible.toString() == "true") {


                        pages.organisationProduction.clickExecuteRegistrationRunButton();

                        pages.organisationProduction.confirmModalDialog().then(function () {
                            browser.wait(ExpectedConditions.visibilityOf(pages.organisationProduction.successModalMessage()));
                            pages.organisationProduction.confirmSuccessModal();
                            //    expect(pages.organisationProduction.successDialogIsPresent()).toBeTruthy();
                        });

                        // expect(pages.organisationProduction.successDialogIsPresent()).toBeTruthy();
                    }
                    else {
                        // console.log(pages.organisationProduction.registrationCanBeRun().toString());
                        //while (pages.organisationProduction.resetWork() == "202" &&
                        //pages.organisationProduction.registrationCanBeRun().then(function (isVisible) {
                        //    console.log(isVisible.toString());
                        //    return isVisible.toString() == "false";
                        //
                        //}))
                        {
                            //  expect(pages.organisationProduction.resetWork()).toBe("");
                            pages.organisationProduction.resetWork();


                            browser.driver.sleep(15000);
                            pages.base.refresh();
                            pages.organisationProduction.clickCustomWorksButton();
                            pages.organisationProduction.selectValueFromPopupRegRun(value);
                            pages.organisationProduction.clickExecuteRegistrationRunButton();
                            pages.organisationProduction.confirmModalDialog().then(function () {
                                browser.wait(ExpectedConditions.visibilityOf(pages.organisationProduction.successModalMessage()));
                                pages.organisationProduction.confirmSuccessModal();
                                browser.driver.sleep(5000);

                                //      expect(pages.organisationProduction.successDialogIsPresent()).toBeTruthy();
                            });

                        }
                    }


                })
            })
        }
        ,
        goToPreviewRegistrationRunTab: function () {
            it("Go to Preview Registration Run Tab", function () {
                pages.organisationProduction.clickPreviewRegistrationRunTab();
            })
        }

        ,
        viewValidationErrors: function () {
            it("View validation errors", function () {
                pages.organisationProduction.clickValidationErrorsButton();
            })
        },
        clearDownloadFolder: function (downloadFilepath) {
            it("Clear Download Folder", function () {
                pages.organisationProduction.deleteFilesFromDownloadFolder(downloadFilepath);


            })
        },
        downloadFile:function()
        {
            it("Download File", function () {
                pages.organisationProduction.clickDownloadFileButton();
                pages.organisationProduction.waitForFileToDownload();

            })

        },
        validateFilesDownloaded: function (downloadFilepath) {
            it("Files Downloaded Successfully", function () {

                expect(pages.organisationProduction.fileDownloadedSuccesfully(downloadFilepath)).toBeTruthy();
            })
        },
        goToRegistrationActivityTab: function () {
            it("Go to Registration ActivityTab", function () {
                pages.organisationProduction.clickRegistrationActivityTab();
            })

        },
        goToGeneralTab: function () {
            it("Go to General Tab on Organization", function () {
                pages.organisationProduction.clickGeneralTab();
            })
        },
        waitForRegistrationActivityTabToBeDisplayed: function () {
            it("Wait For Reg Tab Header To be Displayed", function () {
                pages.organisationProduction.waitForActivityRecordsTableHeader();
            })
        },
        waitForGeneralTabToBeDisplayed: function () {
            it("Wait For General Tab To be Displayed", function () {
                pages.organisationProduction.waitForEditorGeneral();
            })
        },
        waitForPreviewRegistrationRunTabToBeDisplayed: function () {
            it("Wait For Registration Run Tab To be Displayed", function () {
                pages.organisationProduction.waitForRegRunHeader();
            })
        },
        waitForRegActivityElement: function () {
            it("Wait For General Tab To be Displayed", function () {
                pages.organisationProduction.waitForElementWork();
            })
        },
        waitForOrgDisappear: function () {
            it("Wait For Org to disappear", function () {
                pages.organisationProduction.waitForOrgToBeInvisible();
            })
        },
        saveRegActivityLastEvent: function () {
            it("Save Last Event Displayed On Registration Activity Page", function () {


                hash.lastEvent = {};
                var lastEvent = pages.organisationProduction.getLastAddedWorkEvent();

                pages.organisationProduction.getIconType(lastEvent).then(function (isPresent) {


                    if (isPresent.toString() == "true") {

                        hash.lastEvent.icon = "exchange";

                    }
                    else {
                        hash.lastEvent.icon = "arrowDown";

                    }

                });


                pages.organisationProduction.getWorksText(lastEvent).then(function (value) {

                        hash.lastEvent.totalWorks = parseInt(value.replace(/[^\d.]/g, ''), 10);


                    }
                );
                pages.organisationProduction.getWorkIDNumber(lastEvent).then(function (value) {


                        hash.lastEvent.workID = parseInt(value.replace(/[^\d.]/g, ''), 10);


                    }
                );
                pages.organisationProduction.getRunDate(lastEvent).then(function (value) {

                        hash.lastEvent.runDate = value;

                    }
                );
                pages.organisationProduction.getStatus(lastEvent).then(function (value) {

                        hash.lastEvent.status = value;

                    }
                );
                pages.organisationProduction.getEventRunDate(lastEvent).then(
                    function (value) {
                        hash.lastEvent.eventRunDate = value;
                        //    console.log(hash.lastEvent)
                    }
                );


            })

        },
        saveMultipleELemNodesTest: function () {
            it("Save Elem Nodes Test", function () {
                pages.organisationProduction.testMultipleElements();
            })

        },
        saveOrganisationDeliveryMethods: function () {
            it("Save Organisation Delivery Methods Information", function () {
                hash.emailDeliveries = [];
                hash.sftpDeliveries = [];
                hash.ftpDeliveries = [];
                hash.thirdPartyDeliveries = [];
                var emailDelivery = {};


                //Email

                pages.organisationProduction.getEmailDeliveryMethods()
                    .then(function (emailDeliveryMethods) {
                        emailDeliveryMethods.forEach(function (deliveryMethod) {
                            var emailDelivery = {};
                            pages.base.scrollIntoView(deliveryMethod);
                            pages.organisationProduction.getEmailDeliveryMethodEmail(deliveryMethod).then(function (result) {
                                emailDelivery.email = result;
                            });
                            pages.organisationProduction.getEmailDeliveryMethodCC(deliveryMethod).then(function (result) {
                                emailDelivery.CC = result;
                            });
                            pages.organisationProduction.getEmailDeliveryMethodFileFormat(deliveryMethod).then(function (result) {
                                emailDelivery.fileFormat = result;
                            });
                            pages.organisationProduction.getEmailDeliveryMethodNotification(deliveryMethod).then(function (result) {
                                emailDelivery.deliveryNotification = result;
                            }).then(function () {
                                hash.emailDeliveries.push(emailDelivery);
                                //    console.log(emailDelivery);
                            });

                        });
                    });

                //SFTP
                pages.organisationProduction.getSFTPDeliveryMethods()
                    .then(function (sftpDeliveryMethods) {
                        sftpDeliveryMethods.forEach(function (deliveryMethod) {
                            var sftpDelivery = {};
                            pages.base.scrollIntoView(deliveryMethod);

                            pages.organisationProduction.getSFTPDeliveryMethodName(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryMethodName = result;
                            });
                            pages.organisationProduction.getSFTPDelivetyMehodAddress(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryMethodAddress = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryMethodPort(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryMethodPort = result;
                            });

                            pages.organisationProduction.clickUnmaskPasswordButton(deliveryMethod).then(function () {
                                pages.organisationProduction.getSFTPPassword(deliveryMethod).then(function (result) {
                                    sftpDelivery.password = result;
                                });
                            });

                            pages.organisationProduction.getSFTPFileFormat(deliveryMethod).then(function (result) {
                                sftpDelivery.fileFormat = result;
                            });
                            pages.organisationProduction.getSFTPFileFormatStatus(deliveryMethod).then(function (result) {
                                sftpDelivery.fileFormatStatus = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryNotificationStatus(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryNotificationStatus = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryNotificationStatusEmail(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryNotificationEmail = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryNotificationStatusCC(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryNotificationCC = result;
                            });
                            pages.organisationProduction.getSFTPUsername(deliveryMethod).then(function (result) {
                                sftpDelivery.username = result;
                            }).then(function () {
                                hash.sftpDeliveries.push(sftpDelivery);
                                //    console.log(sftpDelivery);
                            });

                        });
                    });
                //FTP

                pages.organisationProduction.getFTPDeliveryMethods()
                    .then(function (ftpDeliveryMethods) {
                        ftpDeliveryMethods.forEach(function (deliveryMethod) {
                            var sftpDelivery = {};
                            pages.base.scrollIntoView(deliveryMethod);

                            pages.organisationProduction.getSFTPDeliveryMethodName(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryMethodName = result;
                            });
                            pages.organisationProduction.getSFTPDelivetyMehodAddress(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryMethodAddress = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryMethodPort(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryMethodPort = result;
                            });

                            pages.organisationProduction.clickUnmaskPasswordButton(deliveryMethod).then(function () {
                                pages.organisationProduction.getSFTPPassword(deliveryMethod).then(function (result) {
                                    sftpDelivery.password = result;
                                });
                            });

                            pages.organisationProduction.getSFTPFileFormat(deliveryMethod).then(function (result) {
                                sftpDelivery.fileFormat = result;
                            });
                            pages.organisationProduction.getSFTPFileFormatStatus(deliveryMethod).then(function (result) {
                                sftpDelivery.fileFormatStatus = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryNotificationStatus(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryNotificationStatus = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryNotificationStatusEmail(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryNotificationEmail = result;
                            });
                            pages.organisationProduction.getSFTPDeliveryNotificationStatusCC(deliveryMethod).then(function (result) {
                                sftpDelivery.deliveryNotificationCC = result;
                            });
                            pages.organisationProduction.getSFTPUsername(deliveryMethod).then(function (result) {
                                sftpDelivery.username = result;
                            }).then(function () {
                                hash.sftpDeliveries.push(sftpDelivery);
                                //   console.log(sftpDelivery);
                            });

                        });
                    });
                //THIRD PARTY

                pages.organisationProduction.getThirdPartyDeliveryMethods()
                    .then(function (thirdPartyDeliveryMethods) {
                        thirdPartyDeliveryMethods.forEach(function (deliveryMethod) {
                            var thirdPartyDelivery = {};
                            pages.base.scrollIntoView(deliveryMethod);


                            pages.organisationProduction.getThirdPartyName(deliveryMethod).then(function (result) {
                                thirdPartyDelivery.name = result;
                            }).then(function () {
                                hash.thirdPartyDeliveries.push(thirdPartyDelivery);
                                //    console.log(thirdPartyDelivery);
                            });
                        });

                    });


            })
        },
        verifyThatWorkIsDelivered: function () {
            it("Verify Work has delivered status", function () {
                expect(pages.organisationProduction.workHasDeliveredStatus()).toBe("Delivered");
            })
        },
        checkThatAllDeliviriesAreDelivered: function () {
            it("Verify That All inner deliviries are delivered", function () {
                pages.organisationProduction.clickLatestWork();
                expect(pages.organisationProduction.workHasDeliveredStatus()).toBeTruthy();
            })
        },

        selectCustomRegistrationRun: function (value) {
            it("Select custom registration run " + value, function () {
                pages.organisationProduction.clickCustomWorksButton();
                pages.organisationProduction.selectValueFromPopupRegRun(value);
            })
        }
        ,
        pause: function () {


            it("Test Step", function () {
                browser.pause();

            });

        },

        goToNewOrganisationPage: function () {
            it("Go to new organisation page", function () {
                pages.organisationProduction.open();

            })
        },
        setOrganisationName: function (value) {
            it("Set organisation name to " + value, function () {

                pages.organisationProduction.typeOrganisationName(value);
            })
        },
        setTerritoryOfOperation: function (value) {
            it("Set territory of operation to " + value, function () {

                if (value == "Worldwide") {
                    pages.organisationProduction.setTerritoryOfOperationToWorldWide();

                }

            })
        },
        setRandomSuisaIPI: function () {
            it("Set random suisa IPI ", function () {
                // pages.organisationProduction.randomIPINumberBasedOnDate().then(function (value) {

                pages.organisationProduction.typeRandomSuisaIPINumber(pages.organisationProduction.randomIPINumberBasedOnDate());
                //   console.log(value);
                //  });


            })
        },
        setAffiliatedSociety: function (value) {
            it("Set affiliated society  to " + value, function () {

                pages.organisationProduction.selectAffiliatedSocietyNumber(value);

            })
        },
        setPublisherType: function (value) {
            it("Set publisher type to  " + value, function () {

                pages.organisationProduction.clickPublisherType(value);

            })

        },
        saveOrganisation: function () {
            it("Save organisation ", function () {

                pages.organisationProduction.clickSaveOrganisationButton();

            })
        },
        validateSavedOrganisationIsDisplayed: function () {
            it("Validate Saved Organisation Is Displayed ", function () {


                expect(pages.organisationProduction.isSavedPageDisplayed()).toBeTruthy();

            });

        },
        validateCISACCode: function (value) {
            it("Validate Cisac Code is " + value, function () {

                expect(pages.organisationProduction.getCisacNumber()).toBe(value);

            });
        },

        validateSubPublisherName: function(i, value) {
            it(
                'Validate sub-publisher name ' +
                '(' + (i + 1) + ', ' + value + ')', function () {
                    expect(pages.organisationProduction.subPublisherName(i)).toBe(
                        value
                    );
                }
            );
        }
    }
    ;
}

module.exports = steps.organisationProduction;

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
]);

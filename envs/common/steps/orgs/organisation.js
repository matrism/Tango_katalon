'use strict';

var pageStep = require('../../../../helpers/basicPageStep'),
    page = require(pages_path + 'organisation');

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


                }
                );


            }
            )
        }
        ,
        openIncomeProviderEdit: function () {


            it("Open Income Provider Section for Editing", function () {


                pages.organisation.clickIncomeProviderSection();

                pages.organisation.clickincomeProviderSectionEdit();


            });


        }
        ,
        saveIncomeProviders: function () {

            it("Save edited Income Providers", function () {

                pages.organisation.clickSaveIncomeProviderButton();


            })

        },

        waitForProvidersSaveToComplete: function () {
            it("Waits for save to complete", function () {

                pages.organisation.waitForSaveToComplete();

            })


        },
        chooseIncomeFileType: function (fileType) {
            it("Choose " + fileType + "Income File Type", function () {

                pages.organisation.selectIncomeFileType(fileType);


            })


        }
        ,
        executeRegistrationRun: function (value) {
            it("Execute Registration Run", function () {
                pages.organisation.registrationCanBeRun().then(function (isVisible) {
                    //  console.log("Is visible"+isVisible);


                    if (isVisible.toString() == "true") {


                        pages.organisation.clickExecuteRegistrationRunButton();

                        pages.organisation.confirmModalDialog().then(function () {
                            browser.wait(ExpectedConditions.visibilityOf(pages.organisation.successModalMessage()));
                            pages.organisation.confirmSuccessModal();
                            //    expect(pages.organisation.successDialogIsPresent()).toBeTruthy();
                        });

                        // expect(pages.organisation.successDialogIsPresent()).toBeTruthy();
                    }
                    else {
                        // console.log(pages.organisation.registrationCanBeRun().toString());
                        //while (pages.organisation.resetWork() == "202" &&
                        //pages.organisation.registrationCanBeRun().then(function (isVisible) {
                        //    console.log(isVisible.toString());
                        //    return isVisible.toString() == "false";
                        //
                        //}))
                        {
                            //  expect(pages.organisation.resetWork()).toBe("");
                            pages.organisation.resetWork();


                            browser.driver.sleep(15000);
                            pages.base.refresh();
                            pages.organisation.clickCustomWorksButton();
                            pages.organisation.selectValueFromPopupRegRun(value);
                            pages.organisation.clickExecuteRegistrationRunButton();
                            pages.organisation.confirmModalDialog().then(function () {
                                browser.wait(ExpectedConditions.visibilityOf(pages.organisation.successModalMessage()));
                                pages.organisation.confirmSuccessModal();
                                browser.driver.sleep(5000);

                                //      expect(pages.organisation.successDialogIsPresent()).toBeTruthy();
                            });

                        }
                    }


                })
            })
        }
        ,
        goToPreviewRegistrationRunTab: function () {
            it("Go to Preview Registration Run Tab", function () {
                pages.organisation.clickPreviewRegistrationRunTab();
            })
        }

        ,
        viewValidationErrors: function () {
            it("View validation errors", function () {
                pages.organisation.clickValidationErrorsButton();
            })
        },
        downloadCrFile: function () {
            it('Download CR file', function () {
                pages.organisation.downloadCrFile();
            });

        },
        goToRegistrationActivityTab: function () {
            it("Go to Registration ActivityTab", function () {
                pages.organisation.clickRegistrationActivityTab();
            })

        },
        goToGeneralTab: function () {
            it("Go to General Tab on Organization", function () {
                pages.organisation.clickGeneralTab();
            })
        },
        waitForRegistrationActivityRecordsTableToBeDisplayed: function () {
            it("Wait For Reg Tab Header To be Displayed", function () {
                pages.organisation.waitForActivityRecordsTableHeader();
            })
        },
        waitForGeneralTabToBeDisplayed: function () {
            it("Wait For General Tab To be Displayed", function () {
                pages.organisation.waitForEditorGeneral();
            })
        },
        waitForPreviewRegistrationRunHeaderToBeDisplayed: function () {
            it("Wait For Registration Run Tab To be Displayed", function () {
                pages.organisation.waitForRegRunHeader();
            })
        },
        waitForRegActivityElement: function () {
            it("Wait For General Tab To be Displayed", function () {
                pages.organisation.waitForElementWork();
            })
        },
        waitForOrgDisappear: function () {
            it("Wait For Org to disappear", function () {
                pages.organisation.waitForOrgToBeInvisible();
            })
        },
        saveRegActivityLastEvent: function () {
            it("Save Last Event Displayed On Registration Activity Page", function () {


                hash.lastEvent = {};
                var lastEvent = pages.organisation.getLastAddedWorkEvent();

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


            })

        },
        saveMultipleELemNodesTest: function () {
            it("Save Elem Nodes Test", function () {
                pages.organisation.testMultipleElements();
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


            })
        },
        verifyThatWorkIsDelivered: function () {
            it("Verify Work has delivered status", function () {
                expect(pages.organisation.workHasDeliveredStatus()).toBe("Delivered");
            })
        },
        checkThatAllDeliviriesAreDelivered: function () {
            it("Verify That All inner deliviries are delivered", function () {
                pages.organisation.clickLatestWork();
                expect(pages.organisation.workHasDeliveredStatus()).toBeTruthy();
            })
        },

        selectCustomRegistrationRun: function (value) {
            it("Select custom registration run " + value, function () {
                pages.organisation.clickCustomWorksButton();
                pages.organisation.selectValueFromPopupRegRun(value);
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
                pages.organisation.open();

            })
        },
        setOrganisationName: function (value) {
            it("Set organisation name to " + value, function () {

                pages.organisation.typeOrganisationName(value);
            })
        },
        setTerritoryOfOperation: function (value) {
            it("Set territory of operation to " + value, function () {

                if (value == "Worldwide") {
                    pages.organisation.setTerritoryOfOperationToWorldWide();

                }

            })
        },
        setRandomSuisaIPI: function () {
            it("Set random suisa IPI ", function () {
                // pages.organisation.randomIPINumberBasedOnDate().then(function (value) {

                pages.organisation.typeRandomSuisaIPINumber(pages.organisation.randomIPINumberBasedOnDate());
                //   console.log(value);
                //  });


            })
        },
        setAffiliatedSociety: function (value) {
            it("Set affiliated society  to " + value, function () {

                pages.organisation.selectAffiliatedSocietyNumber(value);

            })
        },
        setPublisherType: function (value) {
            it("Set publisher type to  " + value, function () {

                pages.organisation.clickPublisherType(value);

            })

        },
        saveOrganisation: function () {
            it("Save organisation ", function () {

                pages.organisation.clickSaveOrganisationButton();

            })
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
    }
    ;
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
]);
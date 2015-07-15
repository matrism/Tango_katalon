var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.organisation === undefined) {
    steps.organisation = {


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


                    if (isVisible.toString() == "true") {


                        pages.organisation.clickExecuteRegistrationRunButton();
                        pages.organisation.confirmModalDialog();
                        expect(pages.organisation.successDialogIsPresent()).toBeTruthy();
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
                            pages.organisation.resetWork();

                            browser.driver.sleep(30000);
                            pages.base.refresh();
                            pages.organisation.clickCustomWorksButton();
                            pages.organisation.selectValueFromPopupRegRun(value);
                            pages.organisation.clickExecuteRegistrationRunButton();
                            pages.organisation.confirmModalDialog().then(function () {
                                browser.wait(ExpectedConditions.visibilityOf(pages.organisation.successModalMessage()));
                                expect(pages.organisation.successDialogIsPresent()).toBeTruthy();
                            });

                        }
                    }


                })
            })
        }
    ,
        goToPreviewRegistrationRunTab
:
    function () {
        it("Go to Preview Registration Run Tab", function () {
            pages.organisation.clickPreviewRegistrationRunTab();
        })
    }

,

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

    }

}
;
}

module.exports = steps.organisation;

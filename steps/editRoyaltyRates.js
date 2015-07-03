var _ = require("lodash");
var promise = protractor.promise;
hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.editRoyaltyRates === undefined) {
    steps.editRoyaltyRates = {


        addNewRoyaltySet: function () {


            it("Add new Royalty Rate Set", function () {

                    pages.editRoyaltyRates.clickNewRoyaltySetButton();
                }
            );
        },

        inspectRateSetForm: function () {


            it("Inspect Rate Set Form", function () {

                expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.incomeProvidesLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.incomeProviderInput.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.incomeDateMethodLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.effectiveStartDateLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.contractualRateLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.interCompanyLabel.isPresent()).toBeTruthy();


            });
        },
        closeRateSetForm: function () {
            it("Close Rate Set Form", function () {
                pages.editRoyaltyRates.closeRoyaltySet();
                expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeFalsy();
            });
        },

        clearRoyaltyRateInput: function () {

            it("Delete Name from name input", function () {
                    pages.royaltyRates.clearRoyaltyRateNameInput();
                }
            );
        },
        validateRoyaltyRateInput: function () {

            it("Error warning is shown for name input", function () {

                expect(pages.royaltyRates.getRRInputBorderTopValue()).toBe('rgba(223, 74, 72, 1)');
                expect(pages.royaltyRates.getRRInputBorderRightValue()).toBe('rgba(223, 74, 72, 1)');
                expect(pages.royaltyRates.getRRInputBorderBottomValue()).toBe('rgba(223, 74, 72, 1)');
                expect(pages.royaltyRates.getRRInputBorderLeftValue()).toBe('rgba(223, 74, 72, 1)');
                expect(pages.royaltyRates.getRRInputPlaceholderValue()).toBe('Type Name..');


            });

        },

        typeIntoRRInput: function (text) {

            it("Write Name in Rate Set Field ", function () {


                pages.royaltyRates.typeIntoRRInput(text);


            });
        },
        validateRRInputText: function (text) {

            it("Name is succesfully added to textbox", function () {
                expect(pages.royaltyRates.getRRInputValue()).toBe(text);


            });
        },
        validateRRInput: function () {
            it("Expect input to be valid", function () {


                expect(pages.royaltyRates.getRRInputBorderTopValue()).toBe('rgba(51, 170, 237, 1)');
                expect(pages.royaltyRates.getRRInputBorderRightValue()).toBe('rgba(51, 170, 237, 1)');
                expect(pages.royaltyRates.getRRInputBorderBottomValue()).toBe('rgba(51, 170, 237, 1)');
                expect(pages.royaltyRates.getRRInputBorderLeftValue()).toBe('rgba(51, 170, 237, 1)');


            });


        },
        selectAnIncomeProvider: function (provider) {

            it("Type in an income provider and select it from dropdown", function () {


                pages.royaltyRates.selectIncomeProvider(provider);


            });
        },
        incomeProviderIsPresent: function (provider) {

            it("The Income Provider is succesfully added", function () {
                expect(pages.royaltyRates.getIncomeProviderInputValue()).toBe(provider);


            });
        }

        ,

        incomeDateMethodToggleIsDisplayed: function () {

            it("Income Date Method Toggle Is Displayed  ", function () {

                expect(pages.royaltyRates.isIncomeDateMethodToggleVisible()).toBeTruthy();


            });
        },
        dealSigningTerritoryIsSelected: function () {

            it("Deal Signing Territory - is selected", function () {


                expect(pages.royaltyRates.getActiveIncomeToggle()).toBe('Deal Signing Territory');

            });


        },
        selectDealSigningTerritoryToggle: function () {

            it("Select Deal Signing Territory ", function () {


                pages.royaltyRates.clickDealSigningTerritoryToggle();

            });


        },
        selectWarnerChappellToggle: function () {

            it("Select Warner Chappell Toggle", function () {


                pages.royaltyRates.clickWarnerChappellToggle();

            });


        },
        warnerChappellToggleIsSelected: function () {

            it("Warner Chappell - is selected", function () {


                expect(pages.royaltyRates.getActiveIncomeToggle()).toBe('Warner Chappell');

            });


        },

        inspectEffectiveStartDateArea: function () {
            it("Inspect Effective Start Date Area ", function () {

                    expect(pages.royaltyRates.effectiveStartDateLabelIsPresent()).toBeTruthy();
                    expect(pages.royaltyRates.effectiveStartDateInputFieldIsPresent()).toBeTruthy();
                    expect(pages.royaltyRates.effectiveStartDateCalendarIconIsPresent()).toBeTruthy();
                    expect(pages.royaltyRates.getEffectiveStartDateContextualHelp()).toBe("Effective Date is based on time + Territory that is processing the royalty + Income Received Date. For rates to become active, Royalty Processing needs to know the date (when known) the Rate Set begins");
                   // expect(pages.royaltyRates.getEffectiveStartDateInputValue()).toBe("2015-03-12")


                }
            );

        },

        checkEffectiveStartDateErrorMessages: function (table, message) {

            console.log("Inspect Effective Start Date Error Messages")


            var fields = table.shift();
            _.each(table, function (row, index) {
                var date = row[0],
                    errorMessage = row[1];
                var consoleMessage;

                consoleMessage = message.replace("%errorMessage%", errorMessage);
                consoleMessage = consoleMessage.replace("%date%", date);

                it(consoleMessage, function () {

                        pages.royaltyRates.typeIntoEffectiveStartDateInput(date);
                        expect(pages.royaltyRates.getEffectiveStartDateErrorMessage()).toBe(errorMessage);


                    }
                );


            })
        },

        setEffectiveStartDate: function (date) {
            it("Set Effective Start Date", function () {

                pages.royaltyRates.typeIntoEffectiveStartDateInput(date);


            });

        },

        openEffectiveStartDateCalender: function () {
            it("Open Effective start date calender", function () {


                pages.royaltyRates.clickEffectiveStartDateCalendarIcon();


            });


        },

        addRatePercentageToContractualField: function (percentage) {
            it("Add Percentage to Contractual Rate Field", function () {

                pages.royaltyRates.addPercentageToContractualRateInput(percentage);

            });

        },
        clickOnReceiptApplicationMethod: function () {
            it("Change Rate Application Method to On Receipt", function () {

                pages.royaltyRates.clickOnReceiptApplicationMethod();

            });

        },
        rejectChangingRateApplicationMethod: function () {
            it("Reject Changing the Rate Application Method to On Receipt", function () {


            });
        },
        confirmChangingRateApplicationMethod: function () {
            it("Confirm Changing the Rate Application Method to On Receipt", function () {

                pages.royaltyRates.clickYesOnRateMethodModal();

            });
        },
        saveRateSet: function () {
            it("Save current Rate Set", function () {

                pages.royaltyRates.clickDoneButtonForRRSet();
               // browser.pause();
            });
        },
        closeRateSet: function () {
            it("Close current Rate Set ", function () {


            });
        },

        openRateSetPanel: function () {
            it("Expand Saved Rate Set", function () {

           pages.editRoyaltyRates.clickOpenRRButton();
            });
        },

        openSavedScope: function () {
            it("Click Scope Heading", function () {

                pages.royaltyRates.clickScopeHeading();

            })


        },

        pause: function () {


            it("Pause Step", function () {
                browser.manage().timeouts().pageLoadTimeout(10000);

            });

        },
        rateSetSavedSuccesfully: function()

        { it("Rate Set Was Saved ",function(){

            pages.editRoyaltyRates.clickRRSumarryTable();
            pages.editRoyaltyRates.clickeditSavedRRIcon();

            expect(pages.editRoyaltyRates.getSavedRRName()).toBe("Rate Set 1");
            expect(pages.editRoyaltyRates.getSavedRRDate()).toBe("2015-11-11");
         //   expect(pages.editRoyaltyRates.getSavedRRIncomeDateMethod().toBe("Deal Signing Territory"));
           // expect(pages.editRoyaltyRates.getSavedRRApplicationMethod().toBe("On Receipt"));


        })


        },







        test: function () {


            it("Test Step", function () {
                browser.pause();

            });

        }

    };
}

module.exports = steps.editRoyaltyRates;

var _ = require("lodash");
var promise = protractor.promise;
hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.royaltyRates === undefined) {
    steps.royaltyRates = {


        addNewRoyaltySet: function () {


            it("Add new Royalty Rate Set", function () {

                    pages.royaltyRates.clickNewRoyaltySetButton();
                }
            );
        },

        inspectRateSetForm: function () {


            it("Inspect Rate Set Form", function () {

                expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.incomeProvidesLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.incomeProviderInput.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.incomeDateMethodLabel.isPresent()).toBeTruthy();
                //   expect(pages.royaltyRates.elems.dealSigningLabel.isPresent()).toBeTruthy();
                //  expect(pages.royaltyRates.elems.warnerChappelLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.effectiveStartDateLabel.isPresent()).toBeTruthy();
                //   expect(pages.royaltyRates.elems.effectiveStartDateInput.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.contractualRateLabel.isPresent()).toBeTruthy();
                expect(pages.royaltyRates.elems.interCompanyLabel.isPresent()).toBeTruthy();
                //   expect(pages.royaltyRates.elems.interCompanyInput.isPresent()).toBeTruthy();


            });
        },
        closeRateSetForm: function () {
            it("Close Rate Set Form", function () {
                pages.royaltyRates.closeRoyaltySet();


                expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeFalsy();
            });
        },

        clearRoyaltyRateInput: function () {

            it("Delete Name from name input", function () {
                    pages.royaltyRates.clearRoyaltyRateNameInput();
                }
            );
        },
        waitForPanel: function () {

            it("Wait for panel", function () {
                    pages.royaltyRates.waitPanel();
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

        addEffectiveStartDate: function (date) {
            it("Type effective start date into input", function () {

                pages.royaltyRates.typeIntoEffectiveStartDateInput(date);
            });


        },
        cancelRateSet:function()
        {
            it("Cancel Rate Set", function () {

                pages.royaltyRates.clickcancelRateSet();
            });



        },
        addIncomeProviderByPartialMatch: function (provider) {
            it("Add an Income Provider", function () {

                pages.royaltyRates.selectIncomeProviderByPartialMatch(provider);

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
                    expect(pages.royaltyRates.getEffectiveStartDateInputValue()).toBe("2015-03-12")


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

                        //it(message.replace("%name%", name), function() {
                        //    var real_trade = helper.getTradeByName(name);
                        //    expect(real_trade).toBe(trade);
                        //});


                        //  console.log(consoleMessage);


                        pages.royaltyRates.typeIntoEffectiveStartDateInput(date);
                        expect(pages.royaltyRates.getEffectiveStartDateErrorMessage()).toBe(errorMessage);


                    }
                );


            })
        },

        setEffectiveStartDate: function (date) {
            it("Set Effective Start Date", function () {

                pages.royaltyRates.typeIntoEffectiveStartDateInput(date);

                // pages.royaltyRates.clickGeneric(element);

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
        openAllRRFields:function()
        {

            it("Expand all RR groups", function () {

                pages.royaltyRates.expandAllIncomeGroups();

            });

        },
        checkThatInputHasCorrectDecimalNumber:function(number)
        {
            it("Verify correct number of decimal places", function () {



                pages.royaltyRates.checkDecimalPlaces();


            });

        },
        checkThatInputHasCorrectNumber:function(number)
        {
            it("Verify correct number of decimal places", function () {






                expect(   pages.royaltyRates.checkDecimalNumber(number)).toBeTruthy();



            });

        },
        setAllFieldValue:function(value)
        {

            it("Type in  all RR groups", function () {

                pages.royaltyRates.typeInAllInputs(value);

            });

        },
        setFieldsValue:function(value)
        {

            it("Type in  all RR groups", function () {

                pages.royaltyRates.typeAllInputs(value);

            });

        },
        setFieldsValueTest:function(value)
        {

            it("Type in  all RR groups", function () {

                pages.royaltyRates.typeAllInputsTest(value);

            });

        },
        saveRateSet: function () {
            it("Save current Rate Set", function () {

                pages.royaltyRates.clickDoneButtonForRRSet();
                pages.royaltyRates.waitForRRToBeSaved();
            });
        },
        closeRateSet: function () {
            it("Close current Rate Set ", function () {


            });
        },

        openRateSetPanel: function () {
            it("  ", function () {


            });
        },

        openSavedScope: function () {
            it("Click Scope Heading", function () {

                pages.royaltyRates.clickScopeHeading();

            })


        },

        storeRRData:function()
        {
            it("Save Data Contained in RR Set",function()
            {

                hash.royaltyRates.RRName = pages.royaltyRates.getRRInputValue();
                hash.royaltyRates.RRIncomeProvider = pages.royaltyRates.getIncomeProviderInputValue();
                hash.royaltyRates.StartDate = pages.royaltyRates.getEffectiveStartDateInputValue();


            })

        }
,
        storeRRObject:function()
        {
          it("Store RR's data",function()
            {

                //var Kiwi = {
                //    fruit : "kiwi"
                //    };
                var royaltyRate = {
                    name:pages.royaltyRates.getRRInputValue()
                    //incomeProvider:pages.royaltyRates.getIncomeProviderInputValue(),
                   // effectiveDate:pages.royaltyRates.getEffectiveStartDateInputValue()
                    //contractualRate:pages.royaltyRates.getContractualRate(),
                    //interCompanyRate:pages.royaltyRates.getInterCompanyRate(),

                    //rateAppMethod:pages.royaltyRates.getRateAppMe"trap"thod(),
                    //contractPeriod:pages.royaltyRates.getContractPeriod()

                };

                hash.royaltyRates.royaltyRateObjectsList.push(royaltyRate);


            });


        },
        saveRRData:function()
        {
            //Saves income providers !!
            it("Save Data Contained in RR Set",function()
            {


                hash.royaltyRates.RRName = pages.royaltyRates.getRRInputValue();
                hash.royaltyRates.RRIncomeProvider = pages.royaltyRates.getIncomeProviderInputValueOption();
                hash.royaltyRates.StartDate = pages.royaltyRates.getEffectiveStartDateInputValue();







            })


        }
,
        verifyRateSetSavedData:function()
        {

            it("Check that RR data was saved succsefully",function(){



              browser.wait(ExpectedConditions.visibilityOf(pages.royaltyRates.firstSavedRRName()));

              pages.base.scrollIntoView(pages.royaltyRates.firstSavedRRName());


                expect(hash.royaltyRates.RRName).toEqual(pages.royaltyRates.firstSavedRRName().getText());
             //   expect(hash.royaltyRates.RRIncomeProvider).toEqual(pages.royaltyRates.lastSaveRRIncomeProvider().getText());
              //  expect(hash.royaltyRates.StartDate).toEqual(pages.royaltyRates.lastSavedRRStartDate().getText());





            })




        },

        storeAllRRData:function()
        {
            it("Store the added RR's in hashmap",function(){

               // browser.wait(ExpectedConditions.visibilityOf(   pages.royaltyRates.savedRRNames()));

                browser.driver.sleep(3000);
          // console.log(pages.royaltyRates.savedRRNames());
                pages.royaltyRates.savedRRNames().map(function(item) {
                   // console.log("MEdvedka");
                  // hash.royaltyRates.RRNames.push(item.getText());
                 //   console.log(hash.royaltyRates.RRNames);
                   return item.getText();
                }).then(function(labels) {

                    hash.royaltyRates.RRNames.push(labels);



                });


            });



        },
        verifyAllRateSetSavedData:function()
        {

            it("Verify that RR's were saved successfully",function(){

                browser.driver.sleep(3000);

                pages.royaltyRates.savedRRNames().map(function(item) {

                    return item.getText();
                }).then(function(labels) {


                     var temp = [];
                    temp.push(labels);
                    expect(temp).toEqual(hash.royaltyRates.RRNames);
                });

            });


        },
        editIncomeProviderByPartialMatch:function(provider)
        {
            it("Edit income provider to "+provider, function(){

                pages.royaltyRates.clearIncomeProviderInput();





            pages.royaltyRates.selectIncomeProviderByPartialMatch(provider);


            });



        }
,
        editSingleRoyaltySet:function()
        {
            it("Click RR edit button",function(){

                browser.wait(ExpectedConditions.visibilityOf( pages.editRoyaltyRates.rrSumarryTable()));
                browser.wait(ExpectedConditions.elementToBeClickable( pages.editRoyaltyRates.rrSumarryTable()));



         pages.editRoyaltyRates.clickRRSumarryTable();
               pages.base.scrollIntoView(pages.editRoyaltyRates.rrSumarryTable());
var el = pages.editRoyaltyRates.rrSumarryTable();

              browser.actions().mouseMove(el).perform();
              pages.editRoyaltyRates.clickEditSavedRRIcon();
              //
              //
              //  steps.editRoyaltyRates.openRateSetPanel()

            });


        },
        refreshPage:function()
        {

            it("Refresh Page",function(){

                browser.driver.navigate().refresh();


            });


        },

        pause: function () {


            it("Pause Step", function () {
              //  browser.manage().timeouts().pageLoadTimeout(10000);
                browser.sleep(5000);

            });

        },



        test: function () {


            it("Test Step", function () {
                              browser.pause();

            });

        }


    }
}

module.exports = steps.royaltyRates;

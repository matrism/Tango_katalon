'use strict';

var _ = require('lodash'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];

steps.royaltyRates = exports;

exports.addNewRoyaltySet = function () {
    it("Add new Royalty Rate Set", function () {
        pages.royaltyRates.clickNewRoyaltySetButton();
    });
};

exports.addNewRoyaltySetEdit = function () {
    it("Add new Royalty Rate Set", function () {
            pages.royaltyRates.clickNewRoyaltySetButtonEdit();
        }
    );
};

exports.inspectRateSetForm = function () {
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
};

exports.closeRateSetForm = function () {
    it("Close Rate Set Form", function () {
        pages.royaltyRates.closeRoyaltySet();
        expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeFalsy();
    });
};

exports.clearRoyaltyRateInput = function () {
    it("Delete Name from name input", function () {
        pages.royaltyRates.clearRoyaltyRateNameInput();
    });
};

exports.waitForPanel = function () {
    it("Wait for panel", function () {
        pages.royaltyRates.waitPanel();
    });
};

exports.validateRoyaltyRateInput = function () {
    it("Error warning is shown for name input", function () {
        expect(pages.royaltyRates.getRRInputBorderTopValue()).toBe('rgba(223, 74, 72, 1)');
        expect(pages.royaltyRates.getRRInputBorderRightValue()).toBe('rgba(223, 74, 72, 1)');
        expect(pages.royaltyRates.getRRInputBorderBottomValue()).toBe('rgba(223, 74, 72, 1)');
        expect(pages.royaltyRates.getRRInputBorderLeftValue()).toBe('rgba(223, 74, 72, 1)');
        expect(pages.royaltyRates.getRRInputPlaceholderValue()).toBe('Type Name..');
    });
};

exports.typeIntoRRInput = function (text) {
    it("Write Name in Rate Set Field ", function () {
        pages.royaltyRates.typeIntoRRInput(text);
    });
};

exports.validateRRInputText = function (text) {
    it("Name is succesfully added to textbox", function () {
        expect(pages.royaltyRates.getRRInputValue()).toBe(text);
    });
};

exports.validateRRInput = function () {
    it("Expect input to be valid", function () {
        expect(pages.royaltyRates.getRRInputBorderTopValue()).toBe('rgba(51, 170, 237, 1)');
        expect(pages.royaltyRates.getRRInputBorderRightValue()).toBe('rgba(51, 170, 237, 1)');
        expect(pages.royaltyRates.getRRInputBorderBottomValue()).toBe('rgba(51, 170, 237, 1)');
        expect(pages.royaltyRates.getRRInputBorderLeftValue()).toBe('rgba(51, 170, 237, 1)');
    });
};

exports.selectAnIncomeProvider = function (provider) {
    it("Type in an income provider and select it from dropdown", function () {
        pages.royaltyRates.selectIncomeProvider(provider);
    });
};

exports.addEffectiveStartDate = function (date) {
    it("Type effective start date into input", function () {
        pages.royaltyRates.typeIntoEffectiveStartDateInput(date);
    });
};

exports.cancelRateSet = function () {
    it("Cancel Rate Set", function () {
        pages.royaltyRates.clickcancelRateSet();
    });
};

exports.addIncomeProviderByPartialMatch = function (provider) {
    it("Add an Income Provider", function () {
        pages.royaltyRates.selectIncomeProviderByPartialMatch(provider);
    });
};

exports.incomeProviderIsPresent = function (provider) {
    it("The Income Provider is succesfully added", function () {
        expect(pages.royaltyRates.getIncomeProviderInputValue()).toBe(provider);
    });
};

exports.incomeDateMethodToggleIsDisplayed = function () {
    it("Income Date Method Toggle Is Displayed  ", function () {
        expect(pages.royaltyRates.isIncomeDateMethodToggleVisible()).toBeTruthy();
    });
};

exports.dealSigningTerritoryIsSelected = function () {
    it("Deal Signing Territory - is selected", function () {
        expect(pages.royaltyRates.getActiveIncomeToggle()).toBe('Deal Signing Territory');
    });
};

exports.selectDealSigningTerritoryToggle = function () {
    it("Select Deal Signing Territory ", function () {
        pages.royaltyRates.clickDealSigningTerritoryToggle();
    });
};

exports.selectWarnerChappellToggle = function () {
    it("Select Warner Chappell Toggle", function () {
        pages.royaltyRates.clickWarnerChappellToggle();
    });
};

exports.warnerChappellToggleIsSelected = function () {
    it("Warner Chappell - is selected", function () {
        expect(pages.royaltyRates.getActiveIncomeToggle()).toBe('Warner Chappell');
    });
};

exports.inspectEffectiveStartDateArea = function () {
    it("Inspect Effective Start Date Area ", function () {
        expect(pages.royaltyRates.effectiveStartDateLabelIsPresent()).toBeTruthy();
        expect(pages.royaltyRates.effectiveStartDateInputFieldIsPresent()).toBeTruthy();
        expect(pages.royaltyRates.effectiveStartDateCalendarIconIsPresent()).toBeTruthy();
        expect(pages.royaltyRates.getEffectiveStartDateContextualHelp()).toBe("Effective Date is based on time + Territory that is processing the royalty + Income Received Date. For rates to become active, Royalty Processing needs to know the date (when known) the Rate Set begins");
        expect(pages.royaltyRates.getEffectiveStartDateInputValue()).toBe("2015-03-12")
    });
};

exports.checkEffectiveStartDateErrorMessages = function (table, message) {
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
        });
    })
};

exports.setEffectiveStartDate = function (date) {
    it("Set Effective Start Date", function () {
        pages.royaltyRates.typeIntoEffectiveStartDateInput(date);

        // pages.royaltyRates.clickGeneric(element);
    });
};

exports.openEffectiveStartDateCalender = function () {
    it("Open Effective start date calender", function () {
        pages.royaltyRates.clickEffectiveStartDateCalendarIcon();
    });
};

exports.addRatePercentageToContractualField = function (percentage) {
    it("Add Percentage to Contractual Rate Field", function () {
        pages.royaltyRates.typeIntoContractualRateInput(percentage);
        pages.royaltyRates.addPercentageToContractualRateInput();
    });
};

exports.addNPSToContractualField = function (percentage) {
    it("Add NPS to Contractual Rate Field", function () {
        pages.royaltyRates.typeIntoContractualRateInput(percentage);
        pages.royaltyRates.addNPSToContractualRateInput();
        pages.royaltyRates.waitForAjax();
    });
};

exports.addAdminFeeToContractualField = function (percentage) {
    it("Add Admin Fee to Contractual Rate Field", function () {
        pages.royaltyRates.typeIntoContractualRateInput(percentage);
        pages.royaltyRates.addAdminFeeToContractualRateInput();
    });
};

exports.clickOnReceiptApplicationMethod = function () {
    it("Change Rate Application Method to On Receipt", function () {
        pages.royaltyRates.clickButtonOnReceiptApplicationMethod();
    });
};

exports.clickAtSourceApplicationMethod = function () {
    it("Change Rate Application Method to At Source", function () {
        pages.royaltyRates.clickButtonAtSourceApplicationMethod();
    });
};

exports.rejectChangingRateApplicationMethod = function () {
    it("Reject Changing the Rate Application Method to On Receipt", function () {
    });
};

exports.confirmChangingRateApplicationMethod = function () {
    it("Confirm Changing the Rate Application Method to On Receipt", function () {
        pages.royaltyRates.clickYesOnRateMethodModal();
        pages.royaltyRates.waitForAjax();
    });
};

exports.changeCoverMechanicalLastRateApplicationMethodToOnReceipt = function () {
    it("Change Cover Mechanical Last Rate App Method to On Receipt", function () {
        pages.royaltyRates.clickLastOnReceiptFromCoverMechanical();
    })
};

exports.checkPrevailingPopupIsPresent = function () {
    it("Check that Prevailing Popup is Displayed", function () {
        expect(pages.royaltyRates.prevailingPopupIsDisplayed()).toBeTruthy();
    })
};

exports.selectOnReceiptMethodInPrevailingPopup = function () {
    it("Click Receipt Method on Prevailing Method Popup", function () {
        pages.royaltyRates.clickOnReceiptMethodOnPrevailingPopup();
    })
};

exports.closeAllRRButTheLast = function () {
    it("Leave only last RR expanded", function () {
        pages.royaltyRates.closeAllButLastIncomeGroups();
    })
};

exports.openAllRRFields = function () {
    it("Expand all RR groups", function () {
        pages.royaltyRates.expandAllIncomeGroups();
    });
};

exports.checkThatInputHasCorrectDecimalNumber = function (number) {
    it("Verify correct number of decimal places", function () {
        pages.royaltyRates.checkDecimalPlaces();
    })
};

exports.checkThatInputHasCorrectNumber = function (number) {
    it("Verify correct number of decimal places", function () {
        expect(pages.royaltyRates.checkDecimalNumber(number)).toBeTruthy();
    });
};

exports.setAllFieldValue = function (value) {
    it("Type in  all RR groups", function () {
        pages.royaltyRates.typeInAllInputs(value);
    });
};

exports.setFieldsValue = function (value) {
    it("Type in  all RR groups", function () {
        pages.royaltyRates.typeAllInputs(value);
    });
};

exports.setFieldsValueTest = function (value) {
    it("Type in  all RR groups", function () {
        pages.royaltyRates.typeAllInputsTest(value);
    });
};

exports.saveRateSet = function () {
    it("Save current Rate Set", function () {
        pages.royaltyRates.clickDoneButtonForRRSet();
        pages.royaltyRates.waitForAjax();
        //pages.royaltyRates.waitForRRToBeSaved();
    });
};

exports.deleteRateSet = function () {
    it("Delete current Rate Set", function () {
        pages.royaltyRates.clickDeleteButtonForRRSet();
        pages.royaltyRates.waitForAjax();
    });
};

exports.waitForRateSetToBeSaved = function () {
    it("Wait for RR To Be Saved", function () {
        pages.royaltyRates.waitForLoadToAppear();
        pages.royaltyRates.waitForLoadToFinish();
    })
};

exports.closeRateSet = function () {
    it("Close current Rate Set ", function () {
    });
};

exports.openRateSetPanel = function () {
    it("  ", function () {
    });
};

exports.openSavedScope = function () {
    it("Click Scope Heading", function () {
        pages.royaltyRates.clickScopeHeading();
    })
};

exports.storeRRData = function () {
    it("Save Data Contained in RR Set", function () {
        hash.royaltyRates.RRName = pages.royaltyRates.getRRInputValue();
        hash.royaltyRates.RRIncomeProvider = pages.royaltyRates.getIncomeProviderInputValue();
        hash.royaltyRates.StartDate = pages.royaltyRates.getEffectiveStartDateInputValue();
    })
};

exports.storeRRObject = function () {
    it("Store RR's data", function () {
        if (!hash.royaltyRates) {
            hash.royaltyRates = {};
        }

        var royaltyRate = {};

        pages.royaltyRates.getRRInputValue().then(function (value) {
            royaltyRate.name = value;
        });

        pages.royaltyRates.getIncomeProviderInputValue().then(function (value) {
            royaltyRate.incomeProvider = value;
        });

        pages.royaltyRates.getEffectiveStartDateInputValue().then(function (value) {
            royaltyRate.effectiveDate = value;
        });

        pages.royaltyRates.activeContractPeriod().getText().then(function (value) {
            royaltyRate.activeContractPeriod = value;
        });

        pages.royaltyRates.createModeActiveScopeName().then(function (value) {
            royaltyRate.activeScopeName = value.toUpperCase();
        });

        var rateSetGroupsList = [];

        pages.rateSetIncomeTypes.getRateSetGroups()
            .then(function (rateSetGroups) {
                rateSetGroups.forEach(function (rateSetGroup) {
                    var rateSetGroupVar = {
                        rateSets: []
                    };

                    pages.rateSetIncomeTypes.getRateSetGroupName(rateSetGroup)
                        .then(function (result) {
                            rateSetGroupVar.rateSetGroupName = result;
                        });

                    pages.rateSetIncomeTypes.getRateSetIncomeType(rateSetGroup)
                        .then(function (rateSetBodies) {
                            rateSetBodies.forEach(function (rateSetBody) {
                                var rateSet = {
                                    incomeRow: []
                                };

                                pages.rateSetIncomeTypes.getRateSetIncomeTypeName(rateSetBody)
                                    .then(function (result) {
                                        rateSet.rateSetName = result;
                                    });

                                pages.rateSetIncomeTypes.getRateSetIncomeTypeRows(rateSetBody)
                                    .then(function (incomeType) {
                                        incomeType.forEach(function (row) {
                                            var tempRow = {};

                                            pages.rateSetIncomeTypes.getRowName(row)
                                                .then(function (result) {
                                                    tempRow.name = result;
                                                });

                                            pages.rateSetIncomeTypes.getRowInputRateFieldValue(row)
                                                .then(function (result) {
                                                    tempRow.value = result;
                                                });

                                            rateSet.incomeRow.push(tempRow);
                                        });
                                    });

                                rateSetGroupVar.rateSets.push(rateSet);
                            })
                        });

                    rateSetGroupsList.push(rateSetGroupVar);
                });
            })
            .then(function () {
                //  console.log(JSON.stringify(rateSetGroupsList, null, 4));
                royaltyRate.rateSetGroupsList = rateSetGroupsList;
            });

        hash.royaltyRates.royaltyRateObjectsList.push(royaltyRate);
        //    console.log(JSON.stringify(rateSetGroupsList, null, 4));
        //console.log(JSON.stringify(rateSetGroups, null, 4));
    });
    //    });
    //
    //});
    //   });
};

exports.storeRRObjectonEditPage = function () {
    it("Store RR's data on edit page", function () {
        if (!hash.royaltyRates) {
            hash.royaltyRates = {};
        }

        var royaltyRate = {};

        pages.royaltyRates.getRRInputValue().then(function (value) {
            royaltyRate.name = value;
        });

        pages.royaltyRates.getEditIncomeProviderInputValue().then(function (value) {
            royaltyRate.incomeProvider = value;
        });

        pages.royaltyRates.getEffectiveStartDateInputValue().then(function (value) {
            royaltyRate.effectiveDate = value;
        });

        pages.royaltyRates.activeContractPeriod().getText().then(function (value) {
            royaltyRate.activeContractPeriod = value;
        });

        pages.royaltyRates.editModeActiveScopeName().getText().then(function (value) {
            royaltyRate.activeScopeName = value.toUpperCase();
        });

        var rateSetGroupsList = [];

        pages.rateSetIncomeTypes.getRateSetGroups()
            .then(function (rateSetGroups) {
                rateSetGroups.forEach(function (rateSetGroup) {
                    var rateSetGroupVar = {
                        rateSets: []
                    };

                    pages.rateSetIncomeTypes.getRateSetGroupName(rateSetGroup)
                        .then(function (result) {
                            rateSetGroupVar.rateSetGroupName = result;
                        });

                    pages.rateSetIncomeTypes.getRateSetIncomeType(rateSetGroup)
                        .then(function (rateSetBodies) {
                            rateSetBodies.forEach(function (rateSetBody) {
                                var rateSet = {
                                    incomeRow: []
                                };

                                pages.rateSetIncomeTypes.getRateSetIncomeTypeName(rateSetBody)
                                    .then(function (result) {
                                        rateSet.rateSetName = result;
                                    });

                                pages.rateSetIncomeTypes.getRateSetIncomeTypeRows(rateSetBody)
                                    .then(function (incomeType) {
                                        incomeType.forEach(function (row) {
                                            var tempRow = {};

                                            pages.rateSetIncomeTypes.getRowName(row)
                                                .then(function (result) {
                                                    tempRow.name = result;
                                                });

                                            pages.rateSetIncomeTypes.getRowInputRateFieldValue(row)
                                                .then(function (result) {
                                                    tempRow.value = result;
                                                });

                                            rateSet.incomeRow.push(tempRow);
                                        });
                                    });

                                rateSetGroupVar.rateSets.push(rateSet);
                            })
                        });

                    rateSetGroupsList.push(rateSetGroupVar);
                });
            })
            .then(function () {
                //  console.log(JSON.stringify(rateSetGroupsList, null, 4));
                royaltyRate.rateSetGroupsList = rateSetGroupsList;
            });

        hash.royaltyRates.royaltyRateObjectsList.push(royaltyRate);
        // console.log(JSON.stringify(royaltyRate, null, 4));
        //console.log(JSON.stringify(rateSetGroups, null, 4));
    });
    //    });
    //
    //});
    //   });
};

exports.saveRRData = function () {
    //Saves income providers !!
    it("Save Data Contained in RR Set", function () {
        hash.royaltyRates.RRName = pages.royaltyRates.getRRInputValue();
        hash.royaltyRates.RRIncomeProvider = pages.royaltyRates.getIncomeProviderInputValueOption();
        hash.royaltyRates.StartDate = pages.royaltyRates.getEffectiveStartDateInputValue();
    })
};

exports.verifyRateSetSavedData = function () {
    it("Check that RR data was saved succsefully", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.royaltyRates.firstSavedRRName()));

        pages.base.scrollIntoView(pages.royaltyRates.firstSavedRRName());

        expect(hash.royaltyRates.RRName).toEqual(pages.royaltyRates.firstSavedRRName().getText());
        //   expect(hash.royaltyRates.RRIncomeProvider).toEqual(pages.royaltyRates.lastSaveRRIncomeProvider().getText());
        //  expect(hash.royaltyRates.StartDate).toEqual(pages.royaltyRates.lastSavedRRStartDate().getText());
    })
};

exports.verifyPublisherShare = function () {
    it("Verify PS saved correctly", function () {
        expect(pages.royaltyRates.originalPublisherNameHasText("ASCAP")).toBe("ASCAP PUB ASC0");
        expect(pages.royaltyRates.administratorNameHasText("ASCAP")).toBe("ASCAP PUB ASC0");
    })
};

exports.storeAllRRData = function () {
    it("Store the added RR's in hashmap", function () {

        // browser.wait(ExpectedConditions.visibilityOf(   pages.royaltyRates.savedRRNames()));

        browser.driver.sleep(3000);
        // console.log(pages.royaltyRates.savedRRNames());
        pages.royaltyRates.savedRRNames().map(function (item) {
            // console.log("MEdvedka");
            // hash.royaltyRates.RRNames.push(item.getText());
            //   console.log(hash.royaltyRates.RRNames);
            return item.getText();
        }).then(function (labels) {
            hash.royaltyRates.RRNames.push(labels);
        });
    });
};

exports.verifyAllRateSetSavedData = function () {
    it("Verify that RR's were saved successfully", function () {
        browser.driver.sleep(3000);

        pages.royaltyRates.savedRRNames().map(function (item) {
            return item.getText();
        }).then(function (labels) {
            var temp = [];

            temp.push(labels);
            expect(temp).toEqual(hash.royaltyRates.RRNames);
        });
    });
};

exports.editIncomeProviderByPartialMatch = function (provider) {
    it("Edit income provider to " + provider, function () {
        pages.royaltyRates.clearIncomeProviderInput();
        pages.royaltyRates.selectIncomeProviderByPartialMatch(provider);
    });
};

exports.editSingleRoyaltySet = function () {
    it("Click RR edit button", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editRoyaltyRates.rrSumarryTable()));
        browser.wait(ExpectedConditions.elementToBeClickable(pages.editRoyaltyRates.rrSumarryTable()));

        pages.editRoyaltyRates.clickRRSumarryTable();
        pages.base.scrollIntoView(pages.editRoyaltyRates.rrSumarryTable());
        var el = pages.editRoyaltyRates.rrSumarryTable();

        browser.actions().mouseMove(el).perform();
        pages.editRoyaltyRates.clickEditSavedRRIcon();
        //
        //
        //  steps.editRoyaltyRates.openRateSetPanel()
    });
};

exports.refreshPage = function () {
    it("Refresh Page", function () {
        browser.driver.navigate().refresh();
    });
};

exports.waitForAjaxCall = function () {
    it("", function () {
        pages.base.waitForAjax();
    })
};

exports.addNewPublisherShares = function () {
    it("Click add new Publisher Shares", function () {
        pages.royaltyRates.clickAddNewPublisherSharesButton();
    });
};

exports.addOriginalPublisherToPublisherShares = function (originalPublisher) {
    it("Input Original Publisher Name", function () {
        pages.royaltyRates.typeIntoOriginalPublisherInput(originalPublisher);
        pages.royaltyRates.selectFirstOriginalPublisher();
    });
};

exports.addAdministratorToPublisherShares = function (administrator) {
    it("Input Administrator Name", function () {
        pages.royaltyRates.typeIntoAdministratorInput(administrator);
        pages.royaltyRates.selectFirstAdministrator();
    });
};

exports.savePublisherShares = function () {
    it("Click Save Publisher Shares Button", function () {
        pages.royaltyRates.clickSavePublisherSharesButton();
    })
};

exports.pause = function () {
    it("Pause Step", function () {
        //  browser.manage().timeouts().pageLoadTimeout(10000);
        browser.sleep(5000);
    });
};

exports.clickOnYesInterCompanyRateCoverMechanical = function () {
    it("Click on the yes inter company rate cover mechanical", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRateCoverMechanical();
    });
};

exports.clickOnYesInterCompanyRateMechanical = function () {
    it("Click on the yes inter company rate  mechanical", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRateMechanical();
    });
};

exports.clickOnYesInterCompanyRateNonSocietyPerformance = function () {
    it("Click on the yes inter company rate non society performance", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRateNonSocietyPerformance();
    });
};

exports.clickOnYesInterCompanyRateOthers = function () {
    it("Click on the yes inter company rate others", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRateOthers();
    });
};

exports.clickOnYesInterCompanyRatePerformance = function () {
    it("Click on the yes inter company rate performance", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRatePerformance();
    });
};

exports.clickOnYesInterCompanyRatePrint = function () {
    it("Click on the yes inter company rate print", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRatePrint();
    });
};

exports.clickOnYesInterCompanyRateSynch = function () {
    it("Click on the yes inter company rate synch", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRateSynch();
    });
};

exports.clickOnYesInterCompanyRateTpp = function () {
    it("Click on the yes inter company rate tpp", function () {
        pages.royaltyRates.clickOnTheYesInterCompanyRateTpp();
        pages.royaltyRates.waitForAjax();
    });
};

exports.overrideInterCompanyRateInputFieldManual = function () {
    it("Override the inter company rate input field ", function () {
        pages.royaltyRates.waitForLoadToFinish();
        pages.royaltyRates.fillIntoTheInterCompanyRateInputField();
        pages.royaltyRates.confirmTheOverrideRRModalDialog();
        pages.royaltyRates.waitForAjax();
    });
};

exports.overrideInterCompanyRateInputFieldByRule = function () {
    it("Override the inter company rate input field ", function () {
        pages.royaltyRates.waitForLoadToFinish();
        pages.royaltyRates.selectFromInterCompanyRateRandomValueDropDown();
        pages.royaltyRates.waitForAjax();
    });
};

exports.clickOnYesInterCompanyRateAllFields = function () {
    describe("Click on the yes inter company rates all fields ", function () {
        steps.base.scrollIntoView("Scroll to others inter company", pages.royaltyRates.elems.yesInterCompanyRateCoverMechanical);
        steps.royaltyRates.clickOnYesInterCompanyRateCoverMechanical();
        steps.royaltyRates.clickOnYesInterCompanyRateMechanical();
        steps.royaltyRates.clickOnYesInterCompanyRateNonSocietyPerformance();
        steps.base.scrollIntoView("Scroll to others inter company", pages.royaltyRates.elems.yesInterCompanyRateOthers);
        steps.royaltyRates.clickOnYesInterCompanyRateOthers();
        steps.royaltyRates.clickOnYesInterCompanyRatePerformance();
        steps.royaltyRates.clickOnYesInterCompanyRatePrint();
        steps.royaltyRates.clickOnYesInterCompanyRateSynch();
        steps.royaltyRates.clickOnYesInterCompanyRateTpp();
    });
};

exports.overrideRoyaltyRateSetNumberI = function (i) {
    it("Override rate set with rate number i ", function () {
        pages.royaltyRates.overrideTheRoyaltyRateSetNumberI(i);
        pages.royaltyRates.waitForAjax();
    });
};

exports.pauseTest = function () {
    it("Test Step", function () {
        browser.pause();
    });
};

//ROYALTY PROCCESSING
exports.goToRoyaltyStatements = function () {
    it("Go to Royalty Statements Page", function () {
        pages.royaltyRates.clickRoyaltyProcessing();
        pages.royaltyRates.clickRoyaltyStatements();
    });
};

exports.clickCreateManualStatement = function () {
    it("Click Create Manual Statement", function () {
        pages.royaltyRates.clickCreateManualStatementButton();
    });
};

exports.typeIncomeProvider = function (value) {
    it("Type in Income Provider", function () {
        pages.royaltyRates.typeInIncomeProvider(value);
    });
};

exports.setStatementDistributionPeriod = function (startYear, startMonth, endYear, endMonth) {
    it("Type in Statement Distribution Period", function () {
        pages.royaltyRates.typeStartYear(startYear);
        pages.royaltyRates.selectStartMonth(startMonth);
        pages.royaltyRates.typeEndYear(endYear);
        pages.royaltyRates.selectEndMonth(endMonth);
    });
};

exports.setStatementAmount = function (value) {
    it("Type in Statement Amount", function () {
        pages.royaltyRates.typeInStatementAmount(value);
    });
};

exports.setExchangeRate = function (value) {
    it("Type in Exchange Rate", function () {
        pages.royaltyRates.typeInExchangeRate(value);
    });
};

exports.createManualStatement = function () {
    it("Create manual statement", function () {
        pages.royaltyRates.createManualStatementClick();
    });
};

exports.enterBatchAmmount = function (value) {
    it("Enter batch amount", function () {
        pages.royaltyRates.typeInBatchAmount(value);
    });
};

exports.clickDefaultSettingsOnBatch = function () {
    it("Click Default Setting on Batch", function () {
        pages.royaltyRates.expandBatchDefaultSettings();
    });
};

exports.selectIncomeTypeForBatch = function (value) {
    it("Select Income Type For Batch", function () {
        pages.royaltyRates.selectIncomeTypeForBatchFromDropdown(value);
    });
};

exports.selectExploitationTerritoryForBatch = function (value) {
    it("Select Exploitation Territory For Batch", function () {
        pages.royaltyRates.selectExploitationTerritoryForBatchFromDropdown(value);
    });
};

exports.addWorkByTitle = function (value) {
    it("Add work by title", function () {
        pages.searchSection.clickDropdownMenu();
        pages.searchSection.selectOrganisationOptionFromDropdown();
        pages.royaltyRates.selectAddByTitleOption();
        pages.royaltyRates.addWorkByTitleFromTypeAhead(value);
    });
};

exports.setAmountRecievedForWork = function (value) {
    it("Set Amount Recieved For Work", function () {
        pages.royaltyRates.inputAmountRecievedForWork(value);
    });
};

exports.clickDoneButtonForManualStatement = function () {
    it("Click Done Button For Manual Statement", function () {
        pages.royaltyRates.clickManualStatementDoneButton();
    });
};

exports.manualStatementIsSaved = function () {
    it("Manual Statement is Saved", function () {
        expect(pages.royaltyRates.manualStatementSavePageIsDisplayed()).toBeTruthy();
    });
};

exports.expandSavedManualStatement = function () {
    it("Expand Saved Manual Statement", function () {
        pages.royaltyRates.clickExpandManualStatement();
    });
};

exports.validateManualStatement = function () {
    it("Validate Manual Statement", function () {
        expect(pages.royaltyRates.validateManualStatementData()).toBeTruthy();
    });
};

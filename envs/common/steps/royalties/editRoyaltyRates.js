'use strict';

var _ = require('lodash'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];

steps.editRoyaltyRates = exports;

exports.addNewRoyaltySet = function () {
    it("Add new Royalty Rate Set", function () {
        pages.editRoyaltyRates.clickNewRoyaltySetButton();
    });
};

exports.inspectRateSetForm = function () {
    it("Inspect Rate Set Form", function () {
        expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeTruthy();
        expect(pages.royaltyRates.elems.incomeProvidesLabel.isPresent()).toBeTruthy();
        expect(pages.royaltyRates.elems.incomeProviderInput.isPresent()).toBeTruthy();
        expect(pages.royaltyRates.elems.incomeDateMethodLabel.isPresent()).toBeTruthy();
        expect(pages.royaltyRates.elems.effectiveStartDateLabel.isPresent()).toBeTruthy();
        expect(pages.royaltyRates.elems.contractualRateLabel.isPresent()).toBeTruthy();
        expect(pages.royaltyRates.elems.interCompanyLabel.isPresent()).toBeTruthy();
    });
};

exports.closeRateSetForm = function () {
    it("Close Rate Set Form", function () {
        pages.editRoyaltyRates.closeRoyaltySet();
        expect(pages.royaltyRates.elems.RRNameLabel.isPresent()).toBeFalsy();
    });
};

exports.clearRoyaltyRateInput = function () {
    it("Delete Name from name input", function () {
        pages.royaltyRates.clearRoyaltyRateNameInput();
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
        // expect(pages.royaltyRates.getEffectiveStartDateInputValue()).toBe("2015-03-12")
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
            pages.royaltyRates.typeIntoEffectiveStartDateInput(date);
            expect(pages.royaltyRates.getEffectiveStartDateErrorMessage()).toBe(errorMessage);
        });
    })
};

exports.setEffectiveStartDate = function (date) {
    it("Set Effective Start Date", function () {
        pages.royaltyRates.typeIntoEffectiveStartDateInput(date);
    });
};

exports.openEffectiveStartDateCalender = function () {
    it("Open Effective start date calender", function () {
        pages.royaltyRates.clickEffectiveStartDateCalendarIcon();
    });
};

exports.addRatePercentageToContractualField = function (percentage) {
    it("Add Percentage to Contractual Rate Field", function () {
        pages.royaltyRates.addPercentageToContractualRateInput(percentage);
    });
};

exports.clickOnReceiptApplicationMethod = function () {
    it("Change Rate Application Method to On Receipt", function () {
        pages.royaltyRates.clickOnReceiptApplicationMethod();
    });
};

exports.rejectChangingRateApplicationMethod = function () {
    it("Reject Changing the Rate Application Method to On Receipt", function () {
    });
};

exports.confirmChangingRateApplicationMethod = function () {
    it("Confirm Changing the Rate Application Method to On Receipt", function () {
        pages.royaltyRates.clickYesOnRateMethodModal();
    });
};

exports.saveRateSet = function () {
    it("Save current Rate Set", function () {
        pages.royaltyRates.clickDoneButtonForRRSet();
        pages.royaltyRates.waitForAjax();
        // browser.pause();
    });
};

exports.closeRateSet = function () {
    it("Close current Rate Set ", function () {
    });
};

exports.openRateSetPanel = function () {
    it("Expand Saved Rate Set", function () {
        pages.editRoyaltyRates.clickOpenRRButton();
    });
};

exports.openSavedScope = function () {
    it("Click Scope Heading", function () {
        pages.royaltyRates.clickScopeHeading();
    });
};

exports.pause = function () {
    it("Pause Step", function () {
        browser.manage().timeouts().pageLoadTimeout(10000);
    });
};

exports.rateSetSavedSuccesfully = function () {
    it("Rate Set Was Saved ", function () {
        pages.editRoyaltyRates.clickRRSumarryTable();
        pages.editRoyaltyRates.clickeditSavedRRIcon();

        expect(pages.editRoyaltyRates.getSavedRRName()).toBe("Rate Set 1");
        expect(pages.editRoyaltyRates.getSavedRRDate()).toBe("2015-11-11");
        //   expect(pages.editRoyaltyRates.getSavedRRIncomeDateMethod().toBe("Deal Signing Territory"));
        // expect(pages.editRoyaltyRates.getSavedRRApplicationMethod().toBe("On Receipt"));
    })
};

exports.test = function () {
    it("Test Step", function () {
        browser.pause();
    });
};

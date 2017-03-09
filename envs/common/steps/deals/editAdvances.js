'use strict'

var pageStep = require('../../../../helpers/basicPageStep.js');

steps.editAdvances = exports;

exports.editSelectContractPeriodAdvancesByIndex = function (index) {
    it("Edit select contract period advances by index ", function () {
        pages.editAdvances.editSelectTheContractPeriodAdvancesByIndex(index);
    });
};

exports.editCheckContractPeriodAdvancesDropDownContainsCp = function (i, contractPeriod) {
    it("Check that contract period advances drop down contains contract period " + contractPeriod, function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("select[name='advanceContractPeriod'] option:nth-child(" + (i + 1) + ")"))));
        browser.driver.findElement(by.css("select[name='advanceContractPeriod'] option:nth-child(" + (i + 1) + ")")).getText()
            .then(function (promise) {
                console.log("Contract periods are " + promise);
                expect(promise).toEqual(contractPeriod);
            });
    });
};

exports.editCheckContractPeriodAdvancesDropDownNotToContainsCp = function (contractPeriod) {
    it("Check that contract period advances drop down not to contain contract period " + contractPeriod, function () {
        browser.driver.findElement(by.css("select[name='advanceContractPeriod'] option")).getText()
            .then(function (promise) {
                console.log("Contract periods are " + promise);
                expect(promise).not.toContain(contractPeriod);
            });
    });
};

exports.editCheckContractPeriodAdvancesNumberIDetailsDisplayed = function (i, contractPeriod) {
    it("Check that contract period advances is displayed on the screen, details of contract period number " + i, function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='allAdvancesForm'] div.view-advance.ng-scope:nth-child(" + (i + 2) + ") h4"))));
        browser.driver.findElement(by.css("div[ng-form='allAdvancesForm'] div.view-advance.ng-scope:nth-child(" + (i + 2) + ") h4")).getText()
            .then(function (promise) {
                console.log("Contract periods details are " + promise);
                expect(promise).toContain(contractPeriod);
            });
    });
};

exports.editCheckContractPeriodAdvancesDetailsIsNotDisplayed = function (contractPeriod) {
    it("Check that contract period advances is not displayed on the screen, details of contract period ", function () {
        browser.driver.findElement(by.css("div[data-ng-form='allAdvancesForm'] div.view-advance.ng-scope h4.advance-status.ng-binding.active")).getText()
            .then(function (promise) {
                console.log("Contract periods details active are " + promise);
                expect(promise).not.toContain(contractPeriod);
            });
    });
};

exports.editClickOnNoToSuspendedAdvanceButton = function () {
    it("Edit click on no to suspended advance button ", function () {
        pages.editAdvances.editClickOnTheNoSuspendButtonAdvances();
    });
};

exports.editClickOnAddAdvanceButton = function () {
    it("Edit click on the add advance button ", function () {
        pages.editAdvances.clickAddAdvanceButton();
    });
};

exports.editSaveAdvance = function () {
    it("Edit click on save advance", function () {
        pages.editAdvances.editSaveTheAdvance();
    });
};

exports.editClickToSeeAdvanceDetailsForContractPeriodNumberI = function (i) {
    it("Edit click to see advances details for contract period number " + i, function () {
        pages.editAdvances.editClickToSeeTheAdvanceDetailsForContractPeriodNumberI(i);
    });
};

exports.editAdvanceDetailsAreaContractPeriodNumberI = function (i) {
    it("Edit advance details area contract period number " + i, function () {
        pages.editAdvances.editTheAdvanceDetailsAreaContractPeriodNumberI(i);
    });
};

exports.editSelectContractPeriodAdvancesByIndexForContractPeriodNumberI = function (index, i) {
    it("Edit select the contract period advances by index for contract period number " + i, function () {
        pages.editAdvances.editSelectTheContractPeriodAdvancesByIndexForContractPeriodNumberI(index, i);
    });
};


exports.editCheckThatContractPeriodNumberIHasSuspendedAdvances = function (i, j) {
    it("Edit check that contract period number " + i + " has suspended advances", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("button[ng-click='addAdvance()']"))));
        browser.driver.findElement(By.css("div[ng-form='allAdvancesForm'] div[ng-repeat='cp in dataHolder.availableContractPeriods | filter:filterCpsForAdvancesView(dataHolder.filterCpId)']:nth-child(" + (i + 2) + ") div[name='advancesViewForm']:nth-child(" + j + ") span[ng-show='advance.supposedToBeSuspended']")).getText()
            .then(function (promise) {
                console.log("Contract periods number " + i + " has suspended advances " + promise);
                expect(promise).toEqual("Suspended");
            });
    });
};

exports.editCheckTheSuspendedContractPeriodDetailsAreGreyedOutContractPeriodNumberI = function (i,j) {
    it("Edit check the suspended contract period details are greyed out for contract period number " + i, function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='allAdvancesForm'] div[ng-repeat='cp in dataHolder.availableContractPeriods | filter:filterCpsForAdvancesView(dataHolder.filterCpId)']:nth-child(" + (i + 2) + ") div[name='advancesViewForm']:nth-child(" + j + ")"))));
        browser.driver.findElement(By.css("div[ng-form='allAdvancesForm'] div[ng-repeat='cp in dataHolder.availableContractPeriods | filter:filterCpsForAdvancesView(dataHolder.filterCpId)']:nth-child(" + (i + 2) + ") div[name='advancesViewForm']:nth-child(" + j + ") div.table.advances-view-table.clearfix.ng-scope>div")).getAttribute("class")
            .then(function (promise) {
                console.log("Contract periods number " + i + " has suspended advances " + promise);
                expect(promise).toContain("muted");
            });
    });
};

exports.editSaveAdvancesDetailsAreaContractPeriodNumberI = function (i) {
    it("Edit save the advance details area contract period number " + i, function () {
        pages.editAdvances.editSaveTheAdvancesDetailsAreaContractPeriodNumberI(i);
    });
};

pageStep([
    'Click Add Advance button',
    'Select Contract Period by index',
    'Set Advance amount',
    'Set currency',
    ['Distribution rules', [
        'Set When',
    ]],
    'Save Advance',
    'Expect to be redirected to Advance Summary',
    'Expect Contract Periods to be',
    'Expect each Contract Period to have advances',
    'Expect Contract Periods to display Advance Assumptions link',
    'Expect Advance Assumptions pop-up to appear'
]);

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
        browser.driver.findElement(by.css("div[data-ng-form='allAdvancesForm'] div.view-advance.ng-scope:nth-child(" + (i + 2) + ") h4")).getText()
            .then(function (promise) {
                console.log("Contract periods details are " + promise);
                expect(promise).toContain(contractPeriod);
            });
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

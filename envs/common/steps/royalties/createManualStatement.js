"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createManualStatement = exports;

exports.selectDesiredProcessingTerritory = function (country) {
    it("Select the desired processing territory", function () {
        pages.createManualStatement.selectTheDesiredProcessingTerritory(country);
    });
};

exports.selectDesiredRoyaltyPeriodValueDropDown = function (royaltyPeriod) {
    it("Select the desired royalty period value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredRoyaltyPeriod(royaltyPeriod);
    });
};

exports.selectDesiredValueForIncomeProviderDropDown = function (incomeProvider) {
    it("Fill into the income provider field and select desired (random) income provider ", function () {
        pages.createManualStatement.fillIntoTheIncomeProviderFieldSpecificValue(incomeProvider);
        pages.createManualStatement.selectTheRandomValueForIncomeProviderDropDown();
    });
};

exports.fillIntoStatementDistributionPeriodStartDate = function (year, month) {
    it("Fill into the start statement distribution period desired year " + year + " and desired month " + month, function () {
        pages.createManualStatement.fillIntoTheStatementDistributionPeriodStartYear(year);
        pages.createManualStatement.selectTheDesiredStatementDistributionPeriodStartMonth(month);
    });
};

exports.fillIntoStatementDistributionPeriodEndDate = function (year, month) {
    it("Fill into the end statement distribution period desired year " + year + " and desired month " + month, function () {
        pages.createManualStatement.fillIntoTheStatementDistributionPeriodEndYear(year);
        pages.createManualStatement.selectTheDesiredStatementDistributionPeriodEndMonth(month);
    });
};

exports.fillIntoStatementAmountInputField = function (amount) {
    it("Fill into statement amount input field the desired value " + amount, function () {
        pages.createManualStatement.fillIntoTheStatementAmountInputField(amount);
    });
};

exports.selectCurrencyFromStatementAmountCurrencyDropDown = function (currency) {
    it("Select desired currency from statement amount currency drop down " + currency, function () {
        pages.createManualStatement.selectTheCurrencyFromStatementAmountCurrencyDropDown(currency);
    });
};

exports.fillIntoCommissionRateInputField = function (value) {
    it("Fill into the commission rate input field the value " + value, function () {
        pages.createManualStatement.fillIntoTheCommissionRateInputField(value);
    });
};

exports.fillIntoExchangeRateInputField = function (value) {
    it("Fill into the exchange rate input field the value " + value, function () {
        pages.createManualStatement.fillIntoTheExchangeRateInputField(value);
    });
};

exports.clickOnCreateButtonManualStatement = function () {
    it("Click on the create button for manual statement ", function () {
        pages.createManualStatement.clickOnTheCreateButtonManualStatement();
        pages.createManualStatement.waitForAjax();
    });
};

exports.fillIntoBatchAmountValue = function (amount) {
    it("Fill into the batch amount value " + amount, function () {
        pages.createManualStatement.fillIntoTheBatchAmountValue(amount);
    });
};

exports.clickOnDefaultSettingsLink = function () {
    it("Click on the default settings link ", function () {
        pages.createManualStatement.clickOnTheDefaultSettingsLink();
        pages.createManualStatement.waitForAjax();
    });
};

exports.selectDesiredIncomeTypeValueFromDropDown = function (incomeType) {
    it("Select the desired income type value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredIncomeTypeValueFromDropDown(incomeType);
    });
};

exports.selectDesiredExploitationTerritoryValueFromDropDown = function (territory) {
    it("Select the desired territory value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredExploitationTerritoryValueFromDropDown(territory);
    });
};

exports.selectDesiredWorkTypeToSearchFromDropDown = function (workType) {
    it("Select the desired work type to search from drop down " + workType, function () {
        pages.createManualStatement.selectTheDesiredWorkTypeToSearchFromDropDown(workType);
    });
};

exports.fillIntoWorksInputFieldDesiredWork = function (workIdentifier) {
    it("Fill into the works input field desired work value ", function () {
        pages.createManualStatement.fillIntoTheWorksInputFieldDesiredWork(workIdentifier);
    });
};

exports.selectDesiredWorkForManualStatement = function () {
    it("Select the desired work for manual statement ", function () {
        pages.createManualStatement.selectTheDesiredWorkForManualStatement();
        pages.createManualStatement.waitForAjax();
    });
};

exports.selectAndAddWorkForManualStatement = function(){
    it("Select and add the work for manual statement if it doesn't exist", function(){
       pages.createManualStatement.selectAndAddTheWorkForManualStatement();
    });
};

exports.fillIntoAmountReceivedValue = function (amount) {
    it("Fill into the amount received value " + amount, function () {
        pages.createManualStatement.fillIntoTheAmountReceivedValue(amount);
    });
};

exports.clickOnDoneButtonManualStatement = function () {
    it("Click on the done button for manual statement ", function () {
        pages.createManualStatement.clickOnTheDoneButtonManualStatement();
        pages.createManualStatement.waitForAjax();
    });
};

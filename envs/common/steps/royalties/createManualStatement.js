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
    it("Fill into the statement distribution period desired year " + year + " and desired month " + month, function () {

    });
};
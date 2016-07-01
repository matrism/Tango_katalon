"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createManualStatement = exports;

exports.selectDesiredProcessingTerritory = function (country) {
    it("Select the desired processing territory", function () {
        pages.createManualStatement.selectTheDesiredProcessingTerritory(country);
    });
};

exports.selectDesiredValueForIncomeProviderDropDown = function (incomeProvider) {
    it("Fill into the income provider field and select desired (random) income provider ", function () {
        pages.createManualStatement.fillIntoTheIncomeProviderFieldSpecificValue(incomeProvider);
        pages.createManualStatement.selectTheRandomValueForIncomeProviderDropDown();
    });
};
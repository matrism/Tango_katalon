'use strict';

var _ = require('lodash'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.incomeProvider = exports;

exports.createValidRoyaltySetPair = function (table, message) {
    var fields = table.shift();

    _.each(table, function (row, index) {
        var Income_Provider_1 = row[0],
            Date_1 = row[1],
            Income_Provider_2 = row[2],
            Date_2 = row[3];

        var consoleMessage;

        consoleMessage = message.replace('%Income_Provider_1%', Income_Provider_1);
        consoleMessage = consoleMessage.replace('%Date_1%', Date_1);
        consoleMessage = consoleMessage.replace('%Income_Provider_2%', Income_Provider_2);
        consoleMessage = consoleMessage.replace('%Date_2%', Date_2);

        describe(consoleMessage, function () {
            autoIt('pages.deal.clickWarnerLogo');
            autoIt('pages.mainHeader.createNewRecord', 'Deal');
            autoIt('pages.createDealGeneral.selectDesiredSigningTerritory', 'Argentina');
            autoIt('pages.createDealGeneral.fillContractingPartiesField', 'bmi');

            it('Wait for suggestions', function() {
                var suggestion = $('.tg-typeahead__suggestions-container');
                browser.wait(ExpectedConditions.visibilityOf(suggestion));
                expect(suggestion.getText()).not.toContain('No results');
            });

            autoIt('pages.createDealGeneral.selectRandomContractingPartyValueFromDropDown');

            autoIt('pages.deal.continueToNextPage');

            autoIt('pages.createDealContractPeriod.fillStartActualDate');
            autoIt('pages.createDealContractPeriod.fillTargetEndMonths');

            autoIt('pages.createDealScope.addScopeForm');
            autoIt('pages.createDealScope.selectContractTypeScope', 'Finder');
            autoIt('pages.createDealScope.addTheSpecificTerritoryByTypingToScope', 'United States');

            autoIt('pages.createDealScope.selectRandomCountry');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_1);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_1);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '10');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_2);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_2);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '13');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');

            it('Expect no error messages', function() {
                expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeFalsy();
            });

            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');
        }
        );
    });
};

exports.editValidRoyaltySetPair = function (table, message) {
    var fields = table.shift();
    _.each(table, function (row, index) {
        var Income_Provider_1 = row[0],
            Date_1 = row[1],
            Income_Provider_2 = row[2],
            Date_2 = row[3];

        var consoleMessage;

        consoleMessage = message.replace('%Income_Provider_1%', Income_Provider_1);
        consoleMessage = consoleMessage.replace('%Date_1%', Date_1);
        consoleMessage = consoleMessage.replace('%Income_Provider_2%', Income_Provider_2);
        consoleMessage = consoleMessage.replace('%Date_2%', Date_2);

        describe(consoleMessage, function () {
            autoIt('pages.deal.clickWarnerLogo');
            autoIt('pages.mainHeader.createNewRecord', 'Deal');
            autoIt('pages.createDealGeneral.selectDesiredSigningTerritory', 'Argentina');
            autoIt('pages.createDealGeneral.fillContractingPartiesField', 'bmi');

            it('Wait for suggestions', function() {
                var suggestion = $('.tg-typeahead__suggestions-container');
                browser.wait(ExpectedConditions.visibilityOf(suggestion));
                expect(suggestion.getText()).not.toContain('No results');
            });

            autoIt('pages.createDealGeneral.selectRandomContractingPartyValueFromDropDown');

            autoIt('pages.deal.continueToNextPage');

            autoIt('pages.createDealContractPeriod.fillStartActualDate');
            autoIt('pages.createDealContractPeriod.fillTargetEndMonths');

            autoIt('pages.createDealScope.addScopeForm');
            autoIt('pages.createDealScope.selectContractTypeScope', 'Finder');
            autoIt('pages.createDealScope.addTheSpecificTerritoryByTypingToScope', 'United States');

            autoIt('pages.createDealScope.selectRandomCountry');

            //Added buttons
            autoIt('pages.deal.continueToNextPage');
            autoIt('pages.deal.saveNewDeal');
            steps.deal.waitForDealToBeSaved();

            autoIt('pages.deal.clickFirstScopeHeader');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_1);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_1);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '10');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_2);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_2);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '13');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');

            it('Expect no error messages', function() {
                expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeFalsy();
            });

            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');
        });
    })
};

exports.createInvalidRoyaltySetPair = function (table, message) {
    var fields = table.shift();
    _.each(table, function (row, index) {
        var Income_Provider_1 = row[0],
            Date_1 = row[1],
            Income_Provider_2 = row[2],
            Date_2 = row[3];

        var consoleMessage;

        consoleMessage = message.replace('%Income_Provider_1%', Income_Provider_1);
        consoleMessage = consoleMessage.replace('%Date_1%', Date_1);
        consoleMessage = consoleMessage.replace('%Income_Provider_2%', Income_Provider_2);
        consoleMessage = consoleMessage.replace('%Date_2%', Date_2);

        describe(consoleMessage, function () {
            autoIt('pages.deal.clickWarnerLogo');
            autoIt('pages.mainHeader.createNewRecord', 'Deal');
            autoIt('pages.createDealGeneral.selectDesiredSigningTerritory', 'Argentina');
            autoIt('pages.createDealGeneral.fillContractingPartiesField', 'bmi');

            it('Wait for suggestions', function() {
                var suggestion = $('.tg-typeahead__suggestions-container');
                browser.wait(ExpectedConditions.visibilityOf(suggestion));
                expect(suggestion.getText()).not.toContain('No results');
            });

            autoIt('pages.createDealGeneral.selectRandomContractingPartyValueFromDropDown');

            autoIt('pages.deal.continueToNextPage');

            autoIt('pages.createDealContractPeriod.fillStartActualDate');
            autoIt('pages.createDealContractPeriod.fillTargetEndMonths');

            autoIt('pages.createDealScope.addScopeForm');
            autoIt('pages.createDealScope.selectContractTypeScope', 'Finder');
            autoIt('pages.createDealScope.addTheSpecificTerritoryByTypingToScope', 'United States');

            autoIt('pages.createDealScope.selectRandomCountry');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_1);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_1);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '10');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_2);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_2);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '13');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');

            it('Expect error messages', function() {
                expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeTruthy();
            });

            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');
        });
    })
};

exports.editInvalidRoyaltySetPair = function (table, message) {
    var fields = table.shift();
    _.each(table, function (row, index) {
        var Income_Provider_1 = row[0],
            Date_1 = row[1],
            Income_Provider_2 = row[2],
            Date_2 = row[3];

        var consoleMessage;

        consoleMessage = message.replace('%Income_Provider_1%', Income_Provider_1);
        consoleMessage = consoleMessage.replace('%Date_1%', Date_1);
        consoleMessage = consoleMessage.replace('%Income_Provider_2%', Income_Provider_2);
        consoleMessage = consoleMessage.replace('%Date_2%', Date_2);

        describe(consoleMessage, function () {
            autoIt('pages.deal.clickWarnerLogo');
            autoIt('pages.mainHeader.createNewRecord', 'Deal');
            autoIt('pages.createDealGeneral.selectDesiredSigningTerritory', 'Argentina');
            autoIt('pages.createDealGeneral.fillContractingPartiesField', 'bmi');

            it('Wait for suggestions', function() {
                var suggestion = $('.tg-typeahead__suggestions-container');
                browser.wait(ExpectedConditions.visibilityOf(suggestion));
                expect(suggestion.getText()).not.toContain('No results');
            });

            autoIt('pages.createDealGeneral.selectRandomContractingPartyValueFromDropDown');

            autoIt('pages.deal.continueToNextPage');

            autoIt('pages.createDealContractPeriod.fillStartActualDate');
            autoIt('pages.createDealContractPeriod.fillTargetEndMonths');

            autoIt('pages.createDealScope.addScopeForm');
            autoIt('pages.createDealScope.selectContractTypeScope', 'Finder');
            autoIt('pages.createDealScope.addTheSpecificTerritoryByTypingToScope', 'United States');

            autoIt('pages.createDealScope.selectRandomCountry');

            //Added buttons
            autoIt('pages.deal.continueToNextPage');
            autoIt('pages.deal.saveNewDeal');
            steps.deal.waitForDealToBeSaved();

            it('Wait for visibility of deal brief number', function() {
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));
            });

            autoIt('pages.deal.clickFirstScopeHeader');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_1);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_1);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '10');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');

            autoIt('pages.royaltyRates.clickNewRoyaltySetButton');
            autoIt('pages.royaltyRates.selectIncomeProviderByPartialMatch', Income_Provider_2);
            autoIt('pages.royaltyRates.typeIntoEffectiveStartDateInput', Date_2);
            autoIt('pages.royaltyRates.addPercentageToContractualRateInput', '13');

            autoIt('pages.royaltyRates.clickButtonOnReceiptApplicationMethod');
            autoIt('pages.royaltyRates.waitForAjax');
            autoIt('pages.royaltyRates.clickYesOnRateMethodModal');
            autoIt('pages.royaltyRates.waitForAjax');

            it('Expect error messages', function() {
                expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeTruthy();
            });

            autoIt('pages.royaltyRates.clickDoneButtonForRRSet');
        });
    })
};

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

        consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
        consoleMessage = consoleMessage.replace("%Date_1%", Date_1);
        consoleMessage = consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
        consoleMessage = consoleMessage.replace("%Date_2%", Date_2);

        it(consoleMessage, function () {
            pages.deal.clickWarnerLogo();
            pages.deal.open().waitForAjax();
            pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
            pages.create_deal_general.fillContractingPartiesField("bmi");
            var suggestion = $(".tg-typeahead__suggestions-container");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
            pages.create_deal_general.selectContractingPartyValue("(021)\n BMI");

            pages.deal.continueToNextPage();

            pages.create_deal_contract_period.fillStartActualDate();
            pages.create_deal_contract_period.fillTargetEndMonths();

            pages.create_deal_scope.addScopeForm();
            pages.create_deal_scope.selectContractTypeScope(pages.create_deal_scope.contractTypeDropDown, "Finder");
            pages.create_deal_scope.addTerritoryByTypingToScope();

            pages.create_deal_scope.selectRandomCountry();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_1);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
            pages.royaltyRates.addPercentageToContractualRateInput("10");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            pages.royaltyRates.clickDoneButtonForRRSet();


            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_2);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_2);
            pages.royaltyRates.addPercentageToContractualRateInput("13");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeFalsy();
            pages.royaltyRates.clickDoneButtonForRRSet();
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

        consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
        consoleMessage = consoleMessage.replace("%Date_1%", Date_1);
        consoleMessage = consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
        consoleMessage = consoleMessage.replace("%Date_2%", Date_2);

        it(consoleMessage, function () {
            pages.deal.clickWarnerLogo();
            pages.deal.open().waitForAjax();
            pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
            pages.create_deal_general.fillContractingPartiesField("bmi");
            var suggestion = $(".tg-typeahead__suggestions-container");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
            pages.create_deal_general.selectContractingPartyValue("(021)\n BMI");

            pages.deal.continueToNextPage();

            pages.create_deal_contract_period.fillStartActualDate();
            pages.create_deal_contract_period.fillTargetEndMonths();

            pages.create_deal_scope.addScopeForm();
            pages.create_deal_scope.selectContractTypeScope(pages.create_deal_scope.contractTypeDropDown, "Finder");
            pages.create_deal_scope.addTerritoryByTypingToScope();

            pages.create_deal_scope.selectRandomCountry();

            //Added buttons
            pages.deal.continueToNextPage();
            pages.deal.saveNewDeal();

            pages.deal.clickScopeHeader();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_1);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
            pages.royaltyRates.addPercentageToContractualRateInput("10");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            pages.royaltyRates.clickDoneButtonForRRSet();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_2);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_2);
            pages.royaltyRates.addPercentageToContractualRateInput("13");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeFalsy();
            pages.royaltyRates.clickDoneButtonForRRSet();
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

        consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
        consoleMessage = consoleMessage.replace("%Date_1%", Date_1);
        consoleMessage = consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
        consoleMessage = consoleMessage.replace("%Date_2%", Date_2);

        it(consoleMessage, function () {
            pages.deal.clickWarnerLogo();
            pages.deal.open().waitForAjax();
            pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
            pages.create_deal_general.fillContractingPartiesField("bmi");
            var suggestion = $(".tg-typeahead__suggestions-container");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
            pages.create_deal_general.selectContractingPartyValue("(021)\n BMI");

            pages.deal.continueToNextPage();

            pages.create_deal_contract_period.fillStartActualDate();
            pages.create_deal_contract_period.fillTargetEndMonths();

            pages.create_deal_scope.addScopeForm();
            pages.create_deal_scope.selectContractTypeScope(pages.create_deal_scope.contractTypeDropDown, "Finder");
            pages.create_deal_scope.addTerritoryByTypingToScope();

            pages.create_deal_scope.selectRandomCountry();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_1);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
            pages.royaltyRates.addPercentageToContractualRateInput("10");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            pages.royaltyRates.clickDoneButtonForRRSet();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_2);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_2);
            pages.royaltyRates.addPercentageToContractualRateInput("13");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeTruthy();

            pages.royaltyRates.clickDoneButtonForRRSet();
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

        consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
        consoleMessage = consoleMessage.replace("%Date_1%", Date_1);
        consoleMessage = consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
        consoleMessage = consoleMessage.replace("%Date_2%", Date_2);

        it(consoleMessage, function () {
            pages.deal.clickWarnerLogo();
            pages.deal.open().waitForAjax();
            pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
            pages.create_deal_general.fillContractingPartiesField("bmi");
            var suggestion = $(".tg-typeahead__suggestions-container");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
            pages.create_deal_general.selectContractingPartyValue("(021)\n BMI");

            pages.deal.continueToNextPage();

            pages.create_deal_contract_period.fillStartActualDate();
            pages.create_deal_contract_period.fillTargetEndMonths();

            pages.create_deal_scope.addScopeForm();
            pages.create_deal_scope.selectContractTypeScope(pages.create_deal_scope.contractTypeDropDown, "Finder");
            pages.create_deal_scope.addTerritoryByTypingToScope();

            pages.create_deal_scope.selectRandomCountry();

            //Added buttons
            pages.deal.continueToNextPage();
            pages.deal.saveNewDeal();

            browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));

            pages.deal.clickScopeHeader();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_1);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
            pages.royaltyRates.addPercentageToContractualRateInput("10");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            pages.royaltyRates.clickDoneButtonForRRSet();

            pages.royaltyRates.clickNewRoyaltySetButton();
            pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_2);
            pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_2);
            pages.royaltyRates.addPercentageToContractualRateInput("13");

            pages.royaltyRates.clickOnReceiptApplicationMethod();
            pages.royaltyRates.clickYesOnRateMethodModal();
            expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeTruthy();

            pages.royaltyRates.clickDoneButtonForRRSet();
        });
    })
};

exports.test = function () {
    it("Test Step", function () {
        browser.pause();
    });
};

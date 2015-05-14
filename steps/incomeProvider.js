var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.incomeProvider === undefined) {
    steps.incomeProvider = {


        createValidRoyaltySetPair:function(table, message) {



            var fields = table.shift();
            _.each(table, function (row, index) {





                var Income_Provider_1 = row[0],
                    Date_1 = row[1],
                    Income_Provider_2 = row[2],
                    Date_2 = row[3]

                    ;

                var consoleMessage;

                consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
                consoleMessage =  consoleMessage.replace("%Date_1%", Date_1);
                consoleMessage =  consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
                consoleMessage =  consoleMessage.replace("%Date_2%", Date_2);

                it(consoleMessage,function()
                    {




                        pages.deal_general.clickWarnerLogo();
                        pages.deal_general.open().waitForAjax();
                        pages.deal_general.selectDesiredSigningTerritory("Argentina");
                        pages.deal_general.fillContractingPartiesField("bmi");
                        var suggestion = $(".tg-typeahead__suggestions-container");
                        browser.wait(ExpectedConditions.visibilityOf(suggestion));
                        expect(suggestion.getText()).not.toContain("No results");
                        pages.deal_general.selectContractingPartyValue("(021)\n BMI");



                        pages.deal.continueToNextPage();



                        browser.wait(ExpectedConditions.visibilityOf(pages.deal_contract_period.startDate()));
                        pages.deal_contract_period.fillStartActualDate();
                        pages.deal_contract_period.fillTargetEndMonths();


                        pages.deal_scope.addScopeForm();
                        pages.deal_scope.selectContractTypeScope(pages.deal_scope.contractTypeDropDown(), "Finder");
                        pages.deal_scope.addTerritoryByTypingToScope();

                        pages.deal_scope.selectRandomCountry();



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
                        pages.royaltyRates.clickDoneButtonForRRSet();

                       expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeFalsy();




                    }
                );


            })},

        createInvalidRoyaltySetPair:function(table, message) {



            var fields = table.shift();
            _.each(table, function (row, index) {





                var Income_Provider_1 = row[0],
                    Date_1 = row[1],
                    Income_Provider_2 = row[2],
                    Date_2 = row[3]

                    ;

                var consoleMessage;

                consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
                consoleMessage =  consoleMessage.replace("%Date_1%", Date_1);
                consoleMessage =  consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
                consoleMessage =  consoleMessage.replace("%Date_2%", Date_2);

                it(consoleMessage,function()
                    {




                        pages.deal_general.clickWarnerLogo();
                        pages.deal_general.open().waitForAjax();
                        pages.deal_general.selectDesiredSigningTerritory("Argentina");
                        pages.deal_general.fillContractingPartiesField("bmi");
                        var suggestion = $(".tg-typeahead__suggestions-container");
                        browser.wait(ExpectedConditions.visibilityOf(suggestion));
                        expect(suggestion.getText()).not.toContain("No results");
                        pages.deal_general.selectContractingPartyValue("(021)\n BMI");



                        pages.deal.continueToNextPage();



                        browser.wait(ExpectedConditions.visibilityOf(pages.deal_contract_period.startDate()));
                        pages.deal_contract_period.fillStartActualDate();
                        pages.deal_contract_period.fillTargetEndMonths();


                        pages.deal_scope.addScopeForm();
                        pages.deal_scope.selectContractTypeScope(pages.deal_scope.contractTypeDropDown(), "Finder");
                        pages.deal_scope.addTerritoryByTypingToScope();

                        pages.deal_scope.selectRandomCountry();



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
                        pages.royaltyRates.clickDoneButtonForRRSet();

                        expect(pages.royaltyRates.errorMessageIsDisplayed()).toBeTruthy();




                    }
                );


            })},

        test: function () {


            it("Test Step", function () {
                browser.pause();

            });

        }

    };
}

module.exports = steps.incomeProvider;

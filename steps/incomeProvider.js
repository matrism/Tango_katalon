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
                    Income_Provider_2 = row[3],
                    Date_2 = row[4]

                    ;
                var consoleMessage;

                consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
                consoleMessage =  consoleMessage.replace("%Date_1%", Date_1);
                consoleMessage =  consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
                consoleMessage =  consoleMessage.replace("%Date_2%", Date_2);

                it(consoleMessage,function()
                    {
                        pages.royaltyRates.clickNewRoyaltySetButton();
                        pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
                        pages.royaltyRates.addPercentageToContractualRateInput("10");
                        pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_1);
                        pages.royaltyRates.clickOnReceiptApplicationMethod();
                        pages.royaltyRates.clickYesOnRateMethodModal();
                        pages.royaltyRates.clickDoneButtonForRRSet();

                        pages.royaltyRates.clickNewRoyaltySetButton();
                        pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_2);
                        pages.royaltyRates.addPercentageToContractualRateInput("13");
                        pages.royaltyRates.selectIncomeProviderByPartialMatch(Income_Provider_2);
                        pages.royaltyRates.clickOnReceiptApplicationMethod();
                        pages.royaltyRates.clickYesOnRateMethodModal();
                        pages.royaltyRates.clickDoneButtonForRRSet();


                    }
                );


            })},

        createInvalidRoyaltySetPair:function(table, message) {



            var fields = table.shift();
            _.each(table, function (row, index) {
                var Income_Provider_1 = row[0],
                    Date_1 = row[1],
                    Income_Provider_2 = row[3],
                    Date_2 = row[4]

                    ;
                var consoleMessage;

                consoleMessage = message.replace("%Income_Provider_1%", Income_Provider_1);
                consoleMessage =  consoleMessage.replace("%Date_1%", Date_1);
                consoleMessage =  consoleMessage.replace("%Income_Provider_2%", Income_Provider_2);
                consoleMessage =  consoleMessage.replace("%Date_2%", Date_2);

                it(consoleMessage,function()
                    {

                        pages.royaltyRates.clickNewRoyaltySetButton();
                        pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
                        pages.royaltyRates.addPercentageToContractualRateInput("10");
                        pages.royaltyRates.selectIncomeProvider(Income_Provider_1);
                        pages.royaltyRates.clickOnReceiptApplicationMethod();
                        pages.royaltyRates.clickYesOnRateMethodModal();
                        pages.royaltyRates.clickDoneButtonForRRSet();

                        pages.royaltyRates.clickNewRoyaltySetButton();
                        pages.royaltyRates.typeIntoEffectiveStartDateInput(Date_1);
                        pages.royaltyRates.addPercentageToContractualRateInput("10");
                        pages.royaltyRates.selectIncomeProvider(Income_Provider_1);
                        pages.royaltyRates.clickOnReceiptApplicationMethod();
                        pages.royaltyRates.clickYesOnRateMethodModal();
                        pages.royaltyRates.clickDoneButtonForRRSet();



                        //Check pairs of income provider

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

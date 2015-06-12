var _ = require("lodash");
var promise = protractor.promise;
hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.RRSummaryTable === undefined) {
    steps.RRSummaryTable = {


        validateIncomeRatesTable: function () {
            it("Check that Income Rates Table displays correct data", function () {

                browser.wait(ExpectedConditions.visibilityOf($(".rate-summary-table__scope")));

                var RRList = pages.RRSummaryTable.rateSetsNames();
                browser.wait(function() {
                    return RRList.first().isPresent().then(function(present) {
                        if(!present) {
                            return false;
                        }
                        return RRList.first().isDisplayed();
                    });
                });

                var RRArray = [];

                RRList.count().then(function(count) {
                    console.log(count);
                });
                RRList.each( function(n) {
                    n.getText().then(function(text) {
                        console.log(text);
                        var royaltyRate = {

                            name:text
                        };
                         RRArray.push(royaltyRate);
                    })
                    }).then(function()
                {
                    console.log(RRArray);
                    console.log(hash.royaltyRates.royaltyRateObjectsList);
                    expect(RRArray).toEqual(hash.royaltyRates.royaltyRateObjectsList);
                });








            })


        }

    };
}


module.exports = steps.RRSummaryTable;

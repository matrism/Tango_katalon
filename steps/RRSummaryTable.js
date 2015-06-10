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

            //    browser.wait
// console.log(pages.RRSummaryTable.rateSetsNames().length);
                //browser.sleep(10000);
                //
                //
                //
                var RRArray = [];
                //
                //
                //
                //
                RRList.count().then(function(count) {
                    console.log(count);
                });
                RRList.each( function(n) {
                    n.getText().then(function(text) {
                        console.log(text);
                    });
                });
//var i ;
//                for (i = 0; i < RRList.length; i++) {
//                   console.log( RRList[i].getText());
//console.log("some text god dammit");
//                    var royaltyRate = {
//
//                        name:RRList[i].getText()
//                    };
//                    RRArray.push(royaltyRate);
//                }



                        //var royaltyRate = {
                        //
                        //    name:(el.$("div>div:nth-child(1)")).getText()
                        //};
                  //  console.log(el.getText());
                    //
                    //    RRArray.push(royaltyRate);
                    //
                    //
                    //
                    //
                    //});
                    //
                 //expect(RRArray).toBe(hash.royaltyRates.royaltyRateObjectsList);





            })

        }

    };
}


module.exports = steps.RRSummaryTable;

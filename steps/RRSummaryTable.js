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
                browser.wait(ExpectedConditions.visibilityOf( pages.RRSummaryTable.rateSetsNames()));

            //    browser.wait
// console.log(pages.RRSummaryTable.rateSetsNames().length);
                //browser.sleep(10000);
                //
                //
                 var RRList = pages.RRSummaryTable.rateSetsNames();
                //
                var RRArray = [];
                //
                //
                //
                //
                _.forEach(RRList, function(n) {
                   console.log(RRList.length);
                  console.log(n.getText());
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

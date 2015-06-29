var _ = require("lodash");
var promise = protractor.promise;
hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];
var ExpectedConditions = protractor.ExpectedConditions;
if (steps.RRSummaryTable === undefined) {
    steps.RRSummaryTable = {
        saveDisplayedIncomeRates: function () {
            it("Store Displayed Income Rates Data", function () {

                browser.wait(ExpectedConditions.visibilityOf($(".rate-summary-table__scope")));
                var RRList = pages.RRSummaryTable.rrList();
                browser.wait(function() {
                    return RRList.first().isPresent().then(function(present) {
                        if(!present) {
                            return false;
                        }

                        return RRList.first().isDisplayed();
                    });
                });

                var RRArray = [];



                RRList.each( function(el)
                {

                    el.$$(".rate-summary-table__scope-rates").each(function(rrSet)
                    {

                        var royaltyRate = {};

                        el.$(".rate-summary-table__scope-details>.rate-summary-table__scope-details-scope-name").getText().then(function (result) {
                            royaltyRate.activeScopeName = result.toUpperCase();
                        });
                        el.$(".rate-summary-table__scope>.rate-summary-table__scope-details>.rate-summary-table__scope-details-dl>:nth-child(3)>dd>ul>li").getText().then(function (result) {
                            royaltyRate.activeContractPeriod = result;
                        });



                        rrSet.$("div>div:nth-child(1)>div").getText().then(function (result) {

                            royaltyRate.name = result.split('\n')[0].trim();

                        });
                        rrSet.$("div>div:nth-child(4)").getText().then(function (result) {
                            royaltyRate.incomeProvider = result;
                        });
                        rrSet.$("div>div:nth-child(5)").getText().then(function (result) {
                            royaltyRate.effectiveDate = result;

                          //  RRArray.push(royaltyRate);

                        });


                        var rateSetGroupsList = [];



                        pages.RRSummaryTable.getRateSetGroups(rrSet)
                            .then(function (rateSetGroups) {
                                rateSetGroups.forEach(function (rateSetGroup) {
                                    var rateSetGroupVar = {
                                        rateSets: []
                                    };

                                 // console.log(rateSetGroup);
                                   $$("div.rate-summary-table__rate-group-item>div:first-child").first().getText()
                                        .then(function (result) {
                                                    rateSetGroupVar.rateSetGroupName = result.toUpperCase();
                                                });
                                    //pages.RRSummaryTable.getRateSetGroupName(rateSetGroup)
                                    //    .then(function (result) {
                                    //        rateSetGroupVar.rateSetGroupName = result.toUpperCase();
                                    //    });
                                    //
                                    //pages.RRSummaryTable.getRateSetIncomeType(rateSetGroup)
                                    //    .then(function (rateSetBodies) {
                                    //        rateSetBodies.forEach(function (rateSetBody) {
                                    //            var rateSet = {
                                    //                incomeRow: []
                                    //            };
                                    //
                                    //            pages.RRSummaryTable.getRateSetIncomeTypeName(rateSetBody)
                                    //                .then(function (result) {
                                    //                    //   console.log("Rate Set Name",result);
                                    //                    rateSet.rateSetName = result;
                                    //                });
                                    //
                                    //            pages.RRSummaryTable.getRateSetIncomeTypeRows(rateSetBody)
                                    //                .then(function (incomeType) {
                                    //                    incomeType.forEach(function (row) {
                                    //                        var tempRow = {};
                                    //
                                    //                        pages.RRSummaryTable.getRowName(row)
                                    //                            .then(function (result) {
                                    //                                tempRow.name = result;
                                    //                            });
                                    //
                                    //                        pages.RRSummaryTable.getRowInputRateFieldValue(row)
                                    //                            .then(function (result) {
                                    //
                                    //
                                    //
                                    //                                tempRow.value = result.split('.')[0];
                                    //                            });
                                    //
                                    //                        rateSet.incomeRow.push(tempRow);
                                    //                    });
                                    //                });
                                    //
                                    //            rateSetGroupVar.rateSets.push(rateSet);
                                    //        })
                                    //    });

                                    rateSetGroupsList.push(rateSetGroupVar);
                                    //     console.log(JSON.stringify("Rate set group"+rateSetGroupVar, null, 4));
                                });
                            })
                            .then(function () {

                                royaltyRate.rateSetGroupsList = rateSetGroupsList;
                            });


                        RRArray.push(royaltyRate);



                    });


                    }).then(function()
                {
                    console.log(JSON.stringify(RRArray, null, 4));
                    hash.royaltyRates.royaltyRateObjectsList = RRArray;

                });




                });

            //});
        },
        expandRR: function () {
            it("EXPAND RR", function () {
                browser.sleep(5000);
                browser.wait(ExpectedConditions.visibilityOf($(".rate-summary-table__scope")));

                $$(".rate-summary-table__scope-rates>div>div>.rate-summary-table__collapse-btn")
                    .then(function (result) {

                        for (i = 0; i < result.length; i++) {
                            result[i].click();
                        }
                    }
                );
                //var innerArrow = $$("div:not(.rate-summary-table__scope-item-col)>.rate-summary-table__collapse-btn");
                //

            })
        },
        expandInnerRR: function () {
            it("Expand Inner RR's", function () {
                browser.sleep(5000);
                browser.wait(ExpectedConditions.visibilityOf($$("div:not(.rate-summary-table__scope-item-col)>.rate-summary-table__collapse-btn").first()));
                $$("div:not(.rate-summary-table__scope-item-col)>.rate-summary-table__collapse-btn")
                    .then(function (result) {

                        for (i = 0; i < result.length; i++) {
                            result[i].click();
                        }
                    }
                );
            })
        },

        validateIncomeRatesTable: function () {
            it("Check that Income Rates Table displays correct data", function () {

                browser.wait(ExpectedConditions.visibilityOf($(".rate-summary-table__scope")));


                var RRList = pages.RRSummaryTable.rrList();
                browser.wait(function() {
                    return RRList.first().isPresent().then(function(present) {
                        if(!present) {
                            return false;
                        }

                        return RRList.first().isDisplayed();
                    });
                });

                var RRArray = [];

                RRList.each( function(el) {

                    el.$$(".rate-summary-table__scope-rates").each(function(rrSet)
                    {


                        var royaltyRate = {};
                        rrSet.$("div>div:nth-child(1)>div").getText().then(function (result) {

                            royaltyRate.name = result.split('\n')[0].trim();

                        });

                        rrSet.$("div>div:nth-child(4)").getText().then(function (result) {
                            royaltyRate.incomeProvider = result;
                        });
                        rrSet.$("div>div:nth-child(5)").getText().then(function (result) {
                            royaltyRate.effectiveDate = result;


                        });
                        el.$(".rate-summary-table__scope>.rate-summary-table__scope-details>.rate-summary-table__scope-details-dl>:nth-child(3)>dd>ul>li").getText().then(function (result) {
                            royaltyRate.activeContractPeriod = result;
                        });

                        el.$(".rate-summary-table__scope-details>.rate-summary-table__scope-details-scope-name").getText().then(function (result) {
                            royaltyRate.activeScopeName = result.toUpperCase();
                        });






                        var rateSetGroupsList = [];



                        pages.RRSummaryTable.getRateSetGroups(rrSet)
                            .then(function (rateSetGroups) {
                                rateSetGroups.forEach(function (rateSetGroup) {
                                    var rateSetGroupVar = {
                                        rateSets: []
                                    };

                                    //pages.RRSummaryTable.getRateSetGroupName(rateSetGroup)
                                    //    .then(function (result) {
                                    //        rateSetGroupVar.rateSetGroupName = result.toUpperCase();
                                    //    });

                                    pages.RRSummaryTable.getRateSetIncomeType(rateSetGroup)
                                        .then(function (rateSetBodies) {
                                            rateSetBodies.forEach(function (rateSetBody) {
                                                var rateSet = {
                                                    incomeRow: []
                                                };

                                                pages.RRSummaryTable.getRateSetIncomeTypeName(rateSetBody)
                                                    .then(function (result) {
                                                     //   console.log("Rate Set Name",result);
                                                        rateSet.rateSetName = result;
                                                    });

                                                pages.RRSummaryTable.getRateSetIncomeTypeRows(rateSetBody)
                                                    .then(function (incomeType) {
                                                        incomeType.forEach(function (row) {
                                                            var tempRow = {};

                                                            pages.RRSummaryTable.getRowName(row)
                                                                .then(function (result) {
                                                                    tempRow.name = result;
                                                                });

                                                            pages.RRSummaryTable.getRowInputRateFieldValue(row)
                                                                .then(function (result) {



                                                                    tempRow.value = result.split('.')[0];
                                                                });

                                                            rateSet.incomeRow.push(tempRow);
                                                        });
                                                    });

                                                rateSetGroupVar.rateSets.push(rateSet);
                                            })
                                        });

                                    rateSetGroupsList.push(rateSetGroupVar);
                               //     console.log(JSON.stringify("Rate set group"+rateSetGroupVar, null, 4));
                                });
                            })
                            .then(function () {

                                royaltyRate.rateSetGroupsList = rateSetGroupsList;
                            });


                        RRArray.push(royaltyRate);



                    });




                }).then(function()
                {
                   //console.log("THIS IS RR SUMMARY DISPLAYED",RRArray);
                   //console.log("THIS IS RR SUMMARY SAVED",hash.royaltyRates.royaltyRateObjectsList);


                 expect(RRArray).toEqual(hash.royaltyRates.royaltyRateObjectsList);
                });








            })


        },

        validateContractPeriodFilter: function () {
            it("Check that Income Rates filter works correctly ", function () {

             //   .rate-summary-cp-select>:not(:nth-child(1))

               var arrayS = [];
                var storedArray = hash.royaltyRates.royaltyRateObjectsList;
                pages.RRSummaryTable.dropDownOptions().each(function(element)
                 {
                    arrayS = [];
                     hash.royaltyRates.royaltyRateObjectsList=[];


                    element.click();

                     browser.wait(ExpectedConditions.visibilityOf($(".rate-summary-table__scope"))).
                     then(function () {
                             pages.RRSummaryTable.storeDisplayedIncomeRates();
                         });

                   var temp;
                     element.getText().then(function (result) {


                         arrayS = [];

                         temp = result.split('\n')[0].trim();
                         storedArray.forEach(function(o){



                             if (o.activeContractPeriod == temp)
                             {
                              //   console.log("STORED CONTRACT ",o.activeContractPeriod );
                              //   console.log("DISPLAYED CONTRACT",temp);

                                 arrayS.push(o);
                             }

                         }) ;


                      //   console.log(" ----------------STORED ARRAY ---------------- \n",arrayS);
                      //   console.log(" ----------------DISPLAYED ARRAY---------------- \n",hash.royaltyRates.royaltyRateObjectsList);
                         // steps.RRSummaryTable.saveDisplayedIncomeRates();
                         //   expect(arrayS).toEqual(hash.royaltyRates.royaltyRateObjectsList);

                     });

                   //  console.log("Has STORED ARRAY",storedArray);

                  //      console.log("STORED ARRAY",arrayS);


                //
               //  steps.RRSummaryTable.saveDisplayedIncomeRates();




                //
                //  console.log(arrayS);
                //
                //
                //
                 }).then(function () {

                  //  console.log("STORED ARRAY",arrayS);
                    //console.log("DISPLAYED ARRAY",hash.royaltyRates.royaltyRateObjectsList);
                   // steps.RRSummaryTable.saveDisplayedIncomeRates();
                     expect(arrayS).toEqual(hash.royaltyRates.royaltyRateObjectsList);
                })

        })}


    };
}


module.exports = steps.RRSummaryTable;

"use strict";
var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.RRSummaryTable === undefined) {


    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

    pages.RRSummaryTable = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {




        },
        loaderIcon: function () {
          return $(".loader:not(.ng-hide)");
        },
        RRScopesList: function () {

            return $$(".rate-summary-table__scope");
        },

        //PAGE OBJECT LOCATORS

        dropDownOptions:function()
        {
          return $$(" .rate-summary-cp-select>:not(:nth-child(1))")  ;

        },
        rrList:function()
        {

            return $$(".rate-summary-table__scope");
        }

        ,

        storeDisplayedIncomeRates: function () {

            browser.wait(ExpectedConditions.visibilityOf($(".rate-summary-table__scope")));
            var RRList = this.rrList();
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

                        RRArray.push(royaltyRate);

                    });





                });




            }).then(function()
            {
                hash.royaltyRates.royaltyRateObjectsList = RRArray;



            });
        }
        ,


        getRateSetIncomeTypeRows:function(rateSetIncomeType)
        {
            return rateSetIncomeType.$$(".rate-summary-table__rate-type-item-wrap>.rate-summary-table__rate-item");

        }
        ,

        getRowName:function(incomeTypeRow)
        {

            return incomeTypeRow.$(".rate-summary-table__rate-type-item-wrap>.rate-summary-table__rate-item>:first-child").getText();
        },

        getRowInputRateFieldValue: function (incomeTypeRow) {
            return incomeTypeRow.$(".rate-summary-table__rate-type-item-wrap>.rate-summary-table__rate-item>:nth-child(2)").getText();
        },





        //GENERIC FUNCTIONS

        getRateSetGroups: function () {


            return $$('[data-ng-repeat="(RSGroupItemKey, RSGroupItemVal) in RSScopeItem.rateSet.data"]');
        }
        ,
        getRateSetGroupName:function(rateSetGroup){
            return rateSetGroup.$("div.rate-summary-table__rate-group-item>div:first-child").getText();
        },
        getRateSetIncomeType: function (rateSetGroup) {
            return rateSetGroup.$$(".rate-summary-table__rate-type-item-wrap");
        },
        getRateSetIncomeTypeName: function (rateSetIncomeType) {
            return rateSetIncomeType.$ (".rate-summary-table__rate-type-item-wrap>.rate-summary-table__rate-type-item>:first-child").getText();
        },

        getElementText: function (element) {
            return element.getText();
        }
,
        waitForLoaderToDisappear: function () {
           //browser.wait(ExpectedConditions.visibilityOf(this.loaderIcon()));
           // browser.wait(ExpectedConditions.invisibilityOf(this.loaderIcon()));

            pages.base.waitForAjax();
            browser.driver.sleep(10000);
            
        },
        waitForTableToBeDisplayed: function () {
           pages.base.waitForAjax();
            browser.driver.sleep(10000);
},
        getNumberOfDisplayedScopes: function () {
            // var elem =   this.RRScopesList();
            return this.RRScopesList().count();
            //hash.temp = 0;
            //var i = 1 ;
            //this.RRScopesList().each(function (rrSet) {
            //
            //
            //    var royaltyRate = {};
            //
            //    rrSet.$(".rate-summary-table__scope-details>.rate-summary-table__scope-details-scope-name").getText().then(function (result) {
            //        console.log(result);
            //        console.log(hash.temp);
            //
            //        hash.temp++;
            //    });
            //});
            //
            //
            ////Object.keys( this.RRScopesList()).length;
        }




    });
}



        module.exports = pages.RRSummaryTable;
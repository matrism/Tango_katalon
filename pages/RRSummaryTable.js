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

        //Scope Name      .rate-summary-table__scope-details>.rate-summary-table__scope-details-scope-name
        //TERRITORY       .rate-summary-table__scope>.rate-summary-table__scope-details>.rate-summary-table__scope-details-dl>:nth-child(1)>dd>strong>div>div
        //Contract Period .rate-summary-table__scope>.rate-summary-table__scope-details>.rate-summary-table__scope-details-dl>:nth-child(3)>dd>ul>li
        //RR Name         .rate-summary-table__scope>.rate-summary-table__scope-rates>div>div:nth-child(1)>div
        //Income Provider .rate-summary-table__scope>.rate-summary-table__scope-rates>div>div:nth-child(4)
        //Start Date      .rate-summary-table__scope>.rate-summary-table__scope-rates>div>div:nth-child(5)
        //Rate App Method .rate-summary-table__scope>.rate-summary-table__scope-rates>div>div:nth-child(6)
        //PAGE OBJECT LOCATORS

        dropDownOptions:function()
        {
          return $$(" .rate-summary-cp-select>:not(:nth-child(1))")  ;

        },
        rrList:function()
        {

            return $$(".rate-summary-table__scope");
        },
        outterCollapseTableButtons:function()
        {

            return $$(".rate-summary-table__scope-item-col>.rate-summary-table__collapse-btn");
        },

        innerCollapseTableButtons:function()
        {

            return $$(".rate-summary-table__rate-group-item-col>.rate-summary-table__collapse-btn");
        },
        rateSetsNames:function()
        {

            return element.all(by.css(".rate-summary-table__scope-rates.ng-scope>div>div:nth-child(1)>div"));
        },
        contractualRates:function()
        {
            return $$(".rate-summary-table__scope-item-col:nth-child(2)");
        },
        interCompanyRates:function()
        {

            return $$(".rate-summary-table__scope-item-col:nth-child(3)");

        },
        incomeProviders:function()
        {
            return $$(".rate-summary-table__scope-item-col:nth-child(4)");
        },

        effectiveStartDates:function()
        {

            return $$(".rate-summary-table__scope-item-col:nth-child(5)");
        },
        rateApplicationMethods:function()
        {

            return $$(".rate-summary-table__scope-item-col:nth-child(6)");
        },

        scopeNames:function()
        {

            return $$(".rate-summary-table__scope-details-scope-name");
        },
        territoriesList:function()
        {
            return $$(".tg-territory-label__list-overflow");
        }
        ,
        contractTypeList:function()
        {
            return $$(".rate-summary-table__scope-details-dl>div:nth-child(2)>dd");
        },

        contractPeriods:function()
        {
            return $$(".rate-summary-table__scope-deal-term");
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




    });
}



        module.exports = pages.RRSummaryTable;
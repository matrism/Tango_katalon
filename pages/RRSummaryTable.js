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


        //PAGE OBJECT LOCATORS

        rrList:function()
        {

            return $$(".rate-summary-table__scope-rates.ng-scope");
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




    });
}



        module.exports = pages.RRSummaryTable;
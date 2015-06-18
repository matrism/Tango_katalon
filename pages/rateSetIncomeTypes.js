"use strict";
var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.rateSetIncomeTypes === undefined) {


    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

    pages.rateSetIncomeTypes = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {



        },
     getCoverMechanicalRateSetGroup: function () {
         return $(".rate-set_group__coverMechanical");
     },


     getCoverMechanicalRateSetIncomeType: function (rateSetGroup) {
         return rateSetGroup.$("div>.rate-set_income-type__CMEC");
     },

        getRateSetIncomeTypeRows:function(rateSetIncomeType)
        {
            return rateSetIncomeType.$$(".rate-set-income-type-rates>:not(:first-child).rate-set-row");

        }
        ,

        getRowName:function(incomeTypeRow)
        {

            return incomeTypeRow.$(".rate-set-rate-name>span").getText();
        },

        getRowInputRateFieldValue: function (incomeTypeRow) {
            return incomeTypeRow.$(".rate-set-rate-field>div>input").getAttribute("value");
        }















    });
}

module.exports = pages.rateSetIncomeTypes;
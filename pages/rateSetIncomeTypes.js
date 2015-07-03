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
        },





        //GENERIC FUNCTIONS

        getRateSetGroups: function () {


            return $$('[name="groupForm"]');
        }
        ,
        getRateSetGroupName:function(rateSetGroup){
            return rateSetGroup.$("div>div>.rate-set-entity-name>.rate-set-group-name").getText();
        },
        getRateSetIncomeType: function (rateSetGroup) {
            return rateSetGroup.$$(".rate-set-group-body>.rate-set-income-type");
        },
        getRateSetIncomeTypeName: function (rateSetIncomeType) {
            return rateSetIncomeType.$ ("div>.rate-set-entity-name>span").getText();
        },

        getElementText: function (element) {
            return element.getText();
        }












    });
}

module.exports = pages.rateSetIncomeTypes;
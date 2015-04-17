"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.deal_contract_period === undefined) {
    pages.deal_contract_period = new ftf.pageObject({
        //url: _tf_config.urls.app_url + "#/create/deal",

        locators: {
            startDate: {css: "div#actualStartDate input"},
            endTargetMonths: {name: "targetEndDuration"}
        },


        fillStartActualDate: function () {
            pages.deal_contract_period.elems.startDate.sendKeys("2015-03-12");
        },

        fillTargetEndMonths: function () {
            pages.deal_contract_period.elems.endTargetMonths.sendKeys("3");
        }

    });
}

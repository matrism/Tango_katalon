"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
module.exports = pages.deal_contract_period = new ftf.pageObject({
    //url: _tf_config.urls.app_url + "#/create/deal"
});

//locators
module.exports.startDate = function () {
    return element(by.css("div#actualStartDate input"));
};

module.exports.endTargetMonths = function () {
    return element(by.name("targetEndDuration"));
};




//methods
module.exports.fillStartActualDate = function () {
    pages.deal_contract_period.startDate().sendKeys("2015-03-12");
};

module.exports.fillTargetEndMonths = function () {
    pages.deal_contract_period.endTargetMonths().sendKeys("3");
};

"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
module.exports = pages.create_deal_contract_period = new ftf.pageObject({});

//locators
module.exports.startDate = function () {
    return element(By.css("div#actualStartDate input"));
};

module.exports.endTargetMonths = function () {
    return element(By.name("targetEndDuration"));
};

module.exports.addMdrcLink = function () {
    return element(By.css("a[data-ng-click='addCommitment()']"));
};

module.exports.incompleteMdrc = function(){
    return element(By.css("button[text='Incomplete']"));
};

module.exports.mdrcQuantity = function(){
    return element(By.name("quantity"));
};

//methods
module.exports.fillStartActualDate = function () {
    pages.create_deal_contract_period.startDate().sendKeys("2015-03-12");
};

module.exports.fillTargetEndMonths = function () {
    pages.create_deal_contract_period.endTargetMonths().sendKeys("3");
};

module.exports.clickOnAddMdrcLink = function () {
    pages.addMdrcLink().click();
};

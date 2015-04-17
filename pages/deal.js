"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
module.exports = pages.deal = new ftf.pageObject();

//locators
module.exports.dealBriefNumber = function(){
    return element(By.xpath("//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"))
};

module.exports.continueButton = function () {
    return element(by.css("div.page-footer button[data-ng-click='next()']"));
};

module.exports.saveDealButton = function () {
    return element(by.css("div.page-footer button[data-ng-click='done()']"));
};

module.exports.generalHeader = function(){
    return element(by.css("li[data-heading='General']"))
};

module.exports.dealGeneralSummaryHeader = function(){
    return element(by.css("a[data-ng-click='showDealSummaryPage()']"))
};

//methods
module.exports.continueToNextPage = function () {
    pages.deal.continueButton().click();
};

module.exports.saveNewDeal = function(){
    pages.deal.saveDealButton().click();
};


module.exports.expectContinueButtonEnabled = function () {
    it("Expect continue button to be enabled", function () {
        expect(pages.deal.continueButton().isEnabled());
    });
};

module.exports.goToGeneralDealDetails = function(){
    pages.deal.generalHeader().click();
    browser.wait(ExpectedConditions.visibilityOf(pages.deal.dealGeneralSummaryHeader()));
};


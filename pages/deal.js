"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
module.exports = pages.deal = new ftf.pageObject();





module.exports.contractPeriodHeader = function(){
    return element(By.css(".overview-header>h3"));
};
module.exports.scopeHeader = function(){
    return element(By.css(".scope-heading"));
};




module.exports.dealBriefNumber = function(){
    return element(By.xpath("//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"))
};

module.exports.continueButton = function () {
    return element(by.css("div.page-footer button[data-ng-click='next()']"));
};

module.exports.saveDealButton = function () {
    return element(by.css("div.page-footer button[data-ng-click='done()']"));
};

module.exports.continueToNextPage = function () {
    pages.deal.continueButton().click();
};

module.exports.saveNewDeal = function(){
    pages.deal.saveDealButton().click();
};

module.exports.clickScopeHeader = function(){

    browser.wait(ExpectedConditions.visibilityOf( pages.deal.scopeHeader()));
   pages.deal.scopeHeader().click();

};




module.exports.expectContinueButtonEnabled = function () {
    it("Expect continue button to be enabled", function () {
        expect(pages.deal.continueButton().isEnabled());
    });
};
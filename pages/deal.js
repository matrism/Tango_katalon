"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
module.exports = pages.deal = new ftf.pageObject();
if (pages.deal === undefined) {
    pages.deal = new ftf.pageObject({
        locators: {
            dealBriefNumber: {xpath: "//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"},
            continueButton: {css: "div.page-footer button[data-ng-click='next()']"},
            saveDealButton: {css: "div.page-footer button[data-ng-click='done()']"},
            generalHeader: {css: "li.ng-scope:nth-child(1) a[data-ng-click='setActiveTab($tab);']"},
            termsHeader: {css: "li.ng-scope:nth-child(2) a[data-ng-click='setActiveTab($tab);']"},
            dealGeneralSummaryHeader: {css: "a[data-ng-click='showDealSummaryPage()']"},
            dealTermsSummaryHeader: {css: "a[data-ng-class='{ active: form.show.section.cps }']"}
        },

        continueToNextPage: function () {
            pages.deal.elems.continueButton.click();
        },




module.exports.contractPeriodHeader = function(){
    return element(By.css(".overview-header>h3"));
};
module.exports.scopeHeader = function(){
    return element(By.css(".scope-heading"));
};




module.exports.dealBriefNumber = function(){
    return element(By.xpath("//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"))
};
        saveNewDeal: function () {
            pages.deal.elems.saveDealButton.click();
        },

        expectContinueButtonEnabled: function () {
            expect(pages.deal.elems.continueButton.isEnabled());
        },

        goToGeneralDealDetails: function () {
            pages.deal.elems.generalHeader.click();
        },

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
        goToTermsDealDetails: function () {
            pages.deal.elems.termsHeader.click();
        }
    });
}
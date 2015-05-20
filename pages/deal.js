"use strict";
var ExpectedConditions = protractor.ExpectedConditions;
var pph = require("../helpers/pph");
var promise = protractor.promise;
if (pages.deal === undefined) {
    pages.deal = new ftf.pageObject({
        locators: {
            dealBriefNumber: {xpath: "//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"},
            continueButton: {css: "div.page-footer button[data-ng-click='next()']"},
            saveDealButton: {css: "div.page-footer button[data-ng-click='done()']"},
            generalHeader: {css: "li.ng-scope:nth-child(1) a[data-ng-click='setActiveTab($tab);']"},
            termsHeader: {css: "li.ng-scope:nth-child(2) a[data-ng-click='setActiveTab($tab);']"},
            dealGeneralSummaryHeader: {css: "a[data-ng-click='showDealSummaryPage()']"},
            dealTermsSummaryHeader: {css: "a[data-ng-class='{ active: form.show.section.cps }']"},
            scopeHeader : {css: ".scope-heading"}
        },

        continueToNextPage: function () {
            pages.deal.elems.continueButton.click();
        },

        saveNewDeal: function () {
            pages.deal.elems.saveDealButton.click();
        },

        expectContinueButtonEnabled: function () {
            expect(pages.deal.elems.continueButton.isEnabled());
        },

        goToGeneralDealDetails: function () {
            pages.deal.elems.generalHeader.click();
        },

        goToTermsDealDetails: function () {
            pages.deal.elems.termsHeader.click();
        },

        clickScopeHeader:function(){

            browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.scopeHeader));
            pages.deal.elems.scopeHeader.click();
        }
    });
}
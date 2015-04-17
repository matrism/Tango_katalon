"use strict";
var pph = require("../helpers/pph");
var promise = protractor.promise;
if (pages.deal === undefined) {
    pages.deal = new ftf.pageObject({
        locators: {
            dealBriefNumber: {xpath: "//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"},
            continueButton: {css: "div.page-footer button[data-ng-click='next()']"},
            saveDealButton: {css: "div.page-footer button[data-ng-click='done()']"}
        },

        continueToNextPage: function () {
            pages.deal.elems.continueButton.click();
        },

        saveNewDeal: function () {
            pages.deal.elems.saveDealButton.click();
        },

        expectContinueButtonEnabled: function () {
            it("Expect continue button to be enabled", function () {
                expect(pages.deal.elems.continueButton.isEnabled());
            });
        }

});
}
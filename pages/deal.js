"use strict";
var pph = require("../helpers/pph");
var ExpectedConditions = protractor.ExpectedConditions;
var promise = protractor.promise;
if (pages.deal === undefined) {
    pages.deal = new ftf.pageObject({
        locators: {
            dealBriefNumber: {xpath: "//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']"},
            continueButton: {css: "div.page-footer button[data-ng-click='next()']"},
            saveDealButton: {css: "div.page-footer button[data-ng-click='done()']"},
            generalHeader: {css: ".nav-tabs>li:nth-child(1)>a"},
            termsHeader: {css: ".nav-tabs>li:nth-child(2)>a"},
            dealGeneralSummaryHeader: {css: "a[data-ng-click='showDealSummaryPage()']"},
            scopeHeader: {css: ".scope-heading"},
            incomeRates: {css: ".nav-tabs>li:nth-child(5)>a"},
            dealTermsSummaryHeader: {css: "a[data-ng-class='{ active: form.show.section.cps }']"},
            finderDealsHeaderLink: {css: "a[data-ng-class='{ active: form.show.section.fdt }']"},
            finderDealsTitle: {css: "div[data-ng-form='finderDealsForm'] h3"}
        },


        //TODO DSP locators are bad , dom can change between wait calls and locators keep a cached version
        scopeHeaderElement: function () {
            return element(by.css(".scope-heading"));

        },

        errorHeader: function () {

            return $$(".text-error").first();
        }
        ,
        errorIcons: function () {
            return $$(".fa.fa-exclamation-triangle.error-icon");

        },

        errorRR: function () {

            return $$(".text-error").last();
        },

        warnerLogo: function () {
            return element(by.css("#DSP-LOGO"));
        },

        //END OF LOCATORS

        clickWarnerLogo: function () {
            browser.refresh();
            pages.deal.warnerLogo().click();
        },

        continueToNextPage: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.deal.elems.continueButton));
            pages.deal.elems.continueButton.click();
            pages.deal.waitForAjax();
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

        goToFinderDealTerms: function () {
            pages.deal.elems.finderDealsHeaderLink.click();
        },

        clickIncomeRatesLink: function () {

            browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.incomeRates));
            pages.deal.elems.incomeRates.click();


        },

        clickScopeHeader: function () {


            pages.base.waitForAjax();

            browser.wait(ExpectedConditions.visibilityOf(pages.deal.scopeHeaderElement()));


            pages.deal.scopeHeaderElement().click();
        },

        errorHeaderIsVisible: function () {

            return this.errorHeader().isDisplayed();
        },

        errorIconsAreVisible: function () {
            var bool = false;


            this.errorIcons.each(function (el) {
                if (!bool) {
                    bool = el.isDisplayed();

                }


            });

            return bool;

        },
        errorRRIsVisible: function () {

            return this.errorRR.isDisplayed();

        }
    });
}
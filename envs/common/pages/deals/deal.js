'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

if (pages.deal === undefined) {
    pages.deal = new ftf.pageObject({
        locators: {
            dealBriefNumber: {css: "#RECORD-HEADER div.header-info div.metadata-box:nth-child(6) p.info.ng-binding"},
            continueButton: {css: "div.page-footer button[data-ng-click='next()']"},
            saveDealButton: {css: "div.page-footer button[data-ng-click='done()']"},
            generalHeader: {css: ".nav-tabs>li:nth-child(1)>a"},
            termsHeader: {css: ".nav-tabs>li:nth-child(2)>a"},
            payeesHeader: {css: ".nav-tabs>li:nth-child(3)>a"},
            contractPeriodsScopesHeaderLink: {css: "div[name='termsForm'] a[data-ng-class='{ active: form.show.section.cps }']"},
            contractPeriodsTitle: {css: "div[data-ng-form='termsForm'] div.row div.span3.column:nth-child(1) h3"},
            rightsTermPeriodsHeaderLink: {css: "div[name='termsForm'] a[data-ng-class='{ active: form.show.section.rtp }']"},
            addAnotherRightsTermPeriodLink: {css: "a[data-ng-click='addRightsTermPeriodSet()']"},
            dealGeneralSummaryHeader: {css: "a[data-ng-click='showDealSummaryPage()']"},
            scopeHeader: {css: ".scope-heading"},
            incomeRates: {css: ".nav-tabs>li:nth-child(5)>a"},
            dealPayeesSummaryHeader: {css: "div.deal-payee__label"},
            dealTermsSummaryHeader: {css: "a[data-ng-class='{ active: form.show.section.cps }']"},
            finderDealsHeaderLink: {css: "a[data-ng-class='{ active: form.show.section.fdt }']"},
            finderDealsTitle: {css: "div[data-ng-form='finderDealsForm']"},
            relatedDealsHeaderLink: {css: "a[data-ng-click='showRelatedDealsPage()']"},
            relatedDealsTitle: {css: "div.related-section.ng-scope h2"},
            dealSummaryHeaderLink: {css: "a[data-ng-click='showDealSummaryPage()']"},
            dealSummaryTitle: {css: "div.FORM.summary-section.clearfix.ng-scope h2"}
        },


        //TODO DSP locators are bad , dom can change between wait calls and locators keep a cached version
        scopeHeaderElements: function () {
            return $$('.scope-heading');

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

        goToTheContractPeriodsAndScopesHeaderLink: function () {
            pages.deal.elems.contractPeriodsScopesHeaderLink.click();
        },

        goToTheRightsTermPeriodsHeaderLink: function () {
            pages.deal.elems.rightsTermPeriodsHeaderLink.click();
        },

        goToPayeesDealDetails: function () {
            pages.deal.elems.payeesHeader.click();
        },

        goToFinderDealTerms: function () {
            pages.deal.elems.finderDealsHeaderLink.click();
        },

        goToRelatedDealsGeneral: function () {
            pages.deal.elems.relatedDealsHeaderLink.click();
        },

        goToDealSummaryGeneral: function () {
            pages.deal.elems.dealSummaryHeaderLink.click();
        },

        printTheDealNumber: function () {
            pages.deal.elems.dealBriefNumber.getText().
            then(function (promise) {
                console.log("Deal number printed is " + promise);
            });
        },

        clickIncomeRatesLink: function () {
            pages.base.scrollIntoView(pages.deal.elems.incomeRates);
            browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.incomeRates));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.deal.elems.incomeRates));
            pages.deal.elems.incomeRates.click();


        },

        clickFirstScopeHeader: function () {
            var el = pages.deal.scopeHeaderElements().first();

            browser.wait(EC.visibilityOf(el));

            pages.base.scrollTo('top');

            pages.base.scrollIntoView(el);

            return el.click();
        },

        clickLastScopeHeader: function () {
            var el = pages.deal.scopeHeaderElements().last();

            browser.wait(EC.visibilityOf(el));

            pages.base.scrollTo('top');

            pages.base.scrollIntoView(el);

            return el.click();
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

            return this.errorRR().isDisplayed();

        }
});
}

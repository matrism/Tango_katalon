var _ = require("lodash");
var promise = protractor.promise;

var ExpectedConditions = protractor.ExpectedConditions;
if (steps.royaltyRatesValidations === undefined) {
    steps.royaltyRatesValidations = {

        checkThatRRErrorsArePresent: function (text) {
            it("Verify That Errors are displayed for Royalty Rate", function () {
            //  browser.driver.sleep(3000);
                pages.base.waitForAjax();

                expect(pages.royaltyRatesValidations.getRoyaltyRateErrorText()).toBe(text);
            })
        },

        checkThatRRGroupErrorsArePresent: function (text) {
            it("Verify That Errors are displayed for Royalty Rate Group", function () {

               //browser.driver.sleep(3000);
                pages.base.waitForAjax();
                expect(pages.royaltyRatesValidations.getRoyaltyRateGroupsErrorText()).toBe(text);
            })
        },
        checkThatRRGroupWarningsArePresent: function (text) {
            it("Verify that warnings are displayed for Royalty Rate Group", function () {

             ///   browser.driver.sleep(3000);
                pages.base.waitForAjax();
                expect(pages.royaltyRatesValidations.getRoyaltyRateGroupsWarningText()).toBe(text);
            })
        },
        checkThatRRSummaryHasError: function (text) {
            it("Verify that error is displayed on RR Summary ", function () {

                ///   browser.driver.sleep(3000);
                pages.base.waitForAjax();
                expect(pages.royaltyRatesValidations.getRRSummaryText()).toBe(text);
            })
        }

    }
}

module.exports = steps.royaltyRatesValidations;

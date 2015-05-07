"use strict";
var steps_path = _tf_config._system_.path_to_steps;
var pages_path = _tf_config._system_.path_to_pages;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "deal");
require(pages_path + "deal");

if (steps.deal === undefined) {
    steps.deal = {

        goToNextPage: function () {
            it("Click on continue to next page button", function () {
                pages.deal.continueToNextPage();
            });
        },

        waitContinueButtonEnabled: function () {
            it("Check continue button to be enabled", function () {
                pages.deal.expectContinueButtonEnabled();
            });
        },

        saveDeal: function () {
            it("Click on save deal button", function () {
                pages.deal.saveNewDeal();
            });
        },

        waitForDealToBeSaved: function () {
            it("Expect deal screen to be loaded and brief number displayed ", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealBriefNumber));
            });
        },


        returnDealNumber: function () {
            it("Return deal number ", function () {
                element(By.xpath("//*[@id='RECORD-HEADER']//div/div/div[6]/div/p[@class='info ng-binding']")).getText().
                    then(function (promise) {
                        console.log("Deal number is: " + promise);
                    });

                //return pages.deal.elems.dealBriefNumber;
            });
        },

        itContinueToNextPage: function () {
            describe("Check continue button enabled and go to next page", function () {
                    //steps.deal.waitContinueButtonEnabled();
                    steps.deal.goToNextPage();
                }
            );
        },

        goToGeneralDealTabDetails: function () {
            it("Click on general header and go to general deal tab details ", function () {
                pages.deal.goToGeneralDealDetails();
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealGeneralSummaryHeader));
            });
        },

        goToTermsDealTabDetails: function () {
            it("Click on terms header and go to terms deal tab details ", function () {
                pages.deal.goToTermsDealDetails();
            });
        },

        expectTermsDetailsAreOk: function () {
            it("Expect terms tab is opened successfully ", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.deal.elems.dealTermsSummaryHeader));
            });
        }

    };
}







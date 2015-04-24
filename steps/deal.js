"use strict";
var steps_path = _tf_config._system_.path_to_steps;
var pages_path = _tf_config._system_.path_to_pages;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
//require(steps_path + "deal");
require(pages_path + "deal");
module.exports = steps.deal = {};


module.exports.goToNextPage = function () {
    it("Click on continue to next page button", function () {
        pages.deal.continueToNextPage();
    });
};

module.exports.waitContinueButtonEnabled = function () {
    it("Check continue button to be enabled", function () {
        pages.deal.expectContinueButtonEnabled();
    });
};

module.exports.saveDeal = function () {
    it("Click on save deal button", function () {
        pages.deal.saveNewDeal();
    });
};

module.exports.waitForDealToBeSaved = function () {
    it("Expect deal screen to be loaded and brief number displayed ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.dealBriefNumber()));
    });
};


module.exports.returnDealNumber = function () {
    it("Return deal number ", function () {
        console.log("Deal number is: " + pages.deal.dealBriefNumber());
        return pages.deal.dealBriefNumber();

    });
};

module.exports.itContinueToNextPage = function () {
    describe("Check continue button enabled and go to next page", function () {
            //steps.deal.waitContinueButtonEnabled();
            steps.deal.goToNextPage();
        }
    );
};


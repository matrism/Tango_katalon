"use strict";
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.editRoyaltyRates === undefined) {




    pages.editRoyaltyRates = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/deal",
        locators: {

            newRoyaltyRate: {css:".ng-pristine.ng-warn.ng-warn-check-publisher-share-set>div>a"}



        },

        clickNewRoyaltySetButton: function()
        {


            browser.driver.sleep(5000);
            //
            //console.log("After wait ");

            var element;
            element = browser.driver.findElement(by.css(".ng-pristine.ng-warn.ng-warn-check-publisher-share-set>div>a"));


            //  console.log("After find ");

            element.click();
        }










    });
}

module.exports = pages.editRoyaltyRates;
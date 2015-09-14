var _ = require("lodash");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (steps.registrationFileActivity === undefined) {
    steps.registrationFileActivity = {

        goToPage: function () {
            it("Go to Registration File Activity Page", function () {
                pages.registrationFileActivity.clickRegActivityHeader().then(function () {
                    pages.registrationFileActivity.clickRegActivityDropDown();
                });
            })
        },

        expandLastDeliveredWork: function () {
            it("Expand the last delivered work on Registration File Activity Page", function () {
                pages.registrationFileActivity.clickOnLastDisplayedDeliveredWork();
            })
        },

        verifyDetails: function () {
            it("Verify last Delivery Details on Registration File Activity Page", function () {
                expect(pages.registrationFileActivity.workHasDeliveredStatus()).toBe("Delivered");
            })
        }
    }
}

module.exports = steps.registrationFileActivity;
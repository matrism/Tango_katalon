"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (steps.modal === undefined) {
    steps.modal = {
        clickYesOnPopupModal: function () {
            it("Confirm Popup Modal", function () {
                pages.modal.clickOnYesButton();
            })
        },
        clickOKOnPopupModal: function () {
            it("Confirm Popup Modal", function () {
                pages.modal.clickOnOKButton();
            })
        }
    };
}
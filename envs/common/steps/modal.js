'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.modal = exports;

exports.clickYesOnPopupModal = function () {
    it("Confirm Popup Modal", function () {
        pages.modal.clickOnYesButton();
    });
};
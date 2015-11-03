'use strict';

var _ = require('lodash'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.registrationFileActivity = exports;

exports.goToPage = function () {
    it("Go to Registration File Activity Page", function () {
        pages.registrationFileActivity.clickRegActivityHeader().then(function () {
            pages.registrationFileActivity.clickRegActivityDropDown();
        });
    })
};

exports.expandLastDeliveredWork = function () {
    it("Expand the last delivered work on Registration File Activity Page", function () {
        pages.registrationFileActivity.clickOnLastDisplayedDeliveredWork();
    })
};

exports.verifyDetails = function () {
    it("Verify last Delivery Details on Registration File Activity Page", function () {
        expect(pages.registrationFileActivity.workHasDeliveredStatus()).toBe("Delivered");
    })
};

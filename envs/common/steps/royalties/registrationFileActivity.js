'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

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

pageStep([
    'Go to Registration File Activity Page',
    'Find Event by File Name',
    'Toggle blind',
    'Validate Status',
    'Validate Received Date',
    'Validate Total Accepted',
    'Validate Total Rejected',
    'Validate Initiated By',
    'Validate Accepted Values',
    'Validate Rejected Values'
]);

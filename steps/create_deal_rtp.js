"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_rtp");
require(steps_path + "create_deal_rtp");

if (steps.create_deal_rtp === undefined) {
    steps.create_deal_rtp = {

        selectRtpAllContractPeriods: function () {
            it("Select rtp all contract periods", function () {
                pages.create_deal_rtp.selectTheRtpAllContractPeriods();
            });
        },

        selectRandomScopeRtpAcquisition: function () {
            it("Select the random scope rtp acquisition ", function () {
                pages.create_deal_rtp.selectTheRandomScopeRtpAcquisition();
            });
        },

        selectSpecificScopeNumberIRtpAcquisition: function (i) {
            it("Select the specific  scope rtp acquisition " + i, function () {
                pages.create_deal_rtp.selectTheSpecificScopeNumberIRtpAcquisition(i);
            });
        },

        fillIntoAcquisitionEndDateField: function () {
            it("Fill into acquisition end date field ", function () {
                pages.create_deal_rtp.fillIntoTheAcquisitionEndDateField();
            });
        },

        clickOnAddRetentionPeriodFromAcquisition: function () {
            it("Click on the add retention period from acquisition ", function () {
                pages.create_deal_rtp.clickOnTheAddRetentionPeriodFromAcquisition();
            });
        },

        fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI: function (i) {
            it("Fill into retention period description from acquisition number " + i, function () {
                pages.create_deal_rtp.fillIntoTheRetentionPeriodDescriptionFromAcquisitionNumberI(i);
            });
        },

        selectRandomScopeFromAcquisitionNumberI: function (i) {
            it("Select random scope from acquisition number " + i, function () {
                pages.create_deal_rtp.selectTheRandomScopeFromAcquisitionNumberI(i);
            });
        },

        selectSpecificScopeNumberJFromAcquisitionNumberI: function (i, j) {
            it("Select specific scope from acquisition number " + i, function () {
                pages.create_deal_rtp.selectTheSpecificScopeNumberJFromAcquisitionNumberI(i, j);
            });
        },

        selectRandomDurationTypeRetentionFromAcquisitionNumberI: function (i, durationType) {
            it("Select the random duration type retention from acquisition number i ", function () {
                pages.create_deal_rtp.selectTheSpecificDurationTypeRetentionFromAcquisitionNumberI(i, durationType);
            });
        },

        clickOnAddPostTermPeriodFromRetentionNumberI: function (i) {
            it("Click on the add post term period from retention number i ", function () {
                pages.create_deal_rtp.clickOnTheAddPostTermPeriodFromRetentionNumberI(i);
            });
        },

        fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI: function (i, j) {
            it("Fill into description post term period number i from retention j", function () {
                pages.create_deal_rtp.fillIntoTheDescriptionPostTermPeriodNumberJFromRetentionNumberI(i, j);
            });
        },

        selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ: function (i, j, k) {
            it("Select the specific scope number " + k + " from acquisition number " + i + "and retention number " + j, function () {
                pages.create_deal_rtp.selectTheSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(i, j, k);
            });
        },

        fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI: function (i, j) {
            it("Fill into description post term period number i from retention j", function () {
                pages.create_deal_rtp.fillIntoTheDurationPostTermPeriodNumberJFromRetentionNumberI(i, j);
            });
        },

        clickOnAddPostTermPeriodFromAcquisition: function () {
            it("Click on the add post term period from acquisition ", function () {
                pages.create_deal_rtp.clickOnTheAddPostTermPeriodFromAcquisition();
            });
        },

        fillIntoDescriptionPostTermPeriodNumberIFromAcquisition: function (i) {
            it("Fill into the description post term period number " + i + " from acquisition", function () {
                pages.create_deal_rtp.fillIntoTheDescriptionPostTermPeriodNumberIFromAcquisition(i);
            });
        },

        selectSpecificScopeNumberJForPostTermNumberI: function (i, j) {
            it("Select the specific scope number " + j + " from post term period number " + i, function () {
                pages.create_deal_rtp.selectTheSpecificScopeNumberJForPostTermNumberI(i, j);
            });
        },

        fillIntoDurationPostTermPeriodNumberIFromAcquisition: function (i) {
            it("Fill into the duration post term period number " + i + " from acquisition", function(){
               pages.create_deal_rtp.fillIntoTheDurationPostTermPeriodNumberIFromAcquisition(i);
            });
        }

    }
}
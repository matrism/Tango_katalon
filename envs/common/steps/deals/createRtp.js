"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealRtp = exports;

exports.selectRtpAllContractPeriods = function () {
    it("Select rtp all contract periods", function () {
        pages.createDealRtp.selectTheRtpAllContractPeriods();
    });
};

exports.selectRandomScopeRtpAcquisition = function () {
    it("Select the random scope rtp acquisition ", function () {
        pages.createDealRtp.selectTheRandomScopeRtpAcquisition();
    });
};

exports.selectSpecificScopeNumberIRtpAcquisition = function (i) {
    it("Select the specific  scope rtp acquisition " + i, function () {
        pages.createDealRtp.selectTheSpecificScopeNumberIRtpAcquisition(i);
    });
};

exports.fillIntoAcquisitionEndDateField = function () {
    it("Fill into acquisition end date field ", function () {
        pages.createDealRtp.fillIntoTheAcquisitionEndDateField();
    });
};

exports.clickOnAddRetentionPeriodFromAcquisition = function () {
    it("Click on the add retention period from acquisition ", function () {
        pages.createDealRtp.clickOnTheAddRetentionPeriodFromAcquisition();
    });
};

exports.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI = function (i) {
    it("Fill into retention period description from acquisition number " + i, function () {
        pages.createDealRtp.fillIntoTheRetentionPeriodDescriptionFromAcquisitionNumberI(i);
    });
};

exports.clickOnAddEndRulesRetentionPeriodFromAcquisitionNumberI = function (i) {
    it("Click on the add end rules retention period from acquisition number " + i, function () {
        pages.createDealRtp.clickOnTheAddEndRulesRetentionPeriodFromAcquisitionNumberI(i);
    });
};

exports.selectRandomScopeFromAcquisitionNumberI = function (i) {
    it("Select random scope from acquisition number " + i, function () {
        pages.createDealRtp.selectTheRandomScopeFromAcquisitionNumberI(i);
    });
};

exports.selectSpecificScopeNumberJFromAcquisitionNumberI = function (i, j) {
    it("Select specific scope from acquisition number " + i, function () {
        pages.createDealRtp.selectTheSpecificScopeNumberJFromAcquisitionNumberI(i, j);
    });
};

exports.selectRandomDurationTypeRetentionFromAcquisitionNumberI = function (i, durationType) {
    it("Select the random duration type retention from acquisition number i ", function () {
        pages.createDealRtp.selectTheSpecificDurationTypeRetentionFromAcquisitionNumberI(i, durationType);
    });
};

exports.clickOnAddPostTermPeriodFromRetentionNumberI = function (i) {
    it("Click on the add post term period from retention number " + i, function () {
        pages.createDealRtp.clickOnTheAddPostTermPeriodFromRetentionNumberI(i);
    });
};

exports.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI = function (i, j) {
    it("Fill into description post term period number i from retention j", function () {
        pages.createDealRtp.fillIntoTheDescriptionPostTermPeriodNumberJFromRetentionNumberI(i, j);
    });
};

exports.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ = function (i, j, k) {
    it("Select the specific scope number " + k + " from acquisition number " + i + " and retention number " + j, function () {
        pages.createDealRtp.selectTheSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(i, j, k);
    });
};

exports.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI = function (i, j) {
    it('Fill into duration post term period number i from retention j', function () {
        pages.createDealRtp.fillIntoTheDurationPostTermPeriodNumberJFromRetentionNumberI(i, j);
    });
};

exports.clickOnAddPostTermPeriodFromAcquisition = function () {
    it("Click on the add post term period from acquisition ", function () {
        pages.createDealRtp.clickOnTheAddPostTermPeriodFromAcquisition();
    });
};

exports.fillIntoDescriptionPostTermPeriodNumberIFromAcquisition = function (i) {
    it("Fill into the description post term period number " + i + " from acquisition", function () {
        pages.createDealRtp.fillIntoTheDescriptionPostTermPeriodNumberIFromAcquisition(i);
    });
};

exports.selectSpecificScopeNumberJForPostTermNumberI = function (i, j) {
    it("Select the specific scope number " + j + " from post term period number " + i, function () {
        pages.createDealRtp.selectTheSpecificScopeNumberJForPostTermNumberI(i, j);
    });
};

exports.fillIntoDurationPostTermPeriodNumberIFromAcquisition = function (i) {
    it("Fill into the duration post term period number " + i + " from acquisition", function () {
        pages.createDealRtp.fillIntoTheDurationPostTermPeriodNumberIFromAcquisition(i);
    });
};

exports.clickOnAddAnotherAcquisitionPeriodLink = function () {
    it("Click on add another acquisition period link ", function () {
        pages.createDealRtp.clickOnTheAddAnotherAcquisitionPeriodLink();
    });
};

exports.fillIntoAcquisitionDescription = function (i) {
    it("Fill into acquisition description number " + i, function () {
        pages.createDealRtp.fillIntoTheAcquisitionDescription(i);
    });
};

exports.checkRightsTermPeriodsHeaderTitlePresent = function () {
    it("Check that rights term periods header title is present ", function () {
        expect(pages.deal.elems.rightsTermPeriodsHeaderLink.isDisplayed()).toBeTruthy();
    });
};
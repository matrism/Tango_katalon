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

exports.selectRandomScopeRtpAcquisitionNumberI = function (i) {
    it("Select the random scope rtp acquisition number " + i, function () {
        pages.createDealRtp.selectTheRandomScopeRtpAcquisitionNumberI(i);
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

exports.fillIntoAcquisitionStartDateField = function (date) {
    it("Fill into acquisition start date field (" + date + ")", function () {
        pages.createDealRtp.fillIntoTheAcquisitionStartDateField(date);
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
        //pages.createDealRtp.selectTheSpecificDurationTypeRetentionFromAcquisitionNumberI(i, durationType);
        pages.createDealRtp.selectTheSpecificDurationTypeRetentionFromAcquisitionNumberX(i, durationType);
    });
};

exports.clickOnAddPostTermPeriodFromRetentionNumberI = function (i) {
    it("Click on the add post term period from retention number " + i, function () {
        pages.createDealRtp.clickOnTheAddPostTermPeriodFromRetentionNumberI(i);
    });
};

exports.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI = function (i, j, k) {
    it("Fill into description post term period number i from retention j", function () {
        pages.createDealRtp.fillIntoTheDescriptionPostTermPeriodNumberJFromRetentionNumberI(i, j, k);
    });
};

exports.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ = function (i, j, k, l) {
    it("Select the specific scope number " + k + " from acquisition number " + i + " and retention number " + j + " and Post Term Collection Number " + l, function () {
        pages.createDealRtp.selectTheSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(i, j, k, l);
    });
};

exports.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI = function (i, j, l) {
    it('Fill into duration post term period number i from retention j', function () {
        pages.createDealRtp.fillIntoTheDurationPostTermPeriodNumberJFromRetentionNumberI(i, j, l);
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

exports.selectSpecificScopeNumberJForPostTermNumberI = function (i, j, k) {
    it("Select the specific scope number " + k + " from post term period number " + j, function () {
        pages.createDealRtp.selectTheSpecificScopeNumberJForPostTermNumberI(i, j, k);
    });
};

exports.fillIntoDurationPostTermPeriodNumberIFromAcquisition = function (i,j) {
    it("Fill into the duration post term period number " + i + " from acquisition", function () {
        pages.createDealRtp.fillIntoTheDurationPostTermPeriodNumberIFromAcquisition(i,j);
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

exports.addEndRules = function () {
    it('Click on Add End Rules', function () {
        pages.createDealRtp.clickOnAddEndRules();
    });
};

exports.hoverEndRules = function () {
    it('Hover End Rules button', function () {
        pages.createDealRtp.hoverEndRulesButton();
    });
};

exports.validateSummaryEndRule = function (i, text) {
    it('Validate Summary End Rule #' + i, function () {
        expect(pages.createDealRtp.getSummaryEndRuleText(i)).toBe(text);
    });
};
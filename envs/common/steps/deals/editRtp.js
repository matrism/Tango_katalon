'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.editDealRtp = exports;

exports.editRtpAcquisitionArea = function () {
    it("Edit the rtp acquisition area ", function () {
        pages.editDealRtp.editTheRtpAcquisitionArea();
    });
};

exports.editFillIntoAcquisitionActualStartDateField = function (endDate) {
    it("Edit fill into the acquisition actual start date field ", function () {
        pages.editDealRtp.editFillIntoTheAcquisitionActualStartDateField(endDate);
    });
};

exports.editDeleteAddAnotherAcquisitionForm = function () {
    it("Edit delete the add another acquisition form ", function () {
        pages.editDealRtp.editDeleteTheAddAnotherAcquisitionForm();
    });
};

exports.editFillIntoAcquisitionActualEndDateField = function (endDate) {
    it("Edit fill into the acquisition actual end date field ", function () {
        pages.editDealRtp.editFillIntoTheAcquisitionActualEndDateField(endDate);
    });
};

exports.editSaveAcquisitionArea = function () {
    it("Edit save the acquistion area changes ", function () {
        pages.editDealRtp.editSaveTheAcquisitionArea();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editSaveAnotherAcquisitionForm = function () {
    it("Edit save the add another acquisition form ", function () {
        pages.editDealRtp.editSaveTheAnotherAcquisitionForm();
        pages.editDealRtp.waitForAjax();
    });
};

exports.clickOnAddRetentionFromAcquisitionLink = function () {
    it("Click on the add retention from acquisition link", function () {
        pages.editDealRtp.clickOnTheAddRetentionFromAcquisitionLink();
    });
};

exports.editRtpRetentionArea = function () {
    it("Edit the rtp retention area ", function () {
        pages.editDealRtp.editTheRtpRetentionArea();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editDeleteRtpRetentionFromAcquisitionForm = function () {
    it("Edit delete the rtp retention from acquisition form ", function () {
        pages.editDealRtp.editDeleteTheRtpRetentionFromAcquisitionForm();
    });
};


exports.editFillRetentionDescriptionFromAcquisition = function (description) {
    it("Edit fill into the retention description field from acquisition ", function () {
        pages.editDealRtp.editFillTheRetentionDescriptionFromAcquisition(description);
    });
};

exports.editSelectSpecificScopeNumberIRtpAcquisition = function (i) {
    it("Edit select the specific scope number " + i + " from acquisition", function () {
        pages.editDealRtp.editSelectTheSpecificScopeNumberIRtpAcquisition(i);
    });
};

exports.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI = function (i, durationType) {
    it("Edit select the specific duration type retention from acquisition number " + i, function () {
        pages.editDealRtp.editSelectTheSpecificDurationTypeRetentionFromAcquisitionNumberI(i, durationType);
    });
};

exports.editFillIntoActualEndDateFieldRetentionFromAcquisition = function (actualEndDate) {
    it("Edit fill into the actual end date field retention from acquisition ", function () {
        pages.editDealRtp.editFillIntoTheActualEndDateFieldRetentionFromAcquisition(actualEndDate)
    });
};

exports.saveRetentionFromAcquisition = function () {
    it("Save the retention from acquisition number ", function () {
        pages.editDealRtp.saveTheRetentionFromAcquisition();
    });
};

exports.clickOnAddPostTermCollectionFromRetention = function () {
    it("Click on the add post term collection from retention ", function () {
        pages.editDealRtp.editClickOnTheAddPostTermPeriodFromRetention();
    });
};

exports.editFillIntoDurationFieldPostTermCollectionFromRetention = function () {
    it("Edit fill into the duration field post term collection from retention ", function () {
        pages.editDealRtp.editFillIntoTheDurationFieldPostTermCollectionFromRetention();
    });
};


exports.editClickOnAddAnotherAcquisitionPeriodLink = function () {
    it("Edit click on add another acquisition period link", function () {
        pages.editDealRtp.editClickOnTheAddAnotherAcquisitionPeriodLink();
    });
};

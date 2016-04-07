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

exports.editClickOnAddEndRulesLinkOnRetention = function () {
    it("Edit click on add end rules link on retention", function () {
        pages.editDealRtp.editClickOnTheAddEndRulesFromRetentionNumber();
    });
};

exports.editSelectEndDateEndRulesSpecificValueRuleNumberI = function (i, value) {
    it("Edit select end date end rules specific value ", function () {
        pages.editDealRtp.editSelectTheEndDateEndRulesSpecificValueRuleNumberI(i, value);
    });
};

exports.editSelectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Edit select the when variable left end rules specific value rule number " + i + " row number " + j, function () {
        pages.editDealRtp.editSelectTheWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editFillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Edit fill into the attribute left end rules rule number " + i + " row number " + j, function () {
        pages.editDealRtp.editFillIntoTheAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
    });
};

exports.editSelectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ = function (i, j, index) {
    it("Edit select the requirement end rules specific value by index rule number " + i + " row number " + j, function () {
        pages.editDealRtp.editSelectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(i, j, index);
    });
};

exports.editSelectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Edit select the right variable end rules specific value rule number " + i + " row number " + j, function () {
        pages.editDealRtp.editSelectTheRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editDoneEndRules = function () {
    it("Edit click on Done the end rules ", function () {
        pages.editDealRtp.editDoneTheEndRules();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editFillIntoOffsetByInputFieldEndRulesRuleNumberI = function (i) {
    it("Edit fill into the offset by input field end rules rule number " + i, function () {
        pages.editDealRtp.editFillIntoTheOffsetByInputFieldEndRulesRuleNumberI(i);
    });
};

exports.editSelectRandomOptionFromOffsetByChoiceEndRules = function () {
    it("Edit select the random option from offset by choice end date end rules ", function () {
        pages.editDealRtp.editSelectTheRandomOptionFromOffsetByChoiceEndRules();
    });
};

exports.editClickOnAddNewRuleEndRulesAddedRuleNumberI = function (i) {
    it("Edit click on the add new rule end rules added rule number " + i, function () {
        pages.editDealRtp.editClickOnTheAddNewRuleEndRulesAddedRuleNumberI(i);
    });
};

exports.editDeleteEndRulesConditionNumberIRowNumberJWithoutModal = function (i, j) {
    it("Edit delete end rules condition number " + i + " row number " + j, function () {
        pages.editDealRtp.editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal(i, j);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editCancelDeleteEndRules = function () {
    it("Edit cancel delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editCancelDeleteEndRulesModalDialog));
        pages.editDealRtp.elems.editCancelDeleteEndRulesModalDialog.click();
    });
};

exports.editDeleteEndRulesConditionNumberIRowNumberJ = function (i, j) {
    it("Edit delete end rules condition number " + i + " row number " + j, function () {
        pages.editDealRtp.editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJ(i, j);
        pages.editDealRtp.waitForAjax();
    });
};

exports.checkEndRuleRetentionTooltipSummary = function (text) {
    it("Check end rule retention tooltip summary ", function () {
        pages.editDealRtp.checkTheEndRuleRetentionTooltipSummary(text);
    });
};

exports.editClickOnCancelEndRulesLinkOnRetention = function () {
    it("Edit click on cancel end rules link on retention", function () {
        pages.editDealRtp.editClickOnTheCancelEndRulesFromRetentionNumber();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editClickOnCancelEndRulesLinkOnRetentionWithoutModal = function () {
    it("Edit click on cancel end rules link on retention", function () {
        pages.editDealRtp.editClickOnTheCancelEndRulesFromRetentionNumberWIthoutModal();
        pages.editDealRtp.waitForAjax();
    });
};
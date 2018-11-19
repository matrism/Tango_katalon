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

exports.editConfirmDeleteRtpRetentionFromAcquisitionForm = function () {
    it('Confirm delete the rtp retention from acquisition form', function () {
        pages.editDealRtp.editConfirmDeleteTheRtpRetentionFromAcquisitionForm();
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

exports.selectScopeNumberIFromInput = function (i, j, type) {
    it('Select scope number ' + i + ' from ' + type + ' input #' + i, function () {
        pages.editDealRtp.selectScopeNumberIFromInput(i, j, type);
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

exports.clickOnAddPostTermCollectionFromRetention = function (i) {
    it('Click on the add post term collection from retention #' + (i + 1), function () {
        pages.editDealRtp.editClickOnTheAddPostTermPeriodFromRetention();
    });
};

exports.editFillIntoDurationFieldPostTermCollectionFromRetention = function (i, j) {
    it('Edit fill into the duration field post term collection #' + (j + 1) +' from retention #' + (i + 1), function () {
        pages.editDealRtp.editFillTheDurationFieldPostTermCollectionFromRetention(i, j);
    });
};


exports.editClickOnAddAnotherAcquisitionPeriodLink = function () {
    it("Edit click on add another acquisition period link", function () {
        pages.editDealRtp.editClickOnTheAddAnotherAcquisitionPeriodLink();
    });
};

exports.scrollIntoViewAddEndRuleToRetention = function(){
  it("Edit - scroll into view add end rule to retention ", function(){
      pages.base.scrollIntoView(element(by.css("div[tg-modular-view='detail'] div.right-terms-period-details")));
  });
};

exports.scrollIntoViewAddEndRuleToRetentionEditMode = function(){
    it("Edit - scroll into view add end rule to retention ", function(){
        pages.base.scrollIntoView(element(by.css("div[tg-modular-edit-id='retentionModulatEdit'] select#retentionDurationType")));
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

exports.editSelectRandomOptionFromOffsetByChoiceEndRules = function (i) {
    it("Edit select the random option from offset by choice end date end rules ", function () {
        pages.editDealRtp.editSelectTheRandomOptionFromOffsetByChoiceEndRules(i);
    });
};

exports.editClickOnAddNewRuleEndRulesAddedRuleNumberI = function (i) {
    it("Edit click on the add new rule end rules added rule number " + i, function () {
        pages.editDealRtp.editClickOnTheAddNewRuleEndRulesAddedRuleNumberI(i);
    });
};

exports.editDeleteRtpEndRulesConditionNumberIRowNumberJWithoutModal = function (i, j) {
    it("Edit delete end rules without modal condition number " + i + " row number " + j, function () {
        pages.editDealRtp.editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal(i, j);
        pages.editDealRtp.waitForAjax();
    });
};


exports.editCancelRtpDeleteEndRules = function () {
    it("Edit cancel delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editCancelDeleteEndRulesModalDialog));
        pages.editDealRtp.elems.editCancelDeleteEndRulesModalDialog.click();
    });
};

exports.editConfirmRtpDeleteEndRules = function () {
    it("Edit confirm delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog));
        pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog.click();
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

exports.editClickOnContinueEditingEndRulesModalButton = function () {
    it("Edit click on the continue editing end rules modal dialog button ", function () {
        pages.editDealRtp.editClickOnTheContinueEditingEndRulesModalButton();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editClickOnConfirmCancellationEndRulesModalButton = function () {
    it("Edit click on the confirm cancellation end rules modal dialog button ", function () {
        pages.editDealRtp.editClickOnTheConfirmCancellationEndRulesModalButton();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editFillIntoPreDefinedDateFieldEndRulesSpecificDateRuleNumberI = function (i, specific_date) {
    it("Edit fill into the pre defined date field end rules specific date rule number " + i, function () {
        pages.editDealRtp.editFillIntoThePreDefinedDateFieldEndRulesSpecificDateRuleNumberI(i, specific_date);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editAddEndRuleOnTheForm = function () {
    it("Edit click on add end rule link on the bottom of the end rules form ", function () {
        pages.editDealRtp.editAddTheEndRuleOnTheForm();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editFillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Fill into the attribute right end rules rule number " + i + " row number " + j, function () {
        pages.editDealRtp.editFillIntoTheAttributeRightDateEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editClickOnDeleteEndRulesButtonForRetention = function(){
    it("Edit click on the delete entire end rules button for retention ", function(){
        pages.editDealRtp.editClickOnTheDeleteEndRulesButtonForRetention();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editCancelDeleteEntireEndRulesForRetention = function () {
    it("Edit cancel delete entire end rules modal dialog for retention", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='cancel()']"))));
        browser.findElement(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='cancel()']")).click();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editConfirmDeleteEntireEndRulesForRetention = function () {
    it("Edit confirm delete end rules modal dialog for retention", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='data.deleteAllEndRulesAndSave()']"))));
        browser.driver.findElement(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='data.deleteAllEndRulesAndSave()']")).click();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editDeleteRuleNumberIFromEndRulesRetention = function(i){
    it("Edit delete rule number " + i  + " from end rules retention ", function(){
       pages.editDealRtp.editDeleteTheRuleNumberIFromEndRulesRetention(i);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editConfirmDeleteRuleNumberIFromEndRulesRetention = function(){
    it("Edit confirm delete rule  from end rules retention ", function(){
        pages.editDealRtp.editConfirmDeleteTheRuleFromEndRulesRetention();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editCancelDeleteRuleNumberIFromEndRulesRetention = function(){
    it("Edit cancel delete rule  from end rules retention ", function(){
        pages.editDealRtp.editCancelDeleteTheRuleFromEndRulesRetention();
        pages.editDealRtp.waitForAjax();
    });
};
exports.editCheckSummaryTextForEndRulesRuleNumberIRetention = function (i, text) {
    it("Edit check the summary text for end rules rule number " + i, function () {
        pages.editDealRtp.editCheckTheSummaryTextForEndRulesRuleNumberIRetention(i, text);
    });
};

exports.editCheckSummaryTextForEndRulesRuleNumberIContainsText = function (i, text) {
    it("Edit check the summary text for end rules rule number " + i, function () {
        pages.editDealRtp.editCheckTheSummaryTextForEndRulesRuleNumberIContainsText(i, text);
    });
};

exports.editClickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJRetention = function (i, j) {
    it("Edit click on the with notice check box end rules rule number " + i + " row number " + j, function () {
        pages.editDealRtp.editClickOnTheWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJRetention(i, j);
        pages.editDealRtp.waitForAjax();
    });
};

exports.editClickOnEndRulesAreaRetention = function () {
    it("Edit click on the end rules area retention", function () {
        pages.editDealRtp.editClickOnTheEndRulesAreaRetention();
        pages.editDealRtp.waitForAjax();
    });
};

exports.editFillIntoEndDateTypePreDefinedDateInputFieldEndRules = function (value) {
    it("Edit fill into the end date type pre defined date input field end rules ", function () {
        pages.editDealRtp.editFillIntoTheEndDateTypePreDefinedDateInputFieldEndRules(value);
    });
};

exports.editFillIntoOffsetByInputFieldEndRulesSpecificValue = function (number) {
    it("Edit fill into the offset by input field end rules ", function () {
        pages.editDealRtp.editFillIntoTheOffsetByInputFieldEndRulesSpecificValue(number);
    });
};

exports.editSelectSpecificOptionFromOffsetByChoiceEndRules = function (value) {
    it("Edit select the specific option from offset by choice end date end rules", function () {
        pages.editDealRtp.editSelectTheSpecificOptionFromOffsetByChoiceEndRules(value);
    });
};

exports.editClickAccountingPeriodEndDateCheckBoxEndRules = function () {
    it("Edit click the accounting period end date check box end rules", function () {
        pages.editDealRtp.editClickOnTheAccountingPeriodEndDateCheckBoxEndRules();
        pages.editDealRtp.waitForAjax();
    });
};
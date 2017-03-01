'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.editDealContractPeriod = exports;

exports.editSelectContractPeriodNumberI = function (i) {
    it("Select contract period number " + i + " from list", function () {
        pages.editDealContractPeriod.selectTheContractPeriodNumberI(i);
    });
};

exports.checkDeleteIconContractPeriodNumberIIsDisplayed = function (i) {
    it("Check delete icon contract period number " + i + " is displayed", function () {
        pages.editDealContractPeriod.checkTheContractPeriodNumberIIsDisplayed(i);
    });
};

exports.editContractPeriodArea = function () {
    it("Edit the contract period area ", function () {
        pages.editDealContractPeriod.editTheContractPeriodArea();
    });
};

exports.editFillIntoEndActualDateField = function (value) {
    it("Edit fill into the end actual date field specific value ", function () {
        pages.editDealContractPeriod.editFillIntoTheEndActualDateField(value);
    });
};

exports.editAddNewContractPeriodDialog = function () {
    it("Edit add new contract period from modal dialog ", function () {
        pages.editDealContractPeriod.editAddTheNewContractPeriodDialog();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editTerminateNewContractPeriodDialog = function () {
    it("Edit terminate new contract period from modal dialog ", function () {
        pages.editDealContractPeriod.editTerminateTheNewContractPeriodDialog();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editFillEndTargetMonths = function () {
    it("Edit fill end target months field ", function () {
        pages.editDealContractPeriod.editFillTheTargetEndMonths();
    });
};

exports.editSaveAllContractPeriodChanges = function () {
    it("Edit save the contract period changes ", function () {
        pages.editDealContractPeriod.editSaveAllTheContractPeriodChanges();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editAddNewContractPeriod = function () {
    it("Edit click on add new contract period icon ", function () {
        pages.editDealContractPeriod.editClickOnAddContractPeriod();
    });
};

exports.deleteContractPeriodNumberI = function (i) {
    it("Delete contract period number " + i, function () {
        pages.editDealContractPeriod.clickOnTheDeleteContractPeriodNumberI(i);
        pages.editDealContractPeriod.waitForAjax();
        pages.editDealContractPeriod.confirmDeleteContractPeriodModalDialog();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.waitForMdrcToBeLoaded = function () {
    it("Wait for MDRC to be loaded", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.mdrcTitle));
    });
};

exports.validateFirstIncompleteMdrcTitle = function () {
    it("Validate incomplete MDRC title ", function () {
        pages.editDealContractPeriod.validateTheFirstIncompleteMdrcTitle();
    });
};

exports.validateFirstDeemedCompleteMdrcTitle = function () {
    it("Validate incomplete MDRC title ", function () {
        pages.editDealContractPeriod.validateTheFirstDeemedCompleteMdrcTitle();
    });
};

exports.validateFirstCompleteMdrcTitle = function () {
    it("Validate incomplete MDRC title ", function () {
        pages.editDealContractPeriod.validateTheFirstCompleteMdrcTitle();
    });
};

exports.validateITypeOfMdrcTitle = function (i, type) {
    it("Validate the I incomplete MDRC title ", function () {
        pages.editDealContractPeriod.validateTheIMdrcTitle(i, type);
    });
};

exports.validateMdrcIMinimumLabelValue = function (i) {
    it("Validate the I minimum label and text ", function () {
        pages.editDealContractPeriod.validateTheMdrcMinimumLabelValueI(i);
    });
};

exports.validateMdrcIMinimumTextValue = function (i) {
    it("Validate the I minimum right text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcMinimumTextValueI(i);
    });
};

exports.validateMdrcICommercialReleaseLabelValue = function (i) {
    it("Validate the I commercial release label value ", function () {
        pages.editDealContractPeriod.validateTheMdrcCommercialReleaseLabelValueI(i);
    });
};

exports.validateMdrcQuantityForCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC quantity for commercial release text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcQuantityForCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC major territory text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcTerritoriesListTextCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC territories list text ", function () {
        pages.editDealContractPeriod.validateTheMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcLabelsTextCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC labels text commercial release text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcLabelsTextCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcMinimumStatutoryMechanicalRateLabelValueI = function (i) {
    it("Validate the I MDRC minimum statutory mechanical rate label value ", function () {
        pages.editDealContractPeriod.validateTheMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
    });
};

exports.validateMdrcMinimumStatutoryTextValueI = function (i) {
    it("Validate the I MDRC minimum statutory text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcMinimumStatutoryTextValueI(i);
    });
};

exports.validateMdrcInNoEventLessThanTextValueI = function (i) {
    it("Validate the I MDRC in no event less than text value", function () {
        pages.editDealContractPeriod.validateTheMdrcInNoEventLessThanTextValueI(i);
    });
};

exports.validateMdrcDeliveryScheduleLabelValueI = function (i) {
    it("Validate the I MDRC delivery schedule label", function () {
        pages.editDealContractPeriod.validateTheMdrcDeliveryScheduleLabelValueI(i);
    });
};

exports.validateMdrcDeliveryScheduleTextValueI = function (i) {
    it("Validate the I MDRC delivery schedule ", function () {
        pages.editDealContractPeriod.validateTheMdrcDeliveryScheduleTextValueI(i);
    });
};

exports.validateMdrcDateCompletedLabelValueI = function (i) {
    it("Validate the I MDRC date completed label value ", function () {
        pages.editDealContractPeriod.validateTheMdrcDateCompletedLabelValueI(i);
    });
};

exports.validateMdrcDateCompletedTextValueI = function (i) {
    it("Validate the I MDRC date completed text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcDateCompletedTextValueI(i);
    });
};

exports.validateMdrcShortfallLabelValueI = function (i) {
    it("Validate the I MDRC shortfall label value ", function () {
        pages.editDealContractPeriod.validateTheMdrcShortfallLabelValueI(i);
    });
};

exports.validateTheMdrcShortfallTextValueI = function (i) {
    it("Validate the I MDRC shortfall text value ", function () {
        pages.editDealContractPeriod.validateTheMdrcShortfallTextValueI(i);
    });
};

exports.editMdrcFormI = function (i) {
    it("Edit MDRC form the i mdrc in the list", function () {
        pages.editDealContractPeriod.editTheIMdrcForm(i)
    });
};

exports.editChooseIncompleteMdrcOption = function () {
    it("Edit - Choose incomplete MDRC option", function () {
        pages.editDealContractPeriod.editClickOnIncompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editMdrcQuantity));
    });
};

exports.editChooseDeemedCompleteMdrcOption = function () {
    it("Edit - Choose deemed complete MDRC option", function () {
        pages.editDealContractPeriod.editClickOnDeemedCompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editMdrcDateCompleted));
    });
};

exports.editChooseCompleteMdrcOption = function () {
    it("Edit - Choose complete MDRC option", function () {
        pages.editDealContractPeriod.editClickOnCompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editMdrcDateCompleted));
    });
};

exports.editCheckIncompleteMdrcOptionIsSelected = function () {
    it("Edit - Check incomplete MDRC option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editIncompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckDeemedCompleteMdrcOptionIsSelected = function () {
    it("Edit - Check deemed complete MDRC option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editDeemedCompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckCompleteMdrcOptionIsSelected = function () {
    it("Edit - Check complete MDRC option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editCompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editMdrcQuantityField = function () {
    it("Edit the MDRC quantity field ", function () {
        pages.editDealContractPeriod.editTheMdrcQuantity();
    });
};

exports.editMdrcMinimumWorkContributionField = function () {
    it("Edit the MDRC minimum work contribution ", function () {
        pages.editDealContractPeriod.editTheMdrcMinimumWorkContribution();
    });
};

exports.editMdrcQuantityForCommercialReleaseField = function () {
    it("Edit the MDRC quantity for commercial release ", function () {
        pages.editDealContractPeriod.editTheMdrcQuantityForCommercialRelease();
    });
};

exports.editMdrcMajorTerritoriesForCommercialReleaseField = function () {
    it("Edit the MDRC major territories for commercial release ", function () {
        pages.editDealContractPeriod.editTheMdrcMajorTerritoriesForCommercialeRelease();
    });
};

exports.editAddFirstMdrcTerritoryField = function () {
    it("Edit - Add MDRC territory ", function () {
        pages.editDealContractPeriod.editTheFirstTerritoriesFieldLetter();
        pages.editDealContractPeriod.editSelectRandomTerritory();
    });
};

exports.editAddMdrcTerritoryField = function () {
    it("Edit - Add MDRC territory ", function () {
        pages.editDealContractPeriod.editTheTerritoriesFieldLetter();
        pages.editDealContractPeriod.editSelectRandomTerritory();
    });
};

exports.editClickMdrcYesCommercialReleaseByMajorLabelButton = function () {
    it("Edit - Click on MDRC yes commercial release by major label ", function () {
        pages.editDealContractPeriod.editClickOnMdrcYesCommercialReleaseByMajorLabel();
    });
};

exports.editClickMdrcNoCommercialReleaseByMajorLabelButton = function () {
    it("Edit - Click on MDRC no commercial release by major label ", function () {
        pages.editDealContractPeriod.editClickOnMdrcNoCommercialReleaseByMajorLabel();
    });
},

    exports.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton = function () {
        it("Edit - Check MDRC yes commercial release by major label option is selected ", function () {
            var test = pages.editDealContractPeriod.elems.editMdrcYesCommercialReleaseByMajorLabel.getAttribute("class").toString();
            expect(test.indexOf("active") != -1);
        });
    };

exports.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton = function () {
    it("Edit - Check MDRC no commercial release by major label option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcNoCommercialReleaseByMajorLabel.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editSelectMdrcRandomLabelOption = function () {
    it("Edit - Select random mdrc label ", function () {
        pages.editDealContractPeriod.editTheMdrcLabelsField();
        pages.editDealContractPeriod.editSelectMdrcRandomValueFromLabel();
    })
};

exports.editClickMdrcYesSelfRecordButton = function () {
    it("Edit - Click on MDRC yes self record ", function () {
        pages.editDealContractPeriod.editClickOnMdrcYesSelfRecord();
    });
};

exports.editClickOnMdrcNoSelfRecordButton = function () {
    it("Edit - Click on MDRC no self record ", function () {
        pages.editDealContractPeriod.editClickOnMdrcNoSelfRecord();
    });
};

exports.editCheckMdrcYesSelfRecordOptionIsSelectedButton = function () {
    it("Edit - Check MDRC yes self record option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcYesSelfRecord.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoSelfRecordOptionIsSelectedOption = function () {
    it("Edit - Check MDRC no self record option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcNoSelfRecord.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editMdrcPercentOfMinStatutoryRateField = function () {
    it("Edit MDRC percent of min statutory rate ", function () {
        pages.editDealContractPeriod.editTheMdrcPercentOfMinStatutoryRate();
    });
};

exports.editMdrcInNoEventLessThanField = function () {
    it("Edit MDRC in no event less than ", function () {
        pages.editDealContractPeriod.editTheMdrcInNoEventLessThan();
    });
};

exports.editClickMdrcYesProportionalRecoupmentAllowedButton = function () {
    it("Edit - Click on MDRC yes proportional recoupment allowed ", function () {
        pages.editDealContractPeriod.editClickOnMdrcYesProportionalRecoupmentAllowed();
    });
};

exports.editClickOnMdrcNoProportionalRecoupmentAllowedButton = function () {
    it("Edit - Click on MDRC no proportional recoupment allowed ", function () {
        pages.editDealContractPeriod.editClickOnMdrcNoProportionalRecoupmentAllowed();
    });
};

exports.editCheckMdrcYesProportionalRecoupmentAllowedOptionIsSelectedButton = function () {
    it("Edit - Check MDRC yes proportional recoupment allowed option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcYesProportionalRecoupmentAllowed.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption = function () {
    it("Edit - Check MDRC no proportional recoupment allowed option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcNoProportionalRecoupmentAllowed.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editClickMdrcYesSeeContractForAdditionalMdrcComplexitiesButton = function () {
    it("Edit - Click on MDRC yes see contract for additional MDRC complexities", function () {
        pages.editDealContractPeriod.editClickOnMdrcYesSeeContractForAdditionalMdrcComplexities();
    });
};

exports.editClickOnMdrcNoSeeContractForAdditionalMdrcComplexitiesButton = function () {
    it("Edit - Click on MDRC no see contract for additional MDRC complexities", function () {
        pages.editDealContractPeriod.editClickOnMdrcNoSeeContractForAdditionalMdrcComplexities();
    });
};

exports.editCheckMdrcYesSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption = function () {
    it("Edit - Check MDRC yes see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcYesSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption = function () {
    it("Edit - Check MDRC no see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcNoSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editMdrcDeliveryScheduleField = function () {
    it("Edit MDRC delivery schedule ", function () {
        pages.editDealContractPeriod.editTheMdrcDeliverySchedule();
    });
};

exports.editMdrcEveryWeeksField = function () {
    it("Edit MDRC every weeks", function () {
        pages.editDealContractPeriod.editTheMdrcEveryWeeks();
    });
};

exports.editDateCompletedField = function () {
    it("Edit the date completed field ", function () {
        pages.editDealContractPeriod.editTheMdrcDateCompleted();
    });
};

exports.editMdrcShortfallAmountField = function () {
    it("Edit the MDRC shortfall amount field ", function () {
        pages.editDealContractPeriod.editTheMdrcShortfallAmount();
    });
};

exports.editClickMdrcForgivenShortfallActionButton = function () {
    it("Edit - Click on MDRC Forgiven shortfall action button", function () {
        pages.editDealContractPeriod.editClickOnMdrcForgivenShortfallActionButton();
    });
};

exports.editCheckMdrcForgivenShortfallActionOptionIsSelectedOption = function () {
    it("Edit - Check MDRC forgiven shortfall action option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcForgivenShortfallButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editClickMdrcCarriedForwardShortfallActionButton = function () {
    it("Edit - Click on MDRC carried forward shortfall action button", function () {
        pages.editDealContractPeriod.editClickOnMdrcCarriedForwardShortfallActionButton();
    });
};

exports.editCheckMdrcCarriedForwardShortfallActionOptionIsSelectedOption = function () {
    it("Edit - Check MDRC carried forward shortfall action option is selected ", function () {
        var test = pages.editDealContractPeriod.elems.editMdrcCarriedForwardShortfallButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editSaveMdrcFormButton = function () {
    it("Edit Save mdrc form ", function () {
        pages.editDealContractPeriod.editClickOnSaveMdrcForm();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editRemoveMdrcTerritory = function () {
    it("Edit remove mdrc territory", function () {
        pages.editDealContractPeriod.editRemoveTheFirstMdrcTerritory();
    });
};

exports.editRemoveMdrcLabel = function () {
    it("Edit remove mdrc label", function () {
        pages.editDealContractPeriod.editRemoveTheFirstMdrcLabel();
    });
};

exports.editEndRulesForm = function () {
    it("Edit the end rules form ", function () {
        pages.editDealContractPeriod.editTheEndRulesForm();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editCancelDeleteEntireEndRules = function () {
    it("Edit cancel delete entire end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='cancel()']"))));
        browser.findElement(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='cancel()']")).click();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editConfirmDeleteEntireEndRules = function () {
    it("Edit confirm delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-footer button[data-ng-click='ok()']"))));
        pages.base.scrollIntoView(element(by.css("div.modal-footer button[data-ng-click='ok()']")));
        browser.driver.findElement(by.css("div.modal-footer button[data-ng-click='ok()']")).click();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editClickOnDeleteEndRulesButton = function () {
    it("Edit click on the delete entire end rules button ", function () {
        pages.editDealContractPeriod.editClickOnTheDeleteEndRulesButton();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editDeleteEndRulesConditionNumberIRowNumberJWithoutModal = function (i, j) {
    it("Edit delete end rules condition number " + i + " row number " + j, function () {
        pages.editDealContractPeriod.editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal(i, j);
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editDeleteEndRulesConditionNumberIRowNumberJ = function (i, j) {
    it("Edit delete end rules condition number " + i + " row number " + j, function () {
        pages.editDealContractPeriod.editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJ(i, j);
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editCancelDeleteEndRules = function () {
    it("Edit cancel delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editCancelDeleteEndRulesModalDialog));
        pages.editDealContractPeriod.elems.editCancelDeleteEndRulesModalDialog.click();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editConfirmDeleteEndRules = function () {
    it("Edit confirm delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealContractPeriod.elems.editConfirmDeleteEndRulesModalDialog));
        pages.editDealContractPeriod.elems.editConfirmDeleteEndRulesModalDialog.click();
        pages.editDealContractPeriod.waitForAjax();
    });
};


exports.editDeleteTheRuleEndRulesNumberI = function (i) {
    it("Edit delete the entire rule number " + i + " from end rules form ", function () {
        pages.editDealContractPeriod.editClickOnTheDeleteRuleEndRulesNumberI(i);
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editSaveEndRulesForm = function () {
    it("Edit save the end rules ", function () {
        pages.editDealContractPeriod.editSaveTheEndRules();
        pages.editDealContractPeriod.waitForAjax();
    });
};

exports.editCheckSummaryTextForEndRulesRuleNumberI = function (i, text) {
    it("Edit check the summary text for end rules rule number " + i, function () {
        pages.editDealContractPeriod.editCheckTheSummaryTextForEndRulesRuleNumberI(i, text);
    });
};

exports.itEditIncompleteMdrcContractPeriod = function (i) {
    describe("Edit incomplete MDRC on  contract period screen", function () {
        steps.editDealContractPeriod.editMdrcFormI(i);
        steps.editDealContractPeriod.editChooseIncompleteMdrcOption();
        steps.editDealContractPeriod.editCheckIncompleteMdrcOptionIsSelected();
        steps.editDealContractPeriod.editMdrcQuantityField();
        steps.editDealContractPeriod.editMdrcQuantityForCommercialReleaseField();
        steps.editDealContractPeriod.editAddMdrcTerritoryField();
        steps.editDealContractPeriod.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton();
        steps.editDealContractPeriod.editClickMdrcNoCommercialReleaseByMajorLabelButton();
        steps.editDealContractPeriod.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton();
        steps.base.scrollIntoView("Label section", pages.editDealContractPeriod.elems.editMdrcLabelsElement);
        steps.editDealContractPeriod.editRemoveMdrcLabel();
        steps.editDealContractPeriod.editSelectMdrcRandomLabelOption();
        steps.editDealContractPeriod.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcPercentOfMinStatutoryRateField();
        steps.editDealContractPeriod.editMdrcInNoEventLessThanField();
        steps.editDealContractPeriod.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
        steps.editDealContractPeriod.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcDeliveryScheduleField();
        steps.editDealContractPeriod.editMdrcEveryWeeksField();
        steps.base.scrollIntoView("Save MDRC button", pages.editDealContractPeriod.elems.editMdrcSaveButton);
        steps.editDealContractPeriod.editSaveMdrcFormButton();
    })
};

exports.itEditDeemedCompleteMdrcContractPeriod = function (i) {
    describe("Edit incomplete MDRC on  contract period screen", function () {
        steps.editDealContractPeriod.editMdrcFormI(i);
        steps.editDealContractPeriod.editChooseDeemedCompleteMdrcOption();
        steps.editDealContractPeriod.editCheckDeemedCompleteMdrcOptionIsSelected();
        steps.editDealContractPeriod.editDateCompletedField();
        steps.editDealContractPeriod.editMdrcShortfallAmountField();
        steps.editDealContractPeriod.editMdrcQuantityField();
        steps.editDealContractPeriod.editMdrcQuantityForCommercialReleaseField();
        steps.editDealContractPeriod.editAddMdrcTerritoryField();
        steps.editDealContractPeriod.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton();
        steps.editDealContractPeriod.editClickMdrcNoCommercialReleaseByMajorLabelButton();
        steps.editDealContractPeriod.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton();
        steps.base.scrollIntoView("Label section", pages.editDealContractPeriod.elems.editMdrcLabelsElement);
        steps.editDealContractPeriod.editRemoveMdrcLabel();
        steps.editDealContractPeriod.editSelectMdrcRandomLabelOption();
        steps.editDealContractPeriod.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcPercentOfMinStatutoryRateField();
        steps.editDealContractPeriod.editMdrcInNoEventLessThanField();
        steps.editDealContractPeriod.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
        steps.editDealContractPeriod.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcDeliveryScheduleField();
        steps.editDealContractPeriod.editMdrcEveryWeeksField();
        steps.base.scrollIntoView("Save MDRC button", pages.editDealContractPeriod.elems.editMdrcSaveButton);
        steps.editDealContractPeriod.editSaveMdrcFormButton();
    })
};

exports.itEditCompleteMdrcContractPeriod = function (i) {
    describe("Edit incomplete MDRC on  contract period screen", function () {
        steps.editDealContractPeriod.editMdrcFormI(i);
        steps.editDealContractPeriod.editChooseCompleteMdrcOption();
        steps.editDealContractPeriod.editCheckCompleteMdrcOptionIsSelected();
        steps.editDealContractPeriod.editDateCompletedField();
        steps.editDealContractPeriod.editMdrcQuantityField();
        steps.editDealContractPeriod.editMdrcQuantityForCommercialReleaseField();
        steps.editDealContractPeriod.editAddMdrcTerritoryField();
        steps.editDealContractPeriod.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton();
        steps.editDealContractPeriod.editClickMdrcNoCommercialReleaseByMajorLabelButton();
        steps.editDealContractPeriod.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton();
        steps.base.scrollIntoView("Label section", pages.editDealContractPeriod.elems.editMdrcLabelsElement);
        steps.editDealContractPeriod.editRemoveMdrcLabel();
        steps.editDealContractPeriod.editSelectMdrcRandomLabelOption();
        steps.editDealContractPeriod.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcPercentOfMinStatutoryRateField();
        steps.editDealContractPeriod.editMdrcInNoEventLessThanField();
        steps.editDealContractPeriod.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
        steps.editDealContractPeriod.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcDeliveryScheduleField();
        steps.editDealContractPeriod.editMdrcEveryWeeksField();
        steps.base.scrollIntoView("Save MDRC button", pages.editDealContractPeriod.elems.editMdrcSaveButton);
        steps.editDealContractPeriod.editSaveMdrcFormButton();
    })
};

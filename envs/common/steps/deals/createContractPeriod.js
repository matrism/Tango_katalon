"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealContractPeriod = exports;

exports.addNewContractPeriod = function () {
    it("Click on add new contract period icon ", function () {
        pages.createDealContractPeriod.clickOnAddContractPeriod();
    });
};

exports.enterActualStartDate = function (value) {
    it('Enter actual contract period start date (' + value + ')', function () {
        pages.createDealContractPeriod.fillStartActualDateSpecificValue(value);
    });
};

exports.enterTargetEndDateInMonths = function (value) {
    it('Enter target contract period end date (' + value + ')', function () {
        pages.createDealContractPeriod.fillTargetEndMonthsSpecificValue(value);
    });
};

exports.fillActualEndDateField = function () {
    it("Fill actual end date field ", function () {
        pages.createDealContractPeriod.fillEndActualDate();
    });
};

exports.fillActualEndDateFieldSpecificValue = function (actualDate) {
    it("Fill actual end date field ", function () {
        pages.createDealContractPeriod.fillEndActualDateSpecificValue(actualDate);
    });
};

exports.fillContractPeriodDescription = function (description) {
    it("Fill in description field contract period ", function () {
        pages.createDealContractPeriod.fillDescriptionField(description);
    });
};

exports.fillEndTargetMonths = function () {
    it("Fill end target months field ", function () {
        pages.createDealContractPeriod.fillTargetEndMonths();
    });
};

exports.fillMandatoryFieldsContractPeriodSpecificValue = function (value) {
    it("Fill mandatory fields contract period", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.startDate));
        pages.createDealContractPeriod.fillStartActualDateSpecificValue(value);
        pages.createDealContractPeriod.fillTargetEndMonths();
    });
};

exports.fillMandatoryFieldsContractPeriod = function () {
    it("Fill mandatory fields contract period", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.startDate));
        pages.createDealContractPeriod.fillStartActualDate();
        pages.createDealContractPeriod.fillTargetEndMonths();
    });
};

exports.clickOnAddMdrc = function () {
    it("Click on add new MDRC to contract period", function () {
        pages.createDealContractPeriod.clickOnAddMdrcLink();
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.mdrcQuantity));
    });
};

exports.chooseIncompleteMdrcOption = function () {
    it("Choose incomplete MDRC option ", function () {
        pages.createDealContractPeriod.clickOnIncompleteOption();
    });
};

exports.chooseDeemedCompleteMdrcOption = function () {
    it("Choose deemed complete MDRC option", function () {
        pages.createDealContractPeriod.clickOnDeemedCompleteOption();
        pages.createDealAdvances.waitForAjax();
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.mdrcDateCompleted));
    });
};

exports.chooseCompleteMdrcOption = function () {
    it("Choose complete MDRC option", function () {
        pages.createDealContractPeriod.clickOnCompleteOption();
        pages.createDealAdvances.waitForAjax();
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.elems.mdrcDateCompleted));
    });
};

exports.checkIncompleteMdrcOptionIsSelected = function () {
    it("Check incomplete MDRC option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.incompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.checkDeemedCompleteMdrcOptionIsSelected = function () {
    it("Check deemed complete MDRC option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.deemedCompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.checkCompleteMdrcOptionIsSelected = function () {
    it("Check complete MDRC option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.completeMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.fillMdrcQuantity = function () {
    it("Fill into MDRC quantity field ", function () {
        pages.createDealContractPeriod.fillIntoMdrcQuantity();
    });
};

exports.fillMdrcMinimumWorkContribution = function () {
    it("Fill into MDRC minimum work contribution ", function () {
        pages.createDealContractPeriod.fillIntoMdrcMinimumWorkContribution();
    });
};

exports.fillMdrcQuantityForCommercialRelease = function () {
    it("Fill into MDRC quantity for commercial release ", function () {
        pages.createDealContractPeriod.fillIntoMdrcQuantityForCommercialRelease();
    });
};

exports.fillInMdrcMajorTerritoriesForCommercialRelease = function () {
    it("Fill into MDRC major territories for commercial release ", function () {
        pages.createDealContractPeriod.fillIntoMdrcMajorTerritoriesForCommercialeRelease();
    });
};

exports.addMdrcTerritory = function () {
    it("Add MDRC territory ", function () {
        pages.createDealContractPeriod.fillIntoTerritoriesFieldLetter();
        pages.createDealContractPeriod.selectRandomTerritory();
    });
};

exports.clickMdrcYesCommercialReleaseByMajorLabel = function () {
    it("Click on MDRC yes commercial release by major label ", function () {
        pages.createDealContractPeriod.clickOnMdrcYesCommercialReleaseByMajorLabel();
    });
};

exports.clickMdrcNoCommercialReleaseByMajorLabel = function () {
    it("Click on MDRC no commercial release by major label ", function () {
        pages.createDealContractPeriod.clickOnMdrcNoCommercialReleaseByMajorLabel();
    });
};

exports.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected = function () {
    it("Check MDRC yes commercial release by major label option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcYesCommercialReleaseByMajorLabel.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected = function () {
    it("Check MDRC no commercial release by major label option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcNoCommercialReleaseByMajorLabel.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.selectMdrcRandomLabel = function () {
    it("Select random mdrc label ", function () {
        pages.createDealContractPeriod.fillIntoMdrcLabelsField();
        pages.createDealContractPeriod.selectMdrcRandomValueFromLabel();
    });
};


exports.clickMdrcYesSelfRecord = function () {
    it("Click on MDRC yes self record ", function () {
        pages.createDealContractPeriod.clickOnMdrcYesSelfRecord();
    });
};


exports.clickOnMdrcNoSelfRecord = function () {
    it("Click on MDRC no self record ", function () {
        pages.createDealContractPeriod.clickOnMdrcNoSelfRecord();
    });
};

exports.checkMdrcYesSelfRecordOptionIsSelected = function () {
    it("Check MDRC yes self record option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcYesSelfRecord.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.checkMdrcNoSelfRecordOptionIsSelected = function () {
    it("Check MDRC no self record option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcNoSelfRecord.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.fillMdrcPercentOfMinStatutoryRate = function () {
    it("Fill MDRC percent of min statutory rate ", function () {
        pages.createDealContractPeriod.fillIntoMdrcPercentOfMinStatutoryRate();
    });
};

exports.fillMdrcInNoEventLessThan = function () {
    it("Fill MDRC in no event less than ", function () {
        pages.createDealContractPeriod.fillIntoMdrcInNoEventLessThan();
    });
};

exports.clickMdrcYesProportionalRecoupmentAllowed = function () {
    it("Click on MDRC yes proportional recoupment allowed ", function () {
        pages.createDealContractPeriod.clickOnMdrcYesProportionalRecoupmentAllowed();
    });
};

exports.clickOnMdrcNoProportionalRecoupmentAllowed = function () {
    it("Click on MDRC no proportional recoupment allowed ", function () {
        pages.createDealContractPeriod.clickOnMdrcNoProportionalRecoupmentAllowed();
    });
};

exports.checkMdrcYesProportionalRecoupmentAllowedOptionIsSelected = function () {
    it("Check MDRC yes proportional recoupment allowed option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcYesProportionalRecoupmentAllowed.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected = function () {
    it("Check MDRC no proportional recoupment allowed option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcNoProportionalRecoupmentAllowed.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickMdrcYesSeeContractForAdditionalMdrcComplexities = function () {
    it("Click on MDRC yes see contract for additional MDRC complexities", function () {
        pages.createDealContractPeriod.clickOnMdrcYesSeeContractForAdditionalMdrcComplexities();
    });
};

exports.clickOnMdrcNoSeeContractForAdditionalMdrcComplexities = function () {
    it("Click on MDRC no see contract for additional MDRC complexities", function () {
        pages.createDealContractPeriod.clickOnMdrcNoSeeContractForAdditionalMdrcComplexities();
    });
};

exports.checkMdrcYesSeeContractForAdditionalMdrcComplexitiesOptionIsSelected = function () {
    it("Check MDRC yes see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcYesSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected = function () {
    it("Check MDRC no see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcNoSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.fillMdrcDeliverySchedule = function () {
    it("Fill MDRC delivery schedule ", function () {
        pages.createDealContractPeriod.fillIntoMdrcDeliverySchedule();
    });
};

exports.fillMdrcEveryWeeks = function () {
    it("Fill MDRC every weeks", function () {
        pages.createDealContractPeriod.fillIntoMdrcEveryWeeks();
    });
};

exports.fillDateCompleted = function () {
    it("Fill into date completed field ", function () {
        pages.createDealContractPeriod.fillIntoMdrcDateCompleted();
    });
};

exports.fillMdrcShortfallAmount = function () {
    it("Fill into MDRC shortfall amount field ", function () {
        pages.createDealContractPeriod.fillIntoMdrcShortfallAmount();
    });
};

exports.clickMdrcForgivenShortfallAction = function () {
    it("Click on MDRC Forgiven shortfall action button", function () {
        pages.createDealContractPeriod.clickOnMdrcForgivenShortfallActionButton();
    });
};

exports.checkMdrcForgivenShortfallActionOptionIsSelected = function () {
    it("Check MDRC forgiven shortfall action option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcForgivenShortfallButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickMdrcCarriedForwardShortfallAction = function () {
    it("Click on MDRC carried forward shortfall action button", function () {
        pages.createDealContractPeriod.clickOnMdrcCarriedForwardShortfallActionButton();
    });
};

exports.checkMdrcCarriedForwardShortfallActionOptionIsSelected = function () {
    it("Check MDRC carried forward shortfall action option is selected ", function () {
        var test = pages.createDealContractPeriod.elems.mdrcCarriedForwardShortfallButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.saveMdrcForm = function () {
    it("Save mdrc form ", function () {
        pages.createDealContractPeriod.clickOnSaveMdrcForm();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.addNewContractPeriodDialog = function () {
    it("Add new contract period from modal dialog ", function () {
        pages.createDealContractPeriod.addTheNewContractPeriodDialog();
    });
};

exports.selectContractPeriodNumberI = function (i) {
    it("Select contract period number " + i + " from list", function () {
        pages.createDealContractPeriod.selectTheContractPeriodNumberI(i);
    });
};

exports.checkSummaryTextForEndRulesRuleNumberI = function (i, text) {
    it("Check the summary text for end rules rule number " + i, function () {
        pages.createDealContractPeriod.checkTheSummaryTextForEndRulesRuleNumberI(i, text);
    });
};

exports.clickOnEndRulesArea = function () {
    it("Click on the end rules area", function () {
        pages.createDealContractPeriod.clickOnTheEndRulesArea();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.checkSummaryTextForEndRulesRuleNumberIContainsText = function (i, text) {
    it("Check the summary text for end rules rule number " + i, function () {
        pages.createDealContractPeriod.checkTheSummaryTextForEndRulesRuleNumberIContainsText(i, text);
    });
};

exports.clickOnAddEndRulesToContractPeriod = function () {
    it("Click on the add end rules link to contract period ", function () {
        pages.createDealContractPeriod.clickOnTheAddEndRulesToContractPeriod();
    });
};

exports.selectEndDateEndRulesSpecificValue = function (value) {
    it("Select end date end rules specific value ", function () {
        pages.createDealContractPeriod.selectTheEndDateEndRulesSpecificValue(value);
    });
};

exports.fillIntoEndDateTypePreDefinedDateInputFieldEndRules = function (value) {
    it("Fill into the end date type pre defined date input field end rules ", function () {
        pages.createDealContractPeriod.fillIntoTheEndDateTypePreDefinedDateInputFieldEndRules(value);
    });
};


exports.selectEndDateEndRulesSpecificValueRuleNumberI = function (i, value) {
    it("Select end date end rules specific value ", function () {
        pages.createDealContractPeriod.selectTheEndDateEndRulesSpecificValueRuleNumberI(i, value);
    });
};

exports.selectWhenVariableLeftEndRulesSpecificValue = function (value) {
    it("Select the when variable left end rules specific value ", function () {
        pages.createDealContractPeriod.selectTheWhenVariableLeftEndRulesSpecificValue(value);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.selectWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Select the when variable left end rules specific value rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.selectTheWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.checkAttributeLeftWarningMessageEndRules = function () {
    it("Check the attribute left warning message end rules ", function () {
        pages.createDealContractPeriod.checkTheAttributeLeftWarningMessageEndRules();
    });
};

exports.checkVariableRightWarningMessageEndRules = function () {
    it("Check the variable right warning message end rules ", function () {
        pages.createDealContractPeriod.checkTheVariableRightWarningMessageEndRules();
    });
};

exports.fillIntoAttributeLeftEndRules = function () {
    it("Fill into the attribute left end rules field ", function () {
        pages.createDealContractPeriod.fillIntoTheAttributeLeftEndRules();
    });
};

exports.fillIntoAttributeLeftEndRulesRuleNumberIRowNumberJ = function (i, j) {
    it("Fill into the attribute left end rules rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.fillIntoTheAttributeLeftEndRulesRuleNumberIRowNumberJ(i, j);
    });
};

exports.fillIntoAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Fill into the attribute left end rules rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.fillIntoTheAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
    });
};

exports.fillIntoAttributeLeftAmountEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Fill into the attribute left end rules rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.fillIntoTheAttributeLeftAmountEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
    });
};

exports.selectAttributeLeftEndRulesSpecificOptionPercentOrAmountRuleNumberIRowNumberJ = function (i, j, value) {
    it("Select the attribute left end rules specific option percent or amount rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.selectTheAttributeLeftEndRulesSpecificOptionPercentOrAmountRuleNumberIRowNumberJ(i, j, value);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.selectRequirementEndRulesRandomValue = function (value) {
    it("Select the requirement end rule random value ", function () {
        pages.createDealContractPeriod.selectTheRequirementEndRulesSpecificValue(value);
    });
};

exports.selectRequirementEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Select the requirement end rules specific value rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.selectTheRequirementEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
    });
};

exports.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK = function (i, j, k, index) {
    it("Select the requirement end rules specific value rule number " + i + " row number " + j + " and value of k " + k, function () {
        pages.createDealContractPeriod.selectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJDataNumberK(i, j, k, index);
    });
};

exports.checkDeleteIconIsPresentAndDataTooltipEndRulesConditionNumberIRowNumberJ = function (i, j) {
    it("Check that the delete rule icon is present end rules rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.checkTheDeleteIconIsPresentAndDataTooltipEndRulesConditionNumberIRowNumberJ(i, j);
    });
};

exports.deleteEndRule = function (i) {
    it('Delete end rule #' + i, function () {
        pages.createDealContractPeriod.clickOnDeleteEndRule(i);
    });
};

exports.confirmDeleteEndRule = function () {
    it('Confirm delete end rule', function () {
        pages.createDealContractPeriod.clickOnConfirmDeleteEndRule();
    });
};

exports.reorderEndRule = function (from, to) {
    it('Reorder rule #' + from + ' to #' + to, function(){
        pages.createDealContractPeriod.reorderEndRule(from, to);
    });
};

exports.deleteEndRulesConditionNumberIRowNumberJWithoutModal = function (i, j) {
    it("Delete end rules condition number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.clickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal(i, j);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.deleteEndRulesConditionNumberIRowNumberJ = function (i, j) {
    it("Delete end rules condition number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.clickOnTheDeleteIconEndRulesConditionNumberIRowNumberJ(i, j);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.cancelDeleteEndRules = function () {
    it("Cancel delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealContractPeriod.elems.cancelDeleteEndRulesModalDialog));
        pages.createDealContractPeriod.elems.cancelDeleteEndRulesModalDialog.click();
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.ruleDateLabel(1)));
    });
};

exports.cancelDeleteEntireEndRules = function () {
    it("Cancel delete entire end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='cancel()']"))));
        browser.findElement(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='cancel()']")).click();
        pages.createDealContractPeriod.waitForAjax();
        browser.wait(ExpectedConditions.visibilityOf(pages.createDealContractPeriod.ruleDateLabel(1)));
    });
};

exports.confirmDeleteEntireEndRules = function () {
    it("Confirm delete end rules modal dialog ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='data.deleteAllEndRulesAndSave()']"))));
        browser.driver.findElement(by.css("div[data-ng-show='data.deleteButton'] div.modal-footer button[data-ng-click='data.deleteAllEndRulesAndSave()']")).click();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.clickOnDeleteEndRulesButton = function(){
    it("Click on the delete entire end rules button ", function(){
        pages.createDealContractPeriod.clickOnTheDeleteEndRulesButton();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.selectRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ = function (i, j, index) {
    it("Select the requirement end rules specific value by index rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.selectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ(i, j, index);
    });
};

exports.selectRightVariableEndRulesSpecificValue = function (value) {
    it("Select the right variable end rules specific value ", function () {
        pages.createDealContractPeriod.selectTheRightVariableEndRulesSpecificValue(value);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.selectRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Select the right variable end rules specific value rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.selectTheRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.fillIntoAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ = function (i, j, value) {
    it("Fill into the attribute right end rules rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.fillIntoTheAttributeRightEndRulesSpecificValueRuleNumberIRowNumberJ(i, j, value);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.saveEndRulesForm = function () {
    it("Save the end rules ", function () {
        pages.createDealContractPeriod.saveTheEndRules();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.doneEndRules = function () {
    it("Save the end rules ", function () {
        pages.createDealContractPeriod.doneTheEndRules();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.clickOnCancelEndRulesButton = function () {
    it("Click on the cancel end rules button", function () {
        pages.createDealContractPeriod.clickOnTheCancelEndRulesButton();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.clickOnAddAdvanceAssumptionsLink = function () {
    it("Click on the add advance assumptions link ", function () {
        pages.createDealContractPeriod.clickOnTheAddAdvanceAssumptionsLink();
    });
};

exports.fillIntoLpControlPercentageOfWork = function () {
    it("Fill into the lp control percentage of work ", function () {
        pages.createDealContractPeriod.fillIntoTheLpControlPercentageOfWork();
    });
};

exports.fillIntoLpControlPercentageOfMechanicalIncome = function () {
    it("Fill into the Lp control percentage of mechanical income ", function () {
        pages.createDealContractPeriod.fillIntoTheLpControlPercentageOfMechanicalIncome();
    });
};

exports.clickOnConfirmCancellationEndRulesModalButton = function () {
    it("Click on the confirm cancellation end rules modal dialog button ", function () {
        pages.createDealContractPeriod.clickOnTheConfirmCancellationEndRulesModalButton();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.clickOnContinueEditingEndRulesModalButton = function () {
    it("Click on the continue editing end rules modal dialog button ", function () {
        pages.createDealContractPeriod.clickOnTheContinueEditingEndRulesModalButton();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.fillIntoNumberOfSongs = function () {
    it("Fill into the number of songs ", function () {
        pages.createDealContractPeriod.fillIntoTheNumberOfSongs();
    });
};

exports.fillIntoPercentageOfStatutoryRate = function () {
    it("Fill into the percentage of statutory rate ", function () {
        pages.createDealContractPeriod.fillIntoThePercentageOfStatutoryRate();
    });
};

exports.fillIntoAmountNoLessThan = function () {
    it("Fill into the amount no less than field ", function () {
        pages.createDealContractPeriod.fillIntoTheAmountNoLessThan();
    });
};

exports.selectRandomLabelValueAssumptions = function () {
    it("Select random label value advance assumptions ", function () {
        pages.createDealContractPeriod.selectTheRandomLabelValueAssumptions();
    });
};

exports.saveAdvanceAssumptions = function () {
    it("Save the advance assumptions ", function () {
        pages.createDealContractPeriod.saveTheAdvanceAssumptions();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.checkEndRulesTooltipTextValue = function () {
    it("Exports the end rules tooltip text value ", function () {
        pages.createDealContractPeriod.checkTheEndRulesTooltipTextValue();
    });
};

exports.checkRulesForEndDateTitleTextEndRules = function () {
    it("Check the rules for end rules date title text end rules ", function () {
        pages.createDealContractPeriod.checkTheRulesForEndDateTitleTextEndRules();
    });
};

exports.checkRulesForEndDateDataTooltipTextEndRules = function () {
    it("Check the rules for end date data tooltip text end rules", function () {
        pages.createDealContractPeriod.checkTheRulesForEndDateDataTooltipTextEndRules();
    });
};

exports.checkSummaryOfRulesForEndDateTitleTextEndRules = function () {
    it("Check the summary of rules for end date title text end rules ", function () {
        pages.createDealContractPeriod.checkTheSummaryOfRulesForEndDateTitleTextEndRules();
    });
};

exports.checkSummaryOfRulesForEndDateDataTooltipTextEndRules = function () {
    it("Check the summary of rules for end date data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheSummaryOfRulesForEndDateDataTooltipTextEndRules();
    });
};

exports.checkRulesTitleTextEndRules = function () {
    it("Check the rules title text end rules ", function () {
        pages.createDealContractPeriod.checkTheRulesTitleTextEndRules();
    });
};

exports.checkRulesDataTooltipTextEndRules = function () {
    it("Check the rules data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheRulesDataTooltipTextEndRules();
    });
};

exports.checkEndDateDataTooltipTextEndRules = function () {
    it("Check the end date data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheEndDateDataTooltipTextEndRules();
    });
};

exports.clickAccountingPeriodEndDateCheckBoxEndRules = function () {
    it("Click the accounting period end date check box end rules", function () {
        pages.createDealContractPeriod.clickOnTheAccountingPeriodEndDateCheckBoxEndRules();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.checkAccountingPeriodEndDataTooltipTextEndRules = function () {
    it("Check the accounting period end data tooltip text end rules", function () {
        pages.createDealContractPeriod.checkTheAccountingPeriodEndDataTooltipTextEndRules();
    });
};

exports.checkVariableLeftDataTooltipTextEndRules = function () {
    it("Check the variable left data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheVariableLeftDataTooltipTextEndRules();
    });
};

exports.checkAttributeLeftDataTooltipTextEndRules = function () {
    it("Check the attribute left data tooltip text end rules", function () {
        pages.createDealContractPeriod.checkTheAttributeLeftDataTooltipTextEndRules();
    });
};

exports.checkWithNoticeDataTooltipTextEndRules = function () {
    it("Check the with notice data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheWithNoticeDataTooltipTextEndRules();
    });
};

exports.checkRequirementDataTooltipTextEndRules = function () {
    it("Check the requirement data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheRequirementDataTooltipTextEndRules();
    });
};

exports.checkVariableRightDataTooltipTextEndRules = function () {
    it("Check the variable right data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheVariableRightDataTooltipTextEndRules();
    });
};

exports.checkAttributeRightDataTooltipTextEndRules = function () {
    it("Check the attribute right data tooltip text end rules ", function () {
        pages.createDealContractPeriod.checkTheAttributeRightDataTooltipTextEndRules();
    });
};

exports.clickOnWithNoticeCheckBoxEndRules = function () {
    it("Click on the with notice check box end rules ", function () {
        pages.createDealContractPeriod.clickOnTheWithNoticeCheckBoxEndRules();
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.clickOnWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ = function (i, j) {
    it("Click on the with notice check box end rules rule number " + i + " row number " + j, function () {
        pages.createDealContractPeriod.clickOnTheWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJ(i, j);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.validateAccountingPeriodEndRulesIsDisplayed = function () {
    it("Validate the accounting period end  rules is displayed", function () {
        expect(pages.createDealContractPeriod.elems.accountingPeriodEndCheckBoxEndRules.isDisplayed()).toBeTruthy();
    });
};

exports.validateOffsetByInputFieldEndRulesIsDisplayed = function () {
    it("Validate the offset by input field end rules is displayed ", function () {
        expect(pages.createDealContractPeriod.elems.offsetByInputFieldEndRules.isDisplayed()).toBeTruthy();
    });
};

exports.fillIntoOffsetByInputFieldEndRules = function () {
    it("Fill into the offset by input field end rules ", function () {
        pages.createDealContractPeriod.fillIntoTheOffsetByInputFieldEndRules();
    });
};

exports.fillIntoOffsetByInputFieldEndRulesSpecificValue = function (number) {
    it("Fill into the offset by input field end rules ", function () {
        pages.createDealContractPeriod.fillIntoTheOffsetByInputFieldEndRulesSpecificValue(number);
    });
};

exports.fillIntoOffsetByInputFieldEndRulesRuleNumberI = function (i) {
    it("Fill into the offset by input field end rules rule number " + i, function () {
        pages.createDealContractPeriod.fillIntoTheOffsetByInputFieldEndRulesRuleNumberI(i);
    });
};

exports.selectRandomOptionFromOffsetByChoiceEndRules = function () {
    it("Select the random option from offset by choice end date end rules ", function () {
        pages.createDealContractPeriod.selectTheRandomOptionFromOffsetByChoiceEndRules();
    });
};

exports.selectSpecificOptionFromOffsetByChoiceEndRules = function (value) {
    it("Select the specific option from offset by choice end date end rules", function () {
        pages.createDealContractPeriod.selectTheSpecificOptionFromOffsetByChoiceEndRules(value);
    });
};

exports.validatePreDefinedDateFieldEndRulesIsRequiredWarning = function (error_message) {
    it('Validate the pre defined date field end rules is required and check the error message', function () {
        expect(pages.createDealContractPeriod.elems.preDefinedDateInputFieldEndRules.isDisplayed()).toBeTruthy();
        pages.createDealContractPeriod.validateThePreDefinedDateFieldEndRulesIsRequiredWarning(error_message);
    });
};

exports.fillIntoPreDefinedDateFieldEndRulesSpecificDate = function (specific_date) {
    it("Fill into the pre defined date field end rules specific date ", function () {
        pages.createDealContractPeriod.fillIntoThePreDefinedDateFieldEndRulesSpecificDate(specific_date);
    });
};


exports.fillIntoPreDefinedDateFieldEndRulesSpecificDateRuleNumberI = function (i, specific_date) {
    it("Fill into the pre defined date field end rules specific date rule number " + i, function () {
        pages.createDealContractPeriod.fillIntoThePreDefinedDateFieldEndRulesSpecificDateRuleNumberI(i, specific_date);
        pages.createDealContractPeriod.waitForAjax();
    });
};

exports.validatePreDefinedDateFieldAttributeRightEndRulesIsRequiredWarning = function (error_message) {
    it('Validate the pre defined date attribute right field end rules is required and check the error message', function () {
        expect(pages.createDealContractPeriod.elems.preDefinedDateAttributeRightMandatoryErrorMessageEndRules.isDisplayed()).toBeTruthy();
        pages.createDealContractPeriod.validateThePreDefinedDateAttributeRightFieldEndRulesIsRequiredWarning(error_message);
    });
};

exports.clickOnAddNewRuleEndRulesAddedRuleNumberI = function (i) {
    it("Click on the add new rule end rules added rule number " + i, function () {
        pages.createDealContractPeriod.clickOnTheAddNewRuleEndRulesAddedRuleNumberI(i);
    });
};

exports.checkTextRuleWhenOrAndEndRulesRuleNumberI = function (i, name) {
    it("Check the text rule when or and end rules rule number " + i, function () {
        pages.createDealContractPeriod.checkTheTextRuleWhenOrAndEndRulesRuleNumberI(i, name);
    });
};

exports.clickOnAddRuleInTheBottomOfEndRulesForm = function () {
    it("Click on the add rule in the bottom of end rules form ", function () {
        pages.createDealContractPeriod.clickOnTheAddRuleInTheBottomOfEndRulesForm();
        pages.createDealContractPeriod.waitForAjax();
    });
};


exports.itAddAdvanceAssumptions = function () {
    describe("Add advance assumptions ", function () {
        steps.createDealContractPeriod.clickOnAddAdvanceAssumptionsLink();
        steps.createDealContractPeriod.fillIntoLpControlPercentageOfWork();
        steps.createDealContractPeriod.fillIntoLpControlPercentageOfMechanicalIncome();
        steps.createDealContractPeriod.fillIntoNumberOfSongs();
        steps.createDealContractPeriod.fillIntoPercentageOfStatutoryRate();
        steps.createDealContractPeriod.fillIntoAmountNoLessThan();
        steps.createDealContractPeriod.selectRandomLabelValueAssumptions();
        steps.createDealContractPeriod.saveAdvanceAssumptions();

    });
};

exports.itAddSimpleEndRuleToContractPeriod = function () {
    describe("Add end rule to contract period ", function () {
        steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
        steps.base.scrollIntoView("End rules details ", pages.createDealContractPeriod.elems.endDateFieldButtonEndRules);
        steps.createDealContractPeriod.selectEndDateEndRulesSpecificValue("Repayment Date");
        steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValue("Balance Repaid");
        steps.createDealContractPeriod.fillIntoAttributeLeftEndRules();
        steps.createDealContractPeriod.selectRequirementEndRulesRandomValue("<");
        steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValue("MDRC Complete");
    });
};

exports.itAddSimpleEndRuleToRtp = function () {
    describe("Add end rule to contract period ", function () {
        steps.createDealContractPeriod.selectEndDateEndRulesSpecificValue("Repayment Date");
        steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValue("Balance Repaid");
        steps.createDealContractPeriod.fillIntoAttributeLeftEndRules();
        steps.createDealContractPeriod.selectRequirementEndRulesRandomValue("<");
        steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValue("Retention Period Minimum");
        steps.createDealContractPeriod.doneEndRules();
    });
};

exports.itAddSpecificEndRuleToContractPeriod = function (endDate, whenVariableLeft, variableRight) {
    describe("Add end rule to contract period ", function () {
        steps.createDealContractPeriod.clickOnAddEndRulesToContractPeriod();
        steps.createDealContractPeriod.selectEndDateEndRulesSpecificValue(endDate);
        steps.createDealContractPeriod.selectWhenVariableLeftEndRulesSpecificValue(whenVariableLeft);
        steps.createDealContractPeriod.fillIntoAttributeLeftEndRules();
        steps.createDealContractPeriod.selectRequirementEndRulesRandomValue("<");
        steps.createDealContractPeriod.selectRightVariableEndRulesSpecificValue(variableRight);
        steps.createDealContractPeriod.saveEndRules();
    });
};

exports.itAddIncompleteMdrcContractPeriod = function () {
    describe("Add incomplete MDRC on  contract period screen", function () {
        steps.createDealContractPeriod.clickOnAddMdrc();
        steps.createDealContractPeriod.checkIncompleteMdrcOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcQuantity();
        steps.createDealContractPeriod.fillMdrcQuantityForCommercialRelease();
        steps.base.scrollIntoView("Add mdrc territory", pages.createDealContractPeriod.elems.mdrcTerritoriesField);
        steps.createDealContractPeriod.addMdrcTerritory();
        steps.createDealContractPeriod.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
        steps.createDealContractPeriod.clickMdrcNoCommercialReleaseByMajorLabel();
        steps.createDealContractPeriod.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
        steps.base.scrollIntoView("Label section", pages.createDealContractPeriod.elems.mdrcLabelsElement);
        steps.createDealContractPeriod.selectMdrcRandomLabel();
        steps.createDealContractPeriod.checkMdrcNoSelfRecordOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcPercentOfMinStatutoryRate();
        steps.createDealContractPeriod.fillMdrcInNoEventLessThan();
        steps.createDealContractPeriod.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
        steps.createDealContractPeriod.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcDeliverySchedule();
        steps.createDealContractPeriod.fillMdrcEveryWeeks();
        steps.base.scrollIntoView("Save MDRC button", pages.createDealContractPeriod.elems.mdrcSaveButton);
        steps.createDealContractPeriod.saveMdrcForm();
    });
};


exports.itAddDeemedCompleteMdrcContractPeriod = function () {
    describe("Add deemed complete MDRC on  contract period screen", function () {
        steps.createDealContractPeriod.clickOnAddMdrc();
        steps.base.scrollIntoView("Label section", pages.createDealContractPeriod.elems.deemedCompleteMdrc);
        steps.createDealContractPeriod.checkIncompleteMdrcOptionIsSelected();
        steps.createDealContractPeriod.chooseDeemedCompleteMdrcOption();
        steps.createDealContractPeriod.checkDeemedCompleteMdrcOptionIsSelected();
        steps.createDealContractPeriod.fillDateCompleted();
        steps.createDealContractPeriod.fillMdrcShortfallAmount();
        steps.createDealContractPeriod.checkMdrcForgivenShortfallActionOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcQuantity();
        steps.createDealContractPeriod.fillMdrcQuantityForCommercialRelease();
        steps.base.scrollIntoView("Add mdrc territory", pages.createDealContractPeriod.elems.mdrcTerritoriesField);
        steps.createDealContractPeriod.addMdrcTerritory();
        steps.createDealContractPeriod.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
        steps.createDealContractPeriod.clickMdrcNoCommercialReleaseByMajorLabel();
        steps.createDealContractPeriod.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
        steps.base.scrollIntoView("Label section", pages.createDealContractPeriod.elems.mdrcLabelsElement);
        steps.createDealContractPeriod.selectMdrcRandomLabel();
        steps.createDealContractPeriod.checkMdrcNoSelfRecordOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcPercentOfMinStatutoryRate();
        steps.createDealContractPeriod.fillMdrcInNoEventLessThan();
        steps.createDealContractPeriod.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
        steps.createDealContractPeriod.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcDeliverySchedule();
        steps.createDealContractPeriod.fillMdrcEveryWeeks();
        steps.base.scrollIntoView("Save MDRC button", pages.createDealContractPeriod.elems.mdrcSaveButton);
        steps.createDealContractPeriod.saveMdrcForm();
    });
};


exports.itAddCompleteMdrcContractPeriod = function () {
    describe("Add complete MDRC on  contract period screen", function () {
        steps.createDealContractPeriod.clickOnAddMdrc();
        steps.base.scrollIntoView("Label section", pages.createDealContractPeriod.elems.completeMdrc);
        steps.createDealContractPeriod.checkIncompleteMdrcOptionIsSelected();
        steps.createDealContractPeriod.chooseCompleteMdrcOption();
        steps.createDealContractPeriod.checkCompleteMdrcOptionIsSelected();
        steps.createDealContractPeriod.fillDateCompleted();
        steps.createDealContractPeriod.fillMdrcQuantity();
        steps.createDealContractPeriod.fillMdrcQuantityForCommercialRelease();
        steps.base.scrollIntoView("Add mdrc territory", pages.createDealContractPeriod.elems.mdrcTerritoriesField);
        steps.createDealContractPeriod.addMdrcTerritory();
        steps.createDealContractPeriod.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
        steps.createDealContractPeriod.clickMdrcNoCommercialReleaseByMajorLabel();
        steps.createDealContractPeriod.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
        steps.base.scrollIntoView("Label section", pages.createDealContractPeriod.elems.mdrcLabelsElement);
        steps.createDealContractPeriod.selectMdrcRandomLabel();
        steps.createDealContractPeriod.checkMdrcNoSelfRecordOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcPercentOfMinStatutoryRate();
        steps.createDealContractPeriod.fillMdrcInNoEventLessThan();
        steps.createDealContractPeriod.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
        steps.createDealContractPeriod.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
        steps.createDealContractPeriod.fillMdrcDeliverySchedule();
        steps.createDealContractPeriod.fillMdrcEveryWeeks();
        steps.base.scrollIntoView("Save MDRC button", pages.createDealContractPeriod.elems.mdrcSaveButton);
        steps.createDealContractPeriod.saveMdrcForm();
    });
};

exports.itAddDifferentTypesOfContractPeriods = function () {
    describe("Add 4 different types of contract periods ", function () {
        steps.createDealContractPeriod.fillContractPeriodDescription("Description 1");
        steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
        steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2015-04-04");
        steps.createDealContractPeriod.addNewContractPeriodDialog();
        steps.createDealContractPeriod.fillContractPeriodDescription("Description 2");
        steps.createDealContractPeriod.fillEndTargetMonths();
        steps.base.scrollIntoView("Add actual end date", pages.createDealContractPeriod.elems.actualEndDate);
        steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2016-02-04");
        steps.createDealContractPeriod.addNewContractPeriodDialog();
        steps.createDealContractPeriod.fillContractPeriodDescription("Description 3");
        steps.createDealContractPeriod.fillEndTargetMonths();
        steps.base.scrollIntoView("Add new contract period", pages.createDealContractPeriod.elems.addContractPeriodElem);
        steps.createDealContractPeriod.addNewContractPeriod();
        steps.createDealContractPeriod.fillContractPeriodDescription("Description 4");
        steps.createDealContractPeriod.fillEndTargetMonths();
    });
};

exports.itFillDealMandatoryFieldsContractPeriod = function () {
    describe("Fill mandatory fields contract period screen", function () {
        steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
    });
};

exports.itFillDealMandatoryFieldsContractPeriodEndDate = function () {
    it("Fill mandatory fields contract period screen end date", function () {
        pages.createDealContractPeriod.fillTargetEndMonths();
    });
};
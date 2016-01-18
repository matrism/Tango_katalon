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
    it('Enter actual contract period start date (' + value + ')', function() {
        pages.createDealContractPeriod.fillStartActualDateSpecificValue(value);
    });
};

exports.enterTargetEndDateInMonths = function (value) {
    it('Enter target contract period end date (' + value + ')', function() {
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

exports.selectWhenVariableLeftEndRulesSpecificValue = function (value) {
    it("Select the when variable left end rules specific value ", function () {
        pages.createDealContractPeriod.selectTheWhenVariableLeftEndRulesSpecificValue(value);
    });
};

exports.fillIntoAttributeLeftEndRules = function () {
    it("Fill into the attribute left end rules field ", function () {
        pages.createDealContractPeriod.fillIntoTheAttributeLeftEndRules();
    });
};

exports.selectRequirementEndRulesRandomValue = function (value) {
    it("Select the requirement end rule random value ", function () {
        pages.createDealContractPeriod.selectTheRequirementEndRulesSpecificValue(value);
    });
};

exports.selectRightVariableEndRulesSpecificValue = function (value) {
    it("Select the right variable end rules specific value ", function () {
        pages.createDealContractPeriod.selectTheRightVariableEndRulesSpecificValue(value);
    });
};

exports.saveEndRules = function () {
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

exports.checkEndRulesTooltipTextValue = function(){
    it("Exports the end rules tooltip text value ", function(){
         pages.createDealContractPeriod.checkTheEndRulesTooltipTextValue();
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
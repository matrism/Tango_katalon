'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.editDealContractPeriod = exports;

exports.waitForMdrcToBeLoaded = function () {
    it("Wait for MDRC to be loaded", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.mdrcTitle));
    });
};

exports.validateFirstIncompleteMdrcTitle = function () {
    it("Validate incomplete MDRC title ", function () {
        pages.edit_deal_contract_period.validateTheFirstIncompleteMdrcTitle();
    });
};

exports.validateFirstDeemedCompleteMdrcTitle = function () {
    it("Validate incomplete MDRC title ", function () {
        pages.edit_deal_contract_period.validateTheFirstDeemedCompleteMdrcTitle();
    });
};

exports.validateFirstCompleteMdrcTitle = function () {
    it("Validate incomplete MDRC title ", function () {
        pages.edit_deal_contract_period.validateTheFirstCompleteMdrcTitle();
    });
};

exports.validateITypeOfMdrcTitle = function (i, type) {
    it("Validate the I incomplete MDRC title ", function () {
        pages.edit_deal_contract_period.validateTheIMdrcTitle(i, type);
    });
};

exports.validateMdrcIMinimumLabelValue = function (i) {
    it("Validate the I minimum label and text ", function () {
        pages.edit_deal_contract_period.validateTheMdrcMinimumLabelValueI(i);
    });
};

exports.validateMdrcIMinimumTextValue = function (i) {
    it("Validate the I minimum right text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcMinimumTextValueI(i);
    });
};

exports.validateMdrcICommercialReleaseLabelValue = function (i) {
    it("Validate the I commercial release label value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcCommercialReleaseLabelValueI(i);
    });
};

exports.validateMdrcQuantityForCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC quantity for commercial release text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcQuantityForCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC major territory text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcTerritoriesListTextCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC territories list text ", function () {
        pages.edit_deal_contract_period.validateTheMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcLabelsTextCommercialReleaseTextValueI = function (i) {
    it("Validate the I MDRC labels text commercial release text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcLabelsTextCommercialReleaseTextValueI(i);
    });
};

exports.validateMdrcMinimumStatutoryMechanicalRateLabelValueI = function (i) {
    it("Validate the I MDRC minimum statutory mechanical rate label value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
    });
};

exports.validateMdrcMinimumStatutoryTextValueI = function (i) {
    it("Validate the I MDRC minimum statutory text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcMinimumStatutoryTextValueI(i);
    });
};

exports.validateMdrcInNoEventLessThanTextValueI = function (i) {
    it("Validate the I MDRC in no event less than text value", function () {
        pages.edit_deal_contract_period.validateTheMdrcInNoEventLessThanTextValueI(i);
    });
};

exports.validateMdrcDeliveryScheduleLabelValueI = function (i) {
    it("Validate the I MDRC delivery schedule label", function () {
        pages.edit_deal_contract_period.validateTheMdrcDeliveryScheduleLabelValueI(i);
    });
};

exports.validateMdrcDeliveryScheduleTextValueI = function (i) {
    it("Validate the I MDRC delivery schedule ", function () {
        pages.edit_deal_contract_period.validateTheMdrcDeliveryScheduleTextValueI(i);
    });
};

exports.validateMdrcDateCompletedLabelValueI = function (i) {
    it("Validate the I MDRC date completed label value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcDateCompletedLabelValueI(i);
    });
};

exports.validateMdrcDateCompletedTextValueI = function (i) {
    it("Validate the I MDRC date completed text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcDateCompletedTextValueI(i);
    });
};

exports.validateMdrcShortfallLabelValueI = function (i) {
    it("Validate the I MDRC shortfall label value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcShortfallLabelValueI(i);
    });
};

exports.validateTheMdrcShortfallTextValueI = function (i) {
    it("Validate the I MDRC shortfall text value ", function () {
        pages.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(i);
    });
};

exports.editMdrcFormI = function (i) {
    it("Edit MDRC form the i mdrc in the list", function () {
        pages.edit_deal_contract_period.editTheIMdrcForm(i)
    });
};

exports.editChooseIncompleteMdrcOption = function () {
    it("Edit - Choose incomplete MDRC option", function () {
        pages.edit_deal_contract_period.editClickOnIncompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcQuantity));
    });
};

exports.editChooseDeemedCompleteMdrcOption = function () {
    it("Edit - Choose deemed complete MDRC option", function () {
        pages.edit_deal_contract_period.editClickOnDeemedCompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcDateCompleted));
    });
};

exports.editChooseCompleteMdrcOption = function () {
    it("Edit - Choose complete MDRC option", function () {
        pages.edit_deal_contract_period.editClickOnCompleteOption();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcDateCompleted));
    });
};

exports.editCheckIncompleteMdrcOptionIsSelected = function () {
    it("Edit - Check incomplete MDRC option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editIncompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckDeemedCompleteMdrcOptionIsSelected = function () {
    it("Edit - Check deemed complete MDRC option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editDeemedCompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckCompleteMdrcOptionIsSelected = function () {
    it("Edit - Check complete MDRC option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editCompleteMdrc.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editMdrcQuantityField = function () {
    it("Edit the MDRC quantity field ", function () {
        pages.edit_deal_contract_period.editTheMdrcQuantity();
    });
};

exports.editMdrcMinimumWorkContributionField = function () {
    it("Edit the MDRC minimum work contribution ", function () {
        pages.edit_deal_contract_period.editTheMdrcMinimumWorkContribution();
    });
};

exports.editMdrcQuantityForCommercialReleaseField = function () {
    it("Edit the MDRC quantity for commercial release ", function () {
        pages.edit_deal_contract_period.editTheMdrcQuantityForCommercialRelease();
    });
};

exports.editMdrcMajorTerritoriesForCommercialReleaseField = function () {
    it("Edit the MDRC major territories for commercial release ", function () {
        pages.edit_deal_contract_period.editTheMdrcMajorTerritoriesForCommercialeRelease();
    });
};

exports.editAddFirstMdrcTerritoryField = function () {
    it("Edit - Add MDRC territory ", function () {
        pages.edit_deal_contract_period.editTheFirstTerritoriesFieldLetter();
        pages.edit_deal_contract_period.editSelectRandomTerritory();
    });
};

exports.editAddMdrcTerritoryField = function () {
    it("Edit - Add MDRC territory ", function () {
        pages.edit_deal_contract_period.editTheTerritoriesFieldLetter();
        pages.edit_deal_contract_period.editSelectRandomTerritory();
    });
};

exports.editClickMdrcYesCommercialReleaseByMajorLabelButton = function () {
    it("Edit - Click on MDRC yes commercial release by major label ", function () {
        pages.edit_deal_contract_period.editClickOnMdrcYesCommercialReleaseByMajorLabel();
    });
};

exports.editClickMdrcNoCommercialReleaseByMajorLabelButton = function () {
    it("Edit - Click on MDRC no commercial release by major label ", function () {
        pages.edit_deal_contract_period.editClickOnMdrcNoCommercialReleaseByMajorLabel();
    });
},

exports.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton = function () {
    it("Edit - Check MDRC yes commercial release by major label option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcYesCommercialReleaseByMajorLabel.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton = function () {
    it("Edit - Check MDRC no commercial release by major label option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcNoCommercialReleaseByMajorLabel.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editSelectMdrcRandomLabelOption = function () {
    it("Edit - Select random mdrc label ", function () {
        pages.edit_deal_contract_period.editTheMdrcLabelsField();
        pages.edit_deal_contract_period.editSelectMdrcRandomValueFromLabel();
    })
};

exports.editClickMdrcYesSelfRecordButton = function () {
    it("Edit - Click on MDRC yes self record ", function () {
        pages.edit_deal_contract_period.editClickOnMdrcYesSelfRecord();
    });
};

exports.editClickOnMdrcNoSelfRecordButton = function () {
    it("Edit - Click on MDRC no self record ", function () {
        pages.edit_deal_contract_period.editClickOnMdrcNoSelfRecord();
    });
};

exports.editCheckMdrcYesSelfRecordOptionIsSelectedButton = function () {
    it("Edit - Check MDRC yes self record option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcYesSelfRecord.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoSelfRecordOptionIsSelectedOption = function () {
    it("Edit - Check MDRC no self record option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcNoSelfRecord.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editMdrcPercentOfMinStatutoryRateField = function () {
    it("Edit MDRC percent of min statutory rate ", function () {
        pages.edit_deal_contract_period.editTheMdrcPercentOfMinStatutoryRate();
    });
};

exports.editMdrcInNoEventLessThanField = function () {
    it("Edit MDRC in no event less than ", function () {
        pages.edit_deal_contract_period.editTheMdrcInNoEventLessThan();
    });
};

exports.editClickMdrcYesProportionalRecoupmentAllowedButton = function () {
    it("Edit - Click on MDRC yes proportional recoupment allowed ", function () {
        pages.edit_deal_contract_period.editClickOnMdrcYesProportionalRecoupmentAllowed();
    });
};

exports.editClickOnMdrcNoProportionalRecoupmentAllowedButton = function () {
    it("Edit - Click on MDRC no proportional recoupment allowed ", function () {
        pages.edit_deal_contract_period.editClickOnMdrcNoProportionalRecoupmentAllowed();
    });
};

exports.editCheckMdrcYesProportionalRecoupmentAllowedOptionIsSelectedButton = function () {
    it("Edit - Check MDRC yes proportional recoupment allowed option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcYesProportionalRecoupmentAllowed.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption = function () {
    it("Edit - Check MDRC no proportional recoupment allowed option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcNoProportionalRecoupmentAllowed.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editClickMdrcYesSeeContractForAdditionalMdrcComplexitiesButton = function () {
    it("Edit - Click on MDRC yes see contract for additional MDRC complexities", function () {
        pages.edit_deal_contract_period.editClickOnMdrcYesSeeContractForAdditionalMdrcComplexities();
    });
};

exports.editClickOnMdrcNoSeeContractForAdditionalMdrcComplexitiesButton = function () {
    it("Edit - Click on MDRC no see contract for additional MDRC complexities", function () {
        pages.edit_deal_contract_period.editClickOnMdrcNoSeeContractForAdditionalMdrcComplexities();
    });
};

exports.editCheckMdrcYesSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption = function () {
    it("Edit - Check MDRC yes see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcYesSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption = function () {
    it("Edit - Check MDRC no see contract for additional MDRC complexities option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcNoSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editMdrcDeliveryScheduleField = function () {
    it("Edit MDRC delivery schedule ", function () {
        pages.edit_deal_contract_period.editTheMdrcDeliverySchedule();
    });
};

exports.editMdrcEveryWeeksField = function () {
    it("Edit MDRC every weeks", function () {
        pages.edit_deal_contract_period.editTheMdrcEveryWeeks();
    });
};

exports.editDateCompletedField = function () {
    it("Edit the date completed field ", function () {
        pages.edit_deal_contract_period.editTheMdrcDateCompleted();
    });
};

exports.editMdrcShortfallAmountField = function () {
    it("Edit the MDRC shortfall amount field ", function () {
        pages.edit_deal_contract_period.editTheMdrcShortfallAmount();
    });
};

exports.editClickMdrcForgivenShortfallActionButton = function () {
    it("Edit - Click on MDRC Forgiven shortfall action button", function () {
        pages.edit_deal_contract_period.editClickOnMdrcForgivenShortfallActionButton();
    });
};

exports.editCheckMdrcForgivenShortfallActionOptionIsSelectedOption = function () {
    it("Edit - Check MDRC forgiven shortfall action option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcForgivenShortfallButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editClickMdrcCarriedForwardShortfallActionButton = function () {
    it("Edit - Click on MDRC carried forward shortfall action button", function () {
        pages.edit_deal_contract_period.editClickOnMdrcCarriedForwardShortfallActionButton();
    });
};

exports.editCheckMdrcCarriedForwardShortfallActionOptionIsSelectedOption = function () {
    it("Edit - Check MDRC carried forward shortfall action option is selected ", function () {
        var test = pages.edit_deal_contract_period.elems.editMdrcCarriedForwardShortfallButton.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editSaveMdrcFormButton = function () {
    it("Edit Save mdrc form ", function () {
        pages.edit_deal_contract_period.editClickOnSaveMdrcForm();
        pages.edit_deal_contract_period.waitForAjax();
    });
};

exports.editRemoveMdrcTerritory = function () {
    it("Edit remove mdrc territory", function () {
        pages.edit_deal_contract_period.editRemoveTheFirstMdrcTerritory();
    });
};

exports.editRemoveMdrcLabel = function () {
    it("Edit remove mdrc label", function () {
        pages.edit_deal_contract_period.editRemoveTheFirstMdrcLabel();
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
        steps.base.scrollIntoView("Label section", pages.edit_deal_contract_period.elems.editMdrcLabelsElement);
        steps.editDealContractPeriod.editRemoveMdrcLabel();
        steps.editDealContractPeriod.editSelectMdrcRandomLabelOption();
        steps.editDealContractPeriod.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcPercentOfMinStatutoryRateField();
        steps.editDealContractPeriod.editMdrcInNoEventLessThanField();
        steps.editDealContractPeriod.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
        steps.editDealContractPeriod.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcDeliveryScheduleField();
        steps.editDealContractPeriod.editMdrcEveryWeeksField();
        steps.base.scrollIntoView("Save MDRC button", pages.edit_deal_contract_period.elems.editMdrcSaveButton);
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
        steps.base.scrollIntoView("Label section", pages.edit_deal_contract_period.elems.editMdrcLabelsElement);
        steps.editDealContractPeriod.editRemoveMdrcLabel();
        steps.editDealContractPeriod.editSelectMdrcRandomLabelOption();
        steps.editDealContractPeriod.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcPercentOfMinStatutoryRateField();
        steps.editDealContractPeriod.editMdrcInNoEventLessThanField();
        steps.editDealContractPeriod.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
        steps.editDealContractPeriod.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcDeliveryScheduleField();
        steps.editDealContractPeriod.editMdrcEveryWeeksField();
        steps.base.scrollIntoView("Save MDRC button", pages.edit_deal_contract_period.elems.editMdrcSaveButton);
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
        steps.base.scrollIntoView("Label section", pages.edit_deal_contract_period.elems.editMdrcLabelsElement);
        steps.editDealContractPeriod.editRemoveMdrcLabel();
        steps.editDealContractPeriod.editSelectMdrcRandomLabelOption();
        steps.editDealContractPeriod.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcPercentOfMinStatutoryRateField();
        steps.editDealContractPeriod.editMdrcInNoEventLessThanField();
        steps.editDealContractPeriod.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
        steps.editDealContractPeriod.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
        steps.editDealContractPeriod.editMdrcDeliveryScheduleField();
        steps.editDealContractPeriod.editMdrcEveryWeeksField();
        steps.base.scrollIntoView("Save MDRC button", pages.edit_deal_contract_period.elems.editMdrcSaveButton);
        steps.editDealContractPeriod.editSaveMdrcFormButton();
    })
};

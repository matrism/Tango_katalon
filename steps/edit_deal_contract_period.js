"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_contract_period");
require(steps_path + "base");

if (steps.edit_deal_contract_period === undefined) {
    steps.edit_deal_contract_period = {

        waitForMdrcToBeLoaded: function () {
            it("Wait for MDRC to be loaded", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.mdrcTitle));
            });
        },

        validateFirstIncompleteMdrcTitle: function () {
            it("Validate incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheFirstIncompleteMdrcTitle();
            });
        },

        validateFirstDeemedCompleteMdrcTitle: function () {
            it("Validate incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheFirstDeemedCompleteMdrcTitle();
            });
        },

        validateFirstCompleteMdrcTitle: function () {
            it("Validate incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheFirstCompleteMdrcTitle();
            });
        },

        validateITypeOfMdrcTitle: function (i, type) {
            it("Validate the I incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheIMdrcTitle(i, type);
            });
        },

        validateMdrcIMinimumLabelValue: function (i) {
            it("Validate the I minimum label and text ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumLabelValueI(i);
            });
        },

        validateMdrcIMinimumTextValue: function (i) {
            it("Validate the I minimum right text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumTextValueI(i);
            });
        },

        validateMdrcICommercialReleaseLabelValue: function (i) {
            it("Validate the I commercial release label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcCommercialReleaseLabelValueI(i);
            });
        },

        validateMdrcQuantityForCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC quantity for commercial release text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcQuantityForCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcMajorTerritoryTextCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC major territory text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcTerritoriesListTextCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC territories list text ", function () {
                pages.edit_deal_contract_period.validateTheMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcLabelsTextCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC labels text commercial release text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcLabelsTextCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcMinimumStatutoryMechanicalRateLabelValueI: function (i) {
            it("Validate the I MDRC minimum statutory mechanical rate label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
            });
        },

        validateMdrcMinimumStatutoryTextValueI: function (i) {
            it("Validate the I MDRC minimum statutory text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumStatutoryTextValueI(i);
            });
        },

        validateMdrcInNoEventLessThanTextValueI: function (i) {
            it("Validate the I MDRC in no event less than text value", function () {
                pages.edit_deal_contract_period.validateTheMdrcInNoEventLessThanTextValueI(i);
            });
        },

        validateMdrcDeliveryScheduleLabelValueI: function (i) {
            it("Validate the I MDRC delivery schedule label", function () {
                pages.edit_deal_contract_period.validateTheMdrcDeliveryScheduleLabelValueI(i);
            });
        },

        validateMdrcDeliveryScheduleTextValueI: function (i) {
            it("Validate the I MDRC delivery schedule ", function () {
                pages.edit_deal_contract_period.validateTheMdrcDeliveryScheduleTextValueI(i);
            });
        },

        validateMdrcDateCompletedLabelValueI: function (i) {
            it("Validate the I MDRC date completed label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcDateCompletedLabelValueI(i);
            });
        },

        validateMdrcDateCompletedTextValueI: function (i) {
            it("Validate the I MDRC date completed text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcDateCompletedTextValueI(i);
            });
        },

        validateMdrcShortfallLabelValueI: function (i) {
            it("Validate the I MDRC shortfall label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcShortfallLabelValueI(i);
            });
        },

        validateTheMdrcShortfallTextValueI: function (i) {
            it("Validate the I MDRC shortfall text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(i);
            });
        },

        editMdrcFormI: function (i) {
            it("Edit MDRC form the i mdrc in the list", function () {
                pages.edit_deal_contract_period.editTheIMdrcForm(i)
            });
        },

        editChooseIncompleteMdrcOption: function () {
            it("Edit - Choose incomplete MDRC option", function () {
                pages.edit_deal_contract_period.editClickOnIncompleteOption();
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcQuantity));
            });
        },

        editChooseDeemedCompleteMdrcOption: function () {
            it("Edit - Choose deemed complete MDRC option", function () {
                pages.edit_deal_contract_period.editClickOnDeemedCompleteOption();
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcDateCompleted));
            });
        },

        editChooseCompleteMdrcOption: function () {
            it("Edit - Choose complete MDRC option", function () {
                pages.edit_deal_contract_period.editClickOnCompleteOption();
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.editMdrcDateCompleted));
            });
        },

        editCheckIncompleteMdrcOptionIsSelected: function () {
            it("Edit - Check incomplete MDRC option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editIncompleteMdrc.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editCheckDeemedCompleteMdrcOptionIsSelected: function () {
            it("Edit - Check deemed complete MDRC option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editDeemedCompleteMdrc.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editCheckCompleteMdrcOptionIsSelected: function () {
            it("Edit - Check complete MDRC option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editCompleteMdrc.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editMdrcQuantityField: function () {
            it("Edit the MDRC quantity field ", function () {
                pages.edit_deal_contract_period.editTheMdrcQuantity();
            });
        },

        editMdrcMinimumWorkContributionField: function () {
            it("Edit the MDRC minimum work contribution ", function () {
                pages.edit_deal_contract_period.editTheMdrcMinimumWorkContribution();
            });
        },

        editMdrcQuantityForCommercialReleaseField: function () {
            it("Edit the MDRC quantity for commercial release ", function () {
                pages.edit_deal_contract_period.editTheMdrcQuantityForCommercialRelease();
            });
        },

        editMdrcMajorTerritoriesForCommercialReleaseField: function () {
            it("Edit the MDRC major territories for commercial release ", function () {
                pages.edit_deal_contract_period.editTheMdrcMajorTerritoriesForCommercialeRelease();
            });
        },

        editAddFirstMdrcTerritoryField: function () {
            it("Edit - Add MDRC territory ", function () {
                pages.edit_deal_contract_period.editTheFirstTerritoriesFieldLetter();
                pages.edit_deal_contract_period.editSelectRandomTerritory();
            });
        },

        editAddMdrcTerritoryField: function () {
            it("Edit - Add MDRC territory ", function () {
                pages.edit_deal_contract_period.editTheTerritoriesFieldLetter();
                pages.edit_deal_contract_period.editSelectRandomTerritory();
            });
        },

        editClickMdrcYesCommercialReleaseByMajorLabelButton: function () {
            it("Edit - Click on MDRC yes commercial release by major label ", function () {
                pages.edit_deal_contract_period.editClickOnMdrcYesCommercialReleaseByMajorLabel();
            });
        },

        editClickMdrcNoCommercialReleaseByMajorLabelButton: function () {
            it("Edit - Click on MDRC no commercial release by major label ", function () {
                pages.edit_deal_contract_period.editClickOnMdrcNoCommercialReleaseByMajorLabel();
            });
        },

        editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton: function () {
            it("Edit - Check MDRC yes commercial release by major label option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcYesCommercialReleaseByMajorLabel.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton: function () {
            it("Edit - Check MDRC no commercial release by major label option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcNoCommercialReleaseByMajorLabel.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editSelectMdrcRandomLabelOption: function () {
            it("Edit - Select random mdrc label ", function () {
                pages.edit_deal_contract_period.editTheMdrcLabelsField();
                pages.edit_deal_contract_period.editSelectMdrcRandomValueFromLabel();
            })
        },

        editClickMdrcYesSelfRecordButton: function () {
            it("Edit - Click on MDRC yes self record ", function () {
                pages.edit_deal_contract_period.editClickOnMdrcYesSelfRecord();
            });
        },


        editClickOnMdrcNoSelfRecordButton: function () {
            it("Edit - Click on MDRC no self record ", function () {
                pages.edit_deal_contract_period.editClickOnMdrcNoSelfRecord();
            });
        },

        editCheckMdrcYesSelfRecordOptionIsSelectedButton: function () {
            it("Edit - Check MDRC yes self record option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcYesSelfRecord.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editCheckMdrcNoSelfRecordOptionIsSelectedOption: function () {
            it("Edit - Check MDRC no self record option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcNoSelfRecord.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editMdrcPercentOfMinStatutoryRateField: function () {
            it("Edit MDRC percent of min statutory rate ", function () {
                pages.edit_deal_contract_period.editTheMdrcPercentOfMinStatutoryRate();
            });
        },

        editMdrcInNoEventLessThanField: function () {
            it("Edit MDRC in no event less than ", function () {
                pages.edit_deal_contract_period.editTheMdrcInNoEventLessThan();
            });
        },

        editClickMdrcYesProportionalRecoupmentAllowedButton: function () {
            it("Edit - Click on MDRC yes proportional recoupment allowed ", function () {
                pages.edit_deal_contract_period.editClickOnMdrcYesProportionalRecoupmentAllowed();
            });
        },

        editClickOnMdrcNoProportionalRecoupmentAllowedButton: function () {
            it("Edit - Click on MDRC no proportional recoupment allowed ", function () {
                pages.edit_deal_contract_period.editClickOnMdrcNoProportionalRecoupmentAllowed();
            });
        },

        editCheckMdrcYesProportionalRecoupmentAllowedOptionIsSelectedButton: function () {
            it("Edit - Check MDRC yes proportional recoupment allowed option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcYesProportionalRecoupmentAllowed.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption: function () {
            it("Edit - Check MDRC no proportional recoupment allowed option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcNoProportionalRecoupmentAllowed.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editClickMdrcYesSeeContractForAdditionalMdrcComplexitiesButton: function () {
            it("Edit - Click on MDRC yes see contract for additional MDRC complexities", function () {
                pages.edit_deal_contract_period.editClickOnMdrcYesSeeContractForAdditionalMdrcComplexities();
            });
        },

        editClickOnMdrcNoSeeContractForAdditionalMdrcComplexitiesButton: function () {
            it("Edit - Click on MDRC no see contract for additional MDRC complexities", function () {
                pages.edit_deal_contract_period.editClickOnMdrcNoSeeContractForAdditionalMdrcComplexities();
            });
        },

        editCheckMdrcYesSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption: function () {
            it("Edit - Check MDRC yes see contract for additional MDRC complexities option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcYesSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption: function () {
            it("Edit - Check MDRC no see contract for additional MDRC complexities option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcNoSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editMdrcDeliveryScheduleField: function () {
            it("Edit MDRC delivery schedule ", function () {
                pages.edit_deal_contract_period.editTheMdrcDeliverySchedule();
            });
        },

        editMdrcEveryWeeksField: function () {
            it("Edit MDRC every weeks", function () {
                pages.edit_deal_contract_period.editTheMdrcEveryWeeks();
            });
        },

        editDateCompletedField: function () {
            it("Edit the date completed field ", function () {
                pages.edit_deal_contract_period.editTheMdrcDateCompleted();
            });
        },

        editMdrcShortfallAmountField: function () {
            it("Edit the MDRC shortfall amount field ", function () {
                pages.edit_deal_contract_period.editTheMdrcShortfallAmount();
            });
        },

        editClickMdrcForgivenShortfallActionButton: function () {
            it("Edit - Click on MDRC Forgiven shortfall action button", function () {
                pages.edit_deal_contract_period.editClickOnMdrcForgivenShortfallActionButton();
            });
        },

        editCheckMdrcForgivenShortfallActionOptionIsSelectedOption: function () {
            it("Edit - Check MDRC forgiven shortfall action option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcForgivenShortfallButton.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        editClickMdrcCarriedForwardShortfallActionButton: function () {
            it("Edit - Click on MDRC carried forward shortfall action button", function () {
                pages.edit_deal_contract_period.editClickOnMdrcCarriedForwardShortfallActionButton();
            });
        },

        editCheckMdrcCarriedForwardShortfallActionOptionIsSelectedOption: function () {
            it("Edit - Check MDRC carried forward shortfall action option is selected ", function () {
                var test = pages.edit_deal_contract_period.elems.editMdrcCarriedForwardShortfallButton.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },


        editSaveMdrcFormButton: function () {
            it("Edit Save mdrc form ", function () {
                pages.edit_deal_contract_period.editClickOnSaveMdrcForm();
                pages.edit_deal_contract_period.waitForAjax();
             });
        },

        editRemoveMdrcTerritory: function () {
            it("Edit remove mdrc territory", function () {
                pages.edit_deal_contract_period.editRemoveTheFirstMdrcTerritory();
            });
        },

        editRemoveMdrcLabel: function () {
            it("Edit remove mdrc label", function () {
                pages.edit_deal_contract_period.editRemoveTheFirstMdrcLabel();
            });
        },

        itEditIncompleteMdrcContractPeriod: function (i) {
            describe("Edit incomplete MDRC on  contract period screen", function () {
                steps.edit_deal_contract_period.editMdrcFormI(i);
                steps.edit_deal_contract_period.editChooseIncompleteMdrcOption();
                steps.edit_deal_contract_period.editCheckIncompleteMdrcOptionIsSelected();
                steps.edit_deal_contract_period.editMdrcQuantityField();
                steps.edit_deal_contract_period.editMdrcQuantityForCommercialReleaseField();
                steps.edit_deal_contract_period.editAddMdrcTerritoryField();
                steps.edit_deal_contract_period.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton();
                steps.edit_deal_contract_period.editClickMdrcNoCommercialReleaseByMajorLabelButton();
                steps.edit_deal_contract_period.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton();
                //steps.base.scrollIntoView("Label section", pages.edit_deal_contract_period.elems.mdrcLabelsElement);
                steps.edit_deal_contract_period.editRemoveMdrcLabel();
                steps.edit_deal_contract_period.editSelectMdrcRandomLabelOption();
                steps.edit_deal_contract_period.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
                steps.edit_deal_contract_period.editMdrcPercentOfMinStatutoryRateField();
                steps.edit_deal_contract_period.editMdrcInNoEventLessThanField();
                steps.edit_deal_contract_period.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
                steps.edit_deal_contract_period.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
                steps.edit_deal_contract_period.editMdrcDeliveryScheduleField();
                steps.edit_deal_contract_period.editMdrcEveryWeeksField();
                //steps.base.scrollIntoView("Save MDRC button", pages.edit_deal_contract_period.elems.editMdrcSaveButton);
                steps.edit_deal_contract_period.editSaveMdrcFormButton();
            })
        },

        itEditDeemedCompleteMdrcContractPeriod: function (i) {
            describe("Edit deemed complete MDRC on  contract period screen", function () {
                steps.edit_deal_contract_period.editMdrcFormI(i);
                steps.edit_deal_contract_period.editChooseDeemedCompleteMdrcOption();
                steps.edit_deal_contract_period.editCheckDeemedCompleteMdrcOptionIsSelected();
                steps.edit_deal_contract_period.editDateCompletedField();
                steps.edit_deal_contract_period.editMdrcShortfallAmountField();
                steps.edit_deal_contract_period.editMdrcQuantityField();
                steps.edit_deal_contract_period.editMdrcQuantityForCommercialReleaseField();
                steps.edit_deal_contract_period.editAddMdrcTerritoryField();
                steps.edit_deal_contract_period.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton();
                steps.edit_deal_contract_period.editClickMdrcNoCommercialReleaseByMajorLabelButton();
                steps.edit_deal_contract_period.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton();
                //steps.base.scrollIntoView("Label section", pages.edit_deal_contract_period.elems.mdrcLabelsElement);
                steps.edit_deal_contract_period.editRemoveMdrcLabel();
                steps.edit_deal_contract_period.editSelectMdrcRandomLabelOption();
                steps.edit_deal_contract_period.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
                steps.edit_deal_contract_period.editMdrcPercentOfMinStatutoryRateField();
                steps.edit_deal_contract_period.editMdrcInNoEventLessThanField();
                steps.edit_deal_contract_period.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
                steps.edit_deal_contract_period.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
                steps.edit_deal_contract_period.editMdrcDeliveryScheduleField();
                steps.edit_deal_contract_period.editMdrcEveryWeeksField();
                //steps.base.scrollIntoView("Save MDRC button", pages.edit_deal_contract_period.elems.mdrcLabelsElement);
                steps.edit_deal_contract_period.editSaveMdrcFormButton();
            })
        },

        itEditCompleteMdrcContractPeriod: function (i) {
            describe("Edit complete MDRC on  contract period screen", function () {
                steps.edit_deal_contract_period.editMdrcFormI(i);
                steps.edit_deal_contract_period.editChooseCompleteMdrcOption();
                steps.edit_deal_contract_period.editCheckCompleteMdrcOptionIsSelected();
                steps.edit_deal_contract_period.editDateCompletedField();
                steps.edit_deal_contract_period.editMdrcQuantityField();
                steps.edit_deal_contract_period.editMdrcQuantityForCommercialReleaseField();
                steps.edit_deal_contract_period.editAddMdrcTerritoryField();
                steps.edit_deal_contract_period.editCheckMdrcYesCommercialReleaseByMajorLabelOptionIsSelectedButton();
                steps.edit_deal_contract_period.editClickMdrcNoCommercialReleaseByMajorLabelButton();
                steps.edit_deal_contract_period.editCheckMdrcNoCommercialReleaseByMajorLabelOptionIsSelectedButton();
                //steps.base.scrollIntoView("Label section", pages.edit_deal_contract_period.elems.mdrcLabels);
                steps.edit_deal_contract_period.editRemoveMdrcLabel();
                steps.edit_deal_contract_period.editSelectMdrcRandomLabelOption();
                steps.edit_deal_contract_period.editCheckMdrcNoSelfRecordOptionIsSelectedOption();
                steps.edit_deal_contract_period.editMdrcPercentOfMinStatutoryRateField();
                steps.edit_deal_contract_period.editMdrcInNoEventLessThanField();
                steps.edit_deal_contract_period.editCheckMdrcNoProportionalRecoupmentAllowedOptionIsSelectedOption();
                steps.edit_deal_contract_period.editCheckMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelectedOption();
                steps.edit_deal_contract_period.editMdrcDeliveryScheduleField();
                steps.edit_deal_contract_period.editMdrcEveryWeeksField();
                //steps.base.scrollIntoView("Save MDRC button", pages.edit_deal_contract_period.elems.editMdrcSaveButton);
                steps.edit_deal_contract_period.editSaveMdrcFormButton();
            })
        }


    };
}

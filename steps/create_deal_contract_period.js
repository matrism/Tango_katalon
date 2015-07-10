"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "create_deal_contract_period");
require(pages_path + "create_deal_contract_period");

if (steps.create_deal_contract_period === undefined) {
    steps.create_deal_contract_period = {

        addNewContractPeriod: function () {
            it("Click on add new contract period icon ", function () {
                pages.create_deal_contract_period.clickOnAddContractPeriod();
            });
        },

        fillActualEndDateField: function () {
            it("Fill actual end date field ", function () {
                pages.create_deal_contract_period.fillEndActualDate();
            });
        },

        fillActualEndDateFieldSpecificValue: function (actualDate) {
            it("Fill actual end date field ", function () {
                pages.create_deal_contract_period.fillEndActualDateSpecificValue(actualDate);
            });
        },

        fillContractPeriodDescription: function (description) {
            it("Fill in description field contract period ", function () {
                pages.create_deal_contract_period.fillDescriptionField(description);
            });
        },

        fillEndTargetMonths: function () {
            it("Fill end target months field ", function () {
                pages.create_deal_contract_period.fillTargetEndMonths();
            });
        },

        fillMandatoryFieldsContractPeriodSpecificValue: function (value) {
            it("Fill mandatory fields contract period", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.startDate));
                pages.create_deal_contract_period.fillStartActualDateSpecificValue(value);
                pages.create_deal_contract_period.fillTargetEndMonths();
            });
        },

        fillMandatoryFieldsContractPeriod: function () {
            it("Fill mandatory fields contract period", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.startDate));
                pages.create_deal_contract_period.fillStartActualDate();
                pages.create_deal_contract_period.fillTargetEndMonths();
            });
        },

        clickOnAddMdrc: function () {
            it("Click on add new MDRC to contract period", function () {
                pages.create_deal_contract_period.clickOnAddMdrcLink();
                browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcQuantity));
            });
        },

        chooseIncompleteMdrcOption: function () {
            it("Choose incomplete MDRC option ", function () {
                pages.create_deal_contract_period.clickOnIncompleteOption();
            });
        },

        chooseDeemedCompleteMdrcOption: function () {
            it("Choose deemed complete MDRC option", function () {
                pages.create_deal_contract_period.clickOnDeemedCompleteOption();
                browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcDateCompleted));
            });
        },

        chooseCompleteMdrcOption: function () {
            it("Choose complete MDRC option", function () {
                pages.create_deal_contract_period.clickOnCompleteOption();
                browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcDateCompleted));
            });
        },

        checkIncompleteMdrcOptionIsSelected: function () {
            it("Check incomplete MDRC option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.incompleteMdrc.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        checkDeemedCompleteMdrcOptionIsSelected: function () {
            it("Check deemed complete MDRC option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.deemedCompleteMdrc.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        checkCompleteMdrcOptionIsSelected: function () {
            it("Check complete MDRC option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.completeMdrc.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        fillMdrcQuantity: function () {
            it("Fill into MDRC quantity field ", function () {
                pages.create_deal_contract_period.fillIntoMdrcQuantity();
            });
        },

        fillMdrcMinimumWorkContribution: function () {
            it("Fill into MDRC minimum work contribution ", function () {
                pages.create_deal_contract_period.fillIntoMdrcMinimumWorkContribution();
            });
        },

        fillMdrcQuantityForCommercialRelease: function () {
            it("Fill into MDRC quantity for commercial release ", function () {
                pages.create_deal_contract_period.fillIntoMdrcQuantityForCommercialRelease();
            });
        },

        fillInMdrcMajorTerritoriesForCommercialRelease: function () {
            it("Fill into MDRC major territories for commercial release ", function () {
                pages.create_deal_contract_period.fillIntoMdrcMajorTerritoriesForCommercialeRelease();
            });
        },

        addMdrcTerritory: function () {
            it("Add MDRC territory ", function () {
                pages.create_deal_contract_period.fillIntoTerritoriesFieldLetter();
                pages.create_deal_contract_period.selectRandomTerritory();
            });
        },

        clickMdrcYesCommercialReleaseByMajorLabel: function () {
            it("Click on MDRC yes commercial release by major label ", function () {
                pages.create_deal_contract_period.clickOnMdrcYesCommercialReleaseByMajorLabel();
            });
        },

        clickMdrcNoCommercialReleaseByMajorLabel: function () {
            it("Click on MDRC no commercial release by major label ", function () {
                pages.create_deal_contract_period.clickOnMdrcNoCommercialReleaseByMajorLabel();
            });
        },

        checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected: function () {
            it("Check MDRC yes commercial release by major label option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcYesCommercialReleaseByMajorLabel.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected: function () {
            it("Check MDRC no commercial release by major label option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcNoCommercialReleaseByMajorLabel.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        selectMdrcRandomLabel: function () {
            it("Select random mdrc label ", function () {
                pages.create_deal_contract_period.fillIntoMdrcLabelsField();
                pages.create_deal_contract_period.selectMdrcRandomValueFromLabel();
            })
        },


        clickMdrcYesSelfRecord: function () {
            it("Click on MDRC yes self record ", function () {
                pages.create_deal_contract_period.clickOnMdrcYesSelfRecord();
            });
        },


        clickOnMdrcNoSelfRecord: function () {
            it("Click on MDRC no self record ", function () {
                pages.create_deal_contract_period.clickOnMdrcNoSelfRecord();
            });
        },

        checkMdrcYesSelfRecordOptionIsSelected: function () {
            it("Check MDRC yes self record option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcYesSelfRecord.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        checkMdrcNoSelfRecordOptionIsSelected: function () {
            it("Check MDRC no self record option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcNoSelfRecord.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        fillMdrcPercentOfMinStatutoryRate: function () {
            it("Fill MDRC percent of min statutory rate ", function () {
                pages.create_deal_contract_period.fillIntoMdrcPercentOfMinStatutoryRate();
            });
        },

        fillMdrcInNoEventLessThan: function () {
            it("Fill MDRC in no event less than ", function () {
                pages.create_deal_contract_period.fillIntoMdrcInNoEventLessThan();
            });
        },

        clickMdrcYesProportionalRecoupmentAllowed: function () {
            it("Click on MDRC yes proportional recoupment allowed ", function () {
                pages.create_deal_contract_period.clickOnMdrcYesProportionalRecoupmentAllowed();
            });
        },

        clickOnMdrcNoProportionalRecoupmentAllowed: function () {
            it("Click on MDRC no proportional recoupment allowed ", function () {
                pages.create_deal_contract_period.clickOnMdrcNoProportionalRecoupmentAllowed();
            });
        },

        checkMdrcYesProportionalRecoupmentAllowedOptionIsSelected: function () {
            it("Check MDRC yes proportional recoupment allowed option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcYesProportionalRecoupmentAllowed.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected: function () {
            it("Check MDRC no proportional recoupment allowed option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcNoProportionalRecoupmentAllowed.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        clickMdrcYesSeeContractForAdditionalMdrcComplexities: function () {
            it("Click on MDRC yes see contract for additional MDRC complexities", function () {
                pages.create_deal_contract_period.clickOnMdrcYesSeeContractForAdditionalMdrcComplexities();
            });
        },

        clickOnMdrcNoSeeContractForAdditionalMdrcComplexities: function () {
            it("Click on MDRC no see contract for additional MDRC complexities", function () {
                pages.create_deal_contract_period.clickOnMdrcNoSeeContractForAdditionalMdrcComplexities();
            });
        },

        checkMdrcYesSeeContractForAdditionalMdrcComplexitiesOptionIsSelected: function () {
            it("Check MDRC yes see contract for additional MDRC complexities option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcYesSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected: function () {
            it("Check MDRC no see contract for additional MDRC complexities option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcNoSeeContractForAdditionalMdrcComplexities.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        fillMdrcDeliverySchedule: function () {
            it("Fill MDRC delivery schedule ", function () {
                pages.create_deal_contract_period.fillIntoMdrcDeliverySchedule();
            });
        },

        fillMdrcEveryWeeks: function () {
            it("Fill MDRC every weeks", function () {
                pages.create_deal_contract_period.fillIntoMdrcEveryWeeks();
            });
        },

        fillDateCompleted: function () {
            it("Fill into date completed field ", function () {
                pages.create_deal_contract_period.fillIntoMdrcDateCompleted();
            });
        },

        fillMdrcShortfallAmount: function () {
            it("Fill into MDRC shortfall amount field ", function () {
                pages.create_deal_contract_period.fillIntoMdrcShortfallAmount();
            });
        },

        clickMdrcForgivenShortfallAction: function () {
            it("Click on MDRC Forgiven shortfall action button", function () {
                pages.create_deal_contract_period.clickOnMdrcForgivenShortfallActionButton();
            });
        },

        checkMdrcForgivenShortfallActionOptionIsSelected: function () {
            it("Check MDRC forgiven shortfall action option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcForgivenShortfallButton.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },

        clickMdrcCarriedForwardShortfallAction: function () {
            it("Click on MDRC carried forward shortfall action button", function () {
                pages.create_deal_contract_period.clickOnMdrcCarriedForwardShortfallActionButton();
            });
        },

        checkMdrcCarriedForwardShortfallActionOptionIsSelected: function () {
            it("Check MDRC carried forward shortfall action option is selected ", function () {
                var test = pages.create_deal_contract_period.elems.mdrcCarriedForwardShortfallButton.getAttribute("class").toString();
                expect(test.indexOf("active") != -1);
            });
        },


        saveMdrcForm: function () {
            it("Save mdrc form ", function () {
                pages.create_deal_contract_period.clickOnSaveMdrcForm();
                pages.create_deal_contract_period.waitForAjax();
            });
        },

        addNewContractPeriodDialog: function () {
            it("Add new contract period from modal dialog ", function () {
                pages.create_deal_contract_period.addTheNewContractPeriodDialog();
            });
        },


        itAddIncompleteMdrcContractPeriod: function () {
            describe("Add incomplete MDRC on  contract period screen", function () {
                steps.create_deal_contract_period.clickOnAddMdrc();
                steps.create_deal_contract_period.checkIncompleteMdrcOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcQuantity();
                steps.create_deal_contract_period.fillMdrcQuantityForCommercialRelease();
                steps.create_deal_contract_period.addMdrcTerritory();
                steps.create_deal_contract_period.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
                steps.create_deal_contract_period.clickMdrcNoCommercialReleaseByMajorLabel();
                steps.create_deal_contract_period.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
                steps.base.scrollIntoView("Label section", pages.create_deal_contract_period.elems.mdrcLabelsElement);
                steps.create_deal_contract_period.selectMdrcRandomLabel();
                steps.create_deal_contract_period.checkMdrcNoSelfRecordOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcPercentOfMinStatutoryRate();
                steps.create_deal_contract_period.fillMdrcInNoEventLessThan();
                steps.create_deal_contract_period.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
                steps.create_deal_contract_period.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcDeliverySchedule();
                steps.create_deal_contract_period.fillMdrcEveryWeeks();
                steps.base.scrollIntoView("Save MDRC button", pages.create_deal_contract_period.elems.mdrcSaveButton);
                steps.create_deal_contract_period.saveMdrcForm();
            });
        },


        itAddDeemedCompleteMdrcContractPeriod: function () {
            describe("Add deemed complete MDRC on  contract period screen", function () {
                steps.create_deal_contract_period.clickOnAddMdrc();
                steps.create_deal_contract_period.checkIncompleteMdrcOptionIsSelected();
                steps.create_deal_contract_period.chooseDeemedCompleteMdrcOption();
                steps.create_deal_contract_period.checkDeemedCompleteMdrcOptionIsSelected();
                steps.create_deal_contract_period.fillDateCompleted();
                steps.create_deal_contract_period.fillMdrcShortfallAmount();
                steps.create_deal_contract_period.checkMdrcForgivenShortfallActionOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcQuantity();
                steps.create_deal_contract_period.fillMdrcQuantityForCommercialRelease();
                steps.create_deal_contract_period.addMdrcTerritory();
                steps.create_deal_contract_period.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
                steps.create_deal_contract_period.clickMdrcNoCommercialReleaseByMajorLabel();
                steps.create_deal_contract_period.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
                steps.base.scrollIntoView("Label section", pages.create_deal_contract_period.elems.mdrcLabelsElement);
                steps.create_deal_contract_period.selectMdrcRandomLabel();
                steps.create_deal_contract_period.checkMdrcNoSelfRecordOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcPercentOfMinStatutoryRate();
                steps.create_deal_contract_period.fillMdrcInNoEventLessThan();
                steps.create_deal_contract_period.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
                steps.create_deal_contract_period.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcDeliverySchedule();
                steps.create_deal_contract_period.fillMdrcEveryWeeks();
                steps.base.scrollIntoView("Save MDRC button", pages.create_deal_contract_period.elems.mdrcSaveButton);
                steps.create_deal_contract_period.saveMdrcForm();
            });
        },


        itAddCompleteMdrcContractPeriod: function () {
            describe("Add complete MDRC on  contract period screen", function () {
                steps.create_deal_contract_period.clickOnAddMdrc();
                steps.create_deal_contract_period.checkIncompleteMdrcOptionIsSelected();
                steps.create_deal_contract_period.chooseCompleteMdrcOption();
                steps.create_deal_contract_period.checkCompleteMdrcOptionIsSelected();
                steps.create_deal_contract_period.fillDateCompleted();
                steps.create_deal_contract_period.fillMdrcQuantity();
                steps.create_deal_contract_period.fillMdrcQuantityForCommercialRelease();
                steps.create_deal_contract_period.addMdrcTerritory();
                steps.create_deal_contract_period.checkMdrcYesCommercialReleaseByMajorLabelOptionIsSelected();
                steps.create_deal_contract_period.clickMdrcNoCommercialReleaseByMajorLabel();
                steps.create_deal_contract_period.checkMdrcNoCommercialReleaseByMajorLabelOptionIsSelected();
                steps.base.scrollIntoView("Label section", pages.create_deal_contract_period.elems.mdrcLabelsElement);
                steps.create_deal_contract_period.selectMdrcRandomLabel();
                steps.create_deal_contract_period.checkMdrcNoSelfRecordOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcPercentOfMinStatutoryRate();
                steps.create_deal_contract_period.fillMdrcInNoEventLessThan();
                steps.create_deal_contract_period.checkMdrcNoProportionalRecoupmentAllowedOptionIsSelected();
                steps.create_deal_contract_period.checkMdrcNoSeeContractForAdditionalMdrcComplexitiesOptionIsSelected();
                steps.create_deal_contract_period.fillMdrcDeliverySchedule();
                steps.create_deal_contract_period.fillMdrcEveryWeeks();
                steps.base.scrollIntoView("Save MDRC button", pages.create_deal_contract_period.elems.mdrcSaveButton);
                steps.create_deal_contract_period.saveMdrcForm();
            });
        },

        itAddDifferentTypesOfContractPeriods: function(){
          describe("Add 4 different types of contract periods ", function(){
              steps.create_deal_contract_period.fillContractPeriodDescription("Description 1");
              steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
              steps.create_deal_contract_period.fillActualEndDateFieldSpecificValue("2015-04-04");
              steps.create_deal_contract_period.addNewContractPeriodDialog();
              steps.create_deal_contract_period.fillContractPeriodDescription("Description 2");
              steps.create_deal_contract_period.fillEndTargetMonths();
              steps.create_deal_contract_period.fillActualEndDateFieldSpecificValue("2016-02-04");
              steps.create_deal_contract_period.addNewContractPeriodDialog();
              steps.create_deal_contract_period.fillContractPeriodDescription("Description 3");
              steps.create_deal_contract_period.fillEndTargetMonths();
              steps.create_deal_contract_period.addNewContractPeriod();
              steps.create_deal_contract_period.fillContractPeriodDescription("Description 4");
              steps.create_deal_contract_period.fillEndTargetMonths();
          });
        },

        itFillDealMandatoryFieldsContractPeriod: function () {
            describe("Fill mandatory fields contract period screen", function () {
                    steps.create_deal_contract_period.fillMandatoryFieldsContractPeriod();
                }
            );
        },
        itFillDealMandatoryFieldsContractPeriodEndDate: function () {
            it("Fill mandatory fields contract period screen end date", function () {

                    pages.create_deal_contract_period.fillTargetEndMonths();
                }
            );
        }



    };
}
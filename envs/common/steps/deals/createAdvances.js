"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

if (steps.createDealAdvances === undefined) {
    steps.createDealAdvances = {
        clickOnAddFirstAdvanceLink: function () {
            it("Click on the add first advance link ", function () {
                pages.createDealAdvances.clickOnTheAddFirstAdvanceLink();
            });
        },

        selectRandomContractPeriodAdvanceDetails: function () {
            it("Select the random contract period advance details ", function () {
                pages.createDealAdvances.selectTheRandomContractPeriodAdvanceDetails();
            });
        },

        fillIntoAmountAdvanceDetails: function () {
            it("Fill into the amount advance details ", function () {
                pages.createDealAdvances.fillIntoTheAmountAdvanceDetails();
            });
        },

        selectRandomCurrencyAdvanceDetails: function () {
            it("Select the random currency advance details ", function () {
                pages.createDealAdvances.selectTheRandomCurrencyAdvanceDetails();
            });
        },


        selectPaymentStructureAdvanceDetails: function (value) {
            it("Select the payment structure advance details ", function () {
                pages.createDealAdvances.selectThePaymentStructureAdvanceDetails(value);
            });
        },

        selectWhenDistributionRulesAdvanceDetails: function (value) {
            it("Select the when distribution rules advance details ", function () {
                pages.createDealAdvances.selectTheWhenDistributionRulesAdvanceDetails(value);
            });
        },

        fillIntoPercentDistributionRulesAdvanceDetailsNumberI: function (i) {
            it("Fill into the percent distribution rules advance details number " + i, function () {
                pages.createDealAdvances.fillIntoThePercentDistributionRulesAdvanceDetailsNumberI(i);
            });
        },

        selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            it("Select random organisation payment recipient distribution rules advance details number " + i, function () {
                pages.createDealAdvances.selectTheRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(i);
            });
        },

        selectRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            it("Select random person payment recipient distribution rules advance details number " + i, function () {
                pages.createDealAdvances.selectTheRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI(i);
            });
        },

        selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI: function (i) {
            it("Select the random currency distribution rules advances details number " + i, function () {
                pages.createDealAdvances.selectTheRandomCurrencyDistributionRulessAdvanceDetailsNumberI(i);
            });
        },

        clickOnAddViewAdvanceApplicableEarningsLink: function () {
            it("Click on the add/view advance applicable earning link ", function () {
                pages.createDealAdvances.clickOnTheAddViewAdvanceApplicableEarningsLink();
            });
        },

        clickOnSetDefaultsLinkAdvanceApplicableEarnings: function () {
            it("Click on the set defaults link advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheSetDefaultsLinkAdvanceApplicableEarnings();
            });
        },

        clickOnClearAllLinkAdvanceApplicableEarnings: function () {
            it("Click on the clear all link advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheClearAllLinkAdvanceApplicableEarnings();
            });
        },

        clickOnIncludesPipelineCheckBoxHeader: function () {
            it("Click on the includes pipeline check box header ", function () {
                pages.createDealAdvances.clickOnTheIncludesPipelineCheckBoxHeader();
            });
        },

        fillIntoSynchronisationPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the synchronisation percent field advance applicable earnings ", function () {
                pages.createDealAdvances.fillIntoTheSynchronisationPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoMechanicalPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the mechanical percent field advance applicable earnings ", function () {
                pages.createDealAdvances.fillIntoTheMechanicalPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoPublicPerformancePercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the public performance percent field advance applicable earnings", function () {
                pages.createDealAdvances.fillIntoThePublicPerformancePercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoGrandRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the grand rights percent field advance applicable earnings", function () {
                pages.createDealAdvances.fillIntoTheGrandRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoPrintRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the print rights percent field advance applicable earnings ", function () {
                pages.createDealAdvances.fillIntoThePrintRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoOtherRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the other rights percent field advance applicable earnings ", function () {
                pages.createDealAdvances.fillIntoTheOtherRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        clickOnSynchPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the synch pipeline check box advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheSynchPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnMechPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the mech pipeline check box advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheMechPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnPerfPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the perf pipeline check box advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnThePerfPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnGrandPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the grand pipeline check box advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheGrandPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnPrintPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the print pipeline check box advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnThePrintPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnOtherPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the other pipeline check box advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheOtherPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineSynchTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define synch territory advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineSynchTerritoryAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineMechTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define mech territory advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineMechTerritoryAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefinePerfTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define perf territory advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefinePerfTerritoryAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineGrandTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define grand territory advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineGrandTerritoryAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefinePrintTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define print territory advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefinePrintTerritoryAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineOtherTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define other territory advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineOtherTerritoryAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineSynchLabelAdvanceApplicableEarnings: function () {
            it("Select the random define synch label advance applicable earnings", function () {
                pages.createDealAdvances.selectTheRandomDefineSynchLabelAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineMechLabelAdvanceApplicableEarnings: function () {
            it("Select the random define mech label advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineMechLabelAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefinePerfLabelAdvanceApplicableEarnings: function () {
            it("Select the random define perf label advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefinePerfLabelAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineGrandLabelAdvanceApplicableEarnings: function () {
            it("Select the random define grand label advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineGrandLabelAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefinePrintLabelAdvanceApplicableEarnings: function () {
            it("Select the random define print label advance applicable earnings", function () {
                pages.createDealAdvances.selectTheRandomDefinePrintLabelAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        selectRandomDefineOtherLabelAdvanceApplicableEarnings: function () {
            it("Select the random define other label advance applicable earnings ", function () {
                pages.createDealAdvances.selectTheRandomDefineOtherLabelAdvanceApplicableEarnings();
                pages.createDealAdvances.waitForAjax();
            });
        },

        clickOnDoneAdvanceApplicableEarnings: function () {
            it("Click on the done advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheDoneAdvanceApplicableEarnings();
            });
        },

        clickOnCancelAdvanceApplicableEarnings: function () {
            it("Click on the cancel advance applicable earnings ", function () {
                pages.createDealAdvances.clickOnTheCancelAdvanceApplicableEarnings();
            });
        },

        itAddCompleteAdvanceApplicableEarnings: function () {
            describe("Add complete advance applicable earnings ", function () {
                steps.base.scrollIntoView("Add advance applicable earnings ", pages.createDealAdvances.elems.addAdvanceApplicableEarningsLink);
                steps.createDealAdvances.clickOnAddViewAdvanceApplicableEarningsLink();

                steps.base.scrollIntoView("synch ", pages.createDealAdvances.elems.synchronisationPercentAdvanceApplicableEarnings);
                steps.createDealAdvances.fillIntoSynchronisationPercentFieldAdvanceApplicableEarnings();
                steps.createDealAdvances.clickOnSynchPipelineCheckBoxAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineSynchTerritoryAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineSynchLabelAdvanceApplicableEarnings();

                steps.base.scrollIntoView("mech ", pages.createDealAdvances.elems.mechanicalPercentAdvanceApplicableEarnings);
                steps.createDealAdvances.fillIntoMechanicalPercentFieldAdvanceApplicableEarnings();
                steps.createDealAdvances.clickOnMechPipelineCheckBoxAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineMechTerritoryAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineMechLabelAdvanceApplicableEarnings();

                steps.base.scrollIntoView("perf ", pages.createDealAdvances.elems.publicPerformancePercentAdvanceApplicableEarnings);
                steps.createDealAdvances.fillIntoPublicPerformancePercentFieldAdvanceApplicableEarnings();
                steps.createDealAdvances.clickOnPerfPipelineCheckBoxAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefinePerfTerritoryAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefinePerfLabelAdvanceApplicableEarnings();

                steps.base.scrollIntoView("grand ", pages.createDealAdvances.elems.grandRightsPercentAdvanceApplicableEarnings);
                steps.createDealAdvances.fillIntoGrandRightsPercentFieldAdvanceApplicableEarnings();
                steps.createDealAdvances.clickOnGrandPipelineCheckBoxAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineGrandTerritoryAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineGrandLabelAdvanceApplicableEarnings();

                steps.base.scrollIntoView("print ", pages.createDealAdvances.elems.printRightsPercentAdvanceApplicableEarnings);
                steps.createDealAdvances.fillIntoPrintRightsPercentFieldAdvanceApplicableEarnings();
                steps.createDealAdvances.clickOnPrintPipelineCheckBoxAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefinePrintTerritoryAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefinePrintLabelAdvanceApplicableEarnings();

                steps.base.scrollIntoView("other ", pages.createDealAdvances.elems.otherRightsPercentAdvanceApplicableEarnings);
                steps.createDealAdvances.fillIntoOtherRightsPercentFieldAdvanceApplicableEarnings();
                steps.createDealAdvances.clickOnOtherPipelineCheckBoxAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineOtherTerritoryAdvanceApplicableEarnings();
                steps.createDealAdvances.selectRandomDefineOtherLabelAdvanceApplicableEarnings();

                steps.createDealAdvances.clickOnDoneAdvanceApplicableEarnings();

            });
        }
    }
}
"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealAdvances = exports;

exports.clickOnAddFirstAdvanceLink = function () {
    it("Click on the add first advance link ", function () {
        pages.createDealAdvances.clickOnTheAddFirstAdvanceLink();
    });
};

exports.selectRandomContractPeriodAdvanceDetails = function () {
    it("Select the random contract period advance details ", function () {
        pages.createDealAdvances.selectTheRandomContractPeriodAdvanceDetails();
    });
};

exports.fillIntoAmountAdvanceDetails = function () {
    it("Fill into the amount advance details ", function () {
        pages.createDealAdvances.fillIntoTheAmountAdvanceDetails();
    });
};

exports.selectRandomCurrencyAdvanceDetails = function () {
    it("Select the random currency advance details ", function () {
        pages.createDealAdvances.selectTheRandomCurrencyAdvanceDetails();
    });
};


exports.selectPaymentStructureAdvanceDetails = function (value) {
    it("Select the payment structure advance details ", function () {
        pages.createDealAdvances.selectThePaymentStructureAdvanceDetails(value);
    });
};

exports.selectWhenDistributionRulesAdvanceDetails = function (value) {
    it("Select the when distribution rules advance details ", function () {
        pages.createDealAdvances.selectTheWhenDistributionRulesAdvanceDetails(value);
    });
};

exports.fillIntoPercentDistributionRulesAdvanceDetailsNumberI = function (i) {
    it("Fill into the percent distribution rules advance details number " + i, function () {
        pages.createDealAdvances.fillIntoThePercentDistributionRulesAdvanceDetailsNumberI(i);
    });
};

exports.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI = function (i) {
    it("Select random organisation payment recipient distribution rules advance details number " + i, function () {
        pages.createDealAdvances.selectTheRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(i);
    });
};

exports.selectRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI = function (i) {
    it("Select random person payment recipient distribution rules advance details number " + i, function () {
        pages.createDealAdvances.selectTheRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI(i);
    });
};

exports.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI = function (i) {
    it("Select the random currency distribution rules advances details number " + i, function () {
        pages.createDealAdvances.selectTheRandomCurrencyDistributionRulessAdvanceDetailsNumberI(i);
    });
};

exports.clickOnAddViewAdvanceApplicableEarningsLink = function () {
    it("Click on the add/view advance applicable earning link ", function () {
        pages.createDealAdvances.clickOnTheAddViewAdvanceApplicableEarningsLink();
    });
};

exports.clickOnSetDefaultsLinkAdvanceApplicableEarnings = function () {
    it("Click on the set defaults link advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheSetDefaultsLinkAdvanceApplicableEarnings();
    });
};

exports.clickOnClearAllLinkAdvanceApplicableEarnings = function () {
    it("Click on the clear all link advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheClearAllLinkAdvanceApplicableEarnings();
    });
};

exports.clickOnIncludesPipelineCheckBoxHeader: function () {
    it("Click on the includes pipeline check box header ", function () {
        pages.createDealAdvances.clickOnTheIncludesPipelineCheckBoxHeader();
    });
};

exports.fillIntoSynchronisationPercentFieldAdvanceApplicableEarnings: function () {
    it("Fill into the synchronisation percent field advance applicable earnings ", function () {
        pages.createDealAdvances.fillIntoTheSynchronisationPercentFieldAdvanceApplicableEarnings();
    });
};

exports.fillIntoMechanicalPercentFieldAdvanceApplicableEarnings = function () {
    it("Fill into the mechanical percent field advance applicable earnings ", function () {
        pages.createDealAdvances.fillIntoTheMechanicalPercentFieldAdvanceApplicableEarnings();
    });
};

exports.fillIntoPublicPerformancePercentFieldAdvanceApplicableEarnings = function () {
    it("Fill into the public performance percent field advance applicable earnings", function () {
        pages.createDealAdvances.fillIntoThePublicPerformancePercentFieldAdvanceApplicableEarnings();
    });
};

exports.fillIntoGrandRightsPercentFieldAdvanceApplicableEarnings = function () {
    it("Fill into the grand rights percent field advance applicable earnings", function () {
        pages.createDealAdvances.fillIntoTheGrandRightsPercentFieldAdvanceApplicableEarnings();
    });
};

exports.fillIntoDigitalRightsPercentFieldAdvanceApplicableEarnings = function () {
    it("Fill into the digital rights percent field advance applicable earnings ", function () {
        pages.createDealAdvances.fillIntoTheDigitalRightsPercentFieldAdvanceApplicableEarnings();
    });
};

exports.fillIntoPrintRightsPercentFieldAdvanceApplicableEarnings = function () {
    it("Fill into the print rights percent field advance applicable earnings ", function () {
        pages.createDealAdvances.fillIntoThePrintRightsPercentFieldAdvanceApplicableEarnings();
    });
};

exports.fillIntoOtherRightsPercentFieldAdvanceApplicableEarnings = function () {
    it("Fill into the other rights percent field advance applicable earnings ", function () {
        pages.createDealAdvances.fillIntoTheOtherRightsPercentFieldAdvanceApplicableEarnings();
    });
};

exports.clickOnSynchPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the synch pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheSynchPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.clickOnMechPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the mech pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheMechPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.clickOnPerfPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the perf pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnThePerfPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.clickOnGrandPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the grand pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheGrandPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.clickOnDigitalPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the digital pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheDigitalPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.clickOnPrintPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the print pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnThePrintPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.clickOnOtherPipelineCheckBoxAdvanceApplicableEarnings = function () {
    it("Click on the other pipeline check box advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheOtherPipelineCheckBoxAdvanceApplicableEarnings();
    });
};

exports.selectRandomDefineSynchTerritoryAdvanceApplicableEarnings = function () {
    it("Select the random define synch territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineSynchTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineMechTerritoryAdvanceApplicableEarnings = function () {
    it("Select the random define mech territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineMechTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefinePerfTerritoryAdvanceApplicableEarnings = function () {
    it("Select the random define perf territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefinePerfTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineGrandTerritoryAdvanceApplicableEarning = function () {
    it("Select the random define grand territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineGrandTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineDigitalTerritoryAdvanceApplicableEarnings = function () {
    it("Select the random define digital territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineDigitalTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefinePrintTerritoryAdvanceApplicableEarnings = function () {
    it("Select the random define print territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefinePrintTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineOtherTerritoryAdvanceApplicableEarnings = function () {
    it("Select the random define other territory advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineOtherTerritoryAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineSynchLabelAdvanceApplicableEarnings = function () {
    it("Select the random define synch label advance applicable earnings", function () {
        pages.createDealAdvances.selectTheRandomDefineSynchLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineMechLabelAdvanceApplicableEarnings = function () {
    it("Select the random define mech label advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineMechLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefinePerfLabelAdvanceApplicableEarnings = function () {
    it("Select the random define perf label advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefinePerfLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineGrandLabelAdvanceApplicableEarnings = function () {
    it("Select the random define grand label advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineGrandLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineDigitalLabelAdvanceApplicableEarnings = function () {
    it("Select the random define digital label advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineDigitalLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefinePrintLabelAdvanceApplicableEarnings = function () {
    it("Select the random define print label advance applicable earnings", function () {
        pages.createDealAdvances.selectTheRandomDefinePrintLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.selectRandomDefineOtherLabelAdvanceApplicableEarnings = function () {
    it("Select the random define other label advance applicable earnings ", function () {
        pages.createDealAdvances.selectTheRandomDefineOtherLabelAdvanceApplicableEarnings();
        pages.createDealAdvances.waitForAjax();
    });
};

exports.clickOnDoneAdvanceApplicableEarnings = function () {
    it("Click on the done advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheDoneAdvanceApplicableEarnings();
    });
};

exports.clickOnCancelAdvanceApplicableEarnings = function () {
    it("Click on the cancel advance applicable earnings ", function () {
        pages.createDealAdvances.clickOnTheCancelAdvanceApplicableEarnings();
    });
};

exports.itAddCompleteAdvanceApplicableEarnings = function () {
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

        steps.base.scrollIntoView("Digital rights", pages.createDealAdvances.elems.digitalRightsPercentAdvanceApplicableEarnings);
        steps.createDealAdvances.fillIntoDigitalRightsPercentFieldAdvanceApplicableEarnings();
        steps.createDealAdvances.clickOnDigitalPipelineCheckBoxAdvanceApplicableEarnings();
        steps.createDealAdvances.selectRandomDefineDigitalTerritoryAdvanceApplicableEarnings();
        steps.createDealAdvances.selectRandomDefineDigitalLabelAdvanceApplicableEarnings();

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
"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_advances");
require(steps_path + "create_deal_advances");
require(steps_path + "deal");

if (steps.create_deal_advances === undefined) {
    steps.create_deal_advances = {


        clickOnAddFirstAdvanceLink: function () {
            it("Click on the add first advance link ", function () {
                pages.create_deal_advances.clickOnTheAddFirstAdvanceLink();
            });
        },

        selectRandomContractPeriodAdvanceDetails: function () {
            it("Select the random contract period advance details ", function () {
                pages.create_deal_advances.selectTheRandomContractPeriodAdvanceDetails();
            });
        },

        fillIntoAmountAdvanceDetails: function () {
            it("Fill into the amount advance details ", function () {
                pages.create_deal_advances.fillIntoTheAmountAdvanceDetails();
            });
        },

        selectRandomCurrencyAdvanceDetails: function () {
            it("Select the random currency advance details ", function () {
                pages.create_deal_advances.selectTheRandomCurrencyAdvanceDetails();
            });
        },


        selectPaymentStructureAdvanceDetails: function (value) {
            it("Select the payment structure advance details ", function () {
                pages.create_deal_advances.selectThePaymentStructureAdvanceDetails(value);
            });
        },

        selectWhenDistributionRulesAdvanceDetails: function (value) {
            it("Select the when distribution rules advance details ", function () {
                pages.create_deal_advances.selectTheWhenDistributionRulesAdvanceDetails(value);
            });
        },

        fillIntoPercentDistributionRulesAdvanceDetailsNumberI: function (i) {
            it("Fill into the percent distribution rules advance details number " + i, function () {
                pages.create_deal_advances.fillIntoThePercentDistributionRulesAdvanceDetailsNumberI(i);
            });
        },

        selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            it("Select random organisation payment recipient distribution rules advance details number " + i, function () {
                pages.create_deal_advances.selectTheRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(i);
            });
        },

        selectRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI: function (i) {
            it("Select random person payment recipient distribution rules advance details number " + i, function () {
                pages.create_deal_advances.selectTheRandomPersonPaymentRecipientDistributionRulesAdvanceDetailsNumberI(i);
            });
        },

        selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI: function (i) {
            it("Select the random currency distribution rules advances details number " + i, function () {
                pages.create_deal_advances.selectTheRandomCurrencyDistributionRulessAdvanceDetailsNumberI(i);
            });
        },

        clickOnAddViewAdvanceApplicableEarningsLink: function () {
            it("Click on the add/view advance applicable earning link ", function () {
                pages.create_deal_advances.clickOnTheAddViewAdvanceApplicableEarningsLink();
            });
        },

        clickOnSetDefaultsLinkAdvanceApplicableEarnings: function () {
            it("Click on the set defaults link advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheSetDefaultsLinkAdvanceApplicableEarnings();
            });
        },

        clickOnClearAllLinkAdvanceApplicableEarnings: function () {
            it("Click on the clear all link advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheClearAllLinkAdvanceApplicableEarnings();
            });
        },

        clickOnIncludesPipelineCheckBoxHeader: function () {
            it("Click on the includes pipeline check box header ", function () {
                pages.create_deal_advances.clickOnTheIncludesPipelineCheckBoxHeader();
            });
        },

        fillIntoSynchronisationPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the synchronisation percent field advance applicable earnings ", function () {
                pages.create_deal_advances.fillIntoTheSynchronisationPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoMechanicalPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the mechanical percent field advance applicable earnings ", function () {
                pages.create_deal_advances.fillIntoTheMechanicalPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoPublicPerformancePercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the public performance percent field advance applicable earnings", function () {
                pages.create_deal_advances.fillIntoThePublicPerformancePercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoGrandRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the grand rights percent field advance applicable earnings", function () {
                pages.create_deal_advances.fillIntoTheGrandRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoDigitalRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the digital rights percent field advance applicable earnings ", function () {
                pages.create_deal_advances.fillIntoTheDigitalRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoPrintRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the print rights percent field advance applicable earnings ", function () {
                pages.create_deal_advances.fillIntoThePrintRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        fillIntoOtherRightsPercentFieldAdvanceApplicableEarnings: function () {
            it("Fill into the other rights percent field advance applicable earnings ", function () {
                pages.create_deal_advances.fillIntoTheOtherRightsPercentFieldAdvanceApplicableEarnings();
            });
        },

        clickOnSynchPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the synch pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheSynchPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnMechPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the mech pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheMechPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnPerfPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the perf pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnThePerfPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnGrandPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the grand pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheGrandPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnDigitalPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the digital pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheDigitalPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnPrintPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the print pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnThePrintPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        clickOnOtherPipelineCheckBoxAdvanceApplicableEarnings: function () {
            it("Click on the other pipeline check box advance applicable earnings ", function () {
                pages.create_deal_advances.clickOnTheOtherPipelineCheckBoxAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineSynchTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define synch territory advance applicable earnings ", function () {
                pages.create_deal_advances.selectTheRandomDefineSynchTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineMechTerritoryAdvanceApplicableEarnings: function () {
            it("Select the random define mech territory advance applicable earnings ", function () {
                pages.create_deal_advances.selectTheRandomDefineMechTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefinePerfTerritoryAdvanceApplicableEarnings: function(){
            it("Select the random define perf territory advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefinePerfTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineGrandTerritoryAdvanceApplicableEarnings : function(){
            it("Select the random define grand territory advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefineGrandTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineDigitalTerritoryAdvanceApplicableEarnings: function(){
            it("Select the random define digital territory advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefineDigitalTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefinePrintTerritoryAdvanceApplicableEarnings : function(){
            it("Select the random define print territory advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefinePrintTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineOtherTerritoryAdvanceApplicableEarnings: function(){
            it("Select the random define other territory advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefineOtherTerritoryAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineSynchLabelAdvanceApplicableEarnings : function(){
            it("Select the random define synch label advance applicable earnings", function(){
               pages.create_deal_advances.selectTheRandomDefineSynchLabelAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineMechLabelAdvanceApplicableEarnings: function(){
            it("Select the random define mech label advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefineMechLabelAdvanceApplicableEarnings();
            });
        },

        selectRandomDefinePerfLabelAdvanceApplicableEarnings: function(){
            it("Select the random define perf label advance applicable earnings ", function () {
                pages.create_deal_advances.selectTheRandomDefinePerfLabelAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineGrandLabelAdvanceApplicableEarnings: function(){
            it("Select the random define grand label advance applicable earnings ", function(){
              pages.create_deal_advances.selectTheRandomDefineGrandLabelAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineDigitalLabelAdvanceApplicableEarnings : function(){
            it("Select the random define digital label advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefineDigitalLabelAdvanceApplicableEarnings();
            });
        },

        selectRandomDefinePrintLabelAdvanceApplicableEarnings: function(){
            it("Select the random define print label advance applicable earnings", function(){
               pages.create_deal_advances.selectTheRandomDefinePrintLabelAdvanceApplicableEarnings();
            });
        },

        selectRandomDefineOtherLabelAdvanceApplicableEarnings: function(){
            it("Select the random define other label advance applicable earnings ", function(){
               pages.create_deal_advances.selectTheRandomDefineOtherLabelAdvanceApplicableEarnings();
            });
        },

        clickOnDoneAdvanceApplicableEarnings: function(){
            it("Click on the done advance applicable earnings ", function(){
               pages.create_deal_advances.clickOnTheDoneAdvanceApplicableEarnings();
            });
        },

        clickOnCancelAdvanceApplicableEarnings: function(){
            it("Click on the cancel advance applicable earnings ", function(){
               pages.create_deal_advances.clickOnTheCancelAdvanceApplicableEarnings();
            });
        }

    }
}
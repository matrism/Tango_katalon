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
        }

    }
}
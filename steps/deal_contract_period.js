"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "deal_contract_period");
require(pages_path + "deal_contract_period");

if (steps.deal_contract_period === undefined) {
    steps.deal_contract_period = {

        fillMandatoryFieldsContractPeriod: function () {
            it("Fill mandatory fields contract period", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.deal_contract_period.elems.startDate));
                pages.deal_contract_period.fillStartActualDate();
                pages.deal_contract_period.fillTargetEndMonths();
            });
        },


        itFillDealMandatoryFieldsContractPeriod: function () {
            describe("Fill mandatory fields contract period screen", function () {
                    steps.deal_contract_period.fillMandatoryFieldsContractPeriod();
                }
            );
        }

    };
}
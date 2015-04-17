"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "create_deal_contract_period");
require(pages_path + "create_deal_contract_period");
module.exports = steps.create_deal_contract_period = {};


module.exports.fillMandatoryFieldsContractPeriod = function () {
    it("Fill mandatory fields contract period", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.startDate()));
        pages.create_deal_contract_period.fillStartActualDate();
        pages.create_deal_contract_period.fillTargetEndMonths();
    });
};


module.exports.itFillDealMandatoryFieldsContractPeriod = function () {
    describe("Fill mandatory fields contract period screen", function () {
            steps.create_deal_contract_period.fillMandatoryFieldsContractPeriod();
        }
    );
};
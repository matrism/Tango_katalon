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



    }
}
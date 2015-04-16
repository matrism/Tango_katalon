"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "deal_scope");
module.exports = steps.deal_scope = {};

module.exports.addPublisherShare = function () {
    it(
        "Open publisher share set form", function () {
            pages.deal_scope.clickOnAddPublisherShareSetLink();
        }
    );
};
//
//it("Expect publisher form to be opened", function () {
//
//});
module.exports.fillInPublisherNameFirstField = function () {
    it("Fill in publisher name field", function () {
        pages.deal_scope.fillInFirstPublisherNameField();
    });
};



"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "deal_scope");
require(steps_path + "deal_scope");
require(steps_path + "deal");
module.exports = steps.deal_scope = {};


module.exports.addSimpleScope = function () {
    it("Add simple scope", function () {
        pages.deal_scope.addScopeForm();
        pages.deal_scope.selectContractTypeScope(pages.deal_scope.contractTypeDropDown(), "Finder");
        pages.deal_scope.addTerritoryByTypingToScope();
    });
};


module.exports.selectCountry = function () {
    it("Select country", function () {
        pages.deal_scope.selectRandomCountry();
    });
};

module.exports.addPublisherShareSet = function () {
    it("Open publisher share set form", function () {
            pages.deal_scope.clickOnAddPublisherShareSetLink();
        }
    );
};

module.exports.fillInPublisherNameFirstField = function () {
    it("Fill in publisher name field", function () {
        pages.deal_scope.fillInFirstPublisherNameField();
    });
};

module.exports.selectRandomPublisherNameDropDownValue = function () {
    it("Select random publisher name drop down value", function () {
        pages.deal_scope.selectRandomPublisherNameDropDown();
    });
};


module.exports.itAddPublisherShare = function () {
    describe("Add publisher share set", function () {
            steps.deal_scope.addPublisherShareSet();
            steps.deal_scope.fillInPublisherNameFirstField();
            steps.deal_scope.selectRandomPublisherNameDropDownValue();
        }
    );
};


module.exports.itAddSimpleScope = function () {
    describe("Add simple scope", function () {
            steps.deal_scope.addSimpleScope();
            steps.deal_scope.selectCountry();
        }
    );
};

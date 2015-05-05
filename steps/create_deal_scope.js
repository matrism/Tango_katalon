"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(steps_path + "deal");
module.exports = steps.create_deal_scope = {};


module.exports.addSimpleScope = function () {
    it("Add simple scope", function () {
        pages.create_deal_scope.addScopeForm();
        pages.create_deal_scope.selectContractTypeScope(pages.create_deal_scope.contractTypeDropDown(), "Finder");
        pages.create_deal_scope.addTerritoryByTypingToScope();
    });
};


module.exports.selectCountry = function () {
    it("Select country", function () {
        pages.create_deal_scope.selectRandomCountry();
    });
};

module.exports.addPublisherShareSet = function () {
    it("Open publisher share set form", function () {
            pages.create_deal_scope.clickOnAddPublisherShareSetLink();
        }
    );
};

module.exports.fillInPublisherNameFirstField = function () {
    it("Fill in publisher name field", function () {
        pages.create_deal_scope.fillInFirstPublisherNameField();
    });
};

module.exports.selectRandomPublisherNameDropDownValue = function () {
    it("Select random publisher name drop down value", function () {
        pages.create_deal_scope.selectRandomPublisherNameDropDown();
    });
};


module.exports.itAddPublisherShare = function () {
    describe("Add publisher share set", function () {
            steps.create_deal_scope.addPublisherShareSet();
            steps.create_deal_scope.fillInPublisherNameFirstField();
            steps.create_deal_scope.selectRandomPublisherNameDropDownValue();
        }
    );
};


module.exports.itAddSimpleScope = function () {
    describe("Add simple scope", function () {
            steps.create_deal_scope.addSimpleScope();
            steps.create_deal_scope.selectCountry();
        }
    );
};

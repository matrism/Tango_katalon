"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(steps_path + "deal");

if (steps.create_deal_scope === undefined) {
    steps.create_deal_scope = {

        addSimpleScope: function () {
            it("Add simple scope", function () {
                pages.create_deal_scope.addScopeForm();
                pages.create_deal_scope.fillScopeDescriptionField();
                pages.create_deal_scope.selectContractTypeScope(pages.create_deal_scope.elems.contractTypeDropDown, "Finder");
                pages.create_deal_scope.addTerritoryByTypingToScope();
            });
        },
        itAddNewContractPeriod: function () {

            it("Add new contract Period",function(){

                pages.create_deal_scope.clickNewContractPeriodButton();
             //   pages.create_deal_scope.waitForContractPeriodToBeCreated();


            })

        },

        selectCountry: function () {
            it("Select country", function () {
                pages.create_deal_scope.selectRandomCountry();
            });
        },

        addPublisherShareSet: function () {
            it("Open publisher share set form", function () {
                    pages.create_deal_scope.clickOnAddPublisherShareSetLink();
                }
            );
        },

        fillInPublisherNameFirstField: function () {
            it("Fill in publisher name field", function () {
                pages.create_deal_scope.fillInFirstPublisherNameField();
            });
        },

        selectRandomPublisherNameDropDownValue: function () {
            it("Select random publisher name drop down value", function () {
                pages.create_deal_scope.selectRandomPublisherNameDropDown();
            });
        },

        itAddPublisherShare: function () {
            describe("Add publisher share set", function () {
                    steps.create_deal_scope.addPublisherShareSet();
                    steps.create_deal_scope.fillInPublisherNameFirstField();
                    steps.create_deal_scope.selectRandomPublisherNameDropDownValue();
                }
            );
        },

        itAddSimpleScope: function () {
            describe("Add simple scope", function () {
                    steps.create_deal_scope.addSimpleScope();
                    steps.create_deal_scope.selectCountry();
                }
            );
        }

    };
}
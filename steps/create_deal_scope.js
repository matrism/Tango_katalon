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
                pages.create_deal_scope.selectRandomContractTypeScope();
                pages.create_deal_scope.addTerritoryByTypingToScope();
            });
        },

        selectCountry: function () {
            it("Select country", function () {
                pages.create_deal_scope.selectRandomCountry();
            });
        },

        clickOnAddPublisherShareSet: function () {
            it("Open publisher share set form", function () {
                    pages.create_deal_scope.clickOnAddPublisherShareSetLink();
                }
            );
        },

        fillIntoFirstPublisherNameField: function () {
            it("Fill in publisher name field", function () {
                pages.create_deal_scope.fillInFirstPublisherNameField();
            });
        },

        selectRandomPublisherNameDropDownValue: function () {
            it("Select random publisher name drop down value", function () {
                pages.create_deal_scope.selectRandomPublisherNameDropDown();
            });
        },

        fillIntoFirstPublisherNameCollectField: function () {
            it("Fill into first publisher name collect field random value ", function () {
                pages.create_deal_scope.fillInFirstPublisherNameCollectPercent();
            });
        },

        fillIntoFirstPublisherNameAMCollectField: function () {
            it("Fill into first publisher name AM collect percent random value", function () {
                pages.create_deal_scope.fillInFirstPublisherNameAMOwnPercent();
            });
        },

        fillIntoFirstPublisherNameOwnField: function () {
            it("Fill into first publisher name own field random value", function () {
                pages.create_deal_scope.fillInFirstPublisherNameOwnPercent();
            });
        },

        fillIntoFirstPublisherNameAMField: function () {
            it("Fill into first publisher name AM field", function () {
                pages.create_deal_scope.fillInFirstPublisherNameAMField();
            });
        },

        saveThePublisherShareSet: function () {
            it("Save the publisher share set", function () {
                pages.create_deal_scope.savePublisherShareSet();
            });
        },

        cancelThePublisherShareSet: function () {
            it("Cancel the publisher share set", function () {
                pages.create_deal_scope.cancelPublisherShareSet();
            });
        },

        selectSpecificPublisherNameDropDown: function () {
            it("Select specific value publisher name drop down", function () {
                pages.create_deal_scope.selectSpecificPublisherNameDropDown("WB MUSIC CORP. \n(53026414)")
            });
        },

        itAddPublisherShare: function () {
            describe("Add publisher share set", function () {
                    steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
                    steps.create_deal_scope.clickOnAddPublisherShareSet();
                    steps.create_deal_scope.fillIntoFirstPublisherNameField();
                    steps.create_deal_scope.selectRandomPublisherNameDropDownValue();
                    steps.create_deal_scope.fillIntoFirstPublisherNameOwnField();
                    steps.create_deal_scope.fillIntoFirstPublisherNameCollectField();
                    steps.create_deal_scope.fillIntoFirstPublisherNameAMField();
                    steps.create_deal_scope.selectSpecificPublisherNameDropDown();
                    steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectField();
                    steps.create_deal_scope.saveThePublisherShareSet();
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
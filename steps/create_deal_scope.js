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
                pages.create_deal_scope.waitForAjax();
                pages.create_deal_scope.addTerritoryByTypingToScope();
            });
        },

        selectCountry: function () {
            it("Select country", function () {
                pages.create_deal_scope.selectRandomCountry();
                pages.create_deal_scope.waitForAjax();
            });
        },

        validateNoPublisherShareWarningIsDisplayed: function () {
            it("Validate that no publisher share warning message is correctly displayed ", function () {
                expect(pages.create_deal_scope.elems.noPublisherShareWarningIcon.isDisplayed);
                pages.create_deal_scope.validateTheNoPublisherShareWarningMessage();
            });
        },


        clickOnAddPublisherShareSet: function () {
            it("Open publisher share set form", function () {
                pages.create_deal_scope.clickOnAddPublisherShareSetLink();
            });
        },

        validatePlaceholdersForPublisherNameEAndAM: function () {
            it("Validate the placeholders for publisher name E and AM ", function () {
                pages.create_deal_scope.validateThePlaceholdersForPublisherNameE();
                pages.create_deal_scope.validateThePlaceholdersForPublisherNameAM();
            });
        },

        validatePublisherNameTooltipEOrPAIcon: function () {
            it("Validate publisher name E or PA icon message ", function () {
                pages.create_deal_scope.validateThePublisherNameTooltipEOrPAIcon();
            });
        },

        validatePublisherNameTooltipAMIcon: function () {
            it("Validate publisher name AM icon message ", function () {
                pages.create_deal_scope.validateThePublisherNameTooltipAMIcon();
            });
        },

        validateErrorMessagePublisherRequired: function () {
            it("Validate the error message for publisher required ", function () {
                pages.create_deal_scope.validateTheErrorMessagePublisherRequired();
            });
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
                pages.create_deal_scope.selectSpecificPublisherNameDropDown("WB MUSIC CORP. \n(53026414)");
            });
        },

        selectDesiredPublisherTypeEOrPADropDown: function (publisherType) {
            it("Select desired publisher type E or PA from drop down", function () {
                pages.create_deal_scope.selectSpecificOptionEOrPAPublisherType(publisherType);
            });
        },

        fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA: function () {
            it("Fill first publisher name fields based on publisher type E or PA", function () {
                pages.create_deal_scope.elems.firstPublisherTypeValue.getText()
                    .then(function (promise) {
                        console.log("Publisher type is: " + promise);
                        switch (promise) {
                            case "E":
                                console.log("We are on the E case");
                                pages.create_deal_scope.fillInFirstPublisherNameField();
                                pages.create_deal_scope.selectRandomPublisherNameDropDown();
                                pages.create_deal_scope.fillInFirstPublisherNameOwnPercent();
                                pages.create_deal_scope.fillInFirstPublisherNameCollectPercent();
                                break;
                            case "PA":
                                console.log("We are on the PA case");
                                pages.create_deal_scope.validatePublisherNameCollectPercentFieldChainIIsAvailable(1);
                                pages.create_deal_scope.fillInFirstPublisherNameField();
                                pages.create_deal_scope.selectRandomPublisherNameDropDown();
                                pages.create_deal_scope.fillInFirstPublisherNameCollectPercent();
                                break;
                        }
                    });
            });
        },

        clickAddChainLink: function () {
            it("Click on add chain link", function () {
                pages.create_deal_scope.clickOnAddChainLink();
                pages.create_deal_scope.waitForAjax();
            });
        },

        selectDesiredPublisherTypeEOrPADropDownChainI: function (publisherType, i) {
            it("Select desired publisher type E or PA from drop down", function () {
                pages.create_deal_scope.selectSpecificOptionEOrPAPublisherTypeChainI(publisherType, i);
            });
        },

        fillIntoPublisherNameAMFieldChainI: function (i) {
            it("Fill into publisher name AM field chain i ", function () {
                pages.create_deal_scope.fillPublisherNameAMFieldChainI(i);
            });
        },

        selectSpecificPublisherNameDropDownChainI: function (i) {
            it("Select specific value publisher name drop down chain i", function () {
                pages.create_deal_scope.selectSpecificPublisherNameDropDownChainI("WB MUSIC CORP. \n(53026414)", i);
            });
        },

        fillIntoPublisherNameAMCollectFieldChainI: function (i) {
            it("Fill into publisher name AM collect chain i percent random value", function () {
                pages.create_deal_scope.fillPublisherNameAMCollectPercentChainI(i);
            });
        },

        validateDeleteChainIIconPublisherShare: function (i) {
            it("Validate delete chain i icon publisher share is present ", function () {
                pages.create_deal_scope.validateTheDeleteIconChainIPublisherShareIsPresent(i);
            });
        },

        deleteChainIPublisherShare: function (i) {
            it("Delete chain i from publisher share set ", function () {
                pages.create_deal_scope.clickOnDeleteIconChainI(i);
                pages.create_deal_scope.confirmOnDeleteModalDialog();
            });
        },

        fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI: function (i) {
            it("Fill publisher name fields chain i based on publisher type E or PA", function () {
                browser.driver.findElement(By.css("#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(" + i + ") div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow")).getText()
                    .then(function (promise) {
                        console.log("Publisher type is: " + promise);
                        switch (promise) {
                            case "E":
                                console.log("We are on the E case");
                                pages.create_deal_scope.fillPublisherNameFieldChainI(i);
                                pages.create_deal_scope.selectRandomPublisherNameDropDownChainI(i);
                                pages.create_deal_scope.fillPublisherNameOwnPercentFieldChainI(i);
                                pages.create_deal_scope.fillPublisherNameCollectPercentFieldChainI(i);
                                break;
                            case "PA":
                                console.log("We are on the PA case");
                                pages.create_deal_scope.fillPublisherNameFieldChainI(i);
                                pages.create_deal_scope.selectRandomPublisherNameDropDownChainI(i);
                                pages.create_deal_scope.fillPublisherNameCollectPercentFieldChainI(i);
                                break;
                        }
                    });
            });
        },


        itAddPublisherShare: function () {
            describe("Add publisher share set", function () {
                steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
                steps.create_deal_scope.clickOnAddPublisherShareSet();
                steps.create_deal_scope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField();
                steps.create_deal_scope.selectSpecificPublisherNameDropDown();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectField();
            });
        },


        itAddPublisherShareWithMultipleThreeChains: function (i) {
            describe("Add publisher share set with three chains", function () {
                steps.create_deal_scope.clickAddChainLink();
                steps.create_deal_scope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
                steps.create_deal_scope.fillIntoPublisherNameAMFieldChainI(i);
                steps.create_deal_scope.selectSpecificPublisherNameDropDownChainI(i);
                steps.create_deal_scope.fillIntoPublisherNameAMCollectFieldChainI(i);
            });
        },

        itAddSimpleScope: function () {
            describe("Add simple scope", function () {
                steps.create_deal_scope.addSimpleScope();
                steps.create_deal_scope.selectCountry();
            });
        },

        itCheckVisualDesignPublisherShare: function () {
            describe("Check visual design for publsiher share set", function () {
                steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
                steps.create_deal_scope.validateNoPublisherShareWarningIsDisplayed();
                steps.create_deal_scope.clickOnAddPublisherShareSet();
                steps.create_deal_scope.validatePlaceholdersForPublisherNameEAndAM();
                steps.create_deal_scope.validateErrorMessagePublisherRequired();
                steps.create_deal_scope.validatePublisherNameTooltipEOrPAIcon();
                steps.create_deal_scope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
                steps.create_deal_scope.validatePublisherNameTooltipAMIcon();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField();
                steps.create_deal_scope.selectSpecificPublisherNameDropDown();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectField();
                steps.create_deal_scope.saveThePublisherShareSet();
            });
        }
    };
}
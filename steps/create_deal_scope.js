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

        addSpecificScope: function (contractType) {
            it("Add simple scope", function () {
                pages.create_deal_scope.addScopeForm();
                pages.create_deal_scope.selectContractTypeScope(contractType);
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

        validate3DecimalsExceededPublisherShareWarningIsDisplayed: function () {
            it("Validate that 3 decimals exceeded publisher share warning message is correctly displayed ", function () {
                expect(pages.create_deal_scope.elems.decimalPlacesPublisherShareErrorMessage.isDisplayed);
                pages.create_deal_scope.validateThe3DecimalsExceededPublisherShareWarningMessage();
            });
        },

        validateSubtotalOfOwnPublisherShareErrorMessageIsDisplayed: function () {
            it("Validate that subtotal of own  publisher share error message is correctly displayed ", function () {
                expect(pages.create_deal_scope.elems.subtotalOwnPublisherShareErrorMessage.isDisplayed);
                pages.create_deal_scope.validateSubtotalOfOwnPublisherShareWarningMessage();
            });
        },

        validateSubtotalOfOwnLessThanCollectPublisherShareErrorMessageIsDisplayed: function () {
            it("Validate that subtotal of own less than collect publisher share error message is correctly displayed ", function () {
                expect(pages.create_deal_scope.elems.subtotalOwnPublisherShareErrorMessage.isDisplayed);
                pages.create_deal_scope.validateSubtotalOfOwnLessThanCollectPublisherShareWarningMessage();
            });
        },

        validateChainTotalOfOwnPublisherShareErrorIsDisplayed: function () {
            it("Validate that chain total of own publisher share error message is correctly displayed ", function () {
                expect(pages.create_deal_scope.elems.chainTotalOwnPublisherShareErrorMessage.isDisplayed);
                pages.create_deal_scope.validateChainTotalOfOwnPublisherShareWarningMessage();
            });
        },

        validateChainTotalOfOwnLessThanCollectPublisherShareErrorIsDisplayed: function () {
            it("Validate that chain total of own cannot be less than collect publisher share error message is correctly displayed ", function () {
                expect(pages.create_deal_scope.elems.chainSubtotalOfCollectCannotGreaterThanOwnErrorMessage.isDisplayed);
                pages.create_deal_scope.validateChainTotalOfOwnPublisherCannotBeLessThanCollectShareWarningMessage();
            });
        },

        validate3DecimalsExceededPublisherShareWarningIsNotDisplayed: function () {
            it("Validate that 3 decimals exceeded publisher share warning message is not displayed ", function () {
                expect(pages.create_deal_scope.elems.decimalPlacesPublisherShareErrorMessage.isPresent()).toBeFalsy();
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

        fillIntoFirstPublisherNameField: function (publisherName) {
            it("Fill in first publisher name field", function () {
                pages.create_deal_scope.fillInFirstPublisherNameField(publisherName);
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
                pages.create_deal_scope.fillInFirstPublisherNameAMCollectPercent();
            });
        },

        fillIntoFirstPublisherNameOwnField: function () {
            it("Fill into first publisher name own field random value", function () {
                pages.create_deal_scope.fillInFirstPublisherNameOwnPercent();
            });
        },

        fillIntoFirstPublisherNameCollectFieldSpecificValue: function (percent) {
            it("Fill into first publisher name collect field random value ", function () {
                pages.create_deal_scope.fillInFirstPublisherNameCollectPercentSpecificValue(percent);
            });
        },

        fillIntoFirstPublisherNameAMCollectFieldSpecificValue: function (percent) {
            it("Fill into first publisher name AM collect percent random value", function () {
                pages.create_deal_scope.fillInFirstPublisherNameAMCollectPercentSpecificValue(percent);
            });
        },

        fillIntoFirstPublisherNameOwnFieldSpecificValue: function (percent) {
            it("Fill into first publisher name own field random value", function () {
                pages.create_deal_scope.fillInFirstPublisherNameOwnPercentSpecificValue(percent);
            });
        },

        fillIntoFirstPublisherNameAMField: function (publisherNameAM) {
            it("Fill into first publisher name AM field", function () {
                pages.create_deal_scope.fillInFirstPublisherNameAMField(publisherNameAM);
            });
        },

        clearIntoFirstPublisherNameField: function () {
            it("Clear into first publisher name field", function () {
                pages.create_deal_scope.clearFirstPublisherNameField();
            });
        },

        clearIntoFirstPublisherNameAMField: function () {
            it("Clear into first publisher name AM field", function () {
                pages.create_deal_scope.clearFirstPublisherNameAMField();
            });
        },

        clearIntoFirstPublisherNameAMCollectField: function () {
            it("Clear into first publisher name AM collect percent", function () {
                pages.create_deal_scope.clearFirstPublisherNameAMCollectPercent();
            });
        },

        clearIntoFirstPublisherNameOwnField: function () {
            it("Clear into first publisher name own field", function () {
                pages.create_deal_scope.clearInFirstPublisherNameOwnPercent();
            });
        },

        clearIntoFirstPublisherNameCollectField: function () {
            it("Clearl into first publisher name collect field ", function () {
                pages.create_deal_scope.clearInFirstPublisherNameCollectPercent();
            });
        },

        saveThePublisherShareSet: function () {
            it("Save the publisher share set", function () {
                pages.create_deal_scope.saveThePublisherShareSets();
            });
        },

        cancelThePublisherShareSet: function () {
            it("Cancel the publisher share set", function () {
                pages.create_deal_scope.cancelPublisherShareSet();
            });
        },

        selectSpecificPublisherNameDropDown: function () {
            it("Select specific value publisher name drop down", function () {
                pages.create_deal_scope.selectTheSpecificPublisherNameDropDown("(53026414)\nWB MUSIC CORP.");
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
                                pages.create_deal_scope.fillInFirstPublisherNameField("test");
                                pages.create_deal_scope.selectRandomPublisherNameDropDown();
                                pages.create_deal_scope.fillInFirstPublisherNameOwnPercent();
                                pages.create_deal_scope.fillInFirstPublisherNameCollectPercent();
                                break;
                            case "PA":
                                console.log("We are on the PA case");
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
                pages.create_deal_scope.selectSpecificPublisherNameDropDownChainI("(53026414)\nWB MUSIC CORP.", i);
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

        validateThePublisherNameDropDownHasNoResults: function () {
            it("Validate that publisher name drop down has no results ", function () {
                pages.create_deal_scope.validatePublisherNameDropDownHasNoResults();
            });
        },

        deleteChainIPublisherShare: function (i) {
            it("Delete chain i from publisher share set ", function () {
                pages.create_deal_scope.clickOnDeleteIconChainI(i);
                pages.create_deal_scope.confirmOnDeleteModalDialog();
            });
        },

        clickPublisherSharesSetArea: function () {
            it("Click on publisher shares set area ", function () {
                pages.create_deal_scope.clickOnPublisherShareSetArea();
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
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField("wb music corp");
                steps.create_deal_scope.selectSpecificPublisherNameDropDown();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectField();
            });
        },

        itAddPublisherSharePATypeWithMultipleThreeChains: function (i) {
            describe("Add publisher share set with three chains", function () {
                steps.create_deal_scope.clickAddChainLink();
                steps.create_deal_scope.selectDesiredPublisherTypeEOrPADropDownChainI("PA", i);
                steps.create_deal_scope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
                steps.create_deal_scope.fillIntoPublisherNameAMFieldChainI(i);
                steps.create_deal_scope.selectSpecificPublisherNameDropDownChainI(i);
                steps.create_deal_scope.fillIntoPublisherNameAMCollectFieldChainI(i);
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
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField("wb music corp");
                steps.create_deal_scope.selectSpecificPublisherNameDropDown();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectField();
                steps.create_deal_scope.saveThePublisherShareSet();
            });
        },

        itCheckInvalidCasesPublisherShare: function () {
            describe("Check invalid cases for no publisher and invalid publisher name and IPI share set", function () {
                steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
                //check validation error - publisher is required
                steps.create_deal_scope.validateNoPublisherShareWarningIsDisplayed();
                steps.create_deal_scope.clickOnAddPublisherShareSet();
                //check validation for invalid publisher name and invalid IPI number
                steps.create_deal_scope.fillIntoFirstPublisherNameField("lkjhg");
                steps.create_deal_scope.validateThePublisherNameDropDownHasNoResults();
                steps.create_deal_scope.clearIntoFirstPublisherNameField();
                steps.create_deal_scope.fillIntoFirstPublisherNameField("59684");
                steps.create_deal_scope.validateThePublisherNameDropDownHasNoResults();
                steps.create_deal_scope.clearIntoFirstPublisherNameField();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField("poi");
                steps.create_deal_scope.validateThePublisherNameDropDownHasNoResults();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMField();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField("6985");
                steps.create_deal_scope.validateThePublisherNameDropDownHasNoResults();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMField();
                //add valid publisher name E and AM searched by IPI number
                steps.create_deal_scope.fillIntoFirstPublisherNameField("1234");
                steps.create_deal_scope.selectRandomPublisherNameDropDownValue();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMField("4567");
                steps.create_deal_scope.selectRandomPublisherNameDropDownValue();
            });
        },


        itCheckInvalid3DecimalCasesPublisherShare: function () {
            describe("Check validation 3 decimal places publisher shares set", function () {
                //check validation for decimal shares >3
                steps.base.scrollIntoView("First publisher name field", pages.create_deal_scope.elems.firstPublisherNameField);
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("3.3454");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.5785");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameCollectField();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.5986");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMCollectField();
                //fill exact 3 decimals and check it is ok
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("33.345");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.123");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameCollectField();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.324");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMCollectField();
                //fill exact 2 decimals and check it is ok
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("33.34");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.12");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameCollectField();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.39");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMCollectField();
                //fill exact 1 decimals and check it is ok
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("33.3");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.3");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameCollectField();
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.4");
                steps.create_deal_scope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMCollectField();
            });
        },

        itCheckSubtotalValidationsCasesPublisherShare: function () {
            describe("Check validation for subtotals publisher shares set", function () {
                steps.base.scrollIntoView("First publisher name field", pages.create_deal_scope.elems.firstPublisherNameField);
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("120");
                steps.create_deal_scope.validateSubtotalOfOwnPublisherShareErrorMessageIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("40");
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("50");
                steps.create_deal_scope.validateSubtotalOfOwnLessThanCollectPublisherShareErrorMessageIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.clearIntoFirstPublisherNameCollectField();
            });
        },

        itCheckTotalsValidationsCasesPublisherShare: function () {
            describe("Check validation for totals publisher shares set", function () {
                steps.base.scrollIntoView("First publisher name field", pages.create_deal_scope.elems.firstPublisherNameField);
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("120");
                steps.create_deal_scope.validateChainTotalOfOwnPublisherShareErrorIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("75");
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("55");
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("25");
                steps.create_deal_scope.validateChainTotalOfOwnLessThanCollectPublisherShareErrorIsDisplayed();
                steps.create_deal_scope.clearIntoFirstPublisherNameOwnField();
                steps.create_deal_scope.clearIntoFirstPublisherNameCollectField();
                steps.create_deal_scope.clearIntoFirstPublisherNameAMCollectField();
                steps.create_deal_scope.fillIntoFirstPublisherNameOwnFieldSpecificValue("88");
                steps.create_deal_scope.fillIntoFirstPublisherNameCollectFieldSpecificValue("55");
                steps.create_deal_scope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("25");
                steps.create_deal_scope.saveThePublisherShareSet();
            });
        }

    };

}
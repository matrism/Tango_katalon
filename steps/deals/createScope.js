'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.createDealScope = exports;

exports.openNewScopeForm = function () {
    it('Open a new scope form', function() {
        pages.create_deal_scope.addScopeForm();
    });
};

exports.addSimpleScope = function () {
    it("Add simple scope", function () {
        pages.create_deal_scope.addScopeForm();
        pages.create_deal_scope.selectRandomContractTypeScope();
        pages.create_deal_scope.waitForAjax();
        pages.create_deal_scope.addTerritoryByTypingToScope();
    });
};

exports.itAddNewContractPeriod = function () {
    it("Add new contract Period", function () {
        pages.create_deal_scope.clickNewContractPeriodButton();
        //   pages.create_deal_scope.waitForContractPeriodToBeCreated();
    })
};

exports.sharePublisherShareSet = function () {
    it("Share publisher share set ", function () {
        pages.create_deal_scope.shareThePublisherShareSet();
    });
};

exports.saveSharePublisherShareSet = function () {
    it("Save the share publisher share set ", function () {
        pages.create_deal_scope.saveThePublisherShareSets();
        pages.create_deal_scope.waitForAjax();
    });
};

exports.selectContractType = function (value) {
    it('Select contract type (' + value + ')', function() {
        pages.create_deal_scope.selectContractTypeScope(value);
    });
};

exports.addSpecificScope = function (contractType) {
    it("Add simple scope", function () {
        pages.create_deal_scope.addScopeForm();
        pages.create_deal_scope.selectContractTypeScope(contractType);
        pages.create_deal_scope.waitForAjax();
        pages.create_deal_scope.addTerritoryByTypingToScope();
        pages.create_deal_scope.selectRandomCountry();
        pages.create_deal_scope.waitForAjax();
    });
};

exports.enterTerritoryOfControlSearchTerms = function (value) {
    it('Enter territory of control search terms (' + value + ')', function() {
        pages.create_deal_scope.enterTerritoryOfControlSearchTerms(value);
    });
};

exports.selectTerritoryOfControlSearchResultByIndex = function (i) {
    it('Select territory of control search result #' + (i + 1), function() {
        pages.create_deal_scope.selectTerritoryOfControlSearchResultByIndex(i);
    });
};

exports.addSpecificScopeTypeAndTerritory = function (contractType, territory) {
    it("Add simple scope", function () {
        pages.create_deal_scope.addScopeForm();
        pages.create_deal_scope.selectContractTypeScope(contractType);
        pages.create_deal_scope.waitForAjax();
        pages.create_deal_scope.addTheSpecificTerritoryByTypingToScope(territory);
        pages.create_deal_scope.selectSpecificCountry(territory);
        pages.create_deal_scope.waitForAjax();
    });
};

exports.selectCountry = function () {
    it("Select country", function () {
        pages.create_deal_scope.selectRandomCountry();
        pages.create_deal_scope.waitForAjax();
    });
};

exports.validateNoPublisherShareWarningIsDisplayed = function () {
    it("Validate that no publisher share warning message is correctly displayed ", function () {
        expect(pages.create_deal_scope.elems.noPublisherShareWarningIcon.isDisplayed);
        pages.create_deal_scope.validateTheNoPublisherShareWarningMessage();
    });
};

exports.validate3DecimalsExceededPublisherShareWarningIsDisplayed = function () {
    it("Validate that 3 decimals exceeded publisher share warning message is correctly displayed ", function () {
        expect(pages.create_deal_scope.elems.decimalPlacesPublisherShareErrorMessage.isDisplayed);
        pages.create_deal_scope.validateThe3DecimalsExceededPublisherShareWarningMessage();
    });
};

exports.validateSubtotalOfOwnPublisherShareErrorMessageIsDisplayed = function () {
    it("Validate that subtotal of own  publisher share error message is correctly displayed ", function () {
        expect(pages.create_deal_scope.elems.subtotalOwnPublisherShareErrorMessage.isDisplayed);
        pages.create_deal_scope.validateSubtotalOfOwnPublisherShareWarningMessage();
    });
};

exports.validateSubtotalOfOwnLessThanCollectPublisherShareErrorMessageIsDisplayed = function () {
    it("Validate that subtotal of own less than collect publisher share error message is correctly displayed ", function () {
        expect(pages.create_deal_scope.elems.subtotalOwnPublisherShareErrorMessage.isDisplayed);
        pages.create_deal_scope.validateSubtotalOfOwnLessThanCollectPublisherShareWarningMessage();
    });
};

exports.validateChainTotalOfOwnPublisherShareErrorIsDisplayed = function () {
    it("Validate that chain total of own publisher share error message is correctly displayed ", function () {
        expect(pages.create_deal_scope.elems.chainTotalOwnPublisherShareErrorMessage.isDisplayed);
        pages.create_deal_scope.validateChainTotalOfOwnPublisherShareWarningMessage();
    });
};

exports.validateChainTotalOfOwnLessThanCollectPublisherShareErrorIsDisplayed = function () {
    it("Validate that chain total of own cannot be less than collect publisher share error message is correctly displayed ", function () {
        expect(pages.create_deal_scope.elems.chainSubtotalOfCollectCannotGreaterThanOwnErrorMessage.isDisplayed);
        pages.create_deal_scope.validateChainTotalOfOwnPublisherCannotBeLessThanCollectShareWarningMessage();
    });
};

exports.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed = function () {
    it("Validate that 3 decimals exceeded publisher share warning message is not displayed ", function () {
        expect(pages.create_deal_scope.elems.decimalPlacesPublisherShareErrorMessage.isPresent()).toBeFalsy();
    });
};

exports.clickOnAddPublisherShareSet = function (more) {
    it("Open publisher share set form", function() {
        pages.create_deal_scope.clickOnAddPublisherShareSetLink(more);
    });
};

exports.clickOnYesSocietyAwardCreditPublisherShareSet = function () {
    it("Click on the yes society award credit pss and check it is selected", function () {
        pages.create_deal_scope.clickOnTheYesSocietyAwardCreditPublisherShareSet();
        var test = pages.create_deal_scope.elems.yesSocietyAwardCreditPss.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNoSocietyAwardCreditPublisherShareSet = function () {
    it("Click on the no society award credit pss and check it is selected", function () {
        pages.create_deal_scope.clickOnTheNoSocietyAwardCreditPublisherShareSet();
        var test = pages.create_deal_scope.elems.noSocietyAwardCreditPss.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.validatePlaceholdersForPublisherNameEAndAM = function () {
    it("Validate the placeholders for publisher name E and AM ", function () {
        pages.create_deal_scope.validateThePlaceholdersForPublisherNameE();
        pages.create_deal_scope.validateThePlaceholdersForPublisherNameAM();
    });
};

exports.validatePublisherNameTooltipEOrPAIcon = function () {
    it("Validate publisher name E or PA icon message ", function () {
        pages.create_deal_scope.validateThePublisherNameTooltipEOrPAIcon();
    });
};

exports.validatePublisherNameTooltipAMIcon = function () {
    it("Validate publisher name AM icon message ", function () {
        pages.create_deal_scope.validateThePublisherNameTooltipAMIcon();
    });
};

exports.validateErrorMessagePublisherRequired = function () {
    it("Validate the error message for publisher required ", function () {
        pages.create_deal_scope.validateTheErrorMessagePublisherRequired();
    });
};

exports.enterPublisherSearchTerms = function (i, j, value) {
    it(
        'Chain #' + (i + 1) + ', publisher #' + (j + 1) +
        ' - Enter search terms (' + value + ')', function() {
            pages.create_deal_scope.enterPublisherSearchTerms(i, j, value);
        }
    );
};

exports.fillIntoFirstPublisherNameField = function (publisherName) {
    it("Fill in first publisher name field", function () {
        pages.create_deal_scope.fillInFirstPublisherNameField(publisherName);
    });
};

exports.selectPublisherSearchResultByIndex = function (i) {
    it('Select publisher search result #' + (i + 1), function() {
        pages.create_deal_scope.selectPublisherSearchResultByIndex(i);
    });
};

exports.selectRandomPublisherNameDropDownValue = function () {
    it("Select random publisher name drop down value", function () {
        pages.create_deal_scope.selectRandomPublisherNameDropDown();
    });
};

exports.enterOwnPublisherShare = function (i, j, value) {
    it(
        'Chain #' + (i + 1) + ', publisher #' + (j + 1) +
        ' - Enter own publisher share (' + value + ')', function() {
            pages.create_deal_scope.enterOwnPublisherShare(i, j, value);
        }
    );
};

exports.enterCollectPublisherShare = function (i, j, value) {
    it(
        'Chain #' + (i + 1) + ', publisher #' + (j + 1) +
        ' - Enter collect publisher share (' + value + ')', function() {
            pages.create_deal_scope.enterCollectPublisherShare(i, j, value);
        }
    );
};

exports.fillIntoFirstPublisherNameCollectField = function () {
    it("Fill into first publisher name collect field random value ", function () {
        pages.create_deal_scope.fillInFirstPublisherNameCollectPercent();
    });
};

exports.fillIntoFirstPublisherNameAMCollectField = function () {
    it("Fill into first publisher name AM collect percent random value", function () {
        pages.create_deal_scope.fillInFirstPublisherNameAMCollectPercent();
    });
};

exports.fillIntoFirstPublisherNameOwnField = function () {
    it("Fill into first publisher name own field random value", function () {
        pages.create_deal_scope.fillInFirstPublisherNameOwnPercent();
    });
};

exports.fillIntoFirstPublisherNameCollectFieldSpecificValue = function (percent) {
    it("Fill into first publisher name collect field random value ", function () {
        pages.create_deal_scope.fillInFirstPublisherNameCollectPercentSpecificValue(percent);
    });
};

exports.fillIntoFirstPublisherNameAMCollectFieldSpecificValue = function (percent) {
    it("Fill into first publisher name AM collect percent random value", function () {
        pages.create_deal_scope.fillInFirstPublisherNameAMCollectPercentSpecificValue(percent);
    });
};

exports.fillIntoFirstPublisherNameOwnFieldSpecificValue = function (percent) {
    it("Fill into first publisher name own field random value", function () {
        pages.create_deal_scope.fillInFirstPublisherNameOwnPercentSpecificValue(percent);
    });
};

exports.fillIntoFirstPublisherNameAMField = function (publisherNameAM) {
    it("Fill into first publisher name AM field", function () {
        pages.create_deal_scope.fillInFirstPublisherNameAMField(publisherNameAM);
    });
};

exports.clearIntoFirstPublisherNameField = function () {
    it("Clear into first publisher name field", function () {
        pages.create_deal_scope.clearFirstPublisherNameField();
    });
};

exports.clearIntoFirstPublisherNameAMField = function () {
    it("Clear into first publisher name AM field", function () {
        pages.create_deal_scope.clearFirstPublisherNameAMField();
    });
};

exports.clearIntoFirstPublisherNameAMCollectField = function () {
    it("Clear into first publisher name AM collect percent", function () {
        pages.create_deal_scope.clearFirstPublisherNameAMCollectPercent();
    });
};

exports.clearIntoFirstPublisherNameOwnField = function () {
    it("Clear into first publisher name own field", function () {
        pages.create_deal_scope.clearInFirstPublisherNameOwnPercent();
    });
};

exports.clearIntoFirstPublisherNameCollectField = function () {
    it("Clearl into first publisher name collect field ", function () {
        pages.create_deal_scope.clearInFirstPublisherNameCollectPercent();
    });
};

exports.saveThePublisherShareSet = function () {
    it("Save the publisher share set", function () {
        pages.create_deal_scope.saveThePublisherShareSets();
    });
};

exports.cancelThePublisherShareSet = function () {
    it("Cancel the publisher share set", function () {
        pages.create_deal_scope.cancelPublisherShareSet();
    });
};

exports.selectSpecificPublisherNameDropDown = function () {
    it("Select specific value publisher name drop down", function () {
        pages.create_deal_scope.selectTheSpecificPublisherNameDropDown("(53026414)\nWB MUSIC CORP.");
    });
};

exports.selectDesiredPublisherTypeEOrPADropDown = function (publisherType) {
    it("Select desired publisher type E or PA from drop down", function () {
        pages.create_deal_scope.selectSpecificOptionEOrPAPublisherType(publisherType);
    });
};

exports.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA = function () {
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
};

exports.shareScopeToAllContractPeriods = function () {
    it("Click on share scope ", function () {
        pages.create_deal_scope.shareTheScope();
        pages.create_deal_scope.selectAllContractPeriodsShareScopeModalDialog();
        pages.create_deal_scope.clickOnTheDoneShareScopeModalDialog();
        pages.create_deal_scope.waitForAjax();
    });
};

exports.clickAddChainLink = function () {
    it("Click on add chain link", function () {
        pages.create_deal_scope.clickOnAddChainLink();
        pages.create_deal_scope.waitForAjax();
    });
};

exports.selectDesiredPublisherTypeEOrPADropDownChainI = function (publisherType, i) {
    it("Select desired publisher type E or PA from drop down", function () {
        pages.create_deal_scope.selectSpecificOptionEOrPAPublisherTypeChainI(publisherType, i);
    });
};

exports.fillIntoPublisherNameAMFieldChainI = function (i) {
    it("Fill into publisher name AM field chain i ", function () {
        pages.create_deal_scope.fillPublisherNameAMFieldChainI(i);
    });
};

exports.selectSpecificPublisherNameDropDownChainI = function (i) {
    it("Select specific value publisher name drop down chain i", function () {
        pages.create_deal_scope.selectSpecificPublisherNameDropDownChainI("(53026414)\nWB MUSIC CORP.", i);
    });
};

exports.fillIntoPublisherNameAMCollectFieldChainI = function (i) {
    it("Fill into publisher name AM collect chain i percent random value", function () {
        pages.create_deal_scope.fillPublisherNameAMCollectPercentChainI(i);
    });
};

exports.validateDeleteChainIIconPublisherShare = function (i) {
    it("Validate delete chain i icon publisher share is present ", function () {
        pages.create_deal_scope.validateTheDeleteIconChainIPublisherShareIsPresent(i);
    });
};

exports.validateThePublisherNameDropDownHasNoResults = function () {
    it("Validate that publisher name drop down has no results ", function () {
        pages.create_deal_scope.validatePublisherNameDropDownHasNoResults();
    });
};

exports.deleteChainIPublisherShare = function (i) {
    it("Delete chain i from publisher share set ", function () {
        pages.create_deal_scope.clickOnDeleteIconChainI(i);
        pages.create_deal_scope.confirmOnDeleteModalDialog();
    });
};

exports.clickPublisherSharesSetArea = function () {
    it("Click on publisher shares set area ", function () {
        pages.create_deal_scope.clickOnPublisherShareSetArea();
    });
};

exports.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI = function (i) {
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
};

exports.clickOnAddOverrideIconPss = function () {
    it("Click on add override icon publisher share set ", function () {
        pages.create_deal_scope.clickOnTheAddOverrideIconPss();
    });
};

exports.selectSubPublisherOverridePss = function (subPublisherName, subPublisherSelected) {
    it("Select the sub publisher override pss ", function () {
        pages.create_deal_scope.selectTheSubPublisherOverridePss(subPublisherName, subPublisherSelected);
    });
};

exports.selectSubPublisherOverrideTerritoryPss = function (territory) {
    it("Select the sub publisher override territory pss ", function () {
        pages.create_deal_scope.selectTheSubPublisherOverrideTerritoryPss(territory);
    });
};

exports.clickOnDoneSubPublisherOverridePss = function () {
    it("Click on the done sub publisher override pss ", function () {
        pages.create_deal_scope.clickOnTheDoneSubPublisherOverridePss();
    });
};

exports.clickOnCancelSubPublisherOverridePss = function () {
    it("Click on the cancel sub publisher override pss ", function () {
        pages.create_deal_scope.clickOnTheCancelSubPublisherOverridePss();
    });
};

exports.clickOnAddAnotherSubPublisherOverridePss = function () {
    it("Click on the add anothe sub publisher override pss ", function () {
        pages.create_deal_scope.clickOnTheAddAnotherSubPublisherOverridePss();
    });
};

exports.itAddPublisherShare = function () {
    describe("Add publisher share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
        steps.createDealScope.clickOnAddPublisherShareSet();
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
        steps.createDealScope.selectSpecificPublisherNameDropDown();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
    });
};

exports.itAddPublisherShareWithSocietyAwardCredit = function () {
    describe("Add publisher share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
        steps.createDealScope.clickOnAddPublisherShareSet();
        steps.createDealScope.clickOnYesSocietyAwardCreditPublisherShareSet();
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
        steps.createDealScope.selectSpecificPublisherNameDropDown();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
    });
};

exports.itOverridePublisherShare = function (subPublisherName, subPublisherSelected, territory) {
    describe("Override publisher share set", function () {
        steps.createDealScope.clickOnAddOverrideIconPss();
        steps.createDealScope.selectSubPublisherOverridePss(subPublisherName, subPublisherSelected);
        steps.createDealScope.selectSubPublisherOverrideTerritoryPss(territory);
        steps.base.scrollIntoView("Done override publisher share set", pages.create_deal_scope.elems.doneOverridePublisherShareSetButton);
        steps.createDealScope.clickOnDoneSubPublisherOverridePss();
    });
};

exports.itAddPublisherSharePATypeWithMultipleThreeChains = function (i) {
    describe("Add publisher share set with three chains", function () {
        steps.createDealScope.clickAddChainLink();
        steps.createDealScope.selectDesiredPublisherTypeEOrPADropDownChainI("PA", i);
        steps.createDealScope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.createDealScope.fillIntoPublisherNameAMFieldChainI(i);
        steps.createDealScope.selectSpecificPublisherNameDropDownChainI(i);
        steps.createDealScope.fillIntoPublisherNameAMCollectFieldChainI(i);
    });
};

exports.itAddPublisherShareWithMultipleThreeChains = function (i) {
    describe("Add publisher share set with three chains", function () {
        steps.createDealScope.clickAddChainLink();
        steps.createDealScope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.createDealScope.fillIntoPublisherNameAMFieldChainI(i);
        steps.createDealScope.selectSpecificPublisherNameDropDownChainI(i);
        steps.createDealScope.fillIntoPublisherNameAMCollectFieldChainI(i);
    });
};

exports.itAddSimpleScope = function () {
    describe("Add simple scope", function () {
        steps.createDealScope.addSimpleScope();
        steps.createDealScope.selectCountry();
    });
};

exports.itCheckVisualDesignPublisherShare = function () {
    describe("Check visual design for publsiher share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
        steps.createDealScope.validateNoPublisherShareWarningIsDisplayed();
        steps.createDealScope.clickOnAddPublisherShareSet();
        steps.createDealScope.validatePlaceholdersForPublisherNameEAndAM();
        steps.createDealScope.validateErrorMessagePublisherRequired();
        steps.createDealScope.validatePublisherNameTooltipEOrPAIcon();
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.validatePublisherNameTooltipAMIcon();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("wb music corp");
        steps.createDealScope.selectSpecificPublisherNameDropDown();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
        steps.createDealScope.saveThePublisherShareSet();
    });
};

exports.itCheckInvalidCasesPublisherShare = function () {
    describe("Check invalid cases for no publisher and invalid publisher name and IPI share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.create_deal_scope.elems.addPublisherShareSetLink);
        //check validation error - publisher is required
        steps.createDealScope.validateNoPublisherShareWarningIsDisplayed();
        steps.createDealScope.clickOnAddPublisherShareSet();
        //check validation for invalid publisher name and invalid IPI number
        steps.createDealScope.fillIntoFirstPublisherNameField("lkjhg");
        steps.createDealScope.validateThePublisherNameDropDownHasNoResults();
        steps.createDealScope.clearIntoFirstPublisherNameField();
        steps.createDealScope.fillIntoFirstPublisherNameField("59684");
        steps.createDealScope.validateThePublisherNameDropDownHasNoResults();
        steps.createDealScope.clearIntoFirstPublisherNameField();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("poi");
        steps.createDealScope.validateThePublisherNameDropDownHasNoResults();
        steps.createDealScope.clearIntoFirstPublisherNameAMField();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("6985");
        steps.createDealScope.validateThePublisherNameDropDownHasNoResults();
        steps.createDealScope.clearIntoFirstPublisherNameAMField();
        //add valid publisher name E and AM searched by IPI number
        steps.createDealScope.fillIntoFirstPublisherNameField("1234");
        steps.createDealScope.selectRandomPublisherNameDropDownValue();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("4567");
        steps.createDealScope.selectRandomPublisherNameDropDownValue();
    });
};


exports.itCheckInvalid3DecimalCasesPublisherShare = function () {
    describe("Check validation 3 decimal places publisher shares set", function () {
        //check validation for decimal shares >3
        steps.base.scrollIntoView("First publisher name field", pages.create_deal_scope.elems.firstPublisherNameField);
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("3.3454");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.5785");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameCollectField();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.5986");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameAMCollectField();
        //fill exact 3 decimals and check it is ok
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("33.345");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.123");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameCollectField();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.324");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameAMCollectField();
        //fill exact 2 decimals and check it is ok
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("33.34");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.12");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameCollectField();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.39");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameAMCollectField();
        //fill exact 1 decimals and check it is ok
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("33.3");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("3.3");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameCollectField();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("4.4");
        steps.createDealScope.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameAMCollectField();
    });
};

exports.itCheckSubtotalValidationsCasesPublisherShare = function () {
    describe("Check validation for subtotals publisher shares set", function () {
        steps.base.scrollIntoView("First publisher name field", pages.create_deal_scope.elems.firstPublisherNameField);
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("120");
        steps.createDealScope.validateSubtotalOfOwnPublisherShareErrorMessageIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("40");
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("50");
        steps.createDealScope.validateSubtotalOfOwnLessThanCollectPublisherShareErrorMessageIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.clearIntoFirstPublisherNameCollectField();
    });
};

exports.itCheckTotalsValidationsCasesPublisherShare = function () {
    describe("Check validation for totals publisher shares set", function () {
        steps.base.scrollIntoView("First publisher name field", pages.create_deal_scope.elems.firstPublisherNameField);
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("120");
        steps.createDealScope.validateChainTotalOfOwnPublisherShareErrorIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("75");
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("55");
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("25");
        steps.createDealScope.validateChainTotalOfOwnLessThanCollectPublisherShareErrorIsDisplayed();
        steps.createDealScope.clearIntoFirstPublisherNameOwnField();
        steps.createDealScope.clearIntoFirstPublisherNameCollectField();
        steps.createDealScope.clearIntoFirstPublisherNameAMCollectField();
        steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("88");
        steps.createDealScope.fillIntoFirstPublisherNameCollectFieldSpecificValue("55");
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("25");
        steps.createDealScope.saveThePublisherShareSet();
    });
};

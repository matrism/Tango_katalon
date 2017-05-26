"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealScope = exports;

exports.openNewScopeForm = function () {
    it('Open a new scope form', function () {
        pages.createDealScope.addScopeForm();
    });
};

exports.addSimpleScope = function () {
    it("Add simple scope", function () {
        pages.createDealScope.addScopeForm();
        pages.createDealScope.selectRandomContractTypeScope();
        pages.createDealScope.waitForAjax();
    });
};

exports.itAddNewContractPeriod = function () {

    it("Add new contract Period", function () {
        pages.createDealScope.clickNewContractPeriodButton();
        //   pages.createDealScope.waitForContractPeriodToBeCreated();
    })

};

exports.sharePublisherShareSet = function () {
    it("Share publisher share set ", function () {
        pages.createDealScope.shareThePublisherShareSet();
    });
};

exports.saveSharePublisherShareSet = function () {
    it("Save the share publisher share set ", function () {
        pages.createDealScope.saveThePublisherShareSets();
        pages.createDealScope.waitForAjax();
    });
};

exports.selectContractType = function (value) {
    it('Select contract type (' + value + ')', function () {
        pages.createDealScope.selectContractTypeScope(value);
    });
};

exports.addSpecificScope = function (contractType) {
    it("Add simple scope", function () {
        pages.createDealScope.addScopeForm();
        pages.createDealScope.selectContractTypeScope(contractType);
        pages.createDealScope.waitForAjax();
        pages.createDealScope.addTerritoryByTypingToScope();
        pages.createDealScope.selectRandomCountry();
        pages.createDealScope.waitForAjax();
    });
};

exports.addRandomScope = function () {
    it("Add random scope", function () {
        pages.createDealScope.addScopeForm();
        pages.createDealScope.selectRandomContractTypeScope();
        pages.createDealScope.waitForAjax();
        pages.createDealScope.addTerritoryByTypingToScope();
        pages.createDealScope.selectRandomCountry();
        pages.createDealScope.waitForAjax();
    });
};

exports.enterTerritoryOfControlSearchTerms = function (value) {
    it('Enter territory of control search terms (' + value + ')', function () {
        pages.createDealScope.enterTerritoryOfControlSearchTerms(value);
    });
};

exports.selectTerritoryOfControlSearchResultByIndex = function (i) {
    it('Select territory of control search result #' + (i + 1), function () {
        pages.createDealScope.selectTerritoryOfControlSearchResultByIndex(i);
    });
};

exports.addSpecificScopeTypeAndTerritory = function (contractType, territory) {
    it('Add simple scope (' + contractType + ',' + territory + ')', function () {
        pages.createDealScope.addScopeForm();
        pages.createDealScope.selectContractTypeScope(contractType);
        pages.createDealScope.waitForAjax();
        pages.createDealScope.addTheSpecificTerritoryByTypingToScope(territory);
        pages.createDealScope.selectSpecificCountry(territory);
        pages.createDealScope.waitForAjax();
    });
};

exports.addScopeTypeAndTerritory = function (contractType, territory) {
    it("Add simple scope", function () {
        pages.createDealScope.addScopeForm();
        pages.createDealScope.selectContractTypeScope(contractType);
        pages.createDealScope.waitForAjax();
        pages.createDealScope.addTheSpecificTerritoryByTypingToScope(territory);
        pages.createDealScope.selectRandomCountry();
        pages.createDealScope.waitForAjax();
    });
};

exports.selectCountry = function () {
    it("Select country", function () {
        pages.createDealScope.addTerritoryByTypingToScope();
        pages.createDealScope.selectRandomCountry();
        pages.createDealScope.waitForAjax();
    });
};

exports.validateNoPublisherShareWarningIsDisplayed = function () {
    it("Validate that no publisher share warning message is correctly displayed ", function () {
        expect(pages.createDealScope.elems.noPublisherShareWarningIcon.isDisplayed);
        pages.createDealScope.validateTheNoPublisherShareWarningMessage();
    });
};

exports.validate3DecimalsExceededPublisherShareWarningIsDisplayed = function () {
    it("Validate that 3 decimals exceeded publisher share warning message is correctly displayed ", function () {
        expect(pages.createDealScope.elems.decimalPlacesPublisherShareErrorMessage.isDisplayed);
        pages.createDealScope.validateThe3DecimalsExceededPublisherShareWarningMessage();
    });
};

exports.validateSubtotalOfOwnPublisherShareErrorMessageIsDisplayed = function () {
    it("Validate that subtotal of own  publisher share error message is correctly displayed ", function () {
        expect(pages.createDealScope.elems.subtotalOwnPublisherShareErrorMessage.isDisplayed);
        pages.createDealScope.validateSubtotalOfOwnPublisherShareWarningMessage();
    });
};

exports.validateSubtotalOfOwnLessThanCollectPublisherShareErrorMessageIsDisplayed = function () {
    it("Validate that subtotal of own less than collect publisher share error message is correctly displayed ", function () {
        expect(pages.createDealScope.elems.subtotalOwnPublisherShareErrorMessage.isDisplayed);
        pages.createDealScope.validateSubtotalOfOwnLessThanCollectPublisherShareWarningMessage();
    });
};

exports.validateChainTotalOfOwnPublisherShareErrorIsDisplayed = function () {
    it("Validate that chain total of own publisher share error message is correctly displayed ", function () {
        expect(pages.createDealScope.elems.chainTotalOwnPublisherShareErrorMessage.isDisplayed);
        pages.createDealScope.validateChainTotalOfOwnPublisherShareWarningMessage();
    });
};

exports.validateChainTotalOfOwnLessThanCollectPublisherShareErrorIsDisplayed = function () {
    it("Validate that chain total of own cannot be less than collect publisher share error message is correctly displayed ", function () {
        expect(pages.createDealScope.elems.chainSubtotalOfCollectCannotGreaterThanOwnErrorMessage.isDisplayed);
        pages.createDealScope.validateChainTotalOfOwnPublisherCannotBeLessThanCollectShareWarningMessage();
    });
};

exports.validate3DecimalsExceededPublisherShareWarningIsNotDisplayed = function () {
    it("Validate that 3 decimals exceeded publisher share warning message is not displayed ", function () {
        expect(pages.createDealScope.elems.decimalPlacesPublisherShareErrorMessage.isPresent()).toBeFalsy();
    });
};

exports.clickOnAddPublisherShareSet = function (options) {
    it("Open publisher share set form", function () {
        pages.createDealScope.clickOnAddPublisherShareSetLink(options);
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnYesSocietyAwardCreditPublisherShareSet = function () {
    it("Click on the yes society award credit pss and check it is selected", function () {
        pages.createDealScope.clickOnTheYesSocietyAwardCreditPublisherShareSet();
        pages.createDealScope.waitForAjax();
        var test = pages.createDealScope.elems.yesSocietyAwardCreditPss.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.clickOnNoSocietyAwardCreditPublisherShareSet = function () {
    it("Click on the no society award credit pss and check it is selected", function () {
        pages.createDealScope.clickOnTheNoSocietyAwardCreditPublisherShareSet();
        var test = pages.createDealScope.elems.noSocietyAwardCreditPss.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.validatePlaceholdersForPublisherNameEAndAM = function () {
    it("Validate the placeholders for publisher name E and AM ", function () {
        pages.createDealScope.validateThePlaceholdersForPublisherNameE();
        pages.createDealScope.validateThePlaceholdersForPublisherNameAM();
    });
};

exports.validatePublisherNameTooltipEOrPAIcon = function () {
    it("Validate publisher name E or PA icon message ", function () {
        pages.createDealScope.validateThePublisherNameTooltipEOrPAIcon();
    });
};

exports.validatePublisherNameTooltipAMIcon = function () {
    it("Validate publisher name AM icon message ", function () {
        pages.createDealScope.validateThePublisherNameTooltipAMIcon();
    });
};

exports.validateErrorMessagePublisherRequired = function () {
    it("Validate the error message for publisher required ", function () {
        pages.createDealScope.validateTheErrorMessagePublisherRequired();
    });
};

addBasicStep(exports, pages.createDealScope, 'Select publisher role');

exports.enterPublisherSearchTerms = function (i, j, value) {
    it(
        'Chain #' + (i + 1) + ', publisher #' + (j + 1) +
        ' - Enter search terms (' + value + ')', function () {
            pages.createDealScope.enterPublisherSearchTerms(i, j, value);
        }
    );
};

exports.fillIntoFirstPublisherNameField = function (publisherName) {
    it("Fill in first publisher name field", function () {
        pages.createDealScope.fillInFirstPublisherNameField(publisherName);
    });
};

exports.selectPublisherSearchResultByIndex = function (i) {
    it('Select publisher search result #' + (i + 1), function () {
        pages.createDealScope.selectPublisherSearchResultByIndex(i);
    });
};

exports.selectRandomPublisherNameDropDownValue = function () {
    it("Select random publisher name drop down value", function () {
        pages.createDealScope.selectRandomPublisherNameDropDown();
    });
};

exports.enterOwnPublisherShare = function (i, j, value) {
    it(
        'Chain #' + (i + 1) + ', publisher #' + (j + 1) +
        ' - Enter own publisher share (' + value + ')', function () {
            pages.createDealScope.enterOwnPublisherShare(i, j, value);
        }
    );
};

exports.enterCollectPublisherShare = function (i, j, value) {
    it(
        'Chain #' + (i + 1) + ', publisher #' + (j + 1) +
        ' - Enter collect publisher share (' + value + ')', function () {
            pages.createDealScope.enterCollectPublisherShare(i, j, value);
        }
    );
};

exports.fillIntoFirstPublisherNameCollectField = function () {
    it("Fill into first publisher name collect field random value ", function () {
        pages.createDealScope.fillInFirstPublisherNameCollectPercent();
    });
};

exports.fillIntoFirstPublisherNameAMCollectField = function () {
    it("Fill into first publisher name AM collect percent random value", function () {
        pages.createDealScope.fillInFirstPublisherNameAMCollectPercent();
    });
};

exports.fillIntoFirstPublisherNameOwnField = function () {
    it("Fill into first publisher name own field random value", function () {
        pages.createDealScope.fillInFirstPublisherNameOwnPercent();
    });
};

exports.fillIntoFirstPublisherNameCollectFieldSpecificValue = function (percent) {
    it("Fill into first publisher name collect field random value ", function () {
        pages.createDealScope.fillInFirstPublisherNameCollectPercentSpecificValue(percent);
    });
};

exports.fillIntoFirstPublisherNameAMCollectFieldSpecificValue = function (percent) {
    it("Fill into first publisher name AM collect percent random value", function () {
        pages.createDealScope.fillInFirstPublisherNameAMCollectPercentSpecificValue(percent);
    });
};

exports.fillIntoFirstPublisherNameOwnFieldSpecificValue = function (percent) {
    it("Fill into first publisher name own field random value", function () {
        pages.createDealScope.fillInFirstPublisherNameOwnPercentSpecificValue(percent);
    });
};

exports.fillIntoFirstPublisherNameAMField = function (publisherNameAM) {
    it("Fill into first publisher name AM field", function () {
        pages.createDealScope.fillInFirstPublisherNameAMField(publisherNameAM);
    });
};

exports.clearIntoFirstPublisherNameField = function () {
    it("Clear into first publisher name field", function () {
        pages.createDealScope.clearFirstPublisherNameField();
    });
};

exports.clearIntoFirstPublisherNameAMField = function () {
    it("Clear into first publisher name AM field", function () {
        pages.createDealScope.clearFirstPublisherNameAMField();
    });
};

exports.clearIntoFirstPublisherNameAMCollectField = function () {
    it("Clear into first publisher name AM collect percent", function () {
        pages.createDealScope.clearFirstPublisherNameAMCollectPercent();
    });
};

exports.clearIntoFirstPublisherNameOwnField = function () {
    it("Clear into first publisher name own field", function () {
        pages.createDealScope.clearInFirstPublisherNameOwnPercent();
    });
};

exports.clearIntoFirstPublisherNameCollectField = function () {
    it("Clearl into first publisher name collect field ", function () {
        pages.createDealScope.clearInFirstPublisherNameCollectPercent();
    });
};

exports.saveThePublisherShareSet = function () {
    it("Save the publisher share set", function () {
        pages.createDealScope.saveThePublisherShareSets();
    });
};

exports.cancelThePublisherShareSet = function () {
    it("Cancel the publisher share set", function () {
        pages.createDealScope.cancelPublisherShareSet();
    });
};

exports.confirmModalDialogAction = function () {
    it("Confirm the modal dialog action ", function () {
        pages.createDealScope.confirmOnTheModalDialog();
        pages.createDealScope.waitForAjax();
    });
};

exports.selectSpecificPublisherNameDropDownValue = function (publisherName) {
    it("Select specific value publisher name drop down", function () {
        pages.createDealScope.selectTheSpecificPublisherNameDropDown(publisherName);
    });
};

exports.selectRandomPublisherNameDropDownValue = function (publisherName) {
    it("Selectrandom value publisher name drop down", function () {
        pages.createDealScope.selectRandomPublisherNameDropDown();
    });
};

exports.selectSpecificPublisherNameDropDown = function () {
    it("Select specific value publisher name drop down", function () {
        pages.createDealScope.selectTheSpecificPublisherNameDropDown("music");
    });
};

exports.selectDesiredPublisherTypeEOrPADropDown = function (publisherType) {
    it("Select desired publisher type E or PA from drop down", function () {
        pages.createDealScope.selectSpecificOptionEOrPAPublisherType(publisherType);
    });
};

exports.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA = function () {
    it("Fill first publisher name fields based on publisher type E or PA", function () {
        pages.createDealScope.elems.firstPublisherTypeValue.getText()
            .then(function (promise) {
                console.log("Publisher type is: " + promise);
                switch (promise) {
                    case "E":
                        console.log("We are on the E case");
                        pages.createDealScope.fillInFirstPublisherNameField("test");
                        pages.createDealScope.selectRandomPublisherNameDropDown();
                        pages.createDealScope.fillInFirstPublisherNameOwnPercentSpecificValue("30");
                        pages.createDealScope.fillInFirstPublisherNameCollectPercentSpecificValue("20");
                        //pages.createDealScope.fillInFirstPublisherNameCollectPercent();
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.createDealScope.fillInFirstPublisherNameField();
                        pages.createDealScope.selectRandomPublisherNameDropDown();
                        pages.createDealScope.fillInFirstPublisherNameCollectPercent();
                        break;
                }
            });
    });
};

exports.shareScopeToAllContractPeriods = function () {
    it("Click on share scope ", function () {
        pages.createDealScope.shareTheScope();
        pages.createDealScope.selectAllContractPeriodsShareScopeModalDialog();
        pages.createDealScope.clickOnTheDoneShareScopeModalDialog();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnShareScope = function () {
    it('Click on share scope', function () {
        pages.createDealScope.shareTheScope();
    });
};

exports.selectAllContractPeriodsShareScopeModalDialog = function () {
    it('Select all contract periods', function () {
        pages.createDealScope.selectAllContractPeriodsShareScopeModalDialog();
    });
};

exports.clickOnTheDoneShareScopeModalDialog = function () {
    it('Click on the done share scope on modal dialog', function () {
        pages.createDealScope.clickOnTheDoneShareScopeModalDialog();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickAddChainLink = function () {
    it("Click on add chain link", function () {
        pages.createDealScope.clickOnAddChainLink();
        pages.createDealScope.waitForAjax();
    });
};

exports.selectDesiredPublisherTypeEOrPADropDownChainI = function (publisherType, i) {
    it("Select desired publisher type E or PA from drop down", function () {
        pages.createDealScope.selectSpecificOptionEOrPAPublisherTypeChainI(publisherType, i);
    });
};

exports.fillIntoPublisherNameAMFieldChainI = function (i) {
    it("Fill into publisher name AM field chain i ", function () {
        pages.createDealScope.fillPublisherNameAMFieldChainI(i);
    });
};

exports.selectSpecificPublisherNameDropDownChainIValue = function (value, i) {
    it("Select specific value publisher name drop down chain i", function () {
        pages.createDealScope.selectSpecificPublisherNameDropDownChainI(value, i);
    });
};

exports.selectSpecificPublisherNameDropDownChainI = function (i) {
    it("Select specific value publisher name drop down chain i", function () {
        pages.createDealScope.selectSpecificPublisherNameDropDownChainI('music', i);
    });
};

exports.fillIntoPublisherNameAMCollectFieldChainI = function (i) {
    it("Fill into publisher name AM collect chain i percent random value", function () {
        pages.createDealScope.fillPublisherNameAMCollectPercentChainI(i);
    });
};

exports.validateDeleteChainIIconPublisherShare = function (i) {
    it("Validate delete chain i icon publisher share is present ", function () {
        pages.createDealScope.validateTheDeleteIconChainIPublisherShareIsPresent(i);
    });
};

exports.validateThePublisherNameDropDownHasNoResults = function () {
    it("Validate that publisher name drop down has no results ", function () {
        pages.createDealScope.validatePublisherNameDropDownHasNoResults();
    });
};

exports.deleteChainIPublisherShare = function (i) {
    it("Delete chain i from publisher share set ", function () {
        pages.createDealScope.clickOnDeleteIconChainI(i);
        pages.createDealScope.confirmOnDeleteModalDialog();
    });
};

exports.clickPublisherSharesSetArea = function () {
    it("Click on publisher shares set area ", function () {
        pages.createDealScope.clickOnPublisherShareSetArea();
    });
};

exports.selectTheRandomPublisherNameDropDownChainI = function (i) {
    it("Select random publisher name drop down chain " + i, function () {
        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
    });
};

exports.fillIntoPublisherNameOwnPercentFieldChainISpecificValue = function (i, percent) {
    it("Fill into the publisher name own percent field specific value chain " + i, function () {
        pages.createDealScope.fillPublisherNameOwnPercentFieldChainISpecificValue(i, percent);
    });
};

exports.fillIntoPublisherNameCollectPercentFieldChainISpecificValue = function (i, percent) {
    it("Fill into the publisher name collect percent field specific value chain " + i, function () {
        pages.createDealScope.fillPublisherNameCollectPercentFieldChainISpecificValue(i, percent);
    });
};

exports.fillIntoPublisherNameAMCollectPercentChainISpecificValue = function (i, percent) {
    it("Fill into the publisher name AM collect percent field specific value chain " + i, function () {
        pages.createDealScope.fillPublisherNameAMCollectPercentChainISpecificValue(i, percent);
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
                        pages.createDealScope.fillPublisherNameFieldChainI(i);
                        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
                        pages.createDealScope.fillPublisherNameOwnPercentFieldChainISpecificValue(i, "35");
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainISpecificValue(i, "25");
                        //pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.createDealScope.fillPublisherNameFieldChainI(i);
                        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
                        break;
                }
            });
    });
};

exports.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainIValue = function (i, publisherEName) {
    it("Fill publisher name fields chain i based on publisher type E or PA", function () {
        browser.driver.findElement(By.css("#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(" + i + ") div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow")).getText()
            .then(function (promise) {
                console.log("Publisher type is: " + promise);
                switch (promise) {
                    case "E":
                        console.log("We are on the E case");
                        pages.createDealScope.fillPublisherNameFieldChainISpecificValue(i, publisherEName);
                        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
                        pages.createDealScope.fillPublisherNameOwnPercentFieldChainISpecificValue(i, "35");
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainISpecificValue(i, "25");
                        //pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.createDealScope.fillPublisherNameFieldChainI(i);
                        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
                        break;
                }
            });
    });
};

exports.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainIValuePercentCollect = function (i, publisherEName, percent, collect) {
    it("Fill publisher name fields chain i based on publisher type E or PA", function () {
        browser.driver.findElement(By.css("#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(" + i + ") div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow")).getText()
            .then(function (promise) {
                console.log("Publisher type is: " + promise);
                switch (promise) {
                    case "E":
                        console.log("We are on the E case");
                        pages.createDealScope.fillPublisherNameFieldChainISpecificValue(i, publisherEName);
                        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
                        pages.createDealScope.fillPublisherNameOwnPercentFieldChainISpecificValue(i, percent);
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainISpecificValue(i, collect);
                        //pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.createDealScope.fillPublisherNameFieldChainI(i);
                        pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
                        break;
                }
            });
    });
};

exports.clickOnAddOverrideIconPss = function () {
    it("Click on add override icon publisher share set ", function () {
        pages.createDealScope.clickOnTheAddOverrideIconPss();
    });
};

exports.selectSubPublisherOverridePss = function (subPublisherName, subPublisherSelected) {
    it("Select the sub publisher override pss ", function () {
        pages.createDealScope.selectTheSubPublisherOverridePss(subPublisherName, subPublisherSelected);
    });
};

exports.selectSubPublisherOverrideTerritoryPss = function (territory) {
    it("Select the sub publisher override territory pss ", function () {
        pages.createDealScope.selectTheSubPublisherOverrideTerritoryPss(territory);
    });
};

exports.clickOnDoneSubPublisherOverridePss = function () {
    it("Click on the done sub publisher override pss ", function () {
        pages.createDealScope.clickOnTheDoneSubPublisherOverridePss();
    });
};

exports.clickOnCancelSubPublisherOverridePss = function () {
    it("Click on the cancel sub publisher override pss ", function () {
        pages.createDealScope.clickOnTheCancelSubPublisherOverridePss();
    });
};

exports.clickOnAddAnotherSubPublisherOverridePss = function () {
    it("Click on the add anothe sub publisher override pss ", function () {
        pages.createDealScope.clickOnTheAddAnotherSubPublisherOverridePss();
    });
};

exports.checkDeleteScopeIconIsPresent = function () {
    it("Check delete scope icon is displayed", function () {
        pages.createDealScope.checkTheDeleteScopeIconIsPresent();
    });
};

exports.checkShareUnshareDeleteScopeIconIsPresent = function () {
    it("Check share unshare scope icon is displayed", function () {
        pages.createDealScope.checkTheShareUnshareDeleteIconIsPresent();
    });
};

exports.checkShareScopeLinkIsEnabled = function () {
    it("Check share link is enabled on share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        expect(pages.createDealScope.elems.shareScopeLink.isDisplayed());
    });
};

exports.checkUnshareScopeLinkIsDisabled = function () {
    it("Check unshare link is disabled on share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        pages.createDealScope.elems.unshareScopeLink.getAttribute("class").then(function (promise) {
            console.log("Unshare scope link class is : " + promise);
            expect(promise).toContain("disabled");
        });
    });
};

exports.checkCopyScopeLinkIsDisabled = function () {
    it("Check copy link is disabled on share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        pages.createDealScope.elems.copyScopeLink.getAttribute("class").then(function (promise) {
            console.log("Unshare scope link class is : " + promise);
            expect(promise).toContain("disabled");
        });
    });
};

exports.checkCopyScopeDisabledDataTooltip = function () {
    it("Check copy link disabled data tooltip share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.copyScopeLink).click();
        pages.createDealScope.elems.copyScopeLink.getAttribute("data-tooltip").then(function (promise) {
            console.log("Copy scope disabled tooltip is : " + promise);
            expect(promise).toEqual("Cannot Copy: Editing in progress.");
        });
    });
};

exports.checkCopyScopeLinkIsEnabled = function () {
    it("Check copy link is enabled on share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        expect(pages.createDealScope.elems.copyScopeLink.isDisplayed());
    });
};

exports.checkCopyScopeEnabledDataTooltip = function () {
    it("Check copy link enabled data tooltip share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.copyScopeLink).perform();
        pages.createDealScope.elems.copyScopeLink.getAttribute("data-tooltip").then(function (promise) {
            console.log("Copy scope enabled tooltip is : " + promise);
            expect(promise).toEqual("Copy entirety of this Scope.");
        });
    });
};

exports.checkDeleteScopeLinkIsEnabled = function () {
    it("Check delete link is enabled on share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        expect(pages.createDealScope.elems.deleteScopeLink.isDisplayed());
    });
};

exports.nonCtrlCreatorShare = (function () {
    var nccs = {};

    nccs.validateLabel = function (i) {
        it('Non Controller Creator Share > validate label text #' + (i + 1), function () {
            expect(pages.createDealScope.nonCtrlCreatorShare.getText(i)).toBe(
                'Non-Controlled Creator Share'
            );
        });
    };

    nccs.validateDefault = function (i) {
        it('Non Controlled Creator Share > validate default value #' + (i + 1), function () {
            pages.createDealScope.nonCtrlCreatorShare.validateDefault(i);
        });
    };

    nccs.click = function (i) {
        it('Non Controlled Creator Share > click on checkbox #' + (i + 1), function () {
            pages.createDealScope.nonCtrlCreatorShare.click(i);
        });
    };

    nccs.validateHelpMessage = function (i) {
        it('Non Controlled Creator Share > validate help message #' + (i + 1), function () {
            pages.createDealScope.nonCtrlCreatorShare.hoverHelp(i);
            expect(pages.createDealScope.nonCtrlCreatorShare.helpMessage(i)).toContain(
                'Indicates WCM is not responsible'
            );
        });
    };

    return nccs;
})();

exports.fillSpecificValuePublisherNameFieldChainI = function (i, publisherRole) {
    it("Fill into publisher role field chain " + i + " specific value ", function () {
        pages.createDealScope.fillPublisherNameFieldChainISpecificValue(i, publisherRole);
    });
};

exports.itAddPublisherShare = function () {
    describe("Add publisher share set", function () {
        var nccs = exports.nonCtrlCreatorShare;

        steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
        steps.createDealScope.clickOnAddPublisherShareSet();
        nccs.validateLabel(0);
        nccs.validateDefault(0);
        nccs.click(0);
        nccs.validateHelpMessage(0);
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("53026414");
        steps.createDealScope.selectSpecificPublisherNameDropDown();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("10");
        //steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
    });
};

exports.itAddPublisherShareSpecificValues = function (publisherShare, publisherName) {
    describe("Add publisher share set specific value", function () {

        steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
        steps.createDealScope.clickOnAddPublisherShareSet();
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.fillIntoFirstPublisherNameAMField(publisherShare);
        steps.createDealScope.selectSpecificPublisherNameDropDownValue(publisherName);
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
    });
};

exports.itAddPublisherShareWithSocietyAwardCredit = function () {
    describe("Add publisher share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
        steps.createDealScope.clickOnAddPublisherShareSet();
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("53026414");
        steps.createDealScope.selectSpecificPublisherNameDropDown();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
        steps.base.scrollIntoView("Yes society award credits", pages.createDealScope.elems.yesSocietyAwardCreditPss);
        steps.createDealScope.clickOnYesSocietyAwardCreditPublisherShareSet();
    });
};

exports.itOverridePublisherShare = function (subPublisherName, subPublisherSelected, territory) {
    describe("Override publisher share set", function () {
        steps.base.scrollIntoView("Override pss icon ", pages.createDealScope.elems.overridePssIcon);
        steps.createDealScope.clickOnAddOverrideIconPss();
        steps.base.scrollIntoView("Override pss ", pages.createDealScope.elems.subPublisherOverridePssInputField);
        steps.createDealScope.selectSubPublisherOverridePss(subPublisherName, subPublisherSelected);
        steps.createDealScope.selectSubPublisherOverrideTerritoryPss(territory);
        steps.base.scrollIntoView("Done override publisher share set", pages.createDealScope.elems.doneOverridePublisherShareSetButton);
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
        var nccs = exports.nonCtrlCreatorShare;

        steps.createDealScope.clickAddChainLink();
        steps.createDealScope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.createDealScope.fillIntoPublisherNameAMFieldChainI(i);
        steps.createDealScope.selectSpecificPublisherNameDropDownChainI(i);
        steps.createDealScope.fillIntoPublisherNameAMCollectPercentChainISpecificValue(i, "10");
        //steps.createDealScope.fillIntoPublisherNameAMCollectFieldChainI(i);
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
        var nccs = exports.nonCtrlCreatorShare;

        steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
        steps.createDealScope.validateNoPublisherShareWarningIsDisplayed();
        steps.createDealScope.clickOnAddPublisherShareSet();
        nccs.validateLabel(0);
        nccs.validateDefault(0);
        nccs.click(0);
        nccs.validateHelpMessage(0);
        steps.createDealScope.validatePlaceholdersForPublisherNameEAndAM();
        steps.createDealScope.validateErrorMessagePublisherRequired();
        steps.createDealScope.validatePublisherNameTooltipEOrPAIcon();
        steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.createDealScope.validatePublisherNameTooltipAMIcon();
        steps.createDealScope.fillIntoFirstPublisherNameAMField("53026414");
        steps.createDealScope.selectSpecificPublisherNameDropDown();
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
        steps.createDealScope.saveThePublisherShareSet();
    });
};

exports.itCheckInvalidCasesPublisherShare = function () {
    describe("Check invalid cases for no publisher and invalid publisher name and IPI share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
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
        steps.base.scrollIntoView("First publisher name field", pages.createDealScope.elems.firstPublisherNameField);
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
        steps.base.scrollIntoView("First publisher name field", pages.createDealScope.elems.firstPublisherNameField);
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
        steps.base.scrollIntoView("First publisher name field", pages.createDealScope.elems.firstPublisherNameField);
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

exports.checkContractPeriodsAndScopesHeaderTitlePresent = function () {
    it("Check that contract periods and scopes header title is present ", function () {
        expect(pages.deal.elems.contractPeriodsScopesHeaderLink.isDisplayed()).toBeTruthy();
    });
};

exports.checkTheContractualTypeAreaTextDisplayed = function (text) {
    it("Check the contractual type area text value displayed", function () {
        browser.driver.findElement(By.css("div[ng-form='contRightTypes'] div.control-label")).getText().then(function (promise) {
            console.log("Deal scope contractual right types text value is : " + promise);
            expect(promise).toContain(text);
        });
    });
};

exports.checkTheContractualTypeAreaTextNotDisplayed = function (text) {
    it("Check the contractual type area text value is not displayed", function () {
        browser.driver.findElement(By.css("div[ng-form='contRightTypes'] div.control-label")).getText().then(function (promise) {
            console.log("Deal scope contractual right types text value is : " + promise);
            expect(promise).not.toContain(text);
        });
    });
};

exports.checkTheContractualTypeAreaErrorMessageMandatoryRightSelected = function (text) {
    it("Check the contractual type area error message displayed at least one right selected", function () {
        //browser.driver.findElement(by.css("div[data-ng-show='contRightTypes.$error.crtRequire']")).getText()
        $$(".text-error").get(0).getText()
            .then(function (promise) {
                console.log("Deal scope contractual right types error message mandatory right is : " + promise);
                //expect(promise).toEqual("At least one contractual right type must be selected in order to save this scope");
                expect(promise).toContain("Required fields are missing or invalid. Please resolve errors.");
            });
    });
};

exports.checkTheContractualTypePublishingRightsTextDisplayed = function (text) {
    it("Check the contractual type publishing rights text value displayed", function () {
        browser.driver.findElement(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(1)")).getText().then(function (promise) {
            console.log("Deal scope contractual right types publishing rights text value is : " + promise);
            expect(promise).toContain(text);
        });
    });
};

exports.checkTheContractualTypeMasterRightsTextDisplayed = function (text) {
    it("Check the contractual type master rights text value displayed", function () {
        browser.driver.findElement(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2)")).getText().then(function (promise) {
            console.log("Deal scope contractual right types master rights text value is : " + promise);
            expect(promise).toContain(text);
        });
    });
};

exports.checkTheContractualTypeLimitedTooTextTooltipDisplayed = function () {
    it("Check the contractual type limited too text tooltip value displayed", function () {
        browser.driver.findElement(By.css("div[ng-form='contRightTypes'] label.checkbox i.fa.fa-info-circle.ng-scope")).getAttribute("tooltip").then(function (promise) {
            console.log("Deal scope contractual right types limited too text tooltip value is : " + promise);
            expect(promise).toEqual("Check this only if the contract limits you to an explicit list of included right types.");
        });
    });
};

exports.expandMasterRights = function () {
    it("Expand master rights by clicking the arrow", function () {
        pages.createDealScope.expandTheMasterRights();
        pages.createDealScope.waitForAjax();
    });
};

exports.collapseMasterRights = function () {
    it("Collapse master rights by clicking the arrow", function () {
        pages.createDealScope.collapseTheMasterRights();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnPublishingRightsCheckBox = function () {
    it("Click on publishing rights check box ", function () {
        pages.createDealScope.clickOnThePublishingRightsCheckBox();
        pages.createDealScope.waitForAjax();
    });
};

exports.checkThatPublishingRightsCheckBoxIsPartiallySelected = function () {
    it("Check that the publishing rights is partially selected", function () {
        pages.createDealScope.checkThatThePublishingRightsCheckBoxIsPartiallySelected();
        pages.createDealScope.waitForAjax();
    });
};

exports.checkThatMasterRightsCheckBoxIsPartiallySelected = function () {
    it("Check that the master rights is partially selected", function () {
        pages.createDealScope.checkThatTheMasterRightsCheckBoxIsPartiallySelected();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnPublishingRightsNumberI = function (i) {
    it("Click on the publishing rights number " + i, function () {
        pages.createDealScope.clickOnThePublishingRightsNumberI(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.checkThatPublishingRightsNumberIIsSelected = function (i) {
    it("Check that the publishing rights number " + i + " is selected", function () {
        pages.createDealScope.checkThatThePublishingRightsNumberIIsSelected(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.checkThatPublishingRightsNumberIIsDeSelected = function (i) {
    it("Check that the publishing rights number " + i + " is de-selected", function () {
        pages.createDealScope.checkThatThePublishingRightsNumberIIsDeSelected(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.checkThatMasterRightsNumberIIsSelected = function (i) {
    it("Check that the publishing rights number " + i + " is selected", function () {
        pages.createDealScope.checkThatTheMasterRightsNumberIIsSelected(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.checkThatMastergRightsNumberIIsDeSelected = function (i) {
    it("Check that the publishing rights number " + i + " is de-selected", function () {
        pages.createDealScope.checkThatTheMasterRightsNumberIIsDeSelected(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnMasterRightsNumberI = function (i) {
    it("Click on the masterng rights number " + i, function () {
        pages.createDealScope.clickOnTheMasterRightsNumberI(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnMasterRightsCheckBox = function () {
    it("Click on master rights check box ", function () {
        pages.createDealScope.clickOnTheMasterRightsCheckBox();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnLimitedToCheckBox = function () {
    it("Click on the limited to check box on contractual right types on scope ", function () {
        pages.createDealScope.clickOnTheLimitedToCheckBox();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnSharePublisherShareSetIcon = function () {
    it("Click on the share publisher share set icon ", function () {
        pages.createDealScope.clickOnTheSharePublisherShareSetIcon();
    });
};

exports.clickOnUseThisPublisherShareSetButton = function () {
    it("Click on the use this publisher share set icon ", function () {
        pages.createDealScope.clickOnTheUseThisPublisherShareSetButton();
        pages.createDealScope.waitForAjax();
    });
};

exports.clickOnUseThisPublisherShareSetButtonShareNumberI = function (i) {
    it("Click on the use this publisher share set icon number i", function () {
        pages.createDealScope.clickOnTheUseThisPublisherShareSetButtonShareNumberI(i);
        pages.createDealScope.waitForAjax();
    });
};

exports.validateSharePublisherShareSetCount = function (number) {
    it("Check the share publisher share set count number of scope shared", function () {
        pages.createDealScope.validateTheSharePublisherShareSetCount(number);
    });
};

exports.validateSharePublisherShareSetTextTooltip = function (text) {
    it("Check the share publisher share set text tooltip", function () {
        pages.createDealScope.validateTheSharePublisherShareSetTextTooltip(text);
    });
};

exports.mouseOverPublisherShareTextTooltip = function () {
    it("Mouse over the publisher text tooltip", function () {
        pages.createDealScope.mouseOverThePubisherShareTextTooltip();
    });
};

exports.clickOnSaveSharePublisherShareSetButton = function () {
    it("Click on save share publisher share set button", function () {
        pages.createDealScope.clickOnTheSaveSharePublisherShareSetButton();
        pages.createDealScope.waitForAjax();
    });
};

exports.unsharePublisherShareSetFromSelectedScope = function () {
    it("Click on the unshare publisher share set icon ", function () {
        pages.createDealScope.unshareThePublisherShareSetFromSelectedScope();
        pages.createDealScope.waitForAjax();
    });
};


exports.deleteSharePublisherShareSet = function () {
    it("Delete the share publisher share set", function () {
        pages.createDealScope.clickOnTheDeleteSharePublisherShareSetButton();
        pages.createDealScope.confirmOnDeleteModalDialog();
        pages.createDealScope.waitForAjax();
    });
};

exports.checkWarningMessageForEditingPublisherSharesScope = function (text) {
    it("Check the warning message when you are trying to edit a shared publisher share scope ", function () {
        pages.base.scrollIntoView(element(By.css("div[data-ng-form='pubShareSetForm'] div.validation-message-text.ng-binding")));
        browser.driver.findElement(By.css("div[data-ng-form='pubShareSetForm'] div.validation-message-text.ng-binding")).getText()
            .then(function (promise) {
                console.log("The warning text displayed is : " + promise);
                expect(promise).toEqual(text);
            });
    });
};

exports.editPublisherShareSetArea = function () {
    it("Edit the publisher share set area ", function () {
        pages.createDealScope.editThePublisherShareSetArea();
    });
};

exports.checkPublisherShareSetNameTextValue = function (text) {
    it("Check publisher name first line value text is correct ", function () {
        browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id'] div.publisher-row.clearfix.ng-scope:nth-child(2) div.pull-left.ps-name")).getText()
            .then(function (promise) {
                console.log("Publisher share set text value is  is : " + promise);
                expect(promise.toString().toLowerCase()).toContain(text);
            });
    });
};

exports.checkSocietyAwardCreditNotDisplayedOnPss = function () {
    it("Check that society award credits not present into publisher share set ", function () {
        browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets']")).getText()
            .then(function (promise) {
                console.log("Check society award credit text not present into pss is is : " + promise);
                expect(promise).not.toContain("Society Award Credit:");
            });
    });
};

exports.checkSocietyAwardCreditDisplayedOnPss = function () {
    it("Check that society award credits not present into publisher share set ", function () {
        browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets']")).getText()
            .then(function (promise) {
                console.log("Check society award credit text present into pss is : " + promise);
                expect(promise).toContain("Society Award Credit:");
            });
    });
};

exports.checkNoSocietyAwardCreditPssOptionSelected = function () {
    it("Check that no society award credits option is selected ", function () {
        browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets'] button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(2)")).getAttribute("class")
            .then(function (promise) {
                console.log("Society award credit no button class is : " + promise);
                expect(promise).toContain("active");
            });
    });
};


exports.checkSocietyAwardCreditPssTextTooltip = function () {
    it("Check that society award credits not present into publisher share set ", function () {
        browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets'] #deal-publisher div.ng-scope div.control-group.publisher-share label i")).getAttribute("data-tooltip")
            .then(function (promise) {
                console.log("Society award credit pss text tooltip is : " + promise);
                expect(promise).toEqual("By choosing \"yes\" you are indicating the ability to register with ownership—particular to deal type, on such admin deals—for the purpose of receiving society awards.");
            });
    });
};

exports.fillIntoCreatorFieldSpecificLetter = function (creator) {
    it("Fill into the creator field specific letter ", function () {
        pages.createDealScope.fillIntoTheCreatorFieldSpecificLetter(creator);
    });
};

exports.selectSpecificValueFromCreatorDropDown = function (creator) {
    it("Select the specific value from creator drop down ", function () {
        pages.createDealScope.selectTheSpecificValueFromCreatorDropDown(creator);
    });
};

exports.selectRandomValueFromCreatorDropDown = function () {
    it("Select the specific value from creator drop down ", function () {
        pages.createDealScope.selectTheRandomValueFromCreatorDropDown();
    });
};

exports.checkTextTooltipWorkForHire = function () {
    it("Check the text tooltip work for hire ", function () {
        pages.createDealScope.elems.workForHireTextTooltip.getAttribute("data-tooltip")
            .then(function (promise) {
                console.log("Work for hire text tooltip is : " + promise);
                expect(promise).toEqual("Works created under an employee agreement. The employer is the legally recognized creator of these works.");
            });
    });
};

exports.checkYesWorkForHireButtonIsSelected = function () {
    it("Check the yes work for hire button is selected", function () {
        pages.createDealScope.elems.yesWorkForHire.getAttribute("class")
            .then(function (promise) {
                console.log("Yes work for hire button class is : " + promise);
                expect(promise).toContain("active");
            });
    });
};

exports.checkYesWorkForHireButtonIsNotSelected = function () {
    it("Check the yes work for hire button is not selected", function () {
        pages.createDealScope.elems.yesWorkForHire.getAttribute("class")
            .then(function (promise) {
                console.log("Yes work for hire button class is : " + promise);
                expect(promise).not.toContain("active");
            });
    });
};

exports.checkNoWorkForHireButtonIsSelected = function () {
    it("Check the no work for hire button is selected", function () {
        pages.createDealScope.elems.noWorkForHire.getAttribute("class")
            .then(function (promise) {
                console.log("Yes work for hire button class is : " + promise);
                expect(promise).toContain("active");
            });
    });
};

exports.checkNoWorkForHireButtonIsNotSelected = function () {
    it("Check the no work for hire button is not selected", function () {
        pages.createDealScope.elems.noWorkForHire.getAttribute("class")
            .then(function (promise) {
                console.log("Yes work for hire button class is : " + promise);
                expect(promise).not.toContain("active");
            });
    });
};

exports.clickOnYesWorkForHireButton = function () {
    it("Click on yes work for hire button ", function () {
        pages.createDealScope.clickOnTheYesWorkForHireButton();
    });
};

exports.clickOnNoWorkForHireButton = function () {
    it("Click on no work for hire button ", function () {
        pages.createDealScope.clickOnTheNoWorkForHireButton();
    });
};
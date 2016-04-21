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
    it("Add simple scope", function () {
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

exports.lickOnNoSocietyAwardCreditPublisherShareSet = function () {
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

exports.selectSpecificPublisherNameDropDownValue = function (publisherName) {
    it("Select specific value publisher name drop down", function () {
        pages.createDealScope.selectTheSpecificPublisherNameDropDown(publisherName);
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
                        pages.createDealScope.fillInFirstPublisherNameCollectPercent();
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

exports.selectTheRandomPublisherNameDropDownChainI = function(i){
    it("Select random publisher name drop down chain " + i, function(){
       pages.createDealScope.selectRandomPublisherNameDropDownChainI(i);
    });
};

exports.fillIntoPublisherNameOwnPercentFieldChainISpecificValue = function(i, percent){
    it("Fill into the publisher name own percent field specific value chain " + i, function(){
       pages.createDealScope.fillPublisherNameOwnPercentFieldChainISpecificValue(i, percent);
    });
};

exports.fillIntoPublisherNameCollectPercentFieldChainISpecificValue = function(i, percent){
    it("Fill into the publisher name collect percent field specific value chain " + i, function(){
        pages.createDealScope.fillPublisherNameCollectPercentFieldChainISpecificValue(i, percent);
    });
};

exports.fillIntoPublisherNameAMCollectPercentChainISpecificValue = function(i, percent){
    it("Fill into the publisher name AM collect percent field specific value chain " + i, function(){
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
                        pages.createDealScope.fillPublisherNameCollectPercentFieldChainI(i);
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
        pages.createDealScope.elems.unshareScopeLink.getAttribute("class").
            then(function (promise) {
                console.log("Unshare scope link class is : " + promise);
                expect(promise).toContain("disabled");
            });
    });
};

exports.checkCopyScopeLinkIsDisabled = function () {
    it("Check copy link is disabled on share scope", function () {
        browser.actions().mouseMove(pages.createDealScope.elems.firstScope).perform();
        browser.actions().mouseMove(pages.createDealScope.elems.shareUnshareDeleteScopeIcon).perform();
        pages.createDealScope.elems.copyScopeLink.getAttribute("class").
            then(function (promise) {
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
        pages.createDealScope.elems.copyScopeLink.getAttribute("data-tooltip").
            then(function (promise) {
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
        pages.createDealScope.elems.copyScopeLink.getAttribute("data-tooltip").
            then(function (promise) {
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
    it("Fill into publisher role field chain " + i + " specific value ", function(){
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
        steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
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

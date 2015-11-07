"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.editDealScope = exports;

exports.selectScope1 = function () {
    it("Select scope 1", function () {
        pages.editDealScope.clickOnScope1();
        pages.editDealScope.waitForAjax();
    });
};

exports.selectScopeNumberI = function (i) {
    it("Select scope number  " + i, function () {
        pages.editDealScope.clickOnScopeNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.checkOverrideTitleAndNumber = function (i) {
    it("Check overrider title and numbers of overrides added " + i, function () {
        pages.editDealScope.checkOverrideNumbersAddedOnScope(i);
    });
};

exports.checkScopeNumberIText = function (i) {
    it("Check text for  scope number  " + i, function () {
        pages.editDealScope.checkTheScopeNumberITextValue(i);
    });
};

exports.checkScopeNumberINoPss = function (i) {
    it("Check scope number  " + i + " hasn't PSS", function () {
        pages.editDealScope.checkTheScopeNumberITextValueHasNotPss(i);
    });
};

exports.checkScopeNumberINoRr = function (i) {
    it("Check scope number  " + i + " hasn't RR", function () {
        pages.editDealScope.checkTheScopeNumberITextValueHasNotRr(i);
    });
};

exports.checkScopeNumberINameAndPss = function (i) {
    it("Check name and pss for  scope number  " + i, function () {
        pages.editDealScope.checkTheScopeNumberINamePssValue(i);
    });
};

exports.checkTheScopeRateSetDateValue = function (date) {
    it("Check the royalty rate set effective start date is equal to " + date, function () {
        pages.editDealScope.checkTheScopeRateSetDate(date);
    });
};

exports.checkTheScopeRateSetDateValueNotEqual = function (date) {
    it("Check the royalty rate set effective start date is not equal to " + date, function () {
        pages.editDealScope.checkTheScopeRateSetDateNotEqual(date);
    });
};

exports.checkScopeNumberINameAndRates = function (i) {
    it("Check name and rates for  scope number  " + i, function () {
        pages.editDealScope.checkTheScopeNumberINameRatesValue(i);
    });
};

exports.checkScopeNumberINameAndPayees = function (i) {
    it("Check name and payees present for scope number  " + i, function () {
        pages.editDealScope.checkTheScopeNumberINamePayeesValue(i);
    });
};

exports.checkScopeNumberINameAndNotRates = function (i) {
    it("Check name and not rates for  scope number  " + i, function () {
        pages.editDealScope.checkTheScopeNumberINameRatesNotValue(i);
    });
};

exports.validateShareScopesPopupDetailsContractPeriod1 = function () {
    it("Validate share scopes pop up details contract period 1 ", function () {
        pages.editDealScope.clickOnShareIconOnScope();
        pages.editDealScope.elems.shareScopesDetailsPopup.getText().
            then(function (promise) {
                console.log("Shares scopes details popup contract periods: " + promise);
                expect(promise).toContain("Description 2");
                expect(promise).toContain("Description 3");
                expect(promise).toContain("Description 4");
            });
    });
};

exports.validateShareScopesPopupDetailsContractPeriod2 = function () {
    it("Validate share scopes pop up details contract period 2 ", function () {
        pages.editDealScope.clickOnShareIconOnScope();

        pages.editDealScope.elems.shareScopesDetailsPopup.getText().
            then(function (promise) {
                console.log("Shares scopes details popup contract periods: " + promise);
                expect(promise).toContain("Description 1");
                expect(promise).toContain("Description 3");
                expect(promise).toContain("Description 4");
            });
    });
};

exports.validateShareScopesPopupDetailsContractPeriod3 = function () {
    it("Validate share scopes pop up details contract period 3 ", function () {
        pages.editDealScope.clickOnShareIconOnScope();

        pages.editDealScope.elems.shareScopesDetailsPopup.getText().
            then(function (promise) {
                console.log("Shares scopes details popup contract periods: " + promise);
                expect(promise).toContain("Description 1");
                expect(promise).toContain("Description 2");
                expect(promise).toContain("Description 4");
            });
    });
};

exports.validateShareScopesPopupDetailsContractPeriod4 = function () {
    it("Validate share scopes pop up details contract period i ", function () {
        pages.editDealScope.clickOnShareIconOnScope();

        pages.editDealScope.elems.shareScopesDetailsPopup.getText().
            then(function (promise) {
                console.log("Shares scopes details popup contract periods: " + promise);
                expect(promise).toContain("Description 1");
                expect(promise).toContain("Description 2");
                expect(promise).toContain("Description 3");
            });
    });
};

exports.validatePublisherSharesTitle = function () {
    it("Validate the publisher shares set title ", function () {
        pages.editDealScope.validateThePublisherSharesTitle();
    });
};

exports.validatePublisherSharesHeaderTableTitle = function () {
    it("Validate the publisher shares header table title ", function () {
        pages.editDealScope.validateThePublisherSharesHeaderTableTitle();
    });
};

exports.editPublisherSharesSet = function () {
    it("Edit the publisher shares set area ", function () {
        pages.editDealScope.editThePublisherSharesSet();
        pages.editDealScope.waitForAjax();
    });
};

exports.clickAddSocietyAgreementNumberLinkPublisherSharesSetChainI = function (i) {
    it("Click on add society agreement number link publisher shares set chain i", function () {
        pages.editDealScope.clickOnAddSocietyAgreementNumberLinkPublisherSharesSetChainI(i);
    });
};

exports.validatePublisherSharesSetAddSocAgreemNumberTextChainI = function (i) {
    it("Validate the publisher shares set add society agreement number text chain i ", function (i) {
        pages.editDealScope.validateThePublisherSharesSetAddSocAgreemNumberTextChainI(i)
    });
};

exports.validatePublisherSharesSetPublisherNameEOrPAChainI = function (i) {
    it("Validate the publisher shares set publisher name E or PA chain i ", function () {
        pages.editDealScope.validateThePublisherSharesSetPublisherNameEOrPAChainI(i);
    });
};

exports.validatePublisherSharesSetPublisherNameAMChainI = function (i) {
    it("Validate the publisher shares set publisher name AM chain i", function () {
        pages.editDealScope.validateThePublisherSharesSetPublisherNameAMChainI(i);
    });
};

exports.validatePublisherSharesSetSubtotalChainI = function (i) {
    it("Validate the publisher shares set subtotal chain i ", function () {
        pages.editDealScope.validateThePublisherSharesSetSubtotalChainI(i);
    });
};

exports.editIntoFirstPublisherNameField = function (publisherName) {
    it("Edit in first publisher name field", function () {
        pages.editDealScope.editInFirstPublisherNameField(publisherName);
    });
};

exports.editSelectRandomPublisherNameDropDownValue = function () {
    it("Edit-select random publisher name drop down value", function () {
        pages.editDealScope.editSelectRandomPublisherNameDropDown();
    });
};

exports.editIntoFirstPublisherNameCollectField = function () {
    it("Edit into first publisher name collect field random value ", function () {
        pages.editDealScope.editInFirstPublisherNameCollectPercent();
    });
};

exports.editIntoFirstPublisherNameAMCollectField = function () {
    it("Edit into first publisher name AM collect percent random value", function () {
        pages.editDealScope.editInFirstPublisherNameAMCollectPercent();
    });
};

exports.editSaveTheChangesDealScope = function () {
    it("Edit save the changes ", function () {
        pages.editDealScope.editSaveTheChangesPage();
        pages.editDealScope.waitForAjax();
    });
};

exports.editIntoFirstPublisherNameOwnField = function () {
    it("Edit into first publisher name own field random value", function () {
        pages.editDealScope.editInFirstPublisherNameOwnPercent();
    });
};

exports.editIntoFirstPublisherNameCollectFieldSpecificValue = function (percent) {
    it("Edit into first publisher name collect field random value ", function () {
        pages.editDealScope.editInFirstPublisherNameCollectPercentSpecificValue(percent);
    });
};

exports.editIntoFirstPublisherNameAMCollectFieldSpecificValue = function (percent) {
    it("Edit into first publisher name AM collect percent random value", function () {
        pages.editDealScope.editInFirstPublisherNameAMCollectPercentSpecificValue(percent);
    });
};

exports.editIntoFirstPublisherNameOwnFieldSpecificValue = function (percent) {
    it("Edit into first publisher name own field random value", function () {
        pages.editDealScope.editInFirstPublisherNameOwnPercentSpecificValue(percent);
    });
};

exports.editIntoFirstPublisherNameAMField = function (publisherNameAM) {
    it("Edit into first publisher name AM field", function () {
        pages.editDealScope.editInFirstPublisherNameAMField(publisherNameAM);
    });
};

exports.editClearIntoFirstPublisherNameField = function () {
    it("Edit - clear into first publisher name field", function () {
        pages.editDealScope.editClearFirstPublisherNameField();
    });
};

exports.editClearIntoFirstPublisherNameAMField = function () {
    it("Edit - clear into first publisher name AM field", function () {
        pages.editDealScope.editClearFirstPublisherNameAMField();
    });
};

exports.editClearIntoFirstPublisherNameAMCollectField = function () {
    it("Edit - clear into first publisher name AM collect percent", function () {
        pages.editDealScope.editClearFirstPublisherNameAMCollectPercent();
    });
};

exports.editClearIntoFirstPublisherNameOwnField = function () {
    it("Edit - clear into first publisher name own field", function () {
        pages.editDealScope.editClearInFirstPublisherNameOwnPercent();
    });
};

exports.editClearIntoFirstPublisherNameCollectField = function () {
    it("Edit - clear into first publisher name collect field ", function () {
        pages.editDealScope.editClearInFirstPublisherNameCollectPercent();
    });
};

exports.editSaveThePublisherShareSet = function () {
    it("Edit - save the publisher share set", function () {
        pages.editDealScope.editSaveThePublisherShareSets();
        pages.editDealScope.waitForAjax();
    });
};

exports.editSaveThePublisherShareSetWithModal = function () {
    it("Edit - save the publisher share set with modal", function () {
        pages.editDealScope.editSaveThePublisherShareSetsWithModal();
        pages.editDealScope.waitForAjax();
    });
};


exports.editCancelThePublisherShareSet = function () {
    it("Edit - cancel the publisher share set", function () {
        pages.editDealScope.editCancelPublisherShareSets();
    });
};

exports.editSelectSpecificPublisherNameDropDown = function () {
    it("Edit - select specific value publisher name drop down", function () {
        pages.editDealScope.editSelectTheSpecificPublisherNameDropDown("(53026414)\nwb music corp.");
    });
};

exports.editSelectDesiredPublisherTypeEOrPADropDown = function (publisherType) {
    it("Edit - select desired publisher type E or PA from drop down", function () {
        pages.editDealScope.editSelectSpecificOptionEOrPAPublisherType(publisherType);
    });
};

exports.editCopySpecificNumberOfScopes = function (number) {
    it("Edit - copy specific number of scopes " + number, function () {
        pages.editDealScope.editClickOnCopyScopeOption();
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeSpecificValue(number);
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScope();
    });
};

exports.editClickOnTheCopyScopeOptionNumberI = function (i) {
    it("Edit - click on the copy scope option number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
    });
};

exports.editFillInNumberOfCopiesForScope = function (i, number) {
    it("Edit - fill specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
    });
};

exports.editClickOnCopyButtonCopySpecificNumberOfScopesFromScopeNumberI = function (i) {
    it("Edit -click on copy button from scope number " + i, function () {
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
    });
};

exports.editClickOnCancelButtonCopySpecificNumberOfScopesFromScopeNumberI = function (i) {
    it("Edit -click on cancel copy button from scope number " + i, function () {
        pages.editDealScope.editClickOnTheCancelCopyScopeButtonNumberOfCopiesScopeNumberI(i);
    });
};

exports.editCopySpecificNumberOfScopesFromScopeNumberI = function (i, number) {
    it("Edit - copy specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
    });
};

exports.checkTheNumberOfScopesPerDeal = function (i) {
    it("Check that the number of scopes per deal it is equal with " + i, function () {
        pages.editDealScope.elems.numberOfScopesPerDeal.getText().
            then(function (promise) {
                console.log("Number of scopes per deal is  : " + promise);
                expect(promise).toEqual(i);
            });
    });
};

exports.checkPayeesPresentInCopyScopeModal = function () {
    it("Check payees text present in copy scope modal ", function () {
        pages.base.scrollIntoView(pages.editDealScope.elems.payeesCopyScopeModal);
        pages.editDealScope.elems.payeesCopyScopeModal.getText().
            then(function (promise) {
                console.log("Payees text in copy scope modal is  : " + promise);
                expect(promise).toContain("Payees");
                expect(promise).toContain("Will be copied");
            });
    });
};

exports.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePssAndRR = function (i, number) {
    it("Edit - copy specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
        pages.editDealScope.clickOnTheCopyPublisherShareInCopyScopeModal();
        pages.editDealScope.clickOnTheCopyRoyaltyRatesInCopyScopeModal();
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
    });
};

exports.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePss = function (i, number) {
    it("Edit - copy specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
        pages.editDealScope.clickOnTheCopyPublisherShareInCopyScopeModal();
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
    });
};

exports.checkSharePublisherShareSetIconPresent = function () {
    it("Check no share publisher share set icon present ", function () {
        pages.base.scrollIntoView(pages.editDealScope.elems.publisherSharesTitle);
        pages.editDealScope.elems.publisherSharesTitle.getText().
            then(function (promise) {
                console.log("Unshare text is : " + promise);
                expect(promise).toContain("Unshare");
            });
    });
};

exports.checkNoSharePublisherShareSetIconPresent = function () {
    it("Check no share publisher share set icon present ", function () {
        pages.base.scrollIntoView(pages.editDealScope.elems.publisherSharesTitle);
        pages.editDealScope.elems.publisherSharesTitle.getText().
            then(function (promise) {
                console.log("Publisher share title text is : " + promise);
                expect(promise).not.toContain("Unshare");
            });
    });
};


exports.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA = function () {
    it("Edit -fill first publisher name fields based on publisher type E or PA", function () {
        pages.editDealScope.elems.editFirstPublisherTypeValue.getText()
            .then(function (promise) {
                console.log("Publisher type is: " + promise);
                switch (promise) {
                    case "E":
                        console.log("We are on the E case");
                        pages.editDealScope.editInFirstPublisherNameField("test");
                        pages.editDealScope.editSelectRandomPublisherNameDropDown();
                        pages.editDealScope.editInFirstPublisherNameOwnPercent();
                        pages.editDealScope.editInFirstPublisherNameCollectPercent();
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.editDealScope.editInFirstPublisherNameField();
                        pages.editDealScope.editSelectRandomPublisherNameDropDown();
                        pages.editDealScope.editInFirstPublisherNameCollectPercent();
                        break;
                }
            });
    });
};

exports.editClickAddChainLink = function () {
    it("Edit - click on add chain link", function () {
        pages.editDealScope.editClickOnAddChainLink();
        pages.editDealScope.waitForAjax();
    });
};

exports.editSelectDesiredPublisherTypeEOrPADropDownChainI = function (publisherType, i) {
    it("Edit - select desired publisher type E or PA from drop down", function () {
        pages.editDealScope.editSelectSpecificOptionEOrPAPublisherTypeChainI(publisherType, i);
    });
};

exports.editIntoPublisherNameAMFieldChainI = function (i) {
    it("Edit - fill into publisher name AM field chain i ", function () {
        pages.editDealScope.editPublisherNameAMFieldChainI(i);
    });
};

exports.editSelectSpecificPublisherNameDropDownChainI = function (i) {
    it("Edit - select specific value publisher name drop down chain i", function () {
        pages.editDealScope.editSelectSpecificPublisherNameDropDownChainI("(53026414)\nwb music corp.", i);
    });
};

exports.editIntoPublisherNameAMCollectFieldChainI = function (i) {
    it("Edit - fill into publisher name AM collect chain i percent random value", function () {
        pages.editDealScope.editPublisherNameAMCollectPercentChainI(i);
    });
};

exports.editValidateDeleteChainIIconPublisherShare = function (i) {
    it("Edit - validate delete chain i icon publisher share is present ", function () {
        pages.editDealScope.editValidateTheDeleteIconChainIPublisherShareIsPresent(i);
    });
};

exports.editDeleteChainIPublisherShare = function (i) {
    it("Edit - delete chain i from publisher share set ", function () {
        pages.editDealScope.editClickOnDeleteIconChainI(i);
        pages.editDealScope.editConfirmOnDeleteModalDialog();
    });
};

exports.editClickPublisherSharesSetArea = function () {
    it("Edit - click on publisher shares set area ", function () {
        pages.editDealScope.editClickOnPublisherShareSetArea();
    });
};

exports.editDeleteThePublisherShareSet = function () {
    it("Edit - delete the publisher share set ", function () {
        pages.editDealScope.editDeletePublisherSharesSet();
        pages.editDealScope.waitForAjax();
    });
};

exports.editConfirmModalDialogDirtyCheck = function () {
    it("Edit confirm modal dialog dirty check", function () {
        pages.editDealScope.editConfirmModalDialog();
    });
};

exports.editCancelModalDialogDirtyCheck = function () {
    it("Edit cancel modal dialog dirty check", function () {
        pages.editDealScope.editCancelModalDialog();
    });
};

exports.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI = function (i) {
    it("Edit -fill publisher name fields chain i based on publisher type E or PA", function () {
        browser.driver.findElement(By.css("#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(" + i + ") div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow")).getText()
            .then(function (promise) {
                console.log("Publisher type is: " + promise);
                switch (promise) {
                    case "E":
                        console.log("We are on the E case");
                        pages.editDealScope.editPublisherNameFieldChainI(i);
                        pages.editDealScope.editSelectRandomPublisherNameDropDownChainI(i);
                        pages.editDealScope.editPublisherNameOwnPercentFieldChainI(i);
                        pages.editDealScope.editPublisherNameCollectPercentFieldChainI(i);
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.editDealScope.editPublisherNameFieldChainI(i);
                        pages.editDealScope.editSelectRandomPublisherNameDropDownChainI(i);
                        pages.editDealScope.editPublisherNameCollectPercentFieldChainI(i);
                        break;
                }
            });
    });
};

exports.editClickOnAddPublisherShareSet = function () {
    it("Open publisher share set form", function () {
        pages.editDealScope.editClickOnAddPublisherShareSetLink();
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnYesSocietyAwardCreditPublisherShareSet = function () {
    it("Click on the yes society award credit pss and check it is selected", function () {
        pages.editDealScope.editClickOnTheYesSocietyAwardCreditPublisherShareSet();
        pages.editDealScope.waitForAjax();
        var test = pages.editDealScope.elems.editYesSocietyAwardCreditPss.getAttribute("class").toString();
        expect(test.indexOf("active") != -1);
    });
};

exports.editAddSpecificScopeTypeAndTerritory = function (contractType, territory) {
    it("Add simple scope", function () {
        pages.editDealScope.addScopeForm();
        pages.editDealScope.selectContractTypeScope(contractType);
        pages.editDealScope.waitForAjax();
        pages.editDealScope.addTheSpecificTerritoryByTypingToScope(territory);
        pages.editDealScope.selectSpecificCountry(territory);
        pages.editDealScope.waitForAjax();
    });
};

exports.editCheckDeleteScopeIconIsPresent = function () {
    it("Edit check delete scope icon is displayed", function () {
        pages.editDealScope.editCheckTheDeleteScopeIconIsPresent();
    });
};

exports.editCheckShareUnshareDeleteScopeIconIsPresent = function () {
    it("Edit check share unshare scope icon is displayed", function () {
        pages.editDealScope.editCheckTheShareUnshareDeleteIconIsPresent();
    });
};

exports.editCheckShareScopeLinkIsEnabled = function () {
    it("Edit check share link is enabled on share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        expect(pages.editDealScope.elems.editShareScopeLink.isDisplayed());
    });
};

exports.editCheckUnshareScopeLinkIsDisabled = function () {
    it("Edit check unshare link is disabled on share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        pages.editDealScope.elems.editUnshareScopeLink.getAttribute("class").
            then(function (promise) {
                console.log("Unshare scope link class is : " + promise);
                expect(promise).toContain("disabled");
            });
    });
};

exports.editCheckCopyScopeLinkIsDisabled = function () {
    it("Edit check copy link is disabled on share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        pages.editDealScope.elems.editCopyScopeLink.getAttribute("class").
            then(function (promise) {
                console.log("Unshare scope link class is : " + promise);
                expect(promise).toContain("disabled");
            });
    });
};

exports.editCheckCopyScopeDisabledDataTooltip = function () {
    it("Edit check copy link disabled data tooltip share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editCopyScopeLink).perform();
        pages.editDealScope.elems.editCopyScopeLink.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("Copy scope disabled tooltip is : " + promise);
                expect(promise).toEqual("Cannot Copy: Editing in progress.");
            });
    });
};

exports.editCheckCopyScopeLinkIsEnabled = function () {
    it("Edit check copy link is enabled on share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        expect(pages.editDealScope.elems.editCopyScopeLink.isDisplayed());
    });
};

exports.editCheckCopyScopeEnabledDataTooltip = function () {
    it("Edit check copy link enabled data tooltip share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editCopyScopeLink).click();
        pages.editDealScope.elems.editCopyScopeLink.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("Copy scope enabled tooltip is : " + promise);
                expect(promise).toEqual("Copy entirety of this Scope.");
            });
    });
};

exports.editCheckDeleteScopeLinkIsEnabled = function () {
    it("Edit check delete link is enabled on share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        expect(pages.editDealScope.elems.editDeleteScopeLink.isDisplayed());
    });
};

exports.editClickOnAddOverrideIconPss = function () {
    it("Edit click on add override icon publisher share set ", function () {
        pages.editDealScope.editClickOnTheAddOverrideIconPss();
    });
};

exports.editSelectSubPublisherOverridePss = function (subPublisherName, subPublisherSelected) {
    it("Edit select the sub publisher override pss ", function () {
        pages.editDealScope.editSelectTheSubPublisherOverridePss(subPublisherName, subPublisherSelected);
    });
};

exports.editSelectSubPublisherOverrideTerritoryPss = function (territory) {
    it("Edit select the sub publisher override territory pss ", function () {
        pages.editDealScope.editSelectTheSubPublisherOverrideTerritoryPss(territory);
    });
};

exports.editClickOnDoneSubPublisherOverridePss = function () {
    it("Edit click on the done sub publisher override pss ", function () {
        pages.editDealScope.editClickOnTheDoneSubPublisherOverridePss();
    });
};

exports.editClickOnCancelSubPublisherOverridePss = function () {
    it("Edit click on the cancel sub publisher override pss ", function () {
        pages.editDealScope.editClickOnTheCancelSubPublisherOverridePss();
    });
};

exports.editClickOnAddAnotherSubPublisherOverridePss = function () {
    it("Edit click on the add another sub publisher override pss ", function () {
        pages.editDealScope.editClickOnTheAddAnotherSubPublisherOverridePss();
    });
};

exports.clickOnAddSocietyAgreementNumbersLink = function () {
    it("Edit click on the add society agreement numbers link ", function () {
        pages.editDealScope.clickOnTheAddSocietyAgreementNumbersLink();
        pages.editDealScop.waitForAjax();
    });
};

exports.fillIntoPublisherChainAgreementNumberFieldNumberI = function (i) {
    it("Fill into the publisher chain agreement number field number " + i, function () {
        pages.editDealScope.fillIntoThePublisherChainAgreementNumberFieldNumberI(i);
    });
};

exports.selectPublisherChainAgreementNumberSocietyFieldNumberI = function (society, i) {
    it("Select the publisher chain agreement number society field number " + i, function () {
        pages.editDealScope.fillIntoThePublisherChainAgreementSocietyNameNumberI(society, i);
        pages.editDealScope.selectTheSpecificValueFromSocietyDropDownSocietyAgreementNumbers();
        pages.editDealScope.waitForAjax();
    });
};

exports.selectRandomCreatorToPublisherCreatorNameNumberI = function (i) {
    it("Select random creator name from creator to publisher number " + i, function () {
        pages.editDealScope.fillIntoTheCreatorToPublisherSocietyAgreementFieldNumberI("shilpa", i);
        pages.editDealScope.selectTheRandomValueFromCreatorDropDownSocietyAgreementNumbers();
        pages.editDealScope.waitForAjax();
    });
};

exports.fillIntoCreatorAgreementNumberFieldNumberI = function (i) {
    it("Fill into the creator to publisher agreement number value for field number " + i, function () {
        pages.editDealScope.fillIntoTheCreatorAgreementNumberFieldNumberI(i);
    });
};

exports.selectSocietyForCreatorToPublisherAgreementNumberFieldNumberI = function (society, i) {
    it("Select society for creator to publisher agreement number field number " + i, function () {
        pages.editDealScope.fillIntoTheCreatorToPublisherSocietyFieldNumberI(society, i);
        pages.editDealScope.selectTheSpecificValueFromSocietyDropDownSocietyAgreementNumbers();
        pages.editDealScope.waitForAjax();
    });
};

exports.saveSocietyAgreementNumberForm = function () {
    it("Save the society agreement number form ", function () {
        pages.editDealScope.saveTheSocietyAgreementNumbersChanges();
        pages.editDealScope.waitForAjax();
    });
};

exports.checkSocietyAgreementAddedOnScope = function () {
    it("Check the society agreement added on scope ", function () {
        pages.editDealScope.checkTheSocietyAgreementAddedOnScope();
        pages.editDealScope.waitForAjax();
    });
};

exports.checkSocietyAgreementNotAddedOnScope = function () {
    it("Check the society agreement not added on scope ", function () {
        pages.editDealScope.checkTheSocietyAgreementNotAddedOnScope();
    });
};

exports.clickOnCopyPublisherShareInCopyScopeModal = function () {
    it("Click on the copy publisher shares in copy scope modal dialog and check it is clicked ok ", function () {
        pages.editDealScope.clickOnTheCopyPublisherShareInCopyScopeModal();
    });
};

exports.clickOnSharePublisherShareInCopyScopeModal = function () {
    it("Click on the share publisher share button in copy scopal modal and checked it is clicked ok ", function () {
        pages.editDealScope.clickOnTheSharePublisherShareInCopyScopeModal();
    });
};

exports.clickOnCopyRoyaltyRatesInCopyScopeModal = function () {
    it("Click on the copy royalty rates button in copy scope modal and check it is clicked ok ", function () {
        pages.editDealScope.clickOnTheCopyRoyaltyRatesInCopyScopeModal();
    });
};

exports.clickOnShareRoyaltyRatesInCopyScopeModal = function () {
    it("Click on the share royalty rates button in copy scope modal and check it is clicked ok ", function () {
        pages.editDealScope.clickOnTheShareRoyaltyRatesInCopyScopeModal();
    });
};

exports.itAddSimpleSocietyAgreementNumbers = function () {
    describe("Add a simple society agreement number ", function () {
        steps.editDealScope.clickOnAddSocietyAgreementNumbersLink();
        steps.editDealScope.fillIntoPublisherChainAgreementNumberFieldNumberI(1);
        steps.editDealScope.selectPublisherChainAgreementNumberSocietyFieldNumberI("ascap", 1);
        steps.editDealScope.selectRandomCreatorToPublisherCreatorNameNumberI(1);
        steps.editDealScope.fillIntoCreatorAgreementNumberFieldNumberI(1);
        steps.editDealScope.selectSocietyForCreatorToPublisherAgreementNumberFieldNumberI("mcps", 1);
        steps.editDealScope.saveSocietyAgreementNumberForm();
    });
};

exports.itEditAddPublisherShare = function () {
    describe("Add publisher share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.editDealScope.elems.editAddPublisherShareSetLink);
        steps.editDealScope.editClickOnAddPublisherShareSet();
        steps.editDealScope.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.editDealScope.editIntoFirstPublisherNameAMField("wb music corp");
        steps.editDealScope.editSelectSpecificPublisherNameDropDown();
        steps.editDealScope.editIntoFirstPublisherNameAMCollectField();
    });
};

exports.itEditAddPublisherShareWithSocietyAwardCredit = function () {
    describe("Add publisher share set", function () {
        steps.base.scrollIntoView("Add publisher shares set link", pages.editDealScope.elems.editAddPublisherShareSetLink);
        steps.editDealScope.editClickOnAddPublisherShareSet();
        steps.editDealScope.editClickOnYesSocietyAwardCreditPublisherShareSet();
        steps.editDealScope.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.editDealScope.editIntoFirstPublisherNameAMField("wb music corp");
        steps.editDealScope.editSelectSpecificPublisherNameDropDown();
        steps.editDealScope.editIntoFirstPublisherNameAMCollectField();
    });
};

exports.itEditPublisherShare = function () {
    describe("Edit publisher share set", function () {
        steps.editDealScope.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.editDealScope.editIntoFirstPublisherNameAMField("wb music corp");
        steps.editDealScope.editSelectSpecificPublisherNameDropDown();
        steps.editDealScope.editIntoFirstPublisherNameAMCollectField();
    });
};

exports.itEditPublisherSharePATypeWithMultipleThreeChains = function (i) {
    describe("Edit publisher share set with three chains", function () {
        steps.editDealScope.editClickAddChainLink();
        steps.editDealScope.editSelectDesiredPublisherTypeEOrPADropDownChainI("PA", i);
        steps.editDealScope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.editDealScope.editIntoPublisherNameAMFieldChainI(i);
        steps.editDealScope.editSelectSpecificPublisherNameDropDownChainI(i);
        steps.editDealScope.editIntoPublisherNameAMCollectFieldChainI(i);
    });
};

exports.itEditPublisherShareWithMultipleThreeChains = function (i) {
    describe("Edit publisher share set with three chains", function () {
        steps.editDealScope.editClickAddChainLink();
        steps.editDealScope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.editDealScope.editIntoPublisherNameAMFieldChainI(i);
        steps.editDealScope.editSelectSpecificPublisherNameDropDownChainI(i);
        steps.editDealScope.editIntoPublisherNameAMCollectFieldChainI(i);
    });
};

exports.itEditOverridePublisherShare = function (subPublisherName, subPublisherSelected, territory) {
    describe("Edit override publisher share set", function () {
        steps.base.scrollIntoView("Override pss icon ", pages.editDealScope.elems.editOverridePssIcon);
        steps.editDealScope.editClickOnAddOverrideIconPss();
        steps.base.scrollIntoView("Override pss ", pages.editDealScope.elems.editSubPublisherOverridePssInputField);
        steps.editDealScope.editSelectSubPublisherOverridePss(subPublisherName, subPublisherSelected);
        steps.editDealScope.editSelectSubPublisherOverrideTerritoryPss(territory);
        steps.base.scrollIntoView("Done override publisher share set", pages.editDealScope.elems.editDoneOverridePublisherShareSetButton);
        steps.editDealScope.editClickOnDoneSubPublisherOverridePss();
    });
};
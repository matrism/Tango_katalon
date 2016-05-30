"use strict";

var page = pages.editDealScope;

steps.editDealScope = exports;

exports.editScopeArea = function () {
    it("Edit the scope area ", function () {
        pages.editDealScope.editTheScopeArea();
    });
};

exports.selectScope1 = function () {
    it("Select scope 1", function () {
        pages.editDealScope.clickOnScope1();
        pages.editDealScope.waitForAjax();
    });
};

exports.waitForScopeNumberIToBeVisible = function (i) {
    it("Wait for scope number " + i + " to be visible ", function () {
        pages.editDealScope.waitForTheScopeNumberIToBeVisible(i);
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

exports.checkScopeNumberINameAndNotPayees = function (i) {
    it("Check name and not payees present for scope number  " + i, function () {
        pages.editDealScope.checkTheScopeNumberINameNotPayeesValue(i);
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
        pages.editDealScope.elems.shareScopesDetailsPopup.getText().then(function (promise) {
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

        pages.editDealScope.elems.shareScopesDetailsPopup.getText().then(function (promise) {
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

        pages.editDealScope.elems.shareScopesDetailsPopup.getText().then(function (promise) {
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

        pages.editDealScope.elems.shareScopesDetailsPopup.getText().then(function (promise) {
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
        pages.editDealScope.editSelectTheSpecificPublisherNameDropDown('music');
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
        pages.editDealScope.waitForAjax();
    });
};

exports.editCopySpecificNumberOfScopesFromScopeNumberI = function (i, number) {
    it("Edit - copy specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.waitForAjax();
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.checkTheNumberOfScopesPerDeal = function (i) {
    it("Check that the number of scopes per deal it is equal with " + i, function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.numberOfScopesPerDeal));
        pages.editDealScope.elems.numberOfScopesPerDeal.getText().then(function (promise) {
            console.log("Number of scopes per deal is  : " + promise);
            expect(promise).toEqual(i);
        });
    });
};

exports.checkPayeesPresentInCopyScopeModal = function () {
    it("Check payees text present in copy scope modal ", function () {
        pages.base.scrollIntoView(pages.editDealScope.elems.payeesCopyScopeModal);
        pages.editDealScope.elems.payeesCopyScopeModal.getText().then(function (promise) {
            console.log("Payees text in copy scope modal is  : " + promise);
            expect(promise).toContain("Payees");
            expect(promise).toContain("Will be copied");
        });
    });
};

exports.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePssAndRR = function (i, number) {
    it("Edit - copy specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.waitForAjax();
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
        pages.editDealScope.clickOnTheCopyPublisherShareInCopyScopeModal();
        pages.editDealScope.waitForAjax();
        pages.editDealScope.clickOnTheCopyRoyaltyRatesInCopyScopeModal();
        pages.editDealScope.waitForAjax();
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnTheCopyScopeOptionNumberI = function (i) {
    it("Click on the copy scope option number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue = function (i, number) {
    it("Fill into the number of copies for scope number " + i, function () {
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
    });
};

exports.clickOnCopyPublisherShareInCopyScopeModal = function () {
    it("Click on the copy publisher share in copy scope modal ", function () {
        pages.editDealScope.clickOnTheCopyPublisherShareInCopyScopeModal();
        pages.editDealScope.waitForAjax();
    });
};

exports.clickOnCopyRoyaltyRatesInCopyScopeModal = function () {
    it("Click on the copy royalty rates in copy scope modal", function () {
        pages.editDealScope.clickOnTheCopyRoyaltyRatesInCopyScopeModal();
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI = function (i) {
    it("Click on the copy scope button number of copies scope number " + i, function () {
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait = function (i) {
    it("Click on the copy scope button number of copies scope number " + i, function () {
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberIWait(i);
    });
};

exports.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePss = function (i, number) {
    it("Edit - copy specific number of scopes " + number + " from scope number " + i, function () {
        pages.editDealScope.editClickOnCopyScopeOptionNumberI(i);
        pages.editDealScope.waitForAjax();
        pages.editDealScope.editFillInTheNumberOfCopiesForScopeNumberISpecificValue(i, number);
        pages.editDealScope.clickOnTheCopyPublisherShareInCopyScopeModal();
        pages.editDealScope.waitForAjax();
        pages.editDealScope.editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.checkSharePublisherShareSetIconPresent = function () {
    it("Check no share publisher share set icon present ", function () {
        pages.base.scrollIntoView(pages.editDealScope.elems.publisherSharesTitle);
        pages.editDealScope.elems.publisherSharesTitle.getText().then(function (promise) {
            console.log("Unshare text is : " + promise);
            expect(promise).toContain("Unshare");
        });
    });
};

exports.checkNoSharePublisherShareSetIconPresent = function () {
    it("Check no share publisher share set icon present ", function () {
        pages.base.scrollIntoView(pages.editDealScope.elems.publisherSharesTitle);
        pages.editDealScope.elems.publisherSharesTitle.getText().then(function (promise) {
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
                        //pages.editDealScope.editInFirstPublisherNameOwnPercent();
                        //pages.editDealScope.editInFirstPublisherNameCollectPercent();
                        pages.editDealScope.editInFirstPublisherNameOwnPercentSpecificValue("30");
                        pages.editDealScope.editInFirstPublisherNameCollectPercentSpecificValue("20");
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
        pages.editDealScope.editSelectSpecificPublisherNameDropDownChainI('music', i);
    });
};

exports.editIntoPublisherNameAMCollectFieldChainI = function (i) {
    it("Edit - fill into publisher name AM collect chain i percent random value", function () {
        pages.editDealScope.editPublisherNameAMCollectPercentChainI(i);
    });
};

exports.editIntoPublisherNameAMCollectFieldChainISpecificValue = function (i, percent) {
    it("Edit - fill into publisher name AM collect chain i percent specific value", function () {
        pages.editDealScope.editPublisherNameAMCollectPercentChainISpecificValue(i, percent);
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
                        //pages.editDealScope.editPublisherNameOwnPercentFieldChainI(i);
                        pages.editDealScope.editPublisherNameOwnPercentFieldChainISpecificValue(i, "35");
                        pages.editDealScope.editPublisherNameCollectPercentFieldChainISpecificValue(i, "25");
                        //pages.editDealScope.editPublisherNameCollectPercentFieldChainI(i);
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

exports.editSaveScopeChanges = function () {
    it("Edit save the scope changes ", function () {
        pages.editDealScope.editSaveTheScopeChanges();
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

exports.editDeleteExistingTerritoryFromScope = function () {
    it("Edit delete the existing territory from scope ", function () {
        pages.editDealScope.editDeleteTheExistingTerritoryFromScope();
        pages.editDealScope.waitForAjax();
    });
};

exports.editAddTheSpecificTerritoryByTypingToScope = function (territory) {
    it("Edit add specific territory by typing on scope ", function () {
        pages.editDealScope.addTheSpecificTerritoryByTypingToScope(territory);
    });
};

exports.editSpecificScopeType = function (contractType) {
    it("Add simple scope", function () {
        pages.editDealScope.selectContractTypeScope(contractType);
        pages.editDealScope.waitForAjax();
    });
};

exports.editSelectSpecificCountry = function (territory) {
    it("Edit select specific country ", function () {
        pages.editDealScope.selectSpecificCountry(territory);
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
        pages.editDealScope.elems.editUnshareScopeLink.getAttribute("class").then(function (promise) {
            console.log("Unshare scope link class is : " + promise);
            expect(promise).toContain("disabled");
        });
    });
};

exports.editCheckCopyScopeLinkIsDisabled = function () {
    it("Edit check copy link is disabled on share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        pages.editDealScope.elems.editCopyScopeLink.getAttribute("class").then(function (promise) {
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
        pages.editDealScope.elems.editCopyScopeLink.getAttribute("data-tooltip").then(function (promise) {
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
        browser.actions().mouseMove(pages.editDealScope.elems.editCopyScopeLink).click();
    });
};

exports.editCheckCopyScopeEnabledDataTooltip = function () {
    it("Edit check copy link enabled data tooltip share scope", function () {
        browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
        browser.actions().mouseMove(pages.editDealScope.elems.editCopyScopeLink).click();
        pages.editDealScope.elems.editCopyScopeLink.getAttribute("data-tooltip").then(function (promise) {
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
        pages.editDealScope.waitForAjax();
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

exports.clickOnSharePublisherShareInCopyScopeModal = function () {
    it("Click on the share publisher share button in copy scopal modal and checked it is clicked ok ", function () {
        pages.editDealScope.clickOnTheSharePublisherShareInCopyScopeModal();
    });
};


exports.clickOnShareRoyaltyRatesInCopyScopeModal = function () {
    it("Click on the share royalty rates button in copy scope modal and check it is clicked ok ", function () {
        pages.editDealScope.clickOnTheShareRoyaltyRatesInCopyScopeModal();
    });
};

exports.editSaveAllChanges = function () {
    it("Edit save all changes ", function () {
        pages.editDealScope.editSaveTheChangesPage();
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
        steps.editDealScope.editIntoFirstPublisherNameAMField("53026414");
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
        steps.editDealScope.editIntoFirstPublisherNameAMField("53026414");
        steps.editDealScope.editSelectSpecificPublisherNameDropDown();
        steps.editDealScope.editIntoFirstPublisherNameAMCollectField();
    });
};

exports.nonCtrlCreatorShare = (function () {
    var nccs = {};

    nccs.validateLabel = function (i) {
        it('Non Controller Creator Share > validate label text #' + (i + 1), function () {
            expect(pages.editDealScope.nonCtrlCreatorShare.getText(i)).toBe(
                'Non-Controlled Creator Share'
            );
        });
    };

    nccs.validateLabelViewMode = function (i, expectPresent) {
        it('Non Controller Creator Share > validate label on edit mode #' + (i), function () {
            var element = pages.editDealScope.nonCtrlCreatorShare.label(i - 1);
            pages.base.scrollIntoView(element);
            expect(pages.base.isPresentAndDisplayed(element)).toBe(expectPresent);
        });
    };

    nccs.validateLabelPosition = function () {
        it('Non Controller Creator Share > validate label position', function () {
            pages.editDealScope.nonCtrlCreatorShare.validateLabelPosition();
        });
    };

    nccs.expectCheckboxChecked = function (i) {
        it('Non Controlled Creator Share > expect checkbox checked #' + (i + 1), function () {
            pages.editDealScope.nonCtrlCreatorShare.expectCheckboxChecked(i);
        });
    };

    nccs.expectCheckboxNotChecked = function (i) {
        it('Non Controlled Creator Share > expect checkbox not checked #' + (i + 1), function () {
            pages.editDealScope.nonCtrlCreatorShare.expectCheckboxNotChecked(i);
        });
    };

    nccs.click = function (i) {
        it('Non Controlled Creator Share > click on checkbox #' + (i + 1), function () {
            pages.editDealScope.nonCtrlCreatorShare.click(i);
        });
    };

    nccs.validateHelpMessage = function (i) {
        it('Non Controlled Creator Share > validate help message #' + (i + 1), function () {
            pages.editDealScope.nonCtrlCreatorShare.hoverHelp(i);
            expect(pages.editDealScope.nonCtrlCreatorShare.helpMessage(i)).toContain(
                'Indicates WCM is not responsible'
            );
        });
    };

    return nccs;
})();

exports.itEditPublisherShare = function () {
    describe("Edit publisher share set", function () {
        var nccs = exports.nonCtrlCreatorShare;

        nccs.validateLabel(0);
        nccs.expectCheckboxChecked(0);
        nccs.click(0);
        nccs.validateHelpMessage(0);
        steps.editDealScope.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.editDealScope.editIntoFirstPublisherNameAMField("53026414");
        steps.editDealScope.editSelectSpecificPublisherNameDropDown();
        steps.editDealScope.editIntoFirstPublisherNameAMCollectFieldSpecificValue("10");
        //steps.editDealScope.editIntoFirstPublisherNameAMCollectField();
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
        var nccs = exports.nonCtrlCreatorShare;

        steps.editDealScope.editClickAddChainLink();
        nccs.validateLabel(i - 1);
        nccs.expectCheckboxNotChecked(i - 1);
        nccs.click(i - 1);
        nccs.validateHelpMessage(i - 1);
        steps.editDealScope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.editDealScope.editIntoPublisherNameAMFieldChainI(i);
        steps.editDealScope.editSelectSpecificPublisherNameDropDownChainI(i);
        steps.editDealScope.editIntoPublisherNameAMCollectFieldChainISpecificValue(i, "10");
        //steps.editDealScope.editIntoPublisherNameAMCollectFieldChainI(i);
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


exports.editClickOnAddNewSocietyAgreementNumberI = function (i) {
    it("Edit click on the add new society agreement number link number " + i, function () {
        pages.editDealScope.editClickOnTheAddNewSocietyAgreementNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.editSocietyAgreementNumberRightPanelNumberI = function (i, society_name) {
    it("Edit society agreement number right panel row number " + i + " and select the society " + society_name, function () {
        pages.editDealScope.editFillIntoTheSocietyAgreementNumberRightPanelNumberI(i, society_name);
        pages.editDealScope.editSelectSpecificValueFromSocietyDropDownSocietyAgreementForm();
    });
};

exports.editSocietyAgreementNumberCreatorLeftPanelNumberI = function (i, creator_name) {
    it("Edit society agreement number add creators left panel row number " + i + " and creator name " + creator_name, function () {
        pages.editDealScope.editFillIntoTheCreatorForSocietyAgreementNumberI(i, creator_name);
        pages.editDealScope.editSelectSpecificValueFromSocietyDropDownSocietyAgreementForm();
    });
};

exports.editClickOnAddCreatorSocietyAgreementNumberForm = function () {
    it("Click on the add creator society agreement number form ", function () {
        pages.editDealScope.editClickOnTheAddCreatorSocietyAgreementNumber();
        pages.editDealScope.waitForAjax();
    });
};

exports.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber = function (i, j, society_name) {
    it("Edit society agreement number creator number " + i + " society row number " + j + " and society name " + society_name, function () {
        pages.editDealScope.editFillIntoTheSocietyNumberAndNameLeftPanelCreatorForSocietyAgreementNumberCreatorIRowJ(i, j, society_name);
        pages.editDealScope.editSelectSpecificValueFromSocietyDropDownSocietyAgreementForm();
        pages.editDealScope.waitForAjax();
    });
};

exports.saveChangesSocietyAgreementNumberForm = function () {
    it("Save changes society agreement number form ", function () {
        pages.editDealScope.saveTheChangesSocietyAgreementNumberForm();
        //pages.editDealScope.waitForAjax();
    });
};


exports.clickOnWorkLinkFromScopeNumberI = function (i) {
    it("Click on work link from scope number  " + i, function () {
        pages.editDealScope.clickOnTheWorkLinkFromScopeNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.checkWorksCountOnScopeNumberI = function (i, count) {
    it("Check that the works count on scope number " + i + " is equal to " + count, function () {
        browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='switchToWorkLog(form.terms.activeCp.id, sp.id, false)'] span")).getText().then(function (promise) {
            console.log("Works count on scope is  : " + promise);
            expect(promise).toEqual(count);
        });
    });
};

exports.checkSocietyAgreementNumberTextTooltip = function () {
    it("Check the society agreement number text tooltip ", function () {
        browser.driver.findElement(By.css("div.modal-header h3 i")).getAttribute("data-tooltip").then(function (promise) {
            console.log("Society agreement number text tooltip is : " + promise);
            expect(promise).toEqual("Enter Society Agreement Numbers that correspond to Registration Recipients. These numbers will be included on CWR files.");
        });
    });
};

exports.checkCreatorToPublisherChainSocietyAgreementNumberTextTooltip = function () {
    it("Check the creator to publisher chain society agreement number text tooltip ", function () {
        browser.driver.findElement(By.css("div[data-ng-form='agreementNumbersCreatorForm'] h5 i")).getAttribute("data-tooltip").then(function (promise) {
            console.log("The creator to publisher chain society agreement number text tooltip is : " + promise);
            expect(promise).toEqual("Enter the unique number assigned by the Society that links Creators to the Publisher Chain (a.k.a. Writer to Original Publisher Agreement Number). This number is included on CWR files when Works by the specified Creators are delivered to this Scope.");
        });
    });
};

exports.checkPublisherChainAgreementNumbersSocietyAgreementNumberTextTooltip = function () {
    it("Check publisher chain agreement numbers society agreement number text tooltip ", function () {
        browser.driver.findElement(By.css("div[data-ng-form='societyAgreementsForm'] h5 i")).getAttribute("data-tooltip").then(function (promise) {
            console.log("Check the publisher chain agreement numbers society agreement number text tooltip is : " + promise);
            expect(promise).toEqual("Enter the unique number assigned by the Society that links the Publishers within the Chain (a.k.a. Original Publisher to Administrator Agreement Number). This number is included on CWR files when Works are delivered to this Scope.");
        });
    });
};

exports.checkDeleteCreatorSetSocietyAgreementNumberTextTooltip = function () {
    it("Check the delete creator set society agreement number text tooltip ", function () {
        browser.driver.findElement(By.css("div[data-ng-form='agreementNumbersCreatorsForm'] a[data-ng-click='data.removeCreatorSetFromChain(creator, $index, agreementNumbersCreatorForm)'] i")).getAttribute("data-tooltip").then(function (promise) {
            console.log("Delete creator set society agreement number text tooltip is : " + promise);
            expect(promise).toEqual("Remove Creator set");
        });
    });
};


exports.checkDeleteAgreementNumberSocietyAgreementNumberTextTooltip = function () {
    it("Check the delete agreement number society agreement number text tooltip ", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(2) a[data-ng-click='data.removeCreatorAgreementNumber(creator, societyAgreementCreator, $index)'] i")).getAttribute("data-tooltip").then(function (promise) {
            console.log("Delete agreement number society agreement number text tooltip is : " + promise);
            expect(promise).toEqual("Remove Agreement Number");
        });
    });
};

exports.checkDeletePublisherChainAgreementNumberSocietyAgreementNumberTextTooltip = function () {
    it("Check the delete publisher chain agreement number society agreement number text tooltip ", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(1) a[data-ng-click='data.removeAgreementNumber(societyAgreement, $index)'] i")).getAttribute("data-tooltip").then(function (promise) {
            console.log("Delete publisher chain agreement number society agreement number text tooltip is : " + promise);
            expect(promise).toEqual("Remove Agreement Number");
        });
    });
};

exports.checkAddOrViewSocietyAgreementNumberText = function (title) {
    it("Check the add or view society agreement number title link ", function () {
        pages.editDealScope.elems.addSocietyAgreementNumberLink.getText().then(function (promise) {
            console.log("The add or view society agreement number title link is : " + promise);
            expect(promise).toEqual(title);
        });
    });
};

exports.deleteCreatorSetSocietyAgreementNumberNumberI = function (i) {
    it("Delete the creator set society agreement number " + i, function () {
        pages.editDealScope.deleteTheCreatorSetSocietyAgreementNumberNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.deletePublisherChainSocietyAgreementNumberNumberI = function (i) {
    it("Delete the publisher chain society agreement number " + i, function () {
        pages.editDealScope.deleteThePublisherChainSocietyAgreementNumberNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.checkCancelSocietyAgreementNumberButtonLinkIsVisible = function () {
    it("Check the cancel society agreement number button link is visible", function () {
        expect(pages.editDealScope.elems.cancelSocietyAgreementNumber.isDisplayed()).toBeTruthy();
    });
};

exports.clickOnCancelSocietyAgreementNumberButtonLink = function () {
    it("Click on cancel button link society agreement number ", function () {
        pages.editDealScope.clickOnTheCancelSocietyAgreementNumberButtonLink();
        pages.editDealScope.waitForAjax();
    });
};

exports.checkSocietyAgreementNumberHeaderTextTooltip = function () {
    it("Check society agreement number header text title  ", function () {
        browser.driver.findElement(By.css("div.modal-header h3 div.break-word.overflow.pull-left.ng-binding")).getText().then(function (promise) {
            console.log("The society agreement number header text title is : " + promise);
            expect(promise).toContain("LONG");
        });
    });
};

exports.clickOnCreatorSetSocietyAgreementNumberArea = function () {
    it("Click on the creator set society agreement number area ", function () {
        pages.editDealScope.clickOnTheCreatorSetSocietyAgreementNumberArea();
    });
};

exports.checkContractualRightsTypeTextPresent = function () {
    it("Check the contractual rights type text value present in view mode ", function () {
        pages.editDealScope.checkTheContractualRightsTypeTextPresent();
    });
};

exports.checkContractualRightTypesIncludedOrExcludedTextValuePresent = function (text) {
    it("Check the contractual right types included or excluded text value present", function () {
        pages.editDealScope.checkTheContractualRightTypesIncludedOrExcludedTextValuePresent(text);
    });
};

exports.editCheckTheContractualTypePublishingRightsTextDisplayed = function (text) {
    it("Edit check the contractual type publishing rights text value displayed", function () {
        browser.driver.findElement(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(1)")).getText().then(function (promise) {
            console.log("Deal scope contractual right types publishing rights text value is : " + promise);
            expect(promise).toContain(text);
        });
    });
};

exports.editCheckTheContractualTypeMasterRightsTextDisplayed = function (text) {
    it("Edit check the contractual type master rights text value displayed", function () {
        browser.driver.findElement(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2)")).getText().then(function (promise) {
            console.log("Deal scope contractual right types master rights text value is : " + promise);
            expect(promise).toContain(text);
        });
    });
};

exports.editExpandMasterRights = function () {
    it("Edit expand master rights by clicking the arrow", function () {
        pages.editDealScope.editExpandTheMasterRights();
        pages.editDealScope.waitForAjax();
    });
};

exports.editCollapseMasterRights = function () {
    it("Edit collapse master rights by clicking the arrow", function () {
        pages.editDealScope.editCollapseTheMasterRights();
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnPublishingRightsCheckBox = function () {
    it("Edit click on publishing rights check box ", function () {
        pages.editDealScope.editClickOnThePublishingRightsCheckBox();
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnMasterRightsCheckBox = function () {
    it("Edit click on master rights check box ", function () {
        pages.editDealScope.editClickOnTheMasterRightsCheckBox();
        pages.editDealScope.waitForAjax();
    });
};

exports.editCheckTheContractualTypeAreaTextDisplayed = function (text) {
    it("Edit check the contractual type area text value displayed", function () {
        browser.driver.findElement(By.css("div[data-name='contRightTypes'] div.control-label")).getText().then(function (promise) {
            console.log("Deal scope contractual right types text value is : " + promise);
            expect(promise).toContain(text);
        });
    });
};

exports.editCheckTheContractualTypeAreaTextNotDisplayed = function (text) {
    it("Edit check the contractual type area text value is not displayed", function () {
        browser.driver.findElement(By.css("div[data-name='contRightTypes'] div.control-label")).getText().then(function (promise) {
            console.log("Deal scope contractual right types text value is : " + promise);
            expect(promise).not.toContain(text);
        });
    });
};

exports.editCheckTheContractualTypeAreaErrorMessageMandatoryRightSelected = function (text) {
    it("Edit check the contractual type area error message displayed at least one right selected", function () {
        browser.driver.findElement(By.css("div[data-ng-show='contRightTypes.$error.crtRequire']")).getText()
            .then(function (promise) {
                console.log("Deal scope contractual right types error message mandatory right is : " + promise);
                expect(promise).toEqual("At least one contractual right type must be selected in order to save this scope");
            });
    });
};

exports.editClickOnPublishingRightsNumberI = function (i) {
    it("Edit click on the publishing rights number " + i, function () {
        pages.editDealScope.editClickOnThePublishingRightsNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnMasterRightsNumberI = function (i) {
    it("Edit click on the master rights number " + i, function () {
        pages.editDealScope.editClickOnTheMasterRightsNumberI(i);
        pages.editDealScope.waitForAjax();
    });
};

exports.editClickOnLimitedToCheckBox = function () {
    it("Edit click on the limited to check box on contractual right types on scope ", function () {
        pages.editDealScope.editClickOnTheLimitedToCheckBox();
        pages.editDealScope.waitForAjax();
    });
};

addBasicStep(exports, page, 'Enter creator search terms');
addBasicStep(exports, page, 'Select creator search result by name');
addBasicStep(exports, page, 'Validate creators label');

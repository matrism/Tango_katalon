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
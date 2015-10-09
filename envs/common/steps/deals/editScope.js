"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.editDealScope = exports;

exports.selectScope1 = function () {
    it("Select scope 1", function () {
        pages.edit_deal_scope.clickOnScope1();
        pages.edit_deal_scope.waitForAjax();
    });
};

exports.selectScopeNumberI = function (i) {
    it("Select scope number  " + i, function () {
        pages.edit_deal_scope.clickOnScopeNumberI(i);
        pages.edit_deal_scope.waitForAjax();
    });
};

exports.validateShareScopesPopupDetailsContractPeriod1 = function () {
    it("Validate share scopes pop up details contract period 1 ", function () {
        pages.edit_deal_scope.clickOnShareIconOnScope();
        pages.edit_deal_scope.elems.shareScopesDetailsPopup.getText().
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
        pages.edit_deal_scope.clickOnShareIconOnScope();

        pages.edit_deal_scope.elems.shareScopesDetailsPopup.getText().
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
        pages.edit_deal_scope.clickOnShareIconOnScope();

        pages.edit_deal_scope.elems.shareScopesDetailsPopup.getText().
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
        pages.edit_deal_scope.clickOnShareIconOnScope();

        pages.edit_deal_scope.elems.shareScopesDetailsPopup.getText().
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
        pages.edit_deal_scope.validateThePublisherSharesTitle();
    });
};

exports.validatePublisherSharesHeaderTableTitle = function () {
    it("Validate the publisher shares header table title ", function () {
        pages.edit_deal_scope.validateThePublisherSharesHeaderTableTitle();
    });
};

exports.editPublisherSharesSet = function () {
    it("Edit the publisher shares set area ", function () {
        pages.edit_deal_scope.editThePublisherSharesSet();
        pages.edit_deal_scope.waitForAjax();
    });
};

exports.clickAddSocietyAgreementNumberLinkPublisherSharesSetChainI = function (i) {
    it("Click on add society agreement number link publisher shares set chain i", function () {
        pages.edit_deal_scope.clickOnAddSocietyAgreementNumberLinkPublisherSharesSetChainI(i);
    });
};

exports.validatePublisherSharesSetAddSocAgreemNumberTextChainI = function (i) {
    it("Validate the publisher shares set add society agreement number text chain i ", function (i) {
        pages.edit_deal_scope.validateThePublisherSharesSetAddSocAgreemNumberTextChainI(i)
    });
};

exports.validatePublisherSharesSetPublisherNameEOrPAChainI = function (i) {
    it("Validate the publisher shares set publisher name E or PA chain i ", function () {
        pages.edit_deal_scope.validateThePublisherSharesSetPublisherNameEOrPAChainI(i);
    });
};

exports.validatePublisherSharesSetPublisherNameAMChainI = function (i) {
    it("Validate the publisher shares set publisher name AM chain i", function () {
        pages.edit_deal_scope.validateThePublisherSharesSetPublisherNameAMChainI(i);
    });
};

exports.validatePublisherSharesSetSubtotalChainI = function (i) {
    it("Validate the publisher shares set subtotal chain i ", function () {
        pages.edit_deal_scope.validateThePublisherSharesSetSubtotalChainI(i);
    });
};

exports.editIntoFirstPublisherNameField = function (publisherName) {
    it("Edit in first publisher name field", function () {
        pages.edit_deal_scope.editInFirstPublisherNameField(publisherName);
    });
};

exports.editSelectRandomPublisherNameDropDownValue = function () {
    it("Edit-select random publisher name drop down value", function () {
        pages.edit_deal_scope.editSelectRandomPublisherNameDropDown();
    });
};

exports.editIntoFirstPublisherNameCollectField = function () {
    it("Edit into first publisher name collect field random value ", function () {
        pages.edit_deal_scope.editInFirstPublisherNameCollectPercent();
    });
};

exports.editIntoFirstPublisherNameAMCollectField = function () {
    it("Edit into first publisher name AM collect percent random value", function () {
        pages.edit_deal_scope.editInFirstPublisherNameAMCollectPercent();
    });
};

exports.editIntoFirstPublisherNameOwnField = function () {
    it("Edit into first publisher name own field random value", function () {
        pages.edit_deal_scope.editInFirstPublisherNameOwnPercent();
    });
};

exports.editIntoFirstPublisherNameCollectFieldSpecificValue = function (percent) {
    it("Edit into first publisher name collect field random value ", function () {
        pages.edit_deal_scope.editInFirstPublisherNameCollectPercentSpecificValue(percent);
    });
};

exports.editIntoFirstPublisherNameAMCollectFieldSpecificValue = function (percent) {
    it("Edit into first publisher name AM collect percent random value", function () {
        pages.edit_deal_scope.editInFirstPublisherNameAMCollectPercentSpecificValue(percent);
    });
};

exports.editIntoFirstPublisherNameOwnFieldSpecificValue = function (percent) {
    it("Edit into first publisher name own field random value", function () {
        pages.edit_deal_scope.editInFirstPublisherNameOwnPercentSpecificValue(percent);
    });
};

exports.editIntoFirstPublisherNameAMField = function (publisherNameAM) {
    it("Edit into first publisher name AM field", function () {
        pages.edit_deal_scope.editInFirstPublisherNameAMField(publisherNameAM);
    });
};

exports.editClearIntoFirstPublisherNameField = function () {
    it("Edit - clear into first publisher name field", function () {
        pages.edit_deal_scope.editClearFirstPublisherNameField();
    });
};

exports.editClearIntoFirstPublisherNameAMField = function () {
    it("Edit - clear into first publisher name AM field", function () {
        pages.edit_deal_scope.editClearFirstPublisherNameAMField();
    });
};

exports.editClearIntoFirstPublisherNameAMCollectField = function () {
    it("Edit - clear into first publisher name AM collect percent", function () {
        pages.edit_deal_scope.editClearFirstPublisherNameAMCollectPercent();
    });
};

exports.editClearIntoFirstPublisherNameOwnField = function () {
    it("Edit - clear into first publisher name own field", function () {
        pages.edit_deal_scope.editClearInFirstPublisherNameOwnPercent();
    });
};

exports.editClearIntoFirstPublisherNameCollectField = function () {
    it("Edit - clear into first publisher name collect field ", function () {
        pages.edit_deal_scope.editClearInFirstPublisherNameCollectPercent();
    });
};

exports.editSaveThePublisherShareSet = function () {
    it("Edit - save the publisher share set", function () {
        pages.edit_deal_scope.editSaveThePublisherShareSets();
        pages.edit_deal_scope.waitForAjax();
    });
};

exports.editCancelThePublisherShareSet = function () {
    it("Edit - cancel the publisher share set", function () {
        pages.edit_deal_scope.editCancelPublisherShareSets();
    });
};

exports.editSelectSpecificPublisherNameDropDown = function () {
    it("Edit - select specific value publisher name drop down", function () {
        pages.edit_deal_scope.editSelectTheSpecificPublisherNameDropDown("(53026414)\nwb music corp.");
    });
};

exports.editSelectDesiredPublisherTypeEOrPADropDown = function (publisherType) {
    it("Edit - select desired publisher type E or PA from drop down", function () {
        pages.edit_deal_scope.editSelectSpecificOptionEOrPAPublisherType(publisherType);
    });
};

exports.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA = function () {
    it("Edit -fill first publisher name fields based on publisher type E or PA", function () {
        pages.edit_deal_scope.elems.editFirstPublisherTypeValue.getText()
            .then(function (promise) {
                console.log("Publisher type is: " + promise);
                switch (promise) {
                    case "E":
                        console.log("We are on the E case");
                        pages.edit_deal_scope.editInFirstPublisherNameField("test");
                        pages.edit_deal_scope.editSelectRandomPublisherNameDropDown();
                        pages.edit_deal_scope.editInFirstPublisherNameOwnPercent();
                        pages.edit_deal_scope.editInFirstPublisherNameCollectPercent();
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.edit_deal_scope.editInFirstPublisherNameField();
                        pages.edit_deal_scope.editSelectRandomPublisherNameDropDown();
                        pages.edit_deal_scope.editInFirstPublisherNameCollectPercent();
                        break;
                }
            });
    });
};

exports.editClickAddChainLink = function () {
    it("Edit - click on add chain link", function () {
        pages.edit_deal_scope.editClickOnAddChainLink();
        pages.edit_deal_scope.waitForAjax();
    });
};

exports.editSelectDesiredPublisherTypeEOrPADropDownChainI = function (publisherType, i) {
    it("Edit - select desired publisher type E or PA from drop down", function () {
        pages.edit_deal_scope.editSelectSpecificOptionEOrPAPublisherTypeChainI(publisherType, i);
    });
};

exports.editIntoPublisherNameAMFieldChainI = function (i) {
    it("Edit - fill into publisher name AM field chain i ", function () {
        pages.edit_deal_scope.editPublisherNameAMFieldChainI(i);
    });
};

exports.editSelectSpecificPublisherNameDropDownChainI = function (i) {
    it("Edit - select specific value publisher name drop down chain i", function () {
        pages.edit_deal_scope.editSelectSpecificPublisherNameDropDownChainI("(53026414)\nwb music corp.", i);
    });
};

exports.editIntoPublisherNameAMCollectFieldChainI = function (i) {
    it("Edit - fill into publisher name AM collect chain i percent random value", function () {
        pages.edit_deal_scope.editPublisherNameAMCollectPercentChainI(i);
    });
};

exports.editValidateDeleteChainIIconPublisherShare = function (i) {
    it("Edit - validate delete chain i icon publisher share is present ", function () {
        pages.edit_deal_scope.editValidateTheDeleteIconChainIPublisherShareIsPresent(i);
    });
};

exports.editDeleteChainIPublisherShare = function (i) {
    it("Edit - delete chain i from publisher share set ", function () {
        pages.edit_deal_scope.editClickOnDeleteIconChainI(i);
        pages.edit_deal_scope.editConfirmOnDeleteModalDialog();
    });
};

exports.editClickPublisherSharesSetArea = function () {
    it("Edit - click on publisher shares set area ", function () {
        pages.edit_deal_scope.editClickOnPublisherShareSetArea();
    });
};

exports.editDeleteThePublisherShareSet = function () {
    it("Edit - delete the publisher share set ", function () {
        pages.edit_deal_scope.editDeletePublisherSharesSet();
        pages.edit_deal_scope.waitForAjax();
    });
};

exports.editConfirmModalDialogDirtyCheck = function () {
    it("Edit confirm modal dialog dirty check", function () {
        pages.edit_deal_scope.editConfirmModalDialog();
    });
};

exports.editCancelModalDialogDirtyCheck = function () {
    it("Edit cancel modal dialog dirty check", function () {
        pages.edit_deal_scope.editCancelModalDialog();
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
                        pages.edit_deal_scope.editPublisherNameFieldChainI(i);
                        pages.edit_deal_scope.editSelectRandomPublisherNameDropDownChainI(i);
                        pages.edit_deal_scope.editPublisherNameOwnPercentFieldChainI(i);
                        pages.edit_deal_scope.editPublisherNameCollectPercentFieldChainI(i);
                        break;
                    case "PA":
                        console.log("We are on the PA case");
                        pages.edit_deal_scope.editPublisherNameFieldChainI(i);
                        pages.edit_deal_scope.editSelectRandomPublisherNameDropDownChainI(i);
                        pages.edit_deal_scope.editPublisherNameCollectPercentFieldChainI(i);
                        break;
                }
            });
    });
};

exports.itEditPublisherShare = function () {
    describe("Edit publisher share set", function () {
        steps.edit_deal_scope.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
        steps.edit_deal_scope.editIntoFirstPublisherNameAMField("wb music corp");
        steps.edit_deal_scope.editSelectSpecificPublisherNameDropDown();
        steps.edit_deal_scope.editIntoFirstPublisherNameAMCollectField();
    });
};

exports.itEditPublisherSharePATypeWithMultipleThreeChains = function (i) {
    describe("Edit publisher share set with three chains", function () {
        steps.edit_deal_scope.editClickAddChainLink();
        steps.edit_deal_scope.editSelectDesiredPublisherTypeEOrPADropDownChainI("PA", i);
        steps.edit_deal_scope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.edit_deal_scope.editIntoPublisherNameAMFieldChainI(i);
        steps.edit_deal_scope.editSelectSpecificPublisherNameDropDownChainI(i);
        steps.edit_deal_scope.editIntoPublisherNameAMCollectFieldChainI(i);
    });
};

exports.itEditPublisherShareWithMultipleThreeChains = function (i) {
    describe("Edit publisher share set with three chains", function () {
        steps.edit_deal_scope.editClickAddChainLink();
        steps.edit_deal_scope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
        steps.edit_deal_scope.editIntoPublisherNameAMFieldChainI(i);
        steps.edit_deal_scope.editSelectSpecificPublisherNameDropDownChainI(i);
        steps.edit_deal_scope.editIntoPublisherNameAMCollectFieldChainI(i);
    });
};
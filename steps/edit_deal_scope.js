"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_scope");

if (steps.edit_deal_scope === undefined) {
    steps.edit_deal_scope = {

        selectScope1: function () {
            it("Select scope 1", function () {
                pages.edit_deal_scope.clickOnScope1();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        validatePublisherSharesTitle: function () {
            it("Validate the publisher shares set title ", function () {
                pages.edit_deal_scope.validateThePublisherSharesTitle();
            });
        },

        validatePublisherSharesHeaderTableTitle: function () {
            it("Validate the publisher shares header table title ", function () {
                pages.edit_deal_scope.validateThePublisherSharesHeaderTableTitle();
            });
        },

        editPublisherSharesSet: function () {
            it("Edit the publisher shares set area ", function () {
                pages.edit_deal_scope.editThePublisherSharesSet();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        clickAddSocietyAgreementNumberLinkPublisherSharesSetChainI: function (i) {
            it("Click on add society agreement number link publisher shares set chain i", function () {
                pages.edit_deal_scope.clickOnAddSocietyAgreementNumberLinkPublisherSharesSetChainI(i);
            });
        },

        validatePublisherSharesSetAddSocAgreemNumberTextChainI: function (i) {
            it("Validate the publisher shares set add society agreement number text chain i ", function (i) {
                pages.edit_deal_scope.validateThePublisherSharesSetAddSocAgreemNumberTextChainI(i)
            });
        },

        validatePublisherSharesSetPublisherNameEOrPAChainI: function (i) {
            it("Validate the publisher shares set publisher name E or PA chain i ", function () {
                pages.edit_deal_scope.validateThePublisherSharesSetPublisherNameEOrPAChainI(i);
            });
        },

        validatePublisherSharesSetPublisherNameAMChainI: function (i) {
            it("Validate the publisher shares set publisher name AM chain i", function () {
                pages.edit_deal_scope.validateThePublisherSharesSetPublisherNameAMChainI(i);
            });
        },

        validatePublisherSharesSetSubtotalChainI: function (i) {
            it("Validate the publisher shares set subtotal chain i ", function () {
                pages.edit_deal_scope.validateThePublisherSharesSetSubtotalChainI(i);
            });
        },

        editIntoFirstPublisherNameField: function (publisherName) {
            it("Edit in first publisher name field", function () {
                pages.edit_deal_scope.editInFirstPublisherNameField(publisherName);
            });
        },

        editSelectRandomPublisherNameDropDownValue: function () {
            it("Edit-select random publisher name drop down value", function () {
                pages.edit_deal_scope.editSelectRandomPublisherNameDropDown();
            });
        },

        editIntoFirstPublisherNameCollectField: function () {
            it("Edit into first publisher name collect field random value ", function () {
                pages.edit_deal_scope.editInFirstPublisherNameCollectPercent();
            });
        },

        editIntoFirstPublisherNameAMCollectField: function () {
            it("Edit into first publisher name AM collect percent random value", function () {
                pages.edit_deal_scope.editInFirstPublisherNameAMCollectPercent();
            });
        },

        editIntoFirstPublisherNameOwnField: function () {
            it("Edit into first publisher name own field random value", function () {
                pages.edit_deal_scope.editInFirstPublisherNameOwnPercent();
            });
        },

        editIntoFirstPublisherNameCollectFieldSpecificValue: function (percent) {
            it("Edit into first publisher name collect field random value ", function () {
                pages.edit_deal_scope.editInFirstPublisherNameCollectPercentSpecificValue(percent);
            });
        },

        editIntoFirstPublisherNameAMCollectFieldSpecificValue: function (percent) {
            it("Edit into first publisher name AM collect percent random value", function () {
                pages.edit_deal_scope.editInFirstPublisherNameAMCollectPercentSpecificValue(percent);
            });
        },

        editIntoFirstPublisherNameOwnFieldSpecificValue: function (percent) {
            it("Edit into first publisher name own field random value", function () {
                pages.edit_deal_scope.editInFirstPublisherNameOwnPercentSpecificValue(percent);
            });
        },

        editIntoFirstPublisherNameAMField: function (publisherNameAM) {
            it("Edit into first publisher name AM field", function () {
                pages.edit_deal_scope.editInFirstPublisherNameAMField(publisherNameAM);
            });
        },

        editClearIntoFirstPublisherNameField: function () {
            it("Edit - clear into first publisher name field", function () {
                pages.edit_deal_scope.editClearFirstPublisherNameField();
            });
        },

        editClearIntoFirstPublisherNameAMField: function () {
            it("Edit - clear into first publisher name AM field", function () {
                pages.edit_deal_scope.editClearFirstPublisherNameAMField();
            });
        },

        editClearIntoFirstPublisherNameAMCollectField: function () {
            it("Edit - clear into first publisher name AM collect percent", function () {
                pages.edit_deal_scope.editClearFirstPublisherNameAMCollectPercent();
            });
        },

        editClearIntoFirstPublisherNameOwnField: function () {
            it("Edit - clear into first publisher name own field", function () {
                pages.edit_deal_scope.editClearInFirstPublisherNameOwnPercent();
            });
        },


        editClearIntoFirstPublisherNameCollectField: function () {
            it("Edit - clear into first publisher name collect field ", function () {
                pages.edit_deal_scope.editClearInFirstPublisherNameCollectPercent();
            });
        },

        editSaveThePublisherShareSet: function () {
            it("Edit - save the publisher share set", function () {
                pages.edit_deal_scope.editSaveThePublisherShareSets();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        editCancelThePublisherShareSet: function () {
            it("Edit - cancel the publisher share set", function () {
                pages.edit_deal_scope.editCancelPublisherShareSets();
            });
        },

        editSelectSpecificPublisherNameDropDown: function () {
            it("Edit - select specific value publisher name drop down", function () {
                pages.edit_deal_scope.editSelectTheSpecificPublisherNameDropDown("(53026414)\nWB MUSIC CORP.");
            });
        },

        editSelectDesiredPublisherTypeEOrPADropDown: function (publisherType) {
            it("Edit - select desired publisher type E or PA from drop down", function () {
                pages.edit_deal_scope.editSelectSpecificOptionEOrPAPublisherType(publisherType);
            });
        },

        editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA: function () {
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
        },

        editClickAddChainLink: function () {
            it("Edit - click on add chain link", function () {
                pages.edit_deal_scope.editClickOnAddChainLink();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        editSelectDesiredPublisherTypeEOrPADropDownChainI: function (publisherType, i) {
            it("Edit - select desired publisher type E or PA from drop down", function () {
                pages.edit_deal_scope.editSelectSpecificOptionEOrPAPublisherTypeChainI(publisherType, i);
            });
        },

        editIntoPublisherNameAMFieldChainI: function (i) {
            it("Edit - fill into publisher name AM field chain i ", function () {
                pages.edit_deal_scope.editPublisherNameAMFieldChainI(i);
            });
        },

        editSelectSpecificPublisherNameDropDownChainI: function (i) {
            it("Edit - select specific value publisher name drop down chain i", function () {
                pages.edit_deal_scope.editSelectSpecificPublisherNameDropDownChainI("(53026414)\nWB MUSIC CORP.", i);
            });
        },

        editIntoPublisherNameAMCollectFieldChainI: function (i) {
            it("Edit - fill into publisher name AM collect chain i percent random value", function () {
                pages.edit_deal_scope.editPublisherNameAMCollectPercentChainI(i);
            });
        },

        editValidateDeleteChainIIconPublisherShare: function (i) {
            it("Edit - validate delete chain i icon publisher share is present ", function () {
                pages.edit_deal_scope.editValidateTheDeleteIconChainIPublisherShareIsPresent(i);
            });
        },

        editDeleteChainIPublisherShare: function (i) {
            it("Edit - delete chain i from publisher share set ", function () {
                pages.edit_deal_scope.editClickOnDeleteIconChainI(i);
                pages.edit_deal_scope.editConfirmOnDeleteModalDialog();
            });
        },

        editClickPublisherSharesSetArea: function () {
            it("Edit - click on publisher shares set area ", function () {
                pages.edit_deal_scope.editClickOnPublisherShareSetArea();
            });
        },

        editDeleteThePublisherShareSet: function () {
            it("Edit - delete the publisher share set ", function () {
                pages.edit_deal_scope.editDeletePublisherSharesSet();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        editConfirmModalDialogDirtyCheck: function () {
            it("Edit confirm modal dialog dirty check", function () {
                pages.edit_deal_scope.editConfirmModalDialog();
            });
        },

        editCancelModalDialogDirtyCheck: function () {
            it("Edit cancel modal dialog dirty check", function () {
                pages.edit_deal_scope.editCancelModalDialog();
            });
        },

        editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI: function (i) {
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
        },


        itEditPublisherShare: function () {
            describe("Edit publisher share set", function () {
                steps.edit_deal_scope.editFillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
                steps.edit_deal_scope.editIntoFirstPublisherNameAMField("wb music corp");
                steps.edit_deal_scope.editSelectSpecificPublisherNameDropDown();
                steps.edit_deal_scope.editIntoFirstPublisherNameAMCollectField();
            });
        },

        itEditPublisherSharePATypeWithMultipleThreeChains: function (i) {
            describe("Edit publisher share set with three chains", function () {
                steps.edit_deal_scope.editClickAddChainLink();
                steps.edit_deal_scope.editSelectDesiredPublisherTypeEOrPADropDownChainI("PA", i);
                steps.edit_deal_scope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
                steps.edit_deal_scope.editIntoPublisherNameAMFieldChainI(i);
                steps.edit_deal_scope.editSelectSpecificPublisherNameDropDownChainI(i);
                steps.edit_deal_scope.editIntoPublisherNameAMCollectFieldChainI(i);
            });
        },

        itEditPublisherShareWithMultipleThreeChains: function (i) {
            describe("Edit publisher share set with three chains", function () {
                steps.edit_deal_scope.editClickAddChainLink();
                steps.edit_deal_scope.editPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
                steps.edit_deal_scope.editIntoPublisherNameAMFieldChainI(i);
                steps.edit_deal_scope.editSelectSpecificPublisherNameDropDownChainI(i);
                steps.edit_deal_scope.editIntoPublisherNameAMCollectFieldChainI(i);
            });
        }


    };
}
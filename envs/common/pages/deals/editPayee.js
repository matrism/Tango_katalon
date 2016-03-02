"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.editDealPayee === undefined) {
    pages.editDealPayee = new ftf.pageObject({
        locators: {
            payeeHeaderTitleLink: {css: "ul.nav.nav-tabs li.ng-scope:nth-child(3) a"},
            payeeArea: {css: "div[tg-modular-edit-id='payeeByScopeName']"},
            editPayeeIcon: {css: "div[tg-modular-edit-id='payeeByScopeName'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editPayeeEditAreaButton: {css: 'button[data-ng-click="tgModularViewMethods.switchToEditView()"]'},
            editAddNewPayeeField: {css: "div[data-tg-typeahead-selected='DPAY.onNewPayeeSelect(match)'] div[ng-class='tgTypeaheadWrapClass']"},
            editAddNewPayeeInputField: {css: "div[data-tg-typeahead-selected='DPAY.onNewPayeeSelect(match)'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editPayeeCompanyNameCodeInputField: {css: "div[data-ng-model='newPayee.company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editScopePayeeSelectAllScopes: {model: 'newPayee._all_scopes'},
            editPayoutPayeeField: {css: "div[name='payoutDesignations'] div.tg-dropdown-button"},
            editPayoutAccountPayeeField: {css: "div[name='payeeAccount'] div.tg-dropdown-button"},
            editAddAllScopeToPayee: {css: "input[data-ng-model='DPAY.newPayee._all_scopes']"},
            editScopePayeeInputField: {css: "div[data-ng-model='newPayee._selected_scopes'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editSavePayeeFormButton: {css: "div[data-tg-modular-edit-id='payeeByScopeName'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            editCancelPayeeFormButton: {css: "div[data-tg-modular-edit-id='payeeByScopeName'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            editLegalRightPayeeInputField: {css: "input[name='legalRight']"},
            editDistributionPayeeInputField: {css: "input[name='distribution']"},
            editSavePayeeFooterButton: {css: "div.CONTROLS.ng-scope.page-footer button[data-ng-click='tgModularViewMethods.save();']"}
        },

        clickOnThePayeeHeaderLink: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.payeeHeaderTitleLink);
            pages.editDealPayee.elems.payeeHeaderTitleLink.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(".deal-payee.deal-payee-tab"))));
        },

        editThePayeeArea: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.payeeArea);
            pages.editDealPayee.elems.payeeArea.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editPayeeIcon));
            pages.editDealPayee.elems.editPayeeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddNewPayeeField));
        },

        editClickOnTheAddPrimaryLinkForScopeNumberI: function (i) {
            pages.base.scrollIntoView(element(By.css("div.payee-by-scope div.payee-by-scope__row-wrap.ng-scope:nth-child(" + (i+1) + ") div.payee-by-scope__subrow")));
            browser.driver.findElement(By.css("div.payee-by-scope div.payee-by-scope__row-wrap.ng-scope:nth-child(" + (i+1) + ") div.payee-by-scope__subrow")).click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddNewPayeeField));
        },

        editFillIntoAddNewPayeeFieldSpecificValue: function (payee) {
            pages.editDealPayee.elems.editAddNewPayeeField.click();
            pages.editDealPayee.elems.editAddNewPayeeInputField.sendKeys(payee);
        },

        editClickOnTheAddAllScopesToPayee: function () {
            pages.editDealPayee.elems.editAddAllScopeToPayee.click();
            pages.editDealPayee.waitForAjax();
        },

        setPayeeSelectAllScopes: function (selectAllScopes) {
            it("Set Payee Select All Scopes to " + selectAllScopes, function () {
                var cb = pages.editDealPayee.elems.editScopePayeeSelectAllScopes;

                cb.getAttribute('checked').then(function (val) {
                    if (val !== selectAllScopes) {
                        cb.click();
                    }

                    expect(cb.getAttribute('checked')).toBe(selectAllScopes);
                });
            });
        },

        editSelectTheRandomPayeeOrganisationFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(1) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editSelectTheRandomPayeePersonFromDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope:nth-child(2) ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editSelectTheRandomValueForPayeeCompanyNameCode: function () {
            pages.editDealPayee.elems.editPayeeCompanyNameCodeInputField.sendKeys("a");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editAddThePayoutToPayee: function () {
            pages.editDealPayee.elems.editPayoutPayeeField.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function (options) {
                    options[0].click();
                });
        },

        editAddThePayoutAccountToPayee: function () {
            pages.editDealPayee.elems.editPayoutAccountPayeeField.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function (options) {
                    options[0].click();
                });
        },


        editAssociateTheSpecificScopeNumberIToNewPayee: function (i) {
            var desiredOption;
            var specific_value = "Scope " + i;
            browser.driver.findElement(by.css("div[data-ng-model='DPAY.newPayee._selected_scopes'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']")).sendKeys(specific_value);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    options[0].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },


        editAssociateTheSpecificScopeNumberIToPayee: function (i) {
            var desiredOption;
            var specific_value = "Scope " + i;
            pages.editDealPayee.elems.editScopePayeeInputField.sendKeys(specific_value);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(specific_value) != -1) {
                                    desiredOption = option;
                                    return true;
                                }
                            }
                        )
                    });
                })
                .then(function clickOption() {
                    if (desiredOption) {
                        desiredOption.click();
                    }
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },


        editAssociateTheRandomScopeToPayee: function () {
            pages.editDealPayee.elems.editScopePayeeInputField.sendKeys("scope");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                });
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editSaveThePayeeForm: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editSavePayeeFormButton);
            pages.editDealPayee.elems.editSavePayeeFormButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealPayee.elems.editCancelPayeeFormButton));
        },

        editSaveThePayeePage: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editSavePayeeFooterButton);
            pages.editDealPayee.elems.editSavePayeeFooterButton.click();
        },

        editCancelThePayeeForm: function () {
            pages.editDealPayee.elems.editCancelPayeeFormButton.click();
            pages.editDealPayee.waitForAjax();
        },

        editFillIntoThePayeeLegalRightInputField: function () {
            pages.editDealPayee.elems.editLegalRightPayeeInputField.clear();
            pages.editDealPayee.elems.editLegalRightPayeeInputField.sendKeys("100");
        },

        editFillIntoThePayeeDistributionInputField: function () {
            pages.editDealPayee.elems.editDistributionPayeeInputField.clear();
            pages.editDealPayee.elems.editDistributionPayeeInputField.sendKeys("100");
        },

        editCheckNoScopeAssociatedToPayee: function () {
            browser.driver.findElement(By.css("div[data-ng-form='allPayeesForm']")).getText().
                then(function (promise) {
                    console.log("Check that no scope is associated to payee " + promise);
                    expect(promise).not.toContain("Scope");
                });
        },

        editCheckScopeNumberIAssociatedToPayee: function (i) {
            browser.driver.findElement(By.css("div[data-ng-if='::DPAY.isPayeeAssociated(payee)'] div[data-ng-repeat='payeeScope in payee.deal_scopes | filter: scopeFilter(scope) track by payeeScope.id']:nth-child(" + (i + 3) + ")  strong[data-ng-bind='::payeeScope.description']")).getText().
                then(function (promise) {
                    console.log("Check that scope number  : " + i + " is associated to payee " + promise);
                    expect(promise).toEqual("Scope " + i);
                });
        }
    })
}


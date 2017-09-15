"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.editDealPayee === undefined) {
    pages.editDealPayee = new ftf.pageObject({
        locators: {
            payeeHeaderTitleLink: {css: "ul.nav.nav-tabs li.ng-scope:nth-child(3) a"},
            byPayeeHeaderLink: {css: "div.deal-modular-edit.ng-scope.modular-edit.ng-pristine.ng-valid div.form-horizontal.ng-scope button[data-ng-click='tgModularViewMethods.switchToEditView()'] i"},
            payeeArea: {css: "div[tg-modular-edit-id='payeeByScopeName']"},
            oldPayeeArea: {css: "div[data-tg-modular-edit-id='payees']"},
            editPayeeIcon: {css: "div[tg-modular-edit-id='payeeByScopeName'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editOldPayeeIcon: {css: "div[data-tg-modular-edit-id='payees'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            editPayeeEditAreaButton: {css: 'button[data-ng-click="tgModularViewMethods.switchToEditView()"]'},
            editAddOldPayeeField: {css: "div[data-tg-typeahead-selected='DPAY.onPayeeSelect(match)'] div[ng-class='tgTypeaheadWrapClass']"},
            editAddOldPayeeInputField: {css: "div[data-tg-typeahead-selected='DPAY.onPayeeSelect(match)'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editAddNewPayeeField: {css: "[tg-modular-edit-id='payeeByScopeName'] div[tg-modular-view='edit'] div.payee-by-scope__row-wrap div.payee-by-scope__td button[ng-click='addPrimaryPayee(scope)']"},
            editAddNewPayeeInputField: {css: "div[ng-model='newPayee._deal_payee'] div[ng-class='tgTypeaheadWrapClass'] div.tg-typeahead__input-wrap input[ng-model='$term']"},
            editPayeeCompanyNameCodeInputField: {css: "div[data-ng-model='newPayee.company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editOldPayeeCompanyNameCodeInputField: {css: "div[data-ng-model='payee.company'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editScopePayeeSelectAllScopes: {model: 'newPayee._all_scopes'},
            editPayoutPayeeField: {css: "div[name='payoutDesignations'] div.tg-dropdown-button"},
            editPayoutAccountPayeeField: {css: "div[name='payeeAccount'] div.tg-dropdown-button"},
            editConfirmDeleteModalDialog: {css: "div.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            editAddAllScopeToPayee: {css: "input[data-ng-model='DPAY.newPayee._all_scopes']"},
            editScopePayeeInputField: {css: "div[data-ng-model='newPayee._selected_scopes'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editScopeOldPayeeInputField: {css: "div[data-ng-model='payee.selectedScope'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editSavePayeeFormButton: {css: "div[data-tg-modular-edit-id='payeeByScopeName'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            editCancelPayeeFormButton: {css: "div[data-tg-modular-edit-id='payeeByScopeName'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            editSaveOldPayeeFormButton: {css: "div[data-tg-modular-edit-id='newPayee'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
            editCancelOldPayeeFormButton: {css: "div[data-tg-modular-edit-id='newPayee'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
            editLegalRightPayeeInputField: {css: "input[name='legalRight']"},
            editDistributionPayeeInputField: {css: "input[name='distribution']"},
            editAddPayeeButtonPayeeForm: {css: "div.CONTROLS.clearfix.ng-scope button[data-ng-click='tgModularViewMethods.save()']"},
            editSavePayeeFooterButton: {css: "div.CONTROLS.clearfix.ng-scope button[data-ng-click='tgModularViewMethods.save()']"}
        },

        clickOnThePayeeHeaderLink: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.payeeHeaderTitleLink);
            pages.editDealPayee.elems.payeeHeaderTitleLink.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(".deal-payee.deal-payee-tab"))));
        },

        editClickOnTheByPayeeHeaderLink: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.byPayeeHeaderLink);
            pages.editDealPayee.elems.byPayeeHeaderLink.click();
            //browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddNewPayeeField));
        },

        editThePayeeArea: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.payeeArea);
            browser.actions().mouseMove(pages.editDealPayee.elems.payeeArea).perform();
            pages.editDealPayee.elems.editPayeeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.payee-by-scope div.payee-by-scope__row-wrap.ng-scope:nth-child(2) div.payee-by-scope__subrow"))));
        },

        editDeleteFirstScopeFromThePayee: function () {
            pages.base.scrollIntoView(element(by.css("button[ng-click='removePayeeDistribution(scopeDistribution, scope, $formExtend)']")));
            browser.driver.findElement(By.css("button[ng-click='removePayeeDistribution(scopeDistribution, scope, $formExtend)']")).click();
        },

        editDeletePayeeFromDealByThePayeeScreen: function () {
            pages.base.scrollIntoView(element(by.css("button[ng-click='removePayeeDistribution(scopeDistribution, scope, $formExtend)']")));
            browser.driver.findElement(By.css("button[ng-click='removePayeeDistribution(scopeDistribution, scope, $formExtend)']")).click();
        },

        editConfirmDeletePayeeModal: function () {
            browser.driver.findElement(By.css("div.modal-footer button[data-ng-click='ok()']")).click();
        },

        editTheOldPayeeArea: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.oldPayeeArea);
            browser.actions().mouseMove(pages.editDealPayee.elems.oldPayeeArea).perform();
            pages.editDealPayee.elems.editOldPayeeIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddOldPayeeField));
        },

        editClickOnTheAddPrimaryLinkForScopeNumberI: function (i) {
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div.payee-by-scope div.payee-by-scope__row-wrap.ng-scope:nth-child(" + (i + 1) + ") div.payee-by-scope__subrow"))));
            pages.base.scrollIntoView(element(By.css("div.payee-by-scope div.payee-by-scope__row-wrap.ng-scope:nth-child(" + (i + 1) + ") div.payee-by-scope__subrow")));
            browser.driver.findElement(By.css("div.payee-by-scope div.payee-by-scope__row-wrap.ng-scope:nth-child(" + (i + 1) + ") div.payee-by-scope__subrow button[data-ng-click='DPAY.addPrimaryPayee(scope)']")).click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddNewPayeeField));
        },

        editFillIntoAddNewPayeeFieldSpecificValue: function (payee) {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editAddNewPayeeField);
            pages.editDealPayee.elems.editAddNewPayeeField.click();
            pages.editDealPayee.elems.editAddNewPayeeInputField.sendKeys(payee);
        },

        editFillIntoOldPayeeFieldSpecificValue: function (payee) {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editAddOldPayeeField);
            pages.editDealPayee.elems.editAddOldPayeeField.click();
            pages.editDealPayee.elems.editAddOldPayeeInputField.sendKeys(payee);
        },

        editClickOnTheAddAllScopesToPayee: function () {
            pages.editDealPayee.elems.editAddAllScopeToPayee.click();
            pages.editDealPayee.waitForAjax();
        },

        editClickOnTheNextPayeeScopePage: function () {
            browser.driver.findElement(By.css("div.pull-right.pagination-advances.pagination.ng-isolate-scope ul li.ng-scope:nth-child(8)")).click();
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

        editSelectTheSpecificPayeePersonFromDropDown: function (payee_name) {
            var desiredOption;
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope:nth-child(1) div.overflow.ng-binding"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope:nth-child(1) div.overflow.ng-binding"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(payee_name) != -1) {
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
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope:nth-child(1) div.overflow.ng-binding"))));
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

        editSelectTheRandomValueForOldPayeeCompanyNameCode: function () {
            pages.editDealPayee.elems.editOldPayeeCompanyNameCodeInputField.sendKeys("a");
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
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope a"))));
            browser.driver.findElements(By.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope a"))
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


        editAssociateTheSpecificScopeNumberIToOldPayee: function (i) {
            var desiredOption;
            var specific_value = "Scope " + i;
            pages.editDealPayee.elems.editScopeOldPayeeInputField.sendKeys(specific_value);
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    options[0].click();
                });
            //.then(function findMatchingOption(options) {
            //    options.forEach(function (option) {
            //        option.getText().then(function doesOptionMatch(text) {
            //                if (text.indexOf(specific_value) != -1) {
            //                    desiredOption = option;
            //                    return true;
            //                }
            //            }
            //        )
            //    });
            //})
            //.then(function clickOption() {
            //    if (desiredOption) {
            //        desiredOption.click();
            //    }
            //});
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        },

        editAssociateTheRandomScopeToPayee: function () {
            pages.editDealPayee.elems.editScopeOldPayeeInputField.sendKeys("scope");
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


        editAddPayeeToPayeeForm: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editAddPayeeButtonPayeeForm);
            pages.editDealPayee.elems.editAddPayeeButtonPayeeForm.click();
            //browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddNewPayeeInputField));
        },

        editSaveTheOldPayeeForm: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editSaveOldPayeeFormButton);
            pages.editDealPayee.elems.editSaveOldPayeeFormButton.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealPayee.elems.editAddOldPayeeInputField));
        },

        editSaveThePayeePage: function () {
            pages.base.scrollIntoView(pages.editDealPayee.elems.editSavePayeeFooterButton);
            pages.editDealPayee.elems.editSavePayeeFooterButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealPayee.elems.editAddOldPayeeInputField));
        },

        editCancelThePayeeForm: function () {
            pages.editDealPayee.elems.editCancelPayeeFormButton.click();
            pages.editDealPayee.waitForAjax();
        },

        editFillIntoThePayeeLegalRightInputField: function () {
            pages.editDealPayee.elems.editLegalRightPayeeInputField.clear();
            pages.editDealPayee.elems.editLegalRightPayeeInputField.sendKeys("100");
        },

        editFillIntoThePayeeLegalRightInputFieldForScopeNumberI: function (i) {
            var element = browser.driver.findElement(By.css("div[data-tg-modular-edit-id='newPayee'] div[data-ng-repeat='payeeScope in payee.deal_scopes | filter: scopeFilter(scope) track by payeeScope.id']:nth-child(" + (i + 2) + ") input[name='legalRight']"));
            element.clear();
            element.sendKeys("100");
        },


        editFillIntoThePayeeDistributionInputField: function () {
            pages.editDealPayee.elems.editDistributionPayeeInputField.clear();
            pages.editDealPayee.elems.editDistributionPayeeInputField.sendKeys("100");
        },

        editFillIntoThePayeeDistributionInputFieldForScopeNumberI: function (i) {
            var element = browser.driver.findElement(By.css("div[data-tg-modular-edit-id='newPayee'] div[data-ng-repeat='payeeScope in payee.deal_scopes | filter: scopeFilter(scope) track by payeeScope.id']:nth-child(" + (i + 2) + ") input[name='distribution']"));
            element.clear();
            element.sendKeys("100");
        },

        editCheckNoScopeAssociatedToPayee: function () {
            browser.driver.findElement(By.css("div[data-ng-form='allPayeesForm']")).getText().then(function (promise) {
                console.log("Check that no scope is associated to payee " + promise);
                expect(promise).not.toContain("Scope");
            });
        },

        editCheckScopeNumberIAssociatedToPayee: function (i) {
            browser.driver.findElement(By.css("div[data-ng-if='::DPAY.isPayeeAssociated(payee)'] div[data-ng-repeat='payeeScope in payee.deal_scopes | filter: scopeFilter(scope) track by payeeScope.id']:nth-child(" + (i + 3) + ")  strong[data-ng-bind='::payeeScope.description']")).getText().then(function (promise) {
                console.log("Check that scope number  : " + i + " is associated to payee " + promise);
                expect(promise).toEqual("Scope " + i);
            });
        }
    })
}


'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealScope === undefined) {
    exports = module.exports = pages.editDealScope = new ftf.pageObject({
            locators: {
                editScopeAreaElement: {css: "div[data-tg-modular-edit-id='dealScope'] div.DETAIL.ng-scope"},
                editScopeIcon: {css: "div[data-tg-modular-edit-id='dealScope'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
                addScopeIcon: {css: 'a[ng-click="addScope(); scrollScopeMenu();"] i[class="column-add-button-icon fa fa-plus"]'},
                contractTypeDropDown: {css: "select[name='scopeContractType'] option"},
                editTerritoryField: {css: "div[class='tg-territory__input-container'] div[ng-class='tgTypeaheadWrapClass']"},
                editTerritoryInput: {css: "div[class='tg-territory__input-container'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
                editTerritoryDeleteIcon: {css: "div[ng-model='modularEditModels.model.deal_scope_territories.territories'] span[ng-click='!$isDisabled() && $removeTag($tag); $event.stopPropagation();']"},
                editTerritoryDropDown: {css: "div.tg-territory ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
                publisherSharesTitle: {css: "div[name='scopeForm'] div.section-header-borderless.publisher-shares.ps-section-header.clearfix"},
                publisherSharesSetArea: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] div.DETAIL.ng-scope"},
                publisherSharesSetEditIcon: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
                editPublisherSharesHeaderTitles: {css: "div[name='scopeForm'] div[data-tg-modular-edit-id='publisherShareSets'] div.clearfix.ps-heading"},
                scope1: {css: "div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']"},
                editAddPublisherShareSetLink: {css: "div.publisher-share-totals a[data-ng-click='addChain(modularEditModels.model.id, form.terms.activeScope.id);']"},
                editYesSocietyAwardCreditPss: {css: "#deal-publisher button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(1)"},
                editNoSocietyAwardCreditPss: {css: "#deal-publisher button[data-ng-model='modularEditModels.model.society_award_credit']:nth-child(2)"},
                editFirstPublisherNameField: {css: "#deal-publisher div[data-name='dealChainsForm'] div.publisher-row.clearfix div[name='acquirer'] input"},
                editFirstPublisherOwnPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"},
                editFirstPublisherCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"},
                editFirstPublisherNameAMField: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div[name='acquirer'] input"},
                editFirstPublisherNameAMCollectPercent: {css: "#deal-publisher div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"},
                editPublisherNameDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
                editFirstPublisherTypeEOrPAArrow: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-caret.fa.fa-caret-down"},
                editFirstPublisherTypeEOrPADropDown: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"},
                editFirstPublisherTypeValue: {css: "#deal-publisher div[data-name='dealChainsForm'] div.ng-scope:nth-child(1) div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-label.overflow"},
                editFirstPublisherTypeText: {css: "#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button"},
                editSavePublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
                editCancelPublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button.btn.btn-cancel.ng-binding.pull-left"},
                editDeletePublisherShareSet: {css: "div[data-tg-modular-edit-id='publisherShareSets'] div.CONTROLS.ng-scope button[data-ng-show='!!tgDeleteButton']"},
                editAddChainLink: {css: "#deal-publisher a[data-ng-click='addChain(modularEditModels.activeScope.publisher_share_set_id, modularEditModels.activeScope.id)']"},
                modalDialog: {css: "div.modal-dialog.ng-scope"},
                confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"},
                cancelModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
                deletePssModalDialog: {css: "div.modal.fade.in div.ng-scope"},
                confirmDeletePssModalDialog: {css: "div.ng-scope div.modal-footer button[data-ng-click='ok()']"},
                cancelDeletePssModalDialog: {css: "div.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
                addCreatorLinkSocietyAgreementNumberForm: {css: "a[data-ng-click='data.addCreatorToChain()']"},
                saveAddSocietyAgreementNumberForm: {css: "button[data-ng-click='data.save(data.isAgreementsNumbersValid)']"},
                shareIconOnScope: {css: "div[data-ng-if='isScopeShared(sp.id)'] a.icon.share-icon.ng-binding i.fa.fa-share"},
                shareScopeTextIcons: {css: "div[data-ng-show='isPublisherShareSetShared(form.terms.activePublisherShareSet.id)']"},
                shareScopesDetailsPopup: {css: "div.shared-scope-popup.m-arrow"},
                shareScopesDetailsPopupContractPeriods: {css: "div[data-ng-show='form.popups.sharedScope'] ul li.ng-scope a"},
                saveEditScope: {css: "div[data-tg-modular-edit-id ='dealScope'] div.CONTROLS.ng-scope button[data-ng-click='tgModularViewMethods.save();']"},
                saveChanges: {css: "div[ng-hide='stateHolder.isSavingEntity'] button[ng-click='saveFreshlyAddedScope()']"},
                editShareUnshareDeleteScopeIcon: {css: "div[data-ng-click='$event.preventDefault()'] i"},
                editFirstScope: {css: "ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']"},
                editDeleteScopeIcon: {css: "ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)'] div.ng-scope i.fa.fa-times.ng-scope"},
                editShareScopeLink: {css: "a[data-ng-click='showShareScopeModal(sp.id)']"},
                editUnshareScopeLink: {css: "a[data-ng-click='showUnshareScopeModal(sp.id)']"},
                editDeleteScopeLink: {css: "a[data-ng-click='showDeleteScopeModal(sp.id, canScopeBeDeleted(sp.id))']"},
                editCopyScopeLink: {css: "a[data-ng-click='showScopeCopySection(sp.id)']"},
                copyScopeText: {css: "div[data-ng-form='scopeCopyForm'] p.title"},
                doneButtonShareScopeModalDilaog: {css: "button[data-ng-click='data.done()']"},
                editScopeTextArea: {css: "div[data-tg-modular-edit-id='dealScope'] div.DETAIL.ng-scope"},
                editScopeWorkForHireTextValue: {css: "div[data-tg-modular-edit-id='dealScope'] div.DETAIL.ng-scope div:nth-child(6) div"},
                numberOfCopiesTooltip: {css: "div[data-ng-form='scopeCopyForm'] label.control-label i.fa.fa-info-circle.ng-scope"},
                numberOfCopiesInputField: {css: "div[data-ng-form='scopeCopyForm'] input[data-ng-model='sp.copy.num']"},
                numberOfCopiesErrorTriangle: {css: "div[data-ng-form='scopeCopyForm'] i.fa.fa-exclamation-triangle.error-text.ng-scope"},
                copyPublisherShareInCopyScopeModalButton: {css: "div[data-ng-form='scopeCopyForm'] div[data-ng-if='copyScopeHas.PubShares'] button[data-ng-model='sp.copy.pubShare']:nth-child(2)"},
                sharePublisherShareInCopyScopeModalButton: {css: "div[data-ng-form='scopeCopyForm'] div[data-ng-if='copyScopeHas.PubShares'] button[data-ng-model='sp.copy.pubShare']:nth-child(1)"},
                copyRoyaltyRatesInCopyScopeModalButton: {css: "div[data-ng-form='scopeCopyForm'] div[data-ng-if='copyScopeHas.Rates'] button[data-ng-model='sp.copy.rates']:nth-child(2)"},
                shareRoyaltyRatesInCopyScopeModalButton: {css: "div[data-ng-form='scopeCopyForm'] div[data-ng-if='copyScopeHas.Rates'] button[data-ng-model='sp.copy.rates']:nth-child(1)"},
                payeesCopyScopeModal: {css: "div[data-ng-form='scopeCopyForm'] div[data-ng-if='copyScopeHas.Payees']"},
                editCopyScopeButtonLink: {css: "div[data-ng-form='scopeCopyForm'] button[data-ng-click='copyScope(sp.id)']"},
                cancelCopyScopeButton: {css: "div[data-ng-form='scopeCopyForm'] button.btn.btn-cancel.pull-left"},
                editOverridePssIcon: {css: "div[data-ng-click='form.popups.overridenSubPublishers = !form.popups.overridenSubPublishers'] a[data-ng-click='showSubPubOverrideForm()'] i"},
                editSubPublisherOverridePssField: {css: "div[name='subPublisherOverride'] div[ng-class='tgTypeaheadWrapClass']"},
                editSubPublisherOverridePssInputField: {css: "div[name='subPublisherOverride'] input[ng-model='$term']"},
                editTerritoryOverridePssField: {css: "div[ng-model='form.subPubOverride.override_territories.territories'] div.tg-territory div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass']"},
                editTerritoryOverridePssFieldInput: {css: "div[ng-model='form.subPubOverride.override_territories.territories'] div.tg-territory div.tg-territory__input-container div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
                editCancelOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='showSubPubOverrideForm()']"},
                editDoneOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='subPubOverrideForm.$invalid || addSubPublisherOverride(form.subPubOverride, modularEditModels.model.id, false)']"},
                editAddAnotherOverridePublisherShareSetButton: {css: "div[data-ng-show='form.show.buttons.subPubOverride.buttons'] button[data-ng-click='subPubOverrideForm.$invalid || addSubPublisherOverride(form.subPubOverride, modularEditModels.model.id, true)']"},
                editSharePublisherShareSetIcon: {css: "div[data-ng-click='showSharePublisherShareSetSection(true)'] i"},
                editUseThisPublisherShareSetButton: {css: "button[data-ng-click='sharePubShareSet(pss.id, modularEditModels.activeScope.id)']"},
                addSocietyAgreementNumberLink: {css: "a[data-ng-click='showSocietyAgreementNumbersModal(chain)']"},
                cancelSocietyAgreementNumber: {css: "button[data-ng-click='data.cancel(data.isFormDirty)']"},
                saveChangesSocietyAgreementNumber: {css: "button[data-ng-click='data.save(data.isAgreementsNumbersValid)']"},
                contractualRightTypeTextElement: {css: "div[data-tg-modular-edit-id='dealScope'] div.DETAIL.ng-scope div:nth-child(2) div.view-row.clearfix:nth-child(4) label"},
                contractualRightTypeTextValueElement: {css: "div[data-tg-modular-edit-id='dealScope'] div.DETAIL.ng-scope div:nth-child(2) div.view-row.clearfix:nth-child(4) div"},
                editExpandMasterRightsElement: {css: "div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2) i.fa.pull-right.fa-sort-down"},
                editCollapseMasterRightsElement: {css: "div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2) i.fa.pull-right.fa-sort-up"},
                editPublishingRightsCheckBox: {css: "div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(1) div[data-ng-click='onContRightTypesSelectAllClick(modularEditModels.model, value, $event)'] i"},
                editMasterRightsCheckBox: {css: "div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2) div[data-ng-click='onContRightTypesSelectAllClick(modularEditModels.model, value, $event)'] i"},
                editLimitedToCheckBoxContractualType: {css: "input[data-ng-model='modularEditModels.model.right_types_include_or_exclude']"},
                editUnsharePublisherShareSetLink: {css: "a[data-ng-click='showUnsharePubShareSetModal(form.terms.activeScope.id, true)']"},
                editConfirmUnsharePssModalDialog: {css: "div.modal-footer button[data-ng-click='data.unshare()']"},
                editCreatorInputField: {css: "div[data-ng-model='modularEditModels.model.creators'] input[ng-model='$term']"},
                editWorkForHireTextTooltip: {css: "label[for='work_for_hire'] i"},
                editYesWorkForHire: {css: "button[data-ng-model='modularEditModels.model.work_for_hire']:nth-child(1)"},
                editNoWorkForHire: {css: "button[data-ng-model='modularEditModels.model.work_for_hire']:nth-child(2)"},
                numberOfScopesPerDeal: {css: "div.deal-terms-affix.m-view h3 span[data-ng-show='form.terms.scopeSearchTags.length === 0'] span[data-ng-bind='form.terms.numberOfScopesUnderActiveCp']"}
            },

            editTheScopeArea: function () {
                pages.editDealScope.elems.editScopeAreaElement.click();
                pages.editDealScope.elems.editScopeIcon.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editTerritoryField))
            },

            addScopeForm: function () {
                pages.editDealScope.elems.addScopeIcon.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.contractTypeDropDown));
            },

            selectContractTypeScope: function (specific_value) {
                var desiredOption;
                browser.driver.findElements(By.css("select[name='scopeContractType'] option"))
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
            },

            editDeleteTheExistingTerritoryFromScope: function () {
                pages.editDealScope.elems.editTerritoryField.click();
                pages.editDealScope.elems.editTerritoryDeleteIcon.click();
            },

            addTheSpecificTerritoryByTypingToScope: function (territory) {
                pages.editDealScope.elems.editTerritoryField.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editTerritoryInput));
                pages.editDealScope.elems.editTerritoryInput.sendKeys(territory);
                steps.base.sleep(5000);
            },

            selectSpecificCountry: function (country) {
                var desiredOption;
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editTerritoryDropDown));
                browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function findMatchingOption(options) {
                        options.forEach(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.indexOf(country) != -1) {
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
            },

            editClickOnAddPublisherShareSetLink: function () {
                pages.editDealScope.elems.editAddPublisherShareSetLink.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editFirstPublisherNameField));
            },

            editClickOnTheYesSocietyAwardCreditPublisherShareSet: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editYesSocietyAwardCreditPss);
                pages.editDealScope.elems.editYesSocietyAwardCreditPss.click();
            },

            clickOnScope1: function () {
                pages.editDealScope.elems.scope1.click();
            },

            editSaveTheScopeChanges: function () {
                pages.editDealScope.elems.saveEditScope.click();
                pages.editDealScope.waitForAjax();
                browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.editTerritoryField));
            },

            waitForTheScopeNumberIToBeVisible: function (i) {
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))));
            },

            scopeMenuItems: function () {
                return $$('.scope-menu-item');
            },

            clickOnScopeNumberI: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")")));
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))));
                //browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")")).click();
                //browser.actions().mouseMove(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))).perform();
                browser.actions().mouseMove(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))).perform();
                //browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")")).click();
                browser.actions().click(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))).perform();
            },

            checkOverrideNumbersAddedOnScope: function (i) {
                pages.base.scrollIntoView(element(by.css("div[data-ng-click='form.popups.overridenSubPublishers = !form.popups.overridenSubPublishers'] div.pull-left.ng-binding")));
                browser.driver.findElement(by.css("div[data-ng-click='form.popups.overridenSubPublishers = !form.popups.overridenSubPublishers'] div.pull-left.ng-binding")).getText().then(function (promise) {
                    console.log("Number of overrides and text is : " + promise);
                    expect(promise).toEqual("Override (" + i + ")");
                });
            },

            checkTheScopeNumberITextValue: function (i) {
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise);
                    expect(promise).toContain("Scope " + i);
                });
            },

            checkTheScopeNumberITextValueHasNotPss: function (i) {
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise + " and it doesn't have Pss");
                    expect(promise).not.toContain("Pub Shares");
                });
            },

            checkTheScopeNumberITextValueHasNotRr: function (i) {
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise + " and it doesn't have Rr");
                    expect(promise).not.toContain("Rates");
                });
            },

            checkTheScopeNumberINamePssValue: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")));
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise);
                    expect(promise).toContain("Scope " + i);
                    expect(promise).toContain("Pub Shares");
                });
            },

            checkTheScopeNumberINameRatesValue: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")));
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise);
                    expect(promise).toContain("Scope " + i);
                    expect(promise).toContain("Rates");
                });
            },

            checkTheScopeNumberINamePayeesValue: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")));
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise);
                    expect(promise).toContain("Scope " + i);
                    expect(promise).toContain("Payees");
                });
            },

            checkTheScopeNumberINameNotPayeesValue: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")));
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise);
                    expect(promise).toContain("Scope " + i);
                    expect(promise).not.toContain("Payees");
                });
            },

            checkTheScopeNumberINameRatesNotValue: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")));
                browser.driver.findElement(By.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div.scope-heading.clearfix.relative")).getText().then(function (promise) {
                    console.log("Scope text is : " + promise);
                    expect(promise).toContain("Scope " + i);
                    expect(promise).not.toContain("Rates");
                });
            },

            checkTheScopeRateSetDate: function (date) {
                pages.base.scrollIntoView(element(by.css("div.rate-set-summary-table table.rate-sets-table tbody  tr.ng-scope:nth-child(1) td:nth-child(4)")));
                browser.driver.findElement(By.css("div.rate-set-summary-table table.rate-sets-table tbody  tr.ng-scope:nth-child(1) td:nth-child(4)")).getText().then(function (promise) {
                    console.log("Effective date is : " + promise);
                    expect(promise).toEqual(date);
                });
            },

            checkTheScopeRateSetDateNotEqual: function (date) {
                pages.base.scrollIntoView(element(by.css("div.rate-set-summary-table table.rate-sets-table tbody  tr.ng-scope:nth-child(1) td:nth-child(4)")));
                browser.driver.findElement(By.css("div.rate-set-summary-table table.rate-sets-table tbody  tr.ng-scope:nth-child(1) td:nth-child(4)")).getText().then(function (promise) {
                    console.log("Effective date is : " + promise);
                    expect(promise).not.toEqual(date);
                });
            },

            clickOnShareIconOnScope: function () {
                pages.editDealScope.elems.shareIconOnScope.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.shareScopesDetailsPopup));
            },

            validateThePublisherSharesTitle: function () {
                pages.editDealScope.elems.publisherSharesTitle.getText().then(function (promise) {
                    console.log("Publisher shares set title is : " + promise);
                    expect(promise).toEqual("PUBLISHER SHARES");
                });
            },

            validateThePublisherSharesHeaderTableTitle: function () {
                pages.editDealScope.elems.editPublisherSharesHeaderTitles.getText().then(function (promise) {
                    console.log("Publisher shares header titles are : " + promise);
                    expect(promise).toContain("Publisher Role / Name");
                    expect(promise).toContain("Own");
                    expect(promise).toContain("Collect");
                });
            },

            editClickOnPublisherShareSetArea: function () {
                pages.editDealScope.elems.publisherShareSetArea.click();
            },


            editThePublisherSharesSet: function () {
                //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.publisherSharesSetArea));
                pages.base.scrollIntoView(pages.editDealScope.elems.publisherSharesSetArea);
                pages.editDealScope.elems.publisherSharesSetArea.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.publisherSharesSetEditIcon));
                pages.base.scrollIntoView(pages.editDealScope.elems.publisherSharesSetEditIcon);
                pages.editDealScope.elems.publisherSharesSetEditIcon.click();
            },

            publisherShareChain: function (i) {
                return element.all(by.repeater(
                    'chain in modularEditModels.model._chains track by chain.id'
                )).get(i);
            },

            nonCtrlCreatorShare: function () {
                var nccs = {};

                nccs.component = function (i) {
                    var el = $$('[data-ng-click="setNonControlledCreatorShare(chain.id)"]').get(i);
                    pages.base.scrollIntoView(el);
                    return el;
                };

                nccs.label = function (i) {
                    return pages.editDealScope.publisherShareChain(i).element(by.cssContainingText(
                        'span', 'Non-Controlled Creator Share'
                    ));
                };

                nccs.societyAgreementNumberLinkParent = function () {
                    return pages.editDealScope.elems.addSocietyAgreementNumberLink.element(
                        by.xpath('parent::div')
                    );
                };

                nccs.validateLabelPosition = function (i) {
                    var element = nccs.societyAgreementNumberLinkParent().element(by.cssContainingText(
                        'span', 'Non-Controlled Creator Share'
                    ));
                    expect(pages.base.isPresentAndDisplayed(element)).toBeTruthy();
                };

                nccs.checkbox = function (i) {
                    return nccs.component(i).$('i');
                };

                nccs.helpIcon = function (i) {
                    return nccs.component(i).element(by.xpath('following-sibling::i'));
                };

                nccs.getText = function (i) {
                    return nccs.component(i).getText();
                };

                nccs.expectCheckboxNotChecked = function (i) {
                    expect(nccs.checkbox(i).getAttribute('class')).toBe('fa fa-square-o');
                };

                nccs.expectCheckboxChecked = function (i) {
                    expect(nccs.checkbox(i).getAttribute('class')).toBe('fa fa-check-square-o');
                };

                nccs.click = function (i) {
                    nccs.component(i).click();
                };

                nccs.hoverHelp = function (i) {
                    var el = nccs.helpIcon(i);
                    browser.actions().mouseMove(el).perform();
                };

                nccs.helpMessage = function (i) {
                    return nccs.helpIcon(i).getAttribute('data-tooltip');
                };

                return nccs;
            }(),

            clickOnAddSocietyAgreementNumberLinkPublisherSharesSetChainI: function (i) {
                var element = browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']"));
                element.click();
            },

            validateThePublisherSharesSetAddSocAgreemNumberTextChainI: function (i) {
                element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']")).getText().then(function (promise) {
                    console.log("Add society agreement number text message publisher shares set is  : " + promise);
                    expect(promise).toEqual("Add Society Agreement Numbers");
                });
            },

            validateThePublisherSharesSetPublisherNameEOrPAChainI: function (i) {
                element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") div[data-ng-repeat='share in chain.shares']:nth-child(2)")).getText().then(function (promise) {
                    console.log("Publisher name text values publisher shares set are  : " + promise);
                    expect(promise).toContain("%");
                    expect(promise).not.toEqual("");
                });
            },

            validateThePublisherSharesSetPublisherNameAMChainI: function (i) {
                element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") div[data-ng-repeat='share in chain.shares']:nth-child(3)")).getText().then(function (promise) {
                    console.log("Publisher name AM text values publisher shares set are  : " + promise);
                    expect(promise).toContain("AM");
                    expect(promise).toContain("%");
                    expect(promise).not.toEqual("");
                });
            },

            validateThePublisherSharesSetSubtotalChainI: function (i) {
                element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ") div.ps-section__subtotal.clearfix")).getText().then(function (promise) {
                    console.log("Publisher name subtotal text values publisher shares set are  : " + promise);
                    expect(promise).toContain("SUBTOTAL");
                    expect(promise).toContain("%");
                    expect(promise).not.toEqual("");
                });
            },

            editInFirstPublisherNameField: function (publisherName) {
                var element = pages.editDealScope.elems.editFirstPublisherNameField;
                pages.base.scrollIntoView(element);
                element.clear();
                element.sendKeys(publisherName);
            },

            editInFirstPublisherNameOwnPercent: function () {
                var percent = (Math.random() * 3 + 30).toFixed(2),
                    element = pages.editDealScope.elems.editFirstPublisherOwnPercent;
                pages.base.scrollIntoView(element);
                element.clear();
                element.sendKeys(percent);
            },

            editInFirstPublisherNameCollectPercent: function () {
                var percent = (Math.random() * 9 + 1).toFixed(2),
                    element = pages.editDealScope.elems.editFirstPublisherCollectPercent;
                pages.base.scrollIntoView(element);
                element.clear();
                element.sendKeys(percent);
            },

            editInFirstPublisherNameOwnPercentSpecificValue: function (percent) {
                pages.editDealScope.elems.editFirstPublisherOwnPercent.clear();
                pages.editDealScope.elems.editFirstPublisherOwnPercent.sendKeys(percent);
            },

            editInFirstPublisherNameCollectPercentSpecificValue: function (percent) {
                pages.editDealScope.elems.editFirstPublisherCollectPercent.clear();
                pages.editDealScope.elems.editFirstPublisherCollectPercent.sendKeys(percent);
            },

            editInFirstPublisherNameAMField: function (publisherNameAM) {
                var element = pages.editDealScope.elems.editFirstPublisherNameAMField;
                pages.base.scrollIntoView(element);
                element.clear();
                element.sendKeys(publisherNameAM);
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editPublisherNameDropDownData));
            },

            editInFirstPublisherNameAMCollectPercent: function () {
                var percent = (Math.random() * 9 + 1).toFixed(2),
                    element = pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent;
                pages.base.scrollIntoView(element);
                element.clear();
                element.sendKeys(percent);
            },

            savePageButton: function () {
                return element(by.cssContainingText(
                    '.ps-editor .CONTROLS button', 'Save'
                ));
            },

            editSaveTheChangesPage: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.saveChanges);
                pages.editDealScope.elems.saveChanges.click();
                pages.editDealScope.waitForAjax();
            },

            editInFirstPublisherNameAMCollectPercentSpecificValue: function (percent) {
                pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.clear();
                pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.sendKeys(percent);
            },

            editClearFirstPublisherNameField: function () {
                pages.editDealScope.elems.editFirstPublisherNameField.clear();
            },

            editClearFirstPublisherNameAMField: function () {
                pages.editDealScope.elems.editFirstPublisherNameAMField.clear();
            },

            editClearInFirstPublisherNameOwnPercent: function () {
                pages.editDealScope.elems.editFirstPublisherOwnPercent.clear();
            },

            editClearInFirstPublisherNameCollectPercent: function () {
                pages.editDealScope.elems.editFirstPublisherCollectPercent.clear();
            },

            editClearFirstPublisherNameAMCollectPercent: function () {
                pages.editDealScope.elems.editFirstPublisherNameAMCollectPercent.clear();
            },

            editSelectRandomPublisherNameDropDown: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editPublisherNameDropDownData));
                browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function (options) {
                        var randomNumber = Math.floor((Math.random() * 10));
                        var element = options[0];
                        pages.base.scrollIntoView(element);
                        element.click();
                    })
            },

            editSelectTheSpecificPublisherNameDropDown: function (publisherName) {
                var desiredOption;
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editPublisherNameDropDownData));
                browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function findMatchingOption(options) {
                        options.forEach(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.toLowerCase().indexOf(publisherName) != -1) {
                                        desiredOption = option;
                                        return true;
                                    }
                                }
                            )
                        });
                    })
                    .then(function clickOption() {
                        if (desiredOption) {
                            pages.base.scrollIntoView(desiredOption);
                            desiredOption.click();
                        }
                    });
            },

            editSelectSpecificOptionEOrPAPublisherType: function (publisher) {
                var desiredOption;
                pages.editDealScope.elems.editFirstPublisherTypeEOrPAArrow.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.editFirstPublisherTypeEOrPADropDown));
                browser.driver.findElements(by.css("#deal-publisher div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"))
                    .then(function findMatchingOption(options) {
                        options.some(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.indexOf(publisher) != -1) {
                                        desiredOption = option;
                                        return true;
                                    }
                                }
                            )
                        });
                    })
                    .then(function clickOption() {
                        if (desiredOption) {
                            pages.base.scrollIntoView(desiredOption);
                            desiredOption.click();
                        }
                    });
            },

            editSaveThePublisherShareSets: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editSavePublisherShareSet);
                pages.editDealScope.elems.editSavePublisherShareSet.click();
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div[data-tg-modular-view='detail']"))));
            },

            editSaveThePublisherShareSetsWithModal: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editSavePublisherShareSet);
                pages.editDealScope.elems.editSavePublisherShareSet.click();
                browser.sleep(1000);
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal.fade.in div.ng-scope"))));
                pages.base.scrollIntoView(element(by.css("div.modal-footer button[data-ng-click='ok()']")));
                //browser.actions().mouseMove(element(by.css("div.modal-footer button[data-ng-click='ok()']"))).click();
                browser.driver.findElement(by.css("div.modal-footer button[data-ng-click='ok()']")).click();
                browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal.fade.in div.ng-scope"))));
            },


            editCancelPublisherShareSets: function () {
                pages.editDealScope.elems.editCancelPublisherShareSet.click();
                pages.editDealScope.waitForAjax();
            },

            editClickOnAddChainLink: function () {
                pages.editDealScope.elems.editAddChainLink.click();
            },

            editSelectSpecificOptionEOrPAPublisherTypeChainI: function (publisher, i) {
                var desiredOption;
                browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix div.tg-dropdown-button button.tg-dropdown-caret.fa.fa-caret-down")).click();
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"))));
                browser.driver.findElements(by.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix ul.dropdown-menu li.ng-scope a[ng-click='selectItem($item);']"))
                    .then(function findMatchingOption(options) {
                        options.some(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.indexOf(publisher) != -1) {
                                        desiredOption = option;
                                        return true;
                                    }
                                }
                            )
                        });
                    })
                    .then(function clickOption() {
                        if (desiredOption) {
                            pages.base.scrollIntoView(desiredOption);
                            desiredOption.click();
                        }
                    });
            },

            editPublisherNameFieldChainI: function (i) {
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix div[name='acquirer'] input"));
                pages.base.scrollIntoView(element);
                element.sendKeys("test");
            },

            editPublisherNameOwnPercentFieldChainISpecificValue: function (i, percent) {
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"));
                pages.base.scrollIntoView(element);
                element.sendKeys(percent);
            },

            editPublisherNameOwnPercentFieldChainI: function (i) {
                var percent = (Math.random() * 3 + 30).toFixed(2);
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='ownShare']"));
                pages.base.scrollIntoView(element);
                element.sendKeys(percent);
            },

            editPublisherNameCollectPercentFieldChainI: function (i) {
                var percent = (Math.random() * 9 + 1).toFixed(2);
                var element = browser.driver.findElement(By.css("#deal-publisher  div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"));
                pages.base.scrollIntoView(element);
                element.sendKeys(percent);
            },

            editPublisherNameCollectPercentFieldChainISpecificValue: function (i, percent) {
                var element = browser.driver.findElement(By.css("#deal-publisher  div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix input[name='collectShare']"));
                pages.base.scrollIntoView(element);
                element.sendKeys(percent);
            },

            editPublisherNameAMFieldChainI: function (i) {
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] div[name='acquirer'] input"));
                pages.base.scrollIntoView(element);
                element.sendKeys("53026414");
            },

            editSelectRandomPublisherNameDropDownChainI: function (i) {
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
                browser.driver.findElements(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function (options) {
                        var randomNumber = Math.floor((Math.random() * options.length));
                        pages.base.scrollIntoView(options[randomNumber]);
                        options[randomNumber].click();
                    })
            },

            editSelectSpecificPublisherNameDropDownChainI: function (publisherName, i) {
                var desiredOption;
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
                browser.driver.findElements(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function findMatchingOption(options) {
                        options.forEach(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.toLowerCase().indexOf(publisherName) != -1) {
                                        desiredOption = option;
                                        return true;
                                    }
                                }
                            )
                        });
                    })
                    .then(function clickOption() {
                        if (desiredOption) {
                            pages.base.scrollIntoView(desiredOption);
                            desiredOption.click();
                        }
                    });
            },

            editPublisherNameAMCollectPercentChainI: function (i) {
                var percent = (Math.random() * 9 + 1).toFixed(2);
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"));
                pages.base.scrollIntoView(element);
                element.sendKeys(percent);
            },

            editPublisherNameAMCollectPercentChainISpecificValue: function (i, percent) {
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.ng-scope:nth-child(4) div[data-name='amPub'] input[name='collectShare']"));
                pages.base.scrollIntoView(element);
                element.sendKeys(percent);
            },

            editClickOnDeleteIconChainI: function (i) {
                var element = browser.driver.findElement(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope"));
                pages.base.scrollIntoView(element);
                element.click();
                browser.sleep(2000);
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.confirmDeleteModalDialog));
            },

            editValidateTheDeleteIconChainIPublisherShareIsPresent: function (i) {
                expect(element(By.css("#deal-publisher div.ng-scope:nth-child(" + i + ") div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")).isDisplayed).toBeTruthy();
            },

            editCheckTheDeleteScopeIconIsPresent: function () {
                browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
                expect(pages.editDealScope.elems.editDeleteScopeIcon.isDisplayed);
            },

            editCheckTheShareUnshareDeleteIconIsPresent: function () {
                browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
                expect(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon.isDisplayed);
            },

            editConfirmOnDeleteModalDialog: function () {
                browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealScope.elems.confirmDeleteModalDialog));
                pages.editDealScope.elems.confirmDeleteModalDialog.click();
                browser.sleep(1000);
                browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.confirmDeleteModalDialog));
            },

            editConfirmModalDialog: function () {
                browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.confirmDeletePssModalDialog));
                pages.editDealScope.elems.confirmDeletePssModalDialog.click();
                browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.confirmDeletePssModalDialog));
            },

            editCancelModalDialog: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.cancelDeletePssModalDialog));
                browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.cancelDeletePssModalDialog));
                pages.editDealScope.elems.cancelDeletePssModalDialog.click();
                browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.cancelDeletePssModalDialog));
            },

            editDeletePublisherSharesSet: function () {
                browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.editDeletePublisherShareSet));
                pages.editDealScope.elems.editDeletePublisherShareSet.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.confirmDeletePssModalDialog));
            },

            editClickOnShareScopeOption: function () {
                browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
                browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
                pages.editDealScope.elems.editShareScopeLink.click();
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.large.ng-scope"))));
            },

            editSelectTheContractPeriodNumberIOnShareScopeModalDialog: function (i) {
                pages.base.scrollIntoView(element(by.css("div.modal-body.share-scope-modal-body table tbody tr:nth-child(" + i + ")")));
                browser.driver.findElement(by.css("div.modal-body.share-scope-modal-body table tbody tr:nth-child(" + i + ")")).click();
            },

            editClickOnTheDoneButtonOnShareScopeModalDialog: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.doneButtonShareScopeModalDilaog);
                pages.editDealScope.elems.doneButtonShareScopeModalDilaog.click();
                browser.sleep(4000);
            },

            editClickOnCopyScopeOption: function () {
                browser.actions().mouseMove(pages.editDealScope.elems.editFirstScope).perform();
                browser.actions().mouseMove(pages.editDealScope.elems.editShareUnshareDeleteScopeIcon).perform();
                pages.editDealScope.elems.editCopyScopeLink.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.numberOfCopiesInputField));
            },

            editClickOnCopyScopeOptionNumberI: function (i) {
                //browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-click='$event.preventDefault()'] i"))));
                //browser.actions().mouseMove(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))).perform();
                browser.actions().mouseMove(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-click='$event.preventDefault()'] i"))).perform();
                browser.actions().mouseMove(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='showScopeCopySection(sp.id)']"))).click();
                pages.base.scrollIntoView(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='showScopeCopySection(sp.id)']")));
                browser.actions().mouseMove(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ")"))).perform();
                browser.actions().mouseMove(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-click='$event.preventDefault()'] i"))).perform();
                browser.driver.findElement(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='showScopeCopySection(sp.id)']")).click();
                browser.sleep(1000);
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] input[data-ng-model='sp.copy.num']"))));
            },

            editFillInTheNumberOfCopiesForScopeNumberISpecificValue: function (i, value) {
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] input[data-ng-model='sp.copy.num']"))));
                browser.driver.findElement(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] input[data-ng-model='sp.copy.num']")).sendKeys(value);
            },

            editFillInTheNumberOfCopiesForScopeSpecificValue: function (value) {
                pages.editDealScope.elems.numberOfCopiesInputField.sendKeys(value);
            },

            editClickOnTheCancelButtonNumberOfCopiesScope: function () {
                pages.editDealScope.elems.cancelCopyScopeButton.click();
            },

            editClickOnTheCopyScopeButtonNumberOfCopiesScope: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editCopyScopeButtonLink);
                pages.editDealScope.elems.editCopyScopeButtonLink.click();
                pages.editDealScope.waitForAjax();
            },

            editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberI: function (i) {
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button[data-ng-click='copyScope(sp.id)']"))));
                pages.base.scrollIntoView(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button[data-ng-click='copyScope(sp.id)']")));
                browser.driver.findElement(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button[data-ng-click='copyScope(sp.id)']")).click();
                //browser.waitForAngular();
                browser.sleep(8000);
                //browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope"))), 50000);
            },

            editClickOnTheCopyScopeButtonNumberOfCopiesScopeNumberIWait: function (i) {
                pages.base.scrollIntoView(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button[data-ng-click='copyScope(sp.id)']")));
                browser.driver.findElement(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button[data-ng-click='copyScope(sp.id)']")).click();
                browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope"))));
            },


            editClickOnTheCancelCopyScopeButtonNumberOfCopiesScopeNumberI: function (i) {
                pages.base.scrollIntoView(element(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button.btn.btn-cancel.pull-left")));
                browser.driver.findElement(by.css("ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") div[data-ng-form='scopeCopyForm'] button.btn.btn-cancel.pull-left")).click();
            },

            editClickOnTheAddOverrideIconPss: function () {
                pages.editDealScope.elems.editOverridePssIcon.click();
                pages.editDealScope.waitForAjax();
            },

            editSelectTheSubPublisherOverridePss: function (subPublisherName, subPublisherSelected) {
                var desiredOption;
                pages.editDealScope.elems.editSubPublisherOverridePssField.click();
                pages.editDealScope.elems.editSubPublisherOverridePssInputField.clear();
                pages.editDealScope.elems.editSubPublisherOverridePssInputField.sendKeys(subPublisherName);
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[name='subPublisherOverride'] ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
                browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function findMatchingOption(options) {
                        options.forEach(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.indexOf(subPublisherSelected) != -1) {
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
            }
            ,

            editSelectTheSubPublisherOverrideTerritoryPss: function (territory) {
                var desiredOption;
                pages.editDealScope.elems.editTerritoryOverridePssField.click();
                pages.editDealScope.elems.editTerritoryOverridePssFieldInput.sendKeys(territory);
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
                browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function findMatchingOption(options) {
                        options.forEach(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                    if (text.indexOf(territory) != -1) {
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
            }
            ,

            editClickOnTheCancelSubPublisherOverridePss: function () {
                pages.editDealScope.elems.editCancelOverridePublisherShareSetButton.click();
            }
            ,

            editClickOnTheAddAnotherSubPublisherOverridePss: function () {
                pages.editDealScope.elems.editAddAnotherOverridePublisherShareSetButton.click();
            }
            ,

            editClickOnTheDoneSubPublisherOverridePss: function () {
                browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.editDoneOverridePublisherShareSetButton));
                pages.editDealScope.elems.editDoneOverridePublisherShareSetButton.click();
            }
            ,

            clickOnTheAddSocietyAgreementNumbersLink: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.addSocietyAgreementNumberLink);
                pages.editDealScope.elems.addSocietyAgreementNumberLink.click();
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope"))));
            }
            ,

            fillIntoThePublisherChainAgreementNumberFieldNumberI: function (i) {
                var number = Math.floor(Math.random() * 999999999) + 1;
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[data-ng-model='societyAgreement.agreement_number']")).clear();
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[data-ng-model='societyAgreement.agreement_number']")).sendKeys(number);
            }
            ,

            fillIntoThePublisherChainAgreementSocietyNameNumberI: function (society, i) {
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[name='chainAgreementSociety']")).clear();
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[name='chainAgreementSociety']")).sendKeys(society);
            }
            ,

            selectTheSpecificValueFromSocietyDropDownSocietyAgreementNumbers: function () {
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope a.typeahead-result.clearfix.ng-scope"))));
                browser.driver.findElements(By.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope a.typeahead-result.clearfix.ng-scope"))
                    .then(function (options) {
                        options[0].click();
                    });
            }
            ,

            fillIntoTheCreatorToPublisherSocietyAgreementFieldNumberI: function (creator, i) {
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") input[data-ng-model='creator.creator_model']")).clear();
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") input[data-ng-model='creator.creator_model']")).sendKeys(creator);
            }
            ,

            selectTheRandomValueFromCreatorDropDownSocietyAgreementNumbers: function () {
                browser.wait(ExpectedConditions.visibilityOf(element(By.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope a.typeahead-result.clearfix.ng-scope"))));
                browser.driver.findElements(By.css("ul.typeahead.dropdown-menu.ng-scope li.ng-scope a.typeahead-result.clearfix.ng-scope"))
                    .then(function (options) {
                        var randomNumber = Math.floor((Math.random() * (options.length - 1) + 1));
                        options[randomNumber].click();
                    });
            }
            ,

            fillIntoTheCreatorAgreementNumberFieldNumberI: function (i) {
                var number = Math.floor(Math.random() * 999999999) + 1;
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(1) div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (i + 1) + ") input[data-ng-model='societyAgreementCreator.agreement_number']")).clear();
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(1) div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (i + 1) + ") input[data-ng-model='societyAgreementCreator.agreement_number']")).sendKeys(number);
            }
            ,

            fillIntoTheCreatorToPublisherSocietyFieldNumberI: function (society, i) {
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(1) div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (i + 1) + ")  input[data-ng-model='societyAgreementCreator.society_model']")).clear();
                browser.driver.findElement(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(1) div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (i + 1) + ")  input[data-ng-model='societyAgreementCreator.society_model']")).sendKeys(society);
            }
            ,

            saveTheSocietyAgreementNumbersChanges: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.saveChangesSocietyAgreementNumber);
                pages.editDealScope.elems.saveChangesSocietyAgreementNumber.click();
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.addSocietyAgreementNumberLink));
            }
            ,

            checkTheSocietyAgreementAddedOnScope: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.addSocietyAgreementNumberLink);
                pages.editDealScope.elems.addSocietyAgreementNumberLink.getText().then(function (promise) {
                    console.log("Society agreement numbers added - view mode : " + promise);
                    expect(promise).toEqual("View Society Agreement Numbers");
                });
            }
            ,

            checkTheSocietyAgreementNotAddedOnScope: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.addSocietyAgreementNumberLink);
                pages.editDealScope.elems.addSocietyAgreementNumberLink.getText().then(function (promise) {
                    console.log("Society agreement numbers added - view mode : " + promise);
                    expect(promise).toEqual("Add Society Agreement Numbers");
                });
            }
            ,

            clickOnTheCopyPublisherShareInCopyScopeModal: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.copyPublisherShareInCopyScopeModalButton));
                pages.base.scrollIntoView(pages.editDealScope.elems.copyPublisherShareInCopyScopeModalButton);
                pages.editDealScope.elems.copyPublisherShareInCopyScopeModalButton.click();
                pages.editDealScope.waitForAjax();
                pages.editDealScope.elems.copyPublisherShareInCopyScopeModalButton.getAttribute("class").then(function (promise) {
                    console.log("Copy scope button for publisher shares is selected and it class name is : " + promise);
                    expect(promise).toContain("active");
                });
            }
            ,

            clickOnTheSharePublisherShareInCopyScopeModal: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.sharePublisherShareInCopyScopeModalButton));
                pages.base.scrollIntoView(pages.editDealScope.elems.sharePublisherShareInCopyScopeModalButton);
                pages.editDealScope.elems.sharePublisherShareInCopyScopeModalButton.click();
                pages.editDealScope.elems.sharePublisherShareInCopyScopeModalButton.getAttribute("class").then(function (promise) {
                    console.log("Share scope button for publisher shares is selected and it class name is : " + promise);
                    expect(promise).toContain("active");
                });
            }
            ,

            clickOnTheCopyRoyaltyRatesInCopyScopeModal: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.copyRoyaltyRatesInCopyScopeModalButton));
                pages.base.scrollIntoView(pages.editDealScope.elems.copyRoyaltyRatesInCopyScopeModalButton);
                pages.editDealScope.elems.copyRoyaltyRatesInCopyScopeModalButton.click();
                pages.editDealScope.elems.copyRoyaltyRatesInCopyScopeModalButton.getAttribute("class").then(function (promise) {
                    console.log("Copy scope button for royalty rates is selected and it class name is : " + promise);
                    expect(promise).toContain("active");
                });
            },

            clickOnTheShareRoyaltyRatesInCopyScopeModal: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.shareRoyaltyRatesInCopyScopeModalButton);
                pages.editDealScope.elems.shareRoyaltyRatesInCopyScopeModalButton.click();
                pages.editDealScope.elems.shareRoyaltyRatesInCopyScopeModalButton.getAttribute("class").then(function (promise) {
                    console.log("Share scope button for royalty rates is selected and it class name is : " + promise);
                    expect(promise).toContain("active");
                });
            },

            editClickOnTheAddNewSocietyAgreementNumberI: function (i) {
                pages.base.scrollIntoView(element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']")));
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']"))));
                browser.driver.findElement(By.css("div[data-tg-modular-edit-id='publisherShareSets'] div:nth-child(" + (i + 2) + ") a[data-ng-click='showSocietyAgreementNumbersModal(chain)']")).click();
                //browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[data-ng-model='societyAgreement.agreement_number']"))));
            },

            editFillIntoTheSocietyAgreementNumberRightPanelNumberI: function (i, society_name) {
                var number = Math.floor(Math.random() * 999999999) + 1;
                var societyNumber = browser.driver.findElement(By.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[data-ng-model='societyAgreement.agreement_number']"));
                societyNumber.clear();
                societyNumber.sendKeys(number);

                var societyName = browser.driver.findElement(By.css("div.ps-container div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") input[name='chainAgreementSociety']"));
                societyName.clear();
                societyName.sendKeys(society_name);
            },

            editSelectSpecificValueFromSocietyDropDownSocietyAgreementForm: function () {
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.ng-scope a.typeahead-result.clearfix.ng-scope"))));
                browser.driver.findElements(By.css("div.ng-scope a.typeahead-result.clearfix.ng-scope"))
                    .then(function (options) {
                        options[0].click();
                    })
            },

            editFillIntoTheCreatorForSocietyAgreementNumberI: function (i, creator_name) {
                pages.base.scrollIntoView(element(by.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") input[data-ng-model='creator.creator_model']")));
                var creatorName = browser.driver.findElement(By.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") input[data-ng-model='creator.creator_model']"));
                creatorName.clear();
                creatorName.sendKeys(creator_name);
            },

            editClickOnTheAddCreatorSocietyAgreementNumber: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.addCreatorLinkSocietyAgreementNumberForm));
                pages.base.scrollIntoView(pages.editDealScope.elems.addCreatorLinkSocietyAgreementNumberForm);
                pages.editDealScope.elems.addCreatorLinkSocietyAgreementNumberForm.click();
            },

            editFillIntoTheSocietyNumberAndNameLeftPanelCreatorForSocietyAgreementNumberCreatorIRowJ: function (i, j, society_name) {
                var number = Math.floor(Math.random() * 999999999) + 1;
                pages.base.scrollIntoView(element(By.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (j + 1) + ") input[data-ng-model='societyAgreementCreator.agreement_number']")));
                var societyNumber = browser.driver.findElement(By.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (j + 1) + ") input[data-ng-model='societyAgreementCreator.agreement_number']"));
                societyNumber.clear();
                societyNumber.sendKeys(number);

                var societyName = browser.driver.findElement(By.css("div.ps-container div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") div[data-ng-repeat='societyAgreementCreator in creator.creator_society_agreement_numbers']:nth-child(" + (j + 1) + ")  input[data-ng-model='societyAgreementCreator.society_model']"));
                societyName.clear();
                societyName.sendKeys(society_name);
            },

            saveTheChangesSocietyAgreementNumberForm: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.saveAddSocietyAgreementNumberForm));
                pages.base.scrollIntoView(pages.editDealScope.elems.saveAddSocietyAgreementNumberForm);
                pages.editDealScope.elems.saveAddSocietyAgreementNumberForm.click();
                browser.wait(ExpectedConditions.stalenessOf(element(by.css("div.modal-dialog.ng-scope"))));
                //browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope"), 100000)));
                //browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-tg-modular-edit-id='publisherShareSets'] div:nth-child(3) a[data-ng-click='showSocietyAgreementNumbersModal(chain)']"))));

                //pages.base.waitForTheElementToBeHidden(element(by.css("div.modal-dialog.ng-scope")), 100000);
            },

            saveTheChangesSocietyAgreementNumberFormWait: function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.editDealScope.elems.saveAddSocietyAgreementNumberForm));
                pages.base.scrollIntoView(pages.editDealScope.elems.saveAddSocietyAgreementNumberForm);
                pages.editDealScope.elems.saveAddSocietyAgreementNumberForm.click();
                browser.sleep(10000);
            },

            clickOnTheWorkLinkFromScopeNumberI: function (i) {
                pages.base.scrollIntoView(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='switchToWorkLog(form.terms.activeCp.id, sp.id, false)']")));
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='switchToWorkLog(form.terms.activeCp.id, sp.id, false)']"))));
                browser.actions().mouseMove(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='switchToWorkLog(form.terms.activeCp.id, sp.id, false)']"))).perform();
                browser.actions().click(element(by.css("div.ps-container ul.deal-list.scopes-menu li[data-ng-click='onSetActiveScope(sp.id)']:nth-child(" + i + ") a[data-ng-click='switchToWorkLog(form.terms.activeCp.id, sp.id, false)']"))).perform();
            },

            clickOnTheCreatorSetSocietyAgreementNumberArea: function () {
                browser.driver.findElement(By.css("div[data-ng-form='agreementNumbersCreatorForm']")).click();
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='creator in data.model.creators']:nth-child(1) div[data-ng-form='agreementNumbersCreatorsForm'] a[data-ng-click='data.removeCreatorSetFromChain(creator, $index, agreementNumbersCreatorForm)'] i"))));
            },

            deleteTheCreatorSetSocietyAgreementNumberNumberI: function (i) {
                browser.driver.findElement(By.css("div[data-ng-form='agreementNumbersCreatorForm']")).click();
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") div[data-ng-form='agreementNumbersCreatorsForm'] a[data-ng-click='data.removeCreatorSetFromChain(creator, $index, agreementNumbersCreatorForm)'] i"))));
                browser.driver.findElement(By.css("div[data-ng-repeat='creator in data.model.creators']:nth-child(" + i + ") div[data-ng-form='agreementNumbersCreatorsForm'] a[data-ng-click='data.removeCreatorSetFromChain(creator, $index, agreementNumbersCreatorForm)'] i")).click();
                pages.editDealScope.waitForAjax();
            },

            deleteThePublisherChainSocietyAgreementNumberNumberI: function (i) {
                browser.driver.findElement(By.css("div[data-ng-form='societyAgreementsForm']")).click();
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") a[data-ng-click='data.removeAgreementNumber(societyAgreement, $index)'] i"))));
                browser.driver.findElement(By.css("div[data-ng-repeat='societyAgreement in data.model.society_agreement_numbers']:nth-child(" + i + ") a[data-ng-click='data.removeAgreementNumber(societyAgreement, $index)'] i")).click();
                pages.editDealScope.waitForAjax();
            },

            checkTheContractualRightsTypeTextPresent: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.contractualRightTypeTextElement);
                pages.editDealScope.elems.contractualRightTypeTextElement.getText()
                    .then(function (promise) {
                        console.log("Contractual right types text from view scope is : " + promise);
                        expect(promise).toEqual("Contractual Right Types:");
                    });
            },

            checkTheContractualRightTypesIncludedOrExcludedTextValuePresent: function (text) {
                pages.base.scrollIntoView(pages.editDealScope.elems.contractualRightTypeTextValueElement);
                pages.editDealScope.elems.contractualRightTypeTextValueElement.getText()
                    .then(function (promise) {
                        console.log("Contractual right types text value rights included or excluded from view scope is : " + promise);
                        expect(promise).toEqual(text);
                    });
            },

            editExpandTheMasterRights: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editExpandMasterRightsElement);
                pages.editDealScope.elems.editExpandMasterRightsElement.click();
            },

            editCollapseTheMasterRights: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editCollapseMasterRightsElement);
                pages.editDealScope.elems.editCollapseMasterRightsElement.click();
            },

            editClickOnThePublishingRightsCheckBox: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editPublishingRightsCheckBox);
                pages.editDealScope.elems.editPublishingRightsCheckBox.click();
            },


            editUnshareThePublisherShareSetFromSelectedScope: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editUnsharePublisherShareSetLink);
                pages.editDealScope.elems.editUnsharePublisherShareSetLink.click();
                browser.sleep(2000);
                //browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealScope.elems.editConfirmUnsharePssModalDialog));
                pages.base.scrollIntoView(pages.editDealScope.elems.editConfirmUnsharePssModalDialog);
                pages.editDealScope.elems.editConfirmUnsharePssModalDialog.click();
                browser.sleep(5000);
                //browser.wait(ExpectedConditions.invisibilityOf(pages.editDealScope.elems.editConfirmUnsharePssModalDialog));
            },


            editClickOnTheMasterRightsCheckBox: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editMasterRightsCheckBox);
                pages.editDealScope.elems.editMasterRightsCheckBox.click();
            },

            editClickOnThePublishingRightsNumberI: function (i) {
                pages.base.scrollIntoView(element(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(1) ul.contract-types.ng-scope li.ng-binding.ng-scope:nth-child(" + i + ")")));
                browser.driver.findElement(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(1) ul.contract-types.ng-scope li.ng-binding.ng-scope:nth-child(" + i + ")")).click();
            },

            editClickOnTheMasterRightsNumberI: function (i) {
                pages.base.scrollIntoView(element(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2) ul.contract-types.ng-scope li.ng-binding.ng-scope:nth-child(" + i + ")")));
                browser.driver.findElement(By.css("div.contract-type-accordion div.accordion div.accordion-group.ng-isolate-scope:nth-child(2) ul.contract-types.ng-scope li.ng-binding.ng-scope:nth-child(" + i + ")")).click();
            },

            editClickOnTheLimitedToCheckBox: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editLimitedToCheckBoxContractualType);
                pages.editDealScope.elems.editLimitedToCheckBoxContractualType.click();
            },

            editFillIntoTheCreatorFieldSpecificLetter: function (letter) {
                pages.base.scrollIntoView(pages.editDealScope.elems.editCreatorInputField);
                pages.editDealScope.elems.editCreatorInputField.sendKeys(letter);
            },

            editSelectTheRandomValueFromCreatorDropDown: function () {
                browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
                browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                    .then(function (options) {
                        var randomNumber = Math.floor((Math.random() * options.length));
                        var element = options[0];
                        element.click();
                    });

            },

            editClickOnTheYesWorkForHireButton: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editYesWorkForHire);
                pages.editDealScope.elems.editYesWorkForHire.click();
            },

            editClickOnTheNoWorkForHireButton: function () {
                pages.base.scrollIntoView(pages.editDealScope.elems.editNoWorkForHire);
                pages.editDealScope.elems.editNoWorkForHire.click();
            },


            expectThePublisherShareSetTextValuePresentForChainI: function (i, text) {
                browser.driver.findElement(By.css("[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ")")).getText()
                    .then(function (promise) {
                        console.log("Publisher share set text value for chain number " + i + "  is : " + promise);
                        expect(promise.toString().toLowerCase()).toContain(text);
                    });
            },

            expectThePublisherShareSetTextValueNotPresentForChainI: function (i, text) {
                browser.driver.findElement(By.css("[data-tg-modular-edit-id='publisherShareSets'] div[data-ng-repeat='chain in modularEditModels.model._chains track by chain.id']:nth-child(" + (i + 2) + ")")).getText()
                    .then(function (promise) {
                        console.log("Publisher share set text value for chain number " + i + "  is : " + promise);
                        expect(promise.toString().toLowerCase()).not.toContain(text);
                    });
            },

            clickOnTheCancelSocietyAgreementNumberButtonLink: function () {
                pages.editDealScope.elems.cancelSocietyAgreementNumber.click();
            }
        }
    )
}

exports.creatorTypeahead = function () {
    return $('[data-tg-typeahead-id="dealScopeCreator"]');
};

exports.creatorInput = function () {
    return exports.creatorTypeahead().element(by.model('$term'));
};

exports.enterCreatorSearchTerms = function (terms) {
    return asAlways(
        exports.creatorInput(), 'scrollIntoView', 'clear'
    ).sendKeys(terms);
};

exports.creatorSearchResultByName = function (name) {
    return element(by.cssContainingText('.tg-typeahead__item-left strong', name));
};

exports.selectCreatorSearchResultByName = function (name) {
    return asAlways(
        exports.creatorSearchResultByName(name), 'waitUntilVisible', 'scrollIntoView'
    ).click();
};

exports.creatorsLabel = function () {
    return element(by.binding(
        ' activeScope.creators | pluck:\'displayName\' | join:\', \' '
    ));
};

exports.creatorsLabelText = function () {
    return asAlways(exports.creatorsLabel(), 'scrollIntoView', 'getAllText');
};

exports.validateCreatorsLabel = function (expected) {
    expect(exports.creatorsLabelText()).toBe(expected);
};

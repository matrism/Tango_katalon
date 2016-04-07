'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealRtp === undefined) {
    pages.editDealRtp = exports = new ftf.pageObject({
        locators: {
            editAddAnotherAcquisitionPeriodButtonLink: {css: "a[data-ng-click='addRightsTermPeriodSet()']"},
            editRtpAcquisitionAreaField: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] div[data-ng-if='acqFormSection.detail']"},
            editRtpAcquisitionIcon: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] button[data-ng-click='showRtpEdit(acqFormSection, acqRtp.id, rtps.id)']"},
            editDescriptionAcquisitionField: {css: "input[data-ng-model='acqRtp.description']"},
            editActualStartDateAcquisitionField: {css: "div[name='acquisitionStartDate'] input"},
            editDeleteAnotherAcquisitionFormIcon: {css: "a[data-ng-click='showDeleteRightsTermPeriodSetModal(rtps.id, rtpSetForm.$dirty)']"},
            editActualEndDateAcquisitionField: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] div[name='acquisitionEndDate'] input"},
            editSaveAcquisitionAreaButton: {css: "button[data-ng-click='updateDeal(rtpFormAcq.$valid, form.deal, acqFormSection, false)']"},
            editSaveAnotherAcquisitionButton: {css: "button[data-ng-click='updateDeal(rtpsCreateForm.$valid, form.deal, rtpsFormSection, false)']"},
            editAddRetentionFromAcquisitionLink: {css: "a[data-ng-click='addRetentionRightsTermPeriod(rtps.id)']"},
            editTheRtpRetentionAreaField: {css: "div[data-ng-class='{ active: retentionFormSection.edit }'] div[data-ng-if ='retentionFormSection.detail']"},
            editTheRtpRetentionIcon: {css: "div[data-ng-class='{ active: retentionFormSection.edit }'] button[data-ng-click='showRtpEdit(retentionFormSection, rtp.id, rtps.id)']"},
            removeTheRtpRetention: {css: "div[data-ng-class='{ active: retentionFormSection.edit }'] div[data-name='rtpForm'] a[ng-click='showDeleteRightsTermPeriodModal(rtps.id, rtp.id)']"},
            editDescriptionRetentionFromAcquisitionField: {css: "input[data-ng-model='rtp.description']"},
            editScopeRetentionFromAcquisitionField: {css: "div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"},
            editScopeRetentionFromAcquisitionInputField: {css: "div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editAddEndRulesLinkFromRetention: {css: "div[data-watched-init='endRulesAreDirty = isEndRuleDirty(rtp.end_rules[0])'] a"},
            editApplyScopeAcquisitionButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']"},
            editActualEndDateRetentionFromAcquisitionField: {css: "div[name='retentionEndDate'] input"},
            editAddPostTermPeriodFromRetentionLink: {css: "a[data-ng-click='addPostTermCollectionRightsTermPeriodToRetention(rtps.id, rtp.id)']"},
            editDurationRtpPostTermCollectionField: {css: "div[data-name='retentionPostRtpForm'] input[name='retentionPostTermDuration']"},
            saveRetentionFromAcquisitionButton: {css: "button[data-ng-click='updateDeal(retentionForm.$valid, form.deal, retentionFormSection, false)"},
            modalDialogDelete: {css: "div.modal-dialog.ng-scope"},
            confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope button.btn.btn-primary:nth-child(2)"},
            confirmCancelModalDialog: {css: "div.modal-dialog.ng-scope button[data-ng-click='cancel()']"},
            editDoneButtonEndRules: {css: "button[data-ng-click='saveEndRules(form.show.endRules.containerId, form.show.endRules.type, rtpEndRulesModalForm.$valid)']"},
            editWhenVariableLeftButtonEndRules: {css: "div[data-ng-model='condition.left_value'] div.tg-dropdown-button"},
            editOffsetByArrowChoiceEndRules: {css: "div[data-ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) button.btn.dropdown-toggle"},
            editCancelDeleteEndRulesModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
            editDeleteEndRulesModalDialog: {css: "div.modal-dialog.ng-scope"},
            editConfirmDeleteEndRulesModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            editCancelEndRulesLinkFromRetention: {css: "div[data-ng-form='editCancelEndRulesLinkFromRetention'] div.modal-footer button[data-ng-click='cancel()']"}
        },

        editClickOnTheAddAnotherAcquisitionPeriodLink: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editAddAnotherAcquisitionPeriodButtonLink);
            pages.editDealRtp.elems.editAddAnotherAcquisitionPeriodButtonLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDescriptionAcquisitionField));
        },

        editTheRtpAcquisitionArea: function () {
            browser.actions().mouseMove(pages.editDealRtp.elems.editRtpAcquisitionAreaField).perform();
            pages.editDealRtp.elems.editRtpAcquisitionIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDescriptionAcquisitionField));
        },

        editFillIntoTheAcquisitionActualEndDateField: function (value) {
            pages.editDealRtp.elems.editActualEndDateAcquisitionField.clear();
            pages.editDealRtp.elems.editActualEndDateAcquisitionField.sendKeys(value);
        },

        editFillIntoTheAcquisitionActualStartDateField: function (value) {
            pages.editDealRtp.elems.editActualStartDateAcquisitionField.clear();
            pages.editDealRtp.elems.editActualStartDateAcquisitionField.sendKeys(value);
        },

        editSaveTheAcquisitionArea: function () {
            pages.editDealRtp.elems.editSaveAcquisitionAreaButton.click();
        },

        editSaveTheAnotherAcquisitionForm: function () {
            pages.editDealRtp.elems.editSaveAnotherAcquisitionButton.click();
        },

        editTheRtpRetentionArea: function () {
            browser.actions().mouseMove(pages.editDealRtp.elems.editTheRtpRetentionAreaField).perform();
            pages.editDealRtp.elems.editTheRtpRetentionIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editScopeRetentionFromAcquisitionField));
        },

        clickOnTheAddRetentionFromAcquisitionLink: function () {
            pages.base.scrollIntoView( pages.editDealRtp.elems.editAddRetentionFromAcquisitionLink);
            pages.editDealRtp.elems.editAddRetentionFromAcquisitionLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField));
        },

        editDeleteTheAddAnotherAcquisitionForm: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDeleteAnotherAcquisitionFormIcon));
            pages.base.scrollIntoView(pages.editDealRtp.elems.editDeleteAnotherAcquisitionFormIcon);
            pages.editDealRtp.elems.editDeleteAnotherAcquisitionFormIcon.click();
            pages.editDealRtp.waitForAjax();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.confirmDeleteModalDialog));
            pages.base.scrollIntoView(pages.editDealRtp.elems.confirmDeleteModalDialog);
            pages.editDealRtp.elems.confirmDeleteModalDialog.click();
            pages.editDealRtp.waitForAjax();
        },

        editDeleteTheRtpRetentionFromAcquisitionForm: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.removeTheRtpRetention));
            pages.base.scrollIntoView(pages.editDealRtp.elems.removeTheRtpRetention);
            //browser.actions().click(pages.editDealRtp.elems.removeTheRtpRetention).perform();
            pages.editDealRtp.elems.removeTheRtpRetention.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.modalDialogDelete));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealRtp.elems.confirmDeleteModalDialog));
            //browser.actions().click(pages.editDealRtp.elems.confirmDeleteModalDialog).perform();
            pages.editDealRtp.elems.confirmDeleteModalDialog.click();
            browser.sleep(5000);
            pages.editDealRtp.waitForAjax();
            //browser.wait(ExpectedConditions.invisibilityOf(pages.editDealRtp.elems.modalDialogDelete));
        },

        editFillTheRetentionDescriptionFromAcquisition: function (description) {
            pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField.sendKeys(description);
        },

        editClickOnTheAddEndRulesFromRetentionNumber: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editAddEndRulesLinkFromRetention);
            pages.editDealRtp.elems.editAddEndRulesLinkFromRetention.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-form='rtpEndRulesModalForm']"))));
        },

        editFillIntoTheActualEndDateFieldRetentionFromAcquisition: function (actualEndDate) {
            pages.editDealRtp.elems.editActualEndDateRetentionFromAcquisitionField.sendKeys(actualEndDate);
        },

        editSelectTheSpecificScopeNumberIRtpAcquisition: function (i) {
            var scope = "Scope " + i;
            var desiredOption;
            pages.editDealRtp.elems.editScopeRetentionFromAcquisitionField.click();
            pages.editDealRtp.elems.editScopeRetentionFromAcquisitionInputField.sendKeys("s");
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-container div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(scope) != -1) {
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
            pages.editDealRtp.elems.editApplyScopeAcquisitionButton.click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions ng-scope"))));
        },

        editSelectTheSpecificDurationTypeRetentionFromAcquisitionNumberI: function (i, durationType) {
            var desiredOption;
            browser.driver.findElements(By.css("div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(" + (i + 1) + ") div.aquisition-period.clearfix.retention.ng-scope select#retention_duration_type option"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(durationType) != -1) {
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

        saveTheRetentionFromAcquisition: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.saveRetentionFromAcquisitionButton);
            pages.editDealRtp.elems.saveRetentionFromAcquisitionButton.click();
            pages.editDealRtp.waitForAjax();
        },

        editClickOnTheAddPostTermPeriodFromRetention: function () {
            pages.editDealRtp.elems.editAddPostTermPeriodFromRetentionLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDurationRtpPostTermCollectionField));
        },

        editFillIntoTheDurationFieldPostTermCollectionFromRetention: function () {
            var number = Math.floor(Math.random() * 20) + 1;
            pages.editDealRtp.elems.editDurationRtpPostTermCollectionField.sendKeys(number);
        },

        editSelectTheEndDateEndRulesSpecificValueRuleNumberI: function (i, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-model='rule.end_date_type'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-model='rule.end_date_type'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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

        editSelectTheWhenVariableLeftEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.left_value'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.left_value'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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


        editFillIntoTheAttributeLeftPercentEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[data-ng-model='condition.left_value_percent']")).clear();
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[data-ng-model='condition.left_value_percent']")).sendKeys(value);
        },

        editSelectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ: function (i, j, index) {
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.operator'] div.tg-dropdown-button")).click();

            browser.wait(ExpectedConditions.visibilityOf(element(By.xpath("//*[@class='tg-dropdown-menu ng-scope']//ul[@class='dropdown-menu']//li"))));
            browser.driver.findElements(By.xpath("//*[@class='tg-dropdown-menu ng-scope']//ul[@class='dropdown-menu']//li")).then(function (options) {
                var randomNumber = index;
                var element = options[randomNumber];
                browser.actions().mouseMove(element).perform();
                browser.actions().click(element).perform();
            });
        },

        editSelectTheRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.right_value'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[data-ng-model='condition.right_value'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.forEach(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                                if (text.indexOf(value) != -1) {
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

        editDoneTheEndRules: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealRtp.elems.editDoneButtonEndRules));
            pages.editDealRtp.elems.editDoneButtonEndRules.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealRtp.elems.editWhenVariableLeftButtonEndRules));
        },

        editFillIntoTheOffsetByInputFieldEndRulesRuleNumberI: function (i) {
            var number = Math.floor(Math.random() * 100) + 1;
            var element =browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header input[data-ng-model='rule.offset']"));
            element.clear();
            element.sendKeys(number);
        },

        editSelectTheRandomOptionFromOffsetByChoiceEndRules: function () {
            pages.editDealRtp.elems.editOffsetByArrowChoiceEndRules.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) ul.dropdown-menu li a"))));
            browser.driver.findElements(By.css("div[data-ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) ul.dropdown-menu li a"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        editClickOnTheAddNewRuleEndRulesAddedRuleNumberI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-form='conditionForm']:nth-child(" + (i + 2) + ") a[data-ng-click='addEndRuleCondition(form.show.endRules.containerId, form.show.endRules.type, rule.id, $index)'] i")).click();
        },

        editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal: function (i, j) {
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).click();
        },

        editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJ: function (i, j) {
            pages.base.scrollIntoView(element(by.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")));
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDeleteEndRulesModalDialog));
            pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog.click();
        },

        checkTheEndRuleRetentionTooltipSummary: function (text) {
            browser.actions().mouseMove(pages.editDealRtp.elems.editAddEndRulesLinkFromRetention).perform();
            pages.base.scrollIntoView(element(by.css("div[data-ng-show='rtp.showEndRulesList'] div.popup-info")));
            browser.driver.findElement(By.css("div[data-ng-show='rtp.showEndRulesList'] div.popup-info ul.end-rules-list li span.pull-left.rule-summary")).getText().
            then(function (promise) {
                console.log("The tooltip summary text for  end rules  is: " + promise);
                expect(promise).toContain(text);
            });
        },

        editClickOnTheCancelEndRulesFromRetentionNumber: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention);
            pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope"))));
            browser.driver.findElement(By.css("div.modal-footer button[data-ng-click='ok()']"));
        },

        editClickOnTheCancelEndRulesFromRetentionNumberWIthoutModal: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention);
            pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope"))));
        }


    });
}
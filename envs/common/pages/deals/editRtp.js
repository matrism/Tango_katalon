
'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealRtp === undefined) {
    pages.editDealRtp = exports = new ftf.pageObject({
        locators: {
            editAddAnotherAcquisitionPeriodButtonLink: {css: "a[ng-click='addRightsTermPeriodSet()']"},
            editRtpAcquisitionAreaField: {css: 'div[tg-modular-edit-id="acquisitionModularEdit"]'},
            editRtpAcquisitionIcon: {css: 'div[tg-modular-edit-id="acquisitionModularEdit"] button[data-ng-click="tgModularViewMethods.switchToEditView()"]'},
            editDescriptionAcquisitionField: {css: 'div[tg-modular-edit-id="acquisitionModularEdit"] input[placeholder="Optional description"]'},
            editActualStartDateAcquisitionField: {css: 'div[ng-model="tgModularEditModel.startDate"] input[ng-model="date"]'},
            editDeleteAnotherAcquisitionFormIcon: {css: 'a[ng-click="showDeleteRightsTermPeriodSetModal(rightsTermPeriodSet)"]'},
            editActualEndDateAcquisitionField: {css: 'div[ng-model="tgModularEditModel.endDate"] input[ng-model="date"]'},
            editSaveAcquisitionAreaButton: {css: '.rights-term-container .acquisition div[data-ng-if="view.isEdit()"] button[data-ng-click="tgModularViewMethods.save()"]'},
            editSaveAnotherAcquisitionButton: {css: 'div[data-ng-if="view.isEdit()"] button[data-ng-click="tgModularViewMethods.save()"]'},
            editAddRetentionFromAcquisitionLink: {css: "a[ng-click='rightsTermPeriodSet.addPeriod(constants.RETENTION)']"},
            editTheRtpRetentionAreaField: {css: "div[tg-modular-edit-id='retentionModulatEdit']"},
            editTheRtpRetentionIcon: {css: "div[tg-modular-edit-id='retentionModulatEdit'] button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            removeTheRtpRetention: {css: "div[tg-modular-edit-id='retentionModulatEdit'] a[ng-click='showDeleteRightsTermPeriodModal(tgModularEditModel)']"},
            editDescriptionRetentionFromAcquisitionField: {css: "input[ng-model='tgModularEditModel.description']"},
            editScopeRetentionFromAcquisitionField: {css: "div[tg-modular-edit-id='retentionModulatEdit'] div[tg-modular-view='edit']"},
            editScopeRetentionFromAcquisitionInputField: {css: "div[ng-model='tgModularEditModel.dealScopeIds'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editAddEndRulesLinkFromRetention: {css: "a[ng-click='showEndRules(tgModularEditModel, tgModularViewMethods.switchToView)']"},
            editApplyScopeAcquisitionButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[ng-click='applySelections($dataSets);']"},
            editActualEndDateRetentionFromAcquisitionField: {css: "div[name='endDate'] input[ng-model='date']"},
            editAddPostTermPeriodFromRetentionLink: {css: 'a[ng-click="tgModularEditModel.addPostTermCollectionPeriod()"]'},
            editDurationRtpPostTermCollectionField: {css: "div[tg-modular-edit-id='postTermCollectionModulatEdit'] input[name='retentionPostTermDuration']"},
            saveRetentionFromAcquisitionButton: {css: "button[data-ng-click='tgModularViewMethods.save()']"},
            modalDialogDelete: {css: "div.modal-dialog.ng-scope"},
            confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope button.btn.btn-primary:nth-child(2)"},
            confirmCancelModalDialog: {css: "div.modal-dialog.ng-scope button[data-ng-click='cancel()']"},
            editDoneButtonEndRules: {css: "button[data-ng-click='saveEndRules(form.show.endRules.containerId, form.show.endRules.type, rtpEndRulesModalForm.$valid)']"},
            editWhenVariableLeftButtonEndRules: {css: "div[data-ng-model='condition.left_value'] div.tg-dropdown-button"},
            editOffsetByArrowChoiceEndRules: {css: "div[data-ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) button.btn.dropdown-toggle"},
            editCancelDeleteEndRulesModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='cancel()']"},
            editDeleteEndRulesModalDialog: {css: "div.modal-dialog.ng-scope"},
            editConfirmDeleteEndRulesModalDialog: {css: "div.modal-dialog.ng-scope div.modal-footer button[data-ng-click='ok()']"},
            editCancelEndRulesLinkFromRetention: {css: "div[ng-form='rtpEndRulesModalForm'] div.modal-footer button[ng-click='cancel()']"},
            editAddRuleLinkBottomEndRuleForm: {css: "a[ng-click='addEndRule()']"},
            editDeleteButtonEndRulesRetention: {css: "div.modal-footer button[data-ng-click='showDeleteAllEndRulesModal(form.show.endRules.containerId, form.show.endRules.type)']"},
            editEndDatePreDefinedDateInputFieldEndRules: {css: "div[name='endDateTypeDate'] input"},
            editOffsetByInputFieldEndRules: {css: "div[ng-form='rulesForm'] div.clearfix.rule-header input[ng-model='rule.offsetValue']"},
            editAccountingPeriodEndCheckBoxEndRules: {css: "div[ng-form='rulesForm'] div.clearfix.rule-header div input[ng-model='rule.accountingPeriodEnd']"}
        },

        editAddPostTermPeriodFromRetentionLink: function (i) {
            return $$(
                    'a[ng-click="tgModularEditModel.addPostTermCollectionPeriod()"]'
                ).get(i);
        },

        retentionSection: function (i) {
            return $$(
                '[data-ng-repeat="rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods"]'
            ).get(i);
        },

        editDurationRtpPostTermCollectionField: function (i, j) {
            return pages.editDealRtp.retentionSection(i).$$(
                   'div[tg-modular-edit-id="postTermCollectionModulatEdit"] input[name="retentionPostTermDuration"]'
                ).get(j);
        },

        editScopeAcquisitionInputField: function (i) {
            return $$('[data-ng-model="acqRtp.deal_scope_id_holders"] input').get(i);
        },

        editScopeRetentionInputField: function (i) {
            return $$('[data-ng-model="rtp.deal_scope_id_holders"] input').get(i);
        },

        editScopePostTermInputField: function (i) {
            return $$('[data-ng-model="postTermCollectionRTP.deal_scope_id_holders"] input').get(i);
        },

        scopeOption: function (i) {
            return $$(
                'ul.tg-typeahead__suggestions li.tg-typeahead__suggestions-container ul li'
            ).get(i);
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
            pages.base.scrollIntoView(pages.editDealRtp.elems.editActualStartDateAcquisitionField);
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
            var el = pages.editDealRtp.elems.editAddRetentionFromAcquisitionLink;
            pages.base.scrollIntoView(el);
            el.click();
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
        },

        editConfirmDeleteTheRtpRetentionFromAcquisitionForm: function () {
            pages.editDealRtp.elems.confirmDeleteModalDialog.click();
            browser.sleep(5000);
            pages.editDealRtp.waitForAjax();
        },

        editFillTheRetentionDescriptionFromAcquisition: function (description) {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField);
            pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField.sendKeys(description);
        },

        editClickOnTheAddEndRulesFromRetentionNumber: function () {
            pages.editDealRtp.elems.editAddEndRulesLinkFromRetention.click();
            //browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[data-ng-form='rtpEndRulesModalForm']"))));
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
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope"))));
        },

        selectScopeNumberIFromInput: function (i, j, type) {
            var input;

            if (type == 'ptc') {
                input = pages.editDealRtp.editScopePostTermInputField(j);
            } else if (type == 'acq') {
                input = pages.editDealRtp.editScopeAcquisitionInputField(j);
            } else {
                input = pages.editDealRtp.editScopeRetentionInputField(j);
            }
            pages.base.scrollIntoView(input);
            input.clear();
            input.click();
            browser.wait(ExpectedConditions.visibilityOf($('ul.tg-typeahead__suggestions.ng-scope')));
            pages.editDealRtp.scopeOption(i).click();
            pages.editDealRtp.elems.editApplyScopeAcquisitionButton.click();
        },

        editSelectTheSpecificDurationTypeRetentionFromAcquisitionNumberI: function (i, durationType) {
            var desiredOption;
            browser.driver.findElements(By.css("select[id='retentionDurationType'] option:nth-child(" + (i + 1) + ")"))
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
            pages.base.scrollIntoView(pages.editDealRtp.elems.editAddPostTermPeriodFromRetentionLink);
            pages.editDealRtp.elems.editAddPostTermPeriodFromRetentionLink.click();
        },

        editFillIntoTheDurationFieldPostTermCollectionFromRetention: function (i, j) {
            var number = Math.floor(Math.random() * 20) + 1;
            i = i || 0;
            j = j || 0;
            pages.editDealRtp.editDurationRtpPostTermCollectionField(i, j).sendKeys(number);
        },

        editFillTheDurationFieldPostTermCollectionFromRetention: function (i, j) {
            var number = Math.floor(Math.random() * 20) + 1;
            i = i || 0;
            j = j || 0;

            pages.editDealRtp.elems.editDurationRtpPostTermCollectionField.sendKeys(number);
        },

        editSelectTheEndDateEndRulesSpecificValueRuleNumberI: function (i, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-model='rule.endDateType.code'] div.tg-dropdown-button")));
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-model='rule.endDateType.code'] div.tg-dropdown-button"))));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-model='rule.endDateType.code'] div.tg-dropdown-button")).click();
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
            pages.base.scrollIntoView(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.code'] div.tg-dropdown-button")));
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.code'] div.tg-dropdown-button"))));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.leftValue.code'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.ng-scope a"))
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
            pages.base.scrollIntoView(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[ng-model='condition.leftValue.attrValue']")));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[ng-model='condition.leftValue.attrValue']")).clear();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") input[ng-model='condition.leftValue.attrValue']")).sendKeys(value);
        },

        editSelectTheRequirementEndRulesSpecificValueByIndexRuleNumberIRowNumberJ: function (i, j, index) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.operator'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.xpath("//*[@class='tg-dropdown-menu ng-scope']/ul[@class='dropdown-menu']/li[@class='tg-dropdown-menu-item ng-scope']"))
                .then(function (options) {
                    var randomNumber = index;
                    var element = options[randomNumber];
                    browser.actions().mouseMove(element).perform();
                    browser.actions().click(element).perform();
                });
        },

        editSelectTheRightVariableEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            var desiredOption;
            pages.base.scrollIntoView(element(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.code'] div.tg-dropdown-button")));
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.code'] div.tg-dropdown-button")).click();
            browser.driver.findElements(By.css("div.tg-dropdown-menu.ng-scope ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope a"))
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
            browser.driver.findElement(By.css("div[ng-form='ruleForm'] div.clearfix.rule-header input[ng-model='rule.offsetValue']")).sendKeys(number);
        },

        editSelectTheRandomOptionFromOffsetByChoiceEndRules: function (i) {
            pages.createDealContractPeriod.elems.offsetByArrowChoiceEndRules.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[ng-form='rulesForm'] div.clearfix.rule-header div ul.dropdown-menu li:nth-child(" + i + ")  a"))));
            browser.driver.findElements(By.css("div[ng-form='rulesForm'] div.clearfix.rule-header div ul.dropdown-menu li:nth-child(" + i + ")  a"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        editClickOnTheAddNewRuleEndRulesAddedRuleNumberI: function (i) {
            browser.driver.findElement(By.css("div[ng-form='conditionForm']:nth-child(" + (i + 2) + ") a[ng-click='addEndRuleCondition(rule, condition)'] i")).click();
        },

        editClickOnTheDeleteIconEndRulesConditionNumberIRowNumberJWithoutModal: function (i, j) {
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).click();
        },

        editClickOnTheDeleteRtpIconEndRulesConditionNumberIRowNumberJ: function (i, j) {
            pages.base.scrollIntoView(element(by.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")));
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div[data-ng-form='conditionForm']:nth-child(" + (j + 2) + ") a.pull-right.remove-btn i")).click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog));
            browser.actions().mouseMove(pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog).perform();
            pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog.click();
        },

        checkTheEndRuleRetentionTooltipSummary: function (text) {
            pages.base.scrollIntoView(element(by.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()'] span.pull-left.rule-summary")));
            browser.driver.findElement(By.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()'] span.pull-left.rule-summary")).getText().
            then(function (promise) {
                console.log("The summary text for  end rules for rule number:" + promise);
                expect(promise).toEqual(text);
            });
        },

        editClickOnTheCancelEndRulesFromRetentionNumber: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention);
            pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.EDITOR.modular-edit.ng-scope"))));
            browser.driver.findElement(By.css("div.CONTROLS.clearfix.ng-scope button[data-ng-click='tgModularViewMethods.save()']"));
        },

        editClickOnTheCancelEndRulesFromRetentionNumberWIthoutModal: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention));
            pages.base.scrollIntoView(pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention);
            pages.editDealRtp.elems.editCancelEndRulesLinkFromRetention.click();
        },

        editClickOnTheContinueEditingEndRulesModalButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDeleteEndRulesModalDialog));
            pages.editDealRtp.elems.editCancelDeleteEndRulesModalDialog.click();
        },

        editClickOnTheConfirmCancellationEndRulesModalButton: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDeleteEndRulesModalDialog));
            pages.editDealRtp.elems.editConfirmDeleteEndRulesModalDialog.click();
        },

        editFillIntoThePreDefinedDateFieldEndRulesSpecificDateRuleNumberI: function (i, specific_date) {
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header div[name='endDateTypeDate'] input")).clear();
            browser.driver.findElement(By.css("div[data-ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header div[name='endDateTypeDate'] input")).sendKeys(specific_date);
        },

        editAddTheEndRuleOnTheForm: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editAddRuleLinkBottomEndRuleForm);
            pages.editDealRtp.elems.editAddRuleLinkBottomEndRuleForm.click();
        },

        editFillIntoTheAttributeRightDateEndRulesSpecificValueRuleNumberIRowNumberJ: function (i, j, value) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.attrValue'] input")).clear();
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div[ng-model='condition.rightValue.attrValue'] input")).sendKeys(value);
        },

        editClickOnTheDeleteEndRulesButtonForRetention: function () {
            pages.base.scrollIntoView(pages.editDealRtp.elems.editDeleteButtonEndRulesRetention);
            pages.editDealRtp.elems.editDeleteButtonEndRulesRetention.click();
        },

        editDeleteTheRuleNumberIFromEndRulesRetention: function (i) {
            pages.base.scrollIntoView(element(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header a.pull-right.remove-btn")));
            browser.driver.findElement(by.css("div[ng-form='ruleForm']:nth-child(" + i + ") div.clearfix.rule-header a.pull-right.remove-btn")).click();
        },

        editConfirmDeleteTheRuleFromEndRulesRetention: function () {
            browser.driver.findElement(By.css("div.modal-footer button[data-ng-click='ok()']")).click();
        },


        editCancelDeleteTheRuleFromEndRulesRetention: function () {
            browser.driver.findElement(By.css("div.modal-footer button[data-ng-click='cancel()']")).click();
        },

        editCheckTheSummaryTextForEndRulesRuleNumberIRetention: function (i, text) {
            pages.base.scrollIntoView(element(by.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")));
            browser.driver.findElement(By.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")).getText().
            then(function (promise) {
                console.log("The summary text for  end rules for rule number: " + i + " is: " + promise);
                expect(promise).toEqual(text);
            });
        },

        editCheckTheSummaryTextForEndRulesRuleNumberIContainsText: function (i, text) {
            pages.base.scrollIntoView(element(by.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")));
            browser.driver.findElement(By.css("div.summary-end-rules ul.end-rules-list li[ng-repeat='endRule in tgModularEditModel.endRules.$getItems()']:nth-child(" + i + ") span.pull-left.rule-summary")).getText().
            then(function (promise) {
                console.log("The summary text for  end rules for rule number: " + i + " is: " + promise);
                expect(promise).toContain(text);
            });
        },

        editClickOnTheWithNoticeCheckBoxEndRulesRuleNumberIRowNumberJRetention: function (i, j) {
            browser.driver.findElement(By.css("div[ng-form='ruleForm']:nth-child(" + i + ") div[ng-form='conditionForm']:nth-child(" + (j + 2) + ") div.pull-left.conditions input[ng-model='condition.notice']")).click();
        },

        editClickOnTheEndRulesAreaRetention: function () {
            browser.driver.findElement(By.css("div[ng-form='rulesForm'] div.summary-end-rules")).click();
        },

        editFillIntoTheEndDateTypePreDefinedDateInputFieldEndRules: function (value) {
            pages.editDealRtp.elems.editEndDatePreDefinedDateInputFieldEndRules.clear();
            pages.editDealRtp.elems.editEndDatePreDefinedDateInputFieldEndRules.sendKeys(value);
        },

        editFillIntoTheOffsetByInputFieldEndRulesSpecificValue: function (number) {
            pages.editDealRtp.elems.editOffsetByInputFieldEndRules.clear();
            pages.editDealRtp.elems.editOffsetByInputFieldEndRules.sendKeys(number);
        },

        editSelectTheSpecificOptionFromOffsetByChoiceEndRules: function (value) {
            var desiredOption;
            pages.createDealContractPeriod.elems.offsetByArrowChoiceEndRules.click();
            browser.wait(ExpectedConditions.visibilityOf(element(By.xpath("//*[@tg-model-class-validation='rule.offsetValue']//ul[@class='dropdown-menu']/li/a"))));
            pages.base.scrollIntoView(element(By.xpath("//*[@tg-model-class-validation='rule.offsetValue']//ul[@class='dropdown-menu']/li/a")));
            browser.driver.findElements(By.xpath("//*[@tg-model-class-validation='rule.offsetValue']//ul[@class='dropdown-menu']/li/a"))
            //browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) ul.dropdown-menu li a"))));
            //browser.driver.findElements(By.css("div[data-ng-form='rulesForm'] div.clearfix.rule-header div:nth-child(4) ul.dropdown-menu li a"))
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

        editClickOnTheAccountingPeriodEndDateCheckBoxEndRules: function () {
            pages.editDealRtp.elems.editAccountingPeriodEndCheckBoxEndRules.click();
        }


    });
}
'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.editDealRtp === undefined) {
    pages.editDealRtp = new ftf.pageObject({
        locators: {
            editRtpAcquisitionArea: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] div[data-ng-if='acqFormSection.detail']"},
            editRtpAcquisitionIcon: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] button[data-ng-click='showRtpEdit(acqFormSection, acqRtp.id, rtps.id)']"},
            editDescriptionAcquisitionField: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] input[data-ng-model='acqRtp.description']"},
            editActualEndDateAcquisitionField: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] div[name='acquisitionEndDate'] input"},
            editSaveAcquisitionAreaButton: {css: "div[data-ng-class='{ active: acqFormSection.edit }'] button[data-ng-click='updateDeal(rtpFormAcq.$valid, form.deal, acqFormSection, false)']"},
            editAddRetentionFromAcquisitionLink: {css: "a[data-ng-click='addRetentionRightsTermPeriod(rtps.id)']"},
            editTheRtpRetentionArea: {css: "div[data-ng-class='{ active: retentionFormSection.edit }'] div[data-ng-if ='retentionFormSection.detail']"},
            editTheRtpRetentionIcon: {css: "div[data-ng-class='{ active: retentionFormSection.edit }'] button[data-ng-click='showRtpEdit(retentionFormSection, rtp.id, rtps.id)']"},
            removeTheRtpRetention: {css: "div[data-ng-class='{ active: retentionFormSection.edit }'] div[data-name='rtpForm'] a[ng-click='showDeleteRightsTermPeriodModal(rtps.id, rtp.id)']"},
            editDescriptionRetentionFromAcquisitionField: {css: "input[data-ng-model='rtp.description']"},
            editScopeRetentionFromAcquisitionField: {css: "div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']"},
            editScopeRetentionFromAcquisitionInputField: {css: "div[data-ng-model='rtp.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            editApplyScopeAcquisitionButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']"},
            editActualEndDateRetentionFromAcquisitionField: {css: "div[name='retentionEndDate'] input"},
            editAddPostTermPeriodFromRetentionLink: {css: "a[data-ng-click='addPostTermCollectionRightsTermPeriodToRetention(rtps.id, rtp.id)']"},
            editDurationRtpPostTermCollectionField: {css: "div[data-name='retentionPostRtpForm'] input[name='retentionPostTermDuration']"},
            saveRetentionFromAcquisitionButton: {css: "button[data-ng-click='updateDeal(retentionForm.$valid, form.deal, retentionFormSection, false)"},
            modalDialogDelete: {css: "div.modal-dialog.ng-scope"},
            confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope button.btn.btn-primary:nth-child(2)"},
            confirmCancelModalDialog: {css: "div.modal-dialog.ng-scope button[data-ng-click='cancel()']"}
        },

        editTheRtpAcquisitionArea: function () {
            browser.actions().mouseMove(pages.editDealRtp.elems.editRtpAcquisitionArea).perform();
            pages.editDealRtp.elems.editRtpAcquisitionIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDescriptionAcquisitionField));
        },

        editFillIntoTheAcquisitionActualEndDateField: function (value) {
            pages.editDealRtp.elems.editActualEndDateAcquisitionField.clear();
            pages.editDealRtp.elems.editActualEndDateAcquisitionField.sendKeys(value);
        },

        editSaveTheAcquisitionArea: function () {
            pages.editDealRtp.elems.editSaveAcquisitionAreaButton.click();
        },


        editTheRtpRetentionArea: function () {
            browser.actions().mouseMove(pages.editDealRtp.elems.editTheRtpRetentionArea).perform();
            pages.editDealRtp.elems.editTheRtpRetentionIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField));
        },

        clickOnTheAddRetentionFromAcquisitionLink: function () {
            pages.editDealRtp.elems.editAddRetentionFromAcquisitionLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField));
        },

        editDeleteTheRtpRetentionFromAcquisitionForm: function () {
            pages.editDealRtp.elems.removeTheRtpRetention.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.modalDialogDelete));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.editDealRtp.elems.confirmDeleteModalDialog));
            pages.editDealRtp.elems.confirmDeleteModalDialog.click();
            pages.editDealRtp.waitForAjax();
            browser.wait(ExpectedConditions.invisibilityOf(pages.editDealRtp.elems.modalDialogDelete));
        },

        editFillTheRetentionDescriptionFromAcquisition: function (description) {
            pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField.sendKeys(description);
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
            pages.editDealRtp.elems.saveRetentionFromAcquisitionButton.click();
            pages.editDealRtp.waitForAjax();
        },

        editClickOnTheAddPostTermPeriodFromRetention: function () {
            pages.editDealRtp.elems.editAddPostTermPeriodFromRetentionLink.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.editDealRtp.elems.editDurationRtpPostTermCollectionField));
        },

        editFillIntoTheDurationFieldPostTermCollectionFromRetention: function(){
            var number = Math.floor(Math.random() * 20) + 1;
            pages.editDealRtp.elems.editDurationRtpPostTermCollectionField.sendKeys(number);
        }


    })
}
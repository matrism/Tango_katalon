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
            editApplyScopeAcquisitionButton: {css: "ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer button[data-ng-click='applySelections($dataSets);']"},
            editActualEndDateRetentionFromAcquisitionField: {css: "div[name='retentionEndDate'] input"},
            saveRetentionFromAcquisitionButton: {css: "button[data-ng-click='updateDeal(retentionForm.$valid, form.deal, retentionFormSection, false)"},
            modalDialogDelete: {css: "div.modal-dialog.ng-scope"},
            confirmDeleteModalDialog: {css: "div.modal-dialog.ng-scope button.btn.btn-primary:nth-child(2)"},
            confirmCancelModalDialog: {css: "div.modal-dialog.ng-scope button[data-ng-click='cancel()']"}
        },

        editAddPostTermPeriodFromRetentionLink: function (i) {
            return $$(
                    'a[data-ng-click="addPostTermCollectionRightsTermPeriodToRetention(rtps.id, rtp.id)"]'
                ).get(i);
        },

        retentionSection: function (i) {
            return $$(
                    '[data-ng-repeat="rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods"]'
                ).get(i);
        },

        editDurationRtpPostTermCollectionField: function (i, j) {
            return pages.editDealRtp.retentionSection(i).$$(
                    'div[data-name="retentionPostRtpForm"] input[name="retentionPostTermDuration"]'
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
            pages.editDealRtp.elems.editDescriptionRetentionFromAcquisitionField.sendKeys(description);
        },

        editFillIntoTheActualEndDateFieldRetentionFromAcquisition: function (actualEndDate) {
            pages.editDealRtp.elems.editActualEndDateRetentionFromAcquisitionField.sendKeys(actualEndDate);
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

        editClickOnTheAddPostTermPeriodFromRetention: function (i) {
            i = i || 0;
            var element = pages.editDealRtp.editAddPostTermPeriodFromRetentionLink(i);
            pages.base.scrollIntoView(element);
            element.click();
        },

        editFillIntoTheDurationFieldPostTermCollectionFromRetention: function (i, j) {
            var number = Math.floor(Math.random() * 20) + 1;
            i = i || 0;
            j = j || 0;
            pages.editDealRtp.editDurationRtpPostTermCollectionField(i, j).sendKeys(number);
        }


    })
}

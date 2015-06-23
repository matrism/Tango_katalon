"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_contract_period === undefined) {
    pages.create_deal_contract_period = new ftf.pageObject({
        locators: {
            addContractPeriodElem: {css: "a[data-ng-click='addContractPeriod()']"},
            descriptionContractPeriod: {css: "div.input-addition #description"},
            startDate: {css: "div#actualStartDate input"},
            endTargetMonths: {name: "targetEndDuration"},
            addMdrcLink: {css: "a[data-ng-click='addCommitment()']"},
            incompleteMdrc: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-class='{ active: !mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"},
            deemedCompleteMdrc: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-class='{ active: mdrc.is_completed && mdrc.showDeemedCompleteDetails }']"},
            completeMdrc: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-class='{ active: mdrc.is_completed && !mdrc.showDeemedCompleteDetails }']"},
            mdrcQuantity: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#quantity"},
            mdrcMinimumWorkContribution: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#workPercent"},
            mdrcQuantityForCommercialRelease: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#commercialReleaseQuantity"},
            mdrcMajorTerritoriesForCommercialRelease: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#territories"},
            mdrcTerritoriesField: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.tg-territory div[ng-class='tgTypeaheadWrapClass']"},
            mdrcTerritoriesInputField: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.tg-territory input[ng-model='$term']"},
            mdrcTerritoriesDropDown: {css: "div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            mdrcYesCommercialReleaseByMajorLabel: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.release_label']:nth-child(1)"},
            mdrcNoCommercialReleaseByMajorLabel: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.release_label']:nth-child(2)"},
            mdrcLabelsElement: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div[data-ng-model='mdrc.labels'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"},
            mdrcLabelsDropDownData: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem ul.tg-typeahead__suggestions.ng-scope"},
            mdrcYesSelfRecord: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.self_record']:nth-child(1)"},
            mdrcNoSelfRecord: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.self_record']:nth-child(2)"},
            mdrcPercentOfMinStatutoryRate: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#minMechanicalRate"},
            mdrcInNoEventLessThan: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input[data-ng-model='mdrc.no_less_than']"},
            mdrcYesProportionalRecoupmentAllowed: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.proportional_recoupment']:nth-child(1)"},
            mdrcNoProportionalRecoupmentAllowed: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.proportional_recoupment']:nth-child(2)"},
            mdrcYesSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.additional_complexity']:nth-child(1)"},
            mdrcNoSeeContractForAdditionalMdrcComplexities: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-model='mdrc.additional_complexity']:nth-child(2)"},
            mdrcDeliverySchedule: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input[data-ng-model='mdrc.delivery_schedule.quantity']"},
            mdrcEveryWeeks: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input[data-ng-model='mdrc.delivery_schedule.frequency']"},
            mdrcDateCompleted: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div#dateCompleted input[data-ng-model='date']"},
            mdrcShortfallAmount: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem input#shortfall"},
            mdrcForgivenShortfallButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(1)"},
            mdrcCarriedForwardShortfallButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem div.btn-group.shortfall-action button:nth-child(2)"},
            mdrcSaveButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-click='form.terms.activeCp.freshlyAdded ? saveCommitment(form.terms.activeCp.id, mdrc.id, mdrcForm.$valid) : updateDeal(mdrcForm.$valid, form.deal, activeForm, dealUpdateCallbackFunction)']"},
            mdrcCancelLink: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem a[data-ng-click='cancelCommitmentChanges(form.terms.activeCp.id, mdrc.id);']"},
            mdrcDeleteButton: {css: "div.mdrc-form.mdrc-listing.ng-scope.last-elem button[data-ng-click='showDeleteCommitmentModal(mdrc.id, form.terms.activeCp.id, modularInitView)']"}
        },

        clickOnAddContractPeriod: function () {
            pages.create_deal_contract_period.elems.addContractPeriodElem.click();
        },

        fillDescriptionField: function (description) {
            pages.create_deal_contract_period.elems.descriptionContractPeriod.clear();
            pages.create_deal_contract_period.elems.descriptionContractPeriod.sendKeys(description);
        },

        fillStartActualDate: function () {
            pages.create_deal_contract_period.elems.startDate.sendKeys("2015-03-12");
        },

        fillTargetEndMonths: function () {
            pages.create_deal_contract_period.elems.endTargetMonths.sendKeys("3");
        },

        clickOnAddMdrcLink: function () {
            pages.create_deal_contract_period.elems.addMdrcLink.click();
            browser.sleep(1000);
        },

        clickOnIncompleteOption: function () {
            pages.create_deal_contract_period.elems.incompleteMdrc.click();
        },

        clickOnDeemedCompleteOption: function () {
            pages.create_deal_contract_period.elems.deemedCompleteMdrc.click();
        },

        clickOnCompleteOption: function () {
            pages.create_deal_contract_period.elems.completeMdrc.click();
        },

        fillIntoMdrcQuantity: function () {
            var number = Math.floor(Math.random() * 50) + 30;
            pages.create_deal_contract_period.elems.mdrcQuantity.sendKeys(number);
        },

        fillIntoMdrcMinimumWorkContribution: function () {
            var number = Math.floor(Math.random() * 100) + 1;
            pages.create_deal_contract_period.elems.mdrcMinimumWorkContribution.clear();
            pages.create_deal_contract_period.elems.mdrcMinimumWorkContribution.sendKeys(number);
        },

        fillIntoMdrcQuantityForCommercialRelease: function () {
            var number = Math.floor(Math.random() * 10) + 1;
            pages.create_deal_contract_period.elems.mdrcQuantityForCommercialRelease.sendKeys(number);
        },

        fillIntoMdrcMajorTerritoriesForCommercialeRelease: function () {
            var number = Math.floor(Math.random() * 5) + 1;
            pages.create_deal_contract_period.elems.mdrcMajorTerritoriesForCommercialRelease.clear();
            pages.create_deal_contract_period.elems.mdrcMajorTerritoriesForCommercialRelease.sendKeys(number);
        },

        fillIntoTerritoriesFieldLetter: function () {
            pages.create_deal_contract_period.elems.mdrcTerritoriesField.click();
            pages.create_deal_contract_period.elems.mdrcTerritoriesInputField.sendKeys("a");
        },

        selectRandomTerritory: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcTerritoriesDropDown));
            browser.driver.findElements(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnMdrcYesCommercialReleaseByMajorLabel: function () {
            pages.create_deal_contract_period.elems.mdrcYesCommercialReleaseByMajorLabel.click();
        },

        clickOnMdrcNoCommercialReleaseByMajorLabel: function () {
            pages.create_deal_contract_period.elems.mdrcNoCommercialReleaseByMajorLabel.click();
        },

        fillIntoMdrcLabelsField: function () {
            pages.create_deal_contract_period.elems.mdrcLabelsElement.sendKeys("ty");
        },

        selectMdrcRandomValueFromLabel: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.create_deal_contract_period.elems.mdrcLabelsDropDownData));

            element(By.css("li.tg-typeahead__suggestions-footer")).getText().
                then(function (promise) {
                    console.log("Text from label is : " + promise);
                    if (promise.indexOf("Create New Label") != -1) {
                        browser.driver.findElements(By.css("li.tg-typeahead__suggestions-footer div a"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                options[randomNumber].click();
                            })
                    }
                    else {
                        browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope div"))
                            .then(function (options) {
                                var randomNumber = Math.floor((Math.random() * options.length));
                                options[randomNumber].click();
                            })
                    }
                });
        },

        clickOnMdrcYesSelfRecord: function () {
            pages.create_deal_contract_period.elems.mdrcYesSelfRecord.click();
        },

        clickOnMdrcNoSelfRecord: function () {
            pages.create_deal_contract_period.elems.mdrcNoSelfRecord().click();
        },

        fillIntoMdrcPercentOfMinStatutoryRate: function () {
            var percent = Math.floor(Math.random() * 100) + 1;
            pages.create_deal_contract_period.elems.mdrcPercentOfMinStatutoryRate.sendKeys(percent);
        },

        fillIntoMdrcInNoEventLessThan: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.create_deal_contract_period.elems.mdrcInNoEventLessThan.sendKeys(value);
        },

        clickOnMdrcYesProportionalRecoupmentAllowed: function () {
            pages.create_deal_contract_period.elems.mdrcYesProportionalRecoupmentAllowed.click();
        },

        clickOnMdrcNoProportionalRecoupmentAllowed: function () {
            pages.create_deal_contract_period.elems.mdrcNoProportionalRecoupmentAllowed.click();
        },

        clickOnMdrcYesSeeContractForAdditionalMdrcComplexities: function () {
            pages.create_deal_contract_period.elems.mdrcYesSeeContractForAdditionalMdrcComplexities.click();
        },

        clickOnMdrcNoSeeContractForAdditionalMdrcComplexities: function () {
            pages.create_deal_contract_period.elems.mdrcNoSeeContractForAdditionalMdrcComplexities.click();
        },

        clickOnSaveMdrcForm: function () {
            pages.create_deal_contract_period.elems.mdrcSaveButton.click();
        },

        fillIntoMdrcDeliverySchedule: function () {
            var value = Math.floor(Math.random() * 20) + 1;
            pages.create_deal_contract_period.elems.mdrcDeliverySchedule.sendKeys(value);
        },

        fillIntoMdrcEveryWeeks: function () {
            var value = Math.floor(Math.random() * 10) + 1;
            pages.create_deal_contract_period.elems.mdrcEveryWeeks.sendKeys(value);
        },

        fillIntoMdrcDateCompleted: function () {
            pages.create_deal_contract_period.elems.mdrcDateCompleted.sendKeys("2015-03-09");
        },

        fillIntoMdrcShortfallAmount: function () {
            var value = Math.floor(Math.random() * 80) + 1;
            pages.create_deal_contract_period.elems.mdrcShortfallAmount.sendKeys(value);
        },

        clickOnMdrcForgivenShortfallActionButton: function () {
            pages.create_deal_contract_period.elems.mdrcForgivenShortfallButton.click();
        },

        clickOnMdrcCarriedForwardShortfallActionButton: function () {
            pages.create_deal_contract_period.elems.mdrcCarriedForwardShortfallButton.click();
        }
    });
}

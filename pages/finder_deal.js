"use strict";
var pph = require("../helpers/pph");
var ExpectedConditions = protractor.ExpectedConditions;
var promise = protractor.promise;
if (pages.finder_deal === undefined) {
    pages.finder_deal = new ftf.pageObject({
        locators: {
            finderDealTitle: {css: "div[data-ng-form='finderDealsForm'] h3"},
            generalTermsFinderDealTitle: {css: "div[data-ng-form='finderDealGeneralForm'] a.accordion-toggle.ng-binding span"},
            termsByContractPeriodFinderDealTitle: {css: "div[data-ng-form='enclosingCpFinderDealForm'] a.accordion-toggle.ng-binding span"},
            generalTermsAreaFinderDeal: {css: "div[data-ng-class='{ active : form.show.finderDeal.general.edit }']"},
            generalTermsFinderDealEditIcon: {css: "div[data-ng-class='{ active : form.show.finderDeal.general.edit }'] i[data-ng-click='openFinderDealGeneralEdit()']"},
            yesPriorAwarenessNotification: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.must_notify']:nth-child(1)"},
            noPriorAwarenessNotification: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.must_notify']:nth-child(2)"},
            notifyWithinThisNumberOfDays: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] input[name='priorAwareDays']"},
            submissionDecisionWithinNumberOfDays: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] input[name='decisionDays']"},
            acceptAssumedResponse: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.assumed_response']:nth-child(1)"},
            declineAssumedResponse: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.assumed_response']:nth-child(2)"},
            noneAssumedResponse: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.assumed_response']:nth-child(3)"},
            wcmWhoWillDraftDeals: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.drafts_agreements']:nth-child(1)"},
            finderWhoWillDraftDeals: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.drafts_agreements']:nth-child(2)"},
            wcmWhoHasControlToExerciseFutureOptions: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.option']:nth-child(1)"},
            finderWhoHasControlToExerciseFutureOptions: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.option']:nth-child(2)"},
            wcmWhoIsResponsibleForAdvances: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.resp_for_advances']:nth-child(1)"},
            finderWhoIsResponsibleForAdvances: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.resp_for_advances']:nth-child(2)"},
            finderRightToPursue: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.tg-dropdown-button"},
            finderRightToPursueDropDown: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] ul.dropdown-menu li.ng-scope"},
            yesWcmRightToPursue: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.WCM_right_to_pursue']:nth-child(1)"},
            noWcmRightToPursue: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-model='form.deal.finder_deal_properties.WCM_right_to_pursue']:nth-child(2)"},
            saveGeneralTermsFinderDeal: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-click='updateDeal(finderDealsForm.$valid, null, form.show.finderDeal.general)']"},
            cancelGeneralTermsFinderDeal: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] button[data-ng-click='cancelFinderDealGeneralEdit()']"},
            //terms by contract period locators
            termsByContractPeriodArea: {css: "div[data-ng-class='{ active : form.show.finderDeal.edit }']"},
            termsByContractPeriodEditIcon: {css: "div[data-ng-class='{ active : form.show.finderDeal.edit }'] i[data-ng-click='openFinderDealCpEdit(finderDealCpIndex);']"},
            leftArrowHeaderTermsByContractPeriod: {css: "div[data-ng-class='{ active : form.show.finderDeal.edit }'] div.form-horizontal.relative a.move-left.carousel-arrow"},
            rightArrowHeaderTermsByContractPeriod: {css: "div[data-ng-class='{ active : form.show.finderDeal.edit }'] div.form-horizontal.relative a.move-right.carousel-arrow"},
            //terms by contract period - found deal terms locators
//maximumFoundAgreementsWithoutPreApproved: {css: "input[data-ng-model='cp.found_deal_terms.agreement_maximum_without_approval']"}
        },

        validateTheGeneralTermsTitleIsPresent: function () {
            pages.finder_deal.elems.generalTermsFinderDealTitle.getText().
                then(function (promise) {
                    console.log("General terms finder deal text is : " + promise);
                    expect(promise).toEqual("General Terms");
                });
        },

        validateTheTermsByContractPeriodFinderDealTitle: function () {
            page.finder_deal.elems.termsByContractPeriodFinderDealTitle.getText().
                then(function (promise) {
                    console.log("Terms by Contract period text is : " + promise);
                    expect(promise).toContain("Terms by Contract Period");
                });
        },

        validateTheNumberOfTermsByContractPeriodFinderDealTitle: function (number) {
            page.finder_deal.elems.termsByContractPeriodFinderDealTitle.getText().
                then(function (promise) {
                    console.log("Terms by Contract period text is : " + promise);
                    expect(promise).toContain(number);
                });
        },

        clickOnTheGeneralTermsFinderDeal: function () {
            pages.finder_deal.elems.generalTermsFinderDealTitle.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.generalTermsAreaFinderDeal));
        },

        editTheGeneralTermsFinderDeal: function () {
            pages.finder_deal.elems.generalTermsAreaFinderDeal.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.generalTermsFinderDealEditIcon));
            pages.finder_deal.elems.generalTermsFinderDealEditIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.notifyWithinThisNumberOfDays));
        },

        clickOnTheYesPriorAwarenessNotification: function () {
            pages.finder_deal.elems.yesPriorAwarenessNotification.click();
        },

        clickOnTheNoPriorAwarenessNotification: function () {
            pages.finder_deal.elems.noPriorAwarenessNotification.click();
        },

        fillIntoNotifyWithinTheNumberOfDays: function () {
            var number = Math.floor(Math.random() * 30) + 1;
            pages.finder_deal.elems.notifyWithinThisNumberOfDays.clear();
            pages.finder_deal.elems.notifyWithinThisNumberOfDays.sendKeys(number);
        },

        fillIntoSubmissionDecisionWithinNumberOfDays: function () {
            var number = Math.floor(Math.random() * 30) + 1;
            pages.finder_deal.elems.submissionDecisionWithinNumberOfDays.clear();
            pages.finder_deal.elems.submissionDecisionWithinNumberOfDays.sendKeys(number);
        },

        clickOnTheAcceptAssumedResponse: function () {
            pages.finder_deal.elems.acceptAssumedResponse.click();
        },

        clickOnTheDeclineAssumedResponse: function () {
            pages.finder_deal.elems.declineAssumedResponse.click();
        },

        clickOnTheNoneAssumedResponse: function () {
            pages.finder_deal.elems.noneAssumedResponse.click();
        },

        clickOnTheWcmWhoWillDraftDeals: function () {
            pages.finder_deal.elems.wcmWhoWillDraftDeals.click();
        },

        clickOnTheFinderWhoWillDraftDeals: function () {
            pages.finder_deal.elems.finderWhoWillDraftDeals.click();
        },

        clickOnTheWcmWhoHasControlToExerciseFutureOptions: function () {
            pages.finder_deal.elems.wcmWhoHasControlToExerciseFutureOptions.click();
        },

        clickOnTheFinderWhoHasControlToExerciseFutureOptions: function () {
            pages.finder_deal.elems.finderWhoHasControlToExerciseFutureOptions.click();
        },

        clickOnTheWcmWhoIsResponsibleForAdvances: function () {
            pages.finder_deal.elems.wcmWhoIsResponsibleForAdvances.click();
        },

        clickOnTheFinderWhoIsResponsibleForAdvances: function () {
            pages.finder_deal.elems.finderWhoIsResponsibleForAdvances.click();
        },

        selectTheDesiredValueFinderRightToPursueDropDown: function (value) {
            var desiredOption;
            pages.finder_deal.elems.finderRightToPursue.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.finderRightToPursueDropDown));
            browser.driver.findElements(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] ul.dropdown-menu li.ng-scope"))
                .then(function findMatchingOption(options) {
                    options.some(function (option) {
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

        selectTheRandomValueFinderRightToPursueDropDown: function () {
            pages.finder_deal.elems.finderRightToPursue.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.finderRightToPursueDropDown));
            browser.driver.findElements(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnTheYesWcmRightToPursue: function () {
            pages.finder_deal.elems.yesWcmRightToPursue.click();
        },

        clickOnTheNoWcmRightToPursue: function () {
            pages.finder_deal.elems.noWcmRightToPursue.click();
        },

        clickOnTheSaveGeneralTermsFinderDeal: function () {
            pages.finder_deal.elems.saveGeneralTermsFinderDeal.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finder_deal.elems.notifyWithinThisNumberOfDays));
        },

        clickOnTheCancelGeneralTermsFinderDeal: function () {
            pages.finder_deal.elems.cancelGeneralTermsFinderDeal.click();
        },


        clickOnTheTermsByContractPeriodFinderDeal: function () {
            pages.finder_deal.elems.termsByContractPeriodFinderDealTitle.click();
        },


        clickOnContractPeriodNumberIDetailsTermsByContractPeriod:function(i){
            browser.driver.findElement(By.css("div[data-ng-class='{ active : form.show.finderDeal.edit }'] div.form-horizontal.relative ul.nav.nav-tabs li:nth-child(" + i + ")")).click();

        }


    });
}
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
            maximumFoundAgreementsWithoutPreApproval: {css: "input[data-ng-model='cp.found_deal_terms.agreement_maximum_without_approval']"},
            maximumFoundAgreementsWithPreApproval: {css: "input[data-ng-model='cp.found_deal_terms.agreement_maximum_with_approval']"},
            findersRecoupmentResponsability: {css: "input[data-ng-model='cp.found_deal_terms.finder_recoupment']"},
            nonSignedArtistMaximumAdvancesPayable: {css: "input[data-ng-model='cp.found_deal_terms.max_advance_non_signed']"},
            signedArtistMaximumAdvancesPayable: {css: "input[data-ng-model='cp.found_deal_terms.max_advance_signed']"},
            aggregateMaximumAdvancesPayable: {css: "input[data-ng-model='cp.found_deal_terms.aggregate_max_advance']"},
            //ownership terms locators
            aggregateMaximumOnAdvances: {css: "input[data-ng-model='ownership.advance_maximum']"},
            findersOwnership: {css: "input[data-ng-model='ownership.finder_own']"},
            wcmOwnership: {css: "input[data-ng-model='ownership.wcm_own']"},
            //found submission locators
            creatorFoundSubmissionInputField: {css: "div[data-ng-form='cpSubmissionForm'] div[data-ng-model='submission.creatorSet'] input[ng-model='$term']"},
            creatorFoundSubmissionDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            submissionDateField: {css: "div[data-ng-model='submission.submission_date'] input[data-ng-model='date']"},
            wcmDecissionField: {css: "div[data-ng-model='submission.wcm_decision']"},
            wcmDecisionDropDownData: {css: "ul.dropdown-menu li.ng-scope"},
            foundDealInputField: {css: "div[data-ng-model='submission.found_deal'] input[ng-model='$term']"},
            foundDealDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            findersRecoupmentResponsabilityOverride: {css: "input[data-ng-model='submission.override']"},
            cancelTermsByContractPeriodFinderDeal: {css: "div[data-ng-form='cpsFinderDealForm'] button[data-ng-click='cancelFinderDealCpEdit()']"},
            saveTermsByContractPeriodFinderDeal: {css: "div[data-ng-form='cpsFinderDealForm'] button[data-ng-click='updateDeal(cpsFinderDealForm.$valid, null, form.show.finderDeal, setActiveFinderDealCpTab)']"},
            //tooltips general terms
            priorAwarenessTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(1) i"},
            notifyWithinThisNumberOfDaysTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(2) i"},


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
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finder_deal.elems.generalTermsAreaFinderDeal));
            pages.finder_deal.elems.generalTermsAreaFinderDeal.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finder_deal.elems.generalTermsFinderDealEditIcon));
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

        editTheTermsByContractPeriodFinderDeal: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finder_deal.elems.termsByContractPeriodArea));
            pages.finder_deal.elems.termsByContractPeriodArea.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finder_deal.elems.termsByContractPeriodEditIcon));
            pages.finder_deal.elems.termsByContractPeriodEditIcon.click();
        },

        clickOnContractPeriodNumberIDetailsTermsByContractPeriod: function (i) {
            browser.driver.findElement(By.css("div[data-ng-class='{ active : form.show.finderDeal.edit }'] div.form-horizontal.relative ul.nav.nav-tabs li:nth-child(" + i + ")")).click();
        },

        fillIntoMaximumFoundAgreementsWithoutPreApprovalContractPeriodI: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.maximumFoundAgreementsWithoutPreApproval.sendKeys(number);
        },

        fillIntoMaximumFoundAgreementWithPreApprovalContractPeriodI: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.maximumFoundAgreementsWithPreApproval.sendKeys(number);
        },

        fillIntoFindersRecoupmentResponsability: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finder_deal.elems.findersRecoupmentResponsability.sendKeys(number);
        },

        fillIntoNonSignedArtistMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.nonSignedArtistMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoSignedArtistMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.signedArtistMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoAggregateMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.aggregateMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoAggregateMaximumOnAdvancesField: function () {
            var number = Math.floor(Math.random() * 300000) + 1;
            pages.finder_deal.elems.aggregateMaximumOnAdvances.sendKeys(number);
        },

        fillIntoFindersOwnershipField: function () {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            pages.finder_deal.elems.findersOwnership.sendKeys(percent);
        },

        fillIntoWmcsOwnershipField: function () {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            pages.finder_deal.elems.wcmOwnership.sendKeys(percent);
        },

        fillIntoAggregateMaximumOnAdvancesFieldNumberI: function (i) {
            var number = Math.floor(Math.random() * 300000) + 1;
            browser.driver.findElement(By.css("div[data-ng-repeat='ownership in cp.finder_ownerships']:nth-child(" + i + ") input[data-ng-model='ownership.advance_maximum']")).sendKeys(number);
        },

        fillIntoFindersOwnershipFieldNumberI: function (i) {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            browser.driver.findElement(By.css("div[data-ng-repeat='ownership in cp.finder_ownerships']:nth-child(" + i + ") input[data-ng-model='ownership.finder_own']")).sendKeys(percent);
        },

        fillIntoWmcsOwnershipFieldNumberI: function (i) {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            browser.driver.findElement(By.css("div[data-ng-repeat='ownership in cp.finder_ownerships']:nth-child(" + i + ") input[data-ng-model='ownership.wcm_own']")).sendKeys(percent);
        },

        fillIntoCreatorFoundSubmissionField: function () {
            pages.finder_deal.elems.creatorFoundSubmissionInputField.sendKeys("test");
        },

        selectRandomValueFromCreatorFoundSubmissionDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.creatorFoundSubmissionDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoSubmissionDateField: function(){
            var date = pages.base.randomDate(new Date(2015, 0, 1), new Date());
            pages.finder_deal.elems.submissionDateField.sendKeys(date);
        },

        selectTheRandomWcmDecisionDropDown: function(){
            pages.finder_deal.elems.wcmDecissionField.click();
            browser.wait(ExpectedConditions.visibilityOf(ExpectedConditions.visibilityOf(pages.finder_deal.elems.wcmDecisionDropDownData)));
            browser.driver.findElements(By.css("ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoFoundDealInputField: function () {
            pages.finder_deal.elems.foundDealInputField.sendKeys("123");
        },

        selectTheRandomValueFromFoundDealDropDown: function(){
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.foundDealDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoFindersRecoupmentResponsabilityOverride: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finder_deal.elems.findersRecoupmentResponsabilityOverride.sendKeys(percent);
        },

        fillIntoCreatorFoundSubmissionFieldNumberI: function (i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") div[data-ng-model='submission.creatorSet'] input[ng-model='$term']")).sendKeys("test");
        },

        fillIntoSubmissionDateFieldNumberI: function(i){
            var date = pages.base.randomDate(new Date(2015, 0, 1), new Date());
           browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") div[data-ng-model='submission.submission_date'] input[data-ng-model='date']")).sendKeys(date);
        },

        fillIntoFoundDealInputFieldNumberI: function (i) {
           browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") div[data-ng-model='submission.found_deal'] input[ng-model='$term']")).sendKeys("123");
        },

        fillIntoFindersRecoupmentResponsabilityOverrideNumberI: function (i) {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") input[data-ng-model='submission.override']")).sendKeys(percent);
        },

        clickOnTheSaveTermsByContractPeriodFinderDeal: function () {
            pages.finder_deal.elems.saveTermsByContractPeriodFinderDeal.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finder_deal.elems.maximumFoundAgreementsWithoutPreApproval));
        },

        clickOnTheCancelTermsByContractPeriodTermsFinderDeal: function () {
            pages.finder_deal.elems.cancelTermsByContractPeriodFinderDeal.click();
        }

    });
}
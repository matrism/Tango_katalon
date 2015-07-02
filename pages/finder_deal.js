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
            wcmDecisionField: {css: "div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(1) div[data-ng-model='submission.wcm_decision'] button"},
            wcmDecisionDropDownData: {css: "div[data-ng-model='submission.wcm_decision'] ul.dropdown-menu li.ng-scope"},
            foundDealInputField: {css: "div[data-ng-model='submission.found_deal'] input[ng-model='$term']"},
            foundDealDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            findersRecoupmentResponsabilityOverride: {css: "input[data-ng-model='submission.override']"},
            cancelTermsByContractPeriodFinderDeal: {css: "div[data-ng-form='cpsFinderDealForm'] button[data-ng-click='cancelFinderDealCpEdit()']"},
            saveTermsByContractPeriodFinderDeal: {css: "div[data-ng-form='cpsFinderDealForm'] button[data-ng-click='updateDeal(cpsFinderDealForm.$valid, null, form.show.finderDeal, setActiveFinderDealCpTab)']"},
            //tooltips general terms
            priorAwarenessTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(1) i"},
            notifyWithinThisNumberOfDaysTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(2) i"},
            submissionDecisionWithinNumberOfDaysTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(3) i"},
            assumedResponseTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(4) i"},
            whoWillDraftDealsTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(5) i"},
            whoHasControlToExerciseFutureOptionsTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(6) i"},
            whoIsResponsibleForAdvancesTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(7) i"},
            findersRightToPursueTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(8) i"},
            wcmRightToPursueTooltip: {css: "div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(9) i"},
            cancelChangesModalDialog: {css: "div.modal-dialog.ng-scope"},
            yesCancelChangesModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            noCancelChangesModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"},
            //finder deal view elements general terms
            priorAwarenessNotificationValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(1) span.view-info.pull-left strong"},
            notifyWithinThisNumberOfDaysValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(2) span.view-info.pull-left strong"},
            submissionDecisionWithinNumberOfDaysValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(3) span.view-info.pull-left strong"},
            assumedResponseValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(4) span.view-info.pull-left strong"},
            whoWillDraftDealsValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(5) span.view-info.pull-left strong"},
            whoHasControlToExerciseFutureOptionValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(6) span.view-info.pull-left strong"},
            whoIsResponsibleForAdvancesValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(7) span.view-info.pull-left strong"},
            finderRightToPursueValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(8) span.view-info.pull-left strong"},
            wcmRightToPursueValue: {css: "div[data-ng-show='form.show.finderDeal.general.detail'] div.view-row.clearfix:nth-child(9) span.view-info.pull-left strong"},
            //tooltips found deal terms - terms by contract period
            maximumFoundAgreementsWithoutPreApprovalTooltip: {css: "div[data-ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(1) i"},
            maximumFoundAgreementsWithPreApprovalTooltip: {css: "div[data-ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(2) i"},
            findersRecoupmentResponsabilityTooltip: {css: "div[data-ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(3) i"},
            nonSignedArtistMaximumAdvancesPayableTooltip: {css: "div[data-ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(4) i"},
            signedArtistMaximumAdvancesPayableTooltip: {css: "div[data-ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(5) i"},
            aggregateMaximumAdvancesPayableTooltip: {css: "div[data-ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(6) i"},
            //tooltips ownership terms - terms by contract period
            aggregateMaximumOnAdvancesTooltip: {css: "div[data-ng-form='cpOwnershipForm'] div.pull-left.agr-max i"},
            findersOwnershipTooltip: {css: "div[data-ng-form='cpOwnershipForm'] div.pull-left.finder-own:nth-child(2) i"},
            wcmOwnershipTooltip: {css: "div[data-ng-form='cpOwnershipForm'] div.pull-left.finder-own:nth-child(3) i"},
            //tooltips found submission - terms by contract period
            creatorsFoundSubmissionTooltip: {css: "div[data-ng-form='cpSubmissionsForm'] div.pull-left.creators i"},
            submissionDateTooltip: {css: "div[data-ng-form='cpSubmissionsForm'] div.pull-left.finder-own i"},
            wcmDecisionTooltip: {css: "div[data-ng-form='cpSubmissionsForm'] div.pull-left.wcm-decision i"},
            foundDealTooltip: {css: "div[data-ng-form='cpSubmissionsForm'] div.pull-left.found-deal i"},
            findersRecoupmentResponsabilityOverrideTooltip: {css: "div[data-ng-form='cpSubmissionsForm'] div.pull-left.recoup i"},
            //finder deal view elements terms by contract period - found deal terms
            maximumFoundAgreementsWithoutPreApprovalValue: {css: "div[data-ng-show='form.show.finderDeal.detail'] div.view-row.clearfix:nth-child(1) span.view-info.pull-left strong"},
            maximumFoundAgreementsWithPreApprovalValue: {css: "div[data-ng-show='form.show.finderDeal.detail'] div.view-row.clearfix:nth-child(2) span.view-info.pull-left strong"},
            findersRecoupmentResponsabilityValue: {css: "div[data-ng-show='form.show.finderDeal.detail'] div.view-row.clearfix:nth-child(3) span.view-info.pull-left strong"},
            nonSignedArtistMaximumAdvancesPayableValue: {css: "div[data-ng-show='form.show.finderDeal.detail'] div.view-row.clearfix:nth-child(4) span.view-info.pull-left strong"},
            signedArtistMaximumAdvancesPayableValue: {css: "div[data-ng-show='form.show.finderDeal.detail'] div.view-row.clearfix:nth-child(5) span.view-info.pull-left strong"},
            aggregateMaximumAdvancesPayableValue: {css: "div[data-ng-show='form.show.finderDeal.detail'] div.view-row.clearfix:nth-child(6) span.view-info.pull-left strong"},
            //finder deal view elements terms by contract period - ownership terms
            aggregateMaximumOnAdvancesValue: {css: "div[data-ng-repeat='ownership in cp.finder_ownerships'] div.pull-left.agr-max strong"},
            findersOwnershipValue: {css: "div[data-ng-repeat='ownership in cp.finder_ownerships'] div.pull-left.finder-own:nth-child(2) strong"},
            wcmOwnershipValue: {css: "div[data-ng-repeat='ownership in cp.finder_ownerships'] div.pull-left.finder-own:nth-child(3) strong"},
            //finder deal view elements terms by contract period - found submissions
            creatorFoundSubmissionValue: {css: "div[data-ng-repeat='submission in cp.finder_submissions'] div.pull-left.creators"},
            submissionDateValue: {css: "div[data-ng-repeat='submission in cp.finder_submissions'] div.pull-left.finder-own.ng-binding.ng-scope"},
            wcmDecisionValue: {css: "div[data-ng-repeat='submission in cp.finder_submissions'] div.pull-left.wcm-decision.ng-binding.ng-scope"},
            foundDealValue: {css: "div[data-ng-repeat='submission in cp.finder_submissions'] div.pull-left.found-deal.ng-scope"},
            findersRecoupmentResponsabilityOverrideValue: {css: "div[data-ng-repeat='submission in cp.finder_submissions'] div.pull-left.recoup.ng-binding.ng-scope"}
        },

        validateTheGeneralTermsTitleIsPresent: function () {
            pages.finder_deal.elems.generalTermsFinderDealTitle.getText().
                then(function (promise) {
                    console.log("General terms finder deal text is : " + promise);
                    expect(promise).toEqual("General Terms");
                });
        },

        validateTheTermsByContractPeriodFinderDealTitle: function () {
            pages.finder_deal.elems.termsByContractPeriodFinderDealTitle.getText().
                then(function (promise) {
                    console.log("Terms by Contract period text is : " + promise);
                    expect(promise).toContain("Terms by Contract Period");
                });
        },

        validateTheNumberOfTermsByContractPeriodFinderDealTitle: function (number) {
            pages.finder_deal.elems.termsByContractPeriodFinderDealTitle.getText().
                then(function (promise) {
                    console.log("Terms by Contract period count is : " + promise);
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

        fillIntoNotifyWithinTheNumberOfDays: function (number) {
            pages.finder_deal.elems.notifyWithinThisNumberOfDays.clear();
            pages.finder_deal.elems.notifyWithinThisNumberOfDays.sendKeys(number);
        },

        fillIntoSubmissionDecisionWithinNumberOfDays: function (number) {
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
            pages.finder_deal.waitForAjax();
        },

        clickOnContractPeriodNumberIDetailsTermsByContractPeriod: function (i) {
            browser.driver.findElement(By.css("div[data-ng-class='{ active : form.show.finderDeal.edit }'] div.form-horizontal.relative ul.nav.nav-tabs li:nth-child(" + i + ")")).click();
        },

        fillIntoMaximumFoundAgreementsWithoutPreApprovalContractPeriodI: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.maximumFoundAgreementsWithoutPreApproval.clear();
            pages.finder_deal.elems.maximumFoundAgreementsWithoutPreApproval.sendKeys(number);
        },

        fillIntoMaximumFoundAgreementWithPreApprovalContractPeriodI: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.maximumFoundAgreementsWithPreApproval.clear();
            pages.finder_deal.elems.maximumFoundAgreementsWithPreApproval.sendKeys(number);
        },

        fillIntoFindersRecoupmentResponsability: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finder_deal.elems.findersRecoupmentResponsability.clear();
            pages.finder_deal.elems.findersRecoupmentResponsability.sendKeys(percent);
        },

        fillIntoNonSignedArtistMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.nonSignedArtistMaximumAdvancesPayable.clear();
            pages.finder_deal.elems.nonSignedArtistMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoSignedArtistMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.signedArtistMaximumAdvancesPayable.clear();
            pages.finder_deal.elems.signedArtistMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoAggregateMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.aggregateMaximumAdvancesPayable.clear();
            pages.finder_deal.elems.aggregateMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoAggregateMaximumOnAdvancesField: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finder_deal.elems.aggregateMaximumOnAdvances.clear();
            pages.finder_deal.elems.aggregateMaximumOnAdvances.sendKeys(number);
        },

        fillIntoFindersOwnershipField: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finder_deal.elems.findersOwnership.clear();
            pages.finder_deal.elems.findersOwnership.sendKeys(percent);
        },

        fillIntoWmcsOwnershipField: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finder_deal.elems.wcmOwnership.clear();
            pages.finder_deal.elems.wcmOwnership.sendKeys(percent);
        },

        fillIntoAggregateMaximumOnAdvancesFieldNumberI: function (i) {
            var number = Math.floor(Math.random() * 300000) + 1;
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='ownership in cp.finder_ownerships']:nth-child(" + i + ") input[data-ng-model='ownership.advance_maximum']"));
            element.clear();
            element.sendKeys(number);
        },

        fillIntoFindersOwnershipFieldNumberI: function (i) {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='ownership in cp.finder_ownerships']:nth-child(" + i + ") input[data-ng-model='ownership.finder_own']"));
            element.clear();
            element.sendKeys(percent);
        },

        fillIntoWmcsOwnershipFieldNumberI: function (i) {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='ownership in cp.finder_ownerships']:nth-child(" + i + ") input[data-ng-model='ownership.wcm_own']"));
            element.clear();
            element.sendKeys(percent);
        },

        fillIntoCreatorFoundSubmissionField: function () {
            pages.finder_deal.elems.creatorFoundSubmissionInputField.clear();
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

        fillIntoSubmissionDateField: function () {
            var date = pages.base.randomDate(new Date(2015, 0, 1), new Date());
            pages.finder_deal.elems.submissionDateField.clear();
            pages.finder_deal.elems.submissionDateField.sendKeys("2015-04-15");
        },

        selectTheRandomWcmDecisionDropDown: function () {
            pages.finder_deal.elems.wcmDecisionField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.wcmDecisionDropDownData));
            browser.driver.findElements(By.css("div[data-ng-model='submission.wcm_decision'] ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoFoundDealInputField: function () {
            pages.finder_deal.elems.foundDealInputField.clear();
            pages.finder_deal.elems.foundDealInputField.sendKeys("123");
        },

        selectTheRandomValueFromFoundDealDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.finder_deal.elems.foundDealDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoFindersRecoupmentResponsabilityOverride: function () {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            pages.finder_deal.elems.findersRecoupmentResponsabilityOverride.clear();
            pages.finder_deal.elems.findersRecoupmentResponsabilityOverride.sendKeys(percent);
        },

        fillIntoCreatorFoundSubmissionFieldNumberI: function (i) {
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") div[data-ng-model='submission.creatorSet'] input[ng-model='$term']"));
            element.clear();
            element.sendKeys("test");
        },

        fillIntoSubmissionDateFieldNumberI: function (i) {
            var date = pages.base.randomDate(new Date(2015, 0, 1), new Date());
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") div[data-ng-model='submission.submission_date'] input[data-ng-model='date']"));
            element.clear();
            element.sendKeys(date);
        },

        fillIntoFoundDealInputFieldNumberI: function (i) {
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") div[data-ng-model='submission.found_deal'] input[ng-model='$term']"));
            element.clear();
            element.sendKeys("123");
        },

        fillIntoFindersRecoupmentResponsabilityOverrideNumberI: function (i) {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            var element = browser.driver.findElement(By.css("div[data-ng-repeat='submission in cp.finder_submissions']:nth-child(" + i + ") input[data-ng-model='submission.override']"));
            element.clear();
            element.sendKeys(percent);
        },

        clickOnTheSaveTermsByContractPeriodFinderDeal: function () {
            pages.finder_deal.elems.saveTermsByContractPeriodFinderDeal.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finder_deal.elems.maximumFoundAgreementsWithoutPreApproval));
        },

        clickOnTheCancelTermsByContractPeriodTermsFinderDeal: function () {
            pages.finder_deal.elems.cancelTermsByContractPeriodFinderDeal.click();
        },

        confirmCancelChangesModalDialog: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finder_deal.elems.yesCancelChangesModalDialog));
            pages.finder_deal.elems.yesCancelChangesModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finder_deal.elems.yesCancelChangesModalDialog));
        },

        cancelChangesModalDialogFinderDeal: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finder_deal.elems.noCancelChangesModalDialog));
            pages.finder_deal.elems.noCancelChangesModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finder_deal.elems.noCancelChangesModalDialog));
        },

        validateTheTooltipsForTermsByContractPeriodI: function (i, type) {
            browser.driver.findElement(By.css("ul.nav.nav-tabs li.ng-scope:nth-child(" + i + ") i:nth-child(" + (i + 1) + ")")).getAttribute("data-tooltip").
                then(function (promise) {
                    console.log("The tooltip for terms by contract period type number i is : " + promise);
                    expect(promise).toEqual(type);
                });
        }


    });
}
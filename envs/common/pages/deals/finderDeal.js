'use strict';

var pph = require('../../../../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.finderDeal === undefined) {
    pages.finderDeal = new ftf.pageObject({
        locators: {
            finderDealTitle: {css: "div[data-ng-form='finderDealsForm'] h3"},
            generalTermsFinderDealTitle: {css: "div[data-ng-form='finderDealGeneralForm'] a.accordion-toggle.ng-binding span"},
            termsByContractPeriodFinderDealTitle: {css: "div[data-ng-form='enclosingCpFinderDealForm'] a.accordion-toggle.ng-binding span"},
            generalTermsAreaFinderDeal: {css: ".in div[tg-modular-edit-id='finderDealsGeneral']"},
            generalTermsFinderDealEditIcon: {css: '[data-ng-form="finderDealGeneralForm"] [data-ng-click="tgModularViewMethods.switchToEditView()"]'},
            yesPriorAwarenessNotification: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.mustNotify']:nth-child(1)"},
            noPriorAwarenessNotification: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.mustNotify']:nth-child(2)"},
            notifyWithinThisNumberOfDays: {css: '[data-ng-form="finderDealGeneralForm"] .EDITOR.active input[name="priorAwareDays"]'},
            submissionDecisionWithinNumberOfDays: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active input[name='decisionDays']"},
            acceptAssumedResponse: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.assumedResponse']:nth-child(1)"},
            declineAssumedResponse: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.assumedResponse']:nth-child(2)"},
            noneAssumedResponse: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.assumedResponse']:nth-child(3)"},
            wcmWhoWillDraftDeals: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.draftsAgreements']:nth-child(1)"},
            finderWhoWillDraftDeals: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.draftsAgreements']:nth-child(2)"},
            wcmWhoHasControlToExerciseFutureOptions: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.option']:nth-child(1)"},
            finderWhoHasControlToExerciseFutureOptions: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.option']:nth-child(2)"},
            wcmWhoIsResponsibleForAdvances: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.respForAdvances']:nth-child(1)"},
            finderWhoIsResponsibleForAdvances: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.respForAdvances']:nth-child(2)"},
            finderRightToPursue: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.tg-dropdown-button"},
            finderRightToPursueDropDown: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active ul.dropdown-menu li.ng-scope"},
            yesWcmRightToPursue: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.wcmRightToPursue']:nth-child(1)"},
            noWcmRightToPursue: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[ng-model='tgModularEditModel.wcmRightToPursue']:nth-child(2)"},
            saveGeneralTermsFinderDeal: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[data-ng-click='tgModularViewMethods.save()']"},
            cancelGeneralTermsFinderDeal: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active button[data-ng-click='tgModularViewMethods.cancel()']"},
            //terms by contract period locators
            foundDealTermsTitle: {css: ".cp-terms div.accordion-group.ng-isolate-scope:nth-child(1)"},
            ownershiptTermsTitle: {css: ".cp-terms div.accordion-group.ng-isolate-scope:nth-child(2)"},
            foundSubmissionsTitle: {css: ".cp-terms div.accordion-group.ng-isolate-scope:nth-child(3)"},
            termsByContractPeriodArea: {css: "[data-ng-form='enclosingCpFinderDealForm'] .VIEW .modular-container"},
            termsByContractPeriodEditIcon: {css: "[data-ng-form='enclosingCpFinderDealForm'] .VIEW button[data-ng-click='tgModularViewMethods.switchToEditView()']"},
            leftArrowHeaderTermsByContractPeriod: {css: "[data-ng-form='enclosingCpFinderDealForm'] .VIEW div.form-horizontal.relative a.move-left.carousel-arrow"},
            rightArrowHeaderTermsByContractPeriod: {css: "[data-ng-form='enclosingCpFinderDealForm'] .VIEW div.form-horizontal.relative a.move-right.carousel-arrow"},
            //terms by contract period - found deal terms locators
            maximumFoundAgreementsWithoutPreApproval: {css: "input[ng-model='cp.foundDealTerms.agreementMaximumWithoutApproval']"},
            maximumFoundAgreementsWithPreApproval: {css: "input[ng-model='cp.foundDealTerms.agreementMaximumWithApproval']"},
            findersRecoupmentResponsability: {css: "input[ng-model='cp.foundDealTerms.finderRecoupment']"},
            nonSignedArtistMaximumAdvancesPayable: {css: "input[data-ng-model='cp.foundDealTerms.maxAdvanceNonSigned']"},
            signedArtistMaximumAdvancesPayable: {css: "input[ng-model='cp.foundDealTerms.maxAdvanceSigned']"},
            aggregateMaximumAdvancesPayable: {css: "input[ng-model='cp.foundDealTerms.aggregateMaxAdvance']"},
            //ownership terms locators
            aggregateMaximumOnAdvances: {css: "input[ng-model='ownership.advanceMaximum']"},
            findersOwnership: {css: "input[ng-model='ownership.finderOwn']"},
            wcmOwnership: {css: "input[ng-model='ownership.wcmOwn']"},
            //found submission locators
            creatorFoundSubmissionInputField: {css: "div[ng-form='cpSubmissionsForm'] div[ng-model='tgPersonTypeaheadModel'] input[ng-model='$term']"},
            creatorFoundSubmissionDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            submissionDateField: {css: "div[ng-model='submission.submissionDate'] input[ng-model='date']"},
            wcmDecisionField: {css: "div[ng-repeat='submission in cp.finderDealSubmissions.$getItems()']:nth-child(1) div[ng-model='submission.wcmDecision'] button"},
            wcmDecisionDropDownData: {css: "div[ng-model='submission.wcmDecision'] ul.dropdown-menu li.ng-scope"},
            foundDealInputField: {css: "div[ng-model='submission.foundDeal'] input[ng-model='$term']"},
            foundDealDropDownData: {css: "ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"},
            findersRecoupmentResponsabilityOverride: {css: "input[ng-model='submission.override']"},
            cancelTermsByContractPeriodFinderDeal: {css: "[data-ng-form='enclosingCpFinderDealForm'] button[data-ng-click='tgModularViewMethods.cancel()']"},
            saveTermsByContractPeriodFinderDeal: {css: "[data-ng-form='enclosingCpFinderDealForm'] button[data-ng-click='tgModularViewMethods.save()']"},
            //tooltips general terms
            priorAwarenessTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(1) i"},
            notifyWithinThisNumberOfDaysTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(2) i"},
            submissionDecisionWithinNumberOfDaysTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(3) i"},
            assumedResponseTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(4) i"},
            whoWillDraftDealsTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(5) i"},
            whoHasControlToExerciseFutureOptionsTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(6) i"},
            whoIsResponsibleForAdvancesTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(7) i"},
            findersRightToPursueTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(8) i"},
            wcmRightToPursueTooltip: {css: "[data-ng-form='finderDealGeneralForm'] .EDITOR.active div.control-group.clearfix:nth-child(9) i"},
            cancelChangesModalDialog: {css: "div.modal-dialog.ng-scope"},
            yesCancelChangesModalDialog: {css: "div.modal-footer button[data-ng-click='ok()']"},
            noCancelChangesModalDialog: {css: "div.modal-footer button[data-ng-click='cancel()']"},
            //finder deal view elements general terms
            priorAwarenessNotificationValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(1) span.view-info.pull-left strong"},
            notifyWithinThisNumberOfDaysValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(2) span.view-info.pull-left strong"},
            submissionDecisionWithinNumberOfDaysValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(3) span.view-info.pull-left strong"},
            assumedResponseValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(4) span.view-info.pull-left strong"},
            whoWillDraftDealsValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(5) span.view-info.pull-left strong"},
            whoHasControlToExerciseFutureOptionValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(6) span.view-info.pull-left strong"},
            whoIsResponsibleForAdvancesValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(7) span.view-info.pull-left strong"},
            finderRightToPursueValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(8) span.view-info.pull-left strong"},
            wcmRightToPursueValue: {css: "[data-ng-form='finderDealGeneralForm'] div.view-row.clearfix:nth-child(9) span.view-info.pull-left strong"},
            //tooltips found deal terms - terms by contract period
            maximumFoundAgreementsWithoutPreApprovalTooltip: {css: "div[ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(1) i"},
            maximumFoundAgreementsWithPreApprovalTooltip: {css: "div[ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(2) i"},
            findersRecoupmentResponsabilityTooltip: {css: "div[ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(3) i"},
            nonSignedArtistMaximumAdvancesPayableTooltip: {css: "div[ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(4) i"},
            signedArtistMaximumAdvancesPayableTooltip: {css: "div[ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(5) i"},
            aggregateMaximumAdvancesPayableTooltip: {css: "div[ng-form='cpFoundDealTermsForm'] div.control-group.clearfix:nth-child(6) i"},
            //tooltips ownership terms - terms by contract period
            aggregateMaximumOnAdvancesTooltip: {css: "div[ng-form='cpOwnershipForm'] div.pull-left.agr-max i"},
            findersOwnershipTooltip: {css: "div[ng-form='cpOwnershipForm'] div.pull-left.finder-own:nth-child(2) i"},
            wcmOwnershipTooltip: {css: "div[ng-form='cpOwnershipForm'] div.pull-left.finder-own:nth-child(3) i"},
            //tooltips found submission - terms by contract period
            creatorsFoundSubmissionTooltip: {css: "div[ng-form='cpSubmissionsForm'] div.pull-left.creators i"},
            submissionDateTooltip: {css: "div[ng-form='cpSubmissionsForm'] div.pull-left.finder-own i"},
            wcmDecisionTooltip: {css: "div[ng-form='cpSubmissionsForm'] div.pull-left.wcm-decision i"},
            foundDealTooltip: {css: "div[ng-form='cpSubmissionsForm'] div.pull-left.found-deal i"},
            findersRecoupmentResponsabilityOverrideTooltip: {css: "div[ng-form='cpSubmissionsForm'] div.pull-left.recoup i"},
            //finder deal view elements terms by contract period - found deal terms
            maximumFoundAgreementsWithoutPreApprovalValueEdit: {css: "[ng-form='cpFoundDealTermsForm']"},
            maximumFoundAgreementsWithoutPreApprovalValue: {css: "span[ng-show='cp.foundDealTerms.agreementMaximumWithoutApproval'] strong"},
            maximumFoundAgreementsWithPreApprovalValue: {css: "span[ng-show='cp.foundDealTerms.agreementMaximumWithApproval'] strong"},
            findersRecoupmentResponsabilityValue: {css: "span[ng-show='cp.foundDealTerms.finderRecoupment'] strong"},
            nonSignedArtistMaximumAdvancesPayableValue: {css: "span[ng-show='cp.foundDealTerms.maxAdvanceNonSigned'] strong"},
            signedArtistMaximumAdvancesPayableValue: {css: "span[ng-show='cp.foundDealTerms.maxAdvanceSigned'] strong"},
            aggregateMaximumAdvancesPayableValue: {css: "span[ng-show='cp.foundDealTerms.aggregateMaxAdvance'] strong"},
            //finder deal view elements terms by contract period - ownership terms
            aggregateMaximumOnAdvancesValueEdit: {css: "[ng-form='cpOwnershipForm']"},
            aggregateMaximumOnAdvancesValue: {css: "div[ng-repeat='ownership in cp.finderDealOwnerships.$getItems()'] div.pull-left.agr-max strong"},
            findersOwnershipValue: {css: "div[ng-repeat='ownership in cp.finderDealOwnerships.$getItems()'] div.pull-left.finder-own:nth-child(2) strong"},
            wcmOwnershipValue: {css: "div[ng-repeat='ownership in cp.finderDealOwnerships.$getItems()'] div.pull-left.finder-own:nth-child(3) strong"},
            //finder deal view elements terms by contract period - found submissions
            creatorFoundSubmissionValueEdit: {css: "[ng-form='finderDealSubmissions']"},
            creatorFoundSubmissionValue: {css: "div[ng-repeat='submission in cp.finderDealSubmissions.$getItems()'] div.pull-left.creators"},
            submissionDateValue: {css: "div[ng-repeat='submission in cp.finderDealSubmissions.$getItems()'] div.pull-left.finder-own.ng-binding.ng-scope"},
            wcmDecisionValue: {css: "div[ng-repeat='submission in cp.finderDealSubmissions.$getItems()'] div.pull-left.wcm-decision.ng-binding.ng-scope"},
            foundDealValue: {css: "div[ng-repeat='submission in cp.finderDealSubmissions.$getItems()'] div.pull-left.found-deal.ng-scope"},
            findersRecoupmentResponsabilityOverrideValue: {css: "div[ng-repeat='submission in cp.finderDealSubmissions.$getItems()'] div.pull-left.recoup.ng-binding.ng-scope"}
        },

        validateTheGeneralTermsTitleIsPresent: function () {
            pages.finderDeal.elems.generalTermsFinderDealTitle.getText().
                then(function (promise) {
                    console.log("General terms finder deal text is : " + promise);
                    expect(promise).toEqual("General Terms");
                });
        },

        validateTheTermsByContractPeriodFinderDealTitle: function () {
            pages.finderDeal.elems.termsByContractPeriodFinderDealTitle.getText().
                then(function (promise) {
                    console.log("Terms by Contract period text is : " + promise);
                    expect(promise).toContain("Terms by Contract Period");
                });
        },

        validateTheNumberOfTermsByContractPeriodFinderDealTitle: function (number) {
            pages.finderDeal.elems.termsByContractPeriodFinderDealTitle.getText().
                then(function (promise) {
                    console.log("Terms by Contract period count is : " + promise);
                    expect(promise).toContain(number);
                });
        },

        clickOnTheGeneralTermsFinderDeal: function () {
            pages.finderDeal.elems.generalTermsFinderDealTitle.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.generalTermsAreaFinderDeal));
        },

        editTheGeneralTermsFinderDeal: function () {
            var el=pages.finderDeal.elems.generalTermsAreaFinderDeal;
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finderDeal.elems.generalTermsAreaFinderDeal));
            pages.finderDeal.elems.generalTermsAreaFinderDeal.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finderDeal.elems.generalTermsFinderDealEditIcon));
            pages.finderDeal.elems.generalTermsFinderDealEditIcon.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.notifyWithinThisNumberOfDays));
        },

        clickOnTheYesPriorAwarenessNotification: function () {
            pages.finderDeal.elems.yesPriorAwarenessNotification.click();
        },

        clickOnTheNoPriorAwarenessNotification: function () {
            pages.finderDeal.elems.noPriorAwarenessNotification.click();
        },

        fillIntoNotifyWithinTheNumberOfDays: function (number) {
            pages.finderDeal.elems.notifyWithinThisNumberOfDays.clear();
            pages.finderDeal.elems.notifyWithinThisNumberOfDays.sendKeys(number);
        },

        fillIntoSubmissionDecisionWithinNumberOfDays: function (number) {
            pages.finderDeal.elems.submissionDecisionWithinNumberOfDays.clear();
            pages.finderDeal.elems.submissionDecisionWithinNumberOfDays.sendKeys(number);
        },

        clickOnTheAcceptAssumedResponse: function () {
            pages.finderDeal.elems.acceptAssumedResponse.click();
        },

        clickOnTheDeclineAssumedResponse: function () {
            pages.finderDeal.elems.declineAssumedResponse.click();
        },

        clickOnTheNoneAssumedResponse: function () {
            pages.finderDeal.elems.noneAssumedResponse.click();
        },

        clickOnTheWcmWhoWillDraftDeals: function () {
            pages.finderDeal.elems.wcmWhoWillDraftDeals.click();
        },

        clickOnTheFinderWhoWillDraftDeals: function () {
            pages.finderDeal.elems.finderWhoWillDraftDeals.click();
        },

        clickOnTheWcmWhoHasControlToExerciseFutureOptions: function () {
            pages.finderDeal.elems.wcmWhoHasControlToExerciseFutureOptions.click();
        },

        clickOnTheFinderWhoHasControlToExerciseFutureOptions: function () {
            pages.finderDeal.elems.finderWhoHasControlToExerciseFutureOptions.click();
        },

        clickOnTheWcmWhoIsResponsibleForAdvances: function () {
            pages.finderDeal.elems.wcmWhoIsResponsibleForAdvances.click();
        },

        clickOnTheFinderWhoIsResponsibleForAdvances: function () {
            pages.finderDeal.elems.finderWhoIsResponsibleForAdvances.click();
        },

        selectTheDesiredValueFinderRightToPursueDropDown: function (value) {
            var desiredOption;
            pages.finderDeal.elems.finderRightToPursue.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.finderRightToPursueDropDown));
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
            pages.finderDeal.elems.finderRightToPursue.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.finderRightToPursueDropDown));
            browser.driver.findElements(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] ul.dropdown-menu li.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        clickOnTheYesWcmRightToPursue: function () {
            pages.finderDeal.elems.yesWcmRightToPursue.click();
        },

        clickOnTheNoWcmRightToPursue: function () {
            pages.finderDeal.elems.noWcmRightToPursue.click();
        },

        clickOnTheSaveGeneralTermsFinderDeal: function () {
            pages.finderDeal.elems.saveGeneralTermsFinderDeal.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.css('[data-ng-form="finderDealGeneralForm"] .EDITOR .VIEW .modular-container'))));
        },

        clickOnTheCancelGeneralTermsFinderDeal: function () {
            pages.finderDeal.elems.cancelGeneralTermsFinderDeal.click();
        },

        clickOnTheTermsByContractPeriodFinderDeal: function () {
            pages.finderDeal.elems.termsByContractPeriodFinderDealTitle.click();
        },

        editTheTermsByContractPeriodFinderDeal: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finderDeal.elems.termsByContractPeriodArea));
            pages.finderDeal.elems.termsByContractPeriodArea.click();
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finderDeal.elems.termsByContractPeriodEditIcon));
            pages.finderDeal.elems.termsByContractPeriodEditIcon.click();
        },

        clickOnContractPeriodNumberIDetailsTermsByContractPeriod: function (i) {
            browser.driver.findElement(By.css(".cp-terms UL li:nth-child("+ i + ")")).click();

        },

        clickOnContractPeriodNumberIDetailsTermsByContractPeriodViewMode: function (i) {
            browser.driver.findElement(By.css(".cp-terms UL li:nth-child("+ i + ")")).click();
        },


        fillIntoMaximumFoundAgreementsWithoutPreApprovalContractPeriodI: function (i) {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApproval.clear();
            pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApproval.sendKeys(number);
        },

        fillIntoMaximumFoundAgreementWithPreApprovalContractPeriodI: function (i) {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finderDeal.elems.maximumFoundAgreementsWithPreApproval.clear();
            pages.finderDeal.elems.maximumFoundAgreementsWithPreApproval.sendKeys(number);
        },

        fillIntoFindersRecoupmentResponsability: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finderDeal.elems.findersRecoupmentResponsability.clear();
            pages.finderDeal.elems.findersRecoupmentResponsability.sendKeys(percent);
        },

        fillIntoNonSignedArtistMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finderDeal.elems.nonSignedArtistMaximumAdvancesPayable.clear();
            pages.finderDeal.elems.nonSignedArtistMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoSignedArtistMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finderDeal.elems.signedArtistMaximumAdvancesPayable.clear();
            pages.finderDeal.elems.signedArtistMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoAggregateMaximumAdvancesPayable: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finderDeal.elems.aggregateMaximumAdvancesPayable.clear();
            pages.finderDeal.elems.aggregateMaximumAdvancesPayable.sendKeys(number);
        },

        fillIntoAggregateMaximumOnAdvancesField: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            pages.finderDeal.elems.aggregateMaximumOnAdvances.clear();
            pages.finderDeal.elems.aggregateMaximumOnAdvances.sendKeys(number);
        },

        fillIntoFindersOwnershipField: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finderDeal.elems.findersOwnership.clear();
            pages.finderDeal.elems.findersOwnership.sendKeys(percent);
        },

        fillIntoWmcsOwnershipField: function () {
            var percent = (Math.random() * 100 + 1).toFixed(2);
            pages.finderDeal.elems.wcmOwnership.clear();
            pages.finderDeal.elems.wcmOwnership.sendKeys(percent);
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
            pages.finderDeal.elems.creatorFoundSubmissionInputField.clear();
            pages.finderDeal.elems.creatorFoundSubmissionInputField.sendKeys("test");
        },

        selectRandomValueFromCreatorFoundSubmissionDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.creatorFoundSubmissionDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoSubmissionDateField: function () {
            var date = pages.base.randomDate(new Date(2015, 0, 1), new Date());
            pages.finderDeal.elems.submissionDateField.clear();
            pages.finderDeal.elems.submissionDateField.sendKeys("2015-04-15");
        },

        selectTheRandomWcmDecisionDropDown: function () {
            pages.finderDeal.elems.wcmDecisionField.click();
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.wcmDecisionDropDownData));
            browser.driver.findElements(By.css("ul.dropdown-menu li.tg-dropdown-menu-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoFoundDealInputField: function () {
            pages.finderDeal.elems.foundDealInputField.clear();
            pages.finderDeal.elems.foundDealInputField.sendKeys("123");
        },

        selectTheRandomValueFromFoundDealDropDown: function () {
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.foundDealDropDownData));
            browser.driver.findElements(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))
                .then(function (options) {
                    var randomNumber = Math.floor((Math.random() * options.length));
                    options[randomNumber].click();
                })
        },

        fillIntoFindersRecoupmentResponsabilityOverride: function () {
            var percent = (Math.random() * 50 + 1).toFixed(2);
            pages.finderDeal.elems.findersRecoupmentResponsabilityOverride.clear();
            pages.finderDeal.elems.findersRecoupmentResponsabilityOverride.sendKeys(percent);
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
            pages.finderDeal.elems.saveTermsByContractPeriodFinderDeal.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finderDeal.elems.termsByContractPeriodArea));
        },

        clickOnTheCancelTermsByContractPeriodTermsFinderDeal: function () {
            pages.finderDeal.elems.cancelTermsByContractPeriodFinderDeal.click();
            pages.finderDeal.waitForAjax();
        },

        confirmCancelChangesModalDialog: function () {
            pages.base.waitForModal();
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.yesCancelChangesModalDialog));
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finderDeal.elems.yesCancelChangesModalDialog));
            pages.finderDeal.elems.yesCancelChangesModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finderDeal.elems.yesCancelChangesModalDialog));
        },

        cancelChangesModalDialogFinderDeal: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.finderDeal.elems.noCancelChangesModalDialog));
            pages.finderDeal.elems.noCancelChangesModalDialog.click();
            browser.wait(ExpectedConditions.invisibilityOf(pages.finderDeal.elems.noCancelChangesModalDialog));
        },

        validateTheTooltipsForTermsByContractPeriodI: function (i, type) {
            browser.driver.findElement(By.css("ul.nav.nav-tabs li.ng-scope:nth-child(" + i + ") i:nth-child(" + (i + 1) + ")")).getAttribute("tooltip").
                then(function (promise) {
                    console.log("The tooltip for terms by contract period type number i is : " + promise);
                    expect(promise).toEqual(type);
                });
        },

        clickOnTheFoundDealTermsTitle: function (mode) {
            pages.finderDeal.elems.foundDealTermsTitle.click();
            if (mode == "editmode") {
                browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApprovalValueEdit));
            }
            else {
                browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApprovalValue));
            }
        },

        clickOnTheOwnershipTermsTitle: function (mode) {
            pages.finderDeal.elems.ownershiptTermsTitle.click();
            if (mode == "editmode") {
            browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.aggregateMaximumOnAdvancesValueEdit));
            }
            else {
                browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApprovalValue));
            }
        },

        clickOnTheFoundSubmissionsTitle: function (mode) {
            pages.finderDeal.elems.foundSubmissionsTitle.click();
            if (mode == "editmode") {
                browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.creatorFoundSubmissionValueEdit));
            }
            else {
                browser.wait(ExpectedConditions.visibilityOf(pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApprovalValue));
            }
        }

    });
}

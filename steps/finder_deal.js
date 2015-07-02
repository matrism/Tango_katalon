"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(steps_path + "finder_deal");
require(pages_path + "finder_deal");

if (steps.finder_deal === undefined) {
    steps.finder_deal = {

        validateGeneralTermsTitleIsPresent: function () {
            it("Validate the general terms title is present ", function () {
                pages.finder_deal.validateTheGeneralTermsTitleIsPresent();
            });
        },

        validateTermsByContractPeriodFinderDealTitle: function () {
            it("Validate the terms by contract period finder deal title ", function () {
                pages.finder_deal.validateTheTermsByContractPeriodFinderDealTitle();
            });
        },

        validateNumberOfTermsByContractPeriodFinderDealTitle: function (number) {
            it("Validate the number of terms by contract period finder deal title", function () {
                pages.finder_deal.validateTheNumberOfTermsByContractPeriodFinderDealTitle(number);
            });
        },

        clickOnGeneralTermsFinderDeal: function () {
            it("Click on the general terms finder deal ", function () {
                pages.finder_deal.clickOnTheGeneralTermsFinderDeal();
                pages.finder_deal.waitForAjax();
            });
        },

        editGeneralTermsFinderDeal: function () {
            it("Edit the general terms finder deal ", function () {
                pages.finder_deal.editTheGeneralTermsFinderDeal();
            });
        },

        clickOnYesPriorAwarenessNotification: function () {
            it("Click on the yes prior awarness notification ", function () {
                pages.finder_deal.clickOnTheYesPriorAwarenessNotification();
            });
        },

        clickOnNoPriorAwarenessNotification: function () {
            it("Click on the no prior awareness notification ", function () {
                pages.finder_deal.clickOnTheNoPriorAwarenessNotification();
            });
        },

        clickOnTermsByContractPeriodFinderDeal: function () {
            it("Click on the terms by Contract period finder deal ", function () {
                pages.finder_deal.clickOnTheTermsByContractPeriodFinderDeal();
            });
        },

        fillNotifyWithinTheNumberOfDays: function (number) {
            it("Fill into notify within the number of days ", function () {
                pages.finder_deal.fillIntoNotifyWithinTheNumberOfDays(number);
            });
        },

        fillSubmissionDecisionWithinNumberOfDays: function (number) {
            it("Fill into submission decision within number of days ", function () {
                pages.finder_deal.fillIntoSubmissionDecisionWithinNumberOfDays(number);
            });
        },

        clickOnAcceptAssumedResponse: function () {
            it("Click on the accept assumed response ", function () {
                pages.finder_deal.clickOnTheAcceptAssumedResponse();
            });
        },

        clickOnDeclineAssumedResponse: function () {
            it("Click on the decline assumed response ", function () {
                pages.finder_deal.clickOnTheDeclineAssumedResponse();
            });
        },

        clickOnNoneAssumedResponse: function () {
            it("Click on the none assumed response ", function () {
                pages.finder_deal.clickOnTheNoneAssumedResponse();
            });
        },

        clickOnWcmWhoWillDraftDeals: function () {
            it("Click on the wcm who will draft deals ", function () {
                pages.finder_deal.clickOnTheWcmWhoWillDraftDeals();
            })
        },

        clickOnFinderWhoWillDraftDeals: function () {
            it("Click on the finder who will draft deals ", function () {
                pages.finder_deal.clickOnTheFinderWhoWillDraftDeals();
            });
        },

        clickOnWcmWhoHasControlToExerciseFutureOptions: function () {
            it("Click on the wcm who has control to exercise future options ", function () {
                pages.finder_deal.clickOnTheWcmWhoHasControlToExerciseFutureOptions();
            });
        },

        clickOnFinderWhoHasControlToExerciseFutureOptions: function () {
            it("Click on the finder who has control to exercise future options ", function () {
                pages.finder_deal.clickOnTheFinderWhoHasControlToExerciseFutureOptions();
            })
        },

        clickOnWcmWhoIsResponsibleForAdvances: function () {
            it("Click on the wcm who is responsible for advances ", function () {
                pages.finder_deal.clickOnTheWcmWhoIsResponsibleForAdvances();
            });
        },

        clickOnFinderWhoIsResponsibleForAdvances: function () {
            it("Click on the finder who is responsible for advances ", function () {
                pages.finder_deal.clickOnTheFinderWhoIsResponsibleForAdvances();
            });
        },

        selectDesiredValueFinderRightToPursueDropDown: function (value) {
            it("Select the desired value finder right to pursue drop down ", function () {
                pages.finder_deal.selectTheDesiredValueFinderRightToPursueDropDown();
            });
        },

        selectTheRandomValueFinderRightToPursueDropDown: function () {
            it("Select the random value finder right to pursue drop down ", function () {
                pages.finder_deal.selectTheRandomValueFinderRightToPursueDropDown();
            });
        },

        clickOnYesFinderRightToPursue: function () {
            it("Click on the yes finder right to pursue ", function () {
                pages.finder_deal.clickOnTheYesFinderRightToPursue();
            });
        },

        clickOnNoFinderRightToPursue: function () {
            it("Click on the no finder right to pursue ", function () {
                pages.finder_deal.clickOnTheNoWcmRightToPursue();
            });
        },

        clickOnYesWcmRightToPursue: function () {
            it("Click on the yes wcm right to pursue ", function () {
                pages.finder_deal.clickOnTheYesWcmRightToPursue();
            });
        },

        clickOnNoWcmRightToPursue: function () {
            it("Click on the no wcm right to pursue ", function () {
                pages.finder_deal.clickOnTheNoWcmRightToPursue();
            });
        },

        clickOnSaveGeneralTermsFinderDeal: function () {
            it("Click on the save general terms finder deal ", function () {
                pages.finder_deal.clickOnTheSaveGeneralTermsFinderDeal();
                pages.finder_deal.waitForAjax();
            });
        },

        clickOnCancelGeneralTermsFinderDeal: function () {
            it("Click on the cancel general terms finder deal ", function () {
                pages.finder_deal.clickOnTheCancelGeneralTermsFinderDeal();
            });
        },

        editTermsByContractPeriodFinderDeal: function () {
            it("Edit the terms by contract period finder deal area ", function () {
                pages.finder_deal.editTheTermsByContractPeriodFinderDeal();
            });
        },

        clickContractPeriodNumberIDetailsTermsByContractPeriod: function (i) {
            it("Click on the contract period number i finder deal details terms by contract period ", function () {
                pages.finder_deal.clickOnContractPeriodNumberIDetailsTermsByContractPeriod(i);
            });
        },

        fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI: function (number) {
            it("Fill into maximum found agreements", function () {
                pages.finder_deal.fillIntoMaximumFoundAgreementsWithoutPreApprovalContractPeriodI(number);
            });
        },

        fillMaximumFoundAgreementWithPreApprovalContractPeriodI: function (number) {
            it("Fill into maximum found agreement with pre approval contract period i ", function () {
                pages.finder_deal.fillIntoMaximumFoundAgreementWithPreApprovalContractPeriodI(number);
            });
        },

        fillFindersRecoupmentResponsability: function (percent) {
            it("Fill into finders recoupment responsability ", function () {
                pages.finder_deal.fillIntoFindersRecoupmentResponsability(percent);
            });
        },

        fillNonSignedArtistMaximumAdvancesPayable: function (number) {
            it("Fill into non signed artist maximum advances payable ", function () {
                pages.finder_deal.fillIntoNonSignedArtistMaximumAdvancesPayable(number);
            });
        },

        fillSignedArtistMaximumAdvancesPayable: function (number) {
            it("Fill into signed artist maximum advances payable ", function () {
                pages.finder_deal.fillIntoSignedArtistMaximumAdvancesPayable(number);
            });
        },

        fillAggregateMaximumAdvancesPayable: function (number) {
            it("Fill into aggregate maximum advances payable ", function () {
                pages.finder_deal.fillIntoAggregateMaximumAdvancesPayable(number);
            });
        },

        fillAggregateMaximumOnAdvancesField: function (number) {
            it("Fill into aggregate maximum on advances field ", function () {
                pages.finder_deal.fillIntoAggregateMaximumOnAdvancesField(number);
            });
        },

        fillFindersOwnershipField: function (percent) {
            it("Fill into finders ownership field ", function () {
                pages.finder_deal.fillIntoFindersOwnershipField(percent);
            });
        },

        fillWmcsOwnershipField: function (percent) {
            it("Fill into wcms ownerhip field ", function () {
                pages.finder_deal.fillIntoWmcsOwnershipField(percent);
            });
        },

        fillAggregateMaximumOnAdvancesFieldNumberI: function (i) {
            it("Fill into aggregate maximum on advances field number i ", function () {
                pages.finder_deal.fillIntoAggregateMaximumOnAdvancesFieldNumberI(i);
            });
        },

        fillFindersOwnershipFieldNumberI: function (i) {
            it("Fill into finders ownership field number i ", function () {
                pages.finder_deal.fillIntoFindersOwnershipFieldNumberI(i);
            });
        },

        fillWmcsOwnershipFieldNumberI: function (i) {
            it("Fill into wcm ownership field number i ", function () {
                pages.finder_deal.fillIntoWmcsOwnershipFieldNumberI(i);
            });
        },

        selectRandomCreatorFoundSubmissionField: function () {
            it("Fill into creator found submission field ", function () {
                pages.finder_deal.fillIntoCreatorFoundSubmissionField();
                pages.finder_deal.selectRandomValueFromCreatorFoundSubmissionDropDown();
            });
        },

        fillSubmissionDateField: function () {
            it("Fill into submission date field ", function () {
                pages.finder_deal.fillIntoSubmissionDateField();
            });
        },

        selectRandomWcmDecisionDropDown: function () {
            it("Select the random wcm decision drop down ", function () {
                pages.finder_deal.selectTheRandomWcmDecisionDropDown();
            });
        },

        selectRandomValueFromFoundDealDropDown: function () {
            it("Select random value from found deal drop down ", function () {
                pages.finder_deal.fillIntoFoundDealInputField();
                pages.finder_deal.selectTheRandomValueFromFoundDealDropDown();
            });
        },

        fillFindersRecoupmentResponsabilityOverride: function (percent) {
            it("Fill into finders recoupment responsability override ", function () {
                pages.finder_deal.fillIntoFindersRecoupmentResponsabilityOverride(percent);
            });
        },

        selectRandomValueFromCreatorFoundSubmissionDropDownFieldNumberI: function (i) {
            it("Select creator found submission field number i ", function () {
                pages.finder_deal.fillIntoCreatorFoundSubmissionFieldNumberI(i);
                pages.finder_deal.selectRandomValueFromCreatorFoundSubmissionDropDown();
            })
        },

        fillIntoSubmissionDateFieldNumberI: function (i) {
            it("Fill into submission date field number i ", function () {
                pages.finder_deal.fillIntoSubmissionDateFieldNumberI(i);
            });
        },

        fillIntoFoundDealInputFieldNumberI: function (i) {
            it("Fill into found deal input field number i ", function () {
                pages.finder_deal.fillIntoFoundDealInputFieldNumberI(i);
            });
        },

        fillFindersRecoupmentResponsabilityOverrideNumberI: function (i) {
            it("Fill into finders recoupment responsability override number i ", function () {
                pages.finder_deal.fillIntoFindersRecoupmentResponsabilityOverrideNumberI(i);
            });
        },

        clickOnSaveTermsByContractPeriodFinderDeal: function () {
            it("Click on save terms by contract period finder deal ", function () {
                pages.finder_deal.clickOnTheSaveTermsByContractPeriodFinderDeal();
            });
        },

        clickOnCancelTermsByContractPeriodTermsFinderDeal: function () {
            it("Cancel terms by contract period finder deal ", function () {
                pages.finder_deal.clickOnTheCancelTermsByContractPeriodTermsFinderDeal();
            });
        },

        validatePriorAwarenessNotificationTooltip: function () {
            it("Validate the prior awareness notification tooltip ", function () {
                pages.finder_deal.elems.priorAwarenessTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The prior awareness notification tooltip is : " + promise);
                        expect(promise).toContain("Indicates WCM's obligation to inform the Finder of prior");
                        expect(promise).toContain("awareness of the submitted Creator(s).");
                    });
            });
        },

        validateNotifyWithinThisNumberOfDaysTooltip: function () {
            it("Validate the notify within this number of days tooltip ", function () {
                pages.finder_deal.elems.notifyWithinThisNumberOfDaysTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The notify within this number of days tooltip is : " + promise);
                        expect(promise).toEqual("Indicates within how many days the Finder must be notified of WCM \"knowledge\" of the Creator(s).");
                    });
            });
        },

        validateSubmissionDecisionWithinNumberOfDaysTooltip: function () {
            it("Validate the submission decision within number of days tooltip ", function () {
                pages.finder_deal.elems.submissionDecisionWithinNumberOfDaysTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The submission decision within number of days tooltip is : " + promise);
                        expect(promise).toEqual("Indicates within how many days WCM must either Accept or Decline the Finder submission.");
                    });
            });
        },

        validateAssumedResponseTooltip: function () {
            it("Validate the assumed response tooltip ", function () {
                pages.finder_deal.elems.assumedResponseTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The assumed response tooltip is : " + promise);
                        expect(promise).toEqual("Indicates the default response to the Finder if WCM has not responded to a submission within the specified number of days.");
                    });
            });
        },

        validateWhoWillDraftDealsTooltip: function () {
            it("Validate who will draft deals tooltip ", function () {
                pages.finder_deal.elems.whoWillDraftDealsTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The who will draft deals tooltip is : " + promise);
                        expect(promise).toEqual("Defines which party (WCM or Finder) is responsible for drafting the agreements for the found deals.");
                    });
            });
        },

        validateWhoHasControlToExerciseFutureOptionsTooltip: function () {
            it("Validate who has control to exercise future options tooltip", function () {
                pages.finder_deal.elems.whoHasControlToExerciseFutureOptionsTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The who has control to exercise future options tooltip is : " + promise);
                        expect(promise).toEqual("Indicates whether WCM or Finder will have the control over exercising the Option.");
                    });
            });
        },

        validateWhoIsResponsibleForAdvancesTooltip: function () {
            it("Validate who is responsible for advances tooltip", function () {
                pages.finder_deal.elems.whoIsResponsibleForAdvancesTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The who is responsible for advances tooltip is : " + promise);
                        expect(promise).toEqual("Indicates whether WCM or Finder will be responsible for Advances to the Creator(s).");
                    });
            });
        },

        validateFindersRightToPursueTooltip: function () {
            it("Validate finders right to pursue tooltip", function () {
                pages.finder_deal.elems.findersRightToPursueTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The finders right to pursue tooltip is : " + promise);
                        expect(promise).toEqual("Indicates that if WCM declines a submission, then the Finder has a right to pursue any found deal.");
                    });
            });
        },

        validateWcmRightToPursueTooltip: function () {
            it("Validate wcms right to pursue tooltip", function () {
                pages.finder_deal.elems.wcmRightToPursueTooltip.getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The wcms right to pursue tooltip is : " + promise);
                        expect(promise).toEqual("Indicates WCM has a right to pursue any submission to which WCM, the Finder, and Creator(s) could not come to a three-party agreement.");
                    });
            });
        },

        checkErrorMessageNotifyWithinThisNumberOfDays: function () {
            it("Check the error message displayed for invalid notify within number of days value ", function () {
                browser.driver.findElement(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(2) i.fa.fa-exclamation-triangle.error-icon.consent-status.ng-scope")).getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The error message displayed for invalid notify within number of days value is : " + promise);
                        expect(promise).toEqual("0 is not a valid value.");
                    });
            });
        },

        checkErrorMessageSubmissionDecisionWithinNumberOfDays: function () {
            it("Check the error message displayed for invalid submission decision within number of days value ", function () {
                browser.driver.findElement(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(3) i.fa.fa-exclamation-triangle.error-icon.consent-status.ng-scope")).getAttribute("data-tooltip").
                    then(function (promise) {
                        console.log("The error message displayed  for invalid submission decision within number of days value is : " + promise);
                        expect(promise).toEqual("0 is not a valid value.");
                    });
            });
        },

        confirmCancelChangesGeneralTermsFinderDeal: function () {
            it("Confirm cancel changes finder deal ", function () {
                pages.finder_deal.clickOnTheCancelGeneralTermsFinderDeal();
                pages.finder_deal.confirmCancelChangesModalDialog();
            });
        },

        validatePriorAwarenessNotificationValue: function(value){
            it("Validate the prior awareness notification value ", function(){
               pages.finder_deal.elems.priorAwarenessNotificationValue.getText().
                   then(function (promise) {
                       console.log("The prior awareness notification value is : " + promise);
                       expect(promise).toEqual(value);
                   });
            });
        },

        validateNotifyWithinThisNumberOfDaysValue: function(value){
            it("Validate the notify within this number of days value ", function(){
                pages.finder_deal.elems.notifyWithinThisNumberOfDaysValue.getText().
                    then(function (promise) {
                        console.log("The notify within this number of days value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateSubmissionDecisionWithinNumberOfDaysValue: function(value){
            it("Validate the submission decision within number of days value ", function(){
                pages.finder_deal.elems.submissionDecisionWithinNumberOfDaysValue.getText().
                    then(function (promise) {
                        console.log("The submission decision within number of days value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateAssumedResponseValue: function(value){
            it("Validate the assumed response value ", function(){
                pages.finder_deal.elems.assumedResponseValue.getText().
                    then(function (promise) {
                        console.log("The assumed response value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateWhoWillDraftDealsValue: function(value){
            it("Validate the who will draft deals value ", function(){
                pages.finder_deal.elems.whoWillDraftDealsValue.getText().
                    then(function (promise) {
                        console.log("The who will draft deals value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateWhoHasControlToExerciseFutureOptionsValue: function(value){
            it("Validate the who has control to exercise future options value ", function(){
                pages.finder_deal.elems.whoHasControlToExerciseFutureOptionValue.getText().
                    then(function (promise) {
                        console.log("The awho has control to exercise future options value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateWhoIsResponsibleForAdvancesValue: function(value){
            it("Validate the who is responsible for advances value ", function(){
                pages.finder_deal.elems.whoIsResponsibleForAdvancesValue.getText().
                    then(function (promise) {
                        console.log("The  who is responsible for advances  value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateFindersRightToPursueValue: function(value){
            it("Validate the finder right to pursue value ", function(){
                pages.finder_deal.elems.finderRightToPursueValue.getText().
                    then(function (promise) {
                        console.log("The finder right to pursue value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },

        validateWcmRightToPursueValue: function(value){
            it("Validate the wcm right to pursue value ", function(){
                pages.finder_deal.elems.wcmRightToPursueValue.getText().
                    then(function (promise) {
                        console.log("The wcm right to pursue value is : " + promise);
                        expect(promise).toEqual(value);
                    });
            });
        },


        validateTooltipsForTermsByContractPeriodI: function(i, type){
            it("Validate the tooltips for terms by contract period number i of type ", function(){
               pages.finder_deal.validateTheTooltipsForTermsByContractPeriodI(i, type);
            });
        }


    };
}

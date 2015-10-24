'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.finderDeal = exports;

exports.validateGeneralTermsTitleIsPresent = function () {
    it("Validate the general terms title is present ", function () {
        pages.finderDeal.validateTheGeneralTermsTitleIsPresent();
    });
};

exports.validateTermsByContractPeriodFinderDealTitle = function () {
    it("Validate the terms by contract period finder deal title ", function () {
        pages.finderDeal.validateTheTermsByContractPeriodFinderDealTitle();
    });
};

exports.validateNumberOfTermsByContractPeriodFinderDealTitle = function (number) {
    it("Validate the number of terms by contract period finder deal title", function () {
        pages.finderDeal.validateTheNumberOfTermsByContractPeriodFinderDealTitle(number);
    });
};

exports.clickOnGeneralTermsFinderDeal = function () {
    it("Click on the general terms finder deal ", function () {
        pages.finderDeal.clickOnTheGeneralTermsFinderDeal();
        pages.finderDeal.waitForAjax();
    });
};

exports.editGeneralTermsFinderDeal = function () {
    it("Edit the general terms finder deal ", function () {
        pages.finderDeal.editTheGeneralTermsFinderDeal();
    });
};

exports.clickOnYesPriorAwarenessNotification = function () {
    it("Click on the yes prior awarness notification ", function () {
        pages.finderDeal.clickOnTheYesPriorAwarenessNotification();
    });
};

exports.clickOnNoPriorAwarenessNotification = function () {
    it("Click on the no prior awareness notification ", function () {
        pages.finderDeal.clickOnTheNoPriorAwarenessNotification();
    });
};

exports.clickOnTermsByContractPeriodFinderDeal = function () {
    it("Click on the terms by Contract period finder deal ", function () {
        pages.finderDeal.clickOnTheTermsByContractPeriodFinderDeal();
        pages.finderDeal.waitForAjax();
    });
};

exports.fillNotifyWithinTheNumberOfDays = function (number) {
    it("Fill into notify within the number of days ", function () {
        pages.finderDeal.fillIntoNotifyWithinTheNumberOfDays(number);
    });
};

exports.fillSubmissionDecisionWithinNumberOfDays = function (number) {
    it("Fill into submission decision within number of days ", function () {
        pages.finderDeal.fillIntoSubmissionDecisionWithinNumberOfDays(number);
    });
};

exports.clickOnAcceptAssumedResponse = function () {
    it("Click on the accept assumed response ", function () {
        pages.finderDeal.clickOnTheAcceptAssumedResponse();
    });
};

exports.clickOnDeclineAssumedResponse = function () {
    it("Click on the decline assumed response ", function () {
        pages.finderDeal.clickOnTheDeclineAssumedResponse();
    });
};

exports.clickOnNoneAssumedResponse = function () {
    it("Click on the none assumed response ", function () {
        pages.finderDeal.clickOnTheNoneAssumedResponse();
    });
};

exports.clickOnWcmWhoWillDraftDeals = function () {
    it("Click on the wcm who will draft deals ", function () {
        pages.finderDeal.clickOnTheWcmWhoWillDraftDeals();
    })
};

exports.clickOnFinderWhoWillDraftDeals = function () {
    it("Click on the finder who will draft deals ", function () {
        pages.finderDeal.clickOnTheFinderWhoWillDraftDeals();
    });
};

exports.clickOnWcmWhoHasControlToExerciseFutureOptions = function () {
    it("Click on the wcm who has control to exercise future options ", function () {
        pages.finderDeal.clickOnTheWcmWhoHasControlToExerciseFutureOptions();
    });
};

exports.clickOnFinderWhoHasControlToExerciseFutureOptions = function () {
    it("Click on the finder who has control to exercise future options ", function () {
        pages.finderDeal.clickOnTheFinderWhoHasControlToExerciseFutureOptions();
    })
};

exports.clickOnWcmWhoIsResponsibleForAdvances = function () {
    it("Click on the wcm who is responsible for advances ", function () {
        pages.finderDeal.clickOnTheWcmWhoIsResponsibleForAdvances();
    });
};

exports.clickOnFinderWhoIsResponsibleForAdvances = function () {
    it("Click on the finder who is responsible for advances ", function () {
        pages.finderDeal.clickOnTheFinderWhoIsResponsibleForAdvances();
    });
};

exports.selectDesiredValueFinderRightToPursueDropDown = function (value) {
    it("Select the desired value finder right to pursue drop down ", function () {
        pages.finderDeal.selectTheDesiredValueFinderRightToPursueDropDown();
    });
};

exports.selectTheRandomValueFinderRightToPursueDropDown = function () {
    it("Select the random value finder right to pursue drop down ", function () {
        pages.finderDeal.selectTheRandomValueFinderRightToPursueDropDown();
    });
};

exports.clickOnYesFinderRightToPursue = function () {
    it("Click on the yes finder right to pursue ", function () {
        pages.finderDeal.clickOnTheYesFinderRightToPursue();
    });
};

exports.clickOnNoFinderRightToPursue = function () {
    it("Click on the no finder right to pursue ", function () {
        pages.finderDeal.clickOnTheNoWcmRightToPursue();
    });
};

exports.clickOnYesWcmRightToPursue = function () {
    it("Click on the yes wcm right to pursue ", function () {
        pages.finderDeal.clickOnTheYesWcmRightToPursue();
    });
};

exports.clickOnNoWcmRightToPursue = function () {
    it("Click on the no wcm right to pursue ", function () {
        pages.finderDeal.clickOnTheNoWcmRightToPursue();
    });
};

exports.clickOnSaveGeneralTermsFinderDeal = function () {
    it("Click on the save general terms finder deal ", function () {
        pages.finderDeal.clickOnTheSaveGeneralTermsFinderDeal();
        pages.finderDeal.waitForAjax();
    });
};

exports.clickOnCancelGeneralTermsFinderDeal = function () {
    it("Click on the cancel general terms finder deal ", function () {
        pages.finderDeal.clickOnTheCancelGeneralTermsFinderDeal();
    });
};

exports.editTermsByContractPeriodFinderDeal = function () {
    it("Edit the terms by contract period finder deal area ", function () {
        pages.finderDeal.editTheTermsByContractPeriodFinderDeal();
        pages.finderDeal.waitForAjax();
    });
};

exports.clickContractPeriodNumberIDetailsTermsByContractPeriod = function (i) {
    it("Click on the contract period number i finder deal details terms by contract period ", function () {
        pages.finderDeal.clickOnContractPeriodNumberIDetailsTermsByContractPeriod(i);
        pages.finderDeal.waitForAjax();
    });
};

exports.clickContractPeriodNumberIDetailsTermsByContractPeriodViewMode = function (i) {
    it("Click on the contract period number i finder deal details terms by contract period view mode", function () {
        pages.finderDeal.clickOnContractPeriodNumberIDetailsTermsByContractPeriodViewMode(i);
        pages.finderDeal.waitForAjax();
    });
};

exports.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI = function () {
    it("Fill into maximum found agreements without pre approval", function () {
        pages.finderDeal.fillIntoMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
    });
};

exports.fillMaximumFoundAgreementWithPreApprovalContractPeriodI = function () {
    it("Fill into maximum found agreement with pre approval contract period  ", function () {
        pages.finderDeal.fillIntoMaximumFoundAgreementWithPreApprovalContractPeriodI();
    });
};

exports.fillFindersRecoupmentResponsability = function () {
    it("Fill into finders recoupment responsability ", function () {
        pages.finderDeal.fillIntoFindersRecoupmentResponsability();
    });
};

exports.fillNonSignedArtistMaximumAdvancesPayable = function () {
    it("Fill into non signed artist maximum advances payable ", function () {
        pages.finderDeal.fillIntoNonSignedArtistMaximumAdvancesPayable();
    });
};

exports.fillSignedArtistMaximumAdvancesPayable = function () {
    it("Fill into signed artist maximum advances payable ", function () {
        pages.finderDeal.fillIntoSignedArtistMaximumAdvancesPayable();
    });
};

exports.fillAggregateMaximumAdvancesPayable = function () {
    it("Fill into aggregate maximum advances payable ", function () {
        pages.finderDeal.fillIntoAggregateMaximumAdvancesPayable();
    });
};

exports.fillAggregateMaximumOnAdvancesField = function () {
    it("Fill into aggregate maximum on advances field ", function () {
        pages.finderDeal.fillIntoAggregateMaximumOnAdvancesField();
    });
};

exports.fillFindersOwnershipField = function () {
    it("Fill into finders ownership field ", function () {
        pages.finderDeal.fillIntoFindersOwnershipField();
    });
};

exports.fillWmcsOwnershipField = function () {
    it("Fill into wcms ownerhip field ", function () {
        pages.finderDeal.fillIntoWmcsOwnershipField();
    });
};

exports.fillAggregateMaximumOnAdvancesFieldNumberI = function (i) {
    it("Fill into aggregate maximum on advances field number i ", function () {
        pages.finderDeal.fillIntoAggregateMaximumOnAdvancesFieldNumberI(i);
    });
};

exports.fillFindersOwnershipFieldNumberI = function (i) {
    it("Fill into finders ownership field number i ", function () {
        pages.finderDeal.fillIntoFindersOwnershipFieldNumberI(i);
    });
};

exports.fillWmcsOwnershipFieldNumberI = function (i) {
    it("Fill into wcm ownership field number i ", function () {
        pages.finderDeal.fillIntoWmcsOwnershipFieldNumberI(i);
    });
};

exports.selectRandomCreatorFoundSubmissionField = function () {
    it("Fill into creator found submission field ", function () {
        pages.finderDeal.fillIntoCreatorFoundSubmissionField();
        pages.finderDeal.selectRandomValueFromCreatorFoundSubmissionDropDown();
    });
};

exports.fillSubmissionDateField = function () {
    it("Fill into submission date field ", function () {
        pages.finderDeal.fillIntoSubmissionDateField();
    });
};

exports.selectRandomWcmDecisionDropDown = function () {
    it("Select the random wcm decision drop down ", function () {
        pages.finderDeal.selectTheRandomWcmDecisionDropDown();
    });
};

exports.selectRandomValueFromFoundDealDropDown = function () {
    it("Select random value from found deal drop down ", function () {
        pages.finderDeal.fillIntoFoundDealInputField();
        pages.finderDeal.selectTheRandomValueFromFoundDealDropDown();
    });
};

exports.fillFindersRecoupmentResponsabilityOverride = function () {
    it("Fill into finders recoupment responsability override ", function () {
        pages.finderDeal.fillIntoFindersRecoupmentResponsabilityOverride();
    });
};

exports.selectRandomValueFromCreatorFoundSubmissionDropDownFieldNumberI = function (i) {
    it("Select creator found submission field number i ", function () {
        pages.finderDeal.fillIntoCreatorFoundSubmissionFieldNumberI(i);
        pages.finderDeal.selectRandomValueFromCreatorFoundSubmissionDropDown();
    })
};

exports.fillIntoSubmissionDateFieldNumberI = function (i) {
    it("Fill into submission date field number i ", function () {
        pages.finderDeal.fillIntoSubmissionDateFieldNumberI(i);
    });
};

exports.fillIntoFoundDealInputFieldNumberI = function (i) {
    it("Fill into found deal input field number i ", function () {
        pages.finderDeal.fillIntoFoundDealInputFieldNumberI(i);
    });
};

exports.fillFindersRecoupmentResponsabilityOverrideNumberI = function (i) {
    it("Fill into finders recoupment responsability override number i ", function () {
        pages.finderDeal.fillIntoFindersRecoupmentResponsabilityOverrideNumberI(i);
    });
};

exports.clickOnSaveTermsByContractPeriodFinderDeal = function () {
    it("Click on save terms by contract period finder deal ", function () {
        pages.finderDeal.clickOnTheSaveTermsByContractPeriodFinderDeal();
        pages.finderDeal.waitForAjax();
    });
};

exports.clickOnCancelTermsByContractPeriodTermsFinderDeal = function () {
    it("Cancel terms by contract period finder deal ", function () {
        pages.finderDeal.clickOnTheCancelTermsByContractPeriodTermsFinderDeal();
    });
};

exports.validatePriorAwarenessNotificationTooltip = function () {
    it("Validate the prior awareness notification tooltip ", function () {
        pages.finderDeal.elems.priorAwarenessTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The prior awareness notification tooltip is : " + promise);
                expect(promise).toContain("Indicates WCM's obligation to inform the Finder of prior");
                expect(promise).toContain("awareness of the submitted Creator(s).");
            });
    });
};

exports.validateNotifyWithinThisNumberOfDaysTooltip = function () {
    it("Validate the notify within this number of days tooltip ", function () {
        pages.finderDeal.elems.notifyWithinThisNumberOfDaysTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The notify within this number of days tooltip is : " + promise);
                expect(promise).toEqual("Indicates within how many days the Finder must be notified of WCM \"knowledge\" of the Creator(s).");
            });
    });
};

exports.validateSubmissionDecisionWithinNumberOfDaysTooltip = function () {
    it("Validate the submission decision within number of days tooltip ", function () {
        pages.finderDeal.elems.submissionDecisionWithinNumberOfDaysTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The submission decision within number of days tooltip is : " + promise);
                expect(promise).toEqual("Indicates within how many days WCM must either Accept or Decline the Finder submission.");
            });
    });
};

exports.validateAssumedResponseTooltip = function () {
    it("Validate the assumed response tooltip ", function () {
        pages.finderDeal.elems.assumedResponseTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The assumed response tooltip is : " + promise);
                expect(promise).toEqual("Indicates the default response to the Finder if WCM has not responded to a submission within the specified number of days.");
            });
    });
};

exports.validateWhoWillDraftDealsTooltip = function () {
    it("Validate who will draft deals tooltip ", function () {
        pages.finderDeal.elems.whoWillDraftDealsTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The who will draft deals tooltip is : " + promise);
                expect(promise).toEqual("Defines which party (WCM or Finder) is responsible for drafting the agreements for the found deals.");
            });
    });
};

exports.validateWhoHasControlToExerciseFutureOptionsTooltip = function () {
    it("Validate who has control to exercise future options tooltip", function () {
        pages.finderDeal.elems.whoHasControlToExerciseFutureOptionsTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The who has control to exercise future options tooltip is : " + promise);
                expect(promise).toEqual("Indicates whether WCM or Finder will have the control over exercising the Option.");
            });
    });
};

exports.validateWhoIsResponsibleForAdvancesTooltip = function () {
    it("Validate who is responsible for advances tooltip", function () {
        pages.finderDeal.elems.whoIsResponsibleForAdvancesTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The who is responsible for advances tooltip is : " + promise);
                expect(promise).toEqual("Indicates whether WCM or Finder will be responsible for Advances to the Creator(s).");
            });
    });
};

exports.validateFindersRightToPursueTooltip = function () {
    it("Validate finders right to pursue tooltip", function () {
        pages.finderDeal.elems.findersRightToPursueTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The finders right to pursue tooltip is : " + promise);
                expect(promise).toEqual("Indicates that if WCM declines a submission, then the Finder has a right to pursue any found deal.");
            });
    });
};

exports.validateWcmRightToPursueTooltip = function () {
    it("Validate wcms right to pursue tooltip", function () {
        pages.finderDeal.elems.wcmRightToPursueTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The wcms right to pursue tooltip is : " + promise);
                expect(promise).toEqual("Indicates WCM has a right to pursue any submission to which WCM, the Finder, and Creator(s) could not come to a three-party agreement.");
            });
    });
};

exports.checkErrorMessageNotifyWithinThisNumberOfDays = function () {
    it("Check the error message displayed for invalid notify within number of days value ", function () {
        browser.driver.findElement(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(2) i.fa.fa-exclamation-triangle.error-icon.consent-status.ng-scope")).getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The error message displayed for invalid notify within number of days value is : " + promise);
                expect(promise).toEqual("0 is not a valid value.");
            });
    });
};

exports.checkErrorMessageSubmissionDecisionWithinNumberOfDays = function () {
    it("Check the error message displayed for invalid submission decision within number of days value ", function () {
        browser.driver.findElement(By.css("div[data-ng-show='form.show.finderDeal.general.edit'] div.control-group.clearfix:nth-child(3) i.fa.fa-exclamation-triangle.error-icon.consent-status.ng-scope")).getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The error message displayed  for invalid submission decision within number of days value is : " + promise);
                expect(promise).toEqual("0 is not a valid value.");
            });
    });
};

exports.confirmCancelChangesGeneralTermsFinderDeal = function () {
    it("Confirm cancel changes finder deal ", function () {
        pages.finderDeal.clickOnTheCancelGeneralTermsFinderDeal();
        pages.finderDeal.confirmCancelChangesModalDialog();
    });
};

exports.confirmCancelChangesTermsByContractPeriodFinderDeal = function () {
    it("Confirm cancel changes terms by contract period finder deal ", function () {
        pages.finderDeal.clickOnTheCancelTermsByContractPeriodTermsFinderDeal();
        pages.finderDeal.confirmCancelChangesModalDialog();
    });
};

exports.validatePriorAwarenessNotificationValue = function (value) {
    it("Validate the prior awareness notification value ", function () {
        pages.finderDeal.elems.priorAwarenessNotificationValue.getText().
            then(function (promise) {
                console.log("The prior awareness notification value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateNotifyWithinThisNumberOfDaysValue = function (value) {
    it("Validate the notify within this number of days value ", function () {
        pages.finderDeal.elems.notifyWithinThisNumberOfDaysValue.getText().
            then(function (promise) {
                console.log("The notify within this number of days value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateSubmissionDecisionWithinNumberOfDaysValue = function (value) {
    it("Validate the submission decision within number of days value ", function () {
        pages.finderDeal.elems.submissionDecisionWithinNumberOfDaysValue.getText().
            then(function (promise) {
                console.log("The submission decision within number of days value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateAssumedResponseValue = function (value) {
    it("Validate the assumed response value ", function () {
        pages.finderDeal.elems.assumedResponseValue.getText().
            then(function (promise) {
                console.log("The assumed response value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateWhoWillDraftDealsValue = function (value) {
    it("Validate the who will draft deals value ", function () {
        pages.finderDeal.elems.whoWillDraftDealsValue.getText().
            then(function (promise) {
                console.log("The who will draft deals value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateWhoHasControlToExerciseFutureOptionsValue = function (value) {
    it("Validate the who has control to exercise future options value ", function () {
        pages.finderDeal.elems.whoHasControlToExerciseFutureOptionValue.getText().
            then(function (promise) {
                console.log("The awho has control to exercise future options value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateWhoIsResponsibleForAdvancesValue = function (value) {
    it("Validate the who is responsible for advances value ", function () {
        pages.finderDeal.elems.whoIsResponsibleForAdvancesValue.getText().
            then(function (promise) {
                console.log("The  who is responsible for advances  value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateFindersRightToPursueValue = function (value) {
    it("Validate the finder right to pursue value ", function () {
        pages.finderDeal.elems.finderRightToPursueValue.getText().
            then(function (promise) {
                console.log("The finder right to pursue value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateWcmRightToPursueValue = function (value) {
    it("Validate the wcm right to pursue value ", function () {
        pages.finderDeal.elems.wcmRightToPursueValue.getText().
            then(function (promise) {
                console.log("The wcm right to pursue value is : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.validateTooltipsForTermsByContractPeriodI = function (i, type) {
    it("Validate the tooltips for terms by contract period number " + i + " of type ", function () {
        pages.finderDeal.validateTheTooltipsForTermsByContractPeriodI(i, type);
    });
};

exports.validateMaximumFoundAgreementsWithoutPreApprovalTooltip = function () {
    it("Validate maximum found agreements without pre approval tooltip", function () {
        pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApprovalTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The maximum found agreements without pre approval tooltip is : " + promise);
                expect(promise).toEqual("Maximum number of Deals that a Finder can sign without obtaining WCM approval during a contract period.");
            });
    });
};

exports.validateMaximumFoundAgreementsWithPreApprovalTooltip = function () {
    it("Validate maximum found agreements with pre approval tooltip", function () {
        pages.finderDeal.elems.maximumFoundAgreementsWithPreApprovalTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The maximum found agreements with pre approval tooltip is : " + promise);
                expect(promise).toEqual("Total number of Deals that a Finder can sign with WCM during a contract period.");
            });
    });
};

exports.validateFindersRecoupmentResponsabilityTooltip = function () {
    it("Validate finders recoupment responsability tooltip", function () {
        pages.finderDeal.elems.findersRecoupmentResponsabilityTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The  finders recoupment responsabilitytooltip is : " + promise);
                expect(promise).toEqual("This is the generally agreed upon Finder's obligation for recoupment of Advances paid to any Found Deal.");
            });
    });
};

exports.validateNonSignedArtistMaximumAdvancesPayableTooltip = function () {
    it("Validate non signed artist maximum advances payable tooltip", function () {
        pages.finderDeal.elems.nonSignedArtistMaximumAdvancesPayableTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The non signed artist maximum advances payable tooltip is : " + promise);
                expect(promise).toEqual("For non-signed Creator(s) on each found Deal, the Finder can spend up to this defined dollar amount.");
            });
    });
};

exports.validateSignedArtistMaximumAdvancesPayableTooltip = function () {
    it("Validate signed artist maximum advances payable tooltip", function () {
        pages.finderDeal.elems.signedArtistMaximumAdvancesPayableTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The  signed artist maximum advances payable tooltip is : " + promise);
                expect(promise).toEqual("For signed Creator(s) on each found Deal, the Finder can spend up to this defined dollar amount.");
            });
    });
};

exports.validateAggregateMaximumAdvancesPayableTooltip = function () {
    it("Validate aggregate maximum advances payable tooltip", function () {
        pages.finderDeal.elems.aggregateMaximumAdvancesPayableTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The aggregate maximum advances payable tooltip is : " + promise);
                expect(promise).toContain("The aggregate defines the overall cap amount for all advances on Finder Deals");
                expect(promise).toContain("Overhead Advances are not part of this maximum.");
            });
    });
};

exports.validateAggregateMaximumOnAdvancesTooltip = function () {
    it("Validate aggregate maximum on advances tooltip", function () {
        pages.finderDeal.elems.aggregateMaximumOnAdvancesTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The  aggregate maximum on advances tooltip is : " + promise);
                expect(promise).toEqual("The aggregate defines the ownership percentages in relation to advance amounts paid by WCM (e.g., If aggregated advances exceed $300,000 during the Contract Period, then ownership is split 50/50.)");
            });
    });
};

exports.validateFindersOwnerhsipTooltip = function () {
    it("Validate finders ownership tooltip", function () {
        pages.finderDeal.elems.findersOwnershipTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The finders ownership tooltip is : " + promise);
                expect(promise).toEqual("This is the agreed-upon ownership percentage the Finder will have when Advances total the maximum defined.");
            });
    });
};

exports.validateWcmsOwnerhsipTooltip = function () {
    it("Validate WCM's ownership tooltip", function () {
        pages.finderDeal.elems.wcmOwnershipTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The WCM's ownership tooltip is : " + promise);
                expect(promise).toEqual("This is the agreed-upon ownership percentage WCM will have when Advances total the maximum defined.");
            });
    });
};

exports.validateCreatorsFoundSubmissionsTooltip = function () {
    it("Validate creators found submissions tooltip", function () {
        pages.finderDeal.elems.creatorsFoundSubmissionTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The creator found submission tooltip is : " + promise);
                expect(promise).toEqual("Creator(s) are the songwriter(s) submitted by the Finder.");
            });
    });
};

exports.validateSubmissionDateTooltip = function () {
    it("Validate submission date tooltip", function () {
        pages.finderDeal.elems.submissionDateTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The submission date tooltip is : " + promise);
                expect(promise).toEqual("Indicates the date on which the Finder submitted Creator(s) to WCM.");
            });
    });
};

exports.validateWcmDecisionTooltip = function () {
    it("Validate WCM decision tooltip", function () {
        pages.finderDeal.elems.wcmDecisionTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The WCM decision tooltip is : " + promise);
                expect(promise).toEqual("Indicates whether WCM will work with the Finder to further the relationship on submitted Creator(s).");
            });
    });
};

exports.validateFoundDealTooltip = function () {
    it("Validate found deal tooltip", function () {
        pages.finderDeal.elems.foundDealTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The found deal tooltip is : " + promise);
                expect(promise).toEqual("Provides a reference to Deals that resulted from Finder submissions.");
            });
    });
};

exports.validateFindersRecoupmentResponsabilityOverrideTooltip = function () {
    it("Validate finders recoupment responsability override tooltip", function () {
        pages.finderDeal.elems.findersRecoupmentResponsabilityOverrideTooltip.getAttribute("data-tooltip").
            then(function (promise) {
                console.log("The finders recoupment responsability override tooltip is : " + promise);
                expect(promise).toEqual("Nullifies the generally agreed upon Finder's obligation for recoupment of Advances paid to this Found Deal.");
            });
    });
};

exports.validateMaximumFoundAgreementsWithoutPreApprovalValue = function () {
    it("Validate maximum found agreements without pre approval value", function () {
        pages.finderDeal.elems.maximumFoundAgreementsWithoutPreApprovalValue.getText().
            then(function (promise) {
                console.log("The maximum found agreements without pre approval value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateMaximumFoundAgreementsWithPreApprovalValue = function () {
    it("Validate maximum found agreements with pre approval value", function () {
        pages.finderDeal.elems.maximumFoundAgreementsWithPreApprovalValue.getText().
            then(function (promise) {
                console.log("The maximum found agreements with pre approval value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateFindersRecoupmentResponsabilityValue = function () {
    it("Validate finders recoupment responsability value", function () {
        pages.finderDeal.elems.findersRecoupmentResponsabilityValue.getText().
            then(function (promise) {
                console.log("The finders recoupment responsability value is : " + promise);
                expect(promise).toContain("%");
            });
    });
};

exports.validateNonSignedArtistMaximumAdvancesPayableValue = function () {
    it("Validate non signed artist maximum advances payable value", function () {
        pages.finderDeal.elems.nonSignedArtistMaximumAdvancesPayableValue.getText().
            then(function (promise) {
                console.log("The non signed artist maximum advances payable value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateSignedArtistMaximumAdvancesPayableValue = function () {
    it("Validate  signed artist maximum advances payable value", function () {
        pages.finderDeal.elems.signedArtistMaximumAdvancesPayableValue.getText().
            then(function (promise) {
                console.log("The non signed artist maximum advances payable value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateAggregateMaximumAdvancesPayableValue = function () {
    it("Validate aggregate maximum advances payable value", function () {
        pages.finderDeal.elems.aggregateMaximumAdvancesPayableValue.getText().
            then(function (promise) {
                console.log("The aggregate maximum advances payable value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateAggregateMaximumOnAdvancesValue = function () {
    it("Validate aggregate maximum advances value", function () {
        pages.finderDeal.elems.aggregateMaximumOnAdvancesValue.getText().
            then(function (promise) {
                console.log("The aggregate maximum on advances value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateFinderOwnershipValue = function () {
    it("Validate finders ownership value", function () {
        pages.finderDeal.elems.findersOwnershipValue.getText().
            then(function (promise) {
                console.log("The finders ownership value is : " + promise);
                expect(promise).toContain("%");
            });
    });
};

exports.validateWcmOwnershipValue = function () {
    it("Validate WCM ownership value", function () {
        pages.finderDeal.elems.wcmOwnershipValue.getText().
            then(function (promise) {
                console.log("The WCM ownership value is : " + promise);
                expect(promise).toContain("%");
            });
    });
};

exports.validateCreatorFoundSubmissionValue = function () {
    it("Validate creator found submission value", function () {
        pages.finderDeal.elems.creatorFoundSubmissionValue.getText().
            then(function (promise) {
                console.log("The creator found submission value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateSubmissionDateValue = function () {
    it("Validate submission date value", function () {
        pages.finderDeal.elems.submissionDateValue.getText().
            then(function (promise) {
                console.log("The submission date value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateWcmDecisionValue = function () {
    it("Validate WCM decision value", function () {
        pages.finderDeal.elems.wcmDecisionValue.getText().
            then(function (promise) {
                console.log("The WCM decision value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateFoundDealValue = function () {
    it("Validate found deal value", function () {
        pages.finderDeal.elems.foundDealValue.getText().
            then(function (promise) {
                console.log("The found deal value is : " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

exports.validateFindersRecoupmentResponsabilityOverrideValue = function () {
    it("Validate finders recoupment responsability override value", function () {
        pages.finderDeal.elems.findersRecoupmentResponsabilityOverrideValue.getText().
            then(function (promise) {
                console.log("The finders recoupment responsability override value is : " + promise);
                expect(promise).toContain("%");
            });
    });
};

exports.clickOnFoundDealTermsTitle = function () {
    it("Click on the found deal terms title ", function () {
        pages.finderDeal.clickOnTheFoundDealTermsTitle();
        pages.finderDeal.waitForAjax();
    });
};

exports.clickOnOwnershipTermsTitle = function () {
    it("Click on the ownership terms title ", function () {
        pages.finderDeal.clickOnTheOwnershipTermsTitle();
        pages.finderDeal.waitForAjax();
    });
};

exports.clickOnTheFoundSubmissionsTitle = function () {
    it("Click on the found submissions title ", function () {
        pages.finderDeal.clickOnTheFoundSubmissionsTitle();
        pages.finderDeal.waitForAjax();
    });
};

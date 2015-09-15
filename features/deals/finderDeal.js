var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deals/deal");
require(steps_path + "deals/deal");
require(pages_path + "deals/createGeneral");
require(steps_path + "deals/createGeneral");
require(pages_path + "deals/createScope");
require(steps_path + "deals/createScope");
require(pages_path + "deals/createContractPeriod");
require(steps_path + "deals/createContractPeriod");
require(pages_path + "deals/editGeneral");
require(steps_path + "deals/editGeneral");
require(pages_path + "deals/editScope");
require(steps_path + "deals/editScope");
require(pages_path + "deals/finderDeal");
require(steps_path + "deals/finderDeal");
require(steps_path + "login");
require(steps_path + "base");

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', "finder"];

exports.feature = [
    {
        name: "Create finder deals",
        tags: ["create"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var percent = (Math.random() * 99 + 1).toFixed(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.editGeneralTermsFinderDeal();
            steps.finderDeal.validatePriorAwarenessNotificationTooltip();
            steps.finderDeal.validateNotifyWithinThisNumberOfDaysTooltip();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays("0");
            steps.finderDeal.checkErrorMessageNotifyWithinThisNumberOfDays();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(number);
            steps.finderDeal.validateSubmissionDecisionWithinNumberOfDaysTooltip();
            steps.finderDeal.fillSubmissionDecisionWithinNumberOfDays("0");
            steps.finderDeal.checkErrorMessageSubmissionDecisionWithinNumberOfDays();
            steps.finderDeal.fillSubmissionDecisionWithinNumberOfDays(number);
            steps.finderDeal.validateAssumedResponseTooltip();
            steps.finderDeal.clickOnNoneAssumedResponse();
            steps.finderDeal.validateWhoWillDraftDealsTooltip();
            steps.finderDeal.clickOnFinderWhoWillDraftDeals();
            steps.finderDeal.validateWhoHasControlToExerciseFutureOptionsTooltip();
            steps.finderDeal.clickOnWcmWhoHasControlToExerciseFutureOptions();
            steps.finderDeal.validateWhoIsResponsibleForAdvancesTooltip();
            steps.finderDeal.clickOnFinderWhoIsResponsibleForAdvances();
            steps.finderDeal.validateFindersRightToPursueTooltip();
            steps.finderDeal.validateWcmRightToPursueTooltip();
            steps.finderDeal.clickOnSaveGeneralTermsFinderDeal();
        }
    },
    {
        name: "Dirty check general terms finder deals",
        tags: ["view"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var percent = (Math.random() * 100 + 1).toFixed(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.editGeneralTermsFinderDeal();
            steps.finderDeal.clickOnNoPriorAwarenessNotification();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(number);
            steps.base.scrollIntoView("General header ", pages.deal.elems.generalHeader);
            steps.deal.goToGeneralDealTabDetail();
            steps.editDealScope.editCancelModalDialogDirtyCheck();
            steps.finderDeal.clickOnNoPriorAwarenessNotification();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(number);
            steps.finderDeal.confirmCancelChangesGeneralTermsFinderDeal();
        }
    },
    {
        name: "Validate negative scenarios finder deals",
        tags: ["view"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var num = Math.floor(Math.random() * 500) + 1;
            var percent = (Math.random() * 100 + 1).toFixed(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.editGeneralTermsFinderDeal();
            steps.finderDeal.clickOnYesPriorAwarenessNotification();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(num);
            steps.finderDeal.fillSubmissionDecisionWithinNumberOfDays(num);
            steps.finderDeal.clickOnAcceptAssumedResponse();
            steps.finderDeal.clickOnFinderWhoWillDraftDeals();
            steps.finderDeal.clickOnWcmWhoHasControlToExerciseFutureOptions();
            steps.finderDeal.clickOnFinderWhoIsResponsibleForAdvances();
            steps.finderDeal.clickOnNoWcmRightToPursue();
            steps.finderDeal.clickOnSaveGeneralTermsFinderDeal();
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.editGeneralTermsFinderDeal();
            steps.finderDeal.clickOnNoPriorAwarenessNotification();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(number);
            steps.finderDeal.fillSubmissionDecisionWithinNumberOfDays(number);
            steps.finderDeal.clickOnNoneAssumedResponse();
            steps.finderDeal.clickOnWcmWhoWillDraftDeals();
            steps.finderDeal.clickOnFinderWhoHasControlToExerciseFutureOptions();
            steps.finderDeal.clickOnWcmWhoIsResponsibleForAdvances();
            steps.finderDeal.clickOnYesWcmRightToPursue();
            steps.finderDeal.clickOnSaveGeneralTermsFinderDeal();
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.validatePriorAwarenessNotificationValue("No");
            steps.finderDeal.validateNotifyWithinThisNumberOfDaysValue(number + " Days");
            steps.finderDeal.validateSubmissionDecisionWithinNumberOfDaysValue(number + " Days");
            steps.finderDeal.validateAssumedResponseValue("None");
            steps.finderDeal.validateWhoWillDraftDealsValue("WCM");
            steps.finderDeal.validateWhoHasControlToExerciseFutureOptionsValue("Finder");
            steps.finderDeal.validateWhoIsResponsibleForAdvancesValue("WCM");
            steps.finderDeal.validateWcmRightToPursueValue("Yes");
        }
    },
    {
        name: "Create terms by contract period finder deals",
        tags: ["create"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.validateTermsByContractPeriodFinderDealTitle();
            steps.finderDeal.validateNumberOfTermsByContractPeriodFinderDealTitle("6");
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.validateTooltipsForTermsByContractPeriodI(1, "Past");
            steps.finderDeal.validateTooltipsForTermsByContractPeriodI(2, "Current");
            steps.finderDeal.validateTooltipsForTermsByContractPeriodI(3, "Future Exercised");
            steps.finderDeal.validateTooltipsForTermsByContractPeriodI(4, "Future Unexercised");
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriod(2);
            steps.finderDeal.validateMaximumFoundAgreementsWithoutPreApprovalTooltip();
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.validateMaximumFoundAgreementsWithPreApprovalTooltip();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.finderDeal.validateFindersRecoupmentResponsabilityTooltip();
            steps.finderDeal.fillFindersRecoupmentResponsability();
            steps.finderDeal.validateNonSignedArtistMaximumAdvancesPayableTooltip();
            steps.finderDeal.fillNonSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.validateSignedArtistMaximumAdvancesPayableTooltip();
            steps.finderDeal.fillSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.validateAggregateMaximumAdvancesPayableTooltip();
            steps.finderDeal.fillAggregateMaximumAdvancesPayable();
            steps.finderDeal.validateAggregateMaximumOnAdvancesTooltip();
            steps.finderDeal.fillAggregateMaximumOnAdvancesField();
            steps.finderDeal.validateFindersOwnerhsipTooltip();
            steps.finderDeal.fillFindersOwnershipField();
            steps.finderDeal.validateWcmsOwnerhsipTooltip();
            steps.finderDeal.fillWmcsOwnershipField();
            steps.finderDeal.validateCreatorsFoundSubmissionsTooltip();
            steps.finderDeal.selectRandomCreatorFoundSubmissionField();
            steps.finderDeal.validateSubmissionDateTooltip();
            steps.finderDeal.fillSubmissionDateField();
            steps.finderDeal.validateWcmDecisionTooltip();
            steps.finderDeal.selectRandomWcmDecisionDropDown();
            steps.finderDeal.validateFoundDealTooltip();
            steps.finderDeal.selectRandomValueFromFoundDealDropDown();
            steps.finderDeal.validateFindersRecoupmentResponsabilityOverrideTooltip();
            steps.finderDeal.fillFindersRecoupmentResponsabilityOverride();
            steps.finderDeal.clickOnSaveTermsByContractPeriodFinderDeal();
        }
    },
    {
        name: "Create and view finder deals terms by contract period",
        tags: ["create"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var num = Math.floor(Math.random() * 500) + 1;
            var percent = (Math.random() * 100 + 1).toFixed(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriod(2);
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.finderDeal.fillFindersRecoupmentResponsability();
            steps.finderDeal.fillNonSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillAggregateMaximumAdvancesPayable();
            steps.finderDeal.fillAggregateMaximumOnAdvancesField();
            steps.finderDeal.fillFindersOwnershipField();
            steps.finderDeal.fillWmcsOwnershipField();
            steps.finderDeal.selectRandomCreatorFoundSubmissionField();
            steps.finderDeal.fillSubmissionDateField();
            steps.finderDeal.selectRandomWcmDecisionDropDown();
            steps.finderDeal.selectRandomValueFromFoundDealDropDown();
            steps.finderDeal.fillFindersRecoupmentResponsabilityOverride();
            steps.finderDeal.clickOnSaveTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriodViewMode(2);
            steps.finderDeal.clickOnFoundDealTermsTitle();
            steps.finderDeal.validateMaximumFoundAgreementsWithoutPreApprovalValue();
            steps.finderDeal.validateMaximumFoundAgreementsWithPreApprovalValue();
            steps.finderDeal.validateFindersRecoupmentResponsabilityValue();
            steps.finderDeal.validateNonSignedArtistMaximumAdvancesPayableValue();
            steps.finderDeal.validateSignedArtistMaximumAdvancesPayableValue();
            steps.finderDeal.validateAggregateMaximumAdvancesPayableValue();
            steps.finderDeal.clickOnOwnershipTermsTitle();
            steps.finderDeal.validateAggregateMaximumOnAdvancesValue();
            steps.finderDeal.validateFinderOwnershipValue();
            steps.finderDeal.validateWcmOwnershipValue();
            steps.finderDeal.clickOnTheFoundSubmissionsTitle();
            steps.finderDeal.validateCreatorFoundSubmissionValue();
            steps.finderDeal.validateSubmissionDateValue();
            steps.finderDeal.validateWcmDecisionValue();
            steps.finderDeal.validateWcmDecisionValue();
            steps.finderDeal.validateFoundDealValue();
            steps.finderDeal.validateFindersRecoupmentResponsabilityOverrideValue();
        }
    },
    {
        name: "Dirty check finder deals terms by contract period",
        tags: ["edit"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var num = Math.floor(Math.random() * 500) + 1;
            var percent = (Math.random() * 100 + 1).toFixed(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
            //steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriod(3);
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.base.scrollIntoView("General header ", pages.deal.elems.generalHeader);
            steps.deal.goToGeneralDealTabDetail();
            steps.editDealScope.editCancelModalDialogDirtyCheck();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.finderDeal.confirmCancelChangesTermsByContractPeriodFinderDeal();
        }
    },
    {
        name: "Modular save finder deals",
        tags: ["edit"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var num = Math.floor(Math.random() * 500) + 1;
            var percent = (Math.random() * 100 + 1).toFixed(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.createDealContractPeriod.fillEndTargetMonths();
            }
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            //general terms addition
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.editGeneralTermsFinderDeal();
            steps.finderDeal.clickOnYesPriorAwarenessNotification();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(num);
            steps.finderDeal.fillSubmissionDecisionWithinNumberOfDays(num);
            steps.finderDeal.clickOnAcceptAssumedResponse();
            steps.finderDeal.clickOnFinderWhoWillDraftDeals();
            steps.finderDeal.clickOnWcmWhoHasControlToExerciseFutureOptions();
            steps.finderDeal.clickOnFinderWhoIsResponsibleForAdvances();
            steps.finderDeal.clickOnNoWcmRightToPursue();
            steps.finderDeal.clickOnSaveGeneralTermsFinderDeal();
            steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.editGeneralTermsFinderDeal();
            steps.finderDeal.clickOnNoPriorAwarenessNotification();
            steps.finderDeal.fillNotifyWithinTheNumberOfDays(number);
            steps.finderDeal.fillSubmissionDecisionWithinNumberOfDays(number);
            steps.finderDeal.clickOnNoneAssumedResponse();
            steps.finderDeal.clickOnWcmWhoWillDraftDeals();
            steps.finderDeal.clickOnFinderWhoHasControlToExerciseFutureOptions();
            steps.finderDeal.clickOnWcmWhoIsResponsibleForAdvances();
            steps.finderDeal.clickOnYesWcmRightToPursue();
            //terms by contract period addition
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriod(2);
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.finderDeal.fillFindersRecoupmentResponsability();
            steps.finderDeal.fillNonSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillAggregateMaximumAdvancesPayable();
            steps.finderDeal.fillAggregateMaximumOnAdvancesField();
            steps.finderDeal.fillFindersOwnershipField();
            steps.finderDeal.fillWmcsOwnershipField();
            steps.finderDeal.selectRandomCreatorFoundSubmissionField();
            steps.finderDeal.fillSubmissionDateField();
            steps.finderDeal.selectRandomWcmDecisionDropDown();
            steps.finderDeal.selectRandomValueFromFoundDealDropDown();
            steps.finderDeal.fillFindersRecoupmentResponsabilityOverride();
            //modular save
            steps.finderDeal.clickOnSaveTermsByContractPeriodFinderDeal();
            //validations general terms
            steps.finderDeal.validatePriorAwarenessNotificationValue("No");
            steps.finderDeal.validateNotifyWithinThisNumberOfDaysValue(number + " Days");
            steps.finderDeal.validateSubmissionDecisionWithinNumberOfDaysValue(number + " Days");
            steps.finderDeal.validateAssumedResponseValue("None");
            steps.finderDeal.validateWhoWillDraftDealsValue("WCM");
            steps.finderDeal.validateWhoHasControlToExerciseFutureOptionsValue("Finder");
            steps.finderDeal.validateWhoIsResponsibleForAdvancesValue("WCM");
            steps.finderDeal.validateWcmRightToPursueValue("Yes");
            //validations terms by contract period
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriodViewMode(2);
            steps.finderDeal.clickOnFoundDealTermsTitle();
            steps.finderDeal.validateMaximumFoundAgreementsWithoutPreApprovalValue();
            steps.finderDeal.validateMaximumFoundAgreementsWithPreApprovalValue();
            steps.finderDeal.validateFindersRecoupmentResponsabilityValue();
            steps.finderDeal.validateNonSignedArtistMaximumAdvancesPayableValue();
            steps.finderDeal.validateSignedArtistMaximumAdvancesPayableValue();
            steps.finderDeal.validateAggregateMaximumAdvancesPayableValue();
            steps.finderDeal.clickOnOwnershipTermsTitle();
            steps.finderDeal.validateAggregateMaximumOnAdvancesValue();
            steps.finderDeal.validateFinderOwnershipValue();
            steps.finderDeal.validateWcmOwnershipValue();
            steps.finderDeal.clickOnTheFoundSubmissionsTitle();
            steps.finderDeal.validateCreatorFoundSubmissionValue();
            steps.finderDeal.validateSubmissionDateValue();
            steps.finderDeal.validateWcmDecisionValue();
            steps.finderDeal.validateWcmDecisionValue();
            steps.finderDeal.validateFoundDealValue();
            steps.finderDeal.validateFindersRecoupmentResponsabilityOverrideValue();
        }
    }
];
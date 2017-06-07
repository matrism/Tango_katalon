'use strict';

exports.id = '8fd9d380-378c-40ce-b37f-11d4cda8e530';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'finder', 'regression','ts-357'];

exports.feature = [
    {
        name: "Create finder deals",
        tags: ["create_finder_deals_validation_tooltip"],
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
            steps.base.sleep(2000);
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
        tags: ["dirty_check_general_terms_finder_deals"],
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
            steps.base.sleep(2000);
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
        tags: ["create_view_edit_finder_deals"],
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
            steps.base.sleep(2000);
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
            //steps.finderDeal.clickOnGeneralTermsFinderDeal();
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
            //steps.finderDeal.clickOnGeneralTermsFinderDeal();
            steps.finderDeal.validatePriorAwarenessNotificationValue("No");
            steps.finderDeal.validateNotifyWithinThisNumberOfDaysValue(number + " Day s");
            steps.finderDeal.validateSubmissionDecisionWithinNumberOfDaysValue(number + " Day s");
            steps.finderDeal.validateAssumedResponseValue("None");
            steps.finderDeal.validateWhoWillDraftDealsValue("WCM");
            steps.finderDeal.validateWhoHasControlToExerciseFutureOptionsValue("Finder");
            steps.finderDeal.validateWhoIsResponsibleForAdvancesValue("WCM");
            steps.finderDeal.validateWcmRightToPursueValue("Yes");
        }
    },
    {
        name: "Create terms by contract period finder deals",
        tags: ["create_terms_by_contract_period_finder_deals"],
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
            steps.base.sleep(2000);
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
            steps.finderDeal.clickOnFoundDealTermsTitle("editmode");
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
            steps.finderDeal.clickOnOwnershipTermsTitle("editmode");
            steps.finderDeal.validateAggregateMaximumOnAdvancesTooltip();
            steps.finderDeal.fillAggregateMaximumOnAdvancesField();
            steps.finderDeal.validateFindersOwnerhsipTooltip();
            steps.finderDeal.fillFindersOwnershipField();
            steps.finderDeal.validateWcmsOwnerhsipTooltip();
            steps.finderDeal.fillWmcsOwnershipField();
            steps.finderDeal.clickOnTheFoundSubmissionsTitle("editmode");
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
        tags: ["create_view_edit_terms_by_contract_period_finder_deals"],
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
            steps.base.sleep(2000);
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
            //steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriod(1);
            steps.finderDeal.clickOnFoundDealTermsTitle("editmode");
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.finderDeal.fillFindersRecoupmentResponsability();
            steps.finderDeal.fillNonSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillAggregateMaximumAdvancesPayable();
            steps.finderDeal.clickOnOwnershipTermsTitle("editmode");
            steps.finderDeal.fillAggregateMaximumOnAdvancesField();
            steps.finderDeal.fillFindersOwnershipField();
            steps.finderDeal.fillWmcsOwnershipField();
            steps.finderDeal.clickOnTheFoundSubmissionsTitle("editmode");
            steps.finderDeal.selectRandomCreatorFoundSubmissionField();
            steps.finderDeal.fillSubmissionDateField();
            steps.finderDeal.selectRandomWcmDecisionDropDown();
            steps.finderDeal.selectRandomValueFromFoundDealDropDown();
            steps.finderDeal.fillFindersRecoupmentResponsabilityOverride();
            steps.finderDeal.clickOnSaveTermsByContractPeriodFinderDeal();
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
        tags: ["dirty_check_terms_by_contract_period_finder_deals"],
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
            steps.base.sleep(2000);
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickOnFoundDealTermsTitle("editmode");
            //steps.finderDeal.clickContractPeriodNumberIDetailsTermsByContractPeriod(3);
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.base.scrollIntoView("General header ", pages.deal.elems.generalHeader);
            steps.deal.goToGeneralDealTabDetail();
            steps.editDealScope.editCancelModalDialogDirtyCheck();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.base.scrollIntoView("Cancel changes ", pages.finderDeal.elems.cancelTermsByContractPeriodFinderDeal);
            steps.finderDeal.confirmCancelChangesTermsByContractPeriodFinderDeal();
        }
    },

    {
        name: "Modular save finder deals",
        tags: ["modular_save_finder_deals"],
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
            steps.base.sleep(2000);
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
            //steps.finderDeal.clickOnGeneralTermsFinderDeal();
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
            steps.finderDeal.clickOnFoundDealTermsTitle("editmode");
            steps.finderDeal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
            steps.finderDeal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
            steps.finderDeal.fillFindersRecoupmentResponsability();
            steps.finderDeal.fillNonSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillSignedArtistMaximumAdvancesPayable();
            steps.finderDeal.fillAggregateMaximumAdvancesPayable();
            steps.finderDeal.clickOnOwnershipTermsTitle("editmode");
            steps.finderDeal.fillAggregateMaximumOnAdvancesField();
            steps.finderDeal.fillFindersOwnershipField();
            steps.finderDeal.fillWmcsOwnershipField();
            steps.finderDeal.clickOnTheFoundSubmissionsTitle("editmode");
            steps.finderDeal.selectRandomCreatorFoundSubmissionField();
            steps.finderDeal.fillSubmissionDateField();
            steps.finderDeal.selectRandomWcmDecisionDropDown();
            steps.finderDeal.selectRandomValueFromFoundDealDropDown();
            steps.finderDeal.fillFindersRecoupmentResponsabilityOverride();
            //modular save
            steps.finderDeal.clickOnSaveTermsByContractPeriodFinderDeal();
            steps.finderDeal.clickOnSaveGeneralTermsFinderDeal();
            //validations general terms
            steps.finderDeal.validatePriorAwarenessNotificationValue("No");
            steps.finderDeal.validateNotifyWithinThisNumberOfDaysValue(number + " Day s");
            steps.finderDeal.validateSubmissionDecisionWithinNumberOfDaysValue(number + " Day s");
            steps.finderDeal.validateAssumedResponseValue("None");
            steps.finderDeal.validateWhoWillDraftDealsValue("WCM");
            steps.finderDeal.validateWhoHasControlToExerciseFutureOptionsValue("Finder");
            steps.finderDeal.validateWhoIsResponsibleForAdvancesValue("WCM");
            steps.finderDeal.validateWcmRightToPursueValue("Yes");
            //validations terms by contract period
            //steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
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

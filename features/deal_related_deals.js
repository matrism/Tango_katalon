var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(pages_path + "edit_deal_scope");
require(steps_path + "edit_deal_scope");
require(pages_path + "finder_deal");
require(steps_path + "finder_deal");
require(steps_path + "login");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create related deals",
        tags: ["create_related_deals_validation_tooltip"],
        steps: function () {
            var number = Math.floor(Math.random() * 1000) + 1;
            var percent = (Math.random() * 100 + 1).toFixed(2);
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.create_deal_contract_period.fillActualEndDateField();
            steps.create_deal_contract_period.addNewContractPeriodDialog();
            steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.create_deal_contract_period.fillEndTargetMonths();
            for (var i = 3; i <= 6; i++) {
                steps.create_deal_contract_period.addNewContractPeriod();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.create_deal_contract_period.fillEndTargetMonths();
            }
            steps.create_deal_scope.addSpecificScope("Finder");
            steps.create_deal_scope.selectCountry();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finder_deal.clickOnGeneralTermsFinderDeal();
            steps.finder_deal.editGeneralTermsFinderDeal();
            steps.finder_deal.validatePriorAwarenessNotificationTooltip();
            steps.finder_deal.validateNotifyWithinThisNumberOfDaysTooltip();
            steps.finder_deal.fillNotifyWithinTheNumberOfDays("0");
            steps.finder_deal.checkErrorMessageNotifyWithinThisNumberOfDays();
            steps.finder_deal.fillNotifyWithinTheNumberOfDays(number);
            steps.finder_deal.validateSubmissionDecisionWithinNumberOfDaysTooltip();
            steps.finder_deal.fillSubmissionDecisionWithinNumberOfDays("0");
            steps.finder_deal.checkErrorMessageSubmissionDecisionWithinNumberOfDays();
            steps.finder_deal.fillSubmissionDecisionWithinNumberOfDays(number);
            steps.finder_deal.validateAssumedResponseTooltip();
            steps.finder_deal.clickOnNoneAssumedResponse();
            steps.finder_deal.validateWhoWillDraftDealsTooltip();
            steps.finder_deal.clickOnFinderWhoWillDraftDeals();
            steps.finder_deal.validateWhoHasControlToExerciseFutureOptionsTooltip();
            steps.finder_deal.clickOnWcmWhoHasControlToExerciseFutureOptions();
            steps.finder_deal.validateWhoIsResponsibleForAdvancesTooltip();
            steps.finder_deal.clickOnFinderWhoIsResponsibleForAdvances();
            steps.finder_deal.validateFindersRightToPursueTooltip();
            steps.finder_deal.validateWcmRightToPursueTooltip();
            steps.finder_deal.clickOnSaveGeneralTermsFinderDeal();
        }
    },
        {
            name: "Validate negative scenarios related deals",
            tags: ["dirty_check_general_terms_related_deals"],
            steps: function () {
                var number = Math.floor(Math.random() * 1000) + 1;
                var percent = (Math.random() * 100 + 1).toFixed(2);
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
                steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
                steps.create_deal_contract_period.fillActualEndDateField();
                steps.create_deal_contract_period.addNewContractPeriodDialog();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.create_deal_contract_period.fillEndTargetMonths();
                for (var i = 3; i <= 6; i++) {
                    steps.create_deal_contract_period.addNewContractPeriod();
                    steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                    steps.create_deal_contract_period.fillEndTargetMonths();
                }
                steps.create_deal_scope.addSpecificScope("Finder");
                steps.create_deal_scope.selectCountry();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.deal.goToFinderDealTermsTabDetails();
                steps.finder_deal.clickOnGeneralTermsFinderDeal();
                steps.finder_deal.editGeneralTermsFinderDeal();
                steps.finder_deal.clickOnNoPriorAwarenessNotification();
                steps.finder_deal.fillNotifyWithinTheNumberOfDays(number);
                steps.base.scrollIntoView("General header ", pages.deal.elems.generalHeader);
                steps.deal.goToGeneralDealTabDetail();
                steps.edit_deal_scope.editCancelModalDialogDirtyCheck();
                steps.finder_deal.clickOnNoPriorAwarenessNotification();
                steps.finder_deal.fillNotifyWithinTheNumberOfDays(number);
                steps.finder_deal.confirmCancelChangesGeneralTermsFinderDeal();
            }
        },
        {
            name: "Validate negative scenarios related deals",
            tags: ["create_view_edit_related_deals"],
            steps: function () {
                var number = Math.floor(Math.random() * 1000) + 1;
                var num = Math.floor(Math.random() * 500) + 1;
                var percent = (Math.random() * 100 + 1).toFixed(2);
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
                steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
                steps.create_deal_contract_period.fillActualEndDateField();
                steps.create_deal_contract_period.addNewContractPeriodDialog();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.create_deal_contract_period.fillEndTargetMonths();
                for (var i = 3; i <= 6; i++) {
                    steps.create_deal_contract_period.addNewContractPeriod();
                    steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                    steps.create_deal_contract_period.fillEndTargetMonths();
                }
                steps.create_deal_scope.addSpecificScope("Finder");
                steps.create_deal_scope.selectCountry();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.deal.goToFinderDealTermsTabDetails();
                steps.finder_deal.clickOnGeneralTermsFinderDeal();
                steps.finder_deal.editGeneralTermsFinderDeal();
                steps.finder_deal.clickOnYesPriorAwarenessNotification();
                steps.finder_deal.fillNotifyWithinTheNumberOfDays(num);
                steps.finder_deal.fillSubmissionDecisionWithinNumberOfDays(num);
                steps.finder_deal.clickOnAcceptAssumedResponse();
                steps.finder_deal.clickOnFinderWhoWillDraftDeals();
                steps.finder_deal.clickOnWcmWhoHasControlToExerciseFutureOptions();
                steps.finder_deal.clickOnFinderWhoIsResponsibleForAdvances();
                steps.finder_deal.clickOnNoWcmRightToPursue();
                steps.finder_deal.clickOnSaveGeneralTermsFinderDeal();
                steps.finder_deal.clickOnGeneralTermsFinderDeal();
                steps.finder_deal.editGeneralTermsFinderDeal();
                steps.finder_deal.clickOnNoPriorAwarenessNotification();
                steps.finder_deal.fillNotifyWithinTheNumberOfDays(number);
                steps.finder_deal.fillSubmissionDecisionWithinNumberOfDays(number);
                steps.finder_deal.clickOnNoneAssumedResponse();
                steps.finder_deal.clickOnWcmWhoWillDraftDeals();
                steps.finder_deal.clickOnFinderWhoHasControlToExerciseFutureOptions();
                steps.finder_deal.clickOnWcmWhoIsResponsibleForAdvances();
                steps.finder_deal.clickOnYesWcmRightToPursue();
                steps.finder_deal.clickOnSaveGeneralTermsFinderDeal();
                steps.finder_deal.clickOnGeneralTermsFinderDeal();
                steps.finder_deal.validatePriorAwarenessNotificationValue("No");
                steps.finder_deal.validateNotifyWithinThisNumberOfDaysValue(number + " Days");
                steps.finder_deal.validateSubmissionDecisionWithinNumberOfDaysValue(number + " Days");
                steps.finder_deal.validateAssumedResponseValue("None");
                steps.finder_deal.validateWhoWillDraftDealsValue("WCM");
                steps.finder_deal.validateWhoHasControlToExerciseFutureOptionsValue("Finder");
                steps.finder_deal.validateWhoIsResponsibleForAdvancesValue("WCM");
                steps.finder_deal.validateWcmRightToPursueValue("Yes");
            }
        },
        {
            name: "Validate negative scenarios related deals",
            tags: ["create_terms_by_contract_period_related_deals"],
            steps: function () {
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
                steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
                steps.create_deal_contract_period.fillActualEndDateField();
                steps.create_deal_contract_period.addNewContractPeriodDialog();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.create_deal_contract_period.fillEndTargetMonths();
                for (var i = 3; i <= 6; i++) {
                    steps.create_deal_contract_period.addNewContractPeriod();
                    steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                    steps.create_deal_contract_period.fillEndTargetMonths();
                }
                steps.create_deal_scope.addSpecificScope("Finder");
                steps.create_deal_scope.selectCountry();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.deal.goToFinderDealTermsTabDetails();
                steps.finder_deal.validateTermsByContractPeriodFinderDealTitle();
                steps.finder_deal.validateNumberOfTermsByContractPeriodFinderDealTitle("6");
                steps.finder_deal.clickOnTermsByContractPeriodFinderDeal();
                steps.finder_deal.validateTooltipsForTermsByContractPeriodI(1, "Past");
                steps.finder_deal.validateTooltipsForTermsByContractPeriodI(2, "Current");
                steps.finder_deal.validateTooltipsForTermsByContractPeriodI(3, "Future Exercised");
                steps.finder_deal.validateTooltipsForTermsByContractPeriodI(4, "Future Unexercised");
                steps.finder_deal.editTermsByContractPeriodFinderDeal();
                steps.finder_deal.clickContractPeriodNumberIDetailsTermsByContractPeriod(2);
                steps.finder_deal.validateMaximumFoundAgreementsWithoutPreApprovalTooltip();
                steps.finder_deal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
                steps.finder_deal.validateMaximumFoundAgreementsWithPreApprovalTooltip();
                steps.finder_deal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
                steps.finder_deal.validateFindersRecoupmentResponsabilityTooltip();
                steps.finder_deal.fillFindersRecoupmentResponsability();
                steps.finder_deal.validateNonSignedArtistMaximumAdvancesPayableTooltip();
                steps.finder_deal.fillNonSignedArtistMaximumAdvancesPayable();
                steps.finder_deal.validateSignedArtistMaximumAdvancesPayableTooltip();
                steps.finder_deal.fillSignedArtistMaximumAdvancesPayable();
                steps.finder_deal.validateAggregateMaximumAdvancesPayableTooltip();
                steps.finder_deal.fillAggregateMaximumAdvancesPayable();
                steps.finder_deal.validateAggregateMaximumOnAdvancesTooltip();
                steps.finder_deal.fillAggregateMaximumOnAdvancesField();
                steps.finder_deal.validateFindersOwnerhsipTooltip();
                steps.finder_deal.fillFindersOwnershipField();
                steps.finder_deal.validateWcmsOwnerhsipTooltip();
                steps.finder_deal.fillWmcsOwnershipField();
                steps.finder_deal.validateCreatorsFoundSubmissionsTooltip();
                steps.finder_deal.selectRandomCreatorFoundSubmissionField();
                steps.finder_deal.validateSubmissionDateTooltip();
                steps.finder_deal.fillSubmissionDateField();
                steps.finder_deal.validateWcmDecisionTooltip();
                steps.finder_deal.selectRandomWcmDecisionDropDown();
                steps.finder_deal.validateFoundDealTooltip();
                steps.finder_deal.selectRandomValueFromFoundDealDropDown();
                steps.finder_deal.validateFindersRecoupmentResponsabilityOverrideTooltip();
                steps.finder_deal.fillFindersRecoupmentResponsabilityOverride();
                steps.finder_deal.clickOnSaveTermsByContractPeriodFinderDeal();
            }
        },
        {
            name: "Create and view related deals terms by contract period",
            tags: ["create_view_edit_terms_by_contract_period_related_deals"],
            steps: function () {
                var number = Math.floor(Math.random() * 1000) + 1;
                var num = Math.floor(Math.random() * 500) + 1;
                var percent = (Math.random() * 100 + 1).toFixed(2);
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
                steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
                steps.create_deal_contract_period.fillActualEndDateField();
                steps.create_deal_contract_period.addNewContractPeriodDialog();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.create_deal_contract_period.fillEndTargetMonths();
                for (var i = 3; i <= 6; i++) {
                    steps.create_deal_contract_period.addNewContractPeriod();
                    steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                    steps.create_deal_contract_period.fillEndTargetMonths();
                }
                steps.create_deal_scope.addSpecificScope("Finder");
                steps.create_deal_scope.selectCountry();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.deal.goToFinderDealTermsTabDetails();
                steps.finder_deal.clickOnTermsByContractPeriodFinderDeal();
                steps.finder_deal.editTermsByContractPeriodFinderDeal();
                steps.finder_deal.clickContractPeriodNumberIDetailsTermsByContractPeriod(2);
                steps.finder_deal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();
                steps.finder_deal.fillMaximumFoundAgreementWithPreApprovalContractPeriodI();
                steps.finder_deal.fillFindersRecoupmentResponsability();
                steps.finder_deal.fillNonSignedArtistMaximumAdvancesPayable();
                steps.finder_deal.fillSignedArtistMaximumAdvancesPayable();
                steps.finder_deal.fillAggregateMaximumAdvancesPayable();
                steps.finder_deal.fillAggregateMaximumOnAdvancesField();
                steps.finder_deal.fillFindersOwnershipField();
                steps.finder_deal.fillWmcsOwnershipField();
                steps.finder_deal.selectRandomCreatorFoundSubmissionField();
                steps.finder_deal.fillSubmissionDateField();
                steps.finder_deal.selectRandomWcmDecisionDropDown();
                steps.finder_deal.selectRandomValueFromFoundDealDropDown();
                steps.finder_deal.fillFindersRecoupmentResponsabilityOverride();
                steps.finder_deal.clickOnSaveTermsByContractPeriodFinderDeal();
                steps.finder_deal.clickOnTermsByContractPeriodFinderDeal();
                steps.finder_deal.clickContractPeriodNumberIDetailsTermsByContractPeriodViewMode(2);
                //steps.finder_deal.clickOnFoundDealTermsTitle();
                steps.finder_deal.validateMaximumFoundAgreementsWithoutPreApprovalValue();
                steps.finder_deal.validateMaximumFoundAgreementsWithPreApprovalValue();
                steps.finder_deal.validateFindersRecoupmentResponsabilityValue();
                steps.finder_deal.validateNonSignedArtistMaximumAdvancesPayableValue();
                steps.finder_deal.validateSignedArtistMaximumAdvancesPayableValue();
                steps.finder_deal.validateAggregateMaximumAdvancesPayableValue();
                //steps.finder_deal.clickOnOwnershipTermsTitle();
                steps.finder_deal.validateAggregateMaximumOnAdvancesValue();
                steps.finder_deal.validateFinderOwnershipValue();
                steps.finder_deal.validateWcmOwnershipValue();
                //steps.finder_deal.clickOnTheFoundSubmissionsTitle();
                steps.finder_deal.validateCreatorFoundSubmissionValue();
                steps.finder_deal.validateSubmissionDateValue();
                steps.finder_deal.validateWcmDecisionValue();
                steps.finder_deal.validateWcmDecisionValue();
                steps.finder_deal.validateFoundDealValue();
                steps.finder_deal.validateFindersRecoupmentResponsabilityOverrideValue();

            }
        }];


module.exports = {
    commonFeatureTags: ["related_deals"],
    feature: feature,
    beforeFeature: beforeFeature
};


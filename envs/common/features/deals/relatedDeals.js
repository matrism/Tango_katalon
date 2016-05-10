'use strict';

exports.id = 'fe120375-318b-407d-a903-d3389abe0686';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', "related", 'regression'];

var urlUse = 'http://tango.tango.qa.wmg.com';

exports.feature = [
    {
        name: "Create related deals",
        tags: ["create_related_deals"],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Administration");
            steps.deal.itContinueToNextPage();
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.checkRelatedDealsTitle();
            steps.relatedDeal.checkRelatedDealsTooltipTitle();
            steps.relatedDeal.checkTheHeaderTableTitlesRelatedDeals();
            steps.relatedDeal.checkNoRelatedDealsDefined();

            //steps.base.openTheNewTab(systemConfig.env.app_url);
            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.checkNoRelatedDealsDefined();
            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("a");
            steps.relatedDeal.checkContractingPartyDropDownIsPopulated();
            steps.relatedDeal.clearIntoContractingPartiesField();
            steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("bmi");
            steps.relatedDeal.checkContractingPartyDropDownIsPopulated();
            steps.relatedDeal.clearIntoContractingPartiesField();
            steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("qwz");
            steps.relatedDeal.checkContractingPartyDropDownWithNoResult();
            steps.relatedDeal.clearIntoContractingPartiesField();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.focusOnNewOpenedTab(0);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals(1);
            steps.relatedDeal.checkContractTypeValueRowNumberI("Administration", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);
            steps.relatedDeal.checkRelationshipValueRowNumberI("Select One", 1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);

            steps.relatedDeal.checkContractTypeValueRowNumberI("—", 2);
            steps.relatedDeal.checkDealStatusValueRowNumberI("—", 2);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("—", 2);
            steps.relatedDeal.checkRelationshipValueRowNumberI("—", 2);

            steps.relatedDeal.checkDeleteRelationshipTooltipRowNumberI(1);
            steps.relatedDeal.deleteRelationshipRowNumberI(1);

            steps.relatedDeal.clickOnCancelRelatedDeal();
            steps.deal.refreshThePage();

            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.relatedDeal.checkContractTypeValueRowNumberI("—", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("—", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("—", 1);
            steps.relatedDeal.checkRelationshipValueRowNumberI("—", 1);

            steps.base.focusOnNewOpenedTab(0);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals(1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            steps.relatedDeal.clickOnSaveRelatedDeal();

            steps.relatedDeal.editRelatedDealForm();
            steps.relatedDeal.checkDeleteRelationshipTooltipRowNumberI(1);
            steps.relatedDeal.deleteRelationshipRowNumberI(1);

            steps.relatedDeal.clickOnSaveRelatedDeal();
            steps.deal.refreshThePage();

            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.relatedDeal.checkContractTypeValueRowNumberI("—", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("—", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("—", 1);
            steps.relatedDeal.checkRelationshipValueRowNumberI("—", 1);

            steps.base.focusOnNewOpenedTab(0);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals(1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            steps.relatedDeal.clickOnSaveRelatedDeal();

            steps.relatedDeal.checkRelatedDealsTitle();
            steps.relatedDeal.checkRelatedDealsTooltipTitle();
            steps.relatedDeal.checkTheHeaderTableTitlesRelatedDeals();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Administration", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.goToDealSummaryGeneralTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editContractExecutionDate();
            steps.editDealGeneral.editRemoveTheExistingContractingParty();
            steps.editDealGeneral.editExistingContractingParty("music & media");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToContractPeriodsAndScopesTermsTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editScopeArea();
            steps.editDealScope.editSpecificScopeType("Joint Venture");
            steps.editDealScope.editSaveScopeChanges();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editFillRetentionDescriptionFromAcquisition("Retention test");
            steps.editDealRtp.editSelectSpecificScopeNumberIRtpAcquisition(1);
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Life of Copyright");
            steps.editDealRtp.saveRetentionFromAcquisition();

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Joint Venture", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("2015-07-07", 1);

            steps.base.focusOnNewOpenedTab(0);
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToDealSummaryGeneralTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editExistingContractingParty("warner");
            steps.editDealGeneral.editExistingContractingParty("bmi");
            steps.editDealGeneral.editExistingContractingParty("warner");
            steps.editDealGeneral.editExistingContractingParty("ascap");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToContractPeriodsAndScopesTermsTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editScopeArea();
            steps.editDealScope.editSpecificScopeType("Production Music Miscellaneous Services");
            steps.editDealScope.editSaveScopeChanges();


            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Production Music Miscellaneous Services", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("2015-07-07", 1);


            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.editRelatedDealForm();

            //steps.relatedDeal.selectSpecificContractingPartyRelatedDealsTowNumberI("249060", 2);
            //steps.relatedDeal.selectRandomValueFromRelationshipDropDown(2);
            //steps.relatedDeal.clickOnSaveRelatedDeal();

            steps.base.focusOnNewOpenedTab(2);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(1, 2);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(2);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.base.focusOnNewOpenedTab(0);

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToContractPeriodsAndScopesTermsTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Audit / Settlement", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Assignment", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Co-Publishing", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Sub-Publishing", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.checkContractTypeValueRowNumberI("AssignmentCo-PublishingProduction Music Miscellaneous ServicesAudit / SettlementSub-Publishing", 2);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 2);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("2015-07-07", 2);

            steps.base.closeTheTabByIndex(2);
            steps.base.closeTheTabByIndex(1);
        }
    },

    {
        name: "Create related finder deals",
        tags: ["related_finder_deal"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.createDealScope.checkContractPeriodsAndScopesHeaderTitlePresent();
            steps.createDealRtp.checkRightsTermPeriodsHeaderTitlePresent();
            steps.finderDeal.checkFinderDealsHeaderTitlePresent();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.checkNoRelatedDealsDefined();
            steps.relatedDeal.clickOnAddRelatedDealLink();

            steps.base.focusOnNewOpenedTab(0);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals(1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            steps.relatedDeal.clickOnSaveRelatedDeal();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Finder", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);


            steps.base.focusOnNewOpenedTab(0);
            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToContractPeriodsAndScopesTermsTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editScopeArea();
            steps.editDealScope.editSpecificScopeType("Purchase");
            steps.editDealScope.editSaveScopeChanges();

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Purchase", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);


            steps.base.focusOnNewOpenedTab(0);
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToDealSummaryGeneralTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editExistingContractingParty("warner");
            steps.editDealGeneral.editExistingContractingParty("bmi");
            steps.editDealGeneral.editExistingContractingParty("warner");
            steps.editDealGeneral.editExistingContractingParty("ascap");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToContractPeriodsAndScopesTermsTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editScopeArea();
            steps.editDealScope.editSpecificScopeType("Finder");
            steps.editDealScope.editSaveScopeChanges();

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Finder", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(2);

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.focusOnNewOpenedTab(1);
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.clickOnAddRelatedDealLink();

            steps.base.focusOnNewOpenedTab(2);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals(1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(2);
            steps.relatedDeal.clickOnSaveRelatedDeal();

            steps.relatedDeal.checkContractTypeValueRowNumberI("Finder", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);


            steps.base.focusOnNewOpenedTab(2);
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToDealSummaryGeneralTabDetails();
            steps.editDealGeneral.editGeneralTabFirstElementsLeftArea();
            steps.editDealGeneral.editContractExecutionDate();
            steps.editDealGeneral.editExistingContractingParty("warner");
            steps.editDealGeneral.editExistingContractingParty("bmi");
            steps.editDealGeneral.editExistingContractingParty("warner");
            steps.editDealGeneral.editExistingContractingParty("ascap");
            steps.editDealGeneral.saveEditGeneralTabFirstElementsLeftArea();

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToContractPeriodsAndScopesTermsTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Audit / Settlement", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Assignment", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Co-Publishing", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.editDealScope.editAddSpecificScopeTypeAndTerritory("Sub-Publishing", "Worldwide");
            steps.editDealScope.editSaveAllChanges();

            steps.deal.goToRightsTermPeriodsTermsTabDetails();
            steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
            steps.editDealRtp.editFillRetentionDescriptionFromAcquisition("Retention test");
            steps.editDealRtp.editSelectSpecificScopeNumberIRtpAcquisition(1);
            steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(1, "Life of Copyright");
            steps.editDealRtp.saveRetentionFromAcquisition();


            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.checkContractTypeValueRowNumberI("AssignmentCo-PublishingFinderAudit / SettlementSub-Publishing", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("2015-07-07", 1);

            steps.base.focusOnNewOpenedTab(2);
            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finderDeal.clickOnTermsByContractPeriodFinderDeal();
            steps.finderDeal.editTermsByContractPeriodFinderDeal();
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
            steps.finderDeal.clickOnFoundDealTermsTitle();
            steps.finderDeal.validateMaximumFoundAgreementsWithoutPreApprovalValue();
            steps.finderDeal.validateMaximumFoundAgreementsWithPreApprovalValue();
            steps.finderDeal.validateFindersRecoupmentResponsabilityValue();
            steps.finderDeal.validateNonSignedArtistMaximumAdvancesPayableValue();
            steps.finderDeal.validateSignedArtistMaximumAdvancesPayableValue();
            steps.finderDeal.validateAggregateMaximumAdvancesPayableValue();


            steps.base.focusOnNewOpenedTab(1);
            steps.deal.refreshThePage();
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();

            steps.relatedDeal.clickOnContractingPartyRelatedDealLink(1);
            steps.base.focusOnNewOpenedTab(3);

            steps.base.closeTheTabByIndex(3);
            steps.base.closeTheTabByIndex(2);
            steps.base.closeTheTabByIndex(1);
        }
    },


    {
        name: "Create related deals",
        tags: ["multiple_related_deal"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("2004");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(1);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(2);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(3);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("01");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(4);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("07");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(5);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("07");
            steps.createDealGeneral.itFillDealGeneralDayExecutionDateValue("15");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(6);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1982");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("08");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(7);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1983");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(8);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1983");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("04");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(9);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1983");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("04");
            steps.createDealGeneral.itFillDealGeneralDayExecutionDateValue("01");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(10);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.createDealGeneral.itFillDealGeneralYearExecutionDateValue("1983");
            steps.createDealGeneral.itFillDealGeneralMonthExecutionDateValue("04");
            steps.createDealGeneral.itFillDealGeneralDayExecutionDateValue("11");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.openTheNewTab(urlUse);
            steps.base.focusOnNewOpenedTab(11);
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


            steps.base.focusOnNewOpenedTab(0);
            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(4);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(11);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 2);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(2);
            steps.relatedDeal.clickOnSaveRelatedDeal();

            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(1);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 3);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(3);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(6);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 4);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(4);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(2);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 5);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(5);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(3);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 6);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(6);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(8);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 7);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(7);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(5);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 8);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(8);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(7);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 9);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(9);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(10);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 10);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(10);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.clickOnAddRelatedDealLink();
            steps.base.focusOnNewOpenedTab(9);
            steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ(0, 11);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(11);
            steps.relatedDeal.clickOnSaveRelatedDeal();


            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1982", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 2);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1982", 2);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 3);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1982-01", 3);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 4);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1982-07", 4);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 5);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1982-07-15", 5);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 6);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1982-08", 6);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 7);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1983", 7);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 8);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1983-04", 8);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 9);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1983-04-01", 9);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 10);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("1983-04-11", 10);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 11);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 11);
        }
    },
    {
        name: "Add related deals",
        tags: ["add_related_deals"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Administration");
            steps.deal.itContinueToNextPage();
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            steps.relatedDeal.checkNoRelatedDealsDefined();
            steps.relatedDeal.clickOnAddRelatedDealLink();
            _.times(20, function () {
                steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("a");
                steps.relatedDeal.clickValueRelationshipDropDown();
                steps.relatedDeal.selectRandomValueRelationshipDropDown();
            });
            _.times(20, function () {
                steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("c");
                steps.relatedDeal.clickValueRelationshipDropDown();
                steps.relatedDeal.selectRandomValueRelationshipDropDown();
            });
            _.times(20, function () {
                steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("d");
                steps.relatedDeal.clickValueRelationshipDropDown();
                steps.relatedDeal.selectRandomValueRelationshipDropDown();
            });
            _.times(20, function () {
                steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("g");
                steps.relatedDeal.clickValueRelationshipDropDown();
                steps.relatedDeal.selectRandomValueRelationshipDropDown();
            });
            _.times(10, function () {
                steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("p");
                steps.relatedDeal.clickValueRelationshipDropDown();
                steps.relatedDeal.selectRandomValueRelationshipDropDown();
            });
            _.times(10, function () {
                steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("t");
                steps.relatedDeal.clickValueRelationshipDropDown();
                steps.relatedDeal.selectRandomValueRelationshipDropDown();
            });
            steps.relatedDeal.clickOnSaveRelatedDeal();
        }
    }
];
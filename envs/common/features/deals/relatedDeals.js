'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', "related", 'regression'];

exports.feature = [

    {
        name: "Create related deals",
        tags: ["relatedDeals"],
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

            steps.base.openTheNewTab("http://tango.tango-qa-aws.dspdev.wmg.com");
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

            steps.relatedDeal.selectSpecificContractingPartyRelatedDealsTowNumberI("249060", 2);
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

            steps.relatedDeal.checkContractTypeValueRowNumberI("Audit / Settlement, Co-Publishing, Assignment, Production Music Miscellaneous Services, Sub-Publishing", 2);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 2);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("2015-07-07", 2);

        }
    },

    {
        name: "Create related deals",
        tags: ["relatedFinder"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Finder");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.checkContractPeriodsAndScopesHeaderTitlePresent();
            steps.deal.checkRightsTermPeriodsHeaderTitlePresent();
            steps.deal.checkFinderDealsHeaderTitlePresent();

            steps.base.openTheNewTab("http://tango.tango-qa-aws.dspdev.wmg.com");
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
            steps.relatedDeal.checkContractTypeValueRowNumberI("Finder", 1);
            steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);
            steps.relatedDeal.checkRelationshipValueRowNumberI("Select One", 1);
            steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);

        }
    }
];

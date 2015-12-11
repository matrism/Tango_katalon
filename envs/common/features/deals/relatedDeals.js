'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', "related", 'regression'];

exports.feature = [
    {
        name: "Create related deals",
        tags: ["related_deals"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScope("Finder");
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
        }
    },

    //{
    //    name: "Create related deals",
    //    tags: ["relatedDeals"],
    //    steps: function () {
    //        steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            //steps.deal.itContinueToNextPage();
            //steps.createDealContractPeriod.fillMandatoryFieldsContractPeriod();
            //steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();
            //steps.deal.printDealNumber();
            ////steps.searchSection.accessSavedDealByNumber("245971");
            //
            //steps.deal.goToGeneralDealTabDetail();
            //steps.deal.goToRelatedDealsGeneralTabDetails();
            //steps.relatedDeal.checkNoRelatedDealsDefined();
            //steps.relatedDeal.clickOnAddRelatedDealLink();
            //steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("a");
            //steps.relatedDeal.checkContractingPartyDropDownIsPopulated();
            //steps.relatedDeal.clearIntoContractingPartiesField();
            //steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("bmi");
            //steps.relatedDeal.checkContractingPartyDropDownIsPopulated();
            //steps.relatedDeal.clearIntoContractingPartiesField();
            //steps.relatedDeal.fillIntoContractingPartiesFieldRelatedDealsSpecificValue("qwz");
            //steps.relatedDeal.checkContractingPartyDropDownWithNoResult();
            //steps.relatedDeal.clearIntoContractingPartiesField();
            //
            //steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("246370");
            ////steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals();
            //steps.relatedDeal.checkContractTypeValueRowNumberI("--", 1);
            //steps.relatedDeal.checkDealStatusValueRowNumberI("Executed", 1);
            //steps.relatedDeal.checkContractExecutionDateValueRowNumberI("None specified", 1);
            //steps.relatedDeal.checkRelationshipValueRowNumberI("Select One", 1);
            //steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            //
            //steps.relatedDeal.checkContractTypeValueRowNumberI("—", 2);
            //steps.relatedDeal.checkDealStatusValueRowNumberI("—", 2);
            //steps.relatedDeal.checkContractExecutionDateValueRowNumberI("—", 2);
            //steps.relatedDeal.checkRelationshipValueRowNumberI("—", 2);
            //
            //steps.relatedDeal.checkDeleteRelationshipTooltipRowNumberI(1);
            //steps.relatedDeal.deleteRelationshipRowNumberI(1);
            //
            //steps.relatedDeal.clickOnCancelRelatedDeal();
            //steps.deal.refreshThePage();
            //
            //steps.deal.goToRelatedDealsGeneralTabDetails();
            //steps.relatedDeal.clickOnAddRelatedDealLink();
            //steps.relatedDeal.checkContractTypeValueRowNumberI("—", 1);
            //steps.relatedDeal.checkDealStatusValueRowNumberI("—", 1);
            //steps.relatedDeal.checkContractExecutionDateValueRowNumberI("—", 1);
            //steps.relatedDeal.checkRelationshipValueRowNumberI("—", 1);
            //
            //steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("246370");
            ////steps.relatedDeal.selectSpecificContractingPartyCreatedDealRelatedDeals();
            //steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            //steps.relatedDeal.clickOnSaveRelatedDeal();
            //
            //steps.relatedDeal.editRelatedDealForm();
            //steps.relatedDeal.checkDeleteRelationshipTooltipRowNumberI(1);
            //steps.relatedDeal.deleteRelationshipRowNumberI(1);
            //
            //steps.relatedDeal.clickOnSaveRelatedDeal();
            //steps.deal.refreshThePage();
            //
            //steps.deal.goToRelatedDealsGeneralTabDetails();
            //steps.relatedDeal.clickOnAddRelatedDealLink();
            //steps.relatedDeal.checkContractTypeValueRowNumberI("—", 1);
            //steps.relatedDeal.checkDealStatusValueRowNumberI("—", 1);
            //steps.relatedDeal.checkContractExecutionDateValueRowNumberI("—", 1);
            //steps.relatedDeal.checkRelationshipValueRowNumberI("—", 1);
            //
            //steps.relatedDeal.selectSpecificContractingPartyRelatedDeals("246370");
            //steps.relatedDeal.selectRandomValueFromRelationshipDropDown(1);
            //steps.relatedDeal.clickOnSaveRelatedDeal();
            //
            //steps.relatedDeal.checkRelatedDealsTitle();
            //steps.relatedDeal.checkRelatedDealsTooltipTitle();
            //steps.relatedDeal.checkTheHeaderTableTitlesRelatedDeals();
            //
            //
            //steps.searchSection.accessSavedDealByNumber("246370");
            //steps.deal.goToGeneralDealTabDetail();

            //steps.deal.openNewTabApp(1);

            //steps.base.openTheNewTab("http://tango.tango-qa-aws.dspdev.wmg.com");
            //
            //steps.base.focusOnNewOpenedTab(1);
            //
            //steps.searchSection.accessSavedDealByNumber("245971");
        //}
    //},



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

            //steps.base.focusOnNewOpenedTab(0);
            //steps.searchSection.accessSavedDealByNumber("245971");
        }
    }
];

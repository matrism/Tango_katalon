var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(pages_path + "edit_deal_contract_period");
require(steps_path + "edit_deal_contract_period");
require(steps_path + "login");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create a deal with incomplete MDRC",
        tags: ["create_and_view_incomplete_deal_mdrc"],
        steps: function () {
            var i = 1;
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
            steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
            steps.edit_deal_contract_period.validateFirstIncompleteMdrcTitle();
            steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
            steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
            steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
            steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
            steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
            steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
            steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
            steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
            steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
            steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
            steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
            steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
        }
    },

        {
            name: "Create a deal with deemed complete MDRC",
            tags: ["create_and_view_deemed_complete_deal_mdrc"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddDeemedCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
                steps.edit_deal_contract_period.validateFirstDeemedCompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcShortfallLabelValueI(i);
                steps.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Create a deal with complete MDRC",
            tags: ["create_and_view_complete_deal_mdrc"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
                steps.edit_deal_contract_period.validateFirstCompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Create a deal with multiple types of MDRC",
            tags: ["create_and_view_multiple_deal_mdrc"],
            steps: function () {
                var i = 1;
                var j = 2;
                var k = 3;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
                steps.create_deal_contract_period.itAddDeemedCompleteMdrcContractPeriod();
                steps.create_deal_contract_period.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
                //validate incomplete MDRC
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(i, "Incomplete");
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
                //validate deemed complete MDRC
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(j, "Deemed Complete");
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcShortfallLabelValueI(j);
                steps.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(j);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(j);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(j);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(j);
                //validate complete MDRC
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(k, "Complete");
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(k);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(k);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(k);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(k);
            }
        },
        {
            name: "Edit a deal with deemed complete MDRC into an incomplete MDRC",
            tags: ["edit_complete_deal_to_incomplete_mdrc"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
                steps.edit_deal_contract_period.validateFirstCompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
                steps.edit_deal_contract_period.itEditIncompleteMdrcContractPeriod(i);
                steps.edit_deal_contract_period.validateFirstIncompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Edit a deal with incomplete MDRC into a deemed complete MDRC",
            tags: ["edit_incomplete_deal_to_deemed_complete_mdrc"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
                steps.edit_deal_contract_period.validateFirstIncompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
                steps.edit_deal_contract_period.itEditDeemedCompleteMdrcContractPeriod(i);
                steps.edit_deal_contract_period.validateFirstDeemedCompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcShortfallLabelValueI(i);
                steps.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Edit a deal with deemed_complete MDRC into a complete MDRC",
            tags: ["edit_deemed_complete_deal_to_complete_mdrc"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddDeemedCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);
                steps.edit_deal_contract_period.validateFirstDeemedCompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcShortfallLabelValueI(i);
                steps.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
                steps.edit_deal_contract_period.itEditCompleteMdrcContractPeriod(i);
                steps.edit_deal_contract_period.validateFirstCompleteMdrcTitle();
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Edit a deal with multiple types of MDRC",
            tags: ["edit_multiple_deal_mdrc"],
            steps: function () {
                var i = 1;
                var j = 2;
                var k = 3;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.create_deal_contract_period.elems.addMdrcLink);
                steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
                steps.create_deal_contract_period.itAddDeemedCompleteMdrcContractPeriod();
                steps.create_deal_contract_period.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_contract_period.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.edit_deal_contract_period.elems.mdrcTitle);

                //validate incomplete MDRC
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(i, "Incomplete");
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);

                //validate deemed complete MDRC
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(j, "Deemed Complete");
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcShortfallLabelValueI(j);
                steps.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(j);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(j);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(j);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(j);

                //validate complete MDRC
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(k, "Complete");
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(k);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(k);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(k);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(k);

                //edit incomplete MDRC first form into complete MDRC
                steps.edit_deal_contract_period.itEditCompleteMdrcContractPeriod(i);
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(i, "Complete");
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(i);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(i);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(i);


                //edit deemed complete MDRC second form into incomplete MDRC
                steps.base.scrollIntoView("Second MDRC form", element(By.css("div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(2)")));
                steps.edit_deal_contract_period.itEditIncompleteMdrcContractPeriod(j);
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(j, "Incomplete");
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(j);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(j);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(j);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(j);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(j);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(j);


                //edit complete MDRC third form into deemed complete MDRC
                steps.base.scrollIntoView("Third MDRC form", element(By.css("div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(3)")));
                steps.edit_deal_contract_period.itEditDeemedCompleteMdrcContractPeriod(k);
                steps.edit_deal_contract_period.validateITypeOfMdrcTitle(k, "Deemed Complete");
                steps.edit_deal_contract_period.validateMdrcDateCompletedLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcDateCompletedTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcShortfallLabelValueI(k);
                steps.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcIMinimumLabelValue(k);
                steps.edit_deal_contract_period.validateMdrcIMinimumTextValue(k);
                steps.edit_deal_contract_period.validateMdrcICommercialReleaseLabelValue(k);
                steps.edit_deal_contract_period.validateMdrcQuantityForCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcLabelsTextCommercialReleaseTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcMinimumStatutoryTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcInNoEventLessThanTextValueI(k);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleLabelValueI(k);
                steps.edit_deal_contract_period.validateMdrcDeliveryScheduleTextValueI(k);
            }
        }];


module.exports = {
    commonFeatureTags: ["deal_mdrc"],
    feature: feature,
    beforeFeature: beforeFeature
};

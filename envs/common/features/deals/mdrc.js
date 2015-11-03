'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'mdrc', "regression"];

exports.feature = [
    {
        name: "Create a deal with incomplete MDRC",
        tags: ["create", "view"],
        steps: function () {
            var i = 1;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealContractPeriod.waitForMdrcToBeLoaded();
            steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);
            steps.editDealContractPeriod.validateFirstIncompleteMdrcTitle();
            steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
            steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
            steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
            steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
            steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
            steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
            steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
            steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
            steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
            steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
            steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
            steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
        }
    },

        {
            name: "Create a deal with deemed complete MDRC",
            tags: ["create"],
            steps: function () {
                var i = 1;
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
                steps.createDealContractPeriod.itAddDeemedCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.editDealContractPeriod.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);
                steps.editDealContractPeriod.validateFirstDeemedCompleteMdrcTitle();
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(i);
                steps.editDealContractPeriod.validateMdrcShortfallLabelValueI(i);
                steps.editDealContractPeriod.validateTheMdrcShortfallTextValueI(i);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Create a deal with complete MDRC",
            tags: ['create', 'view'],
            steps: function () {
                var i = 1;
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
                steps.createDealContractPeriod.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.editDealContractPeriod.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);
                steps.editDealContractPeriod.validateFirstCompleteMdrcTitle();
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(i);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Create a deal with multiple types of MDRC",
            tags: ['create', 'view'],
            steps: function () {
                var i = 1;
                var j = 2;
                var k = 3;
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
                steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
                steps.createDealContractPeriod.itAddDeemedCompleteMdrcContractPeriod();
                steps.createDealContractPeriod.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.editDealContractPeriod.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);
                //validate incomplete MDRC
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(i, "Incomplete");
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
                //validate deemed complete MDRC
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(j, "Deemed Complete");
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(j);
                steps.editDealContractPeriod.validateMdrcShortfallLabelValueI(j);
                steps.editDealContractPeriod.validateTheMdrcShortfallTextValueI(j);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(j);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(j);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(j);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(j);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(j);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(j);
                //validate complete MDRC
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(k, "Complete");
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(k);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(k);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(k);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(k);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(k);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(k);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(k);
            }
        },
        {
            name: "Edit a deal with deemed complete MDRC into an incomplete MDRC",
            tags: ["'edit"],
            steps: function () {
                var i = 1;
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
                steps.createDealContractPeriod.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.editDealContractPeriod.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);
                steps.editDealContractPeriod.validateFirstCompleteMdrcTitle();
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(i);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
                steps.editDealContractPeriod.itEditIncompleteMdrcContractPeriod(i);
                steps.editDealContractPeriod.validateFirstIncompleteMdrcTitle();
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Edit a deal with incomplete MDRC into a deemed complete MDRC",
            tags: ["edit"],
            steps: function () {
                var i = 1;
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
                steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.editDealContractPeriod.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);
                steps.editDealContractPeriod.validateFirstIncompleteMdrcTitle();
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
                steps.editDealContractPeriod.itEditDeemedCompleteMdrcContractPeriod(i);
                steps.editDealContractPeriod.validateFirstDeemedCompleteMdrcTitle();
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(i);
                steps.editDealContractPeriod.validateMdrcShortfallLabelValueI(i);
                steps.editDealContractPeriod.validateTheMdrcShortfallTextValueI(i);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);
            }
        },
        {
            name: "Edit a deal with multiple types of MDRC",
            tags: ['edit'],
            steps: function () {
                var i = 1;
                var j = 2;
                var k = 3;
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.base.scrollIntoView("Add MDRC link", pages.createDealContractPeriod.elems.addMdrcLink);
                steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
                steps.createDealContractPeriod.itAddDeemedCompleteMdrcContractPeriod();
                steps.createDealContractPeriod.itAddCompleteMdrcContractPeriod();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.editDealContractPeriod.waitForMdrcToBeLoaded();
                steps.base.scrollIntoView("Mdrc", pages.editDealContractPeriod.elems.mdrcTitle);

                //validate incomplete MDRC
                steps.base.scrollIntoView("Edit first MDRC form ", element(by.css("div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1)")));
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(i, "Incomplete");
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);

                //validate deemed complete MDRC
                steps.base.scrollIntoView("Second MDRC form", element(By.css("div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(2)")));
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(j, "Deemed Complete");
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(j);
                steps.editDealContractPeriod.validateMdrcShortfallLabelValueI(j);
                steps.editDealContractPeriod.validateTheMdrcShortfallTextValueI(j);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(j);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(j);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(j);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(j);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(j);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(j);

                //validate complete MDRC
                steps.base.scrollIntoView("Third MDRC form", element(By.css("div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(3)")));
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(k, "Complete");
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(k);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(k);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(k);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(k);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(k);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(k);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(k);

                //edit incomplete MDRC first form into complete MDRC
                steps.base.scrollIntoView("MDRC title", pages.editDealContractPeriod.elems.mdrcTitle);
                steps.editDealContractPeriod.itEditCompleteMdrcContractPeriod(i);
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(i, "Complete");
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(i);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(i);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(i);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(i);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(i);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(i);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(i);

                //edit deemed complete MDRC second form into incomplete MDRC
                steps.base.scrollIntoView("Second MDRC form", element(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(2) h3.contract-period-header.ng-binding")));
                steps.editDealContractPeriod.itEditIncompleteMdrcContractPeriod(j);
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(j, "Incomplete");
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(j);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(j);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(j);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(j);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(j);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(j);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(j);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(j);

                //edit complete MDRC third form into deemed complete MDRC
                steps.base.scrollIntoView("Third MDRC form", element(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(3) h3.contract-period-header.ng-binding")));
                steps.editDealContractPeriod.itEditDeemedCompleteMdrcContractPeriod(k);
                steps.editDealContractPeriod.validateITypeOfMdrcTitle(k, "Deemed Complete");
                steps.editDealContractPeriod.validateMdrcDateCompletedLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcDateCompletedTextValueI(k);
                steps.editDealContractPeriod.validateMdrcShortfallLabelValueI(k);
                steps.editDealContractPeriod.validateTheMdrcShortfallTextValueI(k);
                steps.editDealContractPeriod.validateMdrcIMinimumLabelValue(k);
                steps.editDealContractPeriod.validateMdrcIMinimumTextValue(k);
                steps.editDealContractPeriod.validateMdrcICommercialReleaseLabelValue(k);
                steps.editDealContractPeriod.validateMdrcQuantityForCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcMajorTerritoryTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcTerritoriesListTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcLabelsTextCommercialReleaseTextValueI(k);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryMechanicalRateLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcMinimumStatutoryTextValueI(k);
                steps.editDealContractPeriod.validateMdrcInNoEventLessThanTextValueI(k);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleLabelValueI(k);
                steps.editDealContractPeriod.validateMdrcDeliveryScheduleTextValueI(k);
            }
        }
];
"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_contract_period");


if (steps.edit_deal_contract_period === undefined) {
    steps.edit_deal_contract_period = {

        waitForMdrcToBeLoaded: function () {
            it("Wait for MDRC to be loaded", function () {
                browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_contract_period.elems.mdrcTitle));
            });
        },

        validateFirstIncompleteMdrcTitle: function () {
            it("Validate incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheFirstIncompleteMdrcTitle();
            });
        },

        validateFirstDeemedCompleteMdrcTitle: function () {
            it("Validate incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheFirstDeemedCompleteMdrcTitle();
            });
        },

        validateFirstCompleteMdrcTitle: function () {
            it("Validate incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheFirstCompleteMdrcTitle();
            });
        },

        validateITypeOfMdrcTitle: function (i, type) {
            it("Validate the I incomplete MDRC title ", function () {
                pages.edit_deal_contract_period.validateTheIMdrcTitle(i, type);
            });
        },

        validateMdrcIMinimumLabelValue: function (i) {
            it("Validate the I minimum label and text ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumLabelValueI(i);
            });
        },

        validateMdrcIMinimumTextValue: function (i) {
            it("Validate the I minimum right text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumTextValueI(i);
            });
        },

        validateMdrcICommercialReleaseLabelValue: function (i) {
            it("Validate the I commercial release label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcCommercialReleaseLabelValueI(i);
            });
        },

        validateMdrcQuantityForCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC quantity for commercial release text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcQuantityForCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcMajorTerritoryTextCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC major territory text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMajorTerritoryTextCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcTerritoriesListTextCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC territories list text ", function () {
                pages.edit_deal_contract_period.validateTheMdrcTerritoriesListTextCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcLabelsTextCommercialReleaseTextValueI: function (i) {
            it("Validate the I MDRC labels text commercial release text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcLabelsTextCommercialReleaseTextValueI(i);
            });
        },

        validateMdrcMinimumStatutoryMechanicalRateLabelValueI: function (i) {
            it("Validate the I MDRC minimum statutory mechanical rate label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumStatutoryMechanicalRateLabelValueI(i);
            });
        },

        validateMdrcMinimumStatutoryTextValueI: function (i) {
            it("Validate the I MDRC minimum statutory text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcMinimumStatutoryTextValueI(i);
            });
        },

        validateMdrcInNoEventLessThanTextValueI: function (i) {
            it("Validate the I MDRC in no event less than text value", function () {
                pages.edit_deal_contract_period.validateTheMdrcInNoEventLessThanTextValueI(i);
            });
        },

        validateMdrcDeliveryScheduleLabelValueI: function (i) {
            it("Validate the I MDRC delivery schedule label", function () {
                pages.edit_deal_contract_period.validateTheMdrcDeliveryScheduleLabelValueI(i);
            });
        },

        validateMdrcDeliveryScheduleTextValueI: function (i) {
            it("Validate the I MDRC delivery schedule ", function () {
                pages.edit_deal_contract_period.validateTheMdrcDeliveryScheduleTextValueI(i);
            });
        },

        validateMdrcDateCompletedLabelValueI: function (i) {
            it("Validate the I MDRC date completed label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcDateCompletedLabelValueI(i);
            });
        },

        validateMdrcDateCompletedTextValueI: function (i) {
            it("Validate the I MDRC date completed text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcDateCompletedTextValueI(i);
            });
        },

        validateMdrcShortfallLabelValueI: function (i) {
            it("Validate the I MDRC shortfall label value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcShortfallLabelValueI(i);
            });
        },

        validateTheMdrcShortfallTextValueI: function (i) {
            it("Validate the I MDRC shortfall text value ", function () {
                pages.edit_deal_contract_period.validateTheMdrcShortfallTextValueI(i);
            });
        }


    };
}

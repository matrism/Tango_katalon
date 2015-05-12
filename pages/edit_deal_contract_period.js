"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.edit_deal_contract_period === undefined) {
    pages.edit_deal_contract_period = new ftf.pageObject({

        locators: {
            //mdrc
            mdrcTitle: {css: "div[data-ng-form='cpEditForm'] div.section-header-borderless.mdrc"},
            firstMdrcForm: {css: "div.mdrc-list.minimum-delivery div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1)"},
            editFirstMdrcIcon: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) button.mdrc-edit-pencil i.fa.fa-pencil"},
            firstMdrcTitle: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) h3.contract-period-header.ng-binding"},
            firstMdrcMinimumLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.min_new_work_quantity || mdrcs.min_new_work_quantity_percent || mdrc.work_percent']"},
            firstMdrcMinimumText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.work_percent']"},
            firstCommercialReleaseLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.com_release_major_territory != 0 || mdrc.commercial_release_quantity || mdrc.release_territories.territories.length > 0'] div p"},
            firstQuantityForCommercialReleaseText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.commercial_release_quantity']"},
            firstMajorTerritoryText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.com_release_major_territory != 0']"},
            firstTerritoriesListText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.release_territories.territories != 0']"},
            firstLabelsText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.labels != 0']"},
            firstMinimumStatutoryMechanicalRateLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.min_stat_mech_rate_percent'] p"},
            firstMinimumStatutoryText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.min_stat_mech_rate_percent'] div.span3 > strong"},
            firstInNoEventLessThanText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.no_less_than']"},
            firstDeliveryScheduleLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] p"},
            firstDeliveryScheduleText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] div.span3"},
            firstDateLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] p"},
            firstDateText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] div.span3"},
            firstShortfallLabel: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] p"},
            firstShortfallText: {css: "div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(1) div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] div.span3"}
        },

        validateTheFirstIncompleteMdrcTitle: function () {
                pages.edit_deal_contract_period.elems.firstMdrcTitle.getText().
                    then(function (promise) {
                        console.log("Mdrc title  is: " + promise);
                        expect(promise).toContain("Works");
                        expect(promise).toContain("Incomplete");
                    });
        },

        validateTheFirstDeemedCompleteMdrcTitle: function () {
                pages.edit_deal_contract_period.elems.firstMdrcTitle.getText().
                    then(function (promise) {
                        console.log("Mdrc title  is: " + promise);
                        expect(promise).toContain("Works");
                        expect(promise).toContain("Deemed Complete");
                    });
        },

        validateTheFirstCompleteMdrcTitle: function () {
                pages.edit_deal_contract_period.elems.firstMdrcTitle.getText().
                    then(function (promise) {
                        console.log("Mdrc title  is: " + promise);
                        expect(promise).toContain("Works");
                        expect(promise).toContain("Complete");
                    });
        },

        validateTheIMdrcTitle: function (i, type) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") h3.contract-period-header.ng-binding")).getText().
                then(function (promise) {
                    console.log("Mdrc title  is: " + promise);
                    expect(promise).toContain("Works");
                    expect(promise).toContain(type);
                });
        },

        validateTheMdrcMinimumLabelValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.min_new_work_quantity || mdrcs.min_new_work_quantity_percent || mdrc.work_percent']")).getText().
                then(function (promise) {
                    console.log("MDRC minimum label text value is " + promise);
                    expect(promise).toEqual("Minimums:");
                });
        },

        validateTheMdrcMinimumTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.work_percent']")).getText().
                then(function (promise) {
                    console.log("MDRC minimum right text value is " + promise);
                    expect(promise).toContain("minimum Work contribution");
                });
        },

        validateTheMdrcCommercialReleaseLabelValueI: function(i){
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.com_release_major_territory != 0 || mdrc.commercial_release_quantity || mdrc.release_territories.territories.length > 0'] div p")).getText().
                then(function (promise) {
                    console.log("MDRC commercial release label is " + promise);
                    expect(promise).toEqual("Commercial Release:");
                });
        },

        validateTheMdrcQuantityForCommercialReleaseTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.commercial_release_quantity']")).getText().
                then(function (promise) {
                    console.log("MDRC quantity for Commercial Release right text value is " + promise);
                    expect(promise).toContain("Works are required for commercial release");

                });
        },

        validateTheMdrcMajorTerritoryTextCommercialReleaseTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.com_release_major_territory != 0']")).getText().
                then(function (promise) {
                    console.log("MDRC major territories Commercial Release right text value is " + promise);
                    expect(promise).toContain("Required in");
                    expect(promise).toContain("major territory");
                });
        },

        validateTheMdrcTerritoriesListTextCommercialReleaseTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.release_territories.territories != 0']")).getText().
                then(function (promise) {
                    console.log("MDRC territories list Commercial Release right text value is " + promise);
                    expect(promise).toContain("Countries");
                });
        },

        validateTheMdrcLabelsTextCommercialReleaseTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.labels != 0']")).getText().
                then(function (promise) {
                    console.log("MDRC labels Commercial Release right text value is " + promise);
                    expect(promise).toContain("Approved labels:")
                });
        },

        validateTheMdrcMinimumStatutoryMechanicalRateLabelValueI: function(i){
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.min_stat_mech_rate_percent'] p")).getText().
                then(function (promise) {
                    console.log("MDRC minimum statutory mechanical rate label is " + promise);
                    expect(promise).toEqual("Minimum Statutory\nMechanical Rate:");
                });
        },

        validateTheMdrcMinimumStatutoryTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.min_stat_mech_rate_percent'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC minimum statutory right text value is " + promise);
                    expect(promise).toContain("allowed");
                });
        },

        validateTheMdrcInNoEventLessThanTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.no_less_than']")).getText().
                then(function (promise) {
                    console.log("MDRC in no event less than right text value is " + promise);
                    expect(promise).toContain("In No Event Less Than");
                });
        },

        validateTheMdrcDeliveryScheduleLabelValueI: function(i){
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] p")).getText().
                then(function (promise) {
                    console.log("MDRC delivery schedule label is " + promise);
                    expect(promise).toEqual("Delivery Schedule:");
                });
        },

        validateTheMdrcDeliveryScheduleTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='mdrc.delivery_schedule.frequency && mdrc.delivery_schedule.quantity'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC delivery schedule right text value is " + promise);
                    expect(promise).toContain("works");
                    expect(promise).toContain("every");
                    expect(promise).toContain("weeks");
                });
        },

        validateTheMdrcDateCompletedLabelValueI: function(i){
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] p")).getText().
                then(function (promise) {
                    console.log("MDRC date completed label is " + promise);
                    expect(promise).toEqual("Date:");
                });
        },

        validateTheMdrcDateCompletedTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.completed_date && (mdrc.deemed_complete || !mdrc.deemed_complete))'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC date completed text value is " + promise);
                    expect(promise).not.toEqual("");
                });
        },

        validateTheMdrcShortfallLabelValueI: function(i){
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] p")).getText().
                then(function (promise) {
                    console.log("MDRC shortfall label is " + promise);
                    expect(promise).toEqual("Shortfall:");
                });
        },

        validateTheMdrcShortfallTextValueI : function(i) {
            browser.driver.findElement(By.css("div[data-ng-repeat='mdrc in form.terms.activeCp.minimum_delivery_commitments']:nth-child(" + i + ") div[data-ng-show='(mdrc.deemed_complete) && mdrc.shortfall'] div.span3")).getText().
                then(function (promise) {
                    console.log("MDRC shortfall text value is " + promise);
                    expect(promise).toContain("works forgiven");
                });
        }
    });
}
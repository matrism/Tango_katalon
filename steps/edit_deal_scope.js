"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_scope");

if (steps.edit_deal_scope === undefined) {
    steps.edit_deal_scope = {

        selectScope1: function () {
            it("Select scope 1", function () {
                pages.edit_deal_scope.clickOnScope1();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        validatePublisherSharesTitle: function () {
            it("Validate the publisher shares set title ", function () {
                pages.edit_deal_scope.validateThePublisherSharesTitle();
            });
        },

        validatePublisherSharesHeaderTableTitle: function () {
            it("Validate the publisher shares header table title ", function () {
                pages.edit_deal_scope.validateThePublisherSharesHeaderTableTitle();
            });
        },

        editPublisherSharesSet: function () {
            it("Edit the publisher shares set area ", function () {
                pages.edit_deal_scope.editThePublisherSharesSet();
                pages.edit_deal_scope.waitForAjax();
            });
        },

        clickAddSocietyAgreementNumberLinkPublisherSharesSetChainI: function (i) {
            it("Click on add society agreement number link publisher shares set chain i", function () {
                pages.edit_deal_scope.clickOnAddSocietyAgreementNumberLinkPublisherSharesSetChainI(i);
            });
        },

        validatePublisherSharesSetAddSocAgreemNumberTextChainI: function (i) {
            it("Validate the publisher shares set add society agreement number text chain i ", function (i) {
                pages.edit_deal_scope.validateThePublisherSharesSetAddSocAgreemNumberTextChainI(i)
            });
        },

        validatePublisherSharesSetPublisherNameEOrPAChainI: function (i) {
            it("Validate the publisher shares set publisher name E or PA chain i ", function () {
                pages.edit_deal_scope.validateThePublisherSharesSetPublisherNameEOrPAChainI(i);
            });
        },

        validatePublisherSharesSetPublisherNameAMChainI: function (i) {
            it("Validate the publisher shares set publisher name AM chain i", function () {
                pages.edit_deal_scope.validateThePublisherSharesSetPublisherNameAMChainI(i);
            });
        },

        validatePublisherSharesSetSubtotalChainI: function (i) {
            it("Validate the publisher shares set subtotal chain i ", function () {
                pages.edit_deal_scope.validateThePublisherSharesSetSubtotalChainI(i);
            });
        }


    };
}
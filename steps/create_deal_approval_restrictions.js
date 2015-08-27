"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_approval_restrictions");
require(steps_path + "create_deal_approval_restrictions");

if (steps.create_deal_approval_restrictions === undefined) {
    steps.create_deal_approval_restrictions = {

        clickOnFinancialNoApprovalRequired: function () {
            it("Click on the financial no approval required ", function () {
                pages.create_deal_approval_restrictions.clickOnTheFinancialNoApprovalRequired();
            });
        },

        clickOnLicensingRestricted:function(){
            it("Click on the licensing restricted ", function(){
               pages.create_deal_approval_restrictions.clickOnTheLicensingRestricted();
            });
        },

        clickOnAddExternalContactOnMissingApprovalModalDialog: function(){
            it("Click on the add external contact on missing approval modal dialog ", function () {
                pages.create_deal_approval_restrictions.clickOnTheAddExternalContactOnMissingApprovalModalDialog();
            });
        }
    }
}
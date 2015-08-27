"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;
require(pages_path + "base");
if (pages.create_deal_approval_restrictions === undefined) {
    pages.create_deal_approval_restrictions = new ftf.pageObject({
        locators: {
            financialNoApprovalRequired: {css: "fieldset[data-tg-view-nav-block='Financial'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) a[data-ng-click='AR.setApprovalStateSelected(category, AR.constants.STATE_NO_APPROVAL_REQUIRED)']"},
            licensingRestricted: {css: "fieldset[data-tg-view-nav-block='Licensing'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(4) a[data-ng-click='AR.setApprovalStateSelected(category, AR.constants.STATE_RESTRICTED)']"}
        },

        clickOnTheFinancialNoApprovalRequired: function () {
            pages.create_deal_approval_restrictions.elems.financialNoApprovalRequired.click();
            pages.create_deal_approval_restrictions.waitForAjax();
        },


        clickOnTheLicensingRestricted: function(){
            pages.create_deal_approval_restrictions.elems.licensingRestricted.click();
            pages.create_deal_approval_restrictions.waitForAjax();
        },

        clickOnTheAddExternalContactOnMissingApprovalModalDialog: function(){
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
            browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
            browser.driver.findElement(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
        }
    })
}
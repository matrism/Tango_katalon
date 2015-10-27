"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createDealApprovalRestrictions === undefined) {
    pages.createDealApprovalRestrictions = new ftf.pageObject({
        locators: {
            financialNoApprovalRequired: {css: "fieldset[data-tg-view-nav-block='Financial'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) a[data-ng-click='AR.setApprovalStateSelected(category, AR.constants.STATE_NO_APPROVAL_REQUIRED)']"},
            licensingRestricted: {css: "fieldset[data-tg-view-nav-block='Licensing'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(4) a[data-ng-click='AR.setApprovalStateSelected(category, AR.constants.STATE_RESTRICTED)']"}
        },

        clickOnTheFinancialNoApprovalRequired: function () {
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealApprovalRestrictions.elems.financialNoApprovalRequired));
            pages.createDealApprovalRestrictions.elems.financialNoApprovalRequired.click();
            pages.createDealApprovalRestrictions.waitForAjax();
        },


        clickOnTheLicensingRestricted: function(){
            browser.wait(ExpectedConditions.elementToBeClickable(pages.createDealApprovalRestrictions.elems.licensingRestricted));
            pages.createDealApprovalRestrictions.elems.licensingRestricted.click();
            pages.createDealApprovalRestrictions.waitForAjax();
        },

        clickOnTheAddExternalContactOnMissingApprovalModalDialog: function(){
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
            browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
            browser.driver.findElement(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
        }
    })
}
"use strict";

var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var pages_path = _tf_config._system_.path_to_pages;

if (pages.createDealApprovalRestrictions === undefined) {
    pages.createDealApprovalRestrictions = new ftf.pageObject({
        locators: {
            financialNoApprovalRequired: {css: "div[ng-repeat='dealUsageType in view.dealUsageTypes.$filter(filterCategory) track by dealUsageType.id'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) a[ng-click='tgModularEditModel.selectConsentStatus(CONSENT_STATUSES.NO_APPROVAL_REQUIRED)']"},
            licensingRestricted: {css: "div[ng-repeat='dealUsageType in view.dealUsageTypes.$filter(filterCategory) track by dealUsageType.id'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) a[ng-click='tgModularEditModel.selectConsentStatus(CONSENT_STATUSES.NO_APPROVAL_REQUIRED)']"}
        },

        clickOnTheFinancialNoApprovalRequired: function () {
            var element=$$("div[ng-repeat='dealUsageType in view.dealUsageTypes.$filter(filterCategory) track by dealUsageType.id'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) a[ng-click='tgModularEditModel.selectConsentStatus(CONSENT_STATUSES.NO_APPROVAL_REQUIRED)']").get(0);
                //element.click();
                browser.wait(ExpectedConditions.elementToBeClickable(element));
                element.click();
                browser.sleep(1000);
                //element.waitForAjax();

        },


        clickOnTheLicensingRestricted: function(){
            var element=$$("div[ng-repeat='dealUsageType in view.dealUsageTypes.$filter(filterCategory) track by dealUsageType.id'] table tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) a[ng-click='tgModularEditModel.selectConsentStatus(CONSENT_STATUSES.NO_APPROVAL_REQUIRED)']").get(1);
            //element.click();
            browser.wait(ExpectedConditions.elementToBeClickable(element));
            element.click();
            browser.sleep(1000);
            //element..waitForAjax();
        },

        clickOnTheAddExternalContactOnMissingApprovalModalDialog: function(){
            browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
            browser.wait(ExpectedConditions.elementToBeClickable(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
            browser.driver.findElement(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)")).click();
            browser.wait(ExpectedConditions.invisibilityOf(element(by.css("div.modal-dialog.ng-scope div.modal-footer button.btn:nth-child(2)"))));
        }
    })
}
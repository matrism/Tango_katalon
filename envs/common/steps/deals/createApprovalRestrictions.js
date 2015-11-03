"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealApprovalRestrictions = exports;

exports.clickOnFinancialNoApprovalRequired = function () {
    it("Click on the financial no approval required ", function () {
        pages.createDealApprovalRestrictions.clickOnTheFinancialNoApprovalRequired();
    });
};

exports.clickOnLicensingRestricted =function(){
    it("Click on the licensing restricted ", function(){
        pages.createDealApprovalRestrictions.clickOnTheLicensingRestricted();
    });
};

exports.clickOnAddExternalContactOnMissingApprovalModalDialog = function () {
    it("Click on the add external contact on missing approval modal dialog ", function () {
        pages.createDealApprovalRestrictions.clickOnTheAddExternalContactOnMissingApprovalModalDialog();
    });
};
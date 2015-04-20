"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "edit_deal_general");
module.exports = steps.edit_deal_general = {};


module.exports.returnAndCheckInternalContactsTitle = function () {
    it("Return internal contacts ", function () {
        element(By.xpath("//*[@data-ng-show='showSummary']//h2[contains(text(), 'Internal Contacts')]")).getText().
            then(function (promise) {
                console.log("Internal Contacts title is: " + promise);
                expect(promise).toEqual("INTERNAL CONTACTS");
            });
    });
};

module.exports.editInternalContactsArea = function () {
    it("Edit internal contacts area ", function () {
        pages.edit_deal_general.clickOnEditInternalContactsArea();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditIcon()));
        pages.edit_deal_general.clickOnEditIconInternalContacts();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
    });
};

module.exports.returnAndCheckInternalContactsHeaderTable = function () {
    it("Return internal contacts ", function () {
        element(By.xpath("//*[@class='view-internal-contact ng-scope']//tbody//tr[1]")).getText().
            then(function (promise) {
                console.log("Internal Contacts header table is: " + promise);
                expect(promise).toEqual("Contact Name Role Email");
            });
    });
};

module.exports.returnAndCheckInternalContactsValues = function () {
    it("Return internal contacts values added ", function () {
        element(By.xpath("//*[@class='view-internal-contact ng-scope']//tbody//tr[2]")).getText().
            then(function (promise) {
                console.log("Internal Contacts values added: " + promise);
                expect(promise).not.toEqual("");
            });
    });
};

module.exports.addInternalContactsLink = function () {
    it("Add internal contacts on edit mode", function () {
        pages.edit_deal_general.clickOnAddInternalContactsLink();
        browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.internalContactsEditInputField()));
    });
};


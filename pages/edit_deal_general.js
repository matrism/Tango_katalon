"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
module.exports = pages.edit_deal_general = new ftf.pageObject({});

module.exports.internalContactTitle = function () {
    return element(By.xpath("//*[@data-ng-show='showSummary']//h2[contains(text(), 'Internal Contacts')]"));
};

module.exports.internalContactsArea = function () {
    return element(By.css("div[data-tg-modular-edit='internalContacts']"));
};

module.exports.internalContactTableData = function () {
    return element(By.css("table.view-internal-contact ng-scope tbody tr"));
};

module.exports.internalContactsEditIcon = function () {
    return element(By.xpath("//*[@data-tg-modular-edit='internalContacts']//div//button/i[@class='fa fa-pencil']"));
};

module.exports.internalContactsEditInputField = function () {
    return element(By.css("div[data-ng-model='internalContact.contact'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.addInternalContactsLink = function () {
    return element(By.css("button[data-ng-click='modularEdit.internalContacts.switchToView('edit');']"))
};

module.exports.saveEditInternalContactsButton = function () {
    return element(By.css("div[data-tg-modular-edit='internalContacts'] div div  div button[data-ng-click='save()']"))
};

module.exports.cancelEditInternalContactsButton = function () {
    return element(By.css("div[data-tg-modular-edit='internalContacts'] div div  div button.btn btn-cancel ng-binding"));
};

//methods
module.exports.clickOnEditInternalContactsArea = function () {
    pages.edit_deal_general.internalContactsArea().click();
};


module.exports.clickOnEditIconInternalContacts = function () {
    pages.edit_deal_general.internalContactsEditIcon().click();
};

module.exports.clickOnAddInternalContactsLink = function () {
    pages.edit_deal_general.addInternalContactsLink().click();
};

module.exports.clickOnSaveEditInternalContacts = function () {
    pages.edit_deal_general.saveEditInternalContactsButton().click();
};

module.exports.clickOnCancelEditInternalContacts = function () {
    pages.edit_deal_general.cancelEditInternalContactsButton().click();
};


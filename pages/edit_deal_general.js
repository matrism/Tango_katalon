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
    return element(By.css("div.add-new-button.ng-scope button.btn.btn-link"))
};

module.exports.saveEditInternalContactsButton = function () {
    return element(By.xpath("//*[@data-tg-modular-edit='internalContacts']//button[@data-ng-click='save()']"));
  };

module.exports.cancelEditInternalContactsButton = function () {
    return element(By.css("div[data-tg-modular-edit='internalContacts'] div div div button.btn btn-cancel ng-binding"));
};

module.exports.editInternalContactsInputField = function () {
    return element(By.css("div[data-ng-model='internalContact.contact'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.editInternalContactsDropDownData = function () {
    return element(By.css("div.ng-scope ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"));
};

module.exports.editInternalContactRoleInputField = function () {
    return element(By.css("div[data-ng-model='internalContact.roles'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};

module.exports.removeInternalContactRoleInputField = function () {
    return element(By.css("div[data-ng-model='internalContact.roles'] div div[ng-class='tgTypeaheadWrapClass'] span[ng-click='!$isDisabled() && $removeTag($tag)']"));
};

module.exports.removeInternalContactsElement = function(){
    return element(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(1) button[data-ng-click='removeInternalContact(internalContacts.contacts, internalContact)']"));
};

module.exports.modalDialog = function(){
    return element(By.css("div.modal-dialog ng-scope"));
};

module.exports.yesModalDialog = function(){
    return element(By.css("div.modal-footer button[data-ng-click='ok()']"));
};

module.exports.noModalDialog = function(){
    return element(By.css("div.modal-footer button[data-ng-click='cancel()']"));
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

module.exports.editInternalContactsField = function (internal_contact) {
    pages.edit_deal_general.editInternalContactsInputField().clear();
    pages.edit_deal_general.editInternalContactsInputField().sendKeys(internal_contact);
};

module.exports.selectEditRandomInternalContactsFromDropDown = function () {
    var desiredOption;
    browser.wait(ExpectedConditions.visibilityOf(pages.edit_deal_general.editInternalContactsDropDownData()));
    browser.driver.findElements(By.xpath("//*[@class='ng-scope']//ul[@class='tg-typeahead__suggestions-group']//li[@class='tg-typeahead__suggestions-group-item ng-scope']"))
        .then(function (options) {
            var randomNumber = Math.floor((Math.random() * options.length));
            options[randomNumber].click();
        })
};

module.exports.clickEditInternalContactsRole = function () {
    pages.edit_deal_general.editInternalContactRoleInputField().click();
};

module.exports.editTheIRowInternalContactField = function (i) {
    var element = browser.findElement(By.xpath("//*[@data-tg-modular-view='edit']/div[1]/div[" + i + "]/div[1]/div[@data-ng-model='internalContact.contact']/div/div/div[1]/div/div[2]/input[@ng-model='$term']"));
    element.clear();
    element.sendKeys("a");
};

module.exports.clickEditInternalContactsRoleRowI = function (i) {
    var element= browser.findElement(By.xpath("//*[@data-tg-modular-view='edit']/div[1]/div[" + i + "]/div[2]/div[@data-ng-model='internalContact.roles']/div/div/div[2]/div/div[2]/input[@ng-model='$term']"));
    element.clear();
    element.click();
};

module.exports.removeEditInternalContactsRoleRowI = function (i) {
    var element= browser.findElement(By.xpath("//*[@data-tg-modular-view='edit']/div[1]/div[" + i + "]/div[2]/div[@data-ng-model='internalContact.roles']/div/div/div[1]/div/div/div/div/span[@ng-click='!$isDisabled() && $removeTag($tag)']"));
    element.click();
};


module.exports.removeEditInternalContactRole = function(){
    pages.edit_deal_general.removeInternalContactRoleInputField().click();
};

module.exports.removeEditInternalContactsRow = function () {
    pages.edit_deal_general.removeInternalContactsElement().click();
};

module.exports.removeEditInternalContactsRowI = function (i) {
    var element = browser.findElement(By.css("div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") button[data-ng-click='removeInternalContact(internalContacts.contacts, internalContact)']"));
    element.click();
};

module.exports.clickOnYesModalDialog = function(){
    pages.edit_deal_general.yesModalDialog().click();
};

module.exports.clickOnNoModalDialog = function(){
    pages.edit_deal_general.noModalDialog().click();
};
//*[@data-tg-modular-edit='internalContacts']/div[2]/div[1]/div[" + i + "]/button[@data-ng-click='removeInternalContact(internalContacts.contacts, internalContact)']
//  div[data-tg-modular-edit='internalContacts'] div div div:nth-child(" + i + ") button[data-ng-click='removeInternalContact(internalContacts.contacts, internalContact)']

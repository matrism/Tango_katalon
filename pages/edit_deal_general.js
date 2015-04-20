"use strict";
var _ = require("lodash");
var ExpectedConditions = protractor.ExpectedConditions;
var randomId = require("../helpers/randomId");
var pages_path = _tf_config._system_.path_to_pages;
module.exports = pages.edit_deal_general = new ftf.pageObject({
});

module.exports.internalContactTitle = function(){
    return element(By.xpath("//*[@data-ng-show='showSummary']//h2[contains(text(), 'Internal Contacts')]"));
};

module.exports.internalContactsArea = function() {
    return element(By.css("div[data-tg-modular-edit='internalContacts']"));
};

module.exports.internalContactsEditIcon = function(){
    return element(By.xpath("//*[@data-tg-modular-edit='internalContacts']//div//button/i[@class='fa fa-pencil']"));
};

module.exports.internalContactsEditInputField=function(){
    return element(By.css("div[data-ng-model='internalContact.contact'] div[ng-class='tgTypeaheadWrapClass'] input[ng-model='$term']"));
};


//methods
module.exports.clickOnEditInternalContactsArea = function(){
    pages.edit_deal_general.internalContactsArea().click();
};


module.exports.clickOnEditIconInternalContacts = function(){
    pages.edit_deal_general.internalContactsEditIcon().click();
};


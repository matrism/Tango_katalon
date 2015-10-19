//
//var pages_path = _tf_config._system_.path_to_pages,

//

//
//require(pages_path + '/base');
//"use strict";
//var _ = require("lodash");
//var promise = protractor.promise;
//var ExpectedConditions = protractor.ExpectedConditions;
//pages.royaltyRates = new ftf.pageObject({
//    url: _tf_config.urls.app_url + "#/create/deal",
//    locators: {},
'use strict';

var _ = require('lodash'),
    pph = require('../../../../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

if (pages.newPerson === undefined) {


    pages.newPerson = new ftf.pageObject({
        url: _tf_config.urls.app_url + "#/create/person",
        locators: {

        },

    waitForPageToBeShown: function () {


        browser.wait(ExpectedConditions.visibilityOf(this.lastNameInput()));
    },
    open : function() {
    ftf.pageObject.prototype.open.call(this);
    return pages.base.waitForAjax();
    },




creditsNameInput : function() {
    return $("#primaryCreditsName");
},
dateOfDeathYear : function() {
    return element(by.model('date.year'));
},
dateOfDeathMonth : function() {
    return element(by.model('date.month'));
},
dateOfDeathDay : function() {
    return element(by.model('date.day'));
},
cityInput : function () {
    return $("#city-0");
},
regionInput : function () {
    return $("#region-0");
},
postalCodeInput : function () {
    return $("#zipCode-0");
},

addAlternativeNameButton : function() {
    return element(by.cssContainingText('button', 'Add Alternative Name'));
},
addAddressButton : function() {
    return element(by.cssContainingText('button', 'Add Address'));
},
addPhoneButton : function() {
    return element(by.cssContainingText('button', 'Add Phone'));
},
addEmailButton : function() {
    return element(by.cssContainingText('button', 'Add Email'));
},
addAlternativeName : function() {
    var element = this.addAlternativeNameButton();
    pages.base.scrollIntoView(element);
    return element.click();
},
addAddress : function() {
    var element = this.addAddressButton();
    pages.base.scrollIntoView(element);
    return element.click();
},
addPhone : function() {
    var element = this.addPhoneButton();
    pages.base.scrollIntoView(element);
    return element.click();
},
addEmail : function() {
    var element = this.addEmailButton();
    pages.base.scrollIntoView(element);
    return element.click();
},




pageFooter : function() {
    return $('#FORM-CONTROLS');
},
doneButton : function() {
    return $(".btn.btn-primary.ng-scope");
},

expectDoneButtonToBeEnabled : function() {
    expect(pph.matchesCssSelector(this.doneButton(), '.disabled')).toBeFalsy();
},

save : function() {

    // console.log(JSON.stringify(hash.personSlots, null, 4));
    this.expectDoneButtonToBeEnabled();
    this.doneButton().click();
    return pages.base.waitForAjax();
},

validateSaveRedirection : function() {
    expect(browser.getCurrentUrl()).toMatch(/#\/person\/.+$/);
},

typeIntoRegionInput : function(value) {

    return this.regionInput().sendKeys(value);
},
typeIntoPostalCodeInput : function(value) {

    return this.postalCodeInput().sendKeys(value);
},
typeIntoCityInput : function(value) {

    return this.cityInput().sendKeys(value);
},
typeCreditsName : function(value) {
    return this.creditsNameInput().sendKeys(value);
},

typeDateOfDeath : function(year,month,day)
{
    this.dateOfDeathYear().sendKeys(year);
    this.dateOfDeathMonth().sendKeys(month);
    return   this.dateOfDeathDay().sendKeys(day);

}

    });
}

module.exports = pages.newPerson;

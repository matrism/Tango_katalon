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
"use strict";
var _ = require("lodash"),
    pph = require('../helpers/pph');
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
if (pages.newPerson === undefined) {


    var pages_path = _tf_config._system_.path_to_pages;
    require(pages_path + "base");

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


firstNameInput : function() {
    return element(by.model('person.master_data.primary_name.first_name'));
},

lastNameInput : function() {

    return element(by.model('modularEditModels.model.lastName'));
},



alternativeLastNameInput : function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.last_name')
    );
},
alternativeCreditsNameInput : function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.credits_name')
    );
},
alternativeSuisaIpiInput: function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.suisa_ipi_number')
    );
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

addressOneInput : function () {

    return $("#address1-0");
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
phoneInput : function () {

    return element(by.model('phone.number'));
},
emailInput : function () {
    return element(by.model('email.address'));
},










typeFirstName : function(value) {

    var element = this.firstNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},



typeLastName : function(value) {
//console.log("ATATA");
//    return "atata";
    var element = this.lastNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},


presentationNameInput : function() {
    return element(by.model('person.master_data.primary_name.presentation_name'));
},

typePresentationName : function(value) {
    var element = this.presentationNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},

addAlternativeNameButton : function() {
    return element(by.cssContainingText('button', 'Add Alternative Name'));
},


clickAddAlternativeName : function() {
    var element = this.addAlternativeNameButton();
    pages.base.scrollIntoView(element);
    return element.click();
},

alternativeNameContainers : function() {
    return element.all(by.repeater('altName in person.master_data.alternative_names'));
},

alternativeNameContainer : function(i) {
    return this.alternativeNameContainers().get(i);
},

alternativeFirstNameInput : function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.first_name')
    );
},


typeAlternativeFirstName : function(i, value) {
    var element = this.alternativeFirstNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},




typeAlternativeLastName : function(i, value) {
    var element = this.alternativeLastNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},
typeAlternativeCreditsName : function(i,value) {
    var element = this.alternativeCreditsNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},
typeAlternativeSuisaIpiNumber: function(i,value) {
    var element = this.alternativeSuisaIpiInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},

suisaIpiNumberInput : function() {
    return element(by.model('person.master_data.primary_name.suisa_ipi_number'));
},








typeSuisaIpiNumber : function(value) {
    var element = this.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},

affiliatedSocietySearchInput : function() {
    return element(by.model('modularEditModels.model.society')).element(
        by.model('$term')
    );
},



typeAffiliatedSocietySearchTerms : function(value) {
    var element = this.affiliatedSocietySearchInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
},

affiliatedSocietySearchResults : function() {
    return $$('.tg-typeahead__suggestions-group-item');
},


affiliatedSocietySearchResult : function(i) {
    return this.affiliatedSocietySearchResults().get(i);
},

clickAffiliatedSocietySearchResultByIndex : function(i) {
    browser.sleep(200);
    pages.base.waitForAjax();
    return this.affiliatedSocietySearchResult(i).click();
},

pageFooter : function() {
    return $('.page-footer');
},
typeIntoAddressOneInput : function(value) {

    return this.addressOneInput().sendKeys(value);
},
typeIntoCityInput : function(value) {

    return this.cityInput().sendKeys(value);
},

doneButton : function() {
    return $(".btn.btn-primary.ng-scope");
},
typeIntoRegionInput : function(value) {

    return this.regionInput().sendKeys(value);
},
typeIntoPostalCodeInput : function(value) {

    return this.postalCodeInput().sendKeys(value);
},
typeIntoPhoneInput : function(value) {

    return this.phoneInput().sendKeys(value);
},
typeIntoEmailInput : function(value) {

    return this.emailInput().sendKeys(value);
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

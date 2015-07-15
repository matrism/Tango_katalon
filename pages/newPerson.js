'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    pph = require('../helpers/pph');

 module.exports = pages.newPerson = new ftf.pageObject({
    url: _tf_config.urls.app_url + '#/create/person'
});

require(pages_path + '/base');

exports.open = function() {
    ftf.pageObject.prototype.open.call(this);
    return pages.base.waitForAjax();
};


exports.firstNameInput = function() {
    return element(by.model('person.master_data.primary_name.first_name'));
};

exports.lastNameInput = function() {
    return element(by.model('person.master_data.primary_name.last_name'));
};
exports.presentationNameInput = function() {
    return element(by.model('person.master_data.primary_name.presentation_name'));
};
exports.addAlternativeNameButton = function() {
    return element(by.cssContainingText('button', 'Add Alternative Name'));
};
exports.alternativeNameContainers = function() {
    return element.all(by.repeater('altName in person.master_data.alternative_names'));
};
exports.alternativeFirstNameInput = function(i) {
    return exports.alternativeNameContainer(i).element(
        by.model('altName.first_name')
    );
};
exports.alternativeLastNameInput = function(i) {
    return exports.alternativeNameContainer(i).element(
        by.model('altName.last_name')
    );
};
exports.alternativeCreditsNameInput = function(i) {
    return exports.alternativeNameContainer(i).element(
        by.model('altName.credits_name')
    );
};
exports.alternativeSuisaIpiInput= function(i) {
    return exports.alternativeNameContainer(i).element(
        by.model('altName.suisa_ipi_number')
    );
};
exports.suisaIpiNumberInput = function() {
    return element(by.model('person.master_data.primary_name.suisa_ipi_number'));
};
exports.affiliatedSocietySearchInput = function() {
    return element(by.model('affSociety.society.name'));
};
exports.affiliatedSocietySearchResults = function() {
    return $('.typeahead.dropdown-menu').all(by.repeater('match in matches'));
};
exports.pageFooter = function() {
    return $('.page-footer');
};
exports.doneButton = function() {
    return exports.pageFooter().element(
        by.cssContainingText('button', 'Done')
    );
};

exports.creditsNameInput = function() {
   return $("#primaryCreditsName");
};

exports.dateOfDeathYear = function() {
    return element(by.model('date.year'));
};
exports.dateOfDeathMonth = function() {
    return element(by.model('date.month'));
};
exports.dateOfDeathDay = function() {
    return element(by.model('date.day'));
};

exports.addressOneInput = function () {

    return $("#address1-0");
};
exports.cityInput = function () {
return $("#city-0");
};
exports.regionInput = function () {

    return $("#region-0");
};
exports.postalCodeInput = function () {

    return $("#zipCode-0");
};
exports.phoneInput = function () {

    return element(by.model('phone.number'));
};
exports.emailInput = function () {
    return element(by.model('email.address'));
};









exports.open = function() {
    ftf.pageObject.prototype.open.call(this);
    return pages.base.waitForAjax();
};
exports.typeFirstName = function(value) {
    var element = exports.firstNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.lastNameInput = function() {
    return element(by.model('person.master_data.primary_name.last_name'));
};

exports.typeLastName = function(value) {
    var element = exports.lastNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.presentationNameInput = function() {
    return element(by.model('person.master_data.primary_name.presentation_name'));
};

exports.typePresentationName = function(value) {
    var element = exports.presentationNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.addAlternativeNameButton = function() {
    return element(by.cssContainingText('button', 'Add Alternative Name'));
};


exports.clickAddAlternativeName = function() {
    var element = exports.addAlternativeNameButton();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.alternativeNameContainers = function() {
    return element.all(by.repeater('altName in person.master_data.alternative_names'));
};

exports.alternativeNameContainer = function(i) {
    return exports.alternativeNameContainers().get(i);
};

exports.alternativeFirstNameInput = function(i) {
    return exports.alternativeNameContainer(i).element(
        by.model('altName.first_name')
    );
};


exports.typeAlternativeFirstName = function(i, value) {
    var element = exports.alternativeFirstNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.alternativeLastNameInput = function(i) {
    return exports.alternativeNameContainer(i).element(
        by.model('altName.last_name')
    );
};


exports.typeAlternativeLastName = function(i, value) {
    var element = exports.alternativeLastNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeCreditsName = function(i,value) {
    var element = exports.alternativeCreditsNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeSuisaIpiNumber= function(i,value) {
    var element = exports.alternativeSuisaIpiInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.suisaIpiNumberInput = function() {
    return element(by.model('person.master_data.primary_name.suisa_ipi_number'));
};








exports.typeSuisaIpiNumber = function(value) {
    var element = exports.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.affiliatedSocietySearchInput = function() {
    return element(by.model('affSociety.society.model')).element(
        by.model('$term')
    );
};



exports.typeAffiliatedSocietySearchTerms = function(value) {
    var element = exports.affiliatedSocietySearchInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.affiliatedSocietySearchResults = function() {
	return $$('.tg-typeahead__suggestions-group-item');
};


exports.affiliatedSocietySearchResult = function(i) {
    return exports.affiliatedSocietySearchResults().get(i);
};

exports.clickAffiliatedSocietySearchResultByIndex = function(i) {
    browser.sleep(200);
    pages.base.waitForAjax();
    return exports.affiliatedSocietySearchResult(i).click();
};

exports.pageFooter = function() {
    return $('.page-footer');
};
exports.typeIntoAddressOneInput = function(value) {

    return exports.addressOneInput().sendKeys(value);
};
exports.typeIntoCityInput = function(value) {

    return exports.cityInput().sendKeys(value);
};

exports.doneButton = function() {
    return exports.pageFooter().element(
        by.cssContainingText('button', 'Done')
    );
};
exports.typeIntoRegionInput = function(value) {

    return exports.regionInput().sendKeys(value);
};
exports.typeIntoPostalCodeInput = function(value) {

    return exports.postalCodeInput().sendKeys(value);
};
exports.typeIntoPhoneInput = function(value) {

    return exports.phoneInput().sendKeys(value);
};
exports.typeIntoEmailInput = function(value) {

    return exports.emailInput().sendKeys(value);
};



exports.expectDoneButtonToBeEnabled = function() {
    expect(pph.matchesCssSelector(exports.doneButton(), '.disabled')).toBeFalsy();
};

exports.save = function() {

   // console.log(JSON.stringify(hash.personSlots, null, 4));
    exports.expectDoneButtonToBeEnabled();
    exports.doneButton().click();
    return pages.base.waitForAjax();
};

exports.validateSaveRedirection = function() {
    expect(browser.getCurrentUrl()).toMatch(/#\/person\/.+$/);
};

exports.typeCreditsName = function(value) {
  return exports.creditsNameInput().sendKeys(value);
};

exports.typeDateOfDeath = function(year,month,day)
{
    exports.dateOfDeathYear().sendKeys(year);
   exports.dateOfDeathMonth().sendKeys(month);
 return   exports.dateOfDeathDay().sendKeys(day);

};


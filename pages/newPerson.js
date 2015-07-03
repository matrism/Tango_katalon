'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    pph = require('../helpers/pph');

exports = module.exports = pages.newPerson = new ftf.pageObject({
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

exports.enterFirstName = function(value) {
    var element = exports.firstNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.lastNameInput = function() {
    return element(by.model('person.master_data.primary_name.last_name'));
};

exports.enterLastName = function(value) {
    var element = exports.lastNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.presentationNameInput = function() {
    return element(by.model('person.master_data.primary_name.presentation_name'));
};

exports.enterPresentationName = function(value) {
    var element = exports.presentationNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.addAlternativeNameButton = function() {
    return element(by.cssContainingText('button', 'Add Alternative Name'));
};

exports.addAlternativeName = function() {
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

exports.enterAlternativeFirstName = function(i, value) {
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

exports.enterAlternativeLastName = function(i, value) {
    var element = exports.alternativeLastNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.suisaIpiNumberInput = function() {
    return element(by.model('person.master_data.primary_name.suisa_ipi_number'));
};

exports.enterSuisaIpiNumber = function(value) {
    var element = exports.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.affiliatedSocietySearchInput = function() {
    return element(by.model('affSociety.society.name'));
};

exports.enterAffiliatedSocietySearchTerms = function(value) {
    var element = exports.affiliatedSocietySearchInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.affiliatedSocietySearchResults = function() {
    return $('.typeahead.dropdown-menu').all(by.repeater('match in matches'));
};

exports.affiliatedSocietySearchResult = function(i) {
    return exports.affiliatedSocietySearchResults().get(i);
};

exports.selectAffiliatedSocietySearchResultByIndex = function(i) {
    browser.sleep(200);
    pages.base.waitForAjax();
    return exports.affiliatedSocietySearchResult(i).click();
};

exports.pageFooter = function() {
    return $('.page-footer');
};

exports.doneButton = function() {
    return exports.pageFooter().element(
        by.cssContainingText('button', 'Done')
    );
};

exports.expectDoneButtonToBeEnabled = function() {
    expect(pph.matchesCssSelector(exports.doneButton(), '.disabled')).toBeFalsy();
};

exports.save = function() {
    exports.expectDoneButtonToBeEnabled();
    exports.doneButton().click();
    return pages.base.waitForAjax();
};

exports.validateSaveRedirection = function() {
    expect(browser.getCurrentUrl()).toMatch(/#\/person\/.+$/);
};

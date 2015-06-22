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

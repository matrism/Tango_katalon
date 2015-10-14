'use strict';

var _ = require('lodash'),
    pph = require('../helpers/pph'),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

pages.newPersonStaging = exports;

require(pages_path + 'base');
require(pages_path + 'newPersonStaging');

exports.goToNewPersonPage = function() {
    browser.get(_tf_config.urls.app_url + '#/create/person');
    pages.base.waitForAjax();
};

exports.lastNameInput = function() {
    return element(by.model('person.master_data.primary_name.last_name'));
};

exports.enterLastName = function(value) {
    var input = exports.lastNameInput();

    pages.base.scrollIntoView(input);

    input.clear();
    return input.sendKeys(value);
};

exports.affiliatedSocietyTypeahead = function() {
    return element(by.model('affSociety.society.model'));
};

exports.affiliatedSocietySearchTermsInput = function() {
    return exports.affiliatedSocietyTypeahead().element(by.model('$term'));
};

exports.enterAffiliatedSocietySearchTerms = function(value) {
    var input = exports.affiliatedSocietySearchTermsInput();

    pages.base.scrollIntoView(input);

    input.clear();
    return input.sendKeys(value);
};

exports.affiliatedSocietySearchResultRows = function() {
    var rows = $$('.tg-typeahead__suggestions-group-item');

    browser.wait(ExpectedConditions.visibilityOfAny(rows));

    return rows;
};

exports.selectAffiliatedSocietySearchResultByIndex = function(i) {
    var row = exports.affiliatedSocietySearchResultRows().get(i);

    pages.base.scrollIntoView(row);

    return row.click();
};

exports.pageFooter = function() {
    return $('.page-footer');
};

exports.saveButton = function() {
    return exports.pageFooter().element(by.cssContainingText('button', 'Done'));
};

exports.expectSaveButtonToBeEnabled = function() {
    var button = exports.saveButton();

    pages.base.scrollIntoView(button);

    expect(pph.matchesCssSelector(button, '.disabled')).toBeFalsy();
};

exports.save = function() {
    var button = exports.saveButton();

    exports.expectSaveButtonToBeEnabled();

    pages.base.scrollIntoView(button);

    return button.click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.validateSaveRedirection = function() {
    expect(browser.getCurrentUrl()).toMatch(/#\/person\/.+$/);
};

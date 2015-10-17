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


exports.addAlternativeNameButton = function() {
    return element(by.cssContainingText('button', 'Add Alternative Name'));
};
exports.addAddressButton = function() {
    return element(by.cssContainingText('button', 'Add Address'));
};
exports.addPhoneButton = function() {
    return element(by.cssContainingText('button', 'Add Phone'));
};
exports.addEmailButton = function() {
    return element(by.cssContainingText('button', 'Add Email'));
};
exports.addAlternativeName = function() {
    var element = this.addAlternativeNameButton();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.addAddress = function() {
    var element = this.addAddressButton();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.addPhone = function() {
    var element = this.addPhoneButton();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.addEmail = function() {
    var element = this.addEmailButton();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.firstNameInput = function() {
    return element(by.model('person.master_data.primary_name.first_name'));
};
exports.lastNameInput = function() {
    return element(by.model('person.master_data.primary_name.last_name'));
};
exports.alternativeFirstNameInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.first_name')
    );
};
exports.alternativeLastNameInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.last_name')
    );
};
exports.alternativeCreditsNameInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('altName.credits_name')
    );
};
exports.alternativeSuisaIpiInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('person.master_data.primary_name.suisa_ipi_number')
    );
};
exports.addressOneInput = function (i) {
    return this.addressContainer(i).element(
        by.model('address.address_1')
    );
};
exports.phoneInput = function (i) {
    return this.phoneContainer(i).element(
        by.model('phone.number')
    );
};
exports.emailInput = function (i) {
    return this.emailContainer(i).element(
        by.model('email.address')
    );
};
exports.payeeToggle = function() {
    var payee = $('[data-watched-init="isPayee = PAY.isRolePayee()"]');
    pages.base.scrollIntoView(payee);
    return payee;
};
exports.payeeOption = function(value) {
    return this.payeeToggle().element(
        by.cssContainingText('button', value)
    );
};

exports.addressContainers = function() {
    return element.all(by.repeater(
        'address in addresses'
    ));
};
exports.addressContainer = function(i) {
    return this.addressContainers().get(i);
};
exports.phoneContainers = function() {
    return element.all(by.repeater(
        'phone in person.master_data.contact.phones'
    ));
};
exports.phoneContainer = function(i) {
    return this.phoneContainers().get(i);
};
exports.emailContainers = function() {
    return element.all(by.repeater(
        'email in person.master_data.contact.emails'
    ));
};
exports.emailContainer = function(i) {
    return this.emailContainers().get(i);
};
exports.alternativeNameContainers = function() {
    return element.all(by.repeater(
        'altName in person.master_data.alternative_names'
    ));
};
exports.alternativeNameContainer = function(i) {
    return this.alternativeNameContainers().get(i);
};
exports.typeFirstName = function(value) {
    var element = this.firstNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.enterLastName = function(value) {
    var input = exports.lastNameInput();

    pages.base.scrollIntoView(input);

    input.clear();
    return input.sendKeys(value);
};
exports.typeLastName = function(value) {
    var element = this.lastNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeFirstName = function(i, value) {
    var element = this.alternativeFirstNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeLastName = function(i, value) {
    var element = this.alternativeLastNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeCreditsName = function(i,value) {
    var element = this.alternativeCreditsNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeSuisaIpiNumber = function(i,value) {
    var element = this.alternativeSuisaIpiInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.suisaIpiNumberInput = function() {
    return element(by.model('person.master_data.primary_name.suisa_ipi_number'));
};
exports.typeSuisaIpiNumber = function(value) {
    var element = this.suisaIpiNumberInput();
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
    var element = this.affiliatedSocietySearchInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.affiliatedSocietySearchResults = function() {
    return $$('.tg-typeahead__suggestions-group-item');
};
exports.affiliatedSocietySearchResult = function(i) {
    return this.affiliatedSocietySearchResults().get(i);
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
exports.clickAffiliatedSocietySearchResultByIndex = function(i) {
    browser.sleep(200);
    pages.base.waitForAjax();
    return this.affiliatedSocietySearchResult(i).click();
};
exports.typeIntoAddressOneInput = function(i, value) {
    var element = this.addressOneInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoPhoneInput = function(i, value) {
    var element = this.phoneInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoEmailInput = function(i, value) {
    var element = this.emailInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.clickPayee = function (value) {
    return this.payeeOption(value).click();
};

exports.validateIpiNumber = function(value) {
    expect(exports.internalIpiNumber()).toBe(value);
};
exports.enterPersonSearchTerms = function(value) {
    var element = exports.personSearchTermsInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.personSearchTermsInput = function() {
    return pages.base.mainSearchBar().element(by.model('$term'));
};
exports.personSearchMatches = function() {
    return pages.base.mainSearchBar().$$('.tg-typeahead__suggestions-group-item');
};
exports.personSearchMatch = function(i) {
    var elements = exports.personSearchMatches();
    browser.wait(ExpectedConditions.visibilityOfAny(elements));
    return elements.get(i);
};
exports.clickPersonSearchMatch = function(i) {
    return exports.personSearchMatch(i).click();
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

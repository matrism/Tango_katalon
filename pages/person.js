'use strict';

var pages_path = _tf_config._system_.path_to_pages;
var ExpectedConditions = protractor.ExpectedConditions;

exports = module.exports = pages.person = new ftf.pageObject();

require(pages_path + 'base');

exports.open = function(personId) {
    if(!personId) {
        return ftf.pageObject.prototype.open.call(this);
    }
    else {
        browser.get(_tf_config.urls.app_url + "#/person/" + personId);
        return pages.base.waitForAjax();
    }
};

exports.findId = function() {
    return browser.getCurrentUrl().then(function(value) {
        var regExp = /#\/person\/(.+)$/;
        expect(value).toMatch(regExp);
        return regExp.exec(value)[1];
    });
};

exports.internalIpiNumberBinding = function() {
    return $(".e2e-primary-name-internal-ipi>div>strong");
};
exports.suisaIPINumber = function() {
    return $(".e2e-primary-name-suisa-ipi>div>strong");
};
exports.nameElement = function() {
    return $('.e2e-primary-name-full>div>strong');
};
exports.firstNameElement = function() {
    return $('.e2e-primary-name-first>div>strong');
};
exports.alternativeNameElement = function() {
    return $('.e2e-alternative-name-full>div>strong');
};
exports.alternativeFirstNameElement = function() {
    return $('.e2e-alternative-name-first>div>strong');
};
exports.affiliatedSocietyElement = function() {
    return $('.e2e-society-affiliation-society>div>strong');
};
exports.addressOneElement = function() {
    return $$('.e2e-contact-address-1>div>strong');
};
exports.phoneElement = function() {
    return $$('.e2e-contact-phone-number>div>strong');
};
exports.emailElement = function() {
    return $$('.e2e-contact-email-address>div>strong');
};
exports.payeeElement = function() {
    return $('.e2e-payee-is>div>strong');
};

exports.getEditButton = function(section) {
    return section.$('button[data-ng-click*="switchToEditView()"]');
};
exports.getSaveButton = function(section) {
    return section.$('button[data-ng-click*="save()"]');
};

exports.editNameElement = function() {
    return exports.getEditButton($('.e2e-primary-name'));
};
exports.saveNameElement = function() {
    return exports.getSaveButton($('.e2e-primary-name'));
};
exports.editAlternativeNameElement = function() {
    return exports.getEditButton($('.e2e-alternative-name'));
};
exports.saveAlternativeNameElement = function() {
    return exports.getSaveButton($('.e2e-alternative-name'));
};
exports.editSocietyAffiliationElement = function() {
    return exports.getEditButton($('.e2e-society-affiliation'));
};
exports.saveSocietyAffiliationElement = function() {
    return exports.getSaveButton($('.e2e-society-affiliation'));
};
exports.editAddressElement = function(i) {
    return exports.getEditButton($$('.e2e-contact-address').get(i));
};
exports.saveAddressElement = function(i) {
    return exports.getSaveButton($$('.e2e-contact-address').get(i));
};
exports.editPhoneElement = function(i) {
    return exports.getEditButton($$('.e2e-contact-phone').get(i));
};
exports.savePhoneElement = function(i) {
    return exports.getSaveButton($$('.e2e-contact-phone').get(i));
};
exports.editEmailElement = function(i) {
    return exports.getEditButton($$('.e2e-contact-email').get(i));
};
exports.saveEmailElement = function(i) {
    return exports.getSaveButton($$('.e2e-contact-email').get(i));
};
exports.editPaymentInfo = function() {
    return exports.getEditButton($('.e2e-payee'));
};
exports.savePaymentInfo = function() {
    return exports.getSaveButton($('.e2e-payee'));
};


exports.internalIpiNumber = function() {
    var element = exports.internalIpiNumberBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getSuisaIPI = function() {
    browser.wait(ExpectedConditions.visibilityOf(exports.suisaIPINumber()));
    var element = exports.suisaIPINumber();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getName = function() {
    var element = exports.nameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getFirstName = function() {
    var element = exports.firstNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeName = function() {
    var element = exports.alternativeNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeFirstName = function() {
    var element = exports.alternativeFirstNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAffiliatedSociety = function() {
    var element = exports.affiliatedSocietyElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAddressOne = function(i) {
    var element = exports.addressOneElement().get(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getPhone = function(i) {
    var element = exports.phoneElement().get(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getEmail = function(i) {
    var element = exports.emailElement().get(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getPayee = function() {
    var element = exports.payeeElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};


exports.clickOnEditName = function() {
    var element = exports.editNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveName = function() {
    var element = exports.saveNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditAlternativeName = function() {
    var element = exports.editAlternativeNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveAlternativeName = function() {
    var element = exports.saveAlternativeNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditSocietyAffiliation = function() {
    var element = exports.editSocietyAffiliationElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveSocietyAffiliation = function() {
    var element = exports.saveSocietyAffiliationElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditAddress = function(i) {
    var element = exports.editAddressElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveAddress = function(i) {
    var element = exports.saveAddressElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditPhone = function(i) {
    var element = exports.editPhoneElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePhone = function(i) {
    var element = exports.savePhoneElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditEmail = function(i) {
    var element = exports.editEmailElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveEmail = function(i) {
    var element = exports.saveEmailElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditPaymentInfo = function() {
    var element = exports.editPaymentInfo();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePaymentInfo = function() {
    var element = exports.savePaymentInfo();
    pages.base.scrollIntoView(element);
    return element.click();
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

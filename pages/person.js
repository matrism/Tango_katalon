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

exports.firstNameInput = function() {
    return element(by.model('modularEditModels.model.firstName'));
};
exports.lastNameInput = function() {
    return element(by.model('modularEditModels.model.lastName'));
};
exports.alternativeFirstNameInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('modularEditModels.model.firstName')
    );
};
exports.alternativeLastNameInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('modularEditModels.model.lastName')
    );
};
exports.alternativeCreditsNameInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('modularEditModels.model.creditsName')
    );
};
exports.alternativeSuisaIpiInput = function(i) {
    return this.alternativeNameContainer(i).element(
        by.model('modularEditModels.model.suisaIpiNumber')
    );
};
exports.addressOneInput = function (i) {
    return this.addressContainer(i).element(
        by.model('modularEditModels.model.address1')
    );
};
exports.phoneInput = function (i) {
    return this.phoneContainer(i).element(
        by.model('modularEditModels.model.number')
    );
};
exports.emailInput = function (i) {
    return this.emailContainer(i).element(
        by.model('modularEditModels.model.address')
    );
};
exports.payeeToggle = function() {
    var payee = element(by.model('modularEditModels.model.isPayee'));
    pages.base.scrollIntoView(payee);
    return payee;
};
exports.payeeOption = function(value) {
    return this.payeeToggle().element(
        by.cssContainingText('button', value)
    );
};

exports.internalIpiNumberBinding = function() {
    return $(".e2e-primary-name-internal-ipi .controls");
};
exports.suisaIPINumber = function() {
    return $(".e2e-primary-name-suisa-ipi .controls");
};
exports.nameElement = function() {
    return $('.e2e-primary-name-full .controls');
};
exports.firstNameElement = function() {
    return $('.e2e-primary-name-first .controls');
};
exports.lastNameElement = function() {
    return $('.e2e-primary-name-last .controls');
};
exports.alternativeNameElement = function(i) {
    return $$('.e2e-alternative-name-full .controls').get(i);
};
exports.alternativeFirstNameElement = function() {
    return $('.e2e-alternative-name-first .controls');
};
exports.alternativeLastNameElement = function() {
    return $('.e2e-alternative-name-last .controls');
};
exports.affiliatedSocietyElement = function() {
    return $('.e2e-society-affiliation-society .controls');
};
exports.addressOneElement = function() {
    return $$('.e2e-contact-address-1 .controls');
};
exports.phoneElement = function() {
    return $$('.e2e-contact-phone-number .controls');
};
exports.emailElement = function() {
    return $$('.e2e-contact-email-address .controls');
};
exports.payeeElement = function() {
    return $('.e2e-payee-is .controls');
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
exports.getLastName = function() {
    var element = exports.lastNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeName = function(i) {
    var element = exports.alternativeNameElement(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeFirstName = function() {
    var element = exports.alternativeFirstNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeLastName = function() {
    var element = exports.alternativeLastNameElement();
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

exports.clickOnEditPrimaryName = function() {
    var element = exports.editNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePrimaryName = function() {
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
exports.clickOnEditPaymentInformation = function() {
    var element = exports.editPaymentInfo();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePaymentInformation = function() {
    var element = exports.savePaymentInfo();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.addressContainers = function() {
    return element.all(by.repeater(
        'contactAddress in dataHolder.person.contactAddresses.getAll()'
    ));
};
exports.addressContainer = function(i) {
    return this.addressContainers().get(i);
};
exports.phoneContainers = function() {
    return element.all(by.repeater(
        'contactPhone in dataHolder.person.contactPhones.getAll()'
    ));
};
exports.phoneContainer = function(i) {
    return this.phoneContainers().get(i);
};
exports.emailContainers = function() {
    return element.all(by.repeater(
        'contactEmail in dataHolder.person.contactEmails.getAll()'
    ));
};
exports.emailContainer = function(i) {
    return this.emailContainers().get(i);
};
exports.alternativeNameContainers = function() {
    return element.all(by.repeater(
        'alternativeName in dataHolder.person.alternativeNames.getAll()'
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
    return element(by.model('modularEditModels.model.suisaIpiNumber'));
};
exports.typeSuisaIpiNumber = function(value) {
    var element = this.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.affiliatedSocietySearchInput = function() {
    return element(by.model('modularEditModels.model.society')).element(
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


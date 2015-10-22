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
    return $('.e2e-primary-name-first input');
};
exports.lastNameInput = function() {
    return $('.e2e-primary-name-last input');
};
exports.alternativeFirstNameInput = function(i) {
    return this.alternativeNameContainer(i).$('.e2e-alternative-name-fisrt input');
};
exports.alternativeLastNameInput = function(i) {
    return this.alternativeNameContainer(i).$('.e2e-alternative-name-last input');
};
exports.alternativeCreditsNameInput = function(i) {
    return this.alternativeNameContainer(i).$('.e2e-primary-name-credits input');
};
exports.alternativeSuisaIpiInput = function(i) {
    return this.alternativeNameContainer(i).$('.e2e-primary-name-suisa-ipi input');
};
exports.addressOneInput = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-1 input');
};
exports.addressTwoInput = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-2 input');
};
exports.addressThreeInput = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-3 input');
};
exports.cityInput = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-city input');
};
exports.regionInput = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-region input');
};
exports.postalCodeInput = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-postal-code input');
};
exports.countrySelector = function (i) {
    return this.addressContainer(i).$('.e2e-contact-address-country');
};
exports.countryDropdownButton = function (i) {
    return exports.countrySelector(i).$$('button').get(0); 
};
exports.countryDropdown = function (i) {
    return exports.countrySelector(i).$('ul'); 
};
exports.countryOption = function (i, value) {
    return exports.countryDropdown(i).element(
        by.cssContainingText('span', value)
    );
};
exports.primaryAddressCheckbox = function (i) {
    return exports.addressContainer(i).$('.e2e-contact-address-set-primary .ng-binding');
};
exports.primaryPhoneCheckbox = function (i) {
    return exports.phoneContainer(i).$('.e2e-contact-phone-set-primary .ng-binding');
};
exports.primaryEmailCheckbox = function (i) {
    return exports.emailContainer(i).$('.e2e-contact-email-set-primary .ng-binding');
};
exports.primaryAddressLabel = function (i) {
    return exports.addressContainer(i).$('.e2e-contact-address-is-primary');
};
exports.primaryPhoneLabel = function (i) {
    return exports.phoneContainer(i).$('.e2e-contact-phone-is-primary');
};
exports.primaryEmailLabel = function (i) {
    return exports.emailContainer(i).$('.e2e-contact-email-is-primary');
};

exports.phoneInput = function (i) {
    return this.phoneContainer(i).$('.e2e-contact-phone-number>input');
};
exports.emailInput = function (i) {
    return this.emailContainer(i).$('.e2e-contact-email-address>input');
};
exports.payeeToggle = function() {
    var payee = $('.e2e-payee-is');
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
exports.nameBinding = function() {
    return $('.e2e-primary-name-full .controls');
};
exports.firstNameBinding = function() {
    return $('.e2e-primary-name-first .controls');
};
exports.lastNameBinding = function() {
    return $('.e2e-primary-name-last .controls');
};
exports.alternativeNameBinding = function(i) {
    return $$('.e2e-alternative-name-full .controls').get(i);
};
exports.alternativeFirstNameBinding = function() {
    return $('.e2e-alternative-name-first .controls');
};
exports.alternativeLastNameBinding = function() {
    return $('.e2e-alternative-name-last .controls');
};
exports.affiliatedSocietyBinding = function() {
    return $('.e2e-society-affiliation-society .controls');
};
exports.addressOneBinding = function() {
    return $$('.e2e-contact-address-1 .controls');
};
exports.addressTwoBinding = function() {
    return $$('.e2e-contact-address-2 .controls');
};
exports.addressThreeBinding = function() {
    return $$('.e2e-contact-address-3 .controls');
};
exports.cityBinding = function() {
    return $$('.e2e-contact-address-city .controls');
};
exports.regionBinding = function() {
    return $$('.e2e-contact-address-region .controls');
};
exports.postalCodeBinding = function() {
    return $$('.e2e-contact-address-postal-code .controls');
};
exports.countryBinding = function() {
    return $$('.e2e-contact-address-country .controls');
};
exports.phoneBinding = function() {
    return $$('.e2e-contact-phone-number .controls');
};
exports.emailBinding = function() {
    return $$('.e2e-contact-email-address .controls');
};
exports.payeeBinding = function() {
    return $('.e2e-payee-is .controls');
};

exports.getEditButton = function(section) {
    return section.$('[data-ng-click*="switchToEditView()"]');
};
exports.getSaveButton = function(section) {
    return section.$('[data-ng-click*="save()"]');
};

exports.editNameButton = function() {
    return exports.getEditButton($('.e2e-primary-name'));
};
exports.saveNameButton = function() {
    return exports.getSaveButton($('.e2e-primary-name'));
};
exports.editAlternativeNameButton = function() {
    return exports.getEditButton($('.e2e-alternative-name'));
};
exports.saveAlternativeNameButton = function() {
    return exports.getSaveButton($('.e2e-alternative-name'));
};
exports.editSocietyAffiliationButton = function() {
    return exports.getEditButton($('.e2e-society-affiliation'));
};
exports.saveSocietyAffiliationButton = function() {
    return exports.getSaveButton($('.e2e-society-affiliation'));
};
exports.editAddressButton = function(i) {
    return exports.getEditButton(exports.addressContainer(i));
};
exports.saveAddressButton = function(i) {
    return exports.getSaveButton(exports.addressContainer(i));
};
exports.editPhoneButton = function(i) {
    return exports.getEditButton(exports.phoneContainer(i));
};
exports.savePhoneButton = function(i) {
    return exports.getSaveButton(exports.phoneContainer(i));
};
exports.editEmailButton = function(i) {
    return exports.getEditButton(exports.emailContainer(i));
};
exports.saveEmailButton = function(i) {
    return exports.getSaveButton(exports.emailContainer(i));
};
exports.editPaymentInfo = function() {
    return exports.getEditButton($('.e2e-payee'));
};
exports.savePaymentInfo = function() {
    return exports.getSaveButton($('.e2e-payee'));
};

exports.getBindingText = function(element) {
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.internalIpiNumber = function() {
    return exports.getBindingText(exports.internalIpiNumberBinding());
};
exports.getSuisaIPI = function() {
    browser.wait(ExpectedConditions.visibilityOf(exports.suisaIPINumber()));
    var element = exports.suisaIPINumber();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getName = function() {
    return exports.getBindingText(exports.nameBinding());
};
exports.getFirstName = function() {
    return exports.getBindingText(exports.firstNameBinding());
};
exports.getLastName = function() {
    return exports.getBindingText(exports.lastNameBinding());
};
exports.getAlternativeName = function(i) {
    return exports.getBindingText(exports.alternativeNameBinding(i));
};
exports.getAlternativeFirstName = function() {
    return exports.getBindingText(exports.alternativeFirstNameBinding());
};
exports.getAlternativeLastName = function() {
    return exports.getBindingText(exports.alternativeLastNameBinding());
};
exports.getAffiliatedSociety = function() {
    return exports.getBindingText(exports.affiliatedSocietyBinding());
};
exports.getAddressOne = function(i) {
    return exports.getBindingText(exports.addressOneBinding().get(i));
};
exports.getAddressTwo = function(i) {
    return exports.getBindingText(exports.addressTwoBinding().get(i));
};
exports.getAddressThree = function(i) {
    return exports.getBindingText(exports.addressThreeBinding().get(i));
};
exports.getCity = function(i) {
    return exports.getBindingText(exports.cityBinding().get(i));
};
exports.getRegion = function(i) {
    return exports.getBindingText(exports.regionBinding().get(i));
};
exports.getPostalCode = function(i) {
    return exports.getBindingText(exports.postalCodeBinding().get(i));
};
exports.getCountry = function(i) {
    return exports.getBindingText(exports.countryBinding().get(i));
};
exports.getPhone = function(i) {
    return exports.getBindingText(exports.phoneBinding().get(i));
};
exports.getEmail = function(i) {
    return exports.getBindingText(exports.emailBinding().get(i));
};
exports.getPayee = function() {
    return exports.getBindingText(exports.payeeBinding());
};
exports.getPrimaryAddress = function(i) {
    var element = exports.primaryAddressLabel(i);
    pages.base.scrollIntoView(element);
    return element;
};
exports.getPrimaryPhone = function(i) {
    var element = exports.primaryPhoneLabel(i);
    pages.base.scrollIntoView(element);
    return element;
};
exports.getPrimaryEmail = function(i) {
    var element = exports.primaryEmailLabel(i);
    pages.base.scrollIntoView(element);
    return element;
};

exports.clickOnModularEditButton = function(element) {
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnModularSaveButton = function(element) {
    pages.base.scrollIntoView(element);
    element.click();
    pages.base.waitForAjax();
};
exports.clickOnEditPrimaryName = function() {
    return exports.clickOnModularEditButton(exports.editNameButton());
};
exports.clickOnSavePrimaryName = function() {
    return exports.clickOnModularSaveButton(exports.saveNameButton());
};
exports.clickOnEditAlternativeName = function() {
    return exports.clickOnModularEditButton(exports.editAlternativeNameButton());
};
exports.clickOnSaveAlternativeName = function() {
    return exports.clickOnModularSaveButton(exports.saveAlternativeNameButton());
};
exports.clickOnEditSocietyAffiliation = function() {
    return exports.clickOnModularEditButton(exports.editSocietyAffiliationButton());
};
exports.clickOnSaveSocietyAffiliation = function() {
    return exports.clickOnModularSaveButton(exports.saveSocietyAffiliationButton());
};
exports.clickOnEditAddress = function(i) {
    return exports.clickOnModularEditButton(exports.editAddressButton(i));
};
exports.clickOnSaveAddress = function(i) {
    return exports.clickOnModularSaveButton(exports.saveAddressButton(i));
};
exports.clickOnEditPhone = function(i) {
    return exports.clickOnModularEditButton(exports.editPhoneButton(i));
};
exports.clickOnSavePhone = function(i) {
    return exports.clickOnModularSaveButton(exports.savePhoneButton(i));
};
exports.clickOnEditEmail = function(i) {
    return exports.clickOnModularEditButton(exports.editEmailButton(i));
};
exports.clickOnSaveEmail = function(i) {
    return exports.clickOnModularSaveButton(exports.saveEmailButton(i));
};
exports.clickOnEditPaymentInformation = function() {
    return exports.clickOnModularEditButton(exports.editPaymentInfo());
};
exports.clickOnSavePaymentInformation = function() {
    return exports.clickOnModularSaveButton(exports.savePaymentInfo());
};

exports.addressContainer = function(i) {
    return $$('.e2e-contact-address').get(i);
};
exports.phoneContainer = function(i) {
    return $$('.e2e-contact-phone').get(i);
};
exports.emailContainer = function(i) {
    return $$('.e2e-contact-email').get(i);
};
exports.alternativeNameContainer = function(i) {
    return $$('.e2e-alternative-name').get(i);
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
    return $('.e2e-primary-name-suisa-ipi input');
};
exports.typeSuisaIpiNumber = function(value) {
    var element = this.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.affiliatedSocietySearchInput = function() {
    return $('.e2e-society-affiliation-society input');
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
exports.typeIntoAddressTwoInput = function(i, value) {
    var element = this.addressTwoInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoAddressThreeInput = function(i, value) {
    var element = this.addressThreeInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoCityInput = function(i, value) {
    var element = this.cityInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoRegionInput = function(i, value) {
    var element = this.regionInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoPostalCodeInput = function(i, value) {
    var element = this.postalCodeInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.clickOnCountryDropdownButton = function(i) {
    var dropdownButton = this.countryDropdownButton(i);
    pages.base.scrollIntoView(dropdownButton);
    return dropdownButton.click();
};
exports.selectCountry = function(i, value) {
    exports.clickOnCountryDropdownButton(i);
    return this.countryOption(i, value).click();
};
exports.setPrimaryAddress = function(i) {
    return exports.primaryAddressCheckbox(i).click();
};
exports.setPrimaryPhone = function(i) {
    return exports.primaryPhoneCheckbox(i).click();
};
exports.setPrimaryEmail = function(i) {
    return exports.primaryEmailCheckbox(i).click();
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


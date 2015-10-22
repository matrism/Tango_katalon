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
exports.addressTwoInput = function (i) {
    return this.addressContainer(i).element(
        by.model('modularEditModels.model.address2')
    );
};
exports.addressThreeInput = function (i) {
    return this.addressContainer(i).element(
        by.model('modularEditModels.model.address3')
    );
};
exports.cityInput = function (i) {
    return this.addressContainer(i).element(
        by.model('modularEditModels.model.cityTown')
    );
};
exports.regionInput = function (i) {
    return this.addressContainer(i).element(
        by.model('modularEditModels.model.region')
    );
};
exports.postalCodeInput = function (i) {
    return this.addressContainer(i).element(
        by.model('modularEditModels.model.postalCode')
    );
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
    return exports.addressContainer(i).$('.e2e-contact-phone-set-primary .ng-binding');
};
exports.primaryEmailCheckbox = function (i) {
    return exports.addressContainer(i).$('.e2e-contact-email-set-primary .ng-binding');
};
exports.primaryAddressLabel = function (i) {
    return exports.addressContainer(i).element(
	    by.cssContainingText('div', 'Primary')
    );
};
exports.primaryPhoneLabel = function (i) {
    return exports.phoneContainer(i).element(
	    by.cssContainingText('div', 'Primary')
    );
};
exports.primaryEmailLabel = function (i) {
    return exports.emailContainer(i).element(
	    by.cssContainingText('div', 'Primary')
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
exports.addressTwoElement = function() {
    return $$('.e2e-contact-address-2 .controls');
};
exports.addressThreeElement = function() {
    return $$('.e2e-contact-address-3 .controls');
};
exports.cityElement = function() {
    return $$('.e2e-contact-address-city .controls');
};
exports.regionElement = function() {
    return $$('.e2e-contact-address-region .controls');
};
exports.postalCodeElement = function() {
    return $$('.e2e-contact-address-postal-code .controls');
};
exports.countryElement = function() {
    return $$('.e2e-contact-address-country .controls');
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

exports.getBindingElementText = function(element) {
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.internalIpiNumber = function() {
    return exports.getBindingElementText(exports.internalIpiNumberBinding());
};
exports.getSuisaIPI = function() {
    browser.wait(ExpectedConditions.visibilityOf(exports.suisaIPINumber()));
    var element = exports.suisaIPINumber();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getName = function() {
    return exports.getBindingElementText(exports.nameElement());
};
exports.getFirstName = function() {
    return exports.getBindingElementText(exports.firstNameElement());
};
exports.getLastName = function() {
    return exports.getBindingElementText(exports.lastNameElement());
};
exports.getAlternativeName = function(i) {
    return exports.getBindingElementText(exports.alternativeNameElement(i));
};
exports.getAlternativeFirstName = function() {
    return exports.getBindingElementText(exports.alternativeFirstNameElement());
};
exports.getAlternativeLastName = function() {
    return exports.getBindingElementText(exports.alternativeLastNameElement());
};
exports.getAffiliatedSociety = function() {
    return exports.getBindingElementText(exports.affiliatedSocietyElement());
};
exports.getAddressOne = function(i) {
    return exports.getBindingElementText(exports.addressOneElement().get(i));
};
exports.getAddressTwo = function(i) {
    return exports.getBindingElementText(exports.addressTwoElement().get(i));
};
exports.getAddressThree = function(i) {
    return exports.getBindingElementText(exports.addressThreeElement().get(i));
};
exports.getCity = function(i) {
    return exports.getBindingElementText(exports.cityElement().get(i));
};
exports.getRegion = function(i) {
    return exports.getBindingElementText(exports.regionElement().get(i));
};
exports.getPostalCode = function(i) {
    return exports.getBindingElementText(exports.postalCodeElement().get(i));
};
exports.getCountry = function(i) {
    return exports.getBindingElementText(exports.countryElement().get(i));
};
exports.getPhone = function(i) {
    return exports.getBindingElementText(exports.phoneElement().get(i));
};
exports.getEmail = function(i) {
    return exports.getBindingElementText(exports.emailElement().get(i));
};
exports.getPayee = function() {
    return exports.getBindingElementText(exports.payeeElement());
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
    return exports.clickOnModularEditButton(exports.editNameElement());
};
exports.clickOnSavePrimaryName = function() {
    return exports.clickOnModularSaveButton(exports.saveNameElement());
};
exports.clickOnEditAlternativeName = function() {
    return exports.clickOnModularEditButton(exports.editAlternativeNameElement());
};
exports.clickOnSaveAlternativeName = function() {
    return exports.clickOnModularSaveButton(exports.saveAlternativeNameElement());
};
exports.clickOnEditSocietyAffiliation = function() {
    return exports.clickOnModularEditButton(exports.editSocietyAffiliationElement());
};
exports.clickOnSaveSocietyAffiliation = function() {
    return exports.clickOnModularSaveButton(exports.saveSocietyAffiliationElement());
};
exports.clickOnEditAddress = function(i) {
    return exports.clickOnModularEditButton(exports.editAddressElement(i));
};
exports.clickOnSaveAddress = function(i) {
    return exports.clickOnModularSaveButton(exports.saveAddressElement(i));
};
exports.clickOnEditPhone = function(i) {
    return exports.clickOnModularEditButton(exports.editPhoneElement(i));
};
exports.clickOnSavePhone = function(i) {
    return exports.clickOnModularSaveButton(exports.savePhoneElement(i));
};
exports.clickOnEditEmail = function(i) {
    return exports.clickOnModularEditButton(exports.editEmailElement(i));
};
exports.clickOnSaveEmail = function(i) {
    return exports.clickOnModularSaveButton(exports.saveEmailElement(i));
};
exports.clickOnEditPaymentInformation = function() {
    return exports.clickOnModularEditButton(exports.editPaymentInfo());
};
exports.clickOnSavePaymentInformation = function() {
    return exports.clickOnModularSaveButton(exports.savePaymentInfo());
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


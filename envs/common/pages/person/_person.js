'use strict';

var _ = require('lodash'),
    ExpectedConditions = protractor.ExpectedConditions;

exports = module.exports = pages.person = new ftf.pageObject();

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

exports.creatorButtonsContainer = function () {
    return element(by.model('__isCreator'));
};

exports.creatorButtonByLabel = function (label) {
    return exports.creatorButtonsContainer().element(
        by.cssContainingText('button', label)
    );
};

exports.makeCreator = function (creator) {
    var el = exports.creatorButtonByLabel(
        creator? 'Yes' : 'No'
    );

    return asAlways(el, 'scrollIntoView', 'click');
};

exports.confirmMakingNonCreator = function (confirm) {
    pages.base.waitForModal();

    return pages.base.modalFooterButtonByLabel(
        confirm? 'Yes' : 'No'
    ).click();
};

exports.firstNameInput = function() {
    return $('.e2e-primary-name-first input');
};
exports.lastNameInput = function() {
    return $('.e2e-primary-name-last input');
};
exports.suisaIpiNumberInput = function() {
    return $('.e2e-primary-name-suisa-ipi input');
};
exports.presentationNameInput = function () {
    return element(by.model('tgModularEditModel.presentationName'));
};
exports.affiliatedSocietySearchInput = function() {
    return $('.e2e-society-affiliation-society input');
};
exports.affiliatedSocietySearchResults = function() {
    return $$('.tg-typeahead__suggestions-group-item');
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
    return $$('.e2e-alternative-name .person__alternative-name_block').get(i);
};
exports.alternativeFirstNameInput = function(i) {
    return this.alternativeNameContainer(i).$('.e2e-primary-name-first input');
};
exports.alternativeLastNameInput = function(i) {
    return this.alternativeNameContainer(i).$('.e2e-primary-name-last input');
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
    return $(".e2e-primary-name .e2e-primary-name-internal-ipi .controls");
};

exports.suisaIPINumber = function() {
    return $(".e2e-primary-name .e2e-primary-name-suisa-ipi .controls .ng-binding");
};
exports.nameBinding = function() {
    return $('.e2e-primary-name .e2e-primary-name-full .controls');
};
exports.firstNameBinding = function() {
    return $('.e2e-primary-name .e2e-primary-name-first .controls');
};
exports.lastNameBinding = function() {
    return $('.e2e-primary-name .e2e-primary-name-last .controls');
};
exports.alternativeNameBinding = function(i) {
    return $$('.e2e-alternative-name .e2e-primary-name-full .controls').get(i);
};
exports.alternativeFirstNameBinding = function(i) {
    return $$('.e2e-alternative-name .e2e-primary-name-first .controls').get(i);
};
exports.alternativeLastNameBinding = function(i) {
    return $$('.e2e-alternative-name .e2e-primary-name-last .controls').get(i);
};
exports.alternativeSuisaIpiNumberBinding = function(i) {
    return $$('.e2e-alternative-name .e2e-primary-name-suisa-ipi .controls').get(i);
};
exports.affiliatedSocietyBinding = function() {
    return $('.e2e-society-affiliation-society .controls');
};
exports.addressOneBinding = function(i) {
    return $$('.e2e-contact-address-1 .controls').get(i);
};
exports.addressTwoBinding = function(i) {
    return $$('.e2e-contact-address-2 .controls').get(i);
};
exports.addressThreeBinding = function(i) {
    return $$('.e2e-contact-address-3 .controls').get(i);
};
exports.cityBinding = function(i) {
    return $$('.e2e-contact-address-city .controls').get(i);
};
exports.regionBinding = function(i) {
    return $$('.e2e-contact-address-region .controls').get(i);
};
exports.postalCodeBinding = function(i) {
    return $$('.e2e-contact-address-postal-code .controls').get(i);
};
exports.countryBinding = function(i) {
    return $$('.e2e-contact-address-country .controls').get(i);
};
exports.phoneBinding = function(i) {
    return $$('.e2e-contact-phone-number .controls').get(i);
};
exports.emailBinding = function(i) {
    return $$('.e2e-contact-email-address .controls').get(i);
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
exports.getDeleteButton = function(section) {
    return section.$('[data-ng-click*="delete()"]');
};
exports.getCancelButton = function(section) {
    return section.$('[data-ng-click*="cancel()"]');
};

exports.editNameButton = function() {
    return exports.getEditButton($('.e2e-primary-name'));
};
exports.saveNameButton = function() {
    return exports.getSaveButton($('.e2e-primary-name'));
};
exports.cancelNameButton = function() {
    return exports.getCancelButton($('.e2e-primary-name'));
};
exports.editAlternativeNameButton = function(i) {
    return exports.getEditButton($$('.e2e-alternative-name .person__alternative-name_block').get(i));
};
exports.saveAlternativeNameButton = function(i) {
    return exports.getSaveButton($$('.e2e-alternative-name .person__alternative-name_block').get(i));
};
exports.deleteAlternativeNameButton = function(i) {
    return exports.getDeleteButton($$('.e2e-alternative-name .person__alternative-name_block').get(i));
};
exports.cancelAlternativeNameButton = function(i) {
    return exports.getCancelButton($$('.e2e-alternative-name .person__alternative-name_block').get(i));
};
exports.editSocietyAffiliationButton = function() {
    return exports.getEditButton($('.e2e-society-affiliation'));
};
exports.saveSocietyAffiliationButton = function() {
    return exports.getSaveButton($('.e2e-society-affiliation'));
};
exports.cancelSocietyAffiliationButton = function() {
    return exports.getCancelButton($('.e2e-society-affiliation'));
};
exports.editAddressButton = function(i) {
    return exports.getEditButton(exports.addressContainer(i));
};
exports.saveAddressButton = function(i) {
    return exports.getSaveButton(exports.addressContainer(i));
};
exports.deleteAddressButton = function(i) {
    return exports.getDeleteButton(exports.addressContainer(i));
};
exports.cancelAddressButton = function(i) {
    return exports.getCancelButton(exports.addressContainer(i));
};
exports.editPhoneButton = function(i) {
    return exports.getEditButton(exports.phoneContainer(i));
};
exports.savePhoneButton = function(i) {
    return exports.getSaveButton(exports.phoneContainer(i));
};
exports.deletePhoneButton = function(i) {
    return exports.getDeleteButton(exports.phoneContainer(i));
};
exports.cancelPhoneButton = function(i) {
    return exports.getCancelButton(exports.phoneContainer(i));
};
exports.editEmailButton = function(i) {
    return exports.getEditButton(exports.emailContainer(i));
};
exports.saveEmailButton = function(i) {
    return exports.getSaveButton(exports.emailContainer(i));
};
exports.deleteEmailButton = function(i) {
    return exports.getDeleteButton(exports.emailContainer(i));
};
exports.cancelEmailButton = function(i) {
    return exports.getCancelButton(exports.emailContainer(i));
};
exports.editPaymentButton = function() {
    return exports.getEditButton($('.e2e-payee'));
};
exports.savePaymentButton = function() {
    return exports.getSaveButton($('.e2e-payee'));
};
exports.cancelPaymentButton = function() {
    return exports.getCancelButton($('.e2e-payee'));
};
exports.editOthersButton = function() {
    return exports.getEditButton($('.e2e-others'));
};
exports.saveOthersButton = function() {
    return exports.getSaveButton($('.e2e-others'));
};
exports.cancelOthersButton = function() {
    return exports.getCancelButton($('.e2e-others'));
};

exports.getBindingText = function(element) {
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.internalIpiNumber = function() {
    pages.base.isPresentAndDisplayed(exports.internalIpiNumberBinding());
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
exports.getAlternativeFirstName = function(i) {
    return exports.getBindingText(exports.alternativeFirstNameBinding(i));
};
exports.getAlternativeLastName = function(i) {
    return exports.getBindingText(exports.alternativeLastNameBinding(i));
};
exports.getAlternativeSuisaIpiNumber = function(i) {
    return exports.getBindingText(exports.alternativeSuisaIpiNumberBinding(i));
};
exports.getAffiliatedSociety = function() {
    return exports.getBindingText(exports.affiliatedSocietyBinding());
};
exports.getAddressOne = function(i) {
    return exports.getBindingText(exports.addressOneBinding(i));
};
exports.getAddressTwo = function(i) {
    return exports.getBindingText(exports.addressTwoBinding(i));
};
exports.getAddressThree = function(i) {
    return exports.getBindingText(exports.addressThreeBinding(i));
};
exports.getCity = function(i) {
    return exports.getBindingText(exports.cityBinding(i));
};
exports.getRegion = function(i) {
    return exports.getBindingText(exports.regionBinding(i));
};
exports.getPostalCode = function(i) {
    return exports.getBindingText(exports.postalCodeBinding(i));
};
exports.getCountry = function(i) {
    return exports.getBindingText(exports.countryBinding(i));
};
exports.getPhone = function(i) {
    return exports.getBindingText(exports.phoneBinding(i));
};
exports.getEmail = function(i) {
    return exports.getBindingText(exports.emailBinding(i));
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

exports.clickOnButton = function(element) {
    pages.base.scrollIntoView(element);
    element.click();
    pages.base.waitForAjax();
};
exports.clickOnDeleteButton = function(element) {
    pages.base.scrollIntoView(element);
    element.click();
    pages.modal.clickOnYesButton();
    pages.base.waitForAjax();
};
exports.editPrimaryName = function() {
    return exports.clickOnButton(exports.editNameButton());
};
exports.savePrimaryName = function() {
    return exports.clickOnButton(exports.saveNameButton());
};
exports.cancelPrimaryName = function() {
    return exports.clickOnButton(exports.cancelNameButton());
};
exports.editAlternativeName = function(i) {
    return exports.clickOnButton(exports.editAlternativeNameButton(i));
};
exports.saveAlternativeName = function(i) {
    return exports.clickOnButton(exports.saveAlternativeNameButton(i));
};
exports.deleteAlternativeName = function(i) {
    return exports.clickOnDeleteButton(exports.deleteAlternativeNameButton(i));
};
exports.cancelAlternativeName = function(i) {
    return exports.clickOnButton(exports.cancelAlternativeNameButton(i));
};
exports.editSocietyAffiliation = function() {
    return exports.clickOnButton(exports.editSocietyAffiliationButton());
};
exports.saveSocietyAffiliation = function() {
    return exports.clickOnButton(exports.saveSocietyAffiliationButton());
};
exports.cancelSocietyAffiliation = function() {
    return exports.clickOnButton(exports.cancelSocietyAffiliationButton());
};
exports.editAddress = function(i) {
    return exports.clickOnButton(exports.editAddressButton(i));
};
exports.saveAddress = function(i) {
    return exports.clickOnButton(exports.saveAddressButton(i));
};
exports.deleteAddress = function(i) {
    return exports.clickOnDeleteButton(exports.deleteAddressButton(i));
};
exports.cancelAddress = function(i) {
    return exports.clickOnButton(exports.cancelAddressButton(i));
};
exports.editPhone = function(i) {
    return exports.clickOnButton(exports.editPhoneButton(i));
};
exports.savePhone = function(i) {
    return exports.clickOnButton(exports.savePhoneButton(i));
};
exports.deletePhone = function(i) {
    return exports.clickOnDeleteButton(exports.deletePhoneButton(i));
};
exports.cancelPhone = function(i) {
    return exports.clickOnButton(exports.cancelPhoneButton(i));
};
exports.editEmail = function(i) {
    return exports.clickOnButton(exports.editEmailButton(i));
};
exports.saveEmail = function(i) {
    return exports.clickOnButton(exports.saveEmailButton(i));
};
exports.deleteEmail = function(i) {
    return exports.clickOnDeleteButton(exports.deleteEmailButton(i));
};
exports.cancelEmail = function(i) {
    return exports.clickOnButton(exports.cancelEmailButton(i));
};
exports.editPayment = function() {
    return exports.clickOnButton(exports.editPaymentButton());
};
exports.savePayment = function() {
    return exports.clickOnButton(exports.savePaymentButton());
};
exports.cancelPayment = function() {
    return exports.clickOnButton(exports.cancelPaymentButton());
};

exports.editOthers = function() {
    return exports.clickOnButton(exports.editOthersButton());
};
exports.saveOthers = function() {
    return exports.clickOnButton(exports.saveOthersButton());
};
exports.cancelOthers = function() {
    return exports.clickOnButton(exports.cancelOthersButton());
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
exports.typePresentationName = function (value) {
    var element = this.presentationNameInput();
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
exports.typeSuisaIpiNumber = function(value) {
    var element = this.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAffiliatedSocietySearchTerms = function(value) {
    var element = this.affiliatedSocietySearchInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.affiliatedSocietySearchResult = function(i) {
    return this.affiliatedSocietySearchResults().get(i);
};
exports.clickAffiliatedSocietySearchResultByIndex = function(i) {
    browser.sleep(1000);
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
exports.validateSuisaIpiNumber = function(value) {
    expect(exports.suisaIPINumber()).toBe(value);
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

exports.personSearchIsUnique = function() {
    return expect(pages.base.mainSearchBar().$$('.tg-typeahead__suggestions-group-item').count()).toEqual(1);
};

exports.personSearchMatch = function(i) {
    var elements = exports.personSearchMatches();
    browser.wait(ExpectedConditions.visibilityOfAny(elements));
    return elements.get(i);
};
exports.clickPersonSearchMatch = function(i) {
    return exports.personSearchMatch(i).click();
};

exports.placeOfBirthInput = function() {
    return $('.e2e-others-place-of-birth input');
};

exports.typePlaceOfBirth = function(value) {
    var element = this.placeOfBirthInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.citizenshipInput = function() {
    return $('.e2e-others-citizenship input');
};

exports.typeCitizenship = function(value) {
    var element = this.citizenshipInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.mexicoRegistrationNumberInput = function() {
    return element(by.model('tgModularEditModel.mexicoAgreementNumber'));
};

exports.typeMexicoRegistrationNumber = function(value) {
    var element = this.mexicoRegistrationNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.maritalStatusDropdown = function() {
    return element(by.model('tgModularEditModel.maritalStatusCode'));
};

exports.statementRecipientButtonsContainer = () => {
    return $('.e2e-payment-statement-is');
};

exports.statementRecipientYesButton = function () {
    return exports.statementRecipientButtonsContainer().element(
        by.cssContainingText('button', 'Yes')
    );
};

exports.makePersonStatementRecipient = function () {
    var elem = exports.statementRecipientYesButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.statementRecipientOptions = function () {
    return $('[name="StatementRecipientForm"]').all(
        by.repeater('(key, format) in dataHolder.statementFormats'
        ));
};

exports.statementRecipientOptionByName = (name) => {
    return exports.statementRecipientOptions().filter(
        pph.matchText(name)
    ).first();
};

exports.statementRecipientSubOptions = (option) => {
    return option.all(by.repeater('item in ::format.formatAndDelivery'));
};

exports.statementRecipientSubOptionByName = (option, subOptionName) => {
    return exports.statementRecipientSubOptions(option).filter(
        pph.matchText(subOptionName)
    ).first();
};

exports.setStatementRecipientData = (optionName, subOptionName) => {
    let option = exports.statementRecipientOptionByName(optionName);

    asAlways(option, 'scrollIntoView', 'click');

    browser.wait(EC.visibilityOfAny(
        exports.statementRecipientSubOptions(option)
    ));

    asAlways(
        exports.statementRecipientSubOptionByName(option, subOptionName),
        'scrollIntoView', 'click'
    );
};

exports.mexicoRegDate= function () {
    return element(by.model('tgModularEditModel.mexicoRegistrationDate'));
};
exports.mexicoRegDateYear= function () {
    return exports.mexicoRegDate().element(by.css("[data-ng-model='date.year']"));
};
exports.mexicoRegDateMonth= function () {
    return exports.mexicoRegDate().element(by.css("[data-ng-model='date.month']"));
};
exports.mexicoRegDateDay= function () {
    return exports.mexicoRegDate().element(by.css("[data-ng-model='date.day']"));
};

exports.typeMexicoRegDate= function (year, month, day) {
    exports.mexicoRegDateYear().clear();
    exports.mexicoRegDateYear().sendKeys(year);
    exports.mexicoRegDateMonth().clear();
    exports.mexicoRegDateMonth().sendKeys(month);
    exports.mexicoRegDateDay().clear();
    return exports.mexicoRegDateDay().sendKeys(day);
};
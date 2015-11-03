'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

pages.person = exports;

exports.open = function(personId) {
    if(!personId) {
        return ftf.pageObject.prototype.open.call(this);
    }
    else {
        browser.get(_tf_config.urls.app_url + "#/person/" + personId);
        return pages.base.waitForAjax();
    }
};

exports.internalIpiNumberBinding = function () {
    return $(
        '[data-ng-if="person.creator && ' +
        '!person.pristine.master_data.primary_name.suisa_ipi_number"] .ng-binding'
    );
};

exports.internalIpiNumber = function () {
    var binding = exports.internalIpiNumberBinding();

    pages.base.scrollIntoView(binding);

    return pph.trim(binding.getText());
};

exports.suisaIpiNumberBinding = function () {
    return $(
        '[data-ng-if="person.pristine.master_data.primary_name.suisa_ipi_number"] ' +
        '.ng-binding'
    );
};

exports.suisaIpiNumber = function () {
    var element = exports.suisaIpiNumberBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validateSuisaIpiNumber = function (value) {
    expect(exports.suisaIpiNumber()).toBe(value);
};

exports.alternativeNameDataContainers = function () {
    return element.all(by.repeater(
        'name in person.pristine.master_data.alternative_names'
    ));
};

exports.alternativeNameBinding = function (i) {
    return (
        exports.alternativeNameDataContainers().get(i).$$('.ng-binding').first()
    );
};

exports.alternativeName = function (i) {
    var element = exports.alternativeNameBinding(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validateAlternativeName = function (i, value) {
    expect(pph.toUpperCase(exports.alternativeName(i))).toBe(value.toUpperCase());
};

exports.findId = function () {
    return browser.getCurrentUrl().then(function (value) {
        var regExp = /#\/person\/(.+)$/;
        expect(value).toMatch(regExp);
        return regExp.exec(value)[1];
    });
};

exports.firstNameInput = function () {
    return element(by.model('person.name.primary.master_data.primary_name.first_name'));
};
exports.lastNameInput = function () {
    return element(by.model('person.name.primary.master_data.primary_name.last_name'));
};
exports.alternativeFirstNameInput = function (i) {
    return this.alternativeNameContainer(i).element(
        by.model('person.name.alt[$index].master_data.alternative_names[$index].first_name')
    );
};
exports.alternativeLastNameInput = function (i) {
    return this.alternativeNameContainer(i).
        $('[data-ng-model="person.name.alt[$index].master_data.alternative_names[$index].last_name"]');
};
exports.alternativeCreditsNameInput = function (i) {
    return this.alternativeNameContainer(i).element(
        by.model('modularEditModels.model.creditsName')
    );
};
exports.alternativeSuisaIpiInput = function (i) {
    return this.alternativeNameContainer(i).element(
        by.model('modularEditModels.model.suisaIpiNumber')
    );
};
exports.addressOneInput = function (i) {
    return this.addressContainer(i).element(
        by.model('address.address_1')
    );
};
exports.primaryAddressCheckbox = function (i) {
    return exports.addressContainer(i).$('[ng-click="setPrimaryAddress(address);"]');
};
exports.primaryPhoneCheckbox = function (i) {
    return exports.phoneContainer(i).$('[ng-click="setPrimaryPhone(phoneEdit)"]');
};
exports.primaryEmailCheckbox = function (i) {
    return exports.emailContainer(i).$('[ng-click="setPrimaryEmail(emailEdit)"]');
};
exports.phoneInput = function (i) {
    return this.phoneContainer(i).element(
        by.model('phoneEdit.number')
    );
};
exports.emailInput = function (i) {
    return this.emailContainer(i).element(
        by.model('emailEdit.address')
    );
};
exports.payeeToggle = function () {
    var payee = $('[data-watched-init="isPayee = PAY.isRolePayee()"]');
    pages.base.scrollIntoView(payee);
    return payee;
};
exports.payeeOption = function (value) {
    return this.payeeToggle().element(
        by.cssContainingText('button', value)
    );
};

exports.suisaIPINumber = function () {
    return $(".e2e-primary-name-suisa-ipi .controls");
};
exports.nameBinding = function() {
    return $('.e2e-primary-name-full .ng-binding');
};
exports.firstNameBinding = function() {
    return $('[data-ng-if="person.pristine.master_data.primary_name.first_name"] .ng-binding');
};
exports.lastNameBinding = function() {
    return $('[data-ng-if="person.pristine.master_data.primary_name.last_name"] .ng-binding');
};
exports.alternativeNameBinding = function(i) {
    return $$('.e2e-alternative-name-full .controls').get(i);
};
exports.alternativeFirstNameBinding = function() {
    return $('[data-ng-if="name.first_name"] .ng-binding');
};
exports.alternativeLastNameBinding = function() {
    return $('[data-ng-if="name.last_name"] .ng-binding');
};
exports.affiliatedSocietyBinding = function() {
    return $('[data-ng-show="show.form.society.creatorSociety[$index].detail"]>div>div:first-child .ng-binding');
};
exports.addressOneBinding = function() {
    return $$('[data-ng-if="addr.address_1"] .ng-binding');
};
exports.addressTwoBinding = function() {
    return $$('[data-ng-if="addr.address_2"] .ng-binding');
};
exports.addressThreeBinding = function() {
    return $$('[data-ng-if="addr.address_3"] .ng-binding');
};
exports.cityBinding = function() {
    return $$('[data-ng-if="addr.city_town"] .ng-binding');
};
exports.regionBinding = function() {
    return $$('[data-ng-if="addr.region"]');
};
exports.postalCodeBinding = function() {
    return $$('[data-ng-if="addr.postal_code"]');
};
exports.countryBinding = function() {
    return $$('[data-ng-if="addr.territory_ids"] .ng-binding');
};
exports.phoneBinding = function() {
    return $$('[data-ng-repeat="phone in person.pristine.master_data.contact.phones"] .break-word');
};
exports.emailBinding = function() {
    return $$('[data-ng-repeat="email in person.pristine.master_data.contact.emails"] .break-word');
};
exports.payeeBinding = function() {
    return $('[data-tg-modular-actions="PAY.modularEdit.payees"] .control-group strong:not(.ng-hide)');
};

exports.getSaveButton = function (section) {
    return section.element(by.cssContainingText('button', 'Save'));
};

exports.editNameButton = function() {
    return $('[data-ng-click="showEdit(show.form.name.primary)"]');
};
exports.saveNameButton = function() {
    return exports.getSaveButton($('[data-ng-if="show.form.name.primary.edit"]'));
};
exports.editAlternativeNameButton = function() {
    return $('[data-ng-click="showEdit(show.form.name.alt[$index])"]');
};
exports.saveAlternativeNameButton = function() {
    return exports.getSaveButton($('[data-ng-show="show.form.name.alt[$index].edit"]'));
};
exports.editSocietyAffiliationButton = function() {
    return $('[data-ng-click="showEdit(show.form.society.creatorSociety[$index])"]');
};
exports.saveSocietyAffiliationButton = function() {
    return exports.getSaveButton($('[data-ng-show="show.form.society.creatorSociety[$index].edit"]'));
};
exports.editAddressButton = function(i) {
    return $$('[data-ng-click="showEdit(sectionAddress)"]').get(i);
};
exports.saveAddressButton = function(i) {
    return exports.getSaveButton($$('[data-ng-show="sectionAddress.edit"]').get(i));
};
exports.editPhoneButton = function(i) {
    return $$('[data-ng-click="showEdit(sectionPhone)"]').get(i);
};
exports.savePhoneButton = function(i) {
    return exports.getSaveButton($$('[data-ng-show="sectionPhone.edit"]').get(i));
};
exports.editEmailButton = function(i) {
    return $$('[data-ng-click="showEdit(sectionEmail)"]').get(i);
};
exports.saveEmailButton = function(i) {
    return exports.getSaveButton($$('[data-ng-show="sectionEmail.edit"]').get(i));
};
exports.editPaymentButton = function() {
    return $('[data-tg-modular-actions="PAY.modularEdit.payees"] button');
};
exports.savePaymentButton = function() {
    return exports.getSaveButton($('[data-tg-modular-actions="PAY.modularEdit.payees"]'));
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

exports.clickOnEditButton = function(element) {
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveButton = function(element) {
    pages.base.scrollIntoView(element);
    element.click();
    pages.base.waitForAjax();
};
exports.editPrimaryName = function() {
    return exports.clickOnEditButton(exports.editNameButton());
};
exports.savePrimaryName = function() {
    return exports.clickOnSaveButton(exports.saveNameButton());
};
exports.editAlternativeName = function() {
    return exports.clickOnEditButton(exports.editAlternativeNameButton());
};
exports.saveAlternativeName = function() {
    return exports.clickOnSaveButton(exports.saveAlternativeNameButton());
};
exports.editSocietyAffiliation = function() {
    return exports.clickOnEditButton(exports.editSocietyAffiliationButton());
};
exports.saveSocietyAffiliation = function() {
    return exports.clickOnSaveButton(exports.saveSocietyAffiliationButton());
};
exports.editAddress = function(i) {
    return exports.clickOnEditButton(exports.editAddressButton(i));
};
exports.saveAddress = function(i) {
    return exports.clickOnSaveButton(exports.saveAddressButton(i));
};
exports.editPhone = function(i) {
    return exports.clickOnEditButton(exports.editPhoneButton(i));
};
exports.savePhone = function(i) {
    return exports.clickOnSaveButton(exports.savePhoneButton(i));
};
exports.editEmail = function(i) {
    return exports.clickOnEditButton(exports.editEmailButton(i));
};
exports.saveEmail = function(i) {
    return exports.clickOnSaveButton(exports.saveEmailButton(i));
};
exports.editPayment = function() {
    return exports.clickOnEditButton(exports.editPaymentButton());
};
exports.savePayment = function() {
    return exports.clickOnSaveButton(exports.savePaymentButton());
};

exports.addressContainers = function () {
    return element.all(by.repeater(
        'addr in person.pristine.master_data.contact.addresses'
    ));
};
exports.addressContainer = function (i) {
    return this.addressContainers().get(i);
};
exports.phoneContainers = function () {
    return element.all(by.repeater(
        'phoneEdit in phones'
    ));
};
exports.phoneContainer = function (i) {
    return this.phoneContainers().get(i);
};
exports.emailContainers = function () {
    return element.all(by.repeater(
        'emailEdit in emails'
    ));
};
exports.emailContainer = function (i) {
    return this.emailContainers().get(i);
};
exports.phoneViewContainer = function(i) {
    return element.all(by.repeater(
        'phone in person.pristine.master_data.contact.phones'
    )).get(i);
};
exports.emailViewContainer = function(i) {
    return element.all(by.repeater(
        'email in person.pristine.master_data.contact.emails'
    )).get(i);
};
exports.alternativeNameContainers = function() {
    return element.all($$('[name="altName"]'));
};
exports.alternativeNameContainer = function (i) {
    return this.alternativeNameContainers().get(i);
};

exports.typeFirstName = function (value) {
    var element = this.firstNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeLastName = function (value) {
    var element = this.lastNameInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeFirstName = function (i, value) {
    var element = this.alternativeFirstNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeLastName = function (i, value) {
    var element = this.alternativeLastNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeCreditsName = function (i, value) {
    var element = this.alternativeCreditsNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeAlternativeSuisaIpiNumber = function (i, value) {
    var element = this.alternativeSuisaIpiInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.suisaIpiNumberInput = function () {
    return element(by.model('modularEditModels.model.suisaIpiNumber'));
};
exports.typeSuisaIpiNumber = function (value) {
    var element = this.suisaIpiNumberInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.affiliatedSocietySearchInput = function () {
    return element(by.model('s.society.model')).element(
        by.model('$term')
    );
};
exports.typeAffiliatedSocietySearchTerms = function (value) {
    var element = this.affiliatedSocietySearchInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.affiliatedSocietySearchResults = function () {
    return $$('.tg-typeahead__suggestions-group-item');
};
exports.affiliatedSocietySearchResult = function (i) {
    return this.affiliatedSocietySearchResults().get(i);
};
exports.clickAffiliatedSocietySearchResultByIndex = function (i) {
    browser.sleep(200);
    pages.base.waitForAjax();
    return this.affiliatedSocietySearchResult(i).click();
};
exports.typeIntoAddressOneInput = function (i, value) {
    var element = this.addressOneInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
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
exports.primaryAddressLabel = function (i) {
    return exports.addressContainer(i).element(
	    by.cssContainingText('div.label-success', 'Primary')
    );
};
exports.primaryPhoneLabel = function (i) {
    return exports.phoneViewContainer(i).element(
	    by.cssContainingText('div.label-success', 'Primary')
    );
};
exports.primaryEmailLabel = function (i) {
    return exports.emailViewContainer(i).element(
	    by.cssContainingText('div.label-success', 'Primary')
    );
};

exports.typeIntoPhoneInput = function(i, value) {
    var element = this.phoneInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.typeIntoEmailInput = function (i, value) {
    var element = this.emailInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.clickPayee = function (value) {
    return this.payeeOption(value).click();
};

exports.validateIpiNumber = function (value) {
    expect(exports.internalIpiNumber()).toBe(value);
};
exports.enterPersonSearchTerms = function (value) {
    var element = exports.personSearchTermsInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};
exports.personSearchTermsInput = function () {
    return pages.base.mainSearchBar().element(by.model('$term'));
};
exports.personSearchMatches = function () {
    return pages.base.mainSearchBar().$$('.tg-typeahead__suggestions-group-item');
};
exports.personSearchMatch = function (i) {
    var elements = exports.personSearchMatches();
    browser.wait(ExpectedConditions.visibilityOfAny(elements));
    return elements.get(i);
};
exports.clickPersonSearchMatch = function (i) {
    return exports.personSearchMatch(i).click();
};

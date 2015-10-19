'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

pages.personStaging = exports;

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
exports.nameElement = function () {
    return $('.e2e-primary-name-full .ng-binding');
};
exports.firstNameElement = function () {
    return $('[data-ng-if="person.pristine.master_data.primary_name.first_name"] .ng-binding');
};
exports.lastNameElement = function () {
    return $('[data-ng-if="person.pristine.master_data.primary_name.last_name"] .ng-binding');
};
exports.alternativeNameElement = function (i) {
    return $$('.e2e-alternative-name-full .controls').get(i);
};
exports.alternativeFirstNameElement = function () {
    return $('[data-ng-if="name.first_name"] .ng-binding');
};
exports.alternativeLastNameElement = function () {
    return $('[data-ng-if="name.last_name"] .ng-binding');
};
exports.affiliatedSocietyElement = function () {
    return $('[data-ng-show="show.form.society.creatorSociety[$index].detail"]>div>div:first-child .ng-binding');
};
exports.addressOneElement = function () {
    return $$('[data-ng-if="addr.address_1"] .ng-binding');
};
exports.phoneElement = function () {
    return $$('[data-ng-repeat="phone in person.pristine.master_data.contact.phones"] .break-word');
};
exports.emailElement = function () {
    return $$('[data-ng-repeat="email in person.pristine.master_data.contact.emails"] .break-word');
};
exports.payeeElement = function () {
    return $('[data-tg-modular-actions="PAY.modularEdit.payees"] .control-group strong:not(.ng-hide)');
};

exports.getSaveButton = function (section) {
    return section.element(by.cssContainingText('button', 'Save'));
};

exports.editNameElement = function () {
    return $('[data-ng-click="showEdit(show.form.name.primary)"]');
};
exports.saveNameElement = function () {
    return exports.getSaveButton($('[data-ng-if="show.form.name.primary.edit"]'));
};
exports.editAlternativeNameElement = function () {
    return $('[data-ng-click="showEdit(show.form.name.alt[$index])"]');
};
exports.saveAlternativeNameElement = function () {
    return exports.getSaveButton($('[data-ng-show="show.form.name.alt[$index].edit"]'));
};
exports.editSocietyAffiliationElement = function () {
    return $('[data-ng-click="showEdit(show.form.society.creatorSociety[$index])"]');
};
exports.saveSocietyAffiliationElement = function () {
    return exports.getSaveButton($('[data-ng-show="show.form.society.creatorSociety[$index].edit"]'));
};
exports.editAddressElement = function (i) {
    return $$('[data-ng-click="showEdit(sectionAddress)"]').get(i);
};
exports.saveAddressElement = function (i) {
    return exports.getSaveButton($$('[data-ng-show="sectionAddress.edit"]').get(i));
};
exports.editPhoneElement = function (i) {
    return $$('[data-ng-click="showEdit(sectionPhone)"]').get(i);
};
exports.savePhoneElement = function (i) {
    return exports.getSaveButton($$('[data-ng-show="sectionPhone.edit"]').get(i));
};
exports.editEmailElement = function (i) {
    return $$('[data-ng-click="showEdit(sectionEmail)"]').get(i);
};
exports.saveEmailElement = function (i) {
    return exports.getSaveButton($$('[data-ng-show="sectionEmail.edit"]').get(i));
};
exports.editPaymentInfo = function () {
    return $('[data-tg-modular-actions="PAY.modularEdit.payees"] button');
};
exports.savePaymentInfo = function () {
    return exports.getSaveButton($('[data-tg-modular-actions="PAY.modularEdit.payees"]'));
};

exports.getSuisaIPI = function () {
    browser.wait(ExpectedConditions.visibilityOf(exports.suisaIPINumber()));
    var element = exports.suisaIPINumber();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getName = function () {
    var element = exports.nameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getFirstName = function () {
    var element = exports.firstNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getLastName = function () {
    var element = exports.lastNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeName = function (i) {
    var element = exports.alternativeNameElement(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeFirstName = function () {
    var element = exports.alternativeFirstNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAlternativeLastName = function () {
    var element = exports.alternativeLastNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAffiliatedSociety = function () {
    var element = exports.affiliatedSocietyElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getAddressOne = function (i) {
    var element = exports.addressOneElement().get(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getPhone = function (i) {
    var element = exports.phoneElement().get(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getEmail = function (i) {
    var element = exports.emailElement().get(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};
exports.getPayee = function () {
    var element = exports.payeeElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.clickOnEditPrimaryName = function () {
    var element = exports.editNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePrimaryName = function () {
    var element = exports.saveNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditAlternativeName = function () {
    var element = exports.editAlternativeNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveAlternativeName = function () {
    var element = exports.saveAlternativeNameElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditSocietyAffiliation = function () {
    var element = exports.editSocietyAffiliationElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveSocietyAffiliation = function () {
    var element = exports.saveSocietyAffiliationElement();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditAddress = function (i) {
    var element = exports.editAddressElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveAddress = function (i) {
    var element = exports.saveAddressElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditPhone = function (i) {
    var element = exports.editPhoneElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePhone = function (i) {
    var element = exports.savePhoneElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditEmail = function (i) {
    var element = exports.editEmailElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSaveEmail = function (i) {
    var element = exports.saveEmailElement(i);
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnEditPaymentInformation = function () {
    var element = exports.editPaymentInfo();
    pages.base.scrollIntoView(element);
    return element.click();
};
exports.clickOnSavePaymentInformation = function () {
    var element = exports.savePaymentInfo();
    pages.base.scrollIntoView(element);
    return element.click();
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
exports.alternativeNameContainers = function () {
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
exports.typeIntoPhoneInput = function (i, value) {
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
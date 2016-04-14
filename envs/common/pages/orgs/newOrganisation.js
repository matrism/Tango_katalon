'use strict';

var pph = require('../../../../helpers/pph.js');

pages.newOrganisation = exports;

exports.nameField = function () {
    return element(by.model('modularEditModels.model.name'));
};

exports.populateName = function (name) {
    return exports.nameField().sendKeys(name);
};

exports.orgTypeButtons = function () {
    return element(by.model('modularEditModels.model.type')).$$('button');
};

exports.selectOrgType = function (type) {
    var buttons = exports.orgTypeButtons();

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.suisaIpiNumberInput = function() {
    return element(by.model('modularEditModels.model.typeModel.suisaIpiNumber'));
};

exports.enterSuisaIpiNumber = function(value) {
    var input = exports.suisaIpiNumberInput();

    pages.base.scrollIntoView(input);

    input.clear();

    return input.sendKeys(value);
};

exports.territoryOfOperationField = function () {
    return element(by.model('modularEditModels.model.territoriesOfOperation'));
};

exports.selectTerritoryOfOperation = function (name) {
    var elem = exports.territoryOfOperationField(),
        typeahead = Typeahead(elem.element(by.model('$dataHolder.internalModel')), true);

    pages.base.scrollIntoView(elem);
    typeahead.$$('.tg-typeahead__tags-text').then(function(elements) {
        if(elements.length !== 0) {
            elements[0].click();
        }
    });

    typeahead.sendKeys(name);
    pages.base.waitForAjax();
    typeahead.results().filter(pph.matchTextExact(name)).first().click();
};

exports.societyTypeahead = function () {
    return Typeahead(element(by.model('modularEditModels.model.typeModel.affiliatedSociety')), true);
};

exports.selectSociety = function (name) {
    var typeahead = exports.societyTypeahead;
    typeahead.sendKeys(name);
    typeahead.results().filter(pph.matchTextExact(name));
};

exports.isRegistrationRecipientButtons = function () {
    return $$('.e2e-reg-delivery-is button');
};

exports.makeOrgRegistrationRecipient = function () {
    var buttons = exports.isRegistrationRecipientButtons();
    pages.base.scrollIntoView(buttons.first());

    buttons.filter(pph.matchTextExact('Yes')).first().click();
};

exports.makeOrgHaveRegistrationRecipients = function () {
    var buttons = $$('.e2e-reg-recipient-has button');
    pages.base.scrollIntoView(buttons.first());

    buttons.filter(pph.matchTextExact('Yes')).first().click();
};

exports.clickAddRecipientButton = function () {
    return $('.e2e-reg-recipient-add').click();
};

exports.typeRecipientName = function (name) {
    var elem = Typeahead(element(by.model('recipient.model')), true);
    elem.sendKeys(name);
    pages.base.waitForAjax();
    elem.results(name).click();
};

exports.addRecipient = function (name) {
    exports.clickAddRecipientButton();
    exports.typeRecipientName(name);
};

exports.publisherTypeButtons = function () {
    return element.all(by.repeater('publisher in ::dataHolder.publisherRelationshipTypes'));
};

exports.selectPublisherType = function (type) {
    var buttons = exports.publisherTypeButtons(),
        button = buttons.filter(pph.matchTextExact(type)).first();

    pages.base.scrollIntoView(button);

    button.click();
};

exports.addressLines = function (num) {
    var selector = '.e2e-contact-address-';

    return $(selector + num);
};

exports.addressLineInput = function(num) {
    return exports.addressLines(num).$('input');
};

exports.fillContactAddressLines = function (lines) {
    var lineInput = exports.addressLineInput;

    lineInput(2).sendKeys(lines[1]);
    expect(pph.classList(lineInput(1))).toContain('ng-invalid-required');
    lineInput(3).sendKeys(lines[2]);
    lineInput(1).sendKeys(lines[0]);

    expect(pph.classList(lineInput(1))).not.toContain('ng-invalid-required');
};

function sendKeysToElement(elem) {
    return function (val) {
        elem.sendKeys(val);
    };
};

exports.fillContactCity = sendKeysToElement($('.e2e-contact-address-city input'));
exports.fillContactState = sendKeysToElement($('.e2e-contact-address-region input'));
exports.fillContactZipCode = sendKeysToElement($('.e2e-contact-address-postal-code input'));

exports.setContactCountry = function (name) {
    var elem = $('.e2e-contact-address-country'),
        countryElem = elem.element(by.cssContainingText('.dropdown-menu li', name));

    pages.base.scrollIntoView(elem);
    elem.$('.tg-dropdown-button').click();
    countryElem.click();
};

exports.fillContactZipCode = sendKeysToElement($('.e2e-contact-address-postal-code input'));
exports.fillContactPhoneNumber = sendKeysToElement($('.e2e-contact-phone-number input'));
exports.fillContactFaxNumber = sendKeysToElement($('.e2e-contact-phone-fax input'));
exports.fillContactEmail = sendKeysToElement($('.e2e-contact-phone-email input'));

exports.deliveryMethodPanels = function () {
    return $$('.e2e-reg-delivery-method');
};

exports.addDeliveryMethodButton = function () {
    return $('.e2e-method-add');
};

exports.deliveryMethodButtons = function () {
    return exports.deliveryMethodPanels().last().$$('.e2e-method-type button');
};

exports.clickDeliveryMethodButton = function (type) {
    var methods = exports.deliveryMethodButtons();

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(methods));
    methods.filter(pph.matchTextExact(type)).first().click();
};

exports.expectFtpAndSftpToHaveDifferentLabels = function () {
    /*
     * This method tests a known bug that should be fixed 
     * in the near future. Until then, it will always fail.
     */

    var panel = exports.deliveryMethodPanels().last(),
        button = exports.addDeliveryMethodButton(),
        methods = exports.deliveryMethodButtons();

    pages.base.scrollIntoView(button);
    button.click();

    exports.clickDeliveryMethodButton('FTP');
    expect(panel.$('.e2e-method-host label').getText()).toEqual('FTP Address:');
    exports.clickDeliveryMethodButton('SFTP');
    expect(panel.$('.e2e-method-host label').getText()).toEqual('SFTP Address:');
    exports.clickDeliveryMethodButton('Email');
    exports.clickDeliveryMethodButton('SFTP');
    expect(panel.$('.e2e-method-host label').getText()).toEqual('SFTP Address:');

    panel.$('.e2e-method-remove .btn-delete').click();

    pages.base.waitUntilModalAnimationFinishes();
    pages.base.expectModalPopUpToBeDisplayed();
    pages.base.clickModalPrimaryButton();
};

exports.addDeliveryMethod = function (type) {
    var button = exports.addDeliveryMethodButton(),
        methods = exports.deliveryMethodButtons();

    pages.base.scrollIntoView(button);
    button.click();

    //exports.expectFtpAndSftpToHaveDifferentLabels();

    exports.clickDeliveryMethodButton(type);
};

exports.fillRequiredFieldsForDeliveryMethod = function (type) {
    var elem = exports.deliveryMethodPanels().last().$('.e2e-method-' + type.toLowerCase()),

    options = {
        FTP: function () {
            elem.element(by.model('deliveryMethod.model.host')).sendKeys('ftp.tango.testing');
            elem.element(by.model('deliveryMethod.model.port')).sendKeys('80');
            elem.element(by.model('deliveryMethod.model.username')).sendKeys('testUsername');
            elem.$('.password-field').sendKeys('testPassword');
        }
    };

    options[type]();
};

exports.acknowledgementProcessButtons = function () {
    return $$('.e2e-acknowledgement-type button');
};

exports.selectAcknowledgementProcess = function (type) {
    var buttons = exports.acknowledgementProcessButtons();

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.acknowledgementProcessDeliveryMethodButtons = function () {
    return $$('.e2e-acknowledgement-type button');
};

exports.selectAcknowledgementProcessDeliveryMethod = function (type) {
    var buttons = exports.acknowledgementProcessDeliveryMethodButtons();

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.subpublisherRelationshipButtons = function () {
    return $$('.e2e-sub-publishers-has button');
};

exports.clickSubpublisherRelationshipButton = function (type) {
    var buttons = exports.subpublisherRelationshipButtons();

    pages.base.scrollIntoView(buttons.first());

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.subpublisherForm = function () {
    return $('.e2e-sub-publishers + .row');
};

exports.subpublishersRepeater = function () {
    return exports.subpublisherForm().$$('.e2e-sub-publisher');
};

exports.addSubpublisherButton = function () {
    return $('.e2e-sub-publisher-add');
};

exports.removeSubpublisherButton = function () {
    return $('.e2e-sub-publisher-remove');
};

exports.removeLastSubpublisher = function () {
    var modalButton = $('.modal-dialog .btn-primary');

    return exports.removeSubpublisherButton().click();
};

exports.subpublisherTypeahead = function () {
    var elem = exports.subpublishersRepeater().last().element(by.model('modularEditModels.model.publisher'));

    elem.results = function () { 
        return exports.subpublisherForm().$$('.e2e-sub-publisher-def .tg-typeahead__suggestions-group-item');
    };

    return elem;
};

exports.fillRequiredFieldsForLastSubpublisher = function (name, territory) {
    var subpublisherTypeahead = exports.subpublisherTypeahead(),
        territoryOfControl = exports.subpublishersRepeater().last().element(by.model('modularEditModels.model.territoryOfControl')),
        territoryTypeahead = Typeahead(territoryOfControl.element(by.model('$dataHolder.internalModel')), true),
        results, firstResult;

    pages.base.scrollIntoView(subpublisherTypeahead);
    subpublisherTypeahead.element(by.model('$term')).sendKeys(name);

    results = subpublisherTypeahead.results();
    browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));

    //firstResult = results.filter(pph.matchText(name)).first()
    firstResult = results.first()
    browser.driver.actions().mouseMove(firstResult).perform();
    firstResult.click();

    territoryOfControl.$('.tg-typeahead__tags-text').click();
    territoryTypeahead.sendKeys(territory);
    pages.base.waitForAjax();
    territoryTypeahead.results().filter(pph.matchTextExact(territory)).first().click();
};

exports.fillSubpublisherSocietyAgreementNumber = function (number) {
    return $('.e2e-sub-publisher-agreement-number input').sendKeys(number);
};

exports.selectSubpublisherSociety = function (name) {
    var elem = Typeahead(element(by.model('modularEditModels.model.agreement.society')), true);
    elem.sendKeys(name);
    pages.base.waitForAjax();
    elem.results().filter(pph.matchTextExact(name)).first().click();
};

exports.clickAddSubpublisherButton = function () {
    var subpublishers = exports.subpublishersRepeater(),
        subpublishersCount;

    subpublishers.count().then(function (num) {
        subpublishersCount = num;
        exports.addSubpublisherButton().click();
        expect(subpublishers.count()).toBe(subpublishersCount+1);
    });
};

exports.incomeProviderButtons = function () {
    return element(by.model('modularEditModels.model.isIncomeProvider')).$$('button');
};

exports.makeOrgIncomeProvider = function () {
    pages.base.scrollIntoView(exports.incomeProviderButtons().first());
    exports.incomeProviderButtons().filter(pph.matchTextExact('Yes')).first().click();
};

exports.territoryErrorMessage = function () {
    var error = $('.e2e-income-provider div + div + .help-inline .validation-message-error');
    return error;
};

exports.expectTerritoryErrorMessageToBeVisible = function () {
    var error = exports.territoryErrorMessage();

    expect(error.isPresent()).toBeTruthy();
    expect(error.isDisplayed()).toBeTruthy();
};

exports.expectTerritoryErrorMessageToNotBePresent = function () {
    var error = exports.territoryErrorMessage();

    expect(error.isPresent()).toBeFalsy();
};

exports.primaryIncomeProviderTerritoryOfOperationDropdown = function() {
    return element(by.model('modularEditModels.model.primaryTerritoryOfOperation'));
};

exports.primaryIncomeProviderTerritoryOfOperationOptions = function() {
    return exports.primaryIncomeProviderTerritoryOfOperationDropdown().$$('li a');
};

exports.selectPrimaryIncomeProviderTerritoryOfOperation = function(value) {
    var element = exports.primaryIncomeProviderTerritoryOfOperationDropdown(),
        elements = exports.primaryIncomeProviderTerritoryOfOperationOptions();

    pages.base.scrollIntoView(element);

    element.click();

    return elements.first().click();
};

exports.incomeProviderDefaultCurrencySelect = function () {
    return element(by.model('modularEditModels.model.currencyCode'));
};

exports.setDefaultIncomeProviderCurrency = function (value) {
    var select = exports.incomeProviderDefaultCurrencySelect();

    pages.base.scrollIntoView(select);
    select.click();
    select.element(by.cssContainingText('li a', value)).click();
};

exports.incomeFileTypeSelect = function (){
    return element(by.model('modularEditModels.model.incomeFileTypes'));
};

exports.setIncomeFileType = function(type) {
    var select = exports.incomeFileTypeSelect(),
        results = select.$$('.tg-typeahead__suggestions-group-item');
    pages.base.scrollIntoView(select);

    select.element(by.model('$term')).sendKeys(type);

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));
    results.first().click();
};

exports.incomeTypeMappingRows = function() {
    return $$('.e2e-income-provider-mapping');
};

exports.incomeTypeMappingTypeInput = function(i) {
    return exports.incomeTypeMappingRows().get(i).$('.e2e-mapping-type input');
};

exports.enterIncomeTypeMappingType = function(i, value) {
    var element = exports.incomeTypeMappingTypeInput(i);

    pages.base.scrollIntoView(element);

    element.clear();

    return element.sendKeys(value);
};

exports.incomeTypeMappingDescriptionInput = function(i) {
    return exports.incomeTypeMappingRows().get(i).$('.e2e-mapping-description input');
};

exports.enterIncomeTypeMappingDescription = function(i, value) {
    var element = exports.incomeTypeMappingDescriptionInput(i);

    pages.base.scrollIntoView(element);

    element.clear();

    return element.sendKeys(value);
};

exports.incomeTypeMappingFileTypeTypeahead = function(i) {
    return exports.incomeTypeMappingRows().get(i).element(
        by.model('incomeType.fileFormat')
    );
};

exports.incomeTypeMappingFileTypeInput = function(i) {
    return exports.incomeTypeMappingFileTypeTypeahead(i).element(by.model('$term'));
};

exports.enterIncomeTypeMappingFileTypeSearchTerms = function(i, value) {
    var element = exports.incomeTypeMappingFileTypeInput(i);

    pages.base.scrollIntoView(element);

    element.clear();

    return element.sendKeys(value);
};

exports.incomeTypeMappingFileTypeSearchResults = function() {
    return $$('.tg-typeahead__suggestions-group-item');
};

exports.selectIncomeTypeMappingFileTypeSearchResultByIndex = function(i) {
    var elements = exports.incomeTypeMappingFileTypeSearchResults(),
        element;

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(elements));

    element = elements.get(i);

    pages.base.scrollIntoView(element);

    return element.click();
};

exports.incomeTypeMappingInternalTypeTypeahead = function(i) {
    return exports.incomeTypeMappingRows().get(i).element(by.model(
        'incomeType.internalIncomeType'
    ));
};

exports.incomeTypeMappingInternalTypeInput = function(i) {
    return exports.incomeTypeMappingInternalTypeTypeahead(i).element(by.model(
        '$term'
    ));
};

exports.enterIncomeTypeMappingInternalTypeSearchTerms = function(i, value) {
    var element = exports.incomeTypeMappingInternalTypeInput(i);

    pages.base.scrollIntoView(element);

    element.clear();

    return element.sendKeys(value);
};

exports.incomeTypeMappingInternalTypeSearchResults = function() {
    return $$('.tg-typeahead__suggestions-group-item');
};

exports.selectIncomeTypeMappingInternalTypeSearchResultByIndex = function(i) {
    var elements = exports.incomeTypeMappingInternalTypeSearchResults(),
        element;

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(elements));

    element = elements.get(i);

    pages.base.scrollIntoView(element);

    return element.click();
};

exports.addIncomeTypeMapping = function (index, type, desc, fileFormat, internalType) {
    exports.enterIncomeTypeMappingType(index, type);
    exports.enterIncomeTypeMappingDescription(index, desc);

    if (fileFormat) {
        exports.enterIncomeTypeMappingFileTypeSearchTerms(index, fileFormat);
        exports.selectIncomeTypeMappingFileTypeSearchResultByIndex(0);
    }

    exports.enterIncomeTypeMappingInternalTypeSearchTerms(index, internalType);
    exports.selectIncomeTypeMappingInternalTypeSearchResultByIndex(0);
};

exports.payeeYesButton = function () {
    return $$('.e2e-payee-is button').first();
};

exports.makeOrgPayee = function () {
    var elem = exports.payeeYesButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.expectPayeeAccountNameToBeIfPresent = function (val) {
    var elem = element(by.model('payeeAccount.account_name'));

    elem.isPresent().then(function(isPresent){
        if (isPresent) {
            expect(elem.getAttribute('value')).toEqual(val);
        };
    });
};

exports.statementRecipientButtonsContainer = () => {
    return $('.e2e-payment-statement-is');
};

exports.statementRecipientYesButton = function () {
    return exports.statementRecipientButtonsContainer().element(
        by.cssContainingText('button', 'Yes')
    );
};

exports.makeOrgStatementRecipient = function () {
    var elem = exports.statementRecipientYesButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.statementRecipientOptions = function () {
    return $('[name="statementRecipientForm"]').all(
        by.repeater('(key,value) in PAY.viewModel.statementRecipient'
    ));
};

exports.statementRecipientOptionByName = (name) => {
    return exports.statementRecipientOptions().filter(
        pph.matchText(name)
    ).first();
};

exports.statementRecipientSubOptions = (option) => {
    return option.all(by.repeater('item in value.formatAndDelivery'));
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

exports.affiliatedSocietyTypeahead = function() {
    return element(by.model('modularEditModels.model.typeModel.affiliatedSociety'));
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

exports.affiliatedSocietySearchResultOptions = function() {
    var options = $$('.tg-typeahead__suggestions-group-item');

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(options));

    return options;
};

exports.selectAffiliatedSocietySearchResultByIndex = function(i) {
    return exports.affiliatedSocietySearchResultOptions().get(i).click();
};

exports.doneButton = function () {
    return $('#FORM-CONTROLS').element(by.cssContainingText('button', 'Done'));
};

exports.expectFormToBeValid = function () {
    var button = exports.doneButton();
    expect(button.evaluate('OrganisationCreateForm.$valid')).toBeTruthy();
};

exports.expectDoneButtonToBeClickable = function () {
    expect(pph.matchesCssSelector(exports.doneButton(), '.disabled')).toBeFalsy();
};

exports.saveOrganisation = function() {
    exports.expectDoneButtonToBeClickable();

    return exports.doneButton().click().then(function() {
        pages.base.waitForAjax();
        expect(browser.getCurrentUrl()).toMatch(/#\/org\/.+$/);
    });
};

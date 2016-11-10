'use strict';

var pph = require('../../../../helpers/pph.js');

pages.newOrganisation = exports;

exports.nameField = function () {
    return element(by.model('tgModularEditModel.name'));
};

exports.societyAbbreviationField = function () {
    return element(by.model('tgModularEditModel.cisacSocietyAbbreviation'));
};

exports.societyCodeField = function () {
    return element(by.model('tgModularEditModel.cisacSocietyCode'));
};

exports.populateName = function (name, edit) {
    var element = exports.nameField();
    if(edit){
        element.clear();
    }
    return element.sendKeys(name);
};

exports.fillSocietyAbbreviation = function (name, edit) {
    var element = exports.societyAbbreviationField();
    if(edit){
        element.clear();
    }
    return element.sendKeys(name);
};

exports.fillSocietyCode = function (name, edit) {
    var element = exports.societyCodeField();
    if(edit){
        element.clear();
    }
    return element.sendKeys(name);
};

exports.orgTypeButtons = function () {
    return element(by.model('tgModularEditModel.type')).$$('button');
};

exports.orgTypeButtonActive = function () {
    return element(by.model('tgModularEditModel.type')).$$('.active');
};

exports.verifyActiveOrgTypeButton = function (type) {
    var activeButton = exports.orgTypeButtonActive();

    //pages.base.scrollIntoView(activeButton);
    activeButton.getText().then(function (text) {
        expect(text[0]).toEqual(type);
    });
    
};

exports.selectOrgType = function (type) {
    var buttons = exports.orgTypeButtons();

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.suisaIpiNumberInput = function() {
    return element(by.model('tgModularEditModel.suisaIpiNumber'));
};

exports.enterSuisaIpiNumber = function(value) {
    var input = exports.suisaIpiNumberInput();

    pages.base.scrollIntoView(input);

    input.clear();

    return input.sendKeys(value);
};

exports.designeeCheckbox = function () {
    return element(by.model('tgModularEditModel.isPublisherDesignee'));
};

exports.checkDesigneeCheckbox = function () {
    return exports.designeeCheckbox().click();
};

exports.territoryOfOperationField = function () {
    return element(by.model('tgModularEditModel.territoriesOfOperation'));
};

exports.selectTerritoryOfOperation = function (name) {
    var elem = exports.territoryOfOperationField(),
        typeahead = Typeahead(elem.element(by.model('$dataHolder.internalModel')));

    pages.base.scrollIntoView(elem);

    typeahead.$$('.tg-typeahead__tags-text').then(function(elements) {
        if(elements.length !== 0) {
            elements[0].click();
        }
    });

    typeahead.select(name);
};

exports.affiliatedSocietyTypeahead = function () {
    return element(by.css('[tg-org-typeahead-model="tgModularEditModel.affiliatedSociety"]'));
};

exports.societiesOfInterestTypeahead = function () {
    return element(by.css('[tg-org-typeahead-model="tgModularEditModel.societiesOfInterest"]'));
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

exports.societiesOfInterestSearchTermsInput = function() {
    return exports.societiesOfInterestTypeahead().element(by.model('$term'));
};

exports.enterSocietiesOfInterestSearchTerms = function(value) {
    var input = exports.societiesOfInterestSearchTermsInput();

    pages.base.scrollIntoView(input);

    input.clear();

    return input.sendKeys(value);
};

exports.societiesOfInterestSearchResultOptions = function() {
    var options = $$('.tg-typeahead__suggestions-group-item');

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(options));

    return options;
};

exports.selectSocietiesOfInterestSearchResultByIndex = function(i) {
    return exports.societiesOfInterestSearchResultOptions().get(i).click();
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

exports.recipientTerritoryNotOverlapMessage = function () {
    var error = element(by.css('[territories-not-overlapping-message="At least one Territory of Operation must overlap between Organisation and Registration Recipient."]'));
    return error;
};

exports.expectRecipientTerritoryNotOverlapMessageToBeVisible = function () {
    var error = exports.recipientTerritoryNotOverlapMessage();

    expect(error.isPresent()).toBeTruthy();
    expect(error.isDisplayed()).toBeTruthy();
};

exports.expectRecipientTerritoryNotOverlapMessageToNotBeVisible = function () {
    var error = exports.recipientTerritoryNotOverlapMessage();

    expect(error.isPresent()).toBeTruthy();
    expect(error.isDisplayed()).toBeFalsy();
};

exports.typeRecipientName = function (name) {
    var elem = Typeahead(element(by.css('.e2e-reg-recipient')).element(by.model('tgOrgTypeaheadModel')), true);
    elem.click();
    elem.sendKeys(name);
    elem.click();
    elem.sendKeys(name);
    pages.base.waitForAjax();
    elem.results(name).click();
};

exports.addRecipient = function () {
    exports.clickAddRecipientButton();
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

    lineInput(2).clear();
    lineInput(2).sendKeys(lines[1]);
    expect(pph.classList(lineInput(1))).toContain('ng-invalid-required');
    lineInput(3).clear();
    lineInput(3).sendKeys(lines[2]);
    lineInput(1).clear();
    lineInput(1).sendKeys(lines[0]);

    expect(pph.classList(lineInput(1))).not.toContain('ng-invalid-required');
};

function sendKeysToElement(elem) {
    return function (val) {
        elem.clear();
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

    pages.base.waitForModal();
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

exports.removeDeliveryMethod = function (i) {
    var button = $$('.e2e-reg-delivery-method .e2e-method-remove .btn-delete').get(i);

    pages.base.scrollIntoView(button);
    button.click();

    pages.base.waitForModal();
    pages.base.expectModalPopUpToBeDisplayed();
    pages.base.clickModalPrimaryButton();
};

exports.fillRequiredFieldsForDeliveryMethod = function (type) {
    var elem = exports.deliveryMethodPanels().last().$('.e2e-method-' + type.toLowerCase()),
    notification = exports.deliveryMethodPanels().last().$('.e2e-method-notification-emails'),

    options = {
        FTP: function () {
            elem.element(by.model('deliveryMethod.deliveryMechanism.ftp.host')).sendKeys('ftp.tango.testing');
            elem.element(by.model('deliveryMethod.deliveryMechanism.ftp.port')).sendKeys('80');
            elem.element(by.model('deliveryMethod.deliveryMechanism.ftp.username')).sendKeys('testUsername');
            elem.element(by.model('deliveryMethod.deliveryMechanism.ftp.password')).sendKeys('testPassword');
            notification.element(by.model('deliveryMethod.deliveryNotification.primaryEmails')).sendKeys('test@nowhere.tango');
        },
    };

    options[type]();
};

exports.acknowledgementProcessButtons = function () {
    return $$('.e2e-acknowledgement-type button');
};

exports.selectAcknowledgementProcess = function (type) {
    var buttons = exports.acknowledgementProcessButtons();

    asAlways(
        buttons.filter(pph.matchTextExact(type)).first(),
        'scrollIntoView', 'click'
    );
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
    var elem = exports.subpublishersRepeater().last().element(by.css('[ng-name="subPublisher"]'));

    elem.results = function () { 
        return exports.subpublisherForm().$$('.e2e-sub-publisher-def .tg-typeahead__suggestions-group-item');
    };

    return elem;
};

exports.fillRequiredFieldsForLastSubpublisher = function (name, territory) {
    var subpublisherTypeahead = exports.subpublisherTypeahead(),
        territoryOfControl = exports.subpublishersRepeater().last().element(by.model('tgModularEditModel.territoriesOfControl')),
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
    var elem = Typeahead(element(by.css('[ng-name="agreementSociety"]')), true);
    elem.sendKeys(name);
    browser.wait(EC.visibilityOfAny(elem.results()));
    elem.results().$$('.tg-typeahead__item-left').filter(
        pph.matchTextExact(name)
    ).first().click();
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
    return element(by.model('__isIncomeProvider')).$$('button');
};

exports.makeOrgIncomeProvider = function () {
    pages.base.scrollIntoView(exports.incomeProviderButtons().first());
    exports.incomeProviderButtons().filter(pph.matchTextExact('Yes')).first().click();
};

exports.territoryErrorMessage = function () {
    var error = element(by.css('[territory-of-operation-required-message="Please add at least one Territory of Operation in order to save the changes."]'));
    return error;
};

exports.expectTerritoryErrorMessageToBeVisible = function () {
    var error = exports.territoryErrorMessage();

    expect(error.isPresent()).toBeTruthy();
    expect(error.isDisplayed()).toBeTruthy();
};

exports.expectTerritoryErrorMessageToNotBeVisible = function () {
    var error = exports.territoryErrorMessage();

    expect(error.isPresent()).toBeTruthy();
    expect(error.isDisplayed()).toBeFalsy();
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
    return element(by.model('tgModularEditModel.currencyCode'));
};

exports.setDefaultIncomeProviderCurrency = function (value) {
    var select = exports.incomeProviderDefaultCurrencySelect();

    pages.base.scrollIntoView(select);
    select.click();
    select.element(by.cssContainingText('li a', value)).click();
};

exports.incomeFileTypeSelect = function (){
    return element(by.model('tgModularEditModel.incomeFileTypes'));
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

exports.payeeNoButton = function () {
    return $$('.e2e-payee-is button').last();
};

exports.makeOrgPayee = function () {
    var elem = exports.payeeYesButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.makeOrgNonPayee = function () {
    var elem = exports.payeeNoButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.payeeAccountNameInput = function () {
    var elem = element(by.model('payeeAccount.account_name'));
    return elem;
};

exports.setPayeeAccountName = function (name) {
    var elem = exports.payeeAccountNameInput();

    elem.sendKeys(name);
};

exports.expectPayeeAccountNameToBeIfPresent = function (val) {
    var elem = exports.payeeAccountNameInput();

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

exports.doneButton = function () {
    return $(".btn.btn-primary.ng-scope");
};

exports.expectFormToBeValid = function () {
    var button = exports.doneButton();
    expect(button.evaluate('__isValid')).toBeTruthy();
};

exports.expectDoneButtonToBeClickable = function () {
    expect(pph.matchesCssSelector(exports.doneButton(), '.disabled')).toBeFalsy();
};

exports.saveOrganisation = function() {
    exports.expectDoneButtonToBeClickable();
    exports.doneButton().click();
    return pages.base.waitForAjax();
};

exports.validateSaveRedirection = function () {
    expect(browser.getCurrentUrl()).toMatch(/#\/org\/.+$/);
};

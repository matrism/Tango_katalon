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
    return element.all(by.model('orgIs.recipient'));
};

exports.makeOrgRegistrationRecipient = function () {
    var buttons = exports.isRegistrationRecipientButtons();
    pages.base.scrollIntoView(buttons.first());

    buttons.filter(pph.matchTextExact('Yes')).first().click();
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

exports.deliveryMethodPanels = function () {
    return element.all(by.repeater('dm in getDeliveryMethods()'));
};

exports.addDeliveryMethodButton = function () {
    return element(by.buttonText('+ Add Delivery Method'));
};

exports.deliveryMethodButtons = function () {
    return exports.deliveryMethodPanels().last().all(by.model('dm.delivery_mechanism_type'));
};

exports.addDeliveryMethod = function (type) {
    var button = exports.addDeliveryMethodButton(), 
        methods = exports.deliveryMethodButtons();

    pages.base.scrollIntoView(button);
    button.click();

    browser.wait(protractor.ExpectedConditions.visibilityOfAny(methods));
    methods.filter(pph.matchTextExact(type)).first().click();
};

exports.fillRequiredFieldsForDeliveryMethod = function (type) {
    var elem = exports.deliveryMethodPanels().last().$('[data-ng-show="dm.delivery_mechanism_type === \'' + type + '\'"]'),

    options = {
        FTP: function () {
            elem.element(by.model('dm.delivery_mechanism.host')).sendKeys('ftp.tango.testing');
            elem.element(by.model('dm.delivery_mechanism.port')).sendKeys('80');
            elem.element(by.model('dm.delivery_mechanism.username')).sendKeys('testUsername');
            elem.$('.password-field').sendKeys('testPassword');
        }
    };

    options[type]();
};

exports.acknowledgementProcessButtons = function () {
    return element.all(by.model('ack.type'));
};

exports.selectAcknowledgementProcess = function (type) {
    var buttons = exports.acknowledgementProcessButtons();

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.acknowledgementProcessDeliveryMethodButtons = function () {
    return element.all(by.model('ack.firstAcknowledgementMechanisms.type'));
};

exports.selectAcknowledgementProcessDeliveryMethod = function (type) {
    var buttons = exports.acknowledgementProcessDeliveryMethodButtons();

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.subpublisherRelationshipButtons = function () {
    return element.all(by.model('orgHas.subPublishers'));
};

exports.clickSubpublisherRelationshipButton = function (type) {
    var buttons = exports.subpublisherRelationshipButtons();

    pages.base.scrollIntoView(buttons.first());

    buttons.filter(pph.matchTextExact(type)).first().click();
};

exports.subpublisherForm = function () {
    return $('[data-ng-form="subPublishers"]');
};

exports.subpublishersRepeater = function () {
    return exports.subpublisherForm().all(by.repeater('spEdit in (_subPublishers = getSubPublishers())'));
};

exports.addSubpublisherButton = function () {
    return exports.subpublisherForm().element(by.buttonText('+ Add Sub-Publisher'));
};

exports.subpublisherTypeahead = function () {
    var elem = exports.subpublishersRepeater().last().element(by.model('spEdit.sub_publisher.name'));

    elem.results = function () { 
        return exports.subpublisherForm().$$('.SUB_PUBLISHER .typeahead.dropdown-menu > li > a');
    };

    return elem;
};

exports.fillRequiredFieldsForLastSubpublisher = function (name, territory) {
    var subpublisherTypeahead = exports.subpublisherTypeahead(),
        territoryOfControl = exports.subpublishersRepeater().last().element(by.model('spEdit.territories')),
        territoryTypeahead = Typeahead(territoryOfControl.element(by.model('$dataHolder.internalModel')), true),
        results;

    pages.base.scrollIntoView(subpublisherTypeahead);
    subpublisherTypeahead.sendKeys(name);

    results = subpublisherTypeahead.results();
    browser.wait(protractor.ExpectedConditions.visibilityOfAny(results));

    results.filter(pph.matchText(name)).first().click();

    territoryOfControl.$('.tg-typeahead__tags-text').click();
    territoryTypeahead.sendKeys(territory);
    pages.base.waitForAjax();
    territoryTypeahead.results().filter(pph.matchTextExact(territory)).first().click();
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

exports.payeeYesButton = function () {
    return $('[data-ng-click="PAY.onSetRolePayee(true)"]');
};

exports.makeOrgPayee = function () {
    var elem = exports.payeeYesButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.statementRecipientYesButton = function () {
    return $('[data-ng-click="PAY.onSetRoleStatementRecipient(true)"]');
};

exports.makeOrgStatementRecipient = function () {
    var elem = exports.statementRecipientYesButton();
    pages.base.scrollIntoView(elem);

    elem.click();
};

exports.statementRecipientOptions = function () {
    return $('[name="statementRecipientForm"]').all(by.repeater('(key,value) in PAY.viewModel.statementRecipient'));
};

exports.setStatementRecipientData = function (option, subOption) {
    var elem = exports.statementRecipientOptions().filter(pph.matchText(option)).first(),
        subOptions = elem.all(by.repeater('item in value.formatAndDelivery'));

    pages.base.scrollIntoView(elem);
    elem.click();
    browser.wait(protractor.ExpectedConditions.visibilityOfAny(subOptions));

    subOptions.filter(pph.matchText(subOption)).first().click();
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
    expect(button.evaluate('form.$error')).toEqual({});
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

'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

pages.organisation = exports;

exports.cisacCodeBinding = function() {
    return $(
        '[data-ng-show="orgEdit.pristine.masterData.type === ' +
        'orgTypes.society || orgEdit.pristine.masterData.type === ' +
        'orgTypes.copyright"] .ng-binding'
    );
};

exports.cisacCode = function() {
    var codeElement = exports.cisacCodeBinding();
    pages.base.scrollIntoView(codeElement);
    return codeElement.getText();
};

exports.validateCisacCode = function(value) {
    expect(exports.cisacCode()).toBe(value);
};

exports.tabSetContainer = function() {
    return $('.nav-tabs');
};

exports.generalTab = function() {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', 'General'
    ));
};

exports.goToGeneralTab = function() {
    exports.generalTab().click();

    return pages.base.waitForAjax();
};

exports.navigationTab = function () {
    return $(".nav-tabs");
};

exports.previewRegistrationRunTab = function() {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', 'Preview Registration Run'
    ));
};

exports.goToPreviewRegistrationRunTab = function() {
    exports.previewRegistrationRunTab().click();

    return pages.base.waitForAjax();
};

exports.previewRegistrationRunHeader = function() {
    return $('.reg-run-header');
};

exports.waitForPreviewRegistrationRunHeaderToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(
        exports.previewRegistrationRunHeader()
    ));
};

exports.registrationActivityTab = function() {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', 'Registration Activity'
    ));
};

exports.goToRegistrationActivityTab = function() {
    exports.registrationActivityTab().click();

    return pages.base.waitForAjax();
};

exports.clickGeneralTab = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
    this.generalTab().click();
};

exports.registrationActivityRecordsTable = function() {
    return $('#ACTIVITY-RECORDS');
};

exports.waitForRegistrationActivityRecordsTableToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(
        exports.registrationActivityRecordsTable()
    ));
};

exports.subPublisherRelationshipContainers = function() {
    return element.all(by.repeater(
        'subPublisherData in dataHolder.subPublishers.data track ' +
        'by subPublisherData._uid'
    ));
};

exports.subPublisherNameBinding = function(i) {
    return this.subPublisherRelationshipContainers().get(i).$(
        '[data-ui-sref="orgView({' +
            'orgId:modularEditModels.subPublisher.publisherId' +
        '})"]'
    );
};

exports.subPublisherName = function(i) {
    var nameElement = this.subPublisherNameBinding(i);
    pages.base.scrollIntoView(nameElement);
    return nameElement.getText();
};

exports.validateSubPublisherName = function(i, value) {
    expect(exports.subPublisherName(i)).toBe(value);
};

exports.general = (function() {
    var general = {};

    general.sectionContainer = function() {
        return $('#editor-general');
    };

    general.editSectionButton = function() {
        return general.sectionContainer().$('[data-ng-click="' +
            'showEdit(show.form.general); triggerTerritoryControlLoad();' +
        '"]');
    };

    general.editSection = function() {
        var element = general.editSectionButton();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.nameInput = function() {
        return element(by.model('orgEdit.general.masterData.name'));
    };

    general.enterName = function(value) {
        var element = general.nameInput();

        pages.base.scrollIntoView(element);

        element.clear();

        return element.sendKeys(value);
    };

    general.territoriesOfOperationSelector = function() {
        return element(by.model('orgEdit.general.territory_of_operation'));
    };

    general.editTerritoriesOfOperation = function() {
        var element = general.territoriesOfOperationSelector();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.territoryOfOperationTypeaheadTag = function(value) {
        return general.territoriesOfOperationSelector().element(
            by.cssContainingText('.tg-typeahead__tag', value)
        );
    };

    general.deleteTerritoryOfOperationTypeaheadTagButton = function(element) {
        return element.$('.tg-typeahead__tag-remove');
    };

    general.deleteTerritoryOfOperation = function(value) {
        var element = general.deleteTerritoryOfOperationTypeaheadTagButton(
            general.territoryOfOperationTypeaheadTag(value)
        );

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.territoryOfOperationSearchTermsInput = function() {
        return general.territoriesOfOperationSelector().element(by.model('$term'));
    };

    general.enterTerritoryOfOperationSearchTerms = function(value) {
        var element = general.territoryOfOperationSearchTermsInput();
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    general.territoryOfOperationSearchResults = function() {
        return general.territoriesOfOperationSelector().$$(
            '.tg-typeahead__suggestions-group-item'
        );
    };

    general.selectTerritoryOfOperationSearchResultByIndex = function(i) {
        var elements = general.territoryOfOperationSearchResults(),
            element;

        browser.wait(ExpectedConditions.visibilityOfAny(elements));
        element = elements.get(i);

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.organisationTypeButtons = function() {
        return element.all(by.model('orgEdit.general.masterData.type'));
    };

    general.selectOrganisationType = function(value) {
        var element = general.organisationTypeButtons().filter(
            pph.matchTextExact(value)
        ).first();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.publisherTypeButtons = function() {
        return element.all(by.model('orgEdit.general.publisher_relationship'));
    };

    general.selectPublisherType = function(value) {
        var element = general.publisherTypeButtons().filter(
            pph.matchTextExact(value)
        ).first();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    general.saveSectionButton = function() {
        return general.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    general.saveSection = function() {
        var element = general.saveSectionButton();

        pages.base.scrollIntoView(element);

        return element.click().then(function() {
            pages.base.waitForAjax();
        });
    };

    general.sectionActive = function() {
        var element = general.sectionContainer();
        pages.base.scrollIntoView(element);
        return pph.matchesCssSelector(element, '.active');
    };

    general.expectSectionToBeInViewMode = function() {
        expect(general.sectionActive()).toBeFalsy();
    };

    return general;
})();

exports.registration = (function () {
    var registration = {};

    registration.sectionContainer = function () {
        return $('#editor-registration');
    };

    registration.editSectionButton = function () {
        return registration.sectionContainer().$(
            '[data-ng-click="showEdit(show.form.registration)"]'
        );
    };

    registration.editSection = function () {
        var element = registration.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    registration.isRegistrationRecipientSelect = function () {
        return $$('[data-ng-form="registration"] .btn-group').get(0);
    };
    registration.acknowledgementTypeSelect = function () {
        return $$('[data-ng-form="ackForm"] .btn-group').get(0);
    };
    registration.deliveryMethodSelect = function (i) {
        return $$('.DELIVERY_ACKNOWLEDGEMENT div.btn-group').get(i);
    };
    registration.addressInput = function (i) {
        var method = i ? '2ftp' : '1sftp';
        return $('#ack' + method + 'Host');
    };
    registration.portInput = function (i) {
        var method = i ? '2ftp' : '1sftp';
        return $('#ack' + method + 'Port');
    };
    registration.usernameInput = function (i) {
        var method = i ? '2ftp' : '1sftp';
        return $('#ack' + method + 'Username');
    };
    registration.passwordInput = function (i) {
        var method = i ? '2ftp' : '1sftp';
        return $('#ack' + method + 'Password1');
    };

    registration.selectIsRegistrationRecipient = function (value) {
        var element = registration.isRegistrationRecipientSelect();
        return element.element(
            by.cssContainingText('button', value)
        ).click();
    };
    registration.selectAcknowledgementType = function (value) {
        var element = registration.acknowledgementTypeSelect();
        return element.element(
            by.cssContainingText('button', value)
        ).click();
    };
    registration.selectDeliveryMethod = function (i, value) {
        var element = registration.deliveryMethodSelect(i);
        return element.all(
            by.cssContainingText('button', value)
        ).get(0).click();
    };
    registration.enterAddress = function (i, value) {
        var element = registration.addressInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };
    registration.enterPort = function (i, value) {
        var element = registration.portInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };
    registration.enterUsername = function (i, value) {
        var element = registration.usernameInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };
    registration.enterPassword = function (i, value) {
        var element = registration.passwordInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    registration.saveSectionButton = function () {
        return registration.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    registration.saveSection = function () {
        var element = registration.saveSectionButton();
        pages.base.scrollIntoView(element);
        return element.click().then(function () {
            pages.base.waitForAjax();
        });
    };

    return registration;
})();

exports.incomeProvider = (function() {
    var incomeProvider = {};

    incomeProvider.sectionContainer = function() {
        return $('.income-provider-section');
    };

    incomeProvider.editSectionButton = function() {
        return incomeProvider.sectionContainer().$(
            '[data-ng-click="tgModularViewMethods.switchToEditView()"]'
        );
    };

    incomeProvider.editSection = function() {
        var element = incomeProvider.editSectionButton();

        pages.base.scrollIntoView(element);

        return element.click();
    };

    incomeProvider.primaryTerritoryOfOperationDropdown = function() {
        return element(by.model(
            'modularEditModels.org.primary_territory_of_operation'
        ));
    };

    incomeProvider.primaryTerritoryOfOperationOption = function(value) {
        return element(by.cssContainingText('.dropdown-menu li', value));
    };

    incomeProvider.selectPrimaryTerritoryOfOperation = function(value) {
        var dropdown = incomeProvider.primaryTerritoryOfOperationDropdown(),
            option = incomeProvider.primaryTerritoryOfOperationOption(value);

        dropdown.click();

        pages.base.scrollIntoView(option);

        return option.click();
    };

    incomeProvider.defaultCurrencyDropdown = function() {
        return element(by.model('modularEditModels.org.income_provider.currency_code'));
    };

    incomeProvider.defaultCurrencyOption = function(value) {
        return element(by.cssContainingText('option', value));
    };

    incomeProvider.selectDefaultCurrency = function(value) {
        var dropdown = incomeProvider.defaultCurrencyDropdown(),
            option = incomeProvider.defaultCurrencyOption(value);

        dropdown.click();

        pages.base.scrollIntoView(option);

        return option.click();
    };

    incomeProvider.incomeFileTypeTypeahead = function() {
        return $('.income-file-types-chosen');
    };

    incomeProvider.incomeFileTypeTypeaheadTag = function(value) {
        return incomeProvider.incomeFileTypeTypeahead().element(
            by.cssContainingText('.search-choice', value)
        );
    };

    incomeProvider.deleteIncomeFileTypeButton = function(element) {
        return element.$('.search-choice-close');
    };

    incomeProvider.deleteIncomeFileType = function(value) {
        var element = incomeProvider.deleteIncomeFileTypeButton(
            incomeProvider.incomeFileTypeTypeaheadTag(value)
        );

        pages.base.scrollIntoView(element);

        return element.click();
    };

    incomeProvider.incomeFileTypeSearchTermsInput = function() {
        return incomeProvider.incomeFileTypeTypeahead().$('.search-field input');
    };

    incomeProvider.enterIncomeFileTypeSearchTerms = function(value) {
        var element = incomeProvider.incomeFileTypeSearchTermsInput();

        pages.base.scrollIntoView(element);

        element.clear();

        return pph.saferSendKeys(element, value);
    };

    incomeProvider.incomeFileTypeSearchResults = function(more) {
        var elements = $$('.chosen-results .active-result');

        if(!more || !more.dontWait) {
            browser.wait(ExpectedConditions.visibilityOfAny(elements));
        }

        return elements;
    };

    incomeProvider.selectIncomeFileTypeSearchResultByIndex = function(i) {
        var element = incomeProvider.incomeFileTypeSearchResults().get(i);

        pages.base.scrollIntoView(element);

        return element.click();
    };

    incomeProvider.incomeTypeMapping = (function() {
        var mapping = {};

        mapping.rows = function() {
            return element.all(by.repeater(
                'incomeType in modularEditModels.incomeTypeMapping'
            ));
        };

        mapping.deleteRowButton = function(i) {
            return mapping.rows().get(i).$('.remove-item');
        };

        mapping.deleteRow = function(i) {
            var element = mapping.deleteRowButton(i);

            pages.base.scrollIntoView(element);

            return element.click();
        };

        mapping.inboundIncomeTypeInput = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileIncomeType'
            ));
        };

        mapping.enterInboundIncomeType = function(i, value) {
            var element = mapping.inboundIncomeTypeInput(i);

            pages.base.scrollIntoView(element);

            element.clear();

            return element.sendKeys(value);
        };

        mapping.inboundIncomeTypeDescriptionInput = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileIncomeDesc'
            ));
        };

        mapping.enterInboundIncomeTypeDescription = function(i, value) {
            var element = mapping.inboundIncomeTypeDescriptionInput(i);

            pages.base.scrollIntoView(element);

            element.clear();

            return element.sendKeys(value);
        };

        mapping.incomeFileTypeSearchTermsInput = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.fileFormat'
            ));
        };

        mapping.enterIncomeFileTypeSearchTerms = function(i, value) {
            var element = mapping.incomeFileTypeSearchTermsInput(i);

            pages.base.scrollIntoView(element);

            element.clear();

            return element.sendKeys(value);
        };

        mapping.incomeFileTypeSearchResults = function(more) {
            var elements = $$('.typeahead-result');

            if(!more || !more.dontWait) {
                browser.wait(ExpectedConditions.visibilityOfAny(elements));
            }

            return elements;
        };

        mapping.selectIncomeFileTypeSearchResultByIndex = function(i) {
            var element = mapping.incomeFileTypeSearchResults().get(i);

            pages.base.scrollIntoView(element);

            return element.click();
        };

        mapping.tangoIncomeTypeSearchTermsInput = function(i) {
            return mapping.rows().get(i).element(by.model(
                'incomeType.internalIncomeType'
            ));
        };

        mapping.enterTangoIncomeTypeSearchTerms = function(i, value) {
            var element = mapping.tangoIncomeTypeSearchTermsInput(i);

            pages.base.scrollIntoView(element);

            element.clear();

            return element.sendKeys(value);
        };

        mapping.tangoIncomeTypeSearchResults = function(more) {
            var elements = $$('.typeahead-result');

            if(!more || !more.dontWait) {
                browser.wait(ExpectedConditions.visibilityOfAny(elements));
            }

            return elements;
        };

        mapping.selectTangoIncomeTypeSearchResultByIndex = function(i) {
            var element = mapping.tangoIncomeTypeSearchResults().get(i);

            pages.base.scrollIntoView(element);

            return element.click();
        };

        return mapping;
    })();

    incomeProvider.saveSectionButton = function() {
        return incomeProvider.sectionContainer().element(by.cssContainingText(
            '.CONTROLS button', 'Save'
        ));
    };

    incomeProvider.saveSection = function() {
        var element = incomeProvider.saveSectionButton();

        pages.base.scrollIntoView(element);

        return element.click().then(function() {
            pages.base.waitForAjax();
        });
    };

    incomeProvider.sectionActive = function() {
        var element = incomeProvider.sectionContainer();

        pages.base.scrollIntoView(element);

        return pph.matchesCssSelector(element, '.active');
    };

    incomeProvider.expectSectionToBeInViewMode = function() {
        expect(incomeProvider.sectionActive()).toBeFalsy();
    };

    return incomeProvider;
})();

exports.subPublishers = (function() {
    var subPublishers = {};

    subPublishers.expectNameToBeEither = function(i, values) {
        expect(values).toContain(exports.subPublisherName(i));
    };

    return subPublishers;
})();

exports.crFileDownloadButton = function() {
    return $('.icon-download-alt.ng-scope');
};

exports.downloadCrFile = function() {
    var button = exports.crFileDownloadButton();

    browser.wait(protractor.ExpectedConditions.visibilityOf(button));

    pages.base.scrollIntoView(button);

    return button.click().then(function() {
        browser.sleep(5000);
    });
};

exports.validationErrorsButton = function() {
    return $$('.btn.btn-primary.ng-scope').first();
};

exports.viewValidationErrors = function() {
    var button = exports.validationErrorsButton();

    pages.base.scrollIntoView(button);

    return button.click();
};

// TODO: Refactor (TAT-364).
exports.getEmailDeliveryMethods = function() {
    return $$(".e2e-delivery-method-EMAIL");
};

exports.getSFTPDeliveryMethods = function() {
    return $$(".e2e-delivery-method-SFTP");
};

exports.getFTPDeliveryMethods = function() {
    return $$(".e2e-delivery-method-FTP");
};

exports.getThirdPartyDeliveryMethods = function() {
    return $$(".e2e-delivery-method-THIRDPARTY");
};

exports.sfptDeliveryMethodName = function(deliveryMethod) {
    return deliveryMethod.$$(".control-group>.controls>strong").first();
};

exports.sftpDeliveryMethodAddress = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.host"]');
};

exports.sftpDeliveryMethodPort = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.port"]');
};

exports.sftpDeliveryMethodUsername = function(deliveryMethod) {
    return deliveryMethod.$$(".control-group>.controls>strong").get(1);
};

exports.sftpUnmaskPasswordButton = function(deliveryMethod) {
    return deliveryMethod.$(".control-group>.controls>.mask-input-password");
};

exports.sftpPassword = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.showPassword"]');
};

exports.sftpFileFormat = function(deliveryMethod) {
    return deliveryMethod.$$(".control-group>.controls>strong").get(2);
};

exports.sftpFileFormatStatus = function(deliveryMethod) {
    return deliveryMethod.$(".control-group>.controls>span.compress-file");
};

exports.sftpDeliveryNotificationStatus = function(deliveryMethod) {
    return deliveryMethod.$$(".control-group>.controls>strong").last();
};

exports.sfptDeliveryStatusEmail = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_notification.primary_emails"]');
};

exports.sftpDeliveryStatusCC = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_notification.cc_emails"]');
};

exports.thirdPartyName = function(deliveryMethod) {
return deliveryMethod.$('[ data-ng-if="dm.delivery_mechanism_type === \'THIRDPARTY\'"]>div>strong');
};

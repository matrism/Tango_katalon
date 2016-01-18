'use strict';

var pph = require('../../../../helpers/pph'),
    client = require('http-api-client'),
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
    return $('.nav-tabs');
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

    registration.isRegistrationRecipientSelect = function () {
        return $$('[data-ng-form="registration"] .btn-group').get(0);
    };

    registration.editSection = function () {
        var element = registration.editSectionButton();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    registration.selectIsRegistrationRecipient = function (value) {
        var element = registration.isRegistrationRecipientSelect();
        return element.element(
            by.cssContainingText('button', value)
        ).click();
    };

    registration.delivery = (function () {
        var delivery = {};

        delivery.addMethodButton = function () {
            return $('[data-ng-click="addDeliveryMethod(runType.selected.value[$index], $index)"]');
        };
        delivery.methodSection = function (i) {
            return element.all(by.repeater('dm in getDeliveryMethods() | filter: { position: $index.toString() }')).get(i);
        };
        delivery.deliveryMethodSelect = function (i) {
            return delivery.methodSection(i);
        };
        delivery.emailPrimaryEmailInput = function (i) {
            return element.all(by.model('dm.delivery_mechanism.primary_emails')).get(i);
        };
        delivery.ftpAddressInput = function (i) {
            return $$('[name="ftpHost"]').get(i);
        };
        delivery.ftpPortInput = function (i) {
            return $$('[name="ftpPort"]').get(i);
        };
        delivery.ftpUsernameInput = function (i) {
            return $$('[name="ftpUsername"]').get(i);
        };
        delivery.ftpPasswordInput = function (i) {
            return $$('[name="ftpPassword1"]').get(i);
        };
        delivery.ftpNotificationSelect = function (i) {
            return delivery.methodSection(i).element.all(by.model('dm.delivery_notification.notify'));
        };
        delivery.ftpNotificationPrimaryEmailInput = function (i) {
            return $$('[name="ftpNotifyPrimaryEmails"]').get(i);
        };
        delivery.ftpNotificationCcEmailInput = function (i) {
            return $$('[name="ftpNotifyCCEmails"]').get(i);
        };
        delivery.thirdPartyRecipientInput = function (i) {
            return element.all(by.model('dm.delivery_mechanism.third_party_recipient.name')).get(i);
        };
        delivery.firstThirdPartyRecipientOption = function () {
            return element.all(by.repeater('match in matches')).first();
        };

        delivery.addMethod = function () {
            return delivery.addMethodButton().click();
        };
        delivery.selectMethod = function (i, value) {
            var element = delivery.deliveryMethodSelect(i);
            return element.all(
                by.cssContainingText('button', value)
            ).get(0).click();
        };
        delivery.enterEmailPrimaryEmail = function (i, value) {
            var element = delivery.emailPrimaryEmailInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.enterFtpAddress = function (i, value) {
            var element = delivery.ftpAddressInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.enterFtpPort = function (i, value) {
            var element = delivery.ftpPortInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };
        delivery.enterFtpUsername = function (i, value) {
            var element = delivery.ftpUsernameInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.enterFtpPassword = function (i, value) {
            var element = delivery.ftpPasswordInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.selectFtpNotification = function (i, value) {
            var element = delivery.ftpNotificationSelect(i);
            return element.all(
                by.cssContainingText('button', value)
            ).get(0).click();
        };
        delivery.enterFtpNotificationPrimaryEmail = function (i, value) {
            var element = delivery.ftpNotificationPrimaryEmailInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.enterFtpNotificationCcEmail = function (i, value) {
            var element = delivery.ftpNotificationCcEmailInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.enterThirdPartyRecipient = function (i, value) {
            var element = delivery.thirdPartyRecipientInput(i);
            pages.base.scrollIntoView(element);
            return element.sendKeys(value);
        };
        delivery.selectFirstThirdPartyRecipient = function () {
            var element = delivery.firstThirdPartyRecipientOption();
            return element.click();
        };

        return delivery;
    })();

    registration.ack = (function () {
        var ack = {};

        ack.acknowledgementTypeSelect = function () {
            return $$('[data-ng-form="ackForm"] .btn-group').get(0);
        };
        ack.deliveryMethodSelect = function (i) {
            return $$('.DELIVERY_ACKNOWLEDGEMENT div.btn-group').get(i);
        };
        ack.addressInput = function (i) {
            var method = i ? '2ftp' : '1sftp';
            return $('#ack' + method + 'Host');
        };
        ack.portInput = function (i) {
            var method = i ? '2ftp' : '1sftp';
            return $('#ack' + method + 'Port');
        };
        ack.usernameInput = function (i) {
            var method = i ? '2ftp' : '1sftp';
            return $('#ack' + method + 'Username');
        };
        ack.passwordInput = function (i) {
            var method = i ? '2ftp' : '1sftp';
            return $('#ack' + method + 'Password1');
        };

        ack.selectAcknowledgementType = function (value) {
            var element = ack.acknowledgementTypeSelect();
            return element.element(
                by.cssContainingText('button', value)
            ).click();
        };
        ack.selectDeliveryMethod = function (i, value) {
            var element = ack.deliveryMethodSelect(i);
            return element.all(
                by.cssContainingText('button', value)
            ).get(0).click();
        };
        ack.enterAddress = function (i, value) {
            var element = ack.addressInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };
        ack.enterPort = function (i, value) {
            var element = ack.portInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };
        ack.enterUsername = function (i, value) {
            var element = ack.usernameInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };
        ack.enterPassword = function (i, value) {
            var element = ack.passwordInput(i);
            pages.base.scrollIntoView(element);
            element.clear();
            return element.sendKeys(value);
        };

        return ack;
    })();

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

exports.getEmailDeliveryMethods = function() {
    return $$('.e2e-delivery-method-EMAIL');
};
exports.getSFTPDeliveryMethods = function() {
    return $$('.e2e-delivery-method-SFTP');
};
exports.getFTPDeliveryMethods = function() {
    return $$('.e2e-delivery-method-FTP');
};
exports.getThirdPartyDeliveryMethods = function() {
    return $$('.e2e-delivery-method-THIRDPARTY');
};
exports.sfptDeliveryMethodName = function(deliveryMethod) {
    return deliveryMethod.$$('.control-group>.controls>strong').first();
};
exports.sftpDeliveryMethodAddress = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.host"]');
};
exports.sftpDeliveryMethodPort = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.port"]');
};
exports.sftpDeliveryMethodUsername = function(deliveryMethod) {
    return deliveryMethod.$$('.control-group>.controls>strong').get(1);
};
exports.sftpUnmaskPasswordButton = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>.mask-input-password');
};
exports.sftpPassword = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>[data-ng-show="dm.delivery_mechanism.showPassword"]');
};
exports.sftpFileFormat = function(deliveryMethod) {
    return deliveryMethod.$$('.control-group>.controls>strong').get(2);
};
exports.sftpFileFormatStatus = function(deliveryMethod) {
    return deliveryMethod.$('.control-group>.controls>span.compress-file');
};
exports.sftpDeliveryNotificationStatus = function(deliveryMethod) {
    return deliveryMethod.$$('.control-group>.controls>strong').last();
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
exports.getEmailDeliveryMethodEmail = function (deliveryMethod) {
    return deliveryMethod.$('div:nth-child(1)>.controls>strong').getText();
};
exports.getEmailDeliveryMethodCC = function (deliveryMethod) {
    return deliveryMethod.$('div:nth-child(1)>div>[data-ng-show="dm.delivery_mechanism.cc_emails"]').getText();
};
exports.getEmailDeliveryMethodFileFormat = function (deliveryMethod) {
    return deliveryMethod.$('div:nth-child(3)>.controls>strong').getText();
};
exports.getEmailDeliveryMethodNotification = function (deliveryMethod) {
    return deliveryMethod.$$('div:nth-child(5)>.controls >span').first().getText();
};
exports.getIconType = function (event) {
    return event.$('div>div>span>.icon-exchange').isPresent();
};
exports.getWorksText = function (event) {
    pages.base.scrollIntoView(event);
    return event.$('div>div:nth-child(2)>p>span').getText();
};
exports.getWorkIDNumber = function (event) {
    return event.$('.row-header>div>div:nth-child(2)>div').getText();
};
exports.getRunDate = function (event) {
    return event.$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(3)>time').getText();
};
exports.getStatus = function (event) {
    return event.$$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>span').first().getText();
};
exports.getEventRunDate = function (event) {
    return event.$('div>div[data-ng-init="activityIndex = $index"]>div:nth-child(2)>time').getText();
};
exports.getFileName = function (event) {
    return event.$('[data-ng-if="activity.file_name"]').getText();
};
exports.registrationRunButton = function () {
    return $('#ACTIVITY-RECORDS>#ACTIVITY-HEADER>div.text-right>button:last-child');
};
exports.registrationRunHeader = function () {
    return $('.reg-run-header');
};
exports.customWorkButton = function () {
    return $$('.reg-run-header>span>div>div>span>a').first();
};
exports.popupRegistrationRun = function () {
    return $('.popup-reg-run');
};
exports.getLastAddedWorkEvent = function () {
    return $$('.row-header').first();
};
exports.activeRegistrationRunButton = function () {
    return element(by.cssContainingText(
        '#ACTIVITY-HEADER button:not(.disabled)', 'Execute Registration Run'
    ));
};
exports.iconDownloadAlt = function () {
    return $('.icon-download-alt');
};
exports.modalFooter = function () {
    return $('.modal-footer');
};
exports.modalConfirmButton = function () {
    return element(by.cssContainingText(
        '.modal-footer button', 'OK'
    ));
};
exports.modalSuccessConfirmButton = function () {
    return $('.btn.btn-primary.pull-right');
};
exports.successModalMessage = function () {
    return $('.modal-success');
};
exports.textWithTotalWorksNumber = function () {
    $('.modal-prompt').getText().then(function (text) {
        return text;
    })
};
exports.elementWork = function () {
    return $('.DATA-ROW.DATA-CHILD:first-child');
};
exports.listWorkIdNumber = function () {
    return $$('.row-header>div:nth-child(4)>div:nth-child(2)>a').get(1).getText();
};
exports.executeRegistrationIsActive = function () {
    return this.activeRegistrationRunButton().isPresent();
};
exports.getThirdPartyName = function (deliveryMethod) {
    return this.thirdPartyName(deliveryMethod).getText();
};
exports.getSFTPDeliveryMethodName = function (deliveryMethod) {
    return this.sfptDeliveryMethodName(deliveryMethod).getText();
};
exports.getSFTPDelivetyMehodAddress = function (deliveryMethod) {
    return this.sftpDeliveryMethodAddress(deliveryMethod).getText();
};
exports.getSFTPDeliveryMethodPort = function (deliveryMethod) {
    return this.sftpDeliveryMethodPort(deliveryMethod).getText();
};
exports.getSFTPUsername = function (deliveryMethod) {
    return this.sftpDeliveryMethodUsername(deliveryMethod).getText();
};
exports.clickUnmaskPasswordButton = function (deliveryMethod) {
    return this.sftpUnmaskPasswordButton(deliveryMethod).click();
};
exports.getSFTPPassword = function (deliveryMethod) {
    return this.sftpPassword(deliveryMethod).getText();
};
exports.getSFTPFileFormat = function (deliveryMethod) {
    return this.sftpFileFormat(deliveryMethod).getText();
};
exports.getSFTPFileFormatStatus = function (deliveryMethod) {
    return this.sftpFileFormatStatus(deliveryMethod).getText();
};
exports.getSFTPDeliveryNotificationStatus = function (deliveryMethod) {
    return this.sftpDeliveryNotificationStatus(deliveryMethod).getText();
};
exports.getSFTPDeliveryNotificationStatusEmail = function (deliveryMethod) {
    return this.sfptDeliveryStatusEmail(deliveryMethod).getText();
};
exports.getSFTPDeliveryNotificationStatusCC = function (deliveryMethod) {
    return this.sftpDeliveryStatusCC(deliveryMethod).getText();
};
exports.clickCustomWorksButton = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.registrationRunHeader()));
    this.customWorkButton().click();
};
exports.selectValueFromPopupRegRun = function (text) {
    browser.wait(ExpectedConditions.visibilityOf(this.popupRegistrationRun()));
    this.popupRegistrationLinkByText(text).click();
};
exports.popupRegistrationLinkByText = function (text) {
    return element(By.linkText(text));
};
exports.clickExecuteRegistrationRunButton = function () {
    browser.wait(ExpectedConditions.elementToBeClickable(this.activeRegistrationRunButton()));
    return this.activeRegistrationRunButton().click();
};
exports.numberOfWorks = function () {
    var number = parseInt(this.textWithTotalWorksNumber(), 10);
    return number;
};
exports.confirmModalDialog = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.modalFooter()));
    hash.totalNumberOfWorks = this.numberOfWorks();
    return this.modalConfirmButton().click();
};
exports.confirmSuccessModal = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.modalSuccessConfirmButton()));
    this.modalSuccessConfirmButton().click();
};
exports.registrationCanBeRun = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.registrationRunButton()));
    return this.executeRegistrationIsActive();
};
exports.successDialogIsPresent = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.successModalMessage()));
    return this.successModalMessage().isPresent();
};
exports.resetWork = function (runDate, recipient) {
    console.log('Resetting Work');

    var url = global.systemConfig.env.cr_url + '/api/v1/workregs/reset_sent_works?recipient=' + recipient + '&runDate=' + runDate;

    return client.request({
        url: url,
        method: 'POST'
    }).then(function (response) {
        return response.getStatusCode();
    });
};
exports.clickPreviewRegistrationRunTab = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.navigationTab()));
    this.previewRegistrationRunTab().click();
    return pages.base.waitForAjax();
};
exports.workHasDeliveredStatus = function () {
    return this.getStatus(this.getLastAddedWorkEvent());
};
exports.clickLatestWork = function () {
    return this.getLastAddedWorkEvent().click();
};
exports.getLatestWorkEvent = function () {
    this.getLastAddedWorkEvent();
};
exports.waitForElementWork = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.elementWork()));
};
exports.listWorkIdNumberRegRun = function () {
    return this.listWorkIdNumber();
};

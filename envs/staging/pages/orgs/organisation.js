'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

pages.organisationStaging = exports;

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

exports.previewRegistrationRunTab = function() {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', 'Preview Registration Run'
    ));
};

exports.goToPreviewRegistrationRunTab = function() {
    exports.previewRegistrationRunTab().click();
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
        return element(by.model(
            'modularEditModels.org.income_provider.income_file_types'
        ));
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

        return element.sendKeys(value);
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

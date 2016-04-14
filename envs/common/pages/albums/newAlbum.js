'use strict';

var pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

exports = module.exports = new ftf.pageObject({
    url: _tf_config.urls.app_url + "#/create/album"
});

pages.newAlbum = exports;

exports.titleInput = function() {
    return element(by.model('dataHolder.newAlbum.title'));
};

exports.enterTitle = function(value) {
    var element = exports.titleInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.releaseTypeDropdown = function() {
    return element(by.model('dataHolder.releaseType'));
};

exports.selectReleaseType = function(value) {
    var element = exports.releaseTypeDropdown();
    pages.base.scrollIntoView(element);
    return pages.base.selectDropdownOption(element, value, {
        dropdownType: 'tg',
    });
};

exports.artistSearchTermsTypeahead = function() {
    return element(by.model('dataHolder.newAlbum.artist_id'));
};

exports.artistSearchTermsInput = function() {
    return exports.artistSearchTermsTypeahead().element(by.model('$term'));
};

exports.enterArtistSearchTerms = function(value) {
    var element = exports.artistSearchTermsInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.artistSearchResultsContainer = function() {
    var el = $('.tg-typeahead__suggestions');
    browser.wait(ExpectedConditions.visibilityOf(el));
    browser.sleep(50);
    return el;
};

exports.createEnteredArtistOption = function() {
    return exports.artistSearchResultsContainer().element(by.cssContainingText(
        'span', 'Create New Artist'
    ));
};

exports.expectNewArtistOptionToBeVisible = function() {
    var element = exports.createEnteredArtistOption();
    pages.base.scrollIntoView(element);
    expect(element.isDisplayed()).toBeTruthy();
};

exports.createEnteredArtist = function() {
    var element = exports.createEnteredArtistOption();
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.cancelArtistSearch = function() {
    return pages.base.hitEscape();
};

exports.durationInput = function () {
    return element(by.model('time'));
};

exports.enterDuration = function(value) {
    var element = exports.durationInput();
    pages.base.scrollIntoView(element);
    return element.sendKeys(value);
};

exports.libraryDropdown = function() {
    return element(by.model('dataHolder.newAlbum.library'));
};

exports.selectLibrary = function(value) {
    var element = exports.libraryDropdown();

    pages.base.scrollIntoView(element);

    return pages.base.selectDropdownOption(element, value, {
        dropdownType: 'tg',
    });
};

exports.albumCodeInput = function() {
    return element(by.model('dataHolder.newAlbum.album_code'));
};

exports.enterAlbumCode = function(value) {
    var element = exports.albumCodeInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.tabSetContainer = function() {
    return $('.nav-tabs');
};

exports.tab = function(value) {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', value
    ));
};

exports.goToTab = function(value) {
    var element = exports.tab(value);
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.releaseDetails = (function() {
    var exports = {};

    exports.rows = function() {
        return element.all(by.repeater('albumRelease in dataHolder.albumReleases'));
    };

    exports.territoriesSelector = function(i) {
        return exports.rows().get(i).element(by.model(
            'albumRelease.territory_code'
        ));
    };

    exports.territoriesSelectorGlobeButton = function(i) {
        return exports.territoriesSelector(i).$('.tg-territory__globe-button');
    };

    exports.waitForTerritoriesSelectorToBeReady = function(i) {
        var element = exports.territoriesSelectorGlobeButton(i);

        pages.base.scrollIntoView(element);

        return browser.wait(function() {
            return pph.matchesCssSelector(
                element, ':not(.tg-territory__loading-button)'
            );
        });
    };

    exports.editTerritories = function(i) {
        var element = exports.territoriesSelector(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.territorySearchTermsInput = function(i) {
        return exports.territoriesSelector(i).element(by.model('$term'));
    };

    exports.enterTerritorySearchTerms = function(i, value) {
        var element = exports.territorySearchTermsInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    exports.territorySearchResults = function() {
        var elements = $$('.tg-typeahead__suggestions-group-item');
        browser.wait(ExpectedConditions.visibilityOfAny(elements));
        return elements;
    };

    exports.selectTerritorySearchResultByIndex = function(i) {
        var element = exports.territorySearchResults().get(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.releaseDateInput = function(i) {
        return exports.rows().get(i).element(by.model('date'));
    };

    exports.enterReleaseDate = function(i, value) {
        var element = exports.releaseDateInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    exports.configurationDropdown = function(i) {
        return exports.rows().get(i).element(by.model(
            'albumRelease.configuration'
        ));
    };

    exports.selectConfiguration = function(i, value) {
        var element = exports.configurationDropdown(i);

        pages.base.scrollIntoView(element);

        return pages.base.selectDropdownOption(element, value, {
            dropdownType: 'tg',
        });
    };

    exports.labelTypeahead = function(i) {
        return exports.rows().get(i).element(by.model(
            'albumRelease.label'
        ));
    };

    exports.labelSearchTermsInput = function(i) {
        return exports.labelTypeahead(i).element(by.model('$term'));
    };

    exports.enterLabelSearchTerms = function(i, value) {
        var element = exports.labelSearchTermsInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    exports.labelSearchResultsContainer = function() {
        var element = $('.tg-typeahead__suggestions');
        browser.wait(ExpectedConditions.visibilityOf(element));
        return element;
    };

    exports.createEnteredLabelOption = function() {
        return exports.labelSearchResultsContainer().element(by.cssContainingText(
            'a', 'Create New Label'
        ));
    };

    exports.createEnteredLabel = function() {
        var element = exports.createEnteredLabelOption();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.labelSearchResults = function() {
        var elements = $$('.tg-typeahead__suggestions-group-item');
        browser.wait(ExpectedConditions.visibilityOfAny(elements));
        return elements;
    };

    exports.selectLabelSearchResultByIndex = function(i) {
        var element = exports.labelSearchResults().get(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.catalogueNumberInput = function(i) {
        return exports.rows().get(i).element(by.model(
            'albumRelease.catalog_number'
        ));
    };

    exports.enterCatalogueNumber = function(i, value) {
        var element = exports.catalogueNumberInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    exports.licenseCodeInput = function(i) {
        return exports.rows().get(i).element(by.model(
            'albumRelease.license_code'
        ));
    };

    exports.enterLicenseCode = function(i, value) {
        var element = exports.licenseCodeInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    return exports;
})();


exports.saveButton = function() {
    return $('.page-footer').element(by.cssContainingText('button', 'Create'));
};

exports.enabledSaveButton = function() {
    var element = exports.saveButton();
    expect(pph.matchesCssSelector(element, ':not(.disabled)')).toBeTruthy();
    return element;
};

exports.validateSaveButtonState = function (expected) {
    var element = exports.saveButton();
    expect(pph.matchesCssSelector(element, '.disabled')).toBe(
        expected == 'disabled' ? true : false
    );
};

exports.save = function() {
    return exports.enabledSaveButton().click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.albumUuid = function() {
    return browser.getCurrentUrl().then(function(value) {
        var regExp = /\/#\/album\/([a-z0-9-]+)/,
            reResults;

        expect(value).toMatch(regExp);

        reResults = regExp.exec(value);

        if(!reResults) {
            return null;
        }

        return reResults[1];
    });
};

exports.recordings = (function() {
    var exports = {};

    exports.libraryNameBinding = function(i) {
        return $$('.create-album__new-recording-library').get(i);
    };

    exports.libraryName = function(i) {
        var element = exports.libraryNameBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateLibraryName = function(i, value) {
        expect(exports.libraryName(i)).toBe(value);
    };

    return exports;
})();

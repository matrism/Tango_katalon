'use strict';

var pph = require('../../../../helpers/pph');

pages.album = exports;

exports.goToAlbumPage = function(value) {
    browser.driver.get(_tf_config.urls.app_url + '/#/album/' + value);
    pages.base.waitForAjax();
};

exports.header = (function() {
    var exports = {};

    exports.container = function() {
        return $('.edit-album__header');
    };

    exports.expectHeaderToBeVisible = function() {
        var element = exports.container();
        pages.base.scrollIntoView(element);
        expect(element.isDisplayed()).toBeTruthy();
    };

    exports.titleBinding = function() {
        return element(by.binding(' modularEditModels.model.title '));
    };

    exports.title = function() {
        var element = exports.titleBinding();
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateTitle = function(value) {
        expect(exports.title()).toBe(value);
    };

    exports.artistNameBinding = function() {
        return element(by.binding(' modularEditModels.model.artist.display_name '));
    };

    exports.artistName = function() {
        var element = exports.artistNameBinding();
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateArtistName = function(value) {
        expect(exports.artistName()).toBe(value);
    };

    exports.libraryNameBinding = function() {
        return exports.container().element(by.binding(
            ' modularEditModels.model.library.libraryName '
        ));
    };

    exports.libraryName = function() {
        var element = exports.libraryNameBinding();
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateLibraryName = function(value) {
        expect(exports.libraryName()).toBe(value);
    };

    exports.trackCountBinding = function() {
        return element(by.binding(
            ' dataHolder.editAlbum.model.tracks.length || 0 '
        ));
    };

    exports.trackCount = function() {
        var element = exports.trackCountBinding();
        pages.base.scrollIntoView(element);
        return pph.parseInt(pph.trim(element.getText()));
    };

    exports.validateTrackCount = function(value) {
        expect(exports.trackCount()).toBe(value);
    };

    exports.durationBinding = function() {
        return element(by.binding(
            ' formatRecordingDuration(modularEditModels.model.duration) '
        ));
    };

    exports.duration = function() {
        var element = exports.durationBinding();
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateDuration = function(value) {
        expect(exports.duration()).toBe(value);
    };

    exports.configurationsBinding = function() {
        return element(by.binding(
            ' dataHolder.editAlbum.configurations.join(\', \') '
        ));
    };

    exports.configurations = function() {
        var element = exports.configurationsBinding();

        pages.base.scrollIntoView(element);

        return pph.trim(element.getText()).then(function(value) {
            var values = value.split(', ');

            if(values.length === 1 && values[0] === '') {
                values = [];
            }

            return values;
        });
    };

    exports.validateConfigurations = function(values) {
        expect(exports.configurations()).toEqual(values);
    };

    exports.territoryCountBinding = function() {
        return element(by.binding(
            ' dataHolder.editAlbum.territories.length '
        ));
    };

    exports.territoryCount = function() {
        var element = exports.territoryCountBinding();
        pages.base.scrollIntoView(element);
        return pph.parseInt(pph.trim(element.getText()));
    };

    exports.validateTerritoryCount = function(value) {
        expect(exports.territoryCount()).toBe(value);
    };

    exports.albumCodeBinding = function() {
        return element(by.binding(' modularEditModels.model.album_code '));
    };

    exports.albumCode = function() {
        var element = exports.albumCodeBinding();
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateAlbumCode = function(value) {
        expect(exports.albumCode()).toBe(value);
    };

    return exports;
})();

exports.recordings = (function() {
    var exports = {};

    exports.rows = function() {
        return element.all(by.repeater('track in modularEditModels.model.tracks'));
    };

    exports.titleBinding = function(i) {
        return exports.rows().get(i).element(by.binding(' track.recording.title '));
    };

    exports.title = function(i) {
        var element = exports.titleBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateTitle = function(i, value) {
        expect(exports.title(i)).toBe(value);
    };

    exports.artistNameBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' track.recording.artist.display_name '
        ));
    };

    exports.artistName = function(i) {
        var element = exports.artistNameBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateArtistName = function(i, value) {
        expect(exports.artistName(i)).toBe(value);
    };

    exports.libraryNameBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' modularEditModels.model.library.libraryName '
        ));
    };

    exports.libraryName = function(i) {
        var element = exports.libraryNameBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateLibraryName = function(i, value) {
        expect(exports.libraryName(i)).toBe(value);
    };

    exports.durationBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' formatRecordingDuration(track.recording.duration) '
        ));
    };

    exports.duration = function(i) {
        var element = exports.durationBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateDuration = function(i, value) {
        expect(exports.duration(i)).toBe(value);
    };

    exports.workIdBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' track.recording.work.work_code '
        ));
    };

    exports.workId = function(i) {
        var element = exports.workIdBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateWorkId = function(i, value) {
        expect(exports.workId(i)).toBe(value);
    };

    exports.editor = function () {
        return modularEdit.byId('albumTracks');
    };

    exports.cancelButton = function () {
        var editor = exports.editor();
        return editor.element(by.cssContainingText('button','Cancel'));
    };

    exports.cancel = function () {
        var element = exports.cancelButton();
        asAlways(element, 'scrollIntoView', 'click');
    };

    exports.edit = function () {
        exports.editor().edit();
    };

    exports.save = function () {
        exports.editor().save();
    };

    exports.validateSaveButtonState = function (expected) {
        var element = exports.editor().saveButton;
        expect(pph.matchesCssSelector(element, '.disabled')).toBe(
            expected == 'disabled' ? true : false
        );
    };

    exports.trackContainers = function() {
        return $$('[data-ng-repeat^="track in"]');
    };

    exports.searchTermsTypeahead = function(i) {
        return exports.trackContainers().get(i).$('[class*="album__track-recording"]');
    };

    exports.searchTypeDropdown = function(i) {
        return exports.searchTermsTypeahead(i).$(
            '.tg-typeahead__tag-filter'
        );
    };

    exports.workSearchTypeDropdown = function(i) {
        return $$('[class*="album__new-recording-work"] .tg-typeahead__tag-filter').get(i);
    };

    exports.selectSearchType = function(i, value) {
        var element = exports.searchTypeDropdown(i);
        pages.base.scrollIntoView(element);
        return pages.base.selectDropdownOption(element, value);
    };

    exports.selectWorkSearchType = function(i, value) {
        var element = exports.workSearchTypeDropdown(i);
        pages.base.scrollIntoView(element);
        return pages.base.selectDropdownOption(element, value);
    };

    exports.searchTermsInput = function(i) {
        return exports.searchTermsTypeahead(i).element(by.model('$term'));
    };

    exports.enterSearchTerms = function(i, value) {
        var element = exports.searchTermsInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    exports.searchResultsContainer = function() {
        var el = $('.tg-typeahead__suggestions');
        browser.wait(ExpectedConditions.visibilityOf(el));
        browser.sleep(50);
        return el;
    };

    exports.createEnteredRecordingOption = function() {
        return exports.searchResultsContainer().element(
            by.cssContainingText('span', 'Create New Recording')
        );
    };

    exports.expectNewRecordingOptionToBeVisible = function() {
        var element = exports.createEnteredRecordingOption();
        pages.base.scrollIntoView(element);
        expect(element.isDisplayed()).toBeTruthy();
    };

    exports.createEnteredRecording = function() {
        var element = exports.createEnteredRecordingOption();
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.cancelSearch = function() {
        return pages.base.hitEscape();
    };

    exports.workSearchTermsTypeahead = function(i) {
        return (
            exports.trackContainers().get(i)
                .element(by.model('track.recording.work_id'))
        );
    };

    exports.workSearchTermsInput = function(i) {
        return exports.workSearchTermsTypeahead(i).$('input');
    };

    exports.enterWorkSearchTerms = function(i, value) {
        var element = exports.workSearchTermsInput(i);
        pages.base.scrollIntoView(element);
        element.clear();
        return element.sendKeys(value);
    };

    exports.workSearchResultsContainer = function() {
        var el = $('.tg-typeahead__suggestions');
        browser.wait(ExpectedConditions.visibilityOf(el));
        browser.sleep(50);
        return el;
    };

    exports.workSearchResults = function() {
        return exports.workSearchResultsContainer().$$(
            '.tg-typeahead__suggestions-group-item'
        );
    };

    exports.selectWorkSearchResultByIndex = function(i) {
        var element = exports.workSearchResults().get(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.artistSearchTermsTypeahead = function(i) {
        return (
            exports.trackContainers().get(i)
                .element(by.model('track.recording.model.artist_id'))
        );
    };

    exports.artistSearchTermsInput = function(i) {
        return exports.artistSearchTermsTypeahead(i).element(by.model('$term'));
    };

    exports.enterArtistSearchTerms = function(i, value) {
        var element = exports.artistSearchTermsInput(i);
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

    exports.artistSearchResults = function() {
        return exports.artistSearchResultsContainer().$$(
            '.tg-typeahead__suggestions-group-item'
        );
    };

    exports.selectArtistSearchResultByIndex = function(i) {
        var element = exports.artistSearchResults().get(i);
        pages.base.scrollIntoView(element);
        return element.click();
    };

    exports.durationInput = function(i) {
        return exports.trackContainers().get(i).element(by.model('time'));
    };

    exports.enterDuration = function(i, value) {
        var element = exports.durationInput(i);
        pages.base.scrollIntoView(element);
        return element.sendKeys(value);
    };

    exports.deleteButton = function (i) {
        return exports.trackContainers().get(i).$('[data-ng-click^="removeTrack"]');
    };

    exports.deleteTrack = function(i) {
        var element = exports.deleteButton(i);
        asAlways(element, 'scrollIntoView', 'click');
    };

    return exports;
})();

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
        return element.all(by.repeater(
            'albumRelease in modularEditModels.model.albumReleases'
        ));
    };

    exports.territoryBindings = function(i) {
        return exports.rows().get(i).all(by.binding(
            ' territory.title '
        ));
    };

    exports.territories = function(i) {
        var elements = exports.territoryBindings(i);

        pages.base.scrollIntoView(elements.first());

        return elements.map(function(element) {
            return pph.trim(element.getText());
        });
    };

    exports.validateTerritories = function(i, values) {
        expect(exports.territories(i)).toEqual(values);
    };

    exports.releaseDateBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' albumRelease.release_date '
        ));
    };

    exports.releaseDate = function(i) {
        var element = exports.releaseDateBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateReleaseDate = function(i, value) {
        expect(exports.releaseDate(i)).toBe(value);
    };

    exports.configurationBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' albumRelease.configuration '
        ));
    };

    exports.configuration = function(i) {
        var element = exports.configurationBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateConfiguration = function(i, value) {
        expect(exports.configuration(i)).toBe(value);
    };

    exports.labelNameBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' albumRelease.label.name '
        ));
    };

    exports.labelName = function(i) {
        var element = exports.labelNameBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateLabelName = function(i, value) {
        expect(exports.labelName(i)).toBe(value);
    };

    exports.catalogueNumberBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' albumRelease.catalog_number '
        ));
    };

    exports.catalogueNumber = function(i) {
        var element = exports.catalogueNumberBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateCatalogueNumber = function(i, value) {
        expect(exports.catalogueNumber(i)).toBe(value);
    };

    exports.licenseCodeBinding = function(i) {
        return exports.rows().get(i).element(by.binding(
            ' albumRelease.license_code '
        ));
    };

    exports.licenseCode = function(i) {
        var element = exports.licenseCodeBinding(i);
        pages.base.scrollIntoView(element);
        return pph.trim(element.getText());
    };

    exports.validateLicenseCode = function(i, value) {
        expect(exports.licenseCode(i)).toBe(value);
    };

    return exports;
})();

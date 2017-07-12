'use strict';

var pph = require('../../../../helpers/pph');

pages.album = exports;

exports.goToAlbumPage = function(value) {
    browser.driver.get(_tf_config.urls.app_url + '#/album/' + value);
    pages.base.waitForAjax();
};

exports.header = (function() {
    var exports = {};

    exports.container = function() {
        return $('.edit-album__header');
    };

    exports.expectHeaderToBeVisible = function() {
        var element = exports.container();
        browser.wait(ExpectedConditions.visibilityOf(element));
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

    exports.albumTitleEditor = function () {
        return modularEdit.byId('albumTitle');
    };

    exports.durationEditor = function () {
        return modularEdit.byId('albumDuration');
    };

    exports.albumCodeEditor = function () {
        return modularEdit.byId('albumCode');
    };

    exports.editAlbumTitle = function () {
        exports.albumTitleEditor().edit();
    };

    exports.editDuration = function () {
        exports.durationEditor().edit();
    };

    exports.editAlbumCode = function () {
        exports.albumCodeEditor().edit();
    };

    exports.saveAlbumTitle = function () {
        exports.albumTitleEditor().save();
    };

    exports.saveDuration = function () {
        exports.durationEditor().save();
    };

    exports.saveAlbumCode = function () {
        exports.albumCodeEditor().save();
    };

    exports.enterAlbumTitle = function (value) {
        var el = exports.albumTitleEditor().$('input');
        asAlways(el, 'scrollIntoView', 'clear');
        el.sendKeys(value);
    };

    exports.enterDuration = function (value) {
        var el = exports.durationEditor().$('input');
        asAlways(el, 'scrollIntoView', 'clear');
        el.sendKeys(value);
    };

    exports.enterAlbumCode = function (value) {
        var el = exports.albumCodeEditor().$('input');
        asAlways(el, 'scrollIntoView', 'clear');
        el.sendKeys(value);
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

    exports.trackNumberBinding = i => exports.rows().get(i).element(by.css(
        'div.edit-album__track-col.ng-binding'
    ));

    exports.trackNumber = i => asAlways(
        exports.trackNumberBinding(i), 'scrollIntoView', 'getAllText'
    );

    exports.validateTrackNumber = (i, val) => expect(
        exports.trackNumber(i).get(i)
    ).toBe(val.toString());

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
            'WorkRecordingsCtrl.getLibraryCode()'
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
        return $$('[ng-repeat="track in dataHolder.tracks"]');
    };

    exports.searchTermsTypeahead = function(i) {
        return exports.trackContainers().get(i).$('.create-album__track-recording');
    };

    exports.searchTypeDropdown = function(i) {
        return exports.searchTermsTypeahead(i).$(
            '.tg-typeahead__tag-filter'
        );
    };

    exports.workSearchTypeDropdown = function(i) {
        return exports.searchTermsTypeahead(i).$('.tg-typeahead__tag-filter.ng-pristine.ng-valid.ng-scope.ng-touched');
    };

    exports.selectSearchType = function(i, value) {
        var element = exports.searchTypeDropdown(i);
        pages.base.scrollIntoView(element);
        return pages.base.selectDropdownOption(element, value);
    };

    exports.selectWorkSearchType = function(i,value) {
        var desiredOption;
        pages.base.scrollIntoView(element(By.css('div[ng-repeat="track in dataHolder.tracks"]:nth-child('+ i +') div.create-album__new-recording-work select')));
        browser.driver.findElement(By.css('div[ng-repeat="track in dataHolder.tracks"]:nth-child('+ i +') div.create-album__new-recording-work select')).click();
        browser.driver.findElements(By.css("select[ng-model='$filterTag.filter'] option"))
            .then(function findMatchingOption(options) {
                options.forEach(function (option) {
                    option.getText().then(function doesOptionMatch(text) {
                            if (text.indexOf(value) != -1) {
                                desiredOption = option;
                                return true;
                            }
                        }
                    )
                });
            })
            .then(function clickOption() {
                if (desiredOption) {
                    desiredOption.click();
                }
            });
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
        var el = $('.tg-typeahead__suggestions-footer-inner.tg-typeahead__suggestions-footer-border.ng-scope');
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

    exports.viewRows = function() {
        return element.all(by.repeater(
            'albumRelease in modularEditModels.model.albumReleases'
        ));
    };

    exports.territoryBindings = function(i) {
        return exports.viewRows().get(i).all(by.binding(
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
        return exports.viewRows().get(i).element(by.binding(
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
        return exports.viewRows().get(i).element(by.binding(
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
        return exports.viewRows().get(i).element(by.binding(
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
        return exports.viewRows().get(i).element(by.binding(
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
        return exports.viewRows().get(i).element(by.binding(
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

    exports.editor = function () {
        return modularEdit.byId('albumReleases');
    };

    exports.save = function () {
        exports.editor().save();
    };

    exports.edit = function () {
        exports.editor().edit();
    };

    exports.rows = function() {
        return $$("div[ng-repeat='albumRelease in dataHolder.albumReleases']");
    };

    exports.territoriesSelector = function(i) {
        return exports.rows().get(i).element(by.model(
            'albumRelease.territory_code'
        ));
    }

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

'use strict';

var pph = require('../../../../helpers/pph');

pages.workRecordings = exports;

// ---

exports.recordingContainers = function() {
    return $$('.work-recordings-table-tr-wrap');
};

exports.recordingContainer = function(i) {
    return exports.recordingContainers().get(i);
};

// ---

exports.recordingNameInput = i => (
    exports.recordingContainer(i).element(by.model(
        'recording.title'
    ))
);

exports.clickRecordingNameField = i => asAlways(
    exports.recordingNameInput(i), 'scrollIntoView', 'click'
);

exports.recordingNameSuggestions = () => $$(
    '.work-recordings-table-suggestions > li'
);

exports.waitForRecordingNameSuggestions = () => browser.wait(
    EC.visibilityOfAny(exports.recordingNameSuggestions())
);

exports.selectRecordingNameSuggestionByIndex = (i, val) => {
    exports.waitForRecordingNameSuggestions();

    let el = exports.recordingNameSuggestions().get(i);

    return pages.base.scrollIntoView(el).then(() => {
        if(val) {
            expect(pph.getAllText(el)).toBe(val);
        }
    }).then(() => el.click());
};

// ---

exports.recordingNameBindings = function() {
    return exports.recordingContainers().all(
        by.binding('recording.title')
    );
};

exports.recordingNames = function() {
    var elements = exports.recordingNameBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateRecordingNames = function(values) {
    var names = exports.recordingNames();

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

// ---

exports.artistNameInput = i => (
    exports.recordingContainer(i)
        .element(by.model('recording.artist'))
        .element(by.model('$term'))
);

exports.enterArtistName = (i, val) => asAlways(
    exports.artistNameInput(i), 'scrollIntoView', 'clear'
).sendKeys(val);

exports.artistSearchResultsContainer = () => $(
    '.tg-typeahead__suggestions'
);

exports.waitForArtistSearchResults = () => browser.wait(
    EC.visibilityOf(exports.artistSearchResultsContainer())
);

exports.createEnteredArtistOption = () => (
    exports.artistSearchResultsContainer().element(
        by.cssContainingText('span', 'Create New Artist')
    )
);

exports.createEnteredArtist = () => {
    exports.waitForArtistSearchResults();

    return asAlways(
        exports.createEnteredArtistOption(),
        'scrollIntoView', 'click', 'waitForAjax'
    );
};

// ---

exports.artistNameBindings = function() {
    return exports.recordingContainers().all(
        by.binding('recording.artist.display_name')
    );
};

exports.artistNames = function() {
    var elements = exports.artistNameBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateArtistNames = function(values) {
    var names = exports.artistNames();

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

// ---

exports.recordingDurationInput = i => (
    exports.recordingContainer(i)
        .element(by.model('recording.duration'))
        .element(by.model('time'))
);

exports.enterRecordingDuration = (i, val) => asAlways(
    exports.recordingDurationInput(i), 'scrollIntoView', 'clear'
).sendKeys(val);

// ---

exports.recordingDurationBindings = function() {
    return exports.recordingContainers().all(
        by.binding('secondsToTime(recording.duration)')
    );
};

exports.recordingDurations = function() {
    var elements = exports.recordingDurationBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateRecordingDurations = function(values) {
    var durations = exports.recordingDurations();

    values.forEach(function(value) {
        expect(durations).toContain(value);
    });
};

// ---

exports.libraryNameBinding = function(i) {
    return $$('[data-ng-switch="commonDataHolder.isLibrary"] .ng-binding').get(i);
};

exports.libraryName = function(i) {
    var element = exports.libraryNameBinding(i);
    pages.base.scrollIntoView(element);
    return pph.trim(element.getText());
};

exports.validateLibraryName = function(i, value) {
    expect(exports.libraryName(i)).toBe(value);
};

// ---

exports.toggleRecordingButton = function (i) {
    return exports.recordingContainer(i).$(
            '[data-ng-click="isCollapsed = !isCollapsed"]'
        );
};

exports.toggleAlbumButton = function (i) {
    return exports.recordingContainer(i).$(
            '[data-ng-click="isCollapsed2 = !isCollapsed2"]'
        );
};

exports.toggleRecording = function (i) {
    exports.toggleRecordingButton(i).click();
    pages.base.waitForAjax();
};

exports.toggleAlbum = function (i) {
    exports.toggleAlbumButton(i).click();
    pages.base.waitForAjax();
};

exports.albumTitleBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding('::track.album.title'));
};

exports.validateAlbumTitle = function (i, value) {
    expect(exports.albumTitleBinding(i).getText()).toBe(value);
};

exports.albumRelease = function (i) {
    return element.all(by.repeater('albumRelease in track.album.albumReleases')).get(i);
}

exports.releaseTerritoryBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding('getTerritory(territory).title'));
};

exports.validateReleaseTerritory = function (i, value) {
    expect(exports.releaseTerritoryBinding(i).getText()).toBe(value);
};

exports.releaseConfigurationBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding('albumRelease.configuration'));
};

exports.validateReleaseConfiguration = function (i, value) {
    expect(exports.releaseConfigurationBinding(i).getText()).toBe(value);
};

exports.releaseLabelBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding('albumRelease.label[0].name'));
};

exports.validateReleaseConfiguration = function (i, value) {
    expect(exports.releaseConfigurationBinding(i).getText()).toBe(value);
};

exports.releaseCatalogBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding('albumRelease.catalog_number'));
};

exports.validateReleaseCatalog = function (i, value) {
    expect(exports.releaseCatalogBinding(i).getText()).toBe(value);
};

exports.releaseLicenseCodeBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding('albumRelease.license_code'));
};

exports.validateReleaseLicenseCode = function (i, value) {
    expect(exports.releaseLicenseCodeBinding(i).getText()).toBe(value);
};

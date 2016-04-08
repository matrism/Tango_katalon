'use strict';

var pph = require('../../../../helpers/pph');

pages.workRecordings = exports;

exports.recordingContainers = function() {
    return $$('.work-recordings-table-tr-wrap');
};

exports.recordingContainer = function(i) {
    return exports.recordingContainers().get(i);
};

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
    //return exports.recordingContainer(i).element(by.binding(' ::track.album.title || \'&nbsp;\' '));
    return exports.recordingContainer(i).$('[data-ui-sref="albumView({albumId:track.album_id})"]');
};

exports.validateAlbumTitle = function (i, value) {
    expect(exports.albumTitleBinding(i).getText()).toBe(value);
};

exports.albumRelease = function (i) {
    return element.all(by.repeater('albumRelease in track.album.albumReleases')).get(i);
}

exports.albumTerritoryBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding(' getTerritory(territory).title '));
};

exports.validateAlbumTerritory = function (i, value) {
    expect(exports.albumTerritoryBinding(i).getText()).toBe(value);
};

exports.albumConfigurationBinding = function (i) {
    return exports.recordingContainer(i).element(by.binding(' getTerritory(territory).title '));
};

exports.validateAlbumConfiguration = function (i, value) {
    expect(exports.albumTerritoryBinding(i).getText()).toBe(value);
};

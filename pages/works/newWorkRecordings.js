'use strict';

var leftPad = require('left-pad'),
    pph = require('../../helpers/pph'),
    random = require('../../helpers/random');

pages.newWorkRecordings = exports;

exports.recordingContainers = function() {
    return $$('.work-recordings-table-tr-wrap');
};

exports.recordingContainer = function(i) {
    return exports.recordingContainers().get(i);
};

exports.recordingNameInput = function(i) {
    return exports.recordingContainer(i).element(
        by.model('recording.title')
    );
};

exports.clickRecordingNameField = function(i) {
    return exports.recordingNameInput(i).click();
};

exports.recordingNameSuggestions = function() {
    pages.base.waitForAjax();
    return $$('.work-recordings-table-suggestions > li');
};

exports.recordingNameSuggestion = function(i) {
    return exports.recordingNameSuggestions().get(i);
};

exports.selectRecordingNameSuggestionByIndex = function(i) {
    var element = exports.recordingNameSuggestion(i);
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.artistNameInput = function(i) {
    return (
        exports.recordingContainer(i)
            .element(by.model('recording.artist'))
            .element(by.model('$term'))
    );
};

exports.enterArtistName = function(i, value) {
    var element = exports.artistNameInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.artistSearchResultsContainer = function() {
    pages.base.waitForAjax();
    return $('.tg-typeahead__suggestions');
};

exports.createEnteredArtistOption = function() {
    return exports.artistSearchResultsContainer().element(
        by.cssContainingText('span', 'Create New Artist')
    );
};

exports.createEnteredArtist = function() {
    return exports.createEnteredArtistOption().click();
};

exports.recordingDurationInput = function(i) {
    return (
        exports.recordingContainer(i)
            .element(by.model('recording.duration'))
            .element(by.model('time'))
    );
};

exports.enterRecordingDuration = function(i, value) {
    var element = exports.recordingDurationInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.libraryNameBinding = function(i) {
    return exports.recordingContainer(i).element(by.binding(
        ' getAdminDataName(commonDataHolder.musicLibraries, ' +
        'commonDataHolder.work.library_code) '
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

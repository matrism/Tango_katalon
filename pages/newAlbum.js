'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    pph = require('../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

require(pages_path + 'base');

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

exports.albumCodeInput = function() {
    return element(by.model('dataHolder.newAlbum.album_code'));
};

exports.enterAlbumCode = function(value) {
    var element = exports.albumCodeInput();
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.trackContainers = function() {
    return element.all(by.repeater('track in dataHolder.tracks'));
};

exports.recordingSearchTermsTypeahead = function(i) {
    return exports.trackContainers().get(i).$('.create-album__track-recording');
};

exports.recordingSearchTermsInput = function(i) {
    return exports.recordingSearchTermsTypeahead(i).element(by.model('$term'));
};

exports.enterRecordingSearchTerms = function(i, value) {
    var element = exports.recordingSearchTermsInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.recordingSearchResultsContainer = function() {
    var el = $('.tg-typeahead__suggestions');
    browser.wait(ExpectedConditions.visibilityOf(el));
    browser.sleep(50);
    return el;
};

exports.createEnteredRecordingOption = function() {
    return exports.recordingSearchResultsContainer().element(
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

exports.cancelRecordingSearch = function() {
    return pages.base.hitEscape();
};

exports.recordingWorkSearchTermsTypeahead = function(i) {
    return (
        exports.trackContainers().get(i)
            .element(by.model('track.recording.work_id'))
    );
};

exports.recordingWorkSearchTermsInput = function(i) {
    return exports.recordingWorkSearchTermsTypeahead(i).element(by.model('$term'));
};

exports.enterRecordingWorkSearchTerms = function(i, value) {
    var element = exports.recordingWorkSearchTermsInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.recordingWorkSearchResultsContainer = function() {
    var el = $('.tg-typeahead__suggestions');
    browser.wait(ExpectedConditions.visibilityOf(el));
    browser.sleep(50);
    return el;
};

exports.recordingWorkSearchResults = function() {
    return exports.recordingWorkSearchResultsContainer().$$(
        '.tg-typeahead__suggestions-group-item'
    );
};

exports.selectRecordingWorkSearchResultByIndex = function(i) {
    var element = exports.recordingWorkSearchResults().get(i);
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.recordingArtistSearchTermsTypeahead = function(i) {
    return (
        exports.trackContainers().get(i)
            .element(by.model('track.recording.model.artist_id'))
    );
};

exports.recordingArtistSearchTermsInput = function(i) {
    return exports.recordingArtistSearchTermsTypeahead(i).element(by.model('$term'));
};

exports.enterRecordingArtistSearchTerms = function(i, value) {
    var element = exports.recordingArtistSearchTermsInput(i);
    pages.base.scrollIntoView(element);
    element.clear();
    return element.sendKeys(value);
};

exports.recordingArtistSearchResultsContainer = function() {
    var el = $('.tg-typeahead__suggestions');
    browser.wait(ExpectedConditions.visibilityOf(el));
    browser.sleep(50);
    return el;
};

exports.recordingArtistSearchResults = function() {
    return exports.recordingArtistSearchResultsContainer().$$(
        '.tg-typeahead__suggestions-group-item'
    );
};

exports.selectRecordingArtistSearchResultByIndex = function(i) {
    var element = exports.recordingArtistSearchResults().get(i);
    pages.base.scrollIntoView(element);
    return element.click();
};

exports.saveButton = function() {
    return $('.page-footer').element(by.cssContainingText('button', 'Create'));
};

exports.enabledSaveButton = function() {
    var element = exports.saveButton();
    expect(pph.matchesCssSelector(element, ':not(.disabled)')).toBeTruthy();
    return element;
};

exports.save = function() {
    return exports.enabledSaveButton().click().then(function() {
        pages.base.waitForAjax();
    });
};

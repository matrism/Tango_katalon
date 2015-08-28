'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.newAlbum = exports;

require(pages_path + 'base');
require(pages_path + 'newAlbum');

exports.goToNewAlbumPage = function() {
	it('Go to new album page', function() {
        pages.newAlbum.open();
        pages.base.waitForAjax();
    });
};

exports.enterTitle = function(value) {
    it('Enter title (' + value + ')', function() {
        pages.newAlbum.enterTitle(value);
    });
};

exports.selectReleaseType = function(value) {
    it('Select release type (' + value + ')', function() {
        pages.newAlbum.selectReleaseType(value);
    });
};

exports.enterArtistSearchTerms = function(value) {
    it('Enter artist search terms', function() {
        pages.newAlbum.enterArtistSearchTerms(value);
    });
};

exports.createEnteredArtist = function() {
    it('Create entered artist', function() {
        pages.newAlbum.createEnteredArtist();
    });
};

exports.enterAlbumCode = function(value) {
    it('Enter album code (' + value + ')', function() {
        pages.newAlbum.enterAlbumCode(value);
    });
};

exports.enterRecordingSearchTerms = function(i, value) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter recording search terms (' + value + ')', function() {
            pages.newAlbum.enterRecordingSearchTerms(i, value);
        }
    );
};

exports.createEnteredRecording = function() {
    it('Create entered recording', function() {
        pages.newAlbum.createEnteredRecording();
    });
};

exports.enterWorkIdFromWorkSlotAsWorkSearchTerms = function(i, slotName) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter work ID from work slot "' + slotName + '" as work search terms',
        function() {
            pages.newAlbum.enterRecordingWorkSearchTerms(
                i, hash.currentEntityDataSlotsByType.work.id
            );
        }
    );
};

exports.selectRecordingWorkSearchResultByIndex = function(i) {
    it('Select work search result #' + (i + 1), function() {
        pages.newAlbum.selectRecordingWorkSearchResultByIndex(i);
    });
};

exports.enterRecordingArtistSearchTerms = function(i, value) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter artist search terms (' + value + ')', function() {
            pages.newAlbum.enterRecordingArtistSearchTerms(i, value);
        }
    );
};

exports.selectRecordingArtistSearchResultByIndex = function(i) {
    it('Select artist search result #' + (i + 1), function() {
        pages.newAlbum.selectRecordingArtistSearchResultByIndex(i);
    });
};

exports.save = function() {
    it('Save album', function() {
        pages.newAlbum.save();
    });
};

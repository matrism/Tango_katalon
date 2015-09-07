'use strict';

var pageStep = require('../helpers/basicPageStep');

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

exports.expectNewArtistOptionToBeVisible = function() {
    it('Expect "Create New Artist" option to be visible', function() {
        pages.newAlbum.expectNewArtistOptionToBeVisible();
    });
};

exports.createEnteredArtist = function() {
    it('Create entered artist', function() {
        pages.newAlbum.createEnteredArtist();
    });
};

exports.cancelArtistSearch = function() {
    it('Cancel artist search', function() {
        pages.newAlbum.cancelArtistSearch();
    });
};

exports.enterAlbumCode = function(value) {
    it('Enter album code (' + value + ')', function() {
        pages.newAlbum.enterAlbumCode(value);
    });
};

pageStep('Select recording search type');

exports.enterRecordingSearchTerms = function(i, value) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter recording search terms (' + value + ')', function() {
            pages.newAlbum.enterRecordingSearchTerms(i, value);
        }
    );
};

exports.expectNewRecordingOptionToBeVisible = function() {
    it('Expect "Create New Recording" option to be visible', function() {
        pages.newAlbum.expectNewRecordingOptionToBeVisible();
    });
};

exports.createEnteredRecording = function() {
    it('Create entered recording', function() {
        pages.newAlbum.createEnteredRecording();
    });
};

exports.cancelRecordingSearch = function() {
    it('Cancel recording search', function() {
        pages.newAlbum.cancelRecordingSearch();
    });
};

exports.enterWorkIdFromWorkSlotAsWorkSearchTerms = function(i, slotName) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter work ID from work slot "' + slotName + '" as work search terms',
        function() {
            pages.newAlbum.enterRecordingWorkSearchTerms(
                i, hash.entityDataSlotsByType.work[slotName].id
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

pageStep([
    'Go to tab',

    ['Release Details', [
        'Wait for territories selector to be ready',
        'Edit territories',
        'Enter territory search terms',
        'Select territory search result by index',
        'Enter release date',
        'Select configuration',
        'Enter label search terms',
        'Create entered label',
        'Select label search result by index',
        'Enter catalogue number',
        'Enter license code',
    ]],
]);

exports.save = function() {
    it('Save album', function() {
        pages.newAlbum.save();
    });
};

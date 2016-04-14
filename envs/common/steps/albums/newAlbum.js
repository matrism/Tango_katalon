'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.newAlbum = exports;

exports.goToNewAlbumPage = function() {
	it('Go to new album page', function() {
        pages.newAlbum.open();
        pages.base.waitForAjax();
    });
};

pageStep([
    'Go to tab',
    'Enter title',
    'Select release type',
    'Select library',
    'Enter artist search terms',
    'Expect New Artist Option To Be Visible',
    'Create entered artist',
    'Cancel artist search',
    'Enter album code',
    'Enter duration',

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
        'Enter license code'
    ]],

    'Validate Save Button State',
    'Save'
]);

exports.recordings = (function() {
    var exports = {},
        ar = steps.album.recordings;

    exports.selectSearchType = ar.selectSearchType;
    exports.enterSearchTerms = ar.enterSearchTerms;
    exports.createEnteredRecording = ar.createEnteredRecording;
    exports.enterWorkIdFromWorkSlotAsWorkSearchTerms = ar.enterWorkIdFromWorkSlotAsWorkSearchTerms;
    exports.selectWorkSearchResultByIndex = ar.selectWorkSearchResultByIndex;
    exports.enterArtistSearchTerms = ar.enterArtistSearchTerms;
    exports.selectArtistSearchResultByIndex = ar.selectArtistSearchResultByIndex;
    exports.enterDuration = ar.enterDuration;

    exports.validateLibraryName = function(i, value) {
        it('Validate library name', function() {
            pages.newAlbum.recordings.validateLibraryName(i, value);
        });
    };

    return exports;
})();


exports.findAlbumUuid = function() {
    it('Find album UUID', function() {
        pages.newAlbum.albumUuid().then(function (value) {
            hash.currentEntityDataSlotsByType.album.uuid = value;
        });
    });
};

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

exports.releaseDetails = (function() {
    var exports = {},
        ard = steps.album.releaseDetails;

    exports.waitForTerritoriesSelectorToBeReady = ard.waitForTerritoriesSelectorToBeReady;
    exports.editTerritories = ard.editTerritories;
    exports.enterTerritorySearchTerms = ard.enterTerritorySearchTerms;
    exports.selectTerritorySearchResultByIndex = ard.selectTerritorySearchResultByIndex;
    exports.enterReleaseDate = ard.enterReleaseDate;
    exports.selectConfiguration = ard.selectConfiguration;
    exports.enterLabelSearchTerms = ard.enterLabelSearchTerms;
    exports.createEnteredLabel = ard.createEnteredLabel;
    exports.selectLabelSearchResultByIndex = ard.selectLabelSearchResultByIndex;
    exports.enterCatalogueNumber = ard.enterCatalogueNumber;
    exports.enterLicenseCode = ard.enterLicenseCode;

    return exports;
})();

exports.findAlbumUuid = function() {
    it('Find album UUID', function() {
        pages.newAlbum.albumUuid().then(function (value) {
            hash.currentEntityDataSlotsByType.album.uuid = value;
        });
    });
};

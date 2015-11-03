'use strict';

steps.newWorkRecordings = exports;

exports.clickRecordingNameField = function(i) {
    it('Click recording name field for recording #' + (i + 1), function() {
        pages.newWorkRecordings.clickRecordingNameField(i);
    });
};

exports.selectRecordingNameSuggestionByIndex = function(i) {
    it('Select recording name suggestion #' + (i + 1), function() {
        pages.newWorkRecordings.selectRecordingNameSuggestionByIndex(i);
    });
};

exports.enterArtistName = function(i, value) {
    it(
        'Enter artist name for recording #' + (i + 1) + ' (' + value + ')',
        function() {
            pages.newWorkRecordings.enterArtistName(i, value);
        }
    );
};

exports.createEnteredArtist = function() {
    it('Create artist using entered name', function() {
        pages.newWorkRecordings.createEnteredArtist();
    });
};

exports.enterRecordingDuration = function(i, value) {
    it(
        'Enter duration for recording #' + (i + 1) + ' (' + value + ')',
        function() {
            pages.newWorkRecordings.enterRecordingDuration(i, value);
        }
    );
};

exports.validateLibraryName = function(i) {
    it(
        'Recording row #' + (i + 1) + ' - ' +
        'Validate previously selected library name', function() {
            pages.newWorkRecordings.validateLibraryName(
                i, hash.currentEntityDataSlotsByType.work.musicLibrary
            );
        }
    );
};

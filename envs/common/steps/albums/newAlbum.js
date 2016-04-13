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

    ['Recordings', [
        'Enter Search Terms',
        'Select search type',
        'Select work search type',
        'Expect New Recording Option To Be Visible',
        'Create Entered Recording',
        'Cancel Search',
        'Select Work Search Result By Index',
        'Enter Artist Search Terms',
        'Select Artist Search Result By Index',
        'Validate library name',
    ]],

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

    'Save'
]);

exports.recordings.enterWorkIdFromWorkSlotAsWorkSearchTerms = function(i, slotName) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter work ID from work slot "' + slotName + '" as work search terms',
        function() {
            pages.newAlbum.recordings.enterWorkSearchTerms(
                i, hash.entityDataSlotsByType.work[slotName].id
            );
        }
    );
};

exports.findAlbumUuid = function() {
    it('Find album UUID', function() {
        pages.newAlbum.albumUuid().then(function (value) {
            hash.currentEntityDataSlotsByType.album.uuid = value;
        });
    });
};

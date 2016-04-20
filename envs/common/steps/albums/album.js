'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.album = exports;

exports.goToAlbumPage = function(albumId) {
    it('Go to album page', function() {
        albumId = albumId || hash.currentEntityDataSlotsByType.album.uuid;
        pages.album.goToAlbumPage(albumId);
    });
};

pageStep([
    ['Header', [
        'Expect header to be visible',
        'Edit Album Title',
        'Edit Duration',
        'Edit Album Code',
        'Save Album Title',
        'Save Duration',
        'Save Album Code',
        'Enter Album Title',
        'Enter Duration',
        'Enter Album Code',
        'Validate title',
        'Validate artist name',
        'Validate library name',
        'Validate track count',
        'Validate duration',
        'Validate configurations',
        'Validate territory count',
        'Validate album code',
    ]],

    'Go to tab',

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
        'Enter duration',
        'Delete track',
        'Validate title',
        'Validate artist name',
        'Validate library name',
        'Validate duration',
        'Validate Save Button State',
        'Cancel',
        'Edit',
        'Save'
    ]],

    ['Release Details', [
        'Validate territories',
        'Validate release date',
        'Validate configuration',
        'Validate label name',
        'Validate catalogue number',
        'Validate license code',
        'Edit',
        'Save',
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
]);

exports.recordings.validateWorkIdUsingWorkSlot = function(i, value) {
    var argumentListString = [].join.call(arguments, ', ');

    it(
        'Recordings > Validate work ID using work slot ' +
        '(' + argumentListString + ')', function() {
            pages.album.recordings.validateWorkId(
                i, hash.entityDataSlotsByType.work[value].id
            );
        }
    );
};

exports.recordings.enterWorkIdFromWorkSlotAsWorkSearchTerms = function(i, slotName) {
    it(
        'Track #' + (i + 1) + ' - ' +
        'Enter work ID from work slot "' + slotName + '" as work search terms',
        function() {
            pages.album.recordings.enterWorkSearchTerms(
                i, hash.entityDataSlotsByType.work[slotName].id
            );
        }
    );
};

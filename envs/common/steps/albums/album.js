'use strict';

var pageStep = require('../../../../helpers/basicPageStep');

steps.album = exports;

exports.goToAlbumPage = function() {
    it('Go to album page', function() {
        pages.album.goToAlbumPage(
            hash.currentEntityDataSlotsByType.album.uuid
        );
    });
};

pageStep([
    ['Header', [
        'Expect header to be visible',
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
        'Validate title',
        'Validate artist name',
        'Validate library name',
        'Validate duration',
    ]],

    ['Release Details', [
        'Validate territories',
        'Validate release date',
        'Validate configuration',
        'Validate label name',
        'Validate catalogue number',
        'Validate license code',
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

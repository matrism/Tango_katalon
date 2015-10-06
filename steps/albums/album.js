'use strict';

<<<<<<< HEAD:tests/e2e/steps/albums/album.js
steps.album = exports;

exports.expectAlbumHeaderToBeVisible = function() {
    it('Expect album header to be visible', function() {
        pages.album.expectAlbumHeaderToBeVisible();
=======
var pageStep = require('../helpers/basicPageStep'),
    page = require(pages_path + 'album');

steps.album = exports;

exports.goToAlbumPage = function() {
    it('Go to album page', function() {
        page.goToAlbumPage(
            hash.currentEntityDataSlotsByType.album.uuid
        );
>>>>>>> 907d1323703d599726a1cdf810d0c7b1acd8e609:tests/e2e/steps/album.js
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
            page.recordings.validateWorkId(
                i, hash.entityDataSlotsByType.work[value].id
            );
        }
    );
};

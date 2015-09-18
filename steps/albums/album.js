'use strict';

steps.album = exports;

exports.expectAlbumHeaderToBeVisible = function() {
    it('Expect album header to be visible', function() {
        pages.album.expectAlbumHeaderToBeVisible();
    });
};

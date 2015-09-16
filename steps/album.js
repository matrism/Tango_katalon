'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.album = exports;

require(pages_path + 'album');

exports.expectAlbumHeaderToBeVisible = function() {
    it('Expect album header to be visible', function() {
        pages.album.expectAlbumHeaderToBeVisible();
    });
};

'use strict';

var pages_path = _tf_config._system_.path_to_pages;

require(pages_path + 'base');

pages.album = exports;

exports.albumHeader = function() {
    return $('.edit-album__header');
};

exports.expectAlbumHeaderToBeVisible = function() {
    var element = exports.albumHeader();
    pages.base.scrollIntoView(element);
    expect(element.isDisplayed()).toBeTruthy();
};

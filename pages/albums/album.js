'use strict';

pages.album = exports;

exports.albumHeader = function() {
    return $('.edit-album__header');
};

exports.expectAlbumHeaderToBeVisible = function() {
    var element = exports.albumHeader();
    pages.base.scrollIntoView(element);
    expect(element.isDisplayed()).toBeTruthy();
};

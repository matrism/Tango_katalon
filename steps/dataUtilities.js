'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.dataUtilities = exports;

require(pages_path + 'base');
require(pages_path + 'dataUtilities');

exports.go = function() {
	it('Go to data utilities page', function() {
        pages.dataUtilities.open();
        pages.base.waitForAjax();
    });
};

exports.openMenuBoardItem = function(boardIndex, name) {
    it('Open "' + name + '" menu item from board #' + (boardIndex + 1), function() {
        pages.dataUtilities.openMenuBoardItem(boardIndex, name);
    });
};

exports.openMenuBoardItemByIndex = function(boardIndex, i) {
    it('Open menu item #' + (i + 1) + ' from board #' + (boardIndex + 1), function() {
        pages.dataUtilities.openMenuBoardItemByIndex(boardIndex, i);
    });
};

exports.navigateBreadcrumb = function(name) {
    it('Navigate to breadcrumb item "' + name + '"', function() {
        pages.dataUtilities.navigateBreadcrumb(name);
    });
};

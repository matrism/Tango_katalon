'use strict';

steps.dataUtilities = exports;

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

exports.expectFormControlLabelToBeVisible = function(i) {
    it('Expect form control label #' + (i + 1) + ' to be visible', function() {
        pages.dataUtilities.expectFormControlLabelToBeVisible(i);
    });
};

exports.expectFormControlGroupDataNotToBeBlank = function(i) {
    it('Expect form control group data #' + (i + 1) + ' not to be blank', function() {
        pages.dataUtilities.expectFormControlGroupDataNotToBeBlank(i);
    });
};

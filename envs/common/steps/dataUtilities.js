'use strict';
var pageStep = require('../../../helpers/basicPageStep.js'),
    _ = require('lodash');

steps.dataUtilities = exports;

exports.go = function() {
	it('Go to data utilities page', function() {
        pages.dataUtilities.open();
        pages.base.waitForAjax();
    });
};

/*exports.openMenuBoardItem = function() {
    var args = _.toArray(arguments), boardIndex, name;

    if (_.isString(args[0])) {
        name = args[0];

        it('Open "' + name + '" menu item from last open board', function() {
            pages.dataUtilities.openMenuBoardItem(name);
        });
    } else {
        boardIndex = args[0];
        name = args[1];

        it('Open "' + name + '" menu item from board #' + (boardIndex + 1), function() {
            pages.dataUtilities.openMenuBoardItem(boardIndex, name);
        });
    }
};

exports.openMenuBoardItemByIndex = function(i, boardIndex) {
    it('Open menu item #' + (i + 1) + ' from board #' + (boardIndex + 1), function() {
        pages.dataUtilities.openMenuBoardItemByIndex(boardIndex, i);
    });
};*/

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

pageStep([
    'Expect items to be',
    'Open menu board item',
    'Open menu board item by index',
    'Click edit button',
    'Get property',
    'Edit property',
    'Expect property to be',
    'Click cancel link',
    'Click save link',
    'Check save and revert',

]);


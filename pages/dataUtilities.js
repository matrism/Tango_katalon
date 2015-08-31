'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    pph = require('../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    menuBoardItemCssSelector = 'li a',
    breadcrumbItemCssSelector = 'li a';

require(pages_path + 'base');

exports = module.exports = new ftf.pageObject({
    url: _tf_config.urls.app_url + "#/maintenance/du"
});

pages.dataUtilities = exports;

exports.menuBoardsContainer = function() {
    return $('#MENU-BOARDS');
};

exports.menuBoards = function() {
    return exports.menuBoardsContainer().$$('.menu-board');
};

exports.menuBoardItem = function(boardIndex, name) {
    return exports.menuBoards().get(boardIndex).element(by.cssContainingText(
        menuBoardItemCssSelector, name
    ));
};

exports.openMenuBoardItem = function(boardIndex, name) {
    var element = exports.menuBoardItem(boardIndex, name);

    pages.base.scrollIntoView(element);

    return element.click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.menuBoardItems = function(boardIndex) {
    return exports.menuBoards().get(boardIndex).$$(menuBoardItemCssSelector);
};

exports.openMenuBoardItemByIndex = function(boardIndex, i) {
    var element = exports.menuBoardItems(boardIndex).get(i);

    pages.base.scrollIntoView(element);

    return element.click().then(function() {
        pages.base.waitForAjax();
    });
};

exports.breadcrumbContainer = function() {
    return $('#BREADCRUMBS');
};

exports.breadcrumbItems = function() {
    return exports.breadcrumbContainer().$$(breadcrumbItemCssSelector);
};

exports.breadcrumbItem = function(name) {
    return exports.breadcrumbContainer().element(by.cssContainingText(
        breadcrumbItemCssSelector, name
    ));
};

exports.navigateBreadcrumb = function(name) {
    var element = exports.breadcrumbItem(name);

    pages.base.scrollIntoView(element);

    return element.click().then(function() {
        pages.base.waitForAjax();
    });
};

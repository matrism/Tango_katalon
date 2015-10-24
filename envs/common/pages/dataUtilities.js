'use strict';

var pph = require('../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    menuBoardItemCssSelector = 'li a',
    breadcrumbItemCssSelector = 'li a';

exports = module.exports = new ftf.pageObject({
    url: _tf_config.urls.app_url + "#/maintenance/du"
});

pages.dataUtilities = exports;

exports.menuBoardsContainer = function () {
    return $('#MENU-BOARDS');
};

exports.menuBoards = function () {
    return exports.menuBoardsContainer().$$('.menu-board');
};

exports.menuBoardItem = function (boardIndex, name) {
    return exports.menuBoards().get(boardIndex).element(by.cssContainingText(
        menuBoardItemCssSelector, name
    ));
};

exports.openMenuBoardItem = function (boardIndex, name) {
    var element = exports.menuBoardItem(boardIndex, name);

    pages.base.scrollIntoView(element);

    return element.click().then(function () {
        pages.base.waitForAjax();
    });
};

exports.menuBoardItems = function (boardIndex) {
    return exports.menuBoards().get(boardIndex).$$(menuBoardItemCssSelector);
};

exports.openMenuBoardItemByIndex = function (boardIndex, i) {
    var element = exports.menuBoardItems(boardIndex).get(i);

    pages.base.scrollIntoView(element);

    return element.click().then(function () {
        pages.base.waitForAjax();
    });
};

exports.breadcrumbContainer = function () {
    return $('#BREADCRUMBS');
};

exports.breadcrumbItems = function () {
    return exports.breadcrumbContainer().$$(breadcrumbItemCssSelector);
};

exports.breadcrumbItem = function (name) {
    return exports.breadcrumbContainer().element(by.cssContainingText(
        breadcrumbItemCssSelector, name
    ));
};

exports.navigateBreadcrumb = function (name) {
    var element = exports.breadcrumbItem(name);

    pages.base.scrollIntoView(element);

    return element.click().then(function () {
        pages.base.waitForAjax();
    });
};

exports.formContainer = function () {
    return $('.menu-board.menu-EDIT');
};

exports.formControlGroupContainers = function () {
    return exports.formContainer().$$('.control-group');
};

exports.formControlLabelBinding = function (i) {
    return exports.formControlGroupContainers().get(i).$('.control-label');
};

exports.expectFormControlLabelToBeVisible = function (i) {
    var element = exports.formControlLabelBinding(i);
    pages.base.scrollIntoView(element);
    expect(element.isDisplayed()).toBeTruthy();
};

exports.formControlGroupControlsContainer = function (i) {
    return exports.formControlGroupContainers().get(i).$('.controls');
};

exports.formControlGroupData = function (i) {
    var element = exports.formControlGroupControlsContainer(i);
    pages.base.scrollIntoView(element);
    return pph.getAllText(element);
};

exports.expectFormControlGroupDataNotToBeBlank = function (i) {
    expect(exports.formControlGroupData(i)).not.toBe('');
};

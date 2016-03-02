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

exports.menuBoardItem = function (name, boardIndex) {
    var parentElem = exports.menuBoards();

    if (boardIndex) {
        parentElem = parentElem.get(boardIndex);
    } else {
        parentElem = parentElem.last();
    }

    return parentElem.element(by.cssContainingText(
        menuBoardItemCssSelector, name
    ));
};

exports.openMenuBoardItem = function (name, boardIndex) {
    var element = exports.menuBoardItem(name, boardIndex);

    pages.base.scrollIntoView(element);

    return element.click().then(function () {
        pages.base.waitForAjax();
    });
};

exports.menuBoardItems = function (boardIndex) {
    var parentElem = exports.menuBoards(), 
        items;

    if (boardIndex) {
        parentElem = parentElem.get(boardIndex);
    } else {
        parentElem = parentElem.last();
    }

    items = parentElem.$$(menuBoardItemCssSelector);

    browser.wait(function(){
        return items.count().then(function(num){
            return num && items.first().getText().then(function(text){
                return text && text !== '';
            });
        });
    });

    return items;
};

exports.openMenuBoardItemByIndex = function (i, boardIndex) {
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

exports.expectItemsToBe = function (arr, i) {
    expect(exports.menuBoardItems(i).getText()).toEqual(arr);
};

exports.editButton = function () {
    return $('.EDITOR .btn-toggle');
};

exports.clickEditButton = function () {
    var button = exports.editButton();
    browser.wait(protractor.ExpectedConditions.presenceOf(button));
    button.click();
};

exports.editProperty = function (propName, propValue) {
    var elem = element.all(by.cssContainingText('.EDITOR label', propName)).filter(function(e){ return e.isDisplayed();}).first(),
        inputElem;

    browser.wait(protractor.ExpectedConditions.visibilityOf(elem));
    inputElem = elem.element(by.xpath('..')).$('label + div [data-ng-model]');

    inputElem.clear();
    return inputElem.sendKeys(propValue);
};

exports.getProperty = function (propName) {
    browser.sleep(2000);
    var elem = element.all(by.cssContainingText('.EDITOR label', propName));

    elem = elem.filter(function(e){return e.isDisplayed();}).first().element(by.xpath('..')).$('label + div');
    return elem.getText();
};

var testData;
exports.storeInitialPropValue = function(propName) {
    testData[propName] = exports.getProperty(propName);
};

exports.expectPropertyToBe = function (propName, propValue) {
    var prop = exports.getProperty(propName);

    expect(prop).toEqual(propValue);
};

exports.clickCancelLink = function() {
    $('.EDITOR .btn-cancel').click();
};

exports.clickSaveLink = function() {
    $('.EDITOR .btn-primary').click();
    pages.base.waitForAjax();
};

exports.checkSaveAndRevert = function (propName, propValue) {
    var propInitialValue;
    browser.sleep(5000);

    exports.getProperty(propName).then(function(text){
        propInitialValue = text || '';

        if (!propValue) {
            propValue = 'TAT_' + propInitialValue;
        }

        exports.expectPropertyToBe(propName, propInitialValue);
        exports.clickEditButton();
        browser.sleep(2000);
        exports.editProperty(propName, propValue);
        browser.sleep(2000);
        exports.clickCancelLink();

        exports.expectPropertyToBe(propName, propInitialValue);
        exports.clickEditButton();
        browser.sleep(2000);
        exports.editProperty(propName, propValue);
        browser.sleep(2000);
        exports.clickSaveLink();
        exports.expectPropertyToBe(propName, propValue);

        exports.clickEditButton();
        browser.sleep(2000);
        exports.editProperty(propName, propInitialValue);
        browser.sleep(2000);
        exports.clickSaveLink();

    });

};


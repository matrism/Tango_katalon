'use strict';

pages.endRulesRetention = exports;

exports.saveEndRulesButton = function () {
    return $('.modal-footer button[ng-click="ok()"]');
};

exports.deleteEndRulesButton = function () {
    return $('.modal-footer button[ng-click="data.showDeleteAllEndRulesModal()"]');
};

exports.cancelEndRulesButton = function () {
    return $('.modal-footer button[ng-click="data.checkDirtyData()"]');
};

exports.saveEndRules = function () {
    var el = pages.endRulesRetention.saveEndRulesButton();
    browser.wait(ExpectedConditions.visibilityOf(el));
    asAlways(el, 'scrollIntoView', 'click');
    pages.base.waitForAjax();
};

exports.clickOnDeleteEndRulesButton = function () {
    asAlways(pages.endRulesRetention.deleteEndRulesButton(), 'scrollIntoView', 'click');
    pages.base.waitForAjax();
};

exports.clickOnCancelEndRulesButton = function () {
    asAlways(pages.endRulesRetention.cancelEndRulesButton(), 'scrollIntoView', 'click');
    pages.base.waitForAjax();
};
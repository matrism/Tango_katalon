'use strict';

pages.endRulesRetention = exports;

exports.saveEndRulesButton = function () {
    return $('[data-ng-click="saveEndRules(form.show.endRules.containerId, form.show.endRules.type, rtpEndRulesModalForm.$valid)"]');
};

exports.deleteEndRulesButton = function () {
    return $('.modal-footer [data-ng-click="showDeleteAllEndRulesModal(form.show.endRules.containerId, form.show.endRules.type)"]');
};

exports.cancelEndRulesButton = function () {
    return $('.modal-footer [data-ng-click="cancel()"]');
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

'use strict';

var ExpectedConditions = protractor.ExpectedConditions,
    callResultOrValue = require('../../../../helpers/callResultOrValue'),
    pph = require('../../../../helpers/pph');

pages.registrationFileActivity = exports;

exports.goToRegistrationFileActivityPage = function () {
    browser.get(_tf_config.urls.app_url + "#/file/activity");
    pages.base.waitForAjax();
};

exports.lastDelivery = function () {
    return $$(".row-header").first();
};

exports.activityRecordsTable = function () {
    return $("#ACTIVITY-RECORDS");
};

exports.regActivityHeader = function () {
    return $$(".dropdown-toggle.transition").first();
};

exports.regActivityDropdown = function () {
    return $('.dropdown.open>ul>li>a');
};

exports.getStatus = function (event) {
    return event.all(by.binding('activity.sub_status')).first().getText();
};

exports.lastDisplayedDeliveredWork = function () {

};

exports.clickRegActivityHeader = function () {
    return this.regActivityHeader().click();
};

exports.clickRegActivityDropDown = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.regActivityDropdown()));
    this.regActivityDropdown().click();
};

exports.clickOnLastDisplayedDeliveredWork = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.activityRecordsTable()));
    this.lastDelivery().click();
};

exports.validateLastDelivery = function () {
    return true;
};

exports.workHasDeliveredStatus = function () {
    return this.getStatus(this.lastDelivery());
};






exports.getReceivedDate = function (event) {
    return event.element(by.binding('::activity.transmission_date | tgIsoDate')).getText();
};

exports.getTotalAccepted = function (event) {
    return event.all(by.binding('accepted')).first().getText();
};

exports.getTotalRejected = function (event) {
    return event.all(by.binding('rejected')).first().getText();
};
exports.getInitiatedBy = function (event) {
    return event.element(by.binding('activity.initiated_by')).getText();
};

exports.getAcceptedValue = function (event, type) {
    return event.element(by.binding('activity.file_event_facet.accepted.' + type + '_works | tgZero')).getText();
};

exports.getRejectedValue = function (event, type) {
    return event.element(by.binding('activity.file_event_facet.rejected.' + type + '_works | tgZero')).getText();
};

exports.getEventByFileName = function (name) {
    name = callResultOrValue(name);
    return element.all(
        by.cssContainingText('[data-ng-repeat="activity in fileActivities.data"]', name)
    ).first();
};

exports.findEventByFileName = function (name) {
    exports.targetEvent = exports.getEventByFileName(name);
    return pages.base.scrollIntoView(exports.targetEvent);
};

exports.toggleBlind = function() {
    return exports.targetEvent.click();
};

exports.validateStatus = function(status) {
    expect(exports.getStatus(exports.targetEvent)).toBe(status);
};

exports.validateReceivedDate = function(date) {
    expect(exports.getReceivedDate(exports.targetEvent)).toBe(date)
};

exports.validateTotalAccepted = function(value) {
    expect(exports.getTotalAccepted(exports.targetEvent)).toBe(value)
};

exports.validateTotalRejected = function(value) {
    expect(exports.getTotalRejected(exports.targetEvent)).toBe(value)
};

exports.validateInitiatedBy = function() {
    expect(exports.getInitiatedBy(exports.targetEvent)).not.toBe(null);
};

exports.validateAcceptedValues = function(values) {
    expect(exports.getAcceptedValue(exports.targetEvent, 'ra')).toBe(values.ra);
    expect(exports.getAcceptedValue(exports.targetEvent, 'as')).toBe(values.as);
    expect(exports.getAcceptedValue(exports.targetEvent, 'ac')).toBe(values.ac);
};

exports.validateRejectedValues = function(values) {
    expect(exports.getRejectedValue(exports.targetEvent, 'rj')).toBe(values.rj);
    expect(exports.getRejectedValue(exports.targetEvent, 'rc')).toBe(values.rc);
    expect(exports.getRejectedValue(exports.targetEvent, 'co')).toBe(values.co);
};

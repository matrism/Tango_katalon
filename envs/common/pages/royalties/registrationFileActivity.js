'use strict';

var callResultOrValue = require('../../../../helpers/callResultOrValue'),
    pph = require('../../../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions;

pages.registrationFileActivity = exports;

exports.goToRegistrationFileActivityPage = function () {
    browser.get(_tf_config.urls.app_url + "#/file/activity");
    pages.base.waitForAjax();
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

exports.clickRegActivityHeader = function () {
    return this.regActivityHeader().click();
};

exports.clickRegActivityDropDown = function () {
    browser.wait(ExpectedConditions.visibilityOf(this.regActivityDropdown()));
    this.regActivityDropdown().click();
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

exports.getEventByRecipient = function (name) {
    return element.all(
        by.cssContainingText('[data-ng-repeat="activity in fileActivities.data"]', name)
    ).first();
};

exports.findEventByRecipient = function (name) {
    exports.targetEvent = exports.getEventByRecipient(name);
    return pages.base.scrollIntoView(exports.targetEvent);
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

exports.getEmailMethod = function (i) {
    return exports.targetEvent.all(by.cssContainingText(
        '[data-ng-repeat="event in ::activity.delivery_events"]', 'Email to'
    )).get(i);
};

exports.getFtpMethod = function (i) {
    return exports.targetEvent.all(by.cssContainingText(
        '[data-ng-repeat="event in ::activity.delivery_events"]', 'FTP'
    )).get(i);
};

exports.getDeliveryEmail = function (deliveryMethod) {
    return deliveryMethod.$(
        '[data-ng-show="event.file_delivery_email_address"] a'
    ).getText();
};

exports.getDeliveryFileFormat = function (deliveryMethod) {
    return deliveryMethod.element(
        by.binding('translateServerConstant(event.registration_files[0].registration_method)')
    ).getText();
};

exports.getDeliveryAddress = function (deliveryMethod) {
    return deliveryMethod.element(
        by.binding('event.file_delivery_ftp_address.split(":")[0]')
    ).getText();
};

exports.getDeliveryPort = function (deliveryMethod) {
    return deliveryMethod.element(
        by.binding('event.file_delivery_ftp_address.split(":")[1]')
    ).getText();
};

exports.getEmailMethodEmail = function (i) {
    return exports.getDeliveryEmail(exports.getEmailMethod(i));
};

exports.getEmailMethodFileFormat = function (i) {
    return exports.getDeliveryFileFormat(exports.getEmailMethod(i));
};

exports.getFtpMethodFileFormat = function (i) {
    return exports.getDeliveryFileFormat(exports.getFtpMethod(i));
};

exports.getFtpMethodAddress = function (i) {
    return exports.getDeliveryAddress(exports.getFtpMethod(i));
};

exports.getFtpMethodPort = function (i) {
    return exports.getDeliveryPort(exports.getFtpMethod(i));
};

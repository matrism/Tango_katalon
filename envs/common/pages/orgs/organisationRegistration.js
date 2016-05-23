"use strict";

var ExpectedConditions = protractor.ExpectedConditions,
    callResultOrValue = require('../../../../helpers/callResultOrValue'),
    pph = require('../../../../helpers/pph');

pages.organisationRegistration = exports;

hash.ftpOptions = {};

exports.loadAckButton = function () {
    return $('[data-ng-click="showLoadAck()"]');
};

exports.ackFileNameInput = function () {
    return element(by.model('selectedAckDevMechanism.deliveryMethod.file_name'));
};

exports.ackDeliveryMethodSelect = function () {
    return element(by.model('selectedAckDevMechanism'));
};

exports.unmaskPasswordButton = function () {
    return $('[data-ng-click="data.hidePassword = !data.hidePassword"]');
};

exports.getFtpAddress = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.host')).getText();
};

exports.getFtpDirectory = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.path')).getText();
};

exports.getFtpPort = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.port')).getText();
};

exports.getFtpUsername = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.username')).getText();
};

exports.getFtpPassword = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.password')).getText();
};

exports.getAckCreationDate = function (event) {
    return event.element(by.binding('activity.created_date | tgIsoDate')).getText();
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

exports.loadAckSubmitButton = function () {
    return $('[name="ackDevMethodForm"] [type=submit]');
};

exports.refreshEventsButton = function () {
    return $('[data-ng-click="refreshRegActivities(false)"]');
};

exports.getEventByFileName = function (name) {
    name = callResultOrValue(name);
    return element.all(
        by.cssContainingText('[data-ng-repeat="activity in regActivities_hash.data"]', name)
    ).first();
};

exports.getStatus = function (event) {
    return event.all(by.binding('activity.sub_status')).first().getText();
};

exports.loadAck = function () {
    return exports.loadAckButton().click();
};

exports.submitLoadAck = function () {
    var element = exports.loadAckSubmitButton().click();
    pages.base.waitForAjax();
};

exports.refreshEvents = function () {
    exports.refreshEventsButton().click();
    pages.base.waitForAjax();
};

exports.enterFileName = function (name) {
    name = callResultOrValue(name);
    var element = exports.ackFileNameInput();
    browser.wait(ExpectedConditions.visibilityOf(element));
    return element.sendKeys(name);
};

exports.selectFtpMethod = function (value) {
    var element = exports.ackDeliveryMethodSelect();
    browser.wait(ExpectedConditions.visibilityOf(element));
    pages.base.selectDropdownOption.standard(element, value);
};

exports.unmaskPassword = function () {
    exports.unmaskPasswordButton().click();
};

exports.getFtpOptions = function () {
    hash.ftpOptions = {
        host: exports.getFtpAddress(),
        directory: exports.getFtpDirectory(),
        port: exports.getFtpPort(),
        user: exports.getFtpUsername(),
        pass: exports.getFtpPassword()
    };
};

exports.findEventByFileName = function (name) {
    exports.targetEvent = exports.getEventByFileName(name);
    return pages.base.scrollIntoView(exports.targetEvent);
};

exports.waitUntilEventStatusBecomes = function(status) {
    var event = exports.targetEvent,
        statusElement = exports.getStatus(event);

    browser.wait(function() {
        pages.base.scrollIntoView(statusElement);

        return pph.trim(statusElement.getText()).then(function(text) {
            if(text === status) {
                statusElement.click();
                return true;
            }
            exports.refreshEvents();
            return false;
        });
    });
};

exports.validateAckCreationDate = function(date) {
    expect(exports.getAckCreationDate(exports.targetEvent)).toBe(date)
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

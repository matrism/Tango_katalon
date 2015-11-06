"use strict";

var ExpectedConditions = protractor.ExpectedConditions,
    pph = require('../../../../helpers/pph');

exports = module.exports = pages.person = new ftf.pageObject();

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
exports.getFtpPort = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.port')).getText();
};
exports.getFtpUsername = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.username')).getText();
};
exports.getFtpPassword = function () {
    return element(by.binding('selectedAckDevMechanism.deliveryMethod.password')).getText();
};
exports.loadAckSubmitButton = function () {
    return $('[name="ackDevMethodForm"] [type=submit]');
};
exports.getEventByFileName = function (name) {
    return element.all(by.cssContainingText('[data-ng-repeat="activity in regActivities_hash.data"]', name)).first();
};
exports.getStatus = function (event) {
    return event.all(by.binding('activity.sub_status')).first().getText();
};


exports.loadAck = function () {
    return exports.loadAckButton().click();
};
exports.enterFileName = function () {
    var element = exports.ackFileNameInput();
    browser.wait(ExpectedConditions.visibilityOf(element));
    return element.sendKeys(hash.currentAckFile);
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
        port: exports.getFtpPort(),
        user: exports.getFtpUsername(),
        pass: exports.getFtpPassword()
    };
};
exports.submitLoadAck = function () {
    return exports.loadAckSubmitButton().click();
};

exports.waitUntilEventStatusBecomes = function(status) {
    pages.base.refreshPage();
    var event = exports.getEventByFileName(hash.currentAckFile);
    pages.base.scrollIntoView(event);
    var statusElement = exports.getStatus(event);

    browser.wait(function() {
        pages.base.scrollIntoView(statusElement);

        return pph.trim(statusElement.getText()).then(function(text) {
            if(text === status) {
                return true;
            }

            pages.base.refreshPage();

            return false;
        });
    });
};

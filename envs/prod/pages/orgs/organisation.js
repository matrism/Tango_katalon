'use strict';

var ExpectedConditions = protractor.ExpectedConditions;

pages.organisation = exports;

exports.cisacCodeBinding = function() {
    return $(
        '[data-ng-show="orgEdit.pristine.masterData.type === ' +
        'orgTypes.society || orgEdit.pristine.masterData.type === ' +
        'orgTypes.copyright"] .ng-binding'
    );
};

exports.cisacCode = function() {
    var codeElement = exports.cisacCodeBinding();
    pages.base.scrollIntoView(codeElement);
    return codeElement.getText();
};

exports.validateCisacCode = function(value) {
    expect(exports.cisacCode()).toBe(value);
};

exports.tabSetContainer = function() {
    return $('.nav-tabs');
};

exports.previewRegistrationRunTab = function() {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', 'Preview Registration Run'
    ));
};

exports.goToPreviewRegistrationRunTab = function() {
    exports.previewRegistrationRunTab().click();
};

exports.previewRegistrationRunHeader = function() {
    return $('.reg-run-header');
};

exports.waitForPreviewRegistrationRunHeaderToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(
        exports.previewRegistrationRunHeader()
    ));
};

exports.registrationActivityTab = function() {
    return exports.tabSetContainer().element(by.cssContainingText(
        'a', 'Registration Activity'
    ));
};

exports.goToRegistrationActivityTab = function() {
    exports.registrationActivityTab().click();
};

exports.registrationActivityRecordsTable = function() {
    return $('#ACTIVITY-RECORDS');
};

exports.waitForRegistrationActivityRecordsTableToBeDisplayed = function() {
    browser.wait(ExpectedConditions.visibilityOf(
        exports.registrationActivityRecordsTable()
    ));
};

exports.subPublisherRelationshipContainers = function() {
    return element.all(by.repeater(
        'subPublisherData in dataHolder.subPublishers.data track ' +
        'by subPublisherData._uid'
    ));
};

exports.subPublisherNameBinding = function(i) {
    return this.subPublisherRelationshipContainers().get(i).$(
        '[data-ui-sref="orgView({' +
            'orgId:modularEditModels.subPublisher.publisherId' +
        '})"]'
    );
};

exports.subPublisherName = function(i) {
    var nameElement = this.subPublisherNameBinding(i);
    pages.base.scrollIntoView(nameElement);
    return nameElement.getText();
};

exports.validateSubPublisherName = function(i, value) {
    expect(exports.subPublisherName(i)).toBe(value);
};

'use strict';

pages.workCopyrightCertificates = exports;

exports.certificateContainers = function() {
    return $$('[ui-view="usCopyrightCertificate"]');
};

exports.usLibraryOfCongressNumberBindings = function() {
    return exports.certificateContainers().all(by.css('[ng-bind="::certificate.copyrightStatus !== \'PENDING\' ? certificate.usLibraryOfCongressNumber : \'Pending\'"]'));
    //return exports.certificateContainers().all(by.css('td:nth-child(1)'));
};

exports.usLibraryOfCongressNumbers = function() {
    var elements = exports.usLibraryOfCongressNumberBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();

    });
};

exports.validateUsLibraryOfCongressNumbers = function(values) {
    var numbers = exports.usLibraryOfCongressNumbers();
    expect(numbers).toEqual(values);
};

exports.registrationDateBindings = function() {
    return exports.certificateContainers().all(by.css('[ng-bind="::certificate.copyrightStatus !== \'PENDING\' ? (certificate.registrationDate | date:\'yyyy-MM-dd\') : \'--\'"]'));
};

exports.registrationDates = function() {
    var elements = exports.registrationDateBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateRegistrationDates = function(values) {
    var names = exports.registrationDates();
    expect(names).toEqual(values);
};

exports.submittedDateBindings = function() {
    return exports.certificateContainers().all(by.css('[ng-bind="::certificate.submitDate | date:\'yyyy-MM-dd\'"]'));
};

exports.submittedDates = function() {
    var elements = exports.submittedDateBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateSubmittedDates = function(values) {
    var dates = exports.submittedDates();
    expect(dates).toEqual(values);
};

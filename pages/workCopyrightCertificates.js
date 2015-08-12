'use strict';

pages.workCopyrightCertificates = exports;

exports.certificateContainers = function() {
    return $$('table.table.table-certificate-section__container tr.ng-scope');
};

exports.usLibraryOfCongressNumberBindings = function() {
    return exports.certificateContainers().all(by.css('td:nth-child(1)'));
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

    values.forEach(function(value) {
        expect(numbers).toContain(value);
    });
};

exports.registrationDateBindings = function() {
    return exports.certificateContainers().all(by.css('td:nth-child(2)'));
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

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

exports.submittedDateBindings = function() {
    return exports.certificateContainers().all(by.css('td:nth-child(4)'));
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

    values.forEach(function(value) {
        expect(dates).toContain(value);
    });
};

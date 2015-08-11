'use strict';

pages.workCopyrightCertificates = exports;

exports.certificatesContainers = function() {
    return $$('table.table.table-certificate-section__container tr.ng-scope');
};

exports.submittedDateBindings = function() {
    return exports.certificatesContainers().all(by.css('td:nth-child(2)'));
};

exports.registrationDates = function() {
    var elements = exports.registrationDateBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateRegistrationDate = function(values) {
    var names = exports.registrationDates();

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

exports.submittedDateBindings = function() {
    return exports.certificatesContainers().all(by.css('td:nth-child(4)'));
};

exports.submittedDates = function() {
    var elements = exports.submittedDateBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateSubmittedDate = function(values) {
    var dates = exports.submittedDates();

    values.forEach(function(value) {
        expect(names).toContain(value);
    });
};

exports.usLibraryCongressNumberBindings = function() {
    return exports.certificatesContainers().all(by.css('td:nth-child(1)'));
};

exports.usLibraryCongressNumbers = function() {
    var elements = exports.usLibraryCongressNumberBindings();

    pages.base.scrollIntoView(elements.first());

    return elements.map(function(element) {
        return element.getText();
    });
};

exports.validateUSLibraryCongressNumber = function(values) {
    var numbers = exports.usLibraryCongressNumbers();

    values.forEach(function(value) {
        expect(numbers).toContain(value);
    });
};

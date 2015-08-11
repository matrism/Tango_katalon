'use strict';

pages.newWorkCopyrightCertificates = exports;

exports.certificatesContainers = function() {
    return $$('table.table.certificates_table tr');
};

exports.certificateContainer = function(i) {
    return exports.certificatesContainers().get(i);
};

exports.usLibraryCongressNumberInput = function(i) {
    return exports.certificateContainer(i).element(by.model('cert.us_library_of_congress_number'));
};

exports.registrationDateField = function(i) {
    return exports.certificateContainer(i).element(by.model('cert.registration_date'));
};

exports.submittedDateField = function(i) {
    return exports.certificateContainer(i).element(by.model('cert.submit_date'));
};

exports.selectRegistrationDateByIndex = function(i, value) {
    return exports.registrationDateField(i).element(by.css('input')).sendKeys(value);
};

exports.selectSubmittedDateByIndex = function(i, value) {
    return exports.submittedDateField(i).element(by.css('input')).sendKeys(value);
};

exports.enterUSLibraryCongressNumberByIndex = function(i, value) {
    var element = exports.usLibraryCongressNumberInput(i);
    return element.sendKeys(value);
};

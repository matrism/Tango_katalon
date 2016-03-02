'use strict';

pages.newWorkCopyrightCertificates = exports;

exports.certificateContainers = function() {
    return $$('table.table.certificates_table tr.ng-scope');
};

exports.usLibraryOfCongressNumberInput = function(i) {
    return (
        exports.certificateContainers().get(i)
            .element(by.model('cert.us_library_of_congress_number'))
    );
};

exports.enterUsLibraryOfCongressNumber = function(i, value) {
    var element = exports.usLibraryOfCongressNumberInput(i);
    return element.sendKeys(value);
};

exports.registrationDateInput = function(i) {
    return (
        exports.certificateContainers().get(i)
            .element(by.model('cert.registration_date'))
    );
};

exports.enterRegistrationDate = function(i, value) {
    return exports.registrationDateInput(i).element(by.css('input')).sendKeys(value);
};

exports.submittedDateInput = function(i) {
    return (
        exports.certificateContainers().get(i)
            .element(by.model('cert.submit_date'))
    );
};

exports.enterSubmittedDate = function(i, value) {
    return exports.submittedDateInput(i).element(by.css('input')).sendKeys(value);
};

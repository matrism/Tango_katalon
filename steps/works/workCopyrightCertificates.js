'use strict';

steps.workCopyrightCertificates = exports;

exports.validateUsLibraryOfCongressNumbers = function(values) {
    it('Validate US Library of Congress numbers (' + values.join(', ') + ')', function() {
        pages.workCopyrightCertificates.validateUsLibraryOfCongressNumbers(values);
    });
};

exports.validateRegistrationDates = function(values) {
    it('Validate registration dates (' + values.join(', ') + ')', function() {
        pages.workCopyrightCertificates.validateRegistrationDates(values);
    });
};

exports.validateSubmittedDates = function(values) {
    it('Validate submitted dates (' + values.join(', ') + ')', function() {
        pages.workCopyrightCertificates.validateSubmittedDates(values);
    });
};

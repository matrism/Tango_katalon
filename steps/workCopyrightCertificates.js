'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.workCopyrightCertificates = exports;

require(pages_path + 'workCopyrightCertificates');

exports.validateRegistrationDate = function(values) {
    it('Validate Date of Registration', function() {
        pages.workCopyrightCertificates.validateRegistrationDate(values);
    });
};

exports.validateSubmittedDate = function(values) {
    it('Validate Date Submitted', function() {
        pages.workCopyrightCertificates.validateSubmittedDate(values);
    });
};

exports.validateUSLibraryCongressNumber = function(values) {
    it('Validate US Library of Congress Number', function() {
        pages.workCopyrightCertificates.validateUSLibraryCongressNumber(values);
    });
};

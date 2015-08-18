'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.workCopyrightCertificates = exports;

require(pages_path + 'workCopyrightCertificates');

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

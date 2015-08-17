'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.newWorkCopyrightCertificates = exports;

require(pages_path + 'newWorkCopyrightCertificates');

exports.enterRegistrationDate = function(i, value) {
    it('Enter date of registration #' + (i + 1) + ' (' + value + ')', function() {
        pages.newWorkCopyrightCertificates.enterRegistrationDate(i, value);
    });
};

exports.enterSubmittedDate = function(i, value) {
    it('Enter date submitted #' + (i + 1) + ' (' + value + ')', function() {
        pages.newWorkCopyrightCertificates.enterSubmittedDate(i, value);
    });
};

exports.enterUsLibraryOfCongressNumber = function(i, value) {
    it(
        'Enter US Library of Congress number #' + (i + 1) + ' (' + value + ')',
        function() {
            pages.newWorkCopyrightCertificates.enterUsLibraryOfCongressNumber(i, value);
        }
    );
};

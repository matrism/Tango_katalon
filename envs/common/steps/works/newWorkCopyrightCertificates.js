'use strict';

steps.newWorkCopyrightCertificates = exports;

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

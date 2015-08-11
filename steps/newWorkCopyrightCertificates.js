'use strict';

var pages_path = _tf_config._system_.path_to_pages;

steps.newWorkCopyrightCertificates = exports;

require(pages_path + 'newWorkCopyrightCertificates');

exports.selectRegistrationDate = function(i, value) {
    it('Select Date of Registration #' + (i + 1) + ' (' + value + ')', function() {
        pages.newWorkCopyrightCertificates.selectRegistrationDateByIndex(i, value);
    });
};

exports.selectSubmittedDate = function(i, value) {
    it('Select Date Submitted #' + (i + 1) + ' (' + value + ')', function() {
        pages.newWorkCopyrightCertificates.selectSubmittedDateByIndex(i, value);
    });
};

exports.enterUSLibraryCongressNumber = function(i, value) {
    it(
        'Enter US Library of Congress Number #' + (i + 1) + ' (' + value + ')',
        function() {
            pages.newWorkCopyrightCertificates.enterUSLibraryCongressNumberByIndex(i, value);
        }
    );
};

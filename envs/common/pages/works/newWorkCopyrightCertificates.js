'use strict';

pages.newWorkCopyrightCertificates = exports;

exports.certificateContainers = function() {
    return $$('.cf-row.ng-scope');  
};

exports.certificateRows = () => element.all(by.repeater(
	    'certificate in tgModularEditModel.usCopyrightCertificates.$getItems()'
	));

exports.usLibraryOfCongressNumberInput = function(i) {
    return (
        exports.certificateRows().get(i)
            .element(by.model('certificate.usLibraryOfCongressNumber'))
    );
};

exports.enterUsLibraryOfCongressNumber = function(i, value) {
    var element = exports.usLibraryOfCongressNumberInput(i);
    return element.sendKeys(value);
};

exports.registrationDateInput = function(i) {
    return (
        exports.certificateRows().get(i)
            .element(by.model('certificate.registrationDate'))
    );
};

exports.enterRegistrationDate = function(i, value) {
    return exports.registrationDateInput(i).element(by.css('input')).sendKeys(value);
};

exports.submittedDateInput = function(i) {
    return (
        exports.certificateRows().get(i)
            .element(by.model('certificate.submitDate'))
    );
};

exports.enterSubmittedDate = function(i, value) {
    return exports.submittedDateInput(i).element(by.css('input')).sendKeys(value);
};

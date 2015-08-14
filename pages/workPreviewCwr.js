'use strict';

var ExpectedConditions = protractor.ExpectedConditions, 
    typeaheadResultRepeater = by.repeater('$match in $dataSet.queried.matches');

pages.workPreviewCwr = exports;

exports.cwrTableLineRows = function () { 
    return element(by.id('CWR-DATA')).all(by.repeater('record in dataHolder.currentCwr.records')); 
};

exports.registrationRecipientTypeahead = function () { 
    return element(by.model('dataHolder.currentRecipient')); 
};

exports.registrationRecipientSearch = function () { 
    return exports.registrationRecipientTypeahead().element(by.model('$term')); 
};

exports.registrationRecipientSearchResults = function () { 
    return exports.registrationRecipientTypeahead().all(typeaheadResultRepeater); 
};

exports.searchForRegistrationRecipient = function (name) {
    var elem = pages.workPreviewCwr.registrationRecipientSearch();

    return elem.sendKeys(name);
};

exports.selectRegistrationRecipientResultByIndex = function (index) {
    var typeaheadResult = exports.registrationRecipientSearchResults();

    browser.wait(ExpectedConditions.visibilityOfAny(exports.registrationRecipientSearchResults()));
    return typeaheadResult.click();
};

exports.validateCwrLines = function(cwrLinesTestData) {
    var cwrLinesInPage = pages.workPreviewCwr.cwrTableLineRows().map(function(elem, idx){
       return elem.getText();
    });

    expect(cwrLinesInPage).toEqual(cwrLinesTestData);
};

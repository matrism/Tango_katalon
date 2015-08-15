'use strict';

var ExpectedConditions = protractor.ExpectedConditions,
    typeaheadResultRepeater = by.repeater('$match in $dataSet.queried.matches');

pages.workCwrPreview = exports;

exports.recordBindings = function() {
    return (
        element.all(by.repeater('record in dataHolder.currentCwr.records'))
            .$$('.ng-binding')
    );
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
    var elem = exports.registrationRecipientSearch();

    return elem.sendKeys(name);
};

exports.selectRegistrationRecipientResultByIndex = function (index) {
    pages.base.waitForAjax();

    var typeaheadResult = exports.registrationRecipientSearchResults();

    browser.wait(ExpectedConditions.visibilityOfAny(exports.registrationRecipientSearchResults()));
    return typeaheadResult.click();
};

'use strict';

var leftPad = require('left-pad'),
    pph = require('../../helpers/pph'),
    ExpectedConditions = protractor.ExpectedConditions,
    publisherRecordType = {
        regExp: /^(SPU|OPU)([0-9]{16})(.{2})(.{9})(.{40})(.{9})/,
        fields: [
            'recordType',
            'recordNumber',
            'publisherSequenceNumber',
            'publisherIpiNumber',
            'publisherName',
            'publisherRole',
        ],
    },
    territoryCollectionSharesRecordType = {
        regExp: /^(SPT|SWT)([0-9]{16})/,
        fields: [
            'recordType',
            'recordNumber',
        ],
    },
    recordTypes = {
        NWR: {
            regExp: /^(NWR)([0-9]{16})(.{60})(.{2})(.{16})/,
            fields: [
                'recordType',
                'recordNumber',
                'workTitle',
                'titleLanguageCode',
                'submitterWorkNumber',
            ],
        },
        SPU: publisherRecordType,
        OPU: publisherRecordType,
        SPT: territoryCollectionSharesRecordType,
        SWT: territoryCollectionSharesRecordType,
        SWR: {
            regExp: /^(SWR)([0-9]{16})(.{9})(.{42}).{34}(.{2})/,
            fields: [
                'recordType',
                'recordNumber',
                'writerIpiNumber',
                'writerName',
                'writerDesignationCode',
            ],
        },
        PWR: {
            regExp: /^(PWR)([0-9]{16})(.{9})(.{42})/,
            fields: [
                'recordType',
                'recordNumber',
                'publisherIpiNumber',
                'publisherName',
            ],
        },
        ALT: {
            regExp: /^(ALT)([0-9]{16})(.{60})/,
            fields: [
                'recordType',
                'recordNumber',
                'workTitle',
            ],
        },
    };

pages.workCwrPreview = exports;

function parseRecord(value, regExp) {
    expect(value).toMatch(regExp);
    return regExp.exec(value);
}

function parseRecordField(value, regExp, fieldIndex) {
    var record = parseRecord(value, regExp);
    return record && record[fieldIndex + 1].trim();
}

exports.cwrDataContainer = function() {
    return $('#CWR-DATA');
};

exports.recordBindings = function() {
    return exports.cwrDataContainer().$$('.ng-binding');
};

exports.expectCwrDataToBeDisplayed = function() {
    expect(exports.cwrDataContainer().isDisplayed()).toBeTruthy();
};

exports.rawRecord = function(i) {
    var element = exports.recordBindings().get(i);
    pages.base.scrollIntoView(element);
    return pph.trim(element.getText());
};

exports.recordFieldValue = function(i, fieldName) {
    return exports.rawRecord(i).then(function(value) {
        var recordTypeName = value.slice(0, 3).trim(),
            recordType,
            fieldIndex;

        expect(Object.keys(recordTypes)).toContain(recordTypeName);

        recordType = recordTypes[recordTypeName];

        if(!recordType) {
            return null;
        }

        expect(recordType.fields).toContain(fieldName);

        fieldIndex = recordType.fields.indexOf(fieldName);

        if(fieldIndex === -1) {
            return null;
        }

        return parseRecordField(value, recordType.regExp, fieldIndex);
    });
};

exports.validateRecordField = function(i, fieldName, value) {
    expect(exports.recordFieldValue(i, fieldName)).toBe(value);
};

exports.validateRecordType = function(i, value) {
    exports.validateRecordField(i, 'recordType', value);
};

exports.validateRecordNumber = function(i) {
    exports.validateRecordField(i, 'recordNumber', leftPad(i, 16, 0));
};

exports.validateWorkTitle = function(i, value) {
    exports.validateRecordField(i, 'workTitle', value);
};

exports.validateSubmitterWorkNumberAsWorkId = function(i, value) {
    exports.validateRecordField(
        i, 'submitterWorkNumber', value.replace(/ /g, '') + '0'
    );
};

exports.validatePublisherName = function(i, value) {
    exports.validateRecordField(i, 'publisherName', value);
};

exports.validatePublisherRole = function(i, value) {
    exports.validateRecordField(i, 'publisherRole', value);
};

exports.validateWriterName = function(i, value) {
    exports.validateRecordField(i, 'writerName', value);
};

exports.validateWriterDesignationCode = function(i, value) {
    exports.validateRecordField(i, 'writerDesignationCode', value);
};

exports.registrationRecipientTypeahead = function () {
    return element(by.model('dataHolder.currentRecipient'));
};

exports.registrationRecipientSearch = function () {
    return exports.registrationRecipientTypeahead().element(by.model('$term'));
};

exports.registrationRecipientSearchResults = function () {
    return exports.registrationRecipientTypeahead().all(by.repeater(
        '$match in $dataSet.queried.matches'
    ));
};

exports.searchForRegistrationRecipient = function (name) {
    var elem = exports.registrationRecipientSearch();

    return elem.sendKeys(name);
};

exports.selectRegistrationRecipientResultByIndex = function (index) {
    pages.base.waitForAjax();

    var typeaheadResult = exports.registrationRecipientSearchResults();

    browser.wait(ExpectedConditions.visibilityOfAny(exports.registrationRecipientSearchResults()));

    return typeaheadResult.click().then(function() {
        pages.base.waitForAjax();
    });
};

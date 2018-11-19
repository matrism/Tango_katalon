'use strict';

var leftPad = require('left-pad'),
    pph = require('../../../../helpers/pph'),
    asa = require('../../../../helpers/asAlways'),
    ExpectedConditions = protractor.ExpectedConditions,
    publisherRecordType = {
        regExp: /^(SPU|OPU)([0-9]{16})(.{2})(.{9})(.{40})(.{9})(.{87})(.{14})/,
        fields: [
            'recordType',
            'recordNumber',
            'publisherSequenceNumber',
            'publisherIpiNumber',
            'publisherName',
            'publisherRole',
            'number1',
            'societyNumber',
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

exports.validateRecordType = function(i, RecordName) {
    //exports.validateRecordField(i, 'recordType', value);
    return exports.rawRecord(i).then(function(value) {
        var recordTypeName = value.slice(0, 3).trim();
        expect(recordTypeName).toBe(RecordName);

    });
};

exports.validateRecordExist = function(i){

    return exports.rawRecord(i).then(function(value) {

        console.log(value);
        //var recordTypeName = value.slice(0, 3).trim();

        // if (recordTypeName =='')
        // {
        //     console.log('There is no Scoiety Number ');
        // }

    });

};
exports.validateSocietyNumber = function(i,value) {

       exports.validateRecordField(i, 'societyNumber', value);

};

exports.validateRecordNumber = function(i) {
    //exports.validateRecordField(i, 'recordNumber', leftPad(i, 16, 0));
    return exports.rawRecord(i).then(function(value) {
        var recordTypeNum = value.slice(3, 19).trim();
        expect(recordTypeNum).toBe(leftPad(i, 16, 0));

    });
};

exports.validateWorkTitle = function(i, value) {
    exports.validateRecordField(i, 'workTitle', value);
};

exports.validateSubmitterWorkNumberAsWorkId = function(i, value) {
    exports.validateRecordField(
        i, 'submitterWorkNumber', value.replace(/ /g, '') + '0'
    );
};

exports.validatePublisherName = function(i, PubName) {
    //exports.validateRecordField(i, 'publisherName', value);
    return exports.rawRecord(i).then(function(value) {
        var recordTypeName = value.slice(0, 3).trim(),
            recordPublisher,
            x;
        if (recordTypeName == 'PWR') {
            x=28;
        } else {
            x=30;
        }
        recordPublisher = value.slice(x).trim()
        expect(recordPublisher).toContain(PubName);

    });
};

exports.validatePublisherRole = function(i, PubRole) {
    //exports.validateRecordField(i, 'publisherRole', value);
    return exports.rawRecord(i).then(function(value) {
        var recordPubRole = value.slice(30).trim();
        expect(recordPubRole).toContain(PubRole);

    });
};

exports.validateWriterName = function(i, value) {
    exports.validateRecordField(i, 'writerName', value);
};

exports.validateWriterDesignationCode = function(i, value) {
    exports.validateRecordField(i, 'writerDesignationCode', value);
};

exports.registrationRecipientTypeahead = function () {
    return element(by.model('tgOrgTypeaheadModel'));
};

exports.registrationRecipientSearch = function () {
    return exports.registrationRecipientTypeahead().element(by.model('$term'));
};

exports.registrationRecipientSearchResults = function () {
    return exports.registrationRecipientTypeahead().all(by.repeater(
        '$match in $dataSet.queried.matches | limitTo:$dataSet.queried.limit'
    ));
};

exports.searchForRegistrationRecipient = function (name) {
    var elem = exports.registrationRecipientSearch();

    return elem.sendKeys(name);
};

exports.selectRegistrationRecipientResultByIndex = function (index) {
    pages.base.waitForAjax();

    var results = exports.registrationRecipientSearchResults();

    browser.wait(ExpectedConditions.visibilityOfAny(results));

    return results.get(index).click().then(function() {
        pages.base.waitForAjax();
    });
};

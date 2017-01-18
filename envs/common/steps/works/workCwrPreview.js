'use strict';

steps.workCwrPreview = exports;

exports.expectCwrDataToBeDisplayed = function() {
    it('Expect CWR data to be displayed', function() {
        pages.workCwrPreview.expectCwrDataToBeDisplayed();
    });
};

exports.searchForRegistrationRecipient = function(name) {
    it('Search for Registration Recipient (' + name + ')', function() {
        pages.workCwrPreview.searchForRegistrationRecipient(name);
    });
};

exports.selectRegistrationRecipientResultByIndex = function (index) {
    it('Select Registration Recipient Result #' + (index + 1), function (){
        pages.workCwrPreview.selectRegistrationRecipientResultByIndex(index);
    });
};

exports.selectFirstRegistrationRecipientResult = function() {
    exports.selectRegistrationRecipientResultByIndex(0);
};

exports.validateRecordType = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - Validate record type (' + value + ')',
        function() {
            pages.workCwrPreview.validateRecordType(i, value);
        }
    );
};

exports.validateSocietyNumber = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - Validate SocietyNumber (' + value + ')',
        function() {
            pages.workCwrPreview.validateSocietyNumber(i, value);
        }
    );
};

exports.validateRecordNumber = function(i) {
    it(
        'Record #' + (i + 1) + ' - Validate record number', function() {
            pages.workCwrPreview.validateRecordNumber(i);
        }
    );
};

exports.validateWorkTitle = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate work title (' + value + ')', function() {
            pages.workCwrPreview.validateWorkTitle(i, value);
        }
    );
};

exports.validateSubmitterWorkNumberAsWorkId = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate submitter work number as work ID (' + value + ')', function() {
            pages.workCwrPreview.validateSubmitterWorkNumberAsWorkId(i, value);
        }
    );
};

exports.validateSubmitterWorkNumberUsingWorkIdFromCurrentWorkSlot = function(i) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate submitter work number using work ID from current work slot',
        function() {
            pages.workCwrPreview.validateSubmitterWorkNumberAsWorkId(
                i, hash.currentEntityDataSlotsByType.work.id
            );
        }
    );
};

exports.validatePublisherName = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate publisher name (' + value + ')', function() {
            pages.workCwrPreview.validatePublisherName(i, value);
        }
    );
};

exports.validatePublisherRole = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate publisher role (' + value + ')', function() {
            pages.workCwrPreview.validatePublisherRole(i, value);
        }
    );
};

exports.validateWriterName = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate writer name (' + value + ')', function() {
            pages.workCwrPreview.validateWriterName(i, value);
        }
    );
};

exports.validateWriterDesignationCode = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate writer designation code (' + value + ')', function() {
            pages.workCwrPreview.validateWriterDesignationCode(i, value);;
        }
    );
};

exports.validatePublisherName = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate publisher name (' + value + ')', function() {
            pages.workCwrPreview.validatePublisherName(i, value);
        }
    );
};

exports.validateAltWorkTitle = function(i, value) {
    it(
        'Record #' + (i + 1) + ' - ' +
        'Validate alternate work title (' + value + ')', function() {
            pages.workCwrPreview.validateWorkTitle(i, value);
        }
    );
};

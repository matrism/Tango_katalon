'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

steps.workPreviewCwr = exports;

require(pages_path + 'workPreviewCwr');

exports.searchForRegistrationRecipient = function(name) {
    it('Search for Registration Recipient (' + name + ')', function() {
        pages.workPreviewCwr.searchForRegistrationRecipient(name);
    });
};

exports.selectRegistrationRecipientResultByIndex = function (index) {
    it('Select Registration Recipient Result #' + index, function (){
        pages.workPreviewCwr.selectRegistrationRecipientResultByIndex(index);
    });
};

exports.selectFirstRegistrationRecipientResult = function() {
    exports.selectRegistrationRecipientResultByIndex(0);
};

exports.validateCwrLines = function(cwrLines) {
    it('Validate CWR lines', function() {
        pages.workPreviewCwr.validateCwrLines(cwrLines);
    });
};

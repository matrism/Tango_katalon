'use strict';

steps.duplicateWorkChecks = exports;

exports.expectDuplicateWorksPopUpToBeDisplayed = function() {
    it('Expect duplicate works pop-up to be displayed', function() {
        pages.work.expectDuplicateWorksPopUpToBeDisplayed();
    });
};

exports.ignoreSimilarWorksWarning = function() {
    it('Ignore similar works warning', function() {
        pages.work.ignoreSimilarWorksWarning();
    });
};

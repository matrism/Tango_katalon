'use strict';

steps.duplicateWorkChecks = exports;

exports.expectDuplicateWorksPopUpToBeDisplayed = function() {
    it('Expect duplicate works pop-up to be displayed', function() {
        pages.work.expectDuplicateWorksPopUpToBeDisplayed();
    });
};

exports.expectSimilarWorksPopUpToHaveScrollbar = function() {
    it('Expect similar works pop-up to have a scrollbar', function() {
        pages.work.expectSimilarWorksPopUpToHaveScrollbar();
    });
};

exports.clickFirstSimilarWorkTitle = function() {
    it('Click first similar work title', function() {
        pages.work.clickFirstSimilarWorkTitle();
    });
};

exports.validateSimilarWorkLinkDestination = function() {
     steps.base.validateRedirection("similar work page", "/rights/summary");
};

exports.ignoreSimilarWorksWarning = function() {
    it('Ignore similar works warning', function() {
        pages.work.ignoreSimilarWorksWarning();
    });
};

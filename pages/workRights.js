'use strict';

var ExpectedConditions = protractor.ExpectedConditions,
    defaultWaitTimeout - _tf_config._system_.wait_timeout;

pages.workRights = exports;

exports.rightsSummaryHeading = function() {
    return element(by.cssContainingText('h3', 'RIGHTS SUMMARY'));
};

exports.waitForRightsSummary = function(more) {
    more = more || {};

    more.timeout = more.timeout || defaultWaitTimeout;

    browser.wait(
        ExpectedConditions.presenceOf(exports.rightsSummaryHeading()),
        more.timeout
    );

    pages.base.waitForAjax();
};

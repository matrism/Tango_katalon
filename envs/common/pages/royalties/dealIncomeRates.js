'use strict';

var rst = require('./royaltyRatesSummaryTable');

pages.dealIncomeRates = exports;

exports.ratesSummaryLink = function () {
    return element(by.cssContainingText(
        '.view-header a', 'RATES SUMMARY'
    ));
};

exports.goToRatesSummary = function () {
    exports.ratesSummaryLink().click();

    return rst.waitLoader();
};

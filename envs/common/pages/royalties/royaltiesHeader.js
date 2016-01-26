'use strict';

pages.royaltiesHeader = exports;

exports.header = function () {
    return $('#RECORD-HEADER');
};

exports.headerLinks = function () {
    return $('#RECORD-HEADER + .upper').$$('a');
};

exports.headerLink = function (text) {
    return $('#RECORD-HEADER + .upper').element(by.cssContainingText('a', text));
};

exports.clickLink = function (text) {
    return exports.headerLink(text).click().then(function(){;
        pages.base.waitForAjax();
    });
};


'use strict';

pages.debug = exports;

exports.openUrl = function (url) {
    browser.get(url);

    return pages.base.waitForAjax();
};

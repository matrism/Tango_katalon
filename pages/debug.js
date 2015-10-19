'use strict';

require(pages_path + 'base');

pages.debug = exports;

exports.goToUrl = function(url) {
    browser.get(url);

    return pages.base.waitForAjax();
};

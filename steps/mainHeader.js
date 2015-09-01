'use strict';

var pageStep = require('../helpers/pageStep')();

steps.mainHeader = exports;

require(pages_path + 'mainHeader');

exports.goToLink = function (link) {
    it('Go to link in main header (' + link + ')', function() {
        pages.mainHeader.goToLink(link);
    });
};

exports.goToSubLink = function (link, subLink) {
    it('Go to sublink (' + link + ' > ' + subLink +')', function () {
        pages.mainHeader.goToSubLink(link, subLink);
        pages.base.waitForAjax();
    });
};

pageStep('Create new record');


'use strict';

var pageStep = require('../helpers/basicPageStep');

steps.mainHeader = exports;

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

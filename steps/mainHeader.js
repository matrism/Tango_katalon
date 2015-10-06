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

pageStep([
    ['Search', [
        'Select entity type',
        'Select filter tag',
        'Enter terms',
        'Select result by index',
        'Add another term',
    ]],

    'Create new record',
]);

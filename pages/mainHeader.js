'use strict';

pages.mainHeader = exports;

var navbarLinkSelector = '.nav > li > a';

exports.container = function () {
    return $('#DSP-NAVBAR');
};

exports.navbarLinks = function () {
    return exports.container().$$(navbarLinkSelector);
};

exports.navbarLink = function (text) {
    return exports.container().element(by.cssContainingText(navbarLinkSelector, text));
};

exports.goToLink = function (text) {
    return exports.navbarLink(text).click();
};

exports.goToSubLink = function (link, subLink) {
    return exports.goToLink(link).then(function (){
        return exports.container().element(by.cssContainingText('.dropdown.open a', subLink)).click();
    });
};

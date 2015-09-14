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

exports.newRecordButton = function () {
    var button = exports.container().$('#DSP-RECORD-CREATE');

    button.click = function () {
        return button.element(by.buttonText('New Record')).click();
    };

    button.dropdownOptions = function () {
        return button.$$('.dropdown-menu > li > a');
    };

    return button;
};

exports.createNewRecord = function (type) {
    var button = exports.newRecordButton();

    return button.click().then(function (){
        if (type) {
            button.dropdownOptions().filter(function(elem){
                return elem.getText().then(function(text){
                    return text === type;
                });
            }).first().click().then(function(){
                pages.base.waitForAjax();
            });
        }
    });
};


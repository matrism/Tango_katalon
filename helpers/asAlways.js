'use strict';

exports = module.exports = function (val) {
    var procedures = _.toArray(arguments).slice(1);

    return procedures.reduce(function (val, name) {
        var newVal = exports[name](val);

        if(newVal === undefined) {
            newVal = val;
        }

        return newVal;
    }, val);
};

exports.waitUntilVisible = function (el) {
    browser.wait(EC.visibilityOf(el));
};

exports.waitUntilAnyVisible = function (els) {
    browser.wait(EC.visibilityOfAny(els));
};

exports.scrollIntoView = function (el) {
    pages.base.scrollIntoView(el);
};

exports.getAllText = function (el) {
    return pph.getAllText(el);
};

exports.trim = function (string) {
    return pph.trim(string);
};

exports.hover = function (el) {
    browser.actions().mouseMove(el).perform();
};

exports.click = function (el) {
    el.click();
};

exports.clear = function (el) {
    el.clear();
};

exports.getValue = function (el) {
    return el.getAttribute('value');
};

exports.waitForAjax = function () {
    pages.base.waitForAjax();
};

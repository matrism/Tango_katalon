'use strict';

var pages_path = _tf_config._system_.path_to_pages;
var ExpectedConditions = protractor.ExpectedConditions;

exports = module.exports = pages.person = new ftf.pageObject();

require(pages_path + 'base');

exports.open = function(personId) {
    if(!personId) {
        return ftf.pageObject.prototype.open.call(this);
    }
    else {
        browser.get(_tf_config.urls.app_url + "#/person/" + personId);
        return pages.base.waitForAjax();
    }
};

exports.findId = function() {
    return browser.getCurrentUrl().then(function(value) {
        var regExp = /#\/person\/(.+)$/;
        expect(value).toMatch(regExp);
        return regExp.exec(value)[1];
    });
};

exports.internalIpiNumberBinding = function() {
    return $(".e2e-primary-name-internal-ipi>div>strong");
};
exports.suisaIPINumber = function() {
    return $(".e2e-primary-name-suisa-ipi>div>strong");
};
exports.alternativeNameElement = function() {
    return $(".e2e-alternative-name-full>div>strong");
};


exports.internalIpiNumber = function() {
    var element = exports.internalIpiNumberBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.getSuisaIPI = function() {
    browser.wait(ExpectedConditions.visibilityOf(exports.suisaIPINumber()));
    var element = exports.suisaIPINumber();
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.getAlternativeName = function() {
    var element = exports.alternativeNameElement();
    pages.base.scrollIntoView(element);
    return element.getText();
};

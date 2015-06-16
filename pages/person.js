'use strict';

var pages_path = _tf_config._system_.path_to_pages;

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
    return element(by.binding('person.pristine.master_data.primary_name.internal_ipi_number'));
};

exports.internalIpiNumber = function() {
    var element = exports.internalIpiNumberBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};

'use strict';

var pph = require('../helpers/pph');

pages.personStaging = exports;

require(pages_path + 'base');

exports.internalIpiNumberBinding = function() {
    return $(
        '[data-ng-if="person.creator && ' +
        '!person.pristine.master_data.primary_name.suisa_ipi_number"] .ng-binding'
    );
};

exports.internalIpiNumber = function() {
    var binding = exports.internalIpiNumberBinding();

    pages.base.scrollIntoView(binding);

    return pph.trim(binding.getText());
};

exports.suisaIpiNumberBinding = function() {
    return $(
        '[data-ng-if="person.pristine.master_data.primary_name.suisa_ipi_number"] ' +
        '.ng-binding'
    );
};

exports.suisaIpiNumber = function() {
    var element = exports.suisaIpiNumberBinding();
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validateSuisaIpiNumber = function(value) {
    expect(exports.suisaIpiNumber()).toBe(value);
};

exports.alternativeNameDataContainers = function() {
    return element.all(by.repeater(
        'name in person.pristine.master_data.alternative_names'
    ));
};

exports.alternativeNameBinding = function(i) {
    return (
        exports.alternativeNameDataContainers().get(i).$$('.ng-binding').first()
    );
};

exports.alternativeName = function(i) {
    var element = exports.alternativeNameBinding(i);
    pages.base.scrollIntoView(element);
    return element.getText();
};

exports.validateAlternativeName = function(i, value) {
    expect(pph.toUpperCase(exports.alternativeName(i))).toBe(value.toUpperCase());
};

exports.findId = function() {
    return browser.getCurrentUrl().then(function(value) {
        var regExp = /#\/person\/(.+)$/;
        expect(value).toMatch(regExp);
        return regExp.exec(value)[1];
    });
};

'use strict';

var _ = require('lodash'),
    pageStep = require('../helpers/basicPageStep'),
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise,
    page;

steps.newPersonProduction = exports;

page = require(pages_path + 'newPersonProduction');

pageStep([
    'Go to new person page',
    'Enter affiliated society search terms',
    'Select affiliated society search result by index',
    'Save',
]);

exports.enterLastName = function(value) {
    it('Enter last name (' + value + ')', function() {
        page.enterLastName(value).then(function() {
            var person = hash.currentPersonSlot;

            person.lastName = value;
            person.name = value;
        });
    });
};

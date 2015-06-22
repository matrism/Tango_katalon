'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

steps.newPerson = exports;

require(pages_path + 'person');
require(steps_path + 'person');
require(pages_path + 'newPerson');

exports.goToNewPersonPage = function() {
    it('Go to new person page', function() {
        pages.newPerson.open();
    });
};

exports.enterFirstName = function(value) {
    it('Enter first name (' + value + ')', function() {
        pages.newPerson.enterFirstName(value).then(function() {
            var person = hash.currentPersonSlot;

            person.firstName = value;

            if(person.lastName) {
                person.name = person.lastName + ', ' + value;
            }
            else {
                person.name = value;
            }
        });
    });
};

exports.enterLastName = function(value) {
    it('Enter last name (' + value + ')', function() {
        pages.newPerson.enterLastName(value).then(function() {
            var person = hash.currentPersonSlot;

            person.lastName = value;

            if(person.firstName) {
                person.name = value + ', ' + person.firstName;
            }
            else {
                person.name = value;
            }
        });
    });
};

exports.enterSuisaIpiNumber = function(value) {
    it('Enter SUISA IPI number (' + value + ')', function() {
        pages.newPerson.enterSuisaIpiNumber(value).then(function() {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.suisaIpiNumber = value;
        });
    });
};

exports.enterAffiliatedSocietySearchTerms = function(value) {
    it('Enter affiliated society search terms (' + value + ')', function() {
        pages.newPerson.enterAffiliatedSocietySearchTerms(value).then(function() {
            hash.currentPersonSlot.affiliatedSociety = value;
        });
    });
};

exports.selectAffiliatedSocietySearchResultByIndex = function(i) {
    it('Select affiliated society search result #' + (i + 1), function() {
        pages.newPerson.selectAffiliatedSocietySearchResultByIndex(i);
    });
};

exports.save = function() {
    it('Save person', function() {
        pages.newPerson.save();
    });
};

exports.validateSaveRedirection = function() {
    it('Validate save redirection', function() {
        pages.newPerson.validateSaveRedirection();
    });
};

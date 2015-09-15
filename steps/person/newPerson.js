'use strict';

var _ = require("lodash"); var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

require(pages_path + "person/newPerson");
require(steps_path + "person/newPerson");
require(pages_path + "person/person");
require(steps_path + "base");

hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];

steps.newPerson = exports;

exports.goToNewPersonPage = function () {
    it('Go to new person page', function () {
        pages.newPerson.open();
    });
};

exports.waitForPageToLoad = function () {
    it('Wait for page to load', function () {
        pages.newPerson.waitForPageToBeShown();
    });
};

enterFirstName = function (value) {
    it('Enter first name (' + value + ')', function () {
        pages.newPerson.typeFirstName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.firstName = value;

            if (person.presentationName) {
                return;
            }

            if (person.lastName) {
                person.name = person.lastName + ', ' + value;
            } else {
                person.name = value;
            }
        });
    });
};

exports.enterLastName = function (value) {
    it('Enter last name (' + value + ')', function () {
        pages.newPerson.typeLastName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.lastName = value;

            if (person.presentationName) {
                return;
            }

            if (person.firstName) {
                person.name = value + ', ' + person.firstName;
            } else {
                person.name = value;
            }
        });
    });
};

exports.enterPresentationName = function (value) {
    it('Enter presentation name (' + value + ')', function () {
        pages.newPerson.typePresentationName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.name = value;
            person.presentationName = value;
        });
    });
};

exports.addAlternativeName = function () {
    it('Add alternative name', function () {
        pages.newPerson.clickAddAlternativeName();
    });
};

exports.enterAlternativeFirstName = function (i, value) {
    it('Enter alternative first name #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeAlternativeFirstName(i, value).then(function () {
            var person = hash.currentPersonSlot;

            person.alternativeFirstName = value;

            if (person.presentationName) {
                return;
            }

            if (person.alternativeLastName) {
                person.alternativeName = person.alternativeLastName + ', ' + value;
            }
            else {
                person.alternativeName = value;
            }
        });
    });
};

exports.enterAlternativeLastName = function (i, value) {
    it('Enter alternative last name #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeAlternativeLastName(i, value).then(function () {
            var person = hash.currentPersonSlot;

            person.alternativeLastName = value;

            if (person.presentationName) {
                return;
            }

            if (person.alternativeFirstName) {
                person.alternativeName = value + ', ' + person.alternativeFirstName;
            } else {
                person.alternativeName = value;
            }
        });
    });
};

exports.enterAlternativeCreditsName = function (i, value) {
    it('Enter alternative credits name #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeAlternativeCreditsName(i, value).then(function () {
            hash.currentPersonSlot.alternativeCreditsName = value;
        });
    });
};

exports.enterAlternativeSuisaIpiNumber = function (i, value) {
    it('Enter alternative Siosa Ipi name #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeAlternativeSuisaIpiNumber(i, value).then(function () {
            hash.currentPersonSlot.alternativeSuisaIpiNumber = value;
        });
    });
};

exports.enterSuisaIpiNumber = function (value) {
    it('Enter SUISA IPI number (' + value + ')', function () {
        pages.newPerson.typeSuisaIpiNumber(value).then(function () {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.suisaIpiNumber = value;
        });
    });
};

exports.enterAffiliatedSocietySearchTerms = function (value) {
    it('Enter affiliated society search terms (' + value + ')', function () {
        pages.newPerson.typeAffiliatedSocietySearchTerms(value).then(function () {
            hash.currentPersonSlot.affiliatedSociety = value;
        });
    });
};

exports.selectAffiliatedSocietySearchResultByIndex = function (i) {
    it('Select affiliated society search result #' + (i + 1), function () {
        pages.newPerson.clickAffiliatedSocietySearchResultByIndex(i);
    });
};

exports.enterAddressOne = function (value) {
    it('Type Address One ' + value, function () {
        pages.newPerson.typeIntoAddressOneInput(value).then(function () {
            hash.currentPersonSlot.affiliatedSociety = value;
        });
    });
};

exports.enterCity = function (value) {
    it('Type City ' + value, function () {
        pages.newPerson.typeIntoCityInput(value).then(function () {
            hash.currentPersonSlot.city = value;
        });
    });
};

exports.enterRegion = function (value) {
    it('Type Region ' + value, function () {
        pages.newPerson.typeIntoRegionInput(value).then(function () {
            hash.currentPersonSlot.region = value;
        });
    });
};

exports.enterPostalCode = function (value) {
    it('Type Postal Code ' + value, function () {
        pages.newPerson.typeIntoPostalCodeInput(value).then(function () {
            hash.currentPersonSlot.postalCode = value;
        });
    });
};

exports.enterPhone = function (value) {
    it('Type Phone ' + value, function () {
        pages.newPerson.typeIntoPhoneInput(value).then(function () {
            hash.currentPersonSlot.phone = value;
        });
    });
};

exports.enterEmail = function (value) {
    it('Type Email ' + value, function () {
        pages.newPerson.typeIntoEmailInput(value).then(function () {
            hash.currentPersonSlot.email = value;
        });
    });
};

exports.save = function () {
    it('Save person', function () {
        pages.newPerson.save();
    });
};

exports.validateSaveRedirection = function () {
    it('Validate save redirection', function () {
        pages.newPerson.validateSaveRedirection();
    });
};

exports.enterCreditsName = function (value) {
    it('Enter Credits Name (' + value + ')', function () {
        pages.newPerson.typeCreditsName(value).then(function () {
            hash.currentPersonSlot.creditsName = value;
        });
    });
};

exports.enterDateOfDeath = function (year, month, day) {
    it('Enter Date of Death (' + year + "-" + month + "-" + day + ')', function () {
        pages.newPerson.typeDateOfDeath(year, month, day).then(function () {
            hash.currentPersonSlot.dateOfDeath = year + "-" + month + "-" + day;
        });
    });
};
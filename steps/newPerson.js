'use strict';

var _ = require("lodash"),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions,
    pageStep = require('../helpers/basicPageStep');

require(pages_path + "newPerson");
require(steps_path + "newPerson");
require(pages_path + "person");
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

exports.enterFirstName = steps.person.enterFirstName;

exports.enterLastName = steps.person.enterLastName;

exports.enterPresentationName = steps.person.enterPresentationName;

exports.enterAlternativeFirstName = steps.person.enterAlternativeFirstName;

exports.enterAlternativeLastName = steps.person.enterAlternativeLastName;

exports.enterAlternativeCreditsName = steps.person.enterAlternativeCreditsName;

exports.enterAlternativeSuisaIpiNumber = steps.person.enterAlternativeSuisaIpiNumber;

exports.enterSuisaIpiNumber = steps.person.enterSuisaIpiNumber;

exports.enterAffiliatedSocietySearchTerms = steps.person.enterAffiliatedSocietySearchTerms;

exports.selectAffiliatedSocietySearchResultByIndex = steps.person.selectAffiliatedSocietySearchResultByIndex;

exports.enterAddressOne = steps.person.enterAddressOne;

exports.enterPhone = steps.person.enterPhone;

exports.enterEmail = steps.person.enterEmail;

exports.clickOnPayee = steps.person.clickOnPayee;

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
    
pageStep([
    'Add alternative name',
    'Add address',
    'Add phone',
    'Add email'
]);


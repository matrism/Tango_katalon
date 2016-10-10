'use strict';

var _ = require("lodash"),
    promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions,
    pageStep = require('../../../../helpers/basicPageStep');

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

addBasicStep(exports, pages.person, 'Make creator');
addBasicStep(exports, pages.person, 'Confirm making non-creator');

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

exports.enterAddressTwo = steps.person.enterAddressTwo;

exports.enterAddressThree = steps.person.enterAddressThree;

exports.enterCity = steps.person.enterCity;

exports.enterRegion = steps.person.enterRegion;

exports.enterPostalCode = steps.person.enterPostalCode;

exports.selectCountry = steps.person.selectCountry;

exports.setPrimaryAddress = steps.person.setPrimaryAddress;

exports.setPrimaryPhone = steps.person.setPrimaryPhone;

exports.setPrimaryEmail = steps.person.setPrimaryEmail;

exports.enterPhone = steps.person.enterPhone;

exports.enterEmail = steps.person.enterEmail;

exports.clickOnPayee = steps.person.clickOnPayee;

exports.makePersonStatementRecipient = steps.person.makePersonStatementRecipient;

exports.setStatementRecipientData = steps.person.setStatementRecipientData;

exports.enterPlaceOfBirth = steps.person.enterPlaceOfBirth;

exports.enterCitizenship = steps.person.enterCitizenship;

exports.selectRandomMaritalStatus = steps.person.selectRandomMaritalStatus;

exports.enterMexicoRegistrationNumber = steps.person.enterMexicoRegistrationNumber;

exports.validateMexicoRegDateIsEnabled = steps.person.validateMexicoRegDateIsEnabled;

exports.enterMexicoRegDate = steps.person.enterMexicoRegDate;

exports.save = function () {
    it('Save person', function () {
        pages.newPerson.save();
        pages.base.waitForAjax();
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

exports.enterDateOfBirth = function (year, month, day) {
    it('Enter Date of Birth (' + year + "-" + month + "-" + day + ')', function () {
        pages.newPerson.typeDateOfBirth(year, month, day).then(function () {
            hash.currentPersonSlot.dateOfBirth = year + "-" + month + "-" + day;
        });
    });
};

exports.validateDateOfDeathIsSameOrAfterDateOfBirth = function (isSameOrAfter){
    if(isSameOrAfter) {
        it('Date Of Death Is Same Or After Date Of Birth', function () {
            expect(pages.base.isPresentAndDisplayed(pages.newPerson.dateOfDeathBeforeBirthError())).toBeFalsy();
        });
    }else{
        it('Date Of Death Is Not Same Or After Date Of Birth', function () {
            expect(pages.base.isPresentAndDisplayed(pages.newPerson.dateOfDeathBeforeBirthError())).toBeTruthy();
        });
    }
};

exports.dateOfBirthIsValid = function (valid){
    if(valid) {
        it('Date of birth is valid', function () {
            expect(pages.base.isPresentAndDisplayed(pages.newPerson.dateOfBirthError())).toBeFalsy();
        });
    }else{
        it('Date of birth is not valid', function () {
            expect(pages.base.isPresentAndDisplayed(pages.newPerson.dateOfBirthError())).toBeTruthy();
        });
    }
};

exports.dateOfDeathIsValid = function (valid){
    if(valid) {
        it('Date of death is valid', function () {
            expect(pages.base.isPresentAndDisplayed(pages.newPerson.dateOfDeathError())).toBeFalsy();
        });
    }else{
        it('Date of death is not valid', function () {
            expect(pages.base.isPresentAndDisplayed(pages.newPerson.dateOfDeathError())).toBeTruthy();
        });
    }
};

exports.selectAsPayeeOptionToYes = function () {
    it("Click on yes option to select person as payee ", function () {
        pages.newPerson.selectTheAsPayeeOptionToYes();
        pages.newPerson.waitForAjax();
    });
};

pageStep([
    'Add alternative name',
    'Add address',
    'Add phone',
    'Add email'
]);

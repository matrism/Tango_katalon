'use strict';

var _ = require('lodash'),
    pageStep = require('../../../../helpers/basicPageStep');

steps.newPerson = exports;

pageStep([
    'Go to new person page',
    'Enter affiliated society search terms',
    'Select affiliated society search result by index',
    'Save',
    'Validate save redirection',
    'Add alternative name',
    'Add address',
    'Add phone',
    'Add email'
]);


exports.enterFirstName = function (value) {
    it('Enter first name (' + value + ')', function () {
        pages.newPerson.typeFirstName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.firstName = value;

            if (person.presentationName) {
                return;
            }

            if (person.lastName) {
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
            person.name = value;
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
            }
            else {
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

exports.enterAddressOne = function (i, value) {
    it('Enter Address One #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoAddressOneInput(i, value).then(function () {
            hash.currentPersonSlot.addressOne = hash.currentPersonSlot.addressOne || [];
            hash.currentPersonSlot.addressOne[i] = value;
        });
    });
};

exports.enterAddressTwo = function (i, value) {
    it('Enter Address Two #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoAddressTwoInput(i, value).then(function () {
            hash.currentPersonSlot.addressTwo = hash.currentPersonSlot.addressTwo || [];
            hash.currentPersonSlot.addressTwo[i] = value;
        });
    });
};

exports.enterAddressThree = function (i, value) {
    it('Enter Address Three #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoAddressThreeInput(i, value).then(function () {
            hash.currentPersonSlot.addressThree = hash.currentPersonSlot.addressThree || [];
            hash.currentPersonSlot.addressThree[i] = value;
        });
    });
};

exports.enterCity = function (i, value) {
    it('Enter City #'  + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoCityInput(i, value).then(function () {
            hash.currentPersonSlot.city = hash.currentPersonSlot.city || [];
            hash.currentPersonSlot.city[i] = value;
        });
    });
};

exports.enterRegion = function (i, value) {
    it('Enter Region #'  + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoRegionInput(i, value).then(function () {
            hash.currentPersonSlot.region = hash.currentPersonSlot.region || [];
            hash.currentPersonSlot.region[i] = value;
        });
    });
};

exports.enterPostalCode = function (i, value) {
    it('Enter Postal Code #'  + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoPostalCodeInput(i, value).then(function () {
            hash.currentPersonSlot.postalCode = hash.currentPersonSlot.postalCode || [];
            hash.currentPersonSlot.postalCode[i] = value;
        });
    });
};

exports.selectCountry = function (i, value) {
    it('Select Country #'  + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.selectCountry(i, value).then(function () {
            hash.currentPersonSlot.country = hash.currentPersonSlot.country || [];
            hash.currentPersonSlot.country[i] = value;
        });
    });
};

exports.setPrimaryAddress = function (i) {
    it('Set as Primary Address #'  + (i + 1), function () {
        pages.newPerson.setPrimaryAddress(i).then(function () {
            hash.currentPersonSlot.primaryAddress = i;
        });
    });
};

exports.setPrimaryPhone = function (i) {
    it('Set as Primary Phone #'  + (i + 1), function () {
        pages.newPerson.setPrimaryPhone(i).then(function () {
            hash.currentPersonSlot.primaryPhone = i;
        });
    });
};

exports.setPrimaryEmail = function (i) {
    it('Set as Primary Email #'  + (i + 1), function () {
        pages.newPerson.setPrimaryEmail(i).then(function () {
            hash.currentPersonSlot.primaryEmail = i;
        });
    });
};

exports.enterPhone = function (i, value) {
    it('Enter Phone #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoPhoneInput(i, value).then(function () {
            hash.currentPersonSlot.phone = hash.currentPersonSlot.phone || [];
            hash.currentPersonSlot.phone[i] = value;
        });
    });
};

exports.enterEmail = function (i, value) {
    it('Enter Email #' + (i + 1) + ' (' + value + ')', function () {
        pages.newPerson.typeIntoEmailInput(i, value).then(function () {
            hash.currentPersonSlot.email = hash.currentPersonSlot.email || [];
            hash.currentPersonSlot.email[i] = value;
        });
    });
};

exports.clickOnPayee = function (value) {
    it('Click on the Payee Toggle (' + value + ')', function () {
        pages.newPerson.clickPayee(value).then(function () {
            hash.currentPersonSlot.payee = value;
        });
    });
};

exports.useBlankPersonSlot = function(i) {
    exports.usePersonSlot(i);
    exports.clearCurrentPersonSlot();
};

exports.findId = function() {
    it('Find the person ID', function() {
        pages.person.findId().then(function(value) {
            hash.currentPersonSlot.id = value;
        });
    });
};

exports.findInternalIpiNumber = function() {
    it('Find internal IPI number', function() {
        pages.person.internalIpiNumber().then(function(value) {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.internalIpiNumber = value;
        });
    });


};
exports.validateSuisaIpiNumber = function(ipi)
{ it('Validate SUISA IPI number (' + ipi + ')', function() {

    expect(pages.person.getSuisaIPI()).toBe(ipi)
});
};

exports.validateAlternativeName = function(i, value) {
    var parms = _.toArray(arguments).join(', ');
    it('Validate alternative name (' + parms + ')', function() {
        value = value || hash.currentPersonSlot.alternativeName;
        expect(pph.toLowerCase(pages.person.getAlternativeName(i))).toBe(
            value.toLowerCase()
        );
    });
};

exports.clickOnEnterPersonSearchTerms = function (value) {
    it('Search for person (' + value + ')', function () {
        pages.person.enterPersonSearchTerms(value);
    });
};
exports.clickPersonSearchMatch = function (i) {
    it('Click person search match #' + (i + 1), function () {
        pages.person.clickPersonSearchMatch(i);
    });
};
exports.validateIpiNumber = function () {
    it('Validate IPI Number', function () {
        pages.person.validateIpiNumber(
            hash.currentPersonSlot.ipiNumber
        );
    });
};


'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    pph = require('../helpers/pph'),
    pageStep = require('../helpers/basicPageStep');

steps.person = exports;

hash.personSlots = {};
hash.currentPersonSlot = null;

require(pages_path + 'person');
require(steps_path + 'searchSection');

exports.goToPersonPage = function () {
    it('Go to person page', function () {
        pages.person.open(hash.currentPersonSlot.id);
    });
};

exports.usePersonSlot = function(i) {
    it('Use person slot #' + (i + 1), function() {
        var currentPersonSlot;

        if(!hash.personSlots[i]) {
            currentPersonSlot = hash.personSlots[i] = {};
            currentPersonSlot.slotIndex = i;
        }
        else {
            currentPersonSlot = hash.personSlots[i];
        }

        hash.currentPersonSlot = currentPersonSlot;
    });
};

exports.clearCurrentPersonSlot = function() {
    it('Clear current person slot', function() {
        var currentIndex = hash.currentPersonSlot.slotIndex;

        hash.currentPersonSlot = hash.personSlots[currentIndex] = {
            slotIndex: currentIndex,
        };
    });
};

exports.enterFirstName = function (value) {
    it('Enter first name (' + value + ')', function () {
        pages.person.typeFirstName(value).then(function () {
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

exports.enterLastName = function (value) {
    it('Enter last name (' + value + ')', function () {
       pages.person.typeLastName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.lastName = value;

            if (person.presentationName) {
                return;
            }

            if (person.firstName) {
                person.name = value + ', ' + person.firstName;
            }
            else {
                person.name = value;
          }
        });
    });
};

exports.enterPresentationName = function (value) {
    it('Enter presentation name (' + value + ')', function () {
        pages.person.typePresentationName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.name = value;
            person.presentationName = value;
        });
    });
};

exports.enterAlternativeFirstName = function (i, value) {
    it('Enter alternative first name #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeAlternativeFirstName(i, value).then(function () {
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
        pages.person.typeAlternativeLastName(i, value).then(function () {
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
        pages.person.typeAlternativeCreditsName(i, value).then(function () {
            hash.currentPersonSlot.alternativeCreditsName = value;
        });
    });
};

exports.enterAlternativeSuisaIpiNumber = function (i, value) {
    it('Enter alternative Siosa Ipi name #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeAlternativeSuisaIpiNumber(i, value).then(function () {
            hash.currentPersonSlot.alternativeSuisaIpiNumber = value;
        });
    });
};

exports.enterSuisaIpiNumber = function (value) {
    it('Enter SUISA IPI number (' + value + ')', function () {
        pages.person.typeSuisaIpiNumber(value).then(function () {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.suisaIpiNumber = value;
        });
    });
};

exports.enterAffiliatedSocietySearchTerms = function (value) {
    it('Enter affiliated society search terms (' + value + ')', function () {
        pages.person.typeAffiliatedSocietySearchTerms(value).then(function () {
            hash.currentPersonSlot.affiliatedSociety = value;
        });
    });
};

exports.selectAffiliatedSocietySearchResultByIndex = function (i) {
    it('Select affiliated society search result #' + (i + 1), function () {
        pages.person.clickAffiliatedSocietySearchResultByIndex(i);
    });
};

exports.enterAddressOne = function (i, value) {
    it('Enter Address One #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoAddressOneInput(i, value).then(function () {
            hash.currentPersonSlot.addressOne = hash.currentPersonSlot.addressOne || [];
            hash.currentPersonSlot.addressOne[i] = value;
        });
    });
};

exports.enterPhone = function (i, value) {
    it('Enter Phone #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoPhoneInput(i, value).then(function () {
            hash.currentPersonSlot.phone = hash.currentPersonSlot.phone || [];
            hash.currentPersonSlot.phone[i] = value;
        });
    });
};

exports.enterEmail = function (i, value) {
    it('Enter Email #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoEmailInput(i, value).then(function () {
            hash.currentPersonSlot.email = hash.currentPersonSlot.email || [];
            hash.currentPersonSlot.email[i] = value;
        });
    });
};

exports.clickOnPayee = function (value) {
    it('Click on the Payee Toggle (' + value + ')', function () {
        pages.person.clickPayee(value).then(function () {
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
exports.validateIPI = function(ipi)
{ it('Validate IPI Number', function() {

    expect(pages.person.getSuisaIPI()).toBe(ipi)
});
};

exports.validateAlternativeName = function(value) {
    it('Validate Alternative Name', function() {
        value = value || hash.currentPersonSlot.alternativeName;
        expect(pph.toLowerCase(pages.person.getAlternativeName())).toBe(
            value.toLowerCase()
        );
    });
};

exports.validateName = function() {
    it('Validate Name', function () {
        expect(pages.person.getName()).toBe(hash.currentPersonSlot.name);
    });
};
exports.validateFirstName = function() {
    it('Validate First Name', function () {
        expect(pages.person.getFirstName()).toBe(hash.currentPersonSlot.firstName);
    });
};
exports.validateAlternativeFirstName = function() {
    it('Validate First Name', function () {
        expect(pages.person.getAlternativeFirstName()).toBe(hash.currentPersonSlot.alternativeFirstName);
    });
};
exports.validateAffiliatedSociety = function() {
    it('Validate Affiliated Society', function () {
        expect(pages.person.getAffiliatedSociety()).toBe(hash.currentPersonSlot.affiliatedSociety);
    });
};
exports.validateAddressOne = function(i) {
    it('Validate Address One', function () {
        expect(pages.person.getAddressOne(i)).toBe(hash.currentPersonSlot.addressOne[i]);
    });
};
exports.validatePhone = function(i) {
    it('Validate Phone #' + i, function () {
        expect(pages.person.getPhone(i)).toBe(hash.currentPersonSlot.phone[i]);
    });
};
exports.validateEmail = function(i) {
    it('Validate Email #' + i, function () {
        expect(pages.person.getEmail(i)).toBe(hash.currentPersonSlot.email[i]);
    });
};
exports.validatePayee = function() {
    it('Validate Payee', function () {
        expect(pages.person.getPayee()).toBe(hash.currentPersonSlot.payee);
    });
};

pageStep([
    'Click on edit primary name',
    'Click on save primary name',
    'Click on edit alternative name',
    'Click on save alternative name',
    'Click on edit society affiliation',
    'Click on save society affiliation',
    'Click on edit address #',
    'Click on save address #',
    'Click on edit phone #',
    'Click on save phone #',
    'Click on edit email #',
    'Click on save email #',
    'Click on edit payment information',
    'Click on save payment information'
]);

exports.clickOnEnterPersonSearchTerms = function (value) {
    it('Search for person (' + value + ')', function () {
        pages.person.enterPersonSearchTerms(value);
    });
};
exports.searchForPersonUsingPreviouslyCreatedIpiNumber = function () {
    it('Search for person using previously created IPI Number', function () {
        pages.person.enterPersonSearchTerms(
            hash.currentPersonSlot.ipiNumber
        );
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


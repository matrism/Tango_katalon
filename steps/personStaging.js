'use strict';

var pageStep = require('../helpers/basicPageStep'),
    changeCase = require('change-case'),
    page;

steps.personStaging = exports;

hash.personSlots = {};
hash.currentPersonSlot = null;

page = require(pages_path + 'personStaging');

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

exports.useBlankPersonSlot = function(i) {
    exports.usePersonSlot(i);
    exports.clearCurrentPersonSlot();
};

pageStep([
    'Validate SUISA IPI number',
    'Validate alternative name',
]);

exports.findId = function() {
    it('Find the person ID', function() {
        page.findId().then(function(value) {
            hash.currentPersonSlot.id = value;
        });
    });
};

exports.findInternalIpiNumber = function() {
    it('Find internal IPI number', function() {
        page.internalIpiNumber().then(function(value) {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.internalIpiNumber = value;
        });
    });
};





exports.enterFirstName = function (value) {
    it('Enter first name (' + value + ')', function () {
        page.typeFirstName(value).then(function () {
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
       page.typeLastName(value).then(function () {
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
        page.typePresentationName(value).then(function () {
            var person = hash.currentPersonSlot;

            person.name = value;
            person.presentationName = value;
        });
    });
};

exports.enterAlternativeFirstName = function (i, value) {
    it('Enter alternative first name #' + (i + 1) + ' (' + value + ')', function () {
        page.typeAlternativeFirstName(i, value).then(function () {
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
        page.typeAlternativeLastName(i, value).then(function () {
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
        page.typeAlternativeCreditsName(i, value).then(function () {
            hash.currentPersonSlot.alternativeCreditsName = value;
        });
    });
};

exports.enterAlternativeSuisaIpiNumber = function (i, value) {
    it('Enter alternative Siosa Ipi name #' + (i + 1) + ' (' + value + ')', function () {
        page.typeAlternativeSuisaIpiNumber(i, value).then(function () {
            hash.currentPersonSlot.alternativeSuisaIpiNumber = value;
        });
    });
};

exports.enterSuisaIpiNumber = function (value) {
    it('Enter SUISA IPI number (' + value + ')', function () {
        page.typeSuisaIpiNumber(value).then(function () {
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.suisaIpiNumber = value;
        });
    });
};

exports.enterAffiliatedSocietySearchTerms = function (value) {
    it('Enter affiliated society search terms (' + value + ')', function () {
        page.typeAffiliatedSocietySearchTerms(value).then(function () {
            hash.currentPersonSlot.affiliatedSociety = value;
        });
    });
};

exports.selectAffiliatedSocietySearchResultByIndex = function (i) {
    it('Select affiliated society search result #' + (i + 1), function () {
        page.clickAffiliatedSocietySearchResultByIndex(i);
    });
};

exports.enterAddressOne = function (i, value) {
    it('Enter Address One #' + (i + 1) + ' (' + value + ')', function () {
        page.typeIntoAddressOneInput(i, value).then(function () {
            hash.currentPersonSlot.addressOne = hash.currentPersonSlot.addressOne || [];
            hash.currentPersonSlot.addressOne[i] = value;
        });
    });
};

exports.enterPhone = function (i, value) {
    it('Enter Phone #' + (i + 1) + ' (' + value + ')', function () {
        page.typeIntoPhoneInput(i, value).then(function () {
            hash.currentPersonSlot.phone = hash.currentPersonSlot.phone || [];
            hash.currentPersonSlot.phone[i] = value;
        });
    });
};

exports.enterEmail = function (i, value) {
    it('Enter Email #' + (i + 1) + ' (' + value + ')', function () {
        page.typeIntoEmailInput(i, value).then(function () {
            hash.currentPersonSlot.email = hash.currentPersonSlot.email || [];
            hash.currentPersonSlot.email[i] = value;
        });
    });
};

exports.clickOnPayee = function (value) {
    it('Click on the Payee Toggle (' + value + ')', function () {
        page.clickPayee(value).then(function () {
            hash.currentPersonSlot.payee = value;
        });
    });
};

exports.validateName = function() {
    it('Validate Name', function () {
        expect(page.getName()).toBe(hash.currentPersonSlot.name);
    });
};
exports.validateFirstName = function() {
    it('Validate First Name', function () {
        expect(page.getFirstName()).toBe(hash.currentPersonSlot.firstName);
    });
};
exports.validateLastName = function() {
    it('Validate Last Name', function () {
        expect(page.getLastName()).toBe(hash.currentPersonSlot.lastName);
    });
};
exports.validateAlternativeFirstName = function() {
    it('Validate Alternative First Name', function () {
        expect(page.getAlternativeFirstName()).toBe(hash.currentPersonSlot.alternativeFirstName);
    });
};
exports.validateAlternativeLastName = function() {
    it('Validate Alternative Last Name', function () {
        expect(page.getAlternativeLastName()).toBe(hash.currentPersonSlot.alternativeLastName);
    });
};
exports.validateAffiliatedSociety = function() {
    it('Validate Affiliated Society', function () {
        expect(page.getAffiliatedSociety()).toBe(hash.currentPersonSlot.affiliatedSociety);
    });
};
exports.validateAddressOne = function(i) {
    it('Validate Address One', function () {
        expect(page.getAddressOne(i)).toBe(hash.currentPersonSlot.addressOne[i]);
    });
};
exports.validatePhone = function(i) {
    it('Validate Phone #' + i, function () {
        expect(page.getPhone(i)).toBe(hash.currentPersonSlot.phone[i]);
    });
};
exports.validateEmail = function(i) {
    it('Validate Email #' + i, function () {
        expect(page.getEmail(i)).toBe(hash.currentPersonSlot.email[i]);
    });
};
exports.validatePayee = function() {
    it('Validate Payee', function () {
        expect(page.getPayee()).toBe(hash.currentPersonSlot.payee);
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
        page.enterPersonSearchTerms(value);
    });
};
exports.searchForPersonUsingPreviouslyCreated = function (field) {
    console.log(changeCase.camelCase);
    it('Search for person using previously created ' + field, function () {
        pages.person.enterPersonSearchTerms(
            hash.currentPersonSlot[[field].map(changeCase.camelCase)]
        );
        pages.base.waitForAjax();
    });
};
exports.clickPersonSearchMatch = function (i) {
    it('Click person search match #' + (i + 1), function () {
        pages.person.clickPersonSearchMatch(i);
        pages.base.waitForAjax();
    });
};
exports.validateIpiNumber = function () {
    it('Validate IPI Number', function () {
        page.validateIpiNumber(
            hash.currentPersonSlot.ipiNumber
        );
    });
};


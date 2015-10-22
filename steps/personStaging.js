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

exports.enterAddressTwo = function (i, value) {
    it('Enter Address Two #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoAddressTwoInput(i, value).then(function () {
            hash.currentPersonSlot.addressTwo = hash.currentPersonSlot.addressTwo || [];
            hash.currentPersonSlot.addressTwo[i] = value;
        });
    });
};

exports.enterAddressThree = function (i, value) {
    it('Enter Address Three #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoAddressThreeInput(i, value).then(function () {
            hash.currentPersonSlot.addressThree = hash.currentPersonSlot.addressThree || [];
            hash.currentPersonSlot.addressThree[i] = value;
        });
    });
};

exports.enterCity = function (i, value) {
    it('Enter City #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoCityInput(i, value).then(function () {
            hash.currentPersonSlot.city = hash.currentPersonSlot.city || [];
            hash.currentPersonSlot.city = value;
        });
    });
};

exports.enterRegion = function (i, value) {
    it('Enter Region #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoRegionInput(i, value).then(function () {
            hash.currentPersonSlot.region = hash.currentPersonSlot.region || [];
            hash.currentPersonSlot.region = value;
        });
    });
};

exports.enterPostalCode = function (i, value) {
    it('Enter Postal Code #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoPostalCodeInput(i, value).then(function () {
            hash.currentPersonSlot.postalCode = hash.currentPersonSlot.postalCode || [];
            hash.currentPersonSlot.postalCode = value;
        });
    });
};

exports.selectCountry = function (i, value) {
    it('Select Country #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.selectCountry(i, value).then(function () {
            hash.currentPersonSlot.country = hash.currentPersonSlot.country || [];
            hash.currentPersonSlot.country = value;
        });
    });
};

exports.setPrimaryAddress = function (i) {
    it('Set as Primary Address #'  + (i + 1), function () {
        page.setPrimaryAddress(i).then(function () {
            hash.currentPersonSlot.primaryAddress = i;
        });
    });
};

exports.setPrimaryPhone = function (i) {
    it('Set as Primary Phone #'  + (i + 1), function () {
        page.setPrimaryPhone(i).then(function () {
            hash.currentPersonSlot.primaryPhone = i;
        });
    });
};

exports.setPrimaryEmail = function (i) {
    it('Set as Primary Email #'  + (i + 1), function () {
        page.setPrimaryEmail(i).then(function () {
            hash.currentPersonSlot.primaryEmail = i;
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
    it('Validate Address One #' + i, function () {
        expect(page.getAddressOne(i)).toBe(hash.currentPersonSlot.addressOne[i]);
    });
};
exports.validateAddressTwo = function(i) {
    it('Validate Address Two #' + i, function () {
        expect(page.getAddressTwo(i)).toBe(hash.currentPersonSlot.addressTwo[i]);
    });
};
exports.validateAddressThree = function(i) {
    it('Validate Address Three #' + i, function () {
        expect(page.getAddressThree(i)).toBe(hash.currentPersonSlot.addressThree[i]);
    });
};
exports.validateCity = function(i) {
    it('Validate City #' + i, function () {
        expect(page.getCity(i)).toBe(hash.currentPersonSlot.city[i]);
    });
};
exports.validateRegion = function(i) {
    it('Validate Region #' + i, function () {
        expect(page.getRegion(i)).toBe(hash.currentPersonSlot.region[i]);
    });
};
exports.validatePostalCode = function(i) {
    it('Validate Postal Code #' + i, function () {
        expect(page.getPostalCode(i)).toBe(hash.currentPersonSlot.postalCode[i]);
    });
};
exports.validateCountry = function(i) {
    it('Validate Country #' + i, function () {
        expect(page.getCountry(i)).toBe(hash.currentPersonSlot.country[i]);
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
exports.validatePrimaryAddress = function(i) {
    it('Validate Primary Address #' + i, function () {
        expect(pages.base.isPresentAndDisplayed(page.getPrimaryAddress(i))).toBeTruthy();
    });
};
exports.validatePrimaryPhone = function(i) {
    it('Validate Primary Phone #' + i, function () {
        expect(pages.base.isPresentAndDisplayed(page.getPrimaryPhone(i))).toBeTruthy();
    });
};
exports.validatePrimaryEmail = function(i) {
    it('Validate Primary Email #' + i, function () {
        expect(pages.base.isPresentAndDisplayed(page.getPrimaryEmail(i))).toBeTruthy();
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


'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    pph = require('../helpers/pph');

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

exports.editName = function() {
    it('Click on edit rimary name', function () {
        pages.person.clickOnEditName();
    });
};
exports.saveName = function() {
    it('Click on save primary name', function () {
        pages.person.clickOnSaveName();
    });
};
exports.editAlternativeName = function() {
    it('Click on edit alternative name', function () {
        pages.person.clickOnEditAlternativeName();
    });
};
exports.saveAlternativeName = function() {
    it('Click on save alternative name', function () {
        pages.person.clickOnSaveAlternativeName();
    });
};
exports.editSocietyAffiliation = function() {
    it('Click on edit society affiliation', function () {
        pages.person.clickOnEditSocietyAffiliation();
    });
};
exports.saveSocietyAffiliation = function() {
    it('Click on edit society affiliation', function () {
        pages.person.clickOnSaveSocietyAffiliation();
    });
};
exports.editAddress = function(i) {
    it('Click on edit address #' + i, function () {
        pages.person.clickOnEditAddress(i);
    });
};
exports.saveAddress = function(i) {
    it('Click on save address #' + i, function () {
        pages.person.clickOnSaveAddress(i);
    });
};
exports.editPhone = function(i) {
    it('Click on edit phone #' + i, function () {
        pages.person.clickOnEditPhone(i);
    });
};
exports.savePhone = function(i) {
    it('Click on save phone #' + i, function () {
        pages.person.clickOnSavePhone(i);
    });
};
exports.editEmail = function(i) {
    it('Click on edit email #' + i, function () {
        pages.person.clickOnEditEmail(i);
    });
};
exports.saveEmail = function(i) {
    it('Click on save email #' + i, function () {
        pages.person.clickOnSaveEmail(i);
    });
};
exports.editPaymentInfo = function() {
    it('Click on edit payment information', function () {
        pages.person.clickOnEditPaymentInfo();
    });
};
exports.savePaymentInfo = function() {
    it('Click on save payment information', function () {
        pages.person.clickOnSavePaymentInfo();
    });
};

exports.enterPersonSearchTerms = function (value) {
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


'use strict';

var _ = require('lodash'),
    pph = require('../../../../helpers/pph'),
    changeCase = require('change-case'),
    pageStep = require('../../../../helpers/basicPageStep');

steps.person = exports;

hash.personSlots = {};
hash.currentPersonSlot = null;

exports.goToPersonPage = function () {
    it('Go to person page', function () {
        pages.person.open(hash.currentPersonSlot.id);
    });
};

exports.goToPerson = function (id) {
    it('Go to person #'+id, function () {
        pages.person.open(id);
    });
};

exports.usePersonSlot = function (i) {
    it('Use person slot #' + (i + 1), function () {
        var currentPersonSlot;

        if (!hash.personSlots[i]) {
            currentPersonSlot = hash.personSlots[i] = {};
            currentPersonSlot.slotIndex = i;
        }
        else {
            currentPersonSlot = hash.personSlots[i];
        }

        hash.currentPersonSlot = currentPersonSlot;
    });
};

exports.clearCurrentPersonSlot = function () {
    it('Clear current person slot', function () {
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
    it('Enter alternative Suisa Ipi name #' + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeAlternativeSuisaIpiNumber(i, value).then(function () {
            if(!hash.currentPersonSlot.alternativeSuisaIpiNumber){
                hash.currentPersonSlot.alternativeSuisaIpiNumber=[];
            }
            hash.currentPersonSlot.alternativeSuisaIpiNumber[i] = value;
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
            hash.currentPersonSlot.city[i] = value;
        });
    });
};

exports.enterRegion = function (i, value) {
    it('Enter Region #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoRegionInput(i, value).then(function () {
            hash.currentPersonSlot.region = hash.currentPersonSlot.region || [];
            hash.currentPersonSlot.region[i] = value;
        });
    });
};

exports.enterPostalCode = function (i, value) {
    it('Enter Postal Code #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.typeIntoPostalCodeInput(i, value).then(function () {
            hash.currentPersonSlot.postalCode = hash.currentPersonSlot.postalCode || [];
            hash.currentPersonSlot.postalCode[i] = value;
        });
    });
};

exports.selectCountry = function (i, value) {
    it('Select Country #'  + (i + 1) + ' (' + value + ')', function () {
        pages.person.selectCountry(i, value).then(function () {
            hash.currentPersonSlot.country = hash.currentPersonSlot.country || [];
            hash.currentPersonSlot.country[i] = value;
        });
    });
};

exports.setPrimaryAddress = function (i) {
    it('Set as Primary Address #'  + (i + 1), function () {
        pages.person.setPrimaryAddress(i).then(function () {
            hash.currentPersonSlot.primaryAddress = i;
        });
    });
};

exports.setPrimaryPhone = function (i) {
    it('Set as Primary Phone #'  + (i + 1), function () {
        pages.person.setPrimaryPhone(i).then(function () {
            hash.currentPersonSlot.primaryPhone = i;
        });
    });
};

exports.setPrimaryEmail = function (i) {
    it('Set as Primary Email #'  + (i + 1), function () {
        pages.person.setPrimaryEmail(i).then(function () {
            hash.currentPersonSlot.primaryEmail = i;
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

exports.useBlankPersonSlot = function (i) {
    exports.usePersonSlot(i);
    exports.clearCurrentPersonSlot();
};

exports.findId = function () {
    it('Find the person ID', function () {
        pages.person.findId().then(function (value) {
            hash.currentPersonSlot.id = value;
        });
    });
};

exports.findInternalIpiNumber = function () {
    it('Find internal IPI number', function () {
        pages.person.internalIpiNumber().then(function (value) {
            expect(value).toBeTruthy();
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.internalIpiNumber = value;
        });
    });

};

exports.findSuisaIpiNumber = function () {
        it('Find Suisa IPI number', function () {
        pages.person.getSuisaIPI().then(function (value) {
            expect(value).toBeTruthy();
            hash.currentPersonSlot.ipiNumber = value;
            hash.currentPersonSlot.suisaIpiNumber = value;
        });
    });
};

exports.findAlternativeSuisaIpiNumber = function (i) {
    it('Find Alternative Suisa IPI number #'+i, function () {
        pages.person.getAlternativeSuisaIpiNumber(i).then(function (value) {

            expect(value).toBeTruthy();
            if(!hash.currentPersonSlot.alternativeSuisaIpiNumber){
                hash.currentPersonSlot.alternativeSuisaIpiNumber=[];
            }

            hash.currentPersonSlot.alternativeSuisaIpiNumber[i] = value;
        });
    });
};

exports.validateSuisaIpiNumber = function (suisaIpiNumber) {
    it('Validate SUISA IPI number', function () {
        if(suisaIpiNumber == "" || suisaIpiNumber == null) {
            expect(pages.person.getSuisaIPI()).toBe(hash.currentPersonSlot.suisaIpiNumber);
        }else {
            expect(pages.person.getSuisaIPI()).toBe(suisaIpiNumber);
        }
    });
};

exports.validateAlternativeName = function (i, value) {
    var parms = _.toArray(arguments).join(', ');
    it('Validate alternative name (' + parms + ')', function () {
        value = value || hash.currentPersonSlot.alternativeName;
        expect(pph.toLowerCase(pages.person.getAlternativeName(i))).toBe(
            value.toLowerCase()
        );
    });
};

exports.validateName = function () {
    it('Validate Name', function () {
        expect(pages.person.getName()).toBe(hash.currentPersonSlot.name);
    });
};
exports.validateFirstName = function () {
    it('Validate First Name', function () {
        expect(pages.person.getFirstName()).toBe(hash.currentPersonSlot.firstName);
    });
};
exports.validateLastName = function () {
    it('Validate Last Name', function () {
        expect(pages.person.getLastName()).toBe(hash.currentPersonSlot.lastName);
    });
};
exports.validateAlternativeFirstName = function (i) {
    it('Validate Alternative First Name #'+i, function () {
        expect(pages.person.getAlternativeFirstName(i)).toBe(hash.currentPersonSlot.alternativeFirstName);
    });
};
exports.validateAlternativeLastName = function (i) {
    it('Validate Alternative Last Name #'+i, function () {
        expect(pages.person.getAlternativeLastName(i)).toBe(hash.currentPersonSlot.alternativeLastName);
    });
};

exports.validateAlternativeSuisaIpiNumber = function (i) {
    it('Validate Alternative Suisa Ipi Number #'+i, function () {
        expect(pages.person.getAlternativeSuisaIpiNumber(i)).toBe(hash.currentPersonSlot.alternativeSuisaIpiNumber[i]);
    });
};

exports.validateAffiliatedSociety = function () {
    it('Validate Affiliated Society', function () {
        expect(pages.person.getAffiliatedSociety()).toBe(hash.currentPersonSlot.affiliatedSociety);
    });
};
exports.validateAddressOne = function(i) {
    it('Validate Address One #' + i, function () {
        expect(pages.person.getAddressOne(i)).toBe(hash.currentPersonSlot.addressOne[i]);
    });
};
exports.validateAddressTwo = function(i) {
    it('Validate Address Two #' + i, function () {
        expect(pages.person.getAddressTwo(i)).toBe(hash.currentPersonSlot.addressTwo[i]);
    });
};
exports.validateAddressThree = function(i) {
    it('Validate Address Three #' + i, function () {
        expect(pages.person.getAddressThree(i)).toBe(hash.currentPersonSlot.addressThree[i]);
    });
};
exports.validateCity = function(i) {
    it('Validate City #' + i, function () {
        expect(pages.person.getCity(i)).toBe(hash.currentPersonSlot.city[i]);
    });
};
exports.validateRegion = function(i) {
    it('Validate Region #' + i, function () {
        expect(pages.person.getRegion(i)).toBe(hash.currentPersonSlot.region[i]);
    });
};
exports.validatePostalCode = function(i) {
    it('Validate Postal Code #' + i, function () {
        expect(pages.person.getPostalCode(i)).toBe(hash.currentPersonSlot.postalCode[i]);
    });
};
exports.validateCountry = function(i) {
    it('Validate Country #' + i, function () {
        expect(pages.person.getCountry(i)).toBe(hash.currentPersonSlot.country[i]);
    });
};
exports.validatePhone = function(i) {
    it('Validate Phone #' + i, function () {
        expect(pages.person.getPhone(i)).toBe(hash.currentPersonSlot.phone[i]);
    });
};
exports.validateEmail = function (i) {
    it('Validate Email #' + i, function () {
        expect(pages.person.getEmail(i)).toBe(hash.currentPersonSlot.email[i]);
    });
};
exports.validatePayee = function () {
    it('Validate Payee', function () {
        expect(pages.person.getPayee()).toBe(hash.currentPersonSlot.payee);
    });
};
exports.validatePrimaryAddress = function(i) {
    it('Validate Primary Address #' + i, function () {
        expect(pages.base.isPresentAndDisplayed(pages.person.getPrimaryAddress(i))).toBeTruthy();
    });
};
exports.validatePrimaryPhone = function(i) {
    it('Validate Primary Phone #' + i, function () {
        expect(pages.base.isPresentAndDisplayed(pages.person.getPrimaryPhone(i))).toBeTruthy();
    });
};
exports.validatePrimaryEmail = function(i) {
    it('Validate Primary Email #' + i, function () {
        expect(pages.base.isPresentAndDisplayed(pages.person.getPrimaryEmail(i))).toBeTruthy();
    });
};

pageStep([
    'Edit primary name',
    'Save primary name',
    'Cancel primary name',
    'Edit alternative name',
    'Save alternative name',
    'Cancel alternative name',
    'Delete alternative name',
    'Edit society affiliation',
    'Save society affiliation',
    'Cancel society affiliation',
    'Edit address',
    'Save address',
    'Cancel address',
    'Delete address',
    'Edit phone',
    'Save phone',
    'Cancel phone',
    'Delete phone',
    'Edit email',
    'Save email',
    'Cancel email',
    'Delete email',
    'Edit payment',
    'Save payment',
    'Cancel payment',
    'Edit others',
    'Save others',
    'Cancel others',
    'Make Person Statement Recipient',
    'Set Statement Recipient Data'
]);

exports.clickOnEnterPersonSearchTerms = function (value) {
    it('Search for person (' + value + ')', function () {
        pages.person.enterPersonSearchTerms(value);
    });
};
exports.searchForPersonUsingPreviouslyCreated = function (field) {
    it('Search for person using previously created ' + field, function () {
        pages.person.enterPersonSearchTerms(
            hash.currentPersonSlot[[field].map(changeCase.camelCase)]
        );
        pages.base.waitForAjax();
    });
};
exports.verifySearchResultIsUnique = function () {
    it('Verify only one search result is returned', function () {
        browser.sleep(5000);
        pages.person.personSearchIsUnique();
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
        pages.person.validateIpiNumber(
            hash.currentPersonSlot.ipiNumber
        );
    });
};

exports.enterPlaceOfBirth = function (value) {
    it('Enter place of birth (' + value + ')', function () {
        pages.person.typePlaceOfBirth(value).then(function () {
            hash.currentPersonSlot.placeOfBirth = value;
        });
    });
};

exports.enterCitizenship = function (value) {
    it('Enter citizenship (' + value + ')', function () {
        pages.person.typeCitizenship(value).then(function () {
            hash.currentPersonSlot.citizenship = value;
        });
    });
};

exports.enterMexicoRegistrationNumber = function (value) {
    it('Enter Mexico Registration Number (' + value + ')', function () {
        pages.person.typeMexicoRegistrationNumber(value).then(function () {
            hash.currentPersonSlot.mexicoRegistrationNumber = value;
        });
    });
};

exports.selectRandomMaritalStatus = function () {
    it('Select Random Marital Status', function () {
        pages.base.randomTgDropdownSelector(pages.person.maritalStatusDropdown());
    });
};

exports.enterMexicoRegDate = function (year, month, day) {
    it('Enter Mexico Reg Date (' + year + "-" + month + "-" + day + ')', function () {
        pages.person.typeMexicoRegDate(year, month, day).then(function () {
            hash.currentPersonSlot.mexicoRegDate = year + "-" + month + "-" + day;
        });
    });
};

exports.validateMexicoRegDateIsEnabled = function () {
    it('Validate Mexico Reg Date Is Enabled', function () {
        expect(pages.person.mexicoRegDate().isEnabled()).toBe(true);
    });
};

exports.refreshThePage = function () {
    it("Refresh the page", function () {
        browser.driver.navigate().refresh();
        pages.base.waitForAjax();
        browser.sleep(5000);
    });
};
'use strict';




var _ = require("lodash");
var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    ExpectedConditions = protractor.ExpectedConditions,
    promise = protractor.promise;

require(pages_path + "newPerson");
require(steps_path + "newPerson");
require(pages_path + "person");
require(steps_path + "base");

hash.royaltyRates = {};
hash.royaltyRates.RRNames = [];
hash.royaltyRates.royaltyRateObjectsList = [];


if (steps.newPerson === undefined) {
    steps.newPerson = {

        goToNewPersonPage: function () {
            it('Go to new person page', function () {
                pages.newPerson.open();
            });
        },
        waitForPageToLoad: function () {
            it('Wait for page to load', function () {
                   pages.newPerson.waitForPageToBeShown();

            });
        },

        enterFirstName: function (value) {
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
        },
        enterLastName: function (value) {
            it('Enter last name (' + value + ')', function () {
               pages.newPerson.typeLastName(value).then(function () {
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
        },


        enterPresentationName: function (value) {
            it('Enter presentation name (' + value + ')', function () {
                pages.newPerson.typePresentationName(value).then(function () {
                    var person = hash.currentPersonSlot;

                    person.name = value;
                    person.presentationName = value;
                });
            });
        },

        addAlternativeName: function () {
            it('Add alternative name', function () {
                pages.newPerson.clickAddAlternativeName();
            });
        },

        enterAlternativeFirstName: function (i, value) {
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
        },

        enterAlternativeLastName: function (i, value) {
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
        },

        enterAlternativeCreditsName: function (i, value) {
            it('Enter alternative credits name #' + (i + 1) + ' (' + value + ')', function () {
                pages.newPerson.typeAlternativeCreditsName(i, value).then(function () {
                    hash.currentPersonSlot.alternativeCreditsName = value;
                });
            });
        },
        enterAlternativeSuisaIpiNumber: function (i, value) {
            it('Enter alternative Siosa Ipi name #' + (i + 1) + ' (' + value + ')', function () {
                pages.newPerson.typeAlternativeSuisaIpiNumber(i, value).then(function () {
                    hash.currentPersonSlot.alternativeSuisaIpiNumber = value;
                });
            });
        },


        enterSuisaIpiNumber: function (value) {
            it('Enter SUISA IPI number (' + value + ')', function () {
                pages.newPerson.typeSuisaIpiNumber(value).then(function () {
                    hash.currentPersonSlot.ipiNumber = value;
                    hash.currentPersonSlot.suisaIpiNumber = value;
                });
            });
        },

        enterAffiliatedSocietySearchTerms: function (value) {
            it('Enter affiliated society search terms (' + value + ')', function () {
                pages.newPerson.typeAffiliatedSocietySearchTerms(value).then(function () {
                    hash.currentPersonSlot.affiliatedSociety = value;
                });
            });
        },

        selectAffiliatedSocietySearchResultByIndex: function (i) {
            it('Select affiliated society search result #' + (i + 1), function () {
                pages.newPerson.clickAffiliatedSocietySearchResultByIndex(i);
            });
        },
        enterAddressOne: function (value) {
            it('Type Address One ' + value, function () {
                pages.newPerson.typeIntoAddressOneInput(value).then(function () {
                    hash.currentPersonSlot.affiliatedSociety = value;
                });
            });
        },
        enterCity: function (value) {
            it('Type City ' + value, function () {
                pages.newPerson.typeIntoCityInput(value).then(function () {
                    hash.currentPersonSlot.city = value;
                });
            });
        },

        enterRegion: function (value) {
            it('Type Region ' + value, function () {
                pages.newPerson.typeIntoRegionInput(value).then(function () {
                    hash.currentPersonSlot.region = value;
                });
            });
        },

        enterPostalCode: function (value) {
            it('Type Postal Code ' + value, function () {
                pages.newPerson.typeIntoPostalCodeInput(value).then(function () {
                    hash.currentPersonSlot.postalCode = value;
                });
            });
        },

        enterPhone: function (value) {
            it('Type Phone ' + value, function () {
                pages.newPerson.typeIntoPhoneInput(value).then(function () {
                    hash.currentPersonSlot.phone = value;
                });
            });
        },
        enterEmail: function (value) {
            it('Type Email ' + value, function () {
                pages.newPerson.typeIntoEmailInput(value).then(function () {
                    hash.currentPersonSlot.email = value;
                });
            });
        },


        save: function () {
            it('Save person', function () {
                pages.newPerson.save();
            });
        },

        validateSaveRedirection: function () {
            it('Validate save redirection', function () {
                pages.newPerson.validateSaveRedirection();
            });
        },
        enterCreditsName: function (value) {
            it('Enter Credits Name (' + value + ')', function () {

                pages.newPerson.typeCreditsName(value).then(function () {
                    hash.currentPersonSlot.creditsName = value;
                });
            });
        },

        enterDateOfDeath: function (year, month, day) {
            it('Enter Date of Death (' + year + "-" + month + "-" + day + ')', function () {

                pages.newPerson.typeDateOfDeath(year, month, day).then(function () {
                    hash.currentPersonSlot.dateOfDeath = year + "-" + month + "-" + day;
                });


            });

        }

    };
}


module.exports = steps.newPerson;

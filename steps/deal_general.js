"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "deal_general");
module.exports = steps.deal_general = {};


module.exports.goToNewDealPage = function () {
    it("Go to New Deal page", function () {
            pages.deal_general.open().waitForAjax();
        }
    );
};


module.exports.selectDealSigningTerritory = function () {
    it("Select deal signing territory", function () {
            pages.deal_general.selectDesiredSigningTerritory("Argentina");
        }
    );
};


module.exports.fillContractingPartyField = function () {
    it("Fill contracting party field", function () {
            pages.deal_general.fillContractingPartiesField("bmi");
        }
    );
};

module.exports.waitForContractingPartyDropDown = function () {
    it("Wait for suggestions dropdown to appear", function () {
            var suggestion = $(".tg-typeahead__suggestions-container");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
        }
    );
};

module.exports.selectContractingParty = function () {
    it("Select specific suggestion", function () {
            pages.deal_general.selectContractingPartyValue("(021)\n BMI");
        }
    );
};

module.exports.fillIntoInternalContactField = function (internal_contact) {
    it("Fill into internal contact field", function () {
            pages.deal_general.fillIntoInternalContactsField(internal_contact);
        }
    );
};

module.exports.selectRandomInternalContactDropDown = function (internal_contact) {
    it("Select random value from internal contact drop down", function () {
            pages.deal_general.selectRandomInternalContactsFromDropDown();
        }
    );
};

module.exports.clickOnInternalContactRole = function () {
    it("Click on internal contact role field", function () {
            pages.deal_general.clickOnInternalContactsRole();
        }
    );
};



module.exports.itFillDealMandatoryFieldsGeneralTab = function () {
    describe("Fill mandatory fields in deals general tab", function () {
            steps.deal_general.goToNewDealPage();
            steps.deal_general.selectDealSigningTerritory();
            steps.deal_general.fillContractingPartyField();
            steps.deal_general.waitForContractingPartyDropDown();
            steps.deal_general.selectContractingParty();
        }
    );
};

    module.exports.itAddInternalContactsToDealGeneralTab = function (internal_contact) {
        describe("Add internal contacts in deals general tab", function () {
                steps.deal_general.fillIntoInternalContactField(internal_contact);
                steps.deal_general.selectRandomInternalContactDropDown();
                steps.deal_general.clickOnInternalContactRole();
                steps.deal_general.selectRandomInternalContactDropDown();
            }
        );
};

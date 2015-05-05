"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_general");
module.exports = steps.create_deal_general = {};


module.exports.goToNewDealPage = function () {
    it("Go to New Deal page", function () {
            pages.create_deal_general.open().waitForAjax();
        }
    );
};


module.exports.selectDealSigningTerritory = function () {
    it("Select deal signing territory", function () {
            pages.create_deal_general.selectDesiredSigningTerritory("Argentina");
        }
    );
};


module.exports.fillContractingPartyField = function () {
    it("Fill contracting party field", function () {
            pages.create_deal_general.fillContractingPartiesField("bmi");
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
            pages.create_deal_general.selectContractingPartyValue("(021)\n BMI");
        }
    );
};

module.exports.fillIntoInternalContactField = function (internal_contact) {
    it("Fill into internal contact field", function () {
            pages.create_deal_general.fillIntoInternalContactsField(internal_contact);
            browser.sleep(2000);
        }
    );
};

module.exports.fillIntoInternalContactsFieldRowI = function (i) {
    it("Fill into internal contact row i ", function () {
            pages.create_deal_general.fillIntoTheIRowInternalContactField(i);
            browser.sleep(2000);
        }
    );
};

module.exports.selectRandomInternalContactDropDown = function () {
    it("Select random value from internal contact drop down", function () {
            pages.create_deal_general.selectRandomInternalContactsFromDropDown();
            browser.sleep(1000);
        }
    );
};

module.exports.clickOnInternalContactRole = function () {
    it("Click on internal contact role field", function () {
            pages.create_deal_general.clickOnInternalContactsRole();
       }
    );
};

module.exports.clickOnInternalContactsRoleRowI = function(i){
    it("Click on internal contact role row i", function () {
        pages.create_deal_general.clickIntoInternalContactsRoleRowI(i);
    });
};

module.exports.itFillDealMandatoryFieldsGeneralTab = function () {
    describe("Fill mandatory fields in deals general tab", function () {
            steps.create_deal_general.goToNewDealPage();
            steps.create_deal_general.selectDealSigningTerritory();
            steps.create_deal_general.fillContractingPartyField();
            steps.create_deal_general.waitForContractingPartyDropDown();
            steps.create_deal_general.selectContractingParty();
        }
    );
};

    module.exports.itAddInternalContactsToDealGeneralTab = function (internal_contact) {
        describe("Add first internal contacts in deals general tab", function () {
                steps.create_deal_general.fillIntoInternalContactField(internal_contact);
                steps.create_deal_general.selectRandomInternalContactDropDown();
                steps.create_deal_general.clickOnInternalContactRole();
                steps.create_deal_general.selectRandomInternalContactDropDown();
            }
        );
};


module.exports.itAddInternalContactsRowIToDealGeneralTab = function (i) {
    describe("Add internal contacts in deals general tab", function () {
            steps.create_deal_general.fillIntoInternalContactsFieldRowI(i);
            steps.create_deal_general.selectRandomInternalContactDropDown();
            steps.create_deal_general.clickOnInternalContactsRoleRowI(i);
            steps.create_deal_general.selectRandomInternalContactDropDown();
        }
    );
};

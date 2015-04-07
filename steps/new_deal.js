"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var randomId = require("../helpers/randomId");
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "new_deal");
require(pages_path + "deal");
require(steps_path + "base");
module.exports = steps.new_deal = {};

module.exports.goToNewDealPage = function () {
    it(
        "Go to New Deal page", function () {
            pages.new_deal.open().waitForAjax();
        }
    );
};


module.exports.selectDealSigningTerritory = function () {
    it(
        "Select deal signing territory", function () {
            pages.new_deal.selectDesiredSigningTerritory("Argentina");
        }
    );
};


module.exports.fillContractingPartyField = function () {
    it(
        "Fill contracting party field", function () {
            pages.new_deal.fillContractingPartiesField("bmi");
        }
    );
};

module.exports.waitForContractingPartyDropDown = function () {
    it(
        "Wait for suggestions dropdown to appear", function () {
            var suggestion = $(".tg-typeahead__suggestions-container");
            browser.wait(ExpectedConditions.visibilityOf(suggestion));
            expect(suggestion.getText()).not.toContain("No results");
        }
    );
};

module.exports.selectContractingParty = function () {
    it("Select specific suggestion", function () {
            pages.new_deal.selectContractingPartyValue("(021)\n BMI");
        }
    );
};


module.exports.expectContinueButtonEnabled = function () {
    it("Expect continue button to be enabled", function () {
        expect(pages.new_deal.continueButton().isEnabled());
    });
};

module.exports.goToNextPage = function () {
    it("Click on continue to next page button", function () {
        pages.new_deal.continueToNextPage();
    });
};


module.exports.fillMandatoryFieldsContractPeriod = function () {
    it("Fill mandatory fields contract period", function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.new_deal.startDate()));
        pages.new_deal.fillStartActualDate();
        pages.new_deal.fillTargetEndMonths();
    });
};


module.exports.addSimpleScope = function () {
    it("Add simple scope", function () {
        pages.new_deal.addScopeForm();
        pages.new_deal.selectContractTypeScope(pages.new_deal.contractTypeDropDown(), "Finder");
        pages.new_deal.addTerritoryByTypingToScope();
    });
};


module.exports.selectCountry = function () {
    it("select country", function () {
        pages.new_deal.selectRandomCountry();
    });
};

module.exports.saveDeal = function () {
    it("Click on save deal button", function () {
        pages.new_deal.saveNewDeal();
    });
};

module.exports.waitForDealToBeSaved = function () {
    it("Expect deal screen to be loaded and brief number displayed " , function () {
        browser.wait(ExpectedConditions.visibilityOf(pages.deal.dealBriefNumber()));
    });
};


module.exports.returnDealNumber = function () {
    it("Return deal number " , function () {
        return pages.deal.dealBriefNumber();
    });
};

module.exports.itCreateBasicDeal = function () {

    describe(
        "Create basic deal", function () {
            steps.new_deal.goToNewDealPage();
            steps.new_deal.selectDealSigningTerritory();
            steps.new_deal.fillContractingPartyField();
            steps.new_deal.waitForContractingPartyDropDown();
            steps.new_deal.selectContractingParty();
            steps.new_deal.expectContinueButtonEnabled();
            steps.new_deal.goToNextPage();
            steps.new_deal.fillMandatoryFieldsContractPeriod();
            steps.new_deal.addSimpleScope();
            steps.new_deal.selectCountry();
            steps.new_deal.expectContinueButtonEnabled();
            steps.new_deal.goToNextPage();
            steps.new_deal.saveDeal();
            steps.new_deal.waitForDealToBeSaved();
           steps.new_deal.returnDealNumber();
        }
    );


};



'use strict';

var promise = protractor.promise,
    ExpectedConditions = protractor.ExpectedConditions;

steps.relatedDeal = exports;

exports.checkRelatedDealsTitle = function () {
    it("Check the related deals title ", function () {
        pages.relatedDeal.checkTheRelatedDealsTitle();
    });
};

exports.checkRelatedDealsTooltipTitle = function () {
    it("Check the related deals tooltip title ", function () {
        pages.relatedDeal.checkTheRelatedDealsTooltipTitle();
    });
};

exports.checkNoRelatedDealsDefined = function () {
    it("Check that no related deals has been defined ", function () {
        pages.relatedDeal.checkThatNoRelatedDealsDefined();
    });
};

exports.checkTheHeaderTableTitlesRelatedDeals = function () {
    it("Check the related deals header table titles ", function () {
        pages.relatedDeal.checkTheContractingPartiesTitleTableRelatedDeals();
        pages.relatedDeal.checkTheContractTypeTitleTableRelatedDeals();
        pages.relatedDeal.checkTheDealStatusTitleTableRelatedDeals();
        pages.relatedDeal.checkTheContractExecutionDateTitleTableRelatedDeals();
        pages.relatedDeal.checkTheRelationshipTitleTableRelatedDeals();
    });
};

exports.clickOnAddRelatedDealLink = function () {
    it("Click on the add related deal link ", function () {
        pages.relatedDeal.clickOnTheAddRelatedDealLink();
    });
};

exports.fillIntoContractingPartiesFieldRelatedDealsSpecificValue = function (contracting) {
    it("Fill into the contracting parties field related deals ", function () {
        pages.relatedDeal.fillIntoTheContractingPartiesFieldSpecificValue(contracting);
    });
};

exports.clearIntoContractingPartiesField = function () {
    it("Clear into the contracting parties field related deals ", function () {
        pages.relatedDeal.clearIntoTheContractingPartiesField();
    });
};

exports.checkContractingPartyDropDownIsPopulated = function () {
    it("Check that contracting party drop down is populated", function () {
        var myElement = browser.driver.findElement(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"));
        expect(myElement.isDisplayed());
    });
};

exports.selectRandomContractingPartyRelatedDeals = function () {
    it("Select random value for contracting party related deals ", function () {
        pages.relatedDeal.fillIntoTheContractingPartiesField();
        pages.relatedDeal.selectTheRandomContractingPartyRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};
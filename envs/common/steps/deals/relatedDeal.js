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
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"))));
        var myElement = browser.driver.findElement(By.css("ul.tg-typeahead__suggestions-group li.tg-typeahead__suggestions-group-item.ng-scope"));
        expect(myElement.isDisplayed());
    });
};

exports.checkContractingPartyDropDownWithNoResult = function () {
    it("Check that contracting party drop down is with no results", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer"))));
        browser.driver.findElement(By.css("ul.tg-typeahead__suggestions.ng-scope li.tg-typeahead__suggestions-footer")).getText().
        then(function (promise) {
            console.log("No results in the drop down : " + promise);
            expect(promise).toContain("No results for");
        });
    });
};

exports.selectRandomContractingPartyRelatedDeals = function () {
    it("Select random value for contracting party related deals ", function () {
        pages.relatedDeal.fillIntoTheContractingPartiesField();
        pages.relatedDeal.selectTheRandomContractingPartyRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.selectSpecificContractingPartyRelatedDealsTowNumberI = function (contracting, i) {
    it("Select random value for contracting party related dealsnumber " + i, function () {
        pages.relatedDeal.fillIntoTheContractingPartiesFieldSpecificValueRowNumberI(contracting, i);
        pages.relatedDeal.selectTheRandomContractingPartyRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.selectSpecificContractingPartyRelatedDeals = function (contracting) {
    it("Select random value for contracting party related deals ", function () {
        console.log('-------');
        console.log(contracting);
        console.log('-------');
        pages.relatedDeal.fillIntoTheContractingPartiesFieldSpecificValue(contracting);
        pages.relatedDeal.selectTheRandomContractingPartyRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.selectSpecificContractingPartyCreatedDealRelatedDeals = function (i) {
    it("Select random value for contracting party related deals ", function () {
        pages.deal.elems.dealBriefNumber.getText().
        then(function (promise) {
            console.log("Contract brief number promise is " + promise);
            pages.deal.printTheDealNumber();
            pages.base.focusOnTheNewOpenedTab(i);
            pages.deal.printTheDealNumber();
            pages.relatedDeal.fillIntoTheContractingPartiesFieldSpecificValue(promise);
        });
        pages.relatedDeal.selectTheRandomContractingPartyRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.selectSpecificContractingPartyCreatedDealRelatedDealsRowJ = function (i, j) {
    it("Select random value for contracting party related deals ", function () {
        pages.deal.elems.dealBriefNumber.getText().
        then(function (promise) {
            console.log("Contract brief number promise is " + promise);
            pages.deal.printTheDealNumber();
            pages.base.focusOnTheNewOpenedTab(i);
            pages.deal.printTheDealNumber();
            pages.relatedDeal.fillIntoTheContractingPartiesFieldSpecificValueRowNumberI(promise, j);
        });
        pages.relatedDeal.selectTheRandomContractingPartyRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.checkContractTypeValueRowNumberI = function (value, i) {
    it("Check the contract type value row number " + i, function () {
        browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.contract-type")).getText().
        then(function (promise) {
            console.log("Contract type value is " + promise);
            expect(promise).toEqual(value);
        });
    });
};

exports.checkDealStatusValueRowNumberI = function (value, i) {
    it("Check the deal status value row number " + i, function () {
        browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.deal-status")).getText().
        then(function (promise) {
            console.log("Deal status value is " + promise);
            expect(promise).toEqual(value);
        });
    });
};

exports.checkContractExecutionDateValueRowNumberI = function (value, i) {
    it("Check the contract execution date value row number " + i, function () {
        browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.execution-date")).getText().
        then(function (promise) {
            console.log("Contract execution date value is " + promise);
            expect(promise).toEqual(value);
        });
    });
};


exports.checkRelationshipValueRowNumberI = function (value, i) {
    it("Check the relationship value row number " + i, function () {
        browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.relationship")).getText().
        then(function (promise) {
            console.log("Relationship value is " + promise);
            expect(promise).toEqual(value);
        });
    });
};

exports.clickValueRelationshipDropDown = function () {
    it("Click the relationship drop down ", function () {
        pages.relatedDeal.clickValueRelationshipDropDown();
    });
};

exports.selectRandomValueRelationshipDropDown = function () {
    it("Select the random value from relationship drop down ", function () {
        pages.relatedDeal.selectRandomValueRelationshipDropDown();
        pages.relatedDeal.waitForAjax();
    });
};

exports.selectRandomValueFromRelationshipDropDown = function (i) {
    it("Select the random value from relationship drop down ", function () {
        pages.relatedDeal.selectTheRandomValueFromRelationshipDropDownRowNumberI(i);
        pages.relatedDeal.waitForAjax();
    });
};

exports.checkDeleteRelationshipTooltipRowNumberI = function (i) {
    it("Check the relationship value row number " + i, function () {
        browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.relationship a.remove-btn.pull-right i")).getAttribute("data-tooltip").
        then(function (promise) {
            console.log("Relationship remove tooltip value is " + promise);
            expect(promise).toEqual("Delete Relationship.");
        });
    });
};


exports.deleteRelationshipRowNumberI = function (i) {
    it("Delete the relationship row number " + i, function () {
        browser.driver.findElement(By.css("div.table-body.clearfix>div:nth-child(" + i + ") div.pull-left.relationship a.remove-btn.pull-right i")).click();
    });
};

exports.clickOnSaveRelatedDeal = function () {
    it("Click on the save related deal button ", function () {
        pages.relatedDeal.clickOnTheSaveRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.clickOnCancelRelatedDeal = function () {
    it("Click on the cancel related deal button ", function () {
        pages.relatedDeal.clickOnTheCancelRelatedDeal();
        pages.relatedDeal.waitForAjax();
    });
};

exports.editRelatedDealForm = function () {
    it("Edit the related deal form ", function () {
       pages.relatedDeal.editTheRelatedDealForm();
    });
};

exports.clickOnContractingPartyRelatedDealLink = function (i) {
  it("Click on the contracting party related deal link ", function(){
     pages.relatedDeal.clickOnTheContractingPartyRelatedDealRowNumberI(i);
  });
};
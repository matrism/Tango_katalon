"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.affiliateIncomeSwagger = exports;

exports.expandAffiliateIncomeOperations = function () {
    it("Expand the affiliate income operations ", function () {
        pages.affiliateIncomeSwagger.expandTheAffiliateIncomeOperations();
    });
};

exports.expandGetAffiliateWorkPipelineCall = function () {
    it("Expand the get affiliate work pipeline call ", function () {
        pages.affiliateIncomeSwagger.expandTheGetAffiliateWorkPipelineCall();
    });
};

exports.fillIntoTerritoryCodeInputField = function (territoryCode) {
    it("Fill into the territory code input field ", function () {
        pages.affiliateIncomeSwagger.fillIntoTheTerritoryCodeInputField(territoryCode);
    });
};


exports.fillIntoRoyaltyPeriodInputField = function (royaltyPeriod) {
    it("Fill into the royalty period input field", function () {
        pages.affiliateIncomeSwagger.fillIntoTheRoyaltyPeriodInputField(royaltyPeriod);
    });
};

exports.fillIntoTangoWorkCodeInputField = function (tangoWorkCode) {
    it("Fill into the tango work code input field ", function () {
        pages.affiliateIncomeSwagger.fillIntoTheTangoWorkCodeInputField(tangoWorkCode);
    });
};

exports.selectTheDesiredOptionForForceRecalc = function (forceRecalc) {
    it("Select the desired option for force recalc ", function () {
        pages.affiliateIncomeSwagger.selectTheDesiredOptionForForceRecalc(forceRecalc);
    });
};

exports.clickOnTryItOutButton = function () {
    it("Click on the try it out button", function () {
        pages.affiliateIncomeSwagger.clickOnTheTryItOutButton();
        pages.affiliateIncomeSwagger.waitForAjax();
    });
};

exports.useWorkNumberFromManualStatementPageAndDoGetAffiliateIncomeWorkCall = function(){
   it("Do the get affiliate income work call ", function(){
       browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(4) div.work-accordion-group__item-work-code.ng-binding")).getText()
           .then(function(promise){
               console.log("The work code is " + promise);

               //pages.base.openTheNewTab("http://tanrflowsrv.tango.qa.wmg.com");
               pages.base.focusOnTheNewOpenedTab(1);
               pages.affiliateIncomeSwagger.expandTheAffiliateIncomeOperations();
               pages.affiliateIncomeSwagger.expandTheGetAffiliateWorkPipelineCall();
               //pages.affiliateIncomeSwagger.fillIntoTheTerritoryCodeInputField(124);
               //pages.affiliateIncomeSwagger.fillIntoTheRoyaltyPeriodInputField(201507201509);
               pages.affiliateIncomeSwagger.fillIntoTheTangoWorkCodeInputField(promise);
               pages.affiliateIncomeSwagger.selectTheDesiredOptionForForceRecalc("false");
               //pages.affiliateIncomeSwagger.clickOnTheTryItOutButton();
           });
  });
};
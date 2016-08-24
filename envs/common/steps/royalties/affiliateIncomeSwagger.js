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

exports.selectDesiredOptionForForceRecalc = function (forceRecalc) {
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

exports.useWorkNumberFromManualStatementPageAndDoGetAffiliateIncomeWorkCall = function () {
    it("Do the get affiliate income work call ", function () {
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(4) div.work-accordion-group__item-work-code.ng-binding")).getText()
            .then(function (promise) {
                console.log("The work code is " + promise);
                pages.base.focusOnTheNewOpenedTab(1);
                pages.affiliateIncomeSwagger.expandTheAffiliateIncomeOperations();
                pages.affiliateIncomeSwagger.expandTheGetAffiliateWorkPipelineCall();
                pages.affiliateIncomeSwagger.fillIntoTheTangoWorkCodeInputField(promise);
                //pages.affiliateIncomeSwagger.fillIntoTheTangoWorkCodeInputField("WW 015092015 00");
                pages.affiliateIncomeSwagger.selectTheDesiredOptionForForceRecalc("false");
            });
    });
};

exports.useTheWorkCodeAndSearchForIt = function () {
    it("Use the work code and search for it ", function () {
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(4) div.work-accordion-group__item-work-code.ng-binding")).getText()
            .then(function (promise) {
                console.log("The work code is " + promise);
                pages.searchSection.selectWorkTypeOption();
                pages.searchSection.typeDealNumberIntoInput(promise);
                pages.searchSection.selectValueFromDropdown();
            });
    });
};

exports.checkIncomeTypeOnJsonResult = function (incomeType) {
    it("Check the income type on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.attribute")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.attribute")).getText()
            .then(function (promise) {
                console.log("The income type from json result is : " + promise);
                expect(promise).toEqual(incomeType);
            });
    });
};

exports.checkGrossReceivedValueOnJsonResult = function (grossReceived) {
    it("Check the gross received value on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(2)")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(2)")).getText()
            .then(function (promise) {
                console.log("The gross received value from json result is : " + promise);
                expect(promise).toEqual(grossReceived);
            });
    });
};

exports.checkNetReceivedValueOnJsonResult = function (netReceived) {
    it("Check the net received value on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(4)")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(4)")).getText()
            .then(function (promise) {
                console.log("The net received value from json result is : " + promise);
                expect(promise).toEqual(netReceived);
            });
    });
};

exports.checkDstNpsValueOnJsonResult = function (paidOut) {
    it("Check the dst nps value on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(6)")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(6)")).getText()
            .then(function (promise) {
                console.log("The dst nps value from json result is : " + promise);
                expect(promise).toEqual(paidOut);
            });
    });
};

exports.checkPaidOutValueOnJsonResult = function (paidOut) {
    it("Check the paid out value on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(8)")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(8)")).getText()
            .then(function (promise) {
                console.log("The paid out value from json result is : " + promise);
                expect(promise).toEqual(paidOut);
            });
    });
};

exports.checkAdminValueOnJsonResult = function (admin) {
    it("Check the admin value on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(10)")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(10)")).getText()
            .then(function (promise) {
                console.log("The admin value from json result is : " + promise);
                expect(promise).toEqual(admin);
            });
    });
};

exports.checkSubPublisherNpsValueOnJsonResult = function (subPublisherNps) {
    it("Check the subpublisher nps value on Json result ", function () {
        pages.base.scrollIntoView(element(by.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(12)")));
        browser.driver.findElement(By.css("div.response pre.json span:nth-child(18)>span.value>span.value:nth-child(12)")).getText()
            .then(function (promise) {
                console.log("The subpubliser nps value from json result is : " + promise);
                expect(promise).toEqual(subPublisherNps);
            });
    });
};

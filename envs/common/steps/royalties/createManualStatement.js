"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createManualStatement = exports;

exports.selectDesiredProcessingTerritory = function (country) {
    it("Select the desired processing territory", function () {
        pages.createManualStatement.selectTheDesiredProcessingTerritory(country);
    });
};

exports.selectDesiredRoyaltyPeriodValueDropDown = function (royaltyPeriod) {
    it("Select the desired royalty period value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredRoyaltyPeriod(royaltyPeriod);
    });
};

exports.selectDesiredValueForIncomeProviderDropDown = function (incomeProvider) {
    it("Fill into the income provider field and select desired (random) income provider ", function () {
        pages.createManualStatement.fillIntoTheIncomeProviderFieldSpecificValue(incomeProvider);
        pages.createManualStatement.selectTheRandomValueForIncomeProviderDropDown();
    });
};

exports.fillIntoStatementDistributionPeriodStartDate = function (year, month) {
    it("Fill into the start statement distribution period desired year " + year + " and desired month " + month, function () {
        pages.createManualStatement.fillIntoTheStatementDistributionPeriodStartYear(year);
        pages.createManualStatement.selectTheDesiredStatementDistributionPeriodStartMonth(month);
    });
};

exports.fillIntoStatementDistributionPeriodEndDate = function (year, month) {
    it("Fill into the end statement distribution period desired year " + year + " and desired month " + month, function () {
        pages.createManualStatement.fillIntoTheStatementDistributionPeriodEndYear(year);
        pages.createManualStatement.selectTheDesiredStatementDistributionPeriodEndMonth(month);
    });
};

exports.fillIntoStatementAmountInputField = function (amount) {
    it("Fill into statement amount input field the desired value " + amount, function () {
        pages.createManualStatement.fillIntoTheStatementAmountInputField(amount);
    });
};

exports.selectCurrencyFromStatementAmountCurrencyDropDown = function (currency) {
    it("Select desired currency from statement amount currency drop down " + currency, function () {
        pages.createManualStatement.selectTheCurrencyFromStatementAmountCurrencyDropDown(currency);
    });
};

exports.fillIntoCommissionRateInputField = function (value) {
    it("Fill into the commission rate input field the value " + value, function () {
        pages.createManualStatement.fillIntoTheCommissionRateInputField(value);
    });
};

exports.fillIntoExchangeRateInputField = function (value) {
    it("Fill into the exchange rate input field the value " + value, function () {
        pages.createManualStatement.fillIntoTheExchangeRateInputField(value);
    });
};

exports.clickOnCreateButtonManualStatement = function () {
    it("Click on the create button for manual statement ", function () {
        pages.createManualStatement.clickOnTheCreateButtonManualStatement();
        pages.createManualStatement.waitForAjax();
    });
};

exports.fillIntoBatchAmountValue = function (amount) {
    it("Fill into the batch amount value " + amount, function () {
        pages.createManualStatement.fillIntoTheBatchAmountValue(amount);
    });
};

exports.clickOnDefaultSettingsLink = function () {
    it("Click on the default settings link ", function () {
        pages.createManualStatement.clickOnTheDefaultSettingsLink();
        pages.createManualStatement.waitForAjax();
    });
};

exports.selectDesiredIncomeTypeValueFromDropDown = function (incomeType) {
    it("Select the desired income type value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredIncomeTypeValueFromDropDown(incomeType);
    });
};

exports.selectDesiredExploitationTerritoryValueFromDropDown = function (territory) {
    it("Select the desired territory value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredExploitationTerritoryValueFromDropDown(territory);
    });
};

exports.selectDesiredWorkTypeToSearchFromDropDown = function (workType) {
    it("Select the desired work type to search from drop down " + workType, function () {
        pages.createManualStatement.selectTheDesiredWorkTypeToSearchFromDropDown(workType);
    });
};

exports.fillIntoWorksInputFieldDesiredWork = function (workIdentifier) {
    it("Fill into the works input field desired work value ", function () {
        pages.createManualStatement.fillIntoTheWorksInputFieldDesiredWork(workIdentifier);
    });
};

exports.selectDesiredWorkForManualStatement = function () {
    it("Select the desired work for manual statement ", function () {
        pages.createManualStatement.selectTheDesiredWorkForManualStatement();
        pages.createManualStatement.waitForAjax();
    });
};

exports.selectAndAddWorkForManualStatement = function () {
    it("Select and add the work for manual statement if it doesn't exist", function () {
        pages.createManualStatement.selectAndAddTheWorkForManualStatement();
    });
};

exports.fillIntoAmountReceivedValueWorkIRowJ = function (i, j, amount) {
    it("Fill into the amount received value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheAmountReceivedValueWorkIRowJ(i, j, amount);
    });
};

exports.fillIntoAmountReceivedValue = function (amount) {
    it("Fill into the amount received value " + amount, function () {
        pages.createManualStatement.fillIntoTheAmountReceivedValue(amount);
    });
};

exports.fillIntoSourceValueWorkIRowJ = function (i, j, source) {
    it("Fill into the source field desired value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheSourceValueWorkIRowJ(i, j, source);
    });
};

exports.selectDesiredIncomeTypeWorkIRowJ = function (i, j, incomeType) {
    it("Select the desired income type work number " + i + +" row number " + j, function () {
        pages.createManualStatement.selectTheDesiredIncomeTypeWorkIRowJ(i, j, incomeType);
    });
};

exports.selectDesiredTerritoryWorkIRowJ = function (i, j, territory) {
    it("Select the desired territory work number " + i + +" row number " + j, function () {
        pages.createManualStatement.selectTheDesiredTerritoryWorkIRowJ(i, j, territory);
    });
};

exports.fillIntoYearFromPeriodWorkIRowJ = function (i, j, year) {
    it("Fill into the year from field desired value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheYearFromPeriodWorkIRowJ(i, j, year);
    });
};

exports.selectDesiredMonthFromPeriodWorkIRowJ = function (i, j, month) {
    it("Select the desired month from period work number " + i + +" row number " + j, function () {
        pages.createManualStatement.selectTheDesiredMonthFromPeriodWorkIRowJ(i, j, month);
    });
};

exports.fillIntoYearToPeriodWorkIRowJ = function (i, j, year) {
    it("Fill into the year to field desired value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheYearToPeriodWorkIRowJ(i, j, year);
    });
};

exports.selectDesiredMonthToPeriodWorkIRowJ = function (i, j, month) {
    it("Select the desired month to period work number " + i + +" row number " + j, function () {
        pages.createManualStatement.selectTheDesiredMonthToPeriodWorkIRowJ(i, j, month);
    });
};

exports.fillIntoUnitsWorkIRowJ = function (i, j, unitsNumber) {
    it("Fill into the units number field desired value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheUnitsWorkIRowJ(i, j, unitsNumber);
    });
};

exports.fillIntoProductDetailsWorkIRowJ = function (i, j, productDetails) {
    it("Fill into the product details field desired value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheProductDetailsWorkIRowJ(i, j, productDetails);
    });
};

exports.fillIntoSharePercentWorkIRowJ = function (i, j, sharePercent) {
    it("Fill into the share percent field desired value work number " + i + +" row number " + j, function () {
        pages.createManualStatement.fillIntoTheSharePercentWorkIRowJ(i, j, sharePercent);
    });
};

exports.clickOnDoneButtonManualStatement = function () {
    it("Click on the done button for manual statement ", function () {
        pages.createManualStatement.clickOnTheDoneButtonManualStatement();
        pages.createManualStatement.waitForAjax();
    });
};

exports.returnManualStatementIdNumber = function () {
    it("Return manual statement id number ", function () {
        pages.createManualStatement.elems.manualStatementIdNumber.getText().then(function (promise) {
            console.log("Id number for manual statement is " + promise);
        });
    });
};

exports.selectDesiredFilterRoyaltyPeriodValueDropDown = function (royaltyPeriod) {
    it("Select the desired royalty period value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredFilterRoyaltyPeriod(royaltyPeriod);
        pages.createManualStatement.waitForAjax();
    });
};

exports.clickOnTheManualStatementNumberIFromList = function (i) {
    it("Click on the manual statement number  " + i + " from the list ", function () {
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div[data-ng-class='getStatementStatusClass(statement.status)']")).click();
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group.clearfix:nth-child(1) strong"))));
    });
};

exports.checkDateCreatedTextForStatementNumberIFromList = function (i) {
    it("Check the date created text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group.clearfix:nth-child(1) strong")).getText()
            .then(function (promise) {
                console.log("The date created text for statement is  : " + promise);
                expect(promise).toEqual("Date Created:");
            });
    });
};

exports.checkDateCreatedValueForStatementNumberIFromList = function (i, value) {
    it("Check the date created value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group.clearfix:nth-child(1) div")).getText()
            .then(function (promise) {
                console.log("The date created value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.clickOnBackToStatementViewLink = function () {
    it("Click on the back to the statement view link ", function () {
        pages.createManualStatement.clickOnTheBackToStatementViewLink();
        pages.createManualStatement.waitForAjax();
    });
};

exports.checkStatementDistributionPeriodTextForStatementNumberIFromList = function (i) {
    it("Check the statement distribution period text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group.clearfix:nth-child(2) strong")).getText()
            .then(function (promise) {
                console.log("The statement distribution period text for statement is  : " + promise);
                expect(promise).toEqual("Statement Distribution Period:");
            });
    });
};

exports.checkStatementDistributionPeriodValueForStatementNumberIFromList = function (i, value) {
    it("Check the statement distribution period value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group.clearfix:nth-child(2) div")).getText()
            .then(function (promise) {
                console.log("The statement distribution period value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.checkAccountReferenceTextForStatementNumberIFromList = function (i) {
    it("Check the account reference text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group:nth-child(3) strong")).getText()
            .then(function (promise) {
                console.log("The account reference text for statement is  : " + promise);
                expect(promise).toEqual("Accounts Reference:");
            });
    });
};

exports.checkAccountReferenceValueForStatementNumberIFromList = function (i) {
    it("Check the account reference value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-left.first-column.span5.clearfix div.control-group:nth-child(3) span")).getText()
            .then(function (promise) {
                console.log("The account reference value for statement is  : " + promise);
                expect(promise).toEqual("N/A");
            });
    });
};

exports.checkStatementAmountTextForStatementNumberIFromList = function (i) {
    it("Check the statement amount text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(1) div.control-group.clearfix:nth-child(1) span.pull-left.ng-binding")).getText()
            .then(function (promise) {
                console.log("The statement amount text for statement is  : " + promise);
                expect(promise).toEqual("Statement Amount: (Unconverted, Gross)");
            });
    });
};

exports.checkStatementAmountValueForStatementNumberIFromList = function (i, value) {
    it("Check the statement amount value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(1) div.control-group.clearfix:nth-child(1) div")).getText()
            .then(function (promise) {
                console.log("The statement amount value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.checkExchangeRateTextForStatementNumberIFromList = function (i) {
    it("Check the exchange rate text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(1) div.control-group.clearfix:nth-child(2) strong")).getText()
            .then(function (promise) {
                console.log("The exchange rate text for statement is  : " + promise);
                expect(promise).toEqual("Exchange Rate:");
            });
    });
};

exports.checkExchangeRateValueForStatementNumberIFromList = function (i, value) {
    it("Check the exchange rate value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(1) div.control-group.clearfix:nth-child(2) div")).getText()
            .then(function (promise) {
                console.log("The exchange rate value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};


exports.checkConvertedAmountTextForStatementNumberIFromList = function (i) {
    it("Check the converted amount text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix:nth-child(1) span.pull-left")).getText()
            .then(function (promise) {
                console.log("The converted amount text for statement is  : " + promise);
                expect(promise).toEqual("Converted Amount (Gross):");
            });
    });
};

exports.checkConvertedAmountValueForStatementNumberIFromList = function (i, value) {
    it("Check the converted amount value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix:nth-child(1) div")).getText()
            .then(function (promise) {
                console.log("The converted amount value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.checkCommissionTextForStatementNumberIFromList = function (i) {
    it("Check the commission text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix:nth-child(2) div.pull-left")).getText()
            .then(function (promise) {
                console.log("The commission text for statement is  : " + promise);
                expect(promise).toEqual("Commission:0 %");
            });
    });
};

exports.checkCommissionValueForStatementNumberIFromList = function (i, value) {
    it("Check the commission value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix:nth-child(2) div.pull-right")).getText()
            .then(function (promise) {
                console.log("The commission value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.checkWriteOffAmountTextForStatementNumberIFromList = function (i) {
    it("Check the write off amount text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix:nth-child(3) strong")).getText()
            .then(function (promise) {
                console.log("The write off amount text for statement is  : " + promise);
                expect(promise).toEqual("Write-Off Amount:");
            });
    });
};

exports.checkWriteOffAmountValueForStatementNumberIFromList = function (i, value) {
    it("Check the write off amount value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix:nth-child(3) div.pull-right")).getText()
            .then(function (promise) {
                console.log("The write off amount text for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.checkAmountConvertedNetTextForStatementNumberIFromList = function (i) {
    it("Check the amount converted net text for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix.amount-total:nth-child(4) span.pull-left")).getText()
            .then(function (promise) {
                console.log("The amount converted net text for statement is  : " + promise);
                expect(promise).toEqual("Amount (Converted, Net):");
            });
    });
};

exports.checkAmountConvertedNetValueForStatementNumberIFromList = function (i, value) {
    it("Check the amount converted net value for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div:nth-child(3) div.control-group.clearfix.amount-total:nth-child(4) div.pull-right")).getText()
            .then(function (promise) {
                console.log("The amount converted net value for statement is  : " + promise);
                expect(promise).toEqual(value);
            });
    });
};

exports.checkBatchSummaryForStatementNumberIFromList = function (i, text) {
    it("Check the batch summary for statement number " + i + " from the list", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix div.batch-table.ng-scope")).getText()
            .then(function (promise) {
                console.log("The batch summary for statement is  : " + promise);
                expect(promise).toContain(text);
            });
    });
};

exports.editExpandedManualStatementNumberIFromList = function (i) {
    it("Edit the expanded manual statement number " + i + " from list", function () {
        pages.createManualStatement.editTheExpandedManualStatementNumberIFromList(i);
    });
};

exports.clickOnBatch1LinkManualStatementEditMode = function () {
    it("Click on the batch 1 link to see the details ", function () {
        pages.createManualStatement.clickOnTheBatch1LinkManualStatementEditMode();
    });
};

exports.clickOnAddBatchLinkManualStatementEditMode = function () {
    it("Click on the add batch link to add new batch ", function () {
        pages.createManualStatement.clickOnTheAddBatchLinkManualStatementEditMode();
    });
};

exports.fillIntoBatchAmountDesiredValueNumberI = function (i, value) {
    it("Fill into the batch amount desired value for batch number " + i, function () {
        pages.createManualStatement.fillIntoTheBatchAmountDesiredValueNumberI(i, value);
    });
};

exports.clickOnUseBatch1SettingsCheckBox = function () {
    it("Click on the use batch 1 settings link ", function () {
        pages.createManualStatement.clickOnTheUseBatch1SettingsCheckBox();
    });
};

exports.clickOnClosedBatchCheckBox = function () {
    it("Click on the closed batch check box ", function () {
        pages.createManualStatement.clickOnTheClosedBatchCheckBox();
        pages.createManualStatement.waitForAjax();
    });
};

exports.checkStatusOfTheManualStatementNumberIFromList = function (i, status) {
    it("Check the status of the manual statement number  " + i + " from the list ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div[data-ng-class='getStatementStatusClass(statement.status)']"))));
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div[data-ng-class='getStatementStatusClass(statement.status)']")).getText()
            .then(function (promise) {
                console.log("Status of the manual statement is  " + promise);
                expect(promise).toEqual(status);
            });
    });
};

exports.checkStatusOfTheBatchNumberIManualStatement = function (i, j, status) {
    it("Check the status of the batch for  manual statement number  " + i + " from the list ", function () {
        browser.driver.findElement(By.css("div[data-ng-repeat='statement in statements']:nth-child(" + j + ") div.pull-rigth.second-column.span5.clearfix div.batch-table.ng-scope div[data-ng-repeat='batch in statement.manual_statement.income_statement_batches']:nth-child(" + i + ") span:nth-child(" + (j + 2) + ") span[data-ng-class='batch.status.toLowerCase()']")).getText()
            .then(function (promise) {
                console.log("Status of the batch for manual statement is  " + promise);
                expect(promise).toEqual(status);
            });
    });
};

exports.checkAmountOfTheBatchNumberIManualStatement = function (i, amount) {
    it("Check the amount of the batch for  manual statement number  " + i + " from the list ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.converted-amount.pull-right"))));
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.converted-amount.pull-right")).getText()
            .then(function (promise) {
                console.log("Amount of the batch for manual statement is  " + promise);
                expect(promise).toEqual(amount);
            });
    });
};

exports.clickOnTheViewDetailsOfIncomeLineForStatementNumberIFromList = function (i) {
    it("Click on the view details of income line for  manual statement number  " + i + " from the list ", function () {
        pages.base.scrollIntoView(element(By.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix a[data-ui-sref='royalties.viewIncomeStatementWorks(getIncomeLinesRouteParams(statement))']")));
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='statement in statements']:nth-child(" + i + ") div.pull-rigth.second-column.span5.clearfix a[data-ui-sref='royalties.viewIncomeStatementWorks(getIncomeLinesRouteParams(statement))']")).click();
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("#SUB-VIEWS h1.new-heading.nomargins.ng-binding"))));
    });
};

exports.clickOnIncomeStatementCreatedFromList = function (i) {
    it("Click on the income statement created from list line number " + i, function () {
        pages.base.scrollIntoView(element(by.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ")")));
        browser.driver.findElement(By.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ")")).click();
        browser.wait(ExpectedConditions.visibilityOf(element(by.css("div.accordion div[data-ng-repeat='incomeWork in getIncomeWorks()']:nth-child(" + i + ") div[data-ng-if='incomeWork.matchedWork']"))));
    });
};

exports.reMatchDesiredWorkForIncomeStatementInTheListNumberI = function (workId, i) {
    it("Rematch the desired work for income statement having the work id " + workId + " and the line number " + i + " in the list", function () {
        pages.createManualStatement.clickOnTheRematchButtonLinkForIncomeStatementsLineNumberI(i);
        pages.createManualStatement.selectTheDesiredWorkTypeToSearchFromDropDownIncomeLineI("Work ID", i);
        pages.createManualStatement.fillIntoTheWorksInputFieldDesiredWorkIncomeLineNumberI(workId, i);
        pages.createManualStatement.selectTheDesiredWorkForManualStatementIncomeLineNumberI(i);
    });
};

exports.clickOnRematchButtonLinkForIncomeStatementsLineNumberI = function (i) {
    it("Click on the rematch button link from income statement line number " + i, function () {
        pages.createManualStatement.clickOnTheRematchButtonLinkForIncomeStatementsLineNumberI(i);
    });
};

exports.clickOnMatchButtonLinkForIncomeStatements = function () {
    it("Click on the match button link from income statement ", function () {
        pages.createManualStatement.clickOnTheMatchButtonLinkForIncomeStatements();
        pages.createManualStatement.waitForAjax();
    });
};

exports.clickOnMatchedStatements = function () {
    it("Click on the matched statements tab ", function () {
        pages.createManualStatement.clickOnTheMatchedStatements();
        pages.createManualStatement.waitForAjax();
    });
};


exports.selectDesiredWorkTypeToSearchFromDropDownIncomeLineI = function (type, i) {
    it("Select desired work type to search from drop down income line number " + i, function () {
        pages.createManualStatement.selectTheDesiredWorkTypeToSearchFromDropDownIncomeLineI(type, i);
    });
};

exports.fillIntoWorksInputFieldDesiredWorkIncomeLineNumberI = function (workId, i) {
    it("Fill into the works input field desired work income line number " + i, function () {
        pages.createManualStatement.fillIntoTheWorksInputFieldDesiredWorkIncomeLineNumberI(workId, i);
    });
};

exports.confirmOnMatchWorkOnIncomeLineNumberIAfterIsSelected = function () {
    it("Click on the match work after it is selected on income ", function () {
        pages.createManualStatement.confirmOnTheMatchWorkOnIncomeLineNumberIAfterIsSelected();
        pages.createManualStatement.waitForAjax();
    });
};

exports.selectDesiredFilterRoyaltyPeriodValueDropDownIncomeRates = function (royaltyPeriod) {
    it("Select the desired royalty period value from the drop down ", function () {
        pages.createManualStatement.selectTheDesiredFilterRoyaltyPeriodIncomeRates(royaltyPeriod);
        pages.createManualStatement.waitForAjax();
    });
};


exports.checkValuesInTheIncomeRatesFilteredTable = function (values) {
    it("Check that values are present into the income and rates - royalty income table ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("table.table.royalty-share-distribution-table.royalty-income-table"))));
        browser.driver.findElement(By.css("table.table.royalty-share-distribution-table.royalty-income-table")).getText()
            .then(function (promise) {
                console.log("The table has a lot of values :" + promise);
                expect(promise).toContain(values);
            });
    });
};

exports.selectSpecificStatementIncomeGroupValueDropDown = function (statementIncomeGroup) {
    it("Select specific statement income group value from drop down ", function () {
        pages.createManualStatement.selectTheSpecificStatementIncomeGroupValueDropDown(statementIncomeGroup);
    });
};

exports.selectSpecificStatementIncomeGroupValueDropDownByIndex = function (index) {
    it("Select specific statement income group value from drop down ", function () {
        pages.createManualStatement.selectTheSpecificStatementIncomeGroupValueDropDownByIndex(index);
    });
};

exports.selectSpecificBreakdownDropDownByIndex = function (index) {
    it("Select specific breakdown value from drop down ", function () {
        pages.createManualStatement.selectTheSpecificBreakdownValueDropDownByIndex(index);
    });
};

exports.selectSpecificBreakdownDropDown = function (breakdown) {
    it("Select specific breakdown value from drop down ", function () {
        pages.createManualStatement.selectTheSpecificBreakdownValueDropDown(breakdown);
    });
};

exports.checkNoIncomeHistoryMessageIsDisplayed = function () {
    it("Check that no income history message is displayed ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("table.table.royalty-share-distribution-table.royalty-income-table tbody"))));
        browser.driver.findElement(By.css("table.table.royalty-share-distribution-table.royalty-income-table tbody")).getText()
            .then(function (promise) {
                console.log("The no income history message is  :" + promise);
                expect(promise).toEqual("No income history for the selected Royalty Processing Territory in the selected Royalty Period(s)");
            });
    });
};

exports.checkTheCurrencyDisplayedOnTheScreen = function (currency) {
    it("Check the currency displayed on the screen ", function () {
        browser.wait(ExpectedConditions.visibilityOf(element(By.css("div[data-ng-controller='WorkIncomeController'] div.clearfix.filters-rights div:nth-child(3) p"))));
        browser.driver.findElement(By.css("div[data-ng-controller='WorkIncomeController'] div.clearfix.filters-rights div:nth-child(3) p")).getText()
            .then(function (promise) {
                console.log("The currency displayed on the screen is  :" + promise);
                expect(promise).toEqual(currency);
            });
    });
};

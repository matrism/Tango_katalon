'use strict';

var ExpectedConditions = protractor.ExpectedConditions,
    path = require('path'),
    fs = require('fs-extra'),
    random = require('../helpers/random'),
    tmp = require('tmp'),
    testData = {};

function PageElement(locator) {
    return function() {
        return locator;
    };
};

pages.uploadEdiFile = exports;

exports.processingTerritoryDropdown = function(){ 
    return element(by.model('processingTerritoryModel'));
};

exports.royaltyPeriodDropdown = function () {
    return $('[data-royalty-period-model="ediFile.royalty_period"]');
};

exports.selectProcessingTerritory = function (territoryName) {
    var dropdown = exports.processingTerritoryDropdown();

    return dropdown.click().then(function(){
        dropdown.element(by.cssContainingText('[tg-component-render-template="$templates.popup.item"]', territoryName)).click();
        pages.base.waitForAjax();
    });
};

exports.selectFirstRoyaltyPeriod = function () {
    var dropdown = exports.royaltyPeriodDropdown();

    dropdown.$('button.ng-binding').click();

    pages.base.waitForAjax();
    return dropdown.$$('.dropdown-menu > li > a').first().click();
};

exports.incomeProviderTypeahead = function () {
    return Typeahead(by.model('ediFile.income_provider'));
};

exports.selectIncomeProvider = function (name) {
    var typeahead = exports.incomeProviderTypeahead();

    typeahead.sendKeys(name);

    browser.wait(ExpectedConditions.visibilityOfAny(typeahead.results()));
    typeahead.results(name).first().click();
};

exports.fileFormatDropdown = function () {
    return TgDropdown(by.model('ediFile.file_format'));
};

exports.selectFileFormat = function (name) {
    var dropdown = exports.fileFormatDropdown();

    dropdown.click().then(function(){
        dropdown.results(name).first().click();
    });
};

exports.fileInput = function () {
    return $('.btn.upload-file-button input[type="file"]');
};


function generateTempFile(fileName) {
    testData.tmpDir = tmp.dirSync();
    testData.tempFileName = path.join(testData.tmpDir.name, 'TAT' + random.id() + '.edi');

    fileName = path.resolve(__dirname, fileName);

    fs.copySync(fileName, testData.tempFileName);
    return testData.tempFileName;
}

exports.selectFile = function (fileName) {
    fileName = generateTempFile(fileName);
    exports.fileInput().sendKeys(fileName);
};

exports.statementDistributionPeriodStartYear = function () {
    return element(by.model('ediFile.statement_distribution_period.start.year'));
};

exports.statementDistributionPeriodStartMonth = function () {
    return element(by.model('ediFile.statement_distribution_period.start.month'));
};

exports.statementDistributionPeriodEndYear = function () {
    return element(by.model('ediFile.statement_distribution_period.end.year'));
};

exports.statementDistributionPeriodEndMonth = function () {
    return element(by.model('ediFile.statement_distribution_period.end.month'));
};

exports.setStatementDistributionPeriodStart = function (year, month) {
    var startYear = exports.statementDistributionPeriodStartYear(),
        startMonth = exports.statementDistributionPeriodStartMonth();

    startYear.sendKeys(year);
    startMonth.click().then(function(){
        startMonth.element(by.cssContainingText('option', month)).click();
    });
};

exports.setStatementDistributionPeriodEnd = function (year, month) {
    var endYear = exports.statementDistributionPeriodEndYear(),
        endMonth = exports.statementDistributionPeriodEndMonth();

    endYear.sendKeys(year);
    endMonth.click().then(function(){
        endMonth.element(by.cssContainingText('option', month)).click();
    });
};

exports.expectedFileAmountField = function () {
    return element(by.model('ediFile.expected_file_amount'));
};

exports.setExpectedFileAmount = function (amount) {
    testData.fileAmount = amount;
    exports.expectedFileAmountField().sendKeys(amount);
};

exports.expectedFileAmountCurrencyDropdown = function () {
    return TgDropdown(by.model('ediFile.expected_file_amount_currency'));
};

exports.setExpectedFileAmountCurrency = function (currency) {
    var dropdown = exports.expectedFileAmountCurrencyDropdown();

    dropdown.click().then(function(){
        dropdown.results(currency).first().click();
    });
};

exports.exchangeRateField = function () {
    return element(by.model('ediFile.exchange_rate'));
};

exports.setExchangeRate = function (value) {
    exports.exchangeRateField().sendKeys(value);
};

exports.createButton = function (){
    return $('.upload-edi-file-form button[type=submit]');
};

exports.clickCreateButton = function () {
    var button = exports.createButton();
    expect(button.isEnabled()).toBeTruthy();

    button.click();
};

exports.uploadModal = function () {
    return $('.tg-ui-overlay-message-container');
};

exports.waitForUploadToComplete = function () {
    var modal = exports.uploadModal();

    browser.wait(ExpectedConditions.visibilityOf(modal));
    browser.wait(ExpectedConditions.invisibilityOf(modal));
};

exports.expectToBeRedirectedToFileUploadHistory = function () {
    var uploadHistoryTitle = element(by.cssContainingText('#RECORD-HEADER h1', 'HISTORY OF FILE UPLOAD'));
    pages.base.waitForAjax();

    browser.wait(ExpectedConditions.visibilityOf(uploadHistoryTitle));
    pages.base.waitForAjax();
};

exports.filesRepeater = function () {
    return element.all(by.repeater('file in files'));
};

exports.fileBlindsByFileName = function (filename) {
    var fileBlind = exports.filesRepeater().filter(function(elem){
        var fileNameElement = elem.$('.file-name');

        return fileNameElement.getText().then(function(text){
            return text === filename;
        });
    });

    return fileBlind;
};

exports.expectUploadedFileToBeListed = function () {
    var uploadedFile = path.basename(testData.tempFileName),
        fileBlinds = exports.fileBlindsByFileName(uploadedFile),
        fileBlind;

    browser.wait(ExpectedConditions.visibilityOfAny(fileBlinds));
    expect(fileBlinds.count()).toBe(1);
    testData.fileBlind = fileBlind = fileBlinds.first();
};

function normalizeAmount (amount) {
    var returnAmount = amount.split(',').join('');
    return returnAmount;
}

exports.uploadedFileBlind = function () {
    return exports.fileBlindsByFileName(path.basename(testData.tempFileName)).first();
};

exports.openUploadedFileBlind = function () {
    var fileBlind = exports.uploadedFileBlind();

    fileBlind.$('.accordion-toggle').click();
};

exports.expectUploadedFileToHaveCorrectExpectedAmount = function (amount) {
    var fileBlind = exports.uploadedFileBlind(), amountElem = fileBlind.$('.amount-nr span[data-ng-hide]');

    amount = amount || testData.fileAmount;

    browser.wait(function(){
        return amountElem.getInnerHtml().then(function(text){
            return !!text;
        });
    });

    expect(amountElem.getInnerHtml()).toBe(amount);
};

function checkFileStatus (status) {
    var file = exports.fileBlindsByFileName(path.basename(testData.tempFileName)).first();
    return file.$('.file-status').getText().then(function(text){
        return text === status;
    });
};

exports.waitForFileToBeProcessed = function () {
    browser.wait(function(){
        return browser.refresh().then(function(){
            pages.base.waitForAjax();
            return checkFileStatus('Processed');
        });
    }, 600000)
};

exports.fileReadInAmountElement = function () {
    return exports.uploadedFileBlind().$('.statement-amount');
};

exports.expectFileReadInAmountToBe = function (value) {
    expect(exports.fileReadInAmountElement().getText()).toBe(value);
};

exports.fileGrossAmountElement = function () {
    return exports.uploadedFileBlind().element(by.binding('file.sumStatementsAmount'));
};

exports.fileNetAmountElement = function () {
    return exports.uploadedFileBlind().element(by.exactBinding('file.actual_file_net_amount'));
};

exports.expectFileGrossAmountToBe = function (value) {
    expect(exports.fileGrossAmountElement().getText()).toBe(value);
};

exports.expectFileNetAmountToBe = function (value) {
    expect(exports.fileNetAmountElement().getText()).toBe(value);
};

exports.generatedStatements = function () {
    return exports.uploadedFileBlind().all(by.repeater('statement in file.statements'));
};

exports.openFirstGeneratedStatement = function () {
    exports.generatedStatements().first().$('a').click();
};

exports.switchToTabByIndex = function (index) {
    browser.getAllWindowHandles().then(function (handles) {
        var newWindowHandle = handles[index];
        browser.switchTo().window(newWindowHandle);
    });
};

exports.closeTabByIndex = function (index) {
    exports.switchToTabByIndex(index);
    browser.driver.close();
    exports.switchToTabByIndex(index-1);
};

exports.expectToBeRedirectedToRoyaltyStatements = function () {
    var uploadHistoryTitle = element(by.cssContainingText('#RECORD-HEADER h1', 'ROYALTY STATEMENTS'));
    pages.base.waitForAjax();

    expect($('#RECORD-HEADER h1').getText()).toBe('ROYALTY STATEMENTS');
};

exports.openStatementSummaryByType = function () {
    return element.all(by.repeater('type in statement.income_type_summary.summary_data'));
};

exports.expectSummaryByTypeToBe = function (title, value) {
    var elem = exports.openStatementSummaryByType().first(),
        titleElem = elem.element(by.binding('getIncomeTypeByCode(type.income_type)')),
        valueElem = elem.element(by.binding('type.amount'));

    expect(titleElem.getText()).toBe(title);
    expect(valueElem.getText()).toBe(value);
};

exports.rollBackLink = function () {
    return exports.uploadedFileBlind().element(by.cssContainingText('a', 'Roll Back File'));
};

exports.modalWindow = function () {
    return $('.modal[modal-window]');
};

exports.rollBackUploadedFile = function () {
    var modal = exports.modalWindow();

    exports.rollBackLink().click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(modal));
    expect(modal.$('.modal-header h3').getText()).toBe(' ROLL BACK FILE');
    modal.$('.modal-footer .btn-primary').click();
    pages.base.waitForAjax();
};



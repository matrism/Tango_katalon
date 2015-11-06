'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    random = require('../../../../helpers/random'),
    tmp = require('tmp'),
    ExpectedConditions = protractor.ExpectedConditions,
    testVariables = hash.testVariables,
    fromTestVariable = require('../../../../helpers/fromTestVariable');

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

    browser.wait(function(){
        dropdown.$$('.dropdown-menu > li').count() > 2;
    });

    return dropdown.$$('.dropdown-menu > li > a').first().click();
};

exports.selectWcmCommonFormat = function () {
    return element(by.cssContainingText('.nav-tabs li a', 'WCM Common Format')).click();
};

exports.checkMultipleIncomeProvidersBox = function () {
    return $('.control-group[data-ng-show="ediFile._isWcmCommonFormatTab"] input[type="checkbox"]').click();
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
    var tmpDir = tmp.dirSync();
    testVariables.tempFileName = path.join(tmpDir.name, 'TAT' + random.id() + '.edi');

    fileName = path.resolve(__dirname, fileName);

    fs.copySync(fileName, testVariables.tempFileName);
    return testVariables.tempFileName;
}

exports.selectFile = function (fileName, useOriginalName) {
    if (!useOriginalName) {
        fileName = generateTempFile(fileName);
    }

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
    testVariables.fileAmount = amount;
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

exports.fillUploadEdiFileForm = function (data) {
    steps.uploadEdiFile.selectProcessingTerritory('Chile');

    steps.uploadEdiFile.selectIncomeProvider('FABER MUSIC LTD');
    steps.uploadEdiFile.selectFileFormat('FABER SALES');
    steps.uploadEdiFile.selectFile('../data/fabersales_tiny_TAT.txt');
    steps.uploadEdiFile.setStatementDistributionPeriodStart('2014', '09');
    steps.uploadEdiFile.setStatementDistributionPeriodEnd('2014', '09');
    steps.uploadEdiFile.setExpectedFileAmount(fileAmount);
    steps.uploadEdiFile.setExpectedFileAmountCurrency('GBP');
    steps.uploadEdiFile.setExchangeRate(1);
};

// upload history

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
    var uploadedFile = path.basename(testVariables.tempFileName),
        fileBlinds = exports.fileBlindsByFileName(uploadedFile),
        fileBlind;

    browser.wait(ExpectedConditions.visibilityOfAny(fileBlinds));
    expect(fileBlinds.count()).toBe(1);
    testVariables.fileBlind = fileBlind = fileBlinds.first();
};

function normalizeAmount (amount) {
    var returnAmount = amount.split(',').join('');
    return returnAmount;
}

exports.fileBlindsByUploadedFilename = function () {
    return exports.fileBlindsByFileName(path.basename(testVariables.tempFileName));
};

exports.uploadedFileBlind = function () {
    return exports.fileBlindsByUploadedFilename().first();
};

exports.openUploadedFileBlind = function () {
    var fileBlind = exports.uploadedFileBlind();

    fileBlind.$('.accordion-toggle').click();
};

exports.expectUploadedFileToHaveCorrectExpectedAmount = function (amount) {
    var fileBlind = exports.uploadedFileBlind(), amountElem = fileBlind.$('.amount-nr span[data-ng-hide]');

    amount = amount || testVariables.fileAmount;

    browser.wait(function(){
        return amountElem.getInnerHtml().then(function(text){
            return !!text;
        });
    });

    expect(amountElem.getInnerHtml().then(normalizeAmount)).toBe(amount);
};

function checkFileStatus (statuses) {
    var file = exports.fileBlindsByFileName(path.basename(testVariables.tempFileName)).first();

    if (!_.isArray(statuses)) {
        statuses = [statuses]
    }

    return file.$('.file-status').getText().then(function(text){
        return statuses.indexOf(text) > -1;
    });
};

exports.waitForFileStatusToBe = function () {
    var statuses = _.toArray(arguments);

    console.log('WAIT');
    browser.wait(function(){
        console.log('WAIT2');
        return browser.refresh().then(function(){
            pages.base.waitForAjax();
            return checkFileStatus(statuses);
        });
    }, 600000);
};

exports.waitForFileToBeProcessed = function () {
    exports.waitForFileStatusToBe('Processed');
};

/*exports.waitForFileToBeProcessed = function () {
    browser.wait(function(){
        return browser.refresh().then(function(){
            pages.base.waitForAjax();
            return checkFileStatus('Processed');
        });
    }, 600000);
};*/

exports.fileReadInAmountElement = function () {
    return exports.uploadedFileBlind().$('.statement-amount');
};

exports.expectFileReadInAmountToBe = function (value) {
    expect(exports.fileReadInAmountElement().getText().then(normalizeAmount)).toBe(value);
};

exports.fileGrossAmountElement = function () {
    return exports.uploadedFileBlind().element(by.binding('file.sumStatementsAmount'));
};

exports.fileNetAmountElement = function () {
    return exports.uploadedFileBlind().element(by.exactBinding('file.actual_file_net_amount'));
};

exports.expectFileGrossAmountToBe = function (value) {
    expect(exports.fileGrossAmountElement().getText().then(normalizeAmount)).toBe(value);
};

exports.expectFileNetAmountToBe = function (value) {
    expect(exports.fileNetAmountElement().getText().then(normalizeAmount)).toBe(value);
};

exports.generatedStatements = function () {
    return exports.uploadedFileBlind().all(by.repeater('statement in file.statements'));
};

exports.openFirstGeneratedStatement = function () {
    var statements = exports.generatedStatements();

    browser.wait(ExpectedConditions.visibilityOfAny(statements));
    statements.first().$('a').click();
};

exports.expectNumberOfStatementsToBe = function (num) {
    var statements = exports.generatedStatements();
    expect(statements.count()).toBe(num);
};

exports.expectStatementValuesToBe = function () {
    var args = _.toArray(arguments),
        statements = exports.generatedStatements();

    expect(statements.$$('.pull-right').getText()).toEqual(args);
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
    expect(valueElem.getText().then(normalizeAmount)).toBe(value);
};

exports.expectStatementFieldToBe = function (title, value) {
    var elem = $('.accordion-inner .form-horizontal'),
        titleElem = elem.element(by.cssContainingText('.control-group .pull-left', title)),
        valueElem = titleElem.element(by.xpath('..')).$('.pull-right');

    expect(valueElem.getText().then(normalizeAmount)).toBe(value);
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

exports.editUploadedFile = function () {
    var button = exports.uploadedFileBlind().$('.btn-toggle');
    browser.wait(ExpectedConditions.presenceOf(button));
    return button.click();
};

exports.assumeUploadedFile = function (fileName) {
    testVariables.tempFileName = fileName;
};

exports.uploadedExpectedFileAmountField = function () {
    var field = exports.uploadedFileBlind().element(by.model('file.expected_file_amount'));
    return field;
};

exports.expectUploadedExpectedFileAmountFieldToBeVisible = function () {
    var field = exports.uploadedExpectedFileAmountField();

    expect(field.isDisplayed()).toBeTruthy();
};

exports.expectUploadedExpectedFileAmountFieldToBeHidden = function () {
    var field = exports.uploadedExpectedFileAmountField();

    expect(field.isPresent()).toBe(false);
};

exports.saveButton = function () {
    var button = $('.accordion-body.collapse.in .btn-primary');
    return button;
};

exports.loader = function () {
    return $('.accordion-body.collapse.in .control-buttons .loader');
};

exports.expectSaveButtonToBeDisabled = function () {
    var button = exports.saveButton();
    expect(button.isEnabled()).toBeFalsy();
};

exports.expectSaveButtonToBeEnabled = function () {
    var button = exports.saveButton();
    expect(button.isEnabled()).toBeTruthy();
};

exports.clickSaveButton = function () {
    exports.saveButton().click();
    browser.sleep(200);
    browser.wait(ExpectedConditions.stalenessOf(exports.loader()), 5000);
};

exports.changeUploadedExpectedFileAmountField = function (value) {
    var field = exports.uploadedExpectedFileAmountField();

    field.clear();
    field.sendKeys(value);
};

exports.cancelLink = function () {
    var link = element(by.cssContainingText('.accordion-body.collapse.in .control-buttons a', 'Cancel'));
    return link;
};

exports.clickCancelLink = function () {
    return exports.cancelLink().click();
};

exports.unsavedStatementModal = function () {
    pages.base.waitUntilModalAnimationFinishes();
    return $('.modal');
};

exports.expectUnsavedStatementModalToBeVisible = function () {
    var modal = exports.unsavedStatementModal();

    browser.wait(ExpectedConditions.visibilityOf(modal));
    expect(modal.$('.modal-header h3').getText()).toBe(' UNSAVED STATEMENT');
};

exports.continueEditingLink = function () {
    var modal = exports.unsavedStatementModal();

    return modal.element(by.cssContainingText('.btn-link', 'Continue Editing'));
};

exports.clickContinueEditingLink = function () {
    return exports.continueEditingLink().click();
};

exports.confirmCancellationButton = function () {
    var modal = exports.unsavedStatementModal();
    return modal.$('.btn-primary');
};

exports.clickConfirmCancellationButton = function () {
    var button = exports.confirmCancellationButton();
    return button.click();
};

exports.editStatement = function () {
    return $('.edit-state-toggler .btn-toggle').click();
};

exports.accountsReferenceField = function () {
    return element(by.model('statement.account_reference'));
};

exports.changeAccountsReferenceField = function (val) {
    var field = exports.accountsReferenceField();
    field.clear();
    field.sendKeys(val);
};

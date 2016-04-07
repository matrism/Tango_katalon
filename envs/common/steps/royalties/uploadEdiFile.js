'use strict';

var pageStep = require('../../../../helpers/basicPageStep'),
    noUpload = systemConfig.noUpload;

steps.uploadEdiFile = exports;

pageStep([
    'Select Processing Territory',
    'Select royalty period',
    'Select first royalty period',
    'Select royalty period',
    'Select Wcm Common Format',
    'Check multiple income providers box',
    'Select income provider',
    'Select file format',
    'Select file',
    'Set statement distribution period start',
    'Set statement distribution period end',
    'Set expected file amount',
    'Set expected file amount currency',
    'Set exchange rate',
    'Click Create button',
    'Wait for upload to complete',
    'Expect to be redirected to File Upload History',
    'Expect uploaded file to be listed',
    'Open uploaded file blind',
    'Expect uploaded file to have correct expected amount',
    'Wait for file to be processed',
    'Wait for file status to be',
    'Expect File Read in Amount to be',
    'Expect File Gross Amount to be',
    'Expect File Net Amount to be',
    'Open first generated statement',
    'Expect number of statements to be',
    'Expect statement values to be',
    'Switch to tab by index',
    'Close tab by index',
    'Expect to be redirected to Royalty Statements',
    'Expect Summary By Type to be',
    'Expect Statement field to be',
    'Roll back uploaded file',
    'Expect modal window to be visible',
    'Edit uploaded file',
    'Assume uploaded file',
    'Expect uploaded expected file amount field to be visible',
    'Expect uploaded expected file amount field to be hidden',
    'Expect save button to be disabled',
    'Expect save button to be enabled',
    'Click Save button',
    'Change uploaded expected file amount field',
    'Click Cancel link',
    'Expect unsaved statement modal to be visible',
    'Click continue editing link',
    'Click confirm cancellation button',
    'Expect file errors to contain',

    'Edit statement',
    'Change accounts reference field'
]);

function goToUploadPage() {
    steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');

    if (!noUpload){
        steps.royaltiesHeader.clickLink('Upload Electronic File');
    }
}

exports.goToUploadPage = goToUploadPage;

exports.uploadFile = fileData => {
    var _ = require('lodash'),
        path = require('path'),
        using = fnutils.using,
        fileDefaults,
        originalTimeout,
        PROCESSING_TIMEOUT = 60 * 60 * 1000;

    function setTestTimeout(time) {
        beforeEach(function(){
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = time;
        });

        afterEach(function(){
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    }

    fileDefaults = {
        currency: 'GBP',
        exchangeRate: '1',
        distributionPeriod: {
            start: {
                year: '2014',
                month: '02'
            },
            end: {
                year: '2014',
                month: '02'
            }
        }
    };



    function fillFormWithFileData(file, fileDefaults, clickCreate, useOriginalName) {
        if (fileDefaults) {
            file = _.defaultsDeep(file, fileDefaults);
        }

        file.fileName = path.resolve(__dirname, '../../features/royalties/', file.fileName);

        using(steps.uploadEdiFile, function() {
            file.expectedAmount = file.expectedAmount || file.amount;

            if (noUpload) {
                file.name = file.mockedFileName;
                this.assumeUploadedFile(file.name);
                this.selectProcessingTerritory(file.processingTerritory);
                steps.royaltyStatements.selectRoyaltyPeriod(file.royaltyPeriod);

                return;
            }

            if (file.customFormat === false) {
                this.selectWcmCommonFormat();
            }

            if (file.multipleProviders) {
                this.checkMultipleIncomeProvidersBox();
            } else {
                this.selectIncomeProvider(file.incomeProvider);
                this.setStatementDistributionPeriodStart(file.distributionPeriod.start.year, file.distributionPeriod.start.month);
                this.setStatementDistributionPeriodEnd(file.distributionPeriod.end.year, file.distributionPeriod.end.month);
            }

            this.selectProcessingTerritory(file.processingTerritory);

            if (file.royaltyPeriod) {
                this.selectRoyaltyPeriod(file.royaltyPeriod);
            }

            this.selectFileFormat(file.fileFormat);
            this.selectFile(file.fileName, useOriginalName);

            this.setExpectedFileAmount(file.expectedAmount);
            this.setExpectedFileAmountCurrency(file.currency);
            this.setExchangeRate(file.exchangeRate);

            if (clickCreate !== false) { 
                this.clickCreateButton();
            }
        });
    }

    function waitForFileStatusToBe() {
        steps.uploadEdiFile.waitForFileStatusToBe.apply(null, arguments);
    }

    function waitForFileToBeProcessed() {
        if (noUpload) { return; }

        steps.uploadEdiFile.waitForFileToBeProcessed();
    }

    setTestTimeout(PROCESSING_TIMEOUT);

    goToUploadPage();
    using(steps.uploadEdiFile, function(){

        fillFormWithFileData(fileData, fileDefaults);
        this.expectToBeRedirectedToFileUploadHistory();
        this.expectUploadedFileToBeListed();
        this.openUploadedFileBlind();

        this.expectUploadedFileToHaveCorrectExpectedAmount(fileData.amount);
        waitForFileToBeProcessed();
    });
};

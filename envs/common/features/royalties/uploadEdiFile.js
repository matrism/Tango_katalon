'use strict';

var using = require('../../../../helpers/fnutils').using,
    _ = require('lodash'),
    path = require('path'),
    noUpload = systemConfig.noUpload,
    fileDefaults;

exports.commonFeatureTags = ['royaltyProcessing', 'smokeTest', 'broken', 'unstable'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.breakageDescription = (
    'Though only unstable, this test takes a long time to run and may hang ' +
    'indefinitely waiting for files to be processed. This affects smoke ' +
    'test runs, so it\'s tagged broken to be skipped until it\'s stable ' +
    '(fixed). Tracking issue: TAT-461.'
);

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

function goToUploadPage() {
    steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');

    if (!noUpload){
        steps.base.clickElement('Upload Electronic File', $('[data-ui-sref="royalties.uploadEdiFile"]'));
    }
}

function fillFormWithFileData(file, clickCreate) {
    file = _.defaultsDeep(file, fileDefaults);
    file.fileName = path.resolve(__dirname, file.fileName)

    using(steps.uploadEdiFile, function() {
        file.expectedAmount = file.expectedAmount || file.amount;

        if (noUpload) {
            file.name = file.mockedFileName;
            this.assumeUploadedFile(file.name);
            this.selectProcessingTerritory(file.processingTerritory);

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
        //this.selectProcessingTerritory(file.royaltyPeriod);
        this.selectFileFormat(file.fileFormat);
        this.selectFile(file.fileName);

        this.setExpectedFileAmount(file.amount);
        this.setExpectedFileAmountCurrency(file.currency);
        this.setExchangeRate(file.exchangeRate);

        if (clickCreate !== false) { 
            this.clickCreateButton();
        };
    });
}

function waitForFileStatusToBe() {
    //if (noUpload) { return };

    steps.uploadEdiFile.waitForFileStatusToBe.apply(this, arguments);
}

function waitForFileToBeProcessed() {
    if (noUpload) { return };

    steps.uploadEdiFile.waitForFileToBeProcessed();
}

exports.feature = [
    {
        name: 'Upload EDI file - Smoke Test',
        tags: ['uploadEDIFile', 'smokeTest', 'uploadEDIFileSmoke'],
        steps: function() {
            var file = {
                    "processingTerritory": "Chile",
                    "incomeProvider": "FABER MUSIC LTD",
                    "fileFormat": "FABER SALES",
                    "fileName": "./data/fabersales_tiny_TAT.txt",
                    "mockedFileName": "TAT501445970278941.edi",
                    "amount": "2044.9100",
                    "currency": "GBP",
                    "summaryByType": {
                        "Folio Sales": "2,044.9100"
                    }
                };

            goToUploadPage();
            using(steps.uploadEdiFile, function(){

                fillFormWithFileData(file);
                this.expectToBeRedirectedToFileUploadHistory();
                this.expectUploadedFileToBeListed();
                this.openUploadedFileBlind();

                this.expectUploadedFileToHaveCorrectExpectedAmount(file.amount);
                waitForFileToBeProcessed();

                this.expectFileReadInAmountToBe(file.amount + ' GBP');
                if (!noUpload) { this.openUploadedFileBlind(); }
                this.expectFileGrossAmountToBe(file.amount);
                this.expectFileNetAmountToBe(file.amount);

                this.openFirstGeneratedStatement();
                steps.base.switchToTab(1);
                this.expectToBeRedirectedToRoyaltyStatements();
                this.expectSummaryByTypeToBe('Folio Sales', file.amount);
                steps.base.closeTabByIndex(1);

                this.rollBackUploadedFile();
            });

        },
    },
    {
        name: 'Upload EDI file - Sanity Test',
        tags: ['uploadEDIFile', 'sanityTest', 'uploadEDIFileSanity'],
        steps: function(){
            var files = require('./data/ediFileSanity.json'),
                incomeProviders;

            incomeProviders = {
                'OSA': {
                    name: 'OSA',
                    requiredFileType: 'CISAC F2',
                    requiredInboundIncomeType: '21'
                },

                'FOX': {
                    name: 'FOX',
                    requiredFileType: 'HARRY FOX',
                    requiredInboundIncomeType: 'MECHANICALMC'
                }
            };

            xdescribe('Load a file - Custom Format - OSA', function(){
                goToUploadPage();
                using(steps.uploadEdiFile, function(){
                    var file = files[0];

                    fillFormWithFileData(file);

                    this.expectToBeRedirectedToFileUploadHistory();

                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.amount);
                    waitForFileToBeProcessed();

                    this.expectFileReadInAmountToBe(file.amount + ' ' + file.currency);
                    if (!noUpload) { this.openUploadedFileBlind(); }
                    this.expectFileGrossAmountToBe(file.amount);
                    this.expectFileNetAmountToBe(file.amount);

                    this.openFirstGeneratedStatement();
                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    this.expectStatementFieldToBe('Statement Distribution Period', '2014-02 to 2014-02');
                    this.expectStatementFieldToBe('Exchange Rate', '1 CZK to 1 CZK');
                    this.expectStatementFieldToBe('Statement Amount', '42.3900 CZK');
                    this.expectSummaryByTypeToBe('Digital Mechanical', file.amount);
                    steps.base.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });
            });

            xdescribe('Load a file - Custom Format - FOX', function(){
                goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[1];

                    fillFormWithFileData(file);

                    this.expectToBeRedirectedToFileUploadHistory();

                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.amount);
                    waitForFileToBeProcessed();

                    this.expectFileReadInAmountToBe(file.amount + ' ' + file.currency);

                    if (!noUpload) { this.openUploadedFileBlind(); }

                    this.expectFileGrossAmountToBe(file.amount);
                    this.expectFileNetAmountToBe(file.amount);

                    this.openFirstGeneratedStatement();
                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    this.expectStatementFieldToBe('Statement Distribution Period', '2014-02 to 2014-02');
                    this.expectStatementFieldToBe('Exchange Rate', '1 USD to 1 USD');
                    this.expectStatementFieldToBe('Statement Amount', '1.1900 USD');
                    this.expectSummaryByTypeToBe('Others', file.amount);
                    steps.base.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });

            });

            xdescribe('Load a file - Multiple Providers', function() {
                goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[2];

                    fillFormWithFileData(file);

                    this.expectToBeRedirectedToFileUploadHistory();
                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.expectedAmount);
                    waitForFileToBeProcessed();

                    this.expectFileReadInAmountToBe(file.amount + ' ' + file.currency);

                    if (!noUpload) { this.openUploadedFileBlind(); }

                    this.expectNumberOfStatementsToBe(2);
                    this.expectStatementValuesToBe('99.5900', '6,241.5200');
                    this.expectFileGrossAmountToBe(file.amount);
                    this.expectFileNetAmountToBe(file.amount);

                    this.editUploadedFile();
                    this.expectUploadedExpectedFileAmountFieldToBeVisible();
                    this.expectSaveButtonToBeDisabled();
                    this.changeUploadedExpectedFileAmountField(100);
                    this.expectSaveButtonToBeEnabled();
                    this.clickCancelLink();

                    this.expectUnsavedStatementModalToBeVisible();
                    this.clickContinueEditingLink();
                    this.expectUploadedExpectedFileAmountFieldToBeVisible();
                    this.clickCancelLink();
                    this.expectUnsavedStatementModalToBeVisible();
                    this.clickConfirmCancellationButton();

                    this.editUploadedFile();
                    this.expectUploadedExpectedFileAmountFieldToBeVisible();
                    this.expectSaveButtonToBeDisabled();
                    this.changeUploadedExpectedFileAmountField(100);
                    this.expectSaveButtonToBeEnabled();
                    this.clickSaveButton();

                    this.openFirstGeneratedStatement();
                    //steps.base.sleep(10000);
                    steps.base.switchToTab(1);

                    // STATEMENT
                    this.expectToBeRedirectedToRoyaltyStatements();

                    this.expectStatementFieldToBe('Statement Format', 'COMMON XLS');
                    this.expectStatementFieldToBe('Statement Distribution Period', '2014-02 to 2014-02');
                    this.expectStatementFieldToBe('File Name', file.name + '   1 of 2');
                    this.expectStatementFieldToBe('Exchange Rate', '1 EUR to 1 EUR');
                    this.expectStatementFieldToBe('Statement Amount', '99.5900 EUR');
                    this.expectStatementFieldToBe('Converted Amount', '99.5900  EUR');

                    this.expectStatementFieldToBe('Blackbox Amount', '0.0000  EUR');
                    this.expectStatementFieldToBe('Commission', '- 0.0000  EUR');
                    this.expectStatementFieldToBe('Write-Off Amount', '- 0.0000  EUR');
                    this.expectStatementFieldToBe('Amount (Converted, Net)', '= 99.5900  EUR');
                    this.expectSummaryByTypeToBe('Third Party Print', '99.5900');

                    this.editStatement();
                    this.expectSaveButtonToBeDisabled();
                    this.changeAccountsReferenceField('TEST');
                    this.expectSaveButtonToBeEnabled();
                    this.clickCancelLink();
                    this.expectUnsavedStatementModalToBeVisible();
                    this.clickContinueEditingLink();

                    this.clickCancelLink();
                    this.expectUnsavedStatementModalToBeVisible();
                    this.clickConfirmCancellationButton();
                    this.editStatement();
                    this.changeAccountsReferenceField('TEST');
                    this.clickSaveButton();

                    steps.base.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });
            });

            describe('Identify files when income type mappings are added/updated', function(){
                goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[0],
                        org = incomeProviders.OSA;

                    fillFormWithFileData(file, false);
                    steps.base.duplicateTab();
                    steps.base.switchToTab(1);

                    //check mappings
                    using(steps.mainHeader.search, function (){
                        this.selectEntityType('Organisation');
                        this.enterTerms(org.name);
                        this.selectResultByIndex(0);
                    });

                    using(steps.organisation.incomeProvider, function(){
                        this.editSection();

                        this.checkOrAddIncomeFileType(org.requiredFileType);
                        this.incomeTypeMapping.addIfNoneMatch({ inboundIncomeType: org.requiredInboundIncomeType }, {
                            inboundIncomeType: org.requiredInboundIncomeType,
                            description: 'TAT INCOME TYPE TEST',
                            fileType: org.requiredFileType,
                            internalIncomeType: 'Mechanical'
                        });

                        this.expectIncomeTypeMappingsToBeValid();
                        this.incomeTypeMapping.makeIncomeTypeMappingBeInvalid(org.requiredInboundIncomeType);
                        this.saveSection();
                    });

                    //Income Mapping Updating
                    //Income Type Mapping Error

                    steps.base.switchToTab(0);

                    if (!noUpload) {
                        this.clickCreateButton();
                    }

                    this.expectToBeRedirectedToFileUploadHistory();

                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    waitForFileStatusToBe('Income Type Mapping Error');

                    if (!noUpload) { this.openUploadedFileBlind(); }

                    steps.base.switchToTab(1);
                    using(steps.organisation.incomeProvider, function(){
                        this.editSection();

                        this.incomeTypeMapping.makeIncomeTypeMappingBeValid(org.requiredInboundIncomeType);
                        this.saveSection();
                    });

                    //this.rollBackUploadedFile();
                });
            });


            xdescribe('Check Income Type Mappings for OSA', function(){
                var org = incomeProviders.OSA;

                using(steps.mainHeader.search, function (){
                    this.selectEntityType('Organisation');
                    this.enterTerms(org.name);
                    this.selectResultByIndex(0);
                });

                using(steps.organisation.incomeProvider, function(){
                    this.editSection();

                    this.checkOrAddIncomeFileType(org.requiredFileTypes);
                    this.incomeTypeMapping.addIfNoneMatch({ inboundIncomeType: org.requiredInboundIncomeType }, {
                        inboundIncomeType: org.requiredInboundIncomeType,
                        description: 'TAT INCOME TYPE TEST',
                        fileType: org.requiredFileType,
                        internalIncomeType: 'Mechanical'
                    });

                    this.expectIncomeTypeMappingsToBeValid();
                    this.saveSection();
                });
            });

            //goToUploadPage();

            xdescribe('Check Income Type Mappings for FOX', function(){
                var org = incomeProviders.FOX;

                using(steps.mainHeader.search, function (){
                    this.selectEntityType('Organisation');
                    this.enterTerms(org.name);
                    this.selectResultByIndex(0);
                });

                using(steps.organisation.incomeProvider, function(){
                    this.editSection();

                    this.checkOrAddIncomeFileType(org.requiredFileTypes);
                    this.incomeTypeMapping.addIfNoneMatch({ inboundIncomeType: org.requiredInboundIncomeType }, {
                        inboundIncomeType: org.requiredInboundIncomeType,
                        description: 'TAT INCOME TYPE TEST',
                        fileType: org.requiredFileType,
                        internalIncomeType: 'Mechanical'
                    });

                    this.expectIncomeTypeMappingsToBeValid();
                    this.saveSection();
                });
            });

            // inspect income provider, MECHANICALMC, Mechanical

            //goToUploadPage();

            xdescribe('View/List/Filter Statement headers', function(){
                steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');

                using(steps.royaltyStatements, function(){
                    steps.uploadEdiFile.selectProcessingTerritory('United States');

                    this.selectFirstRoyaltyPeriod();
                    this.expectStatementListToBePopulated();

                    this.filters.selectType('EDI');
                    this.expectAllVisibleStatementsToHaveType('EDI');
                    this.filters.selectType('Manual');
                    this.expectAllVisibleStatementsToHaveType('MANUAL');
                    this.storeFirstStatementId();
                    this.storeIncomeProviders();

                    this.filters.expectDisabledFiltersToBe(0);
                    this.filters.filterByFirstStatementId();
                    this.filters.expectDisabledFiltersToBe(4);
                    this.expectNumberOfVisibleStatementsToBe(1);

                    this.filters.clearIdFilter();

                    this.filters.filterByKnownIncomeProviders();
                    this.expectNumberOfVisibleStatementsToBeAtLeast(2);
                    this.expectAllVisibleStatementsToHaveType('MANUAL');
                });
            });

        }
    }
];

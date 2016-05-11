'use strict';

var using = require('../../../../helpers/fnutils').using,
    noUpload = systemConfig.noUpload,
    _ = require('lodash'),
    YAML = require('yamljs');

exports.commonFeatureTags = ['royaltyProcessing'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Upload EDI file - Smoke Test',
        tags: ['uploadEDIFile', 'smokeTest', 'uploadEDIFileSmoke'],
        steps: function() {
            var file = {
                    processingTerritory: 'Chile',
                    incomeProvider: 'FABER MUSIC LTD',
                    fileFormat: 'FABER SALES',
                    fileName: './data/fabersales_tiny_TAT.txt',
                    mockedFileName: 'TAT501445970278941.edi',
                    amount: '2044.9100',
                    currency: 'GBP',
                    summaryByType: {
                        'Folio Sales': '2,044.9100'
                    }
                };

            steps.uploadEdiFile.uploadFile(file);
        },
    },
    {
        name: 'Upload EDI file - Sanity Test',
        tags: ['uploadEDIFile', 'sanityTest', 'uploadEDIFileSanity'],
        steps: function(){
            var files = YAML.load(path.resolve(__dirname, './data/ediFileSanity.yml')),
                incomeProviders;

            incomeProviders = {
                TATIP: {
                    name: 'TATIP',
                    requiredFileType: 'CISAC F2',
                    requiredInboundIncomeType: '21'
                }
            };

            //setTestTimeout(PROCESSING_TIMEOUT);

            describe('Load a file - Custom Format - OSA', function(){
                steps.uploadEdiFile.goToUploadPage();
                using(steps.uploadEdiFile, function(){
                    var file = files[0];

                    steps.uploadEdiFile.uploadFile(file);

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

            describe('Load a file - Custom Format - FOX', function(){

                //steps.uploadEdiFile.goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[1];

                    steps.uploadEdiFile.uploadFile(file);

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

            describe('Load a file - Multiple Providers', function() {
                //steps.uploadEdiFile.goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[2];

                    steps.uploadEdiFile.uploadFile(file);

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
                    this.expectStatementFieldToBe('Statement Distribution Period', '2013-01 to 2013-06');
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

                setTestTimeout(PROCESSING_TIMEOUT);
                using(steps.uploadEdiFile, function(){
                    var file = files[0],
                        org = incomeProviders.TATIP;

                    /*fillFormWithFileData(file, false);
                    steps.base.duplicateTab();
                    steps.base.switchToTab(1);*/

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

                    //steps.base.switchToTab(0);
                    steps.uploadEdiFile.goToUploadPage();
                    fillFormWithFileData(file, fileDefaults);

                    /*if (!noUpload) {
                        this.clickCreateButton();
                    }*/

                    this.expectToBeRedirectedToFileUploadHistory();

                    this.expectUploadedFileToBeListed();

                    waitForFileStatusToBe('Income Type Mapping Error');

                    this.openUploadedFileBlind();
                    this.expectFileErrorsToContain('Invalid income type \'21\' for statement');
                    this.openFirstGeneratedStatement();

                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    this.expectSummaryByTypeToBe('Unmapped Income Type', file.amount);
                    steps.base.closeTabByIndex(1);

                    //steps.base.switchToTab(1);

                    using(steps.mainHeader.search, function (){
                        this.selectEntityType('Organisation');
                        this.enterTerms(org.name);
                        this.selectResultByIndex(0);
                    });

                    using(steps.organisation.incomeProvider, function(){
                        this.editSection();

                        this.incomeTypeMapping.makeIncomeTypeMappingBeValid(org.requiredInboundIncomeType);
                        this.saveSection();
                    });

                    steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');

                    this.expectToBeRedirectedToFileUploadHistory();

                    this.expectUploadedFileToBeListed();
                    waitForFileToBeProcessed();
                    this.openUploadedFileBlind();
                    this.openFirstGeneratedStatement();

                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    this.expectSummaryByTypeToBe('Digital Mechanical', file.amount);
                    steps.base.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });
            });

            describe('View/List/Filter Statement headers', function(){
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
    },
    {
        name: 'Upload multiple EDI files',
        tags: ['uploadMultipleEDIFiles', 'utility'],
        steps: function() {
            var files;

            function readFilesFromExcel(dataFile) {
                var xlsx = require('xlsx'),
                    workbook = xlsx.readFileSync(path.resolve(__dirname, dataFile)),
                    sheet = workbook.Sheets[workbook.SheetNames[0]],
                    files = xlsx.utils.sheet_to_json(sheet);

                function parsePeriod(periodStr) {
                    var period = periodStr.split('-');

                    return {
                        year: period[0],
                        month: period[1]
                    }
                }

                files.forEach(function(item){
                    item.distributionPeriod = {
                        start: parsePeriod(item.distributionPeriodStart),
                        end: parsePeriod(item.distributionPeriodEnd)
                    }
                });

                return files;
            }

            function fillFormWithFileData(file, fileDefaults, clickCreate, useOriginalName) {
                if (fileDefaults) {
                    file = _.defaultsDeep(file, fileDefaults);
                }

                file.fileName = path.resolve(__dirname, file.fileName);

                using(steps.uploadEdiFile, function() {
                    file.expectedAmount = file.expectedAmount || file.amount;

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
                    this.selectFile(file.fileName, useOriginalName);

                    this.setExpectedFileAmount(file.expectedAmount);
                    this.setExpectedFileAmountCurrency(file.currency);
                    this.setExchangeRate(file.exchangeRate);

                    if (clickCreate !== false) { 
                        this.clickCreateButton();
                    }
                });
            }

            function parsePeriod(periodStr) {
                var period = periodStr.split('-');

                return {
                    year: period[0],
                    month: period[1]
                }
            }

            function downloadS3Dir(dirname, doneFn) {
                var s3 = require('s3'),
                    tmp = require('tmp'),
                    tmpDir = tmp.dirSync(),
                    client = s3.createClient({
                        s3Options: {
                            accessKeyId: 'AKIAJLYXFFIIDM7HB37Q',
                            secretAccessKey: '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'
                        }
                    }),
                    downloader;

                    downloader = client.downloadDir({
                        localDir: tmpDir.name,
                        s3Params: {
                            Bucket: 'wcm-tango-testdatafiles',
                            Key: dirname
                        }
                    });
                doneFn = doneFn || function(){};

                function log() {
                    var msg = _.toArray(arguments).join(' ');
                    process.stdout.write(msg);
                }

                downloader.on('error', function(err) {
                    console.error('Unable to download:', err.stack);
                });

                downloader.on('progress', function() {
                    var prog = downloader.progressAmount,
                        total = downloader.progressTotal;

                    if (downloader.progressTotal) {
                        var pct = Math.ceil((prog/total * 100)) + '%';

                        process.stdout.clearLine();
                        process.stdout.cursorTo(0);
                        log('Downloading files from S3...', pct);
                    }

                });

                downloader.on('end', function() {
                    log('\n');
                    console.log('Done.');

                    files = readFilesFromExcel(path.resolve(tmpDir.name, dirname, 'files.xlsx'));
                    console.log('Found metadata for', files.length, 'files.');
                    doneFn();
                });
            }

            it('Download files from S3', function(done){
                downloadS3Dir('TAT', done);
            });

            it('Upload files', function(){
                _.each(files, function(file){
                    pages.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');
                    pages.base.waitForAjax();
                    pages.base.clickElement('Upload Electronic File', $('[data-ui-sref="royalties.uploadEdiFile"]'));
                    pages.base.waitForAjax();

                    fillFormWithFileData(file, undefined, true, true);
                    pages.uploadEdiFile.expectToBeRedirectedToFileUploadHistory();
                });
            });

        }
    }
];

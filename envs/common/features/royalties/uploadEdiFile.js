'use strict';

var using = require('../../../../helpers/fnutils').using,
    _ = require('lodash');

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

exports.feature = [
    {
        name: 'Upload EDI file - Smoke Test',
        tags: ['uploadEDIFile', 'smokeTest', 'uploadEDIFileSmoke'],
        steps: function() {
            var fileAmount = '2,044.9100';

            steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');
            steps.base.clickElement('Upload Electronic File', $('[data-ui-sref="royalties.uploadEdiFile"]'));

            using(steps.uploadEdiFile, function(){
                this.selectProcessingTerritory('Chile');
                this.selectIncomeProvider('FABER MUSIC LTD');
                this.selectFileFormat('FABER SALES');
                this.selectFile('../data/fabersales_tiny_TAT.txt');
                this.setStatementDistributionPeriodStart('2014', '09');
                this.setStatementDistributionPeriodEnd('2014', '09');
                this.setExpectedFileAmount(fileAmount);
                this.setExpectedFileAmountCurrency('GBP');
                this.setExchangeRate(1);
                this.clickCreateButton();

                this.expectToBeRedirectedToFileUploadHistory();
                this.expectUploadedFileToBeListed();
                this.openUploadedFileBlind();

                this.expectUploadedFileToHaveCorrectExpectedAmount(fileAmount);
                this.waitForFileToBeProcessed();

                this.expectFileReadInAmountToBe(fileAmount + ' GBP');
                this.openUploadedFileBlind();
                this.expectFileGrossAmountToBe(fileAmount);
                this.expectFileNetAmountToBe(fileAmount);

                this.openFirstGeneratedStatement();
                steps.base.switchToTab(1);
                this.expectToBeRedirectedToRoyaltyStatements();
                this.expectSummaryByTypeToBe('Folio Sales', fileAmount);
                steps.base.closeTabByIndex(1);

                this.rollBackUploadedFile();
            });

        },
    },
    {
        name: 'Upload EDI file - Sanity Test',
        tags: ['uploadEDIFile', 'sanityTest', 'uploadEDIFileSanity'],
        steps: function(){
            var files = require('../data/ediFileSanity.json'),
                incomeProviders,
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

            files = _.map(files, function(item){
                return _.defaultsDeep(item, fileDefaults);
            });

            incomeProviders = {
                'OSA': {
                    name: 'OSA',
                    requiredFileType: 'CISAC F2',
                    requiredInboundIncomeType: '20'
                },

                'FOX': {
                    name: 'FOX',
                    requiredFileType: 'HARRY FOX',
                    requiredInboundIncomeType: 'MECHANICALMC'
                }
            };

            function goToUploadPage() {
                steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');
                //steps.base.clickElement('Upload Electronic File', $('[data-ui-sref="royalties.uploadEdiFile"]'));
            }

            function fillFormWithFileData(file) {
                using(steps.uploadEdiFile, function() {
                    if (file.customFormat === false) {
                        this.selectWcmCommonFormat();

                        if (file.multipleProviders) {
                            this.checkMultipleIncomeProvidersBox();
                        }
                    }

                    this.selectProcessingTerritory(file.processingTerritory);
                    //this.selectProcessingTerritory(file.royaltyPeriod);
                    this.selectIncomeProvider(file.incomeProvider);
                    this.selectFileFormat(file.fileFormat);
                    this.selectFile(file.fileName);
                    this.setStatementDistributionPeriodStart(file.distributionPeriod.start.year, file.distributionPeriod.start.month);
                    this.setStatementDistributionPeriodEnd(file.distributionPeriod.end.year, file.distributionPeriod.end.month);
                    this.setExpectedFileAmount(file.amount);
                    this.setExpectedFileAmountCurrency(file.currency);
                    this.setExchangeRate(file.exchangeRate);
                });
            }

            describe('Load a file - Custom Format - OSA', function(){
                goToUploadPage();
                using(steps.uploadEdiFile, function(){
                    var file = files[0];

                /* MOCKING */
                    //fillFormWithFileData(file);
                    //this.clickCreateButton();

                    this.selectProcessingTerritory(file.processingTerritory);
                    file.expectedAmount = file.expectedAmount || file.amount;

                    file.name = 'TAT5771445229874713.edi';
                    this.assumeUploadedFile(file.name);

                    //this.expectToBeRedirectedToFileUploadHistory();

                /* END MOCKING */
                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.amount);
                    //this.waitForFileToBeProcessed();

                    this.expectFileReadInAmountToBe(file.amount + ' ' + file.currency);
                    //this.openUploadedFileBlind();
                    this.expectFileGrossAmountToBe(file.amount);
                    this.expectFileNetAmountToBe(file.amount);

                    this.openFirstGeneratedStatement();
                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    this.expectStatementFieldToBe('Statement Distribution Period', '2014-02 to 2014-02');
                    this.expectStatementFieldToBe('Exchange Rate', '1 CZK to 1 CZK');
                    this.expectStatementFieldToBe('Statement Amount', '42.3900 CZK');
                    this.expectSummaryByTypeToBe('Digital Mechanical', file.amount);
                    this.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });
            });

            describe('Load a file - Custom Format - FOX', function(){
                goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[1];

                /* MOCKING */
                    //fillFormWithFileData(file);
                    //this.clickCreateButton();

                    this.selectProcessingTerritory(file.processingTerritory);
                    file.expectedAmount = file.expectedAmount || file.amount;

                    file.name = 'TAT8741445259285502.edi';
                    this.assumeUploadedFile(file.name);

                    //this.expectToBeRedirectedToFileUploadHistory();

                /* END MOCKING */

                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.amount);
                    //this.waitForFileToBeProcessed();

                    this.expectFileReadInAmountToBe(file.amount + ' ' + file.currency);
                    //this.openUploadedFileBlind();
                    this.expectFileGrossAmountToBe(file.amount);
                    this.expectFileNetAmountToBe(file.amount);

                    this.openFirstGeneratedStatement();
                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    this.expectStatementFieldToBe('Statement Distribution Period', '2014-02 to 2014-02');
                    this.expectStatementFieldToBe('Exchange Rate', '1 USD to 1 USD');
                    this.expectStatementFieldToBe('Statement Amount', '1.1900 USD');
                    this.expectSummaryByTypeToBe('Others', file.amount);
                    this.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });

            });

            describe('Load a file - Multiple Providers', function() {
                goToUploadPage();

                using(steps.uploadEdiFile, function(){
                    var file = files[2];

                    file.expectedAmount = file.expectedAmount || file.amount;

                /* MOCKING */
                    //fillFormWithFileData(file);
                    //this.clickCreateButton();

                    this.selectProcessingTerritory(file.processingTerritory);
                    file.expectedAmount = file.expectedAmount || file.amount;

                    file.name = 'TAT4651444832084292.edi';
                    this.assumeUploadedFile(file.name);

                    //this.expectToBeRedirectedToFileUploadHistory();
                /* END MOCKING */

                    /*this.selectWcmCommonFormat();
                    this.checkMultipleIncomeProvidersBox();

                    this.selectProcessingTerritory(file.processingTerritory);
                    //this.selectProcessingTerritory(file.royaltyPeriod);

                    this.selectFileFormat(file.fileFormat);
                    this.selectFile(file.fileName);

                    this.setExpectedFileAmount(file.amount);
                    this.setExpectedFileAmountCurrency(file.currency);
                    this.setExchangeRate(file.exchangeRate);

                    this.clickCreateButton();*/

                    this.expectToBeRedirectedToFileUploadHistory();
                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.expectedAmount);
                    //this.waitForFileToBeProcessed();

                    this.expectFileReadInAmountToBe(file.amount + ' ' + file.currency);
                    //this.openUploadedFileBlind();
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

                    this.closeTabByIndex(1);

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

            /*xdescribe('View File Upload History/Filter the results', function (){
                steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');

                using(steps.uploadEdiFile, function() {
                    this.selectProcessingTerritory('United States');
                    steps.royaltyStatements.selectFirstRoyaltyPeriod();
                });
            });*/

            steps.base.sleep(10000);
        }
    }
];
'use strict';

exports.beforeFeature = [
    [steps.login.itLogin],
];

exports.commonFeatureTags = ['royalties', 'royaltyProcessing', 'smoke'];

exports.feature = [
    {
        name: 'Upload EDI file',
        tags: ['uploadEDIFile'],
        steps: function () {
            var fileAmount = '2,044.9100'

            steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');
            steps.base.clickElement('Upload Electronic File', $('[data-ui-sref="royalties.uploadEdiFile"]'));

            steps.uploadEdiFile.selectProcessingTerritory('Brazil');
            steps.uploadEdiFile.selectFirstRoyaltyPeriod();
            steps.base.waitForAjax();

            steps.uploadEdiFile.selectIncomeProvider('FABER MUSIC LTD');
            steps.uploadEdiFile.selectFileFormat('FABER SALES');
            steps.uploadEdiFile.selectFile('../data/fabersales_tiny_TAT.txt');
            steps.uploadEdiFile.setStatementDistributionPeriodStart('2014', '09');
            steps.uploadEdiFile.setStatementDistributionPeriodEnd('2014', '09');
            steps.uploadEdiFile.setExpectedFileAmount(fileAmount);
            steps.uploadEdiFile.setExpectedFileAmountCurrency('GBP');
            steps.uploadEdiFile.setExchangeRate(1);
            steps.uploadEdiFile.clickCreateButton();
            steps.uploadEdiFile.waitForUploadToComplete();
            steps.uploadEdiFile.expectToBeRedirectedToFileUploadHistory();
            steps.uploadEdiFile.expectUploadedFileToBeListed();
            steps.uploadEdiFile.openUploadedFileBlind();

            steps.uploadEdiFile.expectUploadedFileToHaveCorrectExpectedAmount(fileAmount);
            steps.uploadEdiFile.waitForFileToBeProcessed();

            steps.uploadEdiFile.expectFileReadInAmountToBe(fileAmount + ' GBP');
            steps.uploadEdiFile.openUploadedFileBlind();
            steps.uploadEdiFile.expectFileGrossAmountToBe(fileAmount);
            steps.uploadEdiFile.expectFileNetAmountToBe(fileAmount);

            steps.uploadEdiFile.openFirstGeneratedStatement();
            steps.uploadEdiFile.switchToTabByIndex(1);
            steps.uploadEdiFile.expectToBeRedirectedToRoyaltyStatements();
            steps.uploadEdiFile.expectSummaryByTypeToBe('Folio Sales', fileAmount);
            steps.uploadEdiFile.closeTabByIndex(1);

            steps.uploadEdiFile.rollBackUploadedFile();
        },
    }
];

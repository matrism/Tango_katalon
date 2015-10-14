'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(steps_path + 'login');
require(steps_path + 'mainHeader');
require(steps_path + 'uploadEdiFile');

var beforeFeature = [
        [steps.login.itLogin],
    ],
    feature = [
        {
            name: 'Upload EDI file',
            tags: ['uploadEDIFile'],
            steps: function() {
                var fileAmount = '2,044.9100'

                steps.mainHeader.goToSubLink('Royalty Processing', 'History of File Upload');
                steps.base.clickElement('Upload Electronic File', $('[data-ui-sref="royalties.uploadEdiFile"]'));

                steps.uploadEdiFile.selectProcessingTerritory('Chile');

                steps.uploadEdiFile.selectIncomeProvider('FABER MUSIC LTD');
                steps.uploadEdiFile.selectFileFormat('FABER SALES');
                steps.uploadEdiFile.selectFile('../data/fabersales_tiny_TAT.txt');
                steps.uploadEdiFile.setStatementDistributionPeriodStart('2014', '09');
                steps.uploadEdiFile.setStatementDistributionPeriodEnd('2014', '09');
                steps.uploadEdiFile.setExpectedFileAmount(fileAmount);
                steps.uploadEdiFile.setExpectedFileAmountCurrency('GBP');
                steps.uploadEdiFile.setExchangeRate(1);
                steps.uploadEdiFile.clickCreateButton();

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
        },
    ];

module.exports = {
    commonFeatureTags: ['royaltyProcessing', 'smokeTest', 'broken', 'unstable'],
    breakageDescription: (
        'Though only unstable, this test takes a long time to run and may hang ' +
        'indefinitely waiting for files to be processed. This affects smoke ' +
        'test runs, so it\'s tagged broken to be skipped until it\'s stable ' +
        '(fixed). Tracking issue: TAT-461.'
    ),
    feature: feature,
    beforeFeature: beforeFeature
};

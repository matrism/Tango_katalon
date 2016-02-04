'use strict';

exports.commonFeatureTags = ['royaltyProcessing', 'manualStatement'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Manual Statement',
        tags: ['manualStatementSanity'],
        steps: function () {
            var statement = steps.manualStatement,
                statementForm = statement.form,
                statementView = statement.view,
                statementList = statement.list,
                statementBatches = statement.batches,
                batchWorks = statement.batches.works;

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.royaltiesHeader.clickLink('Create Manual Statement');

            describe('Manual Statement', function(){
                statementForm.typeIncomeProvider('TATIP');
                statementForm.setStatementDistributionPeriod(2014, 10, 2014, 11);
                statementForm.setStatementAmount(1000);
                statementForm.setExchangeRate(1);
                statementForm.createManualStatement();

                statementView.openStatementBlind();

                statementView.expectStatementValueToBe('Processing Territory', 'Argentina');
                statementView.expectStatementValueToBe('Royalty Period', 'January 2016 - March 2016');
                statementView.expectStatementValueToBe('Income Provider', 'TATIP');
                statementView.expectStatementValueToBe('Statement Distribution Period', '2014-10 to 2014-11');
                statementView.expectStatementValueToBe('Statement Amount', '1,000.0000 USD');
                statementView.expectStatementValueToBe('Commission Rate', '0 %');
                statementView.expectStatementValueToBe('Exchange Rate', '1 USD TO 1 ARS');
                statementView.expectStatementValueToBe('Converted Amount', '1,000.0000 ARS');
                statementView.expectStatementValueToBe('Write-Off Value', '0.0000');

                describe('Edit mode', function () {
                    statementView.clickBackToStatementsViewLink();
                    statementList.openFirstBlind();

                    statementList.clickEditButton();
                    statementList.expectSaveButtonToBeDisabled();
                    statementList.editField('Accounts Reference', 'abc');
                    statementList.expectSaveButtonToBeEnabled();
                    statementList.clickSaveButton();
                    statementList.clickAddBatchButton();
                });
            });

            describe('Batch', function(){
                statementBatches.clickBatchesAccordion();

                statementView.clickEditButton();
                describe('Add Batch', function () {
                    statementBatches.enterBatchAmount(1000);
                    statementBatches.expectBatchTotalsToBe('1,000.0000');
                    statementBatches.clickDefaultSettingsLink();

                    describe('Fill out default settings for Batch', function () {
                        statementBatches.defaults.setIncomeType('Video Synch');
                        statementBatches.defaults.setExploitationTerritory('Lithuania');
                        statementBatches.expectBatchDefaultsToBe('Video Synch', 'Lithuania', '100', '100', '100', '100', '100');
                    });


                    statementBatches.selectBatch(1);
                    statementBatches.enterBatchAmount(2000);
                    statementBatches.expectBatchTotalsToBe('3,000.0000');
                    statementBatches.expectBatchDefaultsToBe('Select a Type', 'Select a Country', '100', '100', '100', '100', '100');
                    statementBatches.useFirstBatchSettings();
                    statementBatches.expectBatchDefaultsToBe('Video Synch', 'Lithuania', '100', '100', '100', '100', '100');

                    statementBatches.selectBatch(2);
                    statementBatches.enterBatchAmount(3000);
                    statementBatches.expectBatchTotalsToBe('6,000.0000');
                    statementBatches.expectBatchDefaultsToBe('Select a Type', 'Select a Country', '100', '100', '100', '100', '100');
                    statementBatches.useFirstBatchSettings();
                    statementBatches.expectBatchDefaultsToBe('Video Synch', 'Lithuania', '100', '100', '100', '100', '100');
                    statementBatches.deleteActiveBatch();
                    statementBatches.expectBatchToBeDisabled(2);
                    statementBatches.expectBatchTotalsToBe('3,000.0000');

                    statementBatches.selectBatch(2);
                    statementBatches.enterBatchAmount(3000);
                    statementBatches.expectBatchTotalsToBe('6,000.0000');
                    statementBatches.expectBatchDefaultsToBe('Select a Type', 'Select a Country', '100', '100', '100', '100', '100');

                    statementBatches.defaults.setIncomeType('Karaoke Mechanical');
                    statementBatches.defaults.setExploitationTerritory('Czech Republic');
                });
            });

            describe('Works', function () {

                var incomeLine = {
                  source: 'aaa',
                  incomeType: 'Mechanical',
                  territory: 'Afghanistan',
                  period: {
                    from: {
                      year: 2014,
                      month: '10'
                    },
                    to: {
                      year: 2014,
                      month: '11'
                    }
                  },
                  units: 1,
                  productDetail: '2423423',
                  amount: 200,
                  share: 100
                };

                batchWorks.expectNumberOfWorksToBe(0);
                batchWorks.addWorkByTitle('test');
                batchWorks.expectNumberOfWorksToBe(1);

                batchWorks.addIncomeLine(incomeLine);
                batchWorks.addIncomeLine(incomeLine);
                batchWorks.addIncomeLine(incomeLine);
                batchWorks.editIncomeLine(0, 1, 'source', 'CCCCC');

                statementBatches.save();
            });
        }
    }
];

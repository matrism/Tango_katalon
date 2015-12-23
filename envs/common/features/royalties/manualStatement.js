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
            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.royaltiesHeader.clickLink('Create Manual Statement');

            describe('Manual Statement', function(){
                steps.royaltyRates.typeIncomeProvider('TATIP');

                steps.royaltyRates.setStatementDistributionPeriod(2014, 10, 2014, 11);

                steps.royaltyRates.setStatementAmount(1000);
                steps.royaltyRates.setExchangeRate(1);
                steps.royaltyRates.createManualStatement();
                steps.manualStatement.openStatementBlind();

                steps.manualStatement.expectStatementValueToBe('Processing Territory', 'Argentina');
                steps.manualStatement.expectStatementValueToBe('Royalty Period', 'January 2016 - March 2016');
                steps.manualStatement.expectStatementValueToBe('Income Provider', 'TATIP');
                steps.manualStatement.expectStatementValueToBe('Statement Distribution Period', '2014-10 to 2014-11');
                steps.manualStatement.expectStatementValueToBe('Statement Amount', '1,000.0000 USD');
                steps.manualStatement.expectStatementValueToBe('Commission Rate', '0 %');
                steps.manualStatement.expectStatementValueToBe('Exchange Rate', '1 USD TO 1 ARS');
                steps.manualStatement.expectStatementValueToBe('Converted Amount', '1,000.0000 ARS');
                steps.manualStatement.expectStatementValueToBe('Write-Off Value', '0.0000');

                describe('Edit mode', function () {
                    steps.manualStatement.clickBackToStatementsViewLink();
                    steps.manualStatement.openFirstBlind();
                    steps.base.sleep(500);
                    steps.manualStatement.clickEditButton();
                    steps.manualStatement.expectSaveButtonToBeDisabled();
                    steps.manualStatement.editField('Accounts Reference', 'abc');
                    steps.manualStatement.expectSaveButtonToBeEnabled();
                    steps.manualStatement.clickSaveButton();
                });
            });

            /*xdescribe('Batch', function(){
                steps.royaltyRates.enterBatchAmmount('1000');
                steps.royaltyRates.clickDefaultSettingsOnBatch();
                steps.royaltyRates.selectIncomeTypeForBatch('Mechanical');

                steps.royaltyRates.selectExploitationTerritoryForBatch('Lithuania');
                steps.royaltyRates.addWorkByTitle('test');

                steps.royaltyRates.setAmountRecievedForWork('1000');
            });*/
        }
    }
];

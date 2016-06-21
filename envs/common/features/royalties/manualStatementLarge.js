'use strict';

exports.id = 'd6cb8feb-8578-494b-98bf-7543d527c052';
exports.featureName = 'Royality Manual Statement Large';

exports.commonFeatureTags = [
    'royaltyProcessing',
    'manualStatementSanity',
    'sanity',
    'manualStatementLarge'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Manual Statement',
        tags: [],
        steps: function () {
            let statement = steps.manualStatement,
                statementForm = statement.form,
                statementView = statement.view,
                statementList = statement.list,
                statementBatches = statement.batches,
                batchWorks = statement.batches.works,

                batchAmount = 1000,
                totalBatches = 2,
                worksByBatch = 5,
                linesByWork = 10,

                incomeLine = {
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
                amount: batchAmount / (worksByBatch * linesByWork),
                share: 100
            };

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.royaltiesHeader.clickLink('Create Manual Statement');

            describe('Manual Statement', function(){
                statementForm.typeIncomeProvider('TATIP');
                statementForm.setStatementDistributionPeriod(2014, 10, 2014, 11);
                statementForm.setStatementAmount(1000);
                statementForm.setExchangeRate(1);
                statementForm.createManualStatement();
            });

            for (let i = 0; i < totalBatches; i++) {
                statementBatches.selectBatch(i < 3 ? i : 3);
                statementBatches.enterBatchAmount(batchAmount);
                statementBatches.expectBatchTotalsToBe((i + 1) + ',000.0000');

                if (i == 0) {
                    statementBatches.clickDefaultSettingsLink();
                    describe('Fill out default settings for Batch', function () {
                        statementBatches.defaults.setIncomeType('Video Synch');
                        statementBatches.defaults.setExploitationTerritory('Lithuania');
                    });
                } else {
                    statementBatches.useFirstBatchSettings();
                }

                for (let j = 0; j < worksByBatch; j++) {
                    batchWorks.addWorkByTitle(random.letter());
                    batchWorks.addIncomeLine(incomeLine);
                    for (let k = 0; k < linesByWork - 1; k++) {
                        batchWorks.duplicateLine(j);
                    }
                    batchWorks.expectNumberOfWorksToBe(j + 1);
                }
            }

            statementBatches.save();
        }
    }
];

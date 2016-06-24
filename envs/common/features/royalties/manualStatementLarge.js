'use strict';

let randomString = random.string.makeMemoizedGenerator(),
    totalBatches = 10,
    worksByBatch = 10,
    linesByWork = 10,
    createWorks = 10;

//exports.id = 'd6cb8feb-8578-494b-98bf-7543d527c052';

exports.commonFeatureTags = [
    'royaltyProcessing',
    'manualStatementSanity',
    'sanity',
    'manualStatementLarge'
];

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create works',
        tags: [],
        steps: () => {
            let workData = {
                    primary_work_title: 'WORK TAT 1',
                    creators_and_contributions: [
                        {
                            role: 'CA',
                            name: 'Cristina',
                            percentage: 100
                        }
                    ]
                };

            for (let i = 0; i < createWorks; i++) {
                workData.primary_work_title = 'WORK TAT ' + randomString(i);
                steps.work.createWork(workData, 'workId' + i);
            }
        }
    },
    {
        name: 'Large Manual Statement',
        tags: [],
        steps: () => {
            let statement = steps.manualStatement,
                statementForm = statement.form,
                statementView = statement.view,
                statementList = statement.list,
                statementBatches = statement.batches,
                batchWorks = statement.batches.works,

                countWorks = 0,
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
                    amount: '200',
                    share: 100
                };

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.royaltiesHeader.clickLink('Create Manual Statement');

            describe('Manual Statement', () => {
                statementForm.typeIncomeProvider('TATIP');
                statementForm.setStatementDistributionPeriod(2014, 10, 2014, 11);
                statementForm.setStatementAmount(1000);
                statementForm.setExchangeRate(1);
                statementForm.createManualStatement();
            });

            for (let i = 0; i < totalBatches; i++) {
                describe('Add Batch with works and lines', () => {
                    statementBatches.selectBatch(i < 3 ? i : 3);
                    statementBatches.enterBatchAmount(1000 * (i + 1));
                    //statementBatches.expectBatchTotalsToBe((i + 1) + ',000.0000');

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
                        if (countWorks < createWorks) {
                            batchWorks.addWorkByWorkId(fromTestVariable('workId' + countWorks));
                            countWorks++;
                        } else {
                            batchWorks.addWorkByTitle(random.letter());
                        }
                        batchWorks.addIncomeLine(incomeLine);
                        for (let k = 0; k < linesByWork - 1; k++) {
                            batchWorks.duplicateLine(j);
                        }
                        batchWorks.expectNumberOfWorksToBe(j + 1);
                    }
                });
            }

            statementBatches.save();
        }
    }
];

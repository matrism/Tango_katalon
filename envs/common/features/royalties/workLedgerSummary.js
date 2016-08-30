'use strict';

var using = require('../../../../helpers/fnutils').using,
    _ = require('lodash'),
    iso = require('iso-3166-1'),
    path = require('path'),
    noUpload = systemConfig.noUpload,
    YAML = require('yamljs'),
    fileDefaults,
    originalTimeout,
    PROCESSING_TIMEOUT = 60 * 60 * 1000;

exports.id = 'c629be22-73e2-429d-b68c-fe08309a154c';

//exports.commonFeatureTags = ['royaltyProcessing', 'broken'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

// Test data
var orgData = {
    name: 'Org test 1 TAT ARIEL',
    territory_of_operation: 'Worldwide',
    publisher_type: 'WCM',
    type: 'Publisher',
    payee: {
        account_name: 'org test 1 TAT ARIEL',
    }
},
dealData = {
    deal_signing_territory: 'Poland',
    company_code: 'WARNER/CHAPPELL MUSIC POLAND SP. Z.',
    contracting_parties: 'Test',
    contract_periods: [
        {
            start: '2013-07-10',
            end: 36,
            scopes: [
                {
                    contract_type: 'Finder',
                    territory: 'Worldwide',
                    publisher_share_sets: [
                        {
                            role: 'E',
                            name: 'NOA-NOA MUSIC',
                            own: 100
                        },
                        {
                            role: 'AM',
                            name: 'Warner chappell music italiana srl',
                            collect: 100
                        }
                    ],
                    royalty_rate_sets: [
                        {
                            effective_start_date: '',
                            application_method: 'At Source',
                            contractual_rate: 10,
                            NPS: 10
                        }
                    ]
                }
            ]
        },
    ],
    rtp_contract_periods: 'all',
    payee: {
        //name: 'org test 1 TAT ARIEL',
    }
},
workData = {
    primary_work_title: 'WORK TAT 1',
    creators_and_contributions: [
        {
            role: 'CA',
            name: 'Cristina',
            percentage: 100
        }
    ]
},
fileData = {
    processingTerritory: 'Poland',
    royaltyPeriod: 'July 2015 - December 2015',
    incomeProvider: 'WARNER MUSIC HONG KONG',
    fileFormat: 'ASIAN - WARNER',
    fileName: './data/war07_smallfile_02.txt',
    mockedFileName: 'TAT_2016-05-04T03_24_59.815Z.edi',
    amount: '100.0000',
    currency: 'USD',
    summaryByType: {
        'Folio Sales': '100.0000'
    },
    distributionPeriod: {
        start: {
            year: '2015',
            month: '01'
        },
        end: {
            year: '2016',
            month: '01'
        }
    }
},

mockValues = {
    lastCreatedWorkId: 'WW 015069382 00',
    lastCreatedDealId: '295228',
    lastCreatedDealUuid: '224c699b-21c3-447d-9927-94eed2c7b634',
    lastCreatedOrgId: 'TO0012F5A',
    lastCreatedOrgUuid: '7e1fbc34-2f95-4112-a8c8-8b686ca8e742',
    lastCreatedStatementId: '8664'
};

exports.feature = [
    {
        name: 'Work Ledger Summary - EDI File',
        tags: ['workLedgerSummary', 'workLedgerSummaryEdiFile'],
        steps: () => {
            _.defaults(hash.testVariables, mockValues);

            xdescribe('Create new data', () => {
                steps.criticalSection.wrap(() => {
                    steps.newOrganisation.createOrganistation(orgData);
                    steps.base.sleep(1000);
                    steps.deal.createDeal(dealData);
                    steps.work.createWork(workData);
                });

                steps.work.goToScopeDeliveryTab();
                steps.work.scopeDelivery.clickOnDeliverWorkToDealScopeButton();
                steps.work.scopeDelivery.selectDeal(fromTestVariable('lastCreatedDealId'));
                steps.work.scopeDelivery.checkScope(0);
                steps.work.scopeDelivery.save();

                steps.work.goToRightsTab();
                steps.workRights.expectNoErrorsInRightsGeneration();
            });

            describe('Load an EDI file', () => {
                //steps.uploadEdiFile.uploadFile(fileData);

                describe('Validate statement Works', () => {
                    /*steps.royaltiesBackEnd.getDealSummaries(
                        iso.whereCountry(fileData.processingTerritory).numeric,
                        royaltyPeriodParser(fileData.royaltyPeriod),
                        fromTestVariable('lastCreatedDealId')
                    );*/

                    /*if (!noUpload) { steps.uploadEdiFile.openUploadedFileBlind(); }
                    steps.uploadEdiFile.openFirstGeneratedStatement();
                    steps.base.switchToTab(1);
                    steps.uploadEdiFile.expectToBeRedirectedToRoyaltyStatements();

                    steps.royaltyStatements.viewDetailsForIncomeLines();
                    steps.royaltyStatements.incomeWorks.goToTab('Unmatched');
                    steps.royaltyStatements.incomeWorks.storeSourceWorkIdInTestVariable('matchedWork');
                    steps.royaltyStatements.incomeWorks.matchWork(fromTestVariable('lastCreatedWorkId'), 'Work ID');
                    steps.base.sleep(20000);
                    steps.royaltyStatements.incomeWorks.goToTab('Matched');
                    steps.royaltyStatements.incomeWorks.storeWorkAmountByIdInTestVariable(fromTestVariable('matchedWork'), 'ledgerWorkAmount');*/

                    steps.royaltiesBackEnd.validateWorkSummary(
                        iso.whereCountry(fileData.processingTerritory).numeric,
                        royaltyPeriodParser(fileData.royaltyPeriod),
                        fromTestVariable('lastCreatedWorkId')
                    );
                    //steps.royaltyStatements.incomeWorks.openWorkById(fromTestVariable('matchedWork'));
                    //steps.royaltyStatements.incomeWorks.expectWorkTotalAmountToBe(fromTestVariable('ledgerWorkAmount'));

                    steps.royaltiesBackEnd.validateDealSummaries(
                        iso.whereCountry(fileData.processingTerritory).numeric,
                        royaltyPeriodParser(fileData.royaltyPeriod),
                        fromTestVariable('lastCreatedDealUuid'),
                        'SMECH'
                    );

                    let distributionPeriod = fileData.distributionPeriod,
                        processingPeriod = royaltyPeriodParser.toRange(fileData.royaltyPeriod),
                        dateFormat = 'YYYY-MM-DD',
                        distributionStart = moment(`${distributionPeriod.start.year}-${distributionPeriod.start.month}`).format(dateFormat),
                        distributionEnd = moment(`${distributionPeriod.end.year}-${distributionPeriod.end.month}`).endOf('month').format(dateFormat),
                        processingStart = processingPeriod.start.format(dateFormat),
                        processingEnd = processingPeriod.end.endOf('month').format(dateFormat);


                    steps.royaltiesBackEnd.getIncomeApportion({
                        work_id: fromTestVariable('lastCreatedWorkId'),
                        income_provider_id: fromTestVariable('lastCreatedOrgUuid'),
                        territory_code: iso.whereCountry(fileData.processingTerritory).numeric,
                        income_type: 'MECH',
                        distribution_start_date: distributionStart,
                        distribution_end_date: distributionEnd,
                        processing_start_date: processingStart,
                        processing_end_date: processingEnd
                    });

                });

            });

            steps.base.sleep(10000);
        },
    },
    {
        name: 'Work Ledger Summary - Manual Statement',
        tags: ['workLedgerSummary', 'workLedgerSummaryManualStatement'],
        steps: () => {

            _.defaults(hash.testVariables, mockValues);

            describe('Create new data', () => {
                steps.newOrganisation.createOrganistation(orgData);
                steps.base.sleep(1000);
                steps.deal.createDeal(dealData);
                steps.work.createWork(workData);

                steps.work.goToScopeDeliveryTab();
                steps.work.scopeDelivery.clickOnDeliverWorkToDealScopeButton();
                steps.work.scopeDelivery.selectDeal(fromTestVariable('lastCreatedDealId'));
                steps.work.scopeDelivery.checkScope(0);
                steps.work.scopeDelivery.save();

                steps.work.goToRightsTab();
                steps.workRights.expectNoErrorsInRightsGeneration();
            });

            describe('Create Manual Statement', () => {
                let statementBatches = steps.manualStatement.batches,
                    batchWorks = statementBatches.works,
                    statementList = steps.manualStatement.list,
                    statementView = steps.manualStatement.view;

                steps.manualStatement.create(fileData);

                describe('Add Batch', function () {
                    statementBatches.enterBatchAmount(100);
                    statementBatches.expectBatchTotalsToBe('100.0000');
                    statementBatches.clickDefaultSettingsLink();

                    describe('Fill out default settings for Batch', function () {
                        statementBatches.defaults.setIncomeType('Mechanical');
                        statementBatches.defaults.setExploitationTerritory('Brazil');
                        statementBatches.expectBatchDefaultsToBe('Mechanical', 'Brazil', '100', '100', '100', '100', '100');
                    });
                });

                describe('Add Work', function () {
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
                      amount: 100,
                      share: 100
                    };

                    //hash.testVariables['lastCreatedWorkId'] = 'WW 015035223 00';

                    batchWorks.expectNumberOfWorksToBe(0);
                    batchWorks.addWorkByWorkId(fromTestVariable('lastCreatedWorkId'));
                    batchWorks.expectNumberOfWorksToBe(1);

                    batchWorks.addIncomeLine(incomeLine);

                    statementBatches.save();
                    statementView.clickBackToStatementsViewLink();
                    statementList.closeStatementById(fromTestVariable('lastCreatedStatementId'));
                    statementList.storeStatementAmountById(fromTestVariable('lastCreatedStatementId'));
                });

                describe('Validate statement Works', () => {
                    //hash.testVariables['lastCreatedWorkId'] = 'WW 015035223 00';

                    steps.royaltiesBackEnd.validateWorkSummary(
                        iso.whereCountry(fileData.processingTerritory).numeric,
                        royaltyPeriodParser(fileData.royaltyPeriod),
                        fromTestVariable('lastCreatedWorkId')
                    );
                    statementList.openBlindByStatementId(fromTestVariable('lastCreatedStatementId'));
                    //steps.royaltyStatements.incomeWorks.openWorkById(fromTestVariable('matchedWork'));
                });

            });

            steps.base.sleep(10000);
        },
    },
    {
        name: 'Work Ledger Summary - Manual Statement',
        tags: ['workLedgerSummary', 'workLedgerSummaryManualStatement'],
        steps: () => {

            _.defaults(hash.testVariables, mockValues);

            describe('Create new data', () => {
                steps.criticalSection.wrap(() => {
                    steps.newOrganisation.createOrganistation(orgData);
                    steps.base.sleep(1000);
                    steps.deal.createDeal(dealData);
                    steps.work.createWork(workData);
                });

                steps.work.goToScopeDeliveryTab();
                steps.work.scopeDelivery.clickOnDeliverWorkToDealScopeButton();
                steps.work.scopeDelivery.selectDeal(fromTestVariable('lastCreatedDealId'));
                steps.work.scopeDelivery.checkScope(0);
                steps.work.scopeDelivery.save();

                steps.work.goToRightsTab();
                steps.workRights.expectNoErrorsInRightsGeneration();
            });

            describe('Create Manual Statement', () => {
                let statementBatches = steps.manualStatement.batches,
                    batchWorks = statementBatches.works,
                    statementList = steps.manualStatement.list,
                    statementView = steps.manualStatement.view;

                steps.manualStatement.create(fileData);

                describe('Add Batch', function () {
                    statementBatches.enterBatchAmount(100);
                    statementBatches.expectBatchTotalsToBe('100.0000');
                    statementBatches.clickDefaultSettingsLink();

                    describe('Fill out default settings for Batch', function () {
                        statementBatches.defaults.setIncomeType('Mechanical');
                        statementBatches.defaults.setExploitationTerritory('Brazil');
                        statementBatches.expectBatchDefaultsToBe('Mechanical', 'Brazil', '100', '100', '100', '100', '100');
                    });
                });

                describe('Add Work', function () {
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
                      amount: 100,
                      share: 100
                    };

                    //hash.testVariables['lastCreatedWorkId'] = 'WW 015035223 00';

                    batchWorks.expectNumberOfWorksToBe(0);
                    batchWorks.addWorkByWorkId(fromTestVariable('lastCreatedWorkId'));
                    batchWorks.expectNumberOfWorksToBe(1);

                    batchWorks.addIncomeLine(incomeLine);

                    statementBatches.save();
                    statementView.clickBackToStatementsViewLink();
                    statementList.closeStatementById(fromTestVariable('lastCreatedStatementId'));
                    statementList.storeStatementAmountById(fromTestVariable('lastCreatedStatementId'));
                });

                describe('Validate statement Works', () => {
                    //hash.testVariables['lastCreatedWorkId'] = 'WW 015035223 00';

                    steps.royaltiesBackEnd.validateWorkSummary(
                        iso.whereCountry(fileData.processingTerritory).numeric,
                        royaltyPeriodParser(fileData.royaltyPeriod),
                        fromTestVariable('lastCreatedWorkId')
                    );
                    statementList.openBlindByStatementId(fromTestVariable('lastCreatedStatementId'));
                    //steps.royaltyStatements.incomeWorks.openWorkById(fromTestVariable('matchedWork'));
                });
            });

            steps.base.sleep(10000);
        },
    },
    {
        name: 'Work Ledger Summary - Validate work summary on work > income and rates',
        tags: ['workLedgerSummary', 'workLedgerSummaryIncomeRates'],
        steps: () => {
            var w = steps.work,
                wir = steps.workIncomeRates,
                rb = steps.royaltiesBackEnd;

            //hash.testVariables['lastCreatedWorkId'] = mockValues.lastCreatedWorkId;
            w.goToWorkPageById(fromTestVariable('lastCreatedWorkId'));
            w.goToIncomeRatesTab();

            wir.table.validateNoIncomeMessage();
            wir.filters.selectProcessingTerritory(fileData.processingTerritory);
            wir.filters.validateCurrency('PLN');
            wir.filters.selectRoyaltyPeriod(fileData.royaltyPeriod);

            rb.storeWorkSummaryInTestVariable(
                iso.whereCountry(fileData.processingTerritory).numeric,
                royaltyPeriodParser(fileData.royaltyPeriod),
                fromTestVariable('lastCreatedWorkId'),
                'work summary'
            );

            wir.table.selectIncomeGroup('Mechanical');
            wir.table.validate('Mechanical', fromTestVariable('work summary'));
        }
    }
];

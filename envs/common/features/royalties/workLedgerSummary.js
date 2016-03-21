'use strict';

var using = require('../../../../helpers/fnutils').using,
    _ = require('lodash'),
    path = require('path'),
    noUpload = systemConfig.noUpload,
    YAML = require('yamljs'),
    fileDefaults,
    originalTimeout,
    PROCESSING_TIMEOUT = 60 * 60 * 1000;

exports.commonFeatureTags = ['royaltyProcessing'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Work Ledger Summary',
        tags: ['workLedgerSummary'],
        steps: () => {
            var orgData = {
                name: 'Org test 1',
                territory_of_operation: 'Worldwide',
                publisher_type: 'WCM',
                type: 'Publisher',
                payee: {
                    account_name: 'org test 1',
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
                    name: 'org test 1',
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
            };

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

            describe('Load an EDI file', () => {
                var file = {
                        processingTerritory: 'Poland',
                        royaltyPeriod: 'July 2015 - December 2015',
                        incomeProvider: 'WARNER MUSIC HONG KONG',
                        fileFormat: 'ASIAN - WARNER',
                        fileName: './data/war07_smallfile_02.txt',
                        mockedFileName: 'TAT_2016-03-30T19_51_39.249Z.edi',
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
                    };

                function setTestTimeout(time) {
                    beforeEach(function(){
                        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = time;
                    });

                    afterEach(function(){
                        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
                    });
                }

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
                        steps.royaltiesHeader.clickLink('Upload Electronic File');
                    }
                }

                function fillFormWithFileData(file, fileDefaults, clickCreate, useOriginalName) {
                    if (fileDefaults) {
                        file = _.defaultsDeep(file, fileDefaults);
                    }

                    file.fileName = path.resolve(__dirname, file.fileName);

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
                        this.selectFile(file.fileName, useOriginalName);

                        this.setExpectedFileAmount(file.expectedAmount);
                        this.setExpectedFileAmountCurrency(file.currency);
                        this.setExchangeRate(file.exchangeRate);

                        if (clickCreate !== false) { 
                            this.clickCreateButton();
                        }
                    });
                }

                function waitForFileStatusToBe() {
                    steps.uploadEdiFile.waitForFileStatusToBe.apply(null, arguments);
                }

                function waitForFileToBeProcessed() {
                    if (noUpload) { return; }

                    steps.uploadEdiFile.waitForFileToBeProcessed();
                }

                setTestTimeout(PROCESSING_TIMEOUT);

                goToUploadPage();
                using(steps.uploadEdiFile, function(){

                    fillFormWithFileData(file, fileDefaults);
                    this.expectToBeRedirectedToFileUploadHistory();
                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(file.amount);
                    waitForFileToBeProcessed();
                    if (!noUpload) { this.openUploadedFileBlind(); }

                    this.openFirstGeneratedStatement();

                    steps.base.switchToTab(1);
                    this.expectToBeRedirectedToRoyaltyStatements();
                    steps.royaltyStatements.viewDetailsForIncomeLines();
                    steps.royaltyStatements.incomeWorks.storeSourceWorkIdInTestVariable('matchedWork');
                    steps.royaltyStatements.incomeWorks.matchWork(fromTestVariable('lastCreatedWorkId'));
                    steps.royaltyStatements.incomeWorks.goToTab('Matched');
                    steps.royaltyStatements.incomeWorks.storeWorkAmountByIdInTestVariable(fromTestVariable('matchedWork'), 'ledgerWorkAmount');
                    //steps.base.closeTabByIndex(1);

                    //this.rollBackUploadedFile();
                });


            });

            steps.base.sleep(10000);
        },
    },
    
];

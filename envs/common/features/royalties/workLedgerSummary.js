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
                    name: 'org test 1 TAT ARIEL',
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

            xdescribe('Create new data', () => {
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

                steps.uploadEdiFile.uploadFile(fileData);

                /*goToUploadPage();
                using(steps.uploadEdiFile, function(){

                    fillFormWithFileData(fileData, fileDefaults);
                    this.expectToBeRedirectedToFileUploadHistory();
                    this.expectUploadedFileToBeListed();
                    this.openUploadedFileBlind();

                    this.expectUploadedFileToHaveCorrectExpectedAmount(fileData.amount);
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
                });*/

                describe('Validate statement Works', () => {
                    hash.testVariables['lastCreatedWorkId'] = 'WW 015035223 00';

                    if (!noUpload) { steps.uploadEdiFile.openUploadedFileBlind(); }
                    steps.uploadEdiFile.openFirstGeneratedStatement();
                    steps.base.switchToTab(1);
                    steps.uploadEdiFile.expectToBeRedirectedToRoyaltyStatements();

                    steps.royaltyStatements.viewDetailsForIncomeLines();
                    steps.royaltyStatements.incomeWorks.storeSourceWorkIdInTestVariable('matchedWork');
                    steps.royaltyStatements.incomeWorks.matchWork(fromTestVariable('lastCreatedWorkId'), 'Work ID');
                    steps.royaltyStatements.incomeWorks.goToTab('Matched');
                    steps.royaltyStatements.incomeWorks.storeWorkAmountByIdInTestVariable(fromTestVariable('matchedWork'), 'ledgerWorkAmount');

                    steps.royaltiesBackEnd.validateWorkSummary(
                        iso.whereCountry(fileData.processingTerritory).numeric,
                        royaltyPeriodParser(fileData.royaltyPeriod),
                        fromTestVariable('lastCreatedWorkId')
                    );
                    steps.royaltyStatements.incomeWorks.openWorkById(fromTestVariable('matchedWork'));
                    steps.royaltyStatements.incomeWorks.expectWorkTotalAmountToBe(fromTestVariable('ledgerWorkAmount'));
                });
            });

            steps.base.sleep(10000);
        },
    },
    
];

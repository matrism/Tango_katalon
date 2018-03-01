'use strict';

var using = require('../../../../helpers/fnutils').using,
    _ = require('lodash'),
    iso = require('iso-3166-1'),
    path = require('path'),
    noUpload = systemConfig.noUpload,
    YAML = require('yamljs'),
    fileDefaults,
    originalTimeout,
    fromTestVariable = require('../../../../helpers/fromTestVariable'),
    PROCESSING_TIMEOUT = 60 * 60 * 1000;

exports.id = 'c629be22-73e2-429d-b68c-fe08309a154c';

exports.commonFeatureTags = ['royaltyProcessing','aff_test'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

// Test data
var orgData = {
        name: 'Org test 1 TAT DENISA',
        territory_of_operation: 'Worldwide',
        publisher_type: 'WCM',
        type: 'Publisher',
        payee: {
            account_name: 'org test 1 TAT DENISA'
        }
    },
    dealData = {
        deal_signing_territory: 'Canada',
        company_code: 'CAM',
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
            }
        ],
        rtp_contract_periods: 'all',
        payee: {
            name: 'Org test 1 TAT DENISA'
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
        processingTerritory: 'Mexico',
        royaltyPeriod: 'July 2015 - September 2015',
        incomeProvider: 'SACM',
        fileFormat: 'SACM',
        fileName: './data/mexicosmallfile_0.txt',
        mockedFileName: 'TAT_2016-08-14T03_24_59.815Z.edi',
        amount: '100.0000',
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

console.log('Mock values:', mockValues);


exports.feature = [
    {
        name: 'Affiliate pipeline income - EDI File',
        //tags: ['affiliatePipelineIncomeEdiFile'],
        tags: ['affiliateEdi'],
        steps: function () {

            var amountOfWork = 11.64,
                exchangeRate = 0.07913008170000001,
                grossReceived = amountOfWork * exchangeRate.toFixed(12),
                netReceived = amountOfWork * exchangeRate.toFixed(12);


            describe('Create new  data', function () {
                //add organisation
                steps.mainHeader.createNewRecord("Organisation");
                steps.newOrganisation.populateName("Org test 1 TAT DENISA");
                steps.newOrganisation.selectOrgType("Publisher");
                steps.newOrganisation.selectTerritoryOfOperation("Worldwide");
                steps.newOrganisation.selectPublisherType("WCM");
                steps.newOrganisation.saveOrganisation();

                //create deal
                steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTabWithSpecificData("bmi", "Canada", "CAM");
                steps.deal.itContinueToNextPage();
                steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
                steps.createDealScope.addSpecificScopeTypeAndTerritory("Finder", "Worldwide");
                //add Pss
                steps.base.scrollIntoView("Add publisher shares set link", pages.createDealScope.elems.addPublisherShareSetLink);
                steps.createDealScope.clickOnAddPublisherShareSet();
                steps.createDealScope.fillIntoFirstPublisherNameField("74616273");
                steps.createDealScope.selectRandomPublisherNameDropDownValue();
                steps.createDealScope.fillIntoFirstPublisherNameOwnFieldSpecificValue("100");
                steps.createDealScope.fillIntoFirstPublisherNameAMField("221851397");
                steps.createDealScope.selectRandomPublisherNameDropDownValue();
                steps.createDealScope.fillIntoFirstPublisherNameAMCollectFieldSpecificValue("100");
                steps.createDealScope.saveThePublisherShareSet();
                //add rate set to Scope
                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addRatePercentageToContractualField("10");
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
                steps.royaltyRates.saveRateSet();
                steps.deal.itContinueToNextPage();
                //add rtp
                steps.createDealRtp.selectRtpAllContractPeriods();
                steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
                steps.createDealRtp.fillIntoAcquisitionStartDateField("2013-09-18");
                steps.deal.itContinueToNextPage();
                //add payee
                steps.createDealPayee.selectPayeeOrganisationFromDropdown("Org test 1 TAT DENISA");
                steps.createDealPayee.fillPayeeInfo('Payout 1', 100, 100);
                steps.createDealPayee.savePayeeForm();
                steps.deal.waitContinueButtonEnabled();
                steps.deal.itContinueToNextPage();
                steps.deal.waitContinueButtonEnabled();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.deal.storeDealIdInTestVariable('lastCreatedDealId', 'lastCreatedDealUuid');

                //create work
                steps.base.useBlankEntityDataSlot('work', 0);
                steps.newWork.goToNewWorkPage();
                steps.newWork.enterPrimaryWorkTitle('WORK TAT 1' + (new Date()).getTime());
                steps.newWork.enterCreatorSearchTerms(0, "Cristina");
                steps.newWork.selectCreatorSearchResultByIndex(0);
                steps.newWork.enterCreatorContribution(0, 100);
                steps.newWork.optToIncludeWorkOnWebsite(true);
                steps.newWork.saveWork();
                steps.work.storeTheWorkIdInTestVariable('lastCreatedWorkId');

                steps.work.goToScopeDeliveryTab();
                steps.work.scopeDelivery.clickOnDeliverWorkToDealScopeButton();
                steps.work.scopeDelivery.selectDeal(fromTestVariable('lastCreatedDealId'));
                steps.work.scopeDelivery.checkScope(0);
                steps.work.scopeDelivery.save();

                steps.work.goToRightsTab();
                steps.workRights.expectNoErrorsInRightsGeneration();
            });

            describe('Upload edi file data', function () {
                steps.uploadEdiFile.uploadFile(fileData);
            });

            describe('Verify uploaded edi file data ', function () {
                steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
                steps.createManualStatement.selectDesiredProcessingTerritory("Mexico");
                steps.createManualStatement.selectDesiredFilterRoyaltyPeriodValueDropDown("July 2015 - September 2015");
                steps.createManualStatement.checkAmountOfTheBatchNumberIManualStatement(1, "1,164.5300");
                steps.createManualStatement.clickOnTheManualStatementNumberIFromList(1);
                steps.createManualStatement.clickOnTheViewDetailsOfIncomeLineForStatementNumberIFromList(1);


                //steps.royaltyStatements.incomeWorks.matchWork(fromTestVariable('lastCreatedWorkId'), 'Work ID');
                steps.createManualStatement.clickOnMatchedStatements();
                steps.createManualStatement.clickOnIncomeStatementCreatedFromList(4);
                steps.createManualStatement.clickOnRematchButtonLinkForIncomeStatementsLineNumberI(4);
                steps.royaltyStatements.incomeWorks.matchWork(fromTestVariable('lastCreatedWorkId'), 'Work ID');
                steps.createManualStatement.confirmOnMatchWorkOnIncomeLineNumberIAfterIsSelected();
            });

            describe('Backend functionality', function () {
                steps.base.openTheNewTab("http://tanrflowsrv.tango.qa.wmg.com");
                steps.affiliateIncomeSwagger.useWorkNumberFromManualStatementPageAndDoGetAffiliateIncomeWorkCall();
                steps.affiliateIncomeSwagger.fillIntoTerritoryCodeInputField(124);
                steps.affiliateIncomeSwagger.fillIntoRoyaltyPeriodInputField(201507201509);
                steps.affiliateIncomeSwagger.selectDesiredOptionForForceRecalc("true");
                steps.affiliateIncomeSwagger.clickOnTryItOutButton();
            });

            describe('Check the Json results', function () {
                steps.affiliateIncomeSwagger.checkIncomeTypeOnJsonResult('SDIGP');

                steps.affiliateIncomeSwagger.checkGrossReceivedValueOnJsonResult("0.921074150988");
                steps.affiliateIncomeSwagger.checkNetReceivedValueOnJsonResult("0.921074150988");
                steps.affiliateIncomeSwagger.checkDstNpsValueOnJsonResult("0.66317338871136");
                steps.affiliateIncomeSwagger.checkPaidOutValueOnJsonResult("0.07368593207904");
                steps.affiliateIncomeSwagger.checkAdminValueOnJsonResult("0");
                steps.affiliateIncomeSwagger.checkSubPublisherNpsValueOnJsonResult("0.18421483019760002");

            });
        }
    },

    {
        name: 'Affiliate pipeline income - EDI File',
        tags: ['affiliateIncomeWork'],
        steps: function () {
            describe('Check affiliate income for work', function () {
                steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
                steps.createManualStatement.selectDesiredProcessingTerritory("Mexico");
                steps.createManualStatement.selectDesiredFilterRoyaltyPeriodValueDropDown("July 2015 - September 2015");
                steps.createManualStatement.checkAmountOfTheBatchNumberIManualStatement(1, "1,164.5300");
                steps.createManualStatement.clickOnTheManualStatementNumberIFromList(1);
                steps.createManualStatement.clickOnTheViewDetailsOfIncomeLineForStatementNumberIFromList(1);
                steps.createManualStatement.clickOnIncomeStatementCreatedFromList(4);

                //steps.base.focusOnNewOpenedTab(0);
                steps.base.refreshPage();
                steps.affiliateIncomeSwagger.useTheWorkCodeAndSearchForIt();
                steps.work.goToIncomeRatesTab();
                steps.createManualStatement.selectDesiredProcessingTerritory("Mexico");
                steps.createManualStatement.selectDesiredFilterRoyaltyPeriodValueDropDownIncomeRates("July 2015 - September 2015");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                //steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("11.6400");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Domestic");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Non-Domestic");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Affiliate");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Total");

                steps.createManualStatement.checkTheCurrencyDisplayedOnTheScreen("Currency: MXN");

                //Mechanical
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(1);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //Performance
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(2);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //Synchronisation
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(3);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //Digital Performance
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(4);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                //Digital Mechanical
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(5);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //Others
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(6);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //Print
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(7);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //Master Rights
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(8);
                steps.createManualStatement.checkNoIncomeHistoryMessageIsDisplayed();
                //All
                steps.createManualStatement.selectSpecificStatementIncomeGroupValueDropDownByIndex(0);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");

                //Domestic
                steps.createManualStatement.selectSpecificBreakdownDropDownByIndex(1);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Domestic");
                //Non-Domestic
                steps.createManualStatement.selectSpecificBreakdownDropDownByIndex(2);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Non-Domestic");
                //Affiliate
                steps.createManualStatement.selectSpecificBreakdownDropDownByIndex(3);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Affiliate");
                //Total
                steps.createManualStatement.selectSpecificBreakdownDropDownByIndex(4);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Total");
                //Affiliate Pipeline
                steps.createManualStatement.selectSpecificBreakdownDropDownByIndex(5);
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Digital Performance");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("Affiliate Pipeline");
                steps.createManualStatement.checkValuesInTheIncomeRatesFilteredTable("-");
                //All
                steps.createManualStatement.selectSpecificBreakdownDropDown(0);
            });
        }


    }];


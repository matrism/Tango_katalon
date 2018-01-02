"use strict";

var random = require('../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    fnutils = require('../../../helpers/fnutils'),
    using = fnutils.using;



exports.id = '81d52b01-bfba-45f9-835a-05f2d2a43d7d';
exports.featureName = 'Smoke tests - deals, person, works, orgs, royalty';

exports.commonFeatureTags = ['smoke','smoketest123'];

exports.beforeEach =function () {
    var origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function () {
        var args = arguments;
        origFn.call(browser.driver.controlFlow(), function () {
            return protractor.promise.delayed(1000);   // here we can adjust the execution speed
        });
        return origFn.apply(browser.driver.controlFlow(), args);
    };

},

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create a deal with publisher share set',
        tags: ['deals','createDeal'],
        steps: function () {
        //steps: criticalScenario(() => {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.createDealScope.itAddPublisherShareWithSocietyAwardCredit();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addEffectiveStartDate("2015-09-08");
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            /******************************************
            TEMPORARILY DISABLE ADDING OF PAYEE, IS BROKEN IN QA
            steps.createDealPayee.itAddPayeeOrganisationAndAssociateScope();
            ******************************************/

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: 'Create a basic person (without persistence validations)',
        tags: ['person'],
        steps: function () {
        //steps: criticalScenario(() => {
            steps.person.useBlankPersonSlot(0);
            steps.newPerson.goToNewPersonPage();

            steps.newPerson.enterLastName('TEST PERSON AUTO ' + randomId(0));
            steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
            steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
            steps.newPerson.save();
            steps.newPerson.validateSaveRedirection();
            steps.person.findId();
            //steps.royaltyRates.pauseTest();
            steps.person.findInternalIpiNumber();
        }
    },
    {
        name: 'New basic work',
        tags: ['works','newBasicWork'],
        steps: function () {
        //steps: criticalScenario(() => {
            steps.base.useBlankEntityDataSlot('work', 0);

            steps.newWork.goToNewWorkPage();

            steps.newWork.enterPrimaryWorkTitle('TEST WORK AUTO' + randomId(0));

            steps.newWork.enterAlternateWorkTitle(
                0, 'TEST WORK ALTERNATE TITLE ' + randomId(0.1)
            );

            steps.newWork.enterAlternateWorkTitle(
                1, 'TEST WORK ALTERNATE TITLE ' + randomId(0.2)
            );

            steps.newWork.selectCreator('nawawi');
            steps.newWork.enterCreatorContribution(0, 100);

            steps.newWork.optToIncludeWorkOnWebsite(false);

            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();

            steps.base.goToHomePage();

            steps.mainHeader.search.selectEntityType('Works');
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');


            /**********************************************
            steps.work.validateDefaultWorkSearchFilterTag(0);
             // temp disabled until code fix in FE
             **********************************************/
            steps.work.searchForWorkUsingPreviouslyCreatedWorkId();
            steps.base.sleep(200);
            steps.base.waitForAjax();

            steps.work.expectWorkSearchMatchCountToBe(1);

            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();

            steps.work.validateWorkId();
        }
    },
    {
        name: 'New basic organisation',
        tags: ['orgCreationSmoke', 'orgs'],
        steps: function () {
        //steps: criticalScenario(() => {
            steps.mainHeader.createNewRecord('Organisation');

            using(steps.newOrganisation, function () {
                this.populateName('TestOrgName' + randomId(0));
                this.enterSuisaIpiNumber(random.id().slice(0, 11));
                this.enterAffiliatedSocietySearchTerms('BMI');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.selectPublisherType('WCM');
                this.selectTerritoryOfOperation('United States');
                steps.base.sleep(8000);
                this.saveOrganisation();
            });
        }
    },
    {
        name: 'View mode of  organisation',
        tags: ['viewOrgSmoke', 'orgs', 'view'],
        steps: function () {
        //steps: criticalScenario(() => {
            steps.searchSection.accessSavedOrganisationByName('BMI');
            steps.organisation.validateCisacCode('021');
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.waitForPreviewRegistrationRunHeaderToBeDisplayed();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.waitForRegistrationActivityRecordsTableToBeDisplayed();

            if(systemConfig.env.name ==='staging_test') {
                steps.searchSection.accessSavedOrganisationByName('(TEST) WB MUSIC CORP.');

                steps.organisation.subPublishers.expectNameToBeEither(
                    0, [
                        'POP ARABIA',
                        'WARNER/CHAPPELL MUSIC HONG KONG LIMITED',
                        'WARNER CHAPPELL MUSIC HELLAS SRL',
                        'BENNETT COLEMAN AND CO LTD'
                    ]
                );
            } else {
                steps.searchSection.accessSavedOrganisationByName('WB MUSIC CORP.');

                steps.organisation.subPublishers.expectNameToBeEither(
                    0, [
                        'INTERSONG MUSIKVERLAG GMBH (CH)',
                        'LUMBREL MUSIC PUBLISHING DE GUATEMALA',
                        'WARNER CHAPPELL MUSIC HELLAS SRL',
                        'DANCING BEAR PUBLISHING LTD'
                    ]
                );
            }

        }
    },

    {
        name: 'View mode of person',
        tags: ['person', 'view', 'viewModePerson'],
        steps: function () {
        //steps: criticalScenario(() => {
            steps.searchSection.accessSavedPersonByName('katy perry');
            steps.person.validateSuisaIpiNumber('515661558');
            steps.person.validateAlternativeName(0, 'Perry, Katy Perry')
        }
    }
    ,
    {
        name: 'CR file downloads',
        // currently broken due to issue in the counter not in sync with the view listing
        tags: [
            'crFileDownloadsSmoke',
            'crFileDownloads',
            'cr',
            'orgs',
            'broken'
        ],

        steps: function () {
        //steps: criticalScenario(() => {
            steps.base.clearDownloadsDirectory();
            steps.searchSection.accessSavedOrganisationByName('BMI');
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.downloadCrFile();
            steps.organisation.viewValidationErrors();
            steps.organisation.downloadCrFile();
            steps.base.validateDownloadFileCount(2);
        }
    },
    {
        name: "Royalties Manual Statement",

        tags: [
            'royaltyRatesManualStatementsSmoke',
            'royaltyRates',
            'manualStatements',
            'qaOnly'
        ],

        steps: function () {
        //steps: criticalScenario(() => {
            steps.royaltyRates.goToRoyaltyStatements();
            steps.royaltyRates.clickCreateManualStatement();
            steps.royaltyRates.typeIncomeProvider('BMI');

            steps.royaltyRates.setStatementDistributionPeriod("2016", "06", "2016", "12");

            steps.royaltyRates.setStatementAmount("500");
            steps.royaltyRates.setExchangeRate("1");
            steps.royaltyRates.createManualStatement();
            steps.base.sleep(3000);
            steps.royaltyRates.enterBatchArea();
            steps.royaltyRates.enterBatchAmount("500");
            steps.royaltyRates.clickDefaultSettingsOnBatch();
            steps.royaltyRates.selectIncomeTypeForBatch("Video Synch");

            steps.royaltyRates.selectExploitationTerritoryForBatch("Malaysia");
            steps.base.sleep(3000);
            steps.royaltyRates.addWorkByTitle("EVERYTHING IS AWESOME MSI");

            steps.royaltyRates.setAmountRecievedForWork("1000");
            steps.royaltyRates.clickDoneButtonForManualStatement();

            steps.royaltyRates.goToRoyaltyStatements();
            steps.royaltyRates.expandSavedManualStatement();
            steps.royaltyRates.validateManualStatement();
            steps.royaltyRates.deleteManualStatement();
         }
    }
];

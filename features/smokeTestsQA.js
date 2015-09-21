'use strict';

var random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    config = require('../configs/protractor-conf');

var workData = {
    workId: "WW 015006249 00",
    primaryWorkTitle: "TEST WORK TITLE 142792447241860",
    alternateWorkTitles: [
        "TEST ALTERNATE WORK TITLE 1427924474205725",
        "TEST ALTERNATE WORK TITLE 1427924476582667"
    ],
    creators: [
        {
            name: "FAUZE",
            contribution: 50
        },
        {
            name: "WANDO",
            contribution: 50
        }
    ],
    musicalDistributionCategory: "Jazz",
    textMusicRelationship: "Music and Text",
    excerptType: "Movement",
    versionType: "Original Work",
    intendedPurpose: "Theatre",
    productionTitle: "TEST PRODUCTION TITLE 1429744413589291",
    includeOnWebsite: false
},
firstPublisherDate = 'JAWARA PUSTAKA MUZIK';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ["smoke", "qa"];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["deals", "create"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: 'Create a basic person (without persistence validations)',
        tags: ["person", "create"],
        steps: function () {
            steps.person.useBlankPersonSlot(0);
            steps.newPerson.goToNewPersonPage();
            steps.newPerson.waitForPageToLoad();

            steps.newPerson.enterLastName('TEST PERSON ' + randomId(0));
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
        name: "New basic work",
        tags: ['works', 'create'],
        steps: [
            //steps.new_work.createBasicWork(workData);
            //  steps.work.validateWork(workData);
            [steps.base.useBlankEntityDataSlot, ['work', 0]],

            [steps.new_work.goToNewWorkPage],
            [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK ' + randomId(0)]],
            [steps.new_work.enterAlternateWorkTitle, [0, 'TEST WORK ALTERNATE TITLE ' + randomId(0.1)]],
            [steps.new_work.enterAlternateWorkTitle, [1, 'TEST WORK ALTERNATE TITLE ' + randomId(0.2)]],
            [steps.new_work.selectRandomCreator, [0]],
            [steps.new_work.enterCreatorContribution, [0, 100]],
            [steps.new_work.optToIncludeWorkOnWebsite, [false]],
            [steps.new_work.saveWork],
            [steps.new_work.validateSaveWorkRedirection],
            [steps.base.waitForAjax],
            [steps.work.findCurrentlyOpenWorkId],

            [steps.base.goToHomePage],
            [steps.work.validateDefaultWorkSearchFilterTag, [0]],
            [steps.work.searchForWorkUsingPreviouslyCreatedWorkId],
            [steps.base.sleep, [200]],
            [steps.base.waitForAjax],
            [steps.work.expectWorkSearchMatchCountToBe, [1]],
            [steps.work.clickWorkSearchMatch, [0]],
            [steps.base.waitForAjax],
            [steps.work.validateWorkId]
        ]
    },
    {
        name: "New basic organisation",
        tags: ["orgs", "create"],
        steps: function () {
            steps.organisation.goToNewOrganisationPage();
            steps.organisation.setOrganisationName("TestOrganisationName");
            steps.organisation.setRandomSuisaIPI();
            steps.organisation.setAffiliatedSociety("Test");
            steps.organisation.setPublisherType("WCM");
            steps.organisation.setTerritoryOfOperation("Worldwide");
            steps.organisation.saveOrganisation();
            steps.organisation.validateSavedOrganisationIsDisplayed();
        }
    },
    {
        name: "View mode of  organisation",
        tags: ["orgs", "view"],
        steps: function () {
            steps.searchSection.accessSavedOrganisationByName("BMI");
            steps.organisation.validateCISACCode("021");
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.waitForPreviewRegistrationRunTabToBeDisplayed();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.waitForRegistrationActivityTabToBeDisplayed();

            steps.searchSection.accessSavedOrganisationByName("WB MUSIC CORP.");
            steps.organisation.validatePublisherSubRelationships(firstPublisherDate);
        }
    },
    {
        name: "View mode of person",
        tags: ["person", "view"],
        steps: function () {
            steps.searchSection.accessSavedPersonByName("katy perry");
            steps.person.validateIPI("292555933");
            steps.person.validateAlternativeName("KATY PERRY")
        }
    },
    {
        name: "View mode of person",
        tags: ["person", "view"],
        steps: function () {
            steps.organisation.clearDownloadFolder(config.config.capabilities.chromeOptions.prefs.download.default_directory);
            steps.searchSection.accessSavedOrganisationByName("BMI");
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.downloadFile();
            steps.organisation.viewValidationErrors();
            steps.organisation.downloadFile();
            steps.organisation.validateFilesDownloaded(config.config.capabilities.chromeOptions.prefs.download.default_directory);
        }
    },
    {
        name: "Royalties Manual Statement",
        tags: ["royalties", "create"],
        steps: function () {
            steps.royaltyRates.goToRoyaltyStatements();
            steps.royaltyRates.clickCreateManualStatement();

            steps.royaltyRates.typeIncomeProvider("HFA");

            steps.royaltyRates.setStatementDistributionPeriod("1991", "02", "2013", "03");

            steps.royaltyRates.setStatementAmount("1000");
            steps.royaltyRates.setExchangeRate("1");
            steps.royaltyRates.createManualStatement();

            steps.royaltyRates.enterBatchAmmount("1000");
            steps.royaltyRates.clickDefaultSettingsOnBatch();
            steps.royaltyRates.selectIncomeTypeForBatch("Mechanical");

            steps.royaltyRates.selectExploitationTerritoryForBatch("Lithuania");
            steps.royaltyRates.addWorkByTitle("test");


            steps.royaltyRates.setAmountRecievedForWork("1000");
            steps.royaltyRates.clickDoneButtonForManualStatement();

            steps.royaltyRates.goToRoyaltyStatements();
            steps.royaltyRates.expandSavedManualStatement();
            steps.royaltyRates.validateManualStatement();
        }
    }
];

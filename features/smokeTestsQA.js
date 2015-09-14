var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    config = require('../configs/protractor-conf');

require(pages_path + "deals/deal");
require(steps_path + "deals/deal");
require(pages_path + "deals/createGeneral");
require(steps_path + "deals/createGeneral");
require(pages_path + "deals/createScope");
require(steps_path + "deals/createScope");
require(pages_path + "deals/createContractPeriod");
require(steps_path + "deals/createContractPeriod");
require(pages_path + "deals/editGeneral");
require(steps_path + "deals/editGeneral");
require(pages_path + "deals/editScope");
require(steps_path + "deals/editScope");
require(steps_path + "login");
require(steps_path + "base");
require(steps_path + "person/newPerson");
require(pages_path + "person/newPerson");
require(steps_path + "person/person");
require(pages_path + "person/person");
require(steps_path + "works/newWork");
require(steps_path + "orgs/organisation");
require(pages_path + "orgs/organisation");
require(steps_path + "searchSection");

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

    beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: "Create a deal with publisher share set",
            tags: ["smokeDeal", "smokeQA"],
            steps: function () {
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
            }
        },
        {
            name: 'Create a basic person (without persistence validations)',
            tags: ["smokePerson", "smokeQA"],
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
            tags: ['smokeWork', 'smokeQA'],
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
            tags: ["smokeOrganisation", "smokeQA"],
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
            tags: ["smokeOrganisationView", "smokeQA"],
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
            tags: ["smokePersonView", "smokeQA"],
            steps: function () {
                steps.searchSection.accessSavedPersonByName("katy perry");
                steps.person.validateIPI("292555933");
                steps.person.validateAlternativeName("KATY PERRY")
            }
        },
        {
            name: "View mode of person",
            tags: ["smokeCRDownload", "smokeQA"],
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
            tags: ["smokeManualStatement", "smokeQA"],
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

module.exports = {
    commonFeatureTags: ["smokeTestsQA"],
    feature: feature,
    beforeFeature: beforeFeature
};
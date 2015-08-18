var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(pages_path + "edit_deal_scope");
require(steps_path + "edit_deal_scope");
require(steps_path + "login");
require(steps_path + "base");
require(steps_path + "newPerson");
require(pages_path + "newPerson");
require(steps_path + "person");
require(pages_path + "person");
require(steps_path + "login");
require(steps_path + "new_work");
require(steps_path + "organisation");
require(pages_path + "organisation");
require(steps_path + "searchSection");



var workData = {};

workData = {
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
};
 var firstPublisherDate = 'Sub-Publisher:\n'+
    'JAWARA PUSTAKA MUZIK';

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create a deal with publisher share set",
        tags: ["smokeDeal","smokeQA"],
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
            tags: ["smokePerson","smokeQA"],
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
                steps.person.findInternalIpiNumber();
            }
        },
        {
            name: "New basic work",
            tags: ["smokeWork","smokeQA"],
            steps: function () {
                steps.new_work.createBasicWork(workData);
                steps.work.validateWork(workData);
            }
        },
        {
            name: "New basic organisation",
            tags: ["smokeOrganisation","smokeQA"],
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
            tags: ["smokeOrganisationView","smokeQA"],
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
            tags: ["smokePersonView","smokeQA"],
            steps: function () {
                steps.searchSection.accessSavedPersonByName("katy perry");
                steps.person.validateIPI("292555933");
                steps.person.validateAlternativeName("KATY PERRY")


            }
        }


    ];


module.exports = {
    commonFeatureTags: ["smokeTestsQA"],
    feature: feature,
    beforeFeature: beforeFeature
};
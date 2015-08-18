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
    'WARNER/CHAPPELL MUSIC PUBLISHING CHILE LTDA.';


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: "View mode of  organisation",
            tags: ["smokeOrganisationViewProd","smokeProd"],
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
            tags: ["smokePersonViewProd","smokeProd"],
            steps: function () {
                steps.searchSection.accessSavedPersonByName("katy perry");
                steps.person.validateIPI("292555933");
                steps.person.validateAlternativeName("Katy Perry")


            }
        },
        {
            name: "Basic deal add scope",
            tags: ["smokeScopeToDeal","smokeProd"],
            steps: function () {
                steps.searchSection.accessSavedDealByNumber("3");
                steps.create_deal_contract_period.waitForDealToLoad();
                steps.create_deal_contract_period.selectContractPeriodNumberI(1);
                steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
                steps.create_deal_scope.itAddPublisherShareWithSocietyAwardCredit();
               // steps.create_deal_scope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
                steps.create_deal_scope.saveThePublisherShareSet();

                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
                steps.royaltyRates.addRatePercentageToContractualField('10');
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
                steps.royaltyRates.saveRateSet();


            }
        },
        {
            name: "Basic work and CWR",
            tags: ["smokeWorkProd","smokeProd"],
            steps: function () {
                steps.searchSection.accessSavedWorkById("10083789");
                steps.work.goToPreviewCWRTab();
                steps.work.selectRegistrationRecipient("KODA");
                steps.work.validateGeneratedOutput();



            }
        },
        {
            name: "Basic work and rights",
            tags: ["smokeWorkRightsProd","smokeProd"],
            steps: function () {
                steps.searchSection.accessSavedWorkById("015000163");
                steps.work.goToRightsTab();

                steps.work.validateRightsDisplayed();



            }
        }



    ];


module.exports = {
    commonFeatureTags: ["smokeTestsProd"],
    feature: feature,
    beforeFeature: beforeFeature
};
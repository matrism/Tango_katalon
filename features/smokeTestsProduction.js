var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    fnutils = require('../helpers/fnutils'),
    using = fnutils.using,
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
require(steps_path + 'personProduction');
require(steps_path + "login");
require(steps_path + "new_work");
require(steps_path + 'organisationProduction');
require(pages_path + 'organisationProduction');
require(steps_path + "searchSection");
require(steps_path + 'workCwrPreview');
require(steps_path + 'workRights');



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

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: 'View mode of organisation',
            tags: [
                'viewOrganisationProductionTest'
            ],
            steps: function () {
                steps.searchSection.accessSavedOrganisationByName('BMI');

                using(steps.organisationProduction, function() {
                    this.validateCisacCode('021');
                    this.goToPreviewRegistrationRunTab();
                    this.waitForPreviewRegistrationRunHeaderToBeDisplayed();
                    this.goToRegistrationActivityTab();
                    this.waitForRegistrationActivityRecordsTableToBeDisplayed();
                });

                steps.searchSection.accessSavedOrganisationByName('WB MUSIC CORP.');

                steps.organisationProduction.validateSubPublisherName(
                    0, 'WARNER/CHAPPELL MUSIC PUBLISHING CHILE LTDA.'
                );
            },
        },
        {
            name: 'View mode of person',
            tags: [
                'viewPersonProductionSmokeTest',
            ],
            steps: function () {
                steps.searchSection.accessSavedPersonByName('katy perry');
                steps.personProduction.validateSuisaIpiNumber('292555933');
                steps.personProduction.validateAlternativeName(0, 'katy perry')
            }
        },
        {
            name: "Basic deal add scope",
            tags: ['addDealScopeProductionSmokeTest'],
            steps: function () {
                steps.searchSection.accessSavedDealByNumber("3");
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
            tags: [
                'viewWorkProductionSmokeTest',
                'workPreviewCwrProductionSmokeTest',
            ],
            steps: function () {
                steps.searchSection.accessSavedWorkById("10083789");
                steps.work.goToPreviewCwrTab();
                steps.workCwrPreview.searchForRegistrationRecipient("KODA");
                steps.workCwrPreview.selectRegistrationRecipientResultByIndex(0);
                steps.workCwrPreview.expectCwrDataToBeDisplayed();



            }
        },
        {
            name: "Basic work and rights",
            tags: ['workRightsProductionSmokeTest'],
            steps: function () {
                steps.searchSection.accessSavedWorkById("015000163");
                steps.work.goToRightsTab();

                steps.workRights.expectRightsDataToBeDisplayed();



            }
        }



    ];


module.exports = {
    commonFeatureTags: [
        'productionSmokeTest',
        'productionTest',
    ],
    feature: feature,
    beforeFeature: beforeFeature
};

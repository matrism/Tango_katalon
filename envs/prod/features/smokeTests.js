'use strict';

var random = require('../../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

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
};

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ["smoke", "production"];

exports.feature = [
    {
        name: 'View mode of organisation',
        tags: [
            'viewOrganisationProductionTest'
        ],
        steps: function () {
            steps.searchSection.accessSavedOrganisationByName('BMI');

            using(steps.organisationStaging, function () {
                this.validateCisacCode('021');
                this.goToPreviewRegistrationRunTab();
                this.waitForPreviewRegistrationRunHeaderToBeDisplayed();
                this.goToRegistrationActivityTab();
                this.waitForRegistrationActivityRecordsTableToBeDisplayed();
            });

            steps.searchSection.accessSavedOrganisationByName('WB MUSIC CORP.');

            steps.organisationStaging.validateSubPublisherName(
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
            steps.personStaging.validateSuisaIpiNumber('292555933');
            steps.personStaging.validateAlternativeName(0, 'katy perry')
        }
    },
    {
        name: "Basic deal add scope",
        tags: ['addDealScopeProductionSmokeTest'],
        steps: function () {
            steps.searchSection.accessSavedDealByNumber("3");
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.createDealScope.itAddPublisherShareWithSocietyAwardCredit();
            // steps.createDealScope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.createDealScope.saveThePublisherShareSet();

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
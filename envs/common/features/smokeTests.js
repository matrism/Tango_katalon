var random = require('../../../helpers/random'),
    randomId = random.id.makeMemoizedGenerator(),
    fnutils = require('../../../helpers/fnutils'),
    using = fnutils.using;

exports.commonFeatureTags = ['smoke', 'smokeTest'];

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Create a deal with publisher share set',
        tags: ['smokeDeal'],
        steps: function() {
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
        tags: ['smokePerson'],
        steps: function() {
            steps.person.useBlankPersonSlot(0);
            steps.newPerson.goToNewPersonPage();

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
        name: 'New basic work',
        tags: ['smokeWork'],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 0);

            steps.new_work.goToNewWorkPage();

            steps.new_work.enterPrimaryWorkTitle('TEST WORK ' + randomId(0));

            steps.new_work.enterAlternateWorkTitle(
                0, 'TEST WORK ALTERNATE TITLE ' + randomId(0.1)
            );

            steps.new_work.enterAlternateWorkTitle(
                1, 'TEST WORK ALTERNATE TITLE ' + randomId(0.2)
            );

            steps.new_work.selectRandomCreator(0);

            steps.new_work.enterCreatorContribution(0, 100);

            steps.new_work.optToIncludeWorkOnWebsite(false);

            steps.new_work.saveWork();
            steps.new_work.validateSaveWorkRedirection();

            steps.work.findCurrentlyOpenWorkId();

            steps.base.goToHomePage();

            steps.work.validateDefaultWorkSearchFilterTag(0);
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
        tags: ['smokeOrganisation'],
        steps: function() {
            steps.mainHeader.createNewRecord('Organisation');

            using(steps.newOrganisation, function() {
                this.populateName('TestOrganisationName');
                this.enterSuisaIpiNumber(random.id().slice(0, 11));
                this.enterAffiliatedSocietySearchTerms('BMI');
                this.selectAffiliatedSocietySearchResultByIndex(0);
                this.selectPublisherType('WCM');
                this.selectTerritoryOfOperation('United States');
                this.saveOrganisation();
            });
        }
    },
    {
        name: 'View mode of  organisation',
        tags: ['smokeOrganisationView', 'smokeOrganisation'],
        steps: function() {
            steps.searchSection.accessSavedOrganisationByName('BMI');
            steps.organisation.validateCisacCode('021');
            steps.organisation.goToPreviewRegistrationRunTab();
            steps.organisation.waitForPreviewRegistrationRunHeaderToBeDisplayed();
            steps.organisation.goToRegistrationActivityTab();
            steps.organisation.waitForRegistrationActivityRecordsTableToBeDisplayed();

            steps.searchSection.accessSavedOrganisationByName('WB MUSIC CORP.');

            steps.organisation.subPublishers.expectNameToBeEither(
                0, [
                    'JAWARA PUSTAKA MUZIK',
                    'WARNER/CHAPPELL MUSIC PUBLISHING CHILE LTDA.',
                ]
            );
        }
    },
    {
        name: 'View mode of person',
        tags: ['smokePersonView', 'smokePerson'],
        steps: function() {
            steps.searchSection.accessSavedPersonByName('katy perry');
            steps.person.validateSuisaIpiNumber('292555933');
            steps.person.validateAlternativeName(0, 'KATY PERRY')
        }
    }
    ,
    {
        name: 'CR file downloads',
        tags: ['smokeCrFileDownloads', 'smokeOrganisation'],
        steps: function() {
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
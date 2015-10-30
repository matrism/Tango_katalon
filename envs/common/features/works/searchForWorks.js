'use strict';

var random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator(),
    randomId = random.id.makeMemoizedGenerator();

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['works', 'search', 'regression', 'searchForWorks'];

exports.feature = [
    {
        name: 'Search for a work by work ID, song code, and primary and alternate titles',
        tags: [],
        steps: function() { 
            steps.base.useBlankEntityDataSlot('work', 0);

            steps.person.useBlankPersonSlot(0);
            steps.newPerson.goToNewPersonPage();
            steps.newPerson.enterLastName('TEST PERSON ' + randomString(1));
            steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
            steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
            steps.newPerson.save();
            steps.person.findId();
            steps.person.findInternalIpiNumber();

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST WORK ' + randomString(0));
            steps.newWork.enterAlternateWorkTitle(0, 'TEST WORK ALTERNATE TITLE ' + randomString(0.1));
            steps.newWork.enterAlternateWorkTitle(1, 'TEST WORK ALTERNATE TITLE ' + randomString(0.2));
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.waitForAjax();
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

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.searchForWorkUsingPreviouslyCreatedSongCode();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.searchForWorkUsingPreviouslyCreatedSongCodeWithNoLeadingZeroes();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.searchForWorkUsingPreviouslyCreatedSongCodeWithLeadingZeroes();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Work ID');
            steps.work.searchForWorkUsingPreviouslyCreatedSongCodeWithTrailingZeroes();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(0);

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Title');
            steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Title');
            steps.work.searchForWorkUsingPreviouslyEnteredAlternateTitle(0);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Title');
            steps.work.searchForWorkUsingPreviouslyEnteredAlternateTitle(1);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();
        } 
    },
    {
        name: 'Search for a work by creator name and SUISA and internal IPI numbers',
        tags: [],
        steps: function() {
            steps.person.useBlankPersonSlot(1);
            steps.newPerson.goToNewPersonPage();
            steps.newPerson.enterLastName('TEST PERSON ' + randomString(0));
            steps.newPerson.enterSuisaIpiNumber(randomId(0.1).slice(0, 10));
            steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
            steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
            steps.newPerson.save();
            steps.person.findId();

            steps.person.useBlankPersonSlot(2);
            steps.newPerson.goToNewPersonPage();
            steps.newPerson.enterLastName('TEST PERSON ' + randomString(1));
            steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
            steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
            steps.newPerson.save();
            steps.person.findId();
            steps.person.findInternalIpiNumber();

            steps.base.useBlankEntityDataSlot('work', 1);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST WORK ' + randomString(1));
            steps.newWork.selectCreatorFromPersonSlot(0, 1);
            steps.newWork.enterCreatorContribution(0, 50);
            steps.newWork.selectCreatorFromPersonSlot(1, 2);
            steps.newWork.enterCreatorContribution(1, 50);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.waitForAjax();
            steps.work.findCurrentlyOpenWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Creator');
            steps.work.searchForWorkUsingPreviouslySelectedCreatorName(0);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Creator');
            steps.work.searchForWorkUsingPreviouslySelectedCreatorSuisaIpiNumber(0);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Creator');
            steps.work.searchForWorkUsingPreviouslySelectedCreatorInternalIpiNumber(1);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountToBe(1);
            steps.work.clickWorkSearchMatch(0);
            steps.base.waitForAjax();
            steps.work.validateWorkId();
        }
    },
    {
        name: 'Search for a work by primary title and creator name (combination)',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 2);

            steps.person.useBlankPersonSlot(3);
            steps.newPerson.goToNewPersonPage();
            steps.newPerson.enterLastName('TEST PERSON ' + randomString(1));
            steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
            steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);
            steps.newPerson.save();
            steps.person.findId();
            steps.person.findInternalIpiNumber();

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST WORK ' + randomString(1));
            steps.newWork.selectCreatorFromPersonSlot(0, 3);
            steps.newWork.enterCreatorContribution(0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.waitForAjax();

            steps.base.goToHomePage();
            steps.work.selectWorkSearchFilterTag(0, 'Creator');
            steps.work.searchForWorkUsingPreviouslySelectedCreatorName(0);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.addAnotherWorkSearchTerm();
            steps.work.selectWorkSearchFilterTag(1, 'Title');
            steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountNotToBe(0);

            steps.work.removeWorkSearchTerm(0);
            steps.work.selectWorkSearchFilterTag(0, 'Title');
            steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle();
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.addAnotherWorkSearchTerm();
            steps.work.selectWorkSearchFilterTag(1, 'Creator');
            steps.work.searchForWorkUsingPreviouslySelectedCreatorName(0);
            steps.base.sleep(200);
            steps.base.waitForAjax();
            steps.work.expectWorkSearchMatchCountNotToBe(0);
        }
    }
];

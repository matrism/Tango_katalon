'use strict';

var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps,
    random = require('../helpers/random'),
    randomId = random.id.makeMemoizedGenerator();

require(steps_path + 'login');
require(steps_path + 'new_work');

hash.subjectWorkData = {};

var beforeFeature = [
        [steps.login.itLogin]
    ],
    feature = [
        {
            name: 'Search for a work by work ID, song code, and primary and alternate titles',
            tags: [],
            steps: [
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
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Work ID']],
                [steps.work.searchForWorkUsingPreviouslyCreatedSongCode],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Title']],
                [steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Title']],
                [steps.work.searchForWorkUsingPreviouslyEnteredAlternateTitle, [0]],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Title']],
                [steps.work.searchForWorkUsingPreviouslyEnteredAlternateTitle, [1]],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],
            ]
        },
        {
            name: 'Search for a work by creator name and SUISA and internal IPI numbers',
            tags: [],
            steps: [
                [steps.person.useBlankPersonSlot, [0]],
                [steps.newPerson.goToNewPersonPage],
                [steps.newPerson.enterLastName, ['TEST PERSON ' + randomId(0)]],
                [steps.newPerson.enterSuisaIpiNumber, [randomId(0.1).slice(0, 10)]],
                [steps.newPerson.enterAffiliatedSocietySearchTerms, ['ASCAP']],
                [steps.newPerson.selectAffiliatedSocietySearchResultByIndex, [0]],
                [steps.newPerson.save],
                [steps.person.findId],

                [steps.person.useBlankPersonSlot, [1]],
                [steps.newPerson.goToNewPersonPage],
                [steps.newPerson.enterLastName, ['TEST PERSON ' + randomId(1)]],
                [steps.newPerson.enterAffiliatedSocietySearchTerms, ['ASCAP']],
                [steps.newPerson.selectAffiliatedSocietySearchResultByIndex, [0]],
                [steps.newPerson.save],
                [steps.person.findId],
                [steps.person.findInternalIpiNumber],

                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK ' + randomId(1)]],
                [steps.new_work.selectCreatorFromPersonSlot, [0, 0]],
                [steps.new_work.enterCreatorContribution, [0, 50]],
                [steps.new_work.selectCreatorFromPersonSlot, [1, 1]],
                [steps.new_work.enterCreatorContribution, [1, 50]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
                [steps.base.waitForAjax],
                [steps.work.findCurrentlyOpenWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Creator']],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorName, [0]],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Creator']],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorSuisaIpiNumber, [0]],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Creator']],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorInternalIpiNumber, [1]],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountToBe, [1]],
                [steps.work.clickWorkSearchMatch, [0]],
                [steps.base.waitForAjax],
                [steps.work.validateWorkId],
            ]
        },
        {
            name: 'Search for a work by primary title and creator name (combination)',
            tags: [],
            steps: [
                [steps.new_work.goToNewWorkPage],
                [steps.new_work.enterPrimaryWorkTitle, ['TEST WORK ' + randomId(1)]],
                [steps.new_work.selectRandomCreator, [0]],
                [steps.new_work.enterCreatorContribution, [0, 100]],
                [steps.new_work.optToIncludeWorkOnWebsite, [false]],
                [steps.new_work.saveWork],
                [steps.new_work.validateSaveWorkRedirection],
                [steps.base.waitForAjax],

                [steps.base.goToHomePage],
                [steps.work.selectWorkSearchFilterTag, [0, 'Creator']],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorName, [0]],
                [steps.base.waitForAjax],
                [steps.work.addAnotherWorkSearchTerm],
                [steps.work.selectWorkSearchFilterTag, [1, 'Title']],
                [steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountNotToBe, [0]],

                [steps.work.removeWorkSearchTerm, [0]],
                [steps.work.selectWorkSearchFilterTag, [0, 'Title']],
                [steps.work.searchForWorkUsingPreviouslyEnteredPrimaryTitle],
                [steps.base.waitForAjax],
                [steps.work.addAnotherWorkSearchTerm],
                [steps.work.selectWorkSearchFilterTag, [1, 'Creator']],
                [steps.work.searchForWorkUsingPreviouslySelectedCreatorName, [0]],
                [steps.base.waitForAjax],
                [steps.work.expectWorkSearchMatchCountNotToBe, [0]],
            ]
        },
    ];

module.exports = {
    commonFeatureTags: ['search-for-works'],
    feature: feature,
    beforeFeature: beforeFeature
};

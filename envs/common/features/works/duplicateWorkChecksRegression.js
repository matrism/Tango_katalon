'use strict';

var using = fnutils.using,
    randomString = random.string.makeMemoizedGenerator(),
    randomWorkString = randomString();

exports.beforeFeature = [
    [steps.login.itLogin]
];

exports.commonFeatureTags = ['duplicateWorkChecksRegression', 'works', 'regression'];

exports.feature = [
    {
        name: 'Create 2 people',
        tags: [],
        steps: function () {
            _.times(2, function(i) {
                steps.person.useBlankPersonSlot(i);

                using(steps.newPerson, function() {
                    this.goToNewPersonPage();

                    this.enterLastName(
                        'TEST PERSON ' + randomString('person' + i)
                    );

                    this.enterAffiliatedSocietySearchTerms('ASCAP');
                    this.selectAffiliatedSocietySearchResultByIndex(0);

                    this.save();
                });

                steps.person.findInternalIpiNumber();
            });
        }
    },
    {
        name: 'Duplicate work checks',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 0);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMediumCreatorContribution(0);
            steps.newWork.selectCreatorFromPersonSlot(1, 1);
            steps.newWork.enterMediumCreatorContribution(1);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK GRINCH ' + randomWorkString);
            steps.newWork.enterAlternateWorkTitle(0, 'THE TEST WORK WONDERLAND ' + randomWorkString);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 1);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.clickFirstSimilarWorkTitle();
            steps.duplicateWorkChecks.validateSimilarWorkLinkDestination();

            steps.base.useBlankEntityDataSlot('work', 2);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 3);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 4);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 5);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 6);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 7);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 8);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.expectSimilarWorksPopUpToHaveScrollbar();

            steps.base.useBlankEntityDataSlot('work', 9);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('A TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterPrimaryWorkTitle('AN TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterPrimaryWorkTitle('THE TEST WORK WONDERLAND ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterPrimaryWorkTitle('TEST  WORK   WONDERLAND    ' + randomWorkString);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterPrimaryWorkTitle(':TEST.WORK,WONDERLAND;' + randomWorkString + '?');
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 10);

            steps.newWork.goToNewWorkPage();
            steps.newWork.selectCreatorFromPersonSlot(0, 1);
            steps.newWork.enterMaximumCreatorContribution(0);
            steps.newWork.enterPrimaryWorkTitle('TEST WORK EUPHORIA ' + randomWorkString);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.sleep(100);
            steps.work.hoverPrimaryWorkTitleHeading();
            steps.work.editWorkTitles();
            steps.work.enterPrimaryWorkTitle('TEST WORK GRINCH ' + randomWorkString);
            steps.work.waitTitleEditorCheckForDuplicates();
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.work.saveWorkTitles();
        }
    }
];

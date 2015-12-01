'use strict';

var using = fnutils.using,
    randomString = random.string.makeMemoizedGenerator(),
    randomWorkString = randomString();

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'duplicateWorkChecksRegression',
    'works',
    'regression'
];

exports.feature = [
    {
        name: 'Create 2 people',
        tags: [],
        steps: function() {
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

            using(steps.newWork, function() {
                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMediumCreatorContribution(0);
                this.selectCreatorFromPersonSlot(1, 1);
                this.enterMediumCreatorContribution(1);
                this.enterPrimaryWorkTitle('TEST WORK GRINCH ' + randomWorkString);

                this.enterAlternateWorkTitle(
                    0, 'THE TEST WORK WONDERLAND ' + randomWorkString
                );

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 1);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.clickFirstSimilarWorkTitle();
                steps.duplicateWorkChecks.validateSimilarWorkLinkDestination();

                steps.base.useBlankEntityDataSlot('work', 2);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 3);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 4);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 5);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 6);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 7);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 8);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.expectSimilarWorksPopUpToHaveScrollbar();

                steps.base.useBlankEntityDataSlot('work', 9);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'A TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterPrimaryWorkTitle(
                    'AN TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterPrimaryWorkTitle(
                    'THE TEST WORK WONDERLAND ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterPrimaryWorkTitle(
                    'TEST  WORK   WONDERLAND    ' + randomWorkString
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterPrimaryWorkTitle(
                    ':TEST.WORK,WONDERLAND;' + randomWorkString + '?'
                );

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 10);

                this.goToNewWorkPage();
                this.selectCreatorFromPersonSlot(0, 1);
                this.enterMaximumCreatorContribution(0);

                this.enterPrimaryWorkTitle(
                    'TEST WORK EUPHORIA ' + randomWorkString
                );

                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverPrimaryWorkTitleHeading();
                this.editWorkTitles();
                this.enterPrimaryWorkTitle('TEST WORK GRINCH ' + randomWorkString);
                this.waitTitleEditorCheckForDuplicates();

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.saveWorkTitles();
            });
        }
    }
];

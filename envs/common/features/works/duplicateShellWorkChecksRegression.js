'use strict';

var using = fnutils.using,
    randomString = random.string.makeMemoizedGenerator();

exports.id = '046a97d6-bfea-433e-ba37-2bb1687068af';

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'duplicateShellWorkChecksRegression',
    'works',
    'regression',
    'notValid'
];

exports.feature = [
    {
        name: 'Create 2 people',
        tags: [],
        steps: criticalScenario(() => {
            steps.person.useBlankPersonSlot(0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();

                this.enterLastName('TEST PERSON ' + randomString(0));

                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);

                this.save();
            });

            steps.person.findInternalIpiNumber();
        })
    },
    {
        name: 'Duplicate shell work check',
        tags: [],
        steps: criticalScenario(() => {
            using(steps.newWork, function() {
                steps.base.useBlankEntityDataSlot('work', 0);

                this.goToNewWorkPage();

                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomString(0));

                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Composite of Samples');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterCreatorContribution(0, 50);
                this.enterNewShellWork(0, 'TEST SHELL WORK ' + randomString(0));
                this.enterComponentWorkAllocation(0, 50);
                this.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
                this.enterShellWorkCreatorContribution(0, 0, 100);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 1);

                this.goToNewWorkPage();
                this.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomString(0));
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Composite of Samples');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterCreatorContribution(0, 50);
                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
                this.enterNewShellWork(0, 'TEST SHELL WORK ' + randomString(0));
                this.enterComponentWorkAllocation(0, 50);
                this.selectShellWorkCreatorFromPersonSlot(0, 0, 0);

                // steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                // steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterShellWorkCreatorContribution(0, 0, 100);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();
            });

            steps.base.sleep(100);

            using(steps.work, function() {
                this.hoverCreatorNamesContainer();
                this.editCreators();
                this.validateComponentWorkId(0);
                this.validateComponentWorkName(0);
                this.validateComponentWorkAllocation(0);
                this.clickShowComponentWorkDetailsButton(0);
                this.validateShellWorkCreatorName(0, 0);
                this.validateShellWorkCreatorContribution(0, 0);
            });
        })
    },
    {
        name: 'Duplicate shell work check: Ignore articles, extra whitespace, and punctuation',
        tags: [],
        steps: function() {
            using(steps.newWork, function() {
                steps.base.useBlankEntityDataSlot('work', 2);

                this.goToNewWorkPage();

                this.enterPrimaryWorkTitle(
                    'TEST COMPOSITE WORK ' + randomString(2)
                );

                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Composite of Samples');
                this.selectCreatorFromPersonSlot(0, 0);
                this.enterCreatorContribution(0, 50);
                this.enterNewShellWork(0, 'TEST SHELL WORK ' + randomString(1));
                this.enterComponentWorkAllocation(0, 50);
                this.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
                this.enterShellWorkCreatorContribution(0, 0, 100);
                this.optToIncludeWorkOnWebsite(false);
                this.saveWork();
                this.validateSaveWorkRedirection();

                steps.base.useBlankEntityDataSlot('work', 3);

                this.goToNewWorkPage();
                this.clickCompositeWorkCheckbox();
                this.selectCompositeWorkType('Composite of Samples');
                this.enterNewShellWork(0, 'A TEST SHELL WORK ' + randomString(1));
                this.selectShellWorkCreatorFromPersonSlot(0, 0, 0);

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterNewShellWork(1, 'AN TEST SHELL WORK ' + randomString(1));
                this.selectShellWorkCreatorFromPersonSlot(1, 0, 0);

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterNewShellWork(2, 'THE TEST SHELL WORK ' + randomString(1));
                this.selectShellWorkCreatorFromPersonSlot(2, 0, 0);

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterNewShellWork(3, 'TEST  SHELL   WORK     ' + randomString(1));
                this.selectShellWorkCreatorFromPersonSlot(3, 0, 0);

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();

                this.enterNewShellWork(4, ':TEST.SHELL,WORK;' + randomString(1));
                this.selectShellWorkCreatorFromPersonSlot(4, 0, 0);

                steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
                steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            });
        }
    }
];

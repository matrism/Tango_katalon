'use strict';

var using = fnutils.using,
    randomString = random.string.makeMemoizedGenerator();

exports.beforeFeature = function() {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['duplicateShellWorkChecksRegression', 'works', 'regression'];

exports.feature = [
    {
        name: 'Create 2 people',
        tags: [],
        steps: function () {
            steps.person.useBlankPersonSlot(0);

            using(steps.newPerson, function() {
                this.goToNewPersonPage();

                this.enterLastName('TEST PERSON ' + randomString(0));

                this.enterAffiliatedSocietySearchTerms('ASCAP');
                this.selectAffiliatedSocietySearchResultByIndex(0);

                this.save();
            });

            steps.person.findInternalIpiNumber();
        }
    },
    {
        name: 'Duplicate shell work check',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 0);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomString(0));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Composite of Samples');
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterCreatorContribution(0, 50);
            steps.newWork.enterNewShellWork(0, 'TEST SHELL WORK ' + randomString(0));
            steps.newWork.enterComponentWorkAllocation(0, 50);
            steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
            steps.newWork.enterShellWorkCreatorContribution(0, 0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 1);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomString(1));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Composite of Samples');
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterCreatorContribution(0, 50);
            steps.newWork.enterNewShellWork(0, 'TEST SHELL WORK ' + randomString(0));
            steps.newWork.enterComponentWorkAllocation(0, 50);
            steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterShellWorkCreatorContribution(0, 0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();
            steps.base.sleep(100);
            steps.work.hoverCreatorNamesContainer();
            steps.work.editCreators();
            steps.work.validateComponentWorkId(0);
            steps.work.validateComponentWorkName(0);
            steps.work.validateComponentWorkAllocation(0);
            steps.work.clickShowComponentWorkDetailsButton(0);
            steps.work.validateShellWorkCreatorName(0, 0);
            steps.work.validateShellWorkCreatorContribution(0, 0);
        }
    },
    {
        name: 'Duplicate shell work check: Ignore articles, extra whitespace, and punctuation',
        tags: [],
        steps: function() {
            steps.base.useBlankEntityDataSlot('work', 2);

            steps.newWork.goToNewWorkPage();
            steps.newWork.enterPrimaryWorkTitle('TEST COMPOSITE WORK ' + randomString(2));
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Composite of Samples');
            steps.newWork.selectCreatorFromPersonSlot(0, 0);
            steps.newWork.enterCreatorContribution(0, 50);
            steps.newWork.enterNewShellWork(0, 'TEST SHELL WORK ' + randomString(1));
            steps.newWork.enterComponentWorkAllocation(0, 50);
            steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
            steps.newWork.enterShellWorkCreatorContribution(0, 0, 100);
            steps.newWork.optToIncludeWorkOnWebsite(false);
            steps.newWork.saveWork();
            steps.newWork.validateSaveWorkRedirection();

            steps.base.useBlankEntityDataSlot('work', 3);

            steps.newWork.goToNewWorkPage();
            steps.newWork.clickCompositeWorkCheckbox();
            steps.newWork.selectCompositeWorkType('Composite of Samples');
            steps.newWork.enterNewShellWork(0, 'A TEST SHELL WORK ' + randomString(1));
            steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterNewShellWork(1, 'AN TEST SHELL WORK ' + randomString(1));
            steps.newWork.selectShellWorkCreatorFromPersonSlot(1, 0, 0);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterNewShellWork(2, 'THE TEST SHELL WORK ' + randomString(1));
            steps.newWork.selectShellWorkCreatorFromPersonSlot(2, 0, 0);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterNewShellWork(3, 'TEST  SHELL   WORK     ' + randomString(1));
            steps.newWork.selectShellWorkCreatorFromPersonSlot(3, 0, 0);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
            steps.newWork.enterNewShellWork(4, ':TEST.SHELL,WORK;' + randomString(1));
            steps.newWork.selectShellWorkCreatorFromPersonSlot(4, 0, 0);
            steps.duplicateWorkChecks.expectDuplicateWorksPopUpToBeDisplayed();
            steps.duplicateWorkChecks.ignoreSimilarWorksWarning();
        }
    }
];

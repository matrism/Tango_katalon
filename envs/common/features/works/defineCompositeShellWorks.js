'use strict';

let random = require('../../../../helpers/random'),
    randomString = random.string.makeMemoizedGenerator();

exports.id = 'f3031baf-95ec-4cb3-bf56-bf0ebf46753a';

exports.beforeFeature = () => {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['works', 'workCompositeShell', 'regression'];

exports.feature = [
        {
            name: 'Create persons to use as creators for COS and MED composite work',
            tags: ['ts-reg1'],
            steps: function(){
                _.times(4, (i) => {
                    steps.person.useBlankPersonSlot(i);

                    steps.newPerson.goToNewPersonPage();

                    steps.newPerson.enterLastName(
                        'TEST PERSON ' + (i + 1) + ' ' + randomString('person' + i)
                    );

                    steps.newPerson.enterAffiliatedSocietySearchTerms('ASCAP');
                    steps.newPerson.selectAffiliatedSocietySearchResultByIndex(0);

                    steps.newPerson.save();

                    steps.person.findInternalIpiNumber();
                });
            }
        },
        {
            name: 'Define a COS composite work with shell works',
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
                steps.newWork.ensureTotalContributionTooLowMessageIsDisplayed();
                steps.newWork.enterComponentWorkAllocation(0, 50);
                steps.newWork.validateTotalContribution();
                steps.newWork.validateDefaultShellWorkTitleLanguage(0);
                steps.newWork.expectShellWorkTitleToMatchEnteredOne(0);
                steps.newWork.validateDefaultShellWorkCreatorRole(0, 0);
                steps.newWork.validateRequiredShellWorkCreatorNameField(0, 0);
                steps.newWork.selectShellWorkCreatorFromPersonSlot(0, 0, 0);
                steps.newWork.validateRequiredShellWorkCreatorContributionField(0, 0);
                steps.newWork.enterShellWorkCreatorContribution(0, 0, 100);
                steps.newWork.optToIncludeWorkOnWebsite(false);
                steps.newWork.saveWork();
                steps.base.sleep(1000);


                steps.work.hoverCreatorNamesContainer();
                steps.work.editCreators();
                steps.work.validateComponentWorkId(0);
                steps.work.validateComponentWorkName(0);
                steps.work.validateComponentWorkAllocation(0, '50');
                steps.work.clickShowComponentWorkDetailsButton(0);
                steps.work.validateShellWorkCreatorName(0, 0);


                steps.mainHeader.search.selectEntityType('Works');
                steps.work.searchForPreviouslyEnteredComponentWork(0);
                steps.work.expectNoResultsForWorkSearchMessageToBeDisplayed();

            }
        },
        {
            name: 'Define a POT composite work with shell works',
            tags: [],
            steps: function() {
                executeLegacyStepsArray([
                [steps.base.useBlankEntityDataSlot, ['work', 1]],

                [steps.newWork.goToNewWorkPage],
                [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomString(1)]],
                [steps.newWork.clickCompositeWorkCheckbox],
                [steps.newWork.selectCompositeWorkType, ['Potpourri']],
                [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
                [steps.newWork.enterCreatorContribution, [0, 50]],
                [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomString(1)]],
                [steps.newWork.enterComponentWorkAllocation, [0, 50]],

                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [0, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.newWork.optToIncludeWorkOnWebsite, [false]],
                [steps.newWork.saveWork],

                [steps.base.sleep, [100]],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkId, [0]],
                [steps.work.validateComponentWorkName, [0]],
                [steps.work.validateComponentWorkAllocation, [0, '50']],
                [steps.work.clickShowComponentWorkDetailsButton, [0]],
                [steps.work.validateShellWorkCreatorName, [0, 0]],

                ]);
            }
        },
        {
            name: 'Define a UCO composite work with shell works',
            tags: [],
            steps: function () {

                executeLegacyStepsArray([
                [steps.base.useBlankEntityDataSlot, ['work', 2]],

                [steps.newWork.goToNewWorkPage],
                [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomString(2)]],
                [steps.newWork.clickCompositeWorkCheckbox],
                [steps.newWork.selectCompositeWorkType, ['Unspecified Composite']],
                [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
                [steps.newWork.enterCreatorContribution, [0, 50]],
                [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomString(2)]],
                [steps.newWork.enterComponentWorkAllocation, [0, 50]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [0, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.newWork.optToIncludeWorkOnWebsite, [false]],
                [steps.newWork.saveWork],
                [steps.newWork.validateSaveWorkRedirection],
                [steps.base.sleep, [100]],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkId, [0]],
                [steps.work.validateComponentWorkName, [0]],
                [steps.work.validateComponentWorkAllocation, [0, '50']],
                [steps.work.clickShowComponentWorkDetailsButton, [0]],
                [steps.work.validateShellWorkCreatorName, [0, 0]],

                ]);
            }
        },
        {
            name: 'Define a MED composite work with shell works',
            tags: [],
            steps: function() {
                executeLegacyStepsArray([
                [steps.base.useBlankEntityDataSlot, ['work', 3]],

                [steps.newWork.goToNewWorkPage],
                [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomString(3)]],
                [steps.newWork.clickCompositeWorkCheckbox],
                [steps.newWork.selectCompositeWorkType, ['Medley']],
                [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomString(3.1)]],
                [steps.newWork.enterComponentWorkAllocation, [0, 50]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [0, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.newWork.enterNewShellWork, [1, 'TEST SHELL WORK ' + randomString(3.2)]],
                [steps.newWork.enterComponentWorkAllocation, [1, 50]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [1, 0, 1]],
                [steps.newWork.enterShellWorkCreatorContribution, [1, 0, 100]],
                [steps.newWork.optToIncludeWorkOnWebsite, [false]],
                [steps.newWork.saveWork],
                [steps.newWork.validateSaveWorkRedirection],
                [steps.base.sleep, [100]],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkId, [0]],
                [steps.work.validateComponentWorkName, [0]],
                [steps.work.validateComponentWorkAllocation, [0, '50']],
                [steps.work.clickShowComponentWorkDetailsButton, [0]],
                [steps.work.validateShellWorkCreatorName, [0, 0]],

                [steps.work.validateComponentWorkId, [1]],
                [steps.work.validateComponentWorkName, [1]],
                [steps.work.validateComponentWorkAllocation, [1, '50']],
                [steps.work.clickShowComponentWorkDetailsButton, [1]],
                [steps.work.validateShellWorkCreatorName, [1, 0]],

                ]);
            }
        },
        {
            name: 'Define COS composites with multiple shell works and different allocation combinations',
            tags: [],
            steps: function()
        {
                executeLegacyStepsArray([
                [steps.base.useBlankEntityDataSlot, ['work', 4]],

                [steps.newWork.goToNewWorkPage],
                [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomString(4)]],
                [steps.newWork.clickCompositeWorkCheckbox],
                [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
                [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
                [steps.newWork.enterCreatorContribution, [0, 20]],
                [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK 1234']],
                [steps.newWork.enterComponentWorkAllocation, [0, 20]],

                [steps.newWork.selectRandomShellWorkCreator, [0, 0, 'Ahmad Kamar, Afina Norhiza']],
                [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.newWork.enterNewShellWork, [1, 'TEST SHELL WORK DEUROENF']],
                [steps.newWork.enterComponentWorkAllocation, [1, 20]],

                [steps.newWork.selectRandomShellWorkCreator, [1, 0, 'SANGITA SPA']],
                [steps.newWork.enterShellWorkCreatorContribution, [1, 0, 100]],
                [steps.newWork.enterNewShellWork, [2, 'TEST SHELL WORK E7204JRPD']],
                [steps.newWork.enterComponentWorkAllocation, [2, 20]],

                [steps.newWork.selectRandomShellWorkCreator, [2, 0, 'PARULEKAR, SHILPAR']],
                [steps.newWork.enterShellWorkCreatorContribution, [2, 0, 100]],
                [steps.newWork.ensureTotalContributionTooLowMessageIsDisplayed],
                [steps.newWork.enterNewShellWork, [3, 'TEST SHELL WORK 3UNDODLFWEW']],
                [steps.newWork.enterComponentWorkAllocation, [3, 20]],

                [steps.newWork.selectRandomShellWorkCreator, [3, 0, 'CROWE, B. DOUGLAS']],
                [steps.newWork.enterShellWorkCreatorContribution, [3, 0, 100]],
                [steps.newWork.validateTotalContribution],
                [steps.newWork.optToIncludeWorkOnWebsite, [false]],
                [steps.newWork.saveWork],
                [steps.newWork.validateSaveWorkRedirection],
                [steps.base.sleep, [5000]],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkId, [0]],
                [steps.work.validateComponentWorkName, [0]],
                [steps.work.validateComponentWorkAllocation, [0, '20']],
                [steps.work.clickShowComponentWorkDetailsButton, [0]],
                [steps.work.validateShellWorkCreatorName, [0, 0]],

                [steps.work.validateComponentWorkId, [1]],
                [steps.work.validateComponentWorkName, [1]],
                [steps.work.validateComponentWorkAllocation, [1, '20']],
                [steps.work.clickShowComponentWorkDetailsButton, [1]],
                [steps.work.validateShellWorkCreatorName, [1, 0]],

                [steps.work.validateComponentWorkId, [2]],
                [steps.work.validateComponentWorkName, [2]],
                [steps.work.validateComponentWorkAllocation, [2, '20']],
                [steps.work.clickShowComponentWorkDetailsButton, [2]],
                [steps.work.validateShellWorkCreatorName, [2, 0]],

                [steps.work.validateComponentWorkId, [3]],
                [steps.work.validateComponentWorkName, [3]],
                [steps.work.validateComponentWorkAllocation, [3, '20']],
                [steps.work.clickShowComponentWorkDetailsButton, [3]],
                [steps.work.validateShellWorkCreatorName, [3, 0]],


                [steps.base.useBlankEntityDataSlot, ['work', 5]],

                [steps.newWork.goToNewWorkPage],
                [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomString(5)]],
                [steps.newWork.clickCompositeWorkCheckbox],
                [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
                [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
                [steps.newWork.enterCreatorContribution, [0, 65]],
                [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomString(5.1)]],
                [steps.newWork.enterComponentWorkAllocation, [0, 5]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [0, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.newWork.enterNewShellWork, [1, 'TEST SHELL WORK ' + randomString(5.2)]],
                [steps.newWork.enterComponentWorkAllocation, [1, 6]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [1, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [1, 0, 100]],
                [steps.newWork.enterNewShellWork, [2, 'TEST SHELL WORK ' + randomString(5.3)]],
                [steps.newWork.enterComponentWorkAllocation, [2, 7]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [2, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [2, 0, 100]],
                [steps.newWork.enterNewShellWork, [3, 'TEST SHELL WORK ' + randomString(5.5)]],
                [steps.newWork.enterComponentWorkAllocation, [3, 8]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [3, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [3, 0, 100]],
                [steps.newWork.ensureTotalContributionTooLowMessageIsDisplayed],
                [steps.newWork.enterNewShellWork, [4, 'TEST SHELL WORK ' + randomString(5.6)]],
                [steps.newWork.enterComponentWorkAllocation, [4, 9]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [4, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [4, 0, 100]],
                [steps.newWork.validateTotalContribution],
                [steps.newWork.optToIncludeWorkOnWebsite, [false]],
                [steps.newWork.saveWork],
                [steps.newWork.validateSaveWorkRedirection],
                [steps.base.sleep, [100]],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkId, [0]],
                [steps.work.validateComponentWorkName, [0]],
                [steps.work.validateComponentWorkAllocation, [0, '5']],
                [steps.work.clickShowComponentWorkDetailsButton, [0]],
                [steps.work.validateShellWorkCreatorName, [0, 0]],

                [steps.work.validateComponentWorkId, [1]],
                [steps.work.validateComponentWorkName, [1]],
                [steps.work.validateComponentWorkAllocation, [1, '6']],
                [steps.work.clickShowComponentWorkDetailsButton, [1]],
                [steps.work.validateShellWorkCreatorName, [1, 0]],

                [steps.work.validateComponentWorkId, [2]],
                [steps.work.validateComponentWorkName, [2]],
                [steps.work.validateComponentWorkAllocation, [2, '7']],
                [steps.work.clickShowComponentWorkDetailsButton, [2]],
                [steps.work.validateShellWorkCreatorName, [2, 0]],

                [steps.work.validateComponentWorkId, [3]],
                [steps.work.validateComponentWorkName, [3]],
                [steps.work.validateComponentWorkAllocation, [3, '8']],
                [steps.work.clickShowComponentWorkDetailsButton, [3]],
                [steps.work.validateShellWorkCreatorName, [3, 0]],

                [steps.work.validateComponentWorkId, [4]],
                [steps.work.validateComponentWorkName, [4]],
                [steps.work.validateComponentWorkAllocation, [4, '9']],
                [steps.work.clickShowComponentWorkDetailsButton, [4]],
                [steps.work.validateShellWorkCreatorName, [4, 0]],



                ]);
            }
        },
        {
            name: 'Edit a COS composite work with shell works',
            tags: ['ts-reg1'],
            steps: function(){


            executeLegacyStepsArray([
                [steps.base.useBlankEntityDataSlot, ['work', 7]],

                [steps.newWork.goToNewWorkPage],
                 //[steps.work.goToWorkPageById, ['WW 015123136 00']],
                    [steps.newWork.enterPrimaryWorkTitle, ['TEST COMPOSITE WORK ' + randomString(7)]],
                [steps.newWork.clickCompositeWorkCheckbox],
                [steps.newWork.selectCompositeWorkType, ['Composite of Samples']],
                [steps.newWork.selectCreatorFromPersonSlot, [0, 0]],
                [steps.newWork.enterCreatorContribution, [0, 50]],
                [steps.newWork.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomString(7.1)]],
                [steps.newWork.enterComponentWorkAllocation, [0, 50]],
                [steps.newWork.expectShellWorkTitleToMatchEnteredOne, [0]],
                [steps.newWork.selectShellWorkCreatorFromPersonSlot, [0, 0, 0]],
                [steps.newWork.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.newWork.optToIncludeWorkOnWebsite, [false]],
                [steps.newWork.saveWork],
                [steps.newWork.validateSaveWorkRedirection],

                [steps.base.sleep, [100]],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.deleteComponentWork, [0]],
                [steps.work.expectComponentWorkDeletionConfirmationPopUpToBeDisplayed],
                [steps.work.confirmComponentWorkDeletion],
                [steps.base.sleep, [100]],
                [steps.work.enterNewShellWork, [0, 'TEST SHELL WORK ' + randomString(7.2)]],
                [steps.work.enterComponentWorkAllocation, [0, 50]],

                [steps.work.expectShellWorkTitleToMatchEnteredOne, [0]],
                [steps.work.selectShellWorkCreatorFromPersonSlot, [0, 0, 0]],
                [steps.work.enterShellWorkCreatorContribution, [0, 0, 100]],
                [steps.base.sleep,[2000]],
                [steps.work.saveCreators],

                [steps.base.refreshPage],
                [steps.work.hoverCreatorNamesContainer],
                [steps.work.editCreators],
                [steps.work.validateComponentWorkAllocation, [0]],
                [steps.work.clickShowComponentWorkDetailsButton, [0]],
                [steps.work.validateShellWorkCreatorName, [0, 0]],
              ]);
            }
        }
];

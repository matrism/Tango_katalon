'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'copyScopes', 'regression'];

exports.feature = [
    {
        name: "Check copy scopes not available in create mode",
        tags: ["check_copy"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.createDealScope.checkDeleteScopeIconIsPresent();
            steps.createDealContractPeriod.addNewContractPeriod();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriodEndDate();
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.checkShareUnshareDeleteScopeIconIsPresent();
            steps.createDealScope.checkShareScopeLinkIsEnabled();
            steps.createDealScope.checkUnshareScopeLinkIsDisabled();
            steps.createDealScope.checkCopyScopeLinkIsDisabled();
            steps.createDealScope.checkDeleteScopeLinkIsEnabled();
            steps.createDealScope.checkCopyScopeDisabledDataTooltip();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCheckShareScopeLinkIsEnabled();
            steps.editDealScope.editCheckUnshareScopeLinkIsDisabled();
            steps.editDealScope.editCheckCopyScopeLinkIsEnabled();
            steps.editDealScope.editCheckCopyScopeEnabledDataTooltip();
            steps.editDealScope.editCheckDeleteScopeLinkIsEnabled();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(2);
            steps.editDealContractPeriod.checkDeleteIconContractPeriodNumberIIsDisplayed(2);
            steps.editDealContractPeriod.deleteContractPeriodNumberI(2);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCheckCopyScopeLinkIsEnabled();
            steps.editDealScope.editCheckDeleteScopeLinkIsEnabled();
            steps.editDealScope.editCheckCopyScopeEnabledDataTooltip();
            steps.editDealScope.editCopySpecificNumberOfScopes(5);
            steps.editDealScope.checkScopeNumberIText(2);
            steps.editDealScope.checkScopeNumberIText(3);
            steps.editDealScope.checkScopeNumberIText(4);
            steps.editDealScope.checkScopeNumberIText(5);
            steps.editDealScope.checkScopeNumberIText(6);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1,5);
            steps.editDealScope.checkScopeNumberINameAndPss(7);
            steps.editDealScope.checkScopeNumberINameAndPss(8);
            steps.editDealScope.checkScopeNumberINameAndPss(9);
            steps.editDealScope.checkScopeNumberINameAndPss(10);
            steps.editDealScope.checkScopeNumberINameAndPss(11);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.itEditOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.editDealScope.editSaveThePublisherShareSetWithModal();
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.selectScopeNumberI(8);
        }
    }
];

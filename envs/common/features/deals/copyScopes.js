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
            steps.editDealScope.editCheckCopyScopeEnabledDataTooltip();
            steps.editDealScope.editCheckDeleteScopeLinkIsEnabled();
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1,5);
            steps.editDealScope.checkScopeNumberIText(2);
            steps.editDealScope.checkScopeNumberIText(3);
            steps.editDealScope.checkScopeNumberIText(4);
            steps.editDealScope.checkScopeNumberIText(5);
            steps.editDealScope.checkScopeNumberIText(6);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();
            steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 5);
            //steps.editDealScope.checkScopeNumberINameAndPss(7);
            //steps.editDealScope.checkScopeNumberINameAndPss(8);
            //steps.editDealScope.checkScopeNumberINameAndPss(9);
            //steps.editDealScope.checkScopeNumberINameAndPss(10);
            //steps.editDealScope.checkScopeNumberINameAndPss(11);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editPublisherSharesSet();
            //steps.editDealScope.itEditOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            //steps.editDealScope.editSaveThePublisherShareSetWithModal();
            //steps.editDealScope.selectScopeNumberI(7);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(8);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(9);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(10);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(11);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 5);
            //steps.editDealScope.selectScopeNumberI(12);
            //steps.editDealScope.checkScopeNumberINameAndPss(12);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(13);
            //steps.editDealScope.checkScopeNumberINameAndPss(13);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(14);
            //steps.editDealScope.checkScopeNumberINameAndPss(14);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(15);
            //steps.editDealScope.checkScopeNumberINameAndPss(15);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            //steps.editDealScope.selectScopeNumberI(16);
            //steps.editDealScope.checkScopeNumberINameAndPss(16);
            //steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.itAddSimpleSocietyAgreementNumbers();












            //steps.editDealScope.selectScopeNumberI(1);
            //steps.royaltyRates.addNewRoyaltySet();
            //steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            //steps.royaltyRates.addRatePercentageToContractualField('10');
            //steps.royaltyRates.clickOnReceiptApplicationMethod();
            //steps.royaltyRates.confirmChangingRateApplicationMethod();
            //steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            //steps.royaltyRates.saveRateSet();
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.checkScopeNumberINameAndRates(1);
            //steps.editDealScope.selectScopeNumberI(2);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(2);
            //steps.editDealScope.selectScopeNumberI(3);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(3);
            //steps.editDealScope.selectScopeNumberI(4);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(4);
            //steps.editDealScope.selectScopeNumberI(5);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(5);
            //steps.editDealScope.selectScopeNumberI(6);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(6);
            //steps.editDealScope.selectScopeNumberI(7);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(7);
            //steps.editDealScope.selectScopeNumberI(8);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(8);
            //steps.editDealScope.selectScopeNumberI(9);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(9);
            //steps.editDealScope.selectScopeNumberI(10);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(10);
            //steps.editDealScope.selectScopeNumberI(11);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(11);
            //steps.editDealScope.selectScopeNumberI(12);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(12);
            //steps.editDealScope.selectScopeNumberI(13);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(13);
            //steps.editDealScope.selectScopeNumberI(14);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(14);
            //steps.editDealScope.selectScopeNumberI(15);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(15);
            //steps.editDealScope.selectScopeNumberI(16);
            //steps.editDealScope.checkScopeNumberINameAndNotRates(16);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 5);
            //steps.editDealScope.selectScopeNumberI(10);
            //steps.editDealScope.selectScopeNumberI(17);
            //steps.editDealScope.checkScopeNumberINameAndPss(17);
            //steps.editDealScope.checkScopeNumberINameAndRates(17);
            //steps.editDealScope.selectScopeNumberI(18);
            //steps.editDealScope.checkScopeNumberINameAndPss(18);
            //steps.editDealScope.checkScopeNumberINameAndRates(18);
            //steps.editDealScope.selectScopeNumberI(19);
            //steps.editDealScope.checkScopeNumberINameAndPss(19);
            //steps.editDealScope.checkScopeNumberINameAndRates(19);
            //steps.editDealScope.selectScopeNumberI(20);
            //steps.editDealScope.checkScopeNumberINameAndPss(20);
            //steps.editDealScope.checkScopeNumberINameAndRates(20);
            //steps.editDealScope.selectScopeNumberI(21);
            //steps.editDealScope.checkScopeNumberINameAndPss(21);
            //steps.editDealScope.checkScopeNumberINameAndRates(21);
            //steps.editDealScope.selectScopeNumberI(10);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.royaltyRates.editSingleRoyaltySet();
            //steps.editRoyaltyRates.openRateSetPanel();
            //steps.royaltyRates.addEffectiveStartDate("2016-08-09");
            //steps.royaltyRates.saveRRData();
            //steps.royaltyRates.saveRateSet();
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.checkTheScopeRateSetDateValue("2016-08-09");
            //steps.editDealScope.selectScopeNumberI(10);
            //steps.editDealScope.selectScopeNumberI(17);
            //steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");
            //steps.editDealScope.selectScopeNumberI(18);
            //steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");
            //steps.editDealScope.selectScopeNumberI(19);
            //steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");
            //steps.editDealScope.selectScopeNumberI(20);
            //steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");
            //steps.editDealScope.selectScopeNumberI(21);
            //steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");


        }
    }
];

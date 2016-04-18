'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'copyScopes', 'regression'];

exports.feature = [
    {
        name: "Check copy scopes not available in create mode and use copy scope shares",
        tags: ["copy_shares"],
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

            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 2);
            steps.editDealScope.checkScopeNumberIText(2);
            steps.editDealScope.checkScopeNumberIText(3);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 2);

            steps.editDealScope.checkScopeNumberINameAndPss(4);
            steps.editDealScope.checkScopeNumberINameAndPss(5);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.itEditOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.editDealScope.editSaveThePublisherShareSetWithModal();

            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkOverrideTitleAndNumber(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 2);

            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkScopeNumberINameAndPss(6);
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkScopeNumberINameAndPss(7);
            steps.editDealScope.checkOverrideTitleAndNumber(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itAddSimpleSocietyAgreementNumbers();
            steps.editDealScope.checkSocietyAgreementAddedOnScope();

            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();
            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 2);

            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkScopeNumberINameAndNotRates(8);
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkScopeNumberINameAndNotRates(9);

            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndRates(1);
            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINameAndNotRates(2);
            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINameAndNotRates(3);
            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkScopeNumberINameAndNotRates(4);
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkScopeNumberINameAndNotRates(5);
            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkScopeNumberINameAndNotRates(6);
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkScopeNumberINameAndNotRates(7);
            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkScopeNumberINameAndNotRates(8);
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkScopeNumberINameAndNotRates(9);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 2);

            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.selectScopeNumberI(10);
            steps.editDealScope.checkScopeNumberINameAndPss(10);
            steps.editDealScope.checkScopeNumberINameAndRates(10);
            steps.editDealScope.selectScopeNumberI(11);
            steps.editDealScope.checkScopeNumberINameAndPss(11);
            steps.editDealScope.checkScopeNumberINameAndRates(11);

            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.royaltyRates.addEffectiveStartDate("2016-08-09");
            steps.royaltyRates.saveRateSet();
            steps.royaltyRates.confirmSaveRateSet();

            steps.deal.refreshThePage();
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkTheScopeRateSetDateValue("2016-08-09");

            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.selectScopeNumberI(10);
            steps.editDealScope.checkTheScopeRateSetDateValue("2016-08-09");
            steps.editDealScope.selectScopeNumberI(11);
            steps.editDealScope.checkTheScopeRateSetDateValue("2016-08-09");

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editDeleteThePublisherShareSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINoPss(1);
            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkScopeNumberINoPss(4);
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkScopeNumberINoPss(5);
            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkScopeNumberINoPss(6);
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkScopeNumberINoPss(7);
            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkScopeNumberINoPss(8);
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkScopeNumberINoPss(9);
            steps.editDealScope.selectScopeNumberI(10);
            steps.editDealScope.checkScopeNumberINoPss(10);
            steps.editDealScope.selectScopeNumberI(11);
            steps.editDealScope.checkScopeNumberINoPss(11);

            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.royaltyRates.deleteRateSet();
            steps.royaltyRates.confirmDeleteRateSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINoRr(1);
            steps.editDealScope.selectScopeNumberI(10);
            steps.editDealScope.checkScopeNumberINoRr(10);
            steps.editDealScope.selectScopeNumberI(11);
            steps.editDealScope.checkScopeNumberINoRr(11);
        }
    },
    {
        name: "Check copy scopes not available in create mode and check copy scopes unshares",
        tags: ["copy_unshares"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePss(1, 2);

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.itEditOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(0);
            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(0);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePss(1, 2);

            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkScopeNumberINameAndPss(4);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkScopeNumberINameAndPss(5);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itAddSimpleSocietyAgreementNumbers();
            steps.editDealScope.checkSocietyAgreementAddedOnScope();

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkSocietyAgreementNotAddedOnScope();
            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkSocietyAgreementNotAddedOnScope();
            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkSocietyAgreementNotAddedOnScope();
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkSocietyAgreementNotAddedOnScope();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePss(1, 2);

            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkScopeNumberINameAndPss(6);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkScopeNumberINameAndPss(7);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();


            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINameAndRates(1);
            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINameAndNotRates(2);
            steps.editDealScope.checkScopeNumberINoRr(2);
            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINameAndNotRates(3);
            steps.editDealScope.checkScopeNumberINoRr(3);
            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkScopeNumberINameAndNotRates(4);
            steps.editDealScope.checkScopeNumberINoRr(4);
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkScopeNumberINameAndNotRates(5);
            steps.editDealScope.checkScopeNumberINoRr(5);
            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkScopeNumberINameAndNotRates(6);
            steps.editDealScope.checkScopeNumberINoRr(6);
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkScopeNumberINameAndNotRates(7);
            steps.editDealScope.checkScopeNumberINoRr(7);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberIWithoutSharePssAndRR(1, 2);

            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkScopeNumberINameAndPss(8);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();
            steps.editDealScope.checkScopeNumberINameAndRates(8);
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkScopeNumberINameAndPss(9);
            steps.editDealScope.checkNoSharePublisherShareSetIconPresent();
            steps.editDealScope.checkOverrideTitleAndNumber(1);
            steps.editDealScope.checkSocietyAgreementAddedOnScope();
            steps.editDealScope.checkScopeNumberINameAndRates(9);

            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.royaltyRates.addEffectiveStartDate("2016-08-09");
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.saveRateSet();

            steps.deal.refreshThePage();
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkTheScopeRateSetDateValue("2016-08-09");

            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkTheScopeRateSetDateValueNotEqual("2016-08-09");

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editDeleteThePublisherShareSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINoPss(1);
            steps.editDealScope.selectScopeNumberI(4);
            steps.editDealScope.checkScopeNumberINameAndPss(4);
            steps.editDealScope.selectScopeNumberI(5);
            steps.editDealScope.checkScopeNumberINameAndPss(5);
            steps.editDealScope.selectScopeNumberI(6);
            steps.editDealScope.checkScopeNumberINameAndPss(6);
            steps.editDealScope.selectScopeNumberI(7);
            steps.editDealScope.checkScopeNumberINameAndPss(7);
            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkScopeNumberINameAndPss(8);
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkScopeNumberINameAndPss(9);

            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.royaltyRates.deleteRateSet();
            steps.royaltyRates.confirmDeleteRateSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.checkScopeNumberINoRr(1);
            steps.editDealScope.selectScopeNumberI(8);
            steps.editDealScope.checkScopeNumberINameAndRates(8);
            steps.editDealScope.selectScopeNumberI(9);
            steps.editDealScope.checkScopeNumberINameAndRates(9);
        }
    },
    {
        name: "Check copy scope for payees with shares pusblishers and rates",
        tags: ["copy_payees", 'broken', 'tango_broken'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.editDealPayee.clickOnPayeesHeader();
            steps.editDealPayee.editPayeeArea();
            steps.editDealPayee.itEditAddPayeePersonAndAssociateScope("payee", 1);
            steps.editDealPayee.editSavePayeePage();

            steps.deal.goToTermsDealTabDetails();
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillInNumberOfCopiesForScope(1, 1);
            steps.editDealScope.checkPayeesPresentInCopyScopeModal();
            steps.editDealScope.editClickOnCancelButtonCopySpecificNumberOfScopesFromScopeNumberI(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editCopySpecificNumberOfScopesFromScopeNumberI(1, 2);

            steps.editDealScope.selectScopeNumberI(2);
            steps.editDealScope.checkScopeNumberINameAndPss(2);
            steps.editDealScope.checkSharePublisherShareSetIconPresent();
            steps.editDealScope.checkScopeNumberINameAndRates(2);
            steps.editDealScope.checkScopeNumberINameAndPayees(2);

            steps.editDealScope.selectScopeNumberI(3);
            steps.editDealScope.checkScopeNumberINameAndPss(3);
            steps.editDealScope.checkSharePublisherShareSetIconPresent();
            steps.editDealScope.checkScopeNumberINameAndRates(3);
            steps.editDealScope.checkScopeNumberINameAndPayees(3);

            steps.editDealPayee.clickOnPayeesHeader();
            steps.editDealPayee.editCheckScopesAssociatedToPayee(1);
            steps.editDealPayee.editCheckScopesAssociatedToPayee(2);
            steps.editDealPayee.editCheckScopesAssociatedToPayee(3);

            steps.deal.goToTermsDealTabDetails();
            steps.editDealScope.selectScopeNumberI(1);
            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();
            steps.royaltyRates.deleteRateSet();
            steps.royaltyRates.confirmDeleteRateSet();

            steps.editDealScope.checkScopeNumberINameAndNotPayees(1);
            steps.editDealScope.checkScopeNumberINameAndNotPayees(2);
            steps.editDealScope.checkScopeNumberINameAndNotPayees(3);

            steps.editDealPayee.clickOnPayeesHeader();
            steps.editDealPayee.editCheckNoScopesOnPayeeScreen();

            //cancel and dirty check
            steps.deal.goToTermsDealTabDetails();
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillInNumberOfCopiesForScope(1, 1);
            steps.editDealScope.selectScopeNumberI(2);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillInNumberOfCopiesForScope(1, 1);
            steps.editDealScope.editClickOnCancelButtonCopySpecificNumberOfScopesFromScopeNumberI(1);

            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillInNumberOfCopiesForScope(1, 1);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.editClickOnCancelButtonCopySpecificNumberOfScopesFromScopeNumberI(1);
        }
    },

    {
        name: "Check copy scope performance test with pss and rates",
        tags: ['copy_performance'],
        steps: function () {
            var timeout = 15000;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.itEditAddPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            //steps.editDealScope.waitForScopeNumberIToBeVisible(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealScope.checkTheNumberOfScopesPerDeal("1101");
        }
    }
];
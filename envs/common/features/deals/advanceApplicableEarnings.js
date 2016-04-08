'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'aae'];

exports.feature = [
    {
        name: 'Check AAE create',
        tags: ['createAae'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.createDealAdvances.clickOnAddFirstAdvanceLink();
            steps.createDealAdvances.selectRandomContractPeriodAdvanceDetails();
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetails();
            steps.createDealAdvances.selectRandomCurrencyAdvanceDetails();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(1);
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(2);
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(2) div[data-ng-model='apd.payee']")));
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(2);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(2);
            steps.createDealAdvances.itAddCompleteAdvanceApplicableEarnings();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },

    {
        name: 'Check AAE edit  existing AAE',
        tags: ['editExistingAae'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.createDealAdvances.clickOnAddFirstAdvanceLink();
            steps.createDealAdvances.selectRandomContractPeriodAdvanceDetails();
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetails();
            steps.createDealAdvances.selectRandomCurrencyAdvanceDetails();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(1);
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(2);
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(2) div[data-ng-model='apd.payee']")));
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(2);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(2);
            steps.createDealAdvances.itAddCompleteAdvanceApplicableEarnings();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToTab('Advances');
            steps.editDealAdvanceApplicableEarnings.itEditExistingAdvanceApplicableEarnings();


        }
    },

    {
        name: 'Check AAE edit  existing AAE',
        tags: ['editAddAaeClearAllSetDefaults'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToTab('Advances');
            steps.editDealAdvanceApplicableEarnings.itEditAddAdvanceApplicableEarnings();

            //clear all set defaults
            steps.editDealAdvanceApplicableEarnings.editAdvanceApplicableEarningsArea();
            steps.editDealAdvanceApplicableEarnings.editClickOnClearAllLinkAdvanceApplicableEarnings();
            steps.editDealAdvanceApplicableEarnings.editClickOnSetDefaultsLinkAdvanceApplicableEarnings();
            steps.editDealAdvanceApplicableEarnings.editClickOnSaveAdvanceApplicableEarnings();

            steps.editDealAdvanceApplicableEarnings.clickOnAdvanceSummaryHeaderTitleLink();
            steps.editDealAdvanceApplicableEarnings.clickOnAdvanceApplicableEarningsHeaderTitleLink();

        }
    },

    {
        name: 'Check AAE edit  existing AAE',
        tags: ['editDirtyCheckAae'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.createDealAdvances.clickOnAddFirstAdvanceLink();
            steps.createDealAdvances.selectRandomContractPeriodAdvanceDetails();
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetails();
            steps.createDealAdvances.selectRandomCurrencyAdvanceDetails();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(1);
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(2);
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(2) div[data-ng-model='apd.payee']")));
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(2);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(2);
            steps.createDealAdvances.itAddCompleteAdvanceApplicableEarnings();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToTab('Advances');
            steps.editDealAdvanceApplicableEarnings.clickOnAdvanceApplicableEarningsHeaderTitleLink();
            steps.editDealAdvanceApplicableEarnings.editAdvanceApplicableEarningsArea();

            //dirty check through cancel button
            steps.base.scrollIntoView("synch ", pages.editDealAdvanceApplicableEarnings.elems.editSynchronisationPercentAdvanceApplicableEarnings);
            steps.editDealAdvanceApplicableEarnings.editFillIntoSynchronisationPercentFieldAdvanceApplicableEarnings();
            steps.editDealAdvanceApplicableEarnings.editClickOnCancelAdvanceApplicableEarnings();
            steps.editDealAdvanceApplicableEarnings.editCancelTheModalDialog();

            //dirty check navigating through tabs
            steps.deal.goToTermsDealTabDetailsDirtyCheck();
            steps.editDealAdvanceApplicableEarnings.editCancelTheModalDialog();
        }
    },


    {
        name: 'Check AAE edit  existing AAE',
        tags: ['warningAaeCreateMode'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.createDealAdvances.clickOnAddFirstAdvanceLink();
            steps.createDealAdvances.selectRandomContractPeriodAdvanceDetails();
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetails();
            steps.createDealAdvances.selectRandomCurrencyAdvanceDetails();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(1);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(1);
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(2);
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(2) div[data-ng-model='apd.payee']")));
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(2);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(2);

            //add advance applicable earning
            steps.base.scrollIntoView("Add advance applicable earnings ", pages.createDealAdvances.elems.addAdvanceApplicableEarningsLink);
            steps.createDealAdvances.clickOnAddViewAdvanceApplicableEarningsLink();
            steps.base.scrollIntoView("synch ", pages.createDealAdvances.elems.synchronisationPercentAdvanceApplicableEarnings);
            steps.createDealAdvances.fillIntoSynchronisationPercentFieldAdvanceApplicableEarnings();
            steps.createDealAdvances.clickOnSynchPipelineCheckBoxAdvanceApplicableEarnings();
            steps.createDealAdvances.selectRandomDefineSynchTerritoryAdvanceApplicableEarnings();
            steps.base.scrollIntoView("mech ", pages.createDealAdvances.elems.mechanicalPercentAdvanceApplicableEarnings);
            steps.createDealAdvances.fillIntoMechanicalPercentFieldAdvanceApplicableEarnings();
            steps.createDealAdvances.clickOnMechPipelineCheckBoxAdvanceApplicableEarnings();
            steps.createDealAdvances.selectRandomDefineMechLabelAdvanceApplicableEarnings();
            steps.base.scrollIntoView("print ", pages.createDealAdvances.elems.printRightsPercentAdvanceApplicableEarnings);
            steps.createDealAdvances.fillIntoPrintRightsPercentFieldAdvanceApplicableEarnings();
            steps.createDealAdvances.clickOnPrintPipelineCheckBoxAdvanceApplicableEarnings();
            steps.createDealAdvances.selectRandomDefinePrintTerritoryAdvanceApplicableEarnings();
            steps.createDealAdvances.selectRandomDefinePrintLabelAdvanceApplicableEarnings();
            steps.createDealAdvances.clickOnDoneAdvanceApplicableEarnings();
            //check warning unsaved data
            steps.createDealAdvances.checkAdvanceApplicableEarningWarningUnsavedData();
            //collapse advance applicable earnings and check the warning tooltip
            steps.base.scrollIntoView("Add advance applicable earnings ", pages.createDealAdvances.elems.viewAdvanceApplicableEarningsLink);
            steps.createDealAdvances.clickOnViewAdvanceApplicableEarningsLink();
            steps.createDealAdvances.checkAdvanceApplicableEarningCollapseWarningTooltipUnsavedData();
            //cancel the advance and check the advance applicable earning warning modal unsaved data
            steps.createDealAdvances.clickOnCancelThisAdvanceButton();
            steps.createDealAdvances.checkTheCancelModalBodyAdvanceApplicableEarningsWarningUnsavedDataMessage();
            steps.createDealAdvances.clickOnNoOnCancelAdvanceModalDialog();

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();


        }
    }


];
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
        tags: ['editAndAddAae'],
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


        }
    }


];
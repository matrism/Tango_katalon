'use strict';

exports.id = '2cc24101-005c-4835-85b2-cb4c5de42bd0';
exports.featureName = 'Deal Advances Filter';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'advanceFilter', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["filterAdvances"],
        steps: criticalScenario(() =>
        {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 4; i++) {
                steps.base.sleep(5000);
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillEndTargetMonths();
            }

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.createDealAdvances.clickOnAddFirstAdvanceLink();
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(1);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("100");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("USD");
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "60");

            //second advance
            steps.createDealAdvances.clickOnAddAnotherAdvanceButton();
            steps.base.sleep(5000);
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(2);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("345");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("EUR");
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Rollover");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "40");

            //third advance
            steps.createDealAdvances.clickOnAddAnotherAdvanceButton();
            steps.base.sleep(5000);
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(1);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("500");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("CAD");
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Recurring");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Sales");
            steps.createDealAdvances.fillIntoNumberOfUnitsSalesOptionAdvanceDetailsSpecificValue("23");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "20");

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //go to Advances tab
            steps.deal.goToTab('Advances');
            steps.base.sleep(5000);
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 4");
            steps.editAdvances.editSelectContractPeriodAdvancesByIndex(1);
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(1, "Contract Period 1");
            steps.editAdvances.editSelectContractPeriodAdvancesByIndex(0);
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(1, "Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(2, "Contract Period 2");

            //add another advance
            steps.editAdvances.editClickOnAddAdvanceButton();
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(3);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("20");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("USD");
            steps.createDealAdvances.clickOnYesToSuspendedAdvanceButton();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "30");
            steps.editAdvances.editSaveAdvance();

            //check suspended advances option present
            steps.base.sleep(5000);
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(3, "Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(4, "Suspended Advances");
            //select contract period 3 from advances drop down
            steps.editAdvances.editSelectContractPeriodAdvancesByIndex(3);

            steps.editAdvances.editClickToSeeAdvanceDetailsForContractPeriodNumberI(1);
            steps.editAdvances.editAdvanceDetailsAreaContractPeriodNumberI(1);
            steps.editAdvances.editClickOnNoToSuspendedAdvanceButton();
            steps.editAdvances.editSaveAdvancesDetailsAreaContractPeriodNumberI(1);

            //check suspended advances option not present anymore
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(3, "Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 4");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Suspended Advances");

            //add another advance to contract period 4
            steps.editAdvances.editClickOnAddAdvanceButton();
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(4);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("100");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("EUR");
            steps.createDealAdvances.clickOnYesToSuspendedAdvanceButton();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "30");
            steps.editAdvances.editSaveAdvance();

            //add another advance to contract period 2
            steps.editAdvances.editClickOnAddAdvanceButton();
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(2);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("12");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("USD");
            steps.createDealAdvances.clickOnYesToSuspendedAdvanceButton();
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Rollover");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "30");
            steps.editAdvances.editSaveAdvance();

        }
)},


    {
        name: "Create a deal with publisher share set",
        tags: ["filterDeleteAdvances"],
        steps: criticalScenario(() => {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 4; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillEndTargetMonths();
            }

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.createDealAdvances.clickOnAddFirstAdvanceLink();
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(1);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("200");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("USD");
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "60");

            //second advance
            steps.createDealAdvances.clickOnAddAnotherAdvanceButton();
            steps.createDealAdvances.selectSpecificContractPeriodAdvanceDetailsByIndex(2);
            steps.base.scrollIntoView("Amount advances", pages.createDealAdvances.elems.advanceDetailsAmount);
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("125");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("EUR");
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Rollover");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "40");

            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //go to Advances tab
            steps.deal.goToTab('Advances');
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 4");
            steps.editAdvances.editSelectContractPeriodAdvancesByIndex(1);
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(1, "Contract Period 1");
            steps.editAdvances.editSelectContractPeriodAdvancesByIndex(2);
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(1, "Contract Period 2");
            steps.editAdvances.editSelectContractPeriodAdvancesByIndex(0);
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(1, "Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(2, "Contract Period 2");

            steps.editAdvances.editClickToSeeAdvanceDetailsForContractPeriodNumberI(1);
            steps.editAdvances.editAdvanceDetailsAreaContractPeriodNumberI(1);
            steps.editAdvances.editSelectContractPeriodAdvancesByIndexForContractPeriodNumberI(1, 1);
            steps.editAdvances.editSaveAdvancesDetailsAreaContractPeriodNumberI(1);

            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 4");

            steps.editAdvances.editClickToSeeAdvanceDetailsForContractPeriodNumberI(2);
            steps.editAdvances.editAdvanceDetailsAreaContractPeriodNumberI(2);
            steps.editAdvances.editSelectContractPeriodAdvancesByIndexForContractPeriodNumberI(2, 2);
            steps.editAdvances.editSaveAdvancesDetailsAreaContractPeriodNumberI(2);

            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(2, "Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 4");
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(3, "Contract Period 3");
            steps.deal.refreshThePage()

            //go to terms tab and delete contract period 1 which has advances assigned
            steps.deal.goToTermsDealTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(3);
            steps.editDealContractPeriod.deleteContractPeriodNumberI(3);

            steps.deal.goToTab('Advances');
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(0, "All Advances");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(1, "Contract Period 2");
            //steps.editAdvances.editCheckContractPeriodAdvancesDropDownContainsCp(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 1");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 3");
            steps.editAdvances.editCheckContractPeriodAdvancesDropDownNotToContainsCp("Contract Period 4");
            steps.editAdvances.editCheckContractPeriodAdvancesNumberIDetailsDisplayed(2, "Contract Period 2");
            steps.editAdvances.editCheckContractPeriodAdvancesDetailsIsNotDisplayed(2, "Contract Period 1");
        })
    }
];

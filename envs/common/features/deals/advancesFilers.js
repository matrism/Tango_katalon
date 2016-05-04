'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'advance', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["filterAdvances"],
        steps: function () {
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
            steps.createDealAdvances.fillIntoAmountAdvanceDetailsSpecificValue("100");
            steps.createDealAdvances.selectSpecificCurrencyAdvanceDetails("USD");
            steps.createDealAdvances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.createDealAdvances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.createDealAdvances.fillIntoPercentDistributionRulesAdvanceDetailsNumberISpecificValue(1, "60");

            //second advance
            steps.createDealAdvances.clickOnAddAnotherAdvanceButton();
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
        }
    }
];

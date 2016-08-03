'use strict';

exports.commonFeatureTags = ['royaltyProcessing', 'manualStatement'];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'Manual Statement Part 1',
        tags: ['addManualStatement1'],
        steps: function () {
            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.royaltiesHeader.clickLink('Create Manual Statement');
            steps.createManualStatement.selectDesiredProcessingTerritory("India");
            steps.createManualStatement.selectDesiredRoyaltyPeriodValueDropDown("July 2015 - December 2015");
            steps.createManualStatement.selectDesiredValueForIncomeProviderDropDown("warner music hong kong");
            steps.createManualStatement.fillIntoStatementDistributionPeriodStartDate("2015", "4");
            steps.createManualStatement.fillIntoStatementDistributionPeriodEndDate("2015", "10");
            steps.createManualStatement.fillIntoStatementAmountInputField("100");
            steps.createManualStatement.selectCurrencyFromStatementAmountCurrencyDropDown("EUR");
            steps.createManualStatement.fillIntoExchangeRateInputField("1");
            steps.createManualStatement.clickOnCreateButtonManualStatement();

            steps.createManualStatement.fillIntoBatchAmountValue("100");
            steps.createManualStatement.clickOnDefaultSettingsLink();
            steps.createManualStatement.selectDesiredIncomeTypeValueFromDropDown("Mechanical");
            steps.createManualStatement.selectDesiredExploitationTerritoryValueFromDropDown("Brazil");

            steps.createManualStatement.selectDesiredWorkTypeToSearchFromDropDown("Work ID");
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("WW 010278355 00");
            steps.createManualStatement.selectDesiredWorkForManualStatement();
            steps.createManualStatement.fillIntoAmountReceivedValue("100");
            steps.createManualStatement.clickOnDoneButtonManualStatement();
        }
    },

    {
        name: 'Manual Statement Part 2',
        tags: ['addManualStatement2'],
        steps: function () {
            var today = new Date();
            if (today.getMonth() <= 8) {
                if (today.getDate() <= 9) {
                    var currentDate = today.getFullYear() + "-" + 0 + (today.getMonth() + 1).toString() + "-" + 0 + today.getDate();
                }
                else {
                    var currentDate = today.getFullYear() + "-" + 0 + (today.getMonth() + 1).toString() + "-" + today.getDate();
                }
            }
            else {
                if (today.getDay() <= 9) {
                    var currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString() + "-" + 0 + today.getDate();
                }
                else {
                    var currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString() + "-" + today.getDate();
                }
            }
            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.royaltiesHeader.clickLink('Create Manual Statement');
            steps.createManualStatement.selectDesiredProcessingTerritory("India");
            steps.createManualStatement.selectDesiredRoyaltyPeriodValueDropDown("July 2015 - December 2015");
            steps.createManualStatement.selectDesiredValueForIncomeProviderDropDown("warner music hong kong");
            steps.createManualStatement.fillIntoStatementDistributionPeriodStartDate("2015", "4");
            steps.createManualStatement.fillIntoStatementDistributionPeriodEndDate("2015", "10");
            steps.createManualStatement.fillIntoStatementAmountInputField("100");
            steps.createManualStatement.selectCurrencyFromStatementAmountCurrencyDropDown("EUR");
            steps.createManualStatement.fillIntoExchangeRateInputField("1");
            steps.createManualStatement.clickOnCreateButtonManualStatement();

            steps.createManualStatement.fillIntoBatchAmountValue("55");
            steps.createManualStatement.clickOnDefaultSettingsLink();
            steps.createManualStatement.selectDesiredIncomeTypeValueFromDropDown("Mechanical");
            steps.createManualStatement.selectDesiredExploitationTerritoryValueFromDropDown("Brazil");

            steps.createManualStatement.selectDesiredWorkTypeToSearchFromDropDown("Work ID");
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("WW 010278355 00");
            steps.createManualStatement.selectDesiredWorkForManualStatement();
            steps.createManualStatement.fillIntoAmountReceivedValue("55");
            steps.createManualStatement.clickOnDoneButtonManualStatement();

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.createManualStatement.selectDesiredProcessingTerritory("India");
            steps.createManualStatement.selectDesiredFilterRoyaltyPeriodValueDropDown("July 2015 - December 2015");
            steps.createManualStatement.clickOnTheManualStatementNumberIFromList(1);

            steps.createManualStatement.checkDateCreatedTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkDateCreatedValueForStatementNumberIFromList(1, currentDate);
            steps.createManualStatement.checkStatementDistributionPeriodTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkStatementDistributionPeriodValueForStatementNumberIFromList(1, "2015-04 to 2015-10");
            steps.createManualStatement.checkAccountReferenceTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkAccountReferenceValueForStatementNumberIFromList(1);

            steps.createManualStatement.checkStatementAmountTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkStatementAmountValueForStatementNumberIFromList(1, "100.0000EUR");
            steps.createManualStatement.checkExchangeRateTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkExchangeRateValueForStatementNumberIFromList(1, "1 EUR to 1 INR");
            steps.createManualStatement.checkConvertedAmountTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkConvertedAmountValueForStatementNumberIFromList(1, "100.0000  INR");
            steps.createManualStatement.checkCommissionTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkCommissionValueForStatementNumberIFromList(1, "- 0.0000  INR");
            steps.createManualStatement.checkWriteOffAmountTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkWriteOffAmountValueForStatementNumberIFromList(1, "- 0.0000  INR");
            steps.createManualStatement.checkAmountConvertedNetTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkAmountConvertedNetValueForStatementNumberIFromList(1, "= 100.0000  INR");

            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "Batch Summary");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "Lines");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "Status");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "Batch Total");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "Batch 1");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "RECONCILED");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "55.0000 EUR");
            steps.createManualStatement.checkBatchSummaryForStatementNumberIFromList(1, "45.0000 EUR");

            steps.createManualStatement.editExpandedManualStatementNumberIFromList(1);
            steps.createManualStatement.clickOnBatch1LinkManualStatementEditMode();

            steps.createManualStatement.selectDesiredWorkTypeToSearchFromDropDown("Title");
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("test");
            steps.createManualStatement.selectDesiredWorkForManualStatement();
            steps.createManualStatement.fillIntoAmountReceivedValueWorkIRowJ(2, 1, "10");
            steps.createManualStatement.fillIntoAmountReceivedValueWorkIRowJ(2, 2, "5");

            steps.createManualStatement.fillIntoSourceValueWorkIRowJ(2,1,"source 1");
            steps.createManualStatement.selectDesiredIncomeTypeWorkIRowJ(2,1, "Digital Mechanical");
            steps.createManualStatement.selectDesiredTerritoryWorkIRowJ(2,1, "Argentina");
            steps.createManualStatement.fillIntoYearFromPeriodWorkIRowJ(2,1, "2015");
            steps.createManualStatement.selectDesiredMonthFromPeriodWorkIRowJ(2,1, "01");
            steps.createManualStatement.fillIntoYearToPeriodWorkIRowJ(2,1, "2015");
            steps.createManualStatement.selectDesiredMonthToPeriodWorkIRowJ(2,1,"06");
            steps.createManualStatement.fillIntoUnitsWorkIRowJ(2,1,"12");
            steps.createManualStatement.fillIntoProductDetailsWorkIRowJ(2, 1, "catalogue 1");
            steps.createManualStatement.fillIntoSharePercentWorkIRowJ(2, 1, "34");

            steps.createManualStatement.fillIntoSourceValueWorkIRowJ(2,2,"source 2");
            steps.createManualStatement.selectDesiredIncomeTypeWorkIRowJ(2,2, "Download Mechanical");
            steps.createManualStatement.selectDesiredTerritoryWorkIRowJ(2,2, "Algeria");
            steps.createManualStatement.fillIntoYearFromPeriodWorkIRowJ(2,2, "2015");
            steps.createManualStatement.selectDesiredMonthFromPeriodWorkIRowJ(2,2, "02");
            steps.createManualStatement.fillIntoYearToPeriodWorkIRowJ(2,2, "2015");
            steps.createManualStatement.selectDesiredMonthToPeriodWorkIRowJ(2,2,"08");
            steps.createManualStatement.fillIntoUnitsWorkIRowJ(2,2,"55");
            steps.createManualStatement.fillIntoProductDetailsWorkIRowJ(2, 2, "catalogue 2");
            steps.createManualStatement.fillIntoSharePercentWorkIRowJ(2, 2, "15");

            steps.createManualStatement.selectDesiredWorkTypeToSearchFromDropDown("Creator");
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("creator");
            steps.createManualStatement.selectDesiredWorkForManualStatement();
            steps.createManualStatement.fillIntoAmountReceivedValueWorkIRowJ(3, 1, "15");
            steps.createManualStatement.fillIntoAmountReceivedValueWorkIRowJ(3, 2, "5");

            steps.createManualStatement.fillIntoSourceValueWorkIRowJ(3,1,"source 1");
            steps.createManualStatement.selectDesiredIncomeTypeWorkIRowJ(3,1, "Karaoke Mechanical");
            steps.createManualStatement.selectDesiredTerritoryWorkIRowJ(3,1, "Armenia");
            steps.createManualStatement.fillIntoYearFromPeriodWorkIRowJ(3,1, "2015");
            steps.createManualStatement.selectDesiredMonthFromPeriodWorkIRowJ(3,1, "02");
            steps.createManualStatement.fillIntoYearToPeriodWorkIRowJ(3,1, "2015");
            steps.createManualStatement.selectDesiredMonthToPeriodWorkIRowJ(3,1,"09");
            steps.createManualStatement.fillIntoUnitsWorkIRowJ(3,1,"22");
            steps.createManualStatement.fillIntoProductDetailsWorkIRowJ(3, 1, "catalogue 3");
            steps.createManualStatement.fillIntoSharePercentWorkIRowJ(3, 1, "55");

            steps.createManualStatement.fillIntoSourceValueWorkIRowJ(3,2,"source 2");
            steps.createManualStatement.selectDesiredIncomeTypeWorkIRowJ(3,2, "Ringtone Mechanical");
            steps.createManualStatement.selectDesiredTerritoryWorkIRowJ(3,2, "Austria");
            steps.createManualStatement.fillIntoYearFromPeriodWorkIRowJ(3,2, "2015");
            steps.createManualStatement.selectDesiredMonthFromPeriodWorkIRowJ(3,2, "03");
            steps.createManualStatement.fillIntoYearToPeriodWorkIRowJ(3,2, "2015");
            steps.createManualStatement.selectDesiredMonthToPeriodWorkIRowJ(3,2,"11");
            steps.createManualStatement.fillIntoUnitsWorkIRowJ(3,2,"33");
            steps.createManualStatement.fillIntoProductDetailsWorkIRowJ(3, 2, "catalogue 4");
            steps.createManualStatement.fillIntoSharePercentWorkIRowJ(3, 2, "67");

            steps.createManualStatement.clickOnDoneButtonManualStatement();

            steps.createManualStatement.clickOnBackToStatementViewLink();
            steps.createManualStatement.editExpandedManualStatementNumberIFromList(1);
            steps.createManualStatement.clickOnAddBatchLinkManualStatementEditMode();
            steps.createManualStatement.fillIntoTheBatchAmountDesiredValueNumberI(2,45);

            steps.createManualStatement.clickOnDefaultSettingsLink();
            steps.createManualStatement.selectDesiredIncomeTypeValueFromDropDown("Digital Mechanical");
            steps.createManualStatement.selectDesiredExploitationTerritoryValueFromDropDown("Bahamas");
            steps.createManualStatement.clickOnUseBatch1SettingsCheckBox();

            steps.createManualStatement.selectDesiredWorkTypeToSearchFromDropDown("Title");
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("work test");
            steps.createManualStatement.selectDesiredWorkForManualStatement();
            steps.createManualStatement.fillIntoAmountReceivedValueWorkIRowJ(1, 2, "45");

            steps.createManualStatement.fillIntoSourceValueWorkIRowJ(1,1,"Source new");
            steps.createManualStatement.selectDesiredIncomeTypeWorkIRowJ(1,1, "Download Mechanical");
            steps.createManualStatement.selectDesiredTerritoryWorkIRowJ(1,1, "Austria");
            steps.createManualStatement.fillIntoYearFromPeriodWorkIRowJ(1,1, "2015");
            steps.createManualStatement.selectDesiredMonthFromPeriodWorkIRowJ(1,1, "01");
            steps.createManualStatement.fillIntoYearToPeriodWorkIRowJ(1,1, "2015");
            steps.createManualStatement.selectDesiredMonthToPeriodWorkIRowJ(1,1,"08");
            steps.createManualStatement.fillIntoUnitsWorkIRowJ(1,1,"8");
            steps.createManualStatement.fillIntoProductDetailsWorkIRowJ(2, 1, "New catalogue");
            steps.createManualStatement.fillIntoSharePercentWorkIRowJ(2, 1, "9");

            steps.createManualStatement.clickOnTheClosedBatchCheckBox();

            steps.createManualStatement.clickOnDoneButtonManualStatement();

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.createManualStatement.selectDesiredProcessingTerritory("India");
            steps.createManualStatement.selectDesiredFilterRoyaltyPeriodValueDropDown("July 2015 - December 2015");
            //steps.createManualStatement.clickOnTheManualStatementNumberIFromList(1);

            steps.createManualStatement.checkStatusOfTheManualStatementNumberIFromList(1,"Reconciled");
        }
    }
];
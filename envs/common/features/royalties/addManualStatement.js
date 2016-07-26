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
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("WW 015081725 00");
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
            if(today.getMonth()<=8){
                if(today.getDate()<=9){
                    var currentDate = today.getFullYear() + "-" + 0 + (today.getMonth() + 1).toString() + "-" + 0 + today.getDate();
                }
                else{
                    var currentDate = today.getFullYear() + "-" + 0 + (today.getMonth() + 1).toString() + "-" + today.getDate();
                }
            }
            else{
                if(today.getDay()<=9){
                    var currentDate = today.getFullYear() + "-" + (today.getMonth() + 1).toString() + "-" + 0 + today.getDate();
                }
                else{
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

            steps.createManualStatement.fillIntoBatchAmountValue("100");
            steps.createManualStatement.clickOnDefaultSettingsLink();
            steps.createManualStatement.selectDesiredIncomeTypeValueFromDropDown("Mechanical");
            steps.createManualStatement.selectDesiredExploitationTerritoryValueFromDropDown("Brazil");

            steps.createManualStatement.selectDesiredWorkTypeToSearchFromDropDown("Work ID");
            steps.createManualStatement.fillIntoWorksInputFieldDesiredWork("WW 015081725 00");
            steps.createManualStatement.selectDesiredWorkForManualStatement();
            steps.createManualStatement.fillIntoAmountReceivedValue("100");
            steps.createManualStatement.clickOnDoneButtonManualStatement();

            steps.mainHeader.goToSubLink('Royalty Processing', 'Royalty Statements');
            steps.createManualStatement.selectDesiredProcessingTerritory("India");
            steps.createManualStatement.selectDesiredFilterRoyaltyPeriodValueDropDown("July 2015 - December 2015");
            steps.createManualStatement.clickOnTheManualStatementNumberIFromList(1);

            steps.createManualStatement.checkDateCreatedTextForStatementNumberIFromList(1);
            steps.createManualStatement.checkDateCreatedValueForStatementNumberIFromList(1, currentDate);
            steps.createManualStatement.checkStatementDistributionPeriodTextForStatementNumberIFromList(1);

        }
    }
];
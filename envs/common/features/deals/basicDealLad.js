'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'dealLad', 'regression'];

exports.feature = [
    {
        name: "Create a basic deal for LAD",
        tags: ["dealLad"],
        steps: function () {

            //steps.searchSection.accessSavedDealByNumber("264929");

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            //add 3 contract periods
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2015-04-04");
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 2");
            steps.createDealContractPeriod.fillEndTargetMonths();
            steps.base.scrollIntoView("Add actual end date", pages.createDealContractPeriod.elems.actualEndDate);
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2016-02-04");
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 3");
            steps.createDealContractPeriod.fillEndTargetMonths();

            ////add scope to the contract period 1
            //steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            //steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            //steps.createDealScope.itAddPublisherShare();
            //for (var i = 2; i <= 3; i++) {
            //    steps.createDealScope.itAddPublisherShareWithMultipleThreeChains(i);
            //}
            ////override publisher
            //steps.createDealScope.itOverridePublisherShare("Indiatestpub1", "Indiatestpub1", "India");
            //steps.createDealScope.itOverridePublisherShare("Algeriatestpub1", "Algeriatestpub1", "Algeria");
            //steps.createDealScope.itOverridePublisherShare("Albaniatestpub1", "Albaniatestpub1", "Albania");
            //steps.createDealScope.itOverridePublisherShare("Braziltestpub1", "Braziltestpub1", "Brazil");
            //steps.createDealScope.itOverridePublisherShare("Canadatestpub1", "Canadatestpub1", "Canada");
            //steps.createDealScope.itOverridePublisherShare("Croatiatestpub1", "Croatiatestpub1", "Croatia");
            //steps.createDealScope.itOverridePublisherShare("Chinatestpub1", "Chinatestpub1", "China");
            //steps.createDealScope.itOverridePublisherShare("Francetestpub1", "Francetestpub1", "France");
            //steps.createDealScope.itOverridePublisherShare("Indonesiatestpub1", "Indonesiatestpub1", "Indonesia");
            //steps.createDealScope.itOverridePublisherShare("Japantestpub1", "Japantestpub1", "Japan");
            //steps.createDealScope.itOverridePublisherShare("Moldovatestpub1", "Moldovatestpub1", "Moldova");
            //steps.createDealScope.itOverridePublisherShare("Romaniatestpub1", "Romaniatestpub1", "Romania");
            //steps.createDealScope.itOverridePublisherShare("Hungarytestpub1", "Hungarytestpub1", "Hungary");
            //steps.createDealScope.itOverridePublisherShare("Greecetestpub1", "Greecetestpub1", "Greece");
            //steps.createDealScope.itOverridePublisherShare("Panamatestpub1", "Panamatestpub1", "Panama");
            ////save the publisher share set
            //steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            //steps.createDealScope.saveThePublisherShareSet();
            //
            //add RR to the scope
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("test");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            for (var i = 2; i <= 6; i++) {
                steps.royaltyRates.addNewRoyaltySet();
                steps.royaltyRates.addEffectiveStartDate("2015-06-0" + i);
                steps.royaltyRates.addIncomeProviderByPartialMatch("test");
                steps.royaltyRates.addRatePercentageToContractualField(10 * i);
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
                steps.royaltyRates.saveRateSet();
            }

            steps.createDealScope.shareScopeToAllContractPeriods();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //
            //steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,100);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,100);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,49);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //steps.editDealContractPeriod.editSelectContractPeriodNumberI(2);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,100);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,100);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,49);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //steps.editDealContractPeriod.editSelectContractPeriodNumberI(3);
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,100);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,100);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 50000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
            //
            //
            //steps.editDealScope.selectScopeNumberI(1);
            //steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            //steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1,49);
            //steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            //steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, 40000);
            ////steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


        }
    }
];

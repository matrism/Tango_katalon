'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'dealLad', 'regression'];

exports.feature = [
    //{
    //    name: "Create a basic deal for LAD",
    //    tags: ["dealLad"],
    //    steps: function () {
    //
    //        var timeout = 100000;
    //steps.searchSection.accessSavedDealByNumber("265160");
    //
    //        steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
    //        steps.deal.itContinueToNextPage();
    //        //add 3 contract periods
    //        steps.createDealContractPeriod.fillContractPeriodDescription("Description 1");
    //        steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
    //        steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2015-04-04");
    //        steps.createDealContractPeriod.addNewContractPeriodDialog();
    //        steps.createDealContractPeriod.fillContractPeriodDescription("Description 2");
    //        steps.createDealContractPeriod.fillEndTargetMonths();
    //        steps.base.scrollIntoView("Add actual end date", pages.createDealContractPeriod.elems.actualEndDate);
    //        steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2016-02-04");
    //        steps.createDealContractPeriod.addNewContractPeriodDialog();
    //        steps.createDealContractPeriod.fillContractPeriodDescription("Description 3");
    //        steps.createDealContractPeriod.fillEndTargetMonths();
    //
    //        ////add Advance Assumptions to all CPs
    //        //_.times(3, function (num) {
    //        //    steps.createDealContractPeriod.selectContractPeriodNumberI(num + 1);
    //        //    steps.createDealContractPeriod.itAddAdvanceAssumptions();
    //        //});
    //
    //        //add scope to the contract period 1
    //        steps.createDealContractPeriod.selectContractPeriodNumberI(1);
    //        steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
    //        steps.createDealScope.itAddPublisherShare();
    //        for (var i = 2; i <= 3; i++) {
    //            steps.createDealScope.itAddPublisherShareWithMultipleThreeChains(i);
    //        }
    //        //override publisher
    //        steps.createDealScope.itOverridePublisherShare("Indiatestpub1", "Indiatestpub1", "India");
    //        steps.createDealScope.itOverridePublisherShare("Algeriatestpub1", "Algeriatestpub1", "Algeria");
    //        steps.createDealScope.itOverridePublisherShare("Albaniatestpub1", "Albaniatestpub1", "Albania");
    //        steps.createDealScope.itOverridePublisherShare("Braziltestpub1", "Braziltestpub1", "Brazil");
    //        steps.createDealScope.itOverridePublisherShare("Canadatestpub1", "Canadatestpub1", "Canada");
    //        steps.createDealScope.itOverridePublisherShare("Croatiatestpub1", "Croatiatestpub1", "Croatia");
    //        steps.createDealScope.itOverridePublisherShare("Chinatestpub1", "Chinatestpub1", "China");
    //        steps.createDealScope.itOverridePublisherShare("Francetestpub1", "Francetestpub1", "France");
    //        steps.createDealScope.itOverridePublisherShare("Indonesiatestpub1", "Indonesiatestpub1", "Indonesia");
    //        steps.createDealScope.itOverridePublisherShare("Japantestpub1", "Japantestpub1", "Japan");
    //        steps.createDealScope.itOverridePublisherShare("Moldovatestpub1", "Moldovatestpub1", "Moldova");
    //        steps.createDealScope.itOverridePublisherShare("Romaniatestpub1", "Romaniatestpub1", "Romania");
    //        steps.createDealScope.itOverridePublisherShare("Hungarytestpub1", "Hungarytestpub1", "Hungary");
    //        steps.createDealScope.itOverridePublisherShare("Greecetestpub1", "Greecetestpub1", "Greece");
    //        steps.createDealScope.itOverridePublisherShare("Panamatestpub1", "Panamatestpub1", "Panama");
    //        //save the publisher share set
    //        steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
    //        steps.createDealScope.saveThePublisherShareSet();
    //
    //        //add RR to the scope
    //        steps.royaltyRates.addNewRoyaltySet();
    //        steps.royaltyRates.addIncomeProviderByPartialMatch("test");
    //        steps.royaltyRates.addRatePercentageToContractualField('10');
    //        steps.royaltyRates.clickOnReceiptApplicationMethod();
    //        steps.royaltyRates.confirmChangingRateApplicationMethod();
    //        steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
    //        steps.royaltyRates.saveRateSet();
    //
    //        for (var i = 2; i <= 6; i++) {
    //            steps.royaltyRates.addNewRoyaltySet();
    //            steps.royaltyRates.addEffectiveStartDate("2015-06-0" + i);
    //            steps.royaltyRates.addIncomeProviderByPartialMatch("test");
    //            steps.royaltyRates.addRatePercentageToContractualField(10 * i);
    //            steps.royaltyRates.clickOnReceiptApplicationMethod();
    //            steps.royaltyRates.confirmChangingRateApplicationMethod();
    //            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
    //            steps.royaltyRates.saveRateSet();
    //        }
    //
    //        steps.createDealScope.shareScopeToAllContractPeriods();
    //
    //        steps.deal.itContinueToNextPage();
    //        steps.deal.saveDeal();
    //        steps.deal.waitForDealToBeSaved();
    //        steps.deal.returnDealNumber();
    //
    //        //add society agreement number
    //        steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
    //        steps.editDealScope.selectScopeNumberI(1);
    //
    //        for (var i = 1; i <= 3; i++) {
    //            steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(i);
    //            //add data into left panel
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(7, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(10, "stim");
    //            //add creators right panel
    //            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(1, "test");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 7, "sokoj");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 10, "stim");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 11, "stemra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 12, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 13, "fox");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 14, "osa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 15, "musicaut");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 16, "koda");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 17, "komca");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 18, "abramus");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 19, "acum");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 20, "aepi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 21, "apra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 22, "cash");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 23, "compass");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 24, "gema");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 25, "msg");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 26, "sabam");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 27, "sazas");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 28, "sayco");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 29, "sesac");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(1, 30, "siae");
    //
    //
    //            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();
    //            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(2, "shilpa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 7, "sokoj");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 10, "stim");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 11, "stemra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 12, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 13, "fox");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 14, "osa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 15, "musicaut");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 16, "koda");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 17, "komca");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 18, "abramus");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 19, "acum");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 20, "aepi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 21, "apra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 22, "cash");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 23, "compass");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 24, "gema");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 25, "msg");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 26, "sabam");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 27, "sazas");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 28, "sayco");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 29, "sesac");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(2, 30, "siae");
    //
    //
    //            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();
    //            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(3, "creator");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 7, "sokoj");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 10, "stim");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 11, "stemra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 12, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 13, "fox");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 14, "osa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 15, "musicaut");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 16, "koda");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 17, "komca");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 18, "abramus");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 19, "acum");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 20, "aepi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 21, "apra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 22, "cash");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 23, "compass");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 24, "gema");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 25, "msg");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 26, "sabam");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 27, "sazas");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 28, "sayco");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 29, "sesac");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(3, 30, "siae");
    //
    //
    //            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();
    //            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(4, "adrian");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 7, "sokoj");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 10, "stim");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 11, "stemra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 12, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 13, "fox");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 14, "osa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 15, "musicaut");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 16, "koda");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 17, "komca");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 18, "abramus");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 19, "acum");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 20, "aepi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 21, "apra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 22, "cash");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 23, "compass");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 24, "gema");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 25, "msg");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 26, "sabam");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 27, "sazas");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 28, "sayco");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 29, "sesac");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(4, 30, "siae");
    //
    //
    //            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();
    //            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(5, "deni");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 7, "sokoj");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 10, "stim");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 11, "stemra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 12, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 13, "fox");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 14, "osa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 15, "musicaut");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 16, "koda");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 17, "komca");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 18, "abramus");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 19, "acum");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 20, "aepi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 21, "apra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 22, "cash");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 23, "compass");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 24, "gema");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 25, "msg");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 26, "sabam");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 27, "sazas");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 28, "sayco");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 29, "sesac");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(5, 30, "siae");
    //
    //
    //            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();
    //            steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(6, "alex");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 1, "bmi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 2, "ascap");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 3, "mcps");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 4, "socan");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 5, "sacem");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 6, "akm");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 7, "sokoj");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 8, "zaiks");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 9, "bum/ste");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 10, "stim");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 11, "stemra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 12, "cmrra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 13, "fox");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 14, "osa");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 15, "musicaut");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 16, "koda");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 17, "komca");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 18, "abramus");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 19, "acum");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 20, "aepi");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 21, "apra");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 22, "cash");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 23, "compass");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 24, "gema");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 25, "msg");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 26, "sabam");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 27, "sazas");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 28, "sayco");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 29, "sesac");
    //            steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(6, 30, "siae");
    //
    //            steps.editDealScope.saveChangesSocietyAgreementNumberForm();
    //
    //
    //        }
    //
    //        steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 49);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //        steps.editDealContractPeriod.editSelectContractPeriodNumberI(2);
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 49);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //        steps.editDealContractPeriod.editSelectContractPeriodNumberI(3);
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //
    //        steps.editDealScope.selectScopeNumberI(1);
    //        steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
    //        steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 49);
    //        steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
    //        steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
    //        steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
    //        //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
    //
    //
    //    }
    //},


    {
        name: "Create a deal payees for new environment",
        tags: ["newPayeeLadTest"],
        steps: function () {
            var timeout = 100000;
            //steps.searchSection.accessSavedDealByNumber("267513");

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

            //add scope to the contract period 1
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.createDealScope.itAddPublisherShare();
            for (var i = 2; i <= 3; i++) {
                steps.createDealScope.itAddPublisherShareWithMultipleThreeChains(i);
            }
            //override publisher
            steps.createDealScope.itOverridePublisherShare("Indiatestpub1", "Indiatestpub1", "India");
            steps.createDealScope.itOverridePublisherShare("Algeriatestpub1", "Algeriatestpub1", "Algeria");
            steps.createDealScope.itOverridePublisherShare("Albaniatestpub1", "Albaniatestpub1", "Albania");
            steps.createDealScope.itOverridePublisherShare("Braziltestpub1", "Braziltestpub1", "Brazil");
            steps.createDealScope.itOverridePublisherShare("Canadatestpub1", "Canadatestpub1", "Canada");
            steps.createDealScope.itOverridePublisherShare("Croatiatestpub1", "Croatiatestpub1", "Croatia");
            steps.createDealScope.itOverridePublisherShare("Chinatestpub1", "Chinatestpub1", "China");
            steps.createDealScope.itOverridePublisherShare("Francetestpub1", "Francetestpub1", "France");
            steps.createDealScope.itOverridePublisherShare("Indonesiatestpub1", "Indonesiatestpub1", "Indonesia");
            steps.createDealScope.itOverridePublisherShare("Japantestpub1", "Japantestpub1", "Japan");
            steps.createDealScope.itOverridePublisherShare("Moldovatestpub1", "Moldovatestpub1", "Moldova");
            steps.createDealScope.itOverridePublisherShare("Romaniatestpub1", "Romaniatestpub1", "Romania");
            steps.createDealScope.itOverridePublisherShare("Hungarytestpub1", "Hungarytestpub1", "Hungary");
            steps.createDealScope.itOverridePublisherShare("Greecetestpub1", "Greecetestpub1", "Greece");
            steps.createDealScope.itOverridePublisherShare("Panamatestpub1", "Panamatestpub1", "Panama");
            //save the publisher share set
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();

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

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 49);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(2);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 49);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(3);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 100);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);


            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
            steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, 49);
            steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
            steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
            steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
            //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);

            steps.deal.goToPayeesDealTabDetails();
            steps.editDealPayee.editClickOneByPayeeHeaderLink();

            steps.editDealPayee.editSelectSpecificNewPayeePersonFromDropDown("person " + 1 + ", TAT payee");
            for (var i = 1; i <= 3; i++) {
                steps.editDealPayee.editAssociateSpecificScopeNumberIToNewPayee(i);
            }
            steps.editDealPayee.editAddPayoutToPayee();
            steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
            steps.editDealPayee.editFillIntoPayeeDistributionInputField();
            steps.editDealPayee.editSavePayeeToPayeeForm();


            for (var j = 2; j <= 200; j++) {
                steps.editDealPayee.editSelectSpecificNewPayeePersonFromDropDown("person " + j + ", TAT payee");
                for (var i = 3 * j; i >= 3 * j - 2; i--) {
                    steps.editDealPayee.editAssociateSpecificScopeNumberIToNewPayee(i);
                }
                steps.editDealPayee.editAddPayoutToPayee();
                steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
                steps.editDealPayee.editFillIntoPayeeDistributionInputField();
                steps.editDealPayee.editSavePayeeToPayeeForm();
            }
        }
    }
];

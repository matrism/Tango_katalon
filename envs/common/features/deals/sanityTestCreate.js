'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'sanity', 'dealsSanity'];

exports.feature = [
    {
        name: "Deals sanity test flow create mode",
        tags: [],
        steps: function () {
            //fill all general screen fields
            steps.createDealGeneral.itAddAllGeneralFieldsForSanityToDealGeneralTab();
            steps.deal.itContinueToNextPage();
            //add different contract periods and add scope, pss and override pss
            steps.createDealContractPeriod.itAddDifferentTypesOfContractPeriods();
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.createDealScope.itAddPublisherShareWithSocietyAwardCredit();
            steps.createDealScope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.createDealScope.saveThePublisherShareSet();
            //add rate set payout, nps and admin fee
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addIncomeProviderByPartialMatch("test");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.addNPSToContractualField('30');
            steps.royaltyRates.addAdminFeeToContractualField('40');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            steps.createDealScope.shareScopeToAllContractPeriods();

            //select contract period 2
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Finder", "Worldwide");
            steps.base.scrollIntoView("Share publisher share set", pages.create_deal_scope.elems.sharePublisherShareSetIcon);
            steps.createDealScope.sharePublisherShareSet();
            steps.base.scrollIntoView("Save the publisher share set", pages.create_deal_scope.elems.savePublisherShareSet);
            steps.createDealScope.saveSharePublisherShareSet();
            //add rate set to Scope
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addEffectiveStartDate("2015-06-07");
            steps.royaltyRates.addIncomeProviderByPartialMatch("test");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            //select contract period 3
            steps.base.scrollIntoView("Contract period list", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.createDealScope.addSimpleScope();
            steps.createDealScope.selectCountry();
            steps.createDealScope.itAddPublisherShare();
            steps.createDealScope.saveThePublisherShareSet();
            steps.royaltyRates.addNewRoyaltySet();
            steps.base.scrollIntoView("Rate set name", pages.royaltyRates.elems.rateSetNameFieldIcon);
            steps.royaltyRates.overrideRoyaltyRateSetNumberI(1);
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddDeemedCompleteMdrcContractPeriod();
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddCompleteMdrcContractPeriod();
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.createDealContractPeriod.selectContractPeriodNumberI(4);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod1();

            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod2();

            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod3();

            steps.createDealContractPeriod.selectContractPeriodNumberI(4);
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod4();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }
];

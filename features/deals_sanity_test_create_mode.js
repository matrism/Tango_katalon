var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(pages_path + "edit_deal_scope");
require(steps_path + "edit_deal_scope");
require(steps_path + "login");
require(steps_path + "base");
require(pages_path + "royaltyRates");
require(pages_path + "create_deal_rtp");
require(steps_path + "create_deal_rtp");

var beforeFeature = function () {
        steps.login.itLogin();
    },

//feature = [{
//    name: "Deals sanity test flow create mode",
//    tags: ["create_deal_sanity"],
//    steps: function () {
//        //fill all general screen fields
//        steps.create_deal_general.itAddAllGeneralFieldsForSanityToDealGeneralTab();
//        steps.deal.itContinueToNextPage();
//        //add different contract periods and add scope, pss and override pss
//        steps.create_deal_contract_period.itAddDifferentTypesOfContractPeriods();
//        steps.create_deal_contract_period.selectContractPeriodNumberI(1);
//        steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
//        steps.create_deal_scope.itAddPublisherShareWithSocietyAwardCredit();
//        steps.create_deal_scope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
//        steps.create_deal_scope.saveThePublisherShareSet();
//        //add rate set payout, nps and admin fee
//        steps.royaltyRates.addNewRoyaltySet();
//        steps.royaltyRates.addIncomeProviderByPartialMatch("test");
//        steps.royaltyRates.addRatePercentageToContractualField('10');
//        steps.royaltyRates.addNPSToContractualField('30');
//        steps.royaltyRates.addAdminFeeToContractualField('40');
//        steps.royaltyRates.clickOnReceiptApplicationMethod();
//        steps.royaltyRates.confirmChangingRateApplicationMethod();
//        steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
//        steps.royaltyRates.saveRateSet();
//        steps.create_deal_scope.shareScopeToAllContractPeriods();
//
//        //select contract period 2
//        steps.create_deal_contract_period.selectContractPeriodNumberI(2);
//        steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Finder", "Worldwide");
//        steps.base.scrollIntoView("Share publisher share set", pages.create_deal_scope.elems.sharePublisherShareSetIcon);
//        steps.create_deal_scope.sharePublisherShareSet();
//        steps.base.scrollIntoView("Save the publisher share set", pages.create_deal_scope.elems.savePublisherShareSet);
//        steps.create_deal_scope.saveSharePublisherShareSet();
//        //add rate set to Scope
//        steps.royaltyRates.addNewRoyaltySet();
//        steps.royaltyRates.addEffectiveStartDate("2015-06-07");
//        steps.royaltyRates.addIncomeProviderByPartialMatch("test");
//        steps.royaltyRates.addRatePercentageToContractualField('10');
//        steps.royaltyRates.clickOnReceiptApplicationMethod();
//        steps.royaltyRates.confirmChangingRateApplicationMethod();
//        steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
//        steps.royaltyRates.saveRateSet();
//        //select contract period 3
//        steps.base.scrollIntoView("Contract period list", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
//        steps.create_deal_contract_period.selectContractPeriodNumberI(3);
//        steps.create_deal_scope.addSimpleScope();
//        steps.create_deal_scope.selectCountry();
//        steps.create_deal_scope.itAddPublisherShare();
//        steps.create_deal_scope.saveThePublisherShareSet();
//        steps.royaltyRates.addNewRoyaltySet();
//        steps.base.scrollIntoView("Rate set name", pages.royaltyRates.elems.rateSetNameFieldIcon);
//        steps.royaltyRates.overrideRoyaltyRateSetNumberI(1);
//        steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
//        steps.royaltyRates.saveRateSet();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(1);
//        steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
//        steps.base.scrollIntoView("Save end rules",  pages.create_deal_contract_period.elems.saveButtonEndRules);
//        steps.create_deal_contract_period.saveEndRules();
//        steps.base.scrollIntoView("Mdrc",  pages.create_deal_contract_period.elems.addMdrcLink);
//        steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
//        steps.create_deal_contract_period.itAddAdvanceAssumptions();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(2);
//        steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
//        steps.base.scrollIntoView("Save end rules",  pages.create_deal_contract_period.elems.saveButtonEndRules);
//        steps.create_deal_contract_period.saveEndRules();
//        steps.base.scrollIntoView("Mdrc",  pages.create_deal_contract_period.elems.addMdrcLink);
//        steps.create_deal_contract_period.itAddDeemedCompleteMdrcContractPeriod();
//        steps.create_deal_contract_period.itAddAdvanceAssumptions();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(3);
//        steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
//        steps.base.scrollIntoView("Save end rules",  pages.create_deal_contract_period.elems.saveButtonEndRules);
//        steps.create_deal_contract_period.saveEndRules();
//        steps.base.scrollIntoView("Mdrc",  pages.create_deal_contract_period.elems.addMdrcLink);
//        steps.create_deal_contract_period.itAddCompleteMdrcContractPeriod();
//        steps.create_deal_contract_period.itAddAdvanceAssumptions();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(4);
//        steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
//        steps.base.scrollIntoView("Save end rules",  pages.create_deal_contract_period.elems.saveButtonEndRules);
//        steps.create_deal_contract_period.saveEndRules();
//        steps.base.scrollIntoView("Mdrc",  pages.create_deal_contract_period.elems.addMdrcLink);
//        steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
//        steps.create_deal_contract_period.itAddAdvanceAssumptions();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(1);
//        steps.edit_deal_scope.selectScopeNumberI(1);
//        steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod1();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(2);
//        steps.edit_deal_scope.selectScopeNumberI(1);
//        steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod2();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(3);
//        steps.edit_deal_scope.selectScopeNumberI(1);
//        steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod3();
//
//        steps.create_deal_contract_period.selectContractPeriodNumberI(4);
//        steps.edit_deal_scope.selectScopeNumberI(1);
//        steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod4();
//
//        steps.deal.itContinueToNextPage();
//        steps.deal.saveDeal();
//        steps.deal.waitForDealToBeSaved();
//        steps.deal.returnDealNumber();
//    }
//}];


    feature = [{
        name: "Deals sanity test flow create mode",
        tags: ["create_deal_sanity"],
        steps: function () {
            //fill all general screen fields
            steps.create_deal_general.itAddAllGeneralFieldsForSanityToDealGeneralTab();
            steps.deal.itContinueToNextPage();
            //add different contract periods and add scope, pss and override pss
            steps.create_deal_contract_period.itAddDifferentTypesOfContractPeriods();
            steps.create_deal_contract_period.selectContractPeriodNumberI(1);
            steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Administration", "Worldwide");
            steps.create_deal_scope.itAddPublisherShareWithSocietyAwardCredit();
            steps.create_deal_scope.itOverridePublisherShare("france", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.create_deal_scope.saveThePublisherShareSet();

            steps.create_deal_scope.shareScopeToAllContractPeriods();

            //select contract period 2
            steps.create_deal_contract_period.selectContractPeriodNumberI(2);
            steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Finder", "Worldwide");
            steps.base.scrollIntoView("Share publisher share set", pages.create_deal_scope.elems.sharePublisherShareSetIcon);
            steps.create_deal_scope.sharePublisherShareSet();
            steps.base.scrollIntoView("Save the publisher share set", pages.create_deal_scope.elems.savePublisherShareSet);
            steps.create_deal_scope.saveSharePublisherShareSet();

            //select contract period 3
            steps.base.scrollIntoView("Contract period list", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(3);
            steps.create_deal_scope.addSimpleScope();
            steps.create_deal_scope.selectCountry();
            steps.create_deal_scope.itAddPublisherShare();
            steps.create_deal_scope.saveThePublisherShareSet();


            steps.deal.itContinueToNextPage();
            steps.create_deal_rtp.selectRtpAllContractPeriods();
            steps.create_deal_rtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.create_deal_rtp.fillIntoAcquisitionEndDateField();
            //add first retention from acquisition
            steps.create_deal_rtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.create_deal_rtp.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI(1);
            steps.create_deal_rtp.selectSpecificScopeNumberJFromAcquisitionNumberI(1, 1);
            steps.create_deal_rtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, "Life of Copyright");
            //add second retention from acquisition
            steps.create_deal_rtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.create_deal_rtp.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI(2);
            steps.create_deal_rtp.selectSpecificScopeNumberJFromAcquisitionNumberI(2, 2);
            steps.create_deal_rtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(2, "Conditional Duration");
            //add post term period 1 from retention 1
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromRetentionNumberI(1);
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI(1, 1);
            steps.create_deal_rtp.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(1, 1, 1);
            steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI(1, 1);
            //add post term period 2 from retention 1
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromRetentionNumberI(0);
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI(1, 2);
            steps.create_deal_rtp.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(1, 2, 1);
            steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI(1, 2);
            //add post term period 1 from acquisition
            steps.base.scrollIntoView("Add post term period from acquisition ", pages.create_deal_rtp.elems.addPostTermPeriodLinkFromAcquisition);
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromAcquisition();
            steps.base.scrollIntoView("Post term period from acquisition ", pages.create_deal_rtp.elems.postTermPeriodDescriptionFromAcquisition);
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberIFromAcquisition(1);
            //steps.create_deal_rtp.selectSpecificScopeNumberJForPostTermNumberI(3,1);
            //steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberIFromAcquisition(1);



            //steps.deal.itContinueToNextPage();
            //steps.deal.itContinueToNextPage();
            //steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();
        }
    }];

module.exports = {
    commonFeatureTags: ["deal_sanity_create"],
    feature: feature,
    beforeFeature: beforeFeature
};

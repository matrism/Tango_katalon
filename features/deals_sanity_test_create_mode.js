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
require(pages_path + "create_deal_payee");
require(steps_path + "create_deal_payee");
require(pages_path + "create_deal_approval_restrictions");
require(steps_path + "create_deal_approval_restrictions");
require(pages_path + "create_deal_advances");
require(steps_path + "create_deal_advances");
require(pages_path + "royaltyRates");
require(steps_path + "royaltyRates");

var beforeFeature = function () {
        steps.login.itLogin();
    },

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
            steps.create_deal_scope.itOverridePublisherShare("ffrance", "(71898243)\nFRANCE MUSIC CORP", "France");
            steps.create_deal_scope.saveThePublisherShareSet();
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
            steps.create_deal_scope.shareScopeToAllContractPeriods();

            //select contract period 2
            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(2)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(2);
            steps.create_deal_scope.addSpecificScopeTypeAndTerritory("Finder", "Worldwide");
            steps.base.scrollIntoView("Share publisher share set", pages.create_deal_scope.elems.sharePublisherShareSetIcon);
            steps.create_deal_scope.sharePublisherShareSet();
            steps.base.scrollIntoView("Save the publisher share set", pages.create_deal_scope.elems.savePublisherShareSet);
            steps.create_deal_scope.saveSharePublisherShareSet();
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
            steps.create_deal_contract_period.selectContractPeriodNumberI(3);
            steps.create_deal_scope.addSimpleScope();
            steps.base.scrollIntoView("Country selection", pages.create_deal_scope.elems.territoryField);
            steps.create_deal_scope.selectCountry();
            steps.create_deal_scope.itAddPublisherShare();
            steps.create_deal_scope.saveThePublisherShareSet();
            steps.royaltyRates.addNewRoyaltySet();
            steps.base.scrollIntoView("Rate set name", pages.royaltyRates.elems.rateSetNameFieldIcon);
            steps.royaltyRates.overrideRoyaltyRateSetNumberI(1);
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(1)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(1);
            steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.create_deal_contract_period.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
            steps.create_deal_contract_period.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(2)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(2);
            steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.create_deal_contract_period.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.create_deal_contract_period.itAddDeemedCompleteMdrcContractPeriod();
            steps.create_deal_contract_period.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(3);
            steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.create_deal_contract_period.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.create_deal_contract_period.itAddCompleteMdrcContractPeriod();
            steps.create_deal_contract_period.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(4)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(4);
            steps.create_deal_contract_period.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.create_deal_contract_period.elems.saveButtonEndRules);
            steps.create_deal_contract_period.saveEndRules();
            steps.base.scrollIntoView("Mdrc", pages.create_deal_contract_period.elems.addMdrcLink);
            steps.create_deal_contract_period.itAddIncompleteMdrcContractPeriod();
            steps.create_deal_contract_period.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(1)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(1);
            steps.edit_deal_scope.selectScopeNumberI(1);
            steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod1();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(2)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(2);
            steps.edit_deal_scope.selectScopeNumberI(1);
            steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod2();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(3);
            steps.edit_deal_scope.selectScopeNumberI(1);
            steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod3();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[data-ng-click='setActiveContractPeriod(cp.id)']:nth-child(4)")));
            steps.create_deal_contract_period.selectContractPeriodNumberI(4);
            steps.edit_deal_scope.selectScopeNumberI(1);
            steps.edit_deal_scope.validateShareScopesPopupDetailsContractPeriod4();

            steps.deal.itContinueToNextPage();
            steps.create_deal_rtp.selectRtpAllContractPeriods();
            steps.create_deal_rtp.fillIntoAcquisitionDescription(1);
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
            steps.base.scrollIntoView("Add end rules to retention", pages.create_deal_rtp.elems.addEndRulesLinkRtpRetention2FromAcquisition);
            steps.create_deal_rtp.clickOnAddEndRulesRetentionPeriodFromAcquisitionNumberI(2);
            steps.create_deal_contract_period.itAddSimpleEndRuleToRtp();
            //add post term period 1 from retention 1
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromRetentionNumberI(1);
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI(1, 1);
            steps.create_deal_rtp.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(1, 1, 1);
            steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI(1, 1);
            //add post term period 2 from retention 1
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromRetentionNumberI(0);
            steps.base.scrollIntoView("Pot term period", element(By.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(1) div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(2) div[data-ng-model='postTermCollectionRTP.deal_scope_id_holders'] div[ng-class='tgTypeaheadWrapClass']")));
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI(1, 2);
            steps.create_deal_rtp.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(1, 2, 1);
            steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI(1, 2);
            //add post term period 1 from acquisition
            steps.base.scrollIntoView("Add post term period from acquisition ", pages.create_deal_rtp.elems.addPostTermPeriodLinkFromAcquisition);
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromAcquisition();
            steps.base.scrollIntoView("Post term period from acquisition ", element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(6) div[data-name='postTermRtpForm'] input[data-ng-model='rtp.description']")));
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberIFromAcquisition(1);
            steps.create_deal_rtp.selectSpecificScopeNumberJForPostTermNumberI(1, 3);
            steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberIFromAcquisition(1);
            //add post term period 2 from acquisition
            steps.base.scrollIntoView("Add post term period from acquisition ", pages.create_deal_rtp.elems.addPostTermPeriodLinkFromAcquisition);
            steps.create_deal_rtp.clickOnAddPostTermPeriodFromAcquisition();
            steps.base.scrollIntoView("Post term period from acquisition ", element(by.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(7) div[data-name='postTermRtpForm'] input[data-ng-model='rtp.description']")));
            steps.create_deal_rtp.fillIntoDescriptionPostTermPeriodNumberIFromAcquisition(2);
            steps.create_deal_rtp.selectSpecificScopeNumberJForPostTermNumberI(2, 3);
            steps.create_deal_rtp.fillIntoDurationPostTermPeriodNumberIFromAcquisition(2);
            // add another rtp set
            steps.base.scrollIntoView("Add another rtp set ", pages.create_deal_rtp.elems.addAnotherRtpSetLink);
            steps.create_deal_rtp.clickOnAddAnotherAcquisitionPeriodLink();
            steps.create_deal_rtp.fillIntoAcquisitionDescription(2);
            //add first retention from acquisition
            steps.create_deal_rtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.create_deal_rtp.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI(1);
            steps.create_deal_rtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, "Life of Copyright");
            steps.deal.itContinueToNextPage();
            //steps.create_deal_payee.itAddPayeeOrganisationAndAssociateScope();
            //steps.create_deal_payee.itAddPayeePersonAndAssociateScope();
            steps.deal.itContinueToNextPage();
            steps.create_deal_approval_restrictions.clickOnFinancialNoApprovalRequired();
            steps.base.scrollIntoView("Licensing ", pages.create_deal_approval_restrictions.elems.licensingRestricted);
            steps.create_deal_approval_restrictions.clickOnLicensingRestricted();

            steps.deal.itContinueToNextPage();
            steps.create_deal_approval_restrictions.clickOnAddExternalContactOnMissingApprovalModalDialog();
            steps.base.scrollIntoView("External contacts", pages.create_deal_general.elems.externalContactNameFieldInput);
            steps.create_deal_general.selectSpecificExternalContactRoleRowI(1, "Approval");
            steps.create_deal_general.selectRandomExternalContactNameRowI(1);

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();

            //add advances
            steps.create_deal_advances.clickOnAddFirstAdvanceLink();
            steps.create_deal_advances.selectRandomContractPeriodAdvanceDetails();
            steps.create_deal_advances.fillIntoAmountAdvanceDetails();
            steps.create_deal_advances.selectRandomCurrencyAdvanceDetails();
            steps.create_deal_advances.selectPaymentStructureAdvanceDetails("Lump Sum");
            steps.create_deal_advances.selectWhenDistributionRulesAdvanceDetails("Contract Execution");
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(1) input[data-ng-model='apd.percent']")));
            steps.create_deal_advances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(1);
            steps.create_deal_advances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(1);
            steps.create_deal_advances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(1);
            steps.create_deal_advances.fillIntoPercentDistributionRulesAdvanceDetailsNumberI(2);
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(2) div[data-ng-model='apd.payee']")));
            steps.create_deal_advances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(2);
            steps.create_deal_advances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(2);
            steps.create_deal_advances.itAddCompleteAdvanceApplicableEarnings();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }];

module.exports = {
    commonFeatureTags: ["deal_sanity_create"],
    feature: feature,
    beforeFeature: beforeFeature
};

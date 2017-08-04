'use strict';

exports.id = '95e22fda-9a16-455f-af64-1b1bfab00a79';
exports.featureName = 'Create Deal Sanity';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'sanity', 'dealsSanity'];

exports.feature = [
    {
        name: "Deals sanity test flow create mode",
        tags: [],
        steps: criticalScenario(() =>
        {
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
            steps.royaltyRates.addIncomeProviderByPartialMatch("synch");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.addNPSToContractualField('30');
            steps.royaltyRates.addAdminFeeToContractualField('40');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            steps.base.sleep(1000);
            steps.createDealScope.shareScopeToAllContractPeriods();

            //select contract period 2
            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(2)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Finder", "Worldwide");
            steps.base.scrollIntoView("Share publisher share set", pages.createDealScope.elems.sharePublisherShareSetIcon);
            steps.createDealScope.sharePublisherShareSet();
            steps.base.scrollIntoView("Save the publisher share set", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveSharePublisherShareSet();
            //add rate set to Scope
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addEffectiveStartDate("2015-06-07");
            steps.royaltyRates.addIncomeProviderByPartialMatch("synch");
            steps.royaltyRates.addRatePercentageToContractualField('10');
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.base.sleep(1000);
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();
            //select contract period 3
            steps.base.scrollIntoView("Contract period list", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.createDealScope.addSpecificScopeTypeAndTerritory("Joint Venture", "Worldwide");
            steps.createDealScope.itAddPublisherShare();
            steps.createDealScope.saveThePublisherShareSet();
            steps.royaltyRates.addNewRoyaltySet();
            steps.base.sleep(1000);
            steps.base.scrollIntoView("Rate set name", pages.royaltyRates.elems.rateSetNameFieldIcon);
            steps.royaltyRates.overrideRoyaltyRateSetNumberI(1);
            steps.base.scrollIntoView("Done rate set button", element(by.css(".rate-sets-top-toolbar>button")));
            steps.royaltyRates.saveRateSet();

            steps.base.scrollIntoView("contract period 1", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(1)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.base.scrollIntoView("Add end rules", pages.createDealContractPeriod.elems.addEndRulesLink);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.createDealContractPeriod.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRulesForm();
            steps.base.scrollIntoView("Mdrc", pages.createDealContractPeriod.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
            steps.base.scrollIntoView("Advance assumptions", pages.createDealContractPeriod.elems.addAssumptionLink);
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period 2", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(2)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.base.scrollIntoView("Add end rules", pages.createDealContractPeriod.elems.addEndRulesLink);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.createDealContractPeriod.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRulesForm();
            steps.base.scrollIntoView("Mdrc", pages.createDealContractPeriod.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddDeemedCompleteMdrcContractPeriod();
            steps.base.scrollIntoView("Advance assumptions", pages.createDealContractPeriod.elems.addAssumptionLink);
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period 3", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.base.scrollIntoView("Add end rules", pages.createDealContractPeriod.elems.addEndRulesLink);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.createDealContractPeriod.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRulesForm();
            steps.base.scrollIntoView("Mdrc", pages.createDealContractPeriod.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddCompleteMdrcContractPeriod();
            steps.base.scrollIntoView("Advance assumptions", pages.createDealContractPeriod.elems.addAssumptionLink);
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(4)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(4);
            steps.base.scrollIntoView("Add end rules", pages.createDealContractPeriod.elems.addEndRulesLink);
            steps.createDealContractPeriod.itAddSimpleEndRuleToContractPeriod();
            steps.base.scrollIntoView("Save end rules", pages.createDealContractPeriod.elems.saveButtonEndRules);
            steps.createDealContractPeriod.saveEndRulesForm();
            steps.base.scrollIntoView("Mdrc", pages.createDealContractPeriod.elems.addMdrcLink);
            steps.createDealContractPeriod.itAddIncompleteMdrcContractPeriod();
            steps.base.scrollIntoView("Advance assumptions", pages.createDealContractPeriod.elems.addAssumptionLink);
            steps.createDealContractPeriod.itAddAdvanceAssumptions();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(1)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.base.scrollIntoView("Scope Number 1", element(By.css("ul.deal-list.scopes-menu li[ng-click='setActiveScope(sp.id)']:nth-child(1)")));
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod1();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(2)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.base.scrollIntoView("Scope Number 1", element(By.css("ul.deal-list.scopes-menu li[ng-click='setActiveScope(sp.id)']:nth-child(1)")));
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod2();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(3)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(3);
            steps.base.scrollIntoView("Scope Number 1", element(By.css("ul.deal-list.scopes-menu li[ng-click='setActiveScope(sp.id)']:nth-child(1)")));
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod3();

            steps.base.scrollIntoView("contract period ", element(By.css("ul.deal-list li[ng-click='setActiveContractPeriod(cp.id)']:nth-child(4)")));
            steps.createDealContractPeriod.selectContractPeriodNumberI(4);
            steps.base.scrollIntoView("Scope Number 1", element(By.css("ul.deal-list.scopes-menu li[ng-click='setActiveScope(sp.id)']:nth-child(1)")));
            steps.editDealScope.selectScopeNumberI(1);
            steps.editDealScope.validateShareScopesPopupDetailsContractPeriod4();

            steps.deal.itContinueToNextPage();
            steps.createDealRtp.selectRtpAllContractPeriods();
            steps.base.scrollIntoView("acquisition ", pages.createDealRtp.elems.acquisitionDescription);
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            steps.createDealRtp.selectSpecificScopeNumberIRtpAcquisition(1);
            steps.createDealRtp.fillIntoAcquisitionEndDateField();
            //add first retention from acquisition
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.createDealRtp.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI(1);
            //steps.createDealRtp.selectSpecificScopeNumberJFromAcquisitionNumberI(1, 1);
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(0, "Life of Copyright");
            //add second retention from acquisition
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.base.scrollIntoView("Retention 2 from acquisition", element(by.css("div[ng-repeat='rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id'] div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(2) div[tg-modular-edit-id='retentionModulatEdit'] input[ng-model='tgModularEditModel.description']")));
            steps.createDealRtp.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI(2);
            //steps.createDealRtp.selectSpecificScopeNumberJFromAcquisitionNumberI(2, 2);
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(1, "Conditional Duration");
            steps.base.scrollIntoView("Add end rules to retention", pages.createDealRtp.elems.addEndRulesLinkRtpRetention2FromAcquisition);
            steps.createDealRtp.clickOnAddEndRulesRetentionPeriodFromAcquisitionNumberI(2);
            steps.createDealContractPeriod.itAddSimpleEndRuleToRtp();

            //add post term period 1 from retention 1
            steps.base.scrollIntoView("Add post term from retention 1", element(by.css("div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(1) [ng-click='!__isFreshlyAdded && tgModularEditModel.addPostTermCollectionPeriod()']")));
            steps.createDealRtp.clickOnAddPostTermPeriodFromRetentionNumberI(1);
            steps.base.scrollIntoView("Post term period", element(by.css('.rights-term-period-box.post-term-collection [ng-model="tgModularEditModel.description"]')));
            steps.createDealRtp.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI(1, 1, 1);
            steps.createDealRtp.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(1, 1, 1, 1);
            steps.createDealRtp.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI(1, 1, 1);
            //add post term period 2 from retention 1
            steps.createDealRtp.clickOnAddPostTermPeriodFromRetentionNumberI(1);
            //steps.base.scrollIntoView("Post term period", element(By.css("div[data-ng-repeat='rtps in form.deal.deal_rights_term_period_sets track by $index']:nth-child(4) div[data-ng-repeat='rtp in rtps.rights_terms_periods | orderBy: orderRightsTermPeriods']:nth-child(1) div[data-ng-repeat='postTermCollectionRTP in rtp.post_term_collection_rights_terms']:nth-child(2) input[data-ng-model='postTermCollectionRTP.description']")));
            steps.base.scrollIntoView("Add post term from retention 1", element(by.css("div[ng-repeat='rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods']:nth-child(1) [ng-click='!__isFreshlyAdded && tgModularEditModel.addPostTermCollectionPeriod()']")));

            steps.createDealRtp.fillIntoDescriptionPostTermPeriodNumberJFromRetentionNumberI(1, 1, 2);
            steps.createDealRtp.selectSpecificScopeNumberKFromRetentionNumberIAndPostTermNumberJ(1, 1, 1, 2);
            steps.createDealRtp.fillIntoDurationPostTermPeriodNumberJFromRetentionNumberI(1, 1, 2);
            //add post term period 1 from acquisition
            steps.base.scrollIntoView("Add post term period from acquisition ", pages.createDealRtp.elems.addPostTermPeriodLinkFromAcquisition);
            steps.createDealRtp.clickOnAddPostTermPeriodFromAcquisition();
            steps.base.scrollIntoView("Post term period from acquisition ", element(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child(1) [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child(3) [ng-model="tgModularEditModel.description"]')));
            steps.createDealRtp.fillIntoDescriptionPostTermPeriodNumberIFromAcquisition(1);
            steps.createDealRtp.selectSpecificScopeNumberJForPostTermNumberI(1, 1, 3);
            steps.createDealRtp.fillIntoDurationPostTermPeriodNumberIFromAcquisition(1,1);
            //add post term period 2 from acquisition
            steps.base.scrollIntoView("Add post term period from acquisition ", pages.createDealRtp.elems.addPostTermPeriodLinkFromAcquisition);
            steps.createDealRtp.clickOnAddPostTermPeriodFromAcquisition();
            steps.base.scrollIntoView("Post term period from acquisition ", element(by.css('[ng-repeat="rightsTermPeriodSet in rightsTermPeriodSets track by rightsTermPeriodSet.id"]:nth-child(1) [ng-repeat="rightsTermPeriod in rightsTermPeriodSet.getRightsTermsPeriodsByPeriod(constants.RETENTION, constants.PTC) | orderBy: orderRightsTermPeriods"]:nth-child(4) [ng-model="tgModularEditModel.description"]')));
            steps.createDealRtp.fillIntoDescriptionPostTermPeriodNumberIFromAcquisition(2);
            steps.createDealRtp.selectSpecificScopeNumberJForPostTermNumberI(1, 2, 1);
            steps.createDealRtp.fillIntoDurationPostTermPeriodNumberIFromAcquisition(1,2);
            // add another rtp set
            steps.base.scrollIntoView("Add another rtp set ", pages.createDealRtp.elems.addAnotherRtpSetLink);
            steps.createDealRtp.clickOnAddAnotherAcquisitionPeriodLink();
            steps.createDealRtp.fillIntoAcquisitionDescription(1);
            //add first retention from acquisition
            steps.base.scrollIntoView("Add retention from acquisition ", pages.createDealRtp.elems.addRetentionPeriodLinkFromAcquisition);
            steps.createDealRtp.clickOnAddRetentionPeriodFromAcquisition();
            steps.createDealRtp.fillIntoRetentionPeriodDescriptionFromAcquisitionNumberI(1);
            steps.createDealRtp.selectRandomDurationTypeRetentionFromAcquisitionNumberI(0, "Life of Copyright");
            steps.deal.itContinueToNextPage();

            /******************************************
            TEMPORARILY DISABLE ADDING OF PAYEE, IS BROKEN IN QA
            steps.createDealPayee.itAddPayeeOrganisationAndAssociateScope();
            steps.base.scrollIntoView("Add new Payee", pages.createDealPayee.elems.addNewPayeeField);
            steps.createDealPayee.itAddPayeePersonAndAssociateScope();
            ******************************************/

            steps.deal.itContinueToNextPage();
            steps.base.scrollIntoView("Financial ", pages.createDealApprovalRestrictions.elems.financialNoApprovalRequired);
            steps.createDealApprovalRestrictions.clickOnFinancialNoApprovalRequired();
            steps.base.scrollIntoView("Licensing ", pages.createDealApprovalRestrictions.elems.licensingRestricted);
            steps.createDealApprovalRestrictions.clickOnLicensingRestricted();

            steps.deal.itContinueToNextPage();
            //No longer applicable
            /*
            steps.createDealApprovalRestrictions.clickOnAddExternalContactOnMissingApprovalModalDialog();
            steps.base.scrollIntoView("External contacts", pages.createDealGeneral.elems.externalContactNameFieldInput);
            steps.createDealGeneral.selectSpecificExternalContactRoleRowI(1, "Approval");
            steps.createDealGeneral.selectRandomExternalContactNameRowI(1);

            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            steps.deal.itContinueToNextPage();
            */
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
            steps.base.scrollIntoView("second line", element(by.css("table.table.pay-table.payment-table tbody tr[data-ng-form='apdForm']:nth-child(2) div[data-validation-class='advancePaymentDistributionCurrency'] button.btn.dropdown-toggle")));
            steps.createDealAdvances.selectRandomOrganisationPaymentRecipientDistributionRulesAdvanceDetailsNumberI(2);
            steps.createDealAdvances.selectRandomCurrencyDistributionRulessAdvanceDetailsNumberI(2);
            //steps.createDealAdvances.itAddCompleteAdvanceApplicableEarnings();
            steps.deal.saveDeal();
            steps.base.sleep(10000);
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        })
    }
];
'use strict';

var data = requireFromEnvFolder('features/deals/data/lad.js'),
    data = data.lad;

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'lad'];

exports.feature = [
    {
        name: 'Create a basic deal for LAD',
        tags: ['ladCreateBasicDeal'],
        steps: function () {
            var d = steps.deal,
                ccp = steps.createDealContractPeriod;

            steps.base.useBlankEntityDataSlot('deal', 'mainDeal');
            //steps.searchSection.accessSavedDealByNumber('265160');

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            d.itContinueToNextPage();

            //add 3 contract periods
            ccp.fillContractPeriodDescription('Description 1');
            ccp.fillMandatoryFieldsContractPeriodSpecificValue('2015-01-02');
            ccp.fillActualEndDateFieldSpecificValue('2015-04-04');
            ccp.addNewContractPeriodDialog();
            ccp.fillContractPeriodDescription('Description 2');
            ccp.fillEndTargetMonths();
            ccp.fillActualEndDateFieldSpecificValue('2016-02-04');
            ccp.addNewContractPeriodDialog();
            ccp.fillContractPeriodDescription('Description 3');
            ccp.fillEndTargetMonths();

            //add Advance Assumptions to all CPs
            _.times(3, function (num) {
                ccp.selectContractPeriodNumberI(num + 1);
                ccp.itAddAdvanceAssumptions();
            });

            d.itContinueToNextPage();
            d.saveDeal();
            d.waitForDealToBeSaved();
            d.printDealNumber();
            d.findId();
        }
    },
    {
        name: 'Add PSS and override publisher',
        tags: ['ladPSSOverridePublisher'],
        steps: function () {
            var d = steps.deal,
                cds = steps.createDealScope,
                ccp = steps.createDealContractPeriod,
                eds = steps.editDealScope;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTermsDealTabDetails();

            //add scope to the contract period 1
            ccp.selectContractPeriodNumberI(1);
            cds.addSpecificScopeTypeAndTerritory('Administration', 'Worldwide');
            cds.clickOnAddPublisherShareSet({
                scrollIntoView: true,
            });
            cds.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
            cds.fillIntoFirstPublisherNameAMField('53026414');
            cds.selectSpecificPublisherNameDropDown();
            cds.fillIntoFirstPublisherNameAMCollectField();
            for (var i = 2; i <= 3; i++) {
                cds.clickAddChainLink();
                cds.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
                cds.fillIntoPublisherNameAMFieldChainI(i);
                cds.selectSpecificPublisherNameDropDownChainI(i);
                cds.fillIntoPublisherNameAMCollectFieldChainI(i);
            }

            //override publisher
            data.publisherOverride.forEach(function (po) {
                cds.itOverridePublisherShare(po + 'testpub1', po + 'testpub1', po);
            });
            cds.saveThePublisherShareSet();

            eds.editSaveAllChanges();
            d.waitForDealToBeSaved();
        }
    },
    {
        name: 'Add Royalty rates and share scope',
        tags: ['ladAddRoyaltyRates'],
        steps: function () {
            var d = steps.deal,
                rr = steps.royaltyRates,
                cds = steps.createDealScope,
                eds = steps.editDealScope;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTermsDealTabDetails();
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            eds.selectScopeNumberI(1);

            for (var i = 1; i <= 6; i++) {
                rr.addNewRoyaltySet();
                if (i > 1) {
                    rr.addEffectiveStartDate('2015-06-0' + i);
                }
                rr.addIncomeProviderByPartialMatch('test');
                rr.addRatePercentageToContractualField(10 * i);
                rr.clickOnReceiptApplicationMethod();
                rr.confirmChangingRateApplicationMethod();
                steps.base.scrollIntoView('Done rate set button', element(by.css('.rate-sets-top-toolbar>button')));
                rr.saveRateSet();
            }

            cds.shareScopeToAllContractPeriods();
        }
    },
    {
        name: 'Add Society Agreement',
        tags: ['ladAddSocietyAgreement'],
        steps: function () {
            var d = steps.deal,
                eds = steps.editDealScope;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }
            d.goToTermsDealTabDetails();

            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            eds.selectScopeNumberI(1);

            for (var i = 1; i <= 3; i++) {
                eds.editClickOnAddNewSocietyAgreementNumberI(i);

                data.societyAgreement.rightPanel.forEach(function (rp, rpIndex) {
                    eds.editSocietyAgreementNumberRightPanelNumberI(rpIndex + 1, rp);
                });
                data.societyAgreement.leftPanel.forEach(function (lp, lpIndex) {
                    eds.editSocietyAgreementNumberCreatorLeftPanelNumberI(lpIndex + 1, lp);
                    data.societyAgreement.leftPanelRow.forEach(function (lpr, lprIndex) {
                        if (lpIndex > 1) {
                            eds.editClickOnAddCreatorSocietyAgreementNumberForm();
                        }
                        eds.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(lpIndex + 1, lprIndex + 1, lpr);
                    });
                });

                eds.saveChangesSocietyAgreementNumberForm();
            }
        }
    },
    {
        name: 'Copy scopes',
        tags: ['ladCopyScopes'],
        steps: function () {
            var d = steps.deal,
                eds = steps.editDealScope;

            var timeout = 100000;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }
            d.goToTermsDealTabDetails();

            for (var i = 1; i <= 3; i++) {
                steps.editDealContractPeriod.editSelectContractPeriodNumberI(i);
                for (var j = 1; j <= 3; j++) {
                    var copies = (j == 3) ? 49 : 100;
                    eds.selectScopeNumberI(1);
                    eds.editClickOnTheCopyScopeOptionNumberI(1);
                    eds.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, copies);
                    eds.clickOnCopyPublisherShareInCopyScopeModal();
                    eds.clickOnCopyRoyaltyRatesInCopyScopeModal();
                    eds.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
                    //eds.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
                }
            }

        }
    },
    {
        name: 'AddEndRules',
        tags: ['ladEndRules'],
        steps: function () {
            var d = steps.deal;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTermsDealTabDetails();

            describe('Add End Rules to all CPs', function () {
                _.times(3, function (num) {
                    steps.createDealContractPeriod.selectContractPeriodNumberI(num + 1);
                    steps.endRules.clickAddEndRulesLink();
                    steps.endRules.setRule(data.endRules[0]);

                    _.times(4, function (ruleNum){
                        var i = ruleNum+1;

                        steps.endRules.clickAddRuleLink();
                        steps.endRules.setRule(data.endRules[i]);
                    });
                    steps.endRules.saveRules();
                });
            });
        }
    },
    {
        name: 'Add Contacts and Contracting Parties',
        tags: ['ladContactsAndContractingParties'],
        steps: function () {
            var d = steps.deal;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToGeneralDealTabDetail();

            describe('Add 10 external contacts', function () {
                var roles = ['Attorney', 'Business Manager', 'Contact', 'Producer', 'Approvals', 'Legal Notices', 'Manager', 'Legal notices CC', 'Attorney', 'Business Manager'],
                    names = ['Bob', 'Sharon', 'John', 'Sarah', 'William', 'Diane', 'Richard', 'Philip', 'Steve', 'Claire'];

                steps.deal.clickAddExternalContactLink();
                _.each(roles, function (role, i) {
                    steps.deal.addExternalContact(role, names[i]);
                });
                steps.deal.saveExternalContacts();
            });

            describe('Add 2 internal contacts', function () {
                var roles = ['Attorney', 'Product Manager'],
                    names = ['Mackintosh, Alex', 'John'];

                steps.deal.clickAddInternalContactLink();
                _.each(roles, function (role, i) {
                    steps.deal.addInternalContact(role, names[i]);
                });
                steps.deal.saveInternalContacts();
            });

            describe('Add 5 contracting parties', function () {
                steps.deal.expectNumberOfContractingPartiesToBe(1);
                steps.deal.addContractingParties('SACEM', 'JOHN ADAMS', 'Katy', 'ASCAP', 'MAX MARTIN');
            });

            describe('Refresh page and expect added data to be present', function () {
                steps.deal.refreshThePage();
                steps.deal.expectNumberOfContractingPartiesToBe(6);
                steps.deal.expectNumberOfExternalContactsToBe(10);
                steps.deal.expectNumberOfInternalContactsToBe(2);
            });
        }
    },
    {
        name: 'Add Advances',
        tags: ['ladAdvances'],
        steps: function () {
            var d = steps.deal;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTab('Advances');
            _.times(3, function (cpNum) {
                describe('Add Advances for Contract Period #' + (cpNum+1), function (){
                    _.times(2, function () {
                        steps.editAdvances.clickAddAdvanceButton();
                        steps.editAdvances.selectContractPeriodByIndex(cpNum+1);
                        steps.editAdvances.setAdvanceAmount(100);
                        steps.editAdvances.setCurrency('USD');
                        steps.editAdvances.distributionRules.setWhen('Contract Execution');
                        steps.editAdvances.saveAdvance();
                        steps.editAdvances.expectToBeRedirectedToAdvanceSummary();
                    });
                });
            });

            steps.editAdvances.expectContractPeriodsToBe(3);
            steps.editAdvances.expectEachContractPeriodToHaveAdvances(2);
            steps.editAdvances.expectContractPeriodsToDisplayAdvanceAssumptionsLink();
            steps.editAdvances.expectAdvanceAssumptionsPopUpToAppear();
        }
    },
    {
        name: 'Add Payees',
        tags: ['ladAddPayees'],
        steps: function () {
            var d = steps.deal,
                edp = steps.editDealPayee;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }
            d.goToPayeesDealTabDetails();
            edp.editClickOneByPayeeHeaderLink();

            edp.editSelectSpecificNewPayeePersonFromDropDown('person ' + 1 + ', TAT payee');
            for (var i = 1; i <= 3; i++) {
                edp.editAssociateSpecificScopeNumberIToNewPayee(i);
            }
            edp.editAddPayoutToPayee();
            edp.editFillIntoPayeeLegalRightInputField();
            edp.editFillIntoPayeeDistributionInputField();
            edp.editSavePayeeToPayeeForm();

            //for (var j = 2; j <= 200; j++) {
            for (var j = 2; j <= 10; j++) {
                edp.editSelectSpecificNewPayeePersonFromDropDown('person ' + j + ', TAT payee');
                for (var i = 3 * j; i >= 3 * j - 2; i--) {
                    edp.editAssociateSpecificScopeNumberIToNewPayee(i);
                }
                edp.editAddPayoutToPayee();
                edp.editFillIntoPayeeLegalRightInputField();
                edp.editFillIntoPayeeDistributionInputField();
                edp.editSavePayeeToPayeeForm();
            }

        }
    },
    {
        name: 'Add RTP sets',
        tags: ['ladRtp'],
        steps: function () {
            var countPtc = 0,
                d = steps.deal,
                edp = steps.editDealPayee;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            steps.deal.goToTermsDealTabDetails();
            steps.deal.goToRightsTermPeriodsTermsTabDetails();

            //for (var acq = 0; acq <= 200; acq++) {
            for (var acq = 0; acq <= 10; acq++) {
                countPtc = 0;
                steps.editDealRtp.editClickOnAddAnotherAcquisitionPeriodLink();
                steps.editDealRtp.selectScopeNumberIFromInput(0, 0, 'acq');

                for (var ret = 0; ret <= 1; ret++) {
                    steps.editDealRtp.clickOnAddRetentionFromAcquisitionLink();
                    steps.editDealRtp.selectScopeNumberIFromInput(0, ret, 'ret');
                    steps.editDealRtp.selectScopeNumberIFromInput(1, ret, 'ret');
                    steps.editDealRtp.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(ret + 1, 'Life of Copyright');
                    for (var ptc = 0; ptc <= 1; ptc++) {
                        steps.editDealRtp.clickOnAddPostTermCollectionFromRetention(ret);
                        steps.editDealRtp.selectScopeNumberIFromInput(0, countPtc, 'ptc');
                        steps.editDealRtp.selectScopeNumberIFromInput(1, countPtc, 'ptc');
                        steps.editDealRtp.editFillIntoDurationFieldPostTermCollectionFromRetention(ret, ptc);
                        countPtc++;
                    }
                }

                steps.editDealRtp.editSaveAnotherAcquisitionForm();
            }
        }
    }
];

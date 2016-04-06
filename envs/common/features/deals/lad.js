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
        name: 'Add PSS, override publisher and share scope',
        tags: ['ladPSSOverridePublisher', 'ladExistingDeal'],
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

            cds.clickOnShareScope();
            cds.selectAllContractPeriodsShareScopeModalDialog();
            cds.clickOnTheDoneShareScopeModalDialog();
        }
    },
    {
        name: 'Add Royalty rates',
        tags: ['ladAddRoyaltyRates', 'ladExistingDeal'],
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
                rr.confirmChangingRateApplicationMethod();
            }
        }
    },
    {
        name: 'Add scope creators',
        tags: ['ladScopeCreators', 'ladExistingDeal'],
        steps: function () {
            var d = steps.deal,
                edcp = steps.editDealContractPeriod,
                eds = steps.editDealScope;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTermsDealTabDetails();

            edcp.editSelectContractPeriodNumberI(1);
            eds.selectScopeNumberI(1);
            eds.editScopeArea();
            data.creators.forEach(function (creator) {
                eds.enterCreatorSearchTerms(creator);
                eds.selectCreatorSearchResultByName(creator);
            });
            eds.editSaveScopeChanges();
            eds.editConfirmModalDialogDirtyCheck();
        }
    },
    {
        name: 'Add Society Agreement',
        tags: ['ladAddSocietyAgreement', 'ladExistingDeal'],
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
                    if (lpIndex > 0) {
                        eds.editClickOnAddCreatorSocietyAgreementNumberForm();
                    }
                    eds.editSocietyAgreementNumberCreatorLeftPanelNumberI(lpIndex + 1, lp);
                    data.societyAgreement.leftPanelRow.forEach(function (lpr, lprIndex) {
                        eds.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(lpIndex + 1, lprIndex + 1, lpr);
                    });
                });

                eds.saveChangesSocietyAgreementNumberForm();
            }
        }
    },
    {
        name: 'Copy scopes',
        tags: ['ladCopyScopes', 'ladExistingDeal'],
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
                }
            }

        }
    },
    {
        name: 'AddEndRules',
        tags: ['ladEndRules', 'ladExistingDeal'],
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
        tags: ['ladContactsAndContractingParties', 'ladExistingDeal'],
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

                d.clickAddExternalContactLink();
                _.each(roles, function (role, i) {
                    d.addExternalContact(role, names[i]);
                });
                d.saveExternalContacts();
            });

            describe('Add 2 internal contacts', function () {
                var roles = ['Attorney', 'Product Manager'],
                    names = ['Mackintosh, Alex', 'John'];

                d.clickAddInternalContactLink();
                _.each(roles, function (role, i) {
                    d.addInternalContact(role, names[i]);
                });
                d.saveInternalContacts();
            });

            describe('Add 5 contracting parties', function () {
                d.expectNumberOfContractingPartiesToBe(1);
                d.addContractingParties('SACEM', 'JOHN ADAMS', 'Katy', 'ASCAP', 'MAX MARTIN');
            });

            describe('Refresh page and expect added data to be present', function () {
                d.refreshThePage();
                d.expectNumberOfContractingPartiesToBe(6);
                d.expectNumberOfExternalContactsToBe(10);
                d.expectNumberOfInternalContactsToBe(2);
            });
        }
    },
    {
        name: 'Add Advances',
        tags: ['ladAdvances', 'ladExistingDeal'],
        steps: function () {
            var d = steps.deal,
                ea = steps.editAdvances;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTab('Advances');
            _.times(3, function (cpNum) {
                describe('Add Advances for Contract Period #' + (cpNum+1), function (){
                    _.times(2, function () {
                        ea.clickAddAdvanceButton();
                        ea.selectContractPeriodByIndex(cpNum+1);
                        ea.setAdvanceAmount(100);
                        ea.setCurrency('USD');
                        ea.distributionRules.setWhen('Contract Execution');
                        ea.saveAdvance();
                        ea.expectToBeRedirectedToAdvanceSummary();
                    });
                });
            });

            ea.expectContractPeriodsToBe(3);
            ea.expectEachContractPeriodToHaveAdvances(2);
            ea.expectContractPeriodsToDisplayAdvanceAssumptionsLink();
            ea.expectAdvanceAssumptionsPopUpToAppear();
        }
    },
    {
        name: 'Add Payees',
        tags: ['ladAddPayees', 'ladExistingDeal'],
        steps: function () {
            var d = steps.deal,
                edp = steps.editDealPayee;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            if(systemConfig.env.name === 'staging') {

                d.goToOldPayeesDealTabDetails();

                edp.editOldPayeeArea();
                edp.editSelectSpecificOldPayeePersonFromDropDown('person ' + 1 + ', TAT payee');
                edp.editSelectRandomValueForOldPayeeCompanyNameCode();
                for (var i = 1; i <= 3; i++) {
                    edp.editAssociateSpecificScopeNumberIToOldPayee(i);
                    edp.editFillIntoPayeeLegalRightInputFieldScopeNumberI(i);
                    edp.editFillIntoPayeeDistributionInputFieldScopeNumberI(i);
                }
                edp.editSaveOldPayeeForm();

                for (var j = 2; j <= 200; j++) {
                    edp.editSelectSpecificOldPayeePersonFromDropDown('person ' + j + ', TAT payee');
                    edp.editSelectRandomValueForOldPayeeCompanyNameCode();
                    for (var i = 3 * j; i >= 3 * j - 2; i--) {
                        var k = 1;
                        edp.editAssociateSpecificScopeNumberIToOldPayee(i);
                        edp.editFillIntoPayeeLegalRightInputFieldScopeNumberI(k);
                        edp.editFillIntoPayeeDistributionInputFieldScopeNumberI(k);
                        k = k + 1;
                    }
                    edp.editSaveOldPayeeForm();
                }
                edp.editSavePayeePage();

            } else {

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

                for (var j = 2; j <= 200; j++) {
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
        }
    },
    {
        name: 'Add RTP sets',
        tags: ['ladRtp', 'ladExistingDeal'],
        steps: function () {
            var countPtc = 0,
                d = steps.deal,
                edr = steps.editDealRtp;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTermsDealTabDetails();
            d.goToRightsTermPeriodsTermsTabDetails();

            for (var acq = 0; acq <= 200; acq++) {
                countPtc = 0;
                edr.editClickOnAddAnotherAcquisitionPeriodLink();
                edr.selectScopeNumberIFromInput(0, 0, 'acq');

                for (var ret = 0; ret <= 1; ret++) {
                    edr.clickOnAddRetentionFromAcquisitionLink();
                    if (acq < 180) {
                        edr.selectScopeNumberIFromInput(0, ret, 'ret');
                        edr.selectScopeNumberIFromInput(1, ret, 'ret');
                    }
                    edr.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(ret + 1, 'Life of Copyright');
                    for (var ptc = 0; ptc <= 1; ptc++) {
                        edr.clickOnAddPostTermCollectionFromRetention(ret);
                        if (acq < 180) {
                            edr.selectScopeNumberIFromInput(0, countPtc, 'ptc');
                            edr.selectScopeNumberIFromInput(1, countPtc, 'ptc');
                        }
                        edr.editFillIntoDurationFieldPostTermCollectionFromRetention(ret, ptc);
                        countPtc++;
                    }
                }

                edr.editSaveAnotherAcquisitionForm();
            }
        }
    },
    {
        name: 'Add related deals',
        tags: ['ladRelatedDeals', 'ladExistingDeal'],
        steps: function () {
            var d = steps.deal,
                rd = steps.relatedDeal,
                edr = steps.editDealRtp;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToGeneralDealTabDetail();
            d.goToRelatedDealsGeneralTabDetails();

            ['a', 'c', 'd', 'g'].forEach(function (i) {
                rd.clickOnAddRelatedDealLink();
                _.times(20, function () {
                    rd.selectSpecificContractingPartyRelatedDeals(i);
                    rd.clickValueRelationshipDropDown();
                    rd.selectRandomValueRelationshipDropDown();
                });
                rd.clickOnSaveRelatedDeal();
            });

            ['p', 't'].forEach(function (i) {
                rd.clickOnAddRelatedDealLink();
                _.times(10, function () {
                    rd.selectSpecificContractingPartyRelatedDeals(i);
                    rd.clickValueRelationshipDropDown();
                    rd.selectRandomValueRelationshipDropDown();
                });
                rd.clickOnSaveRelatedDeal();
            });
        }
    },
    {
        name: 'Add creators to multiple scopes',
        tags: ['ladScopeCreatorsMultiple'],
        steps: function () {
            var d = steps.deal,
                edcp = steps.editDealContractPeriod,
                eds = steps.editDealScope;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            d.goToTermsDealTabDetails();

            _.times(3, function (i) {
                describe('Contract Period ' + (i + 1), function () {
                    edcp.editSelectContractPeriodNumberI(i);

                    _.times(250, function (j) {
                        describe('Scope ' + (j + 1), function () {
                            eds.selectScopeNumberI(j);

                            eds.editScopeArea();

                            data.creators.forEach(function (creator) {
                                eds.enterCreatorSearchTerms(creator);
                                eds.selectCreatorSearchResultByName(creator);
                            });

                            eds.editSaveScopeChanges();
                            eds.editConfirmModalDialogDirtyCheck();
                        });
                    });
                });
            });

            _.times(3, function (i) {
                describe('Contract Period ' + (i + 1), function () {
                    edcp.editSelectContractPeriodNumberI(i);

                    [0, 199, 249].forEach(function (j) {
                        describe('Scope ' + (j + 1), function () {
                            eds.selectScopeNumberI(j);

                            eds.validateCreatorsLabel(data.creators.join(', '));
                        });
                    });
                });
            });
        }
    }
];

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
        name: 'Add PSS, override publisher and share scope',
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

            cds.clickOnShareScope();
            cds.selectAllContractPeriodsShareScopeModalDialog();
            cds.clickOnTheDoneShareScopeModalDialog();
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
                rr.confirmChangingRateApplicationMethod();
            }
        }
    },
    {
        name: 'Add scope creators',
        tags: ['ladScopeCreators'],
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

            if(systemConfig.env.name === 'staging') {

                steps.deal.goToOldPayeesDealTabDetails();

                edp.editOldPayeeArea();
                edp.editSelectSpecificOldPayeePersonFromDropDown("person " + 1 + ", TAT payee");
                edp.editSelectRandomValueForOldPayeeCompanyNameCode();
                for (var i = 1; i <= 3; i++) {
                    edp.editAssociateSpecificScopeNumberIToOldPayee(i);
                    edp.editFillIntoPayeeLegalRightInputFieldScopeNumberI(i);
                    edp.editFillIntoPayeeDistributionInputFieldScopeNumberI(i);
                }
                edp.editSaveOldPayeeForm();

                for (var j = 2; j <= 200; j++) {
                    edp.editSelectSpecificOldPayeePersonFromDropDown("person " + j + ", TAT payee");
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
        tags: ['ladRtp'],
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
                    edr.selectScopeNumberIFromInput(0, ret, 'ret');
                    edr.selectScopeNumberIFromInput(1, ret, 'ret');
                    edr.editSelectSpecificDurationTypeRetentionFromAcquisitionNumberI(ret + 1, 'Life of Copyright');
                    for (var ptc = 0; ptc <= 1; ptc++) {
                        edr.clickOnAddPostTermCollectionFromRetention(ret);
                        edr.selectScopeNumberIFromInput(0, countPtc, 'ptc');
                        edr.selectScopeNumberIFromInput(1, countPtc, 'ptc');
                        edr.editFillIntoDurationFieldPostTermCollectionFromRetention(ret, ptc);
                        countPtc++;
                    }
                }

                edr.editSaveAnotherAcquisitionForm();
            }
        }
    },
    {
        name: "Add related deals",
        tags: ["ladRelatedDeals"],
        steps: function () {
            var d = steps.deal,
                rd = steps.relatedDeal,
                edr = steps.editDealRtp;

            if(systemConfig.dealId) {
                steps.searchSection.accessSavedDealByNumber(systemConfig.dealId);
            } else {
                d.openDealFromSlot('mainDeal');
            }

            steps.deal.goToGeneralDealTabDetail();
            steps.deal.goToRelatedDealsGeneralTabDetails();
            //rd.checkNoRelatedDealsDefined();

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

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

            d.itContinueToNextPage();
            d.saveDeal();
            d.waitForDealToBeSaved();
            d.printDealNumber();
            d.findId();
        }
    },
    {
        name: 'Add Assumptions and override publisher',
        tags: ['ladAddAssumptionsOverridePublisher'],
        steps: function () {
            var d = steps.deal,
                cds = steps.createDealScope,
                cdcp = steps.createDealContractPeriod,
                rr = steps.royaltyRates,
                eds = steps.editDealScope;

            d.openDealFromSlot('mainDeal');
            d.goToTermsDealTabDetails();

            //add Advance Assumptions to all CPs
            _.times(3, function (num) {
                cdcp.selectContractPeriodNumberI(num + 1);
                cdcp.itAddAdvanceAssumptions();
            });

            //add scope to the contract period 1
            cdcp.selectContractPeriodNumberI(1);
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

            eds.editSaveAllChanges();
            eds.editConfirmModalDialogDirtyCheck();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
    {
        name: 'Add Society Agreement',
        tags: ['ladAddSocietyAgreement'],
        steps: function () {
            var d = steps.deal,
                eds = steps.editDealScope;

            d.openDealFromSlot('mainDeal');
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
                        if (lprIndex > 1) {
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

            d.openDealFromSlot('mainDeal');
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
        name: 'Add Payees',
        tags: ['ladAddPayees'],
        steps: function () {
            var d = steps.deal,
                edp = steps.editDealPayee;

            d.openDealFromSlot('mainDeal');
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
            for (var j = 2; j <= 3; j++) {
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
];

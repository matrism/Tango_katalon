'use strict';

var data = requireFromEnvFolder('features/deals/data/lad.js'),
    data = data.lad;

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'dealLad', 'regression', 'lad'];

exports.feature = [
    {
        name: 'Create a basic deal for LAD',
        tags: ['basicDealLad'],
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
        name: 'LAD script',
        tags: ['addscope'],
        steps: function () {
            var d = steps.deal,
                cds = steps.createDealScope;

            var timeout = 100000;

            d.openDealFromSlot('mainDeal');
            d.goToTermsDealTabDetails();

            //add Advance Assumptions to all CPs
            _.times(3, function (num) {
                steps.createDealContractPeriod.selectContractPeriodNumberI(num + 1);
                steps.createDealContractPeriod.itAddAdvanceAssumptions();
            });

            //add scope to the contract period 1
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            cds.addSpecificScopeTypeAndTerritory('Administration', 'Worldwide');
            steps.createDealScope.clickOnAddPublisherShareSet({
                scrollIntoView: true,
            });
            steps.createDealScope.fillFirstPublisherNameFieldsBasedOnPublisherTypeEOrPA();
            steps.createDealScope.fillIntoFirstPublisherNameAMField('53026414');
            steps.createDealScope.selectSpecificPublisherNameDropDown();
            steps.createDealScope.fillIntoFirstPublisherNameAMCollectField();
            for (var i = 2; i <= 3; i++) {
                steps.createDealScope.clickAddChainLink();
                steps.createDealScope.fillPublisherNameFieldsBasedOnPublisherTypeEOrPAChainI(i);
                steps.createDealScope.fillIntoPublisherNameAMFieldChainI(i);
                steps.createDealScope.selectSpecificPublisherNameDropDownChainI(i);
                steps.createDealScope.fillIntoPublisherNameAMCollectFieldChainI(i);
            }

            //override publisher
            data.publisherOverride.forEach(function (po) {
                cds.itOverridePublisherShare(po + 'testpub1', po + 'testpub1', po);
            });
            cds.saveThePublisherShareSet();

            for (var i = 1; i <= 6; i++) {
                steps.royaltyRates.addNewRoyaltySet();
                if (i > 1) {
                    steps.royaltyRates.addEffectiveStartDate('2015-06-0' + i);
                }
                steps.royaltyRates.addIncomeProviderByPartialMatch('test');
                steps.royaltyRates.addRatePercentageToContractualField(10 * i);
                steps.royaltyRates.clickOnReceiptApplicationMethod();
                steps.royaltyRates.confirmChangingRateApplicationMethod();
                steps.base.scrollIntoView('Done rate set button', element(by.css('.rate-sets-top-toolbar>button')));
                steps.royaltyRates.saveRateSet();
            }

            cds.shareScopeToAllContractPeriods();

            steps.editDealScope.editSaveAllChanges();
            steps.editDealScope.editConfirmModalDialogDirtyCheck();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            //add society agreement number
            steps.editDealContractPeriod.editSelectContractPeriodNumberI(1);
            steps.editDealScope.selectScopeNumberI(1);

            for (var i = 1; i <= 3; i++) {
                steps.editDealScope.editClickOnAddNewSocietyAgreementNumberI(i);

                data.societyAgreement.rightPanel.forEach(function (rp, rpIndex) {
                    steps.editDealScope.editSocietyAgreementNumberRightPanelNumberI(rpIndex + 1, rp);
                });
                data.societyAgreement.leftPanel.forEach(function (lp, lpIndex) {
                    steps.editDealScope.editSocietyAgreementNumberCreatorLeftPanelNumberI(lpIndex + 1, lp);
                    data.societyAgreement.leftPanelRow.forEach(function (lpr, lprIndex) {
                        if (lprIndex > 1) {
                            steps.editDealScope.editClickOnAddCreatorSocietyAgreementNumberForm();
                        }
                        steps.editDealScope.editSocietyAgreementNumberCreatorNumberISocietyRowNumberJLeftPanelNumber(lpIndex + 1, lprIndex + 1, lpr);
                    });
                });

                steps.editDealScope.saveChangesSocietyAgreementNumberForm();
            }

            for (var i = 1; i <= 3; i++) {
                steps.editDealContractPeriod.editSelectContractPeriodNumberI(i);
                for (var j = 1; j <= 3; j++) {
                    var copies = (j == 3) ? 49 : 100;
                    steps.editDealScope.selectScopeNumberI(1);
                    steps.editDealScope.editClickOnTheCopyScopeOptionNumberI(1);
                    steps.editDealScope.editFillIntoTheNumberOfCopiesForScopeNumberISpecificValue(1, copies);
                    steps.editDealScope.clickOnCopyPublisherShareInCopyScopeModal();
                    steps.editDealScope.clickOnCopyRoyaltyRatesInCopyScopeModal();
                    steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberIWait(1, timeout);
                    //steps.editDealScope.editClickOnCopyScopeButtonNumberOfCopiesScopeNumberI(1);
                }
            }

            steps.deal.goToPayeesDealTabDetails();
            steps.editDealPayee.editClickOneByPayeeHeaderLink();

            steps.editDealPayee.editSelectSpecificNewPayeePersonFromDropDown('person ' + 1 + ', TAT payee');
            for (var i = 1; i <= 3; i++) {
                steps.editDealPayee.editAssociateSpecificScopeNumberIToNewPayee(i);
            }
            steps.editDealPayee.editAddPayoutToPayee();
            steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
            steps.editDealPayee.editFillIntoPayeeDistributionInputField();
            steps.editDealPayee.editSavePayeeToPayeeForm();

            for (var j = 2; j <= 200; j++) {
                steps.editDealPayee.editSelectSpecificNewPayeePersonFromDropDown('person ' + j + ', TAT payee');
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

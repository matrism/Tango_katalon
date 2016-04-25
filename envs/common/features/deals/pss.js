'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

exports.commonFeatureTags = [
    'deals',
    'pss',
    'regression',
    'pssRegression',
    'nonControlledCreatorShare'
];

exports.feature = [
    {
        name: 'Create a deal with publisher share set',
        tags: ['createPssRegression'],
        steps: function () {
            var nccs = steps.editDealScope.nonCtrlCreatorShare;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            for (var i = 2; i <= 3; i++) {
                steps.createDealScope.itAddPublisherShareWithMultipleThreeChains(i);
                steps.createDealScope.validateDeleteChainIIconPublisherShare(i);
            }
            steps.base.scrollIntoView("Delete chain icon publisher share set", element(By.css("#deal-publisher div.ng-scope:nth-child(1) div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")));
            steps.createDealScope.deleteChainIPublisherShare(1);
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            for (var i = 1; i <= 2; i++) {
                nccs.validateLabelViewMode(i, (i == 1));
            }
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            for (var i = 1; i <= 2; i++) {
                nccs.validateLabelViewMode(i, (i == 1));
                steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
            }
        }
    },
    {
        name: 'Create a deal with publisher share set having 100% percent',
        tags: ['createPssRegressionFullPercent'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            for (var i = 2; i <= 3; i++) {
                steps.createDealScope.itAddPublisherShareWithMultipleThreeChains(i);
                steps.createDealScope.validateDeleteChainIIconPublisherShare(i);
            }
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            for (var i = 1; i <= 2; i++) {
                steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
            }
        }
    },
    {
        name: 'Check the visual design for publisher shares',
        tags: ['viewPssRegression'],
        steps: function () {
            var i = 1;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itCheckVisualDesignPublisherShare();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            steps.editDealScope.nonCtrlCreatorShare.validateLabelViewMode(i, true);
            steps.editDealScope.nonCtrlCreatorShare.validateLabelPosition();
            steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
            steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
            steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);

        }
    },
    {
        name: 'Check the invalid cases for publisher shares',
        tags: ['checkInvalidPssRegression'],
        steps: function () {
            var i = 1;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itCheckInvalidCasesPublisherShare();
            steps.createDealScope.itCheckInvalid3DecimalCasesPublisherShare();
            steps.createDealScope.itCheckSubtotalValidationsCasesPublisherShare();
            steps.createDealScope.itCheckTotalsValidationsCasesPublisherShare();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
            steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
            steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
        }
    },
    {
        name: 'Dirty check publisher share set',
        tags: ['dirtyCheckPssRegression'],
        steps: function () {
            var i = 1;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
            steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
            steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.itEditPublisherShare();
            steps.editDealScope.editCancelThePublisherShareSet();
            steps.editDealScope.editCancelModalDialogDirtyCheck();
            steps.base.scrollIntoView("General header ", pages.deal.elems.generalHeader);
            steps.deal.goToGeneralDealTabDetail();
            steps.editDealScope.editCancelModalDialogDirtyCheck();
            steps.base.scrollIntoView("General header ", pages.deal.elems.generalHeader);
            steps.deal.goToGeneralDealTabDetail();
            steps.editDealScope.editConfirmModalDialogDirtyCheck();
        }
    },
    {
        name: 'Delete publisher share set from a deal',
        tags: ['deletePssRegression'],
        steps: function () {
            var i = 1;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
            steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
            steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
            steps.base.scrollIntoView("Edit publisher share set ", pages.editDealScope.elems.publisherSharesSetArea);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.editDeleteThePublisherShareSet();
        }
    },
    {
        name: 'Edit a deal with publisher share set',
        tags: ['editPssRegression'],
        steps: function () {
            var i = 1,
                nccs = steps.editDealScope.nonCtrlCreatorShare;
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.editDealScope.selectScope1();
            steps.editDealScope.validatePublisherSharesTitle();
            nccs.validateLabelViewMode(i, true);
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
            steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
            steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
            steps.base.scrollIntoView("Edit publisher share set ", pages.editDealScope.elems.publisherSharesSetArea);
            steps.editDealScope.editPublisherSharesSet();
            steps.editDealScope.itEditPublisherShare();
            steps.editDealScope.editSaveThePublisherShareSet();
            nccs.validateLabelViewMode(i, false);
            steps.editDealScope.validatePublisherSharesTitle();
            steps.editDealScope.validatePublisherSharesHeaderTableTitle();
            steps.editDealScope.editPublisherSharesSet();
            for (i = 2; i <= 3; i++) {
                steps.editDealScope.itEditPublisherShareWithMultipleThreeChains(i);
            }
            steps.editDealScope.editSaveThePublisherShareSet();
            for (var i = 1; i <= 2; i++) {
                nccs.validateLabelViewMode(i, (i == 2));
                steps.editDealScope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.editDealScope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.editDealScope.validatePublisherSharesSetSubtotalChainI(i);
            }
        }
    },
    {
        name: 'Create a deal with share PSS',
        tags: ['nonControlledCreatorShareWithSharePSS'],
        steps: function () {
            var nccs = steps.editDealScope.nonCtrlCreatorShare,
                cds = steps.createDealScope,
                cdg = steps.createDealGeneral,
                d = steps.deal,
                eds = steps.editDealScope;

            cdg.itFillDealMandatoryFieldsGeneralTab();
            d.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            cds.itAddSimpleScope();
            cds.itAddPublisherShare();
            cds.saveThePublisherShareSet();
            cds.itAddSimpleScope();
            cds.sharePublisherShareSet();
            cds.saveThePublisherShareSet();
            d.itContinueToNextPage();
            d.saveDeal();
            d.waitForDealToBeSaved();
            d.returnDealNumber();
            eds.selectScope1();
            nccs.validateLabelViewMode(1, true);
            eds.selectScopeNumberI(2);
            nccs.validateLabelViewMode(1, true);
            eds.editPublisherSharesSet();
            nccs.validateLabel(0);
            nccs.expectCheckboxChecked(0);
            nccs.click(0);
            nccs.validateHelpMessage(0);
            eds.editSaveThePublisherShareSetWithModal();
            nccs.validateLabelViewMode(1, false);
            eds.selectScopeNumberI(1);
            nccs.validateLabelViewMode(1, false);
        }
    }
];

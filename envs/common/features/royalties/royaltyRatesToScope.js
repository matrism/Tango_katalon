'use strict';

exports.id = 'd74ff119-7f9f-4cff-ab99-c8a793b12f72';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = [
    'royaltyRatesToScopeRegression',
    'royaltyRates',
    'regression'
];

exports.feature = [
    {
        name: "Assign single rate to Scope on creation",

        tags: [],

        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.storeRRData();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Edit single rate from Scope ",

        tags: [],

        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.royaltyRates.saveRRData();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.refreshPage();

            steps.royaltyRates.openSavedScope();

            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Edit multiple  rate from Scope ",
        tags: ['edit'],
        steps: function () {

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.royaltyRates.saveRRData();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-02");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.refreshPage();

            steps.royaltyRates.openSavedScope();

            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Dirty check  single rate edit from Scope ",
        tags: ['validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.waitForPanel();
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.royaltyRates.cancelRateSet();
            steps.royaltyRates.refreshPage();
            steps.royaltyRates.openSavedScope();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Dirty check  multiple  rate edit from Scope ",
        tags: ['validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-02");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.waitForPanel();
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.royaltyRates.cancelRateSet();

            steps.royaltyRates.refreshPage();

            steps.royaltyRates.openSavedScope();

            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Dirty check  single rate edit from Scope by navigating away",
        tags: ['edit', 'validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.waitForPanel();
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.deal.goToIncomeRatesPage();

            steps.modal.clickYesOnPopupModal();

            steps.royaltyRates.refreshPage();

            steps.deal.goToTermsDealTabDetails();

            steps.royaltyRates.openSavedScope();

            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Dirty check multiple rate edit from Scope by navigating away",
        tags: ['edit', 'validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-02");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.storeAllRRData();

            steps.royaltyRates.editSingleRoyaltySet();

            steps.royaltyRates.openAllRRFields();

            steps.royaltyRates.waitForPanel();
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.deal.goToIncomeRatesPage();

            steps.modal.clickYesOnPopupModal();

            steps.royaltyRates.refreshPage();

            steps.deal.goToTermsDealTabDetails();

            steps.royaltyRates.openSavedScope();

            //steps.royaltyRates.test();
            steps.royaltyRates.verifyAllRateSetSavedData();
        }
    },
    {
        name: "Assign multiple rates to Scope on creation",
        tags: ['create'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-01");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-02");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-03");

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.saveRateSet();

            steps.royaltyRates.storeAllRRData();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.validateRateSetNames([
                'Rate Set 1', 'Rate Set 2', 'Rate Set 3'
            ]);
        }
    },
    {
        name: "Validate decimal places on create",
        tags: ['create', 'validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-01");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.setAllFieldValue("1.2345");
            steps.royaltyRates.saveRateSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.editSingleRoyaltySet();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.checkThatInputHasCorrectDecimalNumber();
        }
    },
    {
        name: "Validate decimal places on create",
        tags: ['validation', 'edit'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');
            steps.royaltyRates.setEffectiveStartDate("2017-01-01");
            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.setAllFieldValue("1.2345");
            steps.royaltyRates.saveRateSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();
            steps.royaltyRates.editSingleRoyaltySet();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.setFieldsValue("5.5555");
            steps.royaltyRates.checkThatInputHasCorrectNumber("5.55512");
        }
    },
    {
        //DIRTY CHECK FEATURES
        name: "Perform Dirty Check on RR Edit Pages",
        tags: ['edit', 'validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.waitForPanel();
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.deal.goToIncomeRatesPage();

            steps.modal.clickYesOnPopupModal();

            steps.royaltyRates.refreshPage();

            steps.deal.goToTermsDealTabDetails();
            // steps.royaltyRates.cancelErrorModal();

            steps.royaltyRates.refreshPage();
            steps.royaltyRates.openSavedScope();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Dirty Check (by navigating) on RR Edit Pages",
        tags: ['edit', 'validation'],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.addRatePercentageToContractualField("10");
            steps.royaltyRates.addIncomeProviderByPartialMatch('FINLAND SYNCH INCOME');

            steps.royaltyRates.clickOnReceiptApplicationMethod();
            steps.royaltyRates.confirmChangingRateApplicationMethod();

            steps.royaltyRates.saveRateSet();

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.base.waitForAjax();
            steps.deal.clickFirstScopeHeader();

            steps.royaltyRates.editSingleRoyaltySet();
            steps.editRoyaltyRates.openRateSetPanel();

            steps.royaltyRates.waitForPanel();
            steps.royaltyRates.saveRRData();
            steps.royaltyRates.clearRoyaltyRateInput();
            steps.royaltyRates.typeIntoRRInput("Edited RR Set");
            steps.royaltyRates.editIncomeProviderByPartialMatch("ASCAP");
            steps.royaltyRates.addEffectiveStartDate("2019-05-26");

            steps.deal.goToIncomeRatesPage();

            steps.modal.clickYesOnPopupModal();

            steps.royaltyRates.refreshPage();

            steps.deal.goToTermsDealTabDetails();

            steps.royaltyRates.refreshPage();
            steps.royaltyRates.openSavedScope();
            steps.royaltyRates.verifyRateSetSavedData();
        }
    },
    {
        name: "Test royalty input fields",

        tags: [],

        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.royaltyRates.addNewRoyaltySet();
            steps.royaltyRates.openAllRRFields();
            steps.royaltyRates.setFieldsValueTest("5.5555");
        }
    }
];
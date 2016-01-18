'use strict';

var using = fnutils.using;

exports.commonFeatureTags = [
    'viewUpdatedRoyaltyRatesSummaryRegression',
    'royaltyRatesSummary',
    'royaltyRates',
    'regression'
];

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.feature = [
    {
        name: 'View updated royalty rates summary (regression test)',

        tags: [],

        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();

            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();

            using(steps.royaltyRates, function (rr) {
                rr.addNewRoyaltySet();
                rr.addRatePercentageToContractualField('10');
                rr.addAdminFeeToContractualField('12');
                rr.addNPSToContractualField('2');

                rr.addIncomeProviderByPartialMatch('HFA');
                rr.clickAtSourceApplicationMethod();
                rr.confirmChangingRateApplicationMethod();

                rr.addRatePercentageToContractualField('15');
                rr.openAllRRFields();

                rr.changeCoverMechanicalLastRateApplicationMethodToOnReceipt();
                rr.checkPrevailingPopupIsPresent();
                rr.selectOnReceiptMethodInPrevailingPopup();
            });

            steps.royaltyRates.saveRateSet();

            using(steps.deal, function (d) {
                d.itContinueToNextPage();

                d.saveDeal();
                d.waitForDealToBeSaved();

                d.goToTermsDealTabDetails();
                d.clickFirstScopeHeader();
            });

            steps.royaltyRates.editSingleRoyaltySet();

            steps.editRoyaltyRates.openRateSetPanel();

            using(steps.royaltyRates, function (rr) {
                rr.clearRoyaltyRateInput();
                rr.typeIntoRRInput('Edited RR Set');

                rr.editIncomeProviderByPartialMatch('ASCAP');

                rr.addEffectiveStartDate('2019-05-26');

                rr.saveRateSet();
            });

            steps.deal.goToIncomeRatesPage();
            steps.dealIncomeRates.goToRatesSummary();

            using(steps.royaltyRatesSummaryTable, function (rrst) {
                rrst.validateCount(1);

                rrst.find(0);

                using(rrst.rateSet, function (rs) {
                    rs.validateCount(1);

                    rs.find(0);

                    rs.validateDescription('Edited RR Set');

                    rs.validateIncomeProvider('ASCAP');

                    rs.validateEffectiveDate('2019-05-26');
                });
            });
        }
    }
];

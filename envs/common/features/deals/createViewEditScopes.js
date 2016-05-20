'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'scopes', 'regression'];

exports.feature = [
    {
        name: "Create and view deal scopes",
        tags: ["scop"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateField();
            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillEndTargetMonths();
            for (var i = 3; i <= 3; i++) {
                steps.createDealContractPeriod.addNewContractPeriod();
                steps.createDealContractPeriod.fillEndTargetMonths();
            }

            //add scope to contract period 1
            steps.createDealContractPeriod.selectContractPeriodNumberI(1);
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");

            //add multiple scopes to contract period 2
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "asia");
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "europe");
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "germany");

            //add scopes with publisher shares set to contract period 3
            steps.createDealContractPeriod.selectContractPeriodNumberI(2);
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.createDealScope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();

            //add scopes with pss with multiple chains
            steps.createDealScope.addScopeTypeAndTerritory("Administration", "worldwide");
            steps.createDealScope.clickOnAddPublisherShareSet({scrollIntoView: true});
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



            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }
];

'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
},

    exports.commonFeatureTags = ['deals', 'dealLad', 'ladAdvances'];

exports.feature = [
    {
        name: 'Create a basic deal for LAD and add Advances',
        tags: ['ladAdvances'],
        steps: function () {

            //steps.searchSection.accessSavedDealByNumber(246393);

            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            //add 3 contract periods
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 1");
            steps.createDealContractPeriod.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2015-04-04");
            steps.createDealContractPeriod.addNewContractPeriodDialog();

            steps.createDealContractPeriod.fillContractPeriodDescription("Description 2");
            steps.createDealContractPeriod.fillEndTargetMonths();
            steps.base.scrollIntoView("Add actual end date", pages.createDealContractPeriod.elems.actualEndDate);
            steps.createDealContractPeriod.fillActualEndDateFieldSpecificValue("2016-02-04");

            steps.createDealContractPeriod.addNewContractPeriodDialog();
            steps.createDealContractPeriod.fillContractPeriodDescription("Description 3");
            steps.createDealContractPeriod.fillEndTargetMonths();

            //add Advance Assumptions to all CPs
            _.times(3, function(num){
                steps.createDealContractPeriod.selectContractPeriodNumberI(num+1);
                steps.createDealContractPeriod.itAddAdvanceAssumptions();
            });


            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();

            steps.deal.goToTab('Advances');
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
    }
];

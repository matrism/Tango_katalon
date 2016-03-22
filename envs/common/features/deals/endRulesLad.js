'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'regression'];

exports.feature = [
    {
        name: 'Create a basic deal for LAD',
        tags: ['endRulesLad'],
        steps: function () {

            var timeout = 100000;
            //steps.searchSection.accessSavedDealByNumber("248580");

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

            describe('Add End Rules to all CPs', function () {
                _.times(3, function (num) {
                    var endRules = [
                        {
                            endRule: 'Repayment Date',
                            ruleParams: ['Balance Repaid', 10, false, '=', 'MDRC Complete']
                        },
                        {
                            endRule: 'MDRC Complete Date', 
                            ruleParams: ['MDRC Complete', 20, undefined, '<', 'Pre-Defined Date', '2016-03-03'],
                        },
                        {
                            endRule: 'Pre-Defined Date', 
                            endRuleParam: '2016-03-03',
                            ruleParams: ['Current date', undefined, undefined, '=', 'Pre-Defined Date', '2016-03-03'],
                        },
                        {
                            endRule: 'Recouped Date', 
                            ruleParams: ['Final Contract Period', undefined, undefined, '=', 'TRUE'],
                        },
                        {
                            endRule: 'Target End Date',
                            ruleParams: ['Recouped', 50, true, '< or =', 'MDRC Complete'],
                        }

                    ];

                    steps.createDealContractPeriod.selectContractPeriodNumberI(num + 1);
                    steps.endRules.clickAddEndRulesLink();
                    steps.endRules.setRule(endRules[0]);

                    _.times(4, function (ruleNum){
                        var i = ruleNum+1;

                        steps.endRules.clickAddRuleLink();
                        steps.endRules.setRule(endRules[i]);
                    });
                    steps.endRules.saveRules();
                });
            });

            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetail();

        }
    }
];

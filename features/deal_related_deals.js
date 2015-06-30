var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_scope");
require(steps_path + "create_deal_scope");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(pages_path + "edit_deal_scope");
require(steps_path + "edit_deal_scope");
require(pages_path + "finder_deal");
require(steps_path + "finder_deal");
require(steps_path + "login");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create related deals",
        tags: ["create_related_deal"],
        steps: function () {
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1");
            steps.create_deal_contract_period.fillMandatoryFieldsContractPeriodSpecificValue("2015-01-02");
            steps.create_deal_contract_period.fillActualEndDateField();
            steps.create_deal_contract_period.addNewContractPeriodDialog();
            steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
            steps.create_deal_contract_period.fillEndTargetMonths();
            for(var i=3; i<=6; i++) {
                steps.create_deal_contract_period.addNewContractPeriod();
                steps.create_deal_contract_period.fillContractPeriodDescription("Description long name added now in this field for multiple long long name name name name 1 " + i);
                steps.create_deal_contract_period.fillEndTargetMonths();
            }
            steps.create_deal_scope.addSpecificScope("Finder");
            steps.create_deal_scope.selectCountry();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToFinderDealTermsTabDetails();
            steps.finder_deal.clickOnGeneralTermsFinderDeal();
            steps.finder_deal.editGeneralTermsFinderDeal();
            steps.finder_deal.validatePriorAwarenessNotificationTooltip();
            //steps.finder_deal.clickOnTermsByContractPeriodFinderDeal();
            //steps.finder_deal.editTermsByContractPeriodFinderDeal();
            //steps.finder_deal.clickContractPeriodNumberIDetailsTermsByContractPeriod(2);
            //steps.finder_deal.clickOnYesPriorAwarenessNotification();
            //steps.finder_deal.fillMaximumFoundAgreementsWithoutPreApprovalContractPeriodI();

        }
    }];


module.exports = {
    commonFeatureTags: ["related_deals"],
    feature: feature,
    beforeFeature: beforeFeature
};


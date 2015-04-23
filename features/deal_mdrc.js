var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(pages_path + "edit_deal_general");
require(steps_path + "edit_deal_general");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create a deal with MDRC",
        tags: ["create_deal_mdrc"],
        steps: function () {

            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            //steps.deal.itContinueToNextPage();
            //steps.deal.saveDeal();
            //steps.deal.waitForDealToBeSaved();
            //steps.deal.returnDealNumber();
        }
    }];


module.exports = {
    commonFeatureTags: ["deal_mdrc"],
    feature: feature,
    beforeFeature: beforeFeature
};

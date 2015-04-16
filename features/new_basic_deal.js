var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "deal_general");
require(steps_path + "deal_general");
require(pages_path + "deal_contract_period");
require(steps_path + "deal_contract_period");
require(pages_path + "deal_scope");
require(steps_path + "deal_scope");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create basic deal",
        tags: [],
        steps: function () {
            steps.deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.deal_scope.itAddSimpleScope();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }];

module.exports = {
    commonFeatureTags: ["deal"],
    feature: feature,
    beforeFeature: beforeFeature
};
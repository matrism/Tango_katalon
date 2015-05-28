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
require(steps_path + "login");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create a deal with publisher share set",
        tags: ["create_deal_pss"],
        steps: function () {
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.create_deal_scope.itAddSimpleScope();
            steps.create_deal_scope.itAddPublisherShare();
            for(var i=2; i<=3; i++){
                steps.create_deal_scope.itAddPublisherShareWithMultipleThreeChains(i);
                steps.create_deal_scope.validateDeleteChainIIconPublisherShare(i);
            }
            steps.base.scrollIntoView("Delete chain icon publisher share set", element(By.css("#deal-publisher div.ng-scope:nth-child(1) div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")));
            steps.create_deal_scope.deleteChainIPublisherShare(1);
            steps.create_deal_scope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    },
        {
            name: "Check the visual design for publisher shares",
            tags: ["check_design_deal_pss"],
            steps: function () {
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.create_deal_scope.itCheckVisualDesignPublisherShare();
                steps.create_deal_scope.saveThePublisherShareSet();

            }
        }];


module.exports = {
    commonFeatureTags: ["deal_publisher_share_set"],
    feature: feature,
    beforeFeature: beforeFeature
};
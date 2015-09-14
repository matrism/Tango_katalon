var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deals/deal");
require(steps_path + "deals/deal");
require(pages_path + "deals/createGeneral");
require(steps_path + "deals/createGeneral");
require(pages_path + "deals/createScope");
require(steps_path + "deals/createScope");
require(pages_path + "deals/createContractPeriod");
require(steps_path + "deals/createContractPeriod");
require(pages_path + "deals/editGeneral");
require(steps_path + "deals/editGeneral");
require(pages_path + "deals/editScope");
require(steps_path + "deals/editScope");
require(steps_path + "login");
require(steps_path + "base");

var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [
        {
            name: "Create a deal with publisher share set",
            tags: ["create_deal_pss"],
            steps: function () {
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.create_deal_scope.itAddPublisherShare();
                steps.base.scrollIntoView("Save publisher share set ", pages.create_deal_scope.elems.savePublisherShareSet);
                steps.create_deal_scope.saveThePublisherShareSet();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
            }
        }
    ];

module.exports = {
    commonFeatureTags: ['deals', 'dealPss'],
    feature: feature,
    beforeFeature: beforeFeature
};
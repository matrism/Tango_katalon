var pages_path = _tf_config._system_.path_to_pages,
    steps_path = _tf_config._system_.path_to_steps;

require(pages_path + "deal");
require(steps_path + "deal");
require(pages_path + "create_deal_general");
require(steps_path + "create_deal_general");
require(pages_path + "create_deal_contract_period");
require(steps_path + "create_deal_contract_period");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Create basic deal",
        tags: [],
        steps: function () {
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.create_deal_general.internalContactsInputField());
            steps.create_deal_general.itAddInternalContactsToDealGeneralTab("test");
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetails();
        }
    }];

module.exports = {
    commonFeatureTags: ["deal_internal_contacts"],
    feature: feature,
    beforeFeature: beforeFeature
};
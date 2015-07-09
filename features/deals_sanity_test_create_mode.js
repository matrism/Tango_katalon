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
require(steps_path + "login");
require(steps_path + "base");


var beforeFeature = function () {
        steps.login.itLogin();
    },

    feature = [{
        name: "Deals sanity test flow create mode",
        tags: ["create_deal_sanity"],
        steps: function () {
            steps.create_deal_general.goToNewDealPage();
            steps.create_deal_general.clickOnDraftContractStatus();
            steps.create_deal_general.clickOnExecutedContractStatus();
            steps.create_deal_general.fillIntoExecutionDateField();
            steps.create_deal_general.selectDealSigningTerritory();
            steps.create_deal_general.fillContractingPartyField();
            steps.create_deal_general.waitForContractingPartyDropDown();
            steps.create_deal_general.selectRandomContractingParty();
            steps.create_deal_general.selectRandomArtistValue();
            steps.create_deal_general.selectRandomValueRepresentMultipleDeals();
            steps.create_deal_general.clickOnNonExclusiveDealRights();
            steps.create_deal_general.clickOnExclusiveDealRights();
            steps.create_deal_general.selectRandomDealKeywords()
        }
    }];


module.exports = {
    commonFeatureTags: ["deal_sanity_create"],
    feature: feature,
    beforeFeature: beforeFeature
};

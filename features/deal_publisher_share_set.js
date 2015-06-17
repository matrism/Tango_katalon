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
        name: "Create a deal with publisher share set",
        tags: ["create_deal_pss_multiple_chains_delete_chain"],
        steps: function () {
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.create_deal_scope.itAddSimpleScope();
            steps.create_deal_scope.itAddPublisherShare();
            for (var i = 2; i <= 3; i++) {
                steps.create_deal_scope.itAddPublisherShareWithMultipleThreeChains(i);
                steps.create_deal_scope.validateDeleteChainIIconPublisherShare(i);
            }
            steps.base.scrollIntoView("Delete chain icon publisher share set", element(By.css("#deal-publisher div.ng-scope:nth-child(1) div[data-name='chainForm'] div.publisher-row.clearfix a.btn-remove-chain  i.fa.fa-times.ng-scope")));
            steps.create_deal_scope.deleteChainIPublisherShare(1);
            steps.base.scrollIntoView("Save publisher share set ", pages.create_deal_scope.elems.savePublisherShareSet);
            steps.create_deal_scope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.edit_deal_scope.selectScope1();
            steps.edit_deal_scope.validatePublisherSharesTitle();
            steps.edit_deal_scope.validatePublisherSharesHeaderTableTitle();
            for (var i = 1; i <= 2; i++) {
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetSubtotalChainI(i);
            }
        }
    },
        {
            name: "Check the visual design for publisher shares",
            tags: ["check_design_deal_pss"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.create_deal_scope.itCheckVisualDesignPublisherShare();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_scope.selectScope1();
                steps.edit_deal_scope.validatePublisherSharesTitle();
                steps.edit_deal_scope.validatePublisherSharesHeaderTableTitle();
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetSubtotalChainI(i);

            }
        },
        {
            name: "Check the invalid cases for publisher shares",
            tags: ["check_invalid_deal_pss"],
            steps: function () {
                var i = 1;
                steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
                steps.deal.itContinueToNextPage();
                steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
                steps.create_deal_scope.itAddSimpleScope();
                steps.create_deal_scope.itCheckInvalidCasesPublisherShare();
                steps.create_deal_scope.itCheckInvalid3DecimalCasesPublisherShare();
                steps.create_deal_scope.itCheckSubtotalValidationsCasesPublisherShare();
                steps.create_deal_scope.itCheckTotalsValidationsCasesPublisherShare();
                steps.deal.itContinueToNextPage();
                steps.deal.saveDeal();
                steps.deal.waitForDealToBeSaved();
                steps.deal.returnDealNumber();
                steps.edit_deal_scope.selectScope1();
                steps.edit_deal_scope.validatePublisherSharesTitle();
                steps.edit_deal_scope.validatePublisherSharesHeaderTableTitle();
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetSubtotalChainI(i);
            }
        },
        {
            name: "Edit a deal with publisher share set",
            tags: ["edit_deal_publisher_share_set"],
            steps: function () {
                var i = 1;
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
                steps.edit_deal_scope.selectScope1();
                steps.edit_deal_scope.validatePublisherSharesTitle();
                steps.edit_deal_scope.validatePublisherSharesHeaderTableTitle();
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameEOrPAChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetPublisherNameAMChainI(i);
                steps.edit_deal_scope.validatePublisherSharesSetSubtotalChainI(i);
                steps.edit_deal_scope.editPublisherSharesSet();

            }
        }];


module.exports = {
    commonFeatureTags: ["deal_publisher_share_set"],
    feature: feature,
    beforeFeature: beforeFeature
};
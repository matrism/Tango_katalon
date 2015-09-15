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

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'pss', 'regression'];

exports.feature = [
    {
        name: "Create a deal with publisher share set",
        tags: ["create"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.createDealScope.itAddSimpleScope();
            steps.createDealScope.itAddPublisherShare();
            steps.base.scrollIntoView("Save publisher share set ", pages.create_deal_scope.elems.savePublisherShareSet);
            steps.createDealScope.saveThePublisherShareSet();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
        }
    }
];
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
        name: "Create view and edit internal contact deal",
        tags: ["internal_contacts"],
        steps: function () {

            //var i=2;
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.create_deal_general.internalContactsInputField());
            steps.create_deal_general.itAddInternalContactsToDealGeneralTab("test");
            for (var i = 2; i <= 4; i++) {
                steps.create_deal_general.itAddInternalContactsRowIToDealGeneralTab(i);
            }
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetails();
            steps.base.scrollIntoView("Edit Internal contacts area", pages.edit_deal_general.internalContactsArea());
            steps.edit_deal_general.returnAndCheckInternalContactsTitle();
            steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
            steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
            for (var i = 2; i <= 4; i++) {
                steps.edit_deal_general.returnAndCheckInternalContactsValues(i);
            }
            steps.edit_deal_general.printInternalContactList();
            steps.edit_deal_general.editInternalContactsArea();


            steps.edit_deal_general.itEditInternalContactsToDealGeneralTab("a");
            for (var i = 2; i <= 4; i++) {
                steps.edit_deal_general.itEditAndRemoveInternalContactsRowIToDealGeneralTab(i);
            }
            steps.edit_deal_general.itSaveInternalContactsChanges();

            steps.edit_deal_general.returnAndCheckInternalContactsTitle();
            steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
            steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
            steps.edit_deal_general.returnAndCheckFirstInternalContactsValues();
            for (var i = 2; i <= 4; i++) {
                steps.edit_deal_general.returnAndCheckInternalContactsValues(i);
            }
            steps.edit_deal_general.printInternalContactList();
        }
    }];


feature = [{
    name: "Create edit and view simple flow internal contact",
    tags: ["internal_simple"],
    steps: function () {
        var i = 2;
        //create a deal with 1 internal contact
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
        //edit internal contacts -- add 1 internal contact with 2 roles
        steps.base.scrollIntoView("Edit Internal contacts area", pages.edit_deal_general.internalContactsArea());
        steps.edit_deal_general.returnAndCheckInternalContactsTitle();
        steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
        steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
        steps.edit_deal_general.printInternalContactList();
        steps.edit_deal_general.editInternalContactsArea();
        steps.edit_deal_general.itEditWithoutRemoveInternalContactsRowIToDealGeneralTab(i);
        steps.edit_deal_general.itEditAddInternalContactsRoleRowIToDealGeneralTab(i);
        //save internal contacts and check on view mode
        steps.edit_deal_general.itSaveInternalContactsChanges();
        steps.edit_deal_general.returnAndCheckInternalContactsTitle();
        steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
        steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
        steps.edit_deal_general.returnAndCheckFirstInternalContactsValues();
        steps.edit_deal_general.returnAndCheckInternalContactsValues(i);
        steps.edit_deal_general.printInternalContactList();
        //delete both internal contacts
        steps.edit_deal_general.editInternalContactsArea();
        steps.edit_deal_general.itRemoveInternalContactsRowIToDealGeneralTab(i);
        steps.edit_deal_general.itSaveInternalContactsChanges();
        //steps.edit_deal_general.returnAndCheckInternalContactsTitle();
        //steps.edit_deal_general.returnAndCheckFirstInternalContactsValues();
    }
}];

module.exports = {
    commonFeatureTags: ["deal_internal_contacts"],
    feature: feature,
    beforeFeature: beforeFeature
};
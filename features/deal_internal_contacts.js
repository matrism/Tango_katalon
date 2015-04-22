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
        tags: ["create_edit_internal_contacts"],
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
                steps.edit_deal_general.itEditAddInternalContactsRowIToDealGeneralTab(i);
                //steps.edit_deal_general.itEditAndRemoveInternalContactsRowIToDealGeneralTab(i);
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
    },
        //}];


//feature = [{
        {
            name: "Create edit and view simple flow internal contact",
            tags: ["create_edit_delete_internal_contacts"],
            steps: function () {
                var j = 2;
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
                steps.edit_deal_general.itEditAddInternalContactsRowIToDealGeneralTab(j);
                steps.edit_deal_general.itEditAddInternalContactsRoleRowIToDealGeneralTab(j);
                //save internal contacts and check on view mode
                steps.edit_deal_general.itSaveInternalContactsChanges();
                steps.edit_deal_general.returnAndCheckInternalContactsTitle();
                steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
                steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
                steps.edit_deal_general.returnAndCheckFirstInternalContactsValues();
                steps.edit_deal_general.returnAndCheckInternalContactsValues(j);
                steps.edit_deal_general.printInternalContactList();
                //delete both internal contacts
                steps.edit_deal_general.editInternalContactsArea();
                steps.edit_deal_general.itRemoveFirstInternalContactsRowToDealGeneralTab();
                steps.edit_deal_general.itRemoveFirstInternalContactsRowToDealGeneralTab();
                steps.edit_deal_general.itSaveInternalContactsChanges();
                steps.edit_deal_general.returnAndCheckInternalContactsTitle();
                //add 2 internal contacts
                steps.edit_deal_general.editInternalContactsArea();
                for (k = 1; k <= 2; k++) {
                    steps.edit_deal_general.itEditAddInternalContactsRowIToDealGeneralTab(k);
                }
                steps.edit_deal_general.itSaveInternalContactsChanges();
                steps.edit_deal_general.returnAndCheckInternalContactsTitle();
                steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
                steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
                steps.edit_deal_general.returnAndCheckInternalContactsValues(j);
                steps.edit_deal_general.printInternalContactList();
            }
        },

//feature = [{
        {
            name: "Dirty check flow internal contact",
            tags: ["dirty_check_internal_contacts"],
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
                steps.base.scrollIntoView("Edit Internal contacts area", pages.edit_deal_general.internalContactsArea());
                steps.edit_deal_general.returnAndCheckInternalContactsTitle();
                steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
                steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
                steps.edit_deal_general.printInternalContactList();
                steps.edit_deal_general.editInternalContactsArea();
                steps.edit_deal_general.itEditInternalContactsToDealGeneralTab("a");
                steps.edit_deal_general.itCancelInternalContactsChanges();
                steps.edit_deal_general.cancelModalDialog();
                steps.deal.goToTermsDealTabDetails();
                steps.edit_deal_general.cancelModalDialog();
                steps.edit_deal_general.itEditInternalContactsToDealGeneralTab("test");
                steps.base.scrollIntoView("Terms header", pages.deal.termsHeader());
                steps.deal.goToTermsDealTabDetails();
                steps.edit_deal_general.confirmModalDialog();
                steps.deal.expectTermsDetailsAreOk();
            }
        }];


module.exports = {
    commonFeatureTags: ["deal_internal_contacts"],
    feature: feature,
    beforeFeature: beforeFeature
};
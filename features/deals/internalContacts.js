'use strict';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'internalContacts', 'smoke'];

exports.feature = [
    {
        name: "Create view and edit internal contact deal",
        tags: ["create", "view", "edit"],
        steps: function () {

            //var i=2;
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.create_deal_general.elems.internalContactsInputField);
            steps.create_deal_general.itAddInternalContactsToDealGeneralTab("shilpa");
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
            steps.base.scrollIntoView("Edit Internal contacts area", pages.edit_deal_general.elems.internalContactsArea);
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
                //steps.edit_deal_general.itEditAddInternalContactsRowIToDealGeneralTab(i);
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
    },
    {
        name: "Create edit and view simple flow internal contact",
        tags: ["create", "edit", "view"],
        steps: function () {
            var j = 2;
            //create a deal with 1 internal contact
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.create_deal_general.elems.internalContactsInputField);
            steps.create_deal_general.itAddInternalContactsToDealGeneralTab("shilpa");
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetails();
            //edit internal contacts -- add 1 internal contact with 2 roles
            steps.base.scrollIntoView("Edit Internal contacts area", pages.edit_deal_general.elems.internalContactsArea);
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

    {
        name: "Dirty check flow internal contact",
        tags: ["edit"],
        steps: function () {
            steps.create_deal_general.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.create_deal_general.elems.internalContactsInputField);
            steps.create_deal_general.itAddInternalContactsToDealGeneralTab("shilpa");
            steps.deal.itContinueToNextPage();
            steps.create_deal_contract_period.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetails();
            steps.base.scrollIntoView("Edit Internal contacts area", pages.edit_deal_general.elems.internalContactsArea);
            steps.edit_deal_general.returnAndCheckInternalContactsTitle();
            steps.edit_deal_general.returnAndCheckInternalContactsHeaderTable();
            steps.edit_deal_general.returnAndCheckAddInternalContactsLinkPresent();
            steps.edit_deal_general.printInternalContactList();
            steps.edit_deal_general.editInternalContactsArea();
            steps.edit_deal_general.itEditInternalContactsToDealGeneralTab("a");
            steps.edit_deal_general.itCancelInternalContactsChanges();
            steps.edit_deal_general.cancelModalDialog();
            steps.base.scrollIntoView("Term header link", pages.deal.elems.termsHeader);
            steps.deal.goToTermsDealTabDetails();
            steps.edit_deal_general.cancelModalDialog();
            steps.edit_deal_general.itEditInternalContactsToDealGeneralTab("shilpa");
            steps.base.scrollIntoView("Top of page ", pages.deal.elems.generalHeader);
            steps.deal.goToTermsDealTabDetails();
            steps.edit_deal_general.confirmModalDialog();
            steps.deal.expectTermsDetailsAreOk();
        }
    }
];
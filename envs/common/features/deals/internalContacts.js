'use strict';

exports.id = 'bcc5a071-a2f8-4e63-adc6-6b9fa1218036';
exports.featureName = 'Deals Internal Contacts Smoke';

exports.beforeFeature = function () {
    steps.login.itLogin();
};

exports.commonFeatureTags = ['deals', 'internalContacts', 'smoke'];

exports.feature = [
     {
         name: "Create view and edit internal contact deal",
         tags: ["create", 'view', 'edit'],
         steps: function () {

             //var i=2;
             steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
             steps.base.scrollIntoView("Internal contacts", pages.createDealGeneral.elems.internalContactsInputField);
             steps.createDealGeneral.itAddInternalContactsToDealGeneralTab("shilpa");
             for (var i = 2; i <= 4; i++) {
                 steps.createDealGeneral.itAddInternalContactsRowIToDealGeneralTab(i);
             }
             steps.deal.itContinueToNextPage();
             steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
             steps.deal.itContinueToNextPage();
             steps.deal.saveDeal();
             steps.deal.waitForDealToBeSaved();
             steps.deal.returnDealNumber();
             steps.deal.goToGeneralDealTabDetails();
             steps.base.scrollIntoView("Edit Internal contacts area", pages.editDealGeneral.elems.internalContactsArea);
             steps.editDealGeneral.returnAndCheckInternalContactsTitle();
             steps.editDealGeneral.returnAndCheckInternalContactsHeaderTable();
             steps.editDealGeneral.returnAndCheckAddInternalContactsLinkPresent();
             for (var i = 2; i <= 4; i++) {
                 steps.editDealGeneral.returnAndCheckInternalContactsValues(i);
             }
             steps.editDealGeneral.printInternalContactList();
             steps.editDealGeneral.editInternalContactsArea();
             steps.editDealGeneral.itEditInternalContactsToDealGeneralTab("a");
             for (var i = 2; i <= 4; i++) {
                 //steps.editDealGeneral.itEditAddInternalContactsRowIToDealGeneralTab(i);
                 steps.editDealGeneral.itEditAndRemoveInternalContactsRowIToDealGeneralTab(i);
             }
             steps.editDealGeneral.itSaveInternalContactsChanges();

             steps.editDealGeneral.returnAndCheckInternalContactsTitle();
             steps.editDealGeneral.returnAndCheckInternalContactsHeaderTable();
             steps.editDealGeneral.returnAndCheckAddInternalContactsLinkPresent();
             steps.editDealGeneral.returnAndCheckFirstInternalContactsValues();
             //for (var i = 2; i <= 4; i++) {
             //    steps.editDealGeneral.returnAndCheckInternalContactsValues(i);
             //}
             steps.editDealGeneral.printInternalContactList();
         }
     },
    {
        name: "Create edit and view simple flow internal contact",
        tags: ["create", 'edit', 'view'],
        steps: function () {
            var j = 2;
            //create a deal with 1 internal contact
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.createDealGeneral.elems.internalContactsInputField);
            steps.createDealGeneral.itAddInternalContactsToDealGeneralTab("shilpa");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetails();
            //edit internal contacts -- add 1 internal contact with 2 roles
            steps.base.scrollIntoView("Edit Internal contacts area", pages.editDealGeneral.elems.internalContactsArea);
            steps.editDealGeneral.returnAndCheckInternalContactsTitle();
            steps.editDealGeneral.returnAndCheckInternalContactsHeaderTable();
            steps.editDealGeneral.returnAndCheckAddInternalContactsLinkPresent();
            steps.editDealGeneral.printInternalContactList();
            steps.editDealGeneral.editInternalContactsArea();
            steps.editDealGeneral.itEditAddInternalContactsRowIToDealGeneralTab(j);
            steps.editDealGeneral.itEditAddInternalContactsSpecificRoleRowIToDealGeneralTab(j, 'Attorney');
            steps.editDealGeneral.itEditAddInternalContactsSpecificRoleRowIToDealGeneralTab(j, 'Product Manager');
            //save internal contacts and check on view mode
            steps.editDealGeneral.itSaveInternalContactsChanges();
            steps.editDealGeneral.returnAndCheckInternalContactsTitle();
            steps.editDealGeneral.returnAndCheckInternalContactsHeaderTable();
            steps.editDealGeneral.returnAndCheckAddInternalContactsLinkPresent();
            steps.editDealGeneral.returnAndCheckFirstInternalContactsValues();
            steps.editDealGeneral.returnAndCheckInternalContactsValues(j);
            steps.editDealGeneral.printInternalContactList();
            //delete both internal contacts
            steps.editDealGeneral.editInternalContactsArea();
            steps.editDealGeneral.itRemoveFirstInternalContactsRowToDealGeneralTab();
            steps.editDealGeneral.itRemoveFirstInternalContactsRowToDealGeneralTab();
            steps.editDealGeneral.itSaveInternalContactsChanges();
            steps.editDealGeneral.returnAndCheckInternalContactsTitle();
            //add 2 internal contacts
            steps.editDealGeneral.editInternalContactsArea();
            for (var k = 1; k <= 2; k++) {
                steps.editDealGeneral.itEditAddInternalContactsRowIToDealGeneralTab(k);
            }
            steps.editDealGeneral.itSaveInternalContactsChanges();
            steps.editDealGeneral.returnAndCheckInternalContactsTitle();
            steps.editDealGeneral.returnAndCheckInternalContactsHeaderTable();
            steps.editDealGeneral.returnAndCheckAddInternalContactsLinkPresent();
            steps.editDealGeneral.returnAndCheckInternalContactsValues(j);
            steps.editDealGeneral.printInternalContactList();
        }
    },
    {
        name: "Dirty check flow internal contact",
        tags: ["edit"],
        steps: function () {
            steps.createDealGeneral.itFillDealMandatoryFieldsGeneralTab();
            steps.base.scrollIntoView("Internal contacts", pages.createDealGeneral.elems.internalContactsInputField);
            steps.createDealGeneral.itAddInternalContactsToDealGeneralTab("shilpa");
            steps.deal.itContinueToNextPage();
            steps.createDealContractPeriod.itFillDealMandatoryFieldsContractPeriod();
            steps.deal.itContinueToNextPage();
            steps.deal.saveDeal();
            steps.deal.waitForDealToBeSaved();
            steps.deal.returnDealNumber();
            steps.deal.goToGeneralDealTabDetails();
            steps.base.scrollIntoView("Edit Internal contacts area", pages.editDealGeneral.elems.internalContactsArea);
            steps.editDealGeneral.returnAndCheckInternalContactsTitle();
            steps.editDealGeneral.returnAndCheckInternalContactsHeaderTable();
            steps.editDealGeneral.returnAndCheckAddInternalContactsLinkPresent();
            steps.editDealGeneral.printInternalContactList();
            steps.editDealGeneral.editInternalContactsArea();
            steps.editDealGeneral.itEditInternalContactsToDealGeneralTab("a");
            steps.editDealGeneral.itCancelInternalContactsChanges();
            steps.editDealGeneral.cancelTheModalDialog();
            steps.base.scrollIntoView("Term header link", pages.deal.elems.termsHeader);
            steps.deal.goToTermsDealTabDetailsDirtyCheck();
            steps.editDealGeneral.cancelTheModalDialog();
            steps.editDealGeneral.itEditInternalContactsToDealGeneralTab("shilpa");
            steps.base.scrollIntoView("Top of page ", pages.deal.elems.generalHeader);
            steps.deal.goToTermsDealTabDetailsDirtyCheck();
            steps.editDealGeneral.confirmTheCancelModalDialog();
            steps.deal.expectTermsDetailsAreOk();
        }
    }
];
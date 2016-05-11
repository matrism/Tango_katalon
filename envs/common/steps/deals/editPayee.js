"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.editDealPayee = exports;

exports.clickOnPayeesHeader = function () {
    it("Click on payees header", function () {
        pages.editDealPayee.clickOnThePayeeHeaderLink();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editPayeeArea = function () {
    it("Edit the payee area ", function () {
        pages.editDealPayee.editThePayeeArea();
    });
};

exports.editDeleteFirstScopeFromPayee = function () {
    it("Edit delete first scope from payee with payee", function () {
        pages.editDealPayee.editDeleteFirstScopeFromThePayee();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editDeletePayeeFromDealByPayeeScreen = function () {
    it("Edit delete payee from deal from by payee screen", function () {
        pages.editDealPayee.editDeletePayeeFromDealByThePayeeScreen();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editOldPayeeArea = function () {
    it("Edit the old payee area ", function () {
        pages.editDealPayee.editTheOldPayeeArea();
    });
};

exports.editClickOneByPayeeHeaderLink = function () {
    it("Edit click on the by payee header link ", function () {
        pages.editDealPayee.editClickOnTheByPayeeHeaderLink();
    });
};

exports.editClickOnAddPrimaryLinkForScopeNumberI = function (i) {
    it("Edit click on the add primary link for scope number " + i, function () {
        pages.editDealPayee.editClickOnTheAddPrimaryLinkForScopeNumberI(i);
    });
};

exports.editSelectRandomPayeeOrganisationFromDropDown = function (payee_name) {
    it("Edit select the random payee organisation from drop down ", function () {
        pages.editDealPayee.editFillIntoAddNewPayeeFieldSpecificValue(payee_name);
        pages.editDealPayee.editSelectTheRandomPayeeOrganisationFromDropDown();
    });
};

exports.editSelectRandomPayeePersonFromDropDown = function (payee_name) {
    it("Edit select the random payee person from drop down ", function () {
        pages.editDealPayee.editFillIntoAddNewPayeeFieldSpecificValue(payee_name);
        pages.editDealPayee.editSelectTheRandomPayeePersonFromDropDown();
    });
};

exports.editSelectRandomOldPayeePersonFromDropDown = function (payee_name) {
    it("Edit select the random old payee person from drop down ", function () {
        pages.editDealPayee.editFillIntoOldPayeeFieldSpecificValue(payee_name);
        pages.editDealPayee.editSelectTheRandomPayeePersonFromDropDown();
    });
};

exports.editSelectSpecificOldPayeePersonFromDropDown = function (payee_name) {
    it("Edit select the specific old payee person from drop down ", function () {
        pages.editDealPayee.editFillIntoOldPayeeFieldSpecificValue(payee_name);
        pages.editDealPayee.editSelectTheSpecificPayeePersonFromDropDown(payee_name);
    });
};

exports.editSelectSpecificNewPayeePersonFromDropDown = function (payee_name) {
    it("Edit select the specific new payee person from drop down ", function () {
        pages.editDealPayee.editFillIntoAddNewPayeeFieldSpecificValue(payee_name);
        pages.editDealPayee.editSelectTheSpecificPayeePersonFromDropDown(payee_name);
    });
};


exports.editClickOnAddAllScopesToPayee = function () {
    it("Edit click on the add all scopes to payee check box ", function () {
        pages.editDealPayee.editClickOnTheAddAllScopesToPayee();
    });
};

exports.editClickOnNextPayeeScopePage = function () {
    it("Edit click on the next payee scope page", function () {
        pages.editDealPayee.editClickOnTheNextPayeeScopePage();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editSelectRandomValueForPayeeCompanyNameCode = function () {
    it("Edit select the random value for payee company name/code ", function () {
        pages.editDealPayee.editSelectTheRandomValueForPayeeCompanyNameCode();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editSelectRandomValueForOldPayeeCompanyNameCode = function () {
    it("Edit select the random value for old payee company name/code ", function () {
        pages.editDealPayee.editSelectTheRandomValueForOldPayeeCompanyNameCode();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editAssociateRandomScopeToPayee = function () {
    it("Edit associate random scope to payee ", function () {
        pages.editDealPayee.editAssociateTheRandomScopeToPayee();
    });
};

exports.editAssociateSpecificScopeNumberIToNewPayee = function (i) {
    it("Edit associate specific  scope to new payee number " + i, function () {
        pages.editDealPayee.editAssociateTheSpecificScopeNumberIToNewPayee(i);
    });
};

exports.editAddPayoutToPayee = function () {
    it("Edit add payout to payee", function () {
        pages.editDealPayee.editAddThePayoutToPayee();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editAddPayoutAccountToPayee = function (i) {
    it("Edit add payout account to payee", function () {
        pages.editDealPayee.editAddThePayoutAccountToPayee();
    });
};

exports.editAssociateSpecificScopeNumberIToPayee = function (i) {
    it("Edit associate specific  scope to payee number " + i, function () {
        pages.editDealPayee.editAssociateTheSpecificScopeNumberIToPayee(i);
    });
};

exports.editAssociateSpecificScopeNumberIToOldPayee = function (i) {
    it("Edit associate specific  scope to old payee number " + i, function () {
        pages.editDealPayee.editAssociateTheSpecificScopeNumberIToOldPayee(i);
    });
};

exports.editSavePayeeForm = function () {
    it("Edit save the payee form ", function () {
        pages.editDealPayee.editSaveThePayeeForm();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editSaveOldPayeeForm = function () {
    it("Edit save the old payee form ", function () {
        pages.editDealPayee.editSaveTheOldPayeeForm();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editSavePayeePage = function () {
    it("Edit save the payee page ", function () {
        pages.editDealPayee.editSaveThePayeePage();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editSavePayeeToPayeeForm = function () {
    it("Edit save the payee to payee form", function () {
        pages.editDealPayee.editAddPayeeToPayeeForm();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editCancelPayeeForm = function () {
    it("Edit cancel the payee form ", function () {
        pages.editDealPayee.editCancelThePayeeForm();
    });
};

exports.editFillIntoPayeeLegalRightInputField = function () {
    it("Edit fill into payee legal right input field", function () {
        pages.editDealPayee.editFillIntoThePayeeLegalRightInputField();
    });
};

exports.editFillIntoPayeeLegalRightInputFieldScopeNumberI = function (i) {
    it("Edit fill into payee legal right input field for scope number " + i, function () {
        pages.editDealPayee.editFillIntoThePayeeLegalRightInputFieldForScopeNumberI(i);
    });
};

exports.editFillIntoPayeeDistributionInputField = function () {
    it("Edit fill into payee distribution input field", function () {
        pages.editDealPayee.editFillIntoThePayeeDistributionInputField();
    });
};

exports.editFillIntoPayeeDistributionInputFieldScopeNumberI = function (i) {
    it("Edit fill into payee distribution input field for scope number " + i, function () {
        pages.editDealPayee.editFillIntoThePayeeDistributionInputFieldForScopeNumberI(i);
    });
};

exports.editCheckScopesAssociatedToPayee = function (i) {
    it("Check the scope number " + i + "  is associated to payee ", function () {
        pages.editDealPayee.editCheckScopeNumberIAssociatedToPayee(i);
    });
};

exports.editCheckNoScopesOnPayeeScreen = function () {
    it("Check there is no scope to  payee screen ", function () {
        pages.editDealPayee.editCheckNoScopeAssociatedToPayee();
    });
};

exports.itEditAddPayeeOrganisationAndAssociateScope = function (payee_name) {
    describe("Edit add payee as organisation and associate random scope ", function () {
        steps.editDealPayee.editSelectRandomPayeeOrganisationFromDropDown(payee_name);
        steps.base.scrollIntoView("Company", pages.editDealPayee.elems.editPayeeCompanyNameCodeInputField);
        steps.editDealPayee.editSelectRandomValueForPayeeCompanyNameCode();
        steps.base.scrollIntoView("Scope", pages.editDealPayee.elems.editScopePayeeInputField);
        steps.editDealPayee.editAssociateSpecificScopeNumberIToPayee(1);
        steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
        steps.editDealPayee.editFillIntoPayeeDistributionInputField();
        steps.editDealPayee.editSavePayeeForm();
    });
};

exports.itEditAddPayeePersonAndAssociateScope = function (payee_name, i) {
    describe("Edit add payee as person and associate random scope ", function () {
        steps.editDealPayee.editSelectRandomPayeePersonFromDropDown(payee_name);
        steps.base.scrollIntoView("Company", pages.editDealPayee.elems.editPayeeCompanyNameCodeInputField);
        steps.editDealPayee.editSelectRandomValueForPayeeCompanyNameCode();
        steps.base.scrollIntoView("Scope", pages.editDealPayee.elems.editScopePayeeSelectAllScopes);
        //steps.editDealPayee.editAssociateSpecificScopeNumberIToPayee(i);
        pages.editDealPayee.setPayeeSelectAllScopes(false);
        steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
        steps.editDealPayee.editFillIntoPayeeDistributionInputField();
        steps.editDealPayee.editSavePayeeForm();
    });
};
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

exports.editSelectRandomValueForPayeeCompanyNameCode = function () {
    it("Edit select the random value for payee company name/code ", function () {
        pages.editDealPayee.editSelectTheRandomValueForPayeeCompanyNameCode();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editAssociateRandomScopeToPayee = function () {
    it("Edit associate random scope to payee ", function () {
        pages.editDealPayee.editAssociateTheRandomScopeToPayee();
    });
};

exports.editAssociateSpecificScopeNumberIToPayee = function (i) {
    it("Edit associate specific  scope to payee number " + i, function () {
        pages.editDealPayee.editAssociateTheSpecificScopeNumberIToPayee(i);
    });
};

exports.editSavePayeeForm = function () {
    it("Edit save the payee form ", function () {
        pages.editDealPayee.editSaveThePayeeForm();
        pages.editDealPayee.waitForAjax();
    });
};

exports.editSavePayeePage = function () {
    it("Edit save the payee page ", function () {
        pages.editDealPayee.editSaveThePayeePage();
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

exports.editFillIntoPayeeDistributionInputField = function () {
    it("Edit fill into payee distribution input field", function () {
        pages.editDealPayee.editFillIntoThePayeeDistributionInputField();
    });
};

exports.editCheckScopesAssociatedToPayee = function (i) {
    it("Check the scope number " + i + "  is associated to payee ", function () {
        pages.editDealPayee.editCheckScopeNumberIAssociatedToPayee(i);
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

exports.itEditAddPayeePersonAndAssociateScope = function (payee_name,i) {
    describe("Edit add payee as person and associate random scope ", function () {
        steps.editDealPayee.editSelectRandomPayeePersonFromDropDown(payee_name);
        steps.base.scrollIntoView("Company", pages.editDealPayee.elems.editPayeeCompanyNameCodeInputField);
        steps.editDealPayee.editSelectRandomValueForPayeeCompanyNameCode();
        steps.base.scrollIntoView("Scope", pages.editDealPayee.elems.editScopePayeeInputField);
        steps.editDealPayee.editAssociateSpecificScopeNumberIToPayee(i);
        steps.editDealPayee.editFillIntoPayeeLegalRightInputField();
        steps.editDealPayee.editFillIntoPayeeDistributionInputField();
        steps.editDealPayee.editSavePayeeForm();
    });
};
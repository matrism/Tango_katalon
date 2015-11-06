"use strict";

var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;

steps.createDealPayee = exports;

exports.selectRandomPayeeOrganisationFromDropDown = function () {
    it("Select the random payee organisation from drop down ", function () {
        pages.createDealPayee.fillIntoAddNewPayeeFieldSpecificValue("payee");
        pages.createDealPayee.selectTheRandomPayeeOrganisationFromDropDown();
    });
};

exports.selectRandomPayeePersonFromDropDown = function () {
    it("Select the random payee person from drop down ", function () {
        pages.createDealPayee.fillIntoAddNewPayeeFieldSpecificValue("payee");
        pages.createDealPayee.selectTheRandomPayeePersonFromDropDown();
    });
};

exports.selectRandomValueForPayeeCompanyNameCode = function () {
    it("Select the random value for payee company name/code ", function () {
        pages.createDealPayee.selectTheRandomValueForPayeeCompanyNameCode();
        pages.createDealPayee.waitForAjax();
    });
};

exports.associateRandomScopeToPayee = function () {
    it("Associate random scope to payee ", function () {
        pages.createDealPayee.associateTheRandomScopeToPayee();
    });
};

exports.associateSpecificScopeNumberIToPayee = function (i) {
    it("Associate specific  scope to payee number " + i, function () {
        pages.createDealPayee.associateTheSpecificScopeNumberIToPayee(i);
    });
};

exports.savePayeeForm = function () {
    it("Save the payee form ", function () {
        pages.createDealPayee.saveThePayeeForm();
    });
};

exports.cancelPayeeForm = function () {
    it("Cancel the payee form ", function () {
        pages.createDealPayee.cancelThePayeeForm();
    });
};

exports.fillIntoPayeeLegalRightInputField = function(){
    it("Fill into payee legal right input field", function(){
        pages.createDealPayee.fillIntoThePayeeLegalRightInputField();
    });
};

exports.fillIntoPayeeDistributionInputField = function(){
    it("Fill into payee distribution input field", function(){
        pages.createDealPayee.fillIntoThePayeeDistributionInputField();
    });
};

exports.itAddPayeeOrganisationAndAssociateScope = function () {
    describe("Add payee as organisation and associate random scope ", function () {
        steps.createDealPayee.selectRandomPayeeOrganisationFromDropDown();
        steps.base.scrollIntoView("Company", pages.createDealPayee.elems.payeeCompanyNameCodeInputField);
        steps.createDealPayee.selectRandomValueForPayeeCompanyNameCode();
        steps.base.scrollIntoView("Scope", pages.createDealPayee.elems.scopePayeeInputField);
        steps.createDealPayee.associateSpecificScopeNumberIToPayee(1);
        steps.createDealPayee.fillIntoPayeeLegalRightInputField();
        steps.createDealPayee.fillIntoPayeeDistributionInputField();
        steps.createDealPayee.savePayeeForm();
    });
};

exports.itAddPayeePersonAndAssociateScope = function () {
    describe("Add payee as person and associate random scope ", function () {
        steps.createDealPayee.selectRandomPayeePersonFromDropDown();
        steps.base.scrollIntoView("Company code", element(by.css("div[data-ng-model='payee.company'] div[ng-class='tgTypeaheadWrapClass']")));
        steps.createDealPayee.selectRandomValueForPayeeCompanyNameCode();
        steps.base.scrollIntoView("Scope", pages.createDealPayee.elems.scopePayeeInputField);
        steps.createDealPayee.associateSpecificScopeNumberIToPayee(2);
        steps.createDealPayee.fillIntoPayeeLegalRightInputField();
        steps.createDealPayee.fillIntoPayeeDistributionInputField();
        steps.createDealPayee.savePayeeForm();
    });
};
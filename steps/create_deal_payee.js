"use strict";
var pages_path = _tf_config._system_.path_to_pages;
var steps_path = _tf_config._system_.path_to_steps;
var promise = protractor.promise;
var ExpectedConditions = protractor.ExpectedConditions;
require(pages_path + "create_deal_payee");
require(steps_path + "create_deal_payee");

if (steps.create_deal_payee === undefined) {
    steps.create_deal_payee = {

        selectRandomPayeeOrganisationFromDropDown: function () {
            it("Select the random payee organisation from drop down ", function () {
                pages.create_deal_payee.fillIntoAddNewPayeeFieldSpecificValue("payee");
                pages.create_deal_payee.selectTheRandomPayeeOrganisationFromDropDown();
            });
        },

        selectRandomPayeePersonFromDropDown: function () {
            it("Select the random payee person from drop down ", function () {
                pages.create_deal_payee.fillIntoAddNewPayeeFieldSpecificValue("payee");
                pages.create_deal_payee.selectTheRandomPayeePersonFromDropDown();
            });
        },

        selectRandomValueForPayeeCompanyNameCode: function () {
            it("Select the random value for payee company name/code ", function () {
                pages.create_deal_payee.selectTheRandomValueForPayeeCompanyNameCode();
                pages.create_deal_payee.waitForAjax();
            });
        },

        associateRandomScopeToPayee: function () {
            it("Associate random scope to payee ", function () {
                pages.create_deal_payee.associateTheRandomScopeToPayee();
            });
        },

        associateSpecificScopeNumberIToPayee: function (i) {
            it("Associate specific  scope to payee number " + i, function () {
                pages.create_deal_payee.associateTheSpecificScopeNumberIToPayee(i);
            });
        },

        savePayeeForm: function () {
            it("Save the payee form ", function () {
                pages.create_deal_payee.saveThePayeeForm();
            });
        },

        cancelPayeeForm: function () {
            it("Cancel the payee form ", function () {
                pages.create_deal_payee.cancelThePayeeForm();
            });
        },

        fillIntoPayeeLegalRightInputField:function(){
            it("Fill into payee legal right input field", function(){
               pages.create_deal_payee.fillIntoThePayeeLegalRightInputField();
            });
        },

        fillIntoPayeeDistributionInputField:function(){
            it("Fill into payee distribution input field", function(){
                pages.create_deal_payee.fillIntoThePayeeDistributionInputField();
            });
        },

        itAddPayeeOrganisationAndAssociateScope: function () {
            describe("Add payee as organisation and associate random scope ", function () {
                steps.create_deal_payee.selectRandomPayeeOrganisationFromDropDown();
                steps.create_deal_payee.selectRandomValueForPayeeCompanyNameCode();
                steps.base.scrollIntoView("Scope", pages.create_deal_payee.elems.scopePayeeInputField);
                steps.create_deal_payee.associateSpecificScopeNumberIToPayee(1);
                steps.create_deal_payee.fillIntoPayeeLegalRightInputField();
                steps.create_deal_payee.fillIntoPayeeDistributionInputField();
                steps.base.scrollIntoView("Save ", pages.create_deal_payee.elems.savePayeeFormButton);
                steps.create_deal_payee.savePayeeForm();
            });
        },

        itAddPayeePersonAndAssociateScope: function () {
            describe("Add payee as person and associate random scope ", function () {
                steps.create_deal_payee.selectRandomPayeePersonFromDropDown();
                steps.create_deal_payee.selectRandomValueForPayeeCompanyNameCode();
                steps.base.scrollIntoView("Scope", pages.create_deal_payee.elems.scopePayeeInputField);
                steps.create_deal_payee.associateSpecificScopeNumberIToPayee(2);
                steps.create_deal_payee.fillIntoPayeeLegalRightInputField();
                steps.create_deal_payee.fillIntoPayeeDistributionInputField();
                steps.base.scrollIntoView("Save ", pages.create_deal_payee.elems.savePayeeFormButton);
                steps.create_deal_payee.savePayeeForm();
            });
        }

    }
}